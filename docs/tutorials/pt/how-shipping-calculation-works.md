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
slug: como-funciona-o-calculo-de-envio
locale: pt
legacySlug: como-funciona-a-regra-de-prioridade-no-calculo-do-frete, teste-legacy-slug
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Na experiência de compra, quando o consumidor insere sua localização no checkout, a plataforma VTEX analisa quais [estratégias de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) atendem o pedido e apresenta ao consumidor as opções de envio disponíveis.

<div class = "alert alert-info">
Durante o fluxo de compra, na etapa da vitrine, quando o consumidor ainda não inseriu o seu endereço, os produtos que serão apresentados são aqueles pertencentes a sellers que tenham configurado a funcionalidade <a href="https://help.vtex.com/pt/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc">Region</a> ou <a href="https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI">sellers abrangentes</a>, que são aqueles capazes de enviar pedidos para todas as regiões atendidas pela operação do marketplace.
</div>

Este artigo apresenta uma visão geral do cálculo de envio e está dividido nas seguintes seções:

- [Seleção de combinações logísticas](#selecao-de-combinacoes-logisticas)
- [Configurações de prioridades na logística](#configuracoes-de-prioridades-na-logistica)
- [Estimativa de tempo de envio](#estimativa-de-tempo-de-envio)

## Seleção de combinações logísticas

Para determinar qual combinação de etapas logísticas configuradas pela loja são as mais vantajosas no fulfillment de um pedido, a plataforma VTEX realiza uma seleção de combinações logísticas para cada tipo de envio:

- **Entrega:** o consumidor recebe o pedido no endereço informado. 
- **Retirada:** o consumidor busca o pedido em um [ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R).

<div class = "alert alert-info">
Entrega e retirada possuem os mesmo critérios de seleção, existe apenas um critério adicional na retirada, que será abordado adiante.
</div>

A seleção de combinações logísticas acontece de acordo com os seguintes critérios, nesta ordem de aplicação:

1. **Validação de rota logística:** rota logística é um conjunto de [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), [doca ](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)e [estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) que atende os critérios de um pedido, incluindo disponibilidade de itens e atendimento à localização do consumidor. Nesta primeira etapa de validação, a plataforma VTEX analisa quais rotas logísticas atendem o envio. São levados em consideração os seguintes aspectos:
<ul>
  <li><b>Características da planilha de frete:</b> como as dimensões, o peso, faixas de CEP e o modal. A <a href="https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127">planilha de frete</a> é preenchida de acordo com o contrato de serviço prestado por <a href="https://help.vtex.com/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE">transportadoras</a>, e é necessário que a transportadora atenda o pedido com relação às características dos itens e cobertura da localização do consumidor.</li>
  <li><b>Disponibilidade do inventário:</b> estoque é o local físico de armazenamento de itens, enquanto <a href="https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139">inventário</a> é a relação dos SKUs dos estoques disponíveis para venda. Este critério valida se os itens do pedido estão disponíveis em um estoque, e se esse estoque tem pelo menos uma doca disponível.</li>
</ul>
<br>
  >⚠️ Para o caso de se tratar do envio de um [kit](https://help.vtex.com/pt/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28), existem duas condições:
>
> * Os componentes do kit devem possuir a mesma [doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).
>
> * Deve haver disponibilidade de componentes do kit no [inventário](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/2XyUVa0UKMyHTmwqyA5Bx6).
>
> Para mais informações, veja o artigo [Como é calculado o frete do kit](https://help.vtex.com/pt/tutorial/como-e-calculado-o-frete-do-kit--frequentlyAskedQuestions_154).

2. **Priorização de inventário:** as rotas logísticas selecionadas anteriormente são organizadas tendo o [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) como critério de priorização. Quanto menor a quantidade de SKUs do pedido em estoque, maior é a prioridade da rota logística na seleção, de forma que inventários com pequenas quantidades de itens não fiquem represados. A partir disso, é composta uma lista ordenada de rotas logísticas, que vai do item mais prioritário em primeiro lugar, até o menos prioritário em último lugar.
3. **Agrupamento de pacotes:** a plataforma VTEX calcula a separação dos itens do pedido em pacotes, de forma a estimar as divisões de pacotes e [remessas](https://help.vtex.com/pt/tutorial/como-funciona-a-remessa--tutorials_118).
4. **Cálculo do preço e prazo de envio:** a plataforma VTEX calcula os prazos e os preços dos pacotes, de forma a reordenar a lista de priorização de rotas logísticas, de acordo com os seguintes critérios, nesta ordem de aplicação:
<ul>
  <li>Menor custo</li>
  <li>Menor prazo</li>
  <li>Menor divisão de pacotes</li>
  <li><a href="https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro">Docas prioritárias</a></li>
</ul>
<br>
  <div class = "alert alert-info">
Quando existe um empate entre docas, o critério de desempate é o overhead, que é o valor em dias para a escolha da doca mais vantajosa para determinado envio. Quanto menor o overhead, maiores são as chances de seleção da doca. Vale ressaltar que o overhead não é considerado no cálculo do tempo de envio.
</div>

5. **Etapa exclusiva para envio do tipo retirada:** existe um passo adicional na seleção para analisar os [pontos de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R). A plataforma VTEX cria uma lista com os pontos de retirada elegíveis, utilizando o critério menor distância entre o ponto de retirada e a localização do consumidor.

O resultado final da seleção de configurações logísticas é uma lista ordenada com as rotas logísticas elegíveis. Na experiência do consumidor no checkout, porém, são apresentadas somente até duas opções de transportadoras para cada tipo de envio:

- **Entrega:** a opção mais rápida e a mais barata.
- **Retirada:** a opção mais rápida e a mais barata.

## Configurações de prioridades na logística

No Admin VTEX, é possível configurar critérios e prioridades diferentes para etapas relacionadas à [logística](https://help.vtex.com/pt/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP):

- **Docas:** as prioridades são configuradas nos [campos de cadastro da doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro).
- **Frete:** os preços de frete são configurados nas [tarifas de envio](https://help.vtex.com/pt/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM), com exceção da [tarifa de doca](https://help.vtex.com/pt/tutorial/custo-final-do-envio--5bwhIO108VA5Y2YOpef9lV), que é um valor adicional opcional, configurado ao adicionar a doca a um estoque.
- **Prazo:** o tempo para envio é configurado na [estimativa de SLA](#estimativa-de-tempo-de-envio).
- **Divisão de pacotes:** os critérios adotados são configurados no módulo Checkout, saiba mais em [divisões de pacotes](https://help.vtex.com/pt/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV). 

## Estimativa de tempo de envio

A sigla SLA vem de _Service Level Agreement_ e na [logística](https://help.vtex.com/pt/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP) se refere à estimativa do tempo de envio de um pedido ao consumidor, que deve corresponder às condições firmadas na compra.

O cálculo do SLA é feito utilizando os seguintes campos e parâmetros:

- [Política de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3): `Horário de funcionamento`, `Fins de semana e feriados`, `Entrega agendada` e `TimeCost` ([planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127)).
- [Doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj): `Tempo de custo`.

É possível obter uma estimativa do tempo de envio por meio do [Simulador de envio](https://help.vtex.com/pt/tutorial/simulador-de-envio--tutorials_144), sendo que a simulação considera as configurações das [estratégias de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) da loja VTEX.

<div class = "alert alert-info">
O resultado obtido com o <a href="https://help.vtex.com/pt/tutorial/simulador-de-envio--tutorials_144">Simulador de envio</a> é apenas aproximado, pois fatores determinantes são conhecidos somente no checkout, tais como disponibilidade de transportadora no horário da compra, tempo de confirmação do pagamento e resultado da <a href="https://help.vtex.com/pt/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">seleção de sellers white label</a>.
</div>

## Saiba mais	

- [Estratégia de Envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
- [Transportadoras na VTEX](https://help.vtex.com/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)
- [Como a reserva funciona](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92)
- [Logística](https://help.vtex.com/pt/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP)
- [Gerenciar estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137)
