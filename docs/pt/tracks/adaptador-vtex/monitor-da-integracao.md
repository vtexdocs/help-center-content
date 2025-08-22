---
title: 'Monitor da Integração'
id: 1QFvNlIx1qaxSGX1gg9sP5
status: PUBLISHED
createdAt: 2021-10-06T15:50:32.277Z
updatedAt: 2021-10-06T16:21:52.011Z
publishedAt: 2021-10-06T16:21:52.011Z
firstPublishedAt: 2021-10-06T16:13:51.393Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: monitor-da-integracao
locale: pt
trackId: 132YFN170Jvs6ZUBGh8w2e
trackSlugEN: adaptador-vtex
---

## Conceito de lote e registros

Quando o ERP envia as mensagens ao e-commerce, estas são enviadas em **LOTE** contendo diversos registros. Ao receber o lote, o adaptador extrai os registros contido nos lotes, transforma no formato `JSON` e envia para **VTEX**.

Em alguns casos, um registro pode ser quebrado em partes para ser enviado corretamente para **VTEX**. Exemplo: o método de atualização de estoque que em alguns casos envia também o preço. Neste caso, o adaptador gera um registro para o estoque e outro registro para o preço, como ilustrado abaixo:

![aa1-adaptador](//images.contentful.com/alneenqid6w5/6vuuIwtsVdgG9Qg1xKwQag/02b250ab85f489bda094ea042ddd24c5/aa1-adaptador.png)

## Usando o monitor de integração

- Para acompanhar a evolução da integração você deve acessar o link Monitor de integração na seção **DASHBOARD**.
- Se desejar você pode ordenar a listagem de lotes clicando no nome da coluna desejada. Ex: para ordenar por data de recebimento do lote clique em **Recebido em**.
- Você pode procurar o lote desejado diretamente na listagem de lotes -ou- utilizar a área de filtros na parte superior da tela.

Na área de filtros você pode:

- Filtrar pelo número do lote.
- Filtrar pela data em que o adaptador recebeu o lote do ERP.
- Filtrar pelo conteúdo da mensagem. Ex: pelo código do produto, pelo nome do produto, preço preço do produto. 
- Filtrar pela Operação executada. Exemplos: **AtualizaPreco**, **AtualizaEstoque**, **AtualizaPrecoArmazem**, **Comprador**, **confirmaComprador**.
- Filtrar pelo Status da troca de mensagens. Exemplo: somente apresentar as mensagens que apresentaram erro no sincronismo com a VTEX.

![loginformacoeslote-adaptador](//images.contentful.com/alneenqid6w5/dxiurfl0kbtKnxiQCOb4K/e5ed3deb0bfed3c9fcbef65b232f86a4/loginformacoeslote-adaptador.png)

- Você pode acompanhar a quantidade de registros processados em cada lote, olhando as colunas de **Pendentes** (registros que ainda não foram processados pela VTEX), **Sucesso** (Registros processados pela VTEX com sucesso), **Erro** (registros que apresentaram falha no processamento pela VTEX).
- Você pode fazer download do arquivo XML do lote que foi enviado pelo ERP clicando no link **Baixar XML**.
- Clicando no link registro, você pode consultar os registros que foram enviado no lote.

![loteRegistro-adaptador](//images.contentful.com/alneenqid6w5/3ksmvOO1wYuDbj9p5nEFUr/71d3d9d7c9ea8ba9e9329b9d5a3f02c1/loteRegistro-adaptador.png)

- Você pode filtrar a lista pelo conteúdo da mensagem retornada através do campo **Palavras Chave na Mensagem**.
- Você pode ordenar as linhas do relatório clicando no nome da coluna desejada. Ex: ordenar a coluna de **Status**.
- Você pode clicar nos links da coluna de **Detalhes** para visualizar o `JSON` enviado pela VTEX e o retorno oferecido pela VTEX.

![detalhesregistros-adaptador](//images.contentful.com/alneenqid6w5/66la9GGlwZFkkApkolMuL9/beb4a6710d5fc799c8e2aba570c8fb31/detalhesregistros-adaptador.png)
