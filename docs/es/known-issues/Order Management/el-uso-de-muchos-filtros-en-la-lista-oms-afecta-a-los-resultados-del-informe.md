---
title: "El uso de muchos filtros en la lista OMS afecta a los resultados del informe"
id: WO9AvZxmUkmil35OZb8Lr
status: PUBLISHED
createdAt: 2023-02-17T17:45:57.039Z
updatedAt: 2024-06-28T19:28:50.107Z
publishedAt: 2024-06-28T19:28:50.107Z
firstPublishedAt: 2023-02-17T17:50:29.929Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: el-uso-de-muchos-filtros-en-la-lista-oms-afecta-a-los-resultados-del-informe
locale: es
kiStatus: Fixed
internalReference: 756198
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El uso de filtros en la Lista de Gestión de Pedidos genera un parámetro en la URL que ayuda a definir lo que se muestra al cargar la página y a generar el informe de pedidos exportados. En ese sentido, a medida que usamos más y más filtros, los parámetros incluidos en la URL aumentan proporcionalmente, y la cadena de consulta también, alcanzando puntos (tamaño) que pueden generar varios tipos de comportamientos no deseados.

En este caso, el problema causado por utilizar muchos filtros a la vez (tamaño de la **Query String** en la URL) afecta a los resultados del informe exportado, mostrando menos pedidos de los esperados.

Es importante tener en cuenta que aquí estamos hablando del **tamaño del Query String generado en la URL**, esto significa que no es el número de filtros utilizados directamente, sino el tamaño de cada parámetro. Nombres de filtros muy grandes pueden limitar el número de filtros que puede utilizar para generar un informe coherente.


##

## Simulación


Este escenario puede simularse utilizando varios filtros "largos" en la lista OMS y exportando los pedidos. Puede ver que la exportación muestra menos pedidos que la lista OMS.



## Workaround


Es posible pensar en formas alternativas para evitar este tipo de problemas en el informe. He aquí algunos puntos que pueden ser útiles:

- Optimizar el nombre de los parámetros podría ser una buena práctica.
- Exportar el informe con pocos filtros y luego en el documento exportado, realizar los filtros adicionales o necesarios para obtener la información deseada.
- Piense en dividir el informe en más de uno, es decir, utilizar unos filtros para generar una parte de la información y luego otro con el resto y unificar después de ser descargado.

Estas son solo ideas para evitar acumular filtros y generar esta inconsistencia en la información exportada. Se pueden utilizar otras soluciones.






