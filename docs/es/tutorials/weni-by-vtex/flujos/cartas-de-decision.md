---
title: 'Cartas de decisión'
id: 3V6NZBfEuJpNQCumY3p5Sg
status: PUBLISHED
createdAt: 2025-09-16T16:52:15.475Z
updatedAt: 2025-10-03T14:20:03.824Z
publishedAt: 2025-10-03T14:20:03.824Z
firstPublishedAt: 2025-10-03T14:20:03.824Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: decision-cards
legacySlug: cartas-de-decision
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Las cartas de decisión son una parte muy importante para las construcciones lógicas de nuestros flujos. En la [introducción a flujos](https://docs.weni.ai/l/pt/fluxos/introducao-a-fluxos) hablamos un poco sobre el concepto de estas cartas, y ahora vamos a entender un poco más sobre su anatomía y los tipos que existen dentro de la plataforma.

Para facilitar la navegación por este artículo, si deseas ir directamente a un tema específico, solo haz clic en su nombre a continuación:
  * Rutas y reglas de decisión
  * Resultados de flujo
  * Esperar la respuesta del contacto
  * Dividir por expresión personalizada
  * Dividir por campo de contacto
  * Dividir por resultado del flujo
  * Dividir por probabilidad aleatoria
  * Dividir por membresía de grupo
  * Dividir por tipo de URN
  * Dividir por intención

#### Rutas y reglas de decisión

##### ¿Qué son las rutas?

La mayor diferencia entre las cartas de decisión y las cartas de acción es la creación de rutas. Estas rutas son posibles caminos que una conversación puede tomar según alguna respuesta o algún dato del contacto, es decir, la finalidad de todas las cartas de decisión es crear rutas para cada regla y, así, ramificar nuestro flujo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_1.png)

Cada ruta tiene un nombre/categoría y sigue una regla de decisión. Puedes ver en las conexiones de tus rutas la cantidad de contactos que ya han seguido ese camino en tu flujo.

La ruta **Otro** es una ruta predeterminada que existe para el caso en que el valor analizado no coincida con ninguna de las reglas de decisión creadas. Todas las cartas de decisión, al tener una regla definida, también crean la ruta **Otro**.

##### Reglas de decisión

Las reglas de decisión son un conjunto de normas que utilizamos para crear rutas, es decir, parámetros que se verificarán para decidir si un contacto debe o no seguir ese camino.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_2.png)

Para utilizar una regla de decisión, solo necesitas seleccionar el tipo de regla, luego ingresar el valor para comparación y, por último, definir la categoría/nombre de la ruta a la que pertenece esa regla. Cada nombre de categoría diferente generará una nueva ruta con ese mismo nombre. Si creas más de una regla pero las nombras con la misma categoría, todas las reglas apuntarán a la ruta con ese nombre.

Las reglas son evaluadas por la plataforma en forma de pila, de arriba hacia abajo. Si tienes reglas más específicas que podrían ser abarcadas por opciones más generales, es importante colocar las reglas específicas en la parte superior y las más generales al final de la lista.

Actualmente, existen 24 reglas de decisión en la plataforma, que pueden agruparse en 4 categorías. Consulta a continuación:

#### Palabras y frases:

Son las reglas que analizan frases y/o palabras, comparando la respuesta/valor del contacto con las frases/palabras seleccionadas.

**Son las siguientes:**
  * **Tiene alguna de las palabras** : Si la respuesta/valor contiene cualquiera de las palabras seleccionadas, seguirá la ruta indicada. Todas las palabras deben estar separadas por un espacio.​
  * **Tiene todas las palabras** : Si la respuesta/valor contiene todas las palabras seleccionadas, seguirá la ruta indicada. Todas las palabras deben estar separadas por un espacio.​
  * **Tiene la frase** : Si la respuesta/valor contiene esa frase en algún momento del texto, seguirá la ruta indicada.​
  * **Tiene solo la frase** : Si la respuesta/valor es exactamente esa frase, seguirá la ruta indicada.​
  * **Comienza con** : Si la respuesta/valor comienza con esa frase, seguirá la ruta indicada.​
  * **Tiene alg ún texto**: Si la respuesta/valor está completa (no está vacía), independientemente de la información contenida, seguirá la ruta indicada.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_3.png)

Puedes utilizar estas reglas para verificar nombres de personas, organizaciones, establecimientos, etc.

#### Números y operaciones:

Son las reglas que implican números y/o operaciones numéricas, comparando la respuesta/valor del contacto con los números/reglas numéricas seleccionadas.

**Son las siguientes:**
  * **Tiene un número**: Si la respuesta/valor es un número, independientemente de cuál sea, seguirá la ruta indicada.
  * **Tiene un número entre**: Si la respuesta/valor está entre los 2 números seleccionados, seguirá la ruta indicada.
  * **Tiene un número debajo**: Si la respuesta/valor es menor que el número seleccionado, seguirá la ruta indicada.
  * **Tiene un número igual o inferior**: Si la respuesta/valor es menor o igual al número seleccionado, seguirá la ruta indicada.
  * **Tiene un número igual a**: Si la respuesta/valor es igual al número seleccionado, seguirá la ruta indicada.
  * **Tiene un número igual o superior**: Si la respuesta/valor es mayor o igual al número seleccionado, seguirá la ruta indicada.
  * **Tiene un número arriba**: Si la respuesta/valor es mayor que el número seleccionado, seguirá la ruta indicada.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_4.png)

Estas reglas pueden ser útiles para filtrar por edad.

#### Fecha y hora:

Son las reglas que implican fecha y hora, comparando las fechas ingresadas por el usuario o de otros eventos con las fechas seleccionadas.
Un detalle importante sobre las reglas de comparación de fecha (antes, igual a y después) es que todas las comparaciones no se hacen con una fecha absoluta, sino en relación al día actual, en el formato (hoy + n) donde hoy es el día actual y n es la cantidad de días hacia adelante o hacia atrás.
**Las reglas son:**
  * **Tiene una fecha** : Si la respuesta/valor del contacto contiene una fecha, independientemente de cuál sea, seguirá la ruta indicada. La fecha debe tener un formato válido (ejemplo: DD/MM/AAAA).
  * **Tiene una fecha antes** : Si la respuesta/valor contiene una fecha anterior a la fecha seleccionada, seguirá la ruta indicada.
  * **Tiene una fecha igual a** : Si la respuesta/valor contiene una fecha igual a la fecha seleccionada, seguirá la ruta indicada.
  * **Tiene una fecha despu és**: Si la respuesta/valor contiene una fecha posterior a la fecha seleccionada, seguirá la ruta indicada.
  * **Tiene un tiempo** : Si la respuesta/valor contiene una hora, independientemente de cuál sea, seguirá la ruta indicada. La hora debe tener un formato válido (ejemplo: HH:MM).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_5.png)

Buena manera de verificar la fecha de compra de tus productos.

#### Formatos personalizados:

Son reglas utilizadas para validar formatos de texto personalizados, ya sea para cumplir con una regla de formato de números, documentos, etc.

La plataforma admite el uso de expresiones regulares, o regex, que es un lenguaje de búsqueda de patrones. De esta manera, podemos crear reglas de patrones personalizados para varios tipos de formato, como CPF, CNPJ, CNH, etc. Un buen sitio para crear tus regex es https://regex101.com/.

**Las reglas son:**
  * **Tiene un número de teléfono**: Si la respuesta/valor tiene un formato válido para un número de celular (ejemplo: 5582999999999), seguirá la ruta indicada.
  * **Tiene un correo electrónico**: Si la respuesta/valor tiene un formato válido para correo electrónico (ejemplo: no-reply@weni.ai), seguirá la ruta indicada.
  * **Coincide con regex** : Si la respuesta/valor sigue la regla de la expresión regular seleccionada, seguirá la ruta indicada.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_6.png)

¿Quieres validar el formato de un documento personal? Estas reglas son el camino.

#### Resultados de flujo

Cada carta de decisión elige una ruta al final de su ejecución, lo que genera para nosotros un resultado de flujo. Cada resultado de flujo contiene información como:
  * Valor que se utilizó para la decisión;
  * Categoría de la ruta elegida después de las reglas;
  * Fecha y hora en que se guardó ese resultado;
  * Contenidos adicionales y adjuntos enviados junto con el valor;
  * Entre otros.

Puedes acceder a estos valores de flujo utilizando las variables de la plataforma (para más información, consulta el artículo sobre expresiones y variables) y también puedes ver estos resultados en forma de gráficos en la sección de resultados en el editor de flujo (para más información, consulta el artículo sobre el editor de flujo y sus herramientas).

Por defecto, los nombres de los resultados serán siempre **(Result + n)** donde **n** es el número de resultados que existen en tu flujo, pero esto se puede cambiar fácilmente en el campo **Result name**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_7.png)

¡Siempre cambia el nombre de tus resultados de flujo por nombres que puedas entender de manera simple e intuitiva!

**Wait for the contact to respond**
La primera y más utilizada de las cartas de decisión. Las rutas se deciden a partir del texto ingresado por un contacto. Además, tiene la opción de crear una ruta en caso de que el usuario no responda, marcando la casilla de selección en la parte inferior de la carta y eligiendo el tiempo de espera para la respuesta.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_8.png)

Carta muy utilizada para gestionar las respuestas a las preguntas hechas al usuario.

#### Split by custom expression

Las rutas se deciden a partir de una expresión personalizada creada por el usuario. Esta expresión personalizada puede construirse utilizando variables y funciones. (Para más información sobre variables y funciones, consulta el artículo correspondiente).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_9.png)

Permite personalizar ciertos procesos, como verificar el horario de funcionamiento para la atención.

#### Split by contact field

Aquí, todas las reglas de decisión analizan un campo del contacto. Solo necesitas seleccionar qué campo del contacto deseas verificar y luego definir las reglas correspondientes.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_10.png)

Buena forma de clasificar contactos a través de sus datos.

#### Split by result in the flow

El objetivo aquí es crear rutas a partir de los resultados del flujo, que pueden ser tanto los creados por otras cartas de decisión como los creados manualmente por la carta de acción correspondiente. Solo necesitas seleccionar el nombre del resultado de flujo que se va a analizar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_11.png)

Esta carta puede usarse para analizar si alguna respuesta del usuario debe guardarse en un campo de contacto.

#### Split by random chance

Aquí, la ruta elegida se selecciona de forma aleatoria. Solo necesitas elegir la cantidad de rutas que deseas y esperar el resultado. En este caso, no hay una regla de decisión, y solo se puede personalizar el nombre de la ruta junto con la cantidad de rutas que existirán.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_12.png)

Puedes crear varios mensajes de saludo y despedida que serán diferentes en cada ejecución por un contacto.

#### Split by group membership

Crea rutas a partir de los grupos en los que el contacto participa. Para hacerlo, solo debes seleccionar uno de los grupos de contacto existentes en la organización.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_13.png)

Puede utilizarse para limitar el acceso de ciertos grupos a partes específicas de los flujos.

#### Split by URN type

Crea rutas basadas en qué canal está utilizando el contacto en ese momento. Solo necesitas seleccionar el tipo de canal entre los disponibles y guardar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-decision_14.png)

¿Deseas realizar tratamientos diferentes según el canal del contacto? Usa esta carta.
