---
title: 'Activar SKUs en masa'
id: 4uMZATlSc0kEYiewWKSwEY
status: PUBLISHED
createdAt: 2018-01-30T12:57:18.128Z
updatedAt: 2022-08-24T21:28:24.858Z
publishedAt: 2022-08-24T21:28:24.858Z
firstPublishedAt: 2018-01-30T14:20:27.722Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: activating-skus-in-bulk
legacySlug: activar-skus-en-massa
locale: es
subcategoryId: pwxWmUu7T222QyuGogs68
---

En la plataforma VTEX, es posible activar las SKU de forma masiva. Hay dos escenarios posibles:

- Activar todos los SKUs registrados en la tienda.
- Activar sólo un grupo de SKUs registrados en la tienda.

A continuación encontrará el procedimiento paso a paso para cada escenario.

## Activar todos los SKUs

Para activar sus SKUs usando VTEX Admin, siga los pasos siguientes:

1. Acceda a la URL `https://{accountname}.myvtex.com/admin/site/productskuactivateall.aspx `.
2. Haga clic en `Activar todos los SKUs`.

<div class="alert alert-warning">
<p>Los SKUs registrados con datos inválidos no tendrán el flag de <em>Activar SKU si es posible</em> activado.</p>
<p>Si no todos los SKUs se han marcado con el flag de <em> Activar SKU si es posible </em>, repita el proceso descrito anteriormente.</p>
</div>

## Activar un grupo de SKUs

Para activar sólo un determinado grupo de SKUs, puede utilizar la planilla extraída del VTEX Admin. He aquí cómo:

1. Extraiga la planilla de __Productos y SKUs__ en la plataforma. Usted puede verificar el paso a paso de este proceso en [Cómo exportar planilla de productos
](https://help.vtex.com/es/tutorial/como-exportar-planilla-de-productos--2sIroGeqZqaN3NAvaSGwWV)
2. Altere en la columna __ActivarSKUSiEsPosible__ el estado de los SKUs que desea activar. El campo debe rellenarse apenas con `SI`.
3. Guarde los cambios realizados en el documento.
4. Importe la planilla de nuevo a la plataforma. Conviene recordar que la importación se realiza de la misma manera que la extracción.

Además, si la planilla usada para importar los nuevos datos no está dentro de los estándares de la plataforma, es posible descargar un modelo ajustado en el formato utilizado por VTEX.

## Más información

- [How to activate an SKU](https://developers.vtex.com/vtex-rest-api/docs/how-to-activate-an-sku) (Cómo activar un SKU)
