---
title: 'Cómo se maneja el tipo de entrega'
id: tutorials_126
status: PUBLISHED
createdAt: 2017-04-27T22:18:17.250Z
updatedAt: 2023-11-13T15:00:10.346Z
publishedAt: 2023-11-13T15:00:10.346Z
firstPublishedAt: 2017-04-27T23:00:44.173Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: how-does-the-type-of-delivery-work
locale: es
legacySlug: como-se-maneja-el-tipo-de-entrega
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

El tipo de entrega es un dato en el registro de transportista que hará la agrupación de transportadores con el mismo valor. Funciona como una categoría y como una identificación que se mostrará en el carrito, en la finalización de la compra.

## Agrupar flete

El tipo de flete como agrupador se utilizará cuando más de un transportista realiza el mismo tipo de entrega. Es decir, se debe utilizar el mismo tipo cuando los transportistas tienen características parecidas.

> Ejemplo: los transportistas _Envío a Domicilio_ y _Transportista 2_ realizan la entrega del tipo **Normal**, lo transportista _EnviProg_ realiza la entrega **Programada**, mientras que _Express_ y _TranspAhora_ realizan entregas del tipo **Expresa**.

## Exhibir en el cierre de compra

En el checkout, no se exhiben los nombres de los transportistas, y sí los tipos de flete. Por eso, es esencial que los tipos sean amigables y que cada transportista que necesite ser exhibido tenga un tipo diferente, al contrario, será exhibido el transportista con menor plazo y valor dentro del tipo.

Siguiendo en el ejemplo más arriba, sigue la imagen de cómo se exhibirían las opciones de flete en el cierre de compra:

![Transportadoras Checkout ES](https://images.ctfassets.net/alneenqid6w5/3JEcAUPVTOsSsUCqiMSCUM/6085c74c27b51a0ffcfc5552d1a80eff/Transportadoras_Checkout_ES.png)

O sea, aunque se tenga cinco transportistas catastrados (en las categorías **Normal**, **Expresa** y **Programada**), sólo se exhiben tres opciones de flete para el cliente. Y el motivo no es porque los demás transportistas no atienden al carrito, es porque dentro de un mismo tipo sólo se exhibirá el transportista de mayor ventaja al cliente.

