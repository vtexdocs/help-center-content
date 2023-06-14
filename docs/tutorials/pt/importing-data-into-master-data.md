---
title: Importar dados no Master Data
id: tutorials_1135
status: PUBLISHED
createdAt: 2017-04-27T21:57:12.437Z
updatedAt: 2023-03-28T23:29:25.337Z
publishedAt: 2023-03-28T23:29:25.337Z
firstPublishedAt: 2017-04-27T23:03:43.488Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: importando-dados-no-master-data
legacySlug: importando-dados-no-master-data
subcategory: 2AThnkEZAYbk4G4EIs53rL
---

A inclusão e alteração em massa de registros no Master Data pode ser feito tanto por API quanto por importação de planilha. Este documento tem como objetivo demonstrar o passo a passo necessário para a criação e importação da planilha com os dados novos e alterados.

## Como montar a planilha

A melhor maneira de obter a planilha de importação é [realizando a exportação do formulário que deseja atualizar](/pt/tutorial/exportando-dados/). A planilha de exportação é a mesma que deve ser utilizada na importação, porém com algumas alterações, como a retirada dos campos que são de preenchimento automático do sistema, como "accountId",	"accountName",	"dataEntityId", "createdBy", "createdIn",	"updatedBy",	"updatedIn",	"lastInteractionBy",	"lastInteractionIn", "followers" e "tags", por exemplo. Assim, sempre realizando uma exportação antes da importação, é garantido que a planilha utilizada está atualizada com possíveis alterações do formulário em questão.

### Atualizando dados já existentes

1. É imprescindível que a exportação desses dados seja feita e que sejam alterados os dados desejados na planilha exportada. 
2. Manter a coluna (id) com o valor do dado já existente. 

### Inserindo novos dados

Deixe o valor da coluna id vazio e será criado um novo registro.

<div class="alert alert-warning">
Ao inserir os dados na planilha, certifique-se que o formato dos valores nas células corresponde ao formato esperado pela respectiva coluna. Exemplos de formatos são número, texto ou data.
</div>

## Como subir a planilha

Após a exportação e edição da planilha exportada, é hora de realizar a importação dos dados. Para isso, siga os pontos abaixo para realizar esta operação.

<div class="alert alert-warning">
Mantenha o mesmo formato da planilha (xls) para realizar a importação com sucesso.
</div>

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Clique na aba **Aplicações**.
3. Clique no botão **Modo de Importação**.
4. Selecione a entidade de dados que deseja inserir ou atualizar registros (Aqui, você deve inserir a entidade de dados do formulário onde estão os registros que deseja inserir ou atualizar).
5. Escolha o arquivo.
6. Clique no botão **Importar** no canto inferior da tela.

![Importando](//images.contentful.com/alneenqid6w5/3xkB2DzbqoeIsk2Qice8sM/71d3c7d0379e03a8641180ccbe97dc77/Importando-1.gif)
