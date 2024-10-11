---
title: 'La interfaz de usuario de registro de vendedores no envía los productos a reindexar al desactivar un vendedor.'
id: 0iAMGhIOKDyMbEykB4pfx
status: PUBLISHED
createdAt: 2023-10-06T19:45:08.963Z
updatedAt: 2023-10-06T19:45:29.372Z
publishedAt: 2023-10-06T19:45:29.372Z
firstPublishedAt: 2023-10-06T19:45:09.832Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: seller-register-ui-doesnt-send-products-to-reindex-when-inactivating-a-seller
locale: es
kiStatus: Backlog
internalReference: 915970
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al utilizar la nueva interfaz de usuario de experiencia del vendedor, /admin/sellers, la acción de desactivar un vendedor debería reindexar sus productos relacionados para que puedan eliminarse de los mercados asociados, lo que no ocurre actualmente.


##

## Simulación


Acceda a la interfaz de usuario antes mencionada y, para una tienda que se está integrando con un mercado, con un punto final de afiliado (https://help.vtex.com/en/tutorial/como-configurar-afiliado--tutorials_187) y, a continuación, intente desactivar un vendedor disponible para esta misma política comercial.

Los artículos, en el marketplace, no se actualizarán.



## Workaround


Reindexe la base o utilice la interfaz de vendedor heredada ( https://accountname.vtexcommercestable.com.br/admin/site/seller.aspx), que activa la indexación correctamente.





