---
title: El pago con dos tarjetas no funciona con 3DS2
id: 7tjxz6qEsQz9o42diSqMpt
status: PUBLISHED
createdAt: 2021-06-15T15:24:52.846Z
updatedAt: 2022-12-22T20:43:02.853Z
publishedAt: 2022-12-22T20:43:02.853Z
firstPublishedAt: 2021-06-15T15:35:20.115Z
contentType: knownIssue
productTeam: Financial
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-pago-con-dos-tarjetas-no-funciona-con-3ds2
kiStatus: Backlog
internalReference: 
---

## Sumario

Al realizar el pago de una compra con dos tarjetas utilizando una afiliación que tiene activado [3DS2](https://help.vtex.com/es/announcements/fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura--6UdTjjVU1AcEQ2aE3Ftxsl), se produce un error y no es posible finalizar la compra en el checkout.

Esto sucede porque uno de los principales objetivos de [3DS2](https://help.vtex.com/es/announcements/fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura--6UdTjjVU1AcEQ2aE3Ftxsl) es la validación del perfil del comprador y, en algunos casos, al cerrar una compra, el usuario tendrá que demostrar su identidad cumpliendo un desafío en el checkout (comúnmente un popup con algunas instrucciones que debe seguir). 

Sin embargo, hoy en día VTEX __no soporta incluir dos desafíos al mismo tiempo__ en el checkout.  Por esta razón, no es posible pagar con 2 tarjetas cuando ambas condiciones de pago son procesadas por una afiliación que tiene activado 3DS2.

## Simulación

Si quiere simular los pasos que conducen al error, realice el siguiente procedimiento:

1. Acceda al __Admin__ VTEX.
2. Configure un [adquirente](https://help.vtex.com/es/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E) para transacciones con 3DS (en el caso de la V1, esta configuración se encuentra al lado del adquirente; en el caso de la V2, consulte más detalles en [Configurar el flujo de autenticación de 3DS2](https://help.vtex.com/es/tutorial/um-adquirente--7N1oRTG8dGmOiIugC0cs4E)).
3. Configure dos __medios de pago__ con tarjeta de crédito (Master, Visa, American Express, etc.) para que se procesen con el adquirente que ha configurado. 
4. Vaya a la página de inicio de su tienda.
5. Seleccione un ítem para comprar y prosiga con el checkout.
6. Complete la información requerida y proceda al pago.
7. Haga clic en __tarjeta de crédito__.
8. Seleccione la opción __pagar con dos tarjetas__.
9. Añada la información de dos tarjetas cuyas redes estén configuradas como condición de pago para que se procesen con el adquirente que tenga activado 3DS2.
10. Aparecerá un error en la pantalla, impidiendo la finalización de la compra.

## Solución

La solución a esta limitación es ocultar la opción «pagar con dos tarjetas» en el checkout de la tienda a través de una personalización (ya que es una opción nativa y no tenemos forma de desactivarla en el admin VTEX). 


## Simulación



## Workaround



