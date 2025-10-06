---
title: '¿Por qué mi transportista no aparece en el checkout?'
id: frequentlyAskedQuestions_165
status: PUBLISHED
createdAt: 2017-04-27T22:39:09.470Z
updatedAt: 2023-08-25T15:13:42.026Z
publishedAt: 2023-08-25T15:13:42.026Z
firstPublishedAt: 2017-04-27T23:01:43.444Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-cant-i-see-my-carrier-on-checkout
locale: es
legacySlug: por-que-mi-transportista-no-aparece-en-el-checkout
---

Para finalizar un pedido en la plataforma VTEX, es necesario seleccionar una forma de entrega en la etapa de checkout.   

Eventualmente, puede ser que no se muestre una transportadora en el checkout. Separamos seis escenarios en los que se puede dar esta situación y sus respectivas soluciones.

Vale resaltar que antes de proseguir la lectura de este artículo, es necesario garantizar que todas las [transportadoras están registradas](/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) correctamente en la plataforma. Además, todas las soluciones se hacen en el módulo [Envío](/es/tutorial/--tutorials_143).

## Competencia entre transportadoras del mismo tipo

Al momento de registrar una transportadora, es necesario incluir el [tipo de entrega](/es/tutorial/como-funciona-o-tipo-de-entrega/) de esta transportadora. En el checkout, se exhiben los _tipos de entrega_ y no el nombre de las transportadoras.

El checkout exhibe siempre la transportadora más rápida/barata entre las opciones de un mismo tipo de entrega. Así, una transportadora no aparece en el checkout cuando otra del mismo tipo tiene menor plazo/costo registrado.  

> ⚠️ Cuando hay empate entre dos transportadoras, el criterio de desempate es tener el menor costo de envío.

### Solución

Si desea que se muestren todas las transportadoras, estas deben ser registradas en el módulo de Inventario y envío como transportadoras con tipos de entrega diferentes.

## Transportadora no atiende a la dirección informada

Al registrar una nueva transportadora, la [planilla de flete](/es/tutorial/importar-planilha-de-frete) debe rellenarse con
los rangos de códigos postales o  polígono para geolocalización que esta puede atender. Los campos de esta planilla relativos a la localización son `country`, `zipCodeStart` y `zipCodeEnd` y `PolygonName`.

Si el usuario desea que un pedido sea entregado en una región no registrada en la planilla, la transportadora no aparecerá como opción en el checkout.

### Solución

Verifique en la [planilla de flete](/es/tutorial/importar-planilha-de-frete) si los rangos de códigos postales o los polígonos de geolocalización configurados atienden a la dirección del pedido.

## Volumen del pedido excede el máximo permitido

Si el volumen del carrito excede el _volumen máximo_ registrado en la planilla de flete, el pedido es automáticamente ignorado por la transportadora.

### Solución

En este caso, lo ideal es validar en la configuración de la transportadora en **Configuración de la tienda > Envío > Configuración** si el volumen máximo configurado es el mismo del límite de la transportadora.

## Peso del pedido excede el máximo permitido 

Si el peso de los ítems del pedido excede el _peso máximo_ registrado en la planilla de flete, el pedido es automáticamente ignorado por la transportadora.

### Solución

El raciocinio es el mismo en relación al ítem anterior: valide en las configuraciones de  la transportadora, en **Configuración de la tienda > Envío > Configuración**, si el peso máximo registrado es el mismo del límite de la transportadora.

Esta vez, será necesario alterar los valores en los campos `weightStart` y `weightEnd`, en la planilla de flete. A continuación, vuelva a importar el documento a la plataforma.

## División de paquetes no permitida

Es posible habilitar la división de un pedido en dos paquetes. Por ejemplo, si un pedido tiene 40 kg, pero el peso máximo registrado en la planilla de flete es 30 kg, es posible autorizar dos entregas en las que cada una transporte 20kg. Si la división de carga no estuviera habilitada en su tienda y el peso del pedido ultrapasa el límite de la transportadora, esta no aparecerá en el checkout.

### Solución

[Habilite la división de carga](/es/tutorial/como-funciona-a-divisao-de-carga--tutorials_109) cuando la entrega ultrapase el límite de la transportadora en **Configuración de la tienda > Envío > Configuración**.

## Optimización de opciones de entrega en Checkout

Para mejorar la experiencia de compra del cliente, la funcionalidad **Optimización de las opciones de entrega**, también conocida como **Lean Shipping**, permite que las opciones de envío más caras y más lentas no se muestren al cliente en la pantalla de Checkout. Como resultado, algunos transportistas pueden omitirse en ciertos escenarios de pedidos.

### Solución

Desactive la función [Optimización de opciones de entrega en Checkout](/es/tutorial/optimizacion-de-opciones-de-entrega-en-checkout--6DeGO9eBSFWe4XkoS0SxAB) en su tienda.

> ⚠️ Al deshabilitar esta función en Admin VTEX, todas las opciones de entrega disponibles se mostrarán en el proceso de Checkout. Sin embargo, si la funcionalidad de [Entregas Múltiples](/es/tutorial/division-de-pedidos-y-division-de-entregas--jQvzA6QgSd51e2p6bthoV#) está habilitada en la tienda y hay diferentes opciones de entrega entre los artículos seleccionados en el carrito, las **Opciones de entrega optimizadas** seguirán mostrándose. Es decir, se necesitará optimizar la entrega para manejar múltiples paquetes (artículos con diferentes opciones de entrega).
