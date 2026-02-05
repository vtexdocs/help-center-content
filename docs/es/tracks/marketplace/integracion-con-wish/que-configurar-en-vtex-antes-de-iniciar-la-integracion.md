---
title: 'Qué configurar en VTEX antes de iniciar la integración'
id: 3OHGQIQmt1dKw9RwKruE7H
status: PUBLISHED
createdAt: 2019-11-16T15:47:18.872Z
updatedAt: 2021-07-28T14:29:14.749Z
publishedAt: 2021-07-28T14:29:14.749Z
firstPublishedAt: 2019-11-19T17:27:48.328Z
contentType: trackArticle
productTeam: Channels
slugEN: what-to-configure-with-vtex-before-starting-the-integration
locale: es
trackId: 50hbG4bzhSIhjz1lzqI1g4
trackSlugEN: integracion-con-wish
order: 2
---

Para garantizar el correcto funcionamiento de la integración, es necesario realizar previamente algunas configuraciones iniciales en la plataforma de VTEX.

## Definiendo la política comercial

Es necesario definir qué política comercial se utilizará para integrar sus productos con Wish. Esta definición implicará cuatro aspectos principales: surtido de productos, stock, precio y moneda. Es decir, la disponibilidad y los precios de sus productos en un canal de venta determinado se basarán completamente en la política comercial que usted elija. [Haga clic aquí para entender con más detalle cómo funciona la política comercial](/es/tutorial/configurando-a-politica-comercial-para-marketplace).

> ℹ️ OBS: Wish exige que los precios del producto y flete se envíen en dólares (USD). Sin embargo, crea los pedidos con el valor ya convertido en reales (R$) para facilitar la emisión de la factura. Esto significa que la integración debe enviar precios en dólares y aceptar pedidos en reales. De esta manera, la arquitectura utiliza apenas Real (R$) y hace la conversión en la integración. Por lo tanto, **la política comercial para Wish debe ser en reales (R$)** y todo el flujo de conversión se detallará mejor en el [paso 5](/es/docs/tracks/configuraciones-de-la-integracion).

[Haga clic aquí](/es/faq/por-que-nao-consigo-criar-uma-nova-politica-comercial) para saber cómo contratar una nueva política si fuera necesario.

## Definiendo el surtido de productos

Una vez creada la política comercial, será necesario asociar la nueva política con los productos de su catálogo para definir cuáles serán enviados a Wish. A continuación, un paso a paso de cómo definir el surtido **masivamente por plantilla** ([vea otros métodos aquí](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#Planilha)).

  1. Haga la exportación de los productos de su catálogo ([vea cómo en la sección "Plantilla" de este artículo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#object-object)).
  2. Agregue al campo **"CodigoTiendas"** ([más detalle aquí](/es/docs/tutorials/rellenar-campos-de-la-planilla-de-importacion)) el **ID** de la política comercial definida en el paso anterior.
  3. Importe la plantilla de nuevo en el catálogo.

## Definiendo la logística

Para garantizar que los pedidos se integren con éxito, deberá realizar toda la asociación logística entre stock, muelles y transportadoras en VTEX. Para comprender un poco más sobre el contexto general de logística en VTEX, consulte [este artículo](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx). Realice el siguiente procedimiento para hacer las configuraciones:

  1. Verifique si sus [stocks](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/3mlfDHjikOgUna1SS2Nr1Y#campos-de-cadastro) están vinculados a los muelles correctos.
  2. Verifique si los [muelles](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/5XvQ1yLpxLlIKWRw1pSiyA) escogidos están asociados con la política comercial de Wish.
  3. Defina las [transportadoras](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/3fLedVI57srjBDDxxGgOWe) que realizarán las entregas de Wish.
  4. Asocie las transportadoras con los muelles.
 
> ℹ️ OBS: Wish realiza la transferencia de la comisión a través de la confirmación de entrega de los pedidos y consulta directamente a sus transportadoras asociadas para obtener esta información. ***Por lo tanto, para vender en Wish es obligatorio utilizar las transportadoras asociadas para realizar las entregas de los pedidos.*** [ Consulte aquí la lista de transportadoras aceptadas por Wish.](https://merchant.wish.com/documentation/shippingproviders)

## Definiendo precios

Para vender sus productos en Wish, es importante definir una estrategia de precios. Para entender un poco más sobre el contexto general de precios en VTEX, consulte [este artículo](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP). Realice el siguiente procedimiento para hacer las configuraciones:

  1. Cree una [tabla de precios](/es/docs/tracks/registrar-tabla-de-precio) para la política comercial de Wish.
  2. Defina [precios base](/es/docs/tracks/preco-base-definicao-de-conceito) a partir de la nueva tabla.
