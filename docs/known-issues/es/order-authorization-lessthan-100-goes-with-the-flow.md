---
title: 'Autorización de pedido inferior a 100 va con la corriente'
id: 51vxznnbek6mtVtQgKEW9d
status: PUBLISHED
createdAt: 2024-02-16T13:44:05.199Z
updatedAt: 2024-02-16T13:44:05.932Z
publishedAt: 2024-02-16T13:44:05.932Z
firstPublishedAt: 2024-02-16T13:44:05.932Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: autorizacion-de-pedido-inferior-a-100-va-con-la-corriente
locale: es
kiStatus: Backlog
internalReference: 983031
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Identificamos que cuando el sistema de Autorización de ordenes (OrderAuth) se configura con el valor "lessThan: 100", en el "Rules-list.CreateDoEffect" , no puede entender que es menor o igual al 100%, solo que es menor al 100% y cuando la orden tiene un descuento del 100%, el sistema autoriza la orden para que siga el flujo normal.


##

## Simulación


Para simular es necesario configurar orderAuth:
Acceso: https://.myvtex.com/admin/order-auth
Configurar divergencia de precios > insertar los siguientes valores en la regla:
Rules-list.denyEffect :0 a 60%

Reglas-lista.CreateDoEffect: 61 a 100%

Al configurar la regla "Rules-list.CreateDoEffect" al 100%, no puede entender que sea menor o igual, sólo que es menor y por tanto autoriza a que la petición siga el flujo normal cuando es igual al 100%.



## Workaround


N/A.





