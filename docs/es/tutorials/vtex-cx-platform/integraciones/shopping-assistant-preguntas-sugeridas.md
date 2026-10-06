---
title: 'Shopping Assistant: preguntas sugeridas'
createdAt: 2026-09-03T21:30:00.000Z
updatedAt: 2026-09-10T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: shopping-assistant-suggested-questions
locale: es
---

Las **preguntas sugeridas** son el punto de entrada de Shopping Assistant de [VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/vtex-cx-platform-vision-general) en la tienda. En la página de detalles del producto, el webchat muestra hasta tres preguntas predefinidas sobre ese producto. Cuando el cliente hace clic en una de ellas, el chat se abre y la pregunta se envía como si la hubiera escrito, iniciando la conversación con una intención clara en lugar de un cuadro de mensaje vacío.

En este artículo comprenderás qué son las preguntas sugeridas, dónde aparecen, cómo se generan, qué influye en su calidad y cómo habilitarlas o deshabilitarlas en VTEX CX Admin.

## Dónde aparecen las preguntas

Las preguntas sugeridas funcionan exclusivamente en páginas de detalles del producto (PDP). No se muestran en la página de inicio, páginas de categoría, resultados de búsqueda ni en el checkout.

En la página de detalles del producto, las preguntas aparecen en dos estados:

- **Chat cerrado:** como botones compactos junto al botón de apertura del chat (launcher).
- **Chat abierto:** dentro de la lista de mensajes de la conversación.

Si el cliente navega a otra página de detalles del producto, las preguntas actuales se eliminan y se genera un nuevo conjunto para el nuevo producto.

## Cómo se generan las preguntas

Las preguntas se generan automáticamente mediante inteligencia artificial (IA), sin configuración manual de la tienda. Cuando el webchat se carga en una página de detalles del producto, lee los datos del producto ya publicados en esa página — nombre, descripción, marca y especificaciones técnicas — y solicita tres preguntas relevantes basadas en ese contenido.

El resultado se almacena, de modo que el siguiente cliente que vea el mismo producto ve las preguntas de inmediato.

Al utilizar la funcionalidad, considera los siguientes comportamientos:

- **Las preguntas se generan por producto, no por variación.** Todos los colores o tamaños de un mismo producto comparten las mismas tres preguntas.
- **La calidad de las preguntas depende directamente de la calidad del catálogo.** Productos con descripción completa y especificaciones bien completadas generan preguntas específicas y útiles. Productos con poco contenido o campos vacíos generan preguntas genéricas.
- **Cada tienda muestra preguntas en un único idioma.** No hay traducción automática entre configuraciones regionales.

> ℹ️ Mejorar el contenido del catálogo es la forma más efectiva de mejorar las preguntas sugeridas. Revisa la descripción y las especificaciones de los productos para obtener preguntas más relevantes.

## Activación

Las preguntas sugeridas vienen habilitadas de forma predeterminada. Las cuentas configuradas mediante el [onboarding de VTEX CX](https://help.vtex.com/es/docs/tutorials/introduccion-al-cx) ya tienen Shopping Assistant y las preguntas sugeridas configurados, por lo que no es necesaria ninguna acción para comenzar a utilizar la funcionalidad.

## Habilitar o deshabilitar las preguntas sugeridas

Si prefieres no mostrar las preguntas en la tienda, puedes desactivarlas en VTEX CX Admin. Desactivar las preguntas sugeridas no afecta Shopping Assistant: el webchat sigue disponible en la tienda y los clientes aún pueden iniciar una conversación mediante el launcher.

Para habilitar o deshabilitar las preguntas sugeridas, sigue los pasos a continuación:

1. Accede a VTEX CX Admin.
2. En el menú lateral, accede a **Channels > Shopping Assistant > Settings**.
3. Activa o desactiva la opción **Suggested Questions**.
4. Haz clic en `Guardar`.