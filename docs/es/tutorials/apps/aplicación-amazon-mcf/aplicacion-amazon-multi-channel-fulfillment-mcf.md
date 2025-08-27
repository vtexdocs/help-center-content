---
title: 'Aplicación Amazon Multi-Channel Fulfillment (MCF)'
id: X4b62PHi80OK3YwywZStG
status: PUBLISHED
createdAt: 2021-09-20T13:50:23.210Z
updatedAt: 2023-03-29T15:00:56.198Z
publishedAt: 2023-03-29T15:00:56.198Z
firstPublishedAt: 2021-09-20T14:18:16.966Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: amazon-multi-channel-fulfillment-mcf-app
legacySlug: aplicacion-amazon-multi-channel-fulfillment-mcf
locale: es
subcategoryId: 1P1vFnzQ4TQJsBRDoPVKUI
---

> ℹ️ La aplicación está em fase Beta, o que significa que estamos trabalhando para aprimorá-lo. Em caso de dúvidas, entre em contato com <a href= "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.

La aplicación Amazon Multi-Channel Fulfillment (MCF) te permite integrar tu negocio con el programa del mismo nombre. Con la integración, los clientes VTEX pueden utilizar la red logística de Amazon en sus propias tiendas. Así, los ítems de venta se almacenan en los centros de distribución de Amazon, y después de cada venta en tu ecommerce, la plataforma VTEX envía los datos del pedido a Amazon para que los separe, empaquete y envíe a los destinatarios.

Con la solución, Amazon calculará los precios y los plazos de entrega de tu tienda, VTEX los recibirá y los presentará al cliente final durante el _checkout_. En cada finalización de pedido en tu tienda, la información se envía a Amazon y el seguimiento del flujo del pedido se actualiza automáticamente entre las plataformas (VTEX y Amazon).

MCF permite una experiencia de entrega más rápida al cliente final, una operación logística más sencilla y una reducción de los costes logísticos. 

Este tutorial contiene la información necesaria para instalar y configurar la aplicación. 

## Requisitos

Antes de la instalación, es necesario:

* Tener una cuenta de _[Seller en Amazon](https://sell.amazon.com/)_ Para más información, consulta el artículo [Configuración de la cuenta en Amazon](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf).
* Asegurarte de que los productos de tu tienda cumplen las [políticas de restricción de Amazon](https://sellercentral.amazon.com/gp/help/external/200164330).
* Asegurarte de que tu tienda está situada en países donde la MCF está disponible. Países como Estados Unidos, Australia, México, Alemania y Canadá ya cuentan con la MCF de Amazon. Consulta la lista actualizada de países [en esta página de Amazon](https://sell.amazon.com/fulfillment-by-amazon/fba-multi-channel.html).

> ❗ Cuando se instala la aplicación, la plataforma VTEX trata la integración como una tienda externa de Amazon y utiliza la integración de tipo marketplace con Amazon. La aplicación debe instalarse en todas las cuentas VTEX en las que se desee utilizar la funcionalidad. Recomendamos utilizar el Checkout V6.

## Instalación, configuración y acceso:

Una vez cumplidos los requisitos mínimos, sigue los pasos a continuación para instalar la aplicación:

* [Realizar las configuraciones de localización](#configuracion-de-localizacion):
Las configuraciones de localización garantizan que el cliente seleccione la dirección de entrega correcta, cumpliendo los requisitos de _fulfillment_ de Amazon y con el cálculo de costo de envío correcto.

* [Instalar la aplicación MCF disponible en VTEX App Store](#instalacion-de-la-aplicacion):
Accede a la aplicación en VTEX App Store.

* [Integrar el catálogo de ítems de tu tienda con el catálogo de Amazon](#integracion-del-catalogo):
Los SKU de tu tienda deben tener el mismo formato en Amazon y en VTEX. Además, la integración se realiza a través del _marketplace_ y hay configuraciones necesarias para integrar una tienda VTEX con Amazon. 

* [Autorizar la integración](#autorizacion-entre-cuentas):
Para que la integración se realice, al acceder por primera vez a la aplicación después de instalarla, tienes que entrar en tu cuenta de Amazon y autorizar el envío de información a VTEX.

### Configuración de localización

La configuración de localización se utiliza para calcular correctamente el plazo y el costo de entrega de Amazon.  

A partir de la API de geolocalización de Google, VTEX envía a Amazon los datos de localización de la entrega. A continuación, Amazon realiza los cálculos y devuelve a VTEX el costo y el plazo de entrega. 

Para realizar esta configuración, accede al Admin y sigue los pasos a continuación.

1. Instale la aplicación **Checkout Customizer**: 
    * Accede a VTEX App Store;
    * Busca el `Checkout Custom`;
    * Haz clic en Instalar;
2. Haz clic en el botón del ícono `Store Settings`, en el menú izquierdo;
3. Busca la sección **Storefront** y haz clic en `Checkout UI Custom`;
4. Desplázate hacia abajo en la página y activa el campo <i class="fas fa-toggle-on"></i> Google Address Form Format.
5. En la misma página, en la esquina superior derecha, haz clic en `PUBLISH`;
6. Haz clic en el botón del ícono `Store Settings`, en el menú izquierdo;
7. En el menú de la izquierda, busca la sección **Storefront** y haz clic en `Checkout`.
8. Haz clic en el <i class="fas fa-cog"></i> que está en la tarjeta de configuración de **Checkout**;
9. Rellena el campo **Google Maps API Key:**
10. En el menú de la izquierda, busca la sección **Shipping** y haz clic en `Geolocation Shipping`.
11. Introduce la clave **Google Geolocation API**;
12. Haz clic en `Register Key`.

En los pasos 8 y 10, la clave que hay que rellenar es la clave de geolocalización de Google. Consulta [cómo generar una clave en la guía para desarrolladores de Google.](https://developers.google.com/maps/documentation/geocoding/overview) 

> ℹ️ Si tienes dudas sobre la clave de geolocalización de Google, consulta en detalle cómo utiliza esta configuración la plataforma VTEX en los artículos [ Configurar la geolocalización en el checkout](https://help.vtex.com/es/tutorial/geolocalizacion-en-el-checkout--tutorials_4345) y [Registrar la geolocalización](https://help.vtex.com/es/tutorial/gestionar-geolocalizacion--tutorials_138).

### Instalación de la aplicación

Para instalar la aplicación, accede a VTEX App Store:

1. Busca en la tienda la aplicación **Amazon MCF**;
2. Haz clic en `Instalar`.
3. Rellena los siguientes campos: 
    * **Automatic Invoice:** Selecciona <i class="fa-toggle-on"></i> para activar **(Activate)** o desactivar **(Deactivate).**
        * Utiliza `Activate` para la generación automática de facturas (cuando la tienda no envía la factura de los pedidos); 
        * Utiliza `Deactivate` para incluir las facturas de los pedidos manualmente o a través del ERP.
    * **Blank Packaging:** Selecciona <i class="fa-toggle-on"></i> para activar **(Activate)** o desactivar **(Deactivate).**
        * Utilice `Activate` para que los pedidos se envíen en un embalaje que no tenga el logotipo de Amazon.
        * Utilice `Deactivate` para que los pedidos se envíen con el embalaje de Amazon.
    * **Amazon Logistics::** Selecciona <i class="fa-toggle-on"></i> para activar **(Activate)** o desactivar **(Deactivate).**
        * Utilice `Activate` para utilizar el soporte de Amazon.
        * Utilice `Deactivate` para no utilizar el operador de Amazon - utiliza otros operadores excepto el operador de Amazon.
    * **ERP Hook URL:** es la dirección del ERP que incluirá las facturas de los pedidos (en el caso de que el campo **Automatic Invoice** esté configurado como Deactivate).
    * **Amazon Marketplace:** es el país en el que utilizarás Amazon MCF.

> ⚠️ Las configuraciones realizadas en el campo Automatic Invoice se aplicarán a todos los pedidos.

![MCF](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/aplicaci%C3%B3n-amazon-mcf/aplicacion-amazon-multi-channel-fulfillment-mcf_1.PNG)

### Integración del catálogo

Para que los ítems registrados en una plataforma estén disponibles en ambas, es necesario realizar una integración entre los catálogos a través del _marketplace_. 

Para realizar la integración, consulta y sigue los pasos del tutorial [Registro de la integración de Amazon](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan).

## Autorización entre cuentas

Con la aplicación instalada, tienes que autorizar el acceso a tu cuenta de Amazon. Para ello, sigue los pasos a continuación.

1. En el menú de la izquierda, haz clic en el ícono de Aplicaciones;
2. En **Gestión de aplicaciones**, haz clic en `Mis aplicaciones`;
3. Selecciona **Amazon MCF (Multi-Channel Fulfillment);**
4. Haz clic en `Authorize`;
5. Serás redirigido a la página de Amazon. Inicia sesión en tu cuenta.
6. Autoriza la MCF VTEX: lee los términos, selecciona el <i class="far fa-check-square"></i> y acepta las condiciones;
7. Haz clic en `Confirm`.

## Enlaces útiles 

* [Multi-Channel Fulfillment FAQs](https://supplychain.amazon.com/support) (Amazon)
* [Seller Central Guide for MCF](https://supplychain.amazon.com/learn/seller-central-guide) (Amazon)
