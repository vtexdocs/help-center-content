---
title: 'Cómo funciona el Centro de mensajes'
id: tutorials_84
status: PUBLISHED
createdAt: 2017-04-27T22:20:04.874Z
updatedAt: 2025-01-24T15:17:44.604Z
publishedAt: 2025-01-24T15:17:44.604Z
firstPublishedAt: 2017-04-27T23:00:42.423Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-the-message-center
legacySlug: como-funciona-el-message-center
locale: es
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

**Centro de mensajes** es el módulo responsable de las configuraciones y del envío de los emails transaccionales en VTEX. En él es posible editar el contenido (Plantillas) de los mensajes y el remitente.

## Plantillas

Las Plantillas son los mensajes en sí. Los mensajes están categorizados conforme al módulo responsable y se destinan a un contenido específico. Dentro de cada uno tenemos el título/asunto del email, el código HTML, el remitente que va a realizar el envío y el destinatario, con posibilidades de especificar “CC” y “CCO”.

> ⚠️  Por motivos de seguridad, no todas las plantillas se pueden enviar con “CC” y “CCO”.

Entienda la información que trae cada _card_ de plantilla :

- Nombre de la plantilla, para identificación interna (no se trata del asunto del email enviado).
- Aplicación/módulo al que pertenece (en verde).
- Indica si el mensaje es el estándar, suministrado por VTEX, o si fue modificado por la tienda.
- Breve descriptivo sobre la función de la plantilla.
- Remitente al que está asociado la plantilla.

Para facilitar la navegación, la interfaz pone a disposición, además del campo de búsqueda por texto libre, filtros por aplicaciones (módulos) y tipo (mensaje estándar o personalizado/modificado).

![busca-templates-central-mensagens es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/message-center/templates/como-funciona-el-message-center_1.png)

Después de entender lo básico sobre los templates, usted ya puede ver cómo editarlos. Este paso no es obligatorio, pues VTEX suministra un layout básico y responsivo para todos los mensajes, con los datos necesarios para una buena comunicación con su cliente, pero es natural que las tiendas los adapten al estándar de comunicación ya usado para la marca.

## Remitentes

El remitente es quien envía el mensaje, pero en este caso trayendo también el registro del nombre y email que será exhibido al cliente, y configuraciones del servidor de envío (SMTP).

- Nombre del remitente, para identificación interna.
- Tipo de servidor SMTP, que puede ser de VTEX o de la propia tienda.
- Indica cuál es el remitente definido como estándar para la tienda.
- Dirección de email usada en el envío.
- Botón para ejecutar una prueba de envío de mensaje.
- Icono que indica si el remitente pasó la prueba de envío (no exhibido si no se ha realizado ninguna prueba reciente).

Es importante que usted personalice su remitente para que el cliente reciba los mensajes con el nombre y el email de su empresa, de lo contrario los emails recibidos estarán en nombre de “noreply@vtexcommerce.com.br”. Para ello, vea cómo alterar el servidor SMTP de su tienda.
