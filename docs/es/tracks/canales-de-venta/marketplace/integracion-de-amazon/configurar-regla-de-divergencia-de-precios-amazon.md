---
title: 'Configurar regla de Divergencia de precios'
id: 4iQ0d6wkLzCqhMXBKFWgI7
status: PUBLISHED
createdAt: 2022-01-04T19:43:43.162Z
updatedAt: 2022-01-05T15:47:12.676Z
publishedAt: 2022-01-05T15:47:12.676Z
firstPublishedAt: 2022-01-04T20:33:45.370Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-amazon
locale: es
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: configurar-la-integracion-de-amazon
order: 5
---

Cuando se utiliza una integración con _marketplaces_ como Amazon, a veces se produce una variación entre el precio fijado por el vendedor y el ofrecido por el _marketplace_, lo que resulta en pedidos con valores diferentes a los esperados. Esto puede resultar en pedidos con errores de divergencia de precios.

En el Admin VTEX, en **PEDIDOS > Gestión de pedidos > Autorización de pedidos**, la [regla de Divergencia de precios](/es/docs/tutorials/regla-de-divergencia-de-precios) permite controlar los pedidos con divergencia de valores. Solo usuarios con los [roles](/es/docs/tutorials/roles) Admin Super (_Owner_) o OMS Full pueden configurar esta funcionalidad, siguiendo las instrucciones descritas en [Configuración de regla de Divergencia de precios](/es/docs/tutorials/configuracion-de-regla-de-divergencia-de-valores).

La regla de Divergencia de precios se compone de una o varias reglas de autorización de pedidos, cada una de las cuales corresponde a un intervalo porcentual del precio del pedido. Las reglas de autorización se pueden configurar para negar automáticamente, autorizar automáticamente o exigir la autorización manual del pedido.

> ⚠️ Después de que hayas configurado la regla de Divergencia de valores, esta se aplicará a todos los marketplaces en los que actúes como seller. Estos pueden ser marketplaces VTEX, marketplaces externos, [conectores certificados (partners)](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#integrado-con-un-conector-certificado-partner), o otros [conectores nativos](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#integrado-con-un-conector-nativo-vtex) además de Amazon. 

Se recomienda configurar la regla de Divergencia de precios antes de avanzar al siguiente paso de configuración de la integración con Amazon. Si no se cumple esta recomendación la integración se realiza, pero los pedidos con divergencia de valores se retienen hasta que se crie la regla de Divergencia de precios. Puedes seguirlos en tu Admin VTEX, en **MARKETPLACE > Integraciones > Pedidos**.
