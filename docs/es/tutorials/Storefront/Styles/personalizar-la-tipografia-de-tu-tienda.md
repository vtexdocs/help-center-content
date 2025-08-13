---
title: 'Personalizar la tipografía de tu tienda'
id: 2R0ByIjvJtuz99RK3OL5WP
status: PUBLISHED
createdAt: 2022-01-17T20:32:00.917Z
updatedAt: 2024-09-03T16:02:42.101Z
publishedAt: 2024-09-03T16:02:42.101Z
firstPublishedAt: 2022-01-17T21:12:52.262Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: customizing-your-stores-typography
legacySlug: personalizar-la-tipografia-de-tu-tienda
locale: es
subcategoryId: 5HsDDU48ZP58JHWU3WbCPc
---

La tipografía de tu tienda online es una herramienta para comunicar la identidad de tu marca a los clientes.
El Admin ofrece la flexibilidad de personalizar la tipografía de tu tienda según las necesidades de tu negocio.

> ⚠️ Recuerda que las modificaciones a la tipografía de la tienda realizadas en el **storefront** sustituyen a las modificaciones de tipografía realizadas en el código de la tienda. Asegúrate de comunicarte con tu equipo de desarrollo y verificar si las modificaciones se definirán en el storefront o en el código de la tienda.

## Agregar familias de fuentes personalizadas

1. En el Admin, accede a **Storefront > Estilos**.

2. Selecciona el ícono de kebab (tres puntos).

3. Haz clic en **Editar > Tipografía > Familia de fuentes**.

4. Haz clic en **Agregar fuente personalizada**.

5. En el campo **Familia de fuentes**, crea un nombre para la fuente.

    ![familia-de-fontes-giff-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Styles/personalizar-la-tipografia-de-tu-tienda_1.gif)

6. Haz clic en **Enviar** para cargar el archivo de la fuente deseada.

> ⚠️ El archivo de la familia de fuentes debe tener una de las siguientes extensiones: *.ttf* o *.woff*.

7. Después de cargar los archivos, escoge un estilo para las fuentes. Los valores aceptados son: `Thin`, `Extra Light`, `Light`, `Regular`, `Medium`, `Bold`, `Extra Bold`, `Black`, `Thin Italic`, `Extra Light Italic`, `Light Italic`, `Regular Italic`, `Medium Italic`, `Bold Italic`, `Extra Bold Italic` y `Black Italic`.

6. Haz clic en `Guardar`.

## Configurar los tokens de tipo

Después de agregar nuevas familias de fuentes, puedes aplicarlas al contenido de texto de tu tienda utilizando **tokens de tipo**.

La opción **Tokens de tipo** muestra todo el contenido de texto personalizable de tu tienda. Consulta lo que puedes personalizar utilizando los tokens de tipo:

- **Headings (Encabezados):**  son los primeros elementos que los usuarios leen y proporcionan información de forma más eficiente, sin usar más palabras de las necesarias. Hay seis encabezados. 'Heading 1' (Encabezado 1) es el estilo de encabezado más común y 'Heading 6' (Encabezado 6) es el menos común.

- **Body (Cuerpo):** es el estilo de texto definido para que los párrafos sean legibles al aumentar el espacio entre las líneas. Solo hay un tipo de cuerpo.

- **Auxiliary small/mini (Auxiliar pequeño/mini):** son elementos secundarios de una interfaz, como leyendas y textos de insignias. Hay dos tipos de auxiliares: pequeño y mini.

- **Action (Acción):** es el estilo de texto utilizado en la acción principal de la página y en elementos interactivos, como llamadas a la acción (CTA), botones y pestañas. Hay tres tipos: `Action` (Acción), `Action Small` (Acción pequeña) y `Action Large` (Acción grande).

- **Code (Código):** es el estilo de texto utilizado para indicar términos técnicos, como lenguajes de programación, cálculos de envío y reglas de cuotas.

Sigue las instrucciones a continuación para agregar nuevas familias de fuentes:

1. En el Admin, accede a **Storefront > Estilos**.

2. Selecciona el ícono de kebab (tres puntos).

3. Haz clic en **Editar > Tipografía > Tokens de tipo**.

    ![tokens-tipo-giff-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Styles/personalizar-la-tipografia-de-tu-tienda_2.gif)

4. Haz clic en el token que deseas personalizar como, por ejemplo, **Heading 1** (Encabezado 1).

5. Personaliza cada propiedad según la tabla a continuación:

    | Propiedad | Descripción | Valores disponibles |
    | ----------- | --------------- | ----------------- |
    | __Font Family__ | Define el tipo de fuente del token de tipo. | `JosefinSans`, `Bold`, `Default` |
    | __Font Weight__ | Define el grosor de los caracteres del token de tipo que se mostrarán. | `Thin`, `Extra Light`, `Light`, `Normal`, `Medium`, `Semi Bold`, `Bold`, `Extra Bold`, `Black`.   |
    | __Font Size__ | Define el tamaño de la fuente del token de tipo. | `48px`, `36px`, `24px`, `20px`, `16px`, `14px`, `12px`, |
    | __Text Transform__ | Define el uso de letras mayúsculas del token de tipo. | `Initial`, `None`, `Capitalize`, `Uppercase`, `Lowercase`, |
    | __Letter Spacing__ | Define el espacio entre los caracteres del token de tipo. | `Normal`, `Tracked`, `Tracked Tight`, `Tracked Mega`, `Zero` |

6. Haz clic en `Guardar`.
