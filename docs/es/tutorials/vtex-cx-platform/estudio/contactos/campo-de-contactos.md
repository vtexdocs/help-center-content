---
title: "Campo de contactos"
id: 5q7gMYEvFCLdk7tYsHXB0x
status: PUBLISHED
createdAt: 2025-09-12T17:20:52.053Z
updatedAt: 2026-11-12T15:00:00.000Z
publishedAt: 2025-10-03T14:21:49.309Z
firstPublishedAt: 2025-10-03T14:21:49.309Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: contact-fields
legacySlug: campo-de-contactos
locale: es
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
seeAlso:
  - /es/docs/tutorials/introduccion-a-contactos
  - /es/docs/tutorials/cartas-de-accion
  - /es/docs/tutorials/glosario-de-variables
---

Los campos de contacto almacenan información sobre una persona que la plataforma no proporciona de forma predeterminada, como su edad. Puedes guardar un valor en un flujo de automatización y utilizarlo en flujos posteriores, mensajes, grupos de contactos y campañas.

> ⚠️ No es necesario crear campos para la información que la plataforma ya almacena, como el nombre, la fecha de creación y la URN del contacto. La URN identifica al contacto en un canal, como un número de WhatsApp. Para acceder a esta información en un flujo, utiliza `@contact`, por ejemplo, `@contact.name`. Para ver la lista completa de variables disponibles, consulta el [Glosario de variables](https://help.vtex.com/es/docs/tutorials/glosario-de-variables).

## Crear un campo de contacto

Para definir el tipo de valor que acepta un campo antes de utilizarlo en un flujo, sigue estos pasos:

1. Accede a la organización y al proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Contactos**.
3. Haz clic en `Manejar Campos`.

    La página muestra los campos del proyecto, el nombre de la variable de cada campo, el tipo de valor que acepta y cuántas veces se ha utilizado.

4. Haz clic en `Crear campo`.
5. En **Nombre**, ingresa la etiqueta del campo.
6. En **Tipo de Datos**, selecciona el tipo de valor que almacena el campo:
    - **Texto**
    - **Número**
    - **Fecha y Hora**
    - **Estado**
    - **Distrito**
    - **División**
7. (Opcional) Selecciona **Destacados** para mostrar el campo en la vista previa del contacto.

También puedes crear un campo de contacto mientras configuras un flujo. En la carta **Actualizar el contacto**, ingresa un nombre de campo que aún no existe. Para más información, consulta [Cartas de acción](https://help.vtex.com/es/docs/tutorials/cartas-de-accion).

## Editar un campo de contacto

En la página **Manejar Campos**, haz clic en el campo que deseas modificar. Se abrirá el cuadro de diálogo de edición.

## Guardar el valor de un campo de contacto

Para guardar un valor mientras el contacto está en un flujo, utiliza la carta **Actualizar el contacto**. Selecciona el campo de contacto e ingresa un valor fijo o un resultado del flujo.

## Consultar el valor de un campo de contacto

Para utilizar el valor de un campo de contacto en un mensaje o una expresión, ingresa `@fields.nombre_del_campo` o `@contact.fields.nombre_del_campo`. Sustituye `nombre_del_campo` por el nombre de la variable que aparece en la página **Manejar Campos**. Ambas expresiones devuelven el mismo valor.

Por ejemplo, `@fields.edad` devuelve el valor del campo cuyo nombre de variable es `edad`.

Para más información sobre expresiones, consulta [Introducción a expresiones y variables](https://help.vtex.com/es/docs/tutorials/introduccion-a-expresiones-y-variables).

## Utilizar campos de contacto en otras tareas

Después de que un campo recibe un valor, puedes utilizarlo en las siguientes tareas:

- Dirigir un flujo con la carta **Dividir por campo de contacto**. Para más información, consulta [Cartas de decisión](https://help.vtex.com/es/docs/tutorials/cartas-de-decision).
- Determinar qué contactos pertenecen a un grupo. Para más información, consulta [Grupos dinámicos](https://help.vtex.com/es/docs/tutorials/grupos-dinamicos).
- Programar un evento de campaña para una cantidad determinada de minutos, horas, días o semanas antes o después del valor del campo. Para más información, consulta [Crear una campaña](https://help.vtex.com/es/docs/tutorials/como-crear-una-campana).
- Editar el valor durante una conversación en Live Desk cuando el departamento lo permita. Para más información, consulta [Live Desk](https://help.vtex.com/es/docs/tutorials/informacion-general-de-live-desk#editar-campos-personalizados-del-contacto).
- Importar valores desde una hoja de cálculo. Para más información, consulta [Importar contactos](https://help.vtex.com/es/docs/tutorials/como-importar-contactos).

> ⚠️ Para definir un campo de contacto mediante la API de contactos, primero debes crear el campo. Para más información, consulta [Creando contactos con webhooks externos](https://help.vtex.com/es/docs/tutorials/creando-contactos-con-webhooks-externos).
