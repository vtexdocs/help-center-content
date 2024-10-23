---
title: 'Crear una promoción de campaña'
id: 1ChYXhK2AQGuS6wAqS8Ume
status: PUBLISHED
createdAt: 2018-12-02T18:57:52.792Z
updatedAt: 2023-03-31T14:02:10.258Z
publishedAt: 2023-03-31T14:02:10.258Z
firstPublishedAt: 2018-12-03T16:52:03.595Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
slugEN: campaign-promotion
locale: es
legacySlug: promocion-de-campana
subcategoryId: 2cI57eZ3ZiWSeaQs26Gwys
---

La promoción de campaña siempre está vinculada a una audiencia de campaña, es decir, a un público objetivo específico. Este tipo de promoción engloba todas las posibilidades presentes en la [Promoción Regular](https://help.vtex.com/es/tutorial/registro-promocion-regular--tutorials_327) y las siguientes opciones adicionales:

- Público objetivo específico
- Flete gratis para todos los fletes disponibles
- Lista de precios promocionales
- Regalo entregado por el _seller_

Antes de crear una campaña de promoción, debe crear un público de campaña para definir el público objetivo de su promoción. Así, puede seleccionar los segmentos de clientes elegibles en la promoción, que funcionan como activadores, a partir de los criterios que configure.

Ejemplo: si configura una [audiencia de campaña](https://help.vtex.com/es/tutorial/Crear-audiencia-de-campanas--6cnuDZJzIkIeocewAQQK4K) cuyo público objetivo son los clientes que ponen el «producto A» en el carrito, en la promoción de la campaña puede configurar que este público reciba un descuento en el «producto B».

>ℹ️ Los públicos de las campañas y sus promociones solo son válidos para la cuenta principal de la tienda. Las cuentas de <i>sellers</i> no tienen esta opción. Si se crean en una cuenta de <i>seller</i>, el público de campaña o la promoción de campaña no se activarán.

Después de definir la [audiencia de la campaña](https://help.vtex.com/es/tutorial/Crear-audiencia-de-campanas--6cnuDZJzIkIeocewAQQK4K), acceda al Admin y siga los pasos a continuación para crear una promoción de campaña.

1. En el Admin VTEX, accede a *Promociones > Promociones*, o escribe *Promociones* en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón `Crear promoción`.
3. Haga clic en la opción `Promoción de campaña`.
4. Rellene los [campos de la promoción de campaña](#campos-de-la-promocion-de-campana).
5. Haga clic en `Salvar` para guardar los cambios.

## Campos de la promoción de campaña

El formulario para crear una promoción de campaña se divide en las siguientes secciones:

1. [¿Cuáles son los datos generales de la promoción?](#1-cuales-son-los-datos-generales-de-la-promocion)
  - [Restringir la promoción a los productos de los sellers](#restringir-la-promocion-a-los-productos-de-los-sellers)
  - [Política comercial](#politica-comercial)
2. [¿En qué elementos (o ítems) se aplicará esta promoción?](#2-en-que-elementos-o-items-se-aplicara-esta-promocion)
3. [Restricciones y limitaciones de uso](#3-restricciones-y-limitaciones-de-uso)

A continuación se describen todos los campos que debe rellenar para crear una promoción de campaña correspondientes a cada sección.

### 1. ¿Cuáles son los detalles generales de la promoción?

- **Nombre:** es el nombre de la promoción.
- **Status:** activa o desactiva la promoción.
- **Descripción:** es la descripción interna de la promoción. Este campo se puede utilizar para la comunicación interna en su tienda para identificar mejor la promoción. Por ejemplo, deje claro que la promoción se debe al público de alguna campaña o la liquidación de <i>stock,</i> por ejemplo.
- **Validez:** es la fecha y hora de inicio y fin de la promoción. Si lo desea, puede configurar una fecha y hora de inicio futuras para programar la promoción. En este caso, la promoción tendrá el estado **Programada** hasta la fecha y hora que defina. Mientras la promoción sea válida, tendrá el status **Activo**. Al final del periodo definido por la fecha de finalización de la promoción, el estado cambiará a **Inactivo** automáticamente.
- **Utilizar configuraciones de recurrencia:** habilitar esta opción le permite configurar la recurrencia de la promoción de su campaña de acuerdo con las opciones a continuación.
  - **Día de la semana:**
    - **Todos los días de la semana:** al seleccionar esta opción, la promoción será válida todos los días de la semana.
    - **Días específicos de la semana:** al seleccionar esta opción, puede elegir los días de la semana en los que la promoción será válida.
  - **Horario del día:**
    - **Todo el día:** al seleccionar esta opción, la promoción será válida durante todo el día.
    - **Horarios específicos:** al seleccionar esta opción, puede elegir la «hora de inicio» y la «hora de término» del periodo en el que la promoción será válida.
- **Audiencia de las campañas:** le permite seleccionar los públicos de la campaña que tendrán acceso a esta promoción. Para más información, lea el artículo [Crear audiencia de campañas](https://help.vtex.com/pt/tutorial/como-criar-campanhas).
- **Qué tipo e importe de descuento:** esta selección define el tipo y el valor del descuento que se aplicará a la promoción. Vea las siguientes opciones:
  - **Nominal:** es el descuento que se concederá al total del carrito.
  - **Carga nominal:** es el descuento que se concederá al valor del flete.
  - **Porcentual:** es el porcentaje de descuento que se concederá al valor del producto.
  - **Precio máximo por artículo:** el precio máximo para cada ítem de la compra será el precio registrado aquí.
  - **Carga porcentual:** es el porcentaje de descuento que se concederá al valor del flete. 
  - **Envío máximo:** es el valor máximo establecido para el flete. 
  - **Flete gratis:** es el descuento total sobre el valor del flete.
  - **Regalo:** es el descuento total sobre el valor del producto definido como regalo. Puede seleccionar uno o más SKU como regalos, o más de una unidad para el mismo SKU. Para definir más de un regalo, escoja la opción **Activar multiplicador de regalo** y defina la cantidad deseada. Lea más sobre esta opción en este [artículo](https://help.vtex.com/es/tutorial/que-significa-activar-el-multiplicador-de-regalo-en-una-promocion--1gydgkmjEWcoo2CskUwuYK).

  >ℹ️ El producto de **Regalo** también debe tener un precio registrado aunque se dé al cliente de forma gratuita.

  - **Descuento nominal basado en la fórmula:** el descuento se calcula sumando los precios de los productos (total), el flete (<i>freight</i>) y el porcentaje de descuento deseado. Es importante destacar que el valor del flete que se incluirá en la fórmula será el valor menor que esté disponible para el pedido, independientemente de la selección del cliente. El separador decimal debe ser siempre el punto. Ejemplo: el descuento será del 30 % del valor del producto + el valor del flete. Entonces, la fórmula debe rellenarse así: ((total + freight) * 0.3).
  - **Valor de fidelidad nominal:** es el crédito que será añadido al programa de fidelidad de la tienda. 
  - **Valor de fidelidad porcentual:** es el porcentaje de crédito que se añadirá al programa de fidelidad de la tienda. 
  - **Tabla de precios promocionales:** permite utilizar una lista de precios como promoción. El precio promocional de cada SKU será el correspondiente a la lista de precios seleccionada. Puede configurar un máximo de cinco promociones de campaña simultáneas utilizando listas de precios promocionales en su tienda. El precio de la lista de precios se aplicará solo si su valor es inferior al precio configurado en la política comercial utilizada en la promoción. Además, las promociones de la lista de precios compiten con todas las demás promociones relacionadas con los precios, es decir, si hay más de una promoción de precios activa y aplicable a los productos en cuestión, se aplicará el precio más bajo. Vea más información sobre la competencia de promociones en nuestro artículo [Cómo funciona la competencia de promociones](https://help.vtex.com/es/tutorial/entendiendo-la-competencia-de-las-promociones-2--tutorials_2270).

Si elige un tipo de descuento relacionado con el flete («Carga porcentual», «Carga nominal», «Envío máximo» o «Flete gratis») al crear la promoción de campaña, también tendrá acceso a las configuraciones que se indican a continuación.

- **Tipo de carga:** es el descuento que se concederá si el tipo de flete elegido por el cliente es el mismo que el registrado en la promoción. Este criterio solo se tendrá en cuenta si el tipo de la promoción está relacionado con el valor del flete, es decir, solo si es uno de los siguientes tipos:  «Carga porcentual», «Carga nominal», «Envío máximo» o «Flete gratis».
- **Aplicar el descuento solamente con el flete más barato:** si habilita esta opción, el descuento del flete se aplicará solamente al valor menor calculado por el flete. Esta opción está habilitada de forma predeterminada, pero puede inhabilitarla si desea aplicar el descuento a otros tipos de flete. Para más información, lea el artículo [Registrar promociones de envío](https://help.vtex.com/es/tutorial/registrar-promociones-de-flete--6Lo5BR61KMiUFAAHGCdgfW#). Este criterio solo se tendrá en cuenta si el efecto de la promoción está relacionado con el valor del flete, es decir, solo si es uno de los siguientes efectos: «Carga porcentual», «Carga nominal», «Envío máximo» o Flete gratis».
- **Aplicar el descuento solo cuando el cliente seleccione uno de los transportistas anteriores:** la promoción se aplicará solo después de que el cliente seleccione la forma de entrega en cuestión. Mientras no se seleccione, no tendrá descuento. Este criterio solo se tendrá en cuenta si el efecto de la promoción está relacionado con el valor del flete, es decir, solo si es uno de los siguientes efectos: «Carga porcentual», «Carga nominal», «Envío máximo» o Flete gratis».
- **Aplicar a todos los buques (fletes) disponibles:** si activa esta opción, el descuento se aplicará a todos los métodos de entrega disponibles.
- **Apareció en el producto (Destacar en los productos):** permite definir si su tienda mostrará una franja para anunciar la promoción. Verifique las siguientes opciones:
  - **No destacado:** cuando selecciona esta opción, la promoción no se muestra en la vitrina ni en la página de productos contemplados para la promoción.
  - **Destacado:** cuando selecciona esta opción, se habilita la inserción de una franja con el nombre de la promoción en la vitrina y en la página de productos contemplados. Para que la franja se inserte correctamente, debe utilizar el control de visualización de la promoción en la plantilla de la tienda: `<vtex.cmc:discountHightLight/>`. Para más información, consulte nuestro artículo [Lista de controles para plantillas](https://help.vtex.com/es/tutorial/lista-de-controles-para-plantillas--tutorials_563).

#### Restringir la promoción a los productos de los sellers

En esta sección puede definir en qué <i>sellers</i> se aplicará la promoción. Puede determinar qué <i>sellers</i> se incluirán o excluirán del descuento. 

- **Es igual a:** seleccione los nombres de los <i>sellers</i> deseados para incluirlos.
- **Diferente de:** seleccione los nombres de los <i>sellers</i> deseados para excluirlos.

Para que la promoción sea válida para todos los <i>sellers</i>, deje la selección sin marcar.

>⚠️ **Atención:** no es posible seleccionar directamente un <i>seller white label</i>. Para incluir a un <i>seller white label</i> en la promoción, tiene dos opciones:1. Restringir los <i>sellers</i> a la tienda principal. Esta restricción agrega todos los <i>sellers white label</i> de su tienda a la promoción.2. Dejar la selección sin marcar para incluir a todos los <i>sellers</i>. Aquí, todos los tipos de <i>sellers, white label</i> o no, se agregarán a la promoción.

#### Política comercial

Esta sección establece las políticas comerciales válidas para la promoción. Puede incluir o excluir las políticas comerciales del descuento.

- **Es igual a:** seleccione las políticas comerciales deseadas para incluirlas.
- **Diferente de:** seleccione las políticas comerciales deseadas para excluirlas.
- **Proporcionado por mí (Mi tienda):** selección de las políticas comerciales para los productos de su tienda. Puede seleccionar más de una política comercial.
- **Entregado por mí (Tienda de otros):** selección de las políticas comerciales para sus productos que están en las tiendas de otros. Puede seleccionar más de una política comercial.

Para que la promoción sea válida para todas las políticas comerciales, deje la selección sin marcar.

### 2. ¿En qué elementos (o ítems) se aplicará esta promoción?

En esta sección, debe elegir si la promoción se aplicará a todos los productos registrados en su tienda o solo a productos específicos, como se ilustra a continuación.

![promocoes-restricao-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Promotions & taxes/Campaign Audiences/promocion-de-campana_1.PNG)

Si desea aplicar la promoción a todo su catálogo, seleccione la opción **Aplicar a todos los productos<b>**</b>.

Para limitar la promoción a productos específicos, seleccione **Aplicar a los siguientes productos** y luego rellene los criterios de selección para **Categorías**, **Marcas**, **Colecciones** y **Productos**.

Puede incluir o excluir **categorías**, **marcas**, **colecciones** y **productos** de la promoción utilizando los criterios **Es igual a** o **Diferente de**.

Vea a continuación un ejemplo de cómo rellenarlo. En este caso, participan en la promoción todos los productos de la categoría **Vestido** cuya marca es **Farm**, con la excepción del producto **Vestido Rosas**.

![exemplo-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Promotions & taxes/Campaign Audiences/promocion-de-campana_2.PNG)

En los campos **Productos** y **SKUs**, se puede cargar un archivo **.txt** con un ID de producto o de SKU por fila, en vez de seleccionar un producto o un SKU a la vez. Para ello, debe hacer clic en **Elegir archivo** y seleccionar el archivo **.txt** deseado.

>⚠️ Si selecciona **Aplicar a los siguientes productos** y no rellena ninguno de los criterios de selección, la promoción no se creará y aparecerá el mensaje **Defina los productos elegibles o aplique a todos los productos**. En este caso, debe volver y rellenar los criterios de selección o elegir **Aplicar a todos los productos**.

Para ser válidos en la promoción, los productos deben cumplir todas las condiciones registradas en esta sección.

### 3. Restricciones y limitaciones de uso

- **Cuántas veces se aplicará esta promoción a su tienda:** limita la cantidad de veces que se aplicará la promoción. Cuando desactiva la opción **ilimitado**, se habilita un campo para registrar la cantidad de veces a la que estará limitada.
- **Cuántas veces se aplicará la promoción a su tienda por cliente:** limita la cantidad de veces que cada cliente puede utilizar la promoción. Cuando desactiva la opción **ilimitado**, se habilita un campo para registrar la cantidad de veces a la que estará limitada.
- **Definir la cantidad máxima de ítems afectados por carrito:** limita la cantidad de ítems del carrito a los que se le puede aplicar la promoción. Cuando desactiva la opción **ilimitado**, se habilita un campo para registrar la cantidad de veces a la que estará limitada. Ejemplo: si configura la cantidad límite como 5 ítems, aunque el cliente coloque 10 ítems elegibles para la promoción en el carrito, solo 5 se beneficiarán.
- **Permitir la acumulación de promociones:** permite que más de una promoción con el mismo tipo de descuento se aplique al mismo tiempo.
- **Permitir acumular con precios manuales:** permite aplicar la promoción a los productos cuyos precios fueron introducidos manualmente por el agente de televentas. Para utilizar esta opción, debe permitir la [inserción manual de precios](https://help.vtex.com/es/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS#ingresar-precio-manual) en su tienda.

#### **SEPA MÁS**

 * [Crear promociones](https://help.vtex.com/es/tutorial/como-crear-promociones--tutorials_320)
 * [Crear audiencia de campañas](https://help.vtex.com/es/tutorial/Crear-audiencia-de-campanas--6cnuDZJzIkIeocewAQQK4K)

