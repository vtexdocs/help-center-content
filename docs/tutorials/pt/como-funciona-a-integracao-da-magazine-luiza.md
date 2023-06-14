---
title: 'Como funciona a integração da Magazine Luiza'
id: 3Mm1st1J3yM6Soka4SQsI
status: DRAFT
createdAt: 2018-12-28T12:11:21.713Z
updatedAt: 2020-03-06T13:56:49.721Z
publishedAt: 
firstPublishedAt: 2020-01-24T21:50:41.946Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: como-funciona-a-integracao-da-magazine-luiza
locale: pt
legacySlug: como-funciona-a-integracao-da-magazine-luiza
subcategory: 
---

Este artigo tem o objetivo de descrever o fluxo da integração da VTEX com a Magazine Luiza. Explicando como ela funciona, fica mais fácil entender o comportamento esperado de cada uma das cinco etapas da integração:

1. [Produtos](#1-produtos)
2. [Estoque](#2-estoque)
3. [Preço](#3-preco)
4. [Promoções](#4-promocoes)
5. [Pedido](#5-pedido)

Essa divisão foi pensada para facilitar o entendimento, já que a integração envia para a Magazine Luiza _produto_, _estoque_ e _preço_ como entidades separadas. 

## 1. Produtos

### Campos enviados

Para os produtos serem exibidos na Magazine Luiza, a integração envia os seguintes campos de _produto_ e _SKU_:

| Produto     | SKU     |
| ---------- | ---------- |
|    Nome*    | Nome* |   
| Descrição*  | EAN |    
| Categoria*  | Peso*  | 
| Marca*      | Altura* |
| Especificações* | Largura* |
|     -           | Comprimento*  |      
| -       | Imagens* |
| -       | Especificações¹ |


_Legenda:_<br />
`*` Campos obrigatórios.<br />

Se o envio for realizado com sucesso, você já poderá encontrar os produtos no marketplace.

### Exibição do produto

Caso o mapeamento tenha sido feito corretamente, todas as variações serão exibidas em um único anúncio.

<div class="alert alert-info">
Ex.: 
<br />
<strong>Anúncio</strong> = Forno Elétrico (produto) | 110V, 220V (variações/skus)
</div>

### Atualizações de produto

Uma vez que a integração envia pela primeira vez as informações de Produto e SKU, eles podem ser atualizados posteriormente, obedecendo a alguns procedimentos.

No geral, basta você fazer as modificações pelo Admin VTEX (ou pelo seu ERP) como sempre faz. A integração envia todas as atualizações para a Magazine Luiza automaticamente: se, por exemplo, você alterar na VTEX a descrição de um produto que foi enviado à Magazine Luiza, a integração vai refletir essa mudança automaticamente no marketplace.


### Status de produto
Com tudo certo, os produtos enviados à Magazine Luiza podem ter os seguintes status:

- __Ativo:__ quando o item está disponível para venda.
- __Inativo:__ quando o item _não_ está disponível para venda.


### Compatibilidade de produto

No caso de haver alguma especificação cadastrada apenas no lado da Magazine Luiza, a integração adota uma compatibilidade que apenas adiciona as especificações da VTEX e mantém as que existem na Magazine Luiza.

## 2. Estoque

Os estoques são enviados pela primeira vez junto com o primeiro envio de produtos. A partir daí, os estoques dos anúncios na Magazine Luiza são atualizados automaticamente, SKU por SKU, sempre que há alguma alteração de estoque na VTEX. A atualização demora apenas alguns segundos para refletir no marketplace, mas os logs de estoque podem demorar alguns minutos para aparecer no Admin da VTEX. 

<div class="alert alert-info">
Para acessar os logs, clique na seção <strong>Integrações</strong> do menu lateral do Admin. Uma lista de opções vai se abrir e, então, você deve clicar na opção <strong>Estoque</strong>. 
</div>



## 3. Preço

Os preços são enviados pela primeira vez junto com o primeiro envio de produtos. A partir daí, os preços dos anúncios na Magazine Luiza são atualizados automaticamente, SKU por SKU, sempre que há alguma alteração de preço na VTEX. A atualização demora apenas alguns segundos para refletir no marketplace, mas os logs de preço podem demorar alguns minutos para aparecer no Admin da VTEX. 

Para cada SKU, a integração envia apenas o preço final, baseado no retorno da simulação de fulfillment. Normalmente, o preço enviado é sempre o que foi determinado pela política comercial associada à integração. No entanto, __Promoções__ e __Preços fixos__ podem influenciar o preço final.

<div class="alert alert-info">
<strong>Exemplo 1:</strong>
<br />
Uma promoção que ofereça 10% de desconto para uma determinada categoria.
</div>

<div class="alert alert-info">
<strong>Exemplo 2:</strong>
<br />
Na política comercial usada na Magazine Luiza, um SKU tem preço de R$ 10 e um preço fixo de R$ 15. O valor que a integração envia para o marketplace é R$ 15.
</div>

<div class="alert alert-warning">
<strong>OBS:</strong> a integração não envia preços de acordo com a forma de pagamento. Isso significa que, mesmo se estiver configurada a incidência de juros para pagamentos parcelados, o preço enviado para a Magazine Luiza vai continuar sendo o que foi retornado pela simulação de fulfillment.
</div>


## 4. Promoções

Diferente de uma promoção usada para o site da sua loja, uma promoção para marketplace apenas desconta o valor do produto, mas sem indicar que é uma promoção. Ou seja, o preço enviado já está modificado e não há um selo de promoção.

A integração da VTEX com a Magazine Luiza só aplica as promoções que conseguem ser calculadas na simulação de fulfillment. Nesses casos, as seguintes condições são aplicadas:

| Tipo de desconto| Itens      | Condições |
| ----------      | ---------- | ---------- |
| Percentual      | Categorias | Valor mín/máximo do Pedido|
| Nominal         | Marcas     | Valor mín/máximo do Item |
| Frete Nominal   | Coleções   | Preço de/por |
| Frete Percentual | Produtos   | CEP |
| Frete Máximo | -   | - |
| Frete Grátis | -   | - |

## 5. Pedido

### A) Fazendo o pedido

Os detalhes do pedido são influenciados diretamente por fatores como entrega, preço e disponibilidade.

#### Frete

- consultam a api de fulfillment
- no front retornam as mesmas opçÕes que retornam aqui (?)
- Usam tabela cadastrada lá (?)


- o mapeamento de sla no config só serve para atender transportadoras customizadas na inetgracommerce que não tem aqui na VTEX


Quando a entrega do pedido é realizada pelo seller (no caso, sua própria loja), a Magazine Luiza __não__ faz simulações de frete em tempo real na VTEX. O cálculo é baseado em uma [planilha de frete](/pt/tracks/configurar-integracao-do-mercado-livre?step=4), cadastrada direto na Magazine Luiza.

O marketplace disponibiliza o pedido já com o frete calculado a partir da planilha e com o tipo de entrega escolhido (no checkout da Magazine Luiza, é possível escolher os tipos de entrega `Normal` ou `Expressa`). Dessa maneira, a integração tenta encontrar a transportadora que mais se adequa a esse valor (o parâmetro usado é o _[tipo de transportadora](/pt/tutorial/como-funciona-o-tipo-de-entrega)_), seguindo a lógica abaixo:

- Pedido com entrega `Normal` = a integração escolhe a transportadora com o frete mais *barato* na VTEX
- Pedido com entrega `Expressa` = a integração pega a transportadora com o frete mais *rápido* na VTEX

A Magazine Luiza também oferece um serviço de entregas próprio (tipo de frete FOB), que se chama MagaLu Entregas. Se a sua loja usa essa opção, o SLA de entrega se torna responsabilidade do marketplace e a VTEX apenas integra o tempo estimado de entrega. Saiba mais detalhes sobre [como funciona esta modalidade](/pt/tutorial/como-funciona-o-frete-do-mercado-livre-quando-o-mercado-envios-e-usado).

#### Preço e disponibilidade

No momento em que o pedido é feito, a Magazine Luiza __não consulta em tempo real__ o preço ou a disponibilidade em estoque dos produtos na VTEX. O marketplace considera apenas as últimas informações enviadas sobre _preço_ e _estoque_.

### B) Integrando o pedido

Os pedidos realizados na Magazine Luiza têm um status próprio. Na tabela abaixo estão as explicações de cada um deles e a correspondência com os status de pedidos na VTEX.

| Status VTEX     | Status Magazine Luiza     | Descrição  Status Magazine Luiza   |
| ---------- | ---------- | ---------- |
| Ainda não integrou na VTEX       | confirmed, payment_required, payment_in_process, partially_paid       | Pedidos que ainda não foram pagos, confirmados, creditados ou então estão parcialmente pagos       |
| Aguardando autorização para despachar / Carência para cancelamento / Pronto para manuseio / Preparando entrega       | Paid       | Pedidos que já estão com pagamento aprovado       |
| Faturado       | Invoiced       | Pedidos que já tiveram nota fiscal emitida       |
| Faturado       | Shipped       | Pedidos que já foram despachados para entrega       |
| Faturado       | Delivered       | Pedidos que já foram entregues ao destinatário final       |
| Cancelado       | Cancelled       | Pedidos que foram cancelados       |

A VTEX lê o feed de pedidos da Magazine Luiza e faz a integração daqueles que estão com status __New__ e __Approved__ no marketplace. Os pedidos que estão com qualquer outro status __não são integrados__ e __não aparecem nos logs__ de integração de pedido (seção Integrações no Admin da VTEX).

O ID é o mesmo da integracommerce, mas é diferente do Magazine Luiza.

Durante o processo, pode ser que o pedido não seja integrado por algum motivo. Para erros desconhecidos ou temporários (como throttling, serviços indisponíveis 503, entre outros), a integração tem um retry automático. Essa retentativa só não acontece se o erro já tiver sido mapeado, como é o caso de divergências no valor do pedido, erros de SLA e outros (que você pode conhecer melhor no artigo sobre [erros conhecidos do Magazine Luiza](/pt/faq/erros-de-pedidos-no-bridge-como-resolver#magazine-luiza)). Nesses casos, é preciso que seja realizada alguma ação para que o pedido seja integrado (descritas no mesmo [artigo](/pt/faq/erros-de-pedidos-no-bridge-como-resolver#magazine-luiza)).


### C) Interagindo com o pedido

Depois que o pedido foi integrado com sucesso, você pode interagir com ele tanto pelo Admin da VTEX quanto pelo painel da Magazine Luiza. No entanto, algumas ações podem ou não ser aplicadas nos dois lados.

#### Ações que são refletidas tanto na VTEX quanto na Magazine Luiza

- Cancelamento de pedido na Magazine Luiza - a integração cancela na VTEX também.
- Faturamento de pedido na VTEX - a integração fatura e atualiza o status do pedido na Magazine Luiza, conforme explicado a seguir no item `D`.

#### Ações que não são relfetidas nas duas plataformas:

- Cancelamento de pedido na VTEX - a integração __não cancela__ o pedido na Magazine Luiza.
- Faturamento de pedido na Magazine Luiza - a integração __não fatura__ o pedido na VTEX. 


### D) Faturando o pedido

A integração atualiza o status do pedido na Magazine Luiza sempre que o mesmo é faturado na VTEX ou recebe uma nota fiscal. Mas, para que isso aconteça, campos específicos precisam estar preenchidos na nota. Esse campos variam de acordo com a __modalidade logística do pedido__ (pedido de entrega própria ou entrega feita pela Magazine Luiza). Veja mais detalhes sobre o preenchimento desses campos em nosso [Guia de Integração de ERPs](/pt/tutorial/guia-de-integracao-de-erps-pedidos#fatura).

#### Entrega feita pela própria loja

A integração atualiza o status na Magazine Luiza para __invoiced__, __shipped__ e, por último, __delivered__.

- Para alterar o status para __Invoiced__ será necessário:
  - `issueDate`, `invoiceNumber`, `invoiceKey`, `invoiceUrl`

- Para alterar o status para __Shipped__ será necessário:
  - `trackingNumber`, `trackingUrl`, `courier`

- Para alterar o status para __Delivered__ será necessário:
  - `courierStatus`: esse é um campo que pode ser populado automaticamente (via [atualizações de rastreio das próprias transportadoras](/pt/faq/quais-transportadoras-disponibilizam-o-rastreio-de-frete)) ou manualmente, via API ou interface do Orders (antigo OMS). Quando o campo retornar `finished=true`, então o status do pedido é declarado como delivered e a integração envia isso ao marketplace. Caso o campo retorne `finished=false`, o status do pedido não será alterado para __delivered__, permanecendo no status anterior.

#### Entrega feita pela Magazine Luiza

Nessa modalidade, a integração só atualiza os pedidos que estão com status que vão até __Invoiced__. Isso acontece porque, como a entrega é feita pela Magazine Luiza, é o próprio marketplace que muda os status para __Shipped__ e __Delivered__.

- Para alterar o status para __Invoiced__ será necessário:
  - `issueDate`, `invoiceNumber`, `invoiceKey`, `invoiceUrl`

