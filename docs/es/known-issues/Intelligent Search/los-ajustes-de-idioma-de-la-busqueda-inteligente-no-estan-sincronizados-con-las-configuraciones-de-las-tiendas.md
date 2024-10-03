---
title: 'Los ajustes de idioma de la búsqueda inteligente no están sincronizados con las configuraciones de las tiendas.'
id: 1GqoAyUSbTxwHvzoMoAYfD
status: PUBLISHED
createdAt: 2024-02-27T21:30:40.309Z
updatedAt: 2024-03-06T15:38:20.358Z
publishedAt: 2024-03-06T15:38:20.358Z
firstPublishedAt: 2024-02-27T21:30:41.209Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-language-settings-not-in-sync-with-store-configurations
locale: es
kiStatus: Backlog
internalReference: 990343
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El idioma principal de la Búsqueda Inteligente no se actualiza automáticamente según la política comercial y la configuración de vinculación, lo que hace que no esté sincronizado.

En las tiendas con un solo idioma, los contenidos de la Búsqueda Inteligente, como sinónimos, reglas de comercialización, banners de búsqueda y redireccionamientos de búsqueda, se crean sobre las configuraciones regionales registradas en el enlace. La presentación de la tienda también se basa en la política comercial, que puede anular la vinculación y no coincidir con el contenido registrado.

En el caso de las tiendas multilingües, también puede afectar a las traducciones proporcionadas en el escaparate y las API.



## Simulación



- Crear una tienda en "pt-BR";
- Activar/configurar el módulo de Búsqueda Inteligente;
- Cambiar la política comercial de "pt-BR" a "en-US";
- Idioma único:
  - Mantener la vinculación como "pt-BR";
  - Crear contenido de búsqueda inteligente;
  - Acceda a la página del escaparate que debe presentar el contenido registrado;
  - El contenido/comportamiento no será visible.
- Multi-idioma:
  - Registre los productos en inglés;
  - Añadir el portugués como segundo idioma/idioma alternativo en los enlaces
  - Registrar traducciones del catálogo para portugués;
  - En este escenario, la navegación entre ambos idiomas puede presentar problemas.




## Workaround


Asegúrese de que los enlaces y las políticas comerciales coinciden, de lo contrario, el contenido de la búsqueda no será válido.

El contenido previamente registrado no seguirá el nuevo idioma principal si éste cambia; permanecerá unido a su idioma de creación. Es necesario registrar al menos dos locales en la configuración de bindings (el idioma antiguo/no esperado y el idioma nuevo/esperado) para ver el selector de idioma en el editor de contenidos y poder corregirlos manualmente para que utilicen el idioma esperado. Otro método es recrear el contenido.

En algunos casos, como las traducciones multilingües y de catálogos, es posible que también tenga que ponerse en contacto con nuestro servicio de asistencia para revisar la configuración interna del idioma para la búsqueda inteligente.





