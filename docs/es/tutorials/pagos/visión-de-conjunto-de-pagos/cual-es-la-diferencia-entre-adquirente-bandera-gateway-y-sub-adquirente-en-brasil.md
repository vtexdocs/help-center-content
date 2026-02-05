---
title: '¿Cuál es el papel de los agentes financieros en el flujo de pago de un pedido en Brasil?'
id: 1dyPJ3gQCCO4ea2o6OMgCi
status: PUBLISHED
createdAt: 2017-10-11T19:08:49.654Z
updatedAt: 2024-03-18T18:55:40.724Z
publishedAt: 2024-03-18T18:55:40.724Z
firstPublishedAt: 2017-10-11T19:34:43.203Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-the-difference-between-acquirer-brand-gateway-and-sub-acquirer-in-brazil
legacySlug: cual-es-la-diferencia-entre-adquirente-bandera-gateway-y-sub-adquirente-en-brasil
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Es común que los clientes tengan dudas en cuanto a los medios y métodos de pago utilizados en el flujo de pago de un pedido.

En este artículo, aclararemos los conceptos de adquirente, subadquirente, gateway, bandera, banco emisor y antifraude, así como el papel de cada uno en el flujo del pedido.

## Gateway

Un gateway (también llamado gateway de pago) es un __sistema que efectúa la transmisión de los datos de las compras realizadas en su tienda en el momento del checkout__.

Como primer player del flujo, es responsable de enviar la información del pago recibida en el checkout a los adquirentes, banderas y [bancos emisores](/es/tutorial/que-es-banco-emissor--7aVIVGwgtU4SWuqowSQksg) para, entonces, obtener una respuesta sobre la continuación del flujo de compra o de su cancelación. En otras palabras, el gateway envía los datos de pago y recibe respuestas para que usted sepa si una determinada compra debe o no ser confirmada, es decir, si el pago ha sido aprobado o no. 

Como agentes intermediarios entre un  e-commerce y sus medios de pago, los gateways actúan como un terminal, integrando en un solo lugar todos los movimientos realizados entre los players del flujo de pago.

Activando los [conectores](/es/tutorial/que-es-el-conector--3lze0Cu0bmyC6u2o2iaeEA) y registrando [proveedores de pagos y antifraude](https://help.vtex.com/es/docs/tutorials/afiliaciones-de-gateway), los datos de las compras de sus clientes podrán ser enviados a los adquirentes u otros gateways y, así, seguir el flujo de aprobación en las instituciones financieras.

La plataforma VTEX tiene un gateway propio con certificación [PCI](/es/tutorial/que-es-el-pci-ssc--4jo3Vkox3amSO2w4qIWa0E), lo que significa que los datos de todos los pagos realizados en su tienda están protegidos de acuerdo con los más altos estándares de seguridad.

## Adquirente

Un adquirente (también llamado de acreditador) __es una empresa especializada en procesar pagos__. A través de su red de socios acreditados (o red de adquirencia), permite que una tienda ofrezca diversas condiciones de pago a sus clientes.

El adquirente recibe la información del pago, la procesa y la transmite a la [bandera](/es/tutorial/que-es-una-bandera-de-tarjeta-de-credito) (cuando el medio de pago es tarjeta de crédito) y al [banco emisor](/es/tutorial/que-es-el-banco-emisor). Son ejemplos de adquirente empresas como: Rede, Cielo, Elavon, GetNet y Stone. 

Para que su tienda VTEX pueda recibir pagos, usted necesita habilitar su comunicación con un adquirente. Esto se realiza a través de un [gateway](/es/tutorial/que-es-un-gateway-de-pagos), que debe configurarse para procesar las [condiciones de pago deseadas](/es/tutorial/condiciones-de-pago). Así, las compras pueden seguir el flujo de aprobación normalmente.

Cuando todo está en orden y una compra es autorizada por los otros players, el adquirente es responsable de transferir los valores (cobrados del cliente por el banco emisor) a la cuenta de su tienda.

## Subadquirente

Un subadquirente es una empresa que procesa pagos y transmite los datos generados a los otros players del [flujo de pago](/es/tutorial/tarjeta-de-credito-flujo-basico-de-un-pago). Su papel es similar al de un [adquirente](/es/tutorial/que-es-un-adquirente), pero no lo sustituye por completo por su falta de autonomía para desempeñar todas las funcionalidades de un adquirente.

Así, puede ser entendido como una especie de intermediario entre adquirente y tienda. Son ejemplos de subadquirente empresas como: PagSeguro y Paypal.

Las principales ventajas del subadquirente son su bajo costo de implementación, sistema de antifraude proprio y facilidad de integración en las tiendas, lo que lo convierte en una solución bastante atractiva para el pequeño comerciante.  Por otro lado, la elección por el uso del subadquirente puede perjudicar los beneficios del vendedor por la alta tasa cobrada por cada transacción realizada (mayor que las de los adquirentes). Otro factor negativo para los vendedores es la redirección del cliente a la página propia del subadquirente durante los últimos pasos del checkout, lo que puede llevar a mayores tasas de desistimiento de compra.

## Bandera de Tarjeta de Crédito

Banderas son empresas responsables de definir las reglas de negocio para compras realizadas con tarjeta de crédito. Son estas las que definen los estándares por los que los [adquirentes](/es/tutorial/que-es-un-adquirente) deben procesar las transacciones realizadas por ese medio de pago (cada bandera tiene sus propias reglas).Son ejemplos de banderas empresas como: Mastercard, American Express y Visa. 

Las banderas mantienen una relación cercana con los adquirentes para garantizar la aceptación de sus tarjetas de crédito en los establecimientos. Así, estas promueven su uso y amplían la base de usuarios.

En el [flujo de pago por tarjeta de crédito](/es/tutorial/tarjeta-de-credito-flujo-basico-de-un-pago), la bandera recibe del adquirente la información de la compra realizada en su tienda. Entonces, valida las condiciones (como el número de cuotas) y envía los datos al [banco emisor](/es/tutorial/que-es-el-banco-emisor), que comprueba si el comprador tiene límite disponible. De esta forma, la bandera sirve tanto para regular el uso de la tarjeta como para servir de puente entre la adquirente y el banco del consumidor. 

## Banco Emisor

El Banco Emisor es la institución financiera responsable de los medios de pago, ya sean boletos bancarios, tarjetas de débito o de crédito. Es este quien, al recibir los datos de una compra hecha en su tienda, va a autorizar o no la venta (dependiendo del límite de crédito o del dinero disponible en la cuenta del usuario). Con todo correcto, el banco efectúa el cobro del valor

Este concepto es importante porque le permite configurar [condiciones especiales](/es/tutorial/condiciones-especiales) para pagos realizados a través de bancos específicos. Además, en el caso de los boletos registrados, cada banco tiene su propia forma de emisión.

## Antifraude

El antifraude es un sistema especializado en analizar las compras realizadas en los sitios web, con el objetivo de identificar operaciones fraudulentas.

Recolecta datos sobre el comportamiento de los usuarios y los compara con patrones sospechosos para aprobar o no el pedido. Así pues, el antifraude añade una capa más de seguridad para su tienda.

En VTEX, primero el operador del pago aprueba la compra y, a continuación, el antifraude evalúa el pedido. Con todo en orden, el sistema sigue su flujo normal. Son ejemplos de antifraude: ClearSale y Konduto. 

> ℹ️ Es importante resaltar que cada negocio depende de factores específicos que influencian en la decisión sobre qué modalidad usar. Son varias las variables que pueden determinar la elección del medio de pago y cuál será su flujo financiero. Es fundamental, por lo tanto, tener en mente las necesidades y los propósitos reales del comerciante y del proyecto deseado.

