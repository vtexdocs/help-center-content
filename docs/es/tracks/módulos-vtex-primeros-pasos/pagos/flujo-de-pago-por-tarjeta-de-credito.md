---
title: 'Flujo de pago por tarjeta de crédito'
id: TEYVv2fcVkH7et9n3OnBS
status: PUBLISHED
createdAt: 2019-11-12T15:51:05.024Z
updatedAt: 2023-11-01T12:40:40.235Z
publishedAt: 2023-11-01T12:40:40.235Z
firstPublishedAt: 2019-11-22T19:30:16.374Z
contentType: trackArticle
productTeam: Financial
slugEN: credit-card-payment-flow
locale: es
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: pagos
order: 3
---

El flujo básico de un pago por tarjeta de crédito es realizado por los siguientes players:    
<br/>
- **Gateway de Pagos**: El [gateway de pagos](https://help.vtex.com/es/tutorial/o-que-e-um-gateway-de-pagamentos?locale=pt "Gateway de pagos") es un sistema que transmite los datos de las compras realizadas en su tienda. El gateway envía datos y recibe respuestas para que usted sepa si debe confirmar o no una determinada compra.

- **Adquirente**: El [adquirente](https://help.vtex.com/es/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil?locale=pt#adquirente "Adquirente"), también llamado acreditador, es una empresa que es especializada en procesar pagos; es decir, realizar la liquidación financiera de las transacciones de una tienda a través de tarjetas de crédito y débito.

- **Bandera**: Las [banderas](https://help.vtex.com/es/tutorial/que-es-una-bandera-de-tarjeta-de-credito--4bNba5QYuIwKEmac88KwyI "Bandera") son empresas responsables de definir las reglas de negocio para compras realizadas con tarjeta de crédito. Definen los estándares  por los cuales los adquirentes deben procesar las transacciones realizadas mediante este medio de pago (cada bandera tiene sus propias reglas).
- **Banco Emisor**: El [banco emisor](https://help.vtex.com/es/tutorial/o-que-e-banco-emissor?locale=pt "Banco Emisor") es la institución financiera responsable de los medios de pago, ya sean boletos bancarios, tarjetas de débito o crédito. Es este quien, al recibir los datos de una compra realizada en su tienda, autoriza o no la venta (dependiendo del límite de crédito o del dinero disponible en la cuenta del usuario).
<br/>
Para saber más sobre los agentes financieros involucrados en el flujo de pago de un pedido en Brasil, consulte [nuestro artículo].
(https://help.vtex.com/es/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil?locale=pt#adquirente "Agentes financieros"). <br/>
<br/>

## Flujo de Pago

El flujo completo para pago por tarjeta de crédito en VTEX puede ser descrito por la siguiente imagen.  

![Tarjeta de crédito - Flujo básico de un pago](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/pagos/flujo-de-pago-por-tarjeta-de-credito_1.JPG)

1. En la pantalla de Checkout de su tienda, el cliente elige el **Medio de pago** _tarjeta de crédito_ para realizar el pago de su compra.
2. La información de este pago se pasa al **Gateway de Pagos**, que es el player responsable de garantizar que este pago se realice con éxito.
3. Con la información en la mano, el _gateway de pagos_ transmite la información necesaria al **Adquirente**, que es responsable de liquidar las transacciones financieras con los comerciantes minoristas.
4. Al tener la información, el adquirente envía los datos del pago a la **Bandera**. La bandera conecta el sistema de adquirentes con los bancos emisores.
5. Por último, la bandera envía la información del pago al **Banco Emisor**. El banco emisor realiza el análisis de crédito, verifica el límite disponible y, a continuación, autoriza o deniega el pago.

<br/>

Con la respuesta del banco emisor, se realiza el flujo inverso y el **Gateway de Pagos** recibe la información si el pago fue aprobado o denegado.

<br/>

> ℹ️ Es posible incluir el Antifraude en este flujo. En este caso, el antifraude recibe la información del gateway de que el pago fue  preautorizado por el banco emisor. Con la información recibida del gateway, el antifraude envía una respuesta de aprobación o denegación del pago. Si el antifraude no lo aprueba, el pago se cancela. Si el pago es aprobado, el pedido puede continuar su flujo normal.

