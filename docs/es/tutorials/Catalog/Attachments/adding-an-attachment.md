---
title: 'Registrar un anexo'
id: 7zHMUpuoQE4cAskqEUWScU
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.901Z
updatedAt: 2023-11-16T17:23:31.034Z
publishedAt: 2023-11-16T17:23:31.034Z
firstPublishedAt: 2019-01-24T22:06:25.639Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: registrar-un-anexo
locale: es
legacySlug: registrar-un-anexo
subcategoryId: 1hoOi2R0Rm6ky0yCwOUoiy
---

El objetivo de un anexo es [complementar el producto con una información personalizada](https://help.vtex.com/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm). Para registrar un anexo, debe realizar el siguiente paso a paso en el Admin VTEX.

1. En el Admin VTEX, accede a **Catálogo**, o escribe en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Campos personalizados**.
3. Haga clic en `Nuevo anexo`.
4. Complete los campos referentes al anexo:
    * **Nombre:** es el nombre del anexo que desea registrar. El nombre debe ser único en el sistema y no puede contener caracteres especiales, solo letras, números o puntos. Este campo es obligatorio.
    * **Anexo obligatorio:** define si el anexo será obligatorio u opcional cuando el cliente adquiera el producto.
    * **Status:** activa o desactiva el anexo en su tienda.
5. Haga clic en `Guardar`.

## Añadir claves y valores permitidos

Después de realizar el registro inicial del anexo, es necesario añadir las claves y los **Valores permitidos** relacionados con el anexo creado. Puede añadir las claves que desee. Para añadir las claves y los **Valores permitidos**, realice los siguientes pasos.

1. En la página **Campos personalizados**, identifique la línea del anexo creado y haga clic en `Editar`, como se ilustra en la siguiente imagen.
    ![anexos.pt](//images.ctfassets.net/alneenqid6w5/4hSZgKMwFjJ3fE2Tfek60C/e56ba5ba51d3c9e60593faa82eb4d790/custom-product-attributes-es.PNG)
2. Complete los campos indicados a continuación.
    * **Nombre de la clave:** nombre de la información personalizada. Este campo es obligatorio y no puede contener caracteres especiales, solo letras, números o puntos. Ejemplo: si el producto personalizable es una camiseta de la selección brasileña, los nombres de sus claves pueden ser `Nombre` y `Número`.
    * **Máximo de caracteres:** número máximo de caracteres que el cliente puede digitar para introducir una información personalizada en el producto. Este campo es obligatorio. Ejemplo: en este campo puede definir el límite de caracteres para el nombre que se imprimirá en una camiseta.
    * **Valores permitidos:** valores que el cliente de su tienda puede seleccionar para la personalización como tal, separados por comas. Ejemplo: cuando completa este campo con `5,7,9,10`, usted puede permitir que su cliente opte por incluir uno de estos números en una camiseta.
3. Haga clic en `Insertar nuevo`. Si lo desea, puede registrar otras claves repitiendo este proceso.
4. Para finalizar, haga clic en `Guardar`.

>⚠️ Es obligatorio completar el campo **Máximo de caracteres**. Si este campo no se completa, el anexo no aparecerá como una opción de selección en el carrito de su cliente.

## Asociar el anexo a un SKU

Después de crear el anexo de SKU y de configurar las claves y los valores permitidos, debe asociar el anexo creado a uno o más SKU existentes. Para realizar esto en el VTEX Admin, realice los siguientes pasos.

1. En el Admin VTEX, accede a **Catálogo**, o escribe en la barra de búsqueda en la parte superior de la página.
2. Acceda a **Todos los productos**.
3. Seleccione el SKU al que desea asociar el anexo.
4. Acceda a la pestaña **Configuraciones avanzadas**.
5. Asocie el anexo que creó, marcando la casilla de selección.
6. Haga clic en `Guardar`.

También puede asociar un anexo al SKU [por API](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuattachment), si lo desea.

>⚠️ VTEX no controla el stock de un anexo. Esta es la función del marketplace o del seller.
