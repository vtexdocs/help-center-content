---
title: 'La exportación de los valores de adjuntos de SKU no funciona correctamente en los sistemas operativos en español'
id: 75FXMEc3L2kI0JaFjyyZuU
status: PUBLISHED
createdAt: 2022-04-25T20:26:43.281Z
updatedAt: 2022-11-25T21:46:06.902Z
publishedAt: 2022-11-25T21:46:06.902Z
firstPublishedAt: 2022-04-25T20:26:44.068Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-exportacion-de-los-valores-de-adjuntos-de-sku-no-funciona-correctamente-en-los-sistemas-operativos-en-espanol
locale: es
kiStatus: Backlog
internalReference: 566393
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el idioma del sistema operativo es el español (Perú), la exportación de los valores del anexo SKU genera una hoja de cálculo con las columnas "Valor" y "Custo" incorrectamente rellenadas



## Simulación


- Cambiar el idioma del sistema operativo a español (Perú)
- Exportar la hoja de cálculo de los valores del servicio por URL: `/admin/Site/SkuVincularValorServico.aspx`.
- Comparar el valor de la hoja de cálculo con el valor registrado o con el valor del PDP



## Workaround


Cambiar el idioma del sistema operativo a inglés/portugués para exportar o cambiar el valor en la hoja de cálculo

