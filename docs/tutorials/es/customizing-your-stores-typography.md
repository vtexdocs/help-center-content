---
title: 'Personalizar la tipografía de tu tienda'
id: 2R0ByIjvJtuz99RK3OL5WP
status: PUBLISHED
createdAt: 2022-01-17T20:32:00.917Z
updatedAt: 2023-03-28T12:13:42.484Z
publishedAt: 2023-03-28T12:13:42.484Z
firstPublishedAt: 2022-01-17T21:12:52.262Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slug: personalizar-la-tipografia-de-tu-tienda
locale: es
legacySlug: personalizar-la-tipografia-de-tu-tienda
subcategory: 5HsDDU48ZP58JHWU3WbCPc
---

La tipografía del sitio web de tu tienda es una herramienta para comunicar la identidad de tu marca a los clientes. 
En el Admin, tienes la flexibilidad de personalizar la tipografía de tu tienda para acomodar las necesidades de tu negocio.

>⚠️ Ten en cuenta que los cambios en la tipografía de tu tienda en el **Storefront** sobrescriben los cambios de tipografía en el código de tu tienda. Por favor, ponte en contacto con tu equipo de desarrollo y asegúrate de que los cambios se realicen en el Storefront o mediante el código de la tienda.

## Agregar familias de fuentes personalizadas

1. En el Admin VTEX, accede a **Storefront > Styles (Estilos)**.
2. Selecciona el ícono de kebab (tres puntos).

![Styles - More Options ES](https://images.ctfassets.net/alneenqid6w5/7qhmfxaMzZ8Aw0F6mygs2i/f58a158cd09d76ad56efc3876b742e2e/styles-two-es.png)

3. Haz clic en **Edit (Editar) > Typography (Tipografía) > Font Family (Familia de fuentes)**.

4. Luego, haz clic en **Add Custom Font (Agregar fuente personalizada)** y carga el archivo de fuente deseado. En el campo **Font Family (Familia de fuentes)**, ingresa un nombre para la fuente.

>⚠️ Debes cargar el archivo de la familia de fuentes utilizando las siguientes extensiones de archivo: <i>.ttf</i> o <i>.woff</i>.

5. Haz clic en Save (Guardar) para guardar los cambios. 

## Cambiar el estilo de fuente

Después de agregar nuevas familias de fuentes, puedes aplicarlas al contenido de texto de tu tienda. Sin embargo, antes de completar los pasos para cambiar el estilo de fuente de tu tienda, debes estar familiarizado con **Tokens de tipo**.

Consulta la sección [Tokens de tipo](#type-tokens) para ver más información sobre los tokens de tipo y luego revisa los pasos para cambiar el estilo de fuente.

### Pasos

1. En el Admin VTEX, accede a **Storefront > Styles (Estilos)**.
2. Selecciona el ícono de kebab (tres puntos).
3. Haz clic en **Edit (Editar) > Typography (Tipografía) >Type Tokens (Tokens de tipo)**.

![Styles - Type tokens ES](https://images.ctfassets.net/alneenqid6w5/6kw7SMB36fZsS0SKX00Kss/45b1dfaa49adb3535975be65b03938bf/styles-three-es.gif)

4. Elige el token de tipo que deseas personalizar como, por ejemplo, **Heading 1** y haz clic en él.

5. Luego, selecciona la propiedad del token de tipo que deseas personalizar:

| Propiedad | Descripción | Valor disponible |
| ----------- | --------------- | ----------------- |
| __Font Family__ | Define el tipo de fuente de un token de tipo. | `JosefinSans`, `Bold`, `Default` |
| __Font Weight__ | Define cuán gruesos o finos se deben mostrar los caracteres del token de tipo. | `Thin`, `Extra Light`, `Light`, `Normal`, `Medium`, `Semi Bold`, `Bold`, `Extra Bold`, `Black`.   |
| __Font Size__ | Define el tamaño de fuente de un token de tipo. | `48px`, `36px`, `24px`, `20px`, `16px`, `14px`, `12px`,  |
| __Text transform__ | Define el uso de mayúsculas del token de tipo. | `Initial`, `None`, `Capitalize`, `Uppercase`, `Lowercase`,  |
| __Letter Spacing__ | Define el espacio entre los caracteres del token de tipo. | `Normal`, `Tracked`, `Tracked Tight`, `Tracked Mega`, `Zero` |

6. Después de completar los cambios en el token de tipo, haz clic en `Save` (Guardar) para que los cambios se muestren en tu tienda de producción.

### Tokens de tipo

La opción **Type Tokens** (Tokens de tipo) muestra todo el contenido de texto personalizable de tu tienda. 

Ve lo que puedes personalizar utilizando los tokens de tipo:

- **Headings**
Son los primeros elementos que los usuarios leen y dan información de la manera más eficiente con el mínimo necesario de palabras. Hay seis títulos: `Heading 1` es el estilo de título más destacado y `Heading 6` es el menos destacado.

- **Body**
El cuerpo es el estilo de texto definido para lograr la legibilidad del párrafo añadiendo altura entre las líneas. Solo hay un tipo de cuerpo.

- **Auxiliary (Small and mini)**
Son los elementos secundarios de una interfaz, como las leyendas y el texto de las insignias. Hay dos tipos de auxiliares: «Small» y «mini».

- **Action**
La acción es el estilo de texto utilizado en la acción principal de la página y en los elementos interactivos, como la llamada a la acción (CTA), los botones y las pestañas. Hay tres tipos: «Action», «Action Small» y «Action Large»

- **Code**
El código es el estilo de texto que se utiliza para indicar términos técnicos, como el lenguaje de programación, el estimado de envío y las reglas de cuotas. Solo hay un tipo de código. 
