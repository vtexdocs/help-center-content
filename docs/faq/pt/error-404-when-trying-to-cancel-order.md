---
title: 'Erro 404 ao tentar cancelar pedido. O que fazer?'
id: 7re22Xm5MswgmkgKiyiygE
status: PUBLISHED
createdAt: 2018-02-19T19:22:21.391Z
updatedAt: 2023-03-22T20:05:41.355Z
publishedAt: 2023-03-22T20:05:41.355Z
firstPublishedAt: 2018-02-19T19:36:07.899Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_24
slug: erro-404-ao-tentar-cancelar-pedido
legacySlug: erro-404-ao-tentar-cancelar-pedido
---

Ao tentar cancelar um pedido no módulo **Pedidos**, às vezes o sistema retorna erro 404. Neste artigo vamos ver:

- Como identificar o erro
- O que fazer quando esse erro acontece

## Como identificar o erro

Como explicado no artigo [Verificar detalhes de erros nos pedidos](https://help.vtex.com/pt/tutorial/como-verificar-detalhes-de-erros-nos-pedidos--frequentlyAskedQuestions_6718), acesse o pedido em que houve o problema, conforme o passo a passo abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique no pedido desejado.
3. Clique no botão `Ver interações`.

Verifique se no status `Iniciando cancelamento` a mensagem contém um erro no seguinte formato:

`A chamada ao recurso 'abc' do serviço 'xyz' retornou o status HTTP '404 (NotFound)'`

## O que fazer quando esse erro acontece

Se uma mensagem de erro como a do exemplo acima está aparecendo no detalhamento do pedido, é porque a API do serviço integrado à VTEX está retornando 404 para o pedido que você está tentando cancelar.

Ou seja, a operação não consegue ser concluída porque o serviço externo não retorna o resultado esperado. E, com isso, o status do pedido fica parado na VTEX.

Neste caso, é necessário entrar em contato com esse serviço externo. 
