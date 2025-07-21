---
title: "La condición de número máximo de plazos en el público de la campaña no se evalúa correctamente"
id: 6u8W11lei20LzAG8UsVDV5
status: PUBLISHED
createdAt: 2024-11-27T14:53:58.108Z
updatedAt: 2024-11-27T14:57:47.693Z
publishedAt: 2024-11-27T14:57:47.693Z
firstPublishedAt: 2024-11-27T14:53:58.830Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: la-condicion-de-numero-maximo-de-plazos-en-el-publico-de-la-campana-no-se-evalua-correctamente
locale: es
kiStatus: Backlog
internalReference: 1141291
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La condición **Número máximo de cuotas** en las configuraciones de **Campaña de público** no se está evaluando correctamente. Este requisito no se tiene en cuenta a la hora de determinar si la campaña se corresponde, lo que permite que las campañas de promoción se apliquen de forma incorrecta. Este problema imposibilita la aplicación de restricciones basadas en cuotas en las campañas, lo que puede dar lugar a aplicaciones de descuentos no deseadas.


##

## Simulación



1. Crear una **Campaña de Público** y añadir una condición para un **Número máximo de cuotas** igual a "2".
2. Crea una **Campaña de Promoción** y asóciala a la Campaña de Público configurada.
3. Añade al carrito artículos que cumplan las condiciones definidas en la Campaña de Público.
4. 4. Vaya a la caja y observe que, ya en la fase del carrito, antes de que se defina un método de pago, la campaña coincide.



## Workaround


Los vendedores pueden configurar una **Promoción periódica** con restricciones de plazos en la sección **Métodos de pago**. Este método es menos dinámico que las campañas de público, pero garantiza la aplicación de las restricciones basadas en el pago a plazos.




