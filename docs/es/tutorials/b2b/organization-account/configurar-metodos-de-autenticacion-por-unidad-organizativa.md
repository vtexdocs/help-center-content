---
title: 'Configurar métodos de autenticación por unidad organizativa'
createdAt: '2026-05-21T14:37:00.000Z'
updatedAt: '2026-05-21T14:37:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: configuring-authentication-methods-by-organizational-unit
locale: es
---

> ⚠️ Esta funcionalidad se encuentra disponible únicamente para tiendas que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), actualmente disponible para cuentas seleccionadas.

En B2B, cada unidad organizativa puede tener su configuración de autenticación definida de forma independiente. Esto permite que distintas filiales o divisiones de una misma organización utilicen formas de inicio de sesión diferentes según sus necesidades.

## Configuración disponible

La configuración de autenticación se divide en dos grupos principales: **Identificación del usuario** y **Métodos de autenticación**. Cada grupo puede tener una o más opciones activadas, según las necesidades de la organización.

### Identificación del usuario

Define los identificadores que el usuario puede ingresar al iniciar sesión (nombre de usuario, email o ambos).

| Identificador         | Descripción                                                                   |
| :-------------------- | :---------------------------------------------------------------------------- |
| **Nombre de usuario** | El usuario ingresa su nombre de usuario para iniciar sesión.  |
| **Email**             | El usuario ingresa su dirección de email para iniciar sesión. |

### Métodos de autenticación

Define cómo se autentica el usuario después de la identificación (con contraseña, proveedor de identidad externo o ambos).

| Método                                   | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Contraseña**                           | El usuario se autentica con la contraseña registrada en la plataforma VTEX.                                                                                                                                                                                                                                                                                                                                             |
| **IdP externo (SSO)** | Se redirige al usuario a un proveedor de identidad externo configurado por el retailer para autenticarse mediante Single Sign-On. Consulta [Activar inicio de sesión en la organización a través de un proveedor de identidad (IdP) externo](https://help.vtex.com/es/docs/tutorials/activar-inicio-de-sesion-en-la-organizacion-a-traves-de-un-proveedor-de-identidad-idp-externo). |

Se puede activar una o más opciones en cada grupo. Las opciones que no se hayan activado no están disponibles para los miembros de la unidad organizativa.

## Prerrequisitos

- Tener el rol **Organizational Unit Admin** en la organización compradora.
- Para activar el inicio de sesión a través de un IdP externo el retailer debe haber configurado previamente el proveedor de identidad en el Admin VTEX. Consulta [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) y [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2).
- Tener la app [vtex.login-alternative-key](https://developers.vtex.com/docs/apps/vtex.login-alternative-key) instalada en la tienda.

## Configurar métodos de autenticación en la cuenta de la organización

Para configurar los métodos de autenticación directamente desde la [pantalla inicial de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/cuenta-de-la-organizacion#acceder-a-la-cuenta-de-la-organizacion) sigue los pasos a continuación:

1. Accede a la tienda a través del navegador e inicia sesión con tu usuario.
2. En el menú superior haz clic en **Empresa**. Se mostrará el dashboard de la organización.
3. Haz clic en **Gestionar**.
4. Si quieres configurar los métodos de la organización principal, continúa con el paso 5. Si quieres configurar una unidad organizativa hija, haz clic en **Unidades organizativas** y luego en el nombre de la unidad.
5. Haz clic en el menú **⋮** y luego en **Autenticación**.
6. En el modal **Autenticación** configura las opciones deseadas:

   - En **Identificación de usuario**, selecciona los identificadores que los miembros podrán usar para iniciar sesión (**nombre de usuario**, **email** o ambos).
   - En **Métodos de autenticación**, selecciona los métodos de autenticación disponibles (**contraseña**, **IdP externo** o ambos). Desmarca los que no deseas que estén disponibles.
7. Haz clic en **Guardar**.

## Configurar métodos de autenticación vía API

También puedes gestionar los métodos de autenticación por unidad organizativa vía API. Los endpoints disponibles son:

| Método   | Endpoint                                                                                                                                                              | Descripción                                                                                      |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| `GET`    | [Get organization unit authentication settings](https://developers.vtex.com/docs/api-reference/vtex-id-api#get-/api/vtexid/organization-units/-unitId-/settings)      | Consulta los métodos de autenticación configurados para una unidad organizativa. |
| `POST`   | [Set organization unit authentication settings](https://developers.vtex.com/docs/api-reference/vtex-id-api#post-/api/vtexid/organization-units/-unitId-/settings)     | Define los métodos de autenticación de una unidad organizativa.                  |
| `PATCH`  | [Update organization unit authentication settings](https://developers.vtex.com/docs/api-reference/vtex-id-api#patch-/api/vtexid/organization-units/-unitId-/settings) | Actualiza parcialmente los métodos de autenticación de una unidad organizativa.  |
| `DELETE` | [Delete organization unit authentication setting](https://developers.vtex.com/docs/api-reference/vtex-id-api#delete-/api/vtexid/organization-units/-unitId-/settings) | Elimina un método de autenticación de una unidad organizativa.                   |

## Aprende más

- [Activar inicio de sesión en la organización a través de un proveedor de identidad (IdP) externo](https://help.vtex.com/es/docs/tutorials/activar-inicio-de-sesion-en-la-organizacion-a-traves-de-un-proveedor-de-identidad-idp-externo)
- [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide)
- [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2)
