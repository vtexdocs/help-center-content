---
title: " La 'posición' de la política comercial depende de la página en la que se muestra en la interfaz de administración"
id: 3kcSD7J5uuHYGdhBcg1lMa
status: PUBLISHED
createdAt: 2022-10-31T20:28:08.565Z
updatedAt: 2022-11-30T14:47:44.304Z
publishedAt: 2022-11-30T14:47:44.304Z
firstPublishedAt: 2022-10-31T20:28:09.333Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-posicion-de-la-politica-comercial-depende-de-la-pagina-en-la-que-se-muestra-en-la-interfaz-de-administracion
locale: es
kiStatus: Backlog
internalReference: 286470
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Un cliente con más de 20 políticas comerciales acaba teniendo más de una política comercial por posición. Esto es crítico porque las configuraciones vinculantes se basan en el número de posición, por lo que sólo debería haber una política comercial por posición.

Actualmente tenemos:
página 1 - posiciones 1 a 20; página 2 - posiciones 1 a 20 y así sucesivamente.

Deberíamos tener:
página 1 - posiciones 1 a 20; página 2 - posiciones 21 a 40 y así sucesivamente.


##

## Simulación


Cree más de 21 políticas comerciales a una cuenta, se mostrará en 2 páginas en la interfaz de administración.
Compruebe el campo "Posición" de la primera política comercial de la primera página de la interfaz
Compruebe el campo "Posición" de la primera política comercial en la segunda página de la interfaz.
Las dos posiciones son iguales.

API para comprobar:

    GET 'http://.vtexcommercestable.com.br/api/catalog_system/pvt/saleschannel/list'





## Workaround


Desconocido.

