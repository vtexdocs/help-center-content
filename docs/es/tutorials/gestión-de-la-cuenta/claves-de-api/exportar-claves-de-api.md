---
title: 'Exportar claves de API'
id: 1p4eYJWD26gOdicUdiiGC5
status: PUBLISHED
createdAt: 2025-08-12T19:38:30.979Z
updatedAt: 2025-08-13T14:18:34.326Z
publishedAt: 2025-08-13T14:18:34.326Z
firstPublishedAt: 2025-08-13T14:18:34.326Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: exporting-api-keys
legacySlug: exportar-claves-de-api
locale: es
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

La página [Claves de API](/es/docs/tutorials/claves-de-api) permite exportar información de todas las claves generadas y las claves externas relacionadas con la cuenta a un archivo `XLSX`.

## Antes de empezar

Para exportar debes tener el rol [User Administrator \- RESTRICTED](/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) o un rol [personalizado](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso) con el recurso *View API Keys*.

## Instrucciones

Sigue estas instrucciones para exportar las claves:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** que tiene la inicial de tu email.  
2. Haz clic en *Configuración de la cuenta \> Claves de API*.  
3. Haz clic en `Exportar`. La descarga del archivo comenzará instantáneamente.  

A continuación se describen los datos disponibles en la plantilla.

### Pestaña Generadas

| Columna | Descripción |
| :---- | :---- |
| `id` | Código de identificación de la clave de API. |
| `keyName` | Clave de API. |
| `roles` | Roles asociados a la clave de API. |
| `label` | Nombre de la clave de API, definido al crearla. |
| `creationDate` | Fecha de creación de la clave de API. |
| `creationDateToken` | Fecha de creación del token si la clave tiene un token único asociado. Durante el proceso de renovación, la clave tiene dos tokens asociados. En esos casos, esta fecha es la fecha de creación del token que está siendo sustituido por el nuevo (el token que existía antes de iniciar la renovación). |
| `creationDateNewToken` | Si la clave tiene un único token asociado, este campó tendrá valor nulo. Durante el proceso de renovación, la clave tiene dos tokens asociados. En esos casos, este campo representa la fecha de creación del nuevo token que sustituirá al token antiguo (es decir, la fecha en que se inició la renovación). |
| `status` | Status de la clave de API, que puede ser Active (Activa) o Inactive (Inactiva). |

### Pestaña Externas

| Columna | Descripción |
| :---- | :---- |
| `id` | Código de identificación de la clave de API. |
| `keyName` | Clave de API. |
| `roles` | Roles asociados a la clave de API. |
| `account` | Nombre de la cuenta externa a la que la clave pertenece. |
| `addedDate` | Fecha en la que se agregó la clave de API externa. |
| `status` | Status de la clave de API, que puede ser Active (Activa) o Inactive (Inactiva). |

## Más información

* [Claves de API](/es/docs/tutorials/claves-de-api)  
* [Configurar alerta para renovar tokens de API](/es/tutorial/configurar-alerta-para-renovar-tokens-de-api)  
* [Claves generadas](/es/docs/tutorials/claves-generadas) 
* [Claves externas](/es/docs/tutorials/claves-externas)
