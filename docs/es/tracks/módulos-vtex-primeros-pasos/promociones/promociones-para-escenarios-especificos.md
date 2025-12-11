---
title: 'Promociones para escenarios específicos'
id: jOu9b69mKbrTDfSJYAawy
status: PUBLISHED
createdAt: 2020-01-22T13:55:51.326Z
updatedAt: 2025-12-01T17:08:04.859Z
publishedAt: 2023-10-23T17:08:04.859Z
firstPublishedAt: 2020-01-22T15:01:20.187Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: promotions-for-specific-scenarios
locale: es
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugEN: promociones
order: 5
---

En VTEX hay varios tipos de promociones. La promoción **Regular** es la configuración predeterminada en las cuentas VTEX.
Cuando la tienda necesita aplicar reglas más específicas pueden configurarse otros tipos de promociones para diferentes escenarios. Consulta a continuación las promociones disponibles:

-  [Comprar juntos](#comprar-juntos)
-  [Más por menos](#mas-por-menos)
-  [Descuento progresivo](#descuento-progresivo)
-  [Compra uno y lleva uno gratis](#compra-uno-y-lleva-uno-gratis)
-  [Promoción de campaña](#promocion-de-campana)
-  [Restricciones de uso](#restricciones-de-uso)

## Comprar juntos

La promoción **Comprar juntos** ofrece descuentos cuando el cliente agrega dos o más productos al carrito.  
Esta promoción puede aplicar el descuento a ambos productos o solamente a uno de ellos, según las condiciones configuradas.

La pantalla de configuración tiene dos listas de SKUs, que se pueden agregar manualmente o importar por plantilla. Cada lista tiene sus propios campos para configurar el **porcentaje de descuento** y la **cantidad mínima** requerida.

![Comprar juntos – PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/módulos-vtex-primeros-pasos/promociones/comprar-juntos-registro-de-promocion_1.gif)

- **Lista 1:** incluye los productos principales y define el porcentaje de descuento. 
- **Lista 2:** agrega productos complementarios y configura el descuento aplicado a ellos.

> ℹ️ Agrega diferentes SKUs en la Lista 1 y en la Lista 2.

**Ejemplos:**
- Compra un pantalón y recibe **10% de descuento** en un cinturón.
- Compra un par de zapatillas y un par de calcetines y recibe **15% de descuento**.

Para más información, consulta [Crear promoción Comprar juntos](https://help.vtex.com/es/tutorial/compre-junto--tutorials_323).

## Más por menos

La promoción **Más por menos** se utiliza para conceder un descuento cuando el cliente agrega varias unidades de un mismo producto al carrito. 
**Ejemplo:** “Compra 3 y paga 2”.

En la configuración de esta promoción, define los **SKUs** o **colecciones** participantes, el número de productos que el cliente debe comprar y la cantidad de productos que recibirán el descuento.

La pantalla muestra los siguientes campos:

- **El cliente compra [X] de los siguientes productos:** cantidad mínima requerida. 
- **SKUs:** agrega hasta 100 SKUs manualmente o mediante plantilla. 
- **Colecciones:** selecciona una colección de productos para facilitar la aplicación de la promoción. 
- **El cliente se lleva [Y] de los productos con:** define cuántos productos entre los agregados recibirán descuento. 
- **Descuento de:** selecciona el tipo de descuento, ya sea **porcentual** o **valor fijo** e ingresa el valor.

### Configuración avanzada
Los ajustes avanzados permiten definir cómo se aplicará el descuento a los productos seleccionados. Llena los campos y elige las opciones que se ajusten a las reglas de la promoción:

- **Se debe aplicar el descuento**
    - **Cualquier ítem:** aplica el descuento a cualquier ítem dentro de los criterios configurados. Los ítems no necesitan ser iguales entre sí. 
    - **Solo para ítems iguales:** el descuento solo se aplica cuando los ítems son idénticos (mismo SKU).
- **Productos más baratos:** el descuento se aplica a los productos de menor valor.
- **Productos más caros:** el descuento se aplica a los productos de mayor valor.

Para más información, consulta [Crear promoción Más por menos](https://help.vtex.com/es/tutorial/leve-mais-por-menos--tutorials_325).

## Descuento progresivo

La promoción **Descuento progresivo** otorga porcentajes de descuento que aumentan conforme el cliente agrega productos elegibles al carrito.

**Ejemplo:** Si el cliente compra 5 kg de alimento para mascotas, recibe un **5%** de descuento. Si agrega 5 kg más, recibe un **10%**.

En la configuración, define los **SKUs** o **colecciones** participantes y establece rangos de cantidad con sus respectivos porcentajes de descuento.

- **SKUs:** selecciona los productos específicos que recibirán el descuento progresivo. 
- **Colecciones:** elige colecciones de productos para aplicar la regla en grupo. 
- **Considerar solamente ítems iguales:** esta opción limita el descuento a productos idénticos, considerando solo la cantidad de un mismo SKU en el carrito. Si los SKUs son diferentes, aunque pertenezcan a la misma colección, no son elegibles.
- **Agregar rango:** haz clic en `+` para crear nuevos niveles de cantidad y descuento (hasta 10 rangos posibles).

![Descuento progresivo – PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/módulos-vtex-primeros-pasos/promociones/descuento-progresivo_1.gif)

Para más información, consulta [Cómo funciona la promoción Descuento progresivo](https://help.vtex.com/es/tutorial/desconto-progressivo--tutorials_324).

## Compra uno y lleva uno gratis
La promoción **Compra uno y lleva uno gratis** otorga envío gratis, un regalo o la opción de establecer un **precio máximo por ítem** cada vez que el cliente agregue los productos elegibles al carrito, según las reglas configuradas.

**Ejemplos:**
-  El cliente compra una televisión y recibe envío gratis. 
-  El cliente compra una consola de videojuegos y recibe un juego gratis.

![Compra uno y lleva uno gratis – ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/módulos-vtex-primeros-pasos/promociones/como-funciona-la-promocion-compre-y-gane_1.gif)

La pantalla de configuración permite definir las condiciones de la compra y el beneficio otorgado.

- **Si el cliente compra:**
    - **SKUs:** ingresa el nombre o ID de los productos participantes.
    - **Colecciones:** agrega las colecciones elegibles.
    - **Cantidad mínima:** define la cantidad de ítems necesarios. 
    - **Considerar solamente ítems iguales:** si activas esta opción, la promoción solo se aplicará cuando los productos sean idénticos.

- **Selecciona el beneficio que el cliente obtiene:**
    -  **Envío gratis:**
        - Todas las opciones de envío.
        - Solo al envío más barato. 
        - Tipo de envío específico.
    - **Regalo:**
         - Selecciona los SKUs de regalo.
         - Define la cantidad máxima de regalos. 
         - Elige entre **un regalo por carrito** o **uno por ítem elegible**.
         - **Precio máximo:** limita el valor de los productos que pueden activar la promoción.

> ⚠️ Una promoción Compra uno y lleva uno gratis permite configurar hasta 100 SKUs diferentes simultáneamente.

Para más información, consulta [Cómo funciona la promoción Compra uno y lleva uno gratis](https://help.vtex.com/es/tutorial/compre-e-ganhe--tutorials_322).

## Promoción de campaña

La **Promoción de campaña** permite crear promociones dirigidas a audiencias específicas, ofreciendo beneficios como **envío gratis**, **regalos** y **tablas de precios promocionales**.

Este tipo de promoción está asociada a una [audiencia de campaña](https://help.vtex.com/es/docs/tutorials/criar-audiencia-de-campanhas), que define el público objetivo elegible para la oferta.  

> ❗Las audiencias de campaña y sus promociones solo son válidas para la cuenta principal de la tienda. Las cuentas de sellers no ofrecen esta funcionalidad.

Para más información, consulta [Crear una promoción de campaña](https://help.vtex.com/es/docs/tutorials/promocion-de-campana).

## Restricciones de uso

La sección Restricciones está presente en todos los tipos de promociones. Consulta a continuación los tipos de restricciones y su descripción.

- **Limitar el uso de las promociones en la tienda:** marca esta opción para definir la cantidad máxima de veces que la promoción puede utilizarse.  

- **Limitar uso de la promoción por cliente:** marca esta opción para restringir las veces que cada cliente puede usar la promoción.  

- **Limitar la cantidad máxima de ítems elegibles:** restringe el número máximo de ítems por pedido que pueden recibir el descuento de la promoción. El comportamiento de esta configuración varía según la opción seleccionada en la promoción [Compra uno y lleva uno gratis](#compra-uno-y-lleva-uno-gratis).  

  - Para condiciones de descuento de tipo **Valor fijo**, **Valor fijo: fórmula** y **Precio máximo por ítem**, el límite se aplica al total de ítems del carrito. 

 - Para condiciones de **Descuento porcentual**, puedes definir si el límite se aplicará por carrito, producto o SKU. Para más información sobre descuentos bajo estas condiciones, consulta [Promoción Regular](https://help.vtex.com/es/docs/tutorials/registro-promocion-regular).

 La siguiente tabla muestra los tipos de promoción en que cada restricción puede aplicarse:

| Tipo de promoción | Límite de uso en la tienda | Límite de uso por cliente | Límite de ítems elegibles |
| :---- | :---: | :---: | :---: |
| **Regular** | sí | sí | no |
| **Comprar juntos** | sí | sí | no |
| **Más por menos** | sí | sí | sí |
| **Descuento progresivo** | sí | sí | sí |
| **Compra uno y lleva uno gratis** | sí | sí | no |
| **Campaña** | sí | sí | no |