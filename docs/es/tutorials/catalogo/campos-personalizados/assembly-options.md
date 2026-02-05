---
title: 'Assembly Options'
id: 5x5FhNr4f5RUGDEGWzV1nH
status: PUBLISHED
createdAt: 2021-10-25T20:22:43.094Z
updatedAt: 2024-06-06T19:38:13.881Z
publishedAt: 2024-06-06T19:38:13.881Z
firstPublishedAt: 2021-10-25T21:39:46.746Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: assembly-options
legacySlug: assembly-options-es
locale: es
subcategoryId: 1hoOi2R0Rm6ky0yCwOUoiy
---

> ⚠️ Esta funcionalidad solo está disponible para las tiendas desarrolladas con [VTEX IO](https://vtex.com/es-es/store-framework/). Antes de seguir, debes [instalar y configurar el Product Customizer](https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-customizer) en tu tienda.

Una assembly option es un [anexo](/es/docs/tutorials/que-es-un-anexo) para escenarios complejos, como la personalización de productos en las que es necesario controlar diferentes combinaciones de productos, la cantidad, ítems adicionales, costes y la gestión de stock.

En el siguiente ejemplo, una tienda ofrece múltiples assembly options para el producto _custom bell_ (campana personalizada). Estas opciones se muestran en la página de producto, donde el cliente puede seleccionar las opciones deseadas. Dependiendo de las opciones, puede haber un coste adicional para el SKU.

![assembly-option-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/campos-personalizados/assembly-options_1.png)

Puedes combinar distintos [SKU](/es/docs/tutorials/que-es-un-sku) para ofrecer assembly options, como los _Bells add-ons Roman_ o los _Bells add-ons 1-3 lines_ en el ejemplo anterior. Si un ítem está agotado, se mostrará como no disponible.

En este artículo, explicamos cómo empezar a utilizar las opciones de ensamblaje (*Assembly Options*) en tu tienda.

## Implementación de las opciones de ensamblaje

Hay dos formas de implementar las opciones de ensamblaje: utilizando la [aplicación Assembly Options](#aplicacion-assembly-options) o la interfaz nativa de [Campos personalizados](#campos-personalizados) del __Catálogo__.

> ⚠️ Al implementar las opciones de ensamblaje en una [cuenta de seller](/es/docs/tutorials/que-es-un-seller), las opciones de personalización del producto se mostrarán a los clientes de tu tienda en el checkout. Para que las opciones se muestren en la página del producto, debes implementar la funcionalidad en una [cuenta de marketplace](/es/docs/tutorials/que-es-un-marketplace).

### Aplicación Assembly Options

La aplicación [Assembly Options](https://apps.vtex.com/vtex-admin-assembly-options/p), disponible para las tiendas desarrolladas con [VTEX IO](https://vtex.com/br-pt/store-framework/), proporciona una interfaz para configurar y gestionar las opciones de personalización. En este caso, la sintaxis de las opciones de ensamblaje y el anexo se generan automáticamente. Para más información sobre esta aplicación, lee la [documentación sobre la Aplicación Assembly Options](/es/docs/tutorials/aplicacion-assembly-options).

### Campos personalizados

Para crear opciones de ensamblaje utilizando __Campos personalizados__ en el Admin VTEX, primero debes crear manualmente una [sintaxis](#sintaxis-de-las-assembly-options) para definir las reglas de personalización del producto. Después, debes insertar esa sintaxis en la [configuración del anexo](#configuracion-del-anexo). Consulta las secciones a continuación para obtener más información.

#### Sintaxis de las assembly options

Para implementar una assembly option, primero debes crear una sintaxis, como la que se muestra a continuación, cambiando cada valor según tu escenario.

`[0-3]#10000[1-2][1]pricetable1;#20000[0-2][0]pricetable2;#30000[0-2][0]pricetable3`

El primer `[x-y]` corresponde a las reglas que se aplican al grupo, y entre cada `#` y `;` se encuentran las reglas para los SKU. Aprende más sobre cada segmento de esta sintaxis en la siguiente tabla.

| Segmento    | Descripción         |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **\[0-3\]**#10000\[1-2\]\[1\]pricetable1;#20000\[0-2\]\[0\]pricetable2;#30000\[0-2\]\[0\]pricetable3       | Cantidad mínima y máxima de ítems que se pueden seleccionar del grupo. El primer segmento define cuántas opciones acepta esta assembly option en total. **\[0-3\]** significa que puedes seleccionar un mínimo de cero elementos y un máximo de tres. Si el valor es **\[1-1\]**, significa que solo puedes seleccionar un elemento de entre todas las opciones. |
| \[0-3\]#**10000**\[1-2\]\[1\]pricetable1;**#20000**\[0-2\]\[0\]pricetable2;#**30000**\[0-2\]\[0\]pricetable3 | Después de cada `#`, debes incluir el ID del SKU del componente. Debes utilizar al menos un SKU en las assembly options.      |
| \[0-3\]#10000**\[1-2\]**\[1\]pricetable1;#20000**\[0-2\]**\[0\]pricetable2;#30000**\[0-2\]**\[0\]pricetable3 | Este segmento define la cantidad mínima y máxima de cada SKU que el cliente final puede seleccionar. Si el valor es **\[0-1\]**, significa que puede haber hasta uno de este SKU.                             |
| \[0-3\]#10000\[1-2\]**\[1\]**pricetable1;#20000\[0-2\]**\[0\]**pricetable2;#30000\[0-2\]**\[0\]**pricetable3 | Este segmento define la cantidad seleccionada por defecto para cada SKU.  |
| \[0-3\]#10000\[1-2\]\[1\]**pricetable1**;#20000\[0-2\]\[0\]**pricetable2**;#30000\[0-2\]\[0\]**pricetable3** | El último segmento indica la tabla de precios de cada ítem.                    |

![assembly-option-exemplo-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/campos-personalizados/assembly-options_2.png)

#### Configuración del anexo

Para agregar una assembly option, es necesario tener un adjunto ya creado. Consulta el artículo [Registrar un anexo](/es/docs/tutorials/registrar-un-anexo) para aprender a crear uno.

Después de añadir un anexo y [asociarlo a un SKU](/es/tutorial/registrar-un-anexo--7zHMUpuoQE4cAskqEUWScU#asociar-el-anexo-a-un-sku), sigue los pasos que se indican a continuación para configurar la assembly option.

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Campos personalizados**.
3. En la pestaña **Servicios y SKU**, elige el anexo al que quieres añadir la assembly option y haz clic en `Editar`.
4. En el campo **Valores permitidos**, inserta la sintaxis que has creado, como se describe en la sección [Sintaxis de las assembly options](#sintaxis-de-las-assembly-options).
5. Haz clic en `Guardar`.
