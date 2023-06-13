---
title: Checkout dispara os eventos de pageview do Google Analytics multiplicados por rastreador
id: 1XMmCfDdKVLEZ5SFq7TyrO
status: PUBLISHED
createdAt: 2022-05-12T14:51:41.067Z
updatedAt: 2022-11-25T21:49:12.329Z
publishedAt: 2022-11-25T21:49:12.329Z
firstPublishedAt: 2022-05-12T14:51:41.383Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-dispara-os-eventos-de-pageview-do-google-analytics-multiplicados-por-rastreador
kiStatus: Fixed
internalReference: 350780
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A implementação do Google Analytics do Checkout está disparando o evento de pageview uma vez por rastejador, mesmo que o rastejador não tenha a intenção de rastrear as informações de pageview.

Considere que as tags criadas para rastrear outros tipos de informações, como uma tag de evento, são declaradas como rastreadores.
Além disso, um rastreador é criado toda vez que o evento é disparado - portanto, se você tiver uma tag para rastrear as diferentes etapas de checkout como eventos, muitos rastreadores podem ser criados à medida que o usuário se movimenta através do fluxo de compra.

Em nossa implementação para Checkout v5 / v6, cada etapa de checkout (declarada na URL com um #hash diferente) aciona uma pageview para GA. Considerando os vários rastreadores criados, dispararemos o evento de pageview muito mais do que deveria ser submetido a cada etapa de mudança no carrinho / página de checkout.

Efeitos colaterais:

Há uma chance de registrar mais pageviews do que realmente ocorreu (embora a GA pareça deduplicá-las).

As lojas que utilizam a solução empresarial Google Analytics 360 estão sujeitas a limitações e regras de preços baseadas na quantidade de informações submetidas à GA; os rastreadores acumulados e as informações repetidas podem realmente gerar um grande volume de acessos, o que é definitivamente crítico para estas lojas.

É possível coletar mais informações sobre este tópico, analisando outros casos similares.




## Simulação



1- Em uma loja, configure o Google Tag Manager com um ambiente especial que tenha as tags para reproduzir o problema.

2- A configuração deve consistir de uma etiqueta comum de exibição de página GA (versão UA) e uma etiqueta de evento que será disparada a cada mudança de etapa do checkout.


3- Habilitar o ambiente junto com a visão Tag Assistant.

4-Instale a extensão Google Analytics Debugger Chrome, pois ela ajudará a mostrar os rastreadores criados e os eventos de pageview sendo enviados à GA.

5- Na URL especial acima, ative a extensão, adicione um item ao carrinho;

6- Navegue entre as etapas de checkout para ver os eventos multiplicados.







## Workaround



É possível colocar o snippet `window.vtex.gtmId = ""`; no arquivo checkout6-custom.js e isto possivelmente evitará que eventos de exibição de páginas nativas sejam rastreados, evitando assim a duplicação de informações.

Esta solução pode ter efeitos colaterais inesperados sobre outros eventos que também são acionados pelo checkout, como o enriquecimento da camada de dados, e também sobre o fato de que os eventos de visualização de página devem ser coletados à sua própria maneira em uma GTM / customizada criada Implementação da GA.

