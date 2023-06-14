---
title: 'Sugerencias de sinónimos de Intelligent Search (Beta)'
id: 18A9JTCPrMsHWpFntNoKEr
status: PUBLISHED
createdAt: 2023-06-01T20:18:10.087Z
updatedAt: 2023-06-01T20:44:40.993Z
publishedAt: 2023-06-01T20:44:40.993Z
firstPublishedAt: 2023-06-01T20:33:35.148Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: sugerencias-de-sinonimos-de-intelligent-search-beta
legacySlug: sugerencias-de-sinonimos-de-intelligent-search-beta
subcategory: 23WdCYqmn2V2Z7SDlc14DF
---

<div class="alert alert-info">
  <p>Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si estás interesado en implementarla en el futuro, ponte en contacto con <a href="https://help.vtex.com/es/support">nuestro Soporte</a>.</p>
  <p>Para los clientes seleccionados, la funcionalidad está disponible para su uso gratuito en VTEX Admin durante su período Beta, o hasta que lo decida VTEX. Es posible que en el futuro se apliquen tarifas adicionales.</p>
</div>

La funcionalidad [Sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV) de [VTEX Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) te permite registrar palabras o expresiones con el mismo significado para los términos de búsqueda utilizados por los clientes al realizar búsquedas en tu tienda, lo que aumenta las posibilidades de que obtengan resultados de búsqueda relevantes.

La página **Sinónimos** en el Admin VTEX, además de permitir la configuración manual de sinónimos, te ofrece sugerencias inteligentes de términos para que los registres. La plataforma sugiere sinónimos a partir de inteligencia artificial, basándose en el comportamiento de búsqueda de los clientes en tu tienda.

Para hacerlo, VTEX Intelligent Search contabiliza cuántas veces los clientes, durante los últimos 30 días, buscaron un término que devolvió pocos o ningún resultado de búsqueda, y tuvieron que sustituir el término original por otro. 

> *Ejemplo:* cinco clientes escribieron `jabón para la cara` y luego cambiaron la búsqueda a `jabón facial`. El sistema registra este comportamiento y los términos más reescritos aparecerán como sinónimos sugeridos.

Puedes revisar las sugerencias generadas y elegir una de estas tres acciones: rechazar, editar o aprobar. Consulta el paso a paso en la siguiente sección.

![syn-sug-es](//images.ctfassets.net/alneenqid6w5/3bDrkDw6O6d8mHvvBKwWGm/92ab32c06dcfa505720a0813be380cdb/syn-sug-es.png)

## Revisar sugerencias

Sigue las instrucciones para visualizar las sugerencias de sinónimos y definir si deseas rechazarlas, editarlas o aprobarlas:

1. En el Admin VTEX, accede a **Storefront**, o escribe **Storefront** en la barra de búsqueda de la parte superior de la página.
2. En **Intelligent Search**, haz clic en **Sinónimos**.
    Si hay sugerencias para revisar, aparecerá un modal indicando el número de sugerencias generadas.
3. Haz clic en `Revisar` para continuar. Verás un modal con la primera sugerencia de sinónimo. Cada sugerencia indica el término buscado y el término que se agregará como sinónimo, y también el número de veces que los clientes de tu tienda reescribieron el término original por el segundo término en los últimos 30 días.
4. Para revisar la sugerencia, elige una de las siguientes opciones:
    * <i class="fas fa-times-circle"></i> **Rechazar**: descarta la sugerencia propuesta.
    * <i class="fas fa-pencil"></i> **Editar**: modifica los campos de la configuración de sinónimos sugeridos. Después de editar, debes hacer clic en <i class="fas fa-check-circle"></i> para guardar los cambios. Para más información sobre los campos disponibles, consulta [Configurar sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL).
    * <i class="fas fa-check-circle"></i> **Aprobar**: aplica y guarda la sugerencia propuesta.
5. Después de revisar todas las sugerencias, cierra el modal para acceder a la lista de sinónimos configurada en tu tienda.

<div class="alert alert-error">
  <p>Cuando se realiza una acción no es posible deshacerla, ya que se muestra inmediatamente la siguiente sugerencia disponible.</p>
</div>

## Más información

* [Sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV)
* [Configurar sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL)
* [VTEX Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG)
