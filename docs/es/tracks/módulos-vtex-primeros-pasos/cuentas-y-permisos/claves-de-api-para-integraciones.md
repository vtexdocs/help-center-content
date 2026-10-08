---
title: 'Claves de API para integraciones'
createdAt: 2020-01-07T20:16:48.764Z
updatedAt: 2026-05-21T19:06:00.000Z
contentType: trackArticle
productTeam: Identity
slugEN: api-keys-for-integrations
locale: es
trackSlugEN: accounts-and-permissions
order: 4
---

Para conectar tu tienda VTEX con sistemas externos (ERPs, herramientas de marketing, plataformas de gestión) utiliza **claves de API** para autenticar esas integraciones de forma segura.

Las claves de API son credenciales que permiten que los sistemas externos accedan a las APIs de VTEX. Cada clave consta de:

- **API Key**: identificador público de la clave.
- **API Token**: contraseña secreta (se muestra solo una vez al crearlo).

Las claves deben estar activas y tener [roles](https://help.vtex.com/es/docs/tutorials/roles) asociados que determinan los recursos a los que se puede acceder.

## Tipos de claves

| Tipo                                               | Descripción                                                                                                                 | Casos de uso                                                             | Documentación                                           |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------- |
| **Claves internas (generadas)** | Creadas en el Admin VTEX. Tienes control total para crear, editar roles, renovar y revocar. | Integraciones con ERP, automatizaciones internas, scripts personalizados | [Claves generadas](https://help.vtex.com/es/docs/tutorials/claves-generadas) |
| **Claves externas (terceros)**  | Creadas por partners/aplicaciones. Solo controlas los roles en tu cuenta.                   | Aplicaciones de VTEX App Store, integraciones con partners certificados  | [Claves externas](https://help.vtex.com/es/docs/tutorials/claves-externas)   |

## Gestionar claves de API

**Gestionadas en:** _Configuración de la cuenta > Claves de API_

**Qué puedes hacer:**

- Ver todas las claves (internas y externas).
- Crear claves internas.
- Agregar claves externas.
- Editar roles.
- Activar/desactivar claves.
- Renovar tokens.
- Eliminar claves.
- Exportar lista para auditoría.

> ℹ️ Consulta [Claves de API](https://help.vtex.com/es/docs/tutorials/claves-de-api).

## Principio de mínimo privilegio

Asocia solo los roles estrictamente necesarios. Ejemplos:

- Integración que **solo lee pedidos** → solo rol de lectura de pedidos
- ERP que gestiona stock → solo roles de catálogo y logística

## Renovación y alertas

Renueva tokens periódicamente (3-6 meses para claves críticas). Configura [alertas automáticas](https://help.vtex.com/es/docs/tutorials/configurar-alerta-para-renovar-tokens-de-api) para evitar vencimientos.

> ⚠️ El token de API se muestra solo una vez al crearlo. Guárdalo de forma segura.

## Requisitos de permisos

Rol [User Administrator - RESTRICTED](https://help.vtex.com/es/docs/tutorials/roles-de-usuario-predefinidos) o un rol personalizado con los recursos:

- View API Keys
- Edit API Keys
- Renew API Token
- Edit API Keys settings

## Mejores prácticas

- Usa nombres descriptivos.
- Aplica mínimo privilegio.
- Guarda los tokens de forma segura (nunca en el código fuente).
- Renueva periódicamente.
- Audita y elimina claves innecesarias.
- Revócala de inmediato si está comprometida.
- Nunca utilices código del lado del cliente para integraciones.
- No compartas tokens por email, chat o tickets.

> ℹ️ Consulta [Buenas prácticas para el uso de claves de API](https://help.vtex.com/es/docs/tutorials/buenas-practicas-claves-de-api).

## Más información

- [Claves de API](https://help.vtex.com/es/docs/tutorials/claves-de-api)
- [Buenas prácticas para el uso de claves de API](https://help.vtex.com/es/docs/tutorials/buenas-practicas-claves-de-api)
- [Claves generadas](https://help.vtex.com/es/docs/tutorials/claves-generadas)
- [Claves externas](https://help.vtex.com/es/docs/tutorials/claves-externas)
- [Renovar token de API](https://help.vtex.com/es/docs/tutorials/renovar-token-de-api)
- [Configurar alerta para renovar tokens de API](https://help.vtex.com/es/docs/tutorials/configurar-alerta-para-renovar-tokens-de-api)
- [Exportar claves de API](https://help.vtex.com/es/docs/tutorials/exportar-claves-de-api)
- [Roles](https://help.vtex.com/es/docs/tutorials/roles)
- [Recursos de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager)
- [API authentication using application keys](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) (para desarrolladores)
