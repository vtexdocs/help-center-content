---
title: Pestañas "Recibir | Retirar" se muestran solo según la disponibilidad en el código postal buscado
id: 5PVGReAvyE0AOcoIq2SeKS
status: PUBLISHED
createdAt: 2018-11-21T16:19:00.507Z
updatedAt: 2022-12-22T20:43:11.612Z
publishedAt: 2022-12-22T20:43:11.612Z
firstPublishedAt: 2018-11-21T16:49:24.622Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pestanas-recibir-retirar-se-muestran-solo-segun-la-disponibilidad-en-el-codigo-postal-buscado
kiStatus: Backlog
internalReference: 
---

## Sumario

Actualmente, el escenario de exhibición de las opciones "Recibir | Retirar" está condicionado a la búsqueda del código postal en cualquiera de las pestañas. Esto significa que, si se busca en la pestaña "Recibir" un código postal que no se atienda en un punto de recogida, la pestaña "Retirar" no se mostrará al usuario.

![Captura de Pantalla 2018-11-21 a las  14.25.40](//images.ctfassets.net/alneenqid6w5/5kj7LZNmpiMsum4OSUc8mC/575006d7f6b4ad87dbeb60dea57b191c/Captura_de_Tela_2018-11-21_a__s_14.25.40.png)


## Simulación

1. En la finalización de compra, avance al paso de "Entrega";
2. En la pestaña "Recibir", busque un código postal que no es atendido por ningún punto de recogida;
3. Compruebe que la pestaña "Retirar" no aparece.

## Workaround

La solución paliativa se da por la personalización del CSS, forzando la visualización de la clase, como ejemplo abajo:

 .shipping-method-wrapper{display:block}

