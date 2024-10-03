---
title: 'Eliminación de los datos de clientes'
id: 1R9Fn7A06Ifj4R9YD4JTKU
status: PUBLISHED
createdAt: 2022-04-14T13:28:53.209Z
updatedAt: 2023-06-23T15:06:52.315Z
publishedAt: 2023-06-23T15:06:52.315Z
firstPublishedAt: 2022-04-14T13:50:08.688Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: erasing-customer-data
locale: es
legacySlug: eliminacion-de-los-datos-de-clientes
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

Según las normas de protección de datos como [LGPD y RGPR] (https://vtex.com/us-en/privacy-and-agreements/vtex-commitment/), las empresas que utilizan datos personales de sus clientes deben aceptar sus solicitudes de eliminación del registro. Por lo tanto, VTEX te permite solicitar la eliminación de datos de los clientes de tu tienda.

## Antes de solicitar la eliminación de datos

Antes de [solicitar la eliminación a través del soporte](#pedir-eliminacion-via-soporte), es importante que compruebes qué entidades de Master Data almacenan datos de clientes en tu operación.

Debes tener cuidado de no eliminar ningún dato de las [entidades nativas de Master Data](#entidades-nativas-de-master-data). Sin embargo, debes eliminar manualmente la información del cliente en [otras entidades de Master Data](#otras-entidades-de-datos), en caso de que tu tienda tenga alguna. Puedes encontrar más detalles a continuación.

### Entidades nativas de Master Data

Con tu [solicitud vía soporte](#pedir-eliminacion-via-soporte), VTEX eliminará los datos de las entidades de datos nativas **CL** y **AD**. Es importante que no elimines los datos de estas entidades.

### Otras entidades de datos

Si tu tienda almacena la información de los clientes en otras entidades de datos, debes eliminar manualmente estos datos antes de hacer una solicitud a través del soporte. Para ello, utiliza la API de Master Data:

1. Busca el documento con el endpoint [Search document](https://developers.vtex.com/vtex-rest-api/reference/searchdocuments-1)

2. Utiliza el request [Delete document](https://developers.vtex.com/vtex-rest-api/reference/deletedocument-1)

>❗ No realices este proceso para las entidades **CL** y **AD**.

## Pedir eliminación vía soporte

Deberás solicitar la extensión de la eliminación de los datos personales de tus clientes en los sistemas de VTEX mediante la apertura de un ticket en nuestro [Soporte VTEX](https://help.vtex.com/es/support).

Para solicitar la eliminación de los datos personales de clientes, sigue los pasos a continuación:

1. Accede a [Soporte VTEX](https://help.vtex.com/es/support).
2. Ingresa tu nombre completo en el campo **Nombre** y selecciona en el campo **Tienda** el nombre de la tienda para la cual deseas abrir el ticket.
3. Haz clic en la opción `Continuar`.
4. Selecciona la opción `Técnico`.
5. En el campo **Tipo de problema**, selecciona la opción `Quiero solicitar una configuración`.
6. En el campo **Asunto de la solicitud**, deberás rellenar la siguiente información:
   * Solicitud de Data Subject Request
   * Cuentas VTEX
   * Email vinculado a las cuentas VTEX cuyos datos deben eliminarse
7. En el campo **Tu experiencia con la plataforma**, selecciona la opción correspondiente a tu experiencia como usuario de la plataforma VTEX.
8. Rellena el campo **Describe en detalle lo sucedido** con los detalles de tu solicitud.
9. Haz clic en `Enviar`.

>⚠️ Solicita la eliminación de los datos de una sola cuenta, es decir, se podrá eliminar el email de un solo comprador por ticket. Si incluyes más de un email, el ticket se rechazará.

La solicitud se enviará a nuestro equipo de soporte. Al cerrar el ticket, se emitirá un certificado que se enviará al email relacionado con la cuenta por la cual se abrió el ticket para comprobar que realmente se eliminaron los datos.

