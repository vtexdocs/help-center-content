---
title: 'Cómo configurar XML'
id: tutorials_242
status: PUBLISHED
createdAt: 2017-04-27T22:12:41.700Z
updatedAt: 2023-03-14T17:46:51.658Z
publishedAt: 2023-03-14T17:46:51.658Z
firstPublishedAt: 2017-04-27T23:03:10.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: como-configurar-xml
locale: es
legacySlug: subiendo-un-xml-de-productos
subcategory: 2OCA7SVfWoMSiAi0GEGwKo
---

XML es un lenguaje de marcado que permite la comunicación entre computadoras y aplicaciones. Su principal característica es la estructura jerárquicamente organizada para la creación de textos, bases de datos o diseños vectoriales. 

El lenguaje XML puede combinarse con distintos estándares, lo que hace posible que un XML creado a partir de la base de datos A pueda ser leído por la base de datos B. 

La funcionalidad de configuración XML en VTEX hace uso de esta característica de poder combinar diferentes estándares para permitir a otras bases de datos leer las estructuras creadas por la base de datos VTEX. 

Esto significa que al llenar los nombres de las *tags* en el campo __Producto_Id__, por ejemplo, con __Product_Id__, la base de datos VTEX entenderá que debe llenar esta información, haciendo posible que Google, Facebook, Buscapé, entre otros, que leerán la estructura, puedan entenderla.

He aquí algunos ejemplos de *partners* que se integran con VTEX XML:

- Afilio
- Buscapé
- Criteo
- Facebook
- Google
- MSN
- Sociomantic
- UOL
- UOL Dynad
- Zanox

<div class = "alert alert-info">
  <p>Los cambios en XML tardan en promedio dos horas en actualizarse.</p>
</div>

## Nuevo XML

Antes de realizar el registro de un nuevo XML, es importante tener acceso a la estructura del sistema al que desea exportar su catálogo. Es decir, necesitarás conocer los nombres de las *tags* que son utilizadas por su XML y qué información requieren para que esta estructura sea armada, por ejemplo ID de Producto, Nombre de Producto, ID de SKU, Nombre de SKU, Precio, entre otros.

Con esto en manos, siga los siguientes pasos para configurar su XML:

1. En el Admin VTEX, accede a __Configuración de la tienda__, o escribe __Configuración de la tienda__ en la barra de búsqueda en la parte superior de la página.
2. En __Canales__, haga clic en __Integración XML__.
3. Haga clic en el botón `Nuevo XML`.
4. Seleccione el __Tipo de XML__.
5. Rellene el nombre del archivo, para identificarlo en la lista de XMLs.
6. Seleccione el __Tipo de codificación__.
7. Defina la colección cuyos productos se listarán.
8. Seleccione el símbolo de moneda en los precios.
9. Elija el formato de los precios (con o sin separador de mil).
10. Seleccione entre utilizar el separador de categorías estándar o de Google Shopping (lea más sobre configuraciones para XML de Google Shopping en el artículo [Estándar de valor para Atributo de Especificaciones de Producto - XML GoogleShopping)](/es/tutorial/atributo-de-especificaciones-de-producto-xml-googleshopping).
11. Elija si exhibirá en el sitio web del marketplace los SKUs indisponibles o no, es decir, si el producto será exhibido para compra, aunque no esté disponible para entrega inmediata.
12. Seleccione si quiere que el producto sea exhibido con las informaciones del SKU estándar.
13.A partir de aquí debe rellenar los tags según lo definido por el sistema al que enviará el XML. Debe seleccionar la casilla __Exhibe contenido__ en los tags que haya ingresado el nombre. Los tags que ya estén con esa opción seleccionada  y no es posible deshacer la selección son obligatorios.
14. La URL utilizada para acceder al XML se genera automáticamente, conforme al [dominio registrado en el diccionario del Sitio Web](https://help.vtex.com/es/tutorial/configurar-dominio-del-xml--2RkGK4vHS0c6sYuUw0cUWC), en el CMS.

<div class="alert alert-warning">
  <p>Si la política comercial tiene restricción de acceso, el XML no se generará.</p>
</div>

## Conectores nativos: una alternativa a XML para integrar con marketplaces

La integración con marketplaces puede ser configurada por conector nativo desarrollado por VTEX, que debiera ser su elección estándar ya que es más eficiente. En la actualidad, la plataforma VTEX cuenta con los siguientes conectores nativos:

- [Amazon](https://help.vtex.com/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP)
- [B2W](https://help.vtex.com/es/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk)
- [Mercado Livre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq)
- [Magazine Luiza](https://help.vtex.com/es/tracks/configurar-integracao-com-o-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y)
- [Carrefour](https://help.vtex.com/es/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2)
- [Centauro](https://help.vtex.com/es/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj)
- [Wish](https://help.vtex.com/es/tracks/integracao-com-a-wish--50hbG4bzhSIhjz1lzqI1g4)
- [Facebook](https://help.vtex.com/es/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc)
- [Google Shopping](https://help.vtex.com/es/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw)
- [Google Shopping Ads](https://help.vtex.com/es/tracks/como-fazer-campanhas-atraves-do-google-ads--47kz5PRQPK0IEaqGqiIuA)
- [Via Varejo](https://help.vtex.com/es/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY)
- [Dafiti](https://help.vtex.com/es/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i)
- [Netshoes](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm)
