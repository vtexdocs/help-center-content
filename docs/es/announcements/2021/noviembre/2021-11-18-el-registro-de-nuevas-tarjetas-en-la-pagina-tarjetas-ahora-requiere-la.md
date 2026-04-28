---
title: 'El registro de nuevas tarjetas en la página Tarjetas ahora requiere la validación reCAPTCHA'
id: 67gG1eZGUBHQXqEBwTfLk9
status: PUBLISHED
createdAt: 2021-11-18T13:23:24.255Z
updatedAt: 2021-11-18T14:05:02.683Z
publishedAt: 2021-11-18T14:05:02.683Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2021-11-18-adding-new-cards-to-the-my-cards-page-now-requires-recaptcha-validation
locale: es
legacySlug: el-registro-de-nuevas-tarjetas-en-la-pagina-tarjetas-ahora-requiere-la
announcementImageID: 'undefined'
announcementSynopsisES: 'VTEX requerirá la validación mediante reCAPTCHA cada vez que un cliente registre una nueva tarjeta en la página Tarjetas'
---

A partir del 18 de noviembre de 2021, la plataforma VTEX requerirá la validación mediante [reCAPTCHA](https://developers.google.com/recaptcha/docs/display) cada vez que un cliente registre manualmente una nueva tarjeta en la [página Tarjetas](/es/docs/tutorials/como-funciona-mi-cuenta#cartoes) de tu tienda.

Esto también significa que hay [mejoras en la ruta de API My Cards](https://developers.vtex.com/vtex-developer-docs/changelog/improvements-my-cards-api-endpoint).

Este cambio es importante, ya que reduce drásticamente la probabilidad de que se produzcan ataques en el flujo de la [página Tarjetas](/es/docs/tutorials/como-funciona-mi-cuenta#cartoes). Además, la experiencia de compra de tus clientes no se ve afectada, ya que el cambio no tiene ningún impacto en el flujo del Checkout.

## ¿Qué se necesita hacer?

Si tu tienda utiliza nuestra UI nativa en la [página Tarjetas](/es/docs/tutorials/como-funciona-mi-cuenta#cartoes), el cambio debería producirse automáticamente. En este caso, no se espera que sea necesaria ninguna acción, pero te recomendamos que revises el diseño de la página para asegurarte de que funciona correctamente.

Ten en cuenta que para probar esta validación en tu tienda, debes acceder a ella a través de la dirección pública (sin el entorno `myvtex`), utilizando un perfil común, sin permisos de administrador de la tienda o desarrollador.

Si tu tienda tiene alguna implementación de UI o personalización que se comunique directamente con esta [ruta de API](https://developers.vtex.com/vtex-developer-docs/changelog/improvements-my-cards-api-endpoint), ponte en contacto con nuestro [equipo de soporte](https://supporticket.vtex.com/support) para actualizar tu implementación de manera adecuada.

