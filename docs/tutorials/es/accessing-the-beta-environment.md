---
title: 'Accede al entorno beta a través del dominio myvtex.com'
id: 3BHM289568gcSwk2O80Asu
status: CHANGED
createdAt: 2018-07-26T18:09:29.968Z
updatedAt: 2024-03-13T12:00:57.622Z
publishedAt: 2024-03-12T19:18:51.136Z
firstPublishedAt: 2018-07-26T18:43:10.906Z
contentType: tutorial
productTeam: Reliability
author: authors_59
slug: acceder-al-ambiente-beta
locale: es
legacySlug: acceder-al-ambiente-beta
subcategory: Se4oi5LroIII2Ei0uGAoE
---

En VTEX, todas las tiendas disponen de un entorno beta. En este entorno, los usuarios de la plataforma, ya sean retailers, desarrolladores u otras personas con acceso, pueden llevar a cabo pruebas para validar nuevas configuraciones o versiones de aplicaciones/servicios antes de implementar cambios en el entorno donde los clientes realizan sus compras, conocido como entorno de producción (stable).

>ℹ️ El entorno beta es una reproducción exacta del entorno de producción (stable), que incluye todos los datos y configuraciones de la tienda.

De esta manera, **cualquier modificación de datos en el entorno beta afecta a los datos en el entorno stable**.

## Accede al entorno beta

Para acceder al entorno beta de tu tienda debes habilitar la cookie <code>vtex-commerce-env</code>siguiendo estos pasos:

<ol start="1">
  <li>En el Admin VTEX, accede a la pantalla DevTools en tu navegador presionando la tecla <code>F12</code> o haciendo clic derecho y seleccionando la opción <b>Inspeccionar</b>.
.</li>
  <li>En la barra superior de la pantalla accede a la pestaña <b>Aplicación</b>, y en la barra lateral izquierda, en Cookies, haz clic en la URL de tu tienda.

</li>
  <li>En la tabla, ingresa la siguiente información en las celdas de la última fila:
</li>
  <ul>
<li>Nombre: <code>vtex-commerce-env</code></li>
<li>Valor: <code>beta</code>
</li>
</ul>
<img src="https://images.ctfassets.net/alneenqid6w5/3g8wintA1heJbzdV8J0s45/8eb6f5917e2d9d8a134b81231dc42728/Ambiente_beta_.png" alt="beta">
<li>Actualiza la página presionando <code>F5</code> o la tecla de actualización de tu navegador. Una vez que a página se haya cargado, el Admin de la tienda ya estará en el entorno beta.
</li>
</ol>

>ℹ️ Para restaurar la tienda a su entorno principal, accede nuevamente a la pantalla DevTools de tu navegador y elimina la cookie vtex-commerce-env. Actualiza la página una vez más para volver al entorno de producción **stable**.
