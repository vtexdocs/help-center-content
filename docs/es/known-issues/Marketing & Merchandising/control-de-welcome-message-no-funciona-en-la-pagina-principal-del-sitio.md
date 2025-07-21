---
title: "Control de Welcome Message no funciona en la página principal del sitio"
id: 38WkIwnvReicEOu6eOccuY
status: PUBLISHED
createdAt: 2017-04-26T23:34:28.335Z
updatedAt: 2022-12-22T20:48:55.961Z
publishedAt: 2022-12-22T20:48:55.961Z
firstPublishedAt: 2017-04-26T23:44:20.501Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: control-de-welcome-message-no-funciona-en-la-pagina-principal-del-sitio
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El control de Welcome Message (`<vtex.cmc: welcomeMessage/>`) es responsable de representar el fragmento de HTML que muestra el mensaje de bienvenida al usuario, además del enlace de inicio de sesión.

Al copiar un Web Site Binding, percibimos que este control no aparece en la plantilla que se utiliza en más de un Web Site. Por ejemplo, en el template Home.

## Simulación

- Entrar en el módulo CMS
- Hacer clic en el directorio Web Sites
- Hacer clic en un Web Site
- Hacer clic en la opción "Copiar Web Site"
- Configuar como desea (nombre del Web Site, enlaces, etc.)
- Guardar el Web Site
- En la plantilla de Home, utilizar la misma plantilla que el otro Web Site utiliza
- Guardar el layout
- Acceder al template

## Workaround

Como solución de contorno, indicamos que se utilice, en el nombre de la plantilla, un prefijo o sufijo identificando la intención de exclusión.

Ejemplo:
De `Home` para `Basura-home`

