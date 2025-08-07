---
title: 'Consultar errores de renderización en el Admin VTEX'
id: 6TjvWZW2loL9Q1AI06WofH
status: PUBLISHED
createdAt: 2024-12-03T11:25:49.849Z
updatedAt: 2024-12-04T14:30:52.456Z
publishedAt: 2024-12-04T14:30:52.456Z
firstPublishedAt: 2024-12-04T10:44:10.795Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: visualization-of-vtex-admin-rendering-errors
legacySlug: consultar-errores-de-renderizacion-en-el-admin-vtex
locale: es
subcategoryId: 2eGwEr4DyPidougQJwktc5
---

La consulta de errores de renderización ayuda a identificar y detallar los errores que se producen durante el renderizado de páginas y componentes en el Admin VTEX.

Detectar y corregir errores es fundamental para garantizar una experiencia fluida, evitando que los fallos de carga de la página comprometan la interacción de los usuarios con las tiendas de ecommerce.

La página de error de renderización intenta reconectarse automáticamente al cabo de 10 segundos, sin que sea necesaria la intervención del usuario, lo que aumenta las posibilidades de resolver el problema rápidamente.

![Tela erro - ES](//images.ctfassets.net/alneenqid6w5/bTUpjxR1p69QtPpWzaaB3/564b0429eff3265d90fdb499c417b1ad/Tela_erro_-_ES.png)

## Cómo consultar detalles de errores de renderización

Los detalles técnicos del error están disponibles en la consola del navegador, lo que facilita el diagnóstico a los desarrolladores y al soporte técnico. Para acceder a la consola del navegador e identificar el código de error de renderización sigue los pasos a continuación:

1. Cuando se produzca el error de renderización en *el Admin*, haz clic con el botón derecho en cualquier área de la página.
2. Selecciona la opción **Inspeccionar**.
3. Accede a la pestaña **Consola** para ver los mensajes de log y los errores registrados por el navegador.
4. Consulta en la consola las líneas resaltadas en rojo, que representan mensajes de error e indican que algo no se ha cargado o procesado correctamente.

![devtools - ES](//images.ctfassets.net/alneenqid6w5/26rabPnSk3xX5mmsGq6pv2/1a68d0bd15fad6a5be5ebf1c9d9ce0fe/devtools_-_ES.gif)
