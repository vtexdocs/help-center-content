---
title: 'Activar HTTPS en todo el sitio'
id: 1igIyCv5IiGWGIekqYYI02
status: PUBLISHED
createdAt: 2017-08-18T16:26:40.067Z
updatedAt: 2022-05-03T20:42:34.297Z
publishedAt: 2022-05-03T20:42:34.297Z
firstPublishedAt: 2017-08-19T00:17:36.439Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: activar-https-en-todo-el-sitio
locale: es
legacySlug: activar-https-en-todo-el-sitio
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

El protocolo HTTPS hace que los datos transitados entre el sitio y el usuario estén encriptados. Es esencial para la seguridad, especialmente en páginas que poseen formularios con recolección de datos.

Cada vez más Google, que naturalmente es un gran influyente de las tecnologías en la web, ha estado estimulando la adopción del protocolo seguro. Actualmente ya es muy importante que el sitio transite el 100% en HTTPS.

Por estándar, las tiendas VTEX vienen con HTTPS activado solamente en las páginas del checkout, pero todo el sitio cuenta con certificado SSL (creado en el momento de [indicar el dominio a VTEX](/es/tutorial/configurando-el-apuntamiento-del-dns-para-vtex), bastando entonces configurar el protocolo cada página del sitio. Al concluir la configuración, siempre que acceda a una página en HTTP el usuario será re-direccionado a la misma página en HTTPS. 

Para ello, debemos:

1. Cumplir los [requisitos](/es/tutorial/activar-https-en-todo-el-sitio#requisitos);
2. [Verificar si el sitio funciona en HTTPS](/es/tutorial/activar-https-en-todo-el-sitio#verificar-si-el-sitio-funciona-em-https);
3. [Activar el HTTPS en las páginas](/es/tutorial/activar-https-en-todo-el-sitio#activar-el-https-en-las-paginas).

## Requisitos 

Antes de activar el HTTPS es necesario que tu layout esté adecuado al uso del protocolo. Cualquier llamada en HTTP en una página HTTPS será bloqueada, pues caracteriza contenido mixto (mixed content). 

Más información sobre este escenario puede encontrarse en el artículo [¿Qué es mixed content?](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), del mismo Google.

En esas llamadas HTTP se encuadran: referencias a imágenes, archivos CSS, JS y cualquier recurso por medio del que tu front-end realizará download y también comunicación con otras páginas y APIs (Ajax/XHR). Por supuesto, la no-carga de estos recursos puede ser perjudicial para la página, impidiendo la exhibición de ciertas imágenes, la carga de estilos del CSS o de las funciones del JS.

### Ejemplos

- Llamar un script con el siguiente snippet resultaría en problemas: `<script src=“http://www.site.com/arquivos/funcao.js”></script>`
- La implementación correcta sería: `<script src=“https://www.site.com/arquivos/funcao.js”></script>`
- También es posible usar el protocolo relativo, de modo que siga el mismo en el que es accedida la página: `<script src=“//www.site.com/arquivos/funcao.js”></script>`
- Para archivos hospedados en VTEX siempre debe usarse el siguiente formato, que es relativo al protocolo y al dominio accedido: `<script src=“/arquivos/funcao.js”></script>`

**Atención:** para llamar rutas externas a VTEX, verifique antes si el destino soporta HTTPS.

## Verificar si el sitio funciona en HTTPS

La forma más práctica de saber si el sitio cumple los requisitos es navegando por las páginas en HTTPS. Para hacerlo sin efectivamente activarlo basta utilizar el ambiente beta (`{NOMEDALOJA}.vtexcommercebeta.com.br`), en el que toda la navegación es forzada a pasar por HTTPS. 

Cualquier caso de contenido mixto lo reportará el navegador. Las requisiciones bloqueadas se reportarán en la sección Network del Dev Tools.

## Activar el HTTPS en las páginas

Luego de cotejar y adecuar (de ser necesario) todo el layout, páginas y recursos del sitio, ya podemos habilitar el HTTPS sin tener problemas. 

Todas las páginas del sitio deben modificarse individualmente conforme al artículo [Cómo modificar el protocolo HTTP o HTTPS de las páginas de mi sitio](/es/tutorial/como-usar-el-protocolo-https-en-la-tienda). Notar que todas las páginas del checkout ya vienen con HTTPS activo por estándar. 

Es posible cambiar el protocolo en todas las carpetas de una sola vez con el uso de nuestra API, documentada [en esta colección de Postman](https://developers.vtex.com/reference/change-uri-schema).

<div class="alert alert-warning">
<p><strong>Atención:</strong> evite tener el protocolo HTTPS activado sólo en algunas páginas. Al acceder a una página HTTPS, luego ir a una página HTTP de la misma tienda, el navegador intentará leer sus recursos forzosamente en HTTPS, y esto puede generar problemas.</p>
<p>Lo adecuado es activar el HTTPS en todo el sitio de una sola vez.</p>
<p>Lo mismo vale para los sitios de desktop y mobile (website secundario), donde es necesario tratar el HTTPS de ambos al mismo tiempo.</p></div>

## Limitaciones

### Pérdida de parámetros

¡Este [problema conocido](/es/known-issues/parametros-de-campanas-son-perdidos-en-redirecion-de-http-para-https) fue solucionado! Con el uso de la [nueva CDN de VTEX](/es/tutorial/activar-nueva-cdn-de-vtex), el re-direccionamiento entre páginas mantiene los parámetros originales.

### URLs del XML

¡Este [problema conocido](/es/known-issues/no-se-puede-crear-feed-xml-en-https) fue solucionado! Ahora las URLs do XML seguirán el mismo protocolo configurado para la página de producto.
