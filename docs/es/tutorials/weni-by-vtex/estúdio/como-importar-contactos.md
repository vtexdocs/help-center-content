---
title: 'Cómo importar contactos'
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

Cuando una persona interactúa a través de alguno de los canales conectados en la Plataforma Weni, automáticamente se convierte en un contacto. Sin embargo, muchas veces ya tenemos información de los futuros contactos que interactuarán por los canales, entonces, ¿cómo podemos importar esos contactos a la plataforma?

Es un proceso muy simple, primero, solo debes acceder al **Estudio **y dirigirte a la página de **contactos**, donde encontrarás el botón de ***Importar Contactos**** *en la esquina izquierda.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/estúdio/como-importar-contactos_1.png)

Después de eso, serás dirigido a la página de importación, donde podrás seleccionar una hoja de Excel en formato **.XLS** y cargar los contactos que existen en la hoja a la plataforma. Sin embargo, para que esto funcione, es necesario nombrar correctamente el encabezado de la hoja, es decir, el nombre de las columnas. Al final de la página, proporcionamos una plantilla de ejemplo que puedes utilizar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/estúdio/como-importar-contactos_2.png)

Las reglas para nombrar las columnas son:

- **Name**: columna para el nombre del contacto.

- **Language**: columna para el idioma en el que el contacto interactúa.

- **URN**: columna para la URN del canal por el cual el contacto se comunicará. Recuerda que el contacto solo es válido si posee al menos una URN.La **URN:whatsapp** es extremadamente importante y necesaria para el envío de mensajes template. Si esta columna, junto con los números de teléfono debajo de ella, no está presente al importar los contactos, el envío de mensajes a través de WhatsApp para esos contactos estará **indisponible** posteriormente.

-    **Field:** columna para los campos personalizados de los contactos.

Después de seleccionar el archivo, simplemente haz clic en **(Avance)** y tus contactos se importarán a la plataforma. Todos los contactos aparecerán vinculados a un grupo estático, que tendrá el mismo nombre que el archivo de la hoja de cálculo. Si no deseas mantener el grupo, simplemente elimínalo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/estúdio/como-importar-contactos_3.png)
