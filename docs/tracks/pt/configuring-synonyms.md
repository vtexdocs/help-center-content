---
title: 'Configurar Sinônimos'
id: 3ExbC3QKNF4zH7Gs8jD1cL
status: PUBLISHED
createdAt: 2019-11-29T12:04:33.557Z
updatedAt: 2023-03-30T19:19:37.658Z
publishedAt: 2023-03-30T19:19:37.658Z
firstPublishedAt: 2020-03-05T19:56:02.826Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: configurar-sinonimos
locale: pt
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

Existem duas formas de configurar sinônimos no Admin VTEX: [individualmente](#criar-sinonimos-individualmente) ou por [importação de uma planilha em formato CSV](#importar-csv). Se você precisa cadastrar sinônimos em massa, recomendamos utilizar a planilha. Confira as instruções para cada forma de configuração nas seções a seguir.

A configuração de sinônimos funciona de maneira recursiva. Isso significa que, ao adicionar um segundo sinônimo a outro já existente, ele também se tornará sinônimo do primeiro. 

<div class="alert alert-info" role="alert">
<p>Sinônimos não devem ser utilizados para resolver erros de grafia, de plural e singular ou mesmo de pronomes, de artigos e de proposições nos termos pesquisados. Em todos estes pontos, o VTEX Intelligent Search é capaz de interpretar, aprender e resolver automaticamente por meio de algoritmos.</p>
</div>

## Criar sinônimos individualmente

Siga o passo a passo para configurar sinônimos individualmente no Admin VTEX:

1. No Admin VTEX, acesse __Storefront__, ou digite __Storefront__ na barra de busca no topo da página.
2. Em **Intelligent Search**, clique em **Sinônimos**.
3. Clique em `Novo`.
4. Preencha os campos referentes ao sinônimo:
   - __Tipo:__ define o tipo de sinônimo. Confira [Tipos de sinônimos](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#tipos-de-sinonimos) para mais informações.
   - __Termos:__ palavras ou expressões a serem definidas como sinônimos. É necessário teclar `Enter` após cada termo para inserir um outro termo.
   - __Status:__ define se o sinônimo estará ativo ou inativo.
5. Para finalizar, clique em `Salvar`.

A alteração pode demorar até duas horas para ser aplicada.

<div class = "alert alert-info">
  <p>Essa funcionalidade está disponível no VTEX Intelligent Search Multi-idioma. Leia o nosso artigo <a href="https://help.vtex.com/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO#sinonimos">VTEX Intelligent Search: configurações Multi-idioma (Beta)</a> para saber mais.</p>
</div>

## Importar CSV

Caso existam muitos sinônimos a serem cadastrados, você pode fazer um arquivo .csv e depois importá-lo no Admin VTEX. O arquivo deve conter o seguinte formato, de acordo com os [tipos de sinônimos](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#tipos-de-sinonimos) escolhidos:

 - **Unidirecional**: `{termos separados por vírgula};{termos expandidos separados por vírgula};{status}`

   __Exemplos:__

    - `smartphone;iphone;true`: ao pesquisar por `smartphone`, os resultados para `iphone` serão exibidos. Contudo, ao pesquisar por `iphone`, os resultados para `smartphone` não serão exibidos.
    - `tablet;ipad;true`: ao pesquisar por `tablet`, os resultados para `ipad` serão exibidos. Contudo, ao pesquisar por `ipad`, os resultados para `tablet` não serão exibidos.

 - **Bidirecional**: `{termos separados por vírgula};{status}`

   __Exemplos:__

    - `tv,televisão,televisor;true`: ao pesquisar por qualquer um dos ternos, qual produto que contenha um deles será exibido.
    - `monitor,tela,display;true`: ao pesquisar por qualquer um dos ternos, qualquer produto que contenha um deles será exibido.

Para importar a planilha, siga os passos abaixo:

1. No Admin VTEX, acesse __Storefront__, ou digite __Storefront__ na barra de busca no topo da página.
2. Em **Intelligent Search**, clique em **Sinônimos**.
3. Clique em `Importar`.
