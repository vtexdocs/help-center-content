---
title: 'Configurar descuento de precio al contado para Google Shopping'
id: 40K3R5d4NogMvCzIWdWt3e
status: PUBLISHED
createdAt: 2020-12-18T19:17:16.033Z
updatedAt: 2024-01-19T16:37:47.493Z
publishedAt: 2024-01-19T16:37:47.493Z
firstPublishedAt: 2021-05-04T20:06:46.945Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: configurar-descuento-de-precio-al-contado-para-google-shopping
locale: es
legacySlug: configurar-descuento-de-precio-al-contado-para-google-shopping
subcategory: 3pGCbMh80UueoeSqoAgSuS
---

Antes de configurar el descuento de precio al contado para Google Shopping y realizar el paso a paso de este artículo, debe realizar los pasos que están en el tutorial [Configurar descuento de precio al contado](https://help.vtex.com/es/tutorial/configurar-descuento-de-precio-al-contado--7Lfcj9Wb5dpYfA2gKkACIt#).

Para configurar el descuento de precio al contado para Google Shopping es necesario añadir el ID del medio de pago al contado en la página de producto del CMS. Efectúe los siguientes pasos para realizar la configuración: 

1. En el Admin VTEX, accede a *Storefront > Layout*, o escribe *Layout* en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la carpeta __CMS__.
3. Luego, en la carpeta __HTML Templates__.
4. Haga clic en el template de su página de producto en la lista de templates.
5. En el componente `richSnippets`, debe añadir el parámetro `paymentSystemId` con el valor del medio de pago deseado.

```
<body id="product-page">
    <!--  Component: richSnippets -->
    <vtex.cmc:productRichSnippets showGoogle="1" paymentSystemId="6"/>
    <!-- /Component: richSnippets -->
```

6. Después, haga clic en __Save Template__ en el campo superior, para guardar la alteración.

Al finalizar la configuración, el descuento de precio al contado estará disponible para Google Shopping. 
