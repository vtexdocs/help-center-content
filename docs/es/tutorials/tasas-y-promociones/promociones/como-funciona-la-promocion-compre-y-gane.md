---
title: 'Cómo funciona la promoción Compre y gane'
id: tutorials_322
status: PUBLISHED
createdAt: 2017-04-27T22:08:41.148Z
updatedAt: 2025-02-24T16:17:50.979Z
publishedAt: 2025-02-24T16:17:50.979Z
firstPublishedAt: 2017-04-27T23:03:14.992Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: buy-one-get-one
legacySlug: como-funciona-la-promocion-compre-y-gane
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

La promoción Compra uno y lleva uno gratis ofrece envío gratis o un regalo al agregar productos al carrito. Los beneficios se aplican automáticamente al cumplir los criterios. Por ejemplo, si el cliente compra una televisión, el envío puede ser gratis o si compra un videojuego, se le puede agregar un juego extra al pedido.

![Compre e Ganhe-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-funciona-la-promocion-compre-y-gane_1.gif)

Para configurar el Uno y Lleva Uno Gratis, el seller necesita ejecutar los siguientes pasos:

- [Crear promoción](#crear-promocion)
- [Condiciones Compra Uno y Lleva Uno Gratis](#condiciones-compra-uno-y-lleva-uno-gratis)
- [Condiciones para aplicar el Compra Uno y Lleva Uno Gratis](#condiciones-para-aplicar-el-compra-uno-y-lleva-uno-gratis)
- [Configurar restricciones para el uso de la promoción](#configurar-restricciones-para-el-uso-de-la-promocion)
- [Configurar acumulación y competencia](#configurar-acumulacion-y-competencia)
- [Mostrar la promoción en la página del producto](#mostrar-la-promocion-en-la-pagina-del-producto)

## Crear promoción

1. En el Admin VTEX, accede a **Promociones** > **Promociones** o ingresa **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en Crear promoción.
3. Selecciona la opción **Compra uno y lleva uno gratis**.
4. Rellena los campos de la promoción.
5. Haz clic en `Guardar`.

| **Campo**                                 | **Descripción**                                                                                                                                                                                                                | **Ejemplo**                                                                                                                                                                                                                                                                                                     |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Nombre**                                | Escoge un nombre claro y objetivo para la promoción (hasta 150 caracteres).                                                                                                                                                                           | Liquidación de Verano: ¡Compra y Gana Descuentos!                                                                                                                                                                                                                                                               |
| **Status**                                |  Indica si la promoción estará **Activa** o **Inactiva**. Una promoción **Activa** se aplicará según las fechas y horas configuradas, mientras que una **Inactiva** estará pausada aunque esté dentro del periodo configurado. | ![Habilitar Promociones-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-funciona-la-promocion-compre-y-gane_2.png) ![Desabilitar Promociones-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-funciona-la-promocion-compre-y-gane_3.png) |
| **Descripción**                           | La descripción interna de la promoción (hasta 10.000 caracteres) debe utilizarse para registrar información destinada a la comunicación interna de la tienda.                                                                                            | Al comprar un producto, recibes un descuento en el segundo producto.                                                                                                                                                                                                                                            |
| **Fecha de inicio y Hora de inicio**      | Seleccione la fecha y la hora exactas para el inicio de la promoción, asegurando que se active en el momento deseado. Asegúrese de ajustarla según la planificación de la campaña para maximizar su eficacia.                  | ![Data e horario de inicio da Promociones-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-funciona-la-promocion-compre-y-gane_4.png)                                                                                                                       |
| **Fecha de fin y Hora de fin**            | Defina el período de validez de la promoción configurando la fecha y la hora exactas para su desactivación automática. La fecha debe ser posterior a la fecha actual.                                                                                                        | ![Data de termino e horario da Promociones-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-funciona-la-promocion-compre-y-gane_5.png)                                                                                                                     |
| **Utilizar configuración de recurrencia** | Seleccione esta opción para programar la repetición automática de la promoción en días y horarios específicos. Configure los intervalos deseados para garantizar la recurrencia según la planificación.                        | ![Usar recorrencia Promociones-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-funciona-la-promocion-compre-y-gane_6.png)                                                                                                                                             |

### Definir los sellers participantes
En esta sección puedes definir los sellers a los que se aplicará la promoción, que pueden ser todos o sellers específicos. Selecciona una de las siguientes opciones para aplicar la promoción.

- **Todos:** la promoción se aplicará a todos los sellers registrados. Utiliza esta opción cuando deseas que todos los productos de todos los sellers formen parte de la campaña.
- **Iguales a:** selecciona esta opción para aplicar la promoción a sellers específicos solamente. Después de escoger "Iguales a", tendrás la opción de seleccionar los sellers deseados en el campo inferior. Solo los productos de los sellers seleccionados se incluirán en la campaña.
- **Diferentes de:** selecciona esta opción para excluir sellers específicos de la promoción. Después de escoger "Diferentes de", tendrás la opción de seleccionar los sellers que no deseas incluir en la campaña. Se incluirán todos los demás sellers.

![Seller-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-funciona-la-promocion-compre-y-gane_7.png)

### Seleccionar políticas comerciales
En esta sección puedes seleccionar las políticas comerciales que se aplicarán a la promoción. Las políticas comerciales definen las condiciones de venta y envío de los productos.

Puedes elegir entre las siguientes opciones:

- **Iguales a:** selecciona las políticas comerciales que deseas incluir en la promoción. Esta opción te permite especificar las políticas que se aplican a los productos que recibirán el descuento.
- **Diferentes de:** selecciona las políticas comerciales que deseas excluir de la promoción. Esta opción remueve determinadas políticas para garantizar que el descuento no se aplique a productos que sigan esas reglas comerciales.
- **Todas:** aplica la promoción a todas las políticas comerciales registradas sin ninguna restricción. Se incluirán todos los productos en la promoción independientemente de la política comercial asociada.

![Politica comercial-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-funciona-la-promocion-compre-y-gane_8.png)

### Condiciones Compra Uno y lleva Uno Gratis
En esta sección puedes configurar promociones de tipo "Compra uno y lleva uno gratis" para ofrecer beneficios con la compra de ciertos ítems. La configuración tiene dos partes:

- Definir los ítems que se deben comprar
- Escoger el beneficio concedido

Primero define las colecciones, SKUs y la cantidad mínima necesarias para activar la promoción.

**Si el cliente compra:**

- **SKUs:** ingresa el nombre o ID de los SKUs elegibles para la promoción.
- **Colecciones:** agrega las colecciones de productos que formarán parte de la promoción.
- **Cantidad mínima:** define la cantidad mínima de ítems que el cliente debe agregar al carrito para recibir el beneficio.
- **Debe ser el mismo ítem:** marca esta opción si deseas que la promoción solo se active con productos idénticos.

> ⚠️ Una promoción Compra uno y lleva uno gratis permite configurar hasta 100 SKUs diferentes simultáneamente.

**El cliente se lleva:**

Después de definir los ítems de compra, elige el beneficio que el cliente se llevará:

- **Envío gratis: elige entre las siguientes opciones de envío gratis:
    - **Todas las opciones de envío:** aplica envío gratis a todas las opciones de envío.
    - **Solo para el más barato:** aplica envío gratis solo a la opción más barata.
    - **Tipo de envío específico:** aplica envío gratis a un tipo de envío específico, como envío express o una transportadora particular.
- **Regalo:** descuento total sobre el valor del producto definido como regalo.
    - **SKUs:** selecciona los SKUs (por nombre o ID) correspondientes al regalo ofrecido.
    - **Cantidad de regalos:** establece el límite de la cantidad de regalos que el cliente puede recibir, incluso si el carrito contiene varios ítems elegibles. Hay dos opciones:
        - **Un regalo:** permite recibir un regalo independientemente de la cantidad de ítems en el carrito.
        - **Un regalo por cada ítem elegible del carrito:** permite recibir un regalo para cada ítem elegible del carrito.
- **Precio máximo:** define el valor máximo permitido para cada ítem de la compra. Este límite se aplicará a los productos elegibles para el beneficio.

### Condiciones para aplicar el Compra Uno y lleva Uno Gratis
En esta sección se proporciona información detallada sobre las condiciones que se deben cumplir para que la promoción sea válida.

- **Medio de pago:** la promoción se aplicará cuando se seleccione uno de los medios de pago especificados y el carrito tenga solo un medio de pago.
- **Número BIN de la tarjeta:** la promoción solo se aplicará cuando se utilicen tarjetas de redes, bancos o categorías específicas, identificadas por su número BIN. Puedes importar una lista de BIN en un archivo de texto (**.txt**) o CSV (**.csv**) con cada BIN descrito en una fila diferente.
- **Clúster de clientes:** selecciona un [clúster de clientes](https://help.vtex.com/es/tutorial/como-criar-um-cluster-de-clientes) previamente creado en Master Data, siguiendo el formato `field=value` o `field contains value`.
- **Tipo de envío:** permite establecer que la promoción se aplique en uno o más tipos de envíos seleccionados.
- **Ubicación del envío:** la promoción solo se aplicará si la dirección de envío del pedido cumple las siguientes condiciones:
    - **Países:** permite seleccionar los países en que la promoción será válida. Solo los pedidos cuya dirección de envío esté ubicada en los países seleccionados pueden beneficiarse de la promoción.
    - **Códigos postales:** permite restringir la promoción a rangos de códigos postales específicos para tener mayor control de las zonas en que se aplicará la promoción.
        - **Incluir:** la promoción solo se aplicará a las direcciones dentro de los códigos postales definidos.
        - **Excluir:** la promoción no se aplicará a las direcciones dentro de los códigos postales definidos.
        - **de:** ingresa el inicio del rango de códigos postales.
        - **hasta:** ingresa el fin del rango de códigos postales.
- **Parámetro UTM:** permite configurar la promoción para que se aplique cuando se acceda al sitio web mediante una URL con parámetros UTM o cuando se utilice un cupón asociado a esos parámetros. Define los parámetros UTM siguiendo las reglas de formato, utilizando solo letras, números, guiones y guiones bajos. Si es necesario, completa los siguientes parámetros:
    - **Fuente UTM:** el descuento se aplicará si la navegación se realiza con un parámetro utm_source con el valor registrado.
    - **Campaña UTM:** el descuento se concederá si la navegación utiliza un parámetro utm_campaign con el valor registrado.
    - **Crear cupón a partir de los parámetros UTM anteriores:** permite generar un cupón con los parámetros UTM ingresados en los campos `Fuente UTM` y `Campaña UTM`.
    - **Ver cupones vinculados:** permite ver los cupones que ya se vincularon a los parámetros UTM definidos.

### Configurar restricciones para el uso de la promoción
 La sección Restricciones de uso permite definir límites para el uso de la promoción, ya sea para toda la tienda o por clientes individuales. Marca las siguientes opciones según sea necesario:

 - **Limitar el uso de las promociones en la tienda:** restringe la cantidad de veces que se puede utilizar la promoción en la tienda.
 - **Limitar uso de la promoción por cliente:** permite restringir el número de veces que cada cliente puede utilizar la promoción.

### Configurar acumulación y competencia
En esta sección puedes definir la opción de combinar la promoción con otras promociones. Las opciones disponibles son:

- **Permitir acumular con otras promociones:** la promoción se puede combinar con otras promociones activas. Ten en cuenta que de forma predeterminada la promoción acumula descuentos de envío o regalos.
- **Permitir acumular con precios manuales:** la promoción se aplicará aun cuando se apliquen ajustes manuales a los precios para garantizar que la promoción funcione con ajustes individuales de precios en el carrito.

### Mostrar la promoción en la página del producto
Esta sección te permite destacar la promoción en la página de productos y agregar datos para crear personalizaciones en la tienda.

- **Destacar promociones en los productos:** marca esta opción para mostrar la promoción directo en las páginas de producto.

> ℹ️ Recuerda <a href=https://help.vtex.com/es/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295>configurar la visualización en el módulo CMS.</a>

- **Información adicional:** haz clic en `Crear` para agregar campos personalizados con nombre y valor, que puedes utilizar para personalizar la tienda.

