---
title: 'Configurar un conector de pagos'
id: 7pAEMAo4iqNHwYOarZ3zgm
status: PUBLISHED
createdAt: 2019-11-12T17:29:10.501Z
updatedAt: 2023-03-21T20:10:49.512Z
publishedAt: 2023-03-21T20:10:49.512Z
firstPublishedAt: 2019-11-24T21:05:50.533Z
contentType: trackArticle
productTeam: Financial
slug: configurar-un-conector-de-pagos
locale: es
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugES: pagos
---

El módulo de **Pagos** permite la configuración de una serie de **conectores**, que son protocolos de comunicación que su tienda necesita usar para permitir la transmisión de datos entre esta y adquirentes, subadquirentes o gateways. 

Por ejemplo, para que su sitio web ofrezca un determinado medio de pago particular a sus clientes, usted debe activar el **conector** que se comunicará con el gateway responsable del procesamiento.

Otra característica importante es la igualdad de conexiones. Así como un medio de pago puede comunicarse con varios  conectores, un conector puede establecer comunicación con varios medios de pago. Debido a esta posibilidad, debe configurar el conector a través de **afiliaciones de gateway**.

**Afiliaciones de Gateway** es un conjunto de configuraciones que representa su contrato con un gateway de pago de su elección. 

Además de los gateways de pago, otras afiliaciones incluyen, por ejemplo, pagarés, adquirentes y adquirentes. Con esto es posible decidir por cuál gateway de pago se procesarán  los diferentes tipos de transacciones de su tienda VTEX.

El Módulo de Pagos VTEX soporta múltiples afiliaciones con una o más gateways de su elecciónn para procesar diferentes formas de pago.

Hay dos formas para comenzar a aceptar pagos con tarjeta de crédito:
- Afiliarse a un gateway de pago por el admin.
- Utilizar las [integraciones de VTEX](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-guide) para medios de pago.

## Cómo registrar afiliaciones de gateway por el Admin
1.  En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.   
2.  Haga clic en la opción **Afiliaciones de Gateway**.   
3.  Haga clic en el botón de **+**  para agregar una nueva afiliación.   
4.  Escoja cuál es su Gateway de Pago.   
5.  Dele un nombre a su afiliación.
6.  Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón **Instalar aplicación** y siga las instrucciones de instalación. Este mensaje solo se muestra para algunos tipos de afiliaciones de pgateway.   
7.  Complete los campos disponibles con los datos del contrato enviados por el Gateway escogido.   
8.  Haga clic en el botón **Guardar**.

Este conector debe estar asociado a una condición de pago. Para más informaciones y ejemplos de cómo recibir pagos en cuotas o al contado con diferentes afiliaciones, vea el artículo sobre  [Condiciones de Pago](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Si desea consultar el procedimiento de un conector específico, visite nuestros artículos de [Tutoriales y Soluciones](https://help.vtex.com/es/tutorial/--531cHtUCUi3puRXNDmKziw "Tutoriales y Soluciones"), y busque la palabra clave deseada. 
