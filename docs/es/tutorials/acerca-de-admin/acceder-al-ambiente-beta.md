---
title: 'Accede al entorno beta a través del dominio myvtex.com'
id: 3BHM289568gcSwk2O80Asu
status: PUBLISHED
createdAt: 2018-07-26T18:09:29.968Z
updatedAt: 2024-03-13T12:00:57.622Z
publishedAt: 2024-03-12T19:18:51.136Z
firstPublishedAt: 2018-07-26T18:43:10.906Z
contentType: tutorial
productTeam: Reliability
author: authors_59
slugEN: accessing-the-beta-environment
legacySlug: acceder-al-ambiente-beta
locale: es
subcategoryId: Se4oi5LroIII2Ei0uGAoE
---

En VTEX, todas las tiendas disponen de un entorno beta. En este entorno, los usuarios de la plataforma, ya sean retailers, desarrolladores u otras personas con acceso, pueden llevar a cabo pruebas para validar nuevas configuraciones o versiones de aplicaciones/servicios antes de implementar cambios en el entorno donde los clientes realizan sus compras, conocido como entorno de producción (stable).

> ℹ️ El entorno beta es una reproducción exacta del entorno de producción (stable), que incluye todos los datos y configuraciones de la tienda.

De esta manera, **cualquier modificación de datos en el entorno beta afecta a los datos en el entorno stable**.

## Accede al entorno beta

Para acceder al entorno beta de tu tienda debes habilitar la cookie `vtex-commerce-env`siguiendo estos pasos:

<ol start="1">
  <li>En el Admin VTEX, accede a la pantalla DevTools en tu navegador presionando la tecla `F12` o haciendo clic derecho y seleccionando la opción **Inspeccionar**.
.</li>
  <li>En la barra superior de la pantalla accede a la pestaña **Aplicación**, y en la barra lateral izquierda, en Cookies, haz clic en la URL de tu tienda.

</li>
  <li>En la tabla, ingresa la siguiente información en las celdas de la última fila:
</li>
  <ul>
<li>Nombre: `vtex-commerce-env`</li>
<li>Valor: `beta`
</li>
</ul>

![beta](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/acerca-de-admin/visión-general-del-admin/acceder-al-ambiente-beta_1.png)

<li>Actualiza la página presionando `F5` o la tecla de actualización de tu navegador. Una vez que a página se haya cargado, el Admin de la tienda ya estará en el entorno beta.
</li>
</ol>

> ℹ️ Para restaurar la tienda a su entorno principal, accede nuevamente a la pantalla DevTools de tu navegador y elimina la cookie vtex-commerce-env. Actualiza la página una vez más para volver al entorno de producción **stable**.
