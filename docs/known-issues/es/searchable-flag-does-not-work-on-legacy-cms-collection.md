---
title: 'La bandera de búsqueda no funciona en la Colección CMS heredada'
id: 47spDrddLoEmRbYmlj7wY2
status: PUBLISHED
createdAt: 2022-01-21T14:52:14.951Z
updatedAt: 2022-11-25T22:11:05.005Z
publishedAt: 2022-11-25T22:11:05.005Z
firstPublishedAt: 2022-03-16T16:36:34.866Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: la-bandera-de-busqueda-no-funciona-en-la-coleccion-cms-heredada
locale: es
kiStatus: Backlog
internalReference: 322552
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La bandera de búsqueda no funciona en la Colección CMS heredada. Nuestro documento explica que cuando usamos esta bandera, si buscamos el nombre de la colección, debería devolver los itens asociados a esta colección.



## Simulación


- Cree una colección en el CMS heredado;
- Utilizar la bandera "searchable";
- Comprobar en el frente / resultado de la búsqueda que si buscamos por el nombre de la colección, no se renderizarán las colecciones itens.



## Workaround


Hay dos soluciones:
- Utilizar una redirección a la URL de las colecciones;
- Crear una página de destino y asociarla al resultado de la búsqueda de la colección: https://help.vtex.com/pt/tutorial/como-criar-landing-pages-com-urls-customizadas--q0p2UU6sBaYcEMsq24YSi

