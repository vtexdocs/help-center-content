---
title: 'Credit Control - Visión General'
id: 6v9AaldPvUmUCcyEgwKwSC
status: DRAFT
createdAt: 2017-12-06T20:30:52.367Z
updatedAt: 2020-08-10T12:46:12.258Z
publishedAt: 
firstPublishedAt: 2017-12-06T20:33:54.235Z
contentType: tutorial
productTeam: Financial
author: 6xBnaVsQ7K60kemi2U2Q6w
slug: credit-control-vision-general
locale: es
legacySlug: credit-control-vision-general
subcategory: 7EWKfPIGfmI0G8iMYK8Aiy
---

<div class="alert alert-warning">
<strong>ATENCIÓN:</strong> el Credit Control se interrumpió en <strong>diciembre de 2018</strong>. Ahora, para su tienda ofrecer crédito como medio de pago directo en el checkout, es necesario <a href="https://help.vtex.com/es/tutorial/customer-credit-vision-general">utilizar el Customer Credit</a>.</br>
Para saber cómo configurarlo en su tienda, siga los pasos descritos  <a href="http://help.vtex.com/es/tracks/customer-credit-como-empezar">aquí</a>.
</div>


## Qué es

Credit Control es el módulo de VTEX que permite al comerciante habilitar el pago en el Smartcheckout™ con crédito de la tienda, además de controlar títulos de cobro y límites de crédito de las cuentas de sus clientes.

## ¿Por qué se creó

La demanda por control de crédito ha crecido en el e-commerce, y - para atenderla - varios clientes VTEX venían integrando sus tiendas a sistemas externos.

Aunque esta es una elección válida, reduce la eficiencia de su operación, ya que es necesario administrar un servicio más.

Por eso creamos el Credit Control - para que el control de crédito sea hecho dentro del sistema de VTEX, sin necesidad de usar herramientas externas.

## Como funciona

![Credit Control basic flow](//images.contentful.com/alneenqid6w5/35jUk6EVksKUQi8EaU6caO/2f8f3ddb5ead2d2c9379fc340fb070f9/credit-control-flow_en.gif)
*Flujo básico de cómo funciona el Credit Control en las tiendas VTEX.*

1. La tienda enciende el conector de control de crédito y realiza las configuraciones iniciales.

2. La tienda establece el límite de crédito para la cuenta del usuario.

3. El usuario elige el pedido usando el crédito de la tienda en SmartCheckout.

4. El pedido carga su valor en el límite de crédito del usuario y genera una factura.

5. Posteriormente, el usuario paga la factura generada.

6. El pago de factura restablece el límite de crédito en la cuenta del usuario.

Por haber sido desarrollado en VTEX, Credit Control está plenamente integrado al sistema ya existente del SmartCheckout a través de su conector - lo que significa que la experiencia de compra de sus clientes sigue siendo la misma. El admin del Credit Control se puede acceder por el menú principal del panel administrativo de VTEX.

Usted puede elegir los usuarios que recibirán crédito, establecer el límite de crédito para cada uno de ellos y administrar individualmente cada título.

Este modelo se adapta a diferentes reglas de negocio. Su tienda puede, por ejemplo, conceder crédito al cliente final o a un grupo de revendedores de sus productos.

El Credit Control puede ser utilizado por la interfaz web del Admin y también por API. Para esta última, consulte la documentación técnica en [VTEX Developer Docs](/es/developer-docs).

## Conceptos

### Cuenta corriente

Un cliente que haga una compra con crédito debe tener una cuenta en Credit Control. Esta cuenta está compuesta por el __límite de crédito__, una __descripción__, un valor de __tolerancia__ y algunos identificadores.

Es posible administrar cuentas importando, exportando y editando masivamente usando las features de Importación y Exportación en formato .csv.

### Límite de crédito

Para cada cliente o representante al que su tienda concede crédito, usted debe establecer un límite de crédito. Este límite indica el valor máximo de crédito que puede obtener esa persona.

Si intenta realizar una compra utilizando un valor superior al límite, el usuario verá un mensaje de error en el Checkout y la compra no se realizará.

Usted puede configurar un valor de __tolerancia__, que es un porcentaje que el cliente está permitido pasar de su límite de crédito sin bloquear la compra.

### Título

El título es el instrumento emitido por su tienda y destinado a sus clientes o representantes que utilizan el crédito. Se compone de __valor__, __data de vencimiento, __link de pago__ y algunos identificadores.

Al igual que las cuentas, usted puede importar, exportar y editar en masa los datos de títulos utilizando las features de importación y exportación de archivos en formato .csv.

## Interesado(a)?

A pesar de que el Credit Control ya es utilizado por algunos clientes de VTEX, sigue siendo Beta. Hemos planeado muchas nuevas características, pero siempre estamos abiertos a escuchar acerca de las necesidades de su negocio para satisfacer mejor.

Si desea dar crédito a los clientes de su tienda o tiene clientes que deseen utilizar el módulo, por favor, póngase en contacto con el [Soporte VTEX](https://support.vtex.com/hc/es-419/requests). Le ayudaremos a identificar si este módulo ya atiende a sus necesidades, o si podemos mejorarlo para atenderlo.

Estamos trabajando para que en un futuro próximo la herramienta alcance un nivel de madurez que nos permita proporcionar tutoriales que les den total autonomía en el uso del módulo, dispensando la necesidad del soporte.
