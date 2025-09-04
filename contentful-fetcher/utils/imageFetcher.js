const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const https = require("https");
const http = require("http");
const { URL } = require("url");
const dns = require("dns").promises;

const baseURL =
  "https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/";

const isValidExtension = (ext) => /^[a-zA-Z0-9]*$/.test(ext);

const getExtension = (url) => {
  let dotIndex = url.lastIndexOf(".");
  if (dotIndex < 0) return "png"; // Default to 'png' if no extension
  const ext = url.substring(dotIndex + 1);
  return isValidExtension(ext) ? ext : "png";
};

function pLimit(concurrency) {
  let active = 0;
  const queue = [];
  const next = () => {
    active--;
    if (queue.length) queue.shift()();
  };
  return (fn) =>
    new Promise((resolve, reject) => {
      const run = () => {
        active++;
        fn()
          .then((v) => {
            resolve(v);
            next();
          })
          .catch((e) => {
            reject(e);
            next();
          });
      };
      if (active < concurrency) run();
      else queue.push(run);
    });
}
const limit = pLimit(4);

async function preflightHost(hostname) {
  try {
    const addrs = await dns.lookup(hostname, { all: true, family: 4 });
    if (!addrs.length) throw new Error("Sem IPv4 para o host");
    return true;
  } catch (e) {
    console.warn(`⚠️ DNS/IPv4 preflight falhou para ${hostname}: ${e.message}`);
    return false;
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function jitter(base) {
  return base * (0.5 + Math.random());
}

async function downloadWithRetry(
  fileUrl,
  destPath,
  { retries = 5, connectTimeoutMs = 8000, readTimeoutMs = 15000 } = {}
) {
  const u = new URL(fileUrl);
  const isHttps = u.protocol === "https:";
  const mod = isHttps ? https : http;

  const defaultAgent = isHttps
    ? new https.Agent({ keepAlive: true, family: 4 })
    : new http.Agent({ keepAlive: true, family: 4 });

  const chosenAgent = defaultAgent;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await fs.promises.mkdir(path.dirname(destPath), { recursive: true });

      await new Promise((resolve, reject) => {
        const req = mod.get(
          {
            hostname: u.hostname,
            path: u.pathname + u.search,
            protocol: u.protocol,
            port: u.port || (isHttps ? 443 : 80),
            headers: { "User-Agent": "vtex-image-fetcher/1.0" },
            agent: chosenAgent,
            timeout: connectTimeoutMs,
            family: 4,
          },
          (res) => {
            if (
              res.statusCode >= 300 &&
              res.statusCode < 400 &&
              res.headers.location
            ) {
              const loc = new URL(res.headers.location, u).toString();
              res.resume();
              downloadWithRetry(loc, destPath, {
                retries: retries - attempt + 1,
                connectTimeoutMs,
                readTimeoutMs,
              })
                .then(resolve)
                .catch(reject);
              return;
            }

            if (res.statusCode !== 200) {
              res.resume();
              reject(new Error(`HTTP ${res.statusCode} ao baixar ${fileUrl}`));
              return;
            }

            const file = fs.createWriteStream(destPath);
            const readTimer = setTimeout(() => {
              req.destroy(new Error("Read timeout"));
              res.destroy(new Error("Read timeout"));
            }, readTimeoutMs);

            res.pipe(file);
            file.on("finish", () => {
              clearTimeout(readTimer);
              file.close(resolve);
            });
            file.on("error", (err) => {
              clearTimeout(readTimer);
              reject(err);
            });
          }
        );

        req.on("timeout", () => req.destroy(new Error("Connect timeout")));
        req.on("error", reject);
      });

      return destPath;
    } catch (err) {
      const transient =
        [
          "ECONNRESET",
          "ETIMEDOUT",
          "EAI_AGAIN",
          "ENETUNREACH",
          "EHOSTUNREACH",
          "EPIPE",
        ].includes(err.code) || /timeout|TLS|socket hang up/i.test(err.message);
      if (attempt === retries || !transient) {
        err.message = `Falha ao baixar ${fileUrl} (tentativa ${attempt}/${retries}): ${err.message}`;
        throw err;
      }
      const delay = jitter(Math.min(2000 * 2 ** (attempt - 1), 20000));
      console.warn(
        `🔁 Retry ${attempt}/${retries} para ${fileUrl} em ${Math.round(
          delay
        )}ms — ${err.code || err.message}`
      );
      await sleep(delay);
    }
  }
}

const checkAndCompressImage = async (filePath) => {
  try {
    // Ensure the file is a GIF
    const fileExt = path.extname(filePath).toLowerCase();
    if (fileExt !== ".gif") return filePath;

    const stats = fs.statSync(filePath);
    const fileSizeInMB = stats.size / (1024 * 1024); // Convert bytes to MB

    if (fileSizeInMB > 100) {
      console.log(
        `🟡 ${filePath} > 100MB (${fileSizeInMB.toFixed(2)} MB). Comprimindo...`
      );
      const tempCompressedPath = filePath.replace(/(\.\w+)$/, "_compressed$1");

      await sharp(filePath, { limitInputPixels: 0, animated: true })
        .resize({ width: 800, withoutEnlargement: true })
        .gif({
          interFrameMaxError: 8,
          colours: 256,
          effort: 10,
          reoptimise: true,
        })
        .toFile(tempCompressedPath);

      fs.unlinkSync(filePath);
      fs.renameSync(tempCompressedPath, filePath);
      console.log(`♻️ Compressão concluída: ${filePath}`);
    } else {
      console.log(`🟢 ${filePath} OK (${fileSizeInMB.toFixed(2)} MB).`);
    }
    return filePath;
  } catch (error) {
    console.error(`❌ Erro ao checar/comprimir ${filePath}:`, error.message);
    return filePath;
  }
};

const imageFetcher = async (filepath) => {
  if (!filepath) {
    console.error("⚠️ Received undefined filePath in imageFetcher");
    return;
  }

  const resolvedFilepath = path.resolve(filepath); // Ensure the path is absolute
  const fileName = path.basename(resolvedFilepath);
  //console.log(`📄 Processing images in: ${fileName}`);

  if (!fs.existsSync(resolvedFilepath)) {
    console.error(`⛔ File not found: ${fileName}`);
    return;
  }
  await preflightHost("raw.githubusercontent.com");

  const content = fs.readFileSync(resolvedFilepath, "utf-8");

  const images = [];
  let imageIndex = 1;

  const replaceURL = (match, extra, url) => {
    const isMarkdownBlock = match.startsWith("![");
    if (url.startsWith(baseURL)) return match; // Skip processing for already processed URLs

    if (url.startsWith("//")) {
      url = `https:${url}`;
    }

    const ext = getExtension(url);
    const parsedPath = path.parse(resolvedFilepath); // Safely parse the path
    const newFilepath = path.join(
      parsedPath.dir,
      `${parsedPath.name}_${imageIndex}.${ext}`
    );

    images.push({ filepath: path.resolve(newFilepath), url });

    const encodedFilepath = encodeURI(
      path.relative(".", newFilepath).replace(/\\/g, "/")
    );
    const newURL = `${baseURL}${encodedFilepath}`;

    imageIndex++;

    return isMarkdownBlock
      ? `![${extra}](${newURL})`
      : `<img ${extra}src="${newURL}"`;
  };

  let newContent = content
    .replace(/\!\[([^\]]*?)\]\(([^)\s]+)\)/g, replaceURL)
    .replace(/<img ([^>]*?)\bsrc=["']([^"']+)["']/gi, replaceURL);

  try {
    const results = await Promise.allSettled(
      images.map((img) =>
        limit(async () => {
          console.log(`🔽 Downloading image: ${img.url}`);
          const out = await downloadWithRetry(img.url, img.filepath);
          await checkAndCompressImage(out);
          console.log(`✅ Downloaded image: ${img.filepath}`);
        })
      )
    );

    results.forEach((res, i) => {
      if (res.status === "rejected") {
        console.error("❌ Download failed:", res.reason?.message || res.reason);
      }
    });

    if (images.length > 0) {
      fs.writeFileSync(resolvedFilepath, newContent);
      console.log(`🖋️ Updated ${images.length} image paths for: ${fileName}`);
    } 
    //else {
    //  console.log(`ℹ️ No images found to process in: ${fileName}`);
    //}
  } catch (err) {
    console.error(`❌ Error updating images for: ${resolvedFilepath}`, err);
  }
};

if (require.main === module) {
  const filepath = process.argv[2]; // run with this command: node docs-utils/update-images.js "{fullFilePath}"
  imageFetcher(filepath);
}

module.exports = { imageFetcher };
