---
title: 'Nombre incorrecto del botón de llamada a la acción en el paso de perfil'
id: 1S1dBhLOnKSpDX0sbXwF0y
status: PUBLISHED
createdAt: 2022-05-27T20:18:02.980Z
updatedAt: 2022-11-25T21:53:10.564Z
publishedAt: 2022-11-25T21:53:10.564Z
firstPublishedAt: 2022-05-27T20:18:03.671Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: nombre-incorrecto-del-boton-de-llamada-a-la-accion-en-el-paso-de-perfil
locale: es
kiStatus: Backlog
internalReference: 514532
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al rellenar los datos en el paso de perfil en la compra y pasar al paso de envío, al volver pulsando la flecha de retorno del navegador, al llegar de nuevo al perfil el botón para pasar al siguiente paso, debería estar con el nombre de '**Ir a la entrega**' sin embargo dice '**Ir al pago**', incluso con el componente de envío aún sin rellenar.

Nota: esto sólo ocurre con el componente de código postal en el paso de envío

Nota2: El mismo problema, pero con otra validación, con la dirección rellenada, el botón dice "Ir para entrega"




## Simulación



Rellene los datos del perfil y seleccione "Ir a la entrega".

Cuando llegue al paso de entrega, vuelva en la flecha de retorno del navegador

Puedes ver el CTA "**Ir para o Pagamento**" pero lo correcto es "**Ir para entrega**"




## Workaround


N/A

