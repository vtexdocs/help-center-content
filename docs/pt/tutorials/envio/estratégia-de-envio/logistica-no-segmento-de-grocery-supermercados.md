---
title: 'Logística no segmento de Grocery (supermercados)'
id: tutorials_142
status: PUBLISHED
createdAt: 2017-04-27T22:16:54.342Z
updatedAt: 2019-12-31T15:20:20.356Z
publishedAt: 2019-12-31T15:20:20.356Z
firstPublishedAt: 2017-04-27T23:00:45.231Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: logistics-in-the-grocery-segment-supermarkets
legacySlug: logistica-no-segmento-de-grocery-supermercados
locale: pt
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Um dos grandes desafios das operações de e-commerce no nicho de grocery é o fulfillment, por sua diferença de armazenagem dos e-commerces comuns.

O fulfillment nada mais é do que o processo da análise dos pedidos, separação (picking), embalagem (packing) até o despacho das mercadorias. Neste artigo não abordaremos o fluxo do pedido, nem parametrizações do módulo logístico, apenas conceitos de operação:

**Picking**: Processo de separação de produtos na armazenagem, também conhecido por order picking.

**Packing**: Processo de embalagem final dos produtos por pedido, também conhecido por order packing.

## Ausência do armazém

Na maioria das operações convencionais de e-commerce, temos um armazém que representa o estoque. Já na maioria das operações de grocery, esse armazém não é praticado devido à perecibilidade, rápido detrimento das mercadorias (validade) e a grande variedade do mix de produtos.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estrat%C3%A9gia-de-envio/logistica-no-segmento-de-grocery-supermercados_1.jpg)

Neste contexto, para a existência de um armazém que represente o estoque é praticamente necessário o dobro do espaço físico e um grande fluxo de pedidos para escoamento antes do detrimento dos produtos.
Para evitar esta custosa e complexa operação, os grocerys de modo geral, utilizam os próprios pdvs como fonte de estoque, ou seja, os produtos que estão nas gôndolas são os produtos que alimentam o estoque da loja virtual. 

Porém há dois pontos fundamentais neste modelo:

1: A separação dos produtos é feito em meio aos clientes da loja física, sendo assim é necessário determinar horários de corte estratégicos, para que o produto não seja disputado entre os canais.

A melhor prática é realizar o picking em horários noturnos, onde o fluxo de clientes é infinitamente menor em estabelecimentos 24 horas, e nulo em estabelecimentos convencionais. 

2: Existe a possibilidade do produto ser vendido na loja virtual, porém não estar mais disponível na gôndula para o picking, ou seja, o cliente da loja física comprou o produto entre os intervalos de separação.

A melhor prática é possibilitar que o cliente opte por produtos similares já no momento da compra. Ou seja, comprando um sabão em pó da marca **x** aceita receber um sabão em pó da marca **y**. 

Há diversas possibilidades de tratar isso na loja virtual, as mais praticadas são através de “items attachment”, onde possibilitamos explicitar no carrinho de compras a aceitação do similar, ou até mesmo antes do carrinho, quando clicar em comprar o produto, abrir as possibilidades de quais produtos o cliente aceitaria em similaridade ao escolhido. 

Essa lista de produtos pode ser cadastrada em vitrines convencionais do cadastro do sku, como “similares”, “sugestões” ou “ acessórios” e associada aos items attachments.

[Veja mais detalhes sobre attachments](http://vtex.github.io/docs/vtex.js/latest/checkout/index.html).

Caso o cliente revogue a aceitação de similaridade, basta [realizar um change no pedido](http://lab.vtex.com/docs/oms/api/latest/orders/index.html#registrar-mudanas) e criar um vale compras, que por sua vez pode ser automatizado através do [sistema de gift-cards](http://lab.vtex.com/docs/gcs/api/latest/giftcard/index.html#listar-gift-cards).

## Picking _por onda_

A partir de volumes medianos (acima de 30 pedidos diários) o método de picking mais recomendado ao nicho de grocery é o chamado “por onda”. Este método é realizado em dois passos:
1. Agrupa-se todos os produtos porém sem distinção de pedidos. Reduzindo assim as movimentações dentre os endereçamentos das mercadorias.
2. Após a separação dos produtos, dirige-os em uma área onde os pedidos são montados. 

Pode-se realizar essas ondas por transportadora, rotas, docas ou lote.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estrat%C3%A9gia-de-envio/logistica-no-segmento-de-grocery-supermercados_2.jpg)

## Picking _por onda lote_ favorece o Packing

Devido aos diferentes tipos de mercadorias vendáveis no grocery, podemos atribuir o picking “por onda lote” como o mais recomendado a este nicho. Este método nada mais é do que realizar as ondas separadamente por lotes, mais comuns: congelados, refrigerados, frescos, perecíveis, não perecíveis, enlatados e frágeis; confrontando os produtos dos respectivos pedidos após a separação. Assim podem-se determinar prioridades de corte na separação para não detrimento dos produtos. Recomenda-se a respectiva ordem cronológica de priorização:

1. Enlatados
2. Não perecíveis
3. Perecíveis
4. Frescos
5. Refrigerados
6. Frágeis
7. Congelados

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estrat%C3%A9gia-de-envio/logistica-no-segmento-de-grocery-supermercados_3.jpg)

Além de ser imprescindível para a separação, o lote é muito importante no packing, uma vez que os tipos de lotes tem necessidades características e particulares:

**1. e 2. (Enlatados e Não Perecíveis):** Devem ser transportados em caixas de papelão, sem a necessidade de nenhum auxílio de aparatus.
Exemplos: Bebidas, utensílios domésticos, limpeza, higiene pessoal, beleza pessoal, e etc.

**3. (Perecíveis):** Devem ser transportados em bolsas plásticas, preferencialmente separados em sacos plásticos, comumente usados em pesáveis.
Exemplos: Farináceos, grãos, biscoitos, temperos, vegetais, contimentos e etc.

**4. e 5. (Refrigerados e Frescos):** Devem ser transportados em bolsas térmicas, em até 6 horas são conservados sem a necessidade de nenhum auxílio de aparatus.
Exemplos: Massas frescas, carnes, aves, peixes, laticínios, frios e etc.

**6. (Frágeis):** Devem ser transportados em caixas de papelão revestidas de saco bolha, são conservados em até 6 horas. O máximo de cuidado neste lote é mais do que necessário.
Exemplos: Ovos, Frutas, bomboniere, batatas etc.

**7. (Congelados):** Devem ser transportados em caixas térmicas, em até 6 horas são conservados com o auxílio de blocos de gelos, estes gelos devem estar preferencialmente em recipientes plásticos fechados para evitar o envolvimento com água e reaproveitamento do insumo.
Exemplos: Sorvetes, sobremesas, empanados, pratos prontos, hambúrgueres, petiscos e etc.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estrat%C3%A9gia-de-envio/logistica-no-segmento-de-grocery-supermercados_4.jpg)

## Despacho, transporte e entrega

Ao final da “onda por lote” realiza-se o packing e o despacho acontece nas respectivas embalagens para transporte. Devido as diferentes embalagens que comportam o pedido, a distribuição em transportadoras comuns é praticamente impossibilitada, por isso os grocerys necessitam transportadoras dedicadas ou próprias.

No momento da entrega final, os produtos são retirados das suas respectivas embalagens e entregues em sacolas plásticas, com exceção das caixas de papelão e bolsas plásticas, que podem ser entregues ao cliente final.

_Todos os descritivos acima são boas práticas, a assertividade de cada operação sempre é ditada pela segurança com rapidez._
