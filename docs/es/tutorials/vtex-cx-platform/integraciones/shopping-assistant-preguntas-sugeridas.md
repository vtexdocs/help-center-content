---
title: 'Shopping Assistant: preguntas sugeridas'
createdAt: 2026-09-03T21:30:00.000Z
updatedAt: 2026-09-10T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: shopping-assistant-suggested-questions
locale: es
---

Las **preguntas sugeridas** son el punto de entrada del Shopping Assistant de [VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/vtex-cx-platform-vision-de-conjunto) en la tienda. En la página de producto, Shopping Assistant muestra hasta tres preguntas sugeridas sobre ese producto. Cuando el cliente hace clic en una de ellas, el chat se abre y la pregunta se envía como si él mismo la hubiera escrito. Así, la conversación empieza con una intención clara y no con el chat vacío.

En este artículo se explica qué son las preguntas sugeridas, dónde aparecen, cómo se generan, qué influye en su calidad y cómo activarlas o desactivarlas en el VTEX CX Admin.

## Dónde aparecen las preguntas

Las preguntas sugeridas funcionan exclusivamente en páginas de detalles del producto (PDP). No se muestran en la página de inicio, en páginas de categoría, en los resultados de búsqueda ni en el checkout.

En la página de producto las preguntas aparecen de dos formas:

- **Chat cerrado:** las preguntas aparecen como botones pequeños, al lado del botón que abre el chat (launcher).
- **Chat abierto:** dentro de la lista de mensajes de la conversación.

Si el cliente navega a otra página de producto, las preguntas actuales se eliminan y se genera un nuevo conjunto para el nuevo producto.

## Cómo se generan las preguntas

Las preguntas se generan automáticamente mediante inteligencia artificial (IA), sin configuración manual de la tienda. Cuando Shopping Assistant se carga en una página de producto, lee los datos del producto ya publicados en esa página (nombre, descripción, marca y especificaciones técnicas) y genera tres preguntas relevantes con base en ese contenido.

El resultado se almacena, de modo que el siguiente cliente que vea el mismo producto ve las preguntas de inmediato.

Al usar la funcionalidad ten en cuenta los siguientes comportamientos:

- **Las preguntas se generan por producto, no por variación.** Todos los colores o tallas de un mismo producto comparten las mismas tres preguntas.
- **La calidad de las preguntas depende directamente de la calidad del catálogo.** Los productos con descripción completa y especificaciones bien detalladas generan preguntas específicas y útiles. Los productos con poco contenido o campos vacíos generan preguntas genéricas.
- **Cada tienda muestra preguntas en un único idioma;** no hay traducción automática entre configuraciones regionales.

> ℹ️ Mejorar el contenido del catálogo es la forma más eficaz de mejorar las preguntas sugeridas. Revisa la descripción y las especificaciones de los productos para obtener preguntas más relevantes.

## Activación

Las preguntas sugeridas están activas de forma predeterminada. Las cuentas configuradas mediante el [onboarding de VTEX CX](https://help.vtex.com/es/docs/tutorials/introduccion-a-cx) ya tienen Shopping Assistant y preguntas sugeridas configurados, por lo que no es necesaria ninguna acción para empezar a usar la funcionalidad.

## Activar o desactivar las preguntas sugeridas

Si prefieres no mostrar las preguntas en la tienda puedes desactivarlas en el VTEX CX Admin. Desactivar las preguntas sugeridas no afecta a Shopping Assistant: el chat sigue disponible en la tienda y los clientes aún pueden iniciar una conversación desde el launcher.

Para activar o desactivar las preguntas sugeridas sigue los pasos a continuación:

1. Accede al VTEX CX Admin.
2. En el menú lateral, accede a **Configuración > Canales > Mis aplicaciones > Shopping Assistant > Preferencias**.
3. Activa o desactiva la opción **Preguntas sugeridas por IA**.
4. Haz clic en `Guardar`.
