---
title: 'Como funciona a integração com o Carrefour'
id: UbtveAQnoQGKOkQIYG0uQ
status: PUBLISHED
createdAt: 2018-09-26T13:35:41.191Z
updatedAt: 2021-07-09T19:05:35.482Z
publishedAt: 2021-07-09T19:05:35.482Z
firstPublishedAt: 2018-10-11T20:58:12.080Z
contentType: tutorial
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slug: como-funciona-a-integracao-com-o-carrefour
locale: pt
legacySlug: como-funciona-a-integracao-com-o-carrefour
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Este artigo tem o objetivo de descrever o fluxo da integração do __Carrefour__ com a VTEX. Explicando como ela funciona, fica mais fácil entender o comportamento esperado de cada uma das etapas:

1. [Produtos](#1-produtos)
2. [Estoque](#2-estoque)
3. [Preço](#3-preco)
4. [Promoções](#4-promocoes)
5. [Pedido](#5-pedido)

## 1. Produtos

### Envio de produtos
O envio de produtos é feito de forma automática, em torno de 8 horas depois de a [configuração da integração](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2) ter sido realizada com sucesso. Para isso, ela se baseia na política comercial cadastrada e envia a primeira carga de produtos. 

Os campos de produto e SKU são enviados juntos, em um lote separado do lote de ofertas (que reúne informações de preço e estoque dos SKUs). Os dois lotes podem subir ao mesmo tempo e o sistema do Carrefour faz a validação.

### Campos enviados
Para os produtos serem exibidos no Carrefour, a integração envia os seguintes campos de _produto_ e _SKU_:

| Produto     | SKU     |
| ---------- | ---------- |
| Nome*       | Nome*       |
| Descrição*       | EAN*       |
| Marca (dependendo da escolha na configuração da integração, a informação vai ser adicionada no título do produto)       | Peso*       |
| Especificações       | Altura*       |
| -       | Largura*       |
| -       | Comprimento*       |
| -       | Imagens*       |
| -       | Especificações       |

_Legenda:_
`*` Campos obrigatórios.<br />

<div class="alert alert-warning">O Carrefour não aceita produtos com variação (mais de um SKU).</div>

### Exibição do produto
Uma vez que os lotes de produto e oferta são enviados com sucesso e validados pelo Carrefour, todas as variações/SKUs de um mesmo produto são exibidas juntas, em um mesmo agrupamento.

<div class="alert alert-info">
Ex: Camisa Azul (produto) | P, M, G (variações/skus)
</div>

### Status do produto
Com todos os produtos processados corretamente e catalogados pelo Carrefour, suas ofertas podem ter os seguintes status:

- __Ativo:__ disponível para venda
- __Inativo:__ indisponível para venda (quando o produto fica sem estoque), mas ele ainda aparece nos resultados de busca

### Atualizações de produto
Ao serem enviados com sucesso pela primeira vez, os produtos passam por um processo de catalogação interno do Carrefour. Com tudo certo, a integração não atualiza as informações de produto: isso iria desfazer as que já foram cadastradas. 

Por exemplo, se a descrição do produto for alterada, a integração não vai atualizá-la no marketplace. Para fazer algum tipo de alteração, você vai precisar entrar em contato direto com o Carrefour.

<div class="alert alert-warning">
<strong>OBS:</strong> o produto não pode ser apagado no painel do Carrefour. Se isso acontecer, a integração não vai conseguir enviá-lo novamente.
</div>

## 2. Estoque
Quando um produto é enviado pela primeira vez, o estoque também é enviado. No entanto, ele é descartado pelo Carrefour, pois eles só aceitam receber os estoques para produtos já catalogados. Essa política existe para que o estoque disponível no marketplace seja sempre o mais atualizado.

Porém, quando a catalogação é concluída, o Carrefour não notifica a VTEX. Isso significa que nossa integração não tem como saber quando é possível enviar os estoques novamente, ficando dependente de atualizações feitas diretamente no Estoque & entrega (módulo da VTEX). No momento em que o Carrefour confirmar a catalogação dos seus produtos, o marketplace vai solicitar à VTEX o envio dos estoques. Mas você pode forçar o envio dessas informações, bastando, para isso, fazer uma alteração qualquer de estoque em cada um dos seus SKUs.

Depois que os produtos recebem a primeira carga de estoque, a atualização é feita SKU por SKU sempre que o estoque na VTEX sofre alguma mudança. Essa atualização é mandada em lotes de 6 em 6 minutos. Isso significa que a integração acumula todas as atualizações da sua loja por 6 minutos e manda tudo de uma vez. Caso a atualização de estoque esteja demorando mais do que o esperado, é provável que haja muitas informações na fila para serem atualizadas.

## 3. Preço
Quando um produto é enviado pela primeira vez, o preço também é enviado. No entanto, ele é descartado pelo Carrefour, pois eles só aceitam receber preços de produtos que já foram catalogados. Essa política existe para que o preço disponível no marketplace seja sempre o mais atualizado.

Porém, o Carrefour não notifica a VTEX quando tudo foi aprovado. Isso significa que nossa integração não tem como saber quando é possível enviar os preços novamente, ficando dependente de atualizações feitas diretamente no Preços (módulo da VTEX). No momento em que o Carrefour confirmar a catalogação dos seus produtos, o marketplace vai solicitar à VTEX o envio dos preços. Mas você pode forçar o envio dessas informações, bastando, para isso, fazer uma alteração qualquer de preço em cada um dos seus SKUs.

Depois que os produtos recebem a primeira carga de preço, a atualização é feita SKU por SKU sempre que os preços na VTEX sofrem alguma mudança. Essa atualização é mandada em lotes de 6 em 6 minutos. Isso significa que a integração acumula todas as atualizações da sua loja por 6 minutos e mandar tudo de uma vez. Caso a atualização de preços esteja demorando mais do que o esperado, é provável que haja muitas informações na fila para serem atualizadas.

<div class="alert alert-warning">
Note que, para preços com validade, o sistema não notifica os afiliados quando a data expira. Assim, o preço base só será enviado na próxima modificação de preços. 
</div>

Para cada SKU, a integração envia apenas o preço final, baseado no retorno da simulação de fulfillment. Em um cenário padrão, o preço enviado vai ser sempre o determinado para a política comercial associada à integração. Porém, existem fatores que podem influenciar no preço final, como promoções e preços fixos.

_`Exemplo 1:` uma promoção que oferece 10% de desconto para uma determinada categoria_

_`Exemplo 2:` na política comercial usada no Carrefour, um SKU tem preço de R$ 10 e um preço fixo de R$ 15. O valor que a integração envia para o marketplace é R$ 15._

<div class="alert alert-warning">
<strong>Atenção:</strong> como a forma de pagamento é dada no marketplace, as regras de pagamento também são determinadas por ele. Por causa disso, a integração não consegue enviar preços diferenciados de acordo com a forma de pagamento.
<br />
<em>Ex: se na VTEX estiver configurada a incidência de juros para pagamentos parcelados, o preço enviado vai continuar sendo o que foi retornado pela simulação de fulfillment.</em>
</div>

## 4. Promoções
Diferente de uma promoção usada para o site da sua loja, uma promoção para marketplace apenas desconta o valor do produto, mas sem indicar que é uma promoção. Ou seja, o preço enviado já está modificado e não há um selo de promoção.

A integração da VTEX com o Carrefour só aplica as promoções que conseguem ser calculadas na simulação de fulfillment. Nesses casos, as seguintes condições são aplicadas:

| Tipo de desconto     | Itens     | Condições     |
| ---------- | ---------- | ---------- |
| Percentual       | Categorias       | Valor mín/máximo do Pedido       |
| Nominal       | Marcas       | Valor mín/máximo do Item       |
| Frete Nominal       | Coleções       | Preço de/por       |
| Frete Percentual       | Produtos       | CEP       |
| Frete Máximo       | -       | Tipo de Frete       |
| Frete Grátis       | -       | -       |

## 5. Pedido
### 5.1 - Fazendo o pedido
Os detalhes do pedido são influenciados diretamente por fatores como entrega, preço e disponibilidade.

#### Frete
O Carrefour consulta, no momento do pedido, a tabela de frete cadastrada na VTEX. Nossa plataforma retorna para eles as opções de frete disponíveis, de acordo com o mapeamento preenchido na configuração da integração. É importante ter em mente que a consulta só é possível se a [API de Frete](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/6FacWWJszKw0Um42uYcQai) for cadastrada no painel do Carrefour.

<div class="alert alert-warning">
OBS: caso nenhum dos campos do mapeamento seja preenchido corretamente, não será possível simular o frete na VTEX. Consequentemente, os pedidos feitos no Carrefour não serão integrados.
</div>

Se a API de Frete não for cadastrada, o Carrefour vai usar uma __tabela de contingência__ para fazer o cálculo. Nesse caso, o Carrefour envia as informações do pedido e a integração tenta fazer um _match_ do frete calculado com a transportadora que mais se adequa dentro da VTEX (usamos o __tipo__ de transportadora como parâmetro). Caso não haja uma correspondência, haverá um erro na integração do pedido. Para solucionar isso, você precisará fazer primeiro o mapeamento de frete e, depois, reprocessar o pedido.

#### Preço/Disponibilidade:
No momento em que o pedido é feito, o Carrefour __não consulta em tempo real__ o preço ou a disponibilidade em estoque dos produtos na VTEX. O marketplace considera apenas as últimas informações enviadas sobre _preço_ e _estoque_.

### 5.2 - Integrando o pedido
Os pedidos realizados no Carrefour têm um status próprio. Na tabela abaixo estão explicações de cada um deles e a correspondência com os status de pedidos na VTEX.

| Status VTEX     | Status Carrefour     | Descrição Status Carrefour     |
| ---------- | ---------- | ---------- |
| Aguardando autorização para despachar       | STAGING       | Pedido novo onde o pagamento não foi aprovado ainda       |
| Carência para cancelamento / Pronto para manuseio /Preparando entrega       | SHIPPING       | Pagamento Aprovado       |
| Faturado       | SHIPPED / CLOSED       | Nota fiscal emitida       |
| Faturado       | SHIPPED / CLOSED       | Pedido despachado       |
| Faturado       | Não tem Status       | Pedido entregue       |
| Cancelado       | Canceled       | Pedido cancelado       |

A VTEX lê o feed de pedidos do Carrefour e faz a integração daqueles que estão com status __Staging__ no marketplace. Os pedidos que estão com qualquer outro status __não são integrados__ e __não aparecem nos logs__ de integração de pedido (seção Integrações no Admin da VTEX). 

Durante o processo, pode ser que o pedido não seja integrado por algum motivo. Você pode conferir o que deu errado clicando na opção _Pedidos_, que fica embaixo do item _Integrações_ da seção _Marketplace_ do menu lateral do Admin. Para resolver o problema, descubra o que deve ser feito em cada um dos [principais erros de integração de pedidos no Carrefour](/pt/faq/erros-de-pedidos-no-bridge-como-resolver--3LmQY3zPfiMYy4m2M0Ak2y#carrefour) e tome a ação necessária. Com tudo feito, basta reprocessar o pedido.

Depois que a integração acontece, os pedidos continuam sendo tratados com o mesmo ID usado no Carrefour.

<div class="alert alert-warning">
<strong>OBS:</strong> pedidos com algum tipo de incidente não são integrados. Caso o incidente ocorra depois da integração do pedido, um aviso vai ser exibido na aba de Rastreamento no Admin da VTEX.
</div>

### 5.3 Interação do pedido
Depois que o pedido foi integrado com sucesso, você pode interagir com ele tanto pelo Admin da VTEX quanto pelo painel de administrador do Carrefour. No entanto, algumas ações podem ou não ser aplicadas nos dois lados.

#### Ações que são refletidas tanto na VTEX quanto no Carrefour:
- Cancelamento de pedido no Carrefour (a integração cancela na VTEX também).
- Faturamento de pedido na VTEX (a integração fatura e atualiza o status do pedido no Carrefour, conforme explicado a seguir no item `D`).

#### Ações que não são refletidas nas duas plataformas:
- Cancelamento de pedido na VTEX (a integração __não consegue cancelar__ no Carrefour).
- Faturamento de pedido no Carrefour (a integração __não consegue faturar__ na VTEX).

### 5.4 Faturando o pedido
Quando um pedido que veio do Carrefour é faturado na VTEX, a integração faz a atualização do status no marketplace para __Shipped__ e, por último, inclui um campo que corresponde a `pedido entregue`. Mas, para que isso aconteça, campos específicos precisam estar preenchidos. Você pode ver mais detalhes sobre o preenchimento deles em nosso [Guia de Integração de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

__1-__ Para alterar o status para __Shipped__, será necessário:
`invoiceKey`, `invoiceNumber`, `trackingUrl`, `trackingNumber`, `courier`, `issuanceDate`.

__2-__ Para alterar o pedido com a informação de __entregue ao cliente__, será necessário:
`courierStatus`: esse campo pode ser populado de modo automático (via [atualizações de rastreio das próprias transportadoras](/pt/faq/quais-transportadoras-disponibilizam-o-rastreio-de-frete)) ou manual, via API ou interface de Pedidos, no módulo de Gerenciamento de pedidos. Quando o campo retornar `finished=true`, a integração envia a informação ao marketplace. Se o campo retornar `finished=false`, o pedido não será alterado com a informação de entrega.

