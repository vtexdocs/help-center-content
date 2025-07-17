---
title: 'Atributo de especificaciones de producto - XML Google Shopping'
id: tutorials_100
status: PUBLISHED
createdAt: 2017-04-27T22:19:40.955Z
updatedAt: 2025-06-12T20:41:17.144Z
publishedAt: 2025-06-12T20:41:17.144Z
firstPublishedAt: 2017-04-27T23:00:42.099Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: product-specifications-attribute-googleshopping-xml
locale: es
legacySlug: atributo-de-especificaciones-de-producto-xml-googleshopping
subcategoryId: 2OCA7SVfWoMSiAi0GEGwKo
---

Después de la [actualización hecha por Google](/es/tutorial/como-se-hace-la-actualizacion-del-xml) en septiembre de 2015, algunas tags de atributo utilizadas en el feed de productos pasaron a tener valores predefinidos que son exigidos en el idioma **inglés** y todo en **letras minúsculas**.

Así es para que se pueda integrar los productos en Google Shopping y tener una mejor adherencia de categorización.

Como la plataforma de la VTEX permite que cada cliente estructure y formule cómo desear esa serie de atributos, no hay cómo mapear todos y convergirlos en sólo una variación de dos o tres valores.

Esto es, pensando en la tag para el atributo de **género** (para el Google: **gender**), donde podremos tener una variación desde &#8220;Masculino&#8220;/&#8221;Femenino&#8221; hasta &#8220;Niños&#8220;/&#8221;Niñas&#8220;, &#8220;Muchachos&#8220;/&#8221;Muchachas&#8220;, entre otros.

Para feeds que poseen productos de la categoría &#8216;**Vestuario y accesorios**&#8216; será obligatoria la inserción de los atributos:

- `'género'[g:gender]`
- `'edad'[g:age_group]`
- `'disponibilidad'[g:availability]`
- `'condición'[g:condition]`

Se deberá rellenar atributos como `'tamaño'[g:size]` y `'color' [g:color]` con el valor de la propia especificación creada.

El tratamiento de esa demanda deberá ser realizada por medios de las Especificaciones de Producto.

Creando un Grupo abarcando los atributos descriptos más arriba de forma a cumplir con el estándar de valor exigido para XML del Google Shopping.

## Cómo hacer

### Grupo

Crearemos un **Grupo** de nombre &#8220;Atributos Google&#8221; en la categoría raíz de la Tienda:

1.En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Categorías__.
3. Haga clic en la categoría raíz.
   Al hacer esto, la categoría seleccionada aparece resaltada, acompañada del botón `Acciones`.
5. Haga clic en el botón `Acciones` y, en las opciones que se abren, haga clic en __Grupo__.
6. Haga clic en el botón `Nuevo Grupo` para agregar un nuevo grupo.
7. Usted será redirigido a una pantalla, donde debe llenar el nombre y confirmar la categoría en la que está creando el grupo.
8. Haga clic en `Salvar`.

### Casilla de producto

Aquí será necesario crear cuatro casillas para cada siguiente atributo discutido más arriba: **gender, age\_group, availability** y **condition**.

#### Cómo crear una casilla de producto

1.En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Categorías__.
3. Haga clic en la categoría raíz.
   Al hacer esto, la categoría seleccionada aparece resaltada, acompañada del botón `Acciones`.
5. Haga clic en el botón `Acciones` y, en las opciones que se abren, haga clic en __Campo (Producto)__.
6. En la pantalla que se abre, haga clic en el botón `Nuevo Campo` para agregar un nuevo campo de producto.

Vas a ver las opciones abajo:

- __Nombre:__ gender/age\_group/availability/condition.
- __Texto:__ descripción sobre la Casilla.
- __Tipo:__ Radio.
- __Grupo:__ seleccionar el grupo creado anteriormente &#8220;Atributos Google&#8221.
- __Filtro:__ se lo utilizará como filtro en la navegación del sitio web.
- __Obligatorio:__ no es necesario.
- __Exhibe Especificación:__ no es necesario.
- __Link en el Menú Superior:__ no es necesario.
- __Link en el Menú Lateral de filtros:__ no es necesario.
- __Activo:__ Activa o Inactiva la casilla en el catastro del producto.

### Valores de atributos

Aquí tendremos de catastrar los **valores predefinidos** que compondrán el catastro del producto:

Ya con la casilla creada más arriba, haga clic en el botón de acción y luego en __Valores__. En este, rellene los valores del siguiente estándar:
- **gender**: sólo puede ser "male", "female"y "unisex";
- **age\_group**: sólo puede ser "newborn", "infant", "toddler", "kids" y "adult";
- **availability**: sólo puede ser "in stock", "out of stock" y "preorder";
- **condition**: sólo puede ser "new", "used" y "refurbished";

Es posible crear los valores de una vez sola, basta quebrar línea para cada uno.

Basta guardar y se listarán los valores.

Así hecho, basta definir en el XML del Google Shopping los atributos siguiendo lo estructura más arriba.

Vea [Cómo Configurar XML del Google Shopping](/es/tutorial/como-configurar-xml-google-shopping--frequentlyAskedQuestions_372) para guiarse en la configuración de XML.
