---
title: O pedido foi faturado no ERP mas continua no status "Preparando Entrega". O que fazer?
id: 4szpXviNMAkwOe2cCiMiMe
status: PUBLISHED
createdAt: 2017-12-19T13:00:23.800Z
updatedAt: 2023-03-31T21:05:01.214Z
publishedAt: 2023-03-31T21:05:01.214Z
firstPublishedAt: 2017-12-19T13:25:22.289Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_24
slug: o-pedido-foi-faturado-no-erp-mas-continua-no-status-preparando-entrega
legacySlug: o-pedido-foi-faturado-no-erp-mas-continua-no-status-preparando-entrega
---

Se um pedido foi faturado com sucesso no seu ERP, mas continua parado no status `Preparando Entrega` na VTEX, pode ser que o produto esteja indisponível na API do marketplace, o que impede a mudança de status do pedido.

Para verificar, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique na pedido para abrir a página de [detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
3. Na seção **Status do pedido**, clique no botão `Tentar novamente`.

Verifique se aparece alguma mensagem e se nela é descrito o erro.

O comportamento normal do sistema, nos casos em que o marketplace retorna uma informação de erro tal como `500` (erro interno do servidor), é fazer retentativas automáticas de processar o status.

Mas caso a mensagem informe que `a chamada ao recurso do serviço retornou o status HTTP '404 (not found)'`, isto significa que a rota não foi encontrada - ou seja - o produto não foi encontrado no marketplace.

Neste caso, é necessário entrar em contato com o marketplace para que ele verifique o serviço de integração.
