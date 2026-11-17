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
- **Gateway de pagos**: el [gateway de pagos](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#gateway) es un sistema que transmite los datos de las compras realizadas en tu tienda. El gateway envía datos y recibe respuestas para que sepas si una compra determinada debe confirmarse o no.

- **Adquirente**: el [adquirente](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#adquirente), también llamado acreditador, es una empresa especializada en procesar pagos, es decir, hacer la liquidación financiera de las transacciones de una tienda con tarjetas de crédito y débito.

- **Red de tarjeta**: las [redes de tarjeta](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#red-de-tarjeta) son empresas responsables de definir las reglas de negocio para compras realizadas con tarjeta de crédito. Las redes de tarjeta definen los estándares que deben seguir los adquirentes al procesar las transacciones realizadas con este medio de pago. Cada red tiene sus propias reglas.
- **Banco emisor**: el [banco emisor](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#banco-emisor) es la institución financiera responsable de los medios de pago, ya sean boletos bancarios, tarjetas de débito o de crédito. Es el que, al recibir los datos de una compra realizada en tu tienda, autoriza o no la venta (según el límite de crédito o el dinero disponible en la cuenta del usuario).
<br/>
Para saber más sobre los agentes financieros que participan en el flujo de pago, consulta [nuestro artículo](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#adquirente). <br/>
<br/>

## Flujo de Pago

El flujo completo para pago por tarjeta de crédito en VTEX puede ser descrito por la siguiente imagen.  

![Tarjeta de crédito - Flujo básico de un pago](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/módulos-vtex-primeros-pasos/pagos/flujo-de-pago-por-tarjeta-de-credito_1.JPG)

1. En la pantalla de Checkout de su tienda, el cliente elige el **Medio de pago** _tarjeta de crédito_ para realizar el pago de su compra.
2. La información de este pago se pasa al **Gateway de Pagos**, que es el player responsable de garantizar que este pago se realice con éxito.
3. Con la información en la mano, el _gateway de pagos_ transmite la información necesaria al **Adquirente**, que es responsable de liquidar las transacciones financieras con los comerciantes minoristas.
4. Al tener la información, el adquirente envía los datos del pago a la **Bandera**. La bandera conecta el sistema de adquirentes con los bancos emisores.
5. Por último, la bandera envía la información del pago al **Banco Emisor**. El banco emisor realiza el análisis de crédito, verifica el límite disponible y, a continuación, autoriza o deniega el pago.

<br/>

Con la respuesta del banco emisor, se realiza el flujo inverso y el **Gateway de Pagos** recibe la información si el pago fue aprobado o denegado.

<br/>

> ℹ️ Es posible incluir el Antifraude en este flujo. En este caso, el antifraude recibe la información del gateway de que el pago fue preautorizado por el banco emisor. Con la información recibida del gateway, el antifraude envía una respuesta de aprobación o denegación del pago. Si el antifraude no lo aprueba, el pago se cancela. Si el pago es aprobado, el pedido puede continuar su flujo normal.

