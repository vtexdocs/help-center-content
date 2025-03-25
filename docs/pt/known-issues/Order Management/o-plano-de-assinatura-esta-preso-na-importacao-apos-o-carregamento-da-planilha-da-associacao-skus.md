---
title: "O plano de assinatura está 'preso' na 'importação' após o carregamento da planilha da associação SKUs"
id: 4BVj2X44OZMttG57vUryHb
status: PUBLISHED
createdAt: 2022-05-03T00:28:48.118Z
updatedAt: 2022-11-25T22:02:55.949Z
publishedAt: 2022-11-25T22:02:55.949Z
firstPublishedAt: 2022-05-03T00:28:48.887Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscription-plan-is-stuck-in-importing-after-uploading-the-skus-association-spreadsheet
locale: pt
kiStatus: Fixed
internalReference: 571080
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



É importante observar que a seção **Planos** dentro do módulo **Subscrições** é relativamente nova e ainda está na etapa **Beta***.

Dentro das opções **Planos** para assinaturas, temos uma funcionalidade que permite importar de uma planilha Excel todas aquelas SKUs que você deseja associar a um plano específico.

Para a importação, a planilha base indicada mostra duas colunas com exemplos dos valores que devem ser colocados. Na primeira coluna o ID da SKU e na segunda o valor define se esta SKU está ou não associada. Aqui está um exemplo de como ele é exibido:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Order%20Management/o-plano-de-assinatura-esta-preso-na-importacao-apos-o-carregamento-da-planilha-da-associacao-skus_1.png)

Neste caso, o problema ocorre porque **nosso serviço******actualmente aceita apenas um valor numérico na coluna "associado "**, ou seja, apenas **0 para falso*** ou **1 para verdadeiro***. Ao carregar a planilha com texto na coluna "**associado**", o plano permanecerá no estado "**importante***" indefinidamente, o que atualmente bloqueia a capacidade de editar ou carregar uma nova planilha.



## Simulação



Para simular, você pode:

1. Carregue a planilha com o texto indicado ("**TRUE**") na coluna "**associar**".
2. Validar o status do plano que permanecerá "**importante***".
3. Não é possível editar o Plano específico.



## Workaround



Para evitar este comportamento, recomenda-se **carregar a planilha com o formato numérico indicado (0 ou 1) na coluna "associar "** e garantir que esta célula esteja, de fato, no formato numérico. Aqui está um exemplo:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Order%20Management/o-plano-de-assinatura-esta-preso-na-importacao-apos-o-carregamento-da-planilha-da-associacao-skus_2.png)

Caso o plano seja "bloqueado", a idéia é que, no momento, seja aberto um ingresso para a equipe **Order Management***, para tentar "desbloquear" o Plano específico.

