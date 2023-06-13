---
title: JSON de Get Order entrega ahora nuevas variables de cálculos de pedido
id: 58rQC0b6B0lw0eeKbNxJG6
status: PUBLISHED
createdAt: 2019-03-20T18:06:17.876Z
updatedAt: 2019-12-31T15:13:28.374Z
publishedAt: 2019-12-31T15:13:28.374Z
contentType: updates
productTeam: Post-purchase
author: 5V92cmF9jG8KG600EwUgEg
slug: Json-de-Get-Order-entrega-ahora-nuevas-variables-de-calculos-de-pedido
legacySlug: Json-de-Get-Order-entrega-ahora-nuevas-variables-de-calculos-de-pedido
announcementImageID: 
announcementSynopsisES: Ahora disponible informaciónes detalladas sobre el cálculo del envio de lo pedido
---

<div class="alert alert-warning">
Por motivos técnicos, el lanzamiento de esta funcionalidad fue aplazado por tiempo indeterminado.
</div>

A partir del 1 de abril de 2019, el JSON de pedidos devolverá un nuevo objeto llamado `alternativeTotals`. Se mostrará en los totalizadores que quedan dentro del array de `totals`, para las consultas realizadas por la API de Get Order.

Por ejemplo:
En un pedido donde el valor de envío calculado sea 9,90 y él fue abatido por una promoción de envío gratuito, el JSON retorna el siguiente dato:

```
"totals": [
       {
           "id": "Items",
           "name": "Total de Ítems",
           "value": 23970,
       },
       {
           "id": "Descuentos",
           "name": "Total de Descuentos",
           "value": 0,
       },
       {
           "id": "Envío",
           "name": "Total de Envío ",
           "value": 0,

              }
           ]
```
Con el nuevo campo, el retorno pasará a ser:
```

"totals": [
       {
           "id": "Items",
           "name": "Total de Ítems",
           "value": 23970,
           "alternativeTotals": null
       },
       {
           "id": "Descuentos",
           "name": "Total de Descuentos",
           "value": 0,
           "alternativeTotals": null
       },
       {
           "id": "Envío",
           "name": "Total de Envío",
           "value": 0,
           "alternativeTotals": [
               {
                   "id": "AlternativeShippingTotal",
                   "name": "Alternative Shipping Total",
                   "value": 990,
                   "alternativeTotals": null
               },
               {
                   "id": "AlternativeShippingDiscount",
                   "name": "Alternative Shipping Discount",
                   "value": -990,
                   "alternativeTotals": null
               }
           ]
```
En el valor de envío, tenemos el valor 0. En el alternativeTotals, tenemos los datos usados por el sistema para llegar al cálculo del envío de 9,90. Sin embargo, tuvimos también un descuento de 9,90, haciendo que el valor final del envío fuera 0.

## Principales ventajas 
Este nuevo campo permite la utilización del dato en la interfaz del módulo, mostrando al usuario del administrador el cálculo hecho para el envío de forma clara e intuitiva.

Otra ventaja es la posibilidad de tener los datos del cálculo, hecho por el sistema, disponible para consumo de su sistema de BI.

## Lo que usted necesita hacer

Es fundamental revisar las integraciones que usan las API Get Order como las de ERP, por ejemplo. Aquellas que no estén preparadas para recibir la nueva respuesta deben ser ajustadas antes del 29 de Marzo de 2019. 

Atención: por ahora, el cambio ocurrirá sólo en la API. La UI de la Gestión de Pedidos no se modificará.
