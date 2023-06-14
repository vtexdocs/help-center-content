---
title: 'Evitando CORS en sus llamadas al MasterData'
id: 6eJe5PG2JiOOYOKM2ywaYg
status: DRAFT
createdAt: 2018-11-19T19:52:49.941Z
updatedAt: 2022-08-04T22:36:18.442Z
publishedAt: 
firstPublishedAt: 2018-11-19T20:10:34.548Z
contentType: frequentlyAskedQuestion
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
slug: evitando-cors-en-sus-llamadas-al-master-data
legacySlug: evitando-cors-en-sus-llamadas-al-master-data
---

## Qué es CORS (Intercambio de Recursos de Origen Cruzado) 
Antes de empezar, es importante explicar que CORS no es un error, sino un mecanismo de seguridad del navegador que protege a usuarios contra Javascripts maliciosos y solicitudes HTTP posiblemente dañinas

El CORS se activa cuando un HTTP solicita ...:

- ... un dominio diferente (por ejemplo, vtex.com llama vtexcommercestable.com)
- ... un subdominio diferente (por ejemplo: store.com llama blog.store.com)
- ... un puerto diferente (por ejemplo: store.com llama a store.com:3001)
- ... un protocolo diferente (por ejemplo, el sitio en https://store.com llama a http://store.com)

## ¿Por qué queremos evitar el CORS?
Su navegador bloqueará todas las solicitudes que se encuadren en una de las cuatro condiciones anteriores, esto puede causar un comportamiento inesperado del sitio y la frustración en general, ya que algunas características pueden dejar de funcionar.

Además, cada vez que el navegador encuentre otro dominio, tendrá que comprobar con el backend y así, una solicitud OPTION adicional se enviará de nuevo a MasterData. Los sitios web mal configurados generan una gran cantidad de estas solicitudes evitables.

## Uso adecuado

*Queremos siempre usar el path relativo*

Ej: Un JQuery haciendo un GET correctamente en una entidad MasterData usando la ruta relativa.
Observe cómo se omite el nombre de cuenta.


        $ .getJSON ("/foobar/dataentities/SL/search?_where=(email=test@test.com)
    



Incorrecto llamando a MasterData (Una llamada que viene de la cuenta: https://www.account.com):

Observe cómo el __nombre de la cuenta y el otro dominio ('vtexcommercestable')__ aparecen en el punto final

        https://account.vtexcommercestable.com.br/api/dataentities/SL/search?_where=(email=test@test.com)
