---
title: '¿Qué son transportadoras?'
id: 3fLedVI57srjBDDxxGgOWe
status: ARCHIVED
createdAt: 2019-10-08T19:46:57.025Z
updatedAt: 2022-03-08T18:43:18.044Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:50:14.542Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: carrier-concept-definition
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

## Definición
Una transportadora es una empresa responsable de distribuir los SKUs vendidos por una tienda. Así como el stock y el muelle, la transportadora es también una de las etapas de la ruta logística de una tienda - la última de ese proceso.  

Generalmente, una sola tienda suele tener varias transportadoras asociadas a esta. Sin embargo, en este caso, las transportadoras tienen características diferentes entre sí, lo que permite la personalización en la entrega de los SKUs. 

## Opciones de envío

Las opciones de envío son los atributos que diferencian a las transportadoras. Estas características se configuran al registrar una transportadora en el sistema.  

### Límites de los paquetes

El límite de los paquetes se compone de los valores "suma de las medidas altura+anchura+longitud" y "medida de la arista más grande". Estos atributos determinan el tamaño máximo de los paquetes admitidos por una transportadora. 

Si un producto excede estas medidas, existen dos posibilidades de envío: o bien el pedido se divide en más de un paquete o bien otra transportadora, que admita tamaños más grandes, realizará el envío. 

### Conversión de datos
La conversión de datos consiste en los valores "factor cúbico de peso" y "utilizar el peso cúbico apenas si este pasa de". Ambos atributos se utilizan para calcular la cubicación de un paquete, una medida que tiene en cuenta el peso y el volumen de los paquetes. 

### Fines de semana y feriados
El valor "fines de semana y feriados" define si una determinada transportadora hará entregas fuera de los días hábiles o no. 

### Mínimo de ítems en la entrega
Para que un envío se realice en varias entregas, es necesario establecer el mínimo de ítems que conformarán el montaje de esas entregas. En este caso, el valor "solo se entregará si el total de los ítems en la entrega es múltiplo de:" determina el número mínimo de ítems para que ese envío se concluya.

### Precio mínimo de los productos
Finalmente, el último valor de las opciones de envío es "el valor total de los productos debe ser mayor/menor que". Determina un rango opcional de valores permitidos para entregas por parte del transportista y debe definirse a partir de la regla comercial de la tienda.

<div class=”alert alert-warning”>
Cabe mencionar que si una entrega no cumple con algunas de las opciones de envío preestablecidas, la transportadora seleccionada <strong>no</strong> realizará la entrega.
</div>
