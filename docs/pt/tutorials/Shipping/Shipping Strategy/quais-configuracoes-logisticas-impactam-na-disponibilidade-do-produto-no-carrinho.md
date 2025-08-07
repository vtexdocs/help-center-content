---
title: 'Quais configurações logísticas impactam na disponibilidade do produto no carrinho?'
id: NAyBFToRdvlDyOzeeAeNw
status: PUBLISHED
createdAt: 2024-09-27T14:02:13.369Z
updatedAt: 2024-11-04T21:10:23.340Z
publishedAt: 2024-11-04T21:10:23.340Z
firstPublishedAt: 2024-09-27T14:48:21.163Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: which-logistics-settings-can-impact-the-product-availability-in-the-cart
locale: pt
legacySlug: quais-configuracoes-logisticas-impactam-na-disponibilidade-do-produto-no-carrinho
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Quando você configura corretamente o produto e ele [aparece como disponível na vitrine](/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382), pode ocorrer do item se tornar indisponível quando adicionado no carrinho. Diferentes aspectos da [logística](/pt/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) podem estar envolvidos na indisponibilidade do produto no carrinho, e os temas a seguir permitem identificar as possíveis causas:

* [Simulador de envio](#simulador-de-envio)
* [Inventário](#inventario)
* [Estratégia de envio](#estrategia-de-envio)
* [Configurações da política de envio:](#configuracoes-da-politica-de-envio)
    * [Transportadora e planilha de frete](#transportadora-e-planilha-de-frete)
    * [Dimensões e fator cúbico de peso](#dimensoes-e-fator-cubico-de-peso)
    * [Modal](#modal)

<div class="alert alert-warning">
Se a sua loja utiliza a funcionalidade <a href="https://help.vtex.com/pt/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw">Regionalização de sellers</a>, os sellers capazes de enviar o produto para a localidade do cliente devem ter o produto disponível para vendas. Além disso, o status desses sellers precisa ser ativo, pois produtos de sellers inativos não são considerados como disponíveis.
</div>

## Simulador de envio

Um produto pode estar indisponível no carrinho porque a [estratégia de envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) da sua loja não permite a entrega para a localidade do cliente, ou porque não existe quantidade suficiente do produto para vendas no [inventário](/pt/tutorial/gerenciar-inventario--tutorials_139), por exemplo.

Uma forma de testar a existência de uma rota de entrega viável, validar certas configurações logísticas da sua loja e conferir o inventário é usando o **Simulador de envio**.

<div class = "alert alert-info">
Para conhecer o passo a passo de como simular o envio de um produto, veja o artigo <a href="https://help.vtex.com/pt/tutorial/simulador-de-envio--tutorials_144">Simulador de envio</a>.
</div>

## Inventário

Ao adotar qualquer uma dessas estratégias, você mantém a disponibilidade do produto no carrinho com relação ao inventário:

* Garantir a contagem suficiente de itens para vendas (itens [reservados](/pt/tutorial/como-a-reserva-funciona--tutorials_92) não são considerados disponíveis).
    * No Admin VTEX, acesse **Catálogo > Inventário > Gerenciamento de inventário** e altere o valor na coluna `Atualizar contagem` na linha referente ao produto.
* Habilitar a configuração [estoque infinito](/pt/tutorial/gerenciar-inventario--tutorials_139) para o produto. 
    * No Admin VTEX, acesse **Catálogo > Inventário > Gerenciamento de inventário** e habilite o toggle da coluna `Estoque infinito` na linha referente ao produto.

Se o [estoque futuro](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-/supplyLots/-supplyLotId-) estiver configurado para o SKU, o abastecimento desse item poderia levar um tempo a mais que o previsto, e nesse período a indisponibilidade poderia ser por falta de estoque do produto.

<div class="alert alert-warning">
Caso a sua loja tenha <a href="https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex">contas franquia</a>, para que o inventário dessas contas esteja disponível para vendas, os produtos precisam estar vinculados à mesma <a href="https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV">política comercial</a> usada na sua vitrine.
</div>

## Estratégia de envio

Na VTEX, [estratégia de envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) é o nome da relação entre política de envio, estoque e doca. Quando a plataforma realiza o [cálculo de envio](/pt/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) do pedido, para que uma rota de envio seja considerada válida, é necessário que exista ao menos uma combinação desses entes logísticos que possibilite o envio do produto.

Com relação à estratégia de envio, a lista abaixo apresenta as principais situações que causam indisponibilidade do produto no carrinho:

* A [política de envio](/pt/tutorial/politica-de-envio--tutorials_140) está inativa.
* O [estoque](/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) está inativo. 
* A [doca](/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) está inativa.
* Não existe vínculo entre o estoque e a doca. 
* Não existe vínculo entre a doca e a política de envio.
* Não existe vínculo entre a doca e a [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que define os produtos exibidos na vitrine.

<div class = "alert alert-info">
Estas situações devem ser consideradas no contexto da venda. Ter um estoque inativo não causa a indisponibilidade do produto, mas quando somente um estoque atende à rota de envio e ele está inativo, o produto se torna indisponível no carrinho.
</div>

## Configurações da política de envio

[Política de envio](/pt/tutorial/politica-de-envio--tutorials_140) é um conjunto de regras e configurações que definem quais opções de envio serão apresentadas aos clientes na etapa do carrinho. Os principais aspectos de indisponibilidade do produto no carrinho com relação à política de envio são:

* [Transportadora e planilha de frete](#transportadora-e-planilha-de-frete)
* [Dimensões e fator cúbico de peso](#dimensoes-e-fator-cubico-de-peso)
* [Modal](#modal)

Pelo Admin VTEX, essas configurações são feitas em **Envio > Estratégia de envio**, na aba `Política de envio`, ou seja, na página de [edição da política de envio](/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT). Para criar ou alterar uma política de envio por API, utilize os endpoints [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) e [Update shipping policy by ID](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/shipping-policies/-id-).

### Transportadora e planilha de frete

Cada política de envio está associada a uma [planilha de frete](/pt/tutorial/planilha-de-frete--tutorials_127), que é onde você cadastra a [transportadora](/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) e seus valores de envio. 

Com relação às configurações da transportadora, a lista a seguir apresenta as principais causas para indisponibilidade do produto no carrinho:

* O valor do carrinho não atende ao valor mínimo de envio.
* O valor do carrinho excede o valor máximo de envio.
* A quantidade de itens no carrinho não atende ao número mínimo de itens para envio.
* O CEP/localidade do cliente não se encontra na região onde a transportadora entrega.

<div class = "alert alert-info">
As situações acima mencionadas devem ser consideradas no contexto da venda. Se existe uma única política de envio elegível para o envio do produto e as características deste produto estão fora das configurações aceitas pela transportadora, então não existe uma rota de envio válida e o produto se torna indisponível.
</div>

Outras configurações da transportadora que podem impactar na disponibilidade do produto estão relacionadas ao peso e volumetria de itens, como será a seguir.

### Dimensões e fator cúbico de peso

Com relação ao [fator cúbico de peso](/pt/tutorial/calcular-o-fator-cubico-de-peso--tutorials_128), é preciso garantir que o produto se enquadre dentro das **Dimensões do pacote** configurados na política de envio. São elas:

* Soma das dimensões.
* Maior aresta.
* Fator de peso cúbico.
* Fator de peso mínimo.

Caso o produto esteja fora de algum dos limites configurados, ele se tornará indisponível no carrinho.

<div class="alert alert-warning">
Se houver duas políticas de envio válidas para o pedido, sendo uma do tipo entrega e outra do tipo <a href="https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R">retirada</a>, mas o produto não se enquadrar nos limites de dimensões do pacote de uma delas, somente um tipo de envio será apresentado no checkout. Por exemplo, se o peso do produto for menor que o valor de peso mínimo da política de envio para entrega, mas estiver dentro dos limites configurados para a retirada, aparecerá para o cliente somente a opção para retirar o pedido.
</div>

### Modal

O [modal](/pt/tutorial/como-funciona-o-modal--tutorials_125) é a configuração da política de envio que faz com que produtos com características especiais sejam entregues por transportadoras especializadas. Por exemplo, apenas um transporte que ofereça refrigeração é capaz de enviar produtos que exigem resfriamento.

Com relação ao modal, as seguintes situações resultam na indisponibilidade do produto no carrinho:

* Não há uma política de envio que atenda ao tipo de modal configurado no produto.
* O produto não tem modal configurado, mas não há uma política de envio válida para o seu envio, pois as políticas que seriam válidas foram configuradas para entregar exclusivamente produtos com modal.

