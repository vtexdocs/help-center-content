---
title: 'Configuraciones de la integración '
id: 6EYEy1jRiAj465WOnhiczD
status: CHANGED
createdAt: 2019-11-18T13:39:42.709Z
updatedAt: 2022-04-08T20:49:56.270Z
publishedAt: 2020-02-13T15:01:19.456Z
firstPublishedAt: 2019-11-19T17:28:38.037Z
contentType: trackArticle
productTeam: Channels
slug: configuraciones-de-la-integracion
locale: es
trackId: 50hbG4bzhSIhjz1lzqI1g4
trackSlugES: integracion-con-wish
---

Los siguientes pasos deben realizarse dentro de la app.

## Definiendo la política comercial

1. En el selector, escoja la política comercial que se utilizará en Wish ([predefinida en el paso 2](https://help.vtex.com/es/tracks/configurar-integracao-da-wish--50hbG4bzhSIhjz1lzqI1g43OHGQIQmt1dKw9RwKruE7H#definindo-politica-comercial))
2. Después de seleccionar la política comercial, haga clic en "Continuar".

![PT - Configurar Wish](//images.ctfassets.net/alneenqid6w5/3EGGUHCj7UViCY8Jjct3UY/1172fa1d438d6d0ecaf35a01b57959f1/PT_-_Configurar_Wish.png)

## Configuraciones de envío 

El envío de los ítems en Wish puede realizarse de la manera más amplia a la más específica. Es posible definir un valor de envío general para cualquier lugar del mundo, así como para una subregión específica de un país.

Es importante señalar que la prioridad sobre el precio será siempre sobre el envío **más específico**. Veamos el siguiente ejemplo para aclararlo:

| Envío      | Especificación | Precio   |
| ---------- | ---------- | ---------- |
| Estándar     | -          | R$ 30,00   |
| Por país   | Argentina  | R$ 25,00   |
| Por país   | Brasil     | R$ 20,00   |
| Por subregiones | Rio de Janeiro (región metropolitana)  | R$ 10,00 |
| Por subregiones | Rio de Janeiro (interior)              | R$ 15,00 |
| Por subregiones | São Paulo (región metropolitana)       | R$ 10,00 |

  - Si estamos enviando a Teresina, por ejemplo, el precio será R$ 20,00 pues se encaja en el Precio para Brasil, que es más específico que el envío estándar. 
  - Si estamos enviando a Alemania, sin embargo, el precio será R$ 30,00 pues  entra en envío estándar. 
  - Pero si estamos enviando a Rio de Janeiro (interior), entonces el precio será _R$ 15,00_.

Vamos a entender cómo configurar cada uno de estos a continuación:

### Envío estándar

Es el precio de envío más macro y se puede utilizar tanto para entregas mundiales  como para entregas locales.

_Ej.: si usted define que el precio de envío estándar es de R$ 30,00 y no tiene ningún otro precio de envío específico, entonces este será el precio practicado para envíos a cualquier lugar en el mundo. Es decir, hacer una entrega a México sería el mismo precio que hacer una entrega a Portugal, Teresina o cualquier otro lugar.._

### Envío por país

Este es el precio general de las entregas realizadas en un país específico. De esta manera, es posible diferenciar el precio de entrega entre un país y otro. [Vea aquí cómo hacer las configuraciones de envío por país en Wish](https://merchantfaq.wish.com/hc/pt/articles/205212607-Como-configuro-as-minhas-configura%C3%A7%C3%B5es-de-frete-).

_Ej.: el precio de envío para todo Brasil es de R$ 20,00 mientras que para Argentina es de R$ 25,00_.

### Envío por subregiones 

Es el precio específico para cada una de las subregiones de un país. De esta manera, es posible diferenciar el precio de entrega entre una subregión y otra dentro de un mismo país.

_Ej.: el precio de envío a Rio de Janeiro (región metropolitana) es de R$ 10,00, mientras que para Rio de Janeiro (interior) es de R$ 15,00._

<div class = "alert alert-info">
  OBS: el envío por región está disponible apenas para sellers que usan <strong>Wish Express</strong> <a href="https://merchantfaq.wish.com/hc/pt/articles/360018939394-Como-enviar-usando-o-Wish-Express-Brasil-">(sepa más aquí).</a>
 Para configurar Wish Express, basta seguir <a href="https://merchantfaq.wish.com/hc/pt/articles/232047747-Wish-Express-Fluxo-de-Inscri%C3%A7%C3%A3o">estos pasos.</a>
  </div>
  
Indique en la configuración si va a utilizar Wish Express. Si no es así, puede pasar al siguiente paso.

Cabe señalar que el precio del envío se establecerá automáticamente en función de las [tablas de flete del módulo de logística](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/2Pj1gKR80QIuUhc0orMraD). Es decir, este será dinámico y puede variar debido a algún cambio en la tabla de la transportadora o incluso según la disponibilidad de un ítem.

_Ej.: la transportadora X tiene en su tabla de fletes el precio de R$ 7,00 para São Paulo (región metropolitana). Pero la tabla es actualizada a R$ 9,55. En una próxima actualización de stock, el valor de flete para esta región se actualizará en sus productos en Wish._

## Definiendo las transportadoras disponibles 

Para indicar cuál transportadora de su tienda corresponde a las [transportadoras  aceptadas por Wish](https://merchant.wish.com/documentation/shippingproviders), será necesario  realizar un de/para en la configuración.

  1. Indique en el primer selector (_dropdown_) cuál es la transportadora en Wish.
  2. Indique en el segundo dropdown cuál es el [tipo de transportadora](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega) en VTEX que corresponderá a la transportadora seleccionada en el paso anterior.

  _Ej.: Imagine que utiliza el Servicio de Correos (PAC) como transportadora y que su Tipo de Transportadora en el panel logístico de VTEX se llama "Convencional". Entonces, usted debe escribir en el campo nombre "Convencional". Recuerde que la palabra debe ser exactamente igual a la registrada en la logística._

  3. Haga clic en el botón “Guardar” para finalizar.

<div class = "alert alert-info">
  OBS: si se mapea alguna transportadora no certificada por Wish, los pedidos no podrán ser rastreados y, consecuentemente, <strong>no habrá</strong> transferencia de comisión. Por lo tanto, es necesario ser muy cuidadoso en esta etapa.</div>

## Tasa de divergencia de precios
 
Cualquier pedido que tenga una diferencia entre el precio de venta del _marketplace_ y el precio determinado por el _seller_ por estándar no es integrado en VTEX. Por eso, tenemos un mecanismo para aceptar la divergencia automáticamente, que es definiendo una tasa aceptable para la divergencia de precio.

En este campo se debe colocar el valor (en porcentaje) de hasta cuánto el valor del pedido puede ser divergente del valor original.

_Ej.: la tasa definida es del 10%. El valor original del pedido debería ser de R$ 100,00, pero llegó de Wish como R$ 109,00. Entonces, considerando la tasa definida, el pedido será integrado. Sin embargo, si el pedido hubiera llegado con R$ 150,00, entonces hubiera sido bloqueado y mostrado en la [pestaña de pedidos (dentro de la sección integraciones en el Admin)](https://help.vtex.com/pt/tutorial/verificando-integracao-no-bridge)._

## Conversión de moneda 

**Wish exige que los precios (del flete y del producto) sean enviados en dólar (USD).** Tanto las tablas de flete como el  módulo de precios en VTEX deducen la moneda a partir de la política comercial utilizada. 

Como se indica en el [paso 2.1](https://help.vtex.com/es/tracks/integracao-com-a-wish--50hbG4bzhSIhjz1lzqI1g4/3OHGQIQmt1dKw9RwKruE7H#definiendo-politica-comercial), estamos utilizando la política comercial en reales (R$) y, por eso, debe seguirse estos pasos para realizar la conversión.

En el campo `"Cotización dólar (USD)"`, complete el cambio de reales (R$) a dólar (US$).

_Ej.: si US$ 1,00 = R$ 4,00 , entonces complete con 4,00._
