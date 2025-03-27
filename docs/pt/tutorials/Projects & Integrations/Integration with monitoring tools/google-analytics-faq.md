---
title: 'Google Analytics: FAQ'
id: 2VRtB07muo3vwO6KEmMVn0
status: PUBLISHED
createdAt: 2021-12-17T18:41:26.175Z
updatedAt: 2024-10-17T15:04:11.365Z
publishedAt: 2024-10-17T15:04:11.365Z
firstPublishedAt: 2021-12-17T18:53:43.536Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: google-analytics-faq
locale: pt
legacySlug: google-analytics-faq
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

Confira abaixo algumas das dúvidas mais frequentes acerca de Google Analytics para lojas VTEX.

## Como instalar o Google Analytics na sua loja?

A instalação é feita através do [Google Tag Manager](https://help.vtex.com/tutorial/integracao-com-o-google-tag-manager#), como descrita no artigo [Configurar Google Analytics em loja VTEX](https://help.vtex.com/pt/tutorial/how-to-setup-google-analytics-in-vtex-store--G2P0rmSrEiqCcmUMyUUwG#).

## De onde vêm os dados exibidos no Google Analytics? O que são tags do Google?

A instalação e configuração do Google Analytics se baseia em incluir tags (scripts pré determinados) no front end da sua loja.

Em geral, essas tags correspondem a ações dos usuários. Por exemplo, um script específico pode ser disparado toda vez que há um novo acesso na loja, registrando no Google Analytics informações sobre aquele acesso. Pode haver uma tag de conversão, cujo disparo ocorre ao carregar a página que confirma para o cliente a conclusão do pedido.

A informação disponível na plataforma do Google é proveniente dos disparos dessas tags. Portanto, a VTEX não envia dados para o Google Analytics.

## O que são modelos de atribuição?

Modelos de atribuição ditam a metodologia usada por uma plataforma para atribuir uma causa a determinado evento. Quando falamos de Google Analytics, isso significa definir se determinada venda em uma loja aconteceu em decorrência de um anúncio em uma rede social ou de um email marketing, por exemplo.

Saiba mais sobre [modelos de atribuição no Google Analytics.](https://support.google.com/analytics/answer/1662518?hl=pt-br)

## Por que as métricas exibidas na VTEX e no Google Analytics são diferentes?

Há diferenças na forma como cada plataforma obtém os dados da sua loja e isso pode resultar em números diferentes na sua análise. Abaixo citamos alguns dos casos mais comuns e explicamos como interpretar essas diferenças.

### Transações

Como a VTEX é responsável por processar transações da sua loja, todas as transações são registradas na plataforma. Entretanto, no caso do Google Analytics, há casos que podem gerar irregularidade ou falha no disparo da tag correspondente. Exemplos incluem:

- Navegadores com configurações rígidas de privacidade.
- Navegadores com bloqueio de Javascript.
- Bloqueadores de anúncios.
- Erro de configuração da camada de dados do Google Analytics. Veja a documentação oficial do Google para saber mais sobre como seu time de desenvolvimento pode [configurar a camada de dados do Google Analytics 4](https://developers.google.com/tag-manager/ecommerce-ga4).
- Tag de transação dispara mesmo com transações que não foram concluídas com sucesso.
- Falha ou duplicidade na exibição da página de confirmação do pedido, caso a tag de transação esteja vinculada à exibição desta página.

>ℹ️ Considere também que há um atraso de até 48h no registro de dados de transações no Google Analytics.

Além disso, integrações podem ser construídas de modo que acabem não disparando certas tags na sua frente de loja. Por exemplo, há integrações que usam um [app de pagamento](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-app) e finalizam a compra sem direcionar o cliente à página de confirmação de pedido, como a integração desenvolvida pela AME Digital. Transações sempre serão registradas na VTEX, mas, nesse caso, é provável que não seja registrada no Google Analytics, gerando divergência.

### Atribuição de vendas

É normal que existam diferenças entre a atribuição nas visualizações de dados da plataforma VTEX e no Google Analytics, pois são ferramentas diferentes com [modelos de atribuição](https://help.vtex.com/pt/tutorial/google-analytics-faq--2VRtB07muo3vwO6KEmMVn0#o-que-sao-modelos-de-atribuicao) diferentes e que captam informações através de cookies diferentes.

As informações de UTM reconhecidas pela VTEX podem ser verificadas no painel de ferramentas de desenvolvedor do seu navegador, no objeto `marketingData` do [OrderForm](https://developers.vtex.com/docs/guides/orderform-fields). Saiba mais neste artigo sobre [UTMs de marketing no Checkout](https://developers.vtex.com/docs/guides/check-marketing-utms-used-at-checkout).

Já o Google Analytics, usa, por padrão, o modelo de Última interação.
Também é possível utilizar diferentes modelos, descritos na [documentação do Google Analytics sobre modelos de atribuição](https://support.google.com/analytics/answer/1662518?hl=pt-br).

Se você também analisa dados de anúncios no Facebook, é possível encontrar outras divergências. Por exemplo, o Facebook leva em consideração clientes que viram o anúncio e compraram em algum momento posterior, mesmo que tenham chegado à loja por outro caminho no momento da compra.

A diferença na forma de atribuição não afeta em nada a venda em si, apenas a interpretação de cada plataforma.

### Sessões

Assim como há formas diferentes de atribuir a origem de eventos que ocorrem na sua loja, há diferentes formas de definir sessões. O conceito de sessão utilizado pela VTEX é pensado para se aproximar do [conceito de sessão do Google Analytics](https://support.google.com/analytics/answer/12798876), mas não é uma réplica.

Por isso, eventos que são interpretados como sessões na VTEX podem não ser interpretados da mesma forma no Google Analytics e vice-versa.

Sendo assim, é importante que a equipe da sua loja realize análises baseadas em uma só fonte. Análises que comparam fontes diferentes, com conceitos diferentes de sessão, estão sujeitas a distorções nos resultados.

Apesar das diferenças, vale notar que ambas as plataformas consideram que uma sessão foi encerrada após 30 minutos de inatividade do usuário.

### Funil de vendas

A VTEX gera uma visualização do funil de vendas da sua loja a partir dos registros de navegação que a plataforma gera, desde as páginas de produto até o fluxo de carrinho de compras e checkout.

Já o Google Analytics disponibiliza um funil de vendas gerado automaticamente, baseado nas tags do Google, configuradas na sua frente de loja. Saiba mais sobre [como o Google gera esta visualização de funil](https://support.google.com/analytics/answer/6014872#zippy=%2Cin-this-article%2Cneste-artigo).

Por serem baseados em informações diferentes, essas visualizações de funil podem apresentar divergências.

Você pode configurar um outro funil de vendas no Google Analytics, que possibilita uma visão customizada e melhor controle da jornada de compra. Confira este artigo sobre como [implementar este funil de vendas no Google Analytics](https://help.vtex.com/en/tutorial/configurar-funil-de-vendas-no-google-analytics#).

