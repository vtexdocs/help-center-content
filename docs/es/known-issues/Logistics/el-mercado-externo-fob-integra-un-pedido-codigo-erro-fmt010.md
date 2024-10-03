---
title: "El mercado externo FOB integra un pedido (código Erro: 'FMT010')"
id: 3qzV4zJRkPIwQnAZuK5dWu
status: PUBLISHED
createdAt: 2022-02-25T16:33:49.641Z
updatedAt: 2024-02-16T20:26:31.795Z
publishedAt: 2024-02-16T20:26:31.795Z
firstPublishedAt: 2022-02-25T16:33:50.398Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: fob-external-marketplace-integrate-an-order-erro-code-fmt010
locale: es
kiStatus: No Fix
internalReference: 532377
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El mercado externo (socio) al tratar de integrar los pedidos FOB están recibiendo el error:
`"código": "FMT010",`
"mensaje": "El SLA seleccionado para el artículo <Descripción_SKU_Id> no está disponible"

Que es FOB, sigue la documentación con la descripción:
https://help.vtex.com/en/tutorial/como-funciona-o-frete-when-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ?&utm_source=autocomplete




## Simulación


Es posible realizar la simulación al tratar de integrarse con un socio (externo), con una Política de Envío "Entrega" habilitada, tendremos éxito, pero al deshabilitar esta Política de Envío tendremos el error: "código": "FMT010".




## Workaround


Para este caso tenemos una solución que es la necesidad de configurar una política de envío "Entrega".

