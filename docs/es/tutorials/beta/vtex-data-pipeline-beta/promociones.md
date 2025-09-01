---
title: 'Promociones Data Pipeline'
id: 3WZ1syNucDFdvVhfKtA6Qd
status: PUBLISHED
createdAt: 2024-02-02T18:02:01.395Z
updatedAt: 2025-07-28T21:00:50.202Z
publishedAt: 2025-07-28T21:00:50.202Z
firstPublishedAt: 2024-05-27T19:26:59.739Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: promotions
legacySlug: promociones
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos de promociones está constituido por cuatro tablas: `promotions_latest` y `promotions_historical`. Estas tablas abarcan todo el ciclo de vida de las campañas promocionales.

En esta sección puedes consultar la siguiente información:

- [Características de los datos](#características-de-los-datos)
- [Tabla: promotions_latest](#tabla-promotions_latest)  
- [Tabla: promotions_historical](#tabla-promotions_historical)  
- [Análisis con datos de promociones](#analisis-con-datos-de-promociones)
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)

## Características de los datos

|**Característica**|**Descripción**|
| - | - |
|**Origen**|Proceden del [módulo Promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR) en el Admin VTEX.|
|**Disponibilidad**|Se puede acceder a los datos de promociones a través del Admin VTEX y también a través de las [API de Promotions](https://developers.vtex.com/docs/guides/promotions-overview).|
|**Historial**|Los datos se conservan durante dos años, a partir de 2024 para clientes que ya utilizan la plataforma VTEX.|
|**Intervalo mínimo de actualización**|Una hora.|

## Tabla promotions_latest

| Nombre de la columna | Tipo de columna | Descripción de la columna |
| ----- | ----- | ----- |
| batch\_id | character varying(256) | Identificador único del lote de datos, utilizado para hacer seguimiento y gestionar la ingesta de datos. |
| account | character varying(256) | Cuenta a la que pertenece la promoción. |
| id\_calculator\_configuration | character varying(256) | El ID de la promoción. |
| calculator\_name | character varying(65535) | Nombre de la promoción. |
| calculator\_description | character varying(65535) | Descripción interna de la promoción. |
| begin\_date\_utc | timestamp without time zone | Fecha de inicio de la promoción (UTC). |
| end\_date\_utc | timestamp without time zone | Fecha de fin de la promoción (UTC). |
| last\_modified | timestamp without time zone | La última vez que la promoción fue modificada (UTC). |
| days\_ago\_of\_purchases | integer | Número de días que se toman en cuenta para agregar el historial de compras. |
| is\_active | boolean | Verdadero si la promoción está activa en este momento. |
| is\_archived | boolean | Verdadero si la promoción está archivada en este momento. |
| is\_featured | boolean | Verdadero si la promoción está destacada en este momento. |
| disable\_deal | boolean | Obsoleto. Indica si una oferta está activa (verdadero) o no (falso). |
| offset | numeric(18,0) | El margen que se aplicará a la fecha de inicio y fin de la promoción. |
| activate\_gifts\_multiplier | boolean | Si se define como verdadero, activa el multiplicador de regalos. |
| new\_offset | numeric(18,0) | Nuevo margen de tiempo en segundos a partir de UTC. |
| max\_prices\_per\_items | super | Lista de precio máximo de los ítems. |
| cumulative | boolean | Determina si la promoción puede acumularse con otras promociones del mismo tipo de descuento. |
| effect\_type | character varying(256) | El tipo del efecto de la promoción. |
| discount\_type | character varying(256) | El tipo de descuento que se aplicará a la promoción. |
| nominal\_shipping\_discount\_value | numeric(18,0) | Descuento de valor fijo que se aplicará al valor de envío. |
| absolute\_shipping\_discount\_value | numeric(18,0) | Costo máximo de envío. |
| nominal\_discount\_value | numeric(18,0) | Descuento de valor fijo que se aplicará al valor total de la compra. |
| nominal\_discount\_type | character varying(256) | Controla el comportamiento del efecto NominalDiscount (descuento de valor fijo). Este campo solo acepta dos valores de string. <ul>item: aplica el descuento de valor fijo a cada ítem presente en el carrito.</ul> <ul>carrito: conserva el comportamiento actual y todo el pedido/carrito recibe un descuento de valor fijo que se distribuye entre los ítems.</ul> |
| maximum\_unit\_price\_discount | numeric(18,0) | El precio máximo para cada ítem de la compra será el precio configurado. |
| percentual\_discount\_value | numeric(18,0) | Descuento porcentual que se aplicará al valor total de la compra. |
| rebate\_percentual\_discount\_value | numeric(18,0) | Valor de descuento porcentual sobre el envío. |
| percentual\_shipping\_discount\_value | numeric(18,0) | Descuento porcentual que se aplicará al costo de envío. |
| percentual\_tax | numeric(18,0) | Cargo porcentual sobre el valor total de la compra. |
| shipping\_percentual\_tax | numeric(18,0) | Cargo porcentual de envío sobre el valor total de la compra. |
| percentual\_discount\_value\_list1 | numeric(18,0) | Descuentos válidos para los SKUs de listSku1BuyTogether, que es la lista de descuentos utilizada para las promociones Comprar juntos. |
| percentual\_discount\_value\_list2 | numeric(18,0) | Equivalente a percentualDiscountValueList1. |
| skus\_gift | super | Objeto del SKU de regalo. Descuento total sobre el valor del producto definido como regalo. quantitySelectable: cantidad de SKUs de regalo. gifts: arreglo de IDs de los SKUs de regalo.  |
| nominal\_reward\_value | numeric(18,0) | Valor fijo para el programa de fidelidad. |
| percentual\_reward\_value | numeric(18,0) | Valor porcentual para el programa de fidelidad. |
| order\_status\_reward\_value | character varying(256) | Valor de recompensa del status del pedido. |
| apply\_to\_all\_shippings | boolean | Indica si la promoción se aplica a todos los tipos de envío o solo al más barato. |
| nominal\_tax | numeric(18,0) | Cargo de valor fijo. |
| max\_pack\_value | numeric(18,0) | Valor de paquete máximo. |
| origin | character varying(256) | Origen de la promoción: marketplace o fulfillment.  |
| id\_seller\_is\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier seller que esté en el campo idSeller. Si se define como falso, los sellers que estén en ese campo no aplicarán la promoción. |
| ids\_sales\_channel | super | Lista de políticas comerciales que activan la promoción. |
| are\_sales\_channel\_ids\_exclusive | boolean | Si se define como falso, la promoción se aplicará a cualquier política comercial que esté en el campo idsSalesChannel. Si se define como falso, las políticas comerciales que estén en ese campo no aplicarán la promoción. |
| marketing\_tags | super | Tags de marketing de la promoción. |
| marketing\_tags\_are\_not\_inclusive | boolean | Si se define como falso, la promoción se aplicará a cualquier tag de marketing que esté en el campo marketingTags. Si se define como verdadero, las tag de marketing que estén en ese campo no aplicarán la promoción. |
| payments\_methods | super | Arreglo compuesto por todos los medios de pago. <ul>id: ID del medio de pago.</ul>  <ul>name: nombre del medio de pago.</ul> |
| stores | super | Lista de tiendas. |
| campaigns | super | Públicos de campañas que activan esta promoción. |
| stores\_are\_inclusive | boolean | Obsoleto. Si se define como verdadero, la promoción se aplicará a cualquier tienda que esté en el campo stores. Si se define como falso, las tiendas que estén en ese campo no aplicarán la promoción. |
| categories | super | Objeto compuesto por las categorías que activarán o desactivarán la promoción. <ul>id: ID de la categoría.</ul> <ul>name: Nombre de la categoría.</ul> |
| categories\_are\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier categoría que esté en el campo categories. Si se define como falso, las categorías que estén en ese campo no aplicarán la promoción. |
| brands | super | Objeto compuesto por las marcas que activarán o desactivarán la promoción. |
| brands\_are\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier marca que esté en el campo brands. Si se define como falso, las marcas que estén en ese campo no aplicarán la promoción. |
| products | super | Objeto compuesto por los productos que activarán o desactivarán la promoción. |
| products\_are\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier producto que esté en el campo products. Si se define como falso, los productos que estén en ese campo no aplicarán la promoción. |
| skus | super | Objeto compuesto por los SKUs que activarán o desactivarán la promoción. |
| skus\_are\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier SKU que esté en el campo SKUs. Si se define como falso, los SKUs que estén en ese campo no aplicarán la promoción. |
| collections1\_buy\_together | super | Colecciones que generarán la promoción, de tipo Comprar juntos, Más por menos, Descuento progresivo, Compra uno y lleva uno gratis. |
| collections2\_buy\_together | super | Colecciones que generarán la promoción, de tipo Comprar juntos, Más por menos, Descuento progresivo, Compra uno y lleva uno gratis. |
| minimum\_quantity\_buy\_together | integer | Cantidad mínima para la promoción Comprar juntos. |
| quantity\_to\_affect\_buy\_together | integer | La cantidad que afectará la promoción Comprar juntos. |
| enable\_buy\_together\_per\_sku | boolean | Activar Comprar juntos por SKU. |
| list\_sku1\_buy\_together | super | Arreglo de objetos, donde cada uno contiene el ID y nombre del SKU que se agregará a la primera lista de la promoción **Comprar juntos**. Aprende más sobre este tipo de promoción en la documentación [Crear promoción Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323). <ul>⮕  Objeto que contiene el ID y el nombre del SKU que se agregará a la primera lista de la promoción **Comprar juntos**. Aprende más sobre este tipo de promoción en la documentación [Crear promoción Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323).</ul> |
| list\_sku2\_buy\_together | super | Arreglo de objetos, donde cada uno contiene el ID y nombre del SKU que se agregará a la segunda lista de la promoción **Comprar juntos**. Aprende más sobre este tipo de promoción en la documentación [Crear promoción Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323). <ul>⮕ Objeto que contiene el ID y el nombre del SKU que se agregará a la segunda lista de la promoción **Comprar juntos**. Aprende más sobre este tipo de promoción en la documentación [Crear promoción Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323).</ul>  |
| coupon | super | Obsoleto. Lista de cupones. |
| total\_value\_floor | numeric(18,0) | Valor mínimo del carrito para activar la promoción. |
| total\_value\_ceiling | numeric(18,0) | Valor máximo del carrito para activar la promoción. |
| total\_value\_include\_all\_items | boolean | Obsoleto. Valor total incluyendo todos los ítems. |
| total\_value\_mode | character varying(256) | Define los ítems que se toman en cuenta para calcular el valor total del carrito. |
| collections | super | Arreglo compuesto por las colecciones que activarán o desactivarán la promoción. |
| collections\_is\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier colección que esté en el campo collections. Si se define como falso, las colecciones que estén en ese campo no aplicarán la promoción. |
| restrictions\_bins | super | Se otorgará el descuento si se proporciona el BIN de la tarjeta. |
| card\_issuers | super | Lista de emisores de tarjetas. |
| total\_value\_purchase | numeric(18,0) | Valor total acumulado de un cliente en pedidos anteriores necesario para activar la promoción. |
| slas\_ids | super | El descuento se concederá si el método de envío es el mismo que el indicado. |
| is\_sla\_selected | boolean | Aplica el descuento seleccionado solo cuando el cliente selecciona uno de los métodos de envío definidos. |
| is\_first\_buy | boolean | Indica si la promoción es válida solo para la primera compra del usuario. |
| first\_buy\_is\_profile\_optimistic | boolean | Se aplica el descuento aunque el usuario no haya iniciado sesión. |
| compare\_list\_price\_and\_price | boolean | Indica si el **precio de lista** y el **precio** son iguales. |
| is\_different\_list\_price\_and\_price | boolean | La promoción se aplica solo si el precio de lista y el precio son diferentes. |
| zip\_code\_ranges | super | Rango de códigos postales donde se aplica la promoción. |
| item\_max\_price | numeric(18,0) | Precio máximo que puede tener un ítem para que se active la promoción. |
| item\_min\_price | numeric(18,0) | Precio mínimo que debe tener un ítem para que se active la promoción. |
| installment | integer | Obsoleto. Cuotas. |
| is\_min\_max\_installments | boolean | Define si la promoción se aplicará considerando un valor mínimo y máximo para los pagos en cuotas. |
| min\_installment | integer | Número mínimo de cuotas. |
| max\_installment | integer | Número máximo de cuotas. |
| merchants | super | Lista de retailers. |
| cluster\_expressions | super | Criterios para seleccionar un clúster de clientes. Cada ítem en este arreglo debe seguir el formato de una función de igualdad {propertyname}={value} o de una función contains {propertyname} contains {value}. En ambos casos, se debe cambiar {propertyname} por el nombre del campo en la entidad de datos, y {value} por el valor determinado en Master Data. Aprende más sobre estos criterios en [Cómo completar el campo Clúster de clientes](https://help.vtex.com/es/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342). |
| pii\_cluster\_expressions | super | Expresiones de clústeres relacionadas con la información de identificación personal (PII) de los clientes. |
| payments\_rules | super | Lista de reglas de pago. |
| gift\_list\_types | super | Tipo de lista de regalos. |
| products\_specifications | super | Lista de especificaciones de productos. |
| affiliates | super | Identificador de pedidos de marketplace. El descuento se aplicará a los afiliados seleccionados. |
| max\_usage | integer | Define las veces que se puede utilizar la promoción. |
| max\_usage\_per\_client | integer | Define el máximo de veces que un cliente puede utilizar la promoción. |
| should\_distribute\_discount\_among\_matched\_items | boolean | Indica si se debe distribuir el descuento entre todos los ítems aplicables. |
| multiple\_use\_per\_client | boolean | Define si el cliente puede utilizar la promoción varias veces. |
| type | character varying(256) | Define el tipo de la promoción o si se trata de un cargo. Valores posibles: regular [promoción Regular](https://help.vtex.com/es/tutorial/regular-promotion--tutorials_327), combo [Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323), forThePriceOf [Más por menos](https://help.vtex.com/es/tutorial/creating-a-more-for-less-promotion--tutorials_325), progressive [Descuento progresivo](https://help.vtex.com/es/tutorial/progressive-discount--tutorials_324), buyAndWin [Compra uno y lleva uno gratis](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322), maxPricePerItem (obsoleto), campaign [Promoción de campaña](https://help.vtex.com/es/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume), tax (cargo), multipleEffects (efectos múltiples). |
| use\_new\_progressive\_algorithm | boolean | Indica si se utiliza el algoritmo progresivo. |
| percentual\_discount\_value\_list | super | Lista de valores de descuento porcentual. |
| max\_number\_of\_affected\_items | integer | Número máximo de ítems aplicables a la promoción. |
| max\_number\_of\_affected\_items\_group\_key | character varying(256) | Número máximo de ítems aplicables a la promoción por clave de grupo |

## Tabla promotions_historical

| Nombre de la columna | Tipo de columna | Descripción de la columna |
| ----- | ----- | ----- |
| operation | character varying(256) | La operación ejecutada por el autor. |
| batch\_id | character varying(256) | Identificador único del lote de datos, utilizado para hacer seguimiento y gestionar la ingesta de datos. |
| account | character varying(256) | Cuenta a la que pertenece la promoción. |
| author | character varying(512) | El autor de la operación. |
| id\_calculator\_configuration | character varying(256) | El ID de la promoción. |
| calculator\_name | character varying(1024)	 | Nombre de la promoción |
| calculator\_description | character varying(65535)	 | Descripción interna de la promoción. |
| begin\_date\_utc | timestamp without time zone | Fecha de inicio de la promoción (UTC). |
| end\_date\_utc | timestamp without time zone | Fecha de fin de la promoción (UTC). |
| last\_modified | timestamp without time zone | La última vez que la promoción fue modificada (UTC). |
| days\_ago\_of\_purchases | integer | Número de días que se toman en cuenta para agregar el historial de compras. |
| is\_active | boolean | Verdadero si la promoción está activa en este momento. |
| is\_archived | boolean | Verdadero si la promoción está archivada en este momento. |
| is\_featured | boolean | Verdadero si la promoción está destacada en este momento. |
| disable\_deal | boolean | Obsoleto. Indica si un especial está activo (verdadero) o no (falso). |
| offset | numeric(18,0) | El margen que se aplicará a la fecha de inicio y fin de la promoción. |
| activate\_gifts\_multiplier | boolean | Si se define como verdadero, activa el multiplicador de regalos. |
| new\_offset | numeric(18,0) | Nuevo margen de tiempo en segundos a partir de UTC. |
| max\_prices\_per\_items | super | Lista de precio máximo de los ítems. |
| cumulative | boolean | Determina si la promoción puede acumularse con otras promociones del mismo tipo de descuento. |
| effect\_type | character varying(256) | Tipo de efecto aplicado por la promoción. |
| discount\_type | character varying(256) | El tipo de descuento que se aplicará a la promoción. |
| nominal\_shipping\_discount\_value | numeric(18,0) | Descuento de valor fijo que se aplicará al valor del envío. |
| absolute\_shipping\_discount\_value | numeric(18,0) | Costo máximo de envío. |
| nominal\_discount\_value | numeric(18,0) | Descuento de valor fijo que se aplicará al valor total de la compra. |
| nominal\_discount\_type | character varying(256) | Controla el comportamiento del efecto NominalDiscount (descuento de valor fijo). Este campo solo acepta dos valores de string. <ul>item: aplica el descuento de valor fijo a cada ítem presente en el carrito. </ul><ul>carrito: conserva el comportamiento actual y todo el pedido/carrito recibe un descuento de valor fijo que se distribuye entre los ítems.</ul> |
| maximum\_unit\_price\_discount | numeric(18,0) | El precio máximo para cada ítem de la compra será el precio registrado aquí. |
| percentual\_discount\_value | numeric(18,0) | Descuento porcentual que se aplicará al valor total de la compra. |
| rebate\_percentual\_discount\_value | numeric(18,0) | Valor de descuento porcentual sobre el envío. |
| percentual\_shipping\_discount\_value | numeric(18,0) | Descuento porcentual que se aplicará al costo de envío. |
| percentual\_tax | numeric(18,0) | Cargo porcentual sobre el valor total de la compra. |
| shipping\_percentual\_tax | numeric(18,0) | Cargo porcentual de envío sobre el valor total de la compra. |
| percentual\_discount\_value\_list1 | numeric(18,0) | Descuentos válidos para los SKUs de listSku1BuyTogether, que es la lista de descuentos utilizada para las promociones Comprar juntos. |
| percentual\_discount\_value\_list2 | numeric(18,0) | Equivalente a percentualDiscountValueList1. |
| skus\_gift | super | Objeto del SKU de regalo. Descuento total sobre el valor del producto definido como regalo. quantitySelectable: cantidad de SKUs de regalo. <ul>gifts: arreglo de IDs de los SKUs de regalo.</ul>  |
| nominal\_reward\_value | numeric(18,0) | Valor fijo para el programa de recompensas. |
| percentual\_reward\_value | numeric(18,0) | Valor porcentual para el programa de recompensas. |
| order\_status\_reward\_value | character varying(256) | Valor de recompensa del status del pedido. |
| apply\_to\_all\_shippings | boolean | Indica si la promoción se aplica a todos los tipos de envío o solo al más barato. |
| nominal\_tax | numeric(18,0) | Tasa nominal. |
| max\_pack\_value | numeric(18,0) | Valor de paquete máximo. |
| origin | character varying(256) | Origen de la promoción: marketplace o fulfillment. |
| id\_seller\_is\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier seller que esté en el campo idSeller. Si se define como falso, los sellers que estén en ese campo no aplicarán la promoción. |
| ids\_sales\_channel | super | Lista de políticas comerciales que activan la promoción. |
| are\_sales\_channel\_ids\_exclusive | boolean | Si se define como falso, la promoción se aplicará a cualquier política comercial que esté en el campo idsSalesChannel. Si se define como falso, las políticas comerciales que estén en ese campo no aplicarán la promoción. |
| marketing\_tags | super | Tags de marketing de la promoción. |
| marketing\_tags\_are\_not\_inclusive | boolean | Si se define como falso, la promoción se aplicará a cualquier tag de marketing que esté en el campo marketingTags. Si se define como verdadero, las tag de marketing que estén en ese campo no aplicarán la promoción. |
| payments\_methods | super | Arreglo compuesto por todos los medios de pago.<ul>id: ID del medio de pago.</ul>  <ul>name: nombre del medio de pago.</ul> |
| stores | super | Lista de tiendas. |
| campaigns | super | Audiencia de campañas que activan esta promoción. |
| stores\_are\_inclusive | boolean | Obsoleto. Si se define como verdadero, la promoción se aplicará a cualquier tienda que esté en el campo stores. Si se define como falso, las tiendas que estén en ese campo no aplicarán la promoción. |
| categories | super | Objeto compuesto por las categorías que activarán o desactivarán la promoción. <ul>id: ID de la categoría.</ul> <ul>name: Nombre de la categoría.</ul> |
| categories\_are\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier categoría que esté en el campo categories. Si se define como falso, las categorías que estén en ese campo no aplicarán la promoción. |
| brands | super | Objeto compuesto por las marcas que activarán o desactivarán la promoción. |
| brands\_are\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier marca que esté en el campo brands. Si se define como falso, las marcas que estén en ese campo no aplicarán la promoción. |
| products | super | Objeto compuesto por los productos que activarán o desactivarán la promoción. |
| products\_are\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier producto que esté en el campo products. Si se define como falso, los productos que estén en ese campo no aplicarán la promoción. |
| skus | super | Objeto compuesto por los SKUs que activarán o desactivarán la promoción. |
| skus\_are\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier SKU que esté en el campo skus. Si se define como falso, los SKUs que estén en ese campo no aplicarán la promoción. |
| collections1\_buy\_together | super | Colecciones que generarán la promoción, de tipo Comprar juntos, Más por menos, Descuento progresivo, Compra uno y lleva uno gratis. |
| collections2\_buy\_together | super | Colecciones que generarán la promoción, de tipo Comprar juntos, Más por menos, Descuento progresivo, Compra uno y lleva uno gratis. |
| minimum\_quantity\_buy\_together | integer | Cantidad mínima para la promoción Comprar juntos. |
| quantity\_to\_affect\_buy\_together | integer | Cantidad afectará la promoción Comprar juntos. |
| enable\_buy\_together\_per\_sku | boolean | Activar Comprar juntos por SKU. |
| list\_sku1\_buy\_together | super | Arreglo de objetos, donde cada uno contiene el ID y nombre de un SKU que se agregará a la primera lista de la promoción **Comprar juntos**. Aprende más sobre este tipo de promoción en la documentación [Crear promoción Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323). <ul>⮕  Objeto que contiene el ID y el nombre del SKU que se agregará a la primera lista de la promoción **Comprar juntos**. Aprende más sobre este tipo de promoción en la documentación [Crear promoción Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323). </ul>|
| list\_sku2\_buy\_together | super | Arreglo de objetos, donde cada uno contiene el ID y nombre de un SKU que se agregará a la segunda lista de la promoción **Comprar juntos**. Aprende más sobre este tipo de promoción en la documentación [Crear promoción Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323). <ul>⮕ Objeto que contiene el ID y el nombre del SKU que se agregará a la segunda lista de la promoción **Comprar juntos**. Aprende más sobre este tipo de promoción en la documentación [Crear promoción Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323).</ul> |
| coupon | super | Obsoleto. Lista de cupones. |
| total\_value\_floor | numeric(18,0) | Valor mínimo del carrito para activar la promoción. |
| total\_value\_ceiling | numeric(18,0) | Valor máximo del carrito para activar la promoción. |
| total\_value\_include\_all\_items | boolean | Obsoleto. Valor total incluyendo todos los ítems. |
| total\_value\_mode | character varying(256) | Define los ítems que se toman en cuenta para calcular el valor total del carrito. |
| collections | super | Arreglo compuesto por las colecciones que activarán o desactivarán la promoción. |
| collections\_is\_inclusive | boolean | Si se define como verdadero, la promoción se aplicará a cualquier colección que esté en el campo collections. Si se define como falso, las colecciones que estén en ese campo no aplicarán la promoción. |
| restrictions\_bins | super | Se otorgará el descuento si se proporciona el BIN de la tarjeta. |
| card\_issuers | super | Lista de emisores de tarjetas. |
| total\_value\_purchase | numeric(18,0) | Valor total acumulado de un cliente en pedidos anteriores necesario para activar la promoción. |
| slas\_ids | super | El descuento se concederá si el método de envío es el mismo que el indicado. |
| is\_sla\_selected | boolean | Aplica el descuento seleccionado solo cuando el cliente selecciona uno de los métodos de envío definidos. |
| is\_first\_buy | boolean | Indica si la promoción es válida solo para la primera compra del usuario. |
| first\_buy\_is\_profile\_optimistic | boolean | Se aplica el descuento aunque el usuario no haya iniciado sesión. |
| compare\_list\_price\_and\_price | boolean | Indica si el **precio de lista** y el **precio** son iguales. |
| is\_different\_list\_price\_and\_price | boolean | La promoción se aplica solo si el precio de lista y el precio son diferentes. |
| zip\_code\_ranges | super | Rango de códigos postales donde se aplica la promoción. |
| item\_max\_price | numeric(18,0) | Precio máximo que puede tener un ítem para que se active la promoción. |
| item\_min\_price | numeric(18,0) | Precio mínimo que debe tener un ítem para que se active la promoción. |
| installment | integer | Obsoleto. Cuotas. |
| is\_min\_max\_installments | boolean | Define si la promoción se aplicará considerando un valor mínimo y máximo para los pagos en cuotas. |
| min\_installment | integer | Número mínimo de cuotas. |
| max\_installment | integer | Número máximo de cuotas. |
| merchants | super | Lista de retailers. |
| cluster\_expressions | super | Criterios para seleccionar un clúster de clientes. Cada ítem en este arreglo debe seguir el formato de una función de igualdad {propertyname}={value} o de una función contains {propertyname} contains {value}. En ambos casos, se debe cambiar {propertyname} por el nombre del campo en la entidad de datos, y {value} por el valor determinado en Master Data. Aprende más sobre estos criterios en [Cómo completar el campo Clúster de clientes](https://help.vtex.com/es/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342). |
| pii\_cluster\_expressions | super | Expresiones de clústeres relacionadas con la información de identificación personal (PII) de los clientes. |
| payments\_rules | super | Lista de reglas de pago. |
| gift\_list\_types | super | Tipo de lista de regalos. |
| products\_specifications | super | Lista de especificaciones de productos. |
| affiliates | super | Identificador de pedidos de marketplace. El descuento se aplicará a los afiliados seleccionados. |
| max\_usage | integer | Define las veces que se puede utilizar la promoción. |
| max\_usage\_per\_client | integer | Define el máximo de veces que un cliente puede utilizar la promoción. |
| should\_distribute\_discount\_among\_matched\_items | boolean | Indica si se debe distribuir el descuento entre todos los ítems aplicables. |
| multiple\_use\_per\_client | boolean | Define si el cliente puede utilizar la promoción varias veces. |
| type | character varying(256) | Define el tipo de la promoción o si se trata de un cargo. Valores posibles: regular [promoción Regular](https://help.vtex.com/es/tutorial/regular-promotion--tutorials_327), combo [Comprar juntos](https://help.vtex.com/es/tutorial/buy-together--tutorials_323), forThePriceOf [Más por menos](https://help.vtex.com/es/tutorial/creating-a-more-for-less-promotion--tutorials_325), progressive [Descuento progresivo](https://help.vtex.com/es/tutorial/progressive-discount--tutorials_324), buyAndWin [Compra uno y lleva uno gratis](https://help.vtex.com/es/tutorial/buy-one-get-one--tutorials_322), maxPricePerItem (obsoleto), campaign [Promoción de campaña](https://help.vtex.com/es/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume), tax (cargo), multipleEffects (efectos múltiples). |
| use\_new\_progressive\_algorithm | boolean | Indica si se utiliza el algoritmo progresivo. |
| percentual\_discount\_value\_list | super | Lista de valores de descuento porcentual. |
| max\_number\_of\_affected\_items | integer | Número máximo de ítems que la promoción puede afectar. |
| max\_number\_of\_affected\_items\_group\_key | character varying(256) | Número máximo de ítems por clave de grupo que la promoción puede afectar. |

## Análisis con datos de promociones

El conjunto de datos de promociones puede utilizarse para realizar los siguientes análisis:  

- **Análisis del ciclo de vida de la promoción:** comparar la frecuencia y duración de las promociones para evaluar la longevidad y el éxito de las campañas.  
- **Tasa de reactivación de promociones:** analizar el número de promociones reactivadas para evaluar la eficacia de reutilizar o revisar campañas anteriores.  
- **Tendencias de remoción de promociones:** realizar un seguimiento del número y tipos de promociones descontinuadas para comprender las razones de su remoción y ajustar las estrategias futuras.  
- **Impacto de nuevas promociones:** comparar los lanzamientos de promociones con las ventas y el tráfico para evaluar su impacto inmediato.  

## Correlaciones con otros datos

La relación entre el conjunto de datos de promociones y otros conjuntos de datos es esencial. A continuación, se muestran algunos ejemplos:  

- **Datos de [pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv):** analizar la influencia de las promociones en los pedidos ayuda a comprender su impacto sobre las ventas.  
- **Datos de [stock](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2):** la correlación con el stock es fundamental para garantizar la disponibilidad de los productos promocionados.  
- **Análisis de marketing y publicidad**: la integración con estos datos permite medir la efectividad de las promociones para atraer tráfico y engagement.  
- **Datos de [navegación](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) en el sitio web:** analizar el efecto de las promociones en la navegación permite obtener insights sobre el comportamiento de los clientes y la eficacia de la exhibición de las promociones.  

### Descubra otros conjuntos de datos

- [Catálogo](https://help.vtex.com/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Stock](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2) 
- [Navegación](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pagos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)
- [Pedidos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Precios](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Tarjeta de regalo](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Registro del Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

