---
title: 'Claves de API'
id: 4bFEmcHXgpNksoePchZyy6
status: PUBLISHED
createdAt: 2024-09-30T18:35:47.348Z
updatedAt: 2025-08-13T14:18:57.598Z
publishedAt: 2025-08-13T14:18:57.598Z
firstPublishedAt: 2024-10-08T18:26:20.965Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: api-keys
legacySlug: claves-de-api-beta
locale: es
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

Cada integración por API utilizada para conectar tu cuenta VTEX con sistemas externos requerirá la creación de una **clave de API**, que en inglés se denomina API key. Para cada clave, hay un **token de API** (o API token), que funciona como una contraseña para el uso de esa credencial.

Estas credenciales de [autenticación](https://developers.vtex.com/docs/guides/authentication) se utilizan para garantizar acceso seguro a los datos que deseas compartir con las integraciones, sin exponer tu cuenta a aplicaciones o usuarios no autorizados.

Para que una clave de API pueda realizar con éxito requests de API a tu cuenta, debe estar activa y tener [roles](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) que especifiquen los recursos de la cuenta a los que tiene permiso para acceder.

## Tipos de claves de API

Existen dos tipos de claves de aplicación: [internas](#claves-internas) o [externas](#claves-externas). Esta definición depende de la cuenta que crea, gestiona y utiliza la credencial.

### Claves internas

Las [claves de API internas](https://help.vtex.com/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc) son credenciales generadas y gestionadas en tu cuenta VTEX. Esto significa que debes tener acceso a todos los pares de claves y tokens de API (el equivalente a los nombres de usuario y las contraseñas para las integraciones de API).

### Claves externas

Las [claves de API externas](https://help.vtex.com/es/tutorial/claves-externas--1isU0HfKkeg0atlxRha14Q) son credenciales generadas y administradas por otras cuentas VTEX. Al agregar [roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) a las claves de API (el equivalente a los nombres de usuario) proporcionadas por terceros, tienes la opción de permitir que accedan a recursos específicos de tu cuenta.

## Gestionar claves de API

La página **Claves de API** del Admin VTEX te permite gestionar las claves de API con acceso a tu tienda. Consulta las guías a continuación para más detalles sobre la información y las acciones disponibles en esta página:

* [Exportar claves de API](https://help.vtex.com/es/tutorial/exportar-claves-de-api--1p4eYJWD26gOdicUdiiGC5): permite descargar una plantilla con los datos de las claves de API generadas y externas.

* [Configuración](https://help.vtex.com/es/tutorial/configurar-la-duracion-de-claves-de-api--kcGIFysFt02FDuhsfjQwZ): permite definir el periodo recomendado de renovación de tokens. Cuando se cumple el límite establecido para el token, la interfaz muestra una alerta de renovación. Esta configuración se aplica a todos los tokens de clave.

   > ℹ️ El token no vence después del plazo definido. La configuración solamente determina cuándo la interfaz recomendará la renovación.

   ![token-renewal-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/gesti%C3%B3n-de-la-cuenta/claves-de-api/claves-de-api_1.png)

* [Claves generadas](https://help.vtex.com/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc): permite gestionar las claves de API creadas y administradas por tu cuenta VTEX.

   ![generated-keys-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/gesti%C3%B3n-de-la-cuenta/claves-de-api/claves-de-api_2.png)

* [Claves externas](https://help.vtex.com/es/tutorial/claves-externas--1isU0HfKkeg0atlxRha14Q): permite gestionar claves de API creadas y administradas por otras cuentas VTEX, con acceso a recursos específicos de tu cuenta.

   ![apikeys-external-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/gesti%C3%B3n-de-la-cuenta/claves-de-api/claves-de-api_3.png)

## Requisitos para gestionar claves de API

Para gestionar claves de API, es obligatorio tener el rol [User Administrator - RESTRICTED](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) o un rol [personalizado](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso) con los siguientes recursos:

* *View API Keys* (ver, filtrar, buscar, ordenar y exportar claves de API generadas y externas)
* *Edit API Keys* (crear, eliminar, cambiar el status y agregar o remover permisos)
* *Renew API Token* (ver y renovar tokens de claves generadas)
* *Edit API Keys settings* (editar configuración de la duración de tokens de claves generadas)

Aprende más sobre cada recurso en [Recursos de License Manager](https://help.vtex.com/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).

## Más información

* [Configurar la duración de las claves de API](https://help.vtex.com/es/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [Claves terceras](https://help.vtex.com/es/tutorial/chaves-terceiras--1isU0HfKkeg0atlxRha14Q)  
* [Claves generadas](https://help.vtex.com/es/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)  
* [Renovar token de API](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3)
