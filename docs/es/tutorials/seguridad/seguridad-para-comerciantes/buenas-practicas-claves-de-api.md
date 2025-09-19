---
title: 'Buenas prácticas para el uso de claves de API'
id: 7b6nD1VMHa49aI5brlOvJm
status: PUBLISHED
createdAt: 2022-10-04T21:36:57.185Z
updatedAt: 2025-08-12T22:49:38.482Z
publishedAt: 2025-08-12T22:49:38.482Z
firstPublishedAt: 2022-10-04T21:41:08.638Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: best-practices-api-keys
legacySlug: buenas-practicas-para-el-uso-de-claves-de-aplicacion
locale: es
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---


VTEX dispone de varias API para que los clientes y partners puedan desarrollar integraciones altamente personalizables con la plataforma.  Las [claves de API](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) se utilizan para proporcionar acceso seguro a los datos consumidos por las integraciones, sin exponer la cuenta a usuarios o aplicaciones no autorizados.

> ℹ️ Este tipo de credencial se utiliza para la autenticación de la identidad a través de la API.

El manejo inadecuado de las [claves de API](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) puede generar fugas y, en consecuencia, situaciones de acceso indebido. A continuación, puedes ver las buenas prácticas que recomendamos para la gestión de estas credenciales que puedes implementar para aumentar la seguridad de tu tienda.

## Rotar las claves periódicamente

Es aconsejable que desactives las claves antiguas y crees claves nuevas a lo largo del tiempo. De esta forma te aseguras de que tus [claves de API](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) tengan una duración determinada.

Esta práctica se asemeja a la definición de una política de contraseñas con ajustes para los cambios periódicos de contraseñas.

## Reevaluar las claves y los accesos periódicamente

Revisa las [claves de API](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) existentes periódicamente. Comprueba que las integraciones relativas a cada clave están activas y si siguen siendo necesarias. Un proceso proactivo de revisión de accesos permite que cada usuario o integración acceda solo a los recursos que realmente necesita, lo que disminuye las posibilidades de que se produzca cualquier tipo de acceso indebido.

Si la recomendación anterior es similar a la definición de cambios de contraseña periódicos, esta recomendación puede compararse con el proceso de revisión de acceso con periodicidad definida.

## Crear claves individuales para cada función e integración

Restringe el acceso de cada clave a los recursos y a la información según su respectiva función y necesidad. Al reducir la cantidad de información compartida entre los usuarios o las integraciones, se reduce el riesgo de fuga por amenazas internas.

Ten en cuenta que la gestión de permisos para las claves de API se realiza mediante los [roles de acceso](/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) y los [recursos de License Manager](/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

## Mantener un programa de concienciación

Las campañas de concienciación sobre la seguridad de la información son una práctica sostenible y eficaz para educar y cambiar la relación de las personas con la tecnología. Incluye la importancia de la gestión responsable del acceso en la agenda de capacitación y comunicación, así como el valor de las credenciales de cada miembro de la empresa.

## Nunca utilizar el código _client side_ al realizar integraciones

Ten en cuenta que parte del código que compone tu tienda, se ejecuta en el cliente, es decir, en el navegador del usuario. Por lo tanto, es normal que esta parte del código esté expuesta a personas ajenas a tu operación.

Luego, es esencial instruir a tu equipo de desarrollo para que no utilice este código al realizar integraciones, ya que este uso suele incluir en el código las [claves de API](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet).

## No compartas los tokens de API

Protege los pares de claves y tokens de API con el mismo nivel de confidencialidad que aplicas a las credenciales de inicio de sesión, como nombres de usuario y contraseñas. Para reducir el riesgo, evita compartirlos a través de emails, tickets, chats u otros canales de comunicación.
