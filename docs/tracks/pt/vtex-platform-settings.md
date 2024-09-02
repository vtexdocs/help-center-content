---
title: 'Configurações na plataforma VTEX'
id: 37hdzaRUhJqRfXH1bIRXAa
status: PUBLISHED
createdAt: 2019-02-28T23:02:24.211Z
updatedAt: 2022-10-07T19:03:13.682Z
publishedAt: 2022-10-07T19:03:13.682Z
firstPublishedAt: 2019-02-28T23:11:20.994Z
contentType: trackArticle
productTeam: Channels
slug: configuracoes-na-plataforma-vtex
locale: pt
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugPT: integracao-com-a-amazon
---

Feita as configurações na plataforma da Amazon, iremos começar as configurações na plataforma da VTEX.

Durante todo o processo de configuração na plataforma VTEX, tenha sempre em mãos as credenciais e os identificadores fornecidos. O [**ID do vendedor** e o **Token de autorização MWS**](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf#autorizacao-da-vtex-no-painel-da-amazon), por exemplo, são imprescindíveis para configurar a integração dentro da plataforma da VTEX.

## Definição da política comercial na Amazon

Na VTEX, uma [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio em um canal de venda. Ou seja, é por meio da política comercial que você define as configurações que serão aplicadas aos seus produtos na Amazon.

Se as mesmas configurações de catálogo, preço e estratégia de envio da sua loja VTEX forem utilizadas na Amazon, não é preciso [criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) nova, porque uma mesma política comercial pode ser usada para diferentes canais de venda.

Só será necessário [configurar uma política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404) específica, se você tiver algum dos seguintes objetivos:

- Oferecer na Amazon uma seleção diferente de produtos.
- Disponibilizar uma quantidade de estoque diferente.
- Enviar preços diferentes para a Amazon.
- Enviar promoções diferentes para a Amazon
- Configurar outras condições de pagamento.
- Definir uma estratégia de envio diferente.

Para [contratar políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta preencher o [Formulário de Liberação de Política Comercial](https://docs.google.com/forms/d/e/1FAIpQLSe9qCGB_KM_xsV5e9uNe06JE8tMZrWcv6EuHUOmqTiM8oRW7w/viewform). Em caso de dúvidas, entre em contato com o nosso time de Growth Operations em [*Suporte*](https://help.vtex.com/pt/support) selecionando a opção **Comercial** e o tipo de solicitação `Criação de Política Comercial`.

A contratação de política comercial adicional para integrar com [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), [conector certificado (parceiro)](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outras lojas VTEX é isenta de taxas.

## Definição da Estratégia de Envio

Para vender seus produtos na Amazon é preciso determinar uma Estratégia de Envio, ou seja, informar qual será a logística de entrega dos seus produtos. A Estratégia de Envio é composta de três etapas logísticas: [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), [Estoque](https://help.vtex.com/pt/tutorial/o-que-e-um-estoque--23kq5gUdY0QOymOu8QSGcA) e [Doca](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj?&utm_source=autocomplete).

A Política de Envio estabelece o conjunto de regras das condições de frete, ou seja, informações de custo, transporte e tempo de entrega. Além disso, é também por meio Política de Envio que é feita a associação de qual será o local de armazenamento dos seus produtos (Estoque), e qual será o espaço de escoamento desses produtos (Doca).

Se for do seu interesse utilizar a mesma Estratégia de Envio definida para sua loja VTEX na integração com a Amazon, não é necessário criar novas configurações de logística. Se, no entanto, você deseja criar uma Estratégia de Envio específica para o marketplace, é necessário realizar os seguintes passos:

1. [Cadastrar Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio), associada à política comercial usada na integração.
2. [Cadastrar Doca](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), associada à política comercial usada na integração.
3. [Cadastrar Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137), associado à Doca criada no passo anterior.

Caso você queira conferir se as configurações foram realizadas corretamente, você pode fazer uma [simulação de envio](https://help.vtex.com/pt/tutorial/simulacao-de-frete--tutorials_144). O Simulador de envio é uma ferramenta que possibilita checar as condições de entrega do produto sem de fato abrir um pedido.

<div class="alert alert-info">
A Amazon seleciona o frete conforme a <a href="https://help.vtex.com/pt/tutorial/como-montar-a-planilha-de-frete--tutorials_127">planilha</a> exportada pelo lojista. Por isso, é importante que os dados da planilha <a href="https://help.vtex.com/pt/tutorial/importando-e-exportando-planilha-de-estoque--tutorials_2034">exportada</a> correspondam aos da planilha cadastrada na VTEX, para reduzir a chance de erros de divergência.
</div>

### Tempo de custo

Na Amazon existe o campo *"fulfillment latency"*, que é usado para configurar o tempo de preparo da entrega de determinado produto. Para utilizá-lo na configuração com a Amazon, é necessário preencher o campo **Tempo de Custo** no [cadastro da doca](https://help.vtex.com/pt/tutorial/como-cadastrar-doca) associada à [política comercial](#definicao-da-politica-comercial-na-amazon) usada para a Amazon. Caso esse campo não esteja preenchido, a Amazon usará o valor padrão deles (2 dias).

<div class="alert alert-warning">
O preenchimento desse campo é fundamental, porque caso sua loja esteja atrasando na entrega do pedido, sua conta pode ser bloqueada. 
</div>
