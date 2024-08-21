---
title: 'Criar serviço para um SKU'
id: tutorials_252
status: PUBLISHED
createdAt: 2017-04-27T22:12:00.282Z
updatedAt: 2024-03-04T22:36:04.117Z
publishedAt: 2024-03-04T22:36:04.117Z
firstPublishedAt: 2017-04-27T23:03:11.914Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: criando-servico-para-um-sku
locale: pt
legacySlug: criando-servico-para-um-sku
subcategory: pwxWmUu7T222QyuGogs68
---

Serviço de SKU é uma funcionalidade da VTEX que permite adicionar um item, opcional e com custo, para acompanhar um produto. Para mais informações, leia nosso artigo [O que é um Serviço?](https://help.vtex.com/pt/tutorial/o-que-e-um-servico--46Ha8CEEQoC6Y40i6akG0y).

Neste artigo iremos abordar os seguintes tópicos:

- [Criar um tipo de serviço](#criar-um-tipo-de-servico)
  - [Campos de tipo de serviço](#campos-de-tipo-de-servico)
- [Criar um valor de serviço e associar a um tipo de serviço](#criar-um-valor-de-servico-e-associar-a-um-tipo-de-servico)
  - [Campos de valor de serviço](#campos-de-valor-de-servico)
- [Vincular um serviço a SKUs](#vincular-um-serviço-a-skus)
  - [Campos da planilha](#campos-da-planilha)

## Criar um tipo de serviço
Para cadastrar um tipo de serviço, siga os passos abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Campos personalizados**.
3. Clique na aba **Tipos de serviço**.
4. Clique em `Novo tipo de serviço de SKU`.
5. Preencha os [campos do tipo de serviço](#campos-de-tipo-de-servico).
6. Clique em `Salvar`.

### Campos de tipo de serviço
Nesta seção, você deve cadastrar um nome para seu tipo de serviço e configurar o comportamento conforme as opções abaixo.

- **Nome:** nome do tipo de serviço.
- **Cartão Presente:** opção que exibe o tipo de serviço no cartão presente.
- **Serviço Obrigatório:** opção que torna o tipo de serviço obrigatório.
- **Status:** opção que ativa ou desativa o tipo de serviço.
- **Anexos:** seleção de anexos que serão adicionados no tipo de serviço. O anexo é utilizado para adicionar a informação personalizada do serviço. Para saber mais sobre anexos, leia nosso artigo [O que é um Anexo?](https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm?&utm_source=autocomplete).

## Criar um valor de serviço e associar a um tipo de serviço
Após cadastrar o tipo de serviço, é necessário atribuir um valor a ele. Para cadastrar o valor de um tipo de serviço, siga os passos abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Campos personalizados**.
3. Clique na aba **Valores de serviço**.
4. Clique em `Nova tabela de valores`.
5. Preencha os [campos do valor de serviço](#campos-do-valor-de-servico).
6. Clique em `Salvar`.
  Ao finalizar essa configuração, você terá criado um serviço.

### Campos do valor de serviço
Nesta seção, você deve cadastrar um nome para seu valor de serviço e associá-lo a um tipo de serviço.

- **Nome:** nome do valor de serviço.
- **Valor:** quanto será cobrado do cliente pelo serviço.
- **Custo:** o custo do serviço para a loja.
- **Tipo de Serviço:** opção que vincula o valor do serviço com o tipo de serviço.

## Vincular um serviço a SKUs
Após criar o serviço, é preciso vinculá-lo aos SKUs desejados. Você pode vincular um serviço a mais de um SKU.

Para vincular um serviço a um SKU, siga os passos abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Campos personalizados**.
3. Clique na aba **Vincular valores de serviço a SKUs**.
4. Clique com o botão direito do mouse na categoria em que deseja adicionar o serviço. Selecione sempre a categoria mais interna do departamento desejado. Isto fará com que o processo de listagem, exportação e importação ocorra de forma mais rápida.
5. Clique em `Exportar`.
6. Salve a planilha de formato CSV que será exportada no seu computador.
7. Preencha os [campos da planilha](#campos-da-planilha). Mantenha o formato CSV do arquivo quando salvar as alterações.
<div class = "alert alert-warning">
  <p>O tamanho do arquivo da planilha não poderá exceder 4Mb (4096KB).</p>
</div>
8. Clique na barra ao lado do botão `Select`, destacada abaixo.
  ![Anexos - PT](https://images.ctfassets.net/alneenqid6w5/76FSnqnRMroOc0Ex2knz1Z/8581377e9a02b411cd383a85be145983/image.png)
9. Selecione a planilha CSV atualizada.
10. Clique em `Vincular Valor(es) de Serviço(s) a SKU(s)` para finalizar.

### Campos da planilha
Manipule a planilha com cautela, sempre verificando se as informações contidas estão preenchidas corretamente. A planilha precisa estar com todos os campos preenchidos para evitar erros.

>⚠️ Ao preencher a planilha, não altere ou apague os cabeçalhos das colunas na linha 1. Preencha os valores desejados nas linhas após os cabeçalhos das colunas para que a importação funcione corretamente.  

- **Nome Serviço:** nome do serviço.
- **Texto Serviço:** texto que será exibido junto com o serviço.
- **Id SKU:** número identificador do SKU que está sendo associado com o serviço.
- **Nome SKU:** nome do SKU que está sendo associado com o serviço.
- **Id Serviço Tipo:** número identificador do tipo de serviço. Para saber qual o ID do tipo de serviço, veja o campo **Id** na aba **Tipos de serviço**.
- **Nome Serviço Tipo:** nome do tipo de serviço.
- **Id Serviço Valor:** número identificador do valor de serviço. Para saber qual o ID do valor de serviço, cheque na URL do valor de serviço desejado o campo `IdSkuServicoValor`. No exemplo abaixo, o ID do valor de serviço é 3:

  `https://{accountName}.myvtex.com/admin/Site/SkuServicoValorForm.aspx?IdSkuServicoValor=3`

- **Nome Serviço Valor:** nome do valor de serviço.
- **Valor:** quanto será cobrado do cliente pelo serviço.
- **Custo:** o custo do serviço para a loja.
- **Ativo:** status do serviço. Preencha com `1` para manter o serviço ativo ou com `0` para manter inativo.

<div class = "alert alert-warning">
  <p>A inclusão de uma nova planilha não irá substituir os serviços já vinculados ao SKU. Para desvincular um serviço, utilize o endpoint <a href ="https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/skuservice/-skuServiceId-">Dissociate SKU Service</a>.</p>
</div>

