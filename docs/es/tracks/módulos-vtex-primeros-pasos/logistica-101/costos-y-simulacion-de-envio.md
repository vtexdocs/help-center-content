---
title: 'Costos y simulación de envío'
id: 3by48jFhzpZEseYFpH9uVt
status: PUBLISHED
createdAt: 2022-03-08T15:06:14.717Z
updatedAt: 2022-03-10T16:31:46.970Z
publishedAt: 2022-03-10T16:31:46.970Z
firstPublishedAt: 2022-03-08T18:28:59.554Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: shipping-costs-and-simulation
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistica-101
order: 4
---


## Costo final de envío

La suma de todos las tarifas necesarias para el envío de los pedidos se denomina [costo de envío final](/es/docs/tutorials/costo-final-del-envio). El costo agrupa las [tarifas de envío](/es/docs/tutorials/tarifas-de-envio) de las políticas de envío y los costos de muelle. 

Estos costos se registran para utilizarlos en el _checkout_. Al final de la experiencia de compra, el cliente informa los datos de entrega, luego la plataforma calcula las opciones de envío y las presenta al cliente con los respectivos costos. 

Es posible registrar los gastos de envío vía:

* Admin: 
    * En la sección `Estrategia de envío`: utilizando la [plantilla de flete](/es/docs/tutorials/plantilla-de-flete) de la política de envío para el registro en masa.
    * En la sección `Tarifas de envío`: para registrar las tarifas individualmente y comprobar las tarifas existentes. Puedes obtener más información sobre cómo utilizar la sección en el artículo [Gestionar las tarifas de envío](/es/docs/tutorials/gestionar-las-tarifas-de-envio).
* API: utilizando la API de [API de valores de envío](https://developers.vtex.com/vtex-rest-api/reference/createupdatefreightvalues).

Recomendamos que después de registrar las tarifas en la plataforma, el administrador de la tienda compruebe que las tarifas se hayan registrado correctamente utilizando el [Simulador de envío](/es/docs/tutorials/simulador-de-envio).

## Simulador de envío

Con las [estrategias de envío](/es/docs/tutorials/estrategia-de-envio) de la tienda configuradas y los ítems a la venta en el _stock_, es importante validar si la configuración refleja lo que se desea, es decir, si los productos registrados en el _stock_ realmente ofrecen las opciones de envío a los clientes. 

Esta validación la realiza el [Simulador de envío](/es/docs/tutorials/simulador-de-envio). Esta herramienta le permite al administrador de la tienda ver qué escenarios de entrega están disponibles para el producto en una ubicación específica. De este modo, el administrador de la tienda puede comprobar:

* Si el producto está disponible para entrega en una determinada región.
* Cuáles son los métodos de envío del producto.
* Las transportadoras que pueden realizar la entrega y las razones por las que se descartaron las demás.
* Las tarifas de envío existentes.
* Si hay puntos de recogida del producto.
* Qué [seller white label](/es/docs/tutorials/seller-white-label) realizará la entrega del producto. 

> ℹ️ También simula el envío a través de la API utilizando la [API de cálculo de SLA](https://developers.vtex.com/vtex-rest-api/reference/calculatesla).
