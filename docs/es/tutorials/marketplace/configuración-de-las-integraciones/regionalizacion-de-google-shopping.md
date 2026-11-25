---
title: 'Regionalización de Google Shopping'
createdAt: 2026-10-02T12:00:00.000Z
updatedAt: 2026-10-09T12:00:00.000Z
contentType: tutorial
productTeam: Channels
slugEN: google-shopping-regionalization
locale: es
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
hidden: false
---

La regionalización de Google Shopping sirve para elegir las regiones del país a las que la integración envía datos a Google. Google usa zonas fijas para dividir el país en regiones. Esas zonas, incluidas las **Zonas comunes**, ya vienen sincronizadas desde Logística y no se pueden modificar. Sin regionalización, el envío de la integración es nacional: cada SKU tiene un precio y una disponibilidad para todo el país. Con las regiones activas se pueden usar dos funcionalidades:

- **Google Shipping:** agrega envío y SLA por región, datos que el envío básico no incluye. El precio y la disponibilidad siguen siendo nacionales.
- **RAAP** (Regional Availability & Pricing): regionaliza el precio y la disponibilidad que la integración ya envía.

Con Google Shipping y RAAP activos, cada región puede tener su propio precio, disponibilidad, costo de envío y SLA, o no tener ninguno de esos datos. Estos valores se obtienen de una simulación, por lo que las promociones de precio y de envío también modifican lo que se envía a Google.

Para usar las funcionalidades de regionalización es necesario configurar la [integración de Google Shopping](/es/docs/tracks/marketplace-de-google-shopping) y tener [políticas de envío](/es/docs/tutorials/politica-de-envio) con la [tabla de envío](/es/docs/tutorials/plantilla-de-flete) configurada y activa para la [política comercial](/es/docs/tracks/definir-la-politica-comercial-google-shopping) de la integración.

Para enviar precio, disponibilidad, envío y SLA regionalizados configura las funcionalidades en la página **Preferencias** en este orden:

1. Confirmar que la política comercial de la integración tiene políticas de envío activas con tabla de envío configurada.
2. [Activar regiones en la integración de Google Shopping](#activar-regiones)
3. [Activar Google Shipping](#activar-google-shipping)
4. [Activar RAAP](#activar-raap)

![Preferencias de Google Shopping](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_1.png)

## Regionalización

La página **Configurar regiones** lista las zonas fijas ya sincronizadas desde Logística. En la parte superior de la página **Configurar regiones**, el aviso muestra cuántas zonas están sincronizadas. Esas zonas marcan el precio, la disponibilidad, el costo de envío y el SLA en Google. En esta página la tienda solo activa o desactiva cada zona. También se puede [buscar un producto y comprobar si está disponible](#probar-la-disponibilidad-del-producto) en cada zona.

Los datos de la página se muestran en una tabla con las siguientes columnas:

- **Zonas comunes:** nombre de la zona. Algunas filas agrupan otras zonas y pueden expandirse <i class="fas fa-angle-right" aria-hidden="true"></i>.
- **Cobertura:** rango de códigos postales de la zona.
- **Status:** indica cuándo la zona está `activa` y enviando información a Google.
- **Disponibilidad:** indica cuándo un producto está o no disponible en las regiones de la tabla.

Cada fila de la tabla tiene una casilla de verificación <a class="far fa-check-square" aria-hidden="true"></a> para activar o desactivar la zona.

Las zonas activas definen las regiones en las que **Google Shipping** y **RAAP** envían datos a Google. El precio, la disponibilidad, el envío y el SLA de cada SKU provienen de las políticas de envío activas vinculadas a la política comercial de la integración. Las zonas inactivas quedan fuera de las ofertas regionalizadas.

> ⚠️ Las tiendas que usan CMS Portal (Legado) o headless deben adaptar su página de producto para leer el parámetro `region_id` que Google agrega a la URL. Sin esta lectura, RAAP no se refleja en el storefront. Consulta la guía [Adapting headless storefronts to Google RAAP](https://developers.vtex.com/docs/guides/adapting-headless-storefronts-to-google-raap).

### Activar regiones

Para activar las regiones sigue los pasos a continuación:

1. En el Admin VTEX accede a **Marketplace > Conexiones > Google > Preferencias > Configurar regiones**.
2. Marca las zonas que deben enviarse a Google.
3. Haz clic en `Activar regiones`. El número en el botón indica cuántas zonas están seleccionadas.

Después de activar las regiones, la sección **Configurar regiones** muestra el status `Configurado`.

### Probar la disponibilidad del producto

En la página **Configurar regiones** se puede probar la disponibilidad de un producto según las regiones activas. Para realizar la prueba sigue las instrucciones a continuación:

1. En el Admin VTEX accede a **Marketplace > Conexiones > Google > Preferencias > Configurar regiones**.
2. En la barra de búsqueda ubicada sobre la tabla de datos busca y selecciona un producto del catálogo de tu tienda.
3. Espera a que se actualice la columna **Disponibilidad**.

En la columna **Disponibilidad** se mostrará el status de Disponible <i class="far fa-check-circle" aria-hidden="true"></i> o No disponible <i class="far fa-minus-circle" aria-hidden="true"></i> en cada región activa. Para ver el resultado de una zona específica usa el filtro País y busca por nombre o código postal.

![Configurar regiones con Activar regiones](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_3.png)

## Activar Google Shipping

[**Google Shipping**](https://support.google.com/merchants/answer/6324484?hl=es) envía a Google el costo de envío y el SLA de entrega ya calculados por la tabla de envío de VTEX, por región. Así los anuncios y las listas pueden mostrar el valor de envío y el SLA estimado, incluido el envío gratis o la entrega rápida. La integración usa las [zonas activas](#activar-regiones) como segmentación regional y las reglas de las políticas de envío ya existentes en VTEX.

Para activar Google Shipping sigue los pasos a continuación:

1. En el Admin VTEX accede a **Marketplace > Conexiones > Google > Preferencias**.
2. En la sección **Google Shipping**, haz clic en el botón <i class="fas fa-toggle-on" aria-hidden="true"></i>.
3. En el modal **¿Activar Shipping?**, haz clic en `Ver regiones configuradas` para ver qué regiones están activas o en `Continuar` para confirmar la activación.

> ⚠️ La activación de Google Shipping es obligatoria para usar RAAP.

## Activar RAAP

[**RAAP (Regional Availability & Pricing)**](https://support.google.com/merchants/answer/16782229?hl=es) hace que el precio y la disponibilidad que la integración ya envía a Google dejen de ser los mismos para todo el país y pasen a calcularse por región. Los anuncios y las listas pueden mostrar el precio y el stock válidos para la región del comprador. La integración usa las [zonas activas](#activar-regiones) para dividir por región y la variación de precio y stock que ya existe en VTEX.

> ⚠️ Activar RAAP sin una variación real de precio o stock por región puede causar inconsistencias en el catálogo enviado a Google.

Para activar RAAP sigue los pasos a continuación:

1. En el Admin VTEX accede a **Marketplace > Conexiones > Google > Preferencias**.
2. En la sección **RAAP**, haz clic en el botón <i class="fas fa-toggle-on" aria-hidden="true"></i>.
3. En el modal **¿Activar RAAP?**, haz clic en `Ver regiones configuradas` para ver qué regiones están activas o en `Continuar` para confirmar la activación.

## Desactivar Google Shipping o RAAP

Al desactivar **Google Shipping**, Google deja de recibir el costo de envío y el SLA por región. RAAP también deja de funcionar porque depende de Google Shipping.

Al desactivar **RAAP**, la integración vuelve a enviar el precio y la disponibilidad para todo el país. Si Google Shipping permanece activo, el costo de envío y el SLA por región se siguen enviando.

> ⚠️ Si Google Shipping se desactiva, la funcionalidad de RAAP deja de funcionar.

Para desactivar Google Shipping o RAAP sigue los pasos a continuación:

1. En el Admin VTEX accede a **Marketplace > Conexiones > Google > Preferencias**.
2. En la sección **Google Shipping** o **RAAP**, haz clic en el botón <i class="fas fa-toggle-off" aria-hidden="true"></i>.
3. Haz clic en `Desactivar`.
