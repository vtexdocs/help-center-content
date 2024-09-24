---
title: 'Seller portal: crear una promoción'
id: kzNPEaiJE8EWkDzO9dbBI
status: PUBLISHED
createdAt: 2023-09-01T15:28:13.875Z
updatedAt: 2023-11-16T18:06:30.499Z
publishedAt: 2023-11-16T18:06:30.499Z
firstPublishedAt: 2023-09-01T16:58:54.457Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: seller-portal-crear-una-promocion
locale: es
legacySlug: seller-portal-crear-una-promocion
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

Para crear una nueva promoción como seller en el Seller Portal, sigue los pasos que se indican a continuación.

1. En el Admin VTEX Admin, ve a **Productos > Promociones > Promociones** o ingresa **Promociones** en la barra de búsqueda de la parte superior de la página.
2. Haz clic en `Crear promoción.`
3. Rellena los datos solicitados en los [Campos de registro de la promoción](#campos-de-registro-de-la-promocion).
4. Haz clic en `Guardar`
5. Revisa la configuración de tu promoción antes de publicarla.
![seller-portal-promo-revisao-es](//images.ctfassets.net/alneenqid6w5/76ttKMrp8E1XlK2QZ6OAJQ/29c086e5c167c63b97438bec6410a865/image.png)
6. Haz clic en `Confirmar`.

Después, se activará la promoción y se aplicará a tu tienda.

>ℹ️ Las promociones que puedan aplicarse a los mismos ítems del carrito se comparan por su valor de descuento. A este respecto, el módulo Promociones intenta siempre aplicar la promoción más ventajosa para el comprador.

## Campos de registro de la promoción

### General

En esta sección, debes configurar la información general de la promoción.

![seller-portal-promo-geral-es](//images.ctfassets.net/alneenqid6w5/33rywokDbzTvVS1VscDxvp/23a283361433a809c30668b5143f6fc6/image.png)

* **Nombre:** nombre de la promoción.
* **Status:** botón de alternancia que define si la promoción está activa <i class="fas-toggle-on"></i> o inactiva <i class="fas-toggle-off"></i>.
* **Descripción:** descripción interna de la promoción. Este campo se utiliza para la comunicación interna de tu tienda, para dejar claro si la promoción se debe a alguna campaña o liquidación de stock, por ejemplo.
* **Fecha de inicio:** fecha de inicio de la promoción. Se puede seleccionar una fecha y hora futuras para que la promoción comience a aplicarse en el sitio web. Si se configura de esta forma, la promoción tendrá el status de **programada** hasta que se alcance la fecha. 
* **Fecha de fin:** fecha de finalización de la promoción. Mientras la fecha de finalización no se alcance, la promoción tendrá el status de activa, pero al llegar el día estipulado para su finalización, el descuento se desactivará automáticamente.
* **Hora de inicio:** hora en que la promoción empieza.
* **Hora de fin:** hora en que la promoción termina.

### Tipo de descuento

Sección que define el tipo y valor del descuento que se aplicará en la promoción. Consulta las opciones de descuento a continuación:

![seller-portal-promo-tipo-desconto-es](//images.ctfassets.net/alneenqid6w5/cvG0Q9A8BHoazDipvbnol/f74488e8864f4b7a0134835dc4fe114e/image.png)

#### Precio

* **Porcentaje:** porcentaje de descuento que se concederá al valor del producto.
* **Precio máximo por ítem:** el precio máximo para cada ítem elegible de la compra será el precio anteriormente configurado. Esta opción solo se aplicará a los productos cuyo precio sea superior al valor configurado.

#### Envío

* **Envío gratis:** descuento en el valor total de envío de los ítems elegibles de la promoción.
* **Porcentaje:** porcentaje de descuento que se concederá al valor del envío. 
* **Precio máximo de envío:** valor máximo del envío. Si hay un método de envío más barato que el valor máximo configurado, se aplicará el de menor precio.

### Productos elegibles

En esta sección, debes seleccionar si la promoción se aplicará a todos los productos registrados en tu tienda o solo a productos específicos, como se ilustra a continuación.

![seller-portal-promo-produtos-elegiveis-es](//images.ctfassets.net/alneenqid6w5/77OBxN704Khh9t2MqXq49k/c281d0d00239a39cb1411e8fc88d73af/image.png)

* **Todos los productos:** aplica la promoción a todo tu catálogo.
* **Productos que cumplan las siguientes reglas:** limita la aplicación de la promoción a productos específicos respecto a las siguientes reglas de selección:
  * **Categoría, Marca, Producto, SKU:** opción que define el criterio de selección de los productos.
      * `Es uno de`: incluye los criterios de selección de productos.
      * `No es uno de`: excluye los criterios de selección de productos.

Una vez definidos los criterios de selección, ingresa el nombre de los ítems que deseas incluir o excluir.

Para agregar más de una regla de selección, haz clic en `+ Agregar regla`. Si se configura más de una regla, solo los ítems que cumplan ambas reglas recibirán el descuento.

Para eliminar una regla, haz clic en <i class="fas-trash-can"></i> `Remover regla`.

### Condiciones

El pedido del cliente debe cumplir todas las condiciones registradas en esta sección para que la promoción pueda aplicarse.

![seller-portal-promo-condicoes-es](//images.ctfassets.net/alneenqid6w5/52hsesSaNHcwM7Ti6jKQL7/72e08a40feda1f058cf41f733062adc8/image.png)

* **Precio del ítem:** el descuento solo se concederá a los ítems dentro del rango de precios establecido. 
* **Tipo de envío:** el descuento se concederá si el tipo de envío elegido por el cliente es el mismo que el registrado en la promoción. 
* **País de entrega:** el descuento se concederá a los ítems que se entreguen en los países seleccionados en este campo.
* **Código postal de entrega:** el descuento se concederá si el código postal de entrega cumple la regla configurada. Es posible agregar más de un rango de códigos postales para incluir o excluir más zonas.

### Restricciones

La acción de la promoción estará limitada por el siguiente criterio:

![seller-portal-promo-restricoes-es](//images.ctfassets.net/alneenqid6w5/1FG1nW6lJCXmHJtSdlERkc/b3c27968580ad91841f76bcffa707eee/image.png)

* **Limitar el número de ítems elegibles por carrito: **define el número máximo de ítems del carrito a los que puede aplicarse la promoción. Si el carrito contiene más ítems que los estipulados en el límite, el descuento solo se aplicará a la cantidad configurada en este campo.
