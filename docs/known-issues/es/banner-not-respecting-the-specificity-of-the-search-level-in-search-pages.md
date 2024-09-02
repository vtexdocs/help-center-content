---
title: 'Banner que no respeta la especificidad del nivel de búsqueda en las páginas de búsqueda'
id: 4FnLaP0Ftm4TJZaTBnLHXQ
status: PUBLISHED
createdAt: 2022-10-11T14:56:22.264Z
updatedAt: 2022-11-25T21:57:33.961Z
publishedAt: 2022-11-25T21:57:33.961Z
firstPublishedAt: 2022-10-11T14:56:22.795Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: banner-que-no-respeta-la-especificidad-del-nivel-de-busqueda-en-las-paginas-de-busqueda
locale: es
kiStatus: Backlog
internalReference: 566809
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Si tenemos un banner para un departamento y otro para una categoría dentro de este departamento, la consulta del banner no respetará la especificidad del árbol de categorías, siempre obtendremos el primero de la API

https://github.com/vtex-apps/search/blob/26307cb3e2466a385a6c90565e076600d637509b/react/components/Banner/index.tsx#L75-L79

Esto se aplica a todo el árbol de categorías o niveles de especificación



## Simulación




- Vaya a: /admin/search/banners/
- Crear un banner para un departamento (debe ser creado primero)
- Cree un banner para una categoría dentro de este departamento
- Vaya a la página de la categoría (sitio del cliente)
- Coincidirá con ambos y devolverá el primero que se muestre



## Workaround


Cree primero banners para los más específicos y después para los más genéricos. Ejemplo: Cree primero los banners para las subcategorías, luego las categorías y después el departamento

O

Cree todos los banners que desee utilizar, y luego, desactive y active los banners más genéricos siguiendo la regla que compartí anteriormente.
Ejemplo: Desactivar y activar Subcategorías, luego Categorías, y luego Departamentos

 esto garantizará que los banners más genéricos se muestren como el último en la respuesta de la API

https://search.biggylabs.com.br/search-api/v1/AccountName/api/split/banner_search/category-1/yourDepartment/category-2/yourCategory

