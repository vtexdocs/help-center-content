---
title: 'Actualizar la cantidad de SKUs en inventario'
id: IKMWjOjMcMqKusSGko8c0
status: ARCHIVED
createdAt: 2018-10-02T19:10:45.879Z
updatedAt: 2022-01-11T19:32:49.878Z
publishedAt: 
firstPublishedAt: 2018-10-03T18:56:12.298Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: updating-quantity-of-skus-in-inventory
locale: es
legacySlug: actualizar-la-cantidad-de-skus-en-stock
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---




Dependiendo de la tienda, es posible que los cambios en las cantidades en inventario sean hechos por un __ERP__, utilizando las [APIs de VTEX](https://developers.vtex.com/reference/logistics-api-overview). El objetivo de este artículo es orientarle sobre cómo actualizar la información de inventario de un SKU utilizando el Admin de VTEX.

En el módulo Inventario y Envío, la herramienta Manejo de los ítems de inventario  permite el control y la edición del stock de los ítems de su tienda. Usted puede filtrar de acuerdo con la cantidad disponible, así como ver el historial de actividad de un SKU a través de todos los stocks utilizados por la tienda, o incluso listar los pedidos que tienen una reserva del SKU. Hay tres maneras de **actualizar la cantidad de SKUs en stock** utilizando el admin de VTEX:  

- De forma individual, actualizando un SKU específico.  
- Filtrando por cantidad, actualizando los SKUs que tienen stock por debajo de una cierta cantidad.  
- De forma masiva, actualizando varios SKUs a través de una plantilla.  

## Cómo actualizar SKUs de forma individual

 1. Acceda al módulo **Inventario y Envío**.    
 2. Haga clic en **Inventario**.    
 3. Busque por **Producto**.    
*Si el Id es un número entre 1 y 9, ingrese el número 0 antes del Id para realizar la busca. Ejemplo: 07*.  
 4. En la pantalla *Actualizar Inventario*, ingrese en el campo **Actualizar conteo** la cantidad real de SKUs en stock.    
*Este valor siempre debe completarse con el valor de los ítems disponibles en su stock. Es decir, aquellos ítems que usted está seguro de que existen físicamente para su entrega.*  
 5. Haga clic en **Guardar**.   

## Cómo actualizar SKUs filtrando por cantidad 

 1. Acceda al módulo **Inventario y Envío**.  
 2. Haga clic en **Inventario**.  
 3. Busque por **Ítems en inventario por debajo de**.  
 4. Seleccione los SKUs deseados y haga clic en **Editar Seleccionados**.   
*Si su búsqueda devuelve apenas un SKU con stock por debajo de lo informado, usted será redirigido directamente a la pantalla de **Actualizar Inventario**.*
 6. En la pantalla *Actualizar Inventario*, ingrese en el campo **Actualizar conteo** la cantidad real de SKUs en stock.  
*Este valor siempre debe completarse con el valor de los ítems disponibles en su stock. Es decir, aquellos ítems que usted está seguro de que existen físicamente para su entrega*.    
 7. Haga clic en **Guardar**.    


### Campos de la tabla Actualizar Inventario
- **Último conteo**: se refiere al último número que se ingresó en el campo Actualizar Conteo.  
- **Ítems reservados**: se refiere al número de SKUs que están reservados para un pedido.  
Recordando que un pedido puede tener una reserva del producto activa. Si el producto no se ha enviado, se considerará apenas como un ítem  reservado. Entienda más sobre los pedidos facturados y las reservas. Los pedidos con ítems reservados seguirán figurando como reservados y no podrán venderse.  
- **Ítems en manejo**: se refiere a los ítems que están en status de manipulación, con una reserva reconocida.  
- **Cantidad a la venta**: es el resultado del número de SKUs en el *Último conteo* menos el número de *Ítems reservados* y de *Ítems en manejo*.  


Los pedidos con ítems reservados seguirán figurando como reservados y no podrán venderse. En el siguiente ejemplo tenemos un caso en el que se reservan 10 unidades de Gatorade y los pedidos aún no se han facturado. A medida que actualizamos el conteo en stock, el sistema ya simula cuál será el resultado. En el ejemplo, hasta 10 ítems tienen un stock negativo, porque los pedidos con reserva activa siguen figurando en la lista. [Entienda mejor cómo funcionan las reservas](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona/). 

![Atualizar Estoque GIF](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Shipping/Inventory/actualizar-la-cantidad-de-skus-en-inventario_1.gif)


## Actualización masiva de SKUs por plantilla

Para hacer una edición masiva y actualizar el stock de diversos SKUs, siga los pasos de nuestro artículo  [importar y exportar plantilla de stock](https://help.vtex.com/es/tutorial/importando-e-exportando-planilha-de-estoque--tutorials_2034).

## ¿Por qué mi stock está negativo?
El cálculo de la cantidad disponible de un ítem se realiza de la siguiente manera:

`en stock - reserva = disponible`

Cuando la cantidad disponible es negativa, esto significa que existen más ítems reservados que la cantidad total ingresada en stock. De esta forma, vemos que el stock se ha actualizado a cero o a una cantidad menor que cero después de que se hayan efectuado reservas. El stock negativo se produce cuando intentamos dar de baja un ítem de un pedido mientras este ítem aún está como reservado por el sistema. El flujo correcto prevé que la baja en el stock solo se produzca después del status  *A preparar la entrega*. Después de este status, la reserva ya se reconoce. Antes de esto, el sistema entenderá que el ítem que se está quitando no es el ítem en reserva, actualizando el stock de manera incorrecta.

