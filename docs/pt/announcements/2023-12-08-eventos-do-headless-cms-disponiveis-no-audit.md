---
title: 'Eventos do Headless CMS disponíveis no Audit'
id: 2WQz4dwteRahTD71hIHNNc
status: PUBLISHED
createdAt: 2023-12-08T14:36:53.841Z
updatedAt: 2023-12-08T14:57:21.295Z
publishedAt: 2023-12-08T14:57:21.295Z
contentType: updates
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: headless-cms-events-available-in-audit
locale: pt
legacySlug: eventos-do-headless-cms-disponiveis-no-audit
announcementImageID: ''
announcementSynopsisPT: 'Adicionamos eventos do Headless CMS aos registros do Audit.'
---

O [Audit](https://help.vtex.com/pt/tutorial/audit--5RXf9WJ5YLFBcS8q8KcxTA), módulo que registra eventos que acontecem na sua loja para auditoria futura, agora processa eventos do [Headless CMS](https://help.vtex.com/pt/tutorial/gerenciando-paginas--3DO6rBhZ1p3zndnFu5BgRt) – a solução da VTEX que permite gerenciar conteúdo na web com autonomia para criar, editar e publicar conteúdo por meio do VTEX Admin.

## O que mudou?

Adicionamos os eventos do Headless CMS listados a seguir aos registros do Audit:

| Ação | Descrição | Detalhes do evento |
|---|---|---|
| TRY_PUBLISHING | Tentativa de publicar uma página. | ID do evento. |
| TRY_PUBLISH_IN_RELEASE | Tentativa de publicar um lançamento. | ID do evento. |
| TRY_UNPUBLISHING | Tentativa de despublicar uma página. | ID do evento. |
| RESTORE_CONTENT | Restauração de conteúdo. | ID do evento. |
| TRY_UPDATING_DRAFT | Tentativa de atualizar um rascunho. | ID do evento. |
| TRY_UNPUBLISHING_AND_OVERWRITING | Tentativa de despublicar e sobrescrever uma página. | ID do evento. |
| done.invoke.deleteContent | Exclusão de conteúdo. | ID do evento. |
| done.invoke.deleteContentVariant | Exclusão de uma versão do conteúdo. | ID do evento. |

Na coluna **Ação**, todos os eventos do Headless CMS também apresentam as seguintes informações:

* **CONTENT_ID:** código identificador único do conteúdo.
* **VARIANT_ID:** código identificador único da versão do conteúdo.
* **WORKSPACE:** workspace em que a alteração foi realizada.

>ℹ️ Confira a [lista completa de eventos disponíveis no Audit](https://help.vtex.com/pt/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ).

## O que precisa ser feito?

Nenhuma ação é necessária. A mudança no Audit já está ativa para todas as contas, registrando a [lista de eventos](#o-que-mudou) citada acima.
