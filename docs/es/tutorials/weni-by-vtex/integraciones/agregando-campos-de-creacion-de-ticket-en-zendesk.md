---
title: 'Agregando campos de creación de ticket en Zendesk'
id: 7F2pd5FE5KWPQbgcGaWVSC
status: PUBLISHED
createdAt: 2025-09-15T14:25:44.625Z
updatedAt: 2025-10-03T14:20:32.927Z
publishedAt: 2025-10-03T14:20:32.927Z
firstPublishedAt: 2025-10-03T14:20:32.927Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-ticket-creation-fields-in-zendesk
legacySlug: agregando-campos-de-creacion-de-ticket-en-zendesk
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Al crear un ticket en Zendesk, podemos enviar información adicional a través del cuerpo del mismo. Ahora es posible agregar **prioridad, asunto, descripción, campos personalizados, tags y mensaje.**

### Campos:

- **Prioridad**: Existen cuatro valores para la prioridad: Baja, Normal, Alta y Urgente. Por defecto, los cuatro valores están disponibles, pero puedes permitir que solo aparezcan los valores Normal y Alto. Para hacer esto, edita el campo de prioridad y cambia la configuración en Valores de Campo. La prioridad no es un campo obligatorio, por lo que no siempre es necesario seleccionar un valor.
- **Asunto**: El campo Asunto es obligatorio y puede tener hasta 150 caracteres. Si el título del ticket no aparece en el asunto del ticket, este campo puede no estar visible para los usuarios finales.
- **Descripción**: El campo Descripción es obligatorio. Este es el texto de la solicitud de soporte. La descripción se convierte en el primer comentario del ticket.
- **Campos Personalizados**: Los campos personalizados de tickets generalmente se usan para recopilar más información sobre el problema de soporte, producto o servicio. Puedes agregar campos personalizados a tus tickets para los agentes y también agregarlos al formulario ""Enviar una solicitud"" en el Centro de Ayuda si deseas que los usuarios finales vean el campo personalizado. Los campos personalizados de tickets pueden ser obligatorios u opcionales. Para utilizar tus campos personalizados es necesario crearlos en Zendesk. Sigue los pasos a continuación para crear tus campos:

1. Primero, ve a tu Centro de Administración, que encontrarás haciendo clic en el ícono superior derecho.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/agregando-campos-de-creacion-de-ticket-en-zendesk_1.png)

2. Ahora en el menú de la izquierda, haz clic en Objetos y Reglas > Campos.
3. En el botón azul en la esquina superior derecha, haz clic en Agregar campo.
4. Selecciona el tipo de campo que deseas crear; hay varias opciones, asegúrate de enviar el valor correctamente de acuerdo con lo que elijas.
5. Después de esto, agrega el Nombre de visualización del campo, Descripción si lo deseas, si el campo es obligatorio, marca la casilla ""Se requiere para resolver un ticket"". Elige el permiso adecuado, generalmente la segunda opción, y haz clic en Guardar en la esquina inferior derecha.
6. Listo, ahora ya tienes un nuevo campo personalizado, solo necesitarás el ID del campo, este ID está disponible junto al nombre de visualización de tu campo creado.
- **Tags:** Las etiquetas se usan para agregar información adicional a los tickets, que se puede utilizar en el flujo de trabajo del ticket. Se envían como una lista de palabras, donde cada palabra es una etiqueta.
- **Mensaje**: El mensaje inicial del ticket si tu ticket no tiene descripción.

A continuación se muestra un ejemplo en JSON de cómo deberás enviarlo en el cuerpo de la carta de Open Ticket de la plataforma Weni:

```
{""message"" : ""Cookies"", ""priority"": ""high"", ""subject"": ""Where are my cookies?"", ""description"": ""I want to know where is my cookie."", ""custom_fields"": [{""id"":""11457109235981"",""value"":""field01""}], ""tags"": [""tag01"",""tag02""]}
```
