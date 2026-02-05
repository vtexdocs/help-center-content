---
title: 'Novos eventos de gift card disponíveis no módulo Audit'
id: 5jHm2DriEUU70ZOUT28bIj
status: PUBLISHED
createdAt: 2025-08-25T17:59:16.648Z
updatedAt: 2025-08-25T18:39:13.093Z
publishedAt: 2025-08-25T18:39:13.093Z
contentType: updates
productTeam: Master Data
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2025-08-25-new-gift-card-events-available-in-the-audit-module
locale: pt
legacySlug: novos-eventos-de-gift-card-disponiveis-no-modulo-audit
announcementImageID: 'undefined'
announcementSynopsisPT: 'Adicionamos eventos de gift card aos registros do Audit.'
---

O [Audit](/pt/docs/tutorials/audit) é um módulo que registra eventos que acontecem na sua loja VTEX, possibilitando uma auditoria futura. A VTEX realizou uma melhoria no Audit, adicionando três novos eventos relacionados a operações com gift cards (vale-presentes).

## O que mudou?

Adicionamos os seguintes eventos de gift card nas aplicações de **Catálogo (API)** e **Vale-presente**:

### Catálogo (API)
| Ação | Descrição | Detalhes do evento |
|---|---|---|
| GiftCard Create | Criação de um [gift card nativo](/pt/docs/tutorials/gift-card) (GiftCard System). | ID do vale-presente criado e do usuário que realizou a ação. |
| GiftCard List All Paged | Fluxo interno para exibição de vales-presente disponíveis. | ID dos vale-presentes retornados pela API e do usuário que realizou a busca. |

### Vale-presente
| Ação | Descrição | Detalhes do evento |
|---|---|---|
| LIST_CARDS_FROM_API | Visualização da [lista](https://developers.vtex.com/docs/api-reference/giftcard-api#post-/giftcards/_search) de vales-presentes nativos (GiftCard System). | ID dos vale-presentes disponíveis para um carrinho de compras. |

## O que precisa ser feito?

Nenhuma ação é necessária. A mudança no [Audit](/pt/docs/tutorials/audit) já está ativa para todas as contas.

Saiba mais em [Eventos disponíveis no Audit](/pt/docs/tutorials/eventos-disponiveis-no-audit).
