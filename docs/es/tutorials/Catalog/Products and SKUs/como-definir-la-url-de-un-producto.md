---
title: '¿Cómo definir la URL de un producto?'
id: frequentlyAskedQuestions_368
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.153Z
updatedAt: 2023-03-29T14:51:40.299Z
publishedAt: 2023-03-29T14:51:40.299Z
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

En VTEX, la URL de un producto se compone del dominio de la tienda agregado al valor del campo obligatorio **textLink** cuando se [registra un producto](https://help.vtex.com/es/tutorial/registrar-productos--tutorials_2567), más `/p`, que significa «producto». Exemplo: em uma loja cujo domínio é `nomedaloja.com`, ao preencher o campo **textLink** de um produto com `camisa-polo`, a estrutura final da URL do produto será `nomedaloja.com/camisa-polo/p`.

Puedes cambiar el campo **textLink** de un producto existente en cualquier momento en el Admin VTEX, en **Catálogo > Todos los productos > Cambiar**. Recomendamos rellenar el **textLink** con el nombre de tu producto, utilizando solo las principales palabras clave relacionadas con él.

Consulta la sección [Reglas de llenado](#reglas-de-llenado) para conocer las restricciones de este campo.

![textlink.es](//images.ctfassets.net/alneenqid6w5/7Fn3c82EFti8PUc2qME3Xa/74abc336ae433344083479d28014696d/textlink.es.png)

>ℹ️ También puedes cambiar la URL de un producto utilizando la[ API del Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#overview). En este caso, el campo a modificar es `LinkId`. Consulta el artículo[ Update product](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product) para obtener más información.

## Reglas de llenado

Al rellenar el campo **textLink**, deben respetarse las siguientes reglas:

- Sustituye los espacios por guiones (`-`).
- Utiliza un máximo de 50 caracteres.
- No utilices caracteres especiales como `! . * ' ( ) ; : @ & = + $ , / ? % # [ ] |` o acentos como `´ ¨ ^ ~`.
- No utilices las palabras reservadas a continuación, ya que se utilizan para otras funcionalidades en VTEX y pueden generar errores si se aplican a la URL del producto:
    * `a`
    * `meta`
    * `api`
    * `admin`

>❗ Ten en cuenta que no cumplir con las reglas de llenado del campo **textLink** indicadas anteriormente puede afectar el rendimiento de tu tienda, causar problemas en las búsquedas e interferir en el funcionamiento de las páginas definidas en el Admin VTEX.

## Más información

- [Registrar productos](https://help.vtex.com/es/tutorial/registrar-productos--tutorials_2567)
- [Llenar los campos de registro de producto](https://help.vtex.com/es/tutorial/campos-de-registro-de-producto--4dYXWIK3zyS8IceKkQseke)
