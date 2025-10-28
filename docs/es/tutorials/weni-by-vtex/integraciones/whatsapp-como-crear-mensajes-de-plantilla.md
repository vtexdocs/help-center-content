---
title: 'WhatsApp: Cómo crear mensajes de plantilla'
id: 3KQizjNnrDY2K3DhPwiPim
status: PUBLISHED
createdAt: 2025-09-15T15:05:31.154Z
updatedAt: 2025-10-03T14:20:32.643Z
publishedAt: 2025-10-03T14:20:32.643Z
firstPublishedAt: 2025-10-03T14:20:32.643Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-how-to-create-template-messages
legacySlug: whatsapp-como-crear-mensajes-de-plantilla
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Los mensajes de plantilla se utilizan para iniciar conversaciones con los clientes y son el único tipo de mensaje que se puede enviar a clientes que aún no han iniciado una conversación contigo o que no han enviado un mensaje en las últimas 24 horas en una conversación existente.

Antes de enviarse a los clientes, los modelos de mensaje deben ser aprobados. Además, pueden ser desactivados automáticamente en función de la retroalimentación de los clientes. Si se desactiva, el modelo de mensaje no podrá ser enviado a los clientes hasta que mejore la calificación de calidad y deje de infringir la Política de WhatsApp Business o la Política Comercial de WhatsApp.

#### **Creación**

Puedes usar la plataforma Weni para crear modelos de mensaje manualmente y enviarlos para su aprobación.

Para crear un mensaje de plantilla:

1. Accede al Panel de **Aplicaciones** y ve a la pestaña **Mis Aplicaciones**;
2. Haz clic en la tarjeta que contiene la cuenta de WhatsApp que recibirá la Plantilla.
3. Haz clic en la pestaña **Plantilla** en el lado derecho.
4. Se abrirá un panel donde deberás hacer clic en Nuevo modelo para agregar el mensaje:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/whatsapp-como-crear-mensajes-de-plantilla_1.png)

1. Completa el formulario con la información necesaria. Usa el botón **\+ Agregar variable** si deseas insertar espacios reservados para contenido variable que se proporcionará al enviar el modelo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/whatsapp-como-crear-mensajes-de-plantilla_2.png)

1. Haz clic en Agregar ejemplo para agregar ejemplos de valores al modelo. Esto es opcional, pero muy recomendable. Consulta los Ejemplos.
2. Haz clic en Enviar para enviar el modelo para su aprobación.
3.

#### **Proceso de Aprobación (Responsabilidad de la Meta)**

Después de crear el modelo, podrás enviarlo para su aprobación. Generalmente, las aprobaciones ocurren de forma instantánea o en unos pocos minutos (si se envían directamente desde la plataforma). Tan pronto como se tome la decisión, aparecerá una notificación en el Administrador de WhatsApp. Además, se enviará un correo electrónico a los administradores del Administrador de Negocios. Si te has suscrito a las actualizaciones sobre cambios en el estado del modelo de mensaje, también recibirás una notificación de webhook de Meta. Consulta [Cómo monitorear cambios de estado.](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes)

Si se aprueba, el modelo de mensaje tendrá el estado **Activo \- Calidad pendiente**. Con esto, podrás comenzar a enviarlo a los clientes. Si es rechazado, el modelo se podrá [editar](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#editing) y reenviar para su aprobación. Otra posibilidad es [apelar la decisión](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#editing) .

#### **Ejemplos**

Recomendamos que incluyas un ejemplo antes de enviar el modelo para su aprobación. Los ejemplos te permiten enviar ejemplos de activos multimedia y valores de texto para variables de medios o texto requeridos por el modelo. Esto facilita que Meta visualice cómo aparecerá el modelo para tus clientes.

Además, en caso de que el envío sea rechazado y decidas apelar, será necesario incluir un ejemplo en tu apelación. Por lo tanto, es mejor incluirlo en el envío inicial.

Para incluir un ejemplo en el envío, primero crea tu modelo, agregando las variables necesarias. Luego, haz clic en el botón Agregar ejemplo. El panel de vista previa mostrará los ejemplos de activos multimedia o valores de texto proporcionados.

Si hay rechazos de mensajes y quieres resolver o cambiar la configuración de tus mensajes de plantilla, ve a [Mensajes de Plantilla de WhatsApp: Impedimentos y configuraciones](/l/pt/m-dulo-integra-es/whatsapp-template-messages-impedimentos-e-configura-es) y obtén más información.

#### **Obtén más información**

- [Política de WhatsApp Business:](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-policy%2F%3Ffbclid%3DIwAR1jLRqG2MmfXVpoC8OxG2zTl5Ub96hEm-Kq7ucQ9K5dNB8GDFaAupD530Q&h=AT36YeReOstrqxnKTzgq1y-r_1Ob87yrZtjfdejYpzyb5x_-O76Lptsh-I9eddFQhs7ijenYsMuyS_j5f0REQZ8IdJoL5vKaphzynwgfAav-DtNlcnC-iWBZN3KyVY4gdLKezYRLheBfFcg_nzrPaA) obtén más información sobre las políticas para empresas.
- [Política Comercial de WhatsApp:](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fcommerce-policy%2F%3Ffbclid%3DIwAR3hJYolZAcjC0qlRoD3yAnxxDqcFfZWC9ckfMsownlLmmTNMmCWUBRBEwQ&h=AT3ol3uyDf5Ojn8nJYc5KRBV8cDeo5UiTAfDQM1B_ZIamZ39CjEoG9RO6inUQKNKrCX7wbtZUJ7bJjmDA4KIBzJ6ZJ1E841-mDihwVik4agXMDieprqwFgWo8ebGSwPgj-g3htULojJjNADBqzQMlw) obtén más información sobre las políticas comerciales.
- [Aplicación de las Políticas:](Aplicação das Políticas:) obtén más información sobre cómo aplicamos las políticas.
