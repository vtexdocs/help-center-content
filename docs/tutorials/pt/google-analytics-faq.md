---
title: 'Google Analytics: FAQ'
id: 2VRtB07muo3vwO6KEmMVn0
status: PUBLISHED
createdAt: 2021-12-17T18:41:26.175Z
updatedAt: 2023-03-31T15:22:28.277Z
publishedAt: 2023-03-31T15:22:28.277Z
firstPublishedAt: 2021-12-17T18:53:43.536Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: google-analytics-faq
legacySlug: google-analytics-faq
subcategory: 1luKrYptdi8WoMYckakUaM
---

## Como instalar o Google Analytics na sua loja?

A instalação é feita através do [Google Tag Manager](https://help.vtex.com/tutorial/integracao-com-o-google-tag-manager#), como descrita no artigo [Configurar Google Analytics em loja VTEX](https://help.vtex.com/pt/tutorial/how-to-setup-google-analytics-in-vtex-store--G2P0rmSrEiqCcmUMyUUwG#).

## De onde vêm os dados exibidos no Google Analytics? O que são tags do Google?

A instalação e configuração do Google Analytics se baseia em incluir tags (scripts pré determinados) no front end da sua loja.

Em geral, essas tags correspondem a ações dos usuários. Por exemplo, um script específico pode ser disparado toda vez que há um novo acesso na loja, registrando no Google Analytics informações sobre aquele acesso. Pode haver uma tag de conversão, cujo disparo ocorre ao carregar a página que confirma para o cliente a conclusão do pedido.

A informação disponível na plataforma do Google é proveniente dos disparos dessas tags. Portanto, a VTEX não envia dados para o Google Analytics.

## O que são modelos de atribuição?

Modelos de atribuição ditam a metodologia usada por uma plataforma para atribuir uma causa a determinado evento. Quando falamos de Google Analytics, isso significa definir se determinada venda em uma loja aconteceu em decorrência de um anúncio em uma rede social ou de um email marketing, por exemplo.

Saiba mais sobre [modelos de atribuição no Google Analytics.](https://support.google.com/analytics/answer/1662518?hl=pt-br)

## Por que existe divergência nas métricas exibidas na VTEX e no Google Analytics?

Há diferenças na forma como cada plataforma obtém os dados da sua loja e isso pode resultar em números diferentes na sua análise. Abaixo citamos alguns dos casos mais comuns e explicamos como interpretar essas diferenças.

### Transações

Divergências no registro de transações costumam derivar de alguma irregularidade no disparo da [tag do Google Analytics](https://help.vtex.com/en/tutorial/how-to-setup-google-analytics-in-vtex-store--G2P0rmSrEiqCcmUMyUUwG#). Nesse caso, pode haver duplicidade ou falha de disparo.

Além disso, integrações podem ser construídas de modo que acabem não disparando certas tags na sua frente de loja. Por exemplo, há integrações que usam um [app de pagamento](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-app) e finalizam a compra sem direcionar o cliente à página de confirmação de pedido, como a integração desenvolvida pela AME Digital. Transações sempre serão registradas na VTEX, mas, nesse caso, é provável que não seja registrada no Google Analytics, gerando divergência.

### Atribuição de vendas

É normal que existam diferenças entre a atribuição no módulo da VTEX de **Pedidos** e no Google Analytics, pois são ferramentas diferentes com modelos de atribuição diferentes e que captam informações através de cookies diferentes.

As informações de UTM reconhecidas pela VTEX podem ser verificadas no painel de ferramentas de desenvolvedor do seu navegador, no objeto `marketingData` do [OrderForm.](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview#orderform-fields) Saiba mais neste artigo sobre [UTMs de marketing no Checkout.](https://help.vtex.com/pt/tutorial/identificar-se-utms-de-marketing-estao-sendo-passadas-para-o-checkout--6kjHHfOWIgeI26qcQSU4Wg#)

Já o Google Analytics, usa, por padrão, o modelo de Última interação.
Também é possível utilizar diferentes modelos, descritos na [documentação do Google Analytics sobre modelos de atribuição.](https://support.google.com/analytics/answer/1662518?hl=pt-br)

Se você também analisa dados de anúncios no Facebook, é possível encontrar outras divergências. Por exemplo, o Facebook levará em consideração clientes que viram o anúncio e compraram em algum momento posterior, mesmo que tenham chegado à loja por outro caminho no momento da compra.

A diferença na forma de atribuição não afeta em nada a venda em si, apenas a interpretação de cada plataforma.

### Sessões

Assim como há formas diferentes de atribuir a origem de eventos que ocorrem na sua loja, há diferentes formas de definir sessões. O conceito de sessão utilizado pela VTEX é pensado para se aproximar do [conceito de sessão do Google Analytics](https://support.google.com/analytics/answer/2731565?hl=pt-BR#time-based-expiration&zippy=%2Cneste-artigo), mas não é uma réplica.

Por isso, eventos que são interpretados como sessões na VTEX podem não ser interpretados da mesma forma no Google Analytics e vice-versa.

Sendo assim, é importante que a equipe da sua loja realize análises baseadas em uma só fonte. Análises que comparam fontes diferentes, com conceitos diferentes de sessão, estão sujeitas a distorções nos resultados.

Apesar das diferenças, vale notar que ambas as plataformas consideram que uma sessão foi encerrada após 30 minutos de inatividade do usuário.

### Funil de vendas

Assim como sessões são registradas pela VTEX, há uma interpretação dos dados de navegação entre as páginas de produto e o fluxo do carrinho de compras. Com isso, a VTEX gera a visualização do funil de vendas.

Já o [Google Analytics tem um funil de vendas gerado automaticamente](https://support.google.com/analytics/answer/6014872#zippy=%2Cin-this-article%2Cneste-artigo), baseado nas tags do Google, configuradas na sua frente de loja.

Além disso, você pode configurar um outro funil de vendas no Google Analytics, que possibilita uma visão customizada e melhor controle da jornada de compra. Confira este artigo sobre como [implementar este funil de vendas no Google Analytics](https://help.vtex.com/en/tutorial/configurar-funil-de-vendas-no-google-analytics#).
