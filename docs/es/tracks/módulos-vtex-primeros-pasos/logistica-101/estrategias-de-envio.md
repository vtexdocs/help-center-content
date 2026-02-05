---
title: 'Estrategias de envío'
id: 4IPeNztIXsZI4oA5TyES9N
status: PUBLISHED
createdAt: 2022-03-07T17:45:18.081Z
updatedAt: 2024-11-05T17:58:52.520Z
publishedAt: 2024-11-05T17:58:52.520Z
firstPublishedAt: 2022-03-07T18:16:31.599Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: shipping-strategies
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistica-101
order: 2
---

Las opciones de envío a disposición del cliente en el _checkout_ de tu tienda son calculadas por **Inventario y entrega**. Estas opciones dependen de la ubicación del cliente y de la [estrategia de envío](/es/docs/tutorials/estrategia-de-envio) de tu tienda. 

La estrategia de envío define cómo los almacenes, muelles y políticas de envío interactúan para atender las necesidades de tus clientes y de tu empresa. 

![Estrategia EnvioES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/módulos-vtex-primeros-pasos/logistica-101/estrategias-de-envio_1.png)

La estrategia de envío está definida por tres entidades logísticas:

* [Política de envío](/es/docs/tutorials/politica-de-envio): reglas acordadas entre las tiendas y las [transportadoras](/es/docs/tutorials/transportadoras-en-vtex). Es en la política de envío donde la tienda debe registrar las condiciones de entrega que la transportadora ofrece. Con esta información, la plataforma filtra y calcula qué transportadoras satisfacen el pedido y las presenta al cliente. La política de envío también se utiliza para seleccionar el [punto de recogida](/es/docs/tutorials/puntos-de-recogida) del envío.
* [Muelle](/es/docs/tutorials/muelles): punto de recogida del almacén. Es a través del muelle que la tienda define la recogida de los paquetes. Las transportadoras recogen los paquetes para envío en el muelle.
* [Almacén](/es/docs/tutorials/almacen): identificación del lugar donde se almacenan los ítems. La política de envío no es la única variable para elegir la entrega, también hay que tener en cuenta en qué almacén se encuentran los productos del pedido. 

> ℹ️ Hay otros escenarios posibles para el uso del muelle, consulta el artículo [Muelle](/es/docs/tutorials/muelles) y comprueba los casos de uso. Para saber más sobre el flujo de entregas, consulta el artículo [¿Cómo funciona el flujo de entregas?](/es/tutorial/como-funciona-el-flujo-de-entregas--4ku3QKWfxmUO8UgA0yqgUq).

Ten en cuenta que:

* El paquete es el empaque que contiene los ítems del pedido.
* El almacén es la identificación de los lugares donde se almacenan las mercancías.
* El muelle es el punto intermedio entre el envío y el almacenamiento de los paquetes.
* El control de los ítems del almacén lo realiza [Inventario y envío](/es/docs/tutorials/gestionar-items-en-inventario).
* Los envíos son todos los despachos de pedidos de la tienda (entrega o recogida).
* La entrega es un tipo de envío en el que el cliente recibe a domicilio los ítems adquiridos en el sitio web de _ecommerce_.

### Cómo configurar

El orden de configuración sugerido para el funcionamiento esperado de las [estrategias de envío](/es/docs/tutorials/estrategia-de-envio) es:

1. [Política de envío](/es/docs/tutorials/politica-de-envio)
2. [Muelle](/es/docs/tutorials/gestionar-el-muelle) 
3. [Almacén](/es/docs/tutorials/gestionar-almacenes)

## Punto de recogida

En los casos en los que la tienda ofrece [puntos de recogida](/es/docs/tutorials/puntos-de-recogida) (en los que el cliente recoge el pedido), la tienda debe registrar el punto de recogida y luego realizar la configuración de la estrategia de envío para este tipo de entrega. Esto se debe a que la plataforma también calcula los puntos de recogida disponibles con base en la ubicación del cliente y comprueba el almacén, muelle y transporte para que el producto esté disponible para la recogida del cliente. 

El punto de recogida está disponible en el _checkout_ como opción de envío y el cliente elige entre **Entrega** (transportadora) y **Recogida** (punto de recogida).

> ℹ️ La configuración de la Estrategia de envío también se puede realizar a través de las API. Consulta las API disponibles: <body> <ul> <li>[API de muelles</li>](https://developers.vtex.com/vtex-rest-api/reference/docks) <li>[API de almacenes</li>](https://developers.vtex.com/vtex-rest-api/reference/createupdatewarehouse) <li>[API de políticas de envío</li>](https://developers.vtex.com/vtex-rest-api/reference/get_logistics-pvt-shipping-policies-id) <li>[API de puntos de recogida</li>](https://developers.vtex.com/vtex-rest-api/reference/listallpickupppoints)

### Cómo configurar

Para las [estrategias de envío](/es/docs/tutorials/estrategia-de-envio) que utilizan puntos de recogida, el orden de registro sugerido es:

1. [Registro de los punto de recogida](/es/docs/tutorials/registro-de-puntos-de-recogida) 
2. [Política de envío](/es/docs/tutorials/politica-de-envio)
3. [Plantilla de envío](/es/docs/tutorials/plantilla-de-flete)
4. [Muelle](/es/docs/tutorials/gestionar-el-muelle) 
5. [Almacén](/es/tutorial/gestionar-el-muelle--7k3fultd8i2cuua6iygeiw)
6. [Registro de geolocalización](/es/docs/tutorials/gestionar-geolocalizacion)
7. Configuración de los puntos de recogida disponibles en el _checkout_

> ⚠️ Consulta los pasos detallados sobre [cómo configurar un punto de recogida.](/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#como-configurar)

## Tiempo de envío y feriados

Cuando el cliente tiene los ítems en el _checkout_ y añade los datos de ubicación, la plataforma estima el tiempo de envío del pedido. El estimado (también conocido como SLA) se calcula tomando en cuenta los siguientes criterios:

* Horarios [configurados en el almacén](/es/tutorial/gestionar-almacenes--tutorials_137#campos-de-registro).
* Horarios [configurados en el muelle](/es/tutorial/gestionar-el-muelle--7K3FultD8I2cuuA6iyGEiW#campos-de-registro).
* Horarios [configurados en la política de envío](/es/tutorial/politica-de-envio--tutorials_140#registrar-politica-de-envio): configurados en los campos **Horario de recolección **y **Horario laboral**. 
* Feriados registrados.

Para ver más detalles sobre el cálculo del SLA, consulta el artículo [Cómo se calcula el plazo de entrega del pedido](/es/docs/tutorials/como-se-calcula-el-plazo-de-entrega-del-pedido).

### Feriados

Los feriados son importantes para determinar el plazo de envío, ya que está directamente relacionado con el plazo de entrega de los pedidos de tu tienda. VTEX considera que los feriados son los días en los que tu tienda no funcionará.

> ⚠️ Se recomienda que el registro de los feriados se realice después de la configuración de las estrategias de envío.

Para registrar los feriados en la plataforma, puedes:

* Utilizar la sección [Feriados](/es/docs/tutorials/registrar-feriados) para realizar el registro en el Admin VTEX.
* Utilizar la [API de Feriados](https://developers.vtex.com/vtex-rest-api/reference/holidays) para realizar el registro a través de la API.

Puedes registrar los horarios de entrega para envíos programados de las transportadoras y puntos de recogida. La funcionalidad **[Entrega programada](/es/docs/tutorials/entrega-programada)** permite a la tienda ofrecer ventanas de entrega a los clientes.

> ℹ️ El envío también depende del [costo de envío](/es/docs/tutorials/costo-final-del-envio) que tu tienda ofrece a los clientes. Este tema se presentará en los próximos artículos. Para entender mejor cómo se eligen las transportadoras que realizarán una entrega, consulta el artículo [Cómo funciona el cálculo del flete](/es/docs/tutorials/como-funciona-el-calculo-del-envio).
