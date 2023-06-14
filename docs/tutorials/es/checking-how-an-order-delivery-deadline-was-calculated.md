---
title: 'Comprobar cómo se calculó el plazo de entrega de un pedido'
id: 6Qj4Y9TIYMOKGk2MOwaSEq
status: PUBLISHED
createdAt: 2018-01-12T13:16:12.591Z
updatedAt: 2023-03-29T20:46:38.254Z
publishedAt: 2023-03-29T20:46:38.254Z
firstPublishedAt: 2018-01-12T14:11:38.576Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: comprobar-como-se-calculo-el-plazo-de-entrega-de-un-pedido
locale: es
legacySlug: comprobar-como-se-calculo-el-plazo-de-entrega-de-un-pedido
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Usted puede verificar cómo el plazo de entrega de un pedido fue calculado por medio de lo __Simulador de envío__, en el módulo __Envío__.

### Ejemplo

Digamos que usted desea saber cuáles fueron los criterios que la plataforma utilizó para calcular el tiempo de entrega del pedido de ID `930221070506-01`, realizado el 06 de Mayo.

En primer lugar, vamos a acceder a la página Todos los Pedidos para ver el pedido.

![1](https://images.ctfassets.net/alneenqid6w5/xkTs21R8sUe67U2UynJDC/047786ceb646c4545fd1bada4dec38a0/1.png)
> En la esquina superior derecha, está la __fecha en la que se realizó el pedido__ (06 MAYO).
> Y en el inferior, se puede ver el __plazo de entrega del pedido__ (22 MAYO).

Ahora vamos a entrar en el módulo __Envío__ y simular el flete de ese pedido.

Para ello, siga los pasos abajo:
1. En el Admin VTEX, accede a **Envío > Simulador de envío**, o escribe *Simulador de envío* en la barra de búsqueda en la parte superior de la página.  
2. Introduzca el nombre o el ID de cada SKU que estaba en el carrito del pedido que usted desea investigar, incluyendo la cantidad de cada uno de ellos.![2](https://images.ctfassets.net/alneenqid6w5/4imJypzFvYSmMeQij3XLjp/429d397d9bec73f104cff43053b3c6a0/2.png)
3. Introduzca el código postal del pedido.
4. Haga clic en __Simular envío__.

En el ejemplo siguiente, tenga en cuenta que 4 transportistas fueron considerados, y 12 fueron desconsiderados.

![3](https://images.ctfassets.net/alneenqid6w5/5k78O44E8Nr8nrTkBoe6MX/5d17f0a86264d1d09befbba43b0b1339/3.png)

Al consultar una vez más la pantalla del pedido en el módulo OMS, vemos que el tipo de entrega elegido por el cliente para ese pedido fue el __Expressa__, y que la transportista elegida por la plataforma para realizar la entrega fue __Expressa & CO__.

![4](https://images.ctfassets.net/alneenqid6w5/2LjWMpCXtfH3lMYgAAjc7s/b62a52b045292c305143286ebcf93b88/4.png)

Por lo tanto, volviendo a la simulación de flete, en el menu Envío, concluimos que la tercera opción fue la elegida en ese pedido - y que, por lo tanto, el plazo de entrega total del pedido fue de 12 días.

![5](https://images.ctfassets.net/alneenqid6w5/25KVkamW576ta3MkOpuYaN/2ae8577822b36650afe8153ebe4c6127/5.png)

Ahora basta con hacer clic en __detallar__ para ver los tiempos de costo que se utilizaron para calcular el plazo de entrega.

![6](https://images.ctfassets.net/alneenqid6w5/42029fSPhJS5KKdio01gzh/dd0d9612093783f0cddf259f1b2e5798/6.png)

Cada uno de los tres tiempos de costo corresponde a lo que se definió para las tres etapas de la ruta de logística: stock, muelle y transportadora.

### Artículos relacionados

- [Cómo se calcula el plazo de entrega del pedido](/es/tutorial/como-se-calcula-el-plazo-de-entrega-del-pedido)
