---
title: 'Configurar promoções de frete'
id: 6Lo5BR61KMiUFAAHGCdgfW
status: PUBLISHED
createdAt: 2019-03-27T19:50:39.607Z
updatedAt: 2024-08-12T13:24:18.788Z
publishedAt: 2024-08-12T13:24:18.788Z
firstPublishedAt: 2019-03-27T20:04:38.299Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
slugEN: configuring-shipping-promotions
legacySlug: configurar-promocoes-de-frete
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Na VTEX, você pode criar várias modalidades de [descontos](/pt/tutorial/como-criar-promocoes--tutorials_320#) para a sua loja. Com promoções de frete, o comprador recebe algum desconto no valor cobrado pela entrega do seu pedido.

O passo a passo para criar uma promoção de frete é o mesmo das [demais promoções regulares](/pt/tutorial/promocao-regular/). Contudo, existem algumas especificidades que devem ser levadas em consideração no momento de configurar esses descontos.

Antes de configurar qualquer promoção de frete, é preciso entender quais são as formas de oferecer o desconto para os compradores. Na VTEX, existem quatro possibilidades de promoção de frete, que podem ser selecionadas no campo **Qual o tipo e valor do desconto?** durante a [criação da Promoção Regular](/pt/tutorial/regular-promotion#quais-sao-os-dados-gerais-desta-promocao). Veja abaixo quais são essas opções.

- **Frete nominal:** um desconto específico para o valor do frete. Exemplo: R$20 de desconto para qualquer frete para a região nordeste.

- **Frete percentual:** abatimento percentual do valor do frete. Exemplo: 50% de desconto no valor do frete para os produtos do departamento infantil.

- **Frete máximo:** permite estabelecer um valor máximo para o frete. Exemplo: os produtos “X” e “Y” terão um frete de no máximo R$20.

- **Frete grátis:** abatimento total do valor do frete. Exemplo: todos os pedidos realizados durante o feriado terão frete grátis.

## Configurações

Com base nos tipos de fretes existentes, é possível criar diferentes modalidades de promoções.

Abaixo explicamos alguns cenários que podem ser configurados na plataforma da VTEX. Contudo, vale lembrar que cabe ao lojista decidir qual é a melhor opção para a realidade do seu negócio.

### Cenário 1

Caso você habilite a opção **Aplicar o desconto somente no frete mais barato**, o desconto do frete será aplicado somente no menor valor estimado para o frete. Esta opção já aparece habilitada por padrão, mas você pode desabilitá-la caso prefira configurar a promoção conforme o [Cenário 3](#cenario-3) ou o [Cenário 4](#cenario-4).

Se a loja configurar a estratégia de envio __Retirada__, que tem custo de R$ 0,00 para o cliente, a promoção pode considerar esse valor como o mais barato e não aplicar o desconto nos fretes de envio. Para garantir que a promoção funcione conforme esperado, aplicando o desconto de frete grátis aos fretes de envio, selecione todos os métodos, exceto __Retirada na Loja__.

#### Configuração
![Aplicar o desconto somente no frete mais barato - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/configurar-promocoes-de-frete_1.png)

#### Resultado
![saggincaso1.2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/configurar-promocoes-de-frete_2.png)

### Cenário 2

Caso você desabilite a opção Aplicar o desconto somente no frete mais barato, o desconto do frete será aplicado em todos os fretes disponíveis.

#### Configuração
![Nenhum frete selecionado -PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/configurar-promocoes-de-frete_3.png)

#### Resultado
![saggincaso2.2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/configurar-promocoes-de-frete_4.png)

### Cenário 3

Caso você habilite somente a opção **Tipo de Frete** e selecione os tipos de frete desejados, o desconto de frete será aplicado a todos os tipos de frete selecionados.

#### Configuração
![Tipo de Frete - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/configurar-promocoes-de-frete_5.png)

#### Resultado
![saggincaso2.2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/configurar-promocoes-de-frete_6.png)

### Cenário 4

Caso você habilite as opções **Tipo de Frete** e **Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente** e selecione os tipos de frete desejados, o desconto de frete será aplicado para todos os tipos de frete selecionados somente quando o cliente escolher o tipo de frete no checkout.

#### Configuração
![Tipo de Frete e Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/configurar-promocoes-de-frete_7.png)

#### Resultado
![saggincaso3.2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/configurar-promocoes-de-frete_8.png)

Em resumo, a função do checkbox **Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente** é de aplicar o desconto somente quando a Transportadora for selecionada.

Durante a configuração no módulo de **Promoções e Taxas**, você pode habilitar mais de uma transportadora para a mesma promoção. Contudo, o seu cliente só poderá selecionar uma transportadora no momento de finalizar a compra.

Outra possibilidade é configurar uma promoção de frete criando uma promoção de campanha. Para saber as especificidades de frete nesta modalidade de desconto, [leia o nosso artigo](/pt/tutorial/promocao-de-campanha).
