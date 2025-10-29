---
title: 'Legacy CMS Portal'
id: 1oN446gRGcR2s70RvBCAmj
status: PUBLISHED
createdAt: 2022-01-10T20:17:10.358Z
updatedAt: 2024-08-06T16:52:09.507Z
publishedAt: 2024-08-06T16:52:09.507Z
firstPublishedAt: 2022-01-10T20:41:44.261Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: legacy-cms-portal
locale: en
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugEN: cms
order: 3
---

## Layout

The [Layout](/en/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW) section allows you to create your storefront with HTML and CSS. It is organized into folders and files with specific purposes:

![CMS - Layout EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/cms/legacy-cms-portal_1.png)

- **HTML Templates:** build the HTML code and reference JavaScript and CSS files to be used in the website pages.

- **Shelves Templates:** manage Shelves templates, i.e., components responsible for rendering a group of products in the storefront.

- **Custom Elements:** create the necessary conditions to implement reusable components, such as Footers, in other parts of the store.

- **URL Builder:** redirect existing URLs to others of interest. This will avoid indexing errors and help maintain SEO rankings.

- **Files Manager:** upload image files for your store website. Store JavaScript, CSS, and image files of the website. If you want to use any of these files in your store, you must reference them within the **HTML Templates** section.

- **Product Cluster (Collections):** create product groups. You can use them to build Campaign or Product Collection landing pages that load specific product clusters.

- **Sites and Channels:** configure [your store binding](/en/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W) and other License Manager settings. To learn more, please refer to the [CMS folder structure](/en/tutorial/cms-folder-structure--2RdMaJSv4AK4EyscmQuocu) article.

## Settings

The [Settings](/en/subcategory/cms-settings--6kovkwzMRyeOOc2iEC4suM) section allows you to configure settings related to your store website, such as its metadata, SEO tags, file types, and more. 

![CMS - Settings EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/cms/legacy-cms-portal_2.png)

The **Settings** section is structured as follows.

- **General:** General settings related to the store metadata and shopping options, such as the home page title and the maximum quantity of SKUs in the cart.
- **SEO:** Options for customizing SEO keywords and meta tags.
- **Store texts:** Database of reusable text variables that are rendered in the storefront.
- **File types:** Settings related to asset files, such as image dimensions and size. 
- **Geographical areas:** Database of the geographical regions where the store products are available.

## Legacy CMS folder structure

At VTEX, every new account has folders preinstalled on its CMS. Some of them are __required__. 

If your store does not have these folders - __with the exact names__ we indicate in this article - you will have browsing and indexing problems.

The other folders are merely __recommended__, since they are useful to most stores. Its absence does not affect the accounts.

### Required folders 

These are the folders that every store needs to have in the CMS to ensure the correct operation of browsing and indexing:

- Busca (Search)
- Categoria (Category)
- Departamento (Department)
- Login
- Produto (Product)

See below these basic folders in the CMS:

![pastasObrigatorias](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/cms/legacy-cms-portal_3.png)

These folders come by default in the environment of all VTEX stores.

> ❗ The names of the required folders must **not** be edited.

Since folders refer to dynamic pages, their names don't appear on the customer's navigation. In other words, the fact that editing the names is banned does not affect the final text of your URLs, nor the internationalization of your site.

Layout names can be edited without any problem.

### Important folders

Some CMS folders are not required but are useful. Hence, we recommend that you do not delete them.

These are:
- `/account`: customer's account.
- `/account/orders`: customer's orders.

For these two folders, what matters is the control or placeholder that reads their content. Their names can be freely edited.

> ⚠️ Since they are private folders, `/account` and `/account/orders` **must require authentication**. See [in this article](/en/tutorial/requering-authentication-on-store-pages) how to ensure they are configured to ask for user authentication.

### Useful folders

There are folders that, although not as important as the previous ones, are often useful for most stores. They are the following:

- `/sistema/buscavazia`: folder to which the user is directed if the search finds no results.
- `/sistema/{codigoHTTP}`: folder that renders error pages according to HTTP status codes, such as `404` (page not found), `401` (unauthorized), and `500` (server error).
- `/marcas`: folder containing layouts for brand pages, which can be customized with exclusive layouts. If there is no specific layout for brands, these pages will be rendered the same way as the search folder. To understand how brand pages work, see the article [on VTEX search](/en/tutorial/how-does-vtex-search-work--tutorials_542).

## VTEX's native controls
Controls are snippets of codes that you can use in your website's templates to perform specific actions.

At VTEX, you will find a number of native controls to render various functionalities.

For example, if you use the `<vtex.cmc:productName/>` control on a product page, the system will provide the product name to be displayed on the screen.

To add a control, just paste it into the code. The result will be rendered at the position of the code where it is added.

### List of Native VTEX Controls

You can check out all available native controls and their respective uses in our [List of controls for templates](/en/tutorial/list-of-controls-for-templates--tutorials_563).

## References
- [Layout](/en/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW)
- [Settings](/en/subcategory/cms-settings--6kovkwzMRyeOOc2iEC4suM)
- [Layout folder structure](/en/tutorial/cms-folder-structure--2RdMaJSv4AK4EyscmQuocu?&utm_source=autocomplete)
- [List of template controls](/en/tutorial/list-of-controls-for-templates--tutorials_563)
- [What are templates?](/en/tutorial/o-que-sao-templates--4l7BQBYO9ycumsqua2CU88?&utm_source=autocomplete)
- [What is a website?](/en/tutorial/o-que-e-um-web-site--5sPUdFEv9C02i0MMqqSo0U?&utm_source=autocomplete)
- [What are controls?](/en/tutorial/o-que-sao-controles--6e2qsk9zu8IQuyEysKweag?&utm_source=autocomplete)
- [What are layouts?](/en/tutorial/o-que-sao-layouts--CckPh00rZIcIUG60y8Gse?&utm_source=autocomplete)
- [What are shelves?](/en/tutorial/o-que-sao-prateleiras--28D8d6GFfuAsuAoeWC8eq0?&utm_source=autocomplete)
- [What is binding?](/en/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W?&utm_source=autocomplete)

## Guides
- [Creating and editing a page template](/en/tutorial/como-criar-um-template-de-pagina--frequentlyAskedQuestions_1850): Learn how to create a page template. A page template is a model designed to define an HTML structure for displaying page content.

- [Associating a template with a layout](/en/tutorial/associando-um-template-a-um-layout--7CkgOHRj7DVbsRxyR8YQrK?&utm_source=autocomplete): Associate a template with a layout using the Sites and Channels folder.

- [Managing placeholders](/en/tutorial/gerenciandoplaceholders--29Y7r9JqcWIqmGipReGLQI): A placeholder is a configurable snippet of code that meets conditions defined by the store. Learn how to insert and configure a placeholder, for example, a banner on your store’s homepage.

- [Using VTEX's native controls](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/7mGkGmo8l6wf4fXJCkWwPi?&utm_source=autocomplete): Controls are snippets of codes that you can use in your website's templates to perform specific actions. For example, you can use a control on a product page to display the product name.

- [What is the purpose of the Customized Control?](/en/tutorial/what-is-the-purpose-of-the-customized-control--frequentlyAskedQuestions_627): In addition to VTEX's native controls, you can create your own controls.

## Controls
- [List of controls for templates](/en/tutorial/list-of-controls-for-templates--tutorials_563)
- [Search control – fulltextSearchBox](/en/tutorial/controle-de-busca-fulltextsearchbox--tutorials_549?&utm_source=autocomplete)
- [Collection highlight control](/en/tutorial/controle-de-destaque-de-colecao--1tGdb2ndjqy6yWsk2YwKMu?&utm_source=autocomplete)
- [Breadcrumb control](/en/tutorial/controle-de-breadcrumb--3qQS5O9XpusAC6oUqSIQMM?&utm_source=autocomplete)
- [Shelf template controls](/en/tutorial/controles-do-template-de-prateleira--tutorials_550?&utm_source=autocomplete)
- 
