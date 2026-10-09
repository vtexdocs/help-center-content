---
title: 'O pedido foi faturado no ERP mas continua no status "Preparando Entrega". O que fazer?'
excerpt: "A API do marketplace pode estar recusando a atualização da nota. Abra o pedido, clique em Tentar novamente e veja o erro retornado."
id: 4szpXviNMAkwOe2cCiMiMe
status: PUBLISHED
createdAt: 2017-12-19T13:00:23.800Z
updatedAt: 2026-10-07T00:00:00.000Z
publishedAt: 2023-03-31T21:05:01.214Z
firstPublishedAt: 2017-12-19T13:25:22.289Z
contentType: frequentlyAskedQuestion
productTeam: Orders
author: authors_24
slugEN: the-order-was-billed-in-the-erp-but-remains-in-the-preparing-delivery-status
locale: pt
legacySlug: o-pedido-foi-faturado-no-erp-mas-continua-no-status-preparando-entrega
---

Se um pedido foi faturado com sucesso no seu ERP, mas continua parado no status `Preparando Entrega` na VTEX, pode ser que o produto esteja indisponível na API do marketplace, o que impede a mudança de status do pedido.

Para verificar, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique na pedido para abrir a página de [detalhes do pedido](/pt/docs/tutorials/pagina-de-detalhes-do-pedido).
3. Na seção **Status do pedido**, clique no botão `Tentar novamente`.

Verifique se aparece alguma mensagem e se nela é descrito o erro.

O comportamento normal do sistema, nos casos em que o marketplace retorna uma informação de erro tal como `500` (erro interno do servidor), é fazer retentativas automáticas de processar o status.

Mas caso a mensagem informe que `a chamada ao recurso do serviço retornou o status HTTP '404 (not found)'`, isto significa que a rota não foi encontrada - ou seja - o produto não foi encontrado no marketplace.

Neste caso, é necessário entrar em contato com o marketplace para que ele verifique o serviço de integração.

> ℹ️ O [VTEX Copilot](/pt/docs/tutorials/vtex-copilot-no-admin-vtex), no Admin VTEX, pode investigar este pedido: envie o número do pedido e ele identifica onde o fluxo parou (pagamento, nota fiscal, manuseio ou ERP) e se a nota registrada cobre o valor total.
