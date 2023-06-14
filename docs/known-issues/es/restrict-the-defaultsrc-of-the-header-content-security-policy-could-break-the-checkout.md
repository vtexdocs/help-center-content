---
title: 'Restringir el default-src de la cabecera Política de Seguridad de Contenidos podría romper el Checkout'
id: 5fQXzMrLchSUENa53MXgf
status: PUBLISHED
createdAt: 2023-03-02T17:29:31.623Z
updatedAt: 2023-03-02T17:29:32.102Z
publishedAt: 2023-03-02T17:29:32.102Z
firstPublishedAt: 2023-03-02T17:29:32.102Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: restringir-el-defaultsrc-de-la-cabecera-politica-de-seguridad-de-contenidos-podria-romper-el-checkout
locale: es
kiStatus: Backlog
internalReference: 763359
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Restringir la cabecera de la Política de Seguridad de Contenidos puede provocar que no se carguen los archivos de checkout. Por ejemplo, la configuración `default-src 'self'` puede provocar que no se carguen los archivos procedentes de vtex.com


##

## Simulación



1. Establecer **default-src** de la Política de Seguridad de Contenidos
2. intente comprar algo a través de la caja
3. Ver el error en la consola

    Política de seguridad de contenidos: la configuración de la página ha bloqueado la carga de un recurso en




## Workaround


Elimine el encabezado




