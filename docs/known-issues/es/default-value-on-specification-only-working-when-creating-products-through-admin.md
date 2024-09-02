---
title: 'El valor por defecto en la especificación sólo funciona cuando se crean productos a través de la administración'
id: 6oL4LDFx18s0pOvOEKcniQ
status: PUBLISHED
createdAt: 2022-03-25T14:21:28.216Z
updatedAt: 2022-11-25T21:46:27.899Z
publishedAt: 2022-11-25T21:46:27.899Z
firstPublishedAt: 2022-03-25T14:21:29.045Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-valor-por-defecto-en-la-especificacion-solo-funciona-cuando-se-crean-productos-a-traves-de-la-administracion
locale: es
kiStatus: Backlog
internalReference: 550097
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se crea una especificación en una categoría VTEX se puede configurar un valor por defecto que se rellenará cuando se cree el sku/producto sin esta información.

Sin embargo, esta característica no se comporta como se espera cuando el sku/producto se crea usando la API o la hoja de cálculo. El campo permanece vacío.

Cuando se crea el sku/producto a través de la interfaz de administración, el valor por defecto funciona normalmente.



## Simulación



1. Cree una especificación con un valor por defecto;
2. Crear un producto a través de Admin sin rellenar este campo;
3. Verificar que el valor del campo es el valor por defecto;
4. Crear un producto a través de la API o de la hoja de cálculo;
5. Verificar que el valor del campo está vacío;



## Workaround


Cree el producto mediante el sistema de administración.

