---
title: 'Control accountUserProfile crea máscara de teléfono sólo en el estándar brasileño'
id: 76NuOCa920CYq2wSgSAyOc
status: PUBLISHED
createdAt: 2017-08-15T14:49:39.178Z
updatedAt: 2022-12-22T20:48:40.595Z
publishedAt: 2022-12-22T20:48:40.595Z
firstPublishedAt: 2017-08-15T15:01:09.167Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: control-accountuserprofile-crea-mascara-de-telefono-solo-en-el-estandar-brasileno
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El control (viewPart) accountUserProfile está creando la máscara de teléfono sólo para el estándar brasileño: (99) 9999-99999. Países que tienen otros estándares no pueden utilizar el control sin aplicar una personalización (JS) sobre ese campo.

## Simulación

Para simular:

1. Configure el control "accountUserProfile" en el template utilizado por el layout "account".
2. Acceda a la página (/account) y verifique que la máscara aplicada a los campos de teléfono está en el formato brasileño.

## Workaround

Para evitar este escenario, utilice personalizaciones en JS para modificar la máscara según sea necesario. Haga ajustes también con JS para valorar los campos de teléfono, ya que con el cambio de la máscara puede que el campo se vacíe (incluso con la propiedad "value" del campo rellenada).

