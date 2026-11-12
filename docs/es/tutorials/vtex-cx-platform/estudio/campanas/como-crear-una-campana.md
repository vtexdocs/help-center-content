---
title: "Crear una campaña"
id: 552TQfDeoedLJoKg6RFBB3
status: PUBLISHED
createdAt: 2025-09-12T18:03:34.475Z
updatedAt: 2026-11-12T15:10:00.000Z
publishedAt: 2025-10-03T14:20:33.938Z
firstPublishedAt: 2025-10-03T14:20:33.938Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-create-a-campaign
legacySlug: como-crear-una-campana
locale: es
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Una campaña permite programar mensajes o flujos para un grupo de contactos. Cada acción se ejecuta en un momento calculado a partir de una fecha guardada en el perfil del contacto. Por ejemplo, puedes enviar un recordatorio antes de la fecha de una cita o iniciar un flujo de seguimiento después de la fecha de una compra.

Para obtener más información sobre cómo funcionan las campañas y cuándo usarlas, consulta [Campañas](https://help.vtex.com/es/docs/tutorials/introduccion-a-campanas).

## Antes de comenzar

Antes de crear una campaña, debes tener:

- **Un grupo de contactos:** Los eventos de la campaña se aplican únicamente a los contactos del grupo seleccionado. Para llegar a otro grupo, crea una campaña separada. Para crear un grupo, consulta [Grupos estáticos](https://help.vtex.com/es/docs/tutorials/grupos-estaticos) o [Grupos dinámicos](https://help.vtex.com/es/docs/tutorials/grupos-dinamicos).
- **Un campo de fecha y hora:** La programación del evento utiliza una fecha guardada en el perfil de cada contacto. Puedes usar **Created On**, que almacena la fecha en la que se creó el contacto. Para usar otra fecha, crea un campo de contacto con el tipo de datos **Fecha y Hora**. Consulta [Campo de contactos](https://help.vtex.com/es/docs/tutorials/campo-de-contactos).
- **Un flujo:** Este requisito solo se aplica si el evento inicia un flujo en lugar de enviar un mensaje.

## Crear la campaña

Para crear una campaña, sigue estos pasos:

1. En **Contactos**, ve a **Campañas**.
2. Haz clic en `Crear campaña`.
3. En **Nombre**, ingresa un nombre para la campaña.
4. En **Grupo**, selecciona el grupo de contactos.
5. Haz clic en `Crear`.

Se abre la página de la campaña, que muestra el nombre de la campaña y el grupo seleccionado. Una campaña no ejecuta ninguna acción hasta que agregas un evento.

## Agregar un evento

Un evento es un mensaje o flujo programado en relación con una fecha del perfil del contacto. Una campaña puede tener varios eventos, cada uno con su propia acción y programación. Por ejemplo, un evento puede enviar un recordatorio 1 día antes de una fecha guardada, mientras que otro inicia un flujo 2 días después de esa fecha.

Para agregar un evento, sigue estos pasos:

1. En la página de la campaña, haz clic en `Añadir evento`.

    El cuadro de diálogo se abre con **Enviar un mensaje** seleccionado. La programación predeterminada es de 15 días después de **Created On**, con entrega **durante la misma hora**.

2. Selecciona **Enviar un mensaje** o **Iniciar un flujo**.
    - Si seleccionas **Enviar un mensaje**, ingresa el mensaje. Puedes personalizarlo con una variable de contacto, como `@contact.name`.
    - Si seleccionas **Iniciar un flujo**, selecciona el flujo.
3. En **Si el contacto ya está activo en un flujo**, selecciona cómo debe procesar la campaña a ese contacto. En los eventos de mensaje, **Para y envía el mensaje** detiene el flujo actual del contacto antes de enviar el mensaje.
4. Define cuándo ocurre el evento, en relación con un campo de contacto:
    - Ingresa el periodo y selecciona la unidad: minutos, horas, días o semanas.
    - Selecciona si el evento ocurre antes o después de la fecha guardada en el campo de contacto.
    - Selecciona el campo de contacto que contiene la fecha de referencia. **Created On** es la fecha en la que se creó el contacto.
5. En **Entregado**, selecciona la hora de entrega. La opción **durante la misma hora** ejecuta el evento durante la misma hora que la fecha y hora guardadas en el campo de contacto.
6. Haz clic en `Añadir evento`.

El evento se agrega a la campaña y se ejecuta para cada contacto del grupo según la programación definida. Para programar otra acción, haz clic en `Añadir evento` y repite el procedimiento.

## Más información

Para cambiar un evento después de agregarlo, consulta:

- [Editar eventos](https://help.vtex.com/es/docs/tutorials/modificando-eventos)
