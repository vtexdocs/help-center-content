---
title: 'Cómo funciona el módulo de pagos '
id: kdPbEIWf8Xq8tESQvViMB
status: PUBLISHED
createdAt: 2019-11-13T18:30:00.279Z
updatedAt: 2024-07-24T18:38:45.637Z
publishedAt: 2024-07-24T18:38:45.637Z
firstPublishedAt: 2019-11-21T22:49:51.417Z
contentType: trackArticle
productTeam: Financial
slugEN: how-the-payments-module-works
locale: es
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugES: pagos
---

El módulo de **Pagos** es el sistema responsable en VTEX de gestionar todas las acciones referentes al flujo financiero de su tienda. 

Antes de explorar las funcionalidades dentro de *Pagos* en el Admin de VTEX, vamos a aclarar algunos conceptos importantes que están relacionados con el flujo de pago de un pedido. Este proceso es realizado por algunos actores dentro del sistema financiero brasileño, que componen la arquitectura del módulo de Pagos.

<div class="alert alert-info">
Es importante recordar que cada tienda tiene sus particularidades y su propio funcionamiento, lo que influye en la forma de construir el módulo de Pagos de su negocio. Para configurar su flujo financiero, es esencial, por lo tanto, tener en mente las necesidades y los propósitos reales del administrador de la tienda y del proyecto deseado.
</div>

## Gateway 

Un gateway (también llamado gateway de pago) es un sistema que efectúa la transmisión de los datos de las compras realizadas en su tienda en el momento del checkout. 

Como primer player del flujo, es responsable de enviar la información de pago recibida en el checkout a los actores financieros que integran la secuencia del flujo de pago (como adquirentes, banderas y bancos emisores). 

En seguida, obtiene una respuesta sobre la aprobación del pago y continuación del flujo de compra, o su cancelación.  

Como agentes intermediarios entre un e-commerce y sus medios de pago, los **gateways** actúan como un terminal, integrando en un solo lugar todos los movimientos realizados entre los players del flujo de pago.  

Ejemplos de gateway: Pagar.me y Stripe.

## Adquirente 
Un adquirente (también llamado de acreditador) es una empresa especializada en procesar pagos; es decir, hacer la liquidación financiera de las transacciones de una tienda por medio de tarjetas de crédito y débito. 

A través de su red de socios acreditados (o red de adquirencia), permite que una tienda ofrezca diversas condiciones de pago a sus clientes. En la práctica, el **adquirente** recibe la información del pago, la procesa y la transmite a la bandera y al banco emisor. 

Cuando todo está en orden y una compra es autorizada por los otros players del flujo de compra, el adquirente es responsable de transferir los valores (cobrados del cliente por el banco emisor) a la cuenta de su tienda.

Ejemplos de adquirente: Rede, Cielo, GetNet y Stone.  

## Subadquirente  

Un subadquirente es una empresa que procesa pagos y transmite su información a los otros players involucrados en el flujo de pago. 

Como facilitador, su papel es semejante al de un adquirente, pero no lo sustituye por completo por su falta de autonomía para desempeñar todas las funcionalidades de un adquirente.

Así, el **subadquirente** puede ser entendido como una especie de intermediario entre adquirente y tienda. 

Ejemplos de subadquirente: Paypal y PagSeguro.

Para saber más sobre las [ventajas y desventajas de incluir a un subadquirente en su flujo](/es/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil?locale=pt "Atores financeiros"), consulte nuestro artículo.   

## Bandera de la Tarjeta 
Banderas son empresas responsables de definir las reglas de negocio para compras realizadas con tarjeta de crédito, como la cantidad de cuotas en que puede dividir el pago y el número de establecimientos en que se acepta, nacional e internacionalmente. 

Son estas las que definen los estándares por los que los adquirentes deben procesar las transacciones realizadas por ese medio de pago. 

En el flujo de pago por tarjeta de crédito, la **bandera** recibe del adquirente la información de la compra realizada en su tienda, valida las condiciones y envía los datos al banco emisor, que comprueba si el comprador tiene límite disponible. 

De esta forma, la bandera sirve tanto para regular el uso de la tarjeta, así como un puente entre adquirente y banco.

Ejemplos de banderas de  tarjeta: Mastercard, American Express y Visa.

## Banco Emisor
El Banco Emisor es la institución financiera responsable de los medios de pago, ya sean boletos bancarios, tarjetas de débito o de crédito. 

Es este quien, al recibir los datos de una compra hecha en su tienda, va a autorizar o no la venta (dependiendo del límite de crédito o del dinero disponible en la cuenta del usuario). 

En VTEX, es posible configurar las condiciones especiales para pagos realizados a través de **bancos** específicos, funcionalidad que exploraremos más adelante. 

Ejemplos de bancos emisores:  Itaú, Santander, Bradesco y Citibank.  

## Antifraude  
El antifraude es un sistema especializado en analizar las compras realizadas en los sitios web, con el objetivo de identificar operaciones fraudulentas. 

Recolecta datos sobre el comportamiento de los usuarios y los compara con patrones sospechosos para, entonces,  aprobar o no el pedido. Así, el **antifraude** añade una capa más de seguridad para su tienda.

Ejemplos de antifraudes:  ClearSale y Konduto.  

## Certificación PCI SSC
El PCI Security Standards Council es un foro mundial abierto para el continuo desarrollo, mejora, almacenamiento, difusión e implementación de normas de seguridad para la protección de datos. 

[La plataforma VTEX posee un gateway propio con **certificación PCI**](/es/tutorial/que-es-el-pci-ssc--4jo3Vkox3amSO2w4qIWa0E "PCI SSC"), que  significa que los datos de todos los pagos realizados en su tienda están protegidos de acuerdo con los más altos estándares de seguridad. 

Si desea profundizar los conceptos de gateway, adquirente, subadquirente, bandera, banco emisor y antifraude, consulte nuestro [artículo sobre agentes financieros en Brasil](/es/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil?locale=pt "Agentes financeiros ").
