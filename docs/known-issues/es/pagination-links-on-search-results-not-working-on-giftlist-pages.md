---
title: 'Los enlaces de paginación en los resultados de la búsqueda no funcionan en las páginas de la lista de regalos'
id: 1w6h5MwZthKMM8rvqXZtQi
status: PUBLISHED
createdAt: 2022-11-02T14:01:35.650Z
updatedAt: 2022-11-25T21:41:59.731Z
publishedAt: 2022-11-25T21:41:59.731Z
firstPublishedAt: 2022-11-02T14:01:36.502Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: los-enlaces-de-paginacion-en-los-resultados-de-la-busqueda-no-funcionan-en-las-paginas-de-la-lista-de-regalos
kiStatus: Backlog
internalReference: 481330
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los enlaces de paginación en `SearchResult` no funcionan en `Giftlist`.



## Simulación


- Acceda a una lista de regalos con suficientes productos para tener paginación, utilice una plantilla por defecto sin ninguna personalización;
- Compruebe los enlaces de paginación:

 ![](https://vtexhelp.zendesk.com/attachments/token/LAmUCIdMsybPqVkRGh9TcNq99/?name=inline-998244926.png)

- Estos enlaces no funcionan.



## Workaround


- Utilice una personalización JS para cargar la solicitud correctamente, por ejemplo, la solicitud debe ser algo así (se puede comprobar en Chrome Dev Tools): `buscapagina?PS=16&sl=7ec035e2-ab04-40c0-9cf0-cc669725b10a&cc=16&sm=0&PageNumber=2`

