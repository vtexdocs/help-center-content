---
title: 'Configurando SEO em sua loja Store Framework'
id: 1sKskEsjUSvgHyqM8oknVR
status: PUBLISHED
createdAt: 2024-04-29T19:07:56.533Z
updatedAt: 2024-09-02T16:13:57.395Z
publishedAt: 2024-09-02T16:13:57.395Z
firstPublishedAt: 2024-04-29T19:26:31.511Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: YRJ73j8mt38D5TUleocQB
slugEN: configuring-seo-in-your-store
locale: pt
legacySlug: configurando-seo-em-sua-loja
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

O SEO (Search Engine Optimization) é uma das mais importantes estratégias para que seu site alcance bons posicionamentos orgânicos nas páginas de resultados dos motores de busca. A configuração de tags, metatags e favicon faz parte desse conjunto de estratégias para otimizar a performance do seu site. 

A tag de título ajuda a definir o assunto da página para os motores de busca e influencia diretamente no clique dos usuários nos resultados de pesquisa. A tag de descrição fornece aos usuários uma ideia do que podem encontrar no site. A metatag robots controla o comportamento de rastreamento e indexação dos mecanismos de pesquisa.

Em todas as lojas VTEX IO é possível configurar esses parâmetros nativamente, seguindo as etapas abaixo.

### Passo a passo

#### Tag de título, tag de descrição e metatag robots

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Loja**.
2. Clique na aba **Geral**.
3. Preencha os campos conforme as orientações a seguir:
  - **Nome da loja**: insira o nome da sua loja.
  - **Habilitar configuração por vínculo**: essa configuração é válida somente para lojas que possuem múltiplos bindings. Ao habilitar essa opção, é possível realizar configurações específicas de tags e metatags para cada um dos bindings da loja. No caso de lojas com um único binding, basta manter essa opção desmarcada.
  - **Tag de título padrão**: forneça uma descrição concisa e que inclua palavras-chave relevantes. O valor atribuído a esta tag aparece na parte superior da barra de título do navegador quando alguém visita uma página do site da sua loja.
  - **Tag de descrição meta**: forneça uma breve descrição do conteúdo da página. Deve ser informativa e conter palavras-chave relevantes.
  - **Metatag robots**: especifique como os motores de busca devem rastrear e indexar uma página específica. Os valores padrão são `index, follow`. Para saber quais outros valores compatíveis com o Google, consulte a [lista de regras válidas](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=pt-br#directives). 

  ![seo-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Store Settings - Storefront/configurando-seo-em-sua-loja_1.png)

### Favicons

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Loja**.
2. Clique na aba **Geral**.
3. Clique em **Adicionar**.

  ![favicon-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Store Settings - Storefront/configurando-seo-em-sua-loja_2.png)

4. Abrirá uma nova tela, que deve ser preenchida conforme as orientações a seguir:
    - **Relação do favicon**: defina a relação entre a URL configurada no campo
    - **href do favicon** e o favicon do site. Atribuir o valor `icon`, por exemplo, indica que a URL configurada está relacionada ao ícone do site.
    - **Tipo de mídia do favicon** (Opcional): especifique o tipo do favicon, seguindo os padrões do HTML e da W3C. Consulte a documentação [HTML Favicon](https://www.w3schools.com/html/html_favicon.asp) para saber mais.
    - **Tamanho do favicon** (Opcional): indique as dimensões do favicon no formato {largura}x{altura}, como, por exemplo, 180x180.
    - **href do favicon**: insira a URL completa que aponta para o local onde está armazenado o arquivo do favicon.

    Veja o exemplo a seguir:

    ![relacao-favicon-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Store Settings - Storefront/configurando-seo-em-sua-loja_3.png)

5. Clique em **Aplicar** para que as configurações reflitam em sua loja, o que pode levar alguns minutos.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
O campo <strong>Caminho do termo de busca</strong> é uma configuração legada que era compatível com o <code>vtex.search-resolver@0.x</code>.
</div>
