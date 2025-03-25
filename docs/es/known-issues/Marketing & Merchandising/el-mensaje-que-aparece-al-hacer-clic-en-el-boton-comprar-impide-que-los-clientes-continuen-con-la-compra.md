---
title: 'El mensaje que aparece al hacer clic en el botón Comprar impide que los clientes continúen con la compra'
id: 3i3eys6d4MWnt0E611OdPH
status: PUBLISHED
createdAt: 2021-10-13T16:50:22.116Z
updatedAt: 2022-12-22T20:40:58.474Z
publishedAt: 2022-12-22T20:40:58.474Z
firstPublishedAt: 2021-10-13T16:56:30.403Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: message-displayed-when-clicking-the-buy-button-prevents-customers-from-proceeding-with-the-purchase
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando varios SKU del mismo producto tienen la misma combinación de especificaciones y el cliente selecciona uno de ellos en la página de producto, se muestra el mensaje _"Por favor selecione o tamanho desejado"_ (por favor, seleccione una talla), y el cliente no puede añadir el producto al carrito.

## Simulación

1. Crea un producto que tenga más de dos SKU con al menos dos especificaciones y dos valores para cada especificación.
2. Selecciona la misma combinación de valores de especificación para cada SKU (mira un ejemplo a continuación).
3. Ve a la página del producto e intenta comprarlo. 

Ejemplo: 

Tienes el producto camiseta con cuatro SKU. Sus especificaciones son **"Talla"** y **"Color"**, con las opciones **"S"**, **"M"** y **"L"** para la talla y **"Rojo"** o **"Azul"** para el **Color**. 

En la página `SkuForm.aspx`, selecciona las siguientes especificaciones:

- **SKU #1:** Talla = L y Color = Rojo
- **SKU #2:** Talla = L y Color = Rojo
- **SKU #3:** Talla = M y Color = Rojo
- **SKU #4:** Talla = M y Color = Azul 

Si seleccionas el SKU #1 o el SKU #2 en la página del producto, no podrás ir al checkout debido al problema mencionado anteriormente.

## Workaround

Una posible solución es editar los valores de especificación de uno de los SKU que tienen los mismos valores.

