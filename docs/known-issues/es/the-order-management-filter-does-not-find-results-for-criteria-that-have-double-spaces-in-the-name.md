---
title: El filtro de gestión de pedidos no encuentra resultados para los criterios que tienen espacios dobles en el nombre
id: 3Z8bOmWhsdFbMX5pMp8wZU
status: PUBLISHED
createdAt: 2022-04-29T20:57:35.619Z
updatedAt: 2022-12-16T18:12:25.119Z
publishedAt: 2022-12-16T18:12:25.119Z
firstPublishedAt: 2022-04-29T20:57:36.100Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-filtro-de-gestion-de-pedidos-no-encuentra-resultados-para-los-criterios-que-tienen-espacios-dobles-en-el-nombre
kiStatus: Backlog
internalReference: 353656
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>





Cuando el filtro para la selección de pedidos contiene dos criterios y uno de ellos tiene dos caracteres de espacio consecutivos en su nombre, no se muestra ningún resultado en la lista de pedidos.
Por ejemplo, si hay dos criterios de filtrado y el nombre de uno de ellos (en este ejemplo, un filtro de vendedor) contiene dos caracteres de espacio, la búsqueda no encuentra ningún resultado.
Esta situación se produce cuando hay dos espacios consecutivos en alguno de los filtros existentes.



## Simulación





Para reproducir este escenario, siga los siguientes pasos.

1. Cambie el nombre de un vendedor añadiendo dos espacios:

  1. En el Admin, haga clic en **Vendedores > Gestión**;
  2. Seleccione un vendedor de la lista y haga clic en `Editar`;
  3. Cambia el campo **Nombre** añadiendo dos espacios en cualquier parte del nombre;
  4. 4. Haga clic en "Guardar".
2. Cree una orden de prueba:

  1. En el entorno de la tienda (storefront), seleccione un artículo y añádalo al carrito;
  2. Vaya a la caja y realice el pedido.
3. Vaya a **Pedidos > Gestión de pedidos**;
4. Haga clic en `Todos los pedidos`;
5. Utilice el **filtro** para seleccionar el vendedor cuyo nombre ha cambiado;
6. Seleccione otro vendedor en el filtro;
7. Observe que no se encuentran pedidos con los filtros seleccionados.

En el ejemplo dado, se aplicó el filtro de vendedor. Sin embargo, la simulación puede realizarse con los demás filtros disponibles, como política comercial, promociones, campañas, operador de televenta y otros.



## Workaround





Hay tres posibles soluciones:

- No utilizar espacios o caracteres especiales al nombrar vendedores, promociones y SKUs.
- Exportar todos los pedidos y filtrar el pedido deseado utilizando la plantilla exportada;
- Editar el campo **Nombre** del filtro que tiene el doble espacio.

