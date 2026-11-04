---
title: 'Erros de integração de estoque com a Netshoes'
id: 2solm6TXBNVHboVEduYN5g
status: PUBLISHED
createdAt: 2021-12-30T20:43:17.879Z
updatedAt: 2026-10-07T22:20:00.000Z
publishedAt: 2023-03-29T14:53:26.342Z
firstPublishedAt: 2021-12-30T20:59:34.810Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: netshoes-inventory-integration-errors
legacySlug: erros-de-integracao-de-estoque-com-a-netshoes
locale: pt
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Logística
  - Integrações
symptomFilters:
  - Erro de sincronização
  - Configuração incorreta
---

Quando ocorre um erro de integração de estoque entre a **Netshoes** e uma loja, uma mensagem de erro é informada para cada SKU. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Estoque** ou digite **Estoque** na barra de busca.

Os erros mais comuns de integração de estoque com a Netshoes são:

- **SKU não mapeado**
- **ProductGroup inválido**
- **Produto sem descrição**
- **SKU sem peso**
- **Valor de mapeamento não aceito**
- **Atributo obrigatório ausente**

## Solução

Para corrigir erros de integração de estoque com a Netshoes, considere as opções apresentadas na tabela a seguir. Quando o mapeamento do SKU é refeito, a reindexação do produto atualiza o estoque na Netshoes e o reprocessamento manual não é necessário.

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Não foi possível localizar o mapeamento deste SKU na planilha**|O SKU não foi mapeado ou o mapeamento está incorreto.|Siga o [Mapeamento de categorias, variações e atributos da Netshoes](/pt/docs/tracks/mapeamento-de-categorias-variacoes-e-atributos-da-netshoes). Preencha a _Planilha de Mapeamento_ com os termos exatos da _Planilha de Consulta na Netshoes_. A planilha diferencia maiúsculas e minúsculas.|
|**productGroup: Field contains invalid characters.**|O atributo ProductGroup, que agrupa variações de cor e tamanho, não foi mapeado ou foi preenchido com caracteres não aceitos.|Confira se o agrupamento é necessário e [cadastre o agrupamento](/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/44wi4Ib06yw3dLcqZVqTv8#cadastro-do-agrupamento-de-produtos). [Cadastre a especificação de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) _NetshoesProductGroup_ com um valor em texto, sem caracteres especiais nem números, e repita o mesmo valor em todas as variações de cor e tamanho. Saiba mais na [documentação da Netshoes](https://developers.netshoes.com.br/api-portal/producao#section4).|
|**Este produto não possui descrição, que é um campo obrigatório para integrar produtos neste marketplace**|O campo _Descrição do produto_ não foi preenchido no mapeamento.|No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, localize o produto, clique em **Alterar**, [preencha a descrição do produto](/pt/tutorial/campos-de-cadastro-de-produto) e clique em **Salvar**.|
|**Este Sku não possui peso cadastrado ou é inferior a 1 grama, que é um campo obrigatório para integrar produtos neste marketplace**|O campo _Peso real_ do SKU está vazio ou tem valor inferior a 1 g.|No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, abra o SKU, [preencha o peso real](/pt/tutorial/campos-de-cadastro-de-sku) com um valor acima de 1 g e clique em **Salvar**.|
|**O Departamento (XXX) cadastrado na planilha de mapeamento, não corresponde à um valor aceito pela Netshoes.**<br>**O Gênero (XXX) cadastrado na planilha de mapeamento, não corresponde à um valor aceito pela Netshoes.**<br>**O Tamanho (XXX) cadastrado na planilha de mapeamento, não corresponde à um valor aceito pela Netshoes.**<br>**O Tipo de Produto (XXX) cadastrado na planilha de mapeamento, não corresponde à um valor contido no departamento (XXX)**<br>**A Marca XXX, cadastrada na planilha de mapeamento, não corresponde à um valor aceito pela Netshoes.**|O valor mapeado para departamento, gênero, tamanho, tipo de produto ou marca não corresponde a um termo aceito pela Netshoes.|Refaça o mapeamento do atributo, da variação ou da categoria indicados na mensagem, conforme o [Mapeamento de categorias, variações e atributos da Netshoes](/pt/docs/tracks/mapeamento-de-categorias-variacoes-e-atributos-da-netshoes). Use os termos exatos da _Planilha de Consulta na Netshoes_, inclusive maiúsculas e minúsculas.|
|**Os atributo(s) XXX é(são) obrigatório(s) e não foi(foram) encontrado(s) no Produto e nem no Sku**|Um atributo obrigatório da Netshoes não foi mapeado ou foi mapeado de forma incorreta.|Mapeie o atributo indicado na mensagem, conforme o [Mapeamento de categorias, variações e atributos da Netshoes](/pt/docs/tracks/mapeamento-de-categorias-variacoes-e-atributos-da-netshoes), usando os valores exatos da _Planilha de Consulta na Netshoes_.|
