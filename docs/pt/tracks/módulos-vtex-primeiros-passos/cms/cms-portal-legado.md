---
title: 'CMS Portal (Legado)'
id: 1oN446gRGcR2s70RvBCAmj
status: PUBLISHED
createdAt: 2022-01-10T20:17:10.358Z
updatedAt: 2026-04-29T18:54:39.664Z
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

O CMS Portal (Legado) foi o primeiro Content Management System (CMS) da VTEX e não está disponível para novas contas. Se você está usando o CMS Portal (Legado), pode continuar acessando e gerenciando o conteúdo da sua loja com base neste guia.

Para novas funcionalidades e recursos modernos, considere migrar para uma de nossas soluções de CMS mais recentes: **[CMS](https://developers.vtex.com/docs/guides/cms-for-faststore-storefronts)**, solução recomendada de CMS para lojas desenvolvidas com [FastStore](https://developers.vtex.com/docs/guides/faststore), ou **[Site Editor](/pt/docs/tutorials/site-editor-visao-geral)**, solução de CMS para lojas desenvolvidas com [Store Framework](https://developers.vtex.com/docs/guides/store-framework).

Neste guia, você aprenderá a usar o CMS Portal (Legado) para gerenciar o conteúdo da sua loja, incluindo a criação e organização de layouts, a configuração de páginas e a estrutura de pastas, além de conhecer os controles nativos da VTEX disponíveis para templates.

## Layout

A seção [Layout](/pt/docs/tutorials/layout-subcategoria) permite que você crie seu storefront com HTML e CSS.

![CMS - Layout PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-portal-legado_1.png)

Essa seção é organizada em pastas e arquivos que possuem as seguintes funções:

- **HTML Templates:** criar o código HTML e os arquivos JavaScript e CSS de referência a serem usados nas páginas do [site](/pt/docs/tutorials/o-que-e-um-web-site).

- **Shelves Templates:** gerenciar os [templates](/pt/docs/tutorials/o-que-sao-templates) de [prateleiras](/pt/docs/tutorials/o-que-sao-prateleiras), ou seja, os componentes responsáveis pela renderização de um grupo de produtos no storefront.

- **Custom Elements:** criar as condições necessárias para implementar componentes reutilizáveis, como rodapés, em outras áreas da loja.

- **URL Builder:** redirecionar as URLs existentes para outras de interesse. Isso evitará erros de indexação e ajudará a manter os resultados de SEO.

- **Files Manager:** carregar arquivos de imagem no site da sua loja. Você pode armazenar JavaScript, CSS e arquivos de imagem do site. Caso queira usar algum desses arquivos na sua loja, você deve referenciá-los na seção **HTML Templates**.

- **Product Cluster (Collections):** criar grupos de produtos. Você pode usar esse recurso para criar páginas de Campanhas ou de Coleções de Produtos com clusters de produtos específicos.

- **Sites and Channels:** configurar [o binding da sua loja](/pt/docs/tutorials/o-que-e-binding) e outras configurações do Gerenciador de Licenças. Para saber mais, consulte o artigo [estrutura das pastas do CMS](/pt/docs/tutorials/estrutura-de-pastas-do-cms).

## Estrutura de pastas CMS Portal (Legado)

Na VTEX, toda nova conta já dispõe de pastas pré-instaladas no CMS. Algumas dessas pastas são **obrigatórias**.

Toda loja precisa ter, sem exceção, as seguintes pastas no CMS para garantir o correto funcionamento da navegação e da indexação:
- Busca
- Categoria
- Departamento
- Login
- Produto

![2 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-portal-legado_3.png)

> ⚠️ O nome das pastas obrigatórias **não deve ser alterado**. Se as pastas obrigatórias não estiverem nomeadas exatamente como informado acima, você terá problemas de navegação e indexação. Como essas pastas se referem a páginas dinâmicas, seus nomes não aparecem na navegação do cliente nem compõem o texto final das URLs, portanto **não impactam a internacionalização do site**. Já os nomes dos **[layouts](/pt/docs/tutorials/o-que-sao-layouts) dentro dessas pastas** podem ser editados livremente, sem afetar o funcionamento da loja.

As demais pastas não são obrigatórias. São apenas sugestões por serem importantes e úteis para a maioria das lojas. Por isso, recomendamos que você não as exclua. São elas:

- `/account`: conta do cliente
- `/account/orders`: pedidos do cliente
- `/sistema/buscavazia`: pasta para a qual o usuário é direcionado caso a busca não retorne resultados.
- `/sistema/{codigoHTTP}`: pasta que renderiza páginas de erro conforme os códigos de status HTTP, como 404 (página não encontrada), 401 (não autorizado) e 500 (erro de servidor).
- `/marcas`: pasta que contém layouts de páginas de marca, que podem ser customizados com um layout exclusivo. Se não houver layout específico para marcas, estas páginas serão renderizadas igual à pasta de busca. Para entender como funcionam as páginas de marca, veja o artigo [Como funciona a busca da VTEX](/pt/docs/tutorials/como-funciona-a-busca-da-vtex).

Como essas pastas não são obrigatórias, você pode renomeá-las livremente. O que importa, nesses casos, é o [controle](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) ou o [placeholder](/pt/docs/tutorials/gerenciandoplaceholders) responsável por ler seus conteúdos.

## Controles nativos da VTEX

No CMS Portal (Legado), os [controles](/pt/docs/tutorials/o-que-sao-controles) são marcações que você inclui nos **HTML Templates** para exibir dados dinâmicos da loja. Por exemplo, nome e preço de produto, caixa de busca ou breadcrumb, sem reimplementar essa lógica em cada página.

Os **controles nativos** são fornecidos pela VTEX. Quando você publica o template, a plataforma reconhece cada controle e renderiza o conteúdo ou a funcionalidade correspondente no storefront.

Por exemplo, ao usar o controle `<vtex.cmc:productName/>` em uma página de produto, o sistema fornecerá o nome do produto para exibição na tela.

Para utilizar um controle, inclua a tag no ponto desejado do HTML do template. O que o controle gera aparece exatamente nessa posição no layout publicado.

> ℹ️ Na [lista de controles para templates](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) você encontra todos os controles nativos e seus respectivos usos.

## Saiba mais

- **[Criar e editar um template de página](/pt/docs/tutorials/como-criar-um-template-de-pagina):** Aprenda a criar um template de página. O template de página é um modelo criado para definir uma estrutura HTML para apresentação do conteúdo das páginas.

- **[Associar um template a um layout](/pt/docs/tutorials/associando-um-template-a-um-layout):** Associe um template a um layout usando a pasta Sites e canais.

- **[Para que serve o Controle Customizado?](/pt/docs/tutorials/para-que-serve-o-controle-customizado):** Além dos controles nativos da VTEX, você pode criar seus próprios controles.

- **[Configurações da Loja - Storefront](/pt/docs/tutorials/configurações-da-loja---storefront-subcategoria	):** Configure definições gerais do seu storefront, como metadados, tags de SEO, tipos de arquivos, dimensões de imagens e regiões geográficas onde seus produtos estão disponíveis.
