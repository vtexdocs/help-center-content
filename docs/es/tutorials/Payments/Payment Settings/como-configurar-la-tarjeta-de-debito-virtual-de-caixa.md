---
title: 'Cómo configurar la Tarjeta de Débito Virtual de Caixa'
id: h5yEWP6FOJpKyXde2MjgF
status: PUBLISHED
createdAt: 2020-04-24T13:33:30.397Z
updatedAt: 2023-03-26T22:06:09.732Z
publishedAt: 2023-03-26T22:06:09.732Z
firstPublishedAt: 2020-04-29T19:00:54.400Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: how-to-configure-the-caixa-virtual-debit-card
locale: es
legacySlug: como-configurar-la-tarjeta-de-debito-virtual-de-caixa
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---


La Tarjeta de Débito Virtual de Caixa es un medio de pago disponible para todos los clientes VTEX. 

Con esta tarjeta, los consumidores finales pueden hacer sus compras con el auxilio de emergencia otorgado a través de Caixa Econômica por parte del Gobierno Federal. 

Además, la Tarjeta de Débito Virtual de Caixa soporta apenas pagos realizados con tarjetas de crédito cuyo número comienza con __"5067228"__ o __"5067229"__. Cualquier otra tarjeta no será reconocida por el sistema. 

En este artículo, explicaremos cómo configurarla en su comercio electrónico.

## Afiliaciones de Gateway

Actualmente, la Tarjeta de Débito Virtual de Caixa se conecta a cinco
afiliaciones de Gateway: Adyen, Braspag, Cielo, Mundipagg y Rede. 

Dicho esto, el primer paso es definir qué afiliaciones del Gateway procesarán los pagos realizados con la Tarjeta de Débito Virtual y configurarlas. 

El proceso de configuración de las afiliaciones es similar. Sin embargo, la información requerida en cada formulario es diferente. Para conocer los detalles de cada configuración, consulte los siguientes tutoriales:

- [Adyen](/es/tutorial/como-configurar-o-gateway-adyen-na-vtex--tutorials_2337?locale=pt "Adyen").
- [Braspag](/es/tutorial/configurar-o-gateway-braspag--7tQmfLMvtYEsWoaaAaeKSC "Braspag").
- [CieloV3](/es/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu?locale=pt "CieloV3").
- [Mundi](/es/tutorial/configurar-gateway-mundi--2yn9dKzvZOF5tn4RCX2Nbq?locale=pt "Mundi").
- [ERedeRest](/es/tutorial/configurar-adquirente-rede-con-erederest?locale=pt "ERedeRest").

## Condiciones de pago 

Luego, usted deberá configurar la condición de pago. 

Consulte las instrucciones:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la parte superior de la página, haga clic en la pestaña __Planes de pago__.
3. En la parte superior derecha de la pantalla, haga clic en el __botón verde "+"__.
4. En el grupo __"Tarjeta de Débito"__, seleccione la opción __"Tarjeta de Débito Virtual Caixa"__. 
5. En __"Proceso con la afiliación"__, seleccione la __afiliación__ deseada.
6. En el lado derecho de la pantalla, rellene el __formulario__.  
7. Haga clic en el botón azul __"Guardar"__.

De esta manera, una pestaña de "Tarjeta de Débito Virtual de Caixa" se mostrará entre las opciones de pago presentadas en la página de Checkout.
