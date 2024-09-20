---
title: 'Configurar la Greenlist'
id: 2NryhZ5B0cikuwQU2GYI6a
status: ARCHIVED
createdAt: 2017-09-26T20:18:34.384Z
updatedAt: 2021-02-18T22:23:02.404Z
publishedAt: 
firstPublishedAt: 2019-01-25T13:43:43.063Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: configurar-la-greenlist
locale: es
legacySlug: configurar-la-greenlist
subcategoryId: 6dLwF22Zwcy4iec2QSMeyG
---

La Greenlist es una app gratuita que puedes instalar en tu tienda VTEX a través de nuestra [tienda de extensiones](/pt/tutorial/instalando-extensoes-na-extension-store).

1. [Qué es la Greenlist](#que-es-la-greenlist). 
2. [Firma del pedido](#firma-del-pedido).
3. [Recurrencia de la firma](#recurrencia-de-la-firma).
4. [Valor máximo del pedido](#valor-maximo-del-pedido).
5. [Plazo de seguridad para chargeback](#plazo-de-seguridad-para-chargeback).
6. [Activando la Greenlist](#activando-la-greenlist).

## Qué es la Greenlist

Si tu tienda usa antifraude, cada vez que un cliente finaliza un pedido, el sistema realiza los siguientes pasos:
1. Verifica si el cliente tiene crédito;
2. Si el cliente tiene crédito, consulta el antifraude para saber si el cliente es confiable;
3. Si el antifraude aprueba el cliente, el pedido sigue adelante.

Habiendo o no aprobación por parte del antifraude, una vez que este servicio ya haya sido consultado, el comerciante recibe la cobranza. La cobranza del antifraude ocurre a través de un porcentaje del valor del pedido, por lo tanto, __para cada pedido que pasa por el antifraude, el propietario de la tienda necesita pagar un valor correspondiente al total del pedido para el servicio antifraude__.

__La Greenlist es una lista de clientes pre aprobados por el propietario de la tienda de acuerdo a determinadas condiciones.__ Una vez que esos clientes hagan un cierto número de compras en su sitio, siempre informando los mismos datos (como email y número de tarjeta de crédito), son marcados como confiables. Así, en las próximas veces que hagan una compra en su sitio, los pedidos de ellos no pasarán por el antifraude, y la tienda ahorrará el valor que tendría que pagar por ese servicio.

<div class=“alert alert-warning”>
Cuanto más datos de suscripción exijas, más estrictas serán tus reglas, y menos clientes se insertarán en la Greenlist.
</div>

## Configurar la Greenlist

### Firma del pedido

Para marcar un cliente como confiable, el propietario de la tienda usa algunos criterios. Estos criterios son los __datos de compra que componen la firma de un pedido__

![Greenlist - suscripción](//images.contentful.com/alneenqid6w5/3CvVVFRIJ22wS6o8sq6ok6/45cdf4a8259437d36aa74a40a8a04715/Greenlist_-_assinatura.png) 

Digamos que marques tres de las opciones arriba: __E-mail__, __Dirección de entrega__ y __Tarjeta de crédito__. Esto significa que, para que nuevos pedidos de ese cliente no pasen por el antifraude, él tiene que usar en nuevas compras los mismos datos de email, dirección y tarjeta de crédito. 

Si el cliente efectúa el número mínimo de compras usando estos mismos datos, se convierte en confiable, pero si en algún momento hace una compra usando, por ejemplo, otra dirección de entrega, su pedido pasará por el antifraude normalmente.

### Recurrencia de la suscripción

La recurrencia de la firma define el número de pedidos que un cliente debe hacer usando los mismos datos de firma para que sea considerado confiable y así ingresar a la Greenlist.

Este número debe definirlo el propio propietario de la tienda, y puede variar de __1 a 10__.

![Greenlist - recurrencia](//images.contentful.com/alneenqid6w5/2TFJUnw1Cw8I0KcqCcAsmS/6aaec62228ec8ff5a38093e743a4229b/Greenlist_-_recorrencia.png)

Si defines la recurrencia en 6, por ejemplo, todos los clientes de tu tienda que hagan seis compras usando los mismos datos definidos en la firma dejan de pasar por el antifraude a partir de la próxima compra.

### Valor máximo del pedido]

Puedes configurar un valor máximo para que la Greenlist sea válida. Esto porque aun si un cliente ya ha sido marcado como confiable, puedes preferir que - para valores muy altos, en los que es mayor el riesgo de pérdida – el antifraude actúe independientemente del historial de compras de ese cliente.

![Greenlist - valor maximo](//images.contentful.com/alneenqid6w5/1CG6Wm74qIu4Qam2WekkE4/02f3e165b7970651406d667ae66e4589/Greenlist_-_valor_maximo.png)

### Plazo de seguridad para Chargeback

Algunas veces, después de efectuado un pedido y aprobada la compra por el antifraude, puede ocurrir chargeback tras varios días, o sea, es posible que – aun teniendo el pedido aprobado inicialmente – el antifraude llegue a identificar que se trataba de un fraude. 

En este caso, es interesante definir un margen de seguridad para el análisis de la Greenlist. Por ejemplo, al elegir un plazo de seguridad de 30 días, el comerciante está diciendo que todo pedido aprobado por el antifraude será evaluado por la Greenlist solamente después de 30 días.

![Greenlist - chargeback](//images.contentful.com/alneenqid6w5/314Ig5HLCU2uy0kyYEu4gC/105ed241ac49923035a7b4d441d698e0/Greenlist_-_chargeback.png)

### Activando la Greenlist

Al terminar de definir las reglas de tu Greenlist, sigue los pasos a continuación:
- Verificar si el botón de __Status__, en la parte superior de la página, está activado. Esto es necesario para que funcione la Greenlist; 
- Revisar la configuración de tus reglas en la caja __Resumen de la Regla__
- Si está todo OK, hacer clic en __Guardar Regla__

Hecho todo lo anterior, la Greenlist ya estará vigente para nuevos pedidos.

### Remover un cliente de la Greenlist

Si identificas que el pedido de un cliente integrante de la Greenlist (o cualquier otro cliente) es un fraude, puedes indicarlo manualmente. Basta seguir los pasos a continuación:

1. Acceder al módulo __PCI Gateway__ en el Admin de tu tienda; 
2. En la lista de transacciones, hacer clic en la transacción que se desea marcar como fraude;
3. Hacer clic en el botón __Marcar el pago como fraude__.

![Marcar como fraude](//images.contentful.com/alneenqid6w5/3EiAcGulosCgQq4qCIGqQE/d0be6c70e7129f63b189c56bdb79012b/fraud.png)

Una vez que se marca una transacción como fraude, se remueve del Greenlist el cliente que hizo el pedido. 
