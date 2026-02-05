---
title: 'Crear o editar template de correo electrónico transaccional'
id: 335JZKUYgvYlGOJgvJYxRO
status: PUBLISHED
createdAt: 2020-01-10T13:13:48.069Z
updatedAt: 2024-06-11T19:54:28.554Z
publishedAt: 2024-06-11T19:54:28.554Z
firstPublishedAt: 2020-01-13T14:38:32.506Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: how-to-create-and-edit-transactional-email-templates
locale: es
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugEN: e-mails-transaccionales
order: 3
---

### Editar un template de correo electrónico 

Para editar un template de correo electrónico transaccional, siga los pasos a continuación.

1. En el menú lateral del Admin, acceda a Centro de Mensajes y haga clic en __Templates__.
2. Busque el template deseado y haga clic en el card correspondiente.
3. Altere el título del correo electrónico y el destinatario (los valores entre llaves dobles son variables; en el próximo artículo aprenderemos cómo manejarlas). Usted puede incluir destinatarios en copia (`CC`) y copia oculta (`CCO`).
4. Deje el flag __Utilizar remitente estándar__ para hacer uso de la dirección de correo electrónico registrado como estándar, como se explica en el artículo anterior de esta guía.

> ℹ️ La lista de plantillas está disponible en el artículo [Plantillas de correo electrónico transaccional relacionadas con el pedido](/es/docs/tutorials/plantillas-de-emails-transaccionales-del-pedido).

Es en el campo __HTML__ donde encuentra el código HTML del template. Puede editar el código en el propio campo o copiarlo en el editor de su preferencia, editarlo y luego pegarlo nuevamente en el campo del template.

El __preview__ renderizado por este código se muestra en el box justo debajo. Puede seleccionar tres tamaños de pantalla diferentes para probar la responsividad del código.

El campo __JSON Data__ muestra un *ejemplo* de objeto JSON que contiene información sobre el asunto del correo electrónico. Las llaves de este objeto se pueden utilizar como variables en el código HTML del template. Aprenderemos cómo hacer esto en el próximo artículo.

> ⚠️ Atención: para personalizar el layout del correo electrónico, debe ingresar el **código CSS inline**. <u>No</u> ingrese el CSS en el head del template, ya que los correos electrónicos no lidian bien con eso.

Al final, haga clic en el botón __Guardar__.

### Crear un template de correo electrónico 

El método para crear un template de correo electrónico transaccional es similar al que utilizó para editar un template. Basta seguir los pasos a continuación:

1. En el menú lateral del Admin, acceda a Centro de Mensajes y haga clic en __Templates__.
2. Haga clic en el botón __Nuevo template__.
3. Seleccione el flag __Activar envío de e-mail__.
4. Rellene los datos de Título, Remitente y Destinatario.
5. Ingrese el código del template en el campo __HTML__.
6. Pruebe la visualización en el __preview__.
7. Haga clic en __Guardar__.
