---
title: 'Indexador: melhorias de desempenho para o Catálogo'
id: 2Nfc5iqFqd7YOgevFmgkXP
status: PUBLISHED
createdAt: 2020-08-04T19:45:49.927Z
updatedAt: 2020-08-06T00:28:05.467Z
publishedAt: 2020-08-06T00:28:05.467Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2020-08-04-catalog-indexer-performance-improvements
locale: pt
legacySlug: indexador-melhorias-de-desempenho-para-o-catalogo
announcementImageID: 'undefined'
announcementSynopsisPT: 'Para melhorar a experiência do Catálogo, aprimoramos o desempenho do Indexador.'
---

Novas melhorias no desempenho do Indexador do Catálogo.

Para melhorar a experiência do Catálogo, aprimoramos o desempenho do Indexador. Assim, ele evita atrasos na replicação de itens durante a indexação. 

Criamos também um fluxo de repescagem à fila principal. Caso a indexação de um item falhe, ele será encaminhado para a fila de repescagem. Dessa forma, ele não impacta o fluxo da fila principal. Um item pode voltar no máximo cinco vezes para a fila de repescagem.

Além disso, por causa da recente crise do sistema de indexação do catálogo, desenvolvemos novas maneiras de monitoramento que ajudam a prever crises.

## O que muda?
Com essas melhorias, a experiência de criação e alteração de produtos no catálogo será mais fluida e mais rápida do que anteriormente.

O processo de indexação está mais eficiente e confiável. É possível monitorá-lo por meio de um painel de controle. Também implementamos alarmes para erros na API do Catálogo, no Admin e em atrasos na replicação de itens na indexação.

