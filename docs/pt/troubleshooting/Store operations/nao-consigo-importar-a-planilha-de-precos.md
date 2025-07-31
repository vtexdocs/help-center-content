---
title: 'Não consigo importar a planilha de preços'
id: bglrzs7gLKWf97q8qRdRm
status: PUBLISHED
createdAt: 2024-06-10T15:11:02.787Z
updatedAt: 2024-11-08T18:50:45.313Z
publishedAt: 2024-11-08T18:50:45.313Z
firstPublishedAt: 2024-06-10T17:28:51.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-import-the-price-table
locale: pt
legacySlug: nao-consigo-importar-a-planilha-de-precos
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Preços, Importação de planilhas
---

As [tabelas ou planilhas de preço](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) armazenam informações de SKUs que após serem aplicadas em determinados contextos, tais como políticas comerciais, promoções ou cluster de clientes, permitem calcular os valores de venda dos produtos em uma loja VTEX. Para mais informações, acesse [Preço base](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) e [Preço fixo](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy). 

<div class ="alert alert-warning">
  Não é possível importar uma planilha de <b>Preço calculado</b> no Admin VTEX. A função <b>Exportar</b> está disponível para esta planilha apenas para que o lojista possa conferir os valores de preço final de cada produto.
</div>

Após [importar uma planilha de preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D), algumas mensagens de erro podem surgir em determinados SKUs, como nos exemplos abaixos: 

- `"The resource you are looking for cannot be found: Price not found"`
- `"Error occurred while converting spreadsheet: Object reference not set to an instance of an object."`
- `"Import Fixed Table Error: Invalid headers - SKU ID"`

Caso você identifique mensagens de erro, valores incorretos de preço ou outras dificuldades para importar uma planilha, examine as possíveis soluções abaixo para resolver esses problemas.

## Solução

Para corrigir dificuldades na importação de planilha de preços, considere verificar as seguintes soluções:

### Modelo de planilha

Planilhas criadas pelos próprios clientes ou customizadas após serem exportadas do Admin VTEX podem gerar erros de integração no momento da importação.

Para evitar este tipo de cenário, utilize somente os modelos de planilha disponíveis (preço-base ou preço fixo) e não aplique nenhum tipo de customização. Saiba mais em [Exportação de preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D#exportacao-de-precos).

### Preenchimento de dados

Planilhas preenchidas com informações incorretas, por exemplo, inserindo o ID do produto onde deveria ser utilizado o ID do SKU, ou [alterando o preço de um SKU](/pt/tutorial/alteracao-de-preco-de-sku--tutorials_95#regra-para-alteracao-de-preco) cadastrado em mais de 70% ou diminuindo mais de 30% em relação ao valor atual, podem gerar inconsistências no momento de importá-las na loja.

Confira se os campos de sua planilha estão devidamente preenchidos conforme as orientações dos artigos abaixo:

- [Planilha de preço-base](/pt/tutorial/preencher-campos-da-planilha-de-importacao-de-precos-base--4Jox8TeQ5feqAn78TZ0DNA)
- [Planilha de preço fixo](/pt/tutorial/preencher-campos-da-planilha-de-importacao-de-precos-fixo--50RFoH3ruV97FJgeBUCURh)

<div class ="alert alert-warning">
  Antes de importar a planilha no Admin VTEX, certifique-se de que a mesma não contenha colunas com informações de erro (<b>Error Code</b> e <b>Error Message</b>) ou que exista algum tipo de filtro aplicado nas células. Caso você tente importar a planilha nestas condições, podem ocorrer erros no processo de importação dos dados.
</div>

Exemplo de planilha com filtros aplicados e campos __Error Code__ e __Error Message__ presentes:

![Planilha de preço](https://images.ctfassets.net/alneenqid6w5/1r7FGH4sdfT0uzCUX4T07y/0109fb3de360f568c44f6e0e6c3a920e/Price_spreadsheet.PNG)

#### Tamanho do arquivo

Planilhas de preço devem possuir um limite máximo de tamanho de 1 megabyte (MB). Caso a sua planilha atual seja maior que este valor, divida as informações em planilhas de tamanho inferior a 1 megabyte (MB).

<div class ="alert alert-warning">
  Todos os dados de um SKU específico devem ser mantidos na mesma planilha, não sendo permitido o cadastro de informações do mesmo SKU em planilhas diferentes.
</div>