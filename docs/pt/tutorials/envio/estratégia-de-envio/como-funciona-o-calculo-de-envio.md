---
title: 'Como funciona o cálculo de envio'
id: tutorials_116
status: PUBLISHED
createdAt: 2017-04-27T22:18:59.694Z
updatedAt: 2023-07-25T19:55:42.137Z
publishedAt: 2023-07-25T19:55:42.137Z
firstPublishedAt: 2017-04-27T23:00:43.230Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: how-shipping-calculation-works
legacySlug: como-funciona-a-regra-de-prioridade-no-calculo-do-frete, teste-legacy-slug
locale: pt
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Na experiência de compra, quando o consumidor insere sua localização no checkout, a plataforma VTEX analisa quais [estratégias de envio](/pt/docs/tutorials/estrategia-de-envio) atendem o pedido e apresenta ao consumidor as opções de envio disponíveis.

> ℹ️ Durante o fluxo de compra, na etapa da vitrine, quando o consumidor ainda não inseriu o seu endereço, os produtos que serão apresentados são aqueles pertencentes a sellers que tenham configurado a funcionalidade [Region](/pt/docs/tutorials/configurar-preco-e-disponibilidade-de-skus-por-region) ou [sellers abrangentes](/pt/docs/tutorials/seller-abrangente), que são aqueles capazes de enviar pedidos para todas as regiões atendidas pela operação do marketplace.

Este artigo apresenta uma visão geral do cálculo de envio e está dividido nas seguintes seções:

- [Seleção de combinações logísticas](#selecao-de-combinacoes-logisticas)
- [Configurações de prioridades na logística](#configuracoes-de-prioridades-na-logistica)
- [Estimativa de tempo de envio](#estimativa-de-tempo-de-envio)

## Seleção de combinações logísticas

Para determinar qual combinação de etapas logísticas configuradas pela loja são as mais vantajosas no fulfillment de um pedido, a plataforma VTEX realiza uma seleção de combinações logísticas para cada tipo de envio:

- **Entrega:** o consumidor recebe o pedido no endereço informado. 
- **Retirada:** o consumidor busca o pedido em um [ponto de retirada](/pt/docs/tutorials/pontos-de-retirada).

> ℹ️ Entrega e retirada possuem os mesmo critérios de seleção, existe apenas um critério adicional na retirada, que será abordado adiante.

A seleção de combinações logísticas acontece de acordo com os seguintes critérios, nesta ordem de aplicação:

1. **Validação de rota logística:** rota logística é um conjunto de [política de envio](/pt/docs/tutorials/politica-de-envio), [doca ](/pt/docs/tutorials/doca)e [estoque](/pt/docs/tutorials/estoque) que atende os critérios de um pedido, incluindo disponibilidade de itens e atendimento à localização do consumidor. Nesta primeira etapa de validação, a plataforma VTEX analisa quais rotas logísticas atendem o envio. São levados em consideração os seguintes aspectos:
<ul>
  <li>**Características da planilha de frete:** como as dimensões, o peso, faixas de CEP e o modal. A [planilha de frete](/pt/docs/tutorials/planilha-de-frete) é preenchida de acordo com o contrato de serviço prestado por [transportadoras](/pt/docs/tutorials/transportadoras-na-vtex), e é necessário que a transportadora atenda o pedido com relação às características dos itens e cobertura da localização do consumidor.</li>
  <li>**Disponibilidade do inventário:** estoque é o local físico de armazenamento de itens, enquanto [inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque) é a relação dos SKUs dos estoques disponíveis para venda. Este critério valida se os itens do pedido estão disponíveis em um estoque, e se esse estoque tem pelo menos uma doca disponível.</li>
</ul>
<br>
  > ⚠️ Para o caso de se tratar do envio de um [kit](/pt/docs/tutorials/o-que-e-um-kit), existem duas condições: <ul> <li>Os componentes do kit devem possuir a mesma [doca](/pt/docs/tutorials/doca).</li> <li>Deve haver disponibilidade de componentes do kit no [inventário](/pt/docs/tracks/inventario).</li> </ul> Para mais informações, veja o artigo [Como é calculado o frete do kit](/pt/docs/tutorials/como-e-calculado-o-frete-do-kit).

2. **Priorização de inventário:** as rotas logísticas selecionadas anteriormente são organizadas tendo o [inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque) como critério de priorização. Quanto menor a quantidade de SKUs do pedido em estoque, maior é a prioridade da rota logística na seleção, de forma que inventários com pequenas quantidades de itens não fiquem represados. A partir disso, é composta uma lista ordenada de rotas logísticas, que vai do item mais prioritário em primeiro lugar, até o menos prioritário em último lugar.
3. **Agrupamento de pacotes:** a plataforma VTEX calcula a separação dos itens do pedido em pacotes, de forma a estimar as divisões de pacotes e [remessas](/pt/docs/tutorials/como-funciona-a-remessa).
4. **Cálculo do preço e prazo de envio:** a plataforma VTEX calcula os prazos e os preços dos pacotes, de forma a reordenar a lista de priorização de rotas logísticas, de acordo com os seguintes critérios, nesta ordem de aplicação:
<ul>
  <li>Menor custo</li>
  <li>Menor prazo</li>
  <li>Menor divisão de pacotes</li>
  <li>[Docas prioritárias](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro)</li>
</ul>
<br>
  > ℹ️ Quando existe um empate entre docas, o critério de desempate é o overhead, que é o valor em dias para a escolha da doca mais vantajosa para determinado envio. Quanto menor o overhead, maiores são as chances de seleção da doca. Vale ressaltar que o overhead não é considerado no cálculo do tempo de envio.

5. **Etapa exclusiva para envio do tipo retirada:** existe um passo adicional na seleção para analisar os [pontos de retirada](/pt/docs/tutorials/pontos-de-retirada). A plataforma VTEX cria uma lista com os pontos de retirada elegíveis, utilizando o critério menor distância entre o ponto de retirada e a localização do consumidor.

O resultado final da seleção de configurações logísticas é uma lista ordenada com as rotas logísticas elegíveis. Na experiência do consumidor no checkout, porém, são apresentadas somente até duas opções de transportadoras para cada tipo de envio:

- **Entrega:** a opção mais rápida e a mais barata.
- **Retirada:** a opção mais rápida e a mais barata.

## Configurações de prioridades na logística

No Admin VTEX, é possível configurar critérios e prioridades diferentes para etapas relacionadas à [logística](/pt/docs/tutorials/fulfillment-logistica-vtex):

- **Docas:** as prioridades são configuradas nos [campos de cadastro da doca](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro).
- **Frete:** os preços de frete são configurados nas [tarifas de envio](/pt/docs/tutorials/tarifas-de-envio), com exceção da [tarifa de doca](/pt/docs/tutorials/custo-final-do-envio), que é um valor adicional opcional, configurado ao adicionar a doca a um estoque.
- **Prazo:** o tempo para envio é configurado na [estimativa de SLA](#estimativa-de-tempo-de-envio).
- **Divisão de pacotes:** os critérios adotados são configurados no módulo Checkout, saiba mais em [divisões de pacotes](/pt/docs/tutorials/divisao-de-pedidos-e-divisao-de-entregas). 

## Estimativa de tempo de envio

A sigla SLA vem de _Service Level Agreement_ e na [logística](/pt/docs/tutorials/fulfillment-logistica-vtex) se refere à estimativa do tempo de envio de um pedido ao consumidor, que deve corresponder às condições firmadas na compra.

O cálculo do SLA é feito utilizando os seguintes campos e parâmetros:

- [Política de envio](/pt/docs/tutorials/estrategia-de-envio): `Horário de funcionamento`, `Fins de semana e feriados`, `Entrega agendada` e `TimeCost` ([planilha de frete](/pt/docs/tutorials/planilha-de-frete)).
- [Doca](/pt/docs/tutorials/doca): `Tempo de custo`.

É possível obter uma estimativa do tempo de envio por meio do [Simulador de envio](/pt/docs/tutorials/simulador-de-envio), sendo que a simulação considera as configurações das [estratégias de envio](/pt/docs/tutorials/estrategia-de-envio) da loja VTEX.

> ℹ️ O resultado obtido com o [Simulador de envio](/pt/docs/tutorials/simulador-de-envio) é apenas aproximado, pois fatores determinantes são conhecidos somente no checkout, tais como disponibilidade de transportadora no horário da compra, tempo de confirmação do pagamento e resultado da [seleção de sellers white label](/pt/docs/tutorials/selecao-de-sellers-white-label).

## Saiba mais	

- [Estratégia de Envio](/pt/docs/tutorials/estrategia-de-envio)
- [Transportadoras na VTEX](/pt/docs/tutorials/transportadoras-na-vtex)
- [Como a reserva funciona](/pt/docs/tutorials/como-a-reserva-funciona)
- [Logística](/pt/docs/tutorials/fulfillment-logistica-vtex)
- [Gerenciar estoque](/pt/docs/tutorials/gerenciar-estoque)
