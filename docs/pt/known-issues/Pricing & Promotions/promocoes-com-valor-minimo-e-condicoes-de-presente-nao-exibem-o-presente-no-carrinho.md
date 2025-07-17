---
title: "Promoções com valor mínimo e condições de presente não exibem o presente no carrinho"
id: oUDvaZPL0fjbN3v18QQIM
status: PUBLISHED
createdAt: 2022-07-25T19:29:19.209Z
updatedAt: 2024-12-19T19:20:23.403Z
publishedAt: 2024-12-19T19:20:23.403Z
firstPublishedAt: 2022-07-25T19:29:19.674Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promocoes-com-valor-minimo-e-condicoes-de-presente-nao-exibem-o-presente-no-carrinho
locale: pt
kiStatus: Backlog
internalReference: 445569
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O problema ocorre ao combinar uma promoção com uma condição de valor mínimo e um item de presente. Nesses casos, o presente não é exibido para o usuário na interface do usuário de checkout. Embora a promoção seja tecnicamente aplicada, o usuário não consegue ver ou selecionar o presente, o que gera confusão.

## Simulação


Esse problema não ocorre de forma consistente em todos os testes, o que dificulta sua replicação. Entretanto, as etapas gerais para reproduzi-lo são as seguintes:

1. Crie uma promoção que combine uma condição de valor mínimo de pedido com um item de presente.
2. Adicione itens qualificados ao carrinho para atender à condição de valor mínimo da promoção.
3. Prossiga para o checkout.
4. Observe se o item do brinde é exibido ou pode ser selecionado na interface de usuário do checkout. Em alguns casos, a promoção parece ter sido aplicada ao pedido, mas o brinde não aparece na interface do usuário.



## Workaround


Não há nenhuma solução alternativa disponível para esse problema.





