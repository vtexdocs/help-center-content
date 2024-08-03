---
title: 'Las cookies de sesión se comparten entre distintos enlaces cuando no se encuentran en el mismo nivel de ruta'
id: 4pKeUI7qtdByaQowYs19Et
status: PUBLISHED
createdAt: 2023-10-25T01:06:04.190Z
updatedAt: 2023-10-25T01:06:04.707Z
publishedAt: 2023-10-25T01:06:04.707Z
firstPublishedAt: 2023-10-25T01:06:04.707Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: las-cookies-de-sesion-se-comparten-entre-distintos-enlaces-cuando-no-se-encuentran-en-el-mismo-nivel-de-ruta
locale: es
kiStatus: No Fix
internalReference: 925071
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las cookies para la información de sesión son exclusivas de la vinculación de cuenta específica, pero las vinculaciones que no están en el mismo nivel de ruta pueden recibir cookies de niveles inferiores, lo que provoca problemas.

Si son de la misma cuenta, la información de Sesión se mezclará y anulará parámetros críticos. Si son de cuentas diferentes, puede bloquear las peticiones, generando errores como "las peticiones entre cuentas no están permitidas".


##

## Simulación


Un ejemplo de escenario es una tienda que utiliza la ruta raíz `/` para su idioma por defecto (inglés) y `/fr` para un segundo idioma (francés). La información de la tienda en inglés puede afectar a la tienda en francés y viceversa.

Otro ejemplo es una tienda B2C bajo `/us` para el país específico y la tienda B2B bajo `/us/corporate`.



## Workaround


Las tiendas que comparten el mismo host/dominio pueden mantener el mismo patrón para su ruta sin mezclar diferentes niveles. Ideas de alternativas para los ejemplos presentados serían `/en` frente a `/fr` (ambos utilizando una ruta de un solo nivel) y `/us/personal` frente a `/us/corporativo` (ruta de dos niveles).




