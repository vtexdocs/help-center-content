---
title: 'Credit Control - Visão Geral'
id: 6v9AaldPvUmUCcyEgwKwSC
status: DRAFT
createdAt: 2017-12-06T20:30:52.367Z
updatedAt: 2020-08-10T12:46:12.258Z
publishedAt: 
firstPublishedAt: 2017-12-06T20:33:54.235Z
contentType: tutorial
productTeam: Financial
author: 6xBnaVsQ7K60kemi2U2Q6w
slug: credit-control-visao-geral
locale: pt
legacySlug: credit-control-visao-geral
subcategory: 7EWKfPIGfmI0G8iMYK8Aiy
---

<div class="alert alert-warning">
<strong>ATENÇÃO:</strong> o Credit Control foi descontinuado em <strong>dezembro de 2018</strong>. Agora, para sua loja oferecer crédito como meio de pagamento direto no checkout, é necessário <a href="https://help.vtex.com/pt/tutorial/customer-credit-visao-geral">utilizar o Customer Credit</a>.</br>
Para saber como configurá-lo na sua loja, siga os passos descritos <a href="https://help.vtex.com/pt/tracks/customer-credit-como-comecar">aqui</a>. 
</div>


## O que é

O Credit Control é o módulo da VTEX que permite ao lojista habilitar o pagamento no Smartcheckout™ com crédito da loja, além de controlar títulos de cobrança e limites de crédito das contas de seus clientes.

## Por que foi criado

A demanda por controle de crédito tem crescido no e-commerce, e – para atendê-la – vários clientes VTEX vinham integrando suas lojas a sistemas externos. 

Embora esta seja uma escolha válida, ela reduz a eficiência da sua operação, uma vez que torna-se necessário gerenciar um serviço a mais.

Por isso criamos o Credit Control – para que o controle de crédito seja feito dentro do sistema da VTEX, sem necessidade de usar ferramentas externas.

## Como funciona

![Fluxo básico do Credit Control](//images.contentful.com/alneenqid6w5/35jUk6EVksKUQi8EaU6caO/aa5ac9a4af1c972a8bba3cc10ab347b8/credit-control-flow_pt.gif)

*Fluxo básico de como funciona o Credit Control nas lojas VTEX.*

Por ter sido desenvolvido na VTEX, o Credit Control está plenamente integrado ao sistema já existente do SmartCheckout através do seu conector – o que significa que a experiência de compra dos seus clientes permanece a mesma. O admin do Credit Control pode ser acessado pelo menu principal do painel administrativo da VTEX.

Você pode escolher os usuários que receberão crédito, definir o limite de crédito para cada um deles e gerenciar individualmente cada título.

Esse modelo se adapta a diferentes regras de negócio. Sua loja pode, por exemplo, conceder crédito ao cliente final ou a um conjunto de revendedores dos seus produtos. 

O Credit Control pode ser utilizado tanto pela interface web do Admin quanto pela API. Pra esta última, confira a documentação no [VTEX Developer Docs](/pt/developer-docs).

## Conceitos

### Conta corrente

Um cliente que faça uma compra com crédito deve ter uma conta no Credit Control. Esta conta é composta pelo __limite de crédito__, uma __descrição__, um valor de __tolerância__ e alguns identificadores.

É possível administrar contas importando, exportando e as editando em massa usando as funcionalidades de Importação e Exportação em formato .csv.

### Limite de crédito

Para cada cliente ou representante ao qual sua loja concede crédito, você deve definir um limite de crédito. Esse limite indica o valor máximo de crédito que essa pessoa pode obter.

Se ela tentar fazer uma compra usando um valor acima do limite o usuário verá uma mensagem de erro no Checkout e a compra não será efetuada.

É possível configurar um valor de __tolerância__, que é uma porcentagem que o cliente é permitido passar de seu limite de crédito sem bloquear a compra.

### Título

O título é o instrumento emitido por sua loja e destinado aos seus clientes ou representantes que utilizam o crédito. Ele é composto por __valor__, __data de vencimento__, __link de pagamento__ e alguns identificadores.

Assim como as contas, você pode importar, exportar e editar em massa os dados de títulos usando as funcionalidades de Importação e Exportação de arquivos em formato .csv.

## Interessado(a)?

Apesar de o Credit Control já estar sendo usado por alguns clientes VTEX, ele ainda está em Beta. Temos planejadas muitas novas funcionalidades, mas estamos sempre abertos a ouvir sobre as necessidades do seu negócio para atendê-lo melhor.

Se você gostaria de dar crédito aos clientes da sua loja ou tem clientes que gostariam de usar o módulo por favor entre em contato com o [Suporte da VTEX](https://support.vtex.com/hc/pt-br/requests). Iremos te ajudar a identificar se esse módulo já atende suas necessidades ou se podemos melhorá-lo para atendê-lo.

Estamos trabalhando para que num futuro próximo a ferramenta atinja um nível de maturidade que nos permita fornecer tutoriais que lhes dêem total autonomia no uso do módulo, dispensando a necessidade do Suporte.
