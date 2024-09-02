---
title: ''
id: oqLsT8s8KSlRsEWxu6jX9
status: DRAFT
createdAt: 2019-03-20T16:38:03.548Z
updatedAt: 2021-08-13T18:00:52.484Z
publishedAt: 
firstPublishedAt: 2019-03-20T17:16:16.502Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 71cQH3Q0oKXzeY2DmMZRKX
slug: como-corrigir-pedido-com-divergencia-entre-o-valor-total-do-pedido-da
locale: es
legacySlug: como-corrigir-pedido-com-divergencia-entre-o-valor-total-do-pedido-da
---

En los casos de integración con Magazine Luiza, es posible que algunos pedidos realizados por la página de este marketplace no se integren en VTEX, lo que impide la finalización del ciclo de compra.

En el caso de Magazine Luiza, el administrador de la tienda puede registrar un Porcentaje de Tolerancia. Es decir, establecer una diferencia entre el valor del producto creado por el seller y el valor por el cual se vende el mismo producto, de hecho, en el marketplace.

Tanto no llenar el campo del Porcentaje de Tolerancia como no configurarlo correctamente pueden afectar el proceso.

Sin embargo, es posible corregir este contratiempo por el admin de VTEX.

Vea el paso a paso a continuación:

1. Acceda al módulo __Integraciones__
2. Haga clic en __Configuraciones__
3. Acceda a la sesión de __Magazine Luiza__
4. Haga clic en el ícono de __Engranaje__ 
5. Busque por __Porcentaje de Tolerancia__ y agregue un valor

<div class="alert alert-info">
Generalmente, en el caso de Magazine Luiza, el valor mínimo cobrado por el Porcentaje de Tolerancia es de 15%. Sin embargo, todo depende del valor que el marketplace registrará para un producto. Siempre vale la pena verificar el porcentaje antes de llenar el campo en la configuración.
</div>

Después de completar esta primera etapa, es posible que los pedidos no se procesen inmediatamente. Aún así, existe una forma de agilizar el proceso que es ignorando [a divergência do valor do pedido](https://help.vtex.com/es/tracks/configurar-integracao-com-a-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y/4QWLcDhsh2GSSamouyu6M0 "a divergência do valor do pedido").

Siga con el proceso de configuración:

1. Vuelva para el __panel principal__
2. Acceda nuevamente al módulo __Integraciones__ 
3. Haga clic en __Pedidos__
4. Haga clic en el pedido en __rojo__
5. Haga clic en __Acciones__ (botón azul)
6. Haga clic en __Ignorar la divergencia y procesar__

Sus pedidos ahora deben estar correctamente integrados con el mercado de Magazine Luiza.
