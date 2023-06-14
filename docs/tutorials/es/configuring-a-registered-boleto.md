---
title: Configurar boleto registrado (método de pago brasileño)
id: frequentlyAskedQuestions_2867
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.197Z
updatedAt: 2020-11-24T13:14:10.947Z
publishedAt: 2020-11-24T13:14:10.947Z
firstPublishedAt: 2019-01-24T22:08:27.705Z
contentType: tutorial
productTeam: Financial
author: authors_3
slug: configuracion-de-boleto-registrado
legacySlug: configuracion-de-boleto-registrado
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

El boleto registrado es una nueva modalidad de boleto bancario, utilizado en Brasil. 

La implementación de esta forma de pago se produjo en noviembre de 2018, cuando la Federación Brasileña de Bancos (Febraban) anunció que todo boleto ahora debe ser registrado. 

Con esta medida, los bancos logran reducir el número de fraudes, y todo el proceso de una operación de compra y venta queda registrado, trayendo más control y seguridad. 

VTEX se adecuó a esta determinación y, actualmente, ya existen algunas maneras de poner a disposición esta forma de pago en su tienda. Para los bancos Bradesco, Itaú y Santander, ya es posible escoger directamente en el módulo de pagos el conector específico: 

- [Boleto Santander](https://help.vtex.com/es/tutorial/configurar-boleto-registrado-santander--67siNqkC7mcgy2GWUYimaa)
- [Boleto Itaú](https://help.vtex.com/es/tutorial/configurar-boleto-registrado-itau-itau-registrado--6MEHf1oDTOkuWM2CaYi4gu)
- [Itaú Shopline](https://help.vtex.com/es/tutorial/configurar-boleto-registrado-itau--3TqzCHPU7KIYGsOKuUeQcq)
- [Bradesco Registrado](https://help.vtex.com/es/tutorial/configurar-boleto-registrado-bradesco--bbnXBjvKOkWYiOosmASiA)

Además, VTEX tiene integración automática para boletos registrados Bradesco e Itaú Shopline. Sin embargo, para los boletos generados sin una adquirencia, la conciliación se realiza a través de un archivo (.RET).

Cada cliente debe obtener los archivos de sus respectivos bancos. En este caso específico, Itaú Registrado y Santander. Hacemos hincapié en que estos archivos deben seguir necesariamente el estándar establecido por Febraban - Federación Brasileña de Bancos.

Para otros bancos es necesario usar uno de los siguientes gateways de pago:

- Braspag
- PagSeguro Transparente
- Mundipagg
- Moip
- MercadoPago Transparente
- Pagar.Me
- CieloV3
- Adyen

Los costos del boleto registrado son diferentes a los del boleto tradicional y varían de acuerdo con su negociación con el banco. Preste atención para planificar y controlar su margen.

Cuando su tienda tiene un gateway contratado, la generación del boleto (así como la validez de su información) queda bajo su responsabilidad y __no es realizada por VTEX__. Por eso, una vez que el gateway sea contratado, certifíquese de que se está realizando la emisión con los datos correctos.

**Atención:** VTEX genera una secuencia **única** para cada boleto registrado.

La modificación de este número ya no se permite como antes, impidiendo a la tienda asociar el número del boleto al número del pedido correspondiente en el módulo de Gestión de Pedidos.

La creación de este número por VTEX garantiza la particularidad de cada boleto y disminuye el riesgo de exención de pago por causa de números repetidos en boletos diferentes.

## Artículos relacionados

- [Cómo configurar afiliaciones de Gateway](/es/tutorial/afiliaciones-de-gateway)
- [Cómo configurar PagSeguro transparente](/es/tutorial/como-configurar-el-pagseguro-sin-redirect/)
- [Configurar boleto registrado Itaú](/es/tutorial/configurar-boleto-registrado-itau)
