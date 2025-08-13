---
title: '¿Por qué el Mercado Livre retorna errores de atributo tras el mapeo?'
id: frequentlyAskedQuestions_3800
status: PUBLISHED
createdAt: 2017-04-27T22:24:49.012Z
updatedAt: 2019-12-31T14:25:05.554Z
publishedAt: 2019-12-31T14:25:05.554Z
firstPublishedAt: 2017-04-27T23:02:38.024Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_24
slugEN: why-does-mercado-livre-return-attribution-errors-after-mapping
locale: es
legacySlug: por-que-el-mercado-livre-retorna-errores-de-atributo-tras-el-mapeo
---

Cada categoría de producto en el Mercado Livre exige atributos distintos. Por ejemplo, para un calzado de adulto, puede ser necesario indicar en la planilla de mapeo los códigos de los atributos **Color principal** y **Tamaño de calzado para adulto**.

Por otro lado, para cada una de esas categorías de producto, algunos atributos no son aceptados. Para el mismo calzado de adulto, por ejemplo, no se puede atribuir un código relativo a **Tamaño de cinturón**.

VTEX no logra indicar exactamente qué atributos tienen que rellenarse para cada categoría, ya que éste es un criterio interno del Mercado Livre. 

Sin embargo, esos atributos son muy claros (Color principal, Color secundario, Tamaño de calzado para adulto, Tamaño de cinturón, Tamaño de ropa para bebés etc.). Deben elegirse los atributos pertinentes a cada producto.

Si alguno de esos atributos es rellenado incorrectamente (por ejemplo, si usted ha atribuido un código relativo a Tamaño de cinturón para un calzado), el Integraciones va a retornar un error con el siguiente formato:

![Shot1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/channels/por-que-el-mercado-livre-retorna-errores-de-atributo-tras-el-mapeo_1.jpg)

En este caso, tenemos dos ejemplos de errores en el mismo mensaje.

El primero de ellos indica que el atributo cuyo código empieza con el número `113000` es necesario para la categoría elegida y no fue insertado en la planilla de mapeo. Vea la planilla a continuación:

![Shot2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/channels/por-que-el-mercado-livre-retorna-errores-de-atributo-tras-el-mapeo_2.png)

El segundo error indica que el atributo cuyo código empieza con el número `63000`, insertado en la última columna de la planilla arriba es inválido para la categoría elegida.

## Cómo identificar el atributo que está ausente o que es inválido

Los códigos de cada variación de atributo empiezan con el mismo número. Por ejemplo, todos los códigos relativos a **Color principal** empiezan con 33000 y corresponden al siguiente formato: 33000_Amarillo_52007. Y los códigos relativos a **Color secundario** empiezan con 43000. Ejemplos: `43000_Azul claro_52093` y `43000_Rosa_52058`.

Para identificar el atributo indicado en el mensaje de error, consulte el número inicial de los códigos determinados por Mercado Livre. Haga clic en el nombre de su país para descargar la planilla de referencia:

- [Brasil](//assets.contentful.com/alneenqid6w5/22NlNdUIBK8qWic8cYw2sg/11c88bb0b439c7c7f8ce5909923af3d6/Brasil.zip)
- [Argentina](//assets.contentful.com/alneenqid6w5/3c61gJrH7GWOywMCGMECg4/dc7a2ce73a99d41345dde2092eb1fec6/Argentina.rar)
- [Colombia](//assets.contentful.com/alneenqid6w5/5RePTJoKrYi4qA66WCCYKw/33910300057806b554d566210aa2310a/Colombia.rar)
- [México](//assets.contentful.com/alneenqid6w5/3Z3xgpPyvuYEAIO2me4GSG/e4f4198463d8a3ba05124a30031302fa/Mexico.rar)
