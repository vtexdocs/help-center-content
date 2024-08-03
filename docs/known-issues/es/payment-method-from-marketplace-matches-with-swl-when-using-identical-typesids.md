---
title: 'El método de pago de Marketplace coincide con el de SWL cuando se utilizan tipos idénticos:ids'
id: 4AHyl5z7ySagx6Myx0KqM7
status: PUBLISHED
createdAt: 2022-03-15T22:06:35.540Z
updatedAt: 2024-02-16T20:29:19.824Z
publishedAt: 2024-02-16T20:29:19.824Z
firstPublishedAt: 2022-03-15T22:06:36.030Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: el-metodo-de-pago-de-marketplace-coincide-con-el-de-swl-cuando-se-utilizan-tipos-identicosids
locale: es
kiStatus: No Fix
internalReference: 402140
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la configuración del método de pago, en el producto de las promociones, no está previsto que se transmita a través de la solicitud/respuesta de cumplimiento.

Sin embargo, si el usuario configura 2 métodos de pago idénticos en cada lado (mercado y vendedor), con el mismo id y tipo y configura una promoción con este tipo de restricción en el mercado, en varios casos la validación de las promociones identificará esto como una coincidencia para los artículos que se venden con el inventario del vendedor.

Esto "no debería" estar ocurriendo bajo el producto actual, es un efecto secundario inesperado. 

Los efectos secundarios no deseados de esto son difíciles de mapear ya que la implementación original del producto no fue mapeada para que funcionara de esta manera. Su uso no garantiza su funcionamiento en todos los contextos y casos.

Se recomienda utilizar sólo lo que el producto está diseñado para hacer. Actualmente, no es posible pasar la condición del método de pago a través del cumplimiento, y el filtrado a través del mercado genera efectos colaterales no mapeados.




## Simulación


1) Establezca un método de pago en un mercado.

2) Configurar un método de pago en una cuenta hija de este mercado con el mismo id, tipo.

3) Configurar una promoción en el mercado restringida por este método de pago.

4) En el entorno del marketplace, addToCart un artículo utiliza un artículo utilizando el inventario del vendedor.

5) La promoción se aplicará sobre el artículo, lo que NO debería ser el caso bajo nuestro comportamiento actual esperado.




## Workaround


Ninguno (ya que se trata de un efecto secundario involuntario de algo que "no debería funcionar y que actualmente funciona de forma poco fiable").

