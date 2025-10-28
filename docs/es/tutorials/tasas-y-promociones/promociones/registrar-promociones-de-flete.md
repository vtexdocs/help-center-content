---
title: 'Registrar promociones de envío'
id: 6Lo5BR61KMiUFAAHGCdgfW
status: PUBLISHED
createdAt: 2019-03-27T19:50:39.607Z
updatedAt: 2024-08-12T13:24:18.788Z
publishedAt: 2024-08-12T13:24:18.788Z
firstPublishedAt: 2019-03-27T20:04:38.299Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
slugEN: configuring-shipping-promotions
legacySlug: registrar-promociones-de-envio
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

En la plataforma VTEX, usted puede crear diversas modalidades de [descuentos](/es/tutorial/como-criar-promocoes?locale=pt) para su tienda. Con las promociones de flete, el comprador recibe un descuento en el valor cobrado para la entrega de su pedido.

El paso a paso para crear una promoción de flete es el mismo de las [demás promociones regulares](/es/tutorial/registro-promocion-regular--tutorials_327). Sin embargo, hay algunas especificidades que se deben tener en cuenta al configurar este tipo de promociones.

Antes de configurar cualquier promoción de coste de envío, debe entender cuáles son las formas de ofrecer el descuento a los compradores. En VTEX, hay cuatro opciones de promoción de flete, que se pueden seleccionar en el campo **¿Qué tipo e importe de descuento?** [durante la creación de la Promoción regular](/es/tutorial/registro-promocion-regular--tutorials_327). Vea las opciones a continuación.

- **Carga nominal:** descuento específico para el valor del flete. Ejemplo: Descuento de USD 20 para cualquier flete en la región Nordeste.
- **Carga porcentual:** descuento de un porcentaje del valor de envío. Ejemplo: 50% de descuento en el valor de envío para los productos del departamento infantil.
- **Envío máximo:** permite establecer un valor máximo para el flete. Ejemplo: los productos «X» e «Y» tendrán un flete máximo de USD 20.
- **Flete gratis:** descuento total del valor del flete. Ejemplo: todos los pedidos realizados durante el feriado tendrán flete gratis.

## Configuraciones

A partir de los tipos de fletes existentes, se puede crear diferentes modalidades de promociones.

A continuación, explicamos algunos escenarios que se pueden configurar en la plataforma VTEX. Sin embargo, hay que recordar que el administrador de la tienda debe decidir cuál es la mejor opción para la realidad de su negocio.

### Escenario 1:

Si habilita la opción **Aplicar el descuento solo para la opción de envío más barata**, el descuento del flete se aplicará únicamente al valor de flete estimado más bajo. Esta opción ya aparece habilitada de manera predeterminada, pero la puede desactivar si prefiere configurar la promoción según el [Escenario 3](#escenario-3) o el [Escenario 4](escenario-4). 

Si la tienda configura la estrategia de envío __Retiro__, que tiene un costo de R$ 0,00 para el cliente, la promoción puede considerar este valor como el más bajo y no aplicar el descuento en los costos de envío. Para garantizar que la promoción funcione como se espera, aplicando el descuento de envío gratuito a los costos de envío, selecciona todos los métodos en el cuadro, excepto Retiro en Tienda.

#### Configuración
![Aplicar el descuento solo para la opción de envío más barata - ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/registrar-promociones-de-flete_1.png)

#### Resultado
![saggincaso1.2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/registrar-promociones-de-flete_2.png)

### Escenario 2

Si desactiva la opción **Aplicar el descuento solo para la opción de envío más barata**, el descuento se aplicará a todos los fletes disponibles.

#### Configuración
![Nenhum frete selecionado - ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/registrar-promociones-de-flete_3.png)

#### Resultado
![saggincaso2.2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/registrar-promociones-de-flete_4.png)

### Escenario 3

Si solo habilita la opción **Tipo de carga** y selecciona los tipos de flete deseados, el descuento de flete se aplicará a todos los tipos de flete seleccionados.

#### Configuración
![Tipo de carga - ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/registrar-promociones-de-flete_5.png)

#### Resultado
![saggincaso2.2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/registrar-promociones-de-flete_6.png)

### Escenario 4

Si habilita las opciones **Tipo de carga** y **Aplique el descuento solo cuando el cliente seleccione uno de los transportistas anteriores** y selecciona los tipos de flete deseados, el descuento de flete se aplicará a todos los tipos de flete seleccionados solamente cuando el cliente elija el tipo de flete en el checkout.

#### Configuración
![Tipo de Frete e Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente - ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/registrar-promociones-de-flete_7.png)

#### Resultado
![saggincaso3.2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/registrar-promociones-de-flete_8.png)

En resumen, la casilla **Aplique el descuento solo cuando el cliente seleccione uno de los transportistas anteriores** se utiliza para aplicar el descuento solamente cuando se selecciona la transportadora.

Durante la configuración en el módulo **Tasas y Promociones**, usted puede habilitar más de una transportadora para la misma promoción. Sin embargo, su cliente solo podrá seleccionar una transportadora al finalizar la compra.

Otra posibilidad es configurar una promoción de flete creando una promoción de campaña. Para conocer las especificidades de flete en esta modalidad de descuento, [lea nuestro artículo](/es/tutorial/crear-promocion-de-campana--1ChYXhK2AQGuS6wAqS8Ume#).
