---
title: 'El componente selector de cantidad no vuelve al valor límite cuando el usuario hace clic rápidamente'
id: 4QRAzY1A0UD8hOUEkxAawz
status: PUBLISHED
createdAt: 2022-09-16T16:27:15.880Z
updatedAt: 2022-11-25T22:13:30.254Z
publishedAt: 2022-11-25T22:13:30.254Z
firstPublishedAt: 2022-09-16T16:27:16.745Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-componente-selector-de-cantidad-no-vuelve-al-valor-limite-cuando-el-usuario-hace-clic-rapidamente
locale: es
kiStatus: Backlog
internalReference: 659909
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Básicamente, hay una función que recibe el estado actualizado del valor que está siendo controlado en la pantalla por el usuario (es un useState). Esta función se utiliza en todo el componente para manejar las actualizaciones del estado de la cantidad. Para que este estado se actualice automáticamente cuando el usuario supere la cantidad devuelta en el contexto, relacionada con la disponibilidad del artículo, se pasa dentro de un useEffect.

El problema es que la consulta de disponibilidad del artículo parece ser más lenta que el clic del usuario. Hay que tener en cuenta que para que el usuario supere la cantidad límite (basada en la disponibilidad del artículo) tiene que hacer un clic más rápido.

Es importante mencionar que es un problema del frontend y no permite al usuario insertar más artículos en el carrito que el límite disponible.



## Simulación


Prueba: https://youtu.be/AJbtF4qeJ5k

Si la cantidad límite es 3 cuando paso a 4 el estado se actualiza en función de la disponibilidad y la cantidad vuelve a ser 3. El usuario sólo puede pasar a 5 si hace clic en el botón de incremento más rápido que el tiempo de consulta de disponibilidad del artículo + la actualización del estado del componente a 3. Como el clic es más rápido, la variable que contiene el valor permanece con el mismo valor. En este ejemplo, 5.



## Workaround


N/A

