---
title: 'As interações do Sku de Gestão de Ofertas não são estáveis'
id: 7o3IEgPiDB9vYVJ8RS50jl
status: PUBLISHED
createdAt: 2023-02-02T16:29:12.305Z
updatedAt: 2023-02-08T20:05:01.761Z
publishedAt: 2023-02-08T20:05:01.761Z
firstPublishedAt: 2023-02-02T16:29:12.925Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: offers-management-sku-status-is-not-reliable-in-vtexvtex-integrations
locale: pt
kiStatus: Backlog
internalReference: 745738
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

Atualmente o sistema de gerenciamento de ofertas mostra o status dos skus enviados de um vendedor para um mercado e suas interações e logs de ações como atualizações de preço e estoque.

Estes registros não são estáveis neste sistema, às vezes eles são enviados corretamente e às vezes não.

Um exemplo mais claro é:

Se na tentativa de enviar o sku ocorrer um erro, o status do sku é alterado para "erro" na IU.

Depois disso, o vendedor pode ajustar o sku de acordo com o que precisa ser corrigido e reindexar o sku a fim de ser enviado novamente.

Nesta ação, mesmo que o sku seja enviado corretamente para o mercado e fique disponível para aprovação do lado deles, o sku no sistema de gerenciamento de oferta permanece (às vezes) com um status de erro.

Este status está errado, uma vez que o sku já foi enviado.

No entanto, isto não acontece sempre. O que significa que o status não é confiável.


## Simulação

1. Criar um sku no lado do vendedor com algum tipo de erro (sem imagem, por exemplo);
2. Enviar o sku para o mercado. Note que ele terá um status de erro na IU de Gerenciamento de Ofertas;
3. Consertar o erro (neste caso, adicionar imagens) e reindexar o sku;
4. Pode acontecer que o status de erro não desapareça na IU apesar do sku já ter sido enviado corretamente para o mercado.

## Workaround

Não há necessidade de ter uma alternativa, já que o sku foi enviado corretamente (ou as atualizações foram realmente feitas corretamente).

