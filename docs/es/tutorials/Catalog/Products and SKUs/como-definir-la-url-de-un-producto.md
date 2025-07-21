---
title: '¿Cómo definir la URL de un producto?'
id: frequentlyAskedQuestions_368
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.153Z
updatedAt: 2025-02-06T18:17:54.163Z
publishedAt: 2025-02-06T18:17:54.163Z
firstPublishedAt: 2019-01-24T21:55:07.896Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-to-define-the-url-for-a-product-page
locale: es
legacySlug: como-es-montada-la-url-de-producto
subcategoryId: pwxWmUu7T222QyuGogs68
---

La URL de un producto es la dirección electrónica que permite acceder a la página del producto en internet. Es importante crear una URL amigable y optimizada para que sea fácilmente localizable por los motores de búsqueda y facilite la experiencia de tu cliente en tu sitio de ecommerce.

En VTEX, la URL de un producto se compone del dominio de la tienda agregado al valor del campo obligatorio **textLink** cuando se [registra un producto](/es/tutorial/registrar-productos--tutorials_2567), más `/p`, que significa «producto». Ejemplo: en una tienda cuyo dominio es `storename.com`, al rellenar el campo textLink de un producto con `camisa-polo`, la estructura final de la URL del producto será `storename.com/camisa-polo/p`.

Puedes cambiar el campo **textLink** de un producto existente en cualquier momento en el Admin VTEX, en **Catálogo > Todos los productos > Cambiar**. Recomendamos rellenar el **textLink** con el nombre de tu producto, utilizando solo las principales palabras clave relacionadas con él.

Consulta la sección [Reglas de llenado](#reglas-de-llenado) para conocer las restricciones de este campo.

<div class="alert alert-info">
  <p>También puedes cambiar la URL de un producto utilizando la<a href="https://developers.vtex.com/docs/api-reference/catalog-api#overview"> API del Catálogo</a>. En este caso, el campo a modificar es <code>LinkId</code>. Consulta el artículo<a href="https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product"> Update product</a> para obtener más información.</p>
</div>

## Reglas de llenado

Al rellenar el campo **textLink**, deben respetarse las siguientes reglas:

- Sustituye los espacios por guiones (`-`).
- Utiliza un máximo de 50 caracteres (preferiblemente utilizar hasta 50).
- No utilices caracteres especiales como `_ ! . * ' ( ) ; : @ & = + $ , / ? % # [ ] |` o acentos como `´ ¨ ^ ~`.
- No utilices las palabras reservadas a continuación, ya que se utilizan para otras funcionalidades en VTEX y pueden generar errores si se aplican a la URL del producto:
    * `a`
    * `meta`
    * `api`
    * `admin`

<div class="alert alert-danger">
  <p>Ten en cuenta que no cumplir con las reglas de llenado del campo <strong>textLink</strong> indicadas anteriormente puede afectar el rendimiento de tu tienda, causar problemas en las búsquedas e interferir en el funcionamiento de las páginas definidas en el Admin VTEX.</p>
</div>

## Más información

- [Registrar productos](/es/tutorial/registrar-productos--tutorials_2567)
- [Llenar los campos de registro de producto](/es/tutorial/campos-de-registro-de-producto--4dYXWIK3zyS8IceKkQseke)
