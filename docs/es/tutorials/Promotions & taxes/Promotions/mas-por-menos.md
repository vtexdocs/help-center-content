---
title: 'Crear promoción Más por Menos'
id: tutorials_325
status: PUBLISHED
createdAt: 2017-04-27T22:08:17.186Z
updatedAt: 2025-03-18T10:40:50.841Z
publishedAt: 2025-03-18T10:40:50.841Z
firstPublishedAt: 2017-04-27T23:03:15.551Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: creating-a-more-for-less-promotion
locale: es
legacySlug: mas-por-menos
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

La promoción Más por menos se utiliza para conceder un descuento cuando el cliente agrega varias unidades de un mismo producto al carrito, como "Compra 3 por el precio de 2". 

Este artículo describe los pasos necesarios para configurar una promoción Más por menos:

- [Crear promoción Más por menos](#crear-promocion-mas-por-menos)
- [Configurar información general](#configurar-informacion-general)
		- [Definir sellers participantes de la promoción](#definir-sellers-participantes-de-la-promocion)
		- [Seleccionar políticas comerciales para aplicar el descuento](#seleccionar-politicas-comerciales-para-aplicar-el-descuento)

- [Configurar promoción Más por menos](#configurar-promocion-mas-por-menos)
		- [Configuración avanzada](#configuracion-avanzada)

- [Condiciones de aplicación de la promoción](#condiciones-de-aplicacion-de-la-promocion)
- [Configurar restricciones de uso de la promoción](#configurar-restricciones-de-uso-de-la-promocion)
- [Configurar acumulación y competencia](#configurar-acumulacion-y-competencia)
- [Mostrar la promoción en la página de producto](#mostrar-la-promocion-en-la-pagina-de-producto)

## Crear promoción Más por menos

1. En el Admin VTEX, accede a **Promociones > Promociones** o ingresa **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón `Crear promoción`.
3. Selecciona la opción **Más por menos** e ingresa la información necesaria. A continuación se detallan los datos que debes completar.
4. Haz clic en `Guardar`.

En esta etapa debe configurarse la información básica de la promoción. Rellena los siguientes campos:

| Campo                              | Descrição |
|------------------------------------|-----------|
| **Nombre**                         | Ingresa un nombre descriptivo para la promoción (hasta 150 caracteres). |
| **Status**                         | Indica si la promoción estará Activa o <2>Inactiva</2>. Una promoción Activa se aplicará según las fechas y horas configuradas. Una promoción Inactiva estará pausada aunque se encuentre dentro del periodo configurado. |
| **Descripción**                    | Ingresa una breve descripción de la promoción (hasta 10.000 caracteres) que incluya los objetivos principales. |
| **Fecha y hora de inicio**          | Define el inicio de la promoción, seleccionando la fecha y hora exactas en las que se activará. |
| **Fecha y hora de fin**             | Especifica el periodo de validez de la promoción. Define la fecha y hora exactas en las que la promoción se desactivará automáticamente. |
| **Utilizar configuración de recurrencia** | Activa esta opción si deseas que la promoción se repita automáticamente de forma periódica. Esta opción puede usarse para campañas semanales, mensuales o con intervalos específicos. |

### Definir sellers participantes de la promoción
Define si la promoción se aplicará a todos tus sellers o solo a sellers específicos. Selecciona una de las siguientes opciones para aplicar la promoción:

- **Todos:** la promoción se aplicará a todos los sellers registrados. Utiliza esta opción cuando desees que todos los productos de todos los sellers formen parte de la campaña.
- **Iguales a:** selecciona esta opción para aplicar la promoción a sellers específicos solamente. Después de escoger "Iguales a", tendrás la opción de seleccionar los sellers deseados en el campo inferior. Solo los productos de los sellers seleccionados se incluirán en la campaña.
- **Diferentes de:** selecciona esta opción para eliminar sellers específicos de la promoción. Después de escoger "Diferentes de", tendrás la opción de seleccionar los sellers que no deseas incluir en la campaña. Se incluirán todos los demás sellers.

### Seleccionar políticas comerciales para aplicar el descuento
Selecciona las políticas comerciales en las que se aplicará el descuento. Puedes ofrecer descuentos para políticas comerciales en las que [tu tienda opera como marketplace](/es/faq/o-que-e-um-marketplace) (mi tienda) o como seller (tiendas de terceros - fulfillment).

Puedes elegir entre las siguientes opciones:

- **Iguales a:** selecciona las políticas comerciales que deseas asociar a la promoción. Esta opción te permite especificar las políticas que se aplican a los productos que recibirán el descuento.

- **Diferentes de:** selecciona las políticas comerciales que deseas excluir de la promoción. Esta opción remueve determinadas políticas para garantizar que el descuento no se aplique a productos que sigan esas reglas comerciales.

- **Todas:** aplica la promoción a todas las políticas comerciales registradas, sin ninguna restricción. Se incluirán todos los productos en la promoción independientemente de la política comercial asociada.

## Configurar promoción Más por menos
En esta sección se establecen las reglas de la promoción indicando cuántos productos debe comprar el cliente para acceder al descuento. Sigue las instrucciones a continuación para rellenar los campos:

- **El cliente compra [X] de los siguientes productos:** ingresa el número mínimo de productos que el cliente debe agregar al carrito para obtener el descuento. Ingresa el valor directamente en el campo numérico.

- **SKUs:** agrega los SKUs específicos que formarán parte de la promoción, introduciendo los identificadores de producto directamente en el campo. El límite para crear una promoción de compra más, paga menos condicionada por SKUs es de 100 SKUs.

- **Colecciones:** seleccione una [colección](/es/tutorial/criando-colecao-de-produtos--tutorials_244) de productos. Esta opción simplifica la gestión de promociones para grupos de ítems con características similares.

- **El cliente se lleva [Y] de los [X] productos con descuento:** define cuántos productos con descuento puede llevarse el cliente cuando alcanza la cantidad mínima configurada. Ingresa el número en el campo correspondiente. Por ejemplo, en una promoción "Compra 3 por el precio de 2", configura la regla para que el cliente se lleve 2 productos con descuento.

- **Descuento de:** determine el tipo y el valor del descuento que se aplicará a los productos. Selecciona entre **% (porcentual)** o **nominal (valor fijo)** e ingresa el valor deseado.

### Configuración avanzada
La configuración avanzada te permite definir cómo se aplicará el descuento a los productos seleccionados. Rellena los campos y elige las opciones que se ajusten a las reglas de la promoción:

**El descuento se aplica:**

Considerando:
- **Todos los productos:** aplica el descuento a cualquier ítem dentro de los criterios configurados, sin necesidad de que dichos ítems sean idénticos.
- **Debe ser el mismo ítem:** el descuento solo se aplicará cuando los ítems sean idénticos (mismo SKU).

A los productos:
- **Más baratos:** el descuento se concederá a los productos de menor valor.
- **Más caros:** el descuento se concederá a los productos de mayor valor.

#### ¿Cómo se debe distribuir el descuento?
- **Únicamente entre los [X] ítems que reciben descuento:** el beneficio se aplicará exclusivamente a la cantidad exacta de ítems especificada. Por ejemplo, si se configura para 3 ítems, solamente estos recibirán el descuento.
- **Proporcionalmente entre los [X] ítems:** el valor total del descuento se distribuirá proporcionalmente entre todos los ítems.

## Condiciones de aplicación de la promoción
Define las restricciones que se aplicarán a la promoción. Las condiciones permiten activar la promoción en circunstancias específicas según los criterios seleccionados. 

Para agregar una condición a la promoción sigue las instrucciones a continuación:

- **Valor del pedido:** define los límites de valor para aplicar la promoción en función de la suma del valor original de los ítems. Rellena los siguientes campos para configurar las condiciones:
  - **Valor mínimo del pedido:** define el valor mínimo necesario para activar la promoción. Escoge los ítems que se deben considerar en el cálculo: solo los ítems incluidos en la promoción, solo los ítems que no son de la promoción o todos los ítems del pedido.
  - **Valor máximo del pedido:** define el valor máximo permitido para aplicar la promoción. Escoge los ítems que se deben considerar en el cálculo: solo los ítems incluidos en la promoción, solo los ítems que no son de la promoción o todos los ítems del pedido.

- **Medio de pago:** la promoción **solo** se aplicará cuando el cliente utilice uno de los medios de pago previamente configurados. Entre las opciones disponibles, pueden seleccionarse:
  - Boleto Bancário.
  - Tarjetas de crédito como Visa, Mastercard, entre otras.
  - Otros medios de pago, como Diners o Hipercard.

- **Número BIN de la tarjeta:** la promoción solo se aplicará cuando se utilicen tarjetas de redes, bancos o categorías específicas identificadas por su número BIN. Importa una lista de BIN con un archivo de texto (.txt) o un archivo CSV (.csv) que describa cada BIN en una fila diferente.

- **Clúster de clientes:** selecciona un **clúster de clientes** previamente creado en Master Data, siguiendo el formato `field=value` o `field contains value`. Selecciona una de las siguientes opciones:
  - **Todos los siguientes:** la promoción se aplicará solo si se cumplen todos los criterios del clúster.
  - **Al menos uno de los siguientes:** la promoción se aplicará si se cumple al menos uno de los criterios del clúster.

- **Parámetro UTM:** permite configurar la promoción para que se aplique cuando se acceda al sitio web mediante una URL con [parámetros UTM](/es/tutorial/o-que-sao-as-utms-internas-utmi-cp-utmi-pc-e-utmi-p--5Pvo8ufYWs00AUeCCEY68a) o cuando se utilice un cupón asociado a esos parámetros. Define los parámetros UTM siguiendo las reglas de formato, utilizando solo letras, números, guiones y guiones bajos. Define los siguientes parámetros si es necesario:
  - **Fuente UTM:** el descuento se aplica al navegar utilizando el parámetro utm_source configurado.
  - **Campaña UTM:** el descuento se aplica al navegar utilizando el parámetro utm_campaign configurado.
  - **Crear cupón a partir de los parámetros UTM anteriores:** permite generar un cupón con los parámetros UTM ingresados en los campos `Fuente UTM` y `Campaña UTM`.
  - **Ver cupones vinculados:** permite ver los cupones que ya se vincularon a los parámetros UTM definidos.

- **Precio de lista:** permite restringir la promoción en función de la presencia o ausencia de un precio de lista en los productos seleccionados. Selecciona una de las siguientes opciones:
  - **No tiene un precio de lista definido:** aplica la promoción solamente a ítems en los que los valores "de" y "por" son iguales, lo que indica que no hay un [precio de lista](/es/tutorial/precos-v2) establecido.
  - **Tiene un precio de lista definido:** aplica la promoción solamente a ítems en los que los valores "de" y "por" son diferentes, lo que indica la existencia de un precio de lista.

## Configurar restricciones de uso de la promoción

En esta sección puedes definir la opción de combinar la promoción con otras promociones. Las opciones disponibles son:

- **Limitar el uso de las promociones en la tienda:** restringe la cantidad de veces que se puede utilizar la promoción en la tienda.

- **Limitar uso de la promoción por cliente:** permite restringir el número de veces que cada cliente puede utilizar la promoción.

- **Limitar el número de ítems elegibles por carrito:** define el número máximo de ítems por pedido que pueden recibir el descuento de la promoción.

## Configurar acumulación y competencia

Define cómo se aplicará la promoción en conjunto con otras condiciones comerciales de la tienda:

- **Permitir acumular con otras promociones:** permite que la promoción se aplique simultáneamente con otras promociones, incluidos descuentos adicionales como envío gratuito o regalos. Para más información, consulta [Cómo funciona la competencia de promociones](#).

- **Permitir acumular con precios manuales:** selecciona esta configuración para que la promoción se aplique a los productos cuyo precio se haya ajustado manualmente.

## Mostrar la promoción en la página de producto

Consulta en esta sección cómo destacar la promoción en la página de producto y agregar datos para implementar personalizaciones en la tienda:

- **Destacar promociones en los productos:** marca esta opción para mostrar la promoción directamente en las páginas de producto.

<div class="alert alert-warning">
  Recuerda <a href="https://help.vtex.com/es/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295" target="_blank">configurar la visualización en el módulo CMS</a>.
</div>

- **Información adicional:** haz clic en `Crear` para agregar campos personalizados con nombre y valor, que puedes utilizar para personalizar la tienda.

