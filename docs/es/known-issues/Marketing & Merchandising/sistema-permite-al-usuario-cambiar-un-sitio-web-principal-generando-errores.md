---
title: "Sistema permite al usuario cambiar un sitio web principal, generando errores"
id: 1etuCzBmHEywwm02USmyW6
status: PUBLISHED
createdAt: 2017-06-14T18:44:43.954Z
updatedAt: 2022-12-22T20:48:39.505Z
publishedAt: 2022-12-22T20:48:39.505Z
firstPublishedAt: 2017-08-10T15:12:42.153Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: sistema-permite-al-usuario-cambiar-un-sitio-web-principal-generando-errores
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

En el módulo CMS, el sistema deja al usuario manipular un sitio web A y apuntar a un sitio web B como padre.

Si el usuario desea regresar, no hay la posibilidad de apuntar el sitio B al A, como padre. Con eso, genera errores en el sitio como el error abajo, y el admin queda inaccesible.

![KI erro website](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Marketing%20&%20Merchandising/sistema-permite-al-usuario-cambiar-un-sitio-web-principal-generando-errores_1.png)

## Simulación

- Acceder al módulo __CMS__;
- Acceder a Portal > Web Sites;
- En el primer Web Site > campo Web Site Padre, insertar el Web Site referente al Web Site 2;
- En el segundo sitio web> campo Web Site Padre, inserte el Web Site referente al Web Site 1.

![KI erro website2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Marketing%20&%20Merchandising/sistema-permite-al-usuario-cambiar-un-sitio-web-principal-generando-errores_2.png)

## Workaround

Cuando este tipo de problema ocurre, el admin quedaa inaccesible, y páginas de productos generan errores. Y la única solución es volver a la configuración a través de la base de datos.

