---
title: 'VTEX Intelligent Search: configurações Multi-idioma'
id: 2WahlTESLXIJ9XBdQMdTYO
status: PUBLISHED
createdAt: 2021-03-09T22:44:16.513Z
updatedAt: 2023-07-26T19:15:24.855Z
publishedAt: 2023-07-26T19:15:24.855Z
firstPublishedAt: 2021-03-10T21:13:35.816Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-intelligent-search-multilanguage-settings
legacySlug: vtex-intelligent-search-configuracoes-multi-idioma-beta
locale: pt
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

O [VTEX Intelligent Search](/pt/docs/tracks/visao-geral-intelligent-search) é um aplicativo de busca inteligente para ecommerce que está disponível para lojas desenvolvidas usando o [VTEX IO](https://developers.vtex.com/docs/guides/store-framework). Para instalar e configurar o VTEX Intelligent Search na sua loja, leia o nosso guia [Search](https://developers.vtex.com/docs/guides/search-overview). A ferramenta exibe sugestões de busca e de produtos que possam interessar o usuário, além de corrigir erros ortográficos e entender palavras que não estão no cadastro do produto.

O VTEX Intelligent Search Multi-idioma expande as funcionalidades do [Intelligent Search](/pt/docs/tracks/visao-geral-intelligent-search) e oferece uma experiência de pesquisa multi-idioma, ideal para lojas que realizam operações em diversos países. Esse recurso facilita a adaptação da loja para vários idiomas e garante a busca em todos os idiomas cadastrados.

> ℹ️  Caso você deseje expandir o seu ecommerce para outro idioma, entre em contato com o [nosso Suporte](https://support.vtex.com/hc/pt-br/requests) para que o time da VTEX realize as configurações necessárias.

Com o VTEX Intelligent Search Multi-idioma instalado, as informações do Catálogo da loja precisam ser traduzidas para que possam ser exibidas em cada idioma configurado na loja. Existem duas formas de gerenciar as traduções do Catálogo:

- **[Catalog multi-language](https://developers.vtex.com/docs/guides/catalog-multi-language-integration-guide)** (recomendado): a solução mais recente, que utiliza endpoints REST dedicados.
- **[Messages](https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization)** (legado): uma abordagem baseada em GraphQL que utiliza o aplicativo `catalog-graphql`.

> ⚠️ Essas duas abordagens são mutuamente exclusivas. Depois que o Catalog multi-language for ativado na sua conta, não será mais possível gerenciar as traduções do Catálogo pelo Messages (GraphQL).

Os campos disponíveis para tradução são diferentes entre as duas abordagens:

| Entidade | Campos no Catalog multi-language | Campos no Messages (legado) |
| --- | --- | --- |
| Produtos | Name, Title, Description, MetaTagDescription, DescriptionShort, Keywords, LinkId | Nome, palavras-chave, título da página, descrição, descrição curta, meta tag description, URL slug (somente lojas cross-border) |
| Categorias | Name, Title, Description, Keywords, LinkId | Nome, palavras-chave, título da página, meta tag description, URL slug (somente lojas cross-border) |
| Marcas | Name, Text, Keywords, SiteTitle, LinkId | Nome, palavras-chave, título da página, meta tag description, URL slug (somente lojas cross-border) |
| SKUs | Name, MeasurementUnit | Nome |
| Especificações | Name, Description | Nome, descrição e valores |
| Valores de especificação | Name | Incluído em Especificações |
| Grupos de especificação | Name | Não suportado |
| Coleções | Name, Description, LinkId | Não suportado |
| Serviços | Name, Text | Não suportado |

Leia os guias para desenvolvedores [Catalog multi-language](https://developers.vtex.com/docs/guides/catalog-multi-language-integration-guide) e [Tradução do conteúdo do catálogo com o Messages](https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization) para mais informações.

O VTEX Intelligent Search Multi-idioma obtém todos os locais e respectivos idiomas (exemplos: `pt-br`, `en-uk`) configurados na loja. Cada local possui a sua própria URL.

Ao navegar na loja, quando o cliente escolhe um idioma, ele é redirecionado para a URL do local desejado. A partir disso, todas as funcionalidades do Intelligent Search passam a funcionar no idioma escolhido, de acordo com as configurações estabelecidas pelo lojista.

O VTEX Intelligent Search Multi-idioma permite que você personalize a experiência de busca para cada região, atribuindo as seguintes configurações de pesquisa a locais específicos:

- [Regras de merchandising](#regras-de-merchandising)
- [Sinônimos](#sinonimos)
- [Redirecionamentos](#redirecionamentos) 
- [Banners](#banners) 

### Regras de merchandising
Com o VTEX Intelligent Search Multi-idioma instalado, a página de edição ou criação de Regras de merchandising — encontrada no Admin VTEX em __Storefront__ > __Intelligent Search__ > __Regras de merchandising__ — apresenta o campo adicional __Idiomas__, que possibilita escolher a quais idiomas a Regra de Merchandising será aplicada através da seleção dos idiomas desejados, conforme mostrado na figura abaixo.

![img regrasmerch intelligentsearchmultilanguage PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/intelligent-search/multi-idioma/vtex-intelligent-search-configuracoes-multi-idioma_1.png)

Para saber mais sobre os campos, leia nosso artigo sobre [como configurar Regras de merchandising no VTEX Intelligent Search](/pt/docs/tutorials/criar-regra-de-merchandising-editor-manual).

### Sinônimos
Existem duas formas de configurar Sinônimos em uma loja multi-idioma no Admin: preencher um formulário ou importar um arquivo `.csv`.

> ⚠️  Configurações criadas ou alteradas em **Sinônimos** podem levar até 2 horas para serem aplicadas na loja. 

#### Criar Sinônimos via formulário
Com o VTEX Intelligent Search Multi-idioma instalado, a página de edição ou criação de Sinônimos — encontrada no Admin VTEX em __Storefront__ > __Intelligent Search__ > __Sinônimos__ — apresenta o campo adicional __Idiomas__, que possibilita escolher a quais idiomas os Sinônimos cadastrados serão aplicados, conforme a imagem abaixo. Clique nos idiomas desejados para selecioná-los.

![img sinonimos intelligentsearchmultilanguage PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/intelligent-search/multi-idioma/vtex-intelligent-search-configuracoes-multi-idioma_2.png)

Para saber mais sobre os campos, leia nosso artigo sobre [como configurar Sinônimos no VTEX Intelligent Search](/pt/docs/tutorials/criar-sinonimos).

#### Importar planilha de Sinônimos

Caso prefira fazer a importação de Sinônimos para idiomas específicos por arquivo `.csv`, você deve criar um arquivo `.csv` no formato __Unidirecional__ ou __Bidirecional__, de acordo com o [efeito desejado para o sinônimo](/pt/docs/tutorials/criar-sinonimos), e inserir o novo campo `<locales separados por vírgula>`:

- __Unidirecional__: `<Termos separados por vírgula>;<Termos expandidos separados por vírgula>;<status>;<locales separados por vírgula>`
   - Exemplo: `smartphone;iphone;true;en-GB`: ao pesquisar por `smartphone` na loja no idioma inglês (`locale en-GB`), os resultados para `iphone` irão aparecer. Contudo, ao pesquisar por `iphone`, os resultados para `smartphone` não irão aparecer.

- __Bidirecional__: `<Termos separados por vírgula>;<status>;<locales separados por vírgula>`
    - Exemplo: `tv,smart tv;true;en-GB`: ao pesquisar por qualquer um dos termos na loja no idioma inglês (`locale en-GB`), qualquer produto que contenha um desses termos irá aparecer nos resultados da busca.

> ⚠️  Se o arquivo .csv importado não apresentar a coluna `locale`, o sinônimo será válido para todos os idiomas disponíveis na loja.

Para saber mais sobre a importação de planilha de Sinônimos, leia nosso artigo sobre [como configurar Sinônimos no VTEX Intelligent Search](/pt/docs/tutorials/criar-sinonimos).

### Redirecionamentos

Com o VTEX Intelligent Search Multi-idioma instalado, a página de edição ou criação de Redirecionamentos — encontrada no Admin VTEX em __Storefront__ > __Intelligent Search__ > __Redirecionamentos__ — apresenta o campo adicional __Idiomas__, que possibilita escolher a quais idiomas os Redirecionamentos cadastrados serão aplicados, conforme a imagem abaixo. Clique nos idiomas desejados para selecioná-los.

![img redirecionamentos intelligentsearchmultilanguage PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/intelligent-search/multi-idioma/vtex-intelligent-search-configuracoes-multi-idioma_3.png)

Para saber mais sobre os campos, leia nosso artigo sobre [como configurar Redirecionamentos no VTEX Intelligent Search](/pt/docs/tutorials/configurar-redirecionamentos).

### Banners

Com o VTEX Intelligent Search Multi-idioma instalado, a página de edição ou criação de Banners — encontrada no Admin VTEX em __Storefront__ > __Banners__ — apresenta o campo adicional __Idiomas__, que possibilita escolher a quais idiomas os Banners cadastrados serão aplicados, conforme a imagem abaixo. Clique nos idiomas desejados para selecioná-los.

![img banner intelligentsearchmultilanguage PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/intelligent-search/multi-idioma/vtex-intelligent-search-configuracoes-multi-idioma_4.png)

Para saber mais sobre os campos, leia nosso artigo sobre [como configurar Banners no VTEX Intelligent Search](/pt/docs/tutorials/configurar-banners).
