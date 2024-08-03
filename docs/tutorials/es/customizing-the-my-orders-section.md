---
title: 'Customizar la sección Mis Pedidos'
id: 4DXbgLL65iMKsW40kuaAwK
status: DRAFT
createdAt: 2017-05-02T18:59:18.106Z
updatedAt: 2021-04-05T21:34:01.967Z
publishedAt: 
firstPublishedAt: 2017-05-02T19:01:38.688Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_6
slug: customizando-la-seccion-mis-pedidos
locale: es
legacySlug: customizando-la-seccion-mis-pedidos
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

La nueva sección Mis Pedidos (My Orders) es una actualización *mayor* en relación a la anterior, que cambia todo el layout de la pagina. Por eso, requiere que la customización actual sea adaptada.

Ya está disponible en ambiente beta (`accountname.vtexcommercebeta.com.br`) para testes, y se puede activar con un checkbox de opt-in, como puede ver en el [tutorial de apresentación](http://help.vtex.com/es/tutorial/nueva-seccion-de-mis-pedidos) de la nueva sección.

Vea abajo una lista con las clases disponibles para customización:

<div class="alert alert-warning">
Customizaciones de interface <strong>no son oficialmente soportadas por VTEX</strong>.
<br />
<br />
Estas classes y configuraciones pueden ser alteradas o removidas en futuras actualizaciónes. Como buena práctica, recomendamos tratar errores de Javascript para que su código de customización no quiebre en caso de que una classe sea removida en el futuro.
</div>

<div class="alert alert-info">
En el caso de que poseas un archivo de customización para la antigua versión de MyOrders, recomendamos que coloque la nueva customización en un nuevo archivo separado.
</div>

### Lista de pedidos

![Página de lista del pedido con clases para customización en destaque](https://images.contentful.com/alneenqid6w5/1P5JMzt3jGIAKIOmC4ka4e/d7511d7273f4a957acc6f7e1322a81e6/my-orders-doc-1.png)

CSS:
```
.myo-toggle {  
 // Toggle de selección de la lista de pedidos  
}  

.myo-order-card {  
 // Card del pedido  
}  

.myo-order-header {
 // Header del card del pedido
}

.myo-order-sku {
 // Elementos del SKU
}

.myo-invoice-btn {
 // Botón de impresión de invoice
}

.myo-details-btn {
 // Link para detalles del pedido
}

.myo-cancel-btn {
 // Link para cancelar el pedido
}
```

### Detalle del Pedido

![Página de detalles del pedido con clases para customización en destaque](https://images.contentful.com/alneenqid6w5/CF8gDhZGeG2qYK44AKW68/6a46176cb65fa479f1687fd82a3bfd12/my-orders-doc-2.png)

CSS:
```
.myo-workflow {
 // Workflow del pedido
}

.myo-product-row {
 // Fila de un producto
}
```

### Cancelación de pedido

![Página de cancelación del pedido con clases para customización en destaque](https://images.contentful.com/alneenqid6w5/1WTQWTszjSqasKY82KuemC/56ca4c3e5a1264d35d40b8753f473065/my-orders-doc-3.png)

CSS:
```
.myo-option-heading {
 // Heading de la sección de razones
}

.myo-option {
 // Línea com opción de cancelación
}

.myo-option-disclaimer {
 // Box con avisos sobre cancelación de pedido
}

.myo-summary {
 // Sidebar con sumário del pedido
}

.myo-summary-header {
 // Header del sidebar
}

.myo-summary-product {
 // Linea con el produto del pedido en la sidebar
}
```
