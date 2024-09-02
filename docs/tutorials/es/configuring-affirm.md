---
title: 'Configurar Affirm'
id: 4VED6U3u1LYAJaIMCy5xlN
status: DRAFT
createdAt: 2021-06-07T19:54:24.353Z
updatedAt: 2022-12-23T19:52:41.014Z
publishedAt: 
firstPublishedAt: 2021-06-07T20:02:47.377Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configurar-affirm
locale: es
legacySlug: configurar-affirm
subcategory: 
---

[Affirm](https://www.affirm.com/) es una solución de pagos que opera con financiamiento de préstamos.

Al realizar una compra y escoger Affirm como método de pago, el comprador pasará por un análisis de crédito y, según su puntuación de crédito, la herramienta autorizará el importe a pagar por esa transacción. Así, el cliente pagará el valor directamente a Affirm con los intereses definidos al momento de aceptar.

>⚠️ La aplicación Affirm se instala mediante VTEX IO, una plataforma de desarrollo <i>low-code</i> que permite a los programadores desarrollar aplicaciones y nuevos componentes para las tiendas VTEX. Acceda a la documentación [Installing VTEX IO's CLI](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-install) y descargue la plataforma y sus componentes antes de seguir a los próximos pasos.

Para configurar Affirm, necesitará:

1.  [Instalar la aplicación](#instalar-la-aplicacion)
2.  [Configurar la aplicación](#configurar-la-aplicacion)
3.  [Instalar y configurar el gateway](#instalar-y-configurar-el-gateway)  
4.  [Instalar el snippet](#instalar-el-snippet)   
5.  [Configurar condiciones de pago](#configurar-condiciones-de-pago)

## Instalar la aplicación

Una vez VTEX IO esté configurado, acceda a la documentación [Installing Affirm Payment App](https://developers.vtex.com/vtex-rest-api/docs/installing-affirm-payment-app-1) y siga las instrucciones para instalar la aplicación en su tienda.

## Configurar la aplicación

Después de instalar la aplicación, siga los pasos a continuación para rellenar los campos de configuración:

1.  Acceda al **Admin** de VTEX.    
2.  En el módulo **Configuraciones de la cuenta**, haga clic en *Apps > Mis aplicaciones*.    
3.  En **Affirm Payment**, haga clic en **Configuración**.  
4.  Rellene los siguientes campos con la información proporcionada por Affirm.

    - **Enable Katapult:** Katapult es un recurso que ofrece leasing para compradores no cualificados para el financiamiento normal de Affirm. Si desea utilizarlo, póngase en contacto con Affirm y solicite que lo autoricen en su cuenta antes de habilitarlo.

    - **Company Name:** Si tiene más de un sitio en una misma cuenta de Affirm, puede sustituir el nombre de la empresa/marca externa que el cliente ve. Déjelo en blanco para utilizar el nombre de la tienda predeterminado de su cuenta Affirm.

    - **Public API Key for promotional components:** API pública proporcionada por Affirm.

    - **Interval to use for the following three settings:** Defina la unidad de tiempo (días, horas, minutos) que se aplicará a los siguientes ajustes:  

        - **Delay to auto-settle:** Minutos / horas / días antes de la liquidación automática de los pagos autorizados por Affirm.

        - **Delay to auto-settle after anti-fraud:** Minutos / horas / días antes de la liquidación automática de los pagos autorizados por Affirm después de la aprobación antifraude.

        - **Delay to cancel:** Minutos / horas / días antes de la cancelación automática de los pagos.  

     - **Katapult public token (optional):** La clave pública  de Katapult proporcionada por Affirm, si decide utilizar este recurso.

     - **Katapult private token (optional):** La clave privada de  Katapult proporcionada por Affirm, si decide utilizar este recurso.

<ul>
  5. Haga clic en <b>Salvar</b> para guardar los cambios.
  </ul>

## Instalar y configurar el gateway

Una vez la aplicación esté configurada, siga los pasos a continuación para configurar el gateway de su tienda:

1.  Acceda al **Admin** de VTEX.    
2.  Acceda al módulo **Pagos**.    
3.  Haga clic en **Configuración**.    
4.  En **Afiliaciones**, haga clic en el botón verde «**+**».    
5.  Busque y seleccione la opción **Affirm**.    
6.  En **Nombre de la afiliación**, cambie a **Affirm**.
7.  Rellene los campos **Application Key** y **Application Token**. Ingrese la información proporcionada por Affirm.
8. En **Captura de pago automática**,  seleccione una de las opciones a continuación:

   - **Utilizar el comportamiento recomendado del procesador de pagos:** la captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).

   - **Inmediatamente: captura automática al autorizar el pago:** la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.

   - **Inmediatamente: captura automática al aprobar el análisis de riesgo de fraude:** la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si selecciona este comportamiento y no tiene análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento «Inmediatamente: captura automática al autorizar el pago»).

   - **Desactivado: no se captura automáticamente:** la captura se realiza solo cuando se factura el pedido. Debe tener cuidado al elegir este comportamiento de captura, ya que el retraso en la facturación puede exceder el tiempo de captura acordado con el proveedor de pago y provocar la pérdida del pago.

<ul>
  9. Haga clic en <b>Salvar</b> para guardar los cambios.
  </ul>

## Instalar el snippet

Después de instalar Affirm, tiene que ingresar el snippet de la solución en la página del producto y en el checkout de su tienda. Por esta razón, recomendamos que un desarrollador realice la configuración.  

[Haga clic aquí](https://docs.affirm.com/affirm-developers/docs/checkout-web) para acceder a la documentación de Affirm con el código del snippet y compártala con el desarrollador o la agencia responsable de la ejecución del servicio. 

**![](https://lh5.googleusercontent.com/AQ8zxVkUK2muVkJGz4BDW8jJDuHxA_gGdHT5Z_IAP9kVyAIKIgwdbvitFndyzgarLfIhXCjHV-GwzFrFfj6PJk7uWXnD9B1ZWCXoSQsvOC19bf5TkIc8dSC1e9ZbRK8TPOBuYJnt)**

## Configurar condiciones de pago

Después de completar todos los pasos, Affirm está configurado y listo para ser utilizado en su tienda.

Si desea asociarlo a una condición de pago compatible con Affirm, siga el artículo [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).
