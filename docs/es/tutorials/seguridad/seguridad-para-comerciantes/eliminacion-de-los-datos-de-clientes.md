---
title: 'Eliminación de los datos de clientes'
id: 1R9Fn7A06Ifj4R9YD4JTKU
status: PUBLISHED
createdAt: 2022-04-14T13:28:53.209Z
updatedAt: 2025-04-10T14:19:21.979Z
publishedAt: 2025-04-10T14:19:21.979Z
firstPublishedAt: 2022-04-14T13:50:08.688Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: erasing-customer-data
legacySlug: eliminacion-de-los-datos-de-clientes
locale: es
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

De acuerdo con normativas de protección de datos como [RGPD (Reglamento General de Protección de Datos de la Unión Europea) y LGPD (Ley General de Protección de Datos Personales de Brasil)](https://vtex.com/mx-es/privacy-and-agreements/vtex-commitment/), las empresas que utilizan datos personales de clientes deben aceptar sus solicitudes de eliminación de datos registrados. Por eso, VTEX te permite solicitar la eliminación de los datos de los clientes de tu tienda a través de Copilot.

## 1. Comprobar datos almacenados en Master Data

Antes de [solicitar la eliminación de datos de clientes vía Copilot](#solicitar-eliminacion-de-dados-del-cliente-via-copilot), sigue los pasos a continuación:

1. **Identifica dónde están almacenados los datos:** verifica las entidades de datos de [Master Data](https://help.vtex.com/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) que almacenan datos de clientes en tu operación.
2. **Elimina las entidades personalizadas manualmente:** si tu tienda almacena datos de clientes en entidades personalizadas, elimínalos manualmente antes de abrir un ticket para solicitar la eliminación mediante Copilot. Para más información, consulta la sección [Entidades de datos personalizadas](#entidades-de-datos-personalizadas). Sigue este proceso solo para entidades personalizadas. No elimines las [entidades nativas](#entidades-nativas-de-master-data) CL y AD de Master Data.

### Entidades nativas de Master Data

Después de [solicitar la eliminación de datos](#solicitar-eliminacion-de-datos-de-clientes-via-copilot), VTEX eliminará los datos de las entidades de datos nativas **CL** y **AD**. Es importante que no los elimines por tu cuenta.

### Entidades de datos personalizadas

Si tu tienda almacena información de clientes en entidades de datos personalizadas (CL y AD), debes eliminarlas manualmente antes de abrir un ticket para solicitar la eliminación de datos de clientes vía Copilot. Para eliminarlos, utiliza la API de Master Data:

1. Encuentra el documento correspondiente al cliente utilizando el endpoint [Search document](https://developers.vtex.com/vtex-rest-api/reference/searchdocuments-1). 
2. Elimina dicho documento utilizando el endpoint [Delete document](https://developers.vtex.com/vtex-rest-api/reference/deletedocument-1).

> ❗ No realices este proceso para las entidades nativas **CL** y **AD**.

## 2. Configurar rol RGPD

Para solicitar la eliminación de datos, crea un [rol personalizado](https://help.vtex.com/es/tutorial/criar-perfil-de-acesso) llamado **Ley General de Protección de Datos** con los siguientes recursos de [License Manager](https://help.vtex.com/es/tutorial/license-manager-resources):

- **Write user rights requests** (del producto **User Rights**).
- **Open Support Ticket** (del producto **VTEX Support**).

![perfil-de-acesso-gdpr](//images.ctfassets.net/alneenqid6w5/1NeUT54hSBqEUuIVNbunfv/92ae172c1867401e23b07a5fa55ff1be/espanhol.jpg)

Luego, asigna este rol al usuario que será responsable de la solicitud de eliminación de datos de clientes.

## 3. Solicitar la eliminación de datos del cliente vía Copilot

Con los datos verificados y el perfil configurado, sigue estos pasos para abrir un ticket a través de Copilot:

1. Inicia sesión en el Admin VTEX con un usuario que tenga el rol **Ley General de Protección de Datos**.
2. Haz clic en el botón **Copilot** en la esquina superior derecha.
3. Envía el siguiente mensaje: `Quiero eliminar un usuario de la plataforma VTEX`.
    ![copilot-excluir-cliente-es](//images.ctfassets.net/alneenqid6w5/5aGO3gtV9mrRB9FK5F2Tmq/8824adc8706ec3444bb77c2b07a89dfb/copilot-excluir-cliente-es.gif)   
4. Cuando se solicite, ingresa el email del usuario que deseas eliminar. No es posible eliminar los datos de más de un cliente por ticket; proporciona únicamente el email de un comprador por solicitud.

Después de esta etapa, el ticket se enviará al Soporte VTEX, y recibirás el ID del ticket para seguimiento.

Al concluir el ticket, se enviará un certificado de eliminación al email asociado al ticket, comprobando que los datos se eliminaron con éxito.

