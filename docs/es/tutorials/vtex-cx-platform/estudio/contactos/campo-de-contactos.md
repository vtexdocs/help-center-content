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

Los campos de contacto almacenan información que defines sobre una persona, como su edad. La plataforma conserva cada valor en el contacto junto con los datos que ya almacena, como la URN y la fecha de creación del contacto. Una URN es el identificador del contacto en un canal, como un número de WhatsApp.

El valor permanece disponible en cualquier flujo, incluso en uno que se inicie después del flujo que guardó la información. No es necesario crear campos para los datos que la plataforma ya almacena, como el nombre del contacto. Para consultar esos datos, utiliza `@contact`, por ejemplo, `@contact.name`. Para ver la lista completa, consulta el [Glosario de variables](https://help.vtex.com/es/docs/tutorials/glosario-de-variables).

## Crear un campo de contacto

Crea el campo en **Manejar Campos** cuando quieras seleccionar el tipo de valor que almacena antes de que un flujo guarde información en él. También puedes crear un campo desde un flujo con la carta **Actualizar el contacto**, ingresando un nombre que aún no existe. Para más información, consulta [Cartas de acción](https://help.vtex.com/es/docs/tutorials/cartas-de-accion).

Para crear un campo de contacto, sigue estos pasos:

1. Accede a la organización y al proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Contactos**.
3. Haz clic en **Manejar Campos**.

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
7. (Opcional) Selecciona **Destacados** para mostrar el campo en la vista previa de la página del contacto.

## Editar un campo de contacto

Para modificar un campo, haz clic en él en la página **Manejar Campos**. Se abrirá el cuadro de diálogo de edición.

## Guardar y consultar el valor de un campo

Para guardar un valor mientras el contacto está en un flujo, utiliza la carta **Actualizar el contacto**. Selecciona el campo e ingresa un valor fijo o un resultado del flujo.

Para consultar el valor en un mensaje o una expresión, utiliza `@fields.nombre_del_campo` o `@contact.fields.nombre_del_campo`. Sustituye `nombre_del_campo` por el nombre de la variable que aparece en **Manejar Campos**. Ambas expresiones devuelven el mismo campo.

Por ejemplo, `@fields.edad` devuelve el valor del campo cuyo nombre de variable es `edad`.

Para más información sobre expresiones, consulta [Introducción a expresiones y variables](https://help.vtex.com/es/docs/tutorials/introduccion-a-expresiones-y-variables).

## Otras formas de utilizar un campo de contacto

Después de que un campo recibe un valor, puedes utilizarlo en las siguientes tareas:

- Dirigir un flujo con la carta **Dividir por campo de contacto**. Para más información, consulta [Cartas de decisión](https://help.vtex.com/es/docs/tutorials/cartas-de-decision).
- Determinar qué contactos pertenecen a un grupo. Para más información, consulta [Grupos dinámicos](https://help.vtex.com/es/docs/tutorials/grupos-dinamicos).
- Programar un evento de campaña para una cantidad determinada de minutos, horas, días o semanas antes o después del valor del campo. Para más información, consulta [Crear una campaña](https://help.vtex.com/es/docs/tutorials/como-crear-una-campana).
- Editar el valor durante una conversación en Live Desk cuando el departamento lo permita. Para más información, consulta [Live Desk](https://help.vtex.com/es/docs/tutorials/informacion-general-de-live-desk#editar-campos-personalizados-del-contacto).
- Importar valores desde una hoja de cálculo. Para más información, consulta [Importar contactos](https://help.vtex.com/es/docs/tutorials/como-importar-contactos).

> ⚠️ Para definir un campo de contacto mediante la API de contactos, primero debes crear el campo. Para más información, consulta [Creando contactos con webhooks externos](https://help.vtex.com/es/docs/tutorials/creando-contactos-con-webhooks-externos).
