---
title: 'Crear una promoción de campaña'
id: 1ChYXhK2AQGuS6wAqS8Ume
status: PUBLISHED
createdAt: 2018-12-02T18:57:52.792Z
updatedAt: 2025-09-24T14:00:05.744Z
publishedAt: 2025-09-24T14:00:05.744Z
firstPublishedAt: 2018-12-03T16:52:03.595Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
slugEN: campaign-promotion
legacySlug: promocion-de-campana
locale: es
subcategoryId: 2cI57eZ3ZiWSeaQs26Gwys
---

La **promoción de campaña** siempre está vinculada a una **audiencia de campaña**, es decir, a un público objetivo específico.

Este tipo de promoción incluye todas las opciones de la promoción regular y ofrece recursos adicionales, como:

* Público objetivo específico

* Envío gratis para todos los envíos disponibles

* Tabla de precios promocionales

* Regalo ofrecido por el seller

Antes de crear una promoción de campaña, primero debes crear la [audiencia de campaña](/es/tutorial/criar-audiencia-de-campanhas--6cnuDZJzIkIeocewAQQK4K), que define el público objetivo al que se dirigirá. Puedes seleccionar segmentos de clientes elegibles y configurar los criterios que activarán la promoción.

**Ejemplo:** si creas una audiencia de campaña cuyo público objetivo son clientes que agregan el producto A al carrito, puedes configurar la promoción de campaña para que ese público reciba un descuento en el producto B.

> ❗ Las audiencias de campaña y sus promociones solo son válidas para la cuenta principal de la tienda. Las cuentas de sellers no ofrecen esta funcionalidad. Las audiencias de campaña creadas en una cuenta de seller no se activarán.

Para crear una promoción de campaña sigue los pasos a continuación:

* [Crea la promoción](#crea-la-promocion)  
* [Selecciona la audiencia de la campaña](#selecciona-la-audiencia-de-la-campana)  
* [Define ítems para activar la promoción](#define-items-para-activar-la-promocion)  
* [Comprueba las condiciones de la promoción](#comprueba-las-condiciones-de-la-promocion)  
* [Configura las restricciones de uso](#configura-las-restricciones-de-uso)  
* [Destaca la promoción en la página de producto](#destaca-la-promoción-en-la-pagina-de-producto)

Crear la promoción

Después de crear la audiencia de campaña sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Promociones *\>* Promociones** o ingresa **Promociones**  en la barra de búsqueda en la parte superior de la página.  
2. Haz clic en `Crear promoción`.  
3. Haz clic en `Promoción de campaña`.  
4. Llena los campos de la promoción, según lo descrito en la tabla a continuación. Los campos con asterisco son obligatorios.  
5. Haz clic en `Guardar.`

| Campo | Descripción |
| ----- | ----------- |
| **Nombre** | Asigna a la promoción un nombre claro y objetivo (hasta 150 caracteres). |
| **Status** | Define si la promoción estará **Activa** o **Inactiva**. Actívala con <i class="fas fa-toggle-on" aria-hidden="true"></i> para que se aplique según las fechas y horas configuradas. Desactívala con <i class="fas fa-toggle-off" aria-hidden="true"></i> para pausarla, incluso si está dentro del período definido. |
| **Descripción** | Usa este campo para agregar el objetivo o los detalles de la promoción, como el tipo de campaña o la estacionalidad. No puede contener más de 10 000 caracteres. Visible solo en el Admin VTEX. |
| **Fecha y hora de inicio** | Selecciona la fecha y la hora exactas para activar automáticamente la promoción. |
| **Fecha y hora de fin** | Define la fecha y la hora exactas para finalizar la promoción. Después de este momento, la campaña se desactivará automáticamente. La fecha de fin debe ser posterior a la de inicio. |
| **Utilizar configuración de recurrencia** | Activa esta opción para repetir automáticamente la promoción en días y horarios específicos. Es útil para configurar acciones estacionales. Una vez activada, define los días y horarios de la recurrencia de acuerdo con los parámetros de la campaña. |

### Definir sellers

En la sección **Sellers**, define si la promoción se aplicará a todos los sellers o solo a sellers específicos. Las opciones son:

* **Todos:** la promoción se aplicará a todos los sellers registrados. Deja el campo de selección en blanco.  
* **Iguales a:** la promoción se aplicará solo a los sellers informados. Ingresa los identificadores en el campo correspondiente.  
* **Diferentes de**: la promoción se aplicará a todos los sellers, excepto a los seleccionados.

### Seleccionar políticas comerciales

En la sección **Políticas comerciales**, define las políticas comerciales a las que se aplicará la promoción:

* **Todas**: la promoción se aplicará a todas las políticas comerciales registradas.

* **Iguales a**: la promoción se aplicará solo a las políticas seleccionadas.

* **Diferentes de**: la promoción se aplicará a todas las políticas, excepto a las seleccionadas.

## Seleccionar la audiencia de la campaña
Define las audiencias que tendrán acceso a esta promoción. La promoción solo se aplicará a los usuarios que cumplan con las condiciones configuradas en las audiencias seleccionadas.

> ℹ️ Para crear nuevas audiencias o entender cómo configurarlas, accede al artículo [Crear audiencias de campaña](/es/tutorial/como-criar-campanhas).

## Definir ítems para activar la promoción

En la sección **Si el cliente compra** , configura los ítems que funcionarán como condición de activación de la promoción de campaña, de acuerdo con la audiencia definida anteriormente.

* **Aplicar a todos los ítems de la tienda**: la promoción se activará cuando el público objetivo de la audiencia agregue cualquier ítem de la tienda al carrito.  
* **Aplicar a los ítems que cumplen con todas las restricciones definidas**: la promoción se activará solo cuando el público agregue al carrito ítems que cumplan con todas las condiciones configuradas.

Puedes configurar restricciones de:

* **SKUs**: ítems específicos identificados por SKU.  
  * **Iguales a**: solo se aplica a los SKUs listados.  
  * **Diferentes de**: se aplica a todos los SKUs, excepto los listados.  
* **Productos**: la promoción se aplica a los productos independientemente del SKU.  
  * **Iguales a**: se aplica solo a los productos seleccionados.  
  * **Diferentes de**: se aplica a todos los productos, excepto los seleccionados.  
* **Colecciones**: la promoción se aplica a ciertas colecciones.  
  * **Iguales a**: se aplica solo a las colecciones seleccionadas.  
  * **Diferentes de**: se aplica a todas las colecciones, excepto a las seleccionadas.  
* **Categorías**: la promoción se aplica a las categorías del catálogo.  
  * **Iguales a**: se aplica solo a las categorías seleccionadas.  
  * **Diferentes de**: se aplica a todas las categorías, excepto a las seleccionadas.  
* **Marcas**: la promoción se aplica a las marcas de productos.  
  * **Iguales a**: se aplica solo a las marcas seleccionadas.  
  * **Diferentes de**: se aplica a todas las marcas, excepto a las seleccionadas.

El cliente se lleva

Selecciona el beneficio que se aplicará si se cumplen las condiciones de la promoción de campaña. Las opciones incluyen:

* **Descuento**  
  * **Valor fijo**: otorga un descuento de valor fijo sobre los ítems o el pedido.  
  * **Porcentual**: otorga un descuento porcentual sobre el valor de los ítems o del pedido.  
  * **Valor fijo fórmula**: calcula el descuento usando una fórmula personalizada, restando un valor absoluto definido por la lógica de la fórmula.  
* **Envío**  
  * **Valor fijo**: aplica un descuento de valor fijo al envío.  
  * **Porcentual**: aplica un descuento porcentual sobre el valor del envío.  
  * **Gratis**: elimina el costo de envío.  
  * **Máximo**: define el valor máximo que se puede cobrar por envío. Se descontará cualquier valor que supere el máximo.  
* **Precio máximo**  
  * Define un valor límite que se aplicará al precio de los productos elegibles. Los ítems no podrán superar ese valor después de que se aplique la promoción.  
* **Regalo**  
  * **SKUs**: permite seleccionar los SKUs (por nombre o ID) que se ofrecerán como regalo.  
  * **Cantidad de regalos**: define la cantidad de regalos que se podrán seleccionar, ya sea por carrito o por ítem elegible.  
* **Valor de fidelidad**  
  * **Valor fijo**: asigna una cantidad fija de puntos de fidelidad.  
  * **Porcentual**: calcula los puntos con base en un porcentaje del valor del pedido.  
* **Tabla de precios promocionales**  
  * Aplica a los SKUs elegibles los valores definidos en la tabla de precios promocionales seleccionada.

## Comprobar las condiciones de la promoción

Las condiciones de aplicación de la promoción de campaña están determinadas por las audiencias previamente seleccionadas. La promoción solo se mostrará y aplicará a los usuarios que cumplan con los criterios configurados en el público objetivo de la campaña.

Para consultar o editar las condiciones de la audiencia, haz clic en `Ver audiencias.`

## Configurar las restricciones de uso
Define el número máximo de veces que la promoción se puede aplicar en la tienda o por cliente.

* **Limitar el uso de las promociones en la tienda**: marca esta opción para definir el número máximo de usos en toda la tienda.  
* **Limitar uso de la promoción por cliente**: marca esta opción para restringir las veces que cada cliente puede usar la promoción.

## Destacar la promoción en la página de producto

Esta sección te permite definir el destaque visual de la promoción de campaña en los productos mostrados en la tienda.

* **Destacar promociones en los productos:** activa esta opción para mostrar una insignia promocional en los productos elegibles para la promoción. Para que el destaque funcione correctamente, debes [configurar la visualización en el módulo CMS de la tienda](/es/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).   
* **Información adicional:** haz clic en `Crear`para agregar campos personalizados con nombre y valor, que puedes utilizar para personalizaciones en la tienda.
