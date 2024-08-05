---
title: "Estado 'ERRO DE PROCESSAMENTO' Política de envíos"
id: 4g3SWNwDVJG5OeJVP05TOd
status: PUBLISHED
createdAt: 2022-05-18T15:12:15.503Z
updatedAt: 2022-11-25T21:59:53.193Z
publishedAt: 2022-11-25T21:59:53.193Z
firstPublishedAt: 2022-05-18T15:12:15.910Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: estado-erro-de-processamento-politica-de-envios
locale: es
kiStatus: Backlog
internalReference: 445793
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hay un escenario con respecto al estado de la Política de Envío después de crear/actualizar los valores de carga de la API. El estado sigue pendiente como "Error al procesar" en caso de creación sin hoja de cálculo.



## Simulación


Paso 1 - Crear la política de envío sin una hoja de cálculo. El estado será "Error al procesar" pero es normal considerando que no se procesó ningún archivo.

Paso 2 - Ejecute el API - POST creando un rango de Código Postal a esa Póliza de Envío. (/valores/actualización)

Paso 3 - En este momento es posible comprobar que el Código Postal coincide con las Tarifas de Envío, comprobar el Código Postal cargado usando el API y aún más una descarga de la hoja de cálculo de esa Política de Envío. (Porque el paso 2 crea una hoja de cálculo).

Paso 4 - El Simulador de Envíos funciona bien.

Aunque todo funciona bien, el ESTADO de la Póliza de Envío sigue en "Error al procesar".

PD: A veces el Simulador de Envíos no puede funcionar porque después de actualizar los valores de carga hay una línea para actualizar todo el sistema (como dynamo y elasticsearch).



## Workaround


La solución es simplemente procesar la hoja de cálculo. Puede ejecutar una descarga y una carga sin ningún cambio y el estado cambiará a activo.

