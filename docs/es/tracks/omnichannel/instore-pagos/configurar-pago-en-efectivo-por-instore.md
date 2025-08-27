---
title: 'Configurar pago en efectivo por VTEX Sales App'
id: 4ye3bIWldaHJxGTgAziBZo
status: PUBLISHED
createdAt: 2020-06-28T16:04:36.122Z
updatedAt: 2023-05-31T15:48:30.288Z
publishedAt: 2023-05-31T15:48:30.288Z
firstPublishedAt: 2020-06-28T16:19:11.591Z
contentType: trackArticle
productTeam: Shopping
slugEN: configuring-cash-payments-through-instore
locale: es
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: instore-pagos
order: 4
---

Este artículo explica cómo configurar VTEX Sales App para aceptar pagos en efectivo.

Antes de configurar la visualización del pago en efectivo en VTEX Sales App, tienes que [crear un pago personalizado](#crear-un-pago-personalizado) y luego una [condición de pago](#crear-una-condicion-de-pago) para él. Ambas acciones se realizan en el panel administrativo de VTEX.

## Crear un pago personalizado

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la pestaña **Pagos personalizados**.
3. En la sección de **Pagarés**, haz clic en cualquiera de los recuadros que contienen <i class="fas fa-cog"></i> `Configurar`.
4. En el campo **Nombre**, ingresa un nombre para este pago personalizado. Por ejemplo,  "Efectivo".
5. En el campo **Autorizar automáticamente, **selecciona **Yes**. No es necesario rellenar ni modificar los demás campos.
6. Haz clic en `Salvar` (Guardar).

## Crear una condición de pago

Ahora vamos a crear la condición de pago.

1. Aún en la página de **Configuración **del módulo de **Pagos**, haz clic en la pestaña **Planes de Pago**.
2. Haz clic en el botón verde con el ícono `+` para añadir una nueva condición de pago, como se muestra a continuación.

![es-add-payment-condition](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/omnichannel/instore-pagos/configurar-pago-en-efectivo-por-instore_1.png)

3. En la sección __Pagos Personalizados__, haz clic en la opción __Efectivo__ que ha creado.
4. Introduce un nombre para esta condición de pago, cambia el status a __Activo__, y en el campo __Procesar con la afiliación__, selecciona el pago personalizado que creaste en el paso anterior.
5. Haga clic en `Guardar`.

<div class="alert-info">
Además de los ajustes anteriores, debes seguir la guía **[Definir los métodos de pago mostrados en VTEX Sales App](https://help.vtex.com/es/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy/jHQQcyX3WKeUFidwSjmY1)** para que las opciones de pago se muestren correctamente en la app.
</div>
