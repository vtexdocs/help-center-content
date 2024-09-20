---
title: 'Como funciona a integração da CNova/Via Varejo'
id: 1vFbUZUL80SQ0SoySGO8E6
status: DRAFT
createdAt: 2018-07-09T17:57:16.106Z
updatedAt: 2024-09-05T18:32:34.083Z
publishedAt: 
firstPublishedAt: 2018-07-09T18:32:09.384Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: como-funciona-a-integracao-da-cnova-via-varejo
locale: pt
legacySlug: como-funciona-a-integracao-da-cnova-via-varejo
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Este artigo tem como objetivo descrever todo o fluxo da integração com a CNova/Via Varejo. Desta forma, fica mais claro como funciona a integração e o comportamento esperado em cada etapa. O tutorial está dividido em cinco etapas:

1. Produtos
2. Estoque
3. Preço
4. Promoções
5. Pedidos

## 1. Produtos

### Campos enviados 

A integração envia produto, estoque e preços em entidades separadas. Uma vez que os produtos são enviados com sucesso, já possível encontrá-los na CNova/Via Varejo. A integração envia os seguintes campos:
<br />

| Produto     | SKU     |
| ---------- | ---------- |
|    Nome*    | EAN       |   
| Descrição*  | Peso*       |    
|     Marca*  | Altura*       | 
| Categoria na VTEX* | Largura* |
| Especificações  | Comprimento* |
|     -     | Imagens*       |      
| -       | Especificações |

<br />

**Em asterisco os campos obrigatórios.**

Ao serem enviados com sucesso pela primeira vez, a CNova/Via Varejo recebe os produtos e realiza um processo de catalogação interno. Uma vez que são aprovados pela CNova/Via Varejo, eles __não__ permitem que nenhum campo deste seja atualizado através da VTEX. Caso queira fazer alguma alteração nas informações do produto, é necessário alterar diretamente na CNova/Via Varejo. Ou então, apagar o produto na CNova/Via Varejo e refazer todo o processo de integração desde o começo já com as informações atualizadas.

_`Ex:` se a descrição do produto for alterada, a integração não atualizará a descrição que está no marketplace._

Na CNova/Via Varejo, os produtos possuem dois status possíveis:
- __Ativo:__ disponível para venda
- __Inativo:__ indisponível para venda, fazendo com que o produto não apareça no marketplace.

Lá eles ficam agrupados por um produto que possui diversas variações/skus.

_`Ex:` Cafeteira Preta (produto) | 127V e 220V (variações/skus)_

A categoria é enviada em formato de breadcrumb.

_`Ex:` Cozinha > Utensílios > Cafeteiras_

## 2. Estoque

Quando um produto é enviado pela primeira vez, o estoque também é enviado. No entanto, ele é descartado pela CNova/Via Varejo, pois eles só aceitam receber os estoques para produtos já catalogados. Esta política existe para que o estoque disponível no marketplace seja sempre o mais atualizado.

Porém, quando esta aprovação é feita, a CNova/Via Varejo não notifica a VTEX disto. Então, a nossa integração não tem como saber quando podemos enviar os estoques novamente. Desta forma, a integração do estoque fica dependente de alguma atualização feita diretamente em Estoque & Entrega.

Depois que os produtos recebem a primeira carga de estoque, a atualização é feita SKU por SKU sempre que ocorre alguma alteração de estoque na VTEX.

## 3. Preço

Quando um produto é enviado pela primeira vez, o preço também é enviado. No entanto, ele é descartado pela CNova/Via Varejo pois, eles só aceitam receber os preços para produtos já catalogados. Esta política existe para que o preço disponível no marketplace seja sempre o mais atualizado.

Porém, quando esta aprovação é feita, a CNova/Via Varejo não notifica a VTEX disto. Então, a nossa integração não tem como saber quando podemos enviar os preços novamente. Desta forma, a integração dos preços fica dependente de alguma atualização feita diretamente em Preços. 

Depois que os produtos recebem a primeira carga de preço, a atualização é feita SKU por SKU sempre que ocorre alguma modificação de preços na VTEX. No entanto, para preços com validade, quando a data expira o sistema não notifica os afiliados. Desta forma, o preço base só será enviado na próxima modificação de preços.

A integração envia os __preços de lista__ e o __preço final__ para cada SKU. O preço final é enviado de acordo com o retorno da simulação de fulfillment. Em um cenário padrão, o preço enviado será sempre o determinado para a política comercial associada à integração. Porém, existem fatores que podem influenciar no preço final, como __promoções__ e __preços fixos__.

_`Ex1:` promoção de 10% de desconto para determinada categoria_

_`Ex2:` SKU X está R$ 10,00 na política comercial usada na CNova/Via Varejo e tem um preço fixo de R$ 15,00 para essa mesma política. A integração enviará R$ 15,00._

>⚠️ OBS: como a forma de pagamento é feita no marketplace, as regras de pagamento são determinadas por ele. Por conta disto, não conseguimos enviar preços diferenciados em função da forma de pagamento.
>
>
> 
> *Ex: se na VTEX existem juros configurados para pagamentos parcelados, o preço enviado continuará sendo o que a simulação de fulfillment retorna.*

## 4. Promoções

Só são aplicadas promoções que conseguem ser calculadas na simulação de  fulfillment. Neste caso, as seguintes condições conseguem ser aplicadas:

| Tipo de desconto| Itens| Condições |
| ---------- | ---------- | ---------- |
| Percentual | Categorias | Valor mín/máximo do Pedido|
| Nominal    | Marcas     | Valor mín/máximo do Item |
| Frete Nominal| Coleções | Preço de/por |
| Frete Percentual| Produtos| CEP |
| Frete Máximo| - | Tipo de Frete |
| Frete Grátis| - | - |

## 5. Pedidos

### A) Fazendo o pedido

Quando um pedido é feito no marketplace existem alguns pontos que influenciam em seus detalhes, como entrega, preço e disponibilidade.

#### Entrega:

Nesta integração existem dois pontos que influenciarão na entrega: __Cálculo do Frete__ e o __Tempo de Preparo de Envio__. O somatório dos dois será o __Tempo de Entrega Total__.

>ℹ️ Ex:
>
>
> 
> Frete Normal = 3 dias
>
>
> 
> Tempo de Custo = 2 dias
>
>
> 
> Tempo Total de Entrega = 5 dias

- __Frete__

No momento do pedido, por padrão, a CNova/Via Varejo consulta a tabela de frete cadastrada na VTEX e nós retornamos apenas uma opção de frete para eles, sempre ordenando pela opção mais barata. Vale destacar que, para que seja possível realizar a consulta, é necessário cadastrar a [API de Frete](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/69cLhDK7PGOqgSs2EyqMke#api-de-frete) no painel da CNova/Via Varejo.

O lojista tem também a possibilidade de cadastrar na CNova/Via Varejo uma __tabela de contingência__. Dessa forma, se por algum acaso a integração não conseguir consultar o frete na VTEX (ex: instabilidade momentânea) ou a API de Frete não esteja cadastrada no painel deles, a CNova/Via Varejo usa as informações desta tabela. Neste caso, a CNova/Via Varejo nos passa o pedido e a integração tenta fazer um *match* do frete calculado com a transportadora que mais se adequa dentro da VTEX (usamos o nome da transportadora escolhida como parâmetro). Caso a integração não consiga encontrar uma transportadora igual, nós integramos o pedido usando a transportadora mais barata disponível.

- __Tempo de preparo de envio__

O tempo de preparo de envio é baseado no somatório do  campo `Tempo de custo` no Estoque com o `Tempo de Custo` na Doca. E nós enviamos o mesmo tempo de preparo massivamente para todos os produtos.

>ℹ️ Ex:
>
>
> 
> **Estoque A**
>
>
> 
> - Doca 1: Tempo de Custo = 3 dias
>
>
> 
> **Estoque B**
>
>
> 
> - Doca 1: Tempo de Custo = 5 dias
>
>
> 
>
>
> 
> **Doca 1:**
>
>
> 
> - Tempo de Custo = 2 dias
>
>
> 
>
>
> 
> Um pedido com Tempo de Frete = 3 dias, ficará com um Tempo Total de Entrega diferente dependendo de onde o produto sairá.
>
>
> 
>
>
> 
> **Saindo do estoque A:**
>
>
> 
> - Tempo de preparo = 3 + 2 (doca 1) = 5 dias
>
>
> 
> - Tempo de frete = 3 dias
>
>
> 
> - Tempo total de entrega = 8 dias
>
>
> 
> **Saindo do estoque B:**
>
>
> 
> - Tempo de preparo = 5 + 2 (doca 1) = 7 dias
>
>
> 
> - Tempo de frete = 3 dias
>
>
> 
> - Tempo total de entrega = 10 dias

>⚠️ OBS: no caso de usar a tabela de contingência para fazer o cálculo do frete, a CNova não consulta a VTEX. Desta forma, o único fator que será levado em consideração para o **Tempo Total de Entrega**, será o **Frete** fornecido por eles, ignorando o **Tempo de Preparo**. Deve-se tomar cuidado com isto, pois pode gerar divergências no **Tempo Total de Entrega**.

#### Preço e disponibilidade:

No momento do pedido, a CNova/Via Varejo não consulta o preço do produto e nem se ele possui estoque. É considerado apenas o último preço/estoque enviado.

### B) Integrando o pedido

Os pedidos na CNova/Via Varejo dispõem dos próprios status. Segue uma explicação deles comparando com os status dentro da VTEX. [Entenda mais sobre os status dos pedidos da VTEX aqui.](http://help.vtex.com/pt/tutorial/fluxo-de-pedido#fluxo-do-pedido-do-seller)
<br />

| Status VTEX | Status CNova/Via Varejo | Descrição Status CNova/Via Varejo |
| ---------- | ---------- | ---------- |
| Aguardando autorização para despachar| NEW | Pedido novo |
| Aguardando autorização para despachar| RAA | Risco de aprovação - pagamento pendente |
| Aguardando autorização para despachar | PEN | Pagamento pendente|
| Carência para cancelamento / Pronto para manuseio /Preparando entrega       | Pay | Pagamento aprovado |
| Faturado       | SHP       | Nota fiscal emitida + Pedido despachado       |
| Faturado       | DLV       | Pedido entregue       |
| Cancelado       | CAN       | Pedido cancelado       |

<br />

Antes mesmo de integrar um pedido, a CNova/Via Varejo faz a reserva do mesmo ([entenda aqui como funciona a reserva da VTEX](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona)). Simultaneamente, a VTEX lê um feed de pedidos na CNova/Via Varejo e integra apenas aqueles que estão nos status __NEW__ e __PAY__. Qualquer pedido que já tenha passado deste status não será integrado e nem aparecerá nos logs de pedido na aba de Integrações.

Os pedidos são integrados com o mesmo ID usado na CNova/Via Varejo.

Caso um pedido não integre na primeira tentativa, a integração faz infinitas retentativas automáticas enquanto o status do pedido estiver em Pay ou New. [Veja mais sobre erros conhecidos da CNova/Via Varejo aqui.](https://help.vtex.com/pt/faq/erros-de-pedidos-no-bridge-como-resolver#cnovavia-varejo)

### C) Interagindo com o pedido

Uma vez que o pedido está integrado, todas as ações feitas na CNova/Via Varejo (antes do status Faturado) que condizem com o andamento do pedido refletem na VTEX. A CNova/Via Varejo é ativa neste quesito.

_`Ex1:` ao aprovar o pagamento na CNova/Via Varejo, o fluxo anda na VTEX._

_`Ex2:` ao cancelar o pedido na CNova/Via Varejo, ele é cancelado na VTEX._

_`Ex3:` ao faturar um pedido na CNova/Via Varejo, ele __não__ é faturado na VTEX._

O único caso de interação ativa na VTEX é no momento de faturar o pedido. Então, ao inserir a nota fiscal e faturar o pedido na VTEX, o pedido é faturado na CNova/Via Varejo.

Porém, nem todas as ações feitas na VTEX refletirão na CNova/Via Varejo. 

_`Ex1:` se um pedido for cancelado na VTEX, a integração não conseguirá cancela-lo na CNova/Via Varejo._

_`Ex2:` se um pagamento não foi aprovado ainda na CNova/Via Varejo, e você tentar forçar o andamento do fluxo do pedido na VTEX, o pedido avançará na VTEX, mas continuará no mesmo status na CNova/Via Varejo._

### D) Faturando o pedido

Ao faturar o pedido na VTEX, a integração atualiza o status na CNova/Via Varejo para __SHP__ e posteriormente para __DLV__. No entanto, para que isto aconteça, é necessário que alguns campos específicos estejam preenchidos de acordo com cada status. [Entenda mais sobre o preenchimento destes campos aqui.](https://developers.vtex.com/vtex-developer-docs/docs/erp-integration-guide)

- Para alterar o status para __SHP__ será necessário:
  - `invoiceKey`, `trackingNumber`, `courier` e `CNPJ` (este campo é deve ser preenchido nas [configurações da integração](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/1okse2MybWk04AQoueu88O#detalhamento-dos-campos)

- Para alterar o status para __DLV__ será necessário:
  - `courierStatus:` este é um campo que pode ser populado automaticamente (via [atualizações de rastreio das próprias transportadoras](https://help.vtex.com/pt/tutorial/quais-transportadoras-disponibilizam-o-rastreio-de-frete--frequentlyAskedQuestions_303) ou manualmente (via API ou interface de Gerenciamento de pedidos). Quando o campo __finished=true__ então o status do pedido é declarado como delivered e a integração envia isso ao marketplace. Caso o campo __finished=false__, o status do pedido não será alterado para __delivered__, permanecendo no status anterior.
