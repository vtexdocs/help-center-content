---
title: 'Crear Promoción Regular '
id: 7FjbeZdE2KMwk5L1t98pZI
status: PUBLISHED
createdAt: 2020-01-14T13:11:35.010Z
updatedAt: 2024-04-22T13:23:15.737Z
publishedAt: 2024-04-22T13:23:15.737Z
firstPublishedAt: 2020-01-22T13:55:43.369Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: creating-regular-promotions
locale: es
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugES: promociones
---

En VTEX, se pueden crear varios tipos de promociones que se ajustan a diferentes escenarios. De entre ellos, el más utilizado es la promoción regular, ya que permite a la tienda ofrecer descuentos flexibles, combinando múltiples condiciones, restricciones y beneficios.

Este artículo describe los pasos para configurar una promoción regular.

1. [Resumen de la promoción](#Resumen-de-la-promoción)

    ○  	[Restringir la promoción a los productos de los sellers](#restringir-la-promoción-a-los-productos-de-los-sellers)

    ○  	[Política comercial](#política-comercial)

2. [¿A qué ítems se aplicará esta promoción?](#¿a-qué-ítems-se-aplicará-esta-promoción?)

3. [Condiciones de la promoción](#condiciones-de-la-promoción)

4. [Restricciones y limitaciones de uso](#restricciones-y-limitaciones-de-uso)

Para entender cómo funciona la implementación de promociones, consulta nuestro artículo [Ejemplos de promociones](https://help.vtex.com/es/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD?&utm_source=autocomplete).

## Para crear una promoción regular, sigue estos pasos:

1. En el Admin VTEX, accede a **Promociones > Promociones** o escribe **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón **Crear promoción**.
3. Selecciona la opción **Regular**.
4. Rellena los campos de la promoción.
5. Haz clic en **Guardar**.

# 1. Resumen de la promoción

En esta sección, debes configurar la información general de la promoción. Los campos Nombre, Fecha de vencimiento y Cuál es el tipo y valor del descuento son obligatorios.

- **Nombre:** nombre de la promoción. Campo obligatorio.
- **Status:** activa o desactiva la promoción.
- **Descripción:** descripción interna de la promoción. Este campo se utiliza para la comunicación interna de la tienda. Por ejemplo, se puede utilizar para indicar si la promoción se debe a alguna campaña o liquidación de stock.
- **Fecha de vencimiento:** fecha y hora de inicio y fin de la promoción. Se pueden seleccionar una fecha y hora futuras para que la promoción comience a aplicarse en el sitio web. Si se configura de esta forma, el status de la promoción se mostrará de las siguientes maneras:
    - **Programada:** antes de la fecha y hora de inicio seleccionadas.
    - **Activa:** durante el periodo previsto para la promoción.
    - **Inactiva:** después de la fecha y hora de fin seleccionadas.
- **Utilizar configuración de recurrencia:** seleccionando esta opción, puedes realizar ajustes de recurrencia, por ejemplo, día de la semana y horario.
- **Cuál es el tipo y valor del descuento:** permite seleccionar una de las opciones a continuación:
    - **Nominal:** el descuento que se concederá al total del carrito.
    - **Envío nominal:** el descuento que se concederá al valor del envío.
    - **Porcentual:** porcentaje de descuento que se concederá al valor del producto.
    - **Precio máximo por ítem:** el precio máximo para cada ítem de la compra será el precio registrado aquí.
    - **Envío porcentual:** el porcentaje de descuento que se concederá al valor del envío.
    - **Envío máximo:** el valor máximo del envío.
    - **Envío gratis:** el descuento total sobre el valor del envío.
    - **Regalo:** el descuento total sobre el valor del producto definido como regalo. Seleccionando esta opción podrás indicar el SKU (por nombre o ID) que se considerará como regalo, elegir si debe activarse el [multiplicador de regalo](https://help.vtex.com/es/tutorial/o-que-significa-ativar-o-multiplicador-de-brinde-em-uma-promocao--1gydgkmjEWcoo2CskUwuYK) y la cantidad máxima de productos que se pueden utilizar como regalos en la promoción.
>ℹ️ El producto de regalo también debe tener un precio registrado aunque se ofrezca gratuitamente al cliente.

   - **Descuento nominal basado en fórmula:** el descuento se calcula con base en una fórmula que se puede crear utilizando como variables la suma de los precios de los productos, el envío y la cantidad de ítems. Ten en cuenta que el envío considerado por la fórmula será el envío de menor costo disponible para el pedido, independientemente de la selección del cliente. El separador decimal debe ser siempre el punto. Ejemplo: si el descuento es 30 % del valor total del producto + el valor del envío, la fórmula debe ser (total + freight) * 0.3. Para más información, consulta la [documentación de la fórmula](https://help.vtex.com/es/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV).
   - **Valor de recompensa nominal:** el crédito que será añadido al programa de fidelidad de la tienda. Para más información, consulta [Promoción regular con valor de fidelidad](https://help.vtex.com/es/tutorial/promocao-regular-com-valor-fidelidade--3FCip23ZtvG0sDt0rVGVmR).
   - **Valor de fidelidad porcentual:** el porcentaje de crédito que se añadirá al programa de fidelidad de la tienda. Para más información, consulta [Promoción regular](https://help.vtex.com/es/tutorial/promocao-regular-com-valor-fidelidade--3FCip23ZtvG0sDt0rVGVmR) con valor de fidelidad.
   - **Tabla de precios promocionales:** se puede utilizar una tabla de precios como promoción. El precio promocional de cada SKU será el correspondiente en la tabla de precios seleccionada.
 - **Información adicional (opcional):** permite incluir en la promoción información adicional compuesta de un nombre y un valor.
 - **Promoción resaltada:** inserta un flag con el nombre de la promoción utilizada en la vitrina y en la página del producto. El flag solo se inserta si se utiliza el control de visualización de promociones correcto en la plantilla: `<vtex.cmc:discountHightLight/>`.

>ℹ️ Las promociones nominales solo se muestran en el carrito, no en la vitrina o la página del producto.

## Restringir esta promoción a los productos de los sellers

En esta sección se pueden definir los sellers a los que se aplicará la promoción. Es decir, tienes la opción de decidir los sellers que se incluirán o excluirán del descuento.

- **Igual a:** selecciona los nombres de los sellers deseados para incluirlos.
- **Diferentes de:** selecciona los nombres de los sellers deseados para excluirlos.

Para que la promoción sea válida para todos los sellers, deja la selección sin marcar.

>⚠️ No es posible seleccionar directamente un *seller white label*. Para incluir a un *seller white label* en la promoción, tiene dos opciones:1. Restringir a los *sellers* a la tienda principal. Esta restricción agrega a todos los *sellers white label* de su tienda a la promoción.2. Dejar la selección sin marcar para incluir a todos los *sellers*. Aquí, todos los tipos de *sellers*, *white label* o no, se agregarán a la promoción.

## Política comercial

Esta sección establece las políticas comerciales válidas para la promoción. Puedes incluir o excluir políticas comerciales del descuento.

- **Igual a:** selecciona las políticas comerciales que deseas incluir.
- **Diferentes de:** selecciona las políticas comerciales que deseas excluir.
- **Proporcionado por mí (Mi tienda):** selección de las políticas comerciales con productos de tu tienda. Puedes seleccionar más de una política comercial.
- **Entregado por mí (Otras tiendas):** selección de políticas comerciales bajo que rigen la presencia de tus productos tiendas de terceros. Puedes seleccionar más de una política comercial.

Para que la promoción sea válida en todas las políticas comerciales, deja la selección sin marcar.

# 2. ¿A qué ítems se aplicará esta promoción?

En esta sección, debes seleccionar si la promoción se aplicará a todos los productos registrados en tu tienda o solo a productos específicos, como se ilustra a continuación:

- **Aplicar a todos los productos:** te permite aplicar la promoción a todo el catálogo.
- **Aplicar a los productos que cumplen todas las restricciones siguientes:** permite limitar la promoción a productos específicos que deben cumplir los criterios de selección relativos a categorías, marcas, colecciones, productos y SKU.
- **Productos:** permite elegir los productos a los que se aplicará la promoción. Puedes cargar un archivo .txt con los ID de los productos.
- **SKUs:** permite escoger los SKU de los productos a los que se aplicará la promoción. Puedes cargar un archivo .txt con los ID de los productos.

Puedes incluir o excluir **categorías**, **marcas**, **colecciones**, **productos** y **SKU** de la promoción utilizando los criterios **Igual a** o **Diferentes de**.
Los productos deben cumplir todas las condiciones para ser válidos en la promoción.

![A quais itens esta promoção será aplicada - ES](https://images.ctfassets.net/alneenqid6w5/7lxp9shJsZD5LBMzXldQnz/7ad5d4c49596dad8d2e81e0f1ef28d66/A_quais_itens_-_ES.png)

# 3. Condiciones de la promoción
El pedido del cliente debe cumplir las condiciones registradas en esta sección para ser válido en la promoción.

- **Valor mínimo y máximo del pedido:** la promoción se aplicará teniendo en cuenta el valor bruto del carrito, sin considerar otras promociones o costos de envío.
- **Valor acumulado en compras:** el descuento se concederá si el total de todas las compras realizadas por el cliente hasta este punto alcanzan el valor indicado.
- **Precio del ítem entre:** el descuento se concederá si el valor del ítem está dentro del intervalo de valores indicados.
- **Precio "de" y "por" son iguales o Precio "de" y "por" son diferentes:** corresponde a los valores de registro del producto. Solo se puede seleccionar una opción.
- **Usar BINs de restricción:** permite activar o desactivar la restricción de BIN, limitando las tarjetas de crédito que se pueden utilizar en la promoción creada. También puedes importar una lista de BIN, que debe guardarse en un archivo de texto (.txt) con cada BIN descrito en una fila diferente.
- **Tags de marketing:** campo utilizado para restringir la activación de la promoción si la compra se realiza a través del módulo [Suscripciones de VTEX](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453).
- **Afiliados:** identificador de pedidos del marketplace. El descuento se aplicará a los afiliados seleccionados. Para más información, consulta el artículo [Qué es afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0?locale=pt).
- **Clúster de clientes:** el descuento se concederá si el cliente está registrado en el clúster seleccionado. Es importante resaltar que el nombre del clúster debe coincidir exactamente con el nombre registrado. Cualquier error ortográfico impedirá que la configuración funcione correctamente. Para más información, consulta [Crear clúster de clientes](https://help.vtex.com/pt/tutorial/como-criar-um-cluster-de-clientes).
- **Países de envío:** el descuento se concederá a los países seleccionados en este campo.
- **El código postal de envío debe:** el descuento se concederá si el código postal cumple con la regla configurada. Es importante resaltar que los códigos postales que no estén registrados no son elegibles para activar la promoción.
- **Método de envío:** el descuento se concederá si el tipo de envío seleccionado por el cliente es el mismo que el registrado en la promoción. Este criterio solamente se considerará si el efecto de la promoción está relacionado con el valor de envío, es decir, si el tipo de la promoción es Envío porcentual, Envío nominal, Envío máximo o Envío gratis. Ten en cuenta que esta configuración no se puede combinar con la opción "Aplicar el descuento solo a la opción de envío más barata".
- **Aplicar el descuento solo cuando el cliente seleccione una de las transportadoras anteriores:** la promoción se aplicará solo después de que el cliente seleccione la forma de entrega en cuestión. Mientras no se seleccione, no tendrá descuento. Este criterio solo se tendrá en cuenta si el tipo de promoción está relacionado con el valor del envío, es decir, solo si el tipo es Envío porcentual, Envío nominal, Envío máximo o Envío gratis.
- **Medio de pago:** permite elegir si la promoción se aplicará a uno o varios de los medios de pago seleccionados.
>ℹ️ El máximo predeterminado de medios de pago registrados por promoción es 20, aunque es posible crear una personalización para incluir hasta 100 medios de pago. Si necesitas utilizar más de 20, ponte en contacto con nuestro equipo de soporte <a href="https://support.vtex.com/hc/pt-br/requests">.
> técnica</a>.</p>.

- **Número de cuotas:** el descuento se concederá si la cantidad de cuotas seleccionada por el cliente está en el intervalo registrado. Este campo no se aplica a la selección de boleto.

>⚠️ Las promociones por medio de pago y número de cuotas no se aplican a pedidos pagados con dos tarjetas o tarjetas de regalo.

- **utm_source:** el descuento se concederá si la navegación utiliza un parámetro utm_source correspondiente a cualquiera de los valores registrados. Es importante resaltar que el cliente solo puede ingresar un **utm_source** en el checkout.
- **utm_campaign:** el descuento se concederá si la navegación utiliza un parámetro utm_campaign con el valor registrado.
- **Crear un nuevo cupón con los UTM anteriores:** crea un cupón a partir de los UTM registrados para que el cliente tenga acceso a esta promoción solo con el código del cupón.
- **utmi_cp:** el descuento se concederá si la navegación se realiza con el utmi_cp con el valor registrado (distingue entre mayúsculas y minúsculas).

>ℹ️ En el campo de UTM, ingresa únicamente el valor que deberán asumir los UTM para activar la promoción. No es necesario ingresar ?utm_source= dentro del campo.

- **Solo en la primera compra:** el descuento solo se concederá en la primera compra del cliente.
- **¿Se debe aplicar el descuento incluso si el usuario no tiene sesión iniciada?:** este campo se muestra cuando se selecciona la opción Solo en la primera compra. Si se marca esta opción, la promoción se aplicará aun cuando el cliente no ingrese su email y contraseña. Por otro lado, si no se selecciona, la promoción solo se aplicará si el consumidor ingresó con su email y contraseña previamente registrados.
  - **Es un pedido de suscripción:** permite seleccionar una de las siguientes dos opciones:
  - **Primeros pedidos:** pedidos que generan suscripciones, pero que aún no forman parte de los ciclos de suscripción.
  - **Pedidos recurrentes:** pedidos que forman parte de los ciclos de suscripción.
  - **Filtrar por:** permite filtrar los pedidos de suscripción que serán válidos para la promoción.
  - **Frecuencia:** permite seleccionar la frecuencia de los pedidos de suscripción: semanal, mensual y anual. Para más información, consulta [Configurar la frecuencia y la fecha del ciclo de suscripción](https://help.vtex.com/pt/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK#configurar-frequencia-e-data-do-ciclo-de-assinatura).
  - **Número del ciclo:** permite seleccionar los ciclos de suscripción que se incluirán en la promoción. Esta opción solo se habilita si se selecciona la opción Pedidos recurrentes.

# 4. Restricciones y limitaciones de uso
En esta sección se proporciona información importante sobre las condiciones y restricciones aplicables a la promoción.

- **Cuántas veces se aplicará esta promoción en tu tienda:** limita la cantidad de veces que se aplicará la promoción. Al deseleccionar la opción ilimitado, se habilita un campo para registrar la cantidad de veces que se puede aplicar la promoción. Si la promoción ya ha sido creada, esta condición solo se aplicará a partir del día en que se configure, sin afectar los pedidos realizados anteriormente.
- **Cuántas veces por cliente se aplicará esta promoción:** el valor de este campo determina la cantidad máxima de veces que cada cliente puede beneficiarse de la promoción. Por ejemplo, si se establece un límite de tres usos y la promoción se aplica tres veces en un mismo pedido, se considerará como un único uso en relación con el límite total. Esto significa que el cliente aún podrá utilizar la promoción en otros dos pedidos diferentes. Es importante resaltar que este cálculo es independiente de la cantidad de veces que se utilice la promoción en cada pedido individual.
- **Establecer el número máximo de ítems elegibles para cada carrito:** define la cantidad de ítems del carrito sobre los que la promoción surtirá efecto. Consulta [Límite de ítems con promoción en el carrito](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho) para más información.
- **Aplicar con otras promociones:** permite que se conceda más de una promoción al mismo tiempo sin importar el tipo de descuento. Aprende más sobre cómo [funciona la competencia de promociones](https://help.vtex.com/es/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270).
- **Aplicar con precios manuales:** permite aplicar la promoción a productos cuyos precios hayan sido ingresados manualmente por el agente de televentas. Para activar la funcionalidad de precios manuales, utiliza el endpoint [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).

