---
title: 'CMS - Portal Legado'
id: 1oN446gRGcR2s70RvBCAmj
status: PUBLISHED
createdAt: 2022-01-10T20:17:10.358Z
updatedAt: 2024-08-06T16:52:09.507Z
publishedAt: 2024-08-06T16:52:09.507Z
firstPublishedAt: 2022-01-10T20:41:44.261Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: legacy-cms-portal
locale: pt
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugEN: cms
order: 3
---

## Layout

A seção [Layout](/pt/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW) permite que você crie seu storefront usando HTML e CSS. Ela é organizada em pastas e arquivos com as funções descritas abaixo.

![CMS - Layout PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-portal-legado_1.png)

- **HTML Templates:** criar o código HTML e os arquivos JavaScript e CSS de referência que serão usados nas páginas do site.

- **Shelves Templates:** gerenciar os templates de prateleiras, ou seja, os componentes responsáveis pela renderização de um grupo de produtos no storefront.

- **Custom Elements:** criar as condições necessárias para implementar componentes reutilizáveis, como rodapés, em outras partes da loja.

- **URL Builder:** redirecionar as URLs existentes para outras de interesse. Isso evitará erros de indexação e ajudará a manter os resultados de SEO.

- **Files Manager:** carregar arquivos de imagem no site da sua loja. Você pode armazenar JavaScript, CSS e arquivos de imagem do site. Caso queira usar algum desses arquivos na sua loja, você deve referenciá-los na seção **HTML Templates**.

- **Product Cluster (Collections):** criar grupos de produtos. Você pode usar esse recurso para criar páginas de Campanhas ou de Coleções de Produtos com clusters de produtos específicos.

- **Sites and Channels:** configurar [o binding da sua loja](/pt/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W) e outras configurações do Gerenciador de Licenças. Para saber mais, consulte o artigo [estrutura das pastas do CMS](/pt/tutorial/cms-folder-structure--2RdMaJSv4AK4EyscmQuocu).

## Configurações

A seção [Configurações](/pt/subcategory/configuracoes-de-cms--6kovkwzMRyeOOc2iEC4suM) permite que você defina configurações relacionadas ao site da sua loja, como metadados, tags de SEO, tipos de arquivos, etc. 

![CMS - Settings PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-portal-legado_2.png)

A seção **Configurações** contém as seguintes abas:

- **Gerais:** configurações gerais relacionadas aos metadados e às opções de compra da loja, como o título da página inicial e a quantidade máxima de SKUs no carrinho.
- **SEO:** opções de personalização de palavras-chave e meta tags de SEO.
- **Textos da loja:** banco de dados de variáveis de texto reutilizáveis que são renderizadas no storefront.
- **Tipos de arquivos:** configurações relacionadas aos arquivos de ativos, como dimensões e tamanho da imagem. 
- **Regiões geográficas:** banco de dados das regiões geográficas onde os produtos da loja estão disponíveis.

## Estrutura de pastas CMS Legado

Na VTEX, toda nova conta já dispõe de pastas pré-instaladas no seu CMS. Entretanto, algumas delas são __obrigatórias__. 

Ou seja, se sua loja não tiver essas pastas - __com os nomes exatamente iguais__ aos que indicamos neste artigo - você terá problemas de navegação e de indexação.

A demais pastas são apenas __sugestões__ por serem úteis à maioria das lojas. Mas a sua ausência não afeta uma conta em nada.

### Pastas obrigatórias

Toda loja precisa ter, sem exceção, as seguintes pastas no CMS para garantir o correto funcionamento da navegação e da indexação:
- Busca
- Categoria
- Departamento
- Login
- Produto

Veja abaixo estas pastas básicas no CMS:

![2 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-portal-legado_3.png)

Estas pastas vêm por padrão no ambiente de todas as lojas VTEX.

> ⚠️ Atenção: os nomes das pastas obrigatórias **não** devem ser alterados.

Como as pastas se referem a páginas dinâmicas, seus nomes não aparecem na navegação do cliente. 

Isso significa que a edição dos nomes ser vetada não afeta o texto final das suas URLs nem, portanto, a internacionalização do seu site.

Desse modo, os nomes dos layouts podem ser editados sem nenhum problema.

### Pastas importantes

Algumas pastas do CMS não são obrigatórias, mas são úteis. Por isso, indicamos que você não as exclua.

São elas:
- `/account`: conta do cliente
- `/account/orders`: pedidos do cliente

Para estas duas pastas, o que importa é o controle ou placeholder que lê o conteúdo delas. Seus nomes delas podem ser livremente editados.

> ℹ️ Tanto `/account` quanto `/account/orders` são pastas privadas. Por isso, ambas requerem autenticação. Veja no artigo [Exigir autenticação em páginas da loja](/pt/tutorial/exigir-autenticacao-em-paginas-da-loja) como garantir que elas estejam configuradas para pedir autenticação do usuário.

### Pastas úteis

Há pastas que, embora não sejam tão importantes quanto as anteriores, costumam ser úteis para grande parte das lojas. 

São elas:
- `/sistema/buscavazia`: pasta para onde o usuário é direcionado caso a busca não encontre resultados.
- `/sistema/{codigoHTTP}`: pasta que renderiza páginas de erros de acordo com os códigos de status HTTP, tais como 404 (página não encontrada), 401 (não autorizado) e 500 (erro de servidor).
- `/marcas`: pasta que contém layouts de páginas de marca, que podem ser customizadas com um layout exclusivo. Se não houver layout específico para marcas, estas páginas serão renderizadas iguais à pasta busca. Para entender como funcionam páginas de marca, veja o artigo [Como funciona a busca da VTEX](/pt/tutorial/como-funciona-a-busca-da-vtex).

## Controles nativos da VTEX

Controles são trechos de código que você pode utilizar nos templates do seu site para realizar ações específicas.

Na VTEX, você encontra uma série de controles nativos para renderizar diversas funcionalidades.

Por exemplo, usando o controle `<vtex.cmc:productName/>` em uma página de produto, o sistema fornecerá o nome do produto para ser exibido na tela.

Para adicionar um controle, basta colá-lo no código. O resultado será renderizado na posição do código onde ele for adicionado.

### Lista de controles nativos da VTEX

Você pode conferir todos os controles nativos disponíveis e seus respectivos usos no artigo [Lista de controles para templates](/pt/tutorial/lista-de-controles-para-templates).

## Referências

- [Layout](/pt/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW)
- [Configurações](/pt/subcategory/configuracoes-de-cms--6kovkwzMRyeOOc2iEC4suM)
- [O que são templates?](/pt/tutorial/o-que-sao-templates--4l7BQBYO9ycumsqua2CU88?&utm_source=autocomplete)
- [O que é um web site?](/pt/tutorial/o-que-e-um-web-site--5sPUdFEv9C02i0MMqqSo0U?&utm_source=autocomplete)
- [O que são controles?](/pt/tutorial/o-que-sao-controles--6e2qsk9zu8IQuyEysKweag?&utm_source=autocomplete)
- [O que são layouts?](/pt/tutorial/o-que-sao-layouts--CckPh00rZIcIUG60y8Gse?&utm_source=autocomplete)
- [O que são prateleiras?](/pt/tutorial/o-que-sao-prateleiras--28D8d6GFfuAsuAoeWC8eq0?&utm_source=autocomplete)
- [O que é binding?](/pt/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W?&utm_source=autocomplete)

## Guides
- **[Criar e editar um template de página](/pt/tutorial/como-criar-um-template-de-pagina--frequentlyAskedQuestions_1850):** Aprenda a criar template de página. O template de página é um modelo criado para definir uma estrutura HTML para apresentação do conteúdo das páginas.

- **[Associar um template a um layout](/pt/tutorial/associando-um-template-a-um-layout--7CkgOHRj7DVbsRxyR8YQrK?&utm_source=autocomplete):** Associe um template a um layout usando a pasta Sites e canais.

- **[Gerenciando placeholders](/pt/tutorial/gerenciandoplaceholders--29Y7r9JqcWIqmGipReGLQI):** Um placeholder é um trecho de código configurável que atende a condições definidas pela loja. Insira e configure um placeholder, por exemplo, um banner na sua loja.

- **[Usando controles nativos da VTEX](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/7mGkGmo8l6wf4fXJCkWwPi?&utm_source=autocomplete):** Controles são trechos de código que você pode utilizar nos templates do seu site para realizar ações específicas, por exemplo, um controle em uma página de produto para exibir o nome do produto na tela.

- **[Para que serve o Controle Customizado?](/pt/tutorial/what-is-the-purpose-of-the-customized-control--frequentlyAskedQuestions_627):** Além dos controles nativos da VTEX, você pode criar seus próprios controles.

## Controles
- [Lista de controles para templates](/pt/tutorial/list-of-controls-for-templates--tutorials_563)
- [Controle de Busca - fulltextSearchBox](/pt/tutorial/controle-de-busca-fulltextsearchbox--tutorials_549?&utm_source=autocomplete)
- [Controle de destaque de coleção](/pt/tutorial/controle-de-destaque-de-colecao--1tGdb2ndjqy6yWsk2YwKMu?&utm_source=autocomplete)
- [Controle de breadcrumb](/pt/tutorial/controle-de-breadcrumb--3qQS5O9XpusAC6oUqSIQMM?&utm_source=autocomplete)
- [Controles do template de prateleira](/pt/tutorial/controles-do-template-de-prateleira--tutorials_550?&utm_source=autocomplete)

