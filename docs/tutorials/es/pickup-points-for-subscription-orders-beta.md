---
title: 'Puntos de recogida para pedidos de suscripción (Beta)'
id: csIqB6iBh4QNIFdEj0nVv
status: PUBLISHED
createdAt: 2021-05-17T12:45:21.450Z
updatedAt: 2023-03-24T20:40:01.408Z
publishedAt: 2023-03-24T20:40:01.408Z
firstPublishedAt: 2021-05-17T20:55:05.477Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: puntos-de-recogida-para-pedidos-de-suscripcion-beta
locale: es
legacySlug: puntos-de-recogida-para-pedidos-de-suscripcion-beta
subcategory: 3RmFd9bgAeRAVGeBd7XDUr
---

<div class="alert alert-info">
  <p>Esta funcionalidad se encuentra en fase Beta, lo que significa que estamos trabajando para mejorarla. En caso de que tenga alguna duda, contacte a <a href="https://support.vtex.com/hc/pt-br/requests">nuestro Soporte</a>.</p>
</div>

Un punto de recogida es un lugar físico donde el cliente tiene la opción de recoger su pedido, en vez de recibirlo en casa. Un ejemplo de escenario para esta funcionalidad es la recogida en la tienda.

Además de los pedidos habituales, puede habilitar puntos de recogida para los pedidos de suscripción, si utiliza el [módulo Suscripciones](https://help.vtex.com/es/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj).

A continuación, vea lo que se requiere para habilitar esta funcionalidad.

- [Requisitos](#requisitos)
- [Eligir puntos de recogida](#eligir-puntos-de-recogida)

<div class="alert alert-info">
  <p>La funcionalidad de puntos de recogida solo está disponible para las cuentas que ya tienen acceso a <b>Checkout V6</b>.</p>
</div>

## Requisitos

Para habilitar los puntos de recogida para los pedidos de suscripción, se deben cumplir la lista de requisitos logísticos que se indica a continuación.

*   Debe tener el [módulo Suscripciones](https://help.vtex.com/es/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj) instalado y la opción «Puntos de recogida» habilitada. Para eso, contacte a [nuestro Soporte](https://support.vtex.com/hc/pt-br/requests).
*   Necesita configurar los puntos de recogida en su tienda. Solo se pueden utilizar puntos de recogida de la tienda principal o de franquicias (Sellers White Label) para los pedidos de suscripción. Para saber cómo efectuar la configuración, lea el artículo [Configurar Puntos de recogida (Pickup Points)](https://help.vtex.com/es/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E).
*   Las transportadoras asociadas a los puntos de recogida para pedidos de suscripción **no** pueden tener [ventanas de entrega](https://help.vtex.com/es/tutorial/horario-de-funcionamento-de-transportadoras-e-entrega-agendada-beta--5QjTT3ICL2HdEcVIguJiMI) configuradas.
*   Los ítems deben contar con _stock_ en la fecha del ciclo de suscripción, es decir, cuando se crean los pedidos recurrentes.

## Elegir puntos de recogida

El cliente final puede elegir los puntos de recogida para ítems de un pedido de suscripción cuando realiza el _checkout_, como se muestra en la siguiente imagen.

![subscriptionspickup ES](https://images.ctfassets.net/alneenqid6w5/6qqc7DV4Wk6yRWvsdiWNCP/0be6afd36b5bb8966096600810768bbe/subscriptionspickup_ES.gif)

También puede asignar puntos de recogida al [crear nuevas suscripciones](https://developers.vtex.com/vtex-rest-api/reference/subscriptions-1#post_api-rns-pub-subscriptions) a través de la [API de Subscriptions](https://developers.vtex.com/vtex-rest-api/reference/subscriptions-1). En el caso de las suscripciones existentes, puede modificar la dirección de entrega a través de la [ruta de actualización de suscripciones de la API de Subscriptions](https://developers.vtex.com/vtex-rest-api/reference/subscriptions-1#patch_api-rns-pub-subscriptions-id) para empezar a utilizar un punto de recogida.

Para descubrir los puntos de recogida disponibles cerca de un código postal o de determinadas coordenadas geográficas, puede utilizar la [API de Checkout](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview).

## Artículos relacionados

*   [Cómo configurar Suscripciones en su tienda](https://help.vtex.com/es/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj)
*   [Configurar Puntos de recogida (Pickup Points)](https://help.vtex.com/es/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E)
*   [Configurar Seller White Label como punto de recogida (Pickup Point)](https://help.vtex.com/es/tutorial/setting-up-seller-white-label-as-a-pickup-point--6fSUE2O0taaoKieAaiuc4e)
