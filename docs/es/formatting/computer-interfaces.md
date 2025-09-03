---
title: 'Interfaces de computadora'
id: formatting0003-es
status: PUBLISHED
createdAt: 2025-09-03T15:00:00.388Z
publishedAt: 2025-09-03T15:00:00.388Z
firstPublishedAt: 2025-09-03T15:00:00.388Z
contentType: trackArticle
productTeam: Education
slugES: interfaces-de-computadora
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugES: interfaces-de-computadora
---

> ⚠️ El siguiente contenido explica cómo referenciar elementos de la interfaz de usuario en tutoriales y guías. Para escribir textos de interfaz, consulta la sección [Interface copy](https://contentguide.vtex.com/docs/user-interfaces).

## Marcadores de posición (placeholders)

Los marcadores de posición indican dónde debe agregarse información dinámica o ingresada por el usuario. Ayudan a mantener la claridad y la consistencia al referir variables, parámetros o campos personalizables. Al documentarlos, sigue reglas de formato específicas para asegurar una redacción clara y uniforme.

Para los valores que debe ingresar el usuario, como variables en una URL, utiliza marcadores de posición entre llaves.

| ✅ Correcto | ❌ Incorrecto |
| :--- | :--- |
| <code>\{nombredelacuenta\}.myvtex.com/admin</code> | <ul><li><code>\{\{nombredelacuenta\}\}.myvtex.com/admin</code></li><li>`nombredelacuenta.myvtex.com/admin`</li></ul> |

Cuando menciones un marcador de posición dentro de un texto fluido, escribe el valor como código, sin las llaves.

| ✅ Correcto | ❌ Incorrecto |
| :--- | :--- |
| El `nombredelacuenta` debe reemplazarse con el nombre de la cuenta de tu tienda. | El <code>{nombredelacuenta}</code> debe reemplazarse con el nombre de la cuenta de tu tienda. |

## Etiquetas de acción

Las etiquetas de acción son elementos interactivos que ejecutan acciones, como botones. Su nombre y presentación deben ser claros para evitar confusiones durante la interacción del usuario. Al referir botones en guías o tutoriales, utiliza un formato estandarizado que los diferencie del resto del texto.

Cuando menciones etiquetas de acción en listas numeradas, instrucciones, texto corrido o listas con viñetas, escribe el nombre del botón con formato de código.

| ✅ Correcto | ❌ Incorrecto |
| :--- | :--- |
| <ol><li>En el módulo Marketplace, haz clic en `Marketplace e integraciones`.</li><li>En la fila de Google Shopping, haz clic en `Conectar`.</li><li>Luego haz clic en `Guardar`.</li></ol> | <ol><li>En el módulo 'Marketplace', haz clic en **Marketplace e integraciones**.</li><li>En la fila de *Google Shopping*, haz clic en "Conectar".</li><li>Luego haga clic en “Guardar”.</li></ol> |

## Etiquetas de contenido

Las etiquetas de contenido, como títulos, menús y encabezados de columnas, brindan estructura y facilitan la navegación. Mantener la consistencia en su presentación mejora la experiencia del usuario al interactuar con la interfaz. Al referir etiquetas de contenido en guías o tutoriales, utiliza un formato adecuado que las distinga del texto común y mejore la legibilidad.

Usa negrita en texto fluido para elementos de la interfaz como títulos, nombres de módulos, secuencias que incluyan etiquetas de contenido entre símbolos de mayor que (>), y elementos de tablas.

| ✅ Correcto | ❌ Incorrecto |
| :--- | :--- |
| <ul><li>Selecciona la columna **Status**.</li><li>Accede al Admin y en el módulo **Productos**, haz clic en **Configuración de la tienda** > **inStore** > **Identificación del cliente**.</li></ul> | <ul><li>Selecciona la columna `Status`.</li><li>Accede al Admin y en el módulo **Productos**, haz clic en `Configuración de la tienda` > `inStore` > `Identificación del cliente`.</li></ul> |

## Íconos

Los íconos comunican funcionalidades de forma visual, pero deben equilibrar estética y accesibilidad, por lo que su uso requiere cuidado. Al referirte a íconos en guías o tutoriales, incluye tags descriptivas y aplica un formato adecuado.

Los íconos se incluyen en el texto para representar un ícono de la interfaz que facilite el reconocimiento por parte del usuario mientras lee la documentación. Al insertar íconos en el texto, recuerda agregar una tag descriptiva para mejorar la accesibilidad.

*   En documentación, se recomienda colocar el ícono después de la tag.
*   El ícono debe ser el mismo que se muestra en la interfaz. Si no hay un ícono en la interfaz, no lo uses.

| ✅ Correcto | ❌ Incorrecto |
| :--- | :--- |
| Utiliza la barra de búsqueda indicada por el ícono lupa 🔍 | <ul><li>Utiliza la barra de búsqueda indicada por el ícono lupa</li><li>Utiliza la barra de búsqueda indicada por el 🔍 ícono lupa.</li><li>Utiliza la barra de búsqueda 🔍 indicada por el ícono lupa.</li></ul> |

Al agregar un ícono en HTML, incluye el atributo `aria-hidden="true"` para que los lectores de pantalla ignoren la tag HTML del ícono embebido.

> ℹ️ Los lectores de pantalla pueden verse interrumpidos por los iconos embebidos si `aria-hidden = false`, lo que podría impedir que terminen de leer la oración.

| ✅ Correcto | ❌ Incorrecto |
| :--- | :--- |
| Haz clic en el botón de búsqueda `` `<i class="fas fa-search" aria-hidden="true"></i>` ``. | Haz clic en el botón de búsqueda `` `<i class="fas fa-search"></i>` ``. |
