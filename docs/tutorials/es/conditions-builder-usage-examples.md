---
title: 'Conditions Builder - Ejemplos de uso'
id: 3xrod1IDw4ucywYOg4cm6E
status: DRAFT
createdAt: 2018-06-25T15:13:10.190Z
updatedAt: 2020-03-13T21:24:58.470Z
publishedAt: 
firstPublishedAt: 2018-06-25T18:37:29.930Z
contentType: tutorial
productTeam: VTEX IO
author: 7kumplNTMIsWYGeeegCqO8
slug: conditions-builder-ejemplos-de-uso
legacySlug: conditions-builder-ejemplos-de-uso
subcategory: 3e2VLdLao8GGk4sAmMmwmi
---

El objetivo de este artículo es mostrar algunos ejemplos de condiciones que se pueden crear utilizando la app *Conditions Builder*.

Para entender __cómo__ utilizar la app con más detalles, vea el artículo [Cómo usar el app Conditions Builder](http://help.vtex.com/es/tutorial/como-usar-el-app-conditions-builder). 
Para entender __para qué__ crear condiciones, vea el artículo [Crear Precios Condicionales](http://help.vtex.com/es/tutorial/crear-precios-condicionales). 

## Condiciones por UTM

UTM (Marketing tag) es una información que se refiere al origen del tráfico del cliente. Entonces, en el app existe un bloque que comprueba este tipo de información.

![utm_source_english](//images.ctfassets.net/alneenqid6w5/1eC4fEARZG84MYiSmekSIm/5c784e46e4ab63487f183f7cd2060ea9/utm_source_english.png)

<div class="alert alert-warning"><strong>Nota: </strong>
Es posible que su tienda utilice personalización y, por eso, las informaciones de UTM contenidas en la URL no se están pasando a nuestro sistema. Si utiliza personalización de Javascript, lea el artículo <a href="https://help.vtex.com/es/faq/por-que-las-utms-no-se-aplican-al-carrito">¿Por qué las UTMs no se aplican al carrito?</a>
</div>

### utm_source

__utm_source__ informa el __origen__ de su cliente hasta su tienda. En el caso de la imagen, el bloque verifica si ese origen fue *website Facebook*

### utm_campaign

__utm_campaign__ informa en __cuál campaña__ específicamente su cliente ha hecho clic. En el caso de la imagen, el bloque verifica si esa campaña fue *día de los enamorados*. 

### utm_medium

__utm_medium__ informa cuál __canal de propaganda__ alcanzó a su cliente que puede ser, por ejemplo, Email o Banner en un website. En el caso de la imagen, el bloque comprueba si el canal fue *email*.

![utmenglish](//images.ctfassets.net/alneenqid6w5/4lFJ73jp9Cysoes6igUKO2/6e099fe8ff1600fc165ef4c1b008bdaa/utmenglish.png)
  
Para cada uno de estos bloques, usted tiene la opción de verificar si:

1. el valor __es exactamente__ lo que usted quiere -> utm_source es (facebook)
2. el valor __no es exactamente__ lo que usted quiere -> utm_source no es (facebook)
3. el valor __contiene__ una palabra que usted quiere -> utm_source contiene (face)
4. el valor __no contiene__ una palabra que usted quiere -> utm_source no contiene (face)

### Ejemplo

Vamos a suponer que usted quiere que, para un cierto producto, el precio sea especial si su cliente hizo clic en el *banner* del día de las madres que recibió por email.
Luego usted tiene que crear una condición que verifica si el __utm_medium__ es `email` y si el __utm_campaign__ es `dia_de_las_madres`.


## Condiciones del carrito de compra

Hay 3 bloques que se refieren a los ítems contenidos en el carrito de compra del usuario:

### Cantidad Total

Este bloque analiza la cantidad de ítems en el carrito como un todo.

- __como mínimo__ -> verifica si en el carrito de compra del usuario existe __3 o más ítems__.
- __como máximo__ -> verifica si en el carrito de compra del usuario existe __3 o menos ítems__.

### Cantidad de un SKU específico
Este bloque analiza la cantidad del ítem específico al que se va a acoplar en el [*Conditional Price*]( http://help.vtex.com/es/tutorial/crear-precios-condicionales)

- __como mínimo__ -> verifica si en el carrito de compra del usuario __3 o más de aquel ítem__.
- __como máximo__ -> verifica si en el carrito de compra del usuario existe __3 o menos de aquel ítem__.
- __exactamente__ -> verifica si en el carrito de compra del usuario existe __exactamente 3__cantidades de aquel__ítem específico__.

### Valor total

Este bloque analiza el valor total que existe en el carrito.

- __como mínimo__ -> verifica si la __suma de los valores__ de los ítems en el carrito vale __100 reales o más__.
- __como máximo__ -> verifica si la __suma de los valores__ de los ítems en el carrito vale __100 reales o menos__.

### Ejemplo

Vamos a suponer que usted quiera dar un precio más barato a un champú si el cliente está llevando __exactamente 3 unidades__, pero, además de eso, debe estar llevando __como mínimo 150 reales__ en compras. La condición que se creará será:

![Exemplo2](//images.ctfassets.net/alneenqid6w5/11Z9LujUl66G80yGQyKI6S/fa33819d9e0ef37113466e3612d370d5/exemplo2.png)  

*cantidad de este artículo en el carrito es **exactamente** 3
**Y**
valor total del carrito es **como mínimo** $150*

