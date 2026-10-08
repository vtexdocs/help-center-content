---
title: 'Buscar transações no Pagamentos'
id: tutorials_459
status: PUBLISHED
createdAt: 2017-04-27T22:03:50.721Z
updatedAt: 2023-03-30T15:27:27.126Z
publishedAt: 2023-03-30T15:27:27.126Z
firstPublishedAt: 2017-04-27T23:03:27.019Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: searching-for-transactions-on-payments
legacySlug: transacoes-como-buscar
locale: pt
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
seeAlso:
  - /pt/docs/tutorials/transacoes-pci-gateway
  - /pt/docs/tutorials/como-visualizar-detalhes-do-pedido
  - /pt/docs/tutorials/filtrar-transacoes-no-pci-gateway
---

Você pode buscar transações em **Pedidos > Transações** usando dados do cliente ou identificadores de pagamento.

Para buscar uma transação, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Transações**, ou digite **Transações** na barra de busca no topo da página.
2. Na barra de busca, insira um dos valores listados abaixo.

Para voltar à listagem completa das transações, apague o valor do campo de busca.

Você pode buscar por:

- **E-mail do cliente:** endereço de e-mail usado na compra.
- **Nome do cliente:** nome, sobrenome ou ambos, conforme cadastrado no pedido. A busca não diferencia maiúsculas de minúsculas.
- **Documento do cliente:** número completo do documento, sem pontuação. Em lojas brasileiras, esse documento é o CPF.
- **Código da transação:** identificador da transação no gateway da VTEX.
- **TID do pagamento:** identificador da transação no conector.
- **ID do pagamento:** identificador do pagamento no conector.

## Link da transação no pedido

Na página de detalhes do pedido, clique em **Detalhes da transação** para abrir a transação correspondente.

![Link Detalhes da transação no pedido](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/transações-e-operações/consultas/transacoes-como-buscar_1.png)

## TID do pagamento e ID do pagamento

A busca por TID do pagamento ou ID do pagamento precisa incluir o valor completo. Códigos parciais não retornam resultados. Você encontra esses valores nos detalhes da transação:

![TID do pagamento e ID do pagamento nos detalhes da transação](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/transações-e-operações/consultas/transacoes-como-buscar_2.png)

Esses valores representam a comunicação com o conector. Saiba como conferir cada interação em [Visualizar detalhes da transação em Pedidos](/pt/docs/tutorials/como-visualizar-detalhes-do-pedido).

## Nome do cliente

Busque pelo nome pessoal cadastrado na compra, e não pela razão social ou nome fantasia. Você pode buscar por nome, sobrenome ou ambos.

## Documento do cliente

Informe o número completo do documento, sem pontos, traços ou outros sinais de pontuação.

## Busca pela URL

Você também pode buscar adicionando o parâmetro `q` à URL da página de Transações:

`https://{accountName}.myvtex.com/admin/pci-gateway#/transactions?_sort=startDate`

Substitua `{accountName}` pelo nome da conta da sua loja. Para buscar, adicione `&q=` seguido do valor. Por exemplo, para buscar `500408`:

`https://{accountName}.myvtex.com/admin/pci-gateway#/transactions?_sort=startDate&q=500408`
