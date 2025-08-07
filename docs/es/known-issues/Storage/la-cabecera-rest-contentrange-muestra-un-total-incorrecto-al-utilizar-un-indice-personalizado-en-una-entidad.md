---
title: "La cabecera REST Content-Range muestra un total incorrecto al utilizar un índice personalizado en una entidad"
id: 2T8DqFKMI0BhVAZp8RZ9PU
status: PUBLISHED
createdAt: 2025-06-25T13:50:22.910Z
updatedAt: 2025-06-26T19:10:15.645Z
publishedAt: 2025-06-26T19:10:15.645Z
firstPublishedAt: 2025-06-25T13:50:23.692Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: la-cabecera-rest-contentrange-muestra-un-total-incorrecto-al-utilizar-un-indice-personalizado-en-una-entidad
locale: es
kiStatus: Backlog
internalReference: 1249679
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al consultar documentos utilizando un índice personalizado como filtro y el encabezado REST-Range (por ejemplo, resources=0-100), el encabezado REST-Content-Range de la respuesta devuelve un total incorrecto de recursos (por ejemplo, 300). Sin embargo, la consulta con un rango superior (por ejemplo, resources=300-400) revela que el total real es mayor. Esto ocurre porque la consulta utiliza un índice personalizado en lugar del indexador.


##

## Simulación



1.

Realice una búsqueda con el índice personalizado como filtro en una entidad que tenga más de 300 documentos con la cabecera:

    REST-Rango: resources=0-100

2. Observa que la respuesta `REST-Content-Range` indica un total de `300`.
3.

Realiza otra petición utilizando:

    REST-Rango: resources=300-400

4. Observe que siguen devolviéndose documentos, lo que indica que el total real es superior a 300.



## Workaround


Elimine el índice personalizado. Esto obligará a la aplicación a consultar directamente al indexador, que devuelve correctamente el recuento total.




