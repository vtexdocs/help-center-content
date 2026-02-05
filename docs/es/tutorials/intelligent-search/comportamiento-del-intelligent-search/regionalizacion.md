---
title: 'Regionalización'
id: 72fwxdSLvjKC7ZAT58vlqf
status: PUBLISHED
createdAt: 2021-10-25T19:22:23.686Z
updatedAt: 2025-07-24T18:57:43.188Z
publishedAt: 2025-07-24T18:57:43.188Z
firstPublishedAt: 2021-10-25T20:06:30.150Z
contentType: tutorial
productTeam: VTEX IO
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: regionalization
legacySlug: regionalizacion-beta
locale: es
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

La Regionalización es una funcionalidad de [VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) que permite optimizar los resultados de búsqueda según la disponibilidad de sellers en la región del cliente. Para instalar y configurar VTEX Intelligent Search en tu tienda, lee nuestro artículo Search.

La Regionalización utiliza un comportamiento de VTEX Intelligent Search llamado [Disponibilidad](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/7LMQbWK5nElIkXo0NK8Kux), que busca los productos disponibles en el stock de los sellers que atienden una región determinada.

Las tiendas que tienen más de un seller white label registrado suelen tener un stock específico para cada región. Es el caso de los ecommerces de supermercados, por ejemplo.

Con la Regionalización activada, cuando un cliente introduce su código postal durante la navegación en la tienda (antes del checkout), solo se muestran en los resultados de búsqueda los productos disponibles para la entrega en la región correspondiente.

Para empezar a utilizar la Regionalización, sigue los pasos a continuación.

1. [Configuración de sellers](#1-configuracion-de-sellers)
    - [Seller 1](#seller-1)
    - [Seller white label](#seller-white-label)
    - [Seller de extensa cobertura](#seller-de-extensa-cobertura)
2. [Solicitud de activación de la Regionalización](#2-solicitud-de-activacion-de-la-regionalizacion)
3. [Configuración en VTEX IO](#3-configuracion-en-vtex-io)

> ⚠️ Aunque las tiendas regionalizadas solo muestran productos disponibles en una determinada región en la página de lista de productos, los filtros no tienen en cuenta la regionalización. Debido a esta limitación, es posible que los clientes de la tienda seleccionen filtros que resulten en productos que no están disponibles en su región.

## 1. Configuración de sellers 

En primer lugar, debes comprender qué escenario de [seller](/es/docs/tutorials/que-es-un-seller) se aplica a tu tienda. Mira a continuación los posibles escenarios.

### Seller 1

Por estándar, cada tienda VTEX se crea con la arquitectura para actuar como seller e [marketplace](/es/docs/tutorials/estrategias-de-marketplace-en-vtex) simultáneamente. Esto significa que tu tienda VTEX es el seller con ID igual a 1, ya que puede funcionar como seller en su propio ambiente.

Este seller se crea automáticamente en la cuenta de la tienda, representando su propio stock. Esto es válido tanto para los marketplaces que venden sus propios productos como para las tiendas que no son marketplaces, pero que combinan el checkout y el proceso de [fulfillment](/es/tutorial/que-son-pedidos-con-origen-marketplace-y-origen-fulfillment--6eVYrmUAwMOeKICU2KuG06#fulfillment) en su ecommerce.

### Seller white label

El [seller white label](/es/docs/tutorials/seller-white-label) es un seller que los clientes finales no eligen, es decir, los clientes no tienen visibilidad de su existencia en ningún momento del proceso de compra.

Cuando el consumidor añade productos al carrito y simula el costo de envío en la tienda, el sistema selecciona automáticamente el seller white label que tiene ese producto en stock y muestra las formas de entrega de los sellers que ofrecen las mejores condiciones. Para saber más sobre el algoritmo de selección de sellers white label, lee nuestro [artículo](/es/docs/tutorials/seleccion-de-sellers-white-label) sobre el tema.

Debes configurar uno o más sellers white label en tu tienda, porque Intelligent Search verifica la disponibilidad de stock de los productos en los sellers white label de cada región para definir qué productos se mostrarán al cliente.

### Seller de extensa cobertura

El seller de extensa cobertura es un tipo de seller cuyos ítems están disponibles para los clientes cuya navegación no tiene la ubicación definida. Así se evitan situaciones en las que los productos aparecen erróneamente como disponibles para clientes cuya ubicación el seller no atiende. Para ello, el seller de extensa cobertura debe tener un área de entrega significativa para la operación de tu tienda.

## 2. Solicitud de activación de la Regionalización

El segundo paso es abrir una solicitud para que el equipo de VTEX habilite la Regionalización en tu tienda. Para ello, ponte en contacto con [nuestroequipo de soporte](https://support.vtex.com/hc/es-419/requests).

## 3. Configuración en VTEX IO

Para definir los requisitos de configuración de sellers necesarios para activar la Regionalización, lee nuestra [guía Regionalization](https://developers.vtex.com/vtex-developer-docs/docs/regionalization-beta).

Tras la configuración, tu tienda estará lista para utilizar la funcionalidad de Regionalización. Cuando el cliente indique su región durante la navegación, esta se tendrá en cuenta y la búsqueda adaptará los resultados en función de esta información.
