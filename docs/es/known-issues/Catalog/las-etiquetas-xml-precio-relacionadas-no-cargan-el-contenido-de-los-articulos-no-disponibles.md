---
title: "Las etiquetas XML <precio> relacionadas no cargan el contenido de los artículos no disponibles"
id: 7u2WDGV9FJl4fXwfOhRx8N
status: PUBLISHED
createdAt: 2024-01-31T19:11:20.119Z
updatedAt: 2024-01-31T19:11:20.846Z
publishedAt: 2024-01-31T19:11:20.846Z
firstPublishedAt: 2024-01-31T19:11:20.846Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: las-etiquetas-xml-precio-relacionadas-no-cargan-el-contenido-de-los-articulos-no-disponibles
locale: es
kiStatus: Backlog
internalReference: 974722
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La integración XML carga cualquier etiqueta relacionada con el precio, como minPrice, maxPrice, currentPrice, se cargan como una etiqueta de valor nulo (<![CDATA[]]>) cuando el artículo no está disponible y también se establece para mostrar si no está disponible.


##

## Simulación


1 - Configure un SKU no disponible en su tienda para "mostrar aunque no esté disponible".
2 - para una integración XML válida config https://myaccountname.myvtex.com/admin/Site/XmlForm.aspx, configure la etiqueta "Disponibilidad" y cualquier etiqueta de disponibilidad para mostrar.
3 - Utilice una solicitud GET o cargue la URL XML creada en su navegador.

El resultado será un artículo no disponible, aún mostrándose en el XML, pero sin ninguna etiqueta de precio:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/las-etiquetas-xml-precio-relacionadas-no-cargan-el-contenido-de-los-articulos-no-disponibles_1.png)



## Workaround

**
No existe ninguna solución. La única opción para no integrar artículos sin precio es desactivar la opción "showIfNotAvailable".





