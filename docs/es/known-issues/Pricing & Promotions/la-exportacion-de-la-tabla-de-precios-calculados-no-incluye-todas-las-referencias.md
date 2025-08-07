---
title: "La exportación de la tabla de precios calculados no incluye todas las referencias."
id: 3pJcwSnZG1nO0YjIPCnfyV
status: PUBLISHED
createdAt: 2022-12-23T13:41:21.656Z
updatedAt: 2024-12-19T13:57:55.682Z
publishedAt: 2024-12-19T13:57:55.682Z
firstPublishedAt: 2022-12-23T13:41:22.123Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: la-exportacion-de-la-tabla-de-precios-calculados-no-incluye-todas-las-referencias
locale: es
kiStatus: Backlog
internalReference: 722005
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al exportar la tabla de precios calculados desde la interfaz de usuario del módulo de precios, no todas las SKU se incluyen sistemáticamente en el archivo exportado. El número de líneas de la hoja de cálculo exportada puede variar de una exportación a otra, lo que a veces da como resultado menos SKU de las esperadas.



## Simulación


Este problema es intermitente, pero puede observarse de la siguiente manera:

1. 1. Vaya a la interfaz de usuario del módulo de precios.
2. 2. Asegúrese de que no hay filtros aplicados.
3. 3. Exporte la tabla de precios calculados.
4. Compare el número de filas en la hoja de cálculo exportada.
5. Repita el proceso de exportación varias veces. En algunos intentos, la hoja de cálculo puede tener menos filas que las exportaciones anteriores.



## Workaround


Para garantizar resultados precisos:

- Exporte la Tabla de Precios Calculados varias veces y compare las hojas de cálculo para asegurarse del número de filas de la tabla de precios.
- Utilice la exportación con el mayor número de filas como referencia para la tabla de precios calculados completa.





