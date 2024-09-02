---
title: 'As notificações de inventário para o indexador são armazenadas em cache'
id: 2eFmUbO1PR7ahxAGiMkqZd
status: PUBLISHED
createdAt: 2023-10-05T12:48:05.930Z
updatedAt: 2024-05-14T11:26:36.897Z
publishedAt: 2024-05-14T11:26:36.897Z
firstPublishedAt: 2023-10-05T12:48:06.727Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: as-notificacoes-de-inventario-para-o-indexador-sao-armazenadas-em-cache
locale: pt
kiStatus: Fixed
internalReference: 914545
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando uma conta de franquia ou um vendedor notifica a conta principal (ou o marketplace) sobre alterações no estoque, a conta envia o produto ao indexador para ter as informações mais atualizadas.

O sistema responsável por receber as notificações e passá-las ao indexador é o Broadcaster.

O problema é que o fluxo de trabalho Disponibilidade -> Broadcaster -> Indexador está funcionando em um ritmo muito rápido e, em alguns casos, as informações ainda são armazenadas em cache. Dessa forma, o indexador permanece com as informações antigas até uma nova indexação.

## Simulação


Não há uma maneira fácil de simular esse cenário, pois ele não acontece em todas as ocasiões.
O processo deve ser:

1. A conta da franquia atualiza um inventário;
2. A emissora envia o produto para o indexador;
3. O indexador atualiza o sku da conta principal com as informações antigas

## Workaround


N/A





