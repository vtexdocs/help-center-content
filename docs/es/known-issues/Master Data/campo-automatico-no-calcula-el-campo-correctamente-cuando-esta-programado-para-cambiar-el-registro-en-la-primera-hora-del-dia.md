---
title: 'Campo automático no calcula el campo correctamente cuando está programado para cambiar el registro en la primera hora del día'
id: 6DieNCI6paEUeg06cKsCYI
status: PUBLISHED
createdAt: 2018-12-17T18:37:45.246Z
updatedAt: 2022-12-22T20:45:49.754Z
publishedAt: 2022-12-22T20:45:49.754Z
firstPublishedAt: 2018-12-17T19:10:10.371Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: automatic-field-doesnt-calculate-the-field-correctly-when-set-to-calculate-during-the-first-hour-of-the-day
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El Campo Automático (campo calculado) funciona correctamente cuando "Recalcular este campo:" está establecido para "solo cuando ingrese el registro", pero deja de funcionar cuando está programado para recalcular "en la primera hora..." y susvariantes. ![inline1511102536](//images.ctfassets.net/alneenqid6w5/JbRenxvruoyYOueqguwcy/8ae33d07ce4db627a1c45eed5916824e/inline1511102536.png)

## Simulación

1.  Acceda a https://{{account}}.vtexcrm.com.br
2.  Haga clic en la pestaña "Campos automáticos"
3.  Especifique el tipo de valor
4.  En el área de edición de fórmula, seleccione la opción "En la primera hora del día"

## Workaround

Puede programar un middleware usando VTEX.IO para efectuar la lógica del  campo automático y establecer el valor del campo.

