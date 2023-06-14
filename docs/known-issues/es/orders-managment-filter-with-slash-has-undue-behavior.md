---
title: Filtro Gestión de Pedidos con barra (/) tiene comportamiento indebido
id: 1Tl4fatscQ686kgGAScSAs
status: PUBLISHED
createdAt: 2018-03-27T14:16:02.940Z
updatedAt: 2022-12-22T14:53:20.003Z
publishedAt: 2022-12-22T14:53:20.003Z
firstPublishedAt: 2018-03-27T14:20:26.844Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Order Management
slug: filtro-gestion-de-pedidos-con-barra-tiene-comportamiento-indebido
kiStatus: Fixed
internalReference: 
---

## Sumario

Al filtrar por boleto bancario con 7 días, 28 días, 30/60, 30/60/90 y hacer clic en uno de los pedidos de la lista, al volver el filtro a 30/60 y 30/60/90 los mismos se retiran automáticamente.


## Simulación

- Filtre por el medio de pago Boleto: 7 días, 28 días, 30/60, 30/60/90.
- Haga clic en uno de los pedidos que aparecen en la lista.
- Haga clic en Ventas para volver.
- El filtro mostrado será de 7 días y de 28 días. Se retirarán automáticamente los de 30/60 y 30/60/90.

## Workaround

Una solución sería excluir la barra (`/`) de los filtros o usar la API para obtener la lista de los pedidos:
https://documenter.getpostman.com/view/487146/vtex-oms-api/6tjSKqi#1135fafd-f24b-4a07-b45e-7487d746d087

