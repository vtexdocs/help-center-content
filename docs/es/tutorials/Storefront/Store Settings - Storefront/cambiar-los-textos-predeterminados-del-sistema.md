---
title: 'Cambiar los textos predeterminados del sistema que aparecen en la tienda'
id: 53njoEwLpSWuyMy28SQAKS
status: PUBLISHED
createdAt: 2019-01-24T20:45:43.325Z
updatedAt: 2023-03-29T00:58:43.286Z
publishedAt: 2023-03-29T00:58:43.286Z
firstPublishedAt: 2019-01-24T22:08:58.731Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: changing-default-system-texts-displayed-in-the-store
locale: es
legacySlug: cambiar-los-textos-predeterminados-del-sistema
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

El sistema VTEX ofrece una serie de textos estándar en la tienda.

Para cada uno de estos textos, hay una __clave__ que lo identifica (una especie de nombre de la variable) y el __texto__ correspondiente (el contenido de esa variable).

Por ejemplo, en la topbar del sitio - que por defecto forma parte del subtemplate del header -, queda el mensaje de bienvenida. Este mensaje es identificado por la clave `topbarSaudacao` y, inicialmente, viene con el texto "Bienvenido!".

Para cada clave utilizada por el sistema, usted puede cambiar el texto correspondiente. Para ello, siga los pasos abajo:

1. En el Admin VTEX, accede a **Configuración de La Tienda > Storefront > Configuración**.
2. Utilice el menu dropdown para buscar la clave que quiere cambiar.
3. Cambie el texto que aparece en el campo debajo del menu.

### Variables

Algunas variables especiales están disponibles para componer textos más complejos:
- Árticulo definido
- Preposición
- Preposición en el caso locativo
- Pronombre posesivo
- Nombre de la tienda
- Dirección de la tienda en textos

Por ejemplo, desea mostrar el siguiente mensaje de bienvenida en la barra superior de la tienda: "Bienvenido a VtexArgentina".

En este caso, los términos `a` y `VtexArgentina` son especiales. El primero es una proposición, que varía de acuerdo con el nombre de cada tienda, y el segundo es el nombre de la tienda, que obviamente también varía.

Para hacer esto de manera dinámica, puedo cambiar el texto de la clave `topbarSaudacao` a lo siguiente:

`Bienvenido @preposicaonomeloja2@ @nomeloja@.`

Es decir, estoy usando las variables `preposicaonomeloja2` y `nomeloja`.

>⚠️ >
> Al utilizar variables para crear un texto, reemplace el símbolo `#` por `@`. Es decir, **#variable#** se convierte **@variable@**.

![textos-importantes es](https://images.ctfassets.net/alneenqid6w5/3Trct11oXCGe0EigiUA4g0/f701207101145a1222f5e45cb61d4073/textos_importantes_es.png)

![exemplo-textos-da-loja es](//images.ctfassets.net/alneenqid6w5/vKgZfyW6dieKAqUy242OC/f57ed59d90b2db3ae86d77b62dea3a69/3_es.png)

Como defini que el contenido de la primera variable es "a" y el de la segunda es "VtexArgentina", el texto final renderizado en el sitio será "Bienvenido a VtexArgentina".

Para cambiar fácilmente las variables especiales, que aparecen en la sección Textos Importantes, basta con hacer clic en ellas.
