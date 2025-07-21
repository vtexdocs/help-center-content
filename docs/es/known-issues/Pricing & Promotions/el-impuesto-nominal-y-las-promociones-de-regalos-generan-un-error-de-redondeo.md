---
title: "El impuesto nominal y las promociones de regalos generan un error de redondeo"
id: 6zsBxIeKSPKX9yVRA5jcct
status: PUBLISHED
createdAt: 2024-08-29T14:57:35.310Z
updatedAt: 2024-12-19T13:35:00.593Z
publishedAt: 2024-12-19T13:35:00.593Z
firstPublishedAt: 2024-08-29T14:57:36.770Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: el-impuesto-nominal-y-las-promociones-de-regalos-generan-un-error-de-redondeo
locale: es
kiStatus: Backlog
internalReference: 1089066
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al configurar un impuesto nominal y promociones de regalo para el mismo artículo, el módulo de promociones puede generar una discrepancia de redondeo en el valor del impuesto durante la comunicación con la aplicación de pago. Esta discrepancia puede impedir que se completen los pedidos.



## Simulación


El problema es muy específico y difícil de reproducir, ya que depende de combinaciones concretas de cantidad de artículos, valores de impuestos y promociones de regalo. Los pasos para reproducirlo son los siguientes

1. Configure un impuesto nominal para un SKU específico, utilizando un valor de impuesto impar (por ejemplo, 4,99). Los números pares pueden no desencadenar este problema.
2. Cree una promoción de regalo para la misma SKU.
3. Añada una cantidad par de la SKU a la cesta.
4. 4. Intente finalizar el pedido. Puede aparecer un mensaje de error que impida finalizar el pedido.
5. Confirme el problema ajustando la cantidad de artículos en la cesta. Si al cambiar la cantidad de artículos se resuelve el problema, es probable que esté relacionado con este error.



## Workaround


Para evitar este problema:

- Utilice impuestos basados en porcentajes en lugar de impuestos nominales.
- Opte por otro tipo de promociones en lugar de promociones de regalo.





