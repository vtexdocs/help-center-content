---
title: 'pageView se activa dos veces al acceder a Mi Cuenta'
id: 2jV0cIVxNUhb170tBgBQo6
status: PUBLISHED
createdAt: 2023-07-03T16:33:09.076Z
updatedAt: 2023-07-03T16:33:09.652Z
publishedAt: 2023-07-03T16:33:09.652Z
firstPublishedAt: 2023-07-03T16:33:09.652Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: pageview-se-activa-dos-veces-al-acceder-a-mi-cuenta
locale: es
kiStatus: Backlog
internalReference: 854480
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al acceder a Mi Cuenta, el evento pageView se dispara dos veces, duplicando los datos en Analytics.


##

## Simulación



- Configure la aplicación Google Tag Manager,
- Acceda a Mi Cuenta;
- Abra las Herramientas de Desarrollador del navegador y escriba "dataLayer" en la Consola; habrá dos eventos pageView.



## Workaround


N/A



