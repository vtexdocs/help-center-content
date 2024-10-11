---
title: 'Filtrar transações na seção de Pedidos'
id: 6LUq65FqUgIKkKEeWa4IwC
status: PUBLISHED
createdAt: 2019-01-24T21:38:42.313Z
updatedAt: 2023-10-18T16:58:56.709Z
publishedAt: 2023-10-18T16:58:56.709Z
firstPublishedAt: 2019-01-24T21:38:42.695Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: filtering-transactions-on-pci-gateway
locale: pt
legacySlug: filtrar-transacoes-no-pci-gateway
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Na seção de Pedidos, é possível utilizar __filtros__ para visualizar suas transações. Com essa funcionalidade, você consegue obter informações mais detalhadas sobre os pagamentos que estão sendo realizados em sua loja.

## Acessar a tela de filtros

Para fazer um filtro das suas transações siga os passos abaixo:

1. Acesse a seção __Pedidos__ no VTEX Admin e clique em __Transações__
2. No lado esquerdo da barra de busca, clique no __ícone de funil__.
3. Você verá as opções de filtro disponíveis. Abaixo, vamos dar mais detalhes sobre cada um destes filtros.

Para cada opção será mostrado entre parênteses o número de transações realizadas de acordo com o filtro.

## Filtro por Canal

Este filtro mostra por quais canais uma transação foi realizada. Ele está dividido em três partes: __Conector__, __Antifraude__ e __Política Comercial__.

### Conector

Este filtro irá listar todas as transações realizadas de acordo com o conector de pagamento. Os conectores listados serão os que você tiver cadastrado em sua loja. 

Alguns exemplos de conectores:

- Cielo
- Mercado Pago
- PagSeguro

### Antifraude

Este filtro lista todas as transações realizadas de acordo com os antifraudes cadastrados na sua loja.

Alguns exemplos de antifraudes:

- Clear Sale
- FControl
- Konduto

### Política Comercial

Este filtro indica por qual política comercial as transações foram realizadas. As políticas listadas serão as políticas comerciais cadastradas em sua loja.

## Filtro por Data

Este filtro lista as transações de acordo com a faixa de data desejada. As faixas de data disponíveis para este filtro são: __Hoje__, __Ontem__, __Uma semana__, __Há uma semana__, __Há duas semanas__, __Um mês__ ou __Último mês__. 

As datas também variam de acordo com os eventos da transação. As datas podem ser: __Data de início__, __Data de autorização__, __Data de Finalização__ e __Data de Cancelamento__. Segue abaixo o detalhamento de cada um destes filtros.

### Data de início

Este filtro considera o momento em que a transação foi iniciada. É a primeira interação da transação na sua loja.

### Data de autorização

Após o início da transação, ocorre o processo de autorização. Este filtro considera a data quando a VTEX recebeu a informação de que a transação foi autorizada. Vale ressaltar que este status é anterior à análise do antifraude. Depois da análise do antifraude, a transação fica com o status de *Aprovada*.

### Data de finalização

O estágio de transação finalizada ocorre depois da inclusão da nota fiscal no pedido. Este estágio ocorre *após* a liquidação da transação.

### Data de cancelamento

Este filtro considera o momento em que a transação chegou ao status de cancelada.

## Filtro por Pagamento

Este filtro mostra dados de pagamento das transações que foram realizadas. Os filtros disponíveis são: __Meio de Pagamento__ e __Número de parcelas__.

### Meio de pagamento

Este filtro mostra os meios de pagamento das transações que foram realizadas em sua loja.

Alguns exemplos de meios de pagamento:

- Visa
- Boleto bancário
- Promissória
- Mercado Pago
- Pay Pal

### Número de parcelas

Este filtro indica o número de parcelas dos pagamentos realizados em sua loja. Para as compras feitas __à vista__, o filtro será mostrado como __1__.

## Status

Este filtro lista todas as transações de acordo com o seu status. Para saber mais detalhes sobre fluxo da transação, você pode acessar [nosso artigo](/pt/faq/fluxo-da-transacao-no-pci-gateway) sobre o tema.

Alguns exemplos de status da transação:

- Finalizada
- Cancelada
- Autorizando
- Aprovada
- Iniciada
- Cancelando
