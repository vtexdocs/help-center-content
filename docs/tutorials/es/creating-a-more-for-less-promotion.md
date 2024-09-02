---
title: 'Crear promoción Más por Menos'
id: tutorials_325
status: PUBLISHED
createdAt: 2017-04-27T22:08:17.186Z
updatedAt: 2024-03-28T15:36:24.222Z
publishedAt: 2024-03-28T15:36:24.222Z
firstPublishedAt: 2017-04-27T23:03:15.551Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: mas-por-menos
locale: es
legacySlug: mas-por-menos
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

La promoción Más por menos se utiliza para conceder un descuento cuando el cliente añade varias unidades del mismo producto al carrito. Un ejemplo 2. ilustrativo de este tipo de promoción sería “Lleva 3, paga 2”.

Este artículo describe los pasos necesarios para configurar una promoción Más por menos:

1. [Resumen de la promoción]()
    - [Restringir la promoción a los productos de los sellers](#restringir-esta-promocion-a-los-productos-de-los-sellers)
    - [Política comercial](#politica-comercial)
2. [Más por menos](#2-mas-por-menos)
3. [Condiciones de la promoción](#condiciones-de-la-promocion)
4. [Restricciones y limitaciones de uso](#4-restricciones-y-limitaciones-de-uso)

Para entender cómo funciona la implementación de promociones, consulta nuestro artículo [Ejemplos de promociones](https://help.vtex.com/es/tutorial/ejemplos-de-promociones--5A8UTc7knvAscxo7e7rMFD).

## Crear la promoción

1. En el Admin VTEX, accede a **Promociones > Promociones** o escribe **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón `Crear promoción`.
3. Selecciona la opción **Más por menos**.
4. Rellena los campos de la promoción.
5. Haz clic en `Guardar`.

## 1. Resumen de la promoción

En esta sección se proporciona información detallada sobre los datos generales de la promoción.

- **Nombre:** nombre de la promoción. Campo obligatorio.
- **Status:** activa o desactiva la promoción.
- **Descripción:** descripción interna de la promoción. Este campo se utiliza para la comunicación interna de tu tienda, para que quede claro si la promoción se debe a alguna campaña o liquidación de stock.
- **Fecha de vencimiento:** fecha y hora de inicio y fin de la promoción. Se pueden seleccionar una fecha y hora futuras para que la promoción comience a aplicarse en el sitio web. Si se configura de esta forma, el status de la promoción se mostrará de las siguientes maneras:
    - **Programada:** antes de la fecha y hora de inicio seleccionadas.
    - **Activa:** durante el periodo previsto para la promoción.
    - **Inactiva:** después de la fecha y hora de fin seleccionadas.
- **Utilizar configuración de recurrencia:** seleccionando esta opción, puedes realizar ajustes de recurrencia, por ejemplo, día de la semana y horario.
- **Información adicional (opcional):** permite incluir en la promoción información adicional compuesta por un nombre y un valor.
- **Promoción resaltada:** inserta una tag con el nombre de la promoción utilizada en la vitrina y en la página del producto. La tag solo se inserta si se utiliza el control de visualización de promociones correcto en la plantilla: `<vtex.cmc:discountHightLight/>`. Campo obligatorio.

![Dados gerais 1 - ES](//images.ctfassets.net/alneenqid6w5/4Ara5CRqjivFlYltPnMGpN/9a0848ea2c4741f7fbba52db0138e7fb/Dados_gerais_1_-_ES.png)

### Restringir esta promoción a los productos de los sellers

En esta sección se pueden definir los sellers a los que se aplicará la promoción. Es decir, tienes la opción de decidir los sellers que se incluirán o excluirán del descuento.

- **Igual a:** selecciona los nombres de los sellers deseados para incluirlos.
- **Diferentes de:** selecciona los nombres de los sellers deseados para excluirlos.

Para que la promoción sea válida para todos los sellers, deja la selección sin marcar.

<div class = "alert alert-warning">
  <p>No es posible seleccionar directamente un <i>seller white label</i>. Hay dos opciones para incluir un <i>seller white label</i> en la promoción: </p><ol>1. Restringir los <i>sellers</i> a la tienda principal. Esta restricción agrega todos los <i>sellers white label</i> de tu tienda a la promoción.</ol><ol>2. Dejar la selección sin marcar para incluir todos los <i>sellers</i>. En este caso, todos los tipos de <i>sellers, white label</i> y otros, se agregan a la promoción.</ol>
</div>

![Restringir - ES](//images.ctfassets.net/alneenqid6w5/7KJhtOylpPsj0g5Q1lF2T0/709b4d87b04c6bcdb845f948e27f46ed/Restringir_-_ES.png)

### Política comercial

Esta sección establece las políticas comerciales válidas para la promoción. Puede incluir o excluir las políticas comerciales del descuento.

- **Es igual a:** selecciona las políticas comerciales que deseas incluir.
- **Diferente de:** selecciona las políticas comerciales que deseas excluir.
- **Proporcionado por mí (Mi tienda):** selección de las políticas comerciales con productos de tu tienda. Puedes seleccionar más de una política comercial.
- **Entregado por mí (Tienda de otros):** selección de políticas comerciales que rigen la presencia de tus productos en tiendas de terceros. Puedes seleccionar más de una política comercial.

Para que la promoción sea válida en todas las políticas comerciales, deja la selección sin marcar.

![Politica - ES](//images.ctfassets.net/alneenqid6w5/5fuMmvGh34BpTbj3t3AgdR/df186b6fa5750448e15cf7cae1e5c2bf/Politica_-_ES.png)

## 2. Más por Menos

En esta sección se definen los productos, la cantidad y el descuento que serán impactados por la promoción.

- **El cliente compra** `número` **de los siguientes productos:** cantidad de unidades del mismo producto que se deben introducir en el carrito para que se aplique la promoción. Campo obligatorio.
    - **SKUs:** nombres o ID de los SKU a los que se aplicará el descuento. Puedes importar una lista de SKU haciendo clic en el botón `Selecciona un archivo .txt`. El archivo de texto (.txt) debe tener cada ID de SKU en una línea diferente. También puedes descargar la lista de SKU agregada al campo haciendo clic en el botón `Descargar lista de SKU`.
- **Colecciones:** selección de las colecciones que se incluirán en la promoción. La promoción solo se aplicará a los productos que figuren en las colecciones registradas en este campo. Solo tienes que introducir el nombre de la colección de productos en la que deseas ofrecer este tipo de descuento. Es posible seleccionar más de una colección.

<div class = "alert alert-info">
  <p>Si no se especifican los productos por colección o SKU, la plataforma no permitirá la creación de la promoción.</p>
</div>

- **Y lleva**  `número` **de estos productos:** la cantidad de unidades del producto que recibirá el descuento configurado. Campo obligatorio.
    - **Con un descuento de:**  el cliente se llevará la cantidad seleccionada de productos con un descuento porcentual definido en el campo.
    - **Con un precio máximo por ítem de:**  el cliente se llevará la cantidad seleccionada de productos con un precio máximo por ítem definido en el campo.

![Leve Mais -ES](//images.ctfassets.net/alneenqid6w5/65GpdBT4FEpUQSNtZ7NXEH/c765ca884eede6552e6f29c55e25aa8c/Leva_Mais_-_ES.png)

### Configuración avanzada
En esta sección puede especificar la aplicación del descuento.
Se debe aplicar el descuento:

- **Considerando:** 
    - **Cualquier producto:** el descuento se aplicará a diferentes productos en la colección o lista de SKU, incluso si el número de ítems por producto en el carrito es menor que el número definido en la promoción. En este caso, el sistema considera la suma de las unidades de esos productos.
    - **Solo productos idénticos y variaciones:** el descuento solo se aplicará al SKU. Para que la aplicación sea válida, debes haber agregado al menos el número mínimo de ítems registrado anteriormente.
    - **A**:
        - **Los productos más baratos:** el descuento se aplicará a los ítems más baratos de la promoción.
        - **Los productos más caros:** el descuento se aplicará a los ítems más caros de la promoción.

![Leve Mais por menos - ES](//images.ctfassets.net/alneenqid6w5/7lIEbcThX12WgUZvtCgx6E/676669ab0baa7690e4097ad39325bb66/Leve_Mais_por_menos_-_ES.png)

#### ¿Cómo debe distribuirse el descuento?

- **Solo entre los `número` productos que reciben el descuento:**  el descuento se aplicará en su totalidad a la cantidad de productos seleccionada.
- **Proporcionalmente entre los** `número` **productos:**  el descuento se distribuirá por igual entre la cantidad de productos seleccionada.

## 3. Condiciones de la promoción

En esta sección se proporciona información detallada sobre las condiciones que se deben cumplir para que la promoción sea válida.

- **Valor mínimo y máximo del pedido:** la promoción se aplicará teniendo en cuenta el valor bruto del carrito, sin considerar otras promociones o costos de envío.
- **Precio "de" y "por" son iguales o Precio "de" y "por" son diferentes:** solo se puede seleccionar una de las dos opciones. Se refiere a los precios de registro del producto.
- **Usar BINs de restricción:** el descuento se concederá a aquellos usuarios que paguen con tarjetas cuyos BIN estén entre los números ingresados en este campo.
- **Clúster de clientes:** el descuento se concederá si el cliente está registrado en el clúster seleccionado. Es importante resaltar que el nombre del clúster debe coincidir exactamente con el nombre registrado. Cualquier error ortográfico impedirá que la configuración funcione correctamente.
- **Utm_source:** el descuento se concederá si la navegación utiliza un parámetro utm_source correspondiente a cualquiera de los valores registrados. Es importante resaltar que el cliente solo puede ingresar un utm_source en el checkout.
- **Utm_campaign:** el descuento se concederá si la navegación utiliza un parámetro utm_campaign con el valor registrado.
- **Crear un nuevo cupón con los UTM anteriores:** crea un cupón a partir de los UTM registrados para que el cliente tenga acceso a esta promoción solo con el código del cupón.
- **Medio de pago:** permite elegir si la promoción se aplicará a uno o varios de los medios de pago seleccionados.

 <div class = "alert alert-info">
  <p> El máximo predeterminado de medios de pago registrados por promoción es 20, aunque es posible crear una personalización para incluir hasta 100 medios de pago. Si necesitas utilizar más de 20, ponte en contacto con <a href="https://support.vtex.com/hc/es-419/requests">nuestro equipo de soporte</a>.</p>
 </div>

 ![Condições de promoção - ES](//images.ctfassets.net/alneenqid6w5/1mPsbqBbsHGXaSKeoFL1vY/13714c02ac6369e9274f4045af6b208b/Condi__es_de_promo__o_-_ES.png)

 ## 4. Restricciones y limitaciones de uso

 En esta sección se proporciona información importante sobre las condiciones y restricciones aplicables a la promoción.

- **Cuántas veces se aplicará esta promoción en tu tienda:** limita la cantidad de veces que se aplicará la promoción. Al deseleccionar la opción ilimitado, se habilita un campo para registrar la cantidad de veces que se puede aplicar la promoción. Si la promoción ya ha sido creada, esta condición solo se aplicará a partir del día en que se configure, sin afectar los pedidos realizados anteriormente.
- **Cuántas veces por cliente se aplicará esta promoción:** el valor de este campo determina la cantidad máxima de veces que cada cliente puede beneficiarse de la promoción. Por ejemplo, si se establece un límite de tres usos y la promoción se aplica tres veces en un mismo pedido, se considerará como un único uso en relación con el límite total. Esto significa que el cliente aún podrá utilizar la promoción en otros dos pedidos diferentes. Es importante resaltar que este cálculo es independiente de la cantidad de veces que se utilice la promoción en cada pedido individual.
- **Establecer el número máximo de ítems elegibles para cada carrito:** define la cantidad de ítems del carrito sobre los que la promoción surtirá efecto. Consulta el artículo [Límite de ítems con promoción en el carrito](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho) para más información.
- **Aplicar con otras promociones:** permite que se conceda más de una promoción al mismo tiempo sin importar el tipo de descuento. Aprende más sobre cómo [funciona la competencia de promociones](https://help.vtex.com/es/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#).
- **Aplicar con precios manuales:** permite aplicar la promoción a productos cuyos precios hayan sido ingresados manualmente por el agente de televentas. Para activar la funcionalidad de precios manuales, utiliza el endpoint [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

![Restrições e limitações - ES](//images.ctfassets.net/alneenqid6w5/5jrjtfnEkqiA9ipZEi1jjk/4c29419ba1d3639afcf175d3639b5ee2/Restri__es_e_limita__es_-_ES.png)

