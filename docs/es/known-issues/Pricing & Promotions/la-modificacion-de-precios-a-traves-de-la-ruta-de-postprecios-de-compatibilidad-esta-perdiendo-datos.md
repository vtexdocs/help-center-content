---
title: "La modificación de precios a través de la ruta de postprecios de compatibilidad está perdiendo datos"
id: 4VqqNOUcRIGiZhxyVU4Ite
status: PUBLISHED
createdAt: 2022-03-29T19:12:47.179Z
updatedAt: 2024-12-19T19:50:09.968Z
publishedAt: 2024-12-19T19:50:09.968Z
firstPublishedAt: 2022-03-29T19:12:47.781Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: la-modificacion-de-precios-a-traves-de-la-ruta-de-postprecios-de-compatibilidad-esta-perdiendo-datos
locale: es
kiStatus: No Fix
internalReference: 487698
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hemos identificado un problema con la ruta de precios de publicación de compatibilidad. Cuando se envían varias solicitudes de actualización de precios en un breve espacio de tiempo, es posible que el sistema no procese el precio más actualizado. Esto puede provocar que se apliquen precios obsoletos o incorrectos.



## Simulación



1. Utiliza la ruta de compatibilidad publicar precios para enviar un lote de actualizaciones de precios.
2. Supervise el proceso utilizando los registros de auditoría para comprobar si todas las actualizaciones se aplican correctamente.
3. 3. Repita la prueba con diferentes tamaños de lote e intervalos entre solicitudes. Tenga en cuenta que el problema no se produce sistemáticamente en todas las pruebas.



## Workaround



- Cambie a las API de tarificación V2, que no presentan este problema.
- Distribuya las solicitudes de forma más uniforme introduciendo retrasos, como esperar al menos 30 segundos entre lotes consecutivos.




