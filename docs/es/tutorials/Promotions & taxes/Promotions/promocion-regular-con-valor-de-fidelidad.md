---
title: 'Promoción regular con valor de fidelidad'
id: 3FCip23ZtvG0sDt0rVGVmR
status: PUBLISHED
createdAt: 2022-08-23T18:21:22.729Z
updatedAt: 2022-08-23T19:37:56.358Z
publishedAt: 2022-08-23T19:37:56.358Z
firstPublishedAt: 2022-08-23T19:30:54.880Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: regular-promotion-with-reward-value
locale: es
legacySlug: promocion-regular-con-valor-de-fidelidad
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

La [promoción regular](/es/tutorial/registro-promocion-regular--tutorials_327) ofrece descuentos flexibles, ya que combina varias condiciones, restricciones y beneficios. Una de las posibilidades de este tipo de promoción es brindar a los clientes algo de valor por su fidelidad, es decir, un crédito que funciona como _cashback_ para que lo utilicen en compras futuras en la tienda. El propósito de este tipo de descuento es generar fidelidad a través de compras recurrentes, es decir, ofrecer un incentivo para que los clientes vuelvan a comprar en la tienda.

En este artículo, explicamos:
- [Tipos de valores de fidelidad](#tipos-de-valores-de-fidelidad)
- [Configuración de las restricciones](#configuracion-de-las-restricciones)
- [Funcionamiento del valor de fidelidad](#funcionamiento-del-valor-de-fidelidad)

## Tipos de valores de fidelidad

Puedes crear una [promoción regular](/es/tutorial/registro-promocion-regular--tutorials_327) desde **Promociones y tasas > Promociones > Nueva promoción > Promoción regular**. Al momento de elegir el tipo de valor del descuento, verás dos opciones disponibles para el valor de fidelidad:

- [Valor de fidelidad nominal](#valor-de-fidelidad-nominal)
- [Valor de fidelidad porcentual](#valor-de-fidelidad-porcentual)

### Valor de fidelidad nominal

El **valor de fidelidad nominal** agrega un valor fijo como crédito a la cuenta que el usuario tiene en tu tienda. Para configurar este tipo de valor de fidelidad, debes rellenar los campos a continuación que corresponden al [formulario de la promoción regular](/es/tutorial/registro-promocion-regular--tutorials_327#1-cuales-son-los-datos-generales-de-la-promocion):

* **Valor nominal para programa de fidelidad:** monto del crédito que se agregará a la cuenta que el cliente tiene en tu tienda.
* **Aplicar crédito de fidelidad cuando el status del pedido cambie a:** campo donde se define el status del pedido a partir del cual estará disponible el crédito. Las opciones son **Facturado** o **Pago aprobado**.

En el ejemplo que se muestra a continuación, los clientes obtendrán un crédito de USD 10 en la tienda cuando el status del pedido cambie a **Facturado**.

![vf-nominal-es](https://images.ctfassets.net/alneenqid6w5/5i67rFawcAHCOpI84bBP2U/e281a28760551bfc2a2b2b270f61de9e/vf-nominal-es.png)

### Valor de fidelidad porcentual

El **valor de fidelidad porcentual** agrega un valor porcentual como crédito de acuerdo con el precio del producto adquirido. Para configurar este tipo de valor de fidelidad, debes rellenar los campos a continuación que corresponden al [formulario de la promoción regular](/es/tutorial/registro-promocion-regular--tutorials_327#1-cuales-son-los-datos-generales-de-la-promocion):

* **Valor porcentual para el programa de fidelidad:** porcentaje del valor del pedido que se agregará como crédito a la cuenta que el cliente tiene en tu tienda.
* **Aplicar crédito de fidelidad cuando el status del pedido cambie a:** campo donde se define el status del pedido a partir del cual estará disponible el crédito. Las opciones son **Facturado** o **Pago aprobado**.

En el ejemplo a continuación, los clientes obtendrán un crédito del 20 % del valor de la compra cuando el status del pedido cambie a **Pago aprobado**.

![vf-percentual-es](https://images.ctfassets.net/alneenqid6w5/4EIq0OwX5GI1FgdWk0JHje/68508961c6c3efc9495e79062c73a343/vf-percentual-es.png)

## Configuración de las restricciones

Además de definir el valor de fidelidad, debes configurar los demás datos y restricciones de tu promoción, es decir que debes definir los ítems a los que se les aplicará la promoción y las condiciones para que la promoción sea válida.

A continuación, encontrarás algunos ejemplos de restricciones que puedes configurar para que la promoción regular con valor de fidelidad se aplique en escenarios específicos:

* Compras a partir de determinado valor.
* Compras de productos específicos de determinada colección.
* Direcciones de entrega que forman parte de un determinado rango de códigos postales.
* Una compra por cliente.

Puedes aplicar estas configuraciones en **Promociones y tasas > Promociones > Nueva promoción > Promoción regular**. Para hacerlo, sigue las instrucciones del artículo [Promoción regular](/es/tutorial/registro-promocion-regular--tutorials_327).

## Funcionamiento del valor de fidelidad

El crédito está disponible para el cliente que hace un pedido compatible con las [restricciones definidas en la promoción](#configuracion-de-las-restricciones). Esto sucede luego de que el pedido haya cambiado al status definido, es decir, **Facturado** o **Pago aprobado**.

Los créditos son acumulativos, por lo tanto, si el cliente realiza más pedidos dentro de los criterios de la promoción, recibirá más créditos que se sumarán a los que no haya utilizado anteriormente. Los créditos no tienen vencimiento.

Puedes ver el valor otorgado en [Gestión de pedidos](#gestion-de-pedidos).

Una vez que el crédito está disponible, el cliente puede ver y usar el valor otorgado en futuras compras durante el [checkout](#checkout). 

Consulta las secciones a continuación para obtener más detalles sobre el valor de fidelidad en los siguientes contextos:

- [Gestión de pedidos](#gestion-de-pedidos)
- [Checkout](#checkout)

### Gestión de pedidos

Cuando un cliente realiza un pedido apto para obtener crédito por fidelidad, puedes ver la promoción aplicada y el valor otorgado en la página de detalles del pedido, a la cual se accede a través de **Gestión de pedidos > Todos los pedidos**, en el Admin VTEX.

En la sección **Ventas y marketing**, aparece el nombre de la promoción que se aplicó al pedido:

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/1LpXT5YXqbsjb02eAQUsfg/3a84036866c5ed37f964e79a36f8bcd4/detalhes-oms-es.png" alt="detalles-del-pedido" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Detalles del pedido</em></figcaption></figure>

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/2mriJhUbQbqrrUSbp7tjaC/35b752b315cc8578199647fe535677fa/detalhes-neworders-en__1_.png" alt="detalles-del-pedido-beta" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Detalles del pedido (Beta)</em></figcaption></figure>

En la sección **Flujo del pedido**, puedes verificar el valor de fidelidad otorgado:

![fluxo-oms-es](https://images.ctfassets.net/alneenqid6w5/62q5OKyu3BqHmbd23HVyOc/b9c7949cb68192d24c61ff0b855c751e/fluxo-oms-es.png)

Si utilizas la nueva interfaz de [Detalles del pedido (Beta)](/es/tutorial/pagina-de-detalles-del-pedido-beta--2Y75n54Cc9VizrlG1N6ZNl), accede a `Ver interacciones` para verificar el valor otorgado:

![interacoes-neworders-es](https://images.ctfassets.net/alneenqid6w5/7jjz0zNzeoZbOZ4PapQ836/c99a1b288b2d25931d695c19865731dd/interacoes-neworders-es.png)

Ten en cuenta que la promoción aplicada en el pedido del ejemplo brinda un **valor de fidelidad porcentual** del **50 %**. Gracias a esto, el cliente obtuvo un crédito de `R$ 54,28` para las próximas compras en la tienda, lo cual equivale al **50 %** de `R$ 108,55`, que es el valor total del pedido.

### Checkout

Los clientes de tu tienda ven el valor de fidelidad disponible para usar en la etapa de **Pago** durante el _checkout_, tal como se muestra a continuación.

![checkout-pt (1)](https://images.ctfassets.net/alneenqid6w5/6TNM6G9j4f3vnD7JERO6TE/60bf6f957d722190baf2c3c3e9b8a302/checkout-pt__1_.png)

El valor otorgado se puede usar como parte de pago. Para hacerlo, el cliente debe hacer clic en `Utilizar crédito` e ingresar el valor que desea usar.

El valor se descontará de la otra forma de pago seleccionada. En el ejemplo a continuación, la factura pasó a tener un valor de `R$ 113,50`, que corresponde a `R$ 167,80` menos el valor de fidelidad utilizado (`R$ 54,30`).

![checkout-2-pt (1)](https://images.ctfassets.net/alneenqid6w5/6pM4KJyCPRijRDFqLHNehz/26f4604ae74e66ebfc41040164d8c1e9/checkout-2-pt__1_.png)

## Más información

* [Promoción regular](/es/tutorial/registro-promocion-regular--tutorials_327)
