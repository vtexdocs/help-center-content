---
title: 'Condiciones de las reglas de merchandising'
id: 4K9WCBiQ4ndU396ZygDpc2
status: PUBLISHED
createdAt: 2024-06-27T17:17:15.295Z
updatedAt: 2024-06-27T17:19:47.360Z
publishedAt: 2024-06-27T17:19:47.360Z
firstPublishedAt: 2024-06-27T17:18:32.359Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: condiciones-de-las-reglas-de-merchandising
locale: es
legacySlug: condiciones-de-las-reglas-de-merchandising
subcategoryId: 32zXHBMygA2dB6TbCjQJej
---

Las condiciones de las reglas de merchandising del [Editor manual](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/2FpbarYzsnbg7aZZn3TGF8) y el [Editor visual (Beta)](https://help.vtex.com/es/tutorial/crear-regla-de-merchandising-editor-visual-beta--6xteumx9MsDt0uEppbChu3) siguen el formato `{criterio} {operador} {valor}`. Por ejemplo, una condición puede tener la estructura `marca es athletic`, donde `marca` corresponde al criterio, `es` corresponde al operador y `athletic `corresponde al valor.

Conoce los criterios y los operadores posibles para cada forma de edición en las siguientes tablas:

## Criterios

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;"><thead> <tr class="bb b--muted-3"> <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Nombre</th> <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Descripción</th> <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Operadores</th> <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Tipo de edición</th> </tr></thead><tbody> <tr class="bb b--muted-3"> <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">Término</span></td> <td rowspan="2" class="t-body pa5">Palabra que el cliente busca y estará relacionada con la regla. Campo para rellenar libremente.</td> <td class="t-body pa5">es</td> <td rowspan="2" class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de activación<br>Reglas de personalización</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5">contiene</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">ID</span></td> <td class="t-body pa5">Busca el ID exacto de algún ítem del catálogo que estará relacionado con la regla. Los ID posibles son: <strong>ProductID</strong>, <strong>ProductRefID</strong>, <strong>SKUID</strong>, <strong>SKURefID</strong> y <strong>EAN</strong>. Campo para rellenar libremente.</td> <td class="t-body pa5">es</td> <td class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de personalización</td> </tr> <tr class="bb b--muted-3"> <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">categoría</span></td> <td rowspan="2" class="t-body pa5">Valor seleccionable que representa una categoría registrada en el catálogo de la tienda.</td> <td class="t-body pa5">es</td> <td class="t-body pa5">Todos los escenarios de edición</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5">solo</td> <td class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de activación<br><strong>Editor visual</strong></td> </tr> <tr class="bb b--muted-3"> <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">departamento</span></td> <td rowspan="2" class="t-body pa5">Valor seleccionable que representa un departamento registrado en el catálogo de la tienda.</td> <td class="t-body pa5">es</td> <td class="t-body pa5">Todos los escenarios de edición</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5">solo</td> <td class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de activación<br><strong>Editor visual</strong></td> </tr> <tr class="bb b--muted-3"> <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">marca</span></td> <td rowspan="2" class="t-body pa5">Valor seleccionable que representa una marca registrada en el catálogo de la tienda.</td> <td class="t-body pa5">es</td> <td class="t-body pa5">Todos los escenarios de edición</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5">solo</td> <td class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de activación<br><strong>Editor visual</strong></td> </tr> <tr class="bb b--muted-3"> <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">nombresclusterproductos</span></td> <td rowspan="2" class="t-body pa5">Valor seleccionable que representa una colección registrada en el catálogo de la tienda.</td> <td class="t-body pa5">es</td> <td class="t-body pa5">Todos los escenarios de edición</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5">solo</td> <td class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de activación<br><strong>Editor visual</strong></td> </tr> <tr class="bb b--muted-3"> <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">promoción</span></td> <td rowspan="2" class="t-body pa5">Valor seleccionable que valida si existe al menos una promoción vinculada al ítem (sí).</td> <td class="t-body pa5">es</td> <td class="t-body pa5">Todos los escenarios de edición</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5">solamente </td> <td class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de activación<br><strong>Editor visual</strong></td> </tr> <tr class="bb b--muted-3"> <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">nombreseller</span></td> <td rowspan="2" class="t-body pa5">Valor seleccionable que representa el nombre de un seller.</td> <td class="t-body pa5">es</td> <td class="t-body pa5">Todos los escenarios de edición</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5">solo</td> <td class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de activación<br><strong>Editor visual</strong></td> </tr> <tr class="bb b--muted-3"> <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">subcategoría</span></td> <td rowspan="2" class="t-body pa5">Valor seleccionable que representa una subcategoría registrada en el catálogo de la tienda.</td> <td class="t-body pa5">es</td> <td class="t-body pa5">Todos los escenarios de edición</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5">solo</td> <td class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de activación<br><strong>Editor visual</strong></td> </tr> <tr class="bb b--muted-3"> <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">{{especificación}}</span></td> <td rowspan="2" class="t-body pa5">Cualquier especificación activa del Catálogo aparece como un criterio personalizado, con los mismos valores posibles. El nombre del criterio es igual al nombre de la especificación registrada. Por ejemplo, si hay una especificación activa llamada <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">Color</span>, el criterio mostrado será <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">Color</span>.</td> <td class="t-body pa5">es</td> <td class="t-body pa5">Todos los escenarios de edición</td> </tr> <tr class="bb b--muted-3"> <td class="t-body pa5">solo</td> <td class="t-body pa5"><strong>Editor manual:</strong><br>Reglas de activación<br><strong>Editor visual</strong></td> </tr></tbody></table>

>⚠️ Los criterios `departamento`, `categoría` y `subcategoría` solo aparecen como opciones para componer las Reglas de merchandising si los tres niveles de categorías ya están configurados en el **Catálogo**.

## Operadores

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
<thead>
  <tr class="bb b--muted-3">
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Nombre</th>
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Descripción</th>
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Criterios</th>
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Ejemplo</th>
  </tr>
</thead>
<tbody>
  <tr class="bb b--muted-3">
    <td rowspan="2" class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">es</span></td>
    <td class="t-body pa5">Si utilizas la función <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">Término</span> como criterio para crear una regla en el Editor manual, se crea una búsqueda con palabras exactas.</td>
    <td class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">Término</span></td>
    <td class="t-body pa5">Si registras <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">black friday</span> y un cliente busca <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">black friday</span>, se activará la regla de merchandising. Sin embargo, si el cliente busca <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">promoción black friday</span>, la regla no se activará.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5">En otros escenarios de edición, permite aplicar también otras condiciones diferentes de la actual.</td>
    <td class="t-body pa5">Todos (excepto <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">Término</span>)</td>
    <td class="t-body pa5">Si la condición es marca es <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">athletic</span>, la regla de merchandising también se activará aunque el cliente incluya <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">hotsport</span>, sportist y <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">athletic</span> en la búsqueda.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">contiene</span></td>
    <td class="t-body pa5">Si utilizas la función <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">Término</span> como criterio para crear una regla en el Editor manual, se configura una búsqueda que no se limita únicamente a las palabras exactas.</td>
    <td class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">Término</span></td>
    <td class="t-body pa5">Si registras <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">black friday</span> y un cliente busca black friday o frases similares como <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">promoción black friday</span> se activará la regla de merchandising.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">solo</span></td>
    <td class="t-body pa5">Limita la búsqueda solo al filtro registrado.</td>
    <td class="t-body pa5">Todos (excepto <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">Término</span>)</td>
    <td class="t-body pa5">Si la condición es marca es <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">athletic</span> y el cliente selecciona <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">hotsport</span> en primer lugar en la búsqueda, la regla de merchandising no se activará incluso si después selecciona <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">athletic</span>.  Solo funcionará si el primer filtro seleccionado para la marca es <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4">athletic</span>.</td>
  </tr>
</tbody>
</table>
