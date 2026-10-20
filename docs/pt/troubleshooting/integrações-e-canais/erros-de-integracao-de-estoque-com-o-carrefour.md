---
title: 'Erros de integração de estoque com o Carrefour'
id: 4oDrYCkrIvWETCW34I2CKF
status: PUBLISHED
createdAt: 2021-10-25T22:15:47.447Z
updatedAt: 2026-10-07T22:20:00.000Z
publishedAt: 2024-06-17T15:05:00.226Z
firstPublishedAt: 2021-10-25T22:30:07.082Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: carrefour-inventory-integration-errors
legacySlug: erros-de-integracao-de-estoque-com-o-carrefour
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

Quando ocorre um erro de integração de estoque entre o **Carrefour** e uma loja, uma mensagem de erro é informada para cada SKU. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Estoque** ou digite **Estoque** na barra de busca.

Os erros mais comuns de integração de estoque com o Carrefour são:

- **Produto não catalogado**
- **Integração não autorizada**

## Solução

Para corrigir erros de integração de estoque com o Carrefour, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Produto ainda não foi catalogado no Carrefour. Para reprocessar essa oferta, aguarde a confirmação do Carrefour de que o produto foi catalogado. Para mais detalhes verifique o portal do carrefour.**|O estoque só é integrado depois que o Carrefour cataloga o produto. Esse processo pode levar de horas a dias.|Aguarde a catalogação. Quando ela for concluída, a VTEX processa o erro automaticamente, sem reprocessamento manual. Para acompanhar o status, entre em contato pelo [Portal Fornecedor](https://portalfornecedorcarrefour.qa.aevee.com.br/login).|
|**"status":401,"message":"Unauthorized"**|A autorização da integração foi perdida. O token, também chamado de ShopKey, pode ter expirado ou sido considerado suspeito.|Valide o token com o Carrefour pelo [Portal Fornecedor](https://portalfornecedorcarrefour.qa.aevee.com.br/login). Depois, corrija o [cadastro do conector](/pt/docs/tracks/configurar-cadastro-da-integracao-do-carrefour): no Admin VTEX, acesse **Marketplace > Conexões > Integrações**, clique no ícone de engrenagem do card do Carrefour, escolha **Editar configuração**, preencha o campo _ShopKey_ e clique em **Salvar configuração**.|
