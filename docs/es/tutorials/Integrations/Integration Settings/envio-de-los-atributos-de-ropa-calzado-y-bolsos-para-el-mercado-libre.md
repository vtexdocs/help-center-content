---
title: 'Envío de los atributos de ropa, calzado y bolsos para el Mercado Libre'
id: 4UKx1bbG6sqKeYW8WmYSiq
status: ARCHIVED
createdAt: 2017-12-21T14:01:04.543Z
updatedAt: 2020-03-06T13:58:47.409Z
publishedAt: 
firstPublishedAt: 2017-12-26T19:26:36.713Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: sending-clothes-shoes-and-bags-attributes-to-mercado-livre
locale: es
legacySlug: envio-de-los-atributos-de-ropa-calzado-y-bolsos-para-el-mercado-libre
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

>ℹ️ El envío de los atributos de productos de tipo Ropas, Calzados o Bolsas sigue un flujo diferente de los demás. En este proceso de mapeo, el resultado es que los SKUs se mostrarán todos en el mismo anuncio. Para los demás tipos de producto, Mercado Libre realiza un mapeo automático.

Para enviar los atributos de los productos de los tipos __Ropas__, __Calzados__ y __Bolsas__ para el Mercado Libre, siga los pasos abajo:

1. [Descargue](http://assets.contentful.com/alneenqid6w5/28ZfLnLpKEgU8ycqqIUGqw/da75dbcbc27f72881431c797a0d389f6/Modelo-SKUs-Mercado-Livre.xlsx) la planilla modelo.
2. Rellene la planilla modelo con los IDs de los SKUs a ser enviados al Mercado Libre y con los valores de atributos aceptados por Mercado Libre. Los valores aceptados se pueden encontrar en los enlaces más abajo.
3. Guarde la planilla con los valores rellenados.

>ℹ️ Los valores aceptados por Mercado Libre se pueden encontrar en los siguientes abajo. Haga clic en el nombre de su país para descargar. Usted encontrará códigos referentes a <u>Color principal</u>, <u>Color secundario</u>, <u>Talla de calzado para adultos</u>, <u>Talla de calzado para niños</u>, <u>Talla de ropa para adultos</u> y <u>Talla de ropa para niños</u>. Estos valores se deben rellenar correctamente en los campos **Color Principal**, **Color Secundario** y **Talla** de la plantilla. Con excepción del atributo <en>Color Secundario</em>, todos los demás campos son obligatorios (SKU_ID, Color principal y Talla).

__Links con los valores aceptados por Mercado Libre__:

- [Brasil](https://assets.contentful.com/alneenqid6w5/6BHWQLL9bGuMq2ycMye0uc/76e64b67cb7352d95d6bb977b33394d4/Brasil-2.zip)
- [Argentina](//assets.contentful.com/alneenqid6w5/3c61gJrH7GWOywMCGMECg4/dc7a2ce73a99d41345dde2092eb1fec6/Argentina.rar)
- [Colômbia](//assets.contentful.com/alneenqid6w5/5RePTJoKrYi4qA66WCCYKw/33910300057806b554d566210aa2310a/Colombia.rar)
- [México](//assets.contentful.com/alneenqid6w5/3Z3xgpPyvuYEAIO2me4GSG/e4f4198463d8a3ba05124a30031302fa/Mexico.rar)

Después que la planilla se llene con los valores correctos, basta con hacer el __upload en Bridge__ de VTEX. Para ello, siga estos pasos:

1. Acceda al módulo __Bridge__.
2. Haga clic en __Ajustes__.
3. En la sección de Mercado Libre, haga clic en __Carga de Mapeo__.
4. Haga clic en __Escolher Arquivo__ ("Elegir Archivo") y seleccione su planilla con los datos. Esta planilla debe estar en el formato `.xlsx`.

__Listo!__ Ahora los atributos de sus productos de los tipos __Ropa__, __Calzados__ y __Bolsas__ han sido mapeados y enviados correctamente al Mercado Libre.

## Ejemplo de relleno de la planilla

En Brasil, por ejemplo, un calzado *amarillo* con *detalles azules* de *tamaño 39* debe ser enviado al Mercado Libre con el __ID del SKU__ correspondiente y los códigos __33000_Amarelo_52007__, __43000_Azul_52092__ y __23000_39_22039__, relativos a *color principal*, *color secundario* y *talla*. Ver más ejemplos en la siguiente imagen:

![Planilha modelo ML](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Para saber más

1. Continúe la configuración de su integración con [Mercado Libre](/es/tutorial/como-integrar-con-mercado-libre) siguiendo a la sección __Configuración del template__.
2. En caso de ocurrir algún problema en el mapeo, acceda a nuestro artículo que enseña [cómo corregir errores en el mapeo de atributos](/es/faq/por-que-el-mercado-livre-retorna-errores-de-atributo-tras-el-mapeo) en Mercado Libre.
