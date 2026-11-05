---
title: 'Erros de integração de estoque com a Via'
id: 2jzz4Ip0M2BDzwslEtCzPc
status: PUBLISHED
createdAt: 2021-10-26T23:55:47.528Z
updatedAt: 2026-10-07T22:20:00.000Z
publishedAt: 2025-08-26T15:32:22.393Z
firstPublishedAt: 2021-10-27T00:08:05.224Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: via-inventory-integration-errors
legacySlug: erros-de-integracao-de-estoque-com-a-via
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

Quando ocorre um erro de integração de estoque entre a **Casas Bahia Marketplace** e uma loja, uma mensagem de erro é informada para cada SKU. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Estoque** ou digite **Estoque** na barra de busca.

Os erros mais comuns de integração de estoque com a Casas Bahia Marketplace são:

- **Token inválido**
- **Estoque inexistente para o warehouse**

## Solução

Para corrigir erros de integração de estoque com a Casas Bahia Marketplace, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Acesso Negado - Auth-token inválido ou inexistente**|O token, também chamado de chave de acesso, expirou, não existe ou foi considerado suspeito.|Valide o token com a Casas Bahia Marketplace pelo [Portal do Lojista](https://pas.viavarejo.com.br/login?returnUrl=%2F). Depois, corrija o [cadastro da integração](/pt/docs/tracks/cadastro-da-integracao-da-via-varejo): no Admin VTEX, acesse **Marketplace > Conexões > Integrações**, clique no ícone de engrenagem do card da Casas Bahia Marketplace, escolha **Editar configuração**, preencha o campo _Chave de acesso_ e clique em **Salvar configuração**. Em seguida, reprocesse o SKU em **Marketplace > Conexões > Estoque**, clicando em **Ações > Reprocessar**.|
|**Estoque inexistente para o warehouse. Problemas ao atualizar item.**|Não foi identificado um estoque válido. A causa pode ser indisponibilidade de estoque ou erro na [Estratégia de Envio](/pt/docs/tutorials/estrategia-de-envio).|Faça uma [simulação de envio](/pt/docs/tutorials/simulador-de-envio) para ver as possibilidades de entrega e a quantidade disponível. ![imagem_simulador](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/integrações-e-canais/erros-de-integracao-de-estoque-com-a-via_1.png) Erros na coluna _Transportadora_ são erros de SLA: revise a Estratégia de Envio usada na integração. Erros na coluna _Quantidade disponível_ podem indicar SKU sem estoque, SKU inativo, [estoque negativo](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque#por-que-meu-estoque-esta-negativo) ou item fora da coleção ou da política comercial. Nesse último caso, consulte [Associação de SKU à Política Comercial](/pt/docs/tutorials/associacao-de-sku-a-politica-comercial). Verifique o status do SKU em **Catálogo > Produtos e SKUs** e, se faltar quantidade, [atualize o estoque](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque).|
