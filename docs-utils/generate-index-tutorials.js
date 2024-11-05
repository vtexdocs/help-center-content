const fs = require('fs');
const path = require('path');
const https = require('https');

// Initiate a GET request to the specified URL
async function getNavigation() {
  return new Promise((resolve, reject) => {
    https.get('https://raw.githubusercontent.com/vtexdocs/helpcenter/refs/heads/main/public/navigation.json', (res) => {
      let data = '';

      // 'data' event is triggered when a chunk of data is received from the server
      res.on('data', (chunk) => {
        // Append each chunk of data to the 'data' variable
        data += chunk;
      });

      // 'end' event is triggered when the entire response has been received
      res.on('end', () => {
        try {
          // Parse the data and resolve the promise
          resolve(JSON.parse(data));
        } catch (err) {
          // If there's an error parsing the JSON, reject the promise
          reject(new Error('Error parsing JSON: ' + err.message));
        }
      });
    }).on('error', (err) => {
      // If there's an error with the request, reject the promise
      reject(err);
    });
  });
}

const navigation = await getNavigation()

console.log(navigation)


const locales = ['pt', 'en', 'es']; // List of locales
const baseDirectories = locales.map(locale => path.join(__dirname, '..', 'docs', locale, 'tutorials')); // Base paths for tutorial folders

// Mapping of folders to titles in Portuguese and Spanish
const titleMap = {
  Catalog: {
    pt: 'Catálogo Tutorial Index',
    es: 'Catálogo Tutorial Index',
  },
  'About the Admin': {
    pt: 'Admin Tutorial Index',
    es: 'Admin Tutorial Index',
  },
  'Account management': {
    pt: 'Gerenciamento da conta Tutorial Index',
    es: 'Gestión de cuenta Tutorial Index',
  },
  'Authentication': {
    pt: 'Autenticação Tutorial Index',
    es: 'Autenticación Tutorial Index',
  },
  'Billing': {
    pt: 'Faturas Tutorial Index',
    es: 'Facturas Tutorial Index',
  },
  'Infrastructure': {
    pt: 'Infraestrutura Tutorial Index',
    es: 'Infraestructura Tutorial Index',
  },
  'Integrations': {
    pt: 'Integrações Tutorial Index',
    es: 'Integraciones Tutorial Index',
  },
  'Message center': {
    pt: 'Central de mensagens Tutorial Index',
    es: 'Centro de mensajes Tutorial Index',
  },
  'Orders': {
    pt: 'Pedidos Tutorial Index',
    es: 'Pedidos Tutorial Index',
  },
  'Others': {
    pt: 'Outros Tutorial Index',
    es: 'Otros Tutorial Index',
  },
  'Payments': {
    pt: 'Pagamentos Tutorial Index',
    es: 'Pagos Tutorial Index',
  },
  'Prices': {
    pt: 'Preços Tutorial Index',
    es: 'Precios Tutorial Index',
  },
  'Projects & Integrations': {
    pt: 'Projetos & Integrações Tutorial Index',
    es: 'Proyectos e Integraciones Tutorial Index',
  },
  'Promotions & taxes': {
    pt: 'Promoções e taxas Tutorial Index',
    es: 'Promociones y tasas Tutorial Index',
  },
  'Security': {
    pt: 'Segurança Tutorial Index',
    es: 'Seguridad Tutorial Index',
  },
  'Shipping': {
    pt: 'Envio Tutorial Index',
    es: 'Envío Tutorial Index',
  },
  'Store Settings': {
    pt: 'Configurações da loja Tutorial Index',
    es: 'Configuraciones de la tienda Tutorial Index',
  },
  'Subscriptions': {
    pt: 'Assinaturas Tutorial Index',
    es: 'Suscripciones Tutorial Index',
  },
  'Trade policies': {
    pt: 'Políticas de comércio Tutorial Index',
    es: 'Políticas comerciales Tutorial Index',
  },
  'Unified Commerce': {
    pt: 'Comércio Unificado Tutorial Index',
    es: 'Comercio Unificado Tutorial Index',
  },
  'Admin overview': {
    pt: 'Admin - Visão geral',
    es: 'Admin - Visión general',
  },
  'Access control': {
    pt: 'Controle de acesso',
    es: 'Control de acceso',
  },
  'Account Management overview': {
    pt: 'Gerenciamento de conta - Visão geral',
    es: 'Gestión de cuentas - Visión general',
  },
  'Account settings': {
    pt: 'Configuração de conta',
    es: 'Configuración de cuenta',
  },
  'Accounts': {
    pt: 'Contas',
    es: 'Cuentas',
  },
  'Users': {
    pt: 'Usuários',
    es: 'Usuarios',
  },
  'Apps Overview': {
    pt: 'Apps - Visão geral',
    es: 'Apps - Visión general',
  },
  'Authentication basics': {
    pt: 'Autenticação - Básico',
    es: 'Autenticación- Básico',
  },
  'Authentication Settings': {
    pt: 'Autenticação - Configurações',
    es: 'Autenticación- Configuración',
  },
  'Two-factor authentication': {
    pt: 'Autenticação multifator (2FA)',
    es: 'Autenticación multifactor (2FA)',
  },
  'B2B Organizations': {
    pt: 'B2B - Organizações',
    es: 'B2B - Organizaciones',
  },
  'B2B Quotes': {
    pt: 'B2B - Cotações',
    es: 'B2B - Cotizaciones',
  },
  'Organization details': {
    pt: 'B2B - Detalhes de organizações',
    es: 'B2B - Detalles de la organización',
  },
  'Storefront permissions': {
    pt: 'Storefront - Permissões',
    es: 'Storefront - Permisos',
  },
  'Overview': {
    pt: 'Visão geral',
    es: 'Visíon general',
  },
  'Contracts': {
    pt: 'Contratos',
    es: 'Contratos',
  },
  'Brands': {
    pt: 'Marcas',
    es: 'Marcas',
  },
  'Catalog - Overview': {
    pt: 'Catálogo - Visão geral',
    es: 'Catálogo - Visión general',
  },
  'Categories': {
    pt: 'Categorias',
    es: 'Categorias',
  },
  'Collection': {
    pt: 'Coleção',
    es: 'Colección',
  },
  'Commercial conditions': {
    pt: 'Condições comerciais',
    es: 'Condiciones comerciales',
  },
  'Import and export': {
    pt: 'Importação e exportação',
    es: 'Importar y exportar',
  },
  'List types': {
    pt: 'Tipos de lista',
    es: 'Tipos de lista',
  },
  'Products and SKUs': {
    pt: 'Produtos e SKUs',
    es: 'Productos y SKUs',
  },
  'Reports': {
    pt: 'Relatórios',
    es: 'Informes',
  },
  'XML integration': {
    pt: 'Integração XML',
    es: 'Integración XML',
  },
  'Checkout overview': {
    pt: 'Checkout - Visão geral',
    es: 'Checkout - Visión general',
  },
  'Checkout Settings': {
    pt: 'Checkout - Configurações',
    es: 'Checkout - Configuración',
  },
  'Dashboards in the VTEX Admin': {
    pt: 'Dashboards - VTEX Admin',
    es: 'Dashboards - VTEX Admin',
  },
  'Integration Settings': {
    pt: 'Integrações - Configurações',
    es: 'Integraciones - Configuración',
  },
  'Integration overview': {
    pt: 'Integrações - Visão geral',
    es: 'Integraciones - Visión general',
  },
  'Inventory': {
    pt: 'Estoque',
    es: 'Stock',
  },
  'Offer management': {
    pt: 'Gerenciamento de anúncios',
    es: 'Gestipon de anuncios',
  },
  'Price': {
    pt: 'Preços',
    es: 'Precios',
  },
  'Products': {
    pt: 'Produtos',
    es: 'Productos',
  },
  'Intelligent Search behavior': {
    pt: 'Intelligent Search - Comportamento',
    es: 'Intelligent Search - Comportamiento',
  },
  'Intelligent Search Overview': {
    pt: 'Intelligent Search - Visão geral',
    es: 'Intelligent Search - Visión general',
  },
  'Intelligent Search Settings': {
    pt: 'Intelligent Search - Configurações',
    es: 'Intelligent Search - Configuración',
  },
  'Relevance': {
    pt: 'Relevância',
    es: 'Relevancia',
  },
  'Synonyms': {
    pt: 'Sinonimos',
    es: 'Sinónimos',
  },
  'Customer relations management': {
    pt: 'Gestão de relacionamento com o cliente',
    es: 'Gestión de relaciones con el cliente',
  },
  'Master Data basics': {
    pt: 'Master Data - Básico',
    es: 'Master Data - Básico',
  },
  'Master Data Settings': {
    pt: 'Master Data - Configurações',
    es: 'Master Data - Configuración',
  },
  'Master Data v1 applications': {
    pt: 'Master Data v1 - Aplicações',
    es: 'Master Data v1 - Aplicaciones',
  },
  'Master Data v1 settings': {
    pt: 'Master Data v1 - Configurações',
    es: 'Master Data v1 - Configuración',
  },
  'Master Data\'s overview': {
    pt: 'Master Data - Visão geral',
    es: 'Master Data - Visión general',
  },
  'Omnichannel overview': {
    pt: 'Omnichannel - Visão geral',
    es: 'Omnichannel - Visión general',
  },
  'Omnichannel Settings': {
    pt: 'Omnichannel - Configurações',
    es: 'Omnichannel - Configuración',
  },
  'All orders': {
    pt: 'Todos os pedidos',
    es: 'Todos los pedidos',
  },
  'B2B orders': {
    pt: 'B2B - Pedidos',
    es: 'B2B - Pedidos',
  },
  'Orders Management Settings': {
    pt: 'Configurações de gerenciamento de pedidos',
    es: 'Configuración de gestión de pedidos',
  },
  'Orders overview': {
    pt: 'Pedidos - Visão geral',
    es: 'Pedidos - Visión general',
  },
  'Telesales and customer service': {
    pt: 'Televendas e atendimento ao cliente',
    es: 'Televenta y atención al cliente',
  },
  'ERP integration': {
    pt: 'ERP - Integrações',
    es: 'ERP - Integraciones',
  },
  'Scheduling features': {
    pt: 'Recursos de agendamento',
    es: 'Funciones de programación',
  },
  'Bank conciliation': {
    pt: 'Conciliação bancária',
    es: 'Conciliación bancaria',
  },
  'Gift card': {
    pt: 'Vale-presente',
    es: 'Tarjeta de regalo',
  },
  'Payment Settings': {
    pt: 'Pagamentos - Configurações',
    es: 'Pagos - Configuración',
  },
  'Payments overview': {
    pt: 'Pagamentos - Visão geral',
    es: 'Pagos - Visión general',
  },
  'Transactions': {
    pt: 'Transações',
    es: 'Transacciones',
  },
  'Price list': {
    pt: 'Lista de preços',
    es: 'Lista de precios',
  },
  'Price rules': {
    pt: 'Regras de preços',
    es: 'Reglas de precios',
  },
  'Price Settings': {
    pt: 'Configurações de preços',
    es: 'Configuración de precios',
  },
  'Rounding Rules': {
    pt: 'Arredondamento de preços',
    es: 'Redondeo de precios',
  },
  'Integration methods': {
    pt: 'Métodos de integração',
    es: 'Métodos de integración',
  },
  'Integration with monitoring tools': {
    pt: 'Integração com ferramentas de monitoramento',
    es: 'Integración con herramientas de monitoreo',
  },
  'Campaign Audiences': {
    pt: 'Audiências de campanhas',
    es: 'Audiencias de campañas',
  },
  'Coupons': {
    pt: 'Cupons',
    es: 'Cupones',
  },
  'Promotions': {
    pt: 'Promoções',
    es: 'Promociones',
  },
  'Taxes': {
    pt: 'Taxas',
    es: 'Tajas',
  },
  'Information security compliance': {
    pt: 'Conformidade de segurança da informação',
    es: 'Cumplimiento de la seguridad de la información',
  },
  'Platform security resources': {
    pt: 'Recursos de segurança da plataforma',
    es: 'Funciones de seguridad de la plataforma',
  },
  'Store security': {
    pt: 'Segurança da loja',
    es: 'Seguridad de la tienda',
  },
  'Categories and brands': {
    pt: 'Categorias e marcas',
    es: 'Categorias y marcas',
  },
  'Management': {
    pt: 'Gerenciamento',
    es: 'Gestión',
  },
  'Received SKUs': {
    pt: 'SKUs recebidos',
    es: 'SKUs recibidos',
  },
  'Sellers Overview': {
    pt: 'Sellers - Visão geral',
    es: 'Sellers - Visión general',
  },
  'SKU binding': {
    pt: 'Vinculação de SKU',
    es: 'Vinculación de SKU',
  },
  'Geolocation shipping': {
    pt: 'Envio - Geolocalização',
    es: 'Envío - Geolocalización',
  },
  'Holidays': {
    pt: 'Feriados',
    es: 'Feriados',
  },
  'Inventory & shipping overview': {
    pt: 'Estoque & Envio - Visão geral',
    es: 'Stock & Envío - Visión general',
  },
  'Inventory and Shipping Settings': {
    pt: 'Estoque & Envio - Configurações',
    es: 'Stock & Envío - Configuración',
  },
  'Logistics Overview': {
    pt: 'Logística - Visão geral',
    es: 'Logística - Visión general',
  },
  'Pickup points': {
    pt: 'Pontos de retirada',
    es: 'Pontos de recogida',
  },
  'Shipping rates': {
    pt: 'Taxas de envio',
    es: 'Tarifas de envío',
  },
  'Shipping simulator': {
    pt: 'Simulador de envio',
    es: 'Tarifas de envío',
  },
  'Shipping Strategy': {
    pt: 'Estratégia de envio',
    es: 'Estrategia de envío',
  },
  'Best practices for the success of your VTEX store': {
    pt: 'Melhores práticas para o sucesso da sua loja VTEX',
    es: 'Mejores prácticas para el éxito de su tienda VTEX',
  },
  'Store Settings Overview': {
    pt: 'Configurações da loja - Visão geral',
    es: 'Configuraciones de la tienda - Visión general',
  },
  'Store Settings - Storefront': {
    pt: 'Storefront - Configurações de loja',
    es: 'Storefront - Configuraciones de la tienda',
  },
  'Storefront Overview': {
    pt: 'Storefront - Visão geral',
    es: 'Storefront - Visión general',
  },
  'Styles': {
    pt: 'Estilos',
    es: 'Estilos',
  },
  'Subscription Guides': {
    pt: 'Guias de assinatura',
    es: 'Guías de suscripción',
  },
  'Financial': {
    pt: 'Financeiro',
    es: 'Financiero',
  },
  'Operational': {
    pt: 'Operacional',
    es: 'Operacional',
  },
  'Trade Policies Settings': {
    pt: 'Políticas comerciais - Configurações',
    es: 'Políticas Comerciales - Configuración',
  },
  'Trade Policies\' overview': {
    pt: 'Políticas comerciais - Visão geral',
    es: 'Políticas Comerciales - Visión general',
  },
  'Indicators': {
    pt: 'Indicadores',
    es: 'Indicadores',
  },
  'Overview VTEX Tracking': {
    pt: 'VTEX Tracking - Visão geral',
    es: 'VTEX Tracking - Visión general',
  },
  'Routes': {
    pt: 'Rotas',
    es: 'Rutas',
  },
  'Services': {
    pt: 'Serviços',
    es: 'Servicios',
  },
  'Services': {
    pt: 'Serviços',
    es: 'Servicios',
  },
  // Add other mappings as needed
};

// Function to extract title and status from a Markdown file
function getTitleAndStatusFromMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const titleMatch = content.match(/title:\s*(.+)/);
  const statusMatch = content.match(/status:\s*(.+)/);

  const title = titleMatch ? titleMatch[1].trim().replace(/['"]/g, '') : path.basename(filePath, '.md');
  const status = statusMatch ? statusMatch[1].trim() : null;

  return { title, status };
}

// Function to generate Markdown content from a directory
function generateMarkdown(directory, locale) {
  let markdown = '';
  const items = fs.readdirSync(directory);
  let hasPublishedMarkdown = false; // Flag to check if any published Markdown exists
  const publishedArticles = []; // Array to store published articles

  items.forEach(item => {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    // If the item is a directory, recurse into it
    if (stats.isDirectory()) {
      const subMarkdown = generateMarkdown(itemPath, locale);
      if (subMarkdown) {
        const localizedTitle = titleMap[item]?.[locale] || item; // Get localized title or use folder name
        markdown += `- **${localizedTitle}**\n\n${subMarkdown}\n`;
        hasPublishedMarkdown = true;
      }
    } 
    // If the item is a Markdown file
    else if (stats.isFile() && item.endsWith('.md')) {
      const { title, status } = getTitleAndStatusFromMarkdown(itemPath);
      if (status === 'PUBLISHED') {
        const fileName = path.basename(itemPath, '.md').replace(/tutorials/g, 'tutorial');
        const baseURL = `${locale}/docs/tutorial`;
        const localizedTitle = titleMap[title]?.[locale] || title; // Get localized title or use original title
        
        // Correct link generation for published articles
        publishedArticles.push(`  - [${localizedTitle}](${baseURL}/${fileName})`);
        hasPublishedMarkdown = true;
      }
    }
  });

  // Sort and add published articles to the markdown
  if (publishedArticles.length > 0) {
    publishedArticles.sort();
    markdown += publishedArticles.join('\n') + '\n\n';
  }

  return hasPublishedMarkdown ? markdown : ''; // Return markdown only if there are published articles
}

// Function to create index files in subfolders
function createIndexFilesInSubfolders(directory, locale) {
  const items = fs.readdirSync(directory);

  items.forEach(item => {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    // If the item is a directory, generate index
    if (stats.isDirectory()) {
      const subMarkdown = generateMarkdown(itemPath, locale);
      if (subMarkdown) {
        const sanitizedItemName = item.replace(/\s+/g, '-').toLowerCase();
        const indexFileName = `index-${locale}-tutorials-${sanitizedItemName}.md`;
        const indexFilePath = path.join(itemPath, indexFileName);

        const createdAt = new Date().toISOString(); // Current date and time
        const title = titleMap[item]?.[locale] || item; // Localized title or fallback

        // Prepare content for the index file
        const content = `---\n` +
                        `title: '${title}'\n` +
                        `id: ${generateId()}\n` + // Generate a unique ID
                        `status: PUBLISHED\n` +
                        `createdAt: ${createdAt}\n` +
                        `updatedAt: ${createdAt}\n` +
                        `publishedAt: \n` +
                        `firstPublishedAt: ${createdAt}\n` +
                        `contentType: tutorial\n` +
                        `productTeam: To be defined\n` +
                        `slugEN: ${sanitizedItemName}\n` +
                        `locale: ${locale}\n` +
                        `---\n\n` +
                        `${subMarkdown}`;

        fs.writeFileSync(indexFilePath, content, 'utf8'); // Create the index file
        //console.log(`Index generated at ${indexFilePath}`); // Log the creation of the index
      }
    }
  });
}

// Function to generate a unique ID (can use any method you prefer)
function generateId() {
  return Math.random().toString(36).substring(2, 15); // Example of a random ID
}

// Create indices for all locales
locales.forEach(locale => {
  const baseDirectory = path.join(__dirname, '..', 'docs', locale, 'tutorials');

  // Check if the directory exists before processing
  if (fs.existsSync(baseDirectory)) {
    //console.log(`Processing directory: ${baseDirectory}`); // Debugging log
    createIndexFilesInSubfolders(baseDirectory, locale); // Create index files for the locale
  } else {
    console.error(`Directory does not exist: ${baseDirectory}`); // Log error if directory doesn't exist
  }
});