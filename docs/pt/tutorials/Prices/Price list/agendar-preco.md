---
title: 'Agendar preço'
id: 4vVha6TGzYkguWuMOqCcCk
status: PUBLISHED
createdAt: 2017-12-27T16:18:43.304Z
updatedAt: 2024-09-06T19:59:43.713Z
publishedAt: 2024-09-06T19:59:43.713Z
firstPublishedAt: 2018-01-04T15:12:09.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: scheduling-prices
locale: pt
legacySlug: agendar-preco-no-pricing-v2
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

No módulo Preços, é possível agendar os preços fixos dos produtos da sua loja. As datas de agendamento devem seguir a padronização [RFC3339](https://www.ietf.org/rfc/rfc3339.txt). É possível especificar o fuso-horário desejado para o agendamento, sendo UTC ou GMT. Caso este não seja definido, será usado o horário UTC.

Neste artigo vamos abordar os seguintes tipos de agendamento:

- [Agendamento de preço fixo pelo Admin](#agendamento-de-preco-fixo-pelo-admin)
  - [Campos de preenchimento do preço fixo](#campos-de-preenchimento-do-preco-fixo) 
- [Agendamento por importação de planilha de preços fixos](#agendamento-por-importacao-de-planilha-de-precos-fixos)
- [Agendamento de preço por API](#agendamento-de-preco-por-api)

## Agendamento de preço fixo pelo Admin

Para realizar o agendamento pelo Admin, siga os passos abaixo.

1. No Admin VTEX, acesse *Preços > Lista de preços*, ou digite *Lista de preços* na barra de busca no topo da página.
2. Clique na célula de preço de SKU da tabela de preço desejada.
3. Clique no botão `Definir preços fixos`.
4. Na seção **Preços fixos**, clique no botão `Adicionar mais um preço`.
5. Preencha os [campos disponíveis do preço fixo](#campos-de-preenchimento-do-preco-fixo).
6. Clique em `Salvar` para finalizar.

### Campos de preenchimento do preço fixo

- **Quantidade mínima:** quantidade mínima do SKU para o preço fixo ser aplicado.
- **Preço:** valor do preço fixo.
- **Definir preço de lista:** opção para adicionar <i class="fas fa-toggle-on"></i> ou não <i class="fas fa-toggle-off"></i> um preço de lista.
- **Preço de lista:** preço de venda sugerido para o SKU.
- **Agendar preço fixo:** opção para agendar <i class="fas fa-toggle-on"></i> ou não  <i class="fas fa-toggle-off"></i> um preço fixo.
- **Status:** status indicando se o agendamento está **agendado** ou **inativo**.
- **Data Início:** data de início do agendamento do preço fixo. Será a partir dessa data que o preço fixo será válido.
- **Hora Início:** hora de início do agendamento do preço fixo. Será a partir dessa hora que o preço fixo será válido.
- **Data Fim:** data de fim do agendamento do preço fixo. Será a partir dessa data que o preço fixo não será mais válido.
- **Hora Fim:** hora de fim do agendamento do preço fixo. Será a partir dessa hora que o preço fixo não será mais válido.

>ℹ️ No agendamento feito pelo Admin, o fuso-horário considerado será o utilizado pelo computador do usuário.

## Agendamento por importação de planilha de preços fixos

Você também pode realizar o agendamento de preços por importação de planilha de preços fixos. Para isso, siga os passos abaixo.

1. No Admin VTEX, acesse **Preços > Lista de preços**, ou digite **Lista de preços** na barra de busca no topo da página.
2. Clique no ícone 📥 para exportar a planilha que será preenchida.
![Agendar preço fixo - PT](https://images.contentful.com/alneenqid6w5/49YjTAWw59Mglg2DMUT65w/08b89d10517f3bbddc78569650ebc09d/Screenshot_2021-08-05_at_17-11-39_-EDU-4229-_Agendar_pre__o_fixo.png)
3. Selecione apenas a opção **Tabela de preços fixos**.
4. Clique em `Exportar 1 tabela` para finalizar.

A planilha será enviada para seu email e pode ser baixada por lá. Após baixar a planilha, preencha as colunas com as seguintes informações:

- **SKU ID:** ID do SKU que deseja adicionar o preço fixo.
- **Trade Policy:** nome ou ID da política comercial em que o preço fixo será aplicado.
- **Price:** valor do preço fixo.
- **List Price:** preço de venda sugerido para o SKU.
- **Min Quantity:** quantidade mínima do SKU para o preço fixo ser aplicado.
- **Date From:** data e hora de início, no formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt), do agendamento do preço fixo. Será a partir dessa data e hora que o preço fixo será válido.
- **Date To:** data e hora de fim, no formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt), do agendamento do preço fixo. Será a partir dessa data e hora que o preço fixo não será mais válido.

>ℹ️ Os campos **Date From** e **Date To** seguem o formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt" target="_blank), que inclui o fuso horário. Por exemplo, se uma promoção começar ou terminar às 22h00 do dia 30 de dezembro de 2024, na Argentina (fuso horário GMT-3), o valor a ser inserido será: `2024-12-30T22:00:00-03:00`.

![Agendar preço fixo planilha PT](//images.contentful.com/alneenqid6w5/7g3wkpsDPcdjYHT2xSqGhS/1895766def1ed02971f47f003d115491/Screenshot_2021-08-05_at_17-17-11_-EDU-4229-_Agendar_pre__o_fixo.png)

Depois de finalizar o preenchimento da planilha é necessário importá-la para a loja. Siga os passos abaixo.

1. No Admin VTEX, acesse *Preços > Lista de preços*, ou digite *Lista de preços* na barra de busca no topo da página.
2. Clique no ícone 📤 para importar a planilha preenchida.
3. Selecione apenas a opção **Tabela de preços fixos**.
4. Caso você deseje sobrescrever os preços fixos existentes com os da sua planilha, selecione a opção **Sobrescrever todos os preços existentes**. Caso nenhum preço fixo exista na sua loja, nada será sobrescrito.
5. Clique em `Importar tabela de preços fixos`.
6. Selecione a planilha desejada dos arquivos do seu computador. Ela será automaticamente enviada e os preços fixos salvos.

## Agendamento de preço por API

Utilize o endpoint [Create or update price or fixed price](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) da Pricing API para agendar um preço fixo por API.
