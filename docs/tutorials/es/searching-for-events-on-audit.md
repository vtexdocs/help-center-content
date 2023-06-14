---
title: 'Cómo encontrar eventos en Audit'
id: 5RXf9WJ5YLFBcS8q8KcxTA
status: PUBLISHED
createdAt: 2021-10-21T16:51:06.108Z
updatedAt: 2022-11-01T12:53:46.283Z
publishedAt: 2022-11-01T12:53:46.283Z
firstPublishedAt: 2021-10-21T21:55:42.939Z
contentType: tutorial
productTeam: Others
author: 4SqDPmUJIIz2KMMKgiyqKl
slug: como-encontrar-eventos-en-audit
legacySlug: como-encontrar-eventos-en-audit
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---


Para aumentar la transparencia y la confianza entre los usuarios administrativos de tu tienda, las distintas operaciones y los horarios en que se produjeron se registran en Audit, que es un módulo utilizado para buscar e investigar este historial con la ayuda de filtros. 

![Screenshot for Audit UI for announcement](//images.ctfassets.net/alneenqid6w5/1CwFsrYwjxCIhyqcc6ei86/e5e64ab35e499176c8815260dd703e00/Audit_ES.png)

Para acceder a la página de Audit, haz clic en _Configuración de la tienda > Auditoría. _En esta página puedes realizar búsquedas mediante filtros, verificar cuáles han sido las últimas acciones realizadas y se presentan algunos ejemplos de filtros que pueden servir de modelo.

## Búsqueda de eventos en Audit

Para iniciar una búsqueda en Audit, selecciona la pestaña **Eventos de Auditoría.** En el menú desplegable **_Application_**, elige la aplicación asociada a la búsqueda.

Puedes elegir una fecha predefinida para la búsqueda utilizando el botón **Fecha seleccionada**. Para seleccionar el periodo exacto en el que debe realizarse la búsqueda, haz clic en el botón **Usar fechas personalizadas.**

<div class="alert alert-warning">
Solo se almacenan los registros de los últimos 3 meses.
</div>

Es posible añadir más filtros para realizar la búsqueda de eventos con mayor precisión. Para ello, haz clic en **Añadir filtro.** Selecciona el parámetro de filtrado (_Acción_, _Detalles del evento_ o _Autor_) y con qué valor debe compararse. 

<div class="alert alert-info">
Los resultados de la búsqueda corresponden exactamente al contenido escrito en el tema del filtro. Para evitar resultados inesperados, asegúrate de que no se han introducido espacios adicionales en los términos de búsqueda.
</div>

Ten en cuenta que es posible añadir más de un filtro, incluso con el mismo tema. En este caso, se buscarán los eventos que correspondan a cualquiera de los valores introducidos. 

Por ejemplo, la búsqueda que se muestra en la siguiente figura encuentra resultados cuyas acciones son _Payment Notification_ o _Change Status_ y cuyo autor es _[email@email.com](mailto:email@email.com)_. 

![Filtros no Audit](//images.ctfassets.net/alneenqid6w5/2Bl1FZuuaa3ZeHT52FEcMD/e6d4c213e2fd59a4071897fea8987043/Audit_filters_ES.png)

Tras seleccionar la aplicación, la fecha y los demás filtros de búsqueda, haz clic en el botón **Buscar** para obtener los eventos encontrados. 

Observa que cada búsqueda que realizas se guarda en la pestaña **Últimas búsquedas.** Para volver a realizar una búsqueda, haz clic en esta pestaña y luego en el botón <img src="//images.ctfassets.net/alneenqid6w5/4gWsOnbLMOUeWh0r5YRDz/9b7148d995c03ca84b39473f266b46a9/refresh.png" width="15"> correspondiente a la búsqueda que deseas volver a hacer.

<div class="alert alert-warning">
Solo se registran 50 búsquedas en este panel. Si quieres guardar una búsqueda por tiempo indefinido, realízala y añádela a los favoritos de tu navegador.
</div>

<div class = "alert alert-info">
Revisa la <a href="https://help.vtex.com/es/tutorial/events-available-in-audit--6r1Mzcu5NmkmmDLJlz9CCZ">lista completa de eventos de Audit</a>.
</div>

## Ejemplos de filtros de búsqueda 

* Para buscar si un producto ha sido activado en el Catálogo en una fecha determinada: \

1. Selecciona la fecha deseada.
2. En el menú desplegable **_Application_**, selecciona _Catálogo (Admin)._
3. Añade un filtro cuya **Acción** debe ser igual a _Product Activation_.
4. Añade un filtro en el que **Detalles del evento** debe ser igual a `product id "X" activated` donde `X` debe sustituirse por el ID del producto buscado.

* Para buscar si el precio de un SKU ha cambiado en una fecha determinada:
1. Selecciona la fecha deseada.
2. En el menú desplegable **_Application_**, selecciona _Precios._
3. Añade un filtro cuya **Acción** debe ser igual a _Put Price_.
4. Añade un filtro en el que **Detalles del evento** debe ser igual al ID del SKU del ítem buscado.
* Para buscar si un almacén ha sido eliminado en una fecha determinada:
1. Selecciona la fecha deseada.
2. En el menú desplegable **_Application_**, selecciona _Logística._
3. Añade un filtro cuya **Acción** debe ser igual a _Warehouse Delete_.
4. Añade un filtro en el que **Detalles del evento** debe ser igual al ID del ítem buscado.
* Para buscar si una transportadora ha sido eliminada en una fecha determinada:
1. Selecciona la fecha deseada.
2. En el menú desplegable **_Application_**, selecciona _Logística._
3. Añade un filtro cuya **Acción** debe ser igual a _Carrier Delete_. 
4. Añade un filtro en el que **Detalles del evento** debe ser igual al ID de la transportadora buscada.

Para ver más ejemplos de filtros que se pueden utilizar, haz clic en la pestaña **Guía.** 

<div class = "alert alert-info">
En la aplicación Audit, los <a href="https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3">recursos del License Manager</a> son identificados por las respectivas claves.
</div>

