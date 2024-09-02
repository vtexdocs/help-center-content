---
title: 'El símbolo de moneda no sigue el lenguaje admin'
id: 7gEGdkDSbRCtk2Q1u2nW6k
status: PUBLISHED
createdAt: 2024-03-15T19:37:45.395Z
updatedAt: 2024-03-15T19:40:56.682Z
publishedAt: 2024-03-15T19:40:56.682Z
firstPublishedAt: 2024-03-15T19:37:46.387Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-simbolo-de-moneda-no-sigue-el-lenguaje-admin
locale: es
kiStatus: Backlog
internalReference: 1000915
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un usuario accede a la pantalla de configuración del carrito en la zona de pedidos (`https://{accountname}}.myvtex.com/admin/checkout/#/configurations )` el símbolo de la moneda sigue las convenciones de la configuración regional indicada por el admin, el intercambio de este símbolo se realiza siempre que el admin indica una configuración regional diferente, sin embargo según nuestro análisis este intercambio está fallando en determinados momentos, provocando que el símbolo de la moneda indicado sea el predeterminado de la página que en este caso es R$.


##

## Simulación




- Inicie sesión en admin
- Vaya a https://.myvtex.com/admin/checkout/#/configurations
- Cambie la configuración regional a PT y vuelva a EN;
- Actualice la página y verá que el símbolo de moneda sigue siendo R$;



## Workaround


Actualmente no tenemos una solución para este caso, pero no afecta al funcionamiento de la tienda, ya que el símbolo de moneda en esta área es sólo visual y no tiene ningún impacto operativo en la tienda.




