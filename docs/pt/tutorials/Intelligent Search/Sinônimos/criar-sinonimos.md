---
title: 'Criar sinônimos'
id: 5IfjhvjxNAvJGEWNn0AhOA
status: PUBLISHED
createdAt: 2024-06-27T16:36:30.904Z
updatedAt: 2024-06-27T16:39:00.981Z
publishedAt: 2024-06-27T16:39:00.981Z
firstPublishedAt: 2024-06-27T16:37:25.800Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: creating-synonyms
legacySlug: configurar-sinonimos
locale: pt
subcategoryId: BBzMtJan1UTxC9QZODnlN
---

<div class = "alert alert-info"> Para relacionar palavras ao produto, é recomendada a utilização da configuração de <a href="https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV?&utm_source=autocomplete">Sinônimos</a> ao invés das <a href="https://help.vtex.com/pt/tutorial/otimizar-as-buscas-com-palavras-substitutas--32FqSsl5VuQyiIMEc02Uwu?&utm_source=autocomplete">Palavras Substitutas</a>, uma vez que os sinônimos possibilitam uma gestão mais escalável de termos por produto. Para mais informações, entre em contato com nosso <a href="https://support.vtex.com/hc/pt-br/requests">Suporte</a>.</div>

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
   - **Idiomas:** idiomas aos quais o sinônimo será aplicado. Campo disponível apenas para lojas que utilizam [Configurações Multi-idioma (Beta)](https://help.vtex.com/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).
   - __Status:__ define se o sinônimo estará ativo ou inativo.
5. Para finalizar, clique em `Salvar`.

A alteração pode demorar até duas horas para ser aplicada.

<div class = "alert alert-info">
  <p>Essa funcionalidade está disponível no VTEX Intelligent Search Multi-idioma. Leia o nosso artigo <a href="https://help.vtex.com/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO#sinonimos">VTEX Intelligent Search: configurações Multi-idioma (Beta)</a> para saber mais.</p>
</div>

## Importar CSV

Caso existam muitos sinônimos a serem cadastrados, você pode fazer um arquivo .csv e depois importá-lo no Admin VTEX. 

Para importar sinônimos por planilha, siga os passos abaixo:

1. Crie um arquivo CSV no formato indicado em [Template da planilha de sinônimos](#template-da-planilha-de-sinonimos).
2. No Admin VTEX, acesse __Storefront__, ou digite __Storefront__ na barra de busca no topo da página.
3. Em **Intelligent Search**, clique em **Sinônimos**.
4. Clique em <i class="fas fa-download"></i> `Importar`.
5. Arraste o arquivo CSV para a área delimitada ou clique em `escolha um arquivo` para selecionar o arquivo no seu dispositivo.
6. Clique em `Importar`.

### Template da planilha de sinônimos

O arquivo deve conter o seguinte formato, de acordo com os [tipos de sinônimos](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#tipos-de-sinonimos) escolhidos:

 - **Unidirecional**: `{termos separados por vírgula};{termo equivalente};{status}`

   __Exemplos:__

    - `smartphone;iphone;true`: ao pesquisar por `smartphone`, os resultados para `iphone` serão exibidos. Contudo, ao pesquisar por `iphone`, os resultados para `smartphone` não serão exibidos.
    - `tablet;ipad;true`: ao pesquisar por `tablet`, os resultados para `ipad` serão exibidos. Contudo, ao pesquisar por `ipad`, os resultados para `tablet` não serão exibidos.

 - **Bidirecional**: `{termos separados por vírgula};{status}`

   __Exemplos:__

    - `tv,televisão,televisor;true`: ao pesquisar por qualquer um dos termos, qualquer produto que contenha um deles será exibido.
    - `monitor,tela,display;true`: ao pesquisar por qualquer um dos termos, qualquer produto que contenha um deles será exibido.

#### Lojas Multi-idioma (Beta)

Lojas que utilizam [Configurações Multi-idioma (Beta)](https://help.vtex.com/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO) devem seguir o template abaixo para fazer a importação de Sinônimos para idiomas específicos.

- __Unidirecional__: `{termos separados por vírgula};{termo equivalente};{status};{locales separados por vírgula}`

   __Exemplo:__
   - `smartphone;iphone;true;en-GB`: ao pesquisar por `smartphone` na loja no idioma inglês (`locale = en-GB`), os resultados para `iphone` irão aparecer. Contudo, ao pesquisar por `iphone`, os resultados para `smartphone` não irão aparecer.

- __Bidirecional__: `{termos separados por vírgula};{status};{locales separados por vírgula}`

     __Exemplo:__
     - `tv,smart tv;true;en-GB`: ao pesquisar por qualquer um dos termos na loja no idioma inglês (`locale = en-GB`), qualquer produto que contenha um desses termos irá aparecer nos resultados da busca.

<div class="alert alert-warning">
<p> Se o arquivo CSV importado não apresentar o <code>locale</code>, o sinônimo será válido para todos os idiomas disponíveis na loja.</p>
</div>
