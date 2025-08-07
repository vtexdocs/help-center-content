---
title: 'Configurando SEO via Headless CMS'
id: 1qaJuB28kOJRfhyaGeezGc
status: PUBLISHED
createdAt: 2025-07-14T16:29:35.269Z
updatedAt: 2025-07-14T16:59:24.399Z
publishedAt: 2025-07-14T16:59:24.399Z
firstPublishedAt: 2025-07-14T16:56:00.498Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: configuring-seo-via-headless-cms
legacySlug: configurando-seo-via-headless-cms
locale: pt
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

O SEO (Search Engine Optimization) é uma das estratégias mais importantes para que seu site alcance bons posicionamentos orgânicos nas páginas de resultados dos motores de busca.

Em lojas desenvolvidas com [FastStore](https://developers.vtex.com/docs/guides/faststore), você pode gerenciar as configurações de SEO pelo [Headless CMS](https://help.vtex.com/pt/tutorial/headless-cms-visao-geral--3U5gvhHdQL0jczYH8gjX09).

<div class = "alert alert-info">Para lojas desenvolvidas com Store Framework, veja <a href="https://help.vtex.com/pt/tutorial/configurando-seo-em-sua-loja--1sKskEsjUSvgHyqM8oknVR">Configurando SEO em sua loja Store Framework</a>.</div>

## Instruções

1. No Admin VTEX, acesse **Storefront > Headless CMS**.
2. Clique na página desejada.

  <div class = "alert alert-info"><p>Essa configuração está disponivel para os seguintes <a href="https://developers.vtex.com/docs/guides/faststore/headless-cms-3-adding-content-types-and-sections">tipos de conteúdo</a>: <strong>Product Details Page (PDP)</strong>, <strong> Home</strong> e <strong>Landing Page</strong>.</p></div>

3. Mude para a aba **Settings**.
4. Vá até **SEO** e atualize os campos relacionados. Veja a lista de  campos por tipo de conteúdo em [Campos de SEO por tipo de conteúdo](#campos-de-seo-por-tipo-de-conteudo).
5. Clique em `Salvar` para aplicar as mudanças.

### Campos de SEO por tipo de conteúdo

#### Product Details Page (PDP)

Nas páginas do tipo **Product Details Page (PDP)**, estão disponíveis os seguintes campos para configuração de SEO:

| Campo | Descrição | Exemplo |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| ID                        | Identificador único que representa a página de um determinado produto. É essencial para os buscadores reconhecerem e diferenciarem cada PDP dentro do site, evitando ambiguidades e garantindo que cada página de produto seja indexada separadamente.<br>Recebe um valor descritivo que será concatenado ao caminho do produto. | • Valor descritivo: `#produto`<br>• Resultado: `slug-do-produto/p#produto` |
| Main entity of page | Identificador único que representa o elemento mais relevante na página de um produto. Recebe um valor descritivo que será concatenado ao caminho do produto. | • Valor descritivo: `#webpage`<br>• Resultado: `slug-do-produto/p#webpage` |

#### Home

Na **Home**, estão disponíveis os seguintes campos para configuração de SEO:

| Campo | Descrição | Exemplo |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Path                        | Caminho da URL em que a página inicial será acessível no site. | `/homepage` |
| Default page title | Título exibido na aba do navegador e utilizado pelos mecanismos de busca. Deve ser relevante ao conteúdo da página inicial. | Minha Loja |
| Meta tag description | Descrição resumida da página, usada pelos mecanismos de busca para exibição nos resultados de pesquisa. | Descubra as melhores ofertas em eletrônicos |
| Canonical url for the page | URL canônica usada pelos mecanismos de busca para entender qual é a versão principal da página, evitando problemas de conteúdo duplicado. | `https://www.minhaloja.com` |
| Name | Nome do site. | Minha Loja |
| Publisher ID | Identificador único da entidade publicadora do conteúdo da página. Pode ser um valor descritivo que será concatenado à URL da página inicial ou uma URL completa. |  • Valor descritivo: `#organization`<br>  • URL completa: `https://www.minhaloja.com/publisher` |

#### Landing Page

Em páginas do tipo **Landing Page**, estão disponíveis os seguintes campos para configuração de SEO:

| Campo | Descrição | Exemplo |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Path                        | Caminho da URL em que a landing page será acessível no site. | `/slug-da-landing-page` |
| Default page title | Título exibido na aba do navegador e utilizado pelos mecanismos de busca. Deve ser relevante ao conteúdo da página. | FastStore Landing Page |
| Meta tag description | Descrição resumida da página, usada pelos mecanismos de busca para exibição nos resultados de pesquisa. | Descrição da landing page |
| Canonical url for the page | URL canônica usada pelos mecanismos de busca para entender qual é a versão principal da página, evitando problemas de conteúdo duplicado. | `https://www.minhaloja.com` |
