---
title: 'Enviar productos a Google Shopping'
id: 5L5LnccDCj5lJk8H95GQ82
status: PUBLISHED
createdAt: 2021-04-15T14:10:45.645Z
updatedAt: 2024-08-06T14:24:02.734Z
publishedAt: 2024-08-06T14:24:02.734Z
firstPublishedAt: 2021-04-15T17:41:23.772Z
contentType: trackArticle
productTeam: Channels
slug: enviar-productos-a-google-shopping
locale: es
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugES: integracion-con-google-shopping
---

En Google Shopping, solamente los [catálogos](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) se integran. A diferencia de otras integraciones, **no es necesario mapear los productos mediante una plantilla.**

## Reindexar la base

Después de configurar la integración y autenticar su cuenta, el envío de productos al _marketplace_ no es automático sino que será necesario que el _seller_ [reindexe la base](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-da-indexacao). Este proceso prepara los datos de los SKU y de los productos y envía al _marketplace_ la información general sobre el catálogo, los precios y el _stock_. 

>ℹ️ Solo el [usuario titular (owner)](https://help.vtex.com/es/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA) tiene permiso para reindexar la base de una tienda VTEX. Durante el periodo de reindexación, que es variable, los productos ingresan en una fila para que se actualicen los datos, pero siguen disponibles para la venta en el sitio web de la tienda.

Para reindexar la base, copia en tu navegador la dirección a continuación y reemplaza «{nomedaloja}» con el nombre de tu tienda:

`{nomedaloja}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`

Al acceder a la dirección, haz clic en el botón «Reindexar base». Puedes seguir el proceso desde el Admin VTEX, en **PRODUCTOS > Catálogo > Informes**.

### Verificar indexación

Es posible verificar si un SKU específico se indexó correctamente a la política comercial de la integración. Para hacerlo, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **PRODUCTOS > Productos y SKU**.
3. Haz clic en la <i class="fas fa-angle-down"></i> flecha hacia abajo, al lado del botón **MODIFICAR**.
4. Selecciona la opción `Indexed info`.
5. Verifica si el número de la política comercial que se usó en la integración con el _marketplace_ aparece en la información del SKU.

## Aprobación de productos

os productos cambian a estado activo una vez Google los aprueba, e inmediatamente aparecen en los anuncios de Google Shopping.

Algún producto podrá mostrar el error Insertion error: Ineligible SKU. Este mensaje significa que el producto no es elegible para la integración. Los productos pueden no ser elegibles por las siguientes razones:
- El producto no tiene precio.
- El producto no tiene imagen.
- El producto no tiene _stock_ y se configuró para que se excluya cuando no tenga _stock_.

**Si algún producto es rechazado, debe revisar los datos y enviarlos nuevamente**. Puede realizar un seguimiento del status de sus productos en Google Merchant Center.

>ℹ️ Asegúrese de que sus productos cumplen con las [Especificaciones de datos de productos](https://support.google.com/merchants/answer/7052112?visit_id=637492777706451215-3729304881&rd=1&hl=es-419) definidas por Google. Si algún producto no cumple con los requisitos, el anuncio será rechazado.

En algunas circunstancias el rechazo del producto sucede después de que se ha considerado como activo. A veces esto ocurre cuando una cuenta ha sido creada recientemente.

| **SEPA MÁS** |
| ---------- |
|Vea otras razones para el rechazo de productos en el artículo de Google [Información sobre el rechazo de productos debido a infracciones de calidad de los datos de producto.](https://support.google.com/merchants/answer/9227009?hl=es-419)|

## Actualizar los datos del producto

En Google Shopping, los productos caducan automáticamente si no se actualizan en un plazo de 30 días. Esto incluye cualquier tipo de cambio, ya sea precio, _stock_ o especificación.

Sin embargo, no es algo que le deba preocupar ya que en la integración con la plataforma VTEX, **el sistema actualiza los productos automáticamente cada 29 días.**

>ℹ️ Puede haber un retraso de hasta 30 minutos entre que se procesa el cambio de los datos de un producto y la actualización en el _feed_.

## Modificar la categorización automática

Después de que se complete la integración, sus productos se categorizarán automáticamente. Sin embargo, algunas veces puede haber un producto rechazado porque Google considera que **la categoría que se le atribuyó no es la correcta.**

>Ejemplo: difusión de anuncios de bebidas alcohólicas.

Pero antes de considerar un problema en la categorización, asegúrese de que sus productos cumplen con la política de Google para [bebidas alcohólicas](https://support.google.com/merchants/answer/6150139?hl=es-419#zippy=,bebidas-alco%C3%B3licas).

Para reemplazar una categoría incorrecta y asegurarse de que el producto sea aprobado, consulte las instrucciones en el artículo de Google [categoría producto Google](https://support.google.com/merchants/answer/6324436?hl=es-419). 

>⚠️ Google aceptará un cambio de categoría solo en las situaciones previstas en el artículo [categoría producto Google.](https://support.google.com/merchants/answer/6324436?hl=pt-BR)
