---
title: 'Correspondencia manual de productos en Amazon'
id: 6QPcQ2zvTROe3VuDQ3kF4X
status: DRAFT
createdAt: 2022-11-25T21:20:50.102Z
updatedAt: 2023-01-24T20:39:11.781Z
publishedAt: 
firstPublishedAt: 2022-12-22T17:54:57.602Z
contentType: trackArticle
productTeam: Channels
slug: correspondencia-manual-de-productos-en-amazon
locale: es
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugES: integracion-de-amazon
---

>ℹ️ El flujo documentado en este artículo no es obligatorio. Si optas por mantener la correspondencia automática, VTEX no será responsable de posibles problemas de correspondencia con Amazon.

Cada vez que se envía a Amazon un [SKU](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) con [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube) registrado, el marketplace realiza un proceso llamado correspondencia, que consiste en unificar los anuncios de un mismo producto a través de su EAN.

El EAN registrado en VTEX se utiliza para hacer la equivalencia con los correspondientes [ASIN](https://associados.amazon.com.br/resource-center/asin-amazon?ac-ms-src=rc-home-card) (Amazon Standard Identification Number) en Amazon. Actualmente, esta correspondencia se produce automáticamente, sin embargo, puede que no se produzca correctamente. Esto se debe a que la correspondencia entre los EAN y los ASIN debe ser exacta para que los anuncios se vinculen correctamente.

Después de realizar el [envío de los productos](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD), sigue los pasos a continuación.

1. En el Admin VTEX, ve a *MARKETPLACE > Integraciones > Productos*.
2. Selecciona los productos con el campo **Afiliado** rellenado con `Amazon` y el campo **Status** con el valor `Proceso con aviso`. Verás los productos que tienen la lista de ASIN correspondientes.
3. Selecciona el ASIN correspondiente.
4. Haz clic en `Sí`.

Tras la confirmación del ASIN, la correspondencia estará completa.​​
