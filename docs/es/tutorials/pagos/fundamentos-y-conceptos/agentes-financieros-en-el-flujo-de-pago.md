---
title: 'Agentes financieros en el flujo de pago'
createdAt: 2017-10-11T19:08:49.654Z
updatedAt: 2026-10-01T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: financial-agents-in-the-payment-flow
locale: es
hidden: false
---

Este artículo presenta los agentes financieros que participan en el flujo de pago de VTEX: gateway, adquirente, subadquirente, red de tarjeta, banco emisor y antifraude.

Estos conceptos valen para todo el módulo de Pagos, pero la secuencia completa de los seis agentes describe el flujo de **tarjeta de crédito**. En los demás medios de pago, no todos estos agentes cumplen una función: el gateway participa en los medios que procesa la plataforma, y la red de tarjeta, solo en las transacciones con tarjeta.

## Gateway

El gateway (también llamado gateway de pago) es el sistema que transmite los datos de las compras hechas en tu tienda en el momento del checkout.

Es el primer agente del flujo. Envía la información del pago a adquirentes, redes de tarjeta y bancos emisores, y recibe la respuesta que confirma o cancela la compra.

El gateway funciona como un terminal y concentra en un solo lugar los movimientos entre los agentes del flujo, tanto de tarjeta como de los otros medios configurados en tu tienda, como boleto y Pix (Brasil).

Al activar los [conectores](/es/docs/tutorials/que-es-el-conector) y registrar [proveedores de pagos y antifraude](/es/docs/tutorials/afiliaciones-de-gateway), habilitas el envío de los datos de la compra a adquirentes u otros gateways, siguiendo el flujo de aprobación en las instituciones financieras.

VTEX tiene un gateway propio con certificación del [PCI Security Standards Council (PCI SSC)](/es/docs/tutorials/que-es-el-pci-ssc), que protege los datos de todos los pagos realizados en tu tienda según los estándares de seguridad más altos.

## Adquirente

El adquirente (también llamado acreditador) es la empresa que procesa pagos y hace la liquidación financiera de las transacciones de tu tienda con tarjetas de crédito y débito. A través de la red de partners acreditados, o red de adquirencia, te permite ofrecer distintas condiciones de pago a tus clientes.

El adquirente recibe del gateway la información del pago, procesa los datos y los envía a la red de tarjeta y al banco emisor. Los ejemplos varían según el país: en México operan empresas como BBVA, Banorte, Getnet y EVO Payments.

Para recibir pagos, tu tienda tiene que comunicarse con un adquirente. Esa comunicación se hace a través del gateway, que configuras para procesar las [condiciones de pago](/es/docs/tutorials/condiciones-de-pago) que desees.

Cuando los demás agentes autorizan la compra, el adquirente transfiere a la cuenta de tu tienda los valores cobrados al cliente por el banco emisor.

## Subadquirente

El subadquirente es la empresa que procesa pagos y transmite la información a los otros agentes del flujo. Como facilitador, tiene un papel similar al del adquirente, pero no lo sustituye por completo, porque no tiene autonomía para desempeñar todas las funciones de un adquirente.

Puedes entender el subadquirente como un intermediario entre el adquirente y tu tienda. En algunos mercados, empresas como PagSeguro y PayPal actúan en ese papel.

Entre las ventajas del subadquirente están el bajo costo de implementación, el sistema de antifraude propio y la facilidad de integración, lo que hace que la solución sea atractiva para tiendas más pequeñas. A cambio, el cargo cobrado por transacción es mayor que el de los adquirentes y puede reducir tu margen.

Algunos subadquirentes también redirigen al cliente a una página propia en las etapas finales del checkout, lo que puede aumentar el abandono de la compra.

## Red de tarjeta

Las redes de tarjeta definen las reglas de negocio de las compras con tarjeta de crédito, como la cantidad de cuotas en las que el cliente puede dividir el pago y los establecimientos que aceptan la tarjeta en el país y en el extranjero. También definen los estándares que los adquirentes siguen para procesar esas transacciones, y cada red de tarjeta tiene sus propias reglas. Mastercard, American Express y Visa son ejemplos de redes de tarjeta.

Las redes de tarjeta mantienen una relación cercana con los adquirentes para garantizar la aceptación de las tarjetas en los establecimientos, lo que fomenta el uso y amplía la base de usuarios.

En el flujo de pago con tarjeta de crédito, la red de tarjeta recibe del adquirente la información de la compra, valida las condiciones (como el número de cuotas) y envía los datos al banco emisor, que verifica el límite disponible. La red de tarjeta regula el uso de la tarjeta y funciona como puente entre el adquirente y el banco del cliente.

## Banco emisor

El banco emisor es la institución financiera responsable de los medios de pago, como las tarjetas de crédito y débito. Cuando recibe los datos de una compra en tu tienda, autoriza o rechaza el pago según el límite de crédito o el saldo disponible en la cuenta del cliente. Con la autorización, el banco efectúa el cobro.

Este agente también te permite configurar [condiciones especiales](/es/docs/tutorials/condiciones-especiales) para pagos realizados por bancos específicos.

## Antifraude

El antifraude es el sistema que analiza las compras hechas en tu sitio para identificar operaciones fraudulentas.

Recopila datos sobre el comportamiento de los clientes, compara esos datos con patrones sospechosos y aprueba o rechaza el pedido. Es una capa extra de seguridad para tu tienda.

En VTEX, la operadora del pago aprueba la compra primero y el antifraude evalúa el pedido después. Si todo está en orden, el pedido sigue el flujo normal. ClearSale y Signifyd son ejemplos de proveedores de antifraude.

Para activar un antifraude en tu tienda, consulta [Configurar el antifraude](/es/docs/tutorials/como-configurar-antifraude).

## Secuencia del flujo de pago

La secuencia siguiente describe el flujo de tarjeta de crédito:

1. En el checkout, el cliente elige la tarjeta de crédito como medio de pago.
2. El checkout envía la información del pago al gateway.
3. El gateway envía la información al adquirente o al subadquirente.
4. El adquirente envía los datos a la red de tarjeta, que valida las reglas de la tarjeta, como la cantidad de cuotas.
5. La red de tarjeta envía la información al banco emisor, que hace el análisis de crédito, verifica el límite disponible y autoriza o rechaza el pago.
6. La respuesta del banco emisor recorre el camino inverso hasta el gateway, que registra el pago como preautorizado.
7. Si el antifraude forma parte del flujo, recibe del gateway la información de que el pago fue preautorizado y responde con aprobación o rechazo. Si el antifraude lo rechaza, el pago se cancela.
8. Con la aprobación final, el gateway informa a tu tienda de que el pago fue aprobado y el adquirente hace la liquidación financiera, transfiriendo los valores a la cuenta de tu tienda.

### Medios de pago locales en Brasil

No todos los medios de pago pasan por el gateway, el adquirente, la red de tarjeta y el banco emisor. En Brasil, por ejemplo:

- **Boleto bancario registrado:** el flujo no tiene adquirente ni red de tarjeta. El gateway solicita el registro del boleto al banco, que emite el título y devuelve la información al gateway. Después de que el cliente paga el boleto directamente al banco, el banco envía al gateway los archivos de conciliación bancaria con el status del pago. Consulta [Boleto Bancario Registrado - Flujo básico de pago](/es/docs/tutorials/boleto-bancario-registrado-flujo).
- **Pix:** el procesamiento depende de un partner de pagos integrado con VTEX, que puede ser un banco, un adquirente o un gateway. Al finalizar la compra, ese partner envía el QR Code por API y VTEX lo muestra en el checkout para que el cliente complete la transacción con su institución financiera. Consulta [Pix: FAQ](/es/docs/tutorials/pix-faq).

> ℹ️ La elección de los agentes y de los medios de pago depende de las necesidades de tu operación. Evalúa las variables de tu negocio antes de definir el flujo financiero de tu tienda.

## Próximos pasos

- [Registrar proveedores de pagos y antifraude](/es/docs/tutorials/afiliaciones-de-gateway)
- [Configurar condiciones de pago](/es/docs/tutorials/condiciones-de-pago)
- [Configurar el antifraude](/es/docs/tutorials/como-configurar-antifraude)
