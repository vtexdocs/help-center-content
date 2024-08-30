---
title: 'Identificar las promociones aplicadas en el carrito'
id: frequentlyAskedQuestions_345
status: PUBLISHED
createdAt: 2019-01-24T20:45:52.336Z
updatedAt: 2023-02-14T21:10:00.343Z
publishedAt: 2023-02-14T21:10:00.343Z
firstPublishedAt: 2019-01-24T22:08:49.142Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-identificar-las-promociones-aplicadas-en-el-carrito
locale: es
legacySlug: como-identificar-las-promociones-aplicadas-en-el-carrito
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Hay tres maneras de saber cuáles son las promociones que están aplicándose en el carrito. En las secciones a continuación, te mostraremos cuáles son:

* [Gestión de pedidos](#gestion-de-pedidos)
* [Carrito](#carrito)
* [orderForm](#orderform)
* [Simulador de Promociones (Beta)](#simulador-de-promociones-beta)

## Gestión de pedidos

Puedes hacer un pedido de prueba en la tienda y, luego, verificar en **Gestión de pedidos** qué promociones se aplicaron.

Ejemplo: imagina un pedido en el que se aplicó el envío gratis, pero no sabes por qué. Al hacer clic en un pedido en **Gestión de pedidos**, encontrarás el nombre de la promoción registrada en la sección **Ventas y Marketing** o **Promociones y asociaciones**.

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/1LpXT5YXqbsjb02eAQUsfg/3a84036866c5ed37f964e79a36f8bcd4/detalhes-oms-es.png" alt="detalles-del-pedido" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Detalles del pedido</em></figcaption></figure>

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/2mriJhUbQbqrrUSbp7tjaC/35b752b315cc8578199647fe535677fa/detalhes-neworders-en__1_.png" alt="detalles-del-pedido-beta" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Detalles del pedido (Beta)</em></figcaption></figure>

Si no hay ninguna promoción en la lista, eso significa que el envío gratis no se debe a una promoción, es decir, que el cálculo del envío en el módulo **Stock y entrega** tuvo como resultado cero. En ese caso, será necesario usar el **Simulador de envío** para comprender por qué razón el envío tiene un valor de cero.

## Carrito

En el carrito, puedes pasar el mouse sobre el ícono de interrogación que está debajo del precio de cada ítem para ver los descuentos aplicados, tal como se muestra a continuación.

Sin embargo, si se aplicó más de una promoción, aparecerá solo la sumatoria de todos los descuentos, lo cual dificultará el análisis del escenario.

![example-cart](https://images.ctfassets.net/alneenqid6w5/4OuONCFldxuXYgevJ8wU81/8d5f5572c67f308480e9e4b1f65dc9e7/image6.png)

## orderForm

>⚠️ Para realizar la investigación que se muestra en esta sección, deberás usar Google Chrome. Como se trata de una herramienta externa a VTEX, puede actualizarse sin previo aviso.

En la página del carrito, puedes verificar el `orderForm`, un archivo en formato JSON con toda la información correspondiente al pedido que se está creando.

Sigue estos pasos para encontrar el `orderForm` e identificar las promociones aplicadas:

1. En el carrito, haz clic en la pantalla con el botón derecho del mouse y, luego, haz clic en **Inspeccionar**. Otra opción es acceder directamente a las **Herramientas de desarrollador** a través del atajo `Ctrl+Shift+I`.
2. Haz clic en `Network`.
3. Selecciona la opción **Mantener registro**.
4. Actualiza la página.
5. Una vez que cargue, presiona `Ctrl+F` para hacer una búsqueda en la ventana **Herramientas de desarrollador**. Escribe `orderForm` en la barra de búsqueda. ![order-form](https://images.contentful.com/alneenqid6w5/jtqrcUjDAAqoMUGiYM4qE/94803953c1577a7954ba09f163738e0e/order-form.png)
6. Haz clic sobre la línea de `orderForm`. Se abrirá una nueva ventana al costado.
7. Haz clic en `Preview (Previsualizar)`.
8. Busca `ratesAndBenefitsData` y haz clic en el ítem.
9. Haz clic en el sub-ítem `ratesAndBenefitsIdentifiers`.
10. Habrá un índice para cada promoción que se esté aplicando.

    Entre la información de ese índice, el campo `name` muestra el nombre de la promoción registrada en el módulo **Promociones y tasas**.

    El campo `id` muestra el identificador único de la promoción registrada en el módulo **Promociones y tasas**. Puedes acceder a las configuraciones de la promoción directamente desde la URL `https://{accountName}.vtexcommercestable.com.br/admin/rnb/#/benefit/{id}`, cambiando {accountName} por el nombre de tu cuenta e {id} por el identificador de la promoción.

## Simulador de Promociones (Beta)

El Simulador de promociones es una herramienta que permite ver las promociones creadas en la plataforma VTEX que se aplicaron al carrito y sus condiciones de activación. Como las promociones pueden configurarse de diversas maneras, es importante poder ver la [competencia](https://help.vtex.com/es/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270), la acumulación de promociones durante la compra y las causas de activación de dichas promociones.

Para obtener más información, lea el artículo [Simulador de promociones (Beta)](https://help.vtex.com/es/tutorial/simulador-de-promocoes-beta--4zc8SNqjqeIJ0ZRMhjlnvy).

## Más información

* [Cómo funcionan las promociones](https://help.vtex.com/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N)
* [Cómo identificar promociones asignadas a un SKU](https://help.vtex.com/es/tutorial/como-identificar-promociones-asignadas-un-sku--frequentlyAskedQuestions_4813)
