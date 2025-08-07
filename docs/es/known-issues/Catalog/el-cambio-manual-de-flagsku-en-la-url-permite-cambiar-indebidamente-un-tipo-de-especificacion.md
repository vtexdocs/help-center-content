---
title: 'El cambio manual de "flagSKU" en la URL permite cambiar indebidamente un tipo de especificación.'
id: 1hcfTgeb1sgHV0BVm1DGoP
status: PUBLISHED
createdAt: 2024-08-19T14:52:40.859Z
updatedAt: 2024-08-19T14:52:42.128Z
publishedAt: 2024-08-19T14:52:42.128Z
firstPublishedAt: 2024-08-19T14:52:42.128Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: el-cambio-manual-de-flagsku-en-la-url-permite-cambiar-indebidamente-un-tipo-de-especificacion
locale: es
kiStatus: Backlog
internalReference: 1083333
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando se crea una especificación, se establece como un SKU o tipo de producto y esto no debe ser cambiado después de su creación.

Sin embargo, hay un fallo en la administración del catálogo que permite que estos campos se cambien incorrectamente de su tipo original (de SKU a producto o viceversa), al manipular la URL de la página de administración.


##

## Simulación


1 - acceder a una lista de especificaciones de productos en su cuenta https://account_name.myvtex.com/admin/site/Campo.aspx

2 - cree una especificación y pulse guardar

3 - su formato tendrá los siguientes parámetros de consulta (ejemplo) ...CampoForm.aspx?Id=20&**flagSku=0**&idCategoria=3 --> el dato "flagSKu" = 0 significa que es una especificación de producto.

4 - cambia este flag a =1 y pulsa enter.

5 - Al recargar la página, pulsa guardar.

6 - la especificación del producto se convirtió ahora en una especificación del producto, que no es un comportamiento deseado en el catálogo.



## Workaround


-





