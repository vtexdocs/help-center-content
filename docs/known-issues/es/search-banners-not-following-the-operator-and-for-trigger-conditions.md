---
title: 'Los banners de búsqueda no siguen el operador "AND" para las condiciones de activación'
id: 4nQLt5q3Mz2DxvBIyZknXj
status: PUBLISHED
createdAt: 2024-06-20T21:17:46.485Z
updatedAt: 2024-06-20T21:17:47.308Z
publishedAt: 2024-06-20T21:17:47.308Z
firstPublishedAt: 2024-06-20T21:17:47.308Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: los-banners-de-busqueda-no-siguen-el-operador-and-para-las-condiciones-de-activacion
locale: es
kiStatus: Backlog
internalReference: 1053614
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las condiciones para los banners de búsqueda (gestionados a través de "/admin/search/v4/banners/") no soportan el operador "AND" tal y como se presenta en sus reglas de activación. La interfaz de usuario es incorrecta, y el operador se comporta como "OR" de forma fija.

Cualquiera de las condiciones rellenadas allí será suficiente para presentar el banner en la página (PLP).

Tenga en cuenta que al establecer un departamento allí (nivel de categoría 1) se aplicará el banner en cualquiera de sus subcategorías, ya que esto es parte de la ruta de categoría completa.



## Simulación


Cree un banner con las siguientes reglas de activación:

- donde "departamento" es "electrodomésticos"
- y**"categoría" es "frigoríficos".

El banner no se restringirá a la ruta completa de la categoría "/appliances/refrigerators?map=c,c". Se aplicará en el departamento y sus subcategorías, y en cualquier categoría denominada "frigoríficos", aunque no forme parte de este departamento en concreto.



## Workaround


N/A





