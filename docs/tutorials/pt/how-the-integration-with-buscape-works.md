---
title: Como funciona a integração do Buscapé
id: 689SI30FCEGYAeiIY66yAe
status: DRAFT
createdAt: 2018-09-28T17:13:22.994Z
updatedAt: 2021-08-16T13:40:18.167Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:21:14.733Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: como-funciona-a-integracao-do-buscape
legacySlug: como-funciona-a-integracao-do-buscape
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Este artigo tem o objetivo de descrever o fluxo da integração da VTEX com o Buscapé. Explicando como ela funciona, fica mais fácil entender o comportamento esperado de cada uma das cinco etapas da integração:

1. [Produtos](/pt/tutorial/como-funciona-a-integracao-do-mercado-livre#1-produtos)
2. [Estoque](/pt/tutorial/como-funciona-a-integracao-do-mercado-livre#2-estoque)
3. [Preço](/pt/tutorial/como-funciona-a-integracao-do-mercado-livre#3-preco)
4. [Promoções](/pt/tutorial/como-funciona-a-integracao-do-mercado-livre#4-promocoes)
5. [Pedido](/pt/tutorial/como-funciona-a-integracao-do-mercado-livre#5-pedido)

Essa divisão foi pensada para facilitar o entendimento, já que a integração envia para o Buscapé _produto_, _estoque_ e _preço_ como entidades separadas. 

## 1. Produtos

### Campos enviados

Para os produtos serem exibidos no Buscapé, a integração envia os seguintes campos de _produto_ e _SKU_:

| Produto     | SKU     |
| ---------- | ---------- |
|    Nome*    | Nome* |   
| Descrição*  | EAN |    
| Categoria¹  | Peso*  | 
| Marca²      | Altura* |
| Especificações¹ | Largura* |
|     -           | Comprimento*  |      
| -       | Imagens* |
| -       | Especificações¹ |

_Legenda:_<br />
`*` Campos obrigatórios.<br />
`¹` Campos enviados ao Buscapé através da [planilha de mapeamento](/pt/tracks/configurar-integracao-do-mercado-livre?step=5).<br />
`²` O Buscapé usa a informação sobre a marca do produto em sua árvore de categorias. A marca é usada nos anúncios, sendo determinada diretamente pela forma como é feito o mapeamento de categorias.

Se o envio for realizado com sucesso, você já poderá encontrar os produtos no marketplace. Eles vão estar agrupados de acordo com as variações/SKUs enviadas através da [planilha de mapeamento](/pt/tracks/configurar-integracao-do-mercado-livre?step=5).

### Exibição do produto

Caso o mapeamento tenha sido feito corretamente, todas as variações serão exibidas em um único anúncio.

<div class="alert alert-info">
Ex.: 
<br />
<strong>Anúncio</strong> = Camisa Azul (produto) | P, M, G (variações/skus)
</div>

Se o mapeamento __não__ for feito, as diferentes variações do mesmo produto serão exibidas em anúncios separados.

<div class="alert alert-info">
Ex.: 
<br />
<strong>Anúncio 1</strong> = Camisa Azul P  
<br />
<strong>Anúncio 2</strong> = Camisa Azul M 
<br />
<strong>Anúncio 3</strong> = Camisa Azul G 
</div>

### Atualizações de produto

Uma vez que a integração envia pela primeira vez as informações de Produto e SKU, eles podem ser atualizados posteriormente, obedecendo a alguns procedimentos.

No geral, basta você fazer as modificações pelo Admin VTEX (ou pelo seu ERP) como sempre faz. A integração envia todas as atualizações para o Buscapé automaticamente: se, por exemplo, você alterar na VTEX a descrição de um produto que foi enviado ao Buscapé, a integração vai refletir essa mudança automaticamente no marketplace.

No entanto, os campos que são enviados por meio da planilha de mapeamento __não são atualizados automaticamente no Buscapé__. Para o anúncio refletir a mudança, você vai precisar finalizá-lo e reenviar a planilha com as novas informações.

Por fim, no caso das imagens, você vai precisar fazer todas as mudanças direto no painel do próprio Buscapé.

### Status de produto
Com tudo certo, os produtos enviados ao Buscapé podem ter os seguintes status:

- __Ativo:__ quando o item está disponível para venda.
- __Pausado:__ quando o item _não_ está disponível para venda.
- __Finalizado:__ quando o anúncio foi encerrado e não está mais visível no marketplace.

## 2. Estoque

Os estoques são enviados pela primeira vez junto com o primeiro envio de produtos. A partir daí, os estoques dos anúncios no Buscapé são atualizados automaticamente, SKU por SKU, sempre que há alguma alteração de estoque na VTEX. A atualização demora apenas alguns segundos para refletir no marketplace, mas os logs de estoque podem demorar alguns minutos para aparecer no Admin da VTEX. 

<div class="alert alert-info">
Para acessar os logs, clique na seção <strong>Integrações</strong> do menu lateral do Admin. Uma lista de opções vai se abrir e, então, você deve clicar na opção <strong>Estoque</strong>. 
</div>

## 3. Preço

Os preços são enviados pela primeira vez junto com o primeiro envio de produtos. A partir daí, os preços dos anúncios no Buscapé são atualizados automaticamente, SKU por SKU, sempre que há alguma alteração de preço na VTEX. A atualização demora apenas alguns segundos para refletir no marketplace, mas os logs de preço podem demorar alguns minutos para aparecer no Admin da VTEX. 

No entanto, o sistema __não__ notifica os afiliados quando chega a data final de um preço com validade. Isso significa que, quando a validade expira, a integração não atualiza o preço exibido no Buscapé. A mudança só vai acontecer quando o preço base for modificado manualmente na VTEX.

Para cada SKU, a integração envia apenas o preço final, baseado no retorno da simulação de fulfillment. Normalmente, o preço enviado é sempre o que foi determinado pela política comercial associada à integração. No entanto, __Promoções__ e __Preços fixos__ podem influenciar o preço final.

<div class="alert alert-info">
<strong>Exemplo 1:</strong>
<br />
Uma promoção que ofereça 10% de desconto para uma determinada categoria.
</div>

<div class="alert alert-info">
<strong>Exemplo 2:</strong>
<br />
Na política comercial usada no Buscapé, um SKU tem preço de R$ 10 e um preço fixo de R$ 15. O valor que a integração envia para o marketplace é R$ 15.
</div>

<div class="alert alert-warning">
<strong>Atenção:</strong> a integração não envia preços de acordo com a forma de pagamento. Isso significa que, mesmo se estiver configurada a incidência de juros para pagamentos parcelados, o preço enviado para o Buscapé vai continuar sendo o que foi retornado pela simulação de fulfillment.
</div>

## 4. Promoções

Diferente de uma promoção usada para o site da sua loja, uma promoção para marketplace apenas desconta o valor do produto, mas sem indicar que é uma promoção. Ou seja, o preço enviado já está modificado e não há um selo de promoção.

A integração da VTEX com o Mercado Livre só aplica as promoções que conseguem ser calculadas na simulação de fulfillment. Nesses casos, as seguintes condições são aplicadas:

| Tipo de desconto| Itens      | Condições |
| ----------      | ---------- | ---------- |
| Percentual      | Categorias | Valor mín/máximo do Pedido|
| Nominal         | Marcas     | Valor mín/máximo do Item |
| -               | Coleções   | Preço de/por |
| -               | Produtos   | - |

## 5. Pedido

### A) Fazendo o pedido

Os detalhes do pedido são influenciados diretamente por fatores como entrega, preço e disponibilidade.

#### Frete

Quando a entrega do pedido é realizada pelo seller (no caso, sua própria loja), o Mercado Livre __não__ faz simulações de frete em tempo real na VTEX. O cálculo é baseado em uma [planilha de frete](/pt/tracks/configurar-integracao-do-mercado-livre?step=4), cadastrada direto no Mercado Livre.

O marketplace disponibiliza o pedido já com o frete calculado a partir da planilha e com o tipo de entrega escolhido (no checkout do Mercado Livre, é possível escolher os tipos de entrega `Normal` ou `Expressa`). Dessa maneira, a integração tenta encontrar a transportadora que mais se adequa a esse valor (o parâmetro usado é o _[tipo de transportadora](/pt/tutorial/como-funciona-o-tipo-de-entrega)_), seguindo a lógica abaixo:

- Pedido com entrega `Normal` = a integração escolhe a transportadora com o frete mais *barato* na VTEX
- Pedido com entrega `Expressa` = a integração pega a transportadora com o frete mais *rápido* na VTEX

O Buscapé também oferece um serviço de entregas próprio (tipo de frete FOB), que se chama Mercado Envios. Se a sua loja usa essa opção, o SLA de entrega se torna responsabilidade do marketplace e a VTEX apenas integra a informação. Saiba mais detalhes sobre [como funciona esta modalidade](/pt/tutorial/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ).

#### Preço e disponibilidade

No momento em que o pedido é feito, o Buscapé __não consulta em tempo real__ o preço ou a disponibilidade em estoque dos produtos na VTEX. O marketplace considera apenas as últimas informações enviadas sobre _preço_ e _estoque_.

### B) Integrando o pedido

Os pedidos realizados no Buscapé têm um status próprio. Na tabela abaixo estão as explicações de cada um deles e a correspondência com os status de pedidos na VTEX.

| Status VTEX     | Status Buscapé     | Descrição  Status Buscapé   |
| ---------- | ---------- | ---------- |
| Ainda não integrou na VTEX       | confirmed, payment_required, payment_in_process, partially_paid       | Pedidos que ainda não foram pagos, confirmados, creditados ou então estão parcialmente pagos       |
| Aguardando autorização para despachar / Carência para cancelamento / Pronto para manuseio / Preparando entrega       | Paid       | Pedidos que já estão com pagamento aprovado       |
| Faturado       | Invoiced       | Pedidos que já tiveram nota fiscal emitida       |
| Faturado       | Shipped       | Pedidos que já foram despachados para entrega       |
| Faturado       | Delivered       | Pedidos que já foram entregues ao destinatário final       |
| Cancelado       | Cancelled       | Pedidos que foram cancelados       |

A VTEX lê o feed de pedidos do Buscapé e faz a integração daqueles que estão com status __Paid__ no marketplace. Os pedidos que estão com qualquer outro status __não são integrados__ e __não aparecem nos logs__ de integração de pedido (seção Integrações no Admin da VTEX).

Depois de identificados os pedidos com o status __Paid__, eles são integrados na VTEX. É importante ter em mente que o ID usado no Buscapé é diferente do que você vai encontrar na VTEX. No artigo que explica o [funcionamento do carrinho com múltiplos itens do Mecrado Livre](/pt/faq/como-funciona-o-carrinho-com-multiplos-itens-no-mercado-livre), você encontra mais detalhes sobre a lógica por trás da correspondência desses IDs.

Durante o processo, pode ser que o pedido não seja integrado por algum motivo. Para erros desconhecidos ou temporários (como throttling, serviços indisponíveis 503, entre outros), a integração tem um retry automático. Essa retentativa só não acontece se o erro já tiver sido mapeado, como é o caso de divergências no valor do pedido, erros de SLA e outros (que você pode conhecer melhor no artigo sobre [erros conhecidos do Buscapé]((/faq/erros-de-pedidos-no-bridge-como-resolver?locale=en#buscape))). Nesses casos, é preciso que seja realizada alguma ação para que o pedido seja integrado (descritas no mesmo [artigo](/pt/faq/erros-de-pedidos-no-bridge-como-resolver#mercado-livre)).

### C) Interagindo com o pedido
Depois que o pedido foi integrado com sucesso, você pode interagir com ele tanto pelo Admin da VTEX quanto pelo painel de administrador do Buscapé. No entanto, algumas ações podem ou não ser aplicadas nos dois lados.

#### Ações que são refletidas tanto na VTEX quanto do Buscapé:

- Cancelamento de pedido no Buscapé (a integração cancela na VTEX também).
- Faturamento de pedido na VTEX (a integração fatura e atualiza o status do pedido no Buscapé, conforme explicado a seguir no item `D`).

#### Ações que não são relfetidas nas duas plataformas:
- Cancelamento de pedido na VTEX (a integração __não consegue cancelar__ no Buscapé).
- Faturamento de pedido no Buscapé (a integração __não consegue faturar__ na VTEX). 

### D) Faturando o pedido

Quando um pedido que veio do Buscapé é faturado na VTEX, a integração faz a atualização do status no marketplace. Mas, para que isso aconteça, campos específicos precisam estar preenchidos. Esse campos variam de acordo com a __modalidade logística do pedido__ (ME1 ou ME2) e com os diferentes __status__. Você pode ver mais detalhes sobre o preenchimento desses campos em nosso [Guia de Integração de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

#### Mercado Envios 1 (ME1)

Os pedidos que estão ligados a essa modalidade vão direto para o status __Shipped__, sem passar pelo __Invoiced__.

- Para alterar o status para __Shipped__ será necessário:
  - `trackingNumber`

#### Mercado Envios 2 (ME2)
Nessa modalidade, a integração só atualiza os pedidos que estão com status que vão até __Invoiced__. Isso acontece porque, como a entrega é feita pelo Buscapé, é o próprio marketplace que muda os status para __Shipped__ e __Delivered__.

É importante lembrar que, no ME2, o preenchimento dos campos deve levar em conta se a logística é do tipo _Fulfillment_ ou _Crossdocking_:

__Pedidos Fulfillment__
Para alterar o status para __Invoiced__ será necessário:
- Preencher o _XML_ da nota fiscal no campo `embeded`.

__Pedidos Crossdocking__
Para alterar o status para __Invoiced__ será necessário:
- `invoiceKey` e `cfop`

