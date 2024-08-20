const fs = require('fs');
const path = require('path');

// Caminho para o diretório 'docs'
const docsDir = path.resolve(__dirname, '../docs');

// Função para processar cada arquivo Markdown
const processFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Substituir termos específicos
    if (line.includes('<div class="alert alert-info">')) {
      lines[i] = line.replace('<div class="alert alert-info">', '> ℹ️');
      lines[i] = lines[i].replace('</div>', '');
    } else if (line.includes('<div class="alert alert-warning">')) {
      lines[i] = line.replace('<div class="alert alert-warning">', '> ⚠️');
      lines[i] = lines[i].replace('</div>', '');
    } else if (line.includes('<div class="alert alert-danger">')) {
      lines[i] = line.replace('<div class="alert alert-danger">', '> ❗');
      lines[i] = lines[i].replace('</div>', '');
    }

    // Transformar links
    if (line.includes('<a href=')) {
      const linkMatch = line.match(/<a href="([^"]+)">([^<]+)<\/a>/);
      if (linkMatch) {
        const url = linkMatch[1];
        const text = linkMatch[2];
        lines[i] = `${text}`;
      }
    }

    // Remover tags <p>
    lines[i] = lines[i].replace(/<\/?p>/g, '');
  }

  const newData = lines.join('\n');
  fs.writeFileSync(filePath, newData, 'utf8');
  console.log(`Arquivo atualizado: ${filePath}`);
};

// Função para processar arquivos em diretórios recursivamente
const processDirectory = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        processDirectory(filePath);
      } else if (stats.isFile() && filePath.endsWith('.md')) {
        processFile(filePath);
      }
    });
  });
};

// Iniciar processamento no diretório 'docs'
processDirectory(docsDir);
