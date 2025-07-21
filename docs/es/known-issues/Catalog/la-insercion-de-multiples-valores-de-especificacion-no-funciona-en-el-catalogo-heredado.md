---
title: "La inserción de múltiples valores de especificación no funciona en el catálogo heredado"
id: 2MSK9ZIrV3jzdJtHxpYfSO
status: PUBLISHED
createdAt: 2025-06-18T14:04:51.857Z
updatedAt: 2025-06-18T14:04:52.511Z
publishedAt: 2025-06-18T14:04:52.511Z
firstPublishedAt: 2025-06-18T14:04:52.511Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-insercion-de-multiples-valores-de-especificacion-no-funciona-en-el-catalogo-heredado
locale: es
kiStatus: Backlog
internalReference: 1246453
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, existe una función en la experiencia de catálogo heredada en la que puede añadir varios valores a un campo utilizando un salto de línea (Ejemplo de ruta URL: https://mystore.vtexcommercestable.com.br/admin/site/CampoValorForm.aspx?idCategoria=123&idCampo=456&flagSku=0#).

La interfaz de usuario indica que se pueden añadir varios valores mediante un salto de línea, por ejemplo

"Valor A
Valor B
Valor C"

Y esto añadiría 3 valores distintos. Sin embargo, esta usabilidad no es funcional actualmente y al intentar hacerlo, la interfaz de usuario se actualiza y en su lugar se muestra un mensaje "¡Pruebe este consejo!" (que no da ninguna información útil).

Los datos en sí no se guardan.



## Simulación


1 - Acceda a la interfaz de usuario de valores de campo para el catálogo heredado (Categorías --> Campos (ya sea producto o SKU) --> Valores --> Añadir valores)

2 - Intente añadir múltiples valores a través de un salto de línea, como en el siguiente ejemplo:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-insercion-de-multiples-valores-de-especificacion-no-funciona-en-el-catalogo-heredado_1.png)

3 - No podrá hacerlo y se mostrará un mensaje "Pruebe este consejo".



## Workaround


Existen múltiples soluciones:

1 - Añadir estos campos uno a uno utilizando la misma interfaz de usuario
2 - Añádalos a través de la API
3 - Añádalos mediante la importación de hojas





