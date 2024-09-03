---
title: 'Utilizando Session Manager para rastrear sesiones de navegación en tiendas VTEX '
id: 1pA0tqsD4BFnJYhQ7ORQBd
status: ARCHIVED
createdAt: 2019-11-19T20:42:07.386Z
updatedAt: 2022-08-04T22:36:05.292Z
publishedAt: 
firstPublishedAt: 2019-11-19T22:44:09.933Z
contentType: tutorial
productTeam: Identity
author: 6LC2rhKOT6njHIo2w4cMu1
slug: utilizando-session-manager-para-rastrear-sesiones-de-navegacion-en-tiendas-vtex
locale: es
legacySlug: utilizando-session-manager-para-rastrear-sesiones-de-navegacion-en-tiendas-vtex
subcategoryId: dajK0sARX2c0MISKKoGoc
---

Session Manager es un sistema que rastrea la sesión de navegación actual de todos los clientes en plataformas VTEX. La información importante de la sesión se captura automáticamente y se almacena en un lugar seguro y de fácil acceso. Esto incluye datos como cookies relevantes, query strings, credenciales de autenticación, perfil actual e información de precios si es aplicable.

Antes de crearse Session Manager, un desarrollador tendría que buscar información en diversos lugares para realizar una tarea: obtener información de autenticación utilizando [VTEX ID API](https://help.vtex.com/es/tutorial/verificacion-del-usuario-que-está-autenticado--4vLALC0yrsJydfaY56Zshq), obtener precios calculados luego de una simulación de carrito utilizando [Checkout API](https://developers.vtex.com/reference/checkout-api-overview), información de campañas utilizando [Promotions & Taxes API](https://developers.vtex.com/reference/rates-and-benefits-api-overview), y así sucesivamente. 

Ahora puede realizar un único request a [Session Manager API](https://developers.vtex.com/reference/session-manager-api-overview) y recibir un único paquete agregado con toda la información actualizada que necesita de un cliente específico, en lugar de hacer múltiples requests a diferentes endpoints.

Este artículo tiene como objetivo describir Session Manager desde una perspectiva de sistema. Para más detalles sobre cómo interactuar con  Session Manager API, vea nuestros [developer docs](https://developers.vtex.com/reference/session-manager-api-overview).

## Obteniendo y almacenando información de sesión 

Cada vez que un nuevo dispositivo entra en contacto con la infraestructura VTEX, Session Manager recibe un request  para crear una nueva sesión. Eventos que dispararían este request incluyen visitas a las páginas de la tienda, abrir el panel administrativo de VTEX y cargar la interfaz del vendedor de inStore, por nombrar algunos. Una vez que se crea una nueva sesión, Session Manager comenzará a recibir toda la información importante asociada con la navegación de aquel dispositivo específico.

Utilizando Session Manager API, puede realizar un request para recibir los datos de sesión que necesita para su aplicación. Esto incluye deducciones importantes hechas por módulos VTEX. Consulte la sección [datos disponibles por apps VTEX](#datos-disponibles-por-apps-vtex) para obtener más información.

Por ejemplo, un usuario con un enlace de campaña específico podría tener una tabla de precios promocional configurada en  su sesión, lo que haría que él vea precios actualizados al navegar por la tienda que creó esta campaña.

Además de obtener información de sesión para un dispositivo que esté navegando por la infraestructura de VTEX, Session Manager le permite almacenar *datos personalizados* en aquella sesión. Esta información es fácilmente recuperable y le permite evitar hacer algo como configurar una cookie para registrar información específica sobre un usuario.

>ℹ️ Session Manager también fue construido para permitir a los desarrolladores crear sus propios triggers y lógica de procesamiento. Todavía estamos finalizando el desarrollo de esta solución expandible, pero en el futuro usted debería ser capaz de configurar la ejecución condicional de código personalizado, de acuerdo con la presencia de valores específicos de parámetros en los datos de sesión de un usuario.

## Agregar datos de sesión: llamadas create y transform
Estrictamente hablando, Session Manager es un sistema backend de API que almacena y procesa datos de sesión contenidos en objetos JSON. Cada cuenta VTEX tiene configuraciones que indican qué apps instaladas tienen una dependencia de sesión y cómo estas pretenden procesar esta información.

Apps que tienen una dependencia de sesión monitorean cambios en sus entradas y modifican parámetros de sesión a través de sus salidas. Cuando un parámetro de sesión cambia, Session Manager notifica a todas las apps que lo están monitoreando  y espera sus respuestas, que indicarían si algún otro parámetro necesita actualizarse como resultado. Session Manager actualiza los datos de la sesión con una compilación de las respuestas enviadas por todas las apps si es necesario. Llamamos a este ciclo notificación / respuesta / actualización de **llamada transform** o transform.

Transforms frecuentemente disparan otros transforms, repitiendo hasta que ninguna actualización de parámetro adicional sea enviada por apps. Esta operación es, por supuesto, cuidadosamente monitoreada para evitar condiciones de loop. El siguiente diagrama ilustra un ejemplo de un ciclo de transform:

![EN - Session Manager](https://images.ctfassets.net/alneenqid6w5/1QWb3hs5wfr3Zj38TnpwHY/162fb09edaf6fca3b5cdf3ce7d5a20b2/Session_Manager.jpg)

1. Se realizó un cambio en el parámetro de sesión X
2. App A monitoreaba el parámetro de sesión X, lo que disparó el Transform 1
3. Transform 1 llevó a la App A a modificar el parámetro de sesión Y
4. Apps B y C monitoreaban el parámetro de sesión Y, lo que disparó el Transform 2
5. Transform 2 llevó a la App B a modificar el parámetro de sesión Z
6. App C monitoreaba el parámetro de sesión Z, lo que disparó el Transform 3
7. Transform 3 no tuvo efectos colaterales en parámetros monitoreados por apps, por lo tanto, el ciclo se cerró y la sesión se guardó hasta que otros cambios sean hechos. 

>ℹ️ Llamadas transform se realizan a todas las apps simultáneamente para optimizar el desempeño. Es por esto que la App C fue afectada por el Transform 2 y por el Transform 3 - no tenía forma de saber que el resultado de Transform 2 en la  App B llevaría a la necesidad de cambios adicionales en sus parámetros de salida.

Cuando se crea una nueva sesión, se ejecuta una versión más sencilla de este ciclo, que llamamos **llamada create**. Todas las apps que tengan la configuración `RunOnCreate: true` serán notificadas para que se ejecuten simultáneamente con una entrada vacía. Si estas apps modifican cualquier parámetro monitoreado por otras apps, esto dispara un ciclo de transform que se ejecutará hasta que se resuelvan las dependencias de entrada.

## Datos proporcionados por apps VTEX

### Store (vtex.store-session)

|     |     |
| --- | --- |
| **RunOnCreate** | true |
| **Inputs**        | `public`: cultureInfo, sc, locale |
|                   | `profile`: email, isAuthenticated |
| **Outputs**       | `store`: channel, countryCode, cultureInfo, currencyCode, currencySymbol |

Esta app es responsable de identificar al usuario actual de la sesión (utilizando el correo electrónico si está disponible) para obtener la política comercial correspondiente y la información relacionada. 

También es sensible al parámetro de entrada `sc`, que se interpreta como una solicitud de política comercial; en otras palabras, si está presente, la app comprueba si la política comercial consta como una de las posibilidades activas para aquel  usuario y la selecciona si es posible. En caso contrario, el usuario recibe un error 401 si no está autenticado o 403 si lo está.

Los parámetros de entrada `locale` y `cultureInfo` se utilizan para sobrescribir el parámetro de salida `cultureInfo` y asegurar que el idioma de la sesión pueda ser ajustado de acuerdo con las preferencias del usuario.

### Authentication (vtex.authentication-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `cookie`: VtexIdclientAutCookie, VtexIdclientAutCookie_.* |
| **Outputs**       | `authentication`: adminUserId, adminUserEmail, storeUserId, storeUserEmail |

Esta app es utilizada como nuestro principal método de autenticación: obtener la cookie VTEXID del request, validarla y extraer el ID de usuario o admin.

### Profile (vtex.profile-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `public`: storeUserEmail |
|                   | `authentication`: storeUserId |
|                   | `impersonate`: storeUserId |
| **Outputs**       | `profile`: id, email, firstName, lastName, phone, document, priceTables, isAuthenticated |

Esta app asegura que la información del usuario corresponde a lo que cargó la sesión.

En caso de que el parámetro de entrada `storeUserEmail` se defina en el namespace `public`, se asume que no hay cookie de autenticación. En este caso, el parámetro de salida `isAuthenticated` se define como `false` y apenas las tablas de precio (`priceTables`) se cargan para aquel usuario. Por otro lado, en caso de que el parámetro de entrada `storeUserId` se defina en el namespace `authentication` o `impersonate`, toda la información relevante se cargará a partir del Master Data.

### Rates and Benefits (vtex.rnb-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `profile`: email |
|                   | `public`: utm_source, utm_campaign, postalCode |
| **Outputs**       | `rnb`: campaigns |

Esta app se integra con nuestro sistema de Tasas y Promociones, identificando las campañas para las cuales el usuario es  elegible.

### Checkout (vtex.checkout-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `public`: regionId, country, postalCode, geoCoordinates |
| **Outputs**       | `checkout`: regionId, cartId |

La app de checkout se ocupa de todo lo relacionado con la experiencia de compra del usuario. Actualmente, busca la ubicación del usuario (para que sea una entrada válida, la ubicación debe incluir el país y el código postal o las coordenadas geográficas). La salida también contiene el id del carrito usado durante el proceso de checkout.

### Impersonate (vtex.impersonate-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `public`: vtex-impersonated-customer-email |
|                   | `cookie`: vtex-impersonated-customer-email |
|                   | `authentication`: adminUserEmail |
| **Outputs**       | `impersonate`: storeUserId, storeUserEmail, canImpersonate, account |

La app de impersonate es la única app del framework de la sesión que no forma parte del paquete predeterminado y debe instalarse manualmente en cada tienda. Habilita la característica de suplantación de cliente (customer impersonation), que es particularmente útil para los centros de llamadas que deben hacer compras en nombre del cliente. Recibe el parámetro vtex-impersonated-customer-email, ya sea a través de POST directo o cookie, e intenta suplantar a ese usuario utilizando las credenciales de admin en la sesión. Si dicho par tiene el permiso para la suplantación, entonces el ID y el correo electrónico del usuario suplantado se cargarán en la sesión.
