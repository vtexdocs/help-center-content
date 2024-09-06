---
title: 'Campos de registro de Inventario'
id: 3AvR9vXYIbiohz8yvtsn6a
status: ARCHIVED
createdAt: 2019-08-28T22:25:01.500Z
updatedAt: 2020-07-03T21:43:28.640Z
publishedAt: 
firstPublishedAt: 2019-09-09T19:48:16.996Z
contentType: tutorial
productTeam: Post-purchase
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: campos-de-registro-de-inventario
locale: es
legacySlug: campos-de-registro-de-inventario
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Para entender mejor el significado de los campos de registro de **Inventario**, vea  a continuación la descripción completa de cada uno de estos.

- _ID:_ campo identificador del inventario, compuesto apenas por letras, números, guion y guion bajo. Este es un campo opcional. Si no se rellena, se creará automáticamente un valor para este campo.
- _Nombre:_ nombre del inventario a crearse.
- _Entregando a partir de_: vincule su nuevo inventario a los muelles que lo consumirán. Puede seleccionar más de un muelle. Y puede configurar  _costo_ y _tiempo_ de_costo_ para cada uno de estos.
- _Costo_: valor que se utilizará para elegir el muelle más ventajoso para una entrega determinada. Mientras menor sea más prioridad tendrá ese muelle en  entregas partiendo del inventario que está registrando. Este valor no se utiliza en el cálculo del valor del flete.
- _Tiempo de Costo_: tiempo a considerarse en el cálculo del plazo de entrega. Si no hay tiempo de costo, rellene este campo con el valor `0`.
- _Puntos de Recogida_: campo que hace parte de las _Configuraciones de VTEX inStore_. Antes de seleccionar esta opción, ya debe tener un _Punto de Recogida_ registrado en su tienda. Puede registrarlo haciendo clic en la sección _Puntos de Recogida_ dentro de _Inventario y Envío_ en el Admin. Si no utiliza el VTEX inStore, deje este campo en blanco.
>Para saber más sobre Registro de Puntos de Recogida, consulte el artículo  [Configurar Puntos de Recogida](https://help.vtex.com/tutorial/configurar-puntos-de-recogida--2R5ClQiwe4KoSQgsuiOw4E "Configurar Puntos de Recogida").
