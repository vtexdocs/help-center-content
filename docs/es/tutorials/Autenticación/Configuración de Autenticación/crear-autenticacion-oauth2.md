---
title: 'Crear autenticación OAuth2'
id: 21LbTSTgag4MsuisQsyIm6
status: PUBLISHED
createdAt: 2019-01-24T20:45:47.861Z
updatedAt: 2021-10-14T19:16:15.207Z
publishedAt: 2021-10-14T19:16:15.207Z
firstPublishedAt: 2019-01-24T22:04:05.091Z
contentType: tutorial
productTeam: Identity
author: 2LFh4Ox3XiWIqUMWw4MOGw
slugEN: creating-an-oauth2-authentication
legacySlug: crear-autenticacion-oauth2
locale: es
subcategoryId: cgsivNN3J6M6gKAYoeIww
---

Para algunos administradores de tienda, existe la necesidad de crear una autenticación adicional en VTEX con su base propia de logins (inicio de sesión). Por ejemplo: 
- Un “club fidelidad” de clientes, con login y contraseña ya creados en su propia plataforma.
- Login de empleado para venta en su “tienda de colaboradores”.

Debido a esto, VTEX pone a disposición la __autenticación OAuth2__ integrada a VTEX ID.

<div class="alert alert-warning">Como este es un asunto con aspectos bastante técnicos, recomendamos el acompañamiento de un compañero o equipo de TI.</div>

### ¿Qué es OAuth2?

OAuth es un protocolo de autorización muy utilizado en aplicaciones web escalables. La versión actual es la 2.0, que utiliza tokens para acceder a sus datos en otro sistema.

### ¿Cuál es la utilidad de OAuth2?

Para las tiendas VTEX, el principal beneficio aportado por OAuth2 es la posibilidad de reaprovechar login y contraseñas ya creados en sistemas externos integrados a VTEX, lo que agiliza el proceso de autenticación cuando es necesario. Es la misma lógica de autenticación vía Facebook y Google+, por ejemplo.

### Guía oficial de referencia

Puede consultar la guía oficial del protocolo OAuth2 en esta dirección: https://tools.ietf.org/html/rfc6749

### Flujo de integración de OAuth2 con VTEX ID

Con base en la documentación oficial, vea a continuación una ilustración que explica la integración de OAuth2 con VTEX ID:
![oauth2](//images.ctfassets.net/alneenqid6w5/ZIsxie9YMmuWgWcgkeUis/313ac04141d8975528a273f1d2d47023/Fluxo_OAuth2_VTEX_ID__ES_.png)

A partir de esta ilustración, vamos a detallar los pasos a seguir.  

Note que cualquier parte del proceso solo se produce exclusivamente por el protocolo __HTTPS__.

### 1. URL de autorización (getAuthorizationCode)

El usuario (cliente de la tienda) verá la pantalla de login de VTEX ID y optará por utilizar un determinado proveedor de identidad (externo a VTEX).

VTEX ID redirigirá al usuario a una URL de autorización del proveedor de identidad. Naturalmente, esto será un request con el método GET en este servidor.

Esta URL de autorización es proporcionada por el administrador de la tienda y tendrá al menos tres parámetros (querystring):

-Client ID: es el identificador de VTEX ID en el proveedor de identidad; el parámetro tiene nombre libre (sugerido `client_id`) y su valor es determinado por el proveedor (siendo siempre fijo).
-URL de retorno: se utilizará en los próximos pasos del flujo; su valor es determinado por VTEX ID pero el nombre del parámetro es libre (sugerido `return_url`).
-"State": se utiliza junto a la URL de retorno y tiene nombre y valor determinados por VTEX ID (no se debe alterar).

Si es necesario, VTEX ID acepta la inclusión de parámetros adicionales, bastando indicar el nombre de las claves y sus valores. Recordando que las claves y los valores siempre son fijos.

A partir de la URL de autorización, el usuario pasará por el proceso de autenticación en el proveedor de identidad externo.

Autenticado con éxito, el proveedor deberá redirigir al usuario de nuevo a VTEX ID, de modo que la URL de destino deberá ser:

-La URL de retorno que fue enviada por VTEX ID;
-junto al parámetro "state" (manteniendo su valor original);
-y un nuevo parámetro, que representará el código de autenticación generado por el proveedor de identidad; su nombre es libre (sugerido `auth_code`).

### 2. URL para el intercambio de código de autorización por código de acceso (getAccessCode)

Cuando el usuario regrese a la URL de retorno, VTEX ID capturará el código de autorización para, a partir de los servidores de backend (fuera del browser del cliente), obtener un código de acceso.

Este código de acceso se utilizará para obtener los datos del cliente con seguridad y crear las cookies que identificarán al usuario dentro de los servicios de VTEX.

Esta URL se utilizará necesariamente con el método POST.

El código de autorización se debe enviar en el cuerpo del request (body), que puede ser tanto en el formato JSON (content-type `application/json`) o form-urlencoded (content-type `application/x-www-form-urlencoded`). Es necesario indicarnos el método deseado y el nombre de la clave que va a representarlo.

Parámetros adicionales pueden enviarse en el querystring y/o en el body. Recordando que las claves y los valores siempre son fijos.

Para la seguridad del proceso, VTEX ID necesita el Client ID y Client Secret (el ID es el mismo del inicio del proceso, de modo que estos funcionan como appKey y appToken). Estos se pueden enviar con el header "Authorization" o como parámetros en la URL (claves de nombre libre).

En la respuesta esperamos recibir el código de acceso en el body, que puede ser en el formato JSON  (content-type application/json) o form-urlencoded (content-type application/x-www-form-urlencoded); el nombre de la propiedad es libre, bastando informarla para mapeo.

Parámetros adicionales pueden formar parte de la respuesta, pero en principio no son útiles.

### 3. URL para obtener los datos del usuario (getUserInfo)

Esta URL se utilizará necesariamente con el método GET.

El cliente debe ser reconocido por el propio código de acceso, que se enviará como un header Authorization Bearer. Opcionalmente, este también puede enviarse como parámetro (querystring).

Si es necesario, VTEX ID acepta la inclusión de parámetros adicionales, bastando indicar el nombre de las claves y sus valores. Las claves y los valores siempre son fijos.

En la respuesta esperamos recibir el e-mail del cliente y su ID en el proveedor de identidad. También es adecuado poner a disposición el nombre del cliente (aunque no es obligatorio). Los datos pueden entregarse en formato JSON (content-type application/json) o form-urlencoded (content-type application/x-www-form-urlencoded).

Informaciones adicionales pueden formar parte de la respuesta, pero en principio no son útiles. 

__Importante__: la clave única de la plataforma VTEX es el e-mail. Del lado del proveedor de identidad se puede solicitar otro tipo de información para autenticar a la persona (CPF, CNPJ, login, teléfono, etc.) pero lo que se debe enviar en la integración a VTEX es el e-mail que se ha autenticado. Este escenario atiende B2B, B2C, B2E.
Concluida esta etapa, el usuario recibirá una cookie con el token de autorización que lo identificará dentro de los servicios de VTEX.

### Ejemplo de uso 

A continuación, ejemplificaremos el proceso utilizado para una integración OAuth2 teniendo a Google como proveedor de identidad:

#### getAuthorizationCode 

Request:
```
GET https://accounts.google.com/o/oauth2/auth?redirect_uri=https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&access_type=offline&response_type=code&client_id={clientId}&state={state}
```

#### getAccessCode 

Request:
```
POST https://accounts.google.com/o/oauth2/token

Body: redirect_uri=https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx&grant_type=authorization_code&client_id={clientId}&client_secret={clientSecret}&code={authorizationCode}
```

Response:
```
{
"access_token" : {accessToken},
"expires_in" : 3600,
"id_token" : {jwt},
"token_type" : "Bearer"
}
```

#### getUserInfo 

Request:
```
GET https://www.googleapis.com/oauth2/v1/userinfo?access_token={accessToken}
```

Response:
```
{
"id": {id},
"email": {email},
"verified_email": true,
"name": "Rodrigo Silva de Andrade",
"given_name": "Rodrigo",
"family_name": "Silva de Andrade",
"link": "xxxxxx",
"picture": "xxxx",
"gender": "male",
"locale": "pt-BR"
}
```

## Resumen 

Una vez que el servicio está desarrollado y público en Internet, todos los datos de configuración deben ser direccionados a VTEX (vía ticket de soporte) para que sea configurado el ambiente de la tienda e integrado a VTEX ID, poniendo a disposición otra opción de login para sus clientes.

<div class="alert alert-info">Si tienes varias tiendas (subcuentas) enumeradas en <strong>Configuraciónes de la cuenta > Gestión de la cuenta > Cuenta</strong>, cada una requerirá su propia configuración de Proveedor de identidad OAuth2.</div>

En resumen, estos son:

- Todos los endpoints habilitados para HTTPS.
- Credenciales (client ID y client Secret, o equivalente).
- Credenciales (usuario/e-mail y contraseña) para las pruebas de configuración.
- El nombre deseado para el proveedor de identidad, que en el resultado final se mostrará como texto para el botón "Entrar como {nombre del proveedor}".

Para __getAuthorizarionCode__:

- URL del request (método GET).
- Nombre del parámetro para client ID.
- Nombre del parámetro para URL de retorno.
- Parámetros adicionales (si los hay, indicando clave y valor).
- Clave que contiene el código de autorización (en la respuesta).

Para __getAccessCode__:

- URL del request (método POST).
- Modo para código de autorización (body en JSON o form-urlencoded).
- Parámetros adicionales en la URL (si los hay).
- Parámetros adicionales en el body (si los hay).
- Modo para credenciales (header Authorization).
- Formato de la respuesta (body en JSON o form-urlencoded).
- Clave que contiene el código de acceso (en la respuesta).

Para __getUserInfo__:

- URL del request (método GET).
- Parámetros adicionales (si los hay).
- Clave que contiene el ID de usuario (en la respuesta).
- Clave que contiene el e-mail (en la respuesta).
- Clave que contiene el nombre (en la respuesta, si existe).
