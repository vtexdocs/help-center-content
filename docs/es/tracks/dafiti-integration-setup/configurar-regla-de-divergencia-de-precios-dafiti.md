---
title: 'Configurar regla de Divergencia de precios'
id: 4rGMP9mEVOKCZCM71yzxnj
status: PUBLISHED
createdAt: 2022-01-05T16:09:05.484Z
updatedAt: 2023-08-11T18:26:09.918Z
publishedAt: 2023-08-11T18:26:09.918Z
firstPublishedAt: 2022-01-05T16:11:57.454Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-dafiti
locale: es
trackId: 4wF4RBx9ygEkimW6SsKw8i
trackSlugES: configurar-la-integracion-de-dafiti
---

Cuando se utiliza una integración con _marketplaces_ como Dafiti, a veces se produce una variación entre el precio fijado por el vendedor y el ofrecido por el _marketplace_, lo que resulta en pedidos con valores diferentes a los esperados. Esto puede resultar en pedidos con errores de divergencia de precios.

En el Admin VTEX, en **PEDIDOS > Gestión de pedidos > Autorización de pedidos**, la [regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) permite controlar los pedidos con divergencia de valores. Solo usuarios con los [roles](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (_Owner_) o OMS Full pueden configurar esta funcionalidad, siguiendo las instrucciones descritas en [Configuración de regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

La regla de Divergencia de precios se compone de una o varias reglas de autorización de pedidos, cada una de las cuales corresponde a un intervalo porcentual del precio del pedido. Las reglas de autorización se pueden configurar para negar automáticamente, autorizar automáticamente o exigir la autorización manual del pedido.

>⚠️ Después de que hayas configurado la regla de Divergencia de valores, esta se aplicará a todos los marketplaces en los que actúes como seller. Estos pueden ser marketplaces VTEX, marketplaces externos, <a href= "https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-certificado-partner">conectores certificados (partners)</a>, o otros <a href= "https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex">conectores nativos</a> además de Dafiti. 

Se recomienda configurar la regla de Divergencia de precios antes de avanzar al siguiente paso de configuración de la integración con Dafiti. Si no se cumple esta recomendación la integración se realiza, pero los pedidos con divergencia de valores se retienen hasta que se crie la regla de Divergencia de precios. Puedes seguirlos en tu Admin VTEX, en **MARKETPLACE > Integraciones > Pedidos**.
