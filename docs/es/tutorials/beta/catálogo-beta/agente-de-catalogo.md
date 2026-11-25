---
title: 'Agente de Catálogo'
createdAt: 2026-11-25T00:00:00.000Z
updatedAt: 2026-11-25T00:00:00.000Z
contentType: tutorial
productTeam: Catalog
slugEN: catalog-agent
locale: es
subcategoryId: catalog-beta
seeAlso:
  - /es/docs/tutorials/ai-workspace-vision-general
  - /es/docs/tutorials/lista-agentes
  - /es/docs/tutorials/agente-de-colecciones
---

> ℹ️ El **Agente de Catálogo** está en beta cerrada y solo se encuentra disponible para cuentas seleccionadas. Si tienes alguna duda, contacta con el [Soporte VTEX](https://help.vtex.com/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex).

El **Agente de Catálogo** es un agente de inteligencia artificial de [AI Workspace](https://help.vtex.com/es/docs/tutorials/ai-workspace-vision-general) que ayuda a los equipos de catálogo a mejorar el contenido de varios productos a la vez. Así, puedes corregir textos e incluir información más completa sin editar cada producto por separado en el Admin VTEX.

El agente está disponible en AI Workspace y está dirigido a operadores de contenido y líderes de catálogo. Puedes recibir sugerencias en iniciativas creadas por el agente o solicitar cambios a través del chat. En ambos casos, tu equipo revisa las sugerencias antes de que se aplique cualquier cambio en el catálogo.

## Cómo funciona el Agente de Catálogo

El agente sugiere cambios para cuatro campos:

- **Nombre del producto:** Nombre que se muestra a los clientes en la página del producto y en otras áreas de la tienda.
- **Descripción:** Texto principal que presenta las características y los beneficios del producto.
- **Título SEO:** Título que puede aparecer como enlace a la página del producto en motores de búsqueda como Google.
- **Metadescripción SEO:** Resumen que puede aparecer debajo de ese enlace en los resultados de los motores de búsqueda.

SEO significa optimización para motores de búsqueda y reúne prácticas que ayudan a que las páginas aparezcan en los resultados de búsqueda.

Las sugerencias pueden seguir las directrices de contenido de tu tienda, incluidas reglas de redacción, tono de voz y restricciones. Como los textos se generan mediante inteligencia artificial, revisa cada sugerencia antes de aprobarla.

El agente no crea ni elimina ítems del catálogo y tampoco modifica datos como precios, stock o imágenes. La siguiente tabla indica dónde realizar estas acciones.

| Acción | Dónde realizarla |
| :--- | :--- |
| Crear o eliminar productos, categorías y marcas | Admin VTEX |
| Modificar precios o stock | Admin VTEX |
| Modificar imágenes | Registro del producto o SKU en el Admin VTEX |

## Antes de comenzar

Antes de trabajar con el Agente de Catálogo, comprueba los siguientes requisitos:

- Tu cuenta debe tener acceso a la beta cerrada de AI Workspace.
- Para crear o modificar directrices de contenido, necesitas el permiso de gestión de directrices. Sin este permiso, solo puedes visualizarlas.
- Para solicitar mejoras basadas en las reglas de redacción de la tienda, crea las directrices de contenido antes de iniciar la solicitud.

Para obtener información sobre cómo funcionan las iniciativas, las tareas y los chats, consulta [AI Workspace - Iniciativas](https://help.vtex.com/es/docs/tutorials/ai-workspace-iniciativas), [AI Workspace - Tareas](https://help.vtex.com/es/docs/tutorials/ai-workspace-tareas) y [AI Workspace - Chat](https://help.vtex.com/es/docs/tutorials/ai-workspace-chat).

## Configurar directrices de contenido

Las directrices de contenido son las reglas de redacción de tu tienda. Se almacenan a nivel de cuenta, se comparten con todos los usuarios y pueden incluir:

- **Reglas de contenido:** Por ejemplo, usar el formato "nombre del producto + marca" en el título.
- **Tono de voz:** Por ejemplo, usar un tono amigable y párrafos cortos.
- **Restricciones:** Por ejemplo, no mencionar nunca precios ni promociones.

> ❗ Actualizar las directrices reemplaza la versión anterior, que no puede recuperarse.

Para crear o actualizar las directrices, sigue estos pasos:

1. En AI Workspace, accede a la página **Mi asistente**.
2. En la **Caja de mensajes**, usa **Selección de agente** para seleccionar **Agente de Catálogo**.
3. Envía las reglas que el agente debe seguir.

    Ejemplos de solicitudes:

    - "Crea las directrices de contenido de la tienda con base en este texto:", seguido de las reglas.
    - "Actualiza las directrices de contenido con base en este texto:", seguido de las nuevas reglas.

4. Revisa las directrices en el panel lateral, denominado [canvas](https://help.vtex.com/es/docs/tutorials/ai-workspace-chat#canvas).
5. Confirma para guardar.

Las directrices confirmadas se aplican a las próximas sugerencias generadas para todos los usuarios de la cuenta.

### Ejemplo de directrices

El siguiente ejemplo organiza las reglas por campo e incluye restricciones generales:

- **Nombre del producto:** Usar el formato tipo de producto + marca + modelo + característica principal. No escribir palabras completas en mayúsculas.
- **Descripción:** Usar un tono amigable y párrafos cortos. Comenzar por el beneficio principal y luego enumerar las características.
- **Título SEO:** Usar el formato nombre del producto + marca.
- **Metadescripción SEO:** Escribir una o dos frases que expliquen qué es el producto y para quién está recomendado.
- **Restricciones generales:** No mencionar nunca precios, promociones ni plazos de entrega. No usar información que no conste en el registro del producto.

Al escribir las directrices:

- Organiza las reglas por campo.
- Define el formato, el orden de la información y los términos prohibidos.
- Registra las restricciones de forma explícita.
- Guarda una copia fuera de AI Workspace, ya que no hay historial de versiones.

## Iniciativas del Agente de Catálogo

En AI Workspace, una iniciativa agrupa tareas creadas para corregir un problema identificado por el agente. El Agente de Catálogo crea iniciativas cuando encuentra los siguientes problemas:

- Título SEO débil
- Metadescripción SEO débil
- Nombre del producto de baja calidad
- Descripción de baja calidad

Para identificar estos problemas, el agente considera criterios como claridad, cantidad de información, especificidad y consistencia con los datos registrados en el producto.

Para crear una iniciativa, el agente analiza los productos con stock responsables de la mayor parte de los ingresos recientes de la tienda. Luego, prioriza los productos con mayores ingresos entre aquellos que presentan el problema. Cada iniciativa incluye hasta 20 productos.

Cada tarea abarca un único campo y presenta sugerencias para los productos de la iniciativa. Cuando la tarea esté esperando tu acción, abre la revisión y sigue las instrucciones de la sección [Revisar y aplicar sugerencias](#revisar-y-aplicar-sugerencias).

## Solicitar cambios a través del chat

A través del chat, envías una lista de productos, indicas los campos que deseas modificar y seleccionas una de las siguientes formas de generar sugerencias:

- **Corrección específica:** Describe exactamente lo que deseas modificar.
- **Mejora basada en las directrices:** Indica los campos para que el agente sugiera textos de acuerdo con las reglas de la tienda.

Para solicitar cambios, sigue estos pasos:

1. En AI Workspace, accede a la página **Mi asistente**.
2. En la **Caja de mensajes**, usa **Selección de agente** para seleccionar **Agente de Catálogo**.
3. Envía la lista de productos, los campos y, para una corrección específica, el cambio deseado.

    Si no indicas los campos, el agente pregunta si deseas modificar el nombre del producto, la descripción, el título SEO o la metadescripción SEO. No se genera ninguna sugerencia antes de tu respuesta.

4. Revisa las sugerencias presentadas en el canvas.

> ℹ️ Las siguientes solicitudes son ejemplos ilustrativos. Puedes escribir las instrucciones de otras formas.

En los ejemplos, el ID es el código numérico que identifica al producto en el catálogo.

| Forma | Ejemplo de solicitud | Resultado esperado |
| :--- | :--- | :--- |
| Corrección específica | "Elimina el término 'Lanzamiento' del nombre de los productos con ID 1021, 1022 y 1035." | El agente presenta una sugerencia de nombre sin el término para cada producto. |
| Mejora basada en las directrices | "Mejora el título SEO y la metadescripción SEO de los productos con ID 2040, 2041, 2042 y 2043." | El agente presenta sugerencias para ambos campos de cada producto, de acuerdo con las directrices. |

El agente no genera una sugerencia cuando el texto ya sigue las directrices o no necesita la corrección solicitada. Si ningún campo necesita cambios, el agente informa el resultado en el chat.

Cuando una sugerencia entra en conflicto con las directrices, el agente informa el conflicto. En ese caso, actualiza las directrices o confirma que deseas aplicar el cambio de todos modos.

## Revisar y aplicar sugerencias

El canvas de revisión muestra el valor **Actual** y la **Sugerencia** de cada campo. Todas las sugerencias comienzan pendientes y no se aplica ningún cambio al catálogo sin tu aprobación. Se usa la misma revisión para las tareas de las iniciativas y para las solicitudes realizadas a través del chat.

### Aprobar sugerencias

Puedes aprobar todas las sugerencias pendientes o solo una selección:

- **Todas las sugerencias pendientes:** Haz clic en `Aprobar todas`. El botón muestra cuántas sugerencias se aprobarán.
- **Una selección:** Selecciona las sugerencias deseadas y haz clic en `Aprobar` en la barra de selección. La acción solo afecta a las sugerencias seleccionadas.

Antes de aplicar los cambios, una confirmación indica cuántas sugerencias se aplicarán al catálogo y cuántas permanecerán pendientes.

Después de la confirmación, el campo muestra **Aplicando...** y la opción `Deshacer`. Mientras esta opción esté disponible, haz clic en `Deshacer` para devolver la sugerencia al estado pendiente sin modificar el catálogo. Después de hacer clic en `Aprobar todas`, una única acción `Deshacer` revierte todas las aprobaciones de esa acción.

Cuando el cambio se aplica al catálogo, el campo muestra **Aprobada**. Si la aplicación falla, el campo muestra **Error** y mantiene el valor actual. Haz clic en `Intentar de nuevo` para repetir la acción. El error de un campo no impide que se apliquen las demás sugerencias aprobadas.

### Ignorar sugerencias

Para ignorar varias sugerencias, selecciónalas y haz clic en `Ignorar` en la barra de selección. Para ignorar una sola sugerencia, haz clic en `Ignorar` en su menú de acciones.

Una sugerencia ignorada no modifica el catálogo. El campo muestra **Ignorada** y la opción `Deshacer`, disponible hasta que finalice la tarea.

### Solicitar un ajuste o una explicación

Para cada sugerencia, puedes:

- **Solicitar un ajuste:** Haz clic en `Ajustar`, describe el cambio y envíalo. El agente genera una nueva versión, que reemplaza la anterior y permanece pendiente. Por ejemplo: "Acorta el título y mantén la marca al principio."
- **Solicitar una explicación:** En el menú de acciones, haz clic en `Explicar`. El agente explica en el chat por qué hizo la sugerencia. Por ejemplo: "¿Por qué sugeriste este título para el producto con ID 1021?"

### Finalizar la tarea

Cuando se aprueban todas las sugerencias, la tarea finaliza automáticamente. Si se revisaron todas y al menos una fue ignorada, AI Workspace solicita que confirmes la finalización. También puedes finalizar la tarea mientras haya sugerencias pendientes.

> ❗ Finalizar una tarea no se puede deshacer. Las sugerencias pendientes se registran como ignoradas y no modifican el catálogo.

Para finalizar la tarea manualmente:

1. En el canvas de revisión, haz clic en `Finalizar`.
2. Comprueba qué sugerencias no se aplicarán.
3. Confirma la finalización.

Después de finalizar la tarea, el canvas muestra **Tarea completada** y pasa a ser de solo lectura. Las sugerencias aprobadas permanecen aplicadas, mientras que las ignoradas y las no revisadas mantienen el valor actual del campo. El chat sigue disponible para realizar consultas, como solicitar una lista de los productos modificados.

## Limitaciones de la beta cerrada

Durante la beta cerrada:

- El agente solo modifica el nombre del producto, la descripción, el título SEO y la metadescripción SEO.
- Cada solicitud admite una cantidad limitada de productos. Si la lista supera ese límite, el agente no procesa la solicitud. Divide los productos en listas más pequeñas y envía una solicitud por cada lista.
- Una vez definidos los productos y los campos de una tarea, no puedes agregar otros ítems. Inicia un nuevo chat para trabajar con otros productos o campos.
- Las directrices solo se pueden crear y actualizar a través del chat. No es posible enviar un archivo ni recuperar versiones anteriores.
- El agente no garantiza una redacción exacta. Revisa las sugerencias y solicita ajustes cuando sea necesario.

## Preguntas frecuentes

### ¿Por qué no se incluyó mi producto?

En las iniciativas, es posible que el producto no cumpla los criterios de stock, ingresos o priorización. Cada iniciativa incluye hasta 20 productos. En las solicitudes realizadas a través del chat, el producto no aparece en la revisión cuando ninguno de los campos solicitados necesita cambios.

### ¿Por qué el agente no sugirió un cambio para un campo?

El agente no genera sugerencias cuando el texto ya sigue las directrices o no necesita la corrección solicitada. Tampoco modifica campos distintos del nombre del producto, la descripción, el título SEO y la metadescripción SEO.

### ¿Por qué no se procesó mi solicitud?

Es posible que la lista haya superado el límite de productos o que el agente no realice la acción solicitada. Para listas extensas, divide los productos en grupos más pequeños. Para crear productos o modificar precios, stock e imágenes, usa el Admin VTEX.

### ¿Puedo agregar productos a una tarea completada?

No. Para trabajar con otros productos o campos, inicia un nuevo chat.
