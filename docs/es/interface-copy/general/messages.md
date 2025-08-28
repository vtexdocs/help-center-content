---
title: 'Mensajes'
id: ui0006-es
status: PUBLISHED
createdAt: 2025-08-28T19:24:22.388Z
updatedAt: 2025-08-28T19:24:22.388Z
publishedAt: 2025-08-28T19:24:22.388Z
firstPublishedAt: 2025-08-28T19:24:22.388Z
contentType: trackArticle
productTeam: Localization
slugES: mensajes
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugES: mensajes
---

Los mensajes usan hasta dos frases para comunicar el status actual del sistema y brindar información sobre las acciones del usuario. Este patrón es común en componentes como campos de formulario, alertas o notificaciones.

## General

Mantén el mensaje lo más breve posible, pero lo suficientemente descriptivo. Cada mensaje debe tener un máximo de 240 caracteres.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>No se pudo guardar el proveedor debido a un problema técnico</li><li>Ingresa el nombre del dispositivo</li><li>Selecciona al menos una opción</li><li>Archivo CSV no válido; no se pudieron importar los productos.</li></ul> | <ul><li>Ocurrió un problema inesperado al intentar guardar el proveedor. Esto podría deberse a varias razones, como una caída del servidor o errores de red.</li><li>Por favor, debes ingresar el nombre del dispositivo.</li><li>Selecciona al menos una de las siguientes opciones</li><li>Lo sentimos, algo salió mal</li></ul> |

Evita usar lenguaje técnico.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| No se pudo enviar la factura debido a un problema técnico | El error 298dx9283 impidió el envío de la factura |

Utiliza mensajes (o su estructura) de forma consistente.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>Colección exportada con éxito</li><li>No se pudo guardar el proveedor debido a un problema técnico</li><li>Este campo es obligatorio</li><li>Ingresa el nombre del dispositivo</li><li>Selecciona al menos una opción</li></ul> | <ul><li>La colección se exportó con éxito.</li><li>Un problema técnico impidió que se guardara el proveedor</li><li>Ingresa esta información</li><li>Por favor, ingresa el nombre del dispositivo</li><li>Selecciona al menos una de las siguientes opciones</li></ul> |

Evita el uso de pronombres personales.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>Cuenta creada con éxito</li><li>Contraseña incorrecta</li></ul> | <ul><li>Tu cuenta se creó exitosamente</li><li>Ingresaste la contraseña incorrectamente</li></ul> |

Usa un tono objetivo y neutral.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>No se pudo enviar la factura debido a un problema técnico</li><li>No se pudo importar los productos porque el archivo CSV no es válido</li><li>Cuenta creada con éxito</li><li>Inicia sesión en el Admin</li><li>La confirmación de la contraseña es incorrecta</li><li>Ingresa esta información</li></ul> | <ul><li>Lo sentimos, algo salió mal y no se pudo enviar la factura.</li><li>Por favor, carga un archivo CSV válido</li><li>¡Cuenta creada con éxito!</li><li>Hola. Inicia sesión en tu cuenta de Admin.</li><li>Lamentablemente la contraseña es incorrecta</li><li>Por favor, ingresa esta información</li></ul> |

Usa puntuación solo cuando sea indispensable para la comprensión.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>La tienda se está editando en vivo. Los cambios tendrán efecto inmediato.</li><li>No se pudo procesar el archivo porque su tamaño es superior a 10 MB</li><li>Colección eliminada con éxito</li><li>La confirmación de la contraseña es incorrecta</li><li>Carga una imagen de hasta 5 MB</li></ul> | <ul><li>La tienda se está editando en vivo y los cambios tendrán efecto inmediato.</li><li>Lo sentimos, tu archivo es demasiado grande. Para evitar errores, prueba con archivos de menos de 10 MB.</li><li>¡Colección eliminada exitosamente!</li><li>La confirmación de la contraseña es incorrecta, por favor, vuelve a intentarlo.</li><li>Este archivo es demasiado grande, cargue una imagen con un máximo de 5 MB.</li></ul> |

Usa mayúscula inicial solo en la primera palabra, excepto en nombres propios.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>Colección exportada con éxito</li><li>Notificando al indexador de Intelligent Search</li></ul> | <ul><li>Colección Exportada con Éxito</li><li>Notificando al Indexador de Intelligent Search</li></ul> |

## Específico

Para los textos de error en un campo de formulario, empieza con un verbo imperativo.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>Ingresa el nombre del dispositivo</li><li>Selecciona al menos una opción</li></ul> | <ul><li>Por favor, debes ingresar el nombre del dispositivo</li><li>Se debe seleccionar al menos una opción</li></ul> |

En las ventanas modales que confirman acciones puedes usar pronombres personales y signos de interrogación.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| Esta acción no se puede deshacer. ¿Realmente deseas eliminar este producto? | ¿Realmente deseas eliminar este producto? No se puede deshacer. |

Para mantener la coherencia, coloca la expresión “con éxito” al final de la frase.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>Pedido realizado con éxito</li><li>Colección exportada con éxito</li></ul> | <ul><li>Tu pedido se realizó correctamente</li><li>La colección se exportó correctamente</li></ul> |
