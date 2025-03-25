---
title: 'Erros de Produtos no Bridge - Como resolver?'
id: 5QLaLqVJRuaYWSwCIqk60m
status: ARCHIVED
createdAt: 2017-12-20T14:27:05.690Z
updatedAt: 2020-01-09T15:46:16.747Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 
slugEN: untitled-entry-2017-12-20-at-02-27-05
locale: pt
legacySlug: erros-de-produtos-no-bridge-como-resolver
---

Sempre que acontece algum incidente na integração de __produtos__ entre os marketplaces e a VTEX, estes eventos aparecem listados no módulo __Bridge__.  Algumas vezes, as mensagens de erro logadas não são muito amigáveis para o usuário. A ideia deste artigo é ajudar você a solucionar estes incidentes, descrevendo claramente a ação que deve ser tomada para resolvê-los. 

O erros estão categorizados por __marketplace__. Utilize a busca do seu navegador para encontrar as mensagens de erro desejadas.

## Amazon

---

#### Mensagem de Erro

`The data you provided for an attribute does not match the list of valid values. Please select a valid value from the Data Definitions and resubmit.`

#### Solução

Lorem Ipsum

---

#### Mensagem de Erro

`Field ean in product is missing`

#### Solução

Inclua o valor do campo EAN13 no [cadastro do SKU](/pt/tutorial/cadastrando-sku) na VTEX. Depois, no Bridge, clique no botão `Ações` e reprocesse o SKU. 

---

## Buscapé

---

#### Mensagem de Erro

`Sku não integrado pois o mesmo não possui descrição.`

#### Solução

Inclua uma descrição no cadastro do [Produto](/pt/tutorial/campos-de-cadastro-de-produto) na VTEX. Depois, no Bridge, clique no botão `Ações` e reprocesse o SKU.

---

#### Mensagem de Erro

`Sku não possui preço cadastrado na loja`

#### Solução

Inclua um [preço](/pt/tutorial/cadastrando-preco-de-sku) para o seu SKU na VTEX. Depois, no Bridge, clique no botão `Ações` e reprocesse o SKU.

---

