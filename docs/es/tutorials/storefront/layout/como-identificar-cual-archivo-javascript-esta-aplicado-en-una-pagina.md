---
title: '¿Cómo identificar cual archivo JavaScript está aplicado en una página?'
id: frequentlyAskedQuestions_6132
status: PUBLISHED
createdAt: 2019-01-24T20:46:02.714Z
updatedAt: 2023-03-29T14:21:09.594Z
publishedAt: 2023-03-29T14:21:09.594Z
firstPublishedAt: 2019-01-24T22:01:54.751Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_35
slugEN: how-to-know-which-javascript-file-is-being-applied-to-a-page
legacySlug: como-identificar-cual-archivo-javascript-esta-aplicado-en-una-pagina
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal (Legado).
</div>

La plataforma VTEX es extremadamente flexible. Por esto, es común que los clientes tengan varias customizaciones en el front-end del e-commerce. Diferentes herramientas pueden ser responsables de esas customizaciones, entre las que está Google Tag Manager o incluso archivos javascript incluidos en el CMS.

Muchas veces, el número de customizaciones es tan grande que, con el paso del tiempo, el mismo comerciante olvida que hace cada uno de esos archivos, ¿verdad?

Una forma de identificar qué archivo JavaScript está aplicando determinado efecto es por medio del camino a continuación.

Tenga em mente el texto contenido en un efecto de mouseover, por ejemplo. Al colocar su cursor sobre el símbolo del carrito, la siguiente mensaje aparece: “No tiene usted todavía productos en el carrito”

Para encontrar el js responsable de esta customización para poder modificarlo, siga los siguientes pasos:

1. Con su página abierta, haga clic en **F12** o elija **Inspeccionar página**;
2. Abra la pestaña **Network**;
3. Use el campo de busca del console e inserte la frase “No tiene usted todavía productos en el carrito;
4. La lista mostrará el archivo que contiene la string buscada;
5. En el Admin VTEX, accede a **Storefront > Layout > CMS** y busque el archivo en el CMS, por el siguiente camino:

*Files Manager > Haga click en .js > Busque por \_nombre\_del\_archivo\_.js*

Si quiere investigar si una customización de javascript está causando un error de layout, haga clic [aqui](/es/docs/tutorials/como-identificar-errores-de-layout-causados-por-archivos-javascript) para saber cómo identificar errores de JavaScript.
