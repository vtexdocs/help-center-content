---
title: 'El mercado externo FOB integra un pedido (código Erro: "FMT010")'
id: 3qzV4zJRkPIwQnAZuK5dWu
status: PUBLISHED
createdAt: 2022-02-25T16:33:49.641Z
updatedAt: 2022-11-25T22:00:10.646Z
publishedAt: 2022-11-25T22:00:10.646Z
firstPublishedAt: 2022-02-25T16:33:50.398Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: el-mercado-externo-fob-integra-un-pedido-codigo-erro-fmt010
locale: es
kiStatus: Backlog
internalReference: 532377
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El mercado externo (socio) al tratar de integrar los pedidos FOB están recibiendo el error:
`"código": "FMT010",`
"mensaje": "El SLA seleccionado para el artículo <Descripción_SKU_Id> no está disponible"

Que es FOB, sigue la documentación con la descripción:
https://help.vtex.com/en/tutorial/como-funciona-o-frete-when-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ?&utm_source=autocomplete




## Simulación


Es posible realizar la simulación al tratar de integrarse con un socio (externo), con una Política de Envío "Entrega" habilitada, tendremos éxito, pero al deshabilitar esta Política de Envío tendremos el error: "código": "FMT010".




## Workaround


Para este caso tenemos una solución que es la necesidad de configurar una política de envío "Entrega".

