---
title: 'Por que minha transportadora não aparece no checkout?'
id: frequentlyAskedQuestions_165
status: PUBLISHED
createdAt: 2017-04-27T22:39:09.470Z
updatedAt: 2023-08-25T15:13:42.026Z
publishedAt: 2023-08-25T15:13:42.026Z
firstPublishedAt: 2017-04-27T23:01:43.444Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-cant-i-see-my-carrier-on-checkout
locale: pt
legacySlug: por-que-minha-transportadora-nao-aparece-no-checkout
---

Para finalizar um pedido na plataforma VTEX, é necessário selecionar uma forma de entrega na etapa de checkout.  

Eventualmente, uma transportadora pode não ser exibida no checkout. Separamos seis cenários em que essa situação pode ocorrer e suas respectivas soluções. 

Vale ressaltar que antes de prosseguir a leitura desse artigo, é preciso garantir que todas as [transportadoras estão cadastradas](/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) corretamente na plataforma. Além disso, todas as soluções são feitas no módulo [Envio](/pt/tutorial/visao-geral-logistics--tutorials_143). 

## Concorrência entre transportadoras do mesmo tipo

No momento de cadastro de uma transportadora, é preciso incluir o [método de envio](/pt/tutorial/como-funciona-o-tipo-de-entrega/) desta transportadora. No checkout, são exibidos os _métodos de envio_ e não o nome das transportadoras.

O checkout exibe sempre a transportadora mais rápida/barata entre as opções de um mesmo métodos de envio. Assim, uma transportadora não aparece no checkout quando outra do mesmo tipo tem menor prazo/custo cadastrado.

> ⚠️ O critério de desempate na concorrência entre transportadoras é a priorização do menor custo de envio.

### Solução

Caso você deseje que todas as transportadoras sejam exibidas, você deve cadastrá-las no módulo **Configurações da loja > Envio > Configurações** como transportadoras com métodos de envio diferentes.

## Transportadora não atende o endereço informado 

Ao cadastrar uma nova transportadora, a [planilha de frete](/pt/tutorial/importar-planilha-de-frete) deve ser preenchida com as faixas de CEP ou polígono para geolocalização que podem ser atendidas por ela. Os campos dessa planilha relativos à localização são `country`, `zipCodeStart` e `zipCodeEnd` e `PolygonName`

Caso o cliente final deseje que um pedido seja entregue em uma região não cadastrada na planilha, a transportadora não aparecerá como opção no checkout.

### Solução

Verifique na [planilha de frete](/pt/tutorial/importar-planilha-de-frete) se as faixas de CEP ou os polígonos de geolocalização configurados atendem o endereço do pedido. 

## Volume do pedido excede o máximo permitido

Caso o volume do carrinho exceda o __volume máximo__ cadastrado na planilha de frete, o pedido é automaticamente ignorado pela transportadora. 

### Solução

Nesse caso, o ideal é validar na configuração da transportadora em **Configurações da loja > Envio > Configurações** se o volume máximo configurado é o mesmo do limite da transportadora.  

## Peso do pedido excede o máximo permitido

Caso o peso dos itens do pedido exceda o __peso máximo__ cadastrado na planilha de frete, o pedido é automaticamente ignorado pela transportadora. 

### Solução

O raciocínio é o mesmo em relação ao item anterior: valide nas configurações da transportadora, em **Configurações da loja > Envio > Configurações**, se o peso máximo cadastrado é o mesmo do limite da transportadora.

Dessa vez, será necessário alterar os valores nos campos `weightStart` e `weightEnd` na planilha de frete. Em seguida, importe o documento novamente para a plataforma. 

## Quebra de pacotes não permitida

É possível habilitar a divisão de um pedido em dois pacotes. Por exemplo: caso um pedido tenha 40kg, mas o peso máximo cadastrado na planilha de frete seja 30kg, é possível autorizar duas entregas em que cada uma transporte 20kg. Se a divisão de carga não estiver habilitada na sua loja e o peso do pedido ultrapassar o limite da transportadora, ela não aparecerá no checkout.

### Solução

[Habilite a divisão de carga](/pt/tutorial/como-funciona-a-divisao-de-carga--tutorials_109) quando a entrega ultrapassar o limite da transportadora. 

## Otimização das opções de entrega no Checkout

Para melhorar a experiência de compra do cliente, a funcionalidade **Otimização das opções de entrega**, também conhecida como _Lean Shipping_, permite que as opções de envio mais caras e demoradas não sejam mostradas ao cliente na tela do Checkout. Desta forma, algumas transportadoras podem ser omitidas em determinados cenários de pedidos.

### Solução

Desabilitar a função [Otimização das opções de entrega no Checkout](/pt/tutorial/otimizacao-das-opcoes-de-entrega-no-checkout--6DeGO9eBSFWe4XkoS0SxAB) em sua loja. 

> ⚠️ Ao desabilitar esta função no Admin VTEX, todas as opções disponíveis de entrega serão exibidas no processo do Checkout. Entretanto, caso a funcionalidade de [múltiplas entregas](/pt/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV#) esteja habilitada na loja e existam opções de entrega diferentes entre os itens selecionados no carrinho, as **Opções de entrega otimizadas** continuarão a ser exibidas. Ou seja, a otimização de entrega será necessária para lidar com os múltiplos pacotes (itens com diferentes opções de entrega).

