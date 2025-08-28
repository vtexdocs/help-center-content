---
title: 'Preencher campos da planilha de importação de preços fixos'
id: 50RFoH3ruV97FJgeBUCURh
status: PUBLISHED
createdAt: 2019-07-10T13:38:59.441Z
updatedAt: 2021-10-05T17:30:36.162Z
publishedAt: 2021-10-05T17:30:36.162Z
firstPublishedAt: 2019-07-15T13:22:32.402Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: filling-out-an-import-spreadsheets-fixed-price-fields
legacySlug: preencher-campos-da-planilha-de-importacao-de-precos-fixo
locale: pt
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

Para entender melhor o significado de cada campo da planilha de cadastro de preço fixo, veja a descrição completa dos itens abaixo.

![tabela.preço.fixo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pre%C3%A7os/lista-de-pre%C3%A7os/preencher-campos-da-planilha-de-importacao-de-precos-fixos_1.png)

- **SKU ID:** ID do SKU que deseja adicionar o preço fixo.
- **Trade Policy:** nome ou ID da política comercial em que o preço fixo será aplicado.
- **Price:** valor do preço fixo.
- **List Price:** preço de venda sugerido para o SKU.
- **Min Quantity:** quantidade mínima do SKU para o preço fixo ser aplicado.
- **Date From:** data e hora de início, no formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt), do agendamento do preço fixo. Será a partir dessa data e hora que o preço fixo será válido.
- **Date To:** data e hora de fim, no formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt), do agendamento do preço fixo. Será a partir dessa data e hora que o preço fixo não será mais válido.

Os próximos campos são opcionais na planilha, exportados somente para exibição e para facilitar a identificação de um SKU. Para visualizar estes campos na planilha, é necessário selecionar a opção **Incluir metadados nas tabelas exportadas** na exportação.

- **SKU Name (View Only):** nome do SKU conforme cadastrado.
- **Product ID (View Only):** ID do produto conforme cadastro do catálogo.
- **Product Name (View Only):** nome do produto ao qual o SKU está associado.
- **Ref ID (View Only):** código de referência único utilizado para facilitar a organização do catálogo de produtos. Esse ID geralmente é criado pelos sistemas internos da loja.
- **EAN (View Only):** código de identificação único do SKU (código de barras).

> ⚠️ Planilhas de preços usadas para importação têm um limite de tamanho de 1 MB. <br/><br/>Se sua planilha atual excede este limite, recomendamos dividí-la em vários arquivos, **certificando-se que os preços que se referem ao mesmo SKU sejam mantidos juntos na mesma planilha**.
