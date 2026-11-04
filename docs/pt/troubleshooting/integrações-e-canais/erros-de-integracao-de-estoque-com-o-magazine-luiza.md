---
title: 'Erros de integração de estoque com o Magazine Luiza'
id: 2MDUBnEp0AJ7YHppzatW9L
status: PUBLISHED
createdAt: 2021-11-22T13:46:18.519Z
updatedAt: 2026-10-07T22:20:00.000Z
publishedAt: 2023-03-29T14:44:16.995Z
firstPublishedAt: 2021-11-22T13:53:56.929Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: magazine-luiza-inventory-integration-errors
legacySlug: erros-de-integracao-de-estoque-com-o-magazine-luiza
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

Quando ocorre um erro de integração de estoque entre o **Magazine Luiza** e uma loja, uma mensagem de erro é informada para cada SKU. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Estoque** ou digite **Estoque** na barra de busca.

Os erros mais comuns de integração de estoque com o Magazine Luiza são:

- **SKU inexistente**
- **SKU sem preço**
- **Produto pai não integrado**

## Solução

Para corrigir erros de integração de estoque com o Magazine Luiza, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Não existe um sku com o Id informado**|O produto não foi importado corretamente, então o SKU é tratado como inexistente e o estoque não pode ser enviado.|Confirme se o SKU está associado à política comercial da integração. Se não estiver, faça a [associação à política comercial](/pt/docs/tutorials/associacao-de-sku-a-politica-comercial). Depois, em **Marketplace > Conexões > Produtos**, abra o processo com erro e clique em **Ações > Reprocessar SKU**. Em seguida, reprocesse o estoque em **Marketplace > Conexões > Estoque**.|
|**Sku não exportado pois o mesmo não possui Preço cadastrado para a Política comercial**|O SKU não tem preço cadastrado na política comercial usada na integração.|[Cadastre o preço base do produto](/pt/docs/tutorials/cadastrar-o-preco-base-de-um-produto). Se necessário, configure uma [regra de preço para a política comercial](/pt/docs/tutorials/configurar-regra-de-preco-para-politica-comercial) da integração.|
|**O produto pai não foi integrado**|O SKU depende do produto pai, e a falha na importação do produto impede o envio do estoque.|Confirme se o produto está associado à política comercial da integração. Se não estiver, faça a [associação à política comercial](/pt/docs/tutorials/associacao-de-sku-a-politica-comercial). Depois, em **Marketplace > Conexões > Produtos**, abra o processo com erro e clique em **Ações > Reprocessar SKU**. Em seguida, reprocesse o estoque em **Marketplace > Conexões > Estoque**.|
