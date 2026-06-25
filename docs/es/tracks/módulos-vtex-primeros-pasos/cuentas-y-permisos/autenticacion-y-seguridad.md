---
title: 'Autenticación y seguridad'
createdAt: 2020-01-07T21:12:36.958Z
updatedAt: 2026-05-21T19:06:00.000Z
contentType: trackArticle
productTeam: Identity
slugEN: authentication-and-security
locale: es
trackSlugEN: accounts-and-permissions
order: 3
---

La seguridad de tu cuenta VTEX depende de configuraciones adecuadas de autenticación para usuarios administrativos (Admin) y clientes (tienda virtual).

## Métodos de autenticación disponibles

VTEX ofrece diferentes métodos de inicio de sesión que puedes activar según tus necesidades:

| Método                                          | Admin          | Tienda virtual |
| ----------------------------------------------- | -------------- | -------------- |
| Código de acceso                                | Siempre activo | Opcional       |
| Contraseña                                      | Siempre activo | Opcional       |
| 2FA (obligatorio para Admin) | ✅ Obligatorio  | No aplicable   |
| Google                                          | Opcional       | Opcional       |
| Facebook                                        | No disponible  | Opcional       |
| SAML 2.0                        | Opcional       | No disponible  |
| OAuth 2.0                       | No disponible  | Opcional       |

**Configurarlo en:** _Configuración de la cuenta > Autenticación_

> ℹ️ Consulta [Autenticación](/es/docs/tutorials/autenticacion).

## Autenticación de dos factores (2FA)

> ❗ La autenticación de dos factores (2FA) es **obligatoria** para iniciar sesión en el Admin con email y contraseña.

La 2FA agrega una segunda capa de seguridad y, además de la contraseña, exige un código temporal generado en el celular.

Los métodos disponibles son:

- **Aplicación de autenticación (recomendado)**: utiliza Google Authenticator para generar códigos en el celular. Funciona offline y es más seguro.
- **SMS**: recibe códigos por mensaje de texto. Depende de la operadora de telefonía.

El código se solicita cada 10 días en el mismo navegador.

> ℹ️ Consulta [Habilitar inicio de sesión por autenticación de 2 factores](/es/docs/tutorials/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores).

> ℹ️ Para recuperar el acceso, consulta [Restablecer la contraseña de acceso al Admin VTEX](/es/docs/tutorials/restablecer-contrasena-de-acceso-al-admin-vtex).

## Inicio de sesión con redes sociales (Google y Facebook)

Permite que los usuarios inicien sesión con sus cuentas de Google o Facebook, ofreciendo una experiencia más sencilla y aprovechando los estándares de seguridad de estos proveedores.

- **Google**: disponible para Admin y tienda virtual
- **Facebook**: disponible solamente para tienda virtual

**Configuración:** requiere crear credenciales (Client ID y Client Secret) en los proveedores e ingresarlas en el Admin.

> ℹ️ Consulta [Configurar inicio de sesión con Facebook y Google](/es/docs/tutorials/configurar-inicio-de-sesion-con-facebook-y-google).

## Vencimiento de contraseña

Configura el vencimiento automático de las contraseñas después de 15, 30 o 90 días, forzando una renovación periódica.

**Configurarlo en:** _Configuración de la cuenta > Autenticación > Contraseña > Editar_

## Integraciones avanzadas

**SAML 2.0 (Admin)**  
Integra con proveedores de identidad corporativos (Azure AD, Okta, etc.).

> ℹ️ Consulta [Admin (SAML 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2).

**OAuth 2.0 (tienda virtual)**  
Integra con proveedores externos para experiencias personalizadas de inicio de sesión.

> ℹ️ Consulta [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2).

## Mejores prácticas

- Opta por utilizar 2FA vía aplicación, y no SMS.
- Configura el vencimiento de la contraseña.
- Exige contraseñas seguras (mínimo 8 caracteres, números, mayúsculas y minúsculas).
- Activa solo los métodos necesarios.
- Revisa los accesos regularmente.

## Más información

- [Autenticación](/es/docs/tutorials/autenticacion)
- [Habilitar inicio de sesión por autenticación de 2 factores](/es/docs/tutorials/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores)
- [Configurar inicio de sesión con Facebook y Google](/es/docs/tutorials/configurar-inicio-de-sesion-con-facebook-y-google)
- [Restablecer la contraseña de acceso al Admin VTEX](/es/docs/tutorials/restablecer-contrasena-de-acceso-al-admin-vtex)
- [Configurar datos personales en la pantalla de usuario](/es/docs/tutorials/configurar-datos-personales-en-la-pantalla-de-usuario)
