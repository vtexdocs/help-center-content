---
title: "Nuevo atributo obligatorio para los productos enviados a Mercado Libre"
id: 5nr8nGhCLFNtIP5tFkNEpJ
status: PUBLISHED
createdAt: 2022-02-25T18:35:17.032Z
updatedAt: 2022-03-03T20:38:16.318Z
publishedAt: 2022-03-03T20:38:16.318Z
contentType: updates
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: nuevo-atributo-obligatorio-para-los-productos-enviados-a-mercado-libre
legacySlug: nuevo-atributo-obligatorio-para-los-productos-enviados-a-mercado-libre
announcementImageID: ""
announcementSynopsisES: Los productos de la categoría Celulares y Smartphones en MeLi tendrán un nuevo atributo obligatorio
---

<div class = "alert alert-info">
Atributo necesario únicamente para los clientes integrados en Brasil.
</div>

Cuando una tienda VTEX integrada con Mercado Libre quiere [enviar sus productos](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA) al catálogo del marketplace, debe mapear las categorías y atributos de estos productos.

Debido a una [determinación de Anatel](https://www.gov.br/anatel/pt-br/assuntos/noticias/anatel-alerta-marketplaces-sobre-venda-de-produtos-nao-homologados), la Agencia Nacional de Telecomunicaciones de Brasil, los productos de la categoría Celulares y Smartphones en Mercado Libre tendrán un nuevo atributo obligatorio llamado `ANATEL_HOMOLOGATION_NUMBER` para ser comercializados en los marketplaces.

## ¿Qué cambió?

A partir de ahora, los productos de la categoría Celulares y Smartphones deben tener el atributo obligatorio `ANATEL_HOMOLOGATION_NUMBER` registrado y mapeado para poder ser enviados a la plataforma de Mercado Libre. 

Este atributo corresponde al código de homologación del dispositivo electrónico en Anatel, que garantiza al consumidor que el producto comercializado respeta los estándares de calidad, seguridad y funcionalidades técnicas reglamentadas.

## ¿Por qué realizamos este cambio?

Este cambio se realizó porque la [nueva determinación de Anatel](https://www.gov.br/anatel/pt-br/assuntos/noticias/marketplaces-adotam-medidas-para-coibir-venda-de-produtos-nao-homologados) solicita a los marketplaces los códigos de homologación de los productos electrónicos de la categoría Celulares y Smartphones.

## ¿Qué se necesita hacer?

En primer lugar, sigue los pasos del artículo [Registrar especificaciones de producto](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) para crear, en la plataforma VTEX, la especificación de producto `ANATEL_HOMOLOGATION_NUMBER` para los productos de la categoría Celulares y Smartphones.

Después de registrar el nuevo atributo, mapea la categoría y el atributo para enviar el producto a Mercado Libre. Para más información sobre este procedimiento, lee la guía [Enviar productos a Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA).
