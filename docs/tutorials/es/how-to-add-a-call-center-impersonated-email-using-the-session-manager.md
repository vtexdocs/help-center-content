---
title: 'Cómo ingresar un correo electrónico de operador de televentas personificado con el Session Manager'
id: 4tT90hWRChUy84UClF8pC
status: DRAFT
createdAt: 2020-05-29T13:00:15.053Z
updatedAt: 2022-08-04T22:34:08.245Z
publishedAt: 
firstPublishedAt: 2020-05-29T13:11:22.057Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: como-ingresar-un-correo-electronico-de-operador-de-televentas-personificado
legacySlug: como-ingresar-un-correo-electronico-de-operador-de-televentas-personificado
subcategory: dajK0sARX2c0MISKKoGoc
---

Para las operaciones B2B, es fundamental que los operadores de televentas puedan cerrar los pedidos en nombre de los clientes, es decir, "personificando" a esos clientes. Esto se debe a que, en este escenario, es una práctica común que las ventas se realicen en la plataforma, pero no las ejecuta directamente el cliente.

Para permitir este tipo de venta, VTEX ofrece la funcionalidad de televentas, a través de la cual un operador "toma el lugar" del cliente final durante el proceso de elección de los productos y el checkout. El operador asume el usuario del cliente, con permisos limitados, y puede realizar compras.

## Toolbar de televentas

La forma más simple de utilizar esta funcionalidad es a través del toolbar de televentas. Es una barra superior que aparece en el front-end de la tienda una vez que el operador registrado inicia sesión en el ambiente de esta. Se muestra en todas las áreas del sitio web, excepto en la pantalla Mis Pedidos.

Estos son los pasos necesarios para usar el toolbar de televentas:
- [Crear un usuario con permiso de televentas.](https://help.vtex.com/es/tutorial/como-criar-um-usuario-de-televendas--frequentlyAskedQuestions_4227)
- [Realizar la compra vía televentas.](https://help.vtex.com/es/tutorial/comprar-em-nome-do-cliente-pelo-televendas--4gsnClNy1iUCkSK6y0GI2O)
- [Personalizar el toolbar de televentas.](https://help.vtex.com/es/tutorial/usando-e-customizando-toolbar-de-televendas--tutorials_5500)

## API de Session

Aunque el toolbar de televentas es la opción más sencilla para permitir compras "personificadas", es posible utilizar la API de Session Manager para conseguir el mismo efecto, pero con un mayor control por parte de la tienda.

[Session Manager](https://help.vtex.com/es/tutorial/using-session-manager-to-track-browsing-sessions-in-vtex-stores--1pA0tqsD4BFnJYhQ7ORQBd) es un sistema que rastrea la sesión de navegación actual de todos los clientes finales en las tiendas VTEX. Su API permite a la tienda obtener información relevante de la sesión, que se captura automáticamente y se almacena en un lugar seguro y de fácil acceso.

Para operaciones B2B más complejas, puede ser interesante construir una integración directamente con la API de Session Manager. En este caso, en lugar de hacer la personificación del cliente a través del toolbar de televentas, la tienda ingresa el correo electrónico del cliente que se personificará en la información de Session Manager. 

Si el administrador de la sesión tiene permiso para personificar clientes, el ID y el correo electrónico del usuario personificado se cargarán en la sesión, y el operador podrá hacer compras en nombre de este usuario.

### Instalando la app vtex.impersonate-session

Session se compone de objetos JSON, que se alimentan con información de una serie de apps instaladas en la tienda. Una de estas apps es `vtex.impersonate-session`. Esta es la que permite la personificación de los clientes.

Esta app no está instalada por defecto en las tiendas VTEX, así que, para empezar, tiene que instalarla. Para esto, debe utilizar el CLI de VTEX. Si aún no está instalado en su computadora, haga la instalación utilizando el siguiente comando en su terminal:

`yarn global add vtex`

Si desea saber más detalles sobre el CLI de VTEX, consulte la [documentación de VTEX IO Toolbelt](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-toolbelt).

Con el CLI instalado, inicie sesión en su tienda utilizando el siguiente comando:

`vtex login`

Ahora, vamos a instalar la app `vtex.impersonate-session`. Para esto, digite el siguiente comando:

`vtex install vtex.impersonate-session`

Listo, la app está instalada en su tienda, y con eso se ha habilitado el recurso de personificación de clientes.

### Utilizando Session Manager para personificar clientes

La app `vtex.impersonate-session`, así como todas las apps que tienen dependencias de sesión, monitorean los cambios en sus entradas y modifican los parámetros de sesión a través de sus salidas.

Esta recibe el parámetro `vtex-impersonated-customer-email` por medio de un POST directo o una cookie e intenta personificar al usuario propietario de ese correo electrónico utilizando las credenciales de administrador en la sesión. Si estas credenciales tienen permitido personificar clientes (es decir, si el usuario del operador tiene el perfil de acceso de televentas), se cargan el ID y el correo electrónico del usuario personificado en la sesión.

Estos son los inputs que van en llamada:

- __public__: `vtex-impersonated-customer-email`
- __cookie__: `vtex-impersonated-customer-email`
- __authentication__: `adminUserEmail`

Y estos son los outputs que la app devuelve:

- __impersonate__: `storeUserId`, `storeUserEmail`, `canImpersonate`, `account`

Veamos un ejemplo de objeto enviado en el request:

```json
{
    "public": {
        "vtex-impersonated-customer-email": {
            "value": "client@gmail.com"
        },
        "authentication": {
            "value": "operator@gmail.com"
        }
    }
}
```

Y ahora, un ejemplo de body de la respuesta:

```json
"public": {
            "vtex-impersonated-customer-email": {
                "value": "client@gmail.com"
            },
            "authentication": {
                "value": "operator@gmail.com"
            }
        },
        "impersonate": {
            "canImpersonate": {
                "value": "true"
            },
            "account" : {
                "value": "myStore"
            }
        }
```
