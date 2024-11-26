---
title: 'How to customize a page using placeholders'
id: tutorials_544
status: PUBLISHED
createdAt: 2017-04-27T22:01:48.368Z
updatedAt: 2020-01-29T19:45:53.363Z
publishedAt: 2020-01-29T19:45:53.363Z
firstPublishedAt: 2017-04-27T23:03:37.686Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-customize-a-page-using-placeholders
locale: en
legacySlug: how-to-customize-a-page-using-placeholders
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Creating a description for the **Category (Categoria)** may have a positive influence on the site SEO. We recommend maintaining the website well mapped as a whole in order to increase the relevance of the terms mentioned in texts such as the description, footer, menu etc.

## Placing the description on the website 

Still on the Portal’s edit area...

1. Go to **Templates de Página**
2. Click on **Categoria**
3. In the Template’s XHTML, enter the code that includes the placeholder
4. Click on **Salvar Template**

### Code example
```html
<div class="content-block"/>
  <!-- Content Place Holder: Html Seo -->
    <vtex:contentPlaceHolder id="htmlSeo"/>
  <!-- /Content Place Holder: Html Seo -->
</div>
```

Please remember that `htmlSeo` is the name of the control created above. This control may have another name, such as `Banner-Principal`.

**Examples**

![](https://images.contentful.com/alneenqid6w5/5LY7pZwZpe8iQiWccqCc26/d4c10dc57a8f6091dd5c23ec3fdad12e/2016-04-05_17_15_29-Index.png)

![](//images.contentful.com/alneenqid6w5/45kPL4QTfqMkYuAYQEeuC2/aed1934b3268ccb8310226e0e6ce9ff3/2016-04-05_17_15_58-Index.png)

**Note.:** Placeholders can be applied in different manners, as long as they comply with the place and the format, that is, the store owner’s needs.

## Creating a Description

To include a description for the Category (Categoria), follow the steps below:

1. Go to Configurações > Portal
2. Click on Portal > Web-sites > [nomedaloja] > / > categoria > @categoria@ > categoria
![](//images.contentful.com/alneenqid6w5/5IrVEkqOlyy644oAwGS0Ou/b82465f649790ab7bbbce5ea4d416265/2016-04-05_16_21_49-Index.png)
3. Go to the **Configurações** tab
![](//images.contentful.com/alneenqid6w5/bhebyo6cBaKy2wa8O4moA/fe1f57b2ef00101ba21effb442206043/2016-04-05_16_25_11-Index.png)
4. Click on **Adicionar Controle**
5. Choose the type of control of your preference, in general, HTML.
![](//images.contentful.com/alneenqid6w5/42vmuVKKdWSwcc0gsuwimi/91fe4618316504de9ea0fb385e46df6b/2016-04-05_16_34_31-Index.png)
6. Click on **Adicionar**
7. Click on **Salvar Configurações**
8. Click on **Editar**
9. Click on **Adicionar Conteúdo**
![](//images.contentful.com/alneenqid6w5/6Ou1gOdTZCWKqIwUA682C6/6f241a6ad96fc83cf6830622ababe08f/2016-04-05_16_34_58-Index.png)
10. Create the HTML that you want to be seen on the website.
11. In the **Preview** tab, you can see a preview of the HTML.
12. The **Condições de Exibição** fields can be set up according to your needs, for example, select a Category in which the contents will be made available.
13. Click on the **Conteúdo Ativo** checkbox
14. Click on **Adicionar na Lista de Conteúdo**
![](//images.contentful.com/alneenqid6w5/5tqciHrAD6aAgiSIwiKSKE/8ba1d1a683c168257e16dd949133809b/2016-04-05_16_28_19-Index.png)
15. Click on **Salvar Configurações**
