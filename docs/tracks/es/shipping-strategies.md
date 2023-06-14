---
title: Estrategias de envío
id: 4IPeNztIXsZI4oA5TyES9N
status: PUBLISHED
createdAt: 2022-03-07T17:45:18.081Z
updatedAt: 2022-03-10T16:12:39.772Z
publishedAt: 2022-03-10T16:12:39.772Z
firstPublishedAt: 2022-03-07T18:16:31.599Z
contentType: trackArticle
productTeam: Post-purchase
slug: estrategias-de-envio
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

Las opciones de envío a disposición del cliente en el _checkout_ de tu tienda son calculadas por **Inventario y entrega**. Estas opciones dependen de la ubicación del cliente y de la [estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) de tu tienda. 

La estrategia de envío define cómo los almacenes, muelles y políticas de envío interactúan para atender las necesidades de tus clientes y de tu empresa. 

![Estrategia EnvioES](https://images.ctfassets.net/alneenqid6w5/a0tXw0SPa0zFg5o0byFeS/d0349a827fc24a4c5a3e1782289fd8c0/Estrategia_EnvioES.png)

La estrategia de envío está definida por tres entidades logísticas:

* [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140): reglas acordadas entre las tiendas y las [transportadoras](https://help.vtex.com/es/tutorial/o-que-e-uma-transportadora--7u9duMD5UQa2QQwukAWMcE). Es en la política de envío donde la tienda debe registrar las condiciones de entrega que la transportadora ofrece. Con esta información, la plataforma filtra y calcula qué transportadoras satisfacen el pedido y las presenta al cliente. La política de envío también se utiliza para seleccionar el [punto de recogida](https://help.vtex.com/es/tutorial/puntos-de-recogida--2fljn6wLjn8M4lJHA6HP3R) del envío.
* [Almacén](https://help.vtex.com/es/tutorial/almacen--6oIxvsVDTtGpO7y6zwhGpb): identificación del lugar donde se almacenan los ítems. La política de envío no es la única variable para elegir la entrega, también hay que tener en cuenta en qué almacén se encuentran los productos del pedido. 
* [Muelle](https://help.vtex.com/es/tutorial/muelles--5DY8xHEjOLYDVL41Urd5qj): punto de recogida del almacén. Es a través del muelle que la tienda define la recogida de los paquetes. Las transportadoras recogen los paquetes para envío en el muelle.

<div class = "alert alert-info">
Hay otros escenarios posibles para el uso del muelle, consulta el artículo <a href="https://help.vtex.com/es/tutorial/muelles--5DY8xHEjOLYDVL41Urd5qj">Muelle</a> y comprueba los casos de uso. Para saber más sobre el flujo de entregas, consulta el artículo <a href="https://help.vtex.com/es/tutorial/como-funciona-el-flujo-de-entregas--4ku3QKWfxmUO8UgA0yqgUq">¿Cómo funciona el flujo de entregas?</a>.
</div>

Ten en cuenta que:

* El paquete es el empaque que contiene los ítems del pedido.
* El almacén es la identificación de los lugares donde se almacenan las mercancías.
* El muelle es el punto intermedio entre el envío y el almacenamiento de los paquetes.
* El control de los ítems del almacén lo realiza [Inventario y envío](https://help.vtex.com/es/tutorial/gestionar-items-en-inventario--tutorials_139).
* Los envíos son todos los despachos de pedidos de la tienda (entrega o recogida).
* La entrega es un tipo de envío en el que el cliente recibe a domicilio los ítems adquiridos en el sitio web de _ecommerce_.

### Cómo configurar

El orden de configuración sugerido para el funcionamiento esperado de las [estrategias de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) es:

1. [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140)
2. [Plantilla de flete](https://help.vtex.com/es/tutorial/plantilla-de-flete--tutorials_127)
3. [Muelle](https://help.vtex.com/es/tutorial/gestionar-el-muelle--7K3FultD8I2cuuA6iyGEiW) 
4. [Almacén](https://help.vtex.com/es/tutorial/gestionar-almacenes--tutorials_137)

## Punto de recogida

En los casos en los que la tienda ofrece [puntos de recogida](https://help.vtex.com/es/tutorial/puntos-de-recogida--2fljn6wLjn8M4lJHA6HP3R) (en los que el cliente recoge el pedido), la tienda debe registrar el punto de recogida y luego realizar la configuración de la estrategia de envío para este tipo de entrega. Esto se debe a que la plataforma también calcula los puntos de recogida disponibles con base en la ubicación del cliente y comprueba el almacén, muelle y transporte para que el producto esté disponible para la recogida del cliente. 

El punto de recogida está disponible en el _checkout_ como opción de envío y el cliente elige entre **Entrega** (transportadora) y **Recogida** (punto de recogida).

<div class = "alert alert-info">
La configuración de la Estrategia de envío también se puede realizar a través de las API. Consulta las API disponibles:
<body>
<ul>
<li><a href="https://developers.vtex.com/vtex-rest-api/reference/docks">API de muelles</li></a>
<li><a href="https://developers.vtex.com/vtex-rest-api/reference/createupdatewarehouse">API de almacenes</li></a>
<li><a href="https://developers.vtex.com/vtex-rest-api/reference/get_logistics-pvt-shipping-policies-id">API de políticas de envío</li></a>
<li><a href="https://developers.vtex.com/vtex-rest-api/reference/listallpickupppoints">API de puntos de recogida</li></a>
</div>

### Cómo configurar

Para las [estrategias de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) que utilizan puntos de recogida, el orden de registro sugerido es:

1. [Registro de los punto de recogida](https://help.vtex.com/es/tutorial/registro-de-puntos-de-recogida--2R5ClQiwe4KoSQgsuiOw4E) 
2. [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140)
3. [Plantilla de envío](https://help.vtex.com/es/tutorial/plantilla-de-flete--tutorials_127)
4. [Muelle](https://help.vtex.com/es/tutorial/gestionar-el-muelle--7K3FultD8I2cuuA6iyGEiW) 
5. [Almacén](https://help.vtex.com/es/tutorial/gestionar-el-muelle--7k3fultd8i2cuua6iygeiw)
6. [Registro de geolocalización](https://help.vtex.com/es/tutorial/registering-geolocation--tutorials_138)
7. Configuración de los puntos de recogida disponibles en el _checkout_

<div class="alert alert-warning">
Consulta los pasos detallados sobre <a href="https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#como-configurar">cómo configurar un punto de recogida.</a> 
</div>

## Tiempo de envío y feriados

Cuando el cliente tiene los ítems en el _checkout_ y añade los datos de ubicación, la plataforma estima el tiempo de envío del pedido. El estimado (también conocido como SLA) se calcula tomando en cuenta los siguientes criterios:

* Horarios [configurados en el almacén](https://help.vtex.com/es/tutorial/gestionar-almacenes--tutorials_137#campos-de-registro).
* Horarios [configurados en el muelle](https://help.vtex.com/es/tutorial/gestionar-el-muelle--7K3FultD8I2cuuA6iyGEiW#campos-de-registro).
* Horarios [configurados en la política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140#registrar-politica-de-envio): configurados en los campos **Horario de recolección **y **Horario laboral**. 
* Feriados registrados.

Para ver más detalles sobre el cálculo del SLA, consulta el artículo [Cómo se calcula el plazo de entrega del pedido](https://help.vtex.com/es/tutorial/como-se-calcula-el-plazo-de-entrega-del-pedido--1TOuKCIjGQmqOqQkEqCg82).

### Feriados

Los feriados son importantes para determinar el plazo de envío, ya que está directamente relacionado con el plazo de entrega de los pedidos de tu tienda. VTEX considera que los feriados son los días en los que tu tienda no funcionará.

<div class="alert alert-warning">
Se recomienda que el registro de los feriados se realice después de la configuración de las estrategias de envío.
</div>

Para registrar los feriados en la plataforma, puedes:

* Utilizar la sección [Feriados](https://help.vtex.com/es/tutorial/registrar-feriados--2ItOthSEAoyAmcwsuiO6Yk) para realizar el registro en el Admin VTEX.
* Utilizar la [API de Feriados](https://developers.vtex.com/vtex-rest-api/reference/holidays) para realizar el registro a través de la API.

Puedes registrar los horarios de entrega para envíos programados de las transportadoras y puntos de recogida. La funcionalidad **[Entrega programada](https://help.vtex.com/es/tutorial/entrega-programada--22g3HAVCGLFiU7xugShOBi)** permite a la tienda ofrecer ventanas de entrega a los clientes.

<div class = "alert alert-info">
El envío también depende del <a href="https://help.vtex.com/es/tutorial/costo-final-del-envio--5bwhIO108VA5Y2YOpef9lV">costo de envío</a> que tu tienda ofrece a los clientes. Este tema se presentará en los próximos artículos. Para entender mejor cómo se eligen las transportadoras que realizarán una entrega, consulta el artículo <a href="https://help.vtex.com/es/tutorial/como-funciona-el-calculo-del-flete--tutorials_116">Cómo funciona el cálculo del flete</a>.
</div>
