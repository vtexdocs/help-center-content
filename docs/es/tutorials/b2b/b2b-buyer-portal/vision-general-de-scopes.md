---
title: 'Visión general de Scopes'
createdAt: '2026-03-10T10:00:00.000Z'
updatedAt: '2026-03-30T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
locale: es
slugEN: scopes-overview
---

> ⚠️ Esta funcionalidad es exclusiva para tiendas que usan B2B Buyer Portal, actualmente disponible solo para cuentas seleccionadas.

**Scopes** es una funcionalidad de la cuenta de la organización que permite a las empresas B2B restringir los atributos de las **unidades organizativas** (OU). Además, les da control sobre la información que pueden ver y usar los compradores de una unidad de negocio, limitando el acceso de los usuarios solo a lo necesario para realizar sus funciones.

Cada unidad organizativa tiene un scope propio, que no se hereda de la unidad organizativa a la que está subordinada, sino que se configura individualmente. La siguiente imagen muestra un ejemplo con todas las dimensiones de la cuenta de la organización para el conjunto ABC y tres unidades hijas:

![scopes-overview_1_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/b2b-buyer-portal/scopes-overview_1_ES.png)

Los escenarios presentados son:

- **Unidad organizativa 1:** no tiene un scope configurado y, por lo tanto, dispone de todas las dimensiones de la cuenta de la organización.
- **Unidad organizativa 2:** tiene un scope configurado y dispone solo de la dimensión A.
- **Unidad organizativa 3:** tiene un scope configurado y dispone solo de las dimensiones B y C.

## Restricciones de dimensiones

Las restricciones que se pueden imponer a las **unidades organizativas** están relacionadas con:

- Contratos
- [Medios y condiciones de pago](https://help.vtex.com/es/docs/tutorials/diferencia-entre-medios-de-pago-y-condiciones-de-pago)
- Tarjetas de crédito
- [Colecciones](https://help.vtex.com/es/docs/tutorials/tipos-de-coleccion)
- Direcciones
- Campos contables

> ℹ️ La gestión de **scopes** vía API se realiza mediante [Organization Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).

## Permisos de storefront

Para ver y gestionar el scope de una unidad organizativa, el rol de [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-roles) del usuario debe tener los recursos `View_Organization_Unit` y `Edit_Organization_Unit`.

> ℹ️ Para más información, consulta el artículo [Miembros de la organización compradora](https://help.vtex.com/es/docs/tutorials/miembros-de-la-organizacion-compradora).
