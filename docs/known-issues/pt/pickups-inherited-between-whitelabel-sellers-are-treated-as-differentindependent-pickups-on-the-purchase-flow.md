---
title: 'As pick-ups herdadas entre os vendedores Whitelabel são tratadas como pick-ups diferentes/independentes no fluxo de compra'
id: mfLw2RDV0C7cXNic5CwoA
status: PUBLISHED
createdAt: 2022-05-12T14:52:12.808Z
updatedAt: 2022-11-25T21:52:15.347Z
publishedAt: 2022-11-25T21:52:15.347Z
firstPublishedAt: 2022-05-12T14:52:13.102Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: as-pickups-herdadas-entre-os-vendedores-whitelabel-sao-tratadas-como-pickups-diferentesindependentes-no-fluxo-de-compra
locale: pt
kiStatus: Backlog
internalReference: 438630
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Há um recurso no módulo de Logística para herdar pontos de coleta entre contas de franquia e, portanto, entre vendedores de whitelabel. Enquanto registrados em um vendedor X, eles aparecerão como opções de pickup para um vendedor Y, de acordo com o que está configurado na estratégia de envio. Embora eles sejam os mesmos, sua identificação será diferente entre cada vendedor, e assim eles serão vistos como opções de retirada diferentes e independentes.

A questão é que a experiência de compra será comprometida quando o cliente quiser obter os itens de seu carrinho nesta pickup, mas eles estão vindo de vendedores diferentes por trás de tudo. Eles podem ser mostrados várias vezes na lista de pontos de coleta (um por vendedor WL), e cada um deles cobrirá apenas itens específicos (os fornecidos por cada vendedor WL).

Também é importante considerar que o frontend nativo da caixa não oferece a opção de selecionar diferentes pontos de retirada para diferentes itens no carrinho (embora fossem de diferentes vendedores regulares, o que não se aplica a um cenário SWL). Portanto, você não pode comprar o carrinho inteiro nesta "mesma" opção de ponto de retirada. Os itens restantes, que não são cobertos pelo pickup selecionado, serão oferecidos para serem entregues em um endereço - se for um canal de entrega disponível para o contexto, caso contrário, eles serão mostrados como "_selecionado outro pickup ou remover do carrinho_".



## Simulação


Não há um cenário rápido para reproduzir o problema, mas você só precisa de dois itens provenientes exclusivamente de dois vendedores diferentes (pode ser o vendedor 1 e um de seus SWLs), e há uma única pickup herdada do SWL para o vendedor 1.



## Workaround


N/A

