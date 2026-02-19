---
title: 'Crear Promoción Regular'
id: 7FjbeZdE2KMwk5L1t98pZI
status: PUBLISHED
createdAt: 2020-01-14T13:11:35.010Z
updatedAt: 2025-10-21T17:44:47.560Z
publishedAt: 2025-10-21T17:44:47.560Z
firstPublishedAt: 2020-01-22T13:55:43.369Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: creating-regular-promotions
locale: es
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugEN: promociones
order: 4
---

VTEX permite [crear diferentes tipos de promociones](/es/docs/tutorials/crear-promociones#como-criar-promocoes) que se adaptan a diversos escenarios comerciales. La **promoción Regular** es la más común, ya que proporciona una forma estructurada de otorgar descuentos y permite combinar varias condiciones, restricciones de uso y beneficios.

Para configurar una promoción Regular, sigue estos pasos:

- [Crear promoción](#crear-promocion)  
- [Definir condiciones de la promoción Regular](#definir-condiciones-de-la-promocion-regular)  
- [Configurar condiciones de aplicación](#configurar-condiciones-de-aplicacion)  
- [Configurar restricciones de uso](#configurar-restricciones-de-uso)  
- [Configurar acumulación y competencia](#configurar-acumulacion-y-competencia)  
- [Destacar promoción en los productos](#destacar-promocion-en-los-productos)

## Crear promoción

Para crear la promoción, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Promociones > Promociones** o escribe **Promociones** en la barra de búsqueda en la parte superior de la página.  
2. Haz clic en `Crear promoción`.  
3. Selecciona la opción **Regular**.  
4. Llena los campos de la página. La tabla a seguir describe los campos en detalle.  
5. Haz clic en `Guardar`.

| Campo | Descripción |
| ----- | ----------- |
| **Nombre** | Asigna a la promoción un nombre claro y objetivo (hasta 150 caracteres). |
| **Status** | Define si la promoción estará **Activa** o **Inactiva**. La opción Activa <i class="fas fa-toggle-on" aria-hidden="true"></i> aplicará la promoción según la fecha y horas configuradas. La opción Inactiva <i class="fas fa-toggle-off" aria-hidden="true"></i> pausa la promoción, aunque esté dentro del periodo definido. |
| **Descripción** | Utiliza este campo para registrar el objetivo de la promoción, como el tipo de campaña o estacionalidad. No puede contener más de 10,000 caracteres. |
| **Fecha y hora de inicio** | Selecciona la fecha y la hora exactas para activar la promoción automáticamente. |
| **Fecha y hora de fin** | Define la fecha y hora exactas para finalizar la promoción. Después de ese momento, la campaña se desactivará automáticamente. La fecha de fin debe ser posterior a la fecha y hora de inicio. |
| **Utilizar configuración de recurrencia** | Marca esta opción para repetir automáticamente la promoción en días y horas determinados. Esto permite configurar acciones estacionales para días y horarios definidos. Después de marcar la opción, configura los días y horas de la recurrencia según los parámetros de la campaña. |

### Definir sellers

En esta sección puedes definir los sellers a los que se aplicará la promoción, que pueden ser todos o sellers específicos. Selecciona una de las siguientes opciones:

- **Todos:** la promoción se aplicará a todos los sellers registrados. Utiliza esta opción cuando la campaña incluya todos los productos de todos los sellers.  
- **Iguales a:** la promoción se aplicará solo a los sellers ingresados. Ingresa los identificadores en el campo correspondiente.  
- **Diferentes de**: la promoción se aplicará a todos los sellers, excepto a los ingresados.

### Seleccionar políticas comerciales

Selecciona las políticas comerciales a las que se aplicará la promoción:

- **Todas:** la promoción se aplicará a todas las políticas comerciales registradas.  
- **Iguales a:** selecciona las políticas comerciales que deseas incluir.  
- **Diferentes de:** selecciona las políticas comerciales que deseas excluir.

## Definir condiciones de la promoción Regular

En la sección **Si el cliente compra**, define los ítems que deben estar en el carrito para activar la promoción:

- **Aplicar a todos los ítems de la tienda:** la promoción se aplicará a todos los ítems de tu tienda.  
- **Aplicar a los ítems que cumplen con las restricciones definidas:** la promoción se aplicará solo a los ítems que cumplan con las condiciones.

Puedes configurar restricciones de:

- **SKUs:** la promoción se aplica a ítems específicos identificados por SKU.  
  - **Iguales a:** solo se aplica a los SKUs listados.  
  - **Diferentes de:** se aplica a todos, excepto los listados.  

- **Productos:** la promoción se aplica a los productos sin importar el SKU.  
  - **Iguales a:** la promoción se aplica solo a los productos seleccionados.  
  - **Diferentes de:** se aplica a todos los productos, excepto a los seleccionados.  

- **Colecciones:** la promoción se aplica a ciertas colecciones.  
  - **Iguales a:** la promoción se aplica solo a las colecciones seleccionadas.  
  - **Diferentes de:** se aplica a todas las colecciones, excepto a las seleccionadas.  

- **Categorías:** la promoción se aplica a las categorías del catálogo.  
  - **Iguales a:** la promoción se aplica solo a las categorías seleccionadas.  
  - **Diferentes de:** se aplica a todas las categorías, excepto a las seleccionadas.  

- **Marcas:** la promoción se aplica a las marcas de productos.  
  - **Iguales a:** la promoción se aplica solo a las marcas seleccionadas.  
  - **Diferentes de:** se aplica a todas las marcas, excepto a las seleccionadas.

**El cliente se lleva**

Selecciona el beneficio que se otorgará cuando se cumplan las condiciones. Las opciones incluyen:

- **Descuento**  
  - **Valor fijo:** aplica un descuento de valor fijo (ejemplo: 20.00 USD).  
  - **Porcentual:** aplica un porciento de descuento (ejemplo: 10%).  
  - **Valor fijo: fórmula:** define un descuento de valor fijo que se calcula mediante una fórmula. Este tipo de descuento no es porcentual. Su efecto resta un valor absoluto del total del pedido o del ítem, según la lógica configurada en la fórmula.  

- **Envío**  
  - **Valor fijo:** aplica un descuento de valor fijo al envío.  
  - **Porcentual:** aplica un descuento porcentual al envío.  
  - **Gratis:** elimina el costo de envío.  
  - **Máximo:** define el valor máximo que se puede cobrar. Se descontará cualquier valor calculado que supere el máximo.  

- **Precio máximo:** define un valor límite para el precio de los productos elegibles. Los ítems no podrán superar ese valor después de que se aplique la promoción.  

- **Regalo**  
  - **SKUs:** selecciona los SKUs (por nombre o ID) correspondientes al regalo ofrecido.  
  - **Cantidad de regalos:** define la cantidad de regalos que se pueden seleccionar por carrito o por ítem elegible.  

- **Valor de fidelidad**  
  - **Valor fijo:** asigna una cantidad de crédito fija.  
  - **Porcentual:** calcula el crédito con base en el valor del pedido.  

- **Tabla de precios promocionales:** aplica el valor definido en la tabla de precios seleccionada a los SKUs.

## Configurar condiciones de aplicación

En esta sección puedes definir las condiciones que deben cumplirse para que se aplique la promoción. Puedes combinar diferentes condiciones que se ajusten a la configuración de la campaña.

- **Valor del pedido:** la promoción se aplicará cuando el valor total del carrito alcance o supere el valor definido.  
- **Precio del ítem:** la promoción se aplicará solo a ítems con un valor unitario dentro del rango configurado.  
- **Precio de lista:** la promoción se aplicará considerando el valor original del producto (sin descuentos) como validación.  
- **Número BIN de la tarjeta:** la promoción se aplicará solo cuando la tarjeta utilizada pertenezca a una red, banco o categoría identificada por un número BIN específico.  
  - Importa un archivo `TXT` o `CSV` con la lista de BINs. Debes incluir un número por fila.  
- **Tags de marketing:** la promoción se aplicará cuando la compra se realice a través del [módulo Suscripciones de VTEX](/es/docs/tutorials/como-funciona-suscripciones).  
- **Afiliados:** selecciona los marketplaces o partners afiliados elegibles para la promoción. Para más información, consulta [Qué es afiliado](/es/docs/tutorials/que-es-afiliado).  
- **Clúster de clientes:** selecciona un clúster de clientes que ya exista en Master Data en formato `field=value` o `field contains value`. Escoge una de las siguientes opciones:  
  - **Todos los siguientes:** la promoción se aplicará solo si se cumplen todos los criterios del clúster.  
  - **Al menos uno de los siguientes:** la promoción se aplicará si se cumple al menos uno de los criterios del clúster.  
- **Ubicación del envío:** la promoción se aplicará en función de la dirección de entrega asociada al pedido. Las condiciones pueden configurarse utilizando los siguientes criterios:  
  - **Países:** selecciona los países de envío en los que la promoción se aplicará. Puedes agregar hasta 50 países a la lista. La promoción solo se aplicará a los pedidos cuyo envío esté vinculado a los países configurados.  
  - **Códigos postales:** permite configurar rangos de códigos postales para limitar la aplicación de la promoción a regiones específicas.  
    - **Selecciona Incluir o Excluir:** define si la promoción se aplicará a los rangos configurados (*Incluir*) o a los excluidos (*Excluir*).  
    - **Configura los rangos de códigos postales:** llena los campos *"de"* y *"hasta"* con los códigos postales deseados.  
    - **Agrega varios rangos:** utiliza la opción *Agregar rango* para incluir múltiples rangos de códigos postales, según los criterios de la campaña.  
- **Tipo de envío:** la promoción se aplicará solo cuando se seleccione uno de los tipos de envío definidos.  
- **Medio de pago:** la promoción se aplicará solo cuando el cliente utilice uno de los medios de pago configurados y no haya más de un medio de pago en el carrito.  
- **Número de cuotas:** la promoción se aplicará solo si el número de cuotas está dentro del rango configurado.  
  - **Mínimo de cuotas:** define la cantidad mínima de cuotas para que la promoción sea válida.  
  - **Máximo de cuotas:** define la cantidad máxima de cuotas permitida. La promoción se aplicará solo si la cantidad de cuotas del pedido es igual o inferior al valor definido.

> ℹ️ Esta condición no se aplica a pagos con boleto, tarjeta de regalo o pedidos con más de un medio de pago.

- **Parámetro UTM:** la promoción se aplicará cuando se acceda a la tienda mediante una URL con parámetros UTM o cuando el cliente use un cupón asociado a dichos parámetros. Usa solo letras, números, guiones y guiones bajos al definir los valores de los campos UTM. Para más detalles, consulta el artículo [Monitoreo de campañas con parámetros UTM](/es/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium).

**Define los siguientes parámetros si es necesario:**

- **Fuente UTM:** el descuento se aplicará al navegar utilizando el parámetro `utm_source` configurado.  
- **Campaña UTM:** el descuento se aplicará al navegar utilizando el parámetro `utm_campaign` configurado.  
- **Crear cupón a partir de los parámetros UTM anteriores:** permite generar un cupón con los parámetros UTM ingresados en los campos Fuente UTM y Campaña UTM.  
- **Utmi_cp:** el descuento se aplicará solo si la navegación incluye el parámetro `utmi_cp` con el valor registrado. Para más detalles, consulta el artículo [Qué son las UTMs internas utmi_cp, utmi_pc y utmi_p](/es/tutorial/what-are-the-internal-utms).  
- **Ver cupones vinculados:** permite ver los cupones que ya se vincularon a los parámetros UTM definidos.

## Configurar restricciones de uso de la promoción

Utiliza esta sección para limitar las veces que la promoción puede usarse en la tienda o por cliente.

- **Limitar el uso de las promociones en la tienda:** marca esta opción para definir el número máximo de usos en toda la tienda.  
- **Limitar uso de la promoción por cliente:** marca esta opción para restringir las veces que cada cliente puede usar la promoción.  
- **Limitar el número de ítems elegibles:** restringe el número máximo de ítems por pedido que pueden recibir el descuento de la promoción. El comportamiento de esta configuración varía según la opción seleccionada en *El cliente se lleva*.  
  - Para condiciones de descuento de tipo **Valor fijo**, **Valor fijo: fórmula** y **Precio máximo**, el límite se aplica al total de ítems del carrito.  
  - Para condiciones de descuento **Porcentual**, puedes definir si el límite se aplicará por carrito, producto o SKU.

## Configurar acumulación y competencia

Define si la promoción puede combinarse con otras promociones o con precios ajustados manualmente. Esta configuración controla el comportamiento de la promoción cuando hay más de una promoción elegible.

- **Permitir acumular con otras promociones:** permite combinar la promoción con otras que estén activas en el mismo pedido. La promoción acumula descuentos de envío y regalos de forma predeterminada. Para más información, consulta [Cómo funciona la competencia de promociones](/es/docs/tutorials/como-funciona-la-competencia-de-promociones).  
- **Permitir acumular con precios manuales:** permite aplicar la promoción aún cuando el precio del producto se haya definido manualmente.

## Destacar promoción en los productos

Utiliza esta sección para destacar la promoción visualmente en los productos mostrados en la vitrina de la tienda.

- **Destacar promoción en los productos:** activa esta opción para mostrar una insignia promocional en los productos elegibles para la promoción. Para que el destaque funcione correctamente, debes [configurar la visualización en el módulo CMS de la tienda](/es/docs/tutorials/configurando-promocion-con-destaque-flag).  
- **Información adicional:** haz clic en `Crear` para agregar campos personalizados con nombre y valor, que puedes utilizar para personalizar la tienda.

