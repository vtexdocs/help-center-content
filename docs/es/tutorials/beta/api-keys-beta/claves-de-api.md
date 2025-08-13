---
title: 'Claves de API (Beta)'
id: 4bFEmcHXgpNksoePchZyy6
status: PUBLISHED
createdAt: 2024-09-30T18:35:47.348Z
updatedAt: 2025-02-05T19:46:51.454Z
publishedAt: 2025-02-05T19:46:51.454Z
firstPublishedAt: 2024-10-08T18:26:20.965Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: api-keys
legacySlug: claves-de-api-beta
locale: es
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si te interesa implementarla en el futuro, ponte en contacto con <a href="https://support.vtex.com/hc/es-419">nuestro soporte</a>.</p>
</div>

Cada integración por API utilizada para conectar tu cuenta VTEX con sistemas externos requerirá la creación de una **clave de API**, que en inglés se denomina API key\<. Para cada clave, hay un **token de API** (o API token), que funciona como una contraseña para el uso de esa credencial.

Estas credenciales de [autenticación](https://developers.vtex.com/docs/guides/authentication) se utilizan para garantizar acceso seguro a los datos que deseas compartir con las integraciones, sin exponer tu cuenta a aplicaciones o usuarios no autorizados.

Para que una clave de API pueda realizar con éxito requests de API a tu cuenta, debe estar activa y tener [roles](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) que especifiquen los recursos de la cuenta a los que tiene permiso para acceder.

La página **Claves de API** del Admin VTEX te permite gestionar las claves de API con acceso a tu tienda. Consulta las guías a continuación para más detalles sobre la información y las acciones disponibles en esta página:

* [Configuración](https://help.vtex.com/es/tutorial/configurar-la-duracion-de-claves-de-api--kcGIFysFt02FDuhsfjQwZ): permite definir la duración predeterminada de las claves de API generadas en tu cuenta.

   ![apikeys-settings-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/api-keys-beta/claves-de-api_1.png)

* [Claves generadas](https://help.vtex.com/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc): permite gestionar las claves de API creadas y administradas por tu cuenta VTEX.

   ![apikeys-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/api-keys-beta/claves-de-api_2.png)

* [Claves externas](https://help.vtex.com/es/tutorial/claves-externas--1isU0HfKkeg0atlxRha14Q): permite gestionar claves de API creadas y administradas por otras cuentas VTEX, con acceso a recursos específicos de tu cuenta.

   ![apikeys-external-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/api-keys-beta/claves-de-api_3.png)

## Requisitos para gestionar claves de API

Para gestionar claves de API, es obligatorio tener el rol [User Administrator - RESTRICTED](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) o un rol [personalizado](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso) con los siguientes recursos:

* *View API Keys* (ver, filtrar, buscar y ordenar claves de API generadas y externas)
* *Edit API Keys* (crear, eliminar, cambiar el status y agregar o remover permisos)
* *Renew API Token* (ver y renovar tokens de claves generadas)
* *Edit API Keys settings* (editar configuración de la duración de tokens de claves generadas)

Más información sobre cada recurso en [Recursos de License Manager](https://help.vtex.com/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).  
