---
title: 'Cómo funciona una transacción con split de pagos'
id: 4ztN7yya2GoRbSnz8WGEUA
status: ARCHIVED
createdAt: 2020-11-05T17:41:50.805Z
updatedAt: 2021-06-28T19:53:24.634Z
publishedAt: 
firstPublishedAt: 2020-11-06T19:14:38.444Z
contentType: trackArticle
productTeam: Financial
slugEN: how-a-split-payment-transaction-works
locale: es
trackId: 1ouDg8q56Kuz1AgtJUY9nv
trackSlugES: split-de-pagos
---

El flujo de una transacción con *split* de pagos sigue las mismas etapas del flujo de la transacción común. Sin embargo, es una operación un poco más compleja

Toda vez que el valor del carrito —valor total de la compra que incluye los valores de los productos y del flete— se debe dividir entre los tres agentes de la operación: adquirente, *marketplace* y *seller*.

Antes de continuar, aclararemos algunos conceptos relacionados a esa división. 

## MDR
Al procesar una transacción, el adquirente cobra un porcentaje del valor total de la compra. Esa es la tarifa MDR, sigla en inglés para Merchant Discount Rate. 

<div class="alert alert-info">
La tarifa MDR se aplica a todas las transacciones que son procesadas por el adquirente.
<div>  

En el caso del split, tanto el marketplace como el (los) seller (s) pueden ser responsables por el pago de esa tarifa. También existe la posibilidad de que ambos receptores del pago se encarguen del mismo. 

## Comisión
Es el porcentaje del valor total de la venta que le corresponde al *marketplace*. 

Es decir, cada vez que un *seller* vende un producto en un *marketplace*, una parte del valor total de esa venta se envía a ese *marketplace*.   

## Chargeback
El *chargeback* o contracargo ocurre cuando un seller pierde una [disputa](https://help.vtex.com/pt/tutorial/o-que-e-uma-disputa--7KJsfF1qZILm59C0PQtdF6 "disputa") y necesita devolver el dinero al consumidor. No es un evento esperado en el flujo de la transacción, pero puede suceder. 

En ese caso, la devolución debe ser realizada por uno de los receptores del pago o por ambos. 

## Ejemplo práctico
En el contexto de split, imagine una compra cuyo valor total es USD 100. Todos los productos del carrito sumaron USD 90 y el flete fue de USD 10.

Ese es el monto que se dividirá entre el marketplace, seller y adquirente. En este ejemplo, consideraremos al marketplace como el responsable de pagar la tarifa MDR al adquirente. 

Por tanto, el monto se direccionará al marketplace para que se realice la división correspondiente. Recordemos que este tiene la opción de aplicar tarifas diferentes sobre el valor de los productos y del flete. 

Este es un posible escenario: 

- Aplicar una comisión de 5% sobre el valor del producto. Es decir, realizando los cálculos —USD 90 * 5%—, el marketplace se quedaría con USD 4,50.

- Aplicar una comisión de 20% sobre el valor del flete, que equivaldría a USD 2,00.

- La tarifa MDR es definida por el adquirente. Si consideramos un porcentaje de 2% de USD 100, entonces USD 2,00 serían para el adquirente.

De este modo, la tarifa retenida por el *marketplace* sería USD 6,50. Por su parte, el *seller* se quedaría con USD 93,50 del valor total de la compra.

Aquellos USD 6,50 serían divididos entre el *marketplace* y adquirente. Como la tarifa MDR fue USD 2, al *marketplace* le corresponde los USD 4,50 restantes.

Vea el siguiente gráfico: 

![Split de pagos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/payment-split/como-funciona-una-transaccion-con-split-de-pagos_1.png)
