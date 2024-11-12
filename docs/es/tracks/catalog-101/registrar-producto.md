---
title: 'Registrar Producto'
id: 1ROhz3Y7mfSMmCO1I1GxEL
status: PUBLISHED
createdAt: 2019-05-21T20:07:43.400Z
updatedAt: 2023-03-29T14:47:12.594Z
publishedAt: 2023-03-29T14:47:12.594Z
firstPublishedAt: 2019-06-14T16:20:32.543Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-products
locale: es
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugES: catalogo-101
---

Hay tres formas de registrar un producto: en el Admin VTEX, por plantilla o por API.

Antes de crear un producto, debe haber creado la __Marca__ y la __Categoría__ que le corresponden. Ambas deben estar activas para que el producto sea registrado.

Consulte las siguientes secciones de este artículo para registrar sus productos.

## Admin VTEX

En el Admin VTEX, realice los siguientes pasos:

1. Haga clic en __Catálogo__.
2. Haga clic en __Todos los productos__.
3. Haga clic en `Agregar producto`.
4. Rellene los campos del formulario de producto. Para entender mejor el significado de cada campo, acceda a nuestro artículo sobre los [campos de registro de producto](https://help.vtex.com/es/tutorial/campos-de-registro-de-producto--4dYXWIK3zyS8IceKkQseke).
5. Haga clic en `Guardar` o `Guardar y registrar nuevo SKU`, si quiere agregar SKUs asociados a este producto.

![Catalogo - Cadastrar produto ES.gif?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Plantilla

Para registrar sus productos por plantilla, recomendamos que los registre junto con los SKUs. Puede verificar el procedimiento en el artículo [Registrar SKU](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ).    

## API
Utilice la llamada [Create Product](https://developers.vtex.com/vtex-rest-api/reference/post-product) para crear un nuevo producto por medio de la API del Catálogo.

>ℹ️ Si su producto no aparece en el sitio web de su tienda después del registro, consulte el artículo [¿Por qué el producto no aparece en el sitio?](https://help.vtex.com/es/faq/por-que-el-producto-no-aparece-en-el-sitio--frequentlyAskedQuestions_382) para entender cómo resolver este problema.

