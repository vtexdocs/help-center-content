---
title: 'Não reconheço o ID de reserva de um pedido. O que pode ter acontecido?'
id: tja793G4XAWI2K8uIC4uW
status: PUBLISHED
createdAt: 2018-03-05T21:07:36.301Z
updatedAt: 2024-02-05T18:01:17.750Z
publishedAt: 2024-02-05T18:01:17.750Z
firstPublishedAt: 2018-03-05T22:28:55.349Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: i-dont-recognize-the-reservation-id-of-an-order
locale: pt
legacySlug: nao-reconheco-o-id-de-reserva-de-um-pedido-o-que-pode-ter-acontecido
---

Isso pode estar acontecendo porque o pedido que você está visualizando ainda não entrou na ferramenta de Integrações, a ferramenta que monitora e grava logs das interações com dos marketplaces. Logo, o número de ID que você vê pelo Admin da sua loja ainda são os utilizados pelo marketplace, e não aqueles representados no padrão da VTEX e reconhecidos por você no seu pedido.

Neste caso, você pode entrar em contato com seu marketplace ou esperar mais um pouco para verificar se as informações do pedido são atualizadas. Pois para não ter entrado na ferramenta de Integrações, o pedido pode ter sido cancelado ou até mesmo não ter sido criado.

Se preferir, você pode verificar as informações referentes à reserva do seu pedido via Logistics API, usando o endpoint [List reservation by ID](https://developers.vtex.com/docs/api-reference/logistics-api?endpoint=get-/api/logistics/pvt/inventory/reservations/-reservationId-).
