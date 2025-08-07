---
title: 'Importar dados no Master Data v1'
id: tutorials_1135
status: PUBLISHED
createdAt: 2017-04-27T21:57:12.437Z
updatedAt: 2025-03-19T16:33:37.888Z
publishedAt: 2025-03-19T16:33:37.888Z
firstPublishedAt: 2017-04-27T23:03:43.488Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: importing-data-into-master-data-v1
locale: pt
legacySlug: importando-dados-no-master-data
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

A inclusão e alteração em massa de registros no Master Data v1 pode ser feita por API ou por importação de uma planilha. Este documento tem como objetivo demonstrar o passo a passo necessário para a criação e importação da planilha com os dados novos e alterados.

## Exportar dados do formulário

Para obter a planilha de importação, primeiro exporte os dados do formulário que deseja atualizar, seguindo os passos descritos em Exportar dados do Master Data v1. Dessa forma, você pode garantir que a planilha utilizada está atualizada com a versão mais recente do formulário.

## Remover campos de preenchimento automático

A planilha de exportação é a mesma que deve ser utilizada na importação, exceto pelos campos que são de preenchimento automático do sistema:

- accountId
- accountName
- dataEntityId
- createdBy
- createdIn
- updatedBy
- updatedIn
- lastInteractionBy
- lastInteractionIn
- followers
- tags

Remova essas informações ao preencher a planilha para importação.

## Atualizar dados existentes

Para atualizar dados existentes, é imprescindível exportá-los conforme descrito em [Exportar dados do formulário](#exportar-dados-do-formulario) e alterar as informações desejadas na planilha exportada, mantendo a coluna id inalterada. 

## Inserir novos dados

Para criar um novo registro, crie uma nova linha com as informações do registro e mantenha o  valor da coluna id vazio.

<div class="alert alert-warning">
Ao inserir os dados na planilha, certifique-se que o formato dos valores nas células corresponde ao formato esperado pela respectiva coluna (campo do formulário). Exemplos de formatos são número, texto ou data.
</div>

## Fazer upload da planilha

Após a exportação e edição da planilha, você deve realizar a importação dos dados. Siga os passos abaixo para realizar esta operação.

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data.**
2. Clique na aba **Aplicações.**
3. Clique em `Importar`.
4. Em **Entidades de dados**, selecione a entidade de dados do formulário em que você deseja inserir ou atualizar registros.
5. Clique em `Escolher arquivo` para selecionar o arquivo da planilha no seu dispositivo.
6. Clique no botão `Importar` no canto inferior direito da tela.

<div class="alert alert-warning">
Mantenha o mesmo formato da planilha exportada (XLS) para realizar a importação com sucesso.
</div>

