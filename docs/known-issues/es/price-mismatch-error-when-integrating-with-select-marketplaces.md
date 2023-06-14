---
title: Divergencia de precios en integración con el mercado
id: 2oKzaHhwrSeW282EOciSE2
status: PUBLISHED
createdAt: 2018-12-07T16:20:45.819Z
updatedAt: 2022-12-22T15:17:30.632Z
publishedAt: 2022-12-22T15:17:30.632Z
firstPublishedAt: 2018-12-07T17:31:14.631Z
contentType: knownIssue
productTeam: Channels
author: TnXcuQydAAOuwWACo864E
tag: Pricing & Promotions
slug: divergencia-de-precios-en-integracion-con-el-mercado
kiStatus: Fixed
internalReference: 
---

## Sumario

El usuario es capaz de crear con éxito una política comercial y fijar un precio fijo para cada marketplace integrado. 


A veces el marketplace no es notificado de la expiración del precio causando un desajuste entre la cuenta y los precios del marketplace. 


Marketplaces conocidos donde ha ocurrido este problema:
- Amazon
- CNova
- Mercado Libre
- Walmart


## Simulación

Este problema conocido ocurre normalmente con cuentas que poseen integración con marketplaces. No es necesaria ninguna configuración especial para causar este bug.



## Workaround

Abrir un ticket y solicitar una carga de precio manual (forzar la actualización).  Esto  resuelve el problema temporariamente.

