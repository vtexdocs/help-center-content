---
title: 'Configurar tiempo máximo para la liquidación automática'
id: 7dwcaxrcgcFJUk7umqPBw2
status: PUBLISHED
createdAt: 2020-09-22T11:49:41.297Z
updatedAt: 2023-03-26T21:34:20.532Z
publishedAt: 2023-03-26T21:34:20.532Z
firstPublishedAt: 2020-09-22T14:37:14.174Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-tiempo-maximo-para-la-liquidacion-automatica
locale: es
legacySlug: configurar-tiempo-maximo-para-la-captura-automatica
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En este artículo, se explicará cómo configurar el recurso del tiempo máximo para la liquidación que, por el momento, está disponible para los conectores [Braspag](https://help.vtex.com/es/tutorial/configurar-o-gateway-braspag--7tQmfLMvtYEsWoaaAaeKSC# "Braspag"), [Cielo V3](https://help.vtex.com/es/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu# "Cielo V3"), [SiTef](https://help.vtex.com/es/tutorial/setting-up-sitef-gateway-with-pre-auth--2ZH4DLmZpKw022aSGcGYag "Sitef") y [e-SiTef](https://help.vtex.com/pt/tutorial/configurar-gateway-e-sitef--6UEi0QAlU6BXz5RgWj34Ac). 

Antes de comenzar con el procedimiento, es importante aclarar la diferencia entre la __liquidación por facturación__, la __liquidación automática__ y la __liquidación anticipada__, tres conceptos presentes en el mercado de pagos. En algunos conectores de pagos de plataforma, estos términos se conocen como __captura por facturación__, __captura anticipada__ y __captura automática__.

>⚠️ La siguiente información es válida para los pagos con tarjeta de crédito.

## liquidación por facturación
La liquidación por facturación es una de las etapas del [flujo de la transacción](https://help.vtex.com/es/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ# "flujo de la transacción"), el proceso interno de VTEX que ocurre después de que un cliente realiza el pago de un pedido. Es decir, el cliente no participa en esta dinámica.

Cuando se factura el pedido, momento en el que los productos están listos para ser enviados a la transportadora, el Gateway realiza la liquidación. Esto sucede porque la facturación del pedido indica que el pago fue realizado correctamente.

## Liquidación anticipada

La liquidación anticipada es un recurso opcional que permite al administrador de la tienda establecer que la liquidación del pago se realice antes que la captura automática realizada por VTEX.

Además, es importante destacar que la captura anticipada solo se producirá después del análisis del Antifraude, en los casos en que el cliente cuente con este.

## Liquidación automática

Si los dos primeros tipos de liquidación no funcionan, la liquidación automática garantizará que la autorización del pago sea procesada por el sistema.

Cuando el proceso de autorización inicia, el sistema espera un tiempo máximo, previamente programado, para realizar la liquidación automática. Este plazo no incluye el periodo de validaciones del Antifraude, si este servicio está involucrado en el proceso.

El administrador de la tienda y el adquirente establecen el límite de tiempo para que se active la liquidación automática.

>ℹ️ Generalmente, el tiempo máximo predeterminado para que la liquidación ocurra es de cuatro días. Sin embargo, esto **no** es una regla. Cada adquirente puede definir el tiempo que considere más apropiado.

Para configurar esta liquidación, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la parte superior de la página, haga clic en __Afiliaciones__.
3. Haga clic en el __botón verde “+”__
4. En la __sección Otros__, seleccione la __afiliación__ que desea configurar.
5. En el lado izquierdo de la pantalla, rellene el campo __Nombre de la afiliación__.
6. Luego, active el modo __Live/Producción__.
7. Rellene los __campos__ del formulario.
8. En el campo __Captura anticipada__, seleccione una de las opciones de tiempo disponibles. 
9. Rellene el  campo __Cambiar el tiempo máximo de captura automática__ con el periodo acordado con el adquirente. __Si usted prefiere dejar el campo en blanco, se utilizará el estándar de 4 días.__

![captura_automatica_ES](https://images.ctfassets.net/alneenqid6w5/4jX317pC0aLgMXygXxd1XU/6a7d21e16d4ef26e0076ad7b641e877f/image.png)
10. Haga clic en el __botón Salva__ para guardar.

De esta manera, se implementará el nuevo recurso de liquidación.
