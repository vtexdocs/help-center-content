---
title: 'Cómo funciona el aviso de compra sospechosa en el VTEX DO'
id: tutorials_7102
status: ARCHIVED
createdAt: 2017-04-27T21:48:17.808Z
updatedAt: 2020-01-08T20:23:04.348Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:20.650Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: entendiendo-el-aviso-de-compra-sospechosa-en-el-vtex-do
locale: es
legacySlug: entendiendo-el-aviso-de-compra-sospechosa-en-el-vtex-do
subcategoryId: unknown-subcategory
---

VTEX está siempre preocupada por asegurar la seguridad de todas las operaciones de su tienda. Por esta razón, desarrollamos una integración entre el SherlockBOT y el VTEX DO que le avisa siempre que se identifique un comportamiento sospechoso en el cierre de compras.

### Qué es el SherlockBOT

El SherlockBOT es un robot que hace un barrido de todas las tiendas VTEX en busca de estándares de cierre sospechosos de compras. Él trabaja con base en un conjunto de reglas predefinidas.

### Cómo se le informa al comerciante

Cuando el SherlockBOT identifica un pedido cerrado de manera que puede indicar actividad maliciosa, el comerciante es avisado por el [VTEX DO](/es/tutorial/vtex-do) ㅡ el administrador de tareas de VTEX ㅡ, que envía una alerta al admin de la tienda a través del módulo de Pagos.

Vea un ejemplo de esa alerta en el screenshot a continuación:

![sherlock (1)](https://images.contentful.com/alneenqid6w5/6CsvYu9nfG0E4QowAEu86/c69b772065781ddc98bc85eeee37ef01/sherlock-1.png)

El comerciante puede aún ser incluido en las barreras de seguridad del Gateway, o sea, VTEX puede aplicar a su tienda unas reglas de protección contra pruebas de tarjeta de crédito. 

Cuando se identifica un comportamiento sospechoso, esas reglas son activadas. Con ello, el pedido no deja de ser procesado, pero hacemos un procesamiento posterior que inviabiliza la prueba de tarjeta de crédito.

Para aplicar esas reglas a su tienda, basta digitar `Yes` en el campo de comentario de la alerta enviada por el VTEX DO.

**Importante:** Pedidos realizados por los operadores Televentas no son alertados por el SherlockBOT. Esto significa que ellos no son considerados comportamiento sospechoso, por lo que no se exhibirán en el VTEX DO.

_Es importante destacar que el SherlockBOT **no** sustituye y no tiene la intención de sustituir su antifraude. Él solamente bloquea transacciones claramente sospechosas, con el fin de proteger la tienda y reduciendo el costo de análisis innecesarios. El antifraude sigue siendo fundamental para la seguridad de su tienda y la protección contra *chargebacks*._
