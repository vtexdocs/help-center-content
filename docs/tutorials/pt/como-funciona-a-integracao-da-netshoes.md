---
title: 'Como funciona a integração da Netshoes?'
id: 4WnhtMXAw0EgmEwiqgaOIu
status: PUBLISHED
createdAt: 2018-07-09T13:24:54.048Z
updatedAt: 2021-02-01T17:26:34.657Z
publishedAt: 2021-02-01T17:26:34.657Z
firstPublishedAt: 2018-07-09T14:27:03.889Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: como-funciona-a-integracao-da-netshoes
locale: pt
legacySlug: como-funciona-a-integracao-da-netshoes
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Este artigo tem como objetivo descrever todo o fluxo da integração com a Netshoes. Desta forma, fica mais claro como funciona a integração e o comportamento esperado em cada etapa. O tutorial está dividido em cinco etapas:

1. Fluxo de Produtos
2. Estoque
3. Preços
4. Promoções
5. Fluxo de Pedidos

## Fluxo de Produtos

A integração envia produtos, estoque e preços em entidades separadas. Uma vez que os produtos são enviados com sucesso, já é possível encontrá-los na Netshoes. A integração envia os seguintes campos:
<br />

| Produto     | SKU     |
| ---------- | ---------- |
|    Nome*    | EAN       |   
| Descrição*  | Peso*       |    
|     Especificações¹  | Altura*       | 
| - | Largura* |
| -  | Comprimento* |
|     -     | Imagens*       |      
| -       | Especificações¹ |

<br />

**Em asterisco os campos obrigatórios.*

*¹ Algumas especificações são obrigatórias. Para saber mais, [clique aqui](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc#outras-especificacoes).*

As especificações são enviadas se estiverem de acordo com os valores esperados pela Netshoes. Ou seja, ao enviar um produto, a integração varre suas especificações e, se encontrar alguma que coincida com o valor esperado pela categoria do produto na Netshoes, ela manda a especificação. Se a especificação não tiver o valor esperado, a integração não manda a especificação.

_`Ex:` numa camisa que possua a especificação "Material" cadastrada, a integração enviará os valores usados nela._

_`Ex:` Material - Algodão_

Ao serem enviados com sucesso pela primeira vez, a Netshoes recebe os produtos e realiza um processo de catalogação interno. Uma vez que são aprovados pela Netshoes, a integração __não atualiza__ as informações de produto, porque iria desfazer as que já foram cadastradas. Caso queira fazer alguma alteração nas informações do produto, é necessário alterar diretamente na Netshoes.

_`Ex:` se a descrição do produto for alterada, a integração não atualizará a descrição que está no marketplace._

>⚠️ OBS: o produto não pode ser apagado no painel da Netshoes, do contrário não conseguirá ser enviado pela integração novamente.

Na Netshoes, os produtos possuem dois status possíveis:
- __Ativo:__ disponível para venda
- __Inativo:__ indisponível para venda, fazendo com que o produto não apareça no marketplace.

Lá eles ficam agrupados por um produto que possui diversas variações/skus.

_`Ex:` Camisa Azul (produto) | P, M, G (variações/skus)_

A categoria é enviada de acordo com o Departamento preenchido na [planilha de mapeamento](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc?locale=pt#preenchendo-a-planilha-de-mapeamento).

## Estoque

A Netshoes só aceita receber os estoques para produtos que já foram enviados com sucesso, antes disto, os envios de estoque são rejeitados. Uma vez que o processo de catalogação é finalizado na Netshoes, a integração envia automaticamente os estoques dos produtos, desde que a __API de Notificação de Produtos Aprovados__ esteja configurada ([saiba mais aqui](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/4XEVWU4XIQimY4swYuaOoE#api-de-notificacao-de-produtos-aprovados)).

Depois que os produtos recebem a primeira carga de estoque, a atualização é feita SKU por SKU sempre que ocorre alguma alteração de estoque na VTEX.

>⚠️ **OBS:** os dados de estoque enviados para a Netshoes ficam registrados em nosso sistema por apenas **3 meses**.

## Preços

A Netshoes só aceita receber os preços para produtos que já foram enviados com sucesso, antes disto, os envios de preço são rejeitados. Uma vez que o processo de catalogação é finalizado na Netshoes, a integração envia automaticamente os preços dos produtos, desde que a __API de Notificação de Produtos Aprovados__ esteja configurada.

Depois que os produtos recebem a primeira carga de preço, a atualização é feita SKU por SKU sempre que ocorre alguma modificação de preços na VTEX. No entanto, para preços com validade, quando a data expira o sistema não notifica os afiliados. Desta forma, o preço base só será enviado na próxima modificação de preços.

A integração envia os __preços de lista__ e o __preço final__ para cada SKU. O preço final é enviado de acordo com o retorno da simulação de fulfillment. Em um cenário padrão, o preço enviado será sempre o determinado para a política comercial associada à integração. Porém, existem fatores que podem influenciar no preço final, como __promoções__ e __preços fixos__.

_`Ex1:` promoção de 10% de desconto para determinada categoria_

_`Ex2:` SKU X está R$ 10,00 na política comercial usada na Netshoes e tem um preço fixo de R$ 15,00 para essa mesma política. A integração enviará R$ 15,00._

>⚠️ OBS: como a forma de pagamento é feita no marketplace, as regras de pagamento são determinadas por ele. Por conta disto, não conseguimos enviar preços diferenciados em função da forma de pagamento.
>
>
> 
> *Ex: se na VTEX existem juros configurados para pagamentos parcelados, o preço enviado continuará sendo o que a simulação de fulfillment retorna.*

## Promoções

Só são aplicadas promoções que conseguem ser calculadas na simulação de fulfillment. Neste caso, as seguintes condições de promoções conseguem ser aplicadas:

| Tipo de desconto| Itens| Condições |
| ---------- | ---------- | ---------- |
| Percentual | Categorias | Valor mín/máximo do Pedido|
| Nominal    | Marcas     | Valor mín/máximo do Item |
| Frete Nominal| Coleções | Preço de/por |
| Frete Percentual| Produtos| CEP |
| Frete Máximo| - | Tipo de Frete |
| Frete Grátis| - | - |

>ℹ️ Não é possível aplicar **nenhum** tipo de condição nas promoções cujos campos foram preenchidos com **-**, isso é, nenhuma condição será contemplada na integração.

## Fluxo de Pedidos

### Fazendo o pedido

Quando um pedido é feito no marketplace, existem alguns pontos que influenciam em seus detalhes, como entrega, preço e disponibilidade.

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

No momento do pedido, por padrão, a Netshoes consulta a tabela de frete cadastrada na VTEX e nós retornamos as opções de frete para eles. Vale destacar que, para que seja possível realizar a consulta, é necessário cadastrar a [API de Frete](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/4XEVWU4XIQimY4swYuaOoE#api-de-frete) no painel da Netshoes.

O lojista tem também a possibilidade de cadastrar na Netshoes uma __tabela de contingência__. Dessa forma, se por algum acaso a integração não conseguir consultar o frete na VTEX ou a API de Frete não esteja cadastrada no painel deles, a Netshoes usa as informações desta tabela. Neste caso, a Netshoes nos passa o pedido e a integração tenta fazer um *match* do frete calculado com a transportadora que mais se adequa dentro da VTEX (usamos o __tipo__ de transportadora como parâmetro). Caso a integração não consiga encontrar um tipo de transportadora igual, nós integramos o pedido usando a transportadora mais barata disponível.

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

>⚠️ OBS: no caso de usar a tabela de contingência para fazer o cálculo do frete, a Netshoes não consulta a VTEX. Desta forma, o único fator que será levado em consideração para o **Tempo Total de Entrega**, será o **Frete** fornecido por eles, ignorando o **Tempo de Preparo**. Deve-se tomar cuidado com isto, pois pode gerar divergências no **Tempo Total de Entrega**.

#### Preço/Disponibilidade:

No momento do pedido, a Netshoes não consulta o preço do produto e nem se ele possui estoque. É considerado apenas o último preço/estoque enviado.

### Integrando o pedido

Os pedidos na Netshoes dispõem dos próprios status. Segue uma explicação deles comparando com os status dentro da VTEX. [Entenda mais sobre os status dos pedidos da VTEX aqui.](https://help.vtex.com/pt/tutorial/fluxo-de-pedido#fluxo-do-pedido-do-seller)
<br />

| Status VTEX     | Status Netshoes     | Descrição Status Netshoes |
| ---------- | ---------- | ---------- |
| Aguardando autorização para despachar| Created| Pedido novo onde o pagamento não foi aprovado ainda|
| Carência para cancelamento / Pronto para manuseio /Preparando entrega       | Approved       | Pagamento aprovado   |
| Faturado       | Invoiced       | Nota fiscal emitida     |
| Faturado       | Shipped       | Pedido despachado       |
| Faturado       | Delivered       | Pedido entregue       |
| Cancelado       | Canceled       | Pedido cancelado       |

<br />

A Netshoes notifica a VTEX através da [__API de Importação de Pedidos__](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/4XEVWU4XIQimY4swYuaOoE#api-de-importacao-de-pedidos) toda vez que um pedido é feito na plataforma deles, e então nós tentamos integrá-lo. Mesmo que API não esteja cadastrada, a VTEX lê um feed de pedidos na Netshoes para garantir que não haja pedidos perdidos! Mas ainda sim, sugerimos que a API seja cadastrada, pois garante muito mais rapidez para integrar os pedidos, reduzindo chances de ruptura no estoque.

Integramos apenas aqueles que estão nos status __Created__ e __Approved__ (seja ele um pedido normal ou pedido de troca). Qualquer pedido que já tenha passado deste status não será integrado e nem aparecerá nos logs de integração de pedidos.

Os pedidos são integrados com o mesmo ID usado na Netshoes. Pedidos de troca, terão seu ID complementado com um `"T"` no final.

_`Ex:` pedido original - 6704259 | pedido de troca - 6704259T_

Caso um pedido não integre na primeira tentativa, existe um retry automático para erros não conhecidos pela integração ou temporários (throttling, serviços indisponíveis 503, entre outros). Se for um erro mapeado, como divergência no valor do pedido, erros de SLA, etc, a integração não faz retry. Para que pedidos com estes erros sejam integrados, será necessário fazer alguma ação ([veja mais sobre erros conhecidos da Netshoes aqui](https://help.vtex.com/pt/faq/erros-de-pedidos-no-bridge-como-resolver#netshoes)).

### Interações no pedido

Uma vez que o pedido está integrado, algumas interações, no painel da VTEX ou na própria Netshoes, serão aplicadas dos dois lados. Isto vale para:

- Cancelar um pedido na Netshoes - a integração cancela o pedido na VTEX
- Faturar um pedido na VTEX - a integração irá faturar e atualizar os status do pedido na Netshoes (como explica o tópico 5.4)

Porém, outras ações tomadas não são refletidas entre as plataformas:
- Cancelar um pedido na VTEX - a integração não cancela o pedido na Netshoes
- Faturar o pedido na Netshoes - a integração não irá faturá-lo na VTEX

### Faturando o pedido

Ao faturar o pedido na VTEX, a integração atualiza o status na Netshoes para __invoiced__, __shipped__ e, por último, __delivered__. No entanto, para que isto aconteça, é necessário que alguns campos específicos estejam preenchidos de acordo com cada status. [Entenda mais sobre o preenchimento destes campos aqui](https://developers.vtex.com/vtex-developer-docs/docs/erp-integration-guide).

- Para alterar o status para __invoiced__ será necessário:
  - `invoiceKey`, `invoiceNumber` e `issuanceDate`

- Para alterar o status para __shipped__ será necessário:
  - `trackingNumber`, `trackingUrl` e `courier`

- Para alterar o status para __delivered__ será necessário:
  - `courierStatus`: este é um campo que pode ser populado automaticamente [via atualizações de rastreio das próprias transportadoras](https://help.vtex.com/pt/tutorial/quais-transportadoras-disponibilizam-o-rastreio-de-frete) ou manualmente (via API ou interface do OMS).
