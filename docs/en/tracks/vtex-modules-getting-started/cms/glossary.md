---
title: 'Glossary'
id: 78y5kSB5GaS1XHH9qBr6mS
status: PUBLISHED
createdAt: 2022-01-10T20:50:30.066Z
updatedAt: 2023-04-25T18:27:47.860Z
publishedAt: 2023-04-25T18:27:47.860Z
firstPublishedAt: 2022-01-10T20:56:23.487Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: glossary
locale: en
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugEN: cms
order: 5
---

The following table of concepts introduces common terminlogy for the VTEX CMS

## General concepts
| Concept     | Description   |
| ----------  | ---------- |
| VTEX IO | A serverless development environment that enables the developer to quickly build high-quality web apps without dealing with infrastructure and scalability issues.By leveraging the VTEX IO platform, the VTEX IO Store Framework solution enables Admin users to be assisted by the **Site Editor** to update storefront content. Related articles: [What is VTEX IO?](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-what-is-vtex-io), [What is Store Framework?](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-what-is-vtex-store-framework), [Site Editor](/en/docs/tutorials/site-editor-overview)|
| Legacy CMS Portal| Legacy CMS Portal is the name of an HTML and CSS-based technology that some VTEX stores use to create, organize, edit, and define their structure of folders, files, and components in order to compose their storefront as they wish. Related article:[Legacy CMS Portal](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z#legacy-cms-portal)|
| Binding | Before you can start organizing content, your site must be linked to the store as defined in your account settings. This is because every account can have multiple stores, each associated with a different folder structure.</br> Through the binding, you tell the platform which store "owns" that specific folder structure. Related article: [What is binding?](/en/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W?&utm_source=autocomplete) |
| SEO     | Search Engine Optimization (SEO) is a set of practices aimed to improve a website’s traffic quality by better positioning it in search engine results.|

## VTEX IO - Site Editor

| Concept     | Description    |
| ----------   | ---------- |
| Blocks   | Blocks are components used to create a storefront in VTEX IO. They can be classified into the following types: Basic blocks, such as [Rich Text](https://developers.vtex.com/vtex-developer-docs/docs/vtex-rich-text#rich-text) and [Info Card](https://developers.vtex.com/vtex-developer-docs/docs/vtex-store-components-infocard); Layout blocks, such as [Slider layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) and Custom blocks that you can develop for your store, such as a countdown block. |
| Locale  | The binding locale to which you wish to apply content changes. For example, English (en-GB), Portuguese (pt-BR), and Spanish (es-AR). Related article: [Managing content per binding](/en/tutorial/gerenciando-conteudo-por-binding--5CZjZPMqi0ZNpuqzF6AUOn?&utm_source=autocomplete) |
| Preview    | The preview mode allows you to view a version of your storefront content immediately in the [Site Editor](/en/tutorial/site-editor-visao-geral--299Dbeb9mFczUTyNQ9xPe1?&utm_source=autocomplete) module.|
| *Workspace *  | Workspaces are environments isolated from one another. They can be understood as different versions of the same VTEX account. In practice, this means that changes made in your own workspace do not affect your store's live version or other developers' work. There are two main types of workspaces in VTEX: **Development workspace** - provides more freedom to develop. **Production workspace** - supports production traffic. Related article:[Workspace](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-workspace).|
| Content version  | A block's version is a copy of its content at a specific point in time. For example, a Carousel may have predefined versions for future marketing campaigns, such as Black Friday and Valentine's Day, with banners of specific content. Related article:[Managing content versions](/en/docs/tutorials/managing-content-versions).|

## Legacy Portal

| Concept     | Description     |
| ----------  | ---------- |
| Sites and Channels  | The area inside CMS where all the folder structure of your site is located. It's here that you will create and organize the layouts of your site, as we will see later. </br> Related article: [Legacy CMS Portal](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z#cms-portal-legado) |
| Template | Templates are files that contain the code for the pages of your website. They determine, among other things, how information is displayed, including the position of the placeholders. On the VTEX platform, templates are classified into two types: HTML templates (or page templates) and Shelves templates. Artigo relacionado: [Layout](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z#layout)|
| Layout  | Determines which elements will appear on a page. It is the layout that sets up the placeholders, which will show to the the end-user and each layout needs to be linked to a single template.You can find your website layouts organized by folders, in the ** Sites and Channels directory.** Related article: [Layout](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z#layout)  |
| Placeholders  | These are elements (DHTML Banner, HTML, Collection, Banner, Related Products) that may or may not be used in the pages of your Web Site. They are configured in the layouts (which are stored in the Sites and channels directory), but their position on the page is determined by the code in the templates (stored in the HTML Templates directory).The layout defines which placeholders are going to be used, and what they display, but it's the code (that is, the template) that will tell you where they appear on the page. |
| Controls | VTEX native controls render various useful and replicable features in your site templates. For example, when you enter the `vtex.cmc:productName/` control on your product page, the system will automatically render the product name. Artigo relacionado: [List of controls for templates](/en/tutorial/lista-de-controles-para-templates--tutorials_563?&utm_source=autocomplete).|

## Headless CMS 

| Conceito | Descrição |
| -------- | --------- |
| VTEX Headless CMS | A no-code storefront content management system that allows users to store and access structured content in a separate layer from the frontend through a VTEX App. |
