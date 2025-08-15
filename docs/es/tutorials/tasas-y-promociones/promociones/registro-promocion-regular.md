---
title: 'Promoción Regular'
id: tutorials_327
status: PUBLISHED
createdAt: 2017-04-27T22:07:59.690Z
updatedAt: 2025-06-23T11:42:18.456Z
publishedAt: 2025-06-23T11:42:18.456Z
firstPublishedAt: 2017-04-27T23:03:15.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: regular-promotion
legacySlug: registro-promocion-regular
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

En VTEX se pueden [crear distintos tipos de promociones](https://help.vtex.com/es/tutorial/como-criar-promocoes--tutorials_320#como-criar-promocoes) que se ajustan a diferentes escenarios. La más utilizada es la promoción regular.Esta promoción permite configurar descuentos en tu tienda de forma flexible y precisa, combinando múltiples condiciones de aplicación, restricciones de uso y beneficios.

## Crear promoción regular

1. En el Admin VTEX, accede a **Promociones > Promociones**,  o ingresa **Promociones**  en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Crear promoción`.
3. Selecciona la opción `Regular`.
4. Llena los campos del formulario de la promoción, según se describe en las secciones:
    - [¿A qué ítems se aplicará esta promoción?](#¿a-que-items-se-aplicara-esta-promocion?)
    - [¿Cuáles son las condiciones para que la promoción sea válida?](#¿cuales-son-las condiciones-para-que-la-promocion-sea-valida?)
    - [Restricciones y limitaciones de uso](#restricciones-y-limitaciones-de-uso)

### 1. Resumen de la promoción
Los campos obligatorios están marcados con un asterisco (*).

| Campo                          | Descripción                                                                                                                                                                                                                                                                                                                                                                 |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nombre*                        | Asigna a la promoción un nombre claro y objetivo.                                                                                                                                                                                                                                                                                                                            |
| Status                         | Define si la promoción estará Activa o Inactiva. <br> La opción <i class="fas fa-toggle-on" aria-hidden="true"></i>` aplicará la promoción según la fecha y horario configurados. <br> La opción `<i class="fas fa-toggle-off" aria-hidden="true"></i>` pausa la promoción, aunque esté dentro del periodo definido.                                    |
| Descripción                    | La descripción interna de la promoción debe utilizarse para registrar información destinada a la comunicación interna de la tienda.                                                                                                                                                                                                                                        |
| Fecha y hora de inicio*        | Selecciona la fecha y hora exactas de inicio de la promoción para que se active en el momento deseado.                                                                                                                                                                                                                                                                      |
| Fecha y hora de fin*           | Configura la fecha y hora exactas para su desactivación.                                                                                                                                                                                                                                                                                                                     |
| Utilizar configuración de recurrencia | Selecciona esta opción para programar la repetición automática de la promoción en días y horas determinados. Debes configurar los intervalos deseados para que la recurrencia se aplique.                                                                                                                                                                               |
| ¿Cuál es el tipo y valor del descuento?* | Selecciona el tipo y el valor de descuento que se aplicará a la promoción. Opciones disponibles: <br> - **Nominal**: valor fijo aplicado al total del carrito. <br> - **Envío nominal**: valor fijo aplicado al costo del envío. <br> - **Porcentual**: porcentaje aplicado al valor del producto. <br> - **Precio máximo por ítem**: precio tope por ítem. <br> - **Envío porcentual**: porcentaje aplicado al envío. <br> - **Envío máximo**: tope del valor del envío. <br> - **Envío gratis**: 100% de descuento sobre el valor del envío. <br> - **Regalo**: descuento total sobre el producto definido como regalo. La cantidad máxima se refiere al número de SKUs distintos que el usuario puede seleccionar. <br> &nbsp;&nbsp;&nbsp;&nbsp;- La casilla "Activar multiplicador de regalos" solo funciona en promociones del tipo "Compra uno y lleva uno gratis". Aunque esté disponible en promociones regulares, no tiene efecto en el carrito. <br> &nbsp;&nbsp;&nbsp;&nbsp;> ⚠️ El producto de regalo también debe tener un precio registrado aunque se ofrezca gratuitamente al cliente. |
| Descuento nominal basado en fórmula | Descuento de valor fijo calculado con base en una fórmula que puede usar como variables el valor total del producto, el envío y la cantidad de ítems. Se toma en cuenta el envío de menor costo disponible. <br> **Ejemplo**: `(total + freight) * 0.3`                                                                                                                           |
| Valor de recompensa nominal    | Crédito de valor fijo que se agregará al programa de fidelidad de la tienda. Consulta *Promoción regular con valor de fidelidad*.                                                                                                                                                                                                                                          |
| Valor de fidelidad porcentual  | Porcentaje de crédito que se agregará al programa de fidelidad de la tienda. Consulta *Promoción regular con valor de fidelidad*.                                                                                                                                                                                                                                          |
| Tabla de precios promocionales | Se puede utilizar una tabla de precios como promoción. El precio promocional de cada SKU será el correspondiente en la tabla de precios seleccionada.                                                                                                                                                                                                                       |
| Promoción resaltada            | Inserta una caja de texto con el nombre de la promoción, para que se muestre en la vitrina y en la PDP. Solo se mostrará si se utiliza el componente: `<vtex.cmc:discountHighLight/>`.                                                                                                                                                                                    |

> ℹ️ Las promociones de tipo **Nominal** (valor fijo) solo se mostrarán en el carrito, y no en la vitrina o en la PDP.

#### Restringir esta promoción a los productos de los sellers

En esta sección puedes definir a qué sellers se aplicará la promoción. Es decir, tienes la opción de decidir los sellers que se incluirán o excluirán del descuento.

- **Igual a:** selecciona los nombres de los sellers deseados para incluirlos.
- **Diferentes de:** selecciona los nombres de los sellers deseados para excluirlos.

Para que la promoción sea válida para todos los sellers, deja la opción sin seleccionar.

> ⚠️ No puedes seleccionar un seller white label directamente. Hay dos opciones para incluir un seller white label en la promoción: <ol> <li>Restringir los sellers a la tienda principal. Esta restricción agrega todos los sellers white label de tu tienda a la promoción.</li> <li>Dejar la opción sin seleccionar para incluir todos los sellers. En este caso, todos los tipos de sellers (white label y otros) se agregan a la promoción.</li> </ol>

#### Política comercial
Esta sección define las políticas comerciales válidas para la promoción. Puedes incluir o excluir políticas comerciales en el descuento.

- **Igual a:** selecciona las políticas comerciales que deseas incluir.
- **Diferentes de:** selecciona las políticas comerciales que deseas excluir.
- **Proporcionado por mí (Mi tienda):** selección de las políticas comerciales con productos de tu tienda. Puedes seleccionar más de una política comercial.
- **Entregado por mí (Otras tiendas):** selección de las políticas comerciales en que tus productos figuran como provenientes de tiendas de terceros. Puedes seleccionar más de una política comercial.

Para que la promoción sea válida en todas las políticas comerciales, deja la opción sin seleccionar.

### 2. ¿A qué ítems se aplicará esta promoción?
En esta sección defines si la promoción se aplicará a todos los productos del catálogo o solo a productos específicos. Sigue las instrucciones a continuación para configurarla correctamente:

- **Si deseas aplicar la promoción a todo el catálogo**, selecciona la opción **Aplicar a todos los productos**.

- **Para restringir la promoción a productos específicos**, selecciona **Aplicar a los productos que cumplen todas las restricciones siguientes**, y completa los campos según tus criterios. Puedes definir:
  - Categorías
  - Marcas
  - Colecciones
  - Productos
  - SKUs

Cada campo ofrece las opciones **Igual a** (inclusión) o **Diferentes de** (exclusión), lo que permite configurar combinaciones precisas.

En el siguiente ejemplo, la promoción se configuró para incluir todos los productos de la categoría Alimentación, con la marca Pedigree, excepto el producto Croquetas Whiskas. A continuación se ilustra cómo se completaron los campos:

![Tela quais itens-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/registro-promocion-regular_1.png)

Para facilitar el llenado de productos o SKUs, puedes cargar un archivo **.txt** con los IDs deseados. El archivo debe contener un ID por fila. Para cargarlo:

- Haz clic en **Selecciona un archivo .txt** en el campo correspondiente al producto o SKU deseado.
- Selecciona el archivo **.txt** con los IDs de productos o SKUs.

    > ⚠️ Si seleccionas **Aplicar a los productos que cumplen todas las restricciones siguientes** y no llenas ninguno de los criterios de selección, la promoción no se registrará y se mostrará el mensaje **Define los productos elegibles o aplica a todos los productos**. En este caso, debes llenar los criterios de selección o elegir **Aplicar a todos los productos**.

Para que los productos se incluyan en la promoción deben cumplir con todas las condiciones configuradas en esta sección.

### 3. ¿Cuáles son las condiciones para que la promoción sea válida?
Para que la promoción aplique, el carrito del cliente debe cumplir con las condiciones establecidas en esta sección:

- **Valor mínimo y máximo del pedido:** en promociones de precio que ajustan directamente el valor de los ítems en el carrito, la activación se basa en su precio original. En las promociones que ofrecen otros beneficios, como envío gratis o regalos, el precio considerado para activar la promoción es el precio ya con los descuentos aplicados.
- **Valor acumulado en compras:** el descuento se aplicará si el total de las compras anteriores del cliente alcanza el valor [configurado](#).
- **Precio del ítem entre:** el descuento se concederá si el valor del ítem está dentro del intervalo de valores indicados.
- **Precio "de" y "por" son iguales o Precio "de" y "por" son diferentes:** se refieren a los valores de registro del producto. Solo puedes seleccionar una opción.
- **Usar BINs de restricción:** el descuento se concederá a aquellos usuarios que paguen con tarjetas cuyos BINs estén entre los números ingresados en este campo.
- **Tags de marketing:** campo utilizado para asociar la promoción a campañas específicas.
- **Afiliados:** el afiliado es el código que identifica al seller en el marketplace. El descuento se aplicará a los afiliados seleccionados. Para más información, consulta el artículo [Qué es afiliado](https://help.vtex.com/es/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0?locale=pt).
- **Clúster de clientes:** el descuento se concederá si el cliente está registrado en el clúster seleccionado. Es importante resaltar que el nombre del clúster debe coincidir exactamente con el nombre registrado. Cualquier error ortográfico impedirá que la configuración funcione correctamente.
- **Países de envío:** el descuento se concederá a los países seleccionados en este campo.
- **El código postal de envío debe:** el descuento se concederá si el código postal cumple con la regla configurada.
- **Tipo de envío:** el descuento se concederá si el tipo de envío elegido por el cliente es el mismo que el registrado en la promoción. Este criterio *solo* se tendrá en cuenta si el tipo de promoción está relacionado con el valor del envío, es decir, solo si el tipo es Envío porcentual, Envío nominal, Envío máximo o Envío gratis.
- **Aplicar el descuento solo cuando el cliente seleccione una de las transportadoras anteriores:** la promoción se activará únicamente después de que el cliente elija esa forma de envío. Mientras no se seleccione, no habrá descuento. Este criterio *solo* se tendrá en cuenta si el tipo de promoción está relacionado con el valor del envío, es decir, solo si el tipo es Envío porcentual, Envío nominal, Envío máximo o Envío gratis.
- **Medio de pago:** el descuento se concederá si el medio de pago seleccionado por el cliente es el mismo que el registrado en la promoción. Este descuento *solo* se aplicará al finalizar la compra, cuando el cliente seleccione el mismo medio de pago que el registrado.

    > ⚠️  De manera predeterminada, pueden registrarse hasta **20 medios de pago por promoción**, aunque existe la posibilidad de personalización para incluir hasta **100 medios de pago**. Si necesitas utilizar más de 20, ponte en contacto con nuestro **Soporte**. 

- **Número de cuotas:** el descuento se concederá si la cantidad de cuotas seleccionada por el cliente está en el intervalo registrado. Este campo no se aplica si se selecciona la opción boleto (Brasil).

    > ⚠️ **Atención**: las promociones por medio de pago y número de cuotas no se aplican a pedidos pagados con dos tarjetas o vales de compra.

- **utm_source:** el descuento se concederá si la navegación utiliza un parámetro utm_source correspondiente a cualquiera de los valores registrados. Es importante destacar que el cliente solo puede ingresar un **utm_source** en el checkout.
- **utm_campaign** el descuento se concederá si la navegación utiliza un parámetro utm_campaign con el valor registrado.
- **Crear un nuevo cupón con los UTM anteriores:** crea un cupón a partir de los UTM registrados para que el cliente tenga acceso a esta promoción solo con el código del cupón.
- **utmi_cp:** el descuento se concederá si la navegación se realiza con el utmi_cp con el valor registrado (distingue entre mayúsculas y minúsculas).

    > ℹ️ En el campo de las UTM, ingrese solo el valor que tendrán las UTM para activar la promoción. No es necesario ingresar *?utm_source=* dentro del campo.

- **Solo en la primera compra:** el descuento se concederá únicamente en la primera compra del cliente.
- **Pedido de suscripción:** opción que define que la promoción se aplique a pedidos de suscripción. Consulta a continuación las condiciones para los tipos de pedido:

   Tipo de pedido:

     - **Primeros pedidos:** pedidos que generan suscripciones, pero que aún no forman parte de los ciclos de suscripción.
     - **Pedidos recurrentes:** pedidos que forman parte de los ciclos de suscripción.

    Filtrar por:

     - **Frecuencia:** opción que define la frecuencia de los pedidos de suscripción: día, semana, mes y año.
     - **Número del ciclo:** selección de los ciclos de suscripción que se incluirán en la promoción. Esta opción solo se habilita si previamente se ha seleccionado la opción **Pedidos recurrentes**.

- **¿Se debe aplicar el descuento incluso si el cliente no está registrado?:** este campo se muestra cuando se selecciona la opción "Solo en la primera compra". Al marcar esta opción, la promoción se aplicará al cliente incluso si no ingresó su email y contraseña. El descuento se otorgará en cuanto el sistema pueda identificar al cliente, sin que sea necesario que inicie sesión. Si la opción no está marcada, la promoción solo se aplicará si el cliente inicia sesión con el email y contraseña previamente registrados.

### 4. Restricciones y limitaciones de uso
- **Cuántas veces se aplicará esta promoción en tu tienda:** limita la cantidad de veces que se aplicará la promoción. Al *deseleccionar* la opción *ilimitado*, se habilita un campo para registrar la cantidad de veces que se puede aplicar la promoción. Si la promoción ya ha sido creada, esta condición *solo* se aplicará a partir del día en que se configure, sin afectar los pedidos realizados anteriormente.

- **Cuántas veces por cliente se aplicará esta promoción:** determina el número máximo de veces que cada cliente puede utilizar la promoción. Si el campo anterior también está seleccionado, tendrá una prioridad de aplicación mayor que este límite.

- **Establecer el número máximo de ítems elegibles para cada carrito:** define la cantidad de ítems del carrito sobre los que la promoción surtirá efecto. Consulta [este artículo](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho) para más información.

- **Aplicar con otras promociones:** permite que se conceda más de una promoción al mismo tiempo sin importar el tipo de descuento. Aprende más sobre [cómo funciona la competencia de promociones](https://help.vtex.com/es/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#).

- **Aplicar con precios manuales:** permite aplicar la promoción a productos cuyos precios hayan sido ingresados manualmente por el agente de televventas. Para activar la funcionalidad de precios manuales, utiliza el endpoint [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

