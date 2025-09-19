---
title: 'Errores de integración de pedidos de Dafiti'
id: 4t8AIA9R671jGHY8MOwHhS
status: PUBLISHED
createdAt: 2021-09-08T14:37:11.608Z
updatedAt: 2023-03-29T23:37:09.005Z
publishedAt: 2023-03-29T23:37:09.005Z
firstPublishedAt: 2021-09-08T14:56:15.029Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-dafiti-integration
legacySlug: errores-de-integracion-de-pedidos-de-dafiti
locale: es
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Hay varias razones por las que un pedido entre un _marketplace_ y una tienda VTEX no se integra, y para cada una de ellas hay una notificación que indica la naturaleza del error. Puede encontrar el mensaje de error en el Admin VTEX, en el módulo **Marketplace > Conexiones > Pedidos**. Para visualizar el mensaje, simplemente haga clic en el pedido.

En Dafiti, hay errores de integración de pedidos que se producen con más frecuencia que otros. Este artículo reúne los más comunes e indica cómo resolverlos.

#### Mensaje de error

`Não é possível integrar um pedido composto por produtos criados manualmente`

Este error se produce cuando un ítem del pedido se ha registrado directamente en la plataforma de Dafiti. Aunque el ítem también esté registrado en VTEX, este doble registro hace que el sistema VTEX no reconozca el ID del SKU, y el pedido no se integra. La solución es eliminar el registro del ítem en la plataforma Dafiti y, tras asegurarse de que el [SKU está registrado](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ) en VTEX, volver a procesar el pedido manualmente. En su Admin, en el módulo **Marketplace > Conexiones > Pedidos**, haga clic en el pedido con error. Luego, el botón **Acciones** se vuelve visible, haga clic en el mismo y elija la opción **Reprocesar**.

____

#### Mensajes de error

`No fue posible integrar el pedido, porque uno o más items no tienen suficiente inventario para el canal de ventas de Marketplace`<br>
</br> `No fue posible integrar el pedido, porque uno o más items no están disponibles`

Los errores relacionados con la falta o insuficiencia de stock pueden tener varias causas. Para identificar el origen del error y corregirlo, consulte el artículo [Errores de falta de stock en la integración de pedidos de marketplace](/es/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP).

____

#### Mensaje de error

`Não foi possível integrar o pedido, pois um ou mais itens não possui preço vigente para o canal de vendas configurado`

Este error indica una inconsistencia en el precio del SKU, que puede estar expirado o tener un error de registro. Verifique si es necesario [cambiar el precio del SKU](/es/tutorial/alteracao-de-preco-de-sku--tutorials_95) y vuelva a procesar manualmente el pedido. En su Admin, en el módulo **Marketplace > Conexiones > Pedidos**, haga clic en el pedido que tiene el error y, luego, haga clic en **Acciones**. Seleccione la opción **Reprocesar**.

____

#### Mensaje de error

`This api call "SetStatusToShipped" is currently not allowed`

En Dafiti, existe una configuración del sistema logístico que, por defecto, está marcada con el valor "sí" (verdadero). Esto permite que los envíos del tipo FOB y _Milk Run_ funcionen correctamente. Sin embargo, cuando el _seller_ no ha configurado ninguna de esta opciones en Dafiti, es posible que se produzca este error. Para corregirlo, hay que ponerse en contacto con Dafiti, que entonces va a cambiar la configuración del sistema de "sí" a "no", solucionando el problema.

____

#### Mensaje de error

`Valor de variação inválido`

El mensaje indica que la plantilla de mapeo de categorías y atributos no se ha rellenado correctamente, es decir, que en uno o varios campos se han insertado valores incorrectos. Por ejemplo, una especificación de tamaño se rellenó con el número cero, que no es un valor válido. Si es necesario, consulte las orientaciones para rellenar la plantilla de mapeo en el artículo [Envío de los productos a Dafiti](/es/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i/3b8BZfB1BC8G8SCe0ao46m).

____

#### Mensajes de error

`Pedido não integrado pois o mesmo não está pendente`<br>
</br>`No es posible integrar una orden que ya pasó del estado Pendiente en Dafiti`

Los errores mencionados se producen cuando se ha modificado el _status_ de un pedido directamente a través del portal de Dafiti. De este modo, el sistema VTEX ya no puede identificar el _status_ de este pedido, lo que imposibilita su integración, ya que un pedido de Dafiti solo se integra cuando tiene el _status Pending_ (pendiente). Los otros _status_ que existen son _Ready to ship_ (listo para enviar), _Shipped_ (enviado), _Delivered_ (entregado), _Return shipped by customer_ (devuelto por el cliente) y _Canceled_ (cancelado). No hay solución para los errores de esta naturaleza. La orientación es que un pedido de marketplace nunca debe ser procesado directamente por la plataforma del marketplace, sino por el Admin VTEX.

____

#### Mensaje de error

`OMS Api Error Occurred`

En la [configuración de la integración](/es/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i/3PV2OACP2E4O4uOKKW2sMg) con Dafiti, existe la opción de activar el campo FOB (_Free on Board_), un tipo de envío en el que la entrega del producto al cliente la realiza el _marketplace_. El mensaje de error mencionado se produce cuando el usuario ha activado la opción FOB en el conector, pero no tiene registrado este tipo de envío en Dafiti. La solución es desactivar primero el campo FOB en el conector. Para ello, vaya a su Admin VTEX, en el módulo **Marketplace > Conexiones > Integraciones**. En la tarjeta de Dafiti, haga clic en el ícono del engranaje y seleccione la opción **Editar configuración**, que abrirá un modal en el que el campo **FOB** debe estar marcado con la opción **No**. A continuación, haga clic en el botón **Guardar configuración**. Con el campo FOB desactivado en el conector, el siguiente paso es ponerse en contacto con Dafiti y solicitar la habilitación del envío de tipo FOB. Dafiti proporcionará instrucciones sobre cómo debe proceder el usuario.

### Sepa más

- [Errores de falta de stock en la integración de pedidos de marketplaces](/es/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Errores de SLA en la integración de pedidos de marketplaces](/es/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
- [Resolución de errores de divergencia de precio en pedidos de marketplaces](/es/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
