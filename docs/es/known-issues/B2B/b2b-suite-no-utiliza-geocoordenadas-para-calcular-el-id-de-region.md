---
title: 'B2B Suite no utiliza geocoordenadas para calcular el Id de región'
id: 7ITcf4hiOD1k6XBIhaCclj
status: PUBLISHED
createdAt: 2024-06-24T21:48:19.921Z
updatedAt: 2024-06-27T20:58:12.541Z
publishedAt: 2024-06-27T20:58:12.541Z
firstPublishedAt: 2024-06-24T21:48:20.731Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-suite-dont-use-geocoordinates-to-calculate-region-id
locale: es
kiStatus: Backlog
internalReference: 1055033
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Es posible utilizar tarifas de envío utilizando códigos postales o geocoordenadas, pero las Organizaciones B2B utilizan sólo códigos postales para calcular los ID de región. Si una cuenta tiene geolocalización (polígonos) registrada en sus tarifas de envío, los productos se mostrarán como no disponibles en el escaparate.


##

## Simulación



- Registrar tarifas de envío con polígonos;
- Crear una organización;
- Entrar en la tienda;
- No se muestra ningún producto.



## Workaround


N/A




