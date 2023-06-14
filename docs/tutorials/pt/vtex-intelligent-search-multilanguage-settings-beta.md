---
title: VTEX Intelligent Search: configurações Multi-idioma (Beta)
id: 2WahlTESLXIJ9XBdQMdTYO
status: PUBLISHED
createdAt: 2021-03-09T22:44:16.513Z
updatedAt: 2023-03-30T17:45:54.079Z
publishedAt: 2023-03-30T17:45:54.079Z
firstPublishedAt: 2021-03-10T21:13:35.816Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: vtex-intelligent-search-configuracoes-multi-idioma-beta
legacySlug: vtex-intelligent-search-configuracoes-multi-idioma-beta
subcategory: 23WdCYqmn2V2Z7SDlc14DF
---

<div class="alert alert-info">
<p>Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

O [VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) é um aplicativo de busca inteligente para ecommerce que está disponível para lojas desenvolvidas usando o [VTEX IO](https://vtex.com/br-pt/store-framework/). Para instalar e configurar o VTEX Intelligent Search na sua loja, leia o nosso guia [Search](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search). A ferramenta exibe sugestões de busca e de produtos que possam interessar o usuário, além de corrigir erros ortográficos e entender palavras que não estão no cadastro do produto.

O VTEX Intelligent Search Multi-idioma expande as funcionalidades do [Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) e oferece uma experiência de pesquisa multi-idioma, ideal para lojas que realizam operações em diversos países. Esse recurso facilita a adaptação da loja para vários idiomas e garante a busca em todos os idiomas cadastrados.

<div class="alert alert-info">
<p> Caso você deseje expandir o seu ecommerce para outro idioma, entre em contato com o <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a> para que o time da VTEX realize as configurações necessárias.</p>
</div>

Com o VTEX Intelligent Search Multi-idioma instalado, as informações do Catálogo da loja são traduzidas pelo aplicativo [Messages](https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization). Para isso, você deve cadastrar previamente como traduzíveis os termos dos seguintes campos: __Nome__, __Marca__, __Descrição__, __Categorias__, __CategoryTrees__, __metadata__, __metadataKeyword__, __Especificações__, __SKU {name}__.

<div class="alert alert-warning">
  <p> Se um termo não possui tradução cadastrada no <strong>Messages</strong>, sua tradução é realizada por um serviço automático, exceto no caso do campo <strong>Marca</strong>. Por isso, é importante <a href="https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization">cadastrar a tradução de todos os campos</a> para evitar efeitos indesejados, como traduções literais que não refletem a língua utilizada em determinada região. Sem o cadastro do termo correto, o nome de um produto como “whole milk", por exemplo, corre o risco de ser traduzido automaticamente para "leite inteiro" em vez de "leite integral".</p>
</div>

A partir da [Multi-Tenant API](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-multi-language-stores), o VTEX Intelligent Search Multi-idioma obtém todos os locais e respectivos idiomas (exemplos: `pt-br`, `en-uk`) registrados na loja. Cada local possui uma URL própria.

Ao navegar na loja, quando o cliente escolhe um idioma, ele é redirecionado para a URL do local desejado. A partir disso, todas as funcionalidades do Intelligent Search passam a funcionar no idioma escolhido, de acordo com as configurações estabelecidas pelo lojista.

O VTEX Intelligent Search Multi-idioma permite que você personalize a experiência de busca para cada região, atribuindo as seguintes configurações de pesquisa a locais específicos:

- [Regras de merchandising](#regras-de-merchandising)
- [Sinônimos](#sinonimos)
- [Redirecionamentos](#redirecionamentos) 
- [Banners](#banners) 

### Regras de merchandising
Com o VTEX Intelligent Search Multi-idioma instalado, a página de edição ou criação de Regras de merchandising — encontrada no Admin VTEX em __Storefront__ > __Intelligent Search__ > __Regras de merchandising__ — apresenta o campo adicional __Idiomas__, que possibilita escolher a quais idiomas a Regra de Merchandising será aplicada através da seleção dos idiomas desejados, conforme mostrado na figura abaixo.

![img regrasmerch intelligentsearchmultilanguage PT](https://images.ctfassets.net/alneenqid6w5/3Pv8xpcvB43bLALrijD1UO/000fe10fd8752c5996afdea9a4bc8e9a/01-merchrules-pt.png)

Para saber mais sobre os campos, leia nosso artigo sobre [como configurar Regras de merchandising no VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/2FpbarYzsnbg7aZZn3TGF8).

### Sinônimos
Existem duas formas de configurar Sinônimos em uma loja multi-idioma no Admin: preencher um formulário ou importar um arquivo `.csv`.

<div class="alert alert-warning">
  <p> Configurações criadas ou alteradas em <b>Sinônimos</b> podem levar até 2 horas para serem aplicadas na loja. </p>
</div>

#### Criar Sinônimos via formulário
Com o VTEX Intelligent Search Multi-idioma instalado, a página de edição ou criação de Sinônimos — encontrada no Admin VTEX em __Storefront__ > __Intelligent Search__ > __Sinônimos__ — apresenta o campo adicional __Idiomas__, que possibilita escolher a quais idiomas os Sinônimos cadastrados serão aplicados, conforme a imagem abaixo. Clique nos idiomas desejados para selecioná-los.

![img sinonimos intelligentsearchmultilanguage PT](https://images.ctfassets.net/alneenqid6w5/12CjlIh67TyloFOBPkE72x/d513d8a4b124aa077b447ce9a1d4adb8/02-sinonimos-pt.png)

Para saber mais sobre os campos, leia nosso artigo sobre [como configurar Sinônimos no VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL).

#### Importar planilha de Sinônimos

Caso prefira fazer a importação de Sinônimos para idiomas específicos por arquivo `.csv`, você deve criar um arquivo `.csv` no formato __Unidirecional__ ou __Bidirecional__, de acordo com o [efeito desejado para o sinônimo](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL), e inserir o novo campo `<locales separados por vírgula>`:

- __Unidirecional__: `<Termos separados por vírgula>;<Termos expandidos separados por vírgula>;<status>;<locales separados por vírgula>`
   - Exemplo: `smartphone;iphone;true;en-GB`: ao pesquisar por `smartphone` na loja no idioma inglês (`locale en-GB`), os resultados para `iphone` irão aparecer. Contudo, ao pesquisar por `iphone`, os resultados para `smartphone` não irão aparecer.

- __Bidirecional__: `<Termos separados por vírgula>;<status>;<locales separados por vírgula>`
    - Exemplo: `tv,smart tv;true;en-GB`: ao pesquisar por qualquer um dos termos na loja no idioma inglês (`locale en-GB`), qualquer produto que contenha um desses termos irá aparecer nos resultados da busca.

<div class="alert alert-warning">
<p> Se o arquivo .csv importado não apresentar a coluna `locale`, o sinônimo será válido para todos os idiomas disponíveis na loja.</p>
</div>

Para saber mais sobre a importação de planilha de Sinônimos, leia nosso artigo sobre [como configurar Sinônimos no VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL).

### Redirecionamentos

Com o VTEX Intelligent Search Multi-idioma instalado, a página de edição ou criação de Redirecionamentos — encontrada no Admin VTEX em __Storefront__ > __Intelligent Search__ > __Redirecionamentos__ — apresenta o campo adicional __Idiomas__, que possibilita escolher a quais idiomas os Redirecionamentos cadastrados serão aplicados, conforme a imagem abaixo. Clique nos idiomas desejados para selecioná-los.

![img redirecionamentos intelligentsearchmultilanguage PT](https://images.ctfassets.net/alneenqid6w5/2f245NNeb0APEgeQGj6bTg/38bda1599742284c81ed067b2330514d/03-redirecionamentos-pt.png)

Para saber mais sobre os campos, leia nosso artigo sobre [como configurar Redirecionamentos no VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4Gd2wLQFbCwTsh8RUDwSoL).

### Banners

Com o VTEX Intelligent Search Multi-idioma instalado, a página de edição ou criação de Banners — encontrada no Admin VTEX em __Storefront__ > __Banners__ — apresenta o campo adicional __Idiomas__, que possibilita escolher a quais idiomas os Banners cadastrados serão aplicados, conforme a imagem abaixo. Clique nos idiomas desejados para selecioná-los.

![img banner intelligentsearchmultilanguage PT](https://images.ctfassets.net/alneenqid6w5/2TeFZzq8LxaVApotGBfemL/9c5e675df49840e3fa4db7437f866524/image_8.png)

Para saber mais sobre os campos, leia nosso artigo sobre [como configurar Banners no VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5).
