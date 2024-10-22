---
title: 'Promociones (Beta)'
id: 4jUEX3NcdMtxUPHey1nInn
status: DRAFT
createdAt: 2021-02-23T21:24:12.421Z
updatedAt: 2022-05-16T12:00:47.348Z
publishedAt: 
firstPublishedAt: 2021-02-25T12:26:08.175Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: promotions-beta
locale: es
legacySlug: promociones-beta
subcategoryId: 6iTRZiMeCGXYiO2ckABFZi
---

>❗ Esta funcionalidad será descontinuada el 16 de mayo de 2022. Si tiene alguna duda, póngase en contacto con <a href= "https://support.vtex.com/hc/es-419/requests">nuestro Soporte</a>.

La plataforma VTEX proporciona una forma optimizada y práctica de registrar varios tipos de promociones que se adaptan a diferentes escenarios. A través de una interfaz centralizada para la gestión de promociones, su tienda puede ofrecer más beneficios centrados en atraer y retener a los clientes.

La versión beta del módulo de __Promociones__ ofrece flexibilidad para crear escenarios de promoción con condiciones específicas para cada contexto. Por ejemplo, usted puede definir descuentos sobre el precio y el envío u ofrecer regalos a sus clientes mediante promociones programadas y/o segmentadas.

El módulo de __Promociones__ está disponible en el Admin a través del menú __Tasas y Promociones__ > __Promociones__.

## Lista de promociones
La página de inicio presenta la lista de promociones en una malla que permite ver fácilmente la información básica relativa a la promoción (nombre, efecto, ítems afectados, periodo de validez y status de la promoción). Con un solo clic, usted puede:

- Activar o desactivar promociones a través del botón <i class="fas fa-toggle-on"></i>;
- Duplicar o archivar promociones a través del botón <i class="fas fa-ellipsis-v"></i>
- Gestionar las condiciones de la promoción haciendo clic en cualquier lugar de la línea de la malla (consulte la sección [Nueva promoción](#nueva-promocion) para obtener detalles sobre las condiciones de la promoción).

![promobeta1 acoes lista promocoes ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Beta/Promotions Beta/promociones-beta_1.gif)

La lista de promociones se puede filtrar y ordenar según sus necesidades. Es posible filtrar por *Efecto*, *Estado*, *Fecha de inicio*, *Fecha de caducidad* o *Política comercial*.

![promobeta2 filtros lista promocoes ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Beta/Promotions Beta/promociones-beta_2.gif)

El orden puede ser ascendente o descendente a partir de la información básica de la promoción, simplemente haciendo clic en el título.

![promobeta3 ordenacao lista promocoes ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Beta/Promotions Beta/promociones-beta_3.gif)

## Nueva promoción
Las variedades de condiciones para crear promociones se traducen en campos presentes en la pantalla de __Nueva Promoción__. La creación de una promoción que se ajuste a los estándares deseados se realiza de forma sencilla, rellenando los campos en una única pantalla a la que se accede a través del botón __NUEVA PROMOCIÓN__ de la página de inicio.

![promobeta4 botao novapromocao ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Beta/Promotions Beta/promociones-beta_4.png)

Tanto las condiciones de la nueva promoción como los campos de la pantalla están separados por grupos, que son:

- [Información general](#informacion-general)
- [Programación](#programacion)
- [Acumulación y competencia](#acumulacion-y-competencia)
- [Efecto](#efecto)
- [Condiciones](#condiciones)
- [Cupones](#cupones)
- [Restricciones](#restricciones)
- [Origen](#origen)
- [Apariencia](#apariencia)

La combinación de diferentes selecciones de condiciones permite crear múltiples escenarios con contextos específicos. Puede, por ejemplo, definir descuentos en el envío para la compra de un determinado número de productos u ofrecer regalos a clientes específicos en determinados días de la semana. Las opciones son diversas: solo tiene que rellenar los campos según sus necesidades.

### Información general
- __Status__: opción que define si la promoción está activa o inactiva.
- __Nombre__: nombre de la promoción.
- __Descripción__: descripción interna de la promoción. La finalidad de este campo es que se utilice para la comunicación interna de la tienda con el fin de dejar claro si la promoción se debe a una campaña, a una liquidación total, etc.

### Programación
- __Fecha y hora de inicio__: fecha y hora que determinan el inicio de la promoción. Este campo se puede configurar con una fecha y una hora futuras. Si se define de esta manera, la promoción mantendrá el status de “programada” hasta que se alcance la fecha y la hora.
- __Configurar fecha de caducidad__: opción que activa la configuración de una fecha de caducidad de la promoción.
- __Fecha y hora de caducidad__: fecha y hora que determinan el fin de la promoción. Este campo se puede configurar con una fecha y hora posteriores a las de inicio. Mientras la promoción sea válida, tendrá el status de “Activa”. Cuando se alcance la fecha y la hora de caducidad, el status cambiará a "Finalizada" automáticamente.
- __Configuraciones de recurrencia__: configuraciones adicionales de recurrencia de la promoción.
  - __Días de la semana__: define qué días de la semana son válidos para la promoción. Si usted establece días específicos, debe seleccionarlos.
  - __Horas del día__: define qué horas del día son válidas para la promoción. Si usted establece horarios específicos, debe seleccionar un rango de horas.

### Acumulación y competencia
- __Acumular con otras promociones__: opción que permite conceder más de una promoción con el mismo tipo de descuento [al mismo tiempo](https://help.vtex.com/es/tutorial/entendiendo-la-competencia-de-las-promociones-2--tutorials_2270). 
- __Acumular con precios manuales__: opción que permite aplicar la promoción a los productos cuyos precios fueron insertados manualmente por usuario de televentas. Para la correcta utilización de esta opción, se requiere una configuración previa de la tienda que permita la inserción de precios manuales.

### Efecto
En esta sección, usted debe hacer clic en el botón que contiene el efecto deseado de la promoción. Los efectos disponibles son: __Precio__, __Regalo__ o __Envío__. Los campos se hacen visibles después de haber seleccionado el botón.

#### Precio
Este efecto permite configurar un descuento en el precio del carrito o en determinados productos.

- __Tipo de descuento__
  - __Nominal__: descuento que se otorgará sobre el total del carrito. Ejemplo: descuento de $20,00 sobre productos con un valor de más de $150,00.
  - __Porcentual__: porcentaje de descuento que se otorgará sobre el valor del producto. Ejemplo: 10% de descuento para los productos del departamento infantil.
  - __Tabla de Precios__: descuento aplicado según el precio registrado en la Tabla de Precios seleccionada.
- __Ítems afectados__
  - __Todo el catálogo__: esta opción indica si todos los productos del catálogo se ven afectados por la promoción.
  - __Productos específicos__: esta opción indica a qué productos del catálogo se aplica la promoción. Usted puede seleccionar entre __Marca__, __Categoría__, __Colección__, __Producto__, __Vendedor__ y __SKU del Producto__ para crear condiciones y definir si un determinado grupo de productos se verá afectado o excluido de la promoción. Ejemplo: una tienda de ropa puede crear una promoción de verano con todos los productos del catálogo, excepto los que forman parte de la colección de invierno.

#### Regalo
Este efecto genera un descuento total sobre el valor del producto definido como regalo. Ejemplo: al comprar el champú, obtenga un neceser gratis.

- __SKU__: opción que permite seleccionar el SKU que será el regalo de la compra.
- __Cantidad máxima por compra__: opción que permite seleccionar la cantidad máxima de regalos que una compra puede recibir.

>⚠️ El producto de **Regalo** también debe tener un precio registrado, aunque se entrega gratuitamente al cliente.

#### Envío
- __Tipo de descuento__
  - __Nominal__: descuento que se otorgará sobre el valor de envío. Ejemplo: $10,00 de descuento en el valor de envío.
  - __Porcentual__: porcentaje de descuento que se otorgará sobre el valor de envío. Ejemplo: 90% de descuento en el valor de envío para la región sureste.
  - __Valor máximo__: valor máximo que puede asumir el envío. Si el valor de envío calculado es más barato que el valor máximo, se cobrará el valor de envío más barato. Ejemplo: si el administrador de la tienda define un valor de envío máximo de $20,00 en la promoción y el valor de envío calculado para un determinado pedido es de $10,00, solo se cobrará el valor de $10,00. Si el valor de envío calculado para el pedido es de $30,00, solo se cobrará el importe máximo de $20,00 de envío.
- __Ítems afectados__
  - __Todo el catálogo__: esta opción indica si todos los productos del catálogo se ven afectados por la promoción.
  - __Productos específicos__: esta opción indica a qué productos del catálogo se aplica la promoción. Para esto, usted debe seleccionar las condiciones de los productos que participarán en la promoción. Puede seleccionar entre __Marca__, __Categoría__, __Colección__, __Producto__, __Vendedor__ y __SKU del Producto__ para crear condiciones.

### Condiciones
- __Todos los clientes__: esta opción indica que la promoción se aplicará a todos los clientes.
- __Clientes específicos__: esta opción indica a qué clientes se aplicará la promoción. Para esto, usted debe seleccionar las condiciones de los clientes que participarán en la promoción. Puede seleccionar una o más de las siguientes condiciones:
  - __Producto en el carrito__.
  - __País de entrega__.
  - __BIN de la tarjeta de crédito__.
  - __Es la primera compra__.
  - __Número de cuotas__.
  - __Forma de pago__.
  - __Método de envío__.
  - __Rango de precio total__.
  - __UTM Campaign__.
  - __UTM Source__.
  - __Rango de códigos postales__.

>ℹ️ Si desea vincular un <a href= "https://help.vtex.com/es/tutorial/crear-cupon-de-descuento--tutorials_319">cupón existente</a> a la nueva promoción, debe seleccionar las opciones UTM Campaign y UTM Source e ingresar los códigos del cupón.

### Cupones
Si desea crear un nuevo cupón asociado a la promoción, haga clic en __NUEVO CUPÓN__ y rellene los siguientes campos:

- __Código__: código del cupón.
- __UTM Source__: código UTM source del cupón.
- __UTM Campaign__: código UTM campaign del cupón.

Al hacer clic en __Opciones Avanzadas__, existe la posibilidad de configurar un campo adicional:

- __Limitar el uso__: opción que limita la cantidad de veces que se puede utilizar el cupón.

>⚠️ Para guardar el nuevo cupón, es necesario hacer clic en el botón **OK**. Si se cierra la ventana sin esta confirmación, no se creará el cupón.

Al crear un nuevo cupón para la nueva promoción, este se mostrará también en la pestaña __Cupones__ del módulo __Tasas y Promociones__. Además, sus condiciones de UTM Source y/o UTM Campaign se vincularán automáticamente a la nueva promoción en el filtro __Clientes Específicos__.

>⚠️ Si se cambian las condiciones de UTM Source y UTM Campaign en la configuración del filtro **Clientes Específicos** después de haber creado el cupón mediante este flujo, el cupón se eliminará.

### Restricciones
- __Limitar el uso en su tienda__: limita la cantidad de veces que la promoción se puede aplicar a la tienda.
- __Clientes específicos__: limita la cantidad de veces que un cliente puede utilizar la promoción.
- __Número máximo de ítems afectados por carrito__: cantidad máxima de productos en un carrito que pueden verse afectados por la promoción.
- __Restringir políticas comerciales__: define qué políticas comerciales se aplican a la promoción.

### Origen
- __Marketplace__: define si la promoción es válida solo para pedidos realizados directamente en la tienda.
- __Fulfillment__: define si la promoción es válida solo para pedidos realizados en los marketplaces en los que su tienda actúe como seller.

### Apariencia
- __Destacar la promoción en los estantes y en las páginas de producto__: define si se requiere [una configuración adicional en el módulo CMS](https://help.vtex.com/es/tutorial/configurando-promocion-con-destaque-flag--tutorials_2295) para que se muestre el aviso.

