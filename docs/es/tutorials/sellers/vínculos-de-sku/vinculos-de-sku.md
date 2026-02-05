---
title: 'Vínculos de SKU'
id: 1SmrVgNwjJX17hdqwLa0TX
status: PUBLISHED
createdAt: 2022-05-27T17:27:26.963Z
updatedAt: 2024-01-23T15:50:13.022Z
publishedAt: 2024-01-23T15:50:13.022Z
firstPublishedAt: 2022-05-31T17:14:23.589Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sku-bindings
legacySlug: vinculos-de-sku
locale: es
subcategoryId: FTLNAWyLmuaIiAq4CQKS6
---

Como parte del [comercio colaborativo](/es/docs/tutorials/estrategias-de-marketplace-en-vtex) que promueve VTEX, y gracias a la arquitectura que tienen sus tiendas, estas pueden actuar como [_seller_](/es/docs/tutorials/como-configurar-el-seller-para-vender-en-un-marketplace-vtex) o como [_marketplace_](/es/docs/tutorials/configurar-marketplaces-vtex).

Cuando el _seller_ envía sus productos al _marketplace_ VTEX, el marketplace [cataloga los SKU recibidos](/es/docs/tutorials/catalogacion-manual-de-skus) y crea un vínculo entre los SKU del _seller_ y los SKU del _marketplace_. Es decir que se crea una correspondencia entre el catálogo del _seller_ y el catálogo del _marketplace_. 

Después de que el _marketplace_ cataloga los SKU, ya sea a través de la página **SKU recibidos** o el [VTEX Matcher](/es/docs/tutorials/como-funcionan-los-puntos-del-vtex-matcher), los vínculos entre los SKU del _seller_ y los SKU del _marketplace_ aparecen en la página **Vínculos de SKU**. Automáticamente, los vínculos pasan a tener el status _Vinculado_.

> ℹ️ Por defecto, para los [*sellers white label*](/es/docs/tutorials/seller-white-label) no existe vinculación entre sus SKU y los SKU del *marketplace*.

La página **Vínculos de SKU** le permite al _marketplace_ seguir y gestionar la vinculación entre los SKU del _seller_ y los del _marketplace_. Para acceder a la página, en el Admin VTEX, ingresa a **Marketplace > Sellers > Vínculos de SKU**. Aparecerá la siguiente interfaz:

![sku-bindings-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/sellers/vínculos-de-sku/vinculos-de-sku_1.png)

La tabla a continuación contiene la descripción de las columnas de la lista de vínculos de SKU:

| **Columna** | **Descripción** |
| ---------- | ---------- |
| SKU | Código numérico que identifica el [SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ) del catálogo del marketplace. |
| Seller | Nombre y ID del [_seller_ registrado](/es/docs/tutorials/agregar-seller) en el marketplace. |
| SKU de seller | Código alfanumérico que identifica el SKU del catálogo del _seller_ con el cual el SKU del _marketplace_ está vinculado. |
| Status | Estado del vínculo entre el SKU del _seller_ y el SKU del _marketplace_. Hay dos tipos de estados: <ul><li>**Vinculado:** existe una correspondencia entre el SKU del *seller* y el SKU del *marketplace*.</li><li>**Desvinculado:** no existe una correspondencia entre el SKU del *seller* y el SKU del *marketplace*.</li></ul> Si un vínculo de SKU pasa de **Vinculado** a **Desvinculado**, el SKU del *seller* no estará disponible en el catálogo del *marketplace*. |

La página **Vínculos de SKU** permite al _marketplace_ VTEX realizar estas acciones:

- [Buscar](#buscar)
- [Desvincular SKU](#desvincular-sku)
- [Asociar a otro SKU](#asociar-a-otro-sku)
- [Remover](#remover)
- [Exportar](#exportar)

## Buscar

En la parte superior de la página, hay un recuadro de búsqueda con el ícono de la lupa <i class="fas fa-search"></i> donde puedes buscar vínculos de SKU usando los criterios a continuación:

- ID de SKU del _marketplace_
- ID del _seller_
- ID del SKU del _seller_

Al ingresar un carácter en el recuadro, la búsqueda se realiza inmediatamente. Para limpiar la búsqueda, haz clic en el ícono <i class="far fa-times-circle"></i>. 

También puedes buscar en la lista filtrando por el status de vinculación. Para hacerlo, sigue los pasos a continuación:

1. En el Admin VTEX, ingresa a **Marketplace > Sellers > Vínculos de SKU**.
2. En el botón `Status de vinculación`, haz clic en la flecha hacia abajo <i class="fas fa-angle-down"></i>.
3. Selecciona el status deseado: _Vinculado_ o _Desvinculado_.
4. Haz clic en el botón `Aplicar`.

Para regresar a la lista con todos los status de vinculación, haz clic en el botón `Limpiar filtros de búsqueda`. Este botón solo cancela el filtro de status, no los términos ingresados en el recuadro de búsqueda.

> ℹ️ Si la búsqueda no arroja ningún resultado, verifica la ortografía de lo que escribiste en el recuadro de búsqueda o la combinación de filtros que usaste.

## Desvincular SKU

Para deshacer un vínculo entre dos SKU, haz clic en la _tilde_ <i class="fas fa-toggle-on"></i> y confirma la opción `Deshacer el vínculo del SKU`. 

> ℹ️ Al desvincular el SKU del *seller*, el SKU deja de recibir actualizaciones de precio y *stock* y no estará disponible en el catálogo del *marketplace*. El SKU puede revincularse en cualquier momento sin necesidad de volver a catalogar el SKU del *seller*.

Si deseas restablecer el vínculo entre el SKU del _seller_ y el SKU del _marketplace_, activa nuevamente la _tilde_ <i class="fas fa-toggle-on"></i>, haciendo clic en ella.

## Asociar a otro SKU

Para asociar el SKU del _seller_ a un nuevo SKU del _marketplace_, sigue los pasos a continuación:

1. En el Admin VTEX, ingresa a **Marketplace > Sellers > Vínculos de SKU**.
2. En la línea del ítem deseado, haz clic en el ícono menú <i class="fas fa-ellipsis-v"></i>.
3. Haz clic en <i class="fas fa-link"></i> `Asociar a otro SKU`.
4. Completa el cuadro de diálogo con un ID del SKU del _marketplace_. Ten en cuenta que el valor no puede estar vinculado a otro SKU del _seller_ en cuestión.
5. Haz clic en el botón <i class="fas fa-link"></i> `Asociar a otro SKU`.

## Remover

Para remover el vínculo entre el SKU del _seller_ y el SKU del _marketplace_, sigue los pasos a continuación:

1. En el Admin VTEX, ingresa a **Marketplace > Sellers > Vínculos de SKU**.
2. En la línea del ítem deseado, haz clic en el ícono menú <i class="fas fa-ellipsis-v"></i>.
3. Haz clic en <i class="far fa-trash-alt"></i> `Remover`.

> ⚠️ Remover un vínculo hace que el SKU del *seller* deje de formar parte del catálogo del *marketplace*; por lo tanto, desaparece de la lista de la página **Vínculos de SKU**. No se puede recuperar un vínculo que se removió, pero el *seller* puede reenviarle el SKU al *marketplace*, el cual [cataloga](/es/docs/tutorials/catalogacion-manual-de-skus) el SKU nuevamente y hace que esté disponible otra vez.

## Exportar

Para exportar la lista de vínculos de SKU en formato XLSX, sigue los pasos a continuación:

1. En el Admin VTEX, ingresa a **Marketplace > Sellers > Vínculos de SKU**.
2. Si lo deseas, realiza una [búsqueda](#buscar) usando el recuadro de búsqueda o filtrando los vínculos que deseas exportar.
3. En la parte superior de la página, haz clic en el botón <i class="far fa-arrow-to-top"></i> `Exportar a Excel`.

La plantilla generada se le enviará por email al usuario registrado. El tiempo de exportación dependerá del procesamiento de la plataforma VTEX y del tamaño del archivo.

> ℹ️ El contenido exportado incluirá la lista de vínculos de SKU al momento de la exportación. Si hay alguna búsqueda o filtro activo, solo se exportarán los vínculos seleccionados.

## Más información

- [Configurar marketplaces VTEX](/es/docs/tutorials/configurar-marketplaces-vtex)
- [Cómo configurar el seller para vender en un marketplace VTEX](/es/docs/tutorials/como-configurar-el-seller-para-vender-en-un-marketplace-vtex)
- [Catalogación de SKUs recibidos](/es/docs/tutorials/catalogacion-manual-de-skus)
- [Cómo funcionan los puntos del VTEX Matcher](/es/docs/tutorials/como-funcionan-los-puntos-del-vtex-matcher)
