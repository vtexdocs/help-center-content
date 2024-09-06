---
title: 'Delivery Promise (Beta)'
id: p9EJH9GgxL0JceA6dBswd
status: PUBLISHED
createdAt: 2024-08-22T15:58:58.240Z
updatedAt: 2024-09-02T22:29:17.194Z
publishedAt: 2024-09-02T22:29:17.194Z
firstPublishedAt: 2024-08-22T18:57:59.895Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: delivery-promise-beta
locale: es
legacySlug: delivery-promise-beta
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ Esta funcionalidad se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarla. Si tienes alguna duda, ponte en contacto con <a href= "https://help.vtex.com/es/support">nuestro Soporte</a>.

**Delivery Promise (Beta)** es la nueva solución de VTEX para que el cliente, durante la experiencia de compra en tu tienda, vea solo los productos que puede comprar, teniendo en cuenta tanto la disponibilidad de los productos en stock como los tipos de envío válidos para la dirección de entrega.

Con la funcionalidad **Delivery Promise (Beta),** tu tienda puede ofrecer a los clientes una "promesa de envío" de todos los productos visitados, como se muestra en el video a continuación:

<iframe width="560" height="315" src="https://www.youtube.com/embed/bqapGY0wo24" title="VTEX Delivery Promise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

>❗ Por el momento, la funcionalidad **Delivery Promise (Beta)** no permite filtrar la vitrina de la tienda por plazo de envío. Para más información sobre filtros, consulta la sección [Funcionalidades disponibles](#funcionalidades-disponibles).

El artículo se estructura en las siguientes secciones:

* [Funcionalidades disponibles](#funcionalidades-disponibles)
* [Beneficios](#beneficios)
* [Requisitos y restricciones](#requisitos-y-restricciones)
* [Preguntas frecuentes](#preguntas-frecuentes)

## Funcionalidades disponibles

Además de poder comprar todos los productos vistos, los clientes tienen la opción de filtrar los productos de la vitrina para que solamente se muestren aquellos resultados que cumplen determinados criterios, como veremos a continuación. Esto permite al cliente dirigir la experiencia de navegación de acuerdo con sus propios objetivos: 

* Productos disponibles para el código postal deseado.
* Fecha límite para recibir el producto.
* Productos disponibles en tiendas cercanas al cliente.
* Tipo de envío más rápido para el pedido.
* [Punto de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) donde el cliente desea retirar el pedido.

En esta etapa, **Delivery Promise (Beta)** permite a los clientes de tu tienda filtrar los productos mostrados en la navegación según los siguientes criterios:

* Ubicación facilitada por el cliente.
* Tipo de envío o recogida.
* Punto de recogida deseado por el cliente.

>ℹ️ Los filtros mencionados anteriormente son componentes nativos de Intelligent Search. Si deseas desarrollar componentes personalizados para tu tienda, ponte en contacto con tu equipo de desarrollo o con un [partner de implementación](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#partners-de-implementacion).

## Beneficios

**Delivery Promise (Beta)** está recomendada para todo tipo de operaciones, ya que la solución garantiza diversos beneficios para cualquier modelo de negocio. Consulta las condiciones de arquitectura de tienda para participar de la fase beta (en curso) en la sección [Requisitos y restricciones](#requisitos-y-restricciones).

Para operaciones [omnichannel](https://help.vtex.com/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv), cuanto mayor sea la cobertura de la red logística y el número de sellers y [cuentas franquicia](https://help.vtex.com/es/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) asociados a la operación, mayores serán los beneficios obtenidos. Consultas los principales beneficios en la tabla a continuación:

| **Beneficio** | **Detalles** |
| :---: | :--- |
| Menor abandono de carritos | <p>Es común que los clientes abandonen la compra después de ingresar su ubicación en la etapa del carrito, tras descubrir que no es posible realizar el envío a su región o que el plazo de entrega no cumple con sus expectativas.</p><p>Con <b>Delivery Promise (Beta)</b>, para cada producto que el cliente ve en la vitrina, se considera tanto la disponibilidad de stock como la viabilidad del envío a la ubicación del cliente. Además de esto, la información de envío se muestra desde el inicio de la jornada de compra del cliente.</p> |
| Mayor surtido de productos en la vitrina | <p>Debido a limitaciones en funcionalidades como la <a href="https://help.vtex.com/es/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw">regionalización de sellers</a>, <a href="https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI">sellers de extensa cobertura</a> y el <a href="https://help.vtex.com/es/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">algoritmo de selección de sellers</a>, sin <b>Delivery Promise (Beta)</b>, el surtido de productos que se muestra al cliente en la vitrina no refleja la totalidad de productos de los sellers.</p><p>Con <b>Delivery Promise (Beta)</b>, el cliente puede ver el surtido completo de productos de todos los sellers, siempre que dichos productos:<ul><li>Estén correctamente configurados.</li><li>Tengan disponibilidad de stock.</li><li>Dispongan de un tipo de envío válido a la dirección ingresada por el cliente.</li></ul></p> |
| Mejor experiencia de compra | <p><b>Delivery Promise (Beta)</b> promueve una mejor experiencia de compra para el cliente como un todo:<ul><li>Elimina la frustración de descubrir en el checkout que no se puede realizar la compra.</li><li>Permite al cliente visualizar un mayor número de productos.</li><li>Permite que el cliente navegue por la vitrina según sus objetivos, como priorizar el tipo de envío o comprar en una tienda física.</li></ul></p> |
| Fomentar ventas en tiendas físicas  | <p><b>Delivery Promise (Beta)</b> garantiza que el cliente encuentre determinados productos en las tiendas físicas, lo que estimula la visita a dichas tiendas y aumenta las oportunidades de venta.</p> |

## Requisitos y restricciones

Para el correcto funcionamiento de **Delivery Promise (Beta)**, es necesario que el cliente proporcione su ubicación desde el inicio de la compra, de manera que la vitrina muestre únicamente productos con tipos de envío válidos. Esto requiere la instalación de [Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), que solicita la dirección del cliente. 

Para participar en la fase beta actual de **Delivery Promise (Beta)**, deben cumplirse las siguientes condiciones:

* <i class="far fa-check-circle"></i> **Requisito:** usar [Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG).
* <i class="far fa-check-circle"></i> **Requisito:** tener la implementación del frontend de [Store Framework](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework).
* <i class="fas fa-times"></i> **Restricción:** la tienda no puede actuar como marketplace para cuentas de tipo [Seller Portal](https://help.vtex.com/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex) o sellers externos.

## Preguntas frecuentes

Estas son algunas preguntas frecuentes relacionadas con **Delivery Promise (Beta)**:

[1. ¿Cuáles son los requisitos para que el producto se muestre en la vitrina?](#1-cuales-son-los-requisitos-para-que-el-producto-se-muestre-en-la-vitrina)

[2. ¿Delivery Promise (Beta) garantiza que todos mis productos se mostrarán en la vitrina?](#2-delivery-promise-beta-garantiza-que-todos-mis-productos-se-mostraran-en-la-vitrina)

[3. ¿Cómo puedo garantizar que el stock del producto se muestre en la vitrina?](#3-como-puedo-garantizar-que-el-stock-del-producto-se-muestre-en-la-vitrina)

[4. ¿Necesito solicitar la ubicación del cliente para utilizar Delivery Promise (Beta)?](#4-necesito-solicitar-la-ubicacion-del-cliente-para-utilizar-delivery-promise-beta)

[5. En el contexto de Delivery Promise (Beta), ¿qué ocurre si el cliente no desea compartir su ubicación y VTEX no puede deducir su dirección?](#5-en-el-contexto-de-delivery-promise-beta-que-ocurre-si-el-cliente-no-desea-compartir-su-ubicacion-y-vtex-no-puede-deducir-su-direccion)

[6. ¿Dónde debo configurar las tiendas que atienden determinados códigos postales?](#6-donde-debo-configurar-las-tiendas-que-atienden-determinados-codigos-postales)

[7. ¿Qué ocurre si utilizo la funcionalidad Región?](#7-que-ocurre-si-utilizo-la-funcionalidad-region)

[8. ¿Delivery Promise (Beta) permite mostrar filtros y tags de envío gratis?](#8-delivery-promise-beta-permite-mostrar-filtros-y-tags-de-envio-gratis)

[9. ¿Puedo optar por no usar Delivery Promise (Beta)?](#9-puedo-optar-por-no-usar-delivery-promise-beta)

### 1. ¿Cuáles son los requisitos para que el producto se muestre en la vitrina?

El retailer debe verificar que los siguientes aspectos del producto estén correctamente configurados:

* Registro del producto y SKU en el catálogo.
* Registro de precio.
* [Estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) que permite enviar el pedido a la dirección facilitada por el cliente.
* Recuento del [stock](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139) del producto para ventas, o stock ilimitado configurado o posibilidad de activar la opción para mostrar el producto cuando esté agotado.
* Plantillas de [CMS](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) configuradas para el frontend de la tienda.

>ℹ️ Para más información, consulta [¿Por qué el producto no se muestra en el sitio web?](https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

### 2. ¿Delivery Promise (Beta) garantiza que todos mis productos se mostrarán en la vitrina?

Cuando se configuran correctamente los ajustes necesarios para que el producto se muestre en la vitrina, **Delivery Promise (Beta)** muestra todo el surtido de tus productos y de los productos de tus sellers en la vitrina de la tienda. Si un producto no está disponible debido a configuraciones incorrectas o a la falta de stock, no se mostrará en la vitrina, incluso con la nueva funcionalidad. Para saber más, consulta [¿Por qué el producto no se muestra en el sitio web?](https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

### 3. ¿Cómo puedo garantizar que el stock del producto se muestre en la vitrina?

Hay tres formas:

* Mantener el [stock](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139) del producto con recuento de stock para ventas (los [ítems reservados](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92) no están disponibles para la venta).
* Activar la opción [stock ilimitado](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139) para el producto.
* Configurar el producto para que se muestre en la vitrina aunque esté agotado. Para hacerlo, ve a **Catálogo > Todos los productos** en el Admin VTEX y, en la página de configuración del producto, en la pestaña Producto, marca la opción **Sí** en el campo `Mostrar producto agotado`.

### 4. ¿Necesito solicitar la ubicación del cliente para utilizar Delivery Promise (Beta)?

El funcionamiento de **Delivery Promise (Beta)** solo es posible cuando el cliente facilita su ubicación o cuando VTEX la infiere. Esta inferencia puede realizarse de las siguientes maneras:

* La dirección del cliente se captura automáticamente cuando este acepta el plugin del navegador para compartir su ubicación.
* Si el navegador no dispone del mencionado plugin o el cliente no desea compartir su ubicación, la dirección se deducirá a partir de la dirección IP del dispositivo del cliente.

En todas las opciones anteriores, el cliente tiene la posibilidad de facilitar su dirección o una dirección diferente en cualquier momento.

### 5. En el contexto de Delivery Promise (Beta), ¿qué ocurre si el cliente no desea compartir su ubicación y VTEX no puede deducir su dirección?

En este caso, el retailer puede utilizar una de las siguientes estrategias:

* Definir [sellers de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI), lo que permite mostrar los productos de estos sellers a clientes que no proporcionen su ubicación.
* Definir un código postal o [geolocalización](https://help.vtex.com/es/tutorial/gerenciar-geolocalizacao--tutorials_138) predeterminada para los clientes que no informen su ubicación. Sugerimos que esté cerca de un [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) con una gran cantidad de productos o de una región con mayor volumen de ventas.

### 6. ¿Dónde debo configurar las tiendas que atienden determinados códigos postales?

Incluso si utilizas **Delivery Promise (Beta)**, esta configuración se realiza en las [plantillas de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127) de las [políticas de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) de los sellers.

### 7. ¿Qué ocurre si utilizo la funcionalidad Región?

**Delivery Promise (Beta)** sustituye todas las funcionalidades existentes en [Región V1](https://help.vtex.com/es/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw) y V2, además de añadir mejoras en el desempeño, la experiencia de compra y nuevas funcionalidades. Como la solución aún está en fase de desarrollo, la regionalización de sellers sigue siendo utilizada normalmente por los clientes que no participan en **Delivery Promise (Beta)**.

### 8. ¿Delivery Promise (Beta) permite mostrar filtros y tags de envío gratis?

En la fase beta actual, no habrá filtros de envío gratis. Por el momento, vamos a ofrecer opciones de filtros y tags por tipo de envío (recogida o envío), y por punto de recogida. La vitrina mostrará productos de sellers que estén disponibles para la venta.

### 9. ¿Puedo optar por no usar Delivery Promise (Beta)?

La decisión de utilizar o no **Delivery Promise (Beta)** es tuya. Si no deseas solicitar la ubicación del comprador, puedes seguir utilizando la solución actual de navegación de clientes sin ubicación definida, y asociar [sellers de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI) si así lo deseas. Sin embargo, la mejor experiencia de compra del cliente con la vitrina de la tienda se logra con **Delivery Promise (Beta)**, que es la recomendación de VTEX.

