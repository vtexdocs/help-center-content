---
title: 'VTEX Session - Visión General del Sistema de Sesiones'
id: 6C4Edou6bYqqEAOCAg2MQQ
status: DRAFT
createdAt: 2018-08-21T15:45:23.559Z
updatedAt: 2022-09-20T20:45:46.176Z
publishedAt: 
firstPublishedAt: 2018-09-11T21:09:10.797Z
contentType: tutorial
productTeam: Identity
author: authors_59
slug: vtex-session-vision-general-del-sistema-de-sesiones
locale: es
legacySlug: vtex-session-vision-general-del-sistema-de-sesiones
subcategory: dajK0sARX2c0MISKKoGoc
---

El __Sistema de Sesiones__ de VTEX es una nueva arquitectura que permite al comerciante utilizar nuevos features de la plataforma y potencializar su uso. Con la instalación del nuevo sistema de sesiones, su tienda podrá atender escenarios complejos de __B2B__, podrá __regionalizar la experiencia__ de su cliente y realizar segmentaciones de promociones por __Audiencia de las Campañas__.

## Funcionamiento del sistema de sesiones

### Cookie vtex_session

El sistema de sesiones identifica a través de la cookie `vtex_session` las informaciones de una sesión específica de un usuario que navega en su tienda.

Es posible ver las propiedades de una sesión haciendo un `GET` en la ruta
`{{accountname}}.{{environment}}.com.br/api/sessions?items={{namespace}}.{{value}},{{namespace}}.{{value2}}`.

En el JSON de respuesta, la API devuelve varios __namespaces__. Los namespaces son las claves que agrupan ciertos tipos de información sobre la sesión.

A continuación, sigue el ejemplo de una respuesta con los datos básicos de una sesión:

```json
{
    "id": "840f8910-eb3b-4f25-8d51-a06445317906",
    "namespaces": {
        "account": {
            "id": {
                "value": "0e914df8-c516-45bc-a45a-0aab6482eaf7",
                "keepAlive": true
            },
            "accountName": {
                "value": "qamarketplace"
            }
        },
        "store": {
            "channel": {
                "value": "1"
            }
        },
        "impersonate": {
            "canImpersonate": {
                "value": "false"
            }
        },
        "profile": {
            "isAuthenticated": {
                "value": "false"
            }
        }
    },
    "version": 1,
    "active": true,
    "debug": false
}
```

A continuación, sigue una lista con los namespaces posibles que pueden ser devueltos por la API:

- `account`: Namespace con las informaciones sobre la cuenta donde está ocurriendo la sesión.
- `checkout`: Namespace con las informaciones relacionadas al checkout, como id del carrito en la sesión (`cartId`) y la región (`regionId`) que el checkout devuelve para identificar la ubicación geográfica del usuario navegando en esta sesión.
- `store`: Namespace con las informaciones sobre el canal de venta vigente en la sesión.
- `cookie`: Namespace con las informaciones de las cookies de autenticación del usuario.
- `impersonate`: Namespace que identifica si el usuario que inició sesión tiene permiso para impersonar a otro usuario y realizar la navegación por él.
- `profile`: Namespace con las informaciones relacionadas con el perfil del cliente que inició sesión. Las price tables elegibles para el cliente se enumeran en este namespace.
- `public`: Namespace con las informaciones generales sobre la sesión, `utm_campaign`, `utm_source` y `utmi_campaign`. En este namespace, también encontramos la información de `country` y `postalCode`, que se pasan para que el checkout de VTEX devuelva el `regionId`, exhibido en el namespace `checkout`.
- `authentication`: Namespace con los datos de autenticación de los usuarios en el contexto de la sesión.
- `rnb`: Namespace devuelve las informaciones relacionadas con audiencias de campañas y promociones que se pueden aplicar a la sesión.

### Cookie vtex_segment

VTEX Sessions también crea la cookie `vtex_segment`. Esta cookie contiene las informaciones con las condiciones comerciales que se aplicarán a una sesión.

Es posible ver las propiedades de un segment haciendo un `GET` en la ruta
`{{accountName}}.{{environment}}.com.br/api/segments/{{segmentToken}}`

A continuación, sigue el ejemplo de una respuesta con los datos de un segment:

```json
{
    "campaigns": "vip",
    "channel": "1",
    "priceTables": "gold",
    "regionId": "U1cj",
    "utm_campaign": "black friday",
    "utm_source": "google",
    "utmi_campaign": "banner"
}
```
Es importante resaltar que la sesión identificada por la cookie `vtex_session` es __individual__. Y la cookie `vtex_segment` utiliza informaciones que pueden ser __compartidas__ entre diferentes usuarios. Por ejemplo: una misma price table puede estar disponible para usuarios diferentes en sesiones distintas. De esta manera, `vtex_segment` se utiliza para controlar la clave de caché de las páginas.

## Alterar la información de una sesión

Se puede alterar las informaciones de una sesión realizando un `POST` en la siguiente ruta:

`{{account-name}}.{{environment}}.com.br/api/sessions/{{session_token}}`

A continuación, sigue el ejemplo de un `body` para actualizar las informaciones de una sesión:

```json
{
	"public":{
		"utm_campaign":{
			"value":"Black Friday"
		},
		"country":{
			"value":"USA"
		},
		"postalCode":{
			"value":"05408000"
		}
	}
}
```

## Principales features relacionados con el Sistema de Sesiones

### Price Tables

El feature Price Table se identifica por el sistema de sesiones en el namespace  `profile`. La tabla de precios muestra valores personalizados para el usuario identificado que está navegando en la tienda. Usted podrá crear tablas de precios para grupos clientes específicos. Las Price Tables pueden utilizarse principalmente para atender el escenario de B2B. Para configurar tablas de precio en su tienda, ingrese a nuestra documentación sobre cómo [configurar Price Tables](https://help.vtex.com/es/tutorial/configurar-price-tables).

### Region

El feature region es identificado por el sistema de sesiones en el namespace `checkout`, en la propiedad `regionId`, que se genera cuando se agregan un `postalCode` y un `country` a la sesión. El feature tiene como objetivo regionalizar la experiencia del usuario de la tienda. Permite, por ejemplo, que sellers configuren sus propios precios y que los marketplaces los exhiban de acuerdo con la región del cliente. Para configurar el precio y la disponibilidad de acuerdo con la región del usuario, ingrese a nuestro artículo sobre [configurar precio y disponibilidad de SKUs por Región](https://help.vtex.com/es/tutorial/%20configurar-el-precio-y-la-disponibilidad-de-skus-por-region)

### Audiencia de las Campañas

Las Audiencia de campañas son reglas de clústerización que permiten la aplicación de promociones para clientes que cumplen las reglas de la audiencia de campaña. El feature de Audiencia de las Campañas funciona de manera similar a las Price Tables. En el módulo **Tasas y Promociones**, es posible crear condiciones que aplican una promoción a un determinado cliente, si se cumplen las condiciones de audiencia de campaña.

