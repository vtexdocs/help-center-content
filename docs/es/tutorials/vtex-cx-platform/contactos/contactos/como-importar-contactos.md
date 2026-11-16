---
title: "Importar contactos"
id: 2iPoWuJtzfIvGrpUdIvvhR
status: PUBLISHED
createdAt: 2025-09-12T17:23:02.357Z
updatedAt: 2025-10-03T14:21:49.258Z
publishedAt: 2025-10-03T14:21:49.258Z
firstPublishedAt: 2025-10-03T14:21:49.258Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: importing-contacts
legacySlug: como-importar-contactos
locale: es
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

La lista de contactos de VTEX CX reúne a las personas que interactúan a través de los canales conectados a la plataforma. Estos contactos se añaden automáticamente. Para incluir también a personas que todavía no han interactuado a través de tus canales, puedes importar sus datos de forma masiva mediante una hoja de cálculo. Este artículo explica cómo preparar la hoja de cálculo y realizar la importación.

## Preparar la hoja de cálculo

El archivo debe ser una hoja de cálculo de Excel en formato `.xls`. La página de importación ofrece una plantilla que puedes utilizar como referencia.

Los nombres de las columnas deben seguir el formato esperado por la plataforma:

- `Name`: nombre del contacto.
- `Language`: idioma que utiliza el contacto en las interacciones.
- `URN`: identificador del contacto en el canal por el que se comunicará. Cada contacto debe tener al menos una URN.
- `Field`: campos personalizados del contacto.

> ⚠️ Para enviar mensajes de plantilla por WhatsApp, incluye la columna `URN:whatsapp` y los números de teléfono correspondientes. Sin esta información, no podrás enviar mensajes de WhatsApp a los contactos importados.

## Importar los contactos

Para importar los contactos:

1. En **Contactos**, accede a la página **Contactos**.
2. En el menú lateral izquierdo, haz clic en **Importar contactos**.
3. En la página de importación, selecciona la hoja de cálculo `.xls`.
4. Haz clic en **Vista previa** y completa la importación.

## Resultado de la importación

Después de la importación, los contactos se vinculan a un grupo estático con el mismo nombre que el archivo de la hoja de cálculo. Si no deseas conservar este grupo, puedes eliminarlo sin borrar los contactos importados.
