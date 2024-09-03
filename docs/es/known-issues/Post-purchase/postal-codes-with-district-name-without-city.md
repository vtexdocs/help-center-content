---
title: 'Códigos Postales con nombre de distrito sin la ciudad respectiva'
id: 1DrAs9AqCoakeaWoAKSYkm
status: PUBLISHED
createdAt: 2017-04-05T21:12:36.398Z
updatedAt: 2022-12-22T20:45:40.274Z
publishedAt: 2022-12-22T20:45:40.274Z
firstPublishedAt: 2017-05-18T19:59:58.193Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: codigos-postales-con-nombre-de-distrito-sin-la-ciudad-respectiva
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Algunos Códigos Postales no traen el nombre de la ciudad junto al distrito, pero sólo el nombre del distrito. Lo correcto sería traer el nombre de los distritos acompañados del nombre de la ciudad.

### Ejemplo 1

Galante es un distrito de la ciudad de Campina Grande. Cuando simulamos este código postal, tenemos el siguiente retorno:

- Código postal: 58446-000
- Ciudad: Galante

**Lo correcto sería**:

- Código postal: 58446-000
- Ciudad: Galante (Campina Grande)

### Ejemplo 2

Taperuaba es un distrito de la ciudad de Sobral. Cuando simulamos este código postal, tenemos el siguiente retorno:

- Código Postal: 62106-000
- Ciudad: Taperuaba

**Lo correcto sería**:

- Código Postal: 62106-000
- Ciudad: Taperuaba (Sobral)

## Simulación

- Acceder al módulo **Logistics**;
- Hacer clic en **Simulación de envío**;
- Seleccionar cualquier producto;
- Insertar el código postal 58446-000, por ejemplo;
- Hacer clic en **Simular Envío**;
- En la dirección, aparecerá la ciudad sólo como "Galante".

## Workaround

Actualmente, no hay workaround para este escenario. Es necesario actualizar los registros para evitar que los clientes se confundan.

