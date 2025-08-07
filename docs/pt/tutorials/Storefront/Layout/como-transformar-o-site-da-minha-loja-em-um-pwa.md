---
title: 'Como transformar o site da minha loja em um PWA'
id: 3i8VmYeToAUGKgo2kKK6I2
status: PUBLISHED
createdAt: 2018-03-19T18:20:25.794Z
updatedAt: 2025-02-27T19:52:00.583Z
publishedAt: 2025-02-27T19:52:00.583Z
firstPublishedAt: 2018-03-20T14:54:55.189Z
contentType: tutorial
productTeam: Others
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: how-to-turn-my-store-website-into-a-pwa
legacySlug: como-transformar-o-site-da-minha-loja-em-um-pwa
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-info">
  <p>Este artigo é válido apenas para lojas utilizando o CMS Portal (Legado).</p>
</div>

Progressive Web App (PWA) é um conjunto de técnicas usadas para desenvolver aplicações web e adicionar funcionalidades que antes eram restritas a aplicativos nativos.

- **Progressivo:** funciona em qualquer navegador.
- **Responsivo:** se adapta a qualquer dispositivo, seja desktop, tablet ou mobile.
- **Independente de conexão:** funciona mesmo quando o usuário estiver offline.
- **Semelhante ao app:** oferece experiência de uso comparável a aplicativos nativos.
- **Atualizado:** não é necessário baixar atualizações, pois o Service Worker permite que o navegador detecte e atualize automaticamente quando necessário.
- **Seguro:** exige conexão HTTPS.
- **Engajável:** permite notificações push para interação com o usuário.
- **Instalável:** é possível adicionar um ícone na tela principal do dispositivo móvel, sem precisar acessar uma app store.
- **Compartilhável:** seu compartilhamento é facilitado por URL, sem instalação complexa.

Se você já tem um site ou uma aplicação web, pode implementar aos poucos as características que definem um PWA, como notificações, cache de arquivos, execução em modo offline e outras possibilidades que fazem o usuário se sentir em um aplicativo nativo.

<div class="alert alert-warning">
A VTEX <strong>não</strong> oferece soluções nativas para conversão em PWA no CMS Portal (Legado). A VTEX fornece, no entanto, a infraestrutura básica para implementação manual. Lojas desenvolvidas com o VTEX IO Store Framework possuem este recurso nativamente.</div>

## Instruções

### Crie o arquivo manifest.json

O arquivo `manifest.json` do aplicativo web fornece informações sobre um aplicativo (como nome, autor, ícone e descrição) em um arquivo de texto JSON. Sua criação tem como objetivo transformar uma aplicação web em algo instalável em um smartphone.

Para criar o JSON, siga o passos abaixo:

1. No Admin VTEX, acesse **Configurações da Loja > Storefront > Checkout**.
2. Clique no ícone da engrenagem ⚙️ do site desejado.
3. Na aba `Código`, clique em `Novo`.
4. Escolha a opção `Arquivo`.
5. No campo **Nome do arquivo**, digite `manifest.json`.
6. Insira as informações do aplicativo (como nome, ícone e descrição), conforme o exemplo abaixo:

    ```json
    {
      "name": "Minha Loja",
      "short_name": "Loja",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#fff",
      "theme_color": "#2F3DB2",
      "icons": [{
        "src": "/arquivos/icon.png",
        "sizes": "192x192",
        "type": "image/png"
      }]
    }
    ```

7. Clique em `Salvar`.

<div class="alert alert-info"> <p><strong>Dica:</strong> Utilize ícones em resolução mínima de 192x192px e formate cores hexadecimais conforme sua identidade visual.</p> </div>

### Adicione o arquivo `manifest.json` ao aplicativo web

Após criar o arquivo `manifest.json`, adicione a seguinte linha dentro da seção `<head>` do seu arquivo `index.html`:

```
<link rel="manifest" href="/arquivos/manifest.json">
```

Com isso, sua aplicação web poderá abrir um splash screen exatamente igual a aplicativos nativos.

### Crie um Service Worker

Service Worker é um script que seu navegador executa em segundo plano, separado da web, possibilitando recursos como sincronização periódica, notificações push e execução em modo offline.

Para criar o script, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da Loja > Storefront > Checkout**.
2. Clique no ícone da engrenagem ⚙️ do site desejado.
3. Na aba `Código`, clique em `Novo`
4. Escolha a opção `Arquivo`.
5. No campo **Nome do arquivo**, digite `service-worker.js`.
6. Programe a funcionalidade, conforme o exemplo abaixo:

    ```js
    // --- CONFIGURAÇÕES DO CACHE ---
    // Define a versão do cache para facilitar atualizações futuras

    const CACHE = 'cache-v1';

    // Lista de recursos críticos para pré-cache (páginas, CSS, imagens)
    const FILES = ['/', '/arquivos/main.css', '/arquivos/logo.jpg'];

    // --- EVENTO DE INSTALAÇÃO ---
    // Executado uma vez quando o Service Worker é registrado

    self.addEventListener('install', (e) => {
       // Abre o cache e armazena os recursos definidos
      e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
    });

    // --- EVENTO DE FETCH ---
    // Intercepta todas as requisições de rede da página

    self.addEventListener('fetch', (e) => {
      // Estratégia Cache First:
      // 1. Tenta responder com recurso do cache
      // 2. Se não encontrado, busca na rede

      e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
    });
    ```

7. Clique em **Salvar**.

Embora o arquivo esteja em `/arquivos/service-worker.js`, ele recebe o header `Service-Worker-Allowed` com valor `/`, o que permite interceptar requests da raiz do site.

<div class="alert alert-warning"> <p><strong>Atenção:</strong> O Service Worker só funcionará em ambientes HTTPS. Teste sempre em produção ou utilize tunnels seguros em desenvolvimento.</p> </div>

Para saber mais sobre Service Worker, consulte a documentação do Google [Web Fundamentals](https://developers.google.com/web/fundamentals/primers/service-workers/).

### Verifique a implementação do seu PWA

Para garantir que seu site esteja no caminho certo na construção do seu PWA, utilize ferramentas de inspeção, como o Lighthouse do Google.

Para inspecionar seu site com o Lighthouse, siga os os passos abaixo:

1. Baixe a extensão do Lighthouse no seu navegador.
2. Acesse o site da sua loja.
3. Clique no widget da ferramenta.
4. Aguarde a análise e visualize o feedback gerado.

Para saber mais, veja o guia [Getting started with Lighthouse](https://developers.vtex.com/docs/guides/storefront-getting-started-with-lighthouse) do Developers Portal da VTEX.
