---
title: Manejar la entrega programada
id: tutorials_111
status: DRAFT
createdAt: 2017-04-27T22:19:16.609Z
updatedAt: 2021-05-24T17:38:53.796Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:42.972Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-se-maneja-la-entrega-programada
legacySlug: como-se-maneja-la-entrega-programada
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

<div class="alert alert-info">
Atención: Esa documentación está en proceso de actualizarse para reflejar los cambios del término Paneles a <a href="https://help.vtex.com/es/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl">estratégia de envío</a>.
</div>  

La entrega programada es un tipo de entrega que permite definir períodos de entrega personalizados, pudiendo definir plazos y precios específicos, y también permitir que el cliente elija el período que desea recibir su pedido. 

Por ejemplo: Una tienda de materiales de oficina trabaja con turnos de entrega, y trabaja en los finales de semana con precios diferenciados, y le gustaría dar la posibilidad del cliente de elegir qué día recibirá y en cuál turno. Con la entrega programada, se puede cumplir con esta demanda, vea como:

## Cómo configurar la entrega programada

En **Inventario y envío**, acceda **Paneles** y haga clic en la **Transportadora** deseada para entrega agendada.

En **Tipo de Entrega**, haga clic en **Entrega agendada**.

![entrega-agendada es](//images.ctfassets.net/alneenqid6w5/PF5fC5oPoiAmsK0KAW2G2/aee508bb7392ef5c0dfd62d3a607f25d/entrega-agendada_es.png)
Para compreender mejor sobre la cumplimentación del resto de los campos, vea también nuestro documento de cómo [registrar una transportadora](http://help.vtex.com/es/tutorial/gestionar-transportista).


En esta estructura, tenemos los siguientes datos:

- **Tiempo máximo de entrega** - Esta casillas queda a cargo del montaje de la ventana de entrega, y se lo suma siempre al plazo normal (Stock + Muelle + Valor de Flete).
- **Valor por defecto para la entrega** - Esta casilla define un valor estándar para la entrega.
- **Horário de entrega** - Este es el responsable por definir cuáles días se elegirán para la entrega, cuántos períodos y cuál valor será cobrado “a más” en estos días, y para añadir más períodos, basta hacer clic en el botón **Incluir horario**.

## Ejemplo

Utilizando igual ejemplo de la tienda más arriba, sigue la configuración de la transportadora según su demanda:


![entrega-agendada-exemplo es](//images.ctfassets.net/alneenqid6w5/1kwunX9pCYUUQUSQ8QO42u/bab6a450319e8ddcd081db0aebb9b9fe/entrega-agendada-exemplo_es.png)


Suponiendo que el Inventario tiene 2 días de plazo, el Muelle 1 día y la Tabla de Flete 5 días, el primer día que se pondrá a disposición será 8 días después de la fecha en que se está realizando el pedido y cómo el Tiempo máximo de entrega es de 10 días, el último día disponible para la elección será el 18º día después de la fecha en que se está efectuando el pedido.

Si hoy es día 3 de mayo y yo elijo este tipo de entrega, la ventana que se presentará será del día 11 de Mayo al día 21 de Mayo. Siendo que, caso yo elija para entregar en el Sábado o en el Domingo aún será añadido a mi flete más R$ 5,00.
