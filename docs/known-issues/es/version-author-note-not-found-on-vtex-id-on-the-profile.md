---
title: "Autor de la versión 'Nota: No encontrado en VTEX ID.' en el perfil"
id: 0X6Aj6YdCXXfNweAkDS46
status: PUBLISHED
createdAt: 2023-10-04T21:48:14.699Z
updatedAt: 2023-10-04T22:14:45.195Z
publishedAt: 2023-10-04T22:14:45.195Z
firstPublishedAt: 2023-10-04T21:48:15.379Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: autor-de-la-version-nota-no-encontrado-en-vtex-id-en-el-perfil
locale: es
kiStatus: Scheduled
internalReference: 914314
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el cliente realiza una compra, el autor de la versión recibe un id de usuario (guid) o un servicio, seguido del login/nombre/descripción "`Note: Not found on VTEX ID.`" en el perfil.
Este comportamiento no tiene impacto en el perfil o la experiencia del comprador, una vez que esto es sólo acerca de la interfaz de usuario, y es posible comprobar la información por versión API.


##

## Simulación



- Acceso Datos Maestros CRM (por ejemplo https://my-account-here.vtexcrm.com.br);
- Acceda a la pestaña Entidad de Datos CL (Clientes):
- Seleccione un documento y haga clic en el icono del ojo para ver los datos;
- Haga clic en el botón "_Cambiar registro_";
- Abra una versión reciente;
- Compruebe el "_Autor de la versión_", será un identificador de usuario, y el nombre "`Nota: No encontrado en VTEX ID.`", por ejemplo:
 ![](https://vtexhelp.zendesk.com/attachments/token/9ngSibhlO4er0Df3Fi7oQAhot/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/8tlsDbxNSFFHdJMVHf2yvctem/?name=image.png)

- Comprobación mediante la API Get version:
 ![](https://vtexhelp.zendesk.com/attachments/token/MRrTRox5E0t91F3OpsDcRmJ9z/?name=image.png)

    "updatedBy_USER": "{\"Id\":\"d6d8269f-e7cc-4e4b-8b89-3b46a1407937\",\"Login\":\"vtex-service::checkout::stable\",\"Name\":null}",




## Workaround


Puede comprobar el autor utilizando nuestras API:

- Listar versiones
- Obtener versión




