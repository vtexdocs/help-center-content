---
title: 'Como funciona a integração da SkyHub/B2W'
id: UJfYlTdmw0so2OKSie2M8
status: PUBLISHED
createdAt: 2018-04-24T18:46:20.056Z
updatedAt: 2022-05-06T16:40:12.353Z
publishedAt: 2022-05-06T16:40:12.353Z
firstPublishedAt: 2018-04-24T18:50:49.083Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: how-the-skyhub-integration-works
legacySlug: como-funciona-a-integracao-da-skyhub
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A B2W e as Lojas Americanas fizeram uma fusão, dando origem ao [Americanas Marketplace](https://americanasmarketplace.com.br/). Através do [conector nativo](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex) da VTEX, é possível integrar com a B2W e aumentar seus canais de venda.

A SkyHub é a integradora que gerencia a comunicação entre VTEX e a B2W/Americanas Marketplace. Depois de realizar a [integração com a SkyHub/B2W](/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/5qetRRLNCgDTfhz2PUUO9v), é necessário entender como funciona o fluxo da integração, ou seja, como suas informações são atualizadas no marketplace. Este artigo foi dividido em:

- [Produtos](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#produtos)
- [Estoque](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#estoque)
- [Preços](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#precos)
- [Promoções](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#promocoes)
- [Pedidos](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#pedidos)

## Produtos

Após configurar a integração com a B2W, o envio de produtos para o marketplace é feito de forma automática. A [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) utilizada na etapa [configurar conector](/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/40eYElt1qwIqGeIeum2W4M) é o que determina quais dos seus produtos serão enviados para o marketplace. 

### Campos enviados

As informações da sua loja VTEX enviadas para o marketplace são sobre produtos, estoque e preços. Os campos enviados para produtos e SKUs são os seguintes:

| **Produto** |
| ---------- |
| Nome |   
| Descrição |    
| Marca |
| Categoria |
| [Especificações](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-produto) |

| **SKU** |
| ---------- |
| EAN |   
| Peso |   
| Altura | 
| Largura |
| Comprimento |
| Imagens |      
| [Especificações](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-sku) |

### Catalogação de produtos

A categoria dos produtos é enviada em formato de _breadcrumb_. Por exemplo: _Masculino > Camisas > Manga Longa_. 

A catalogação na B2W é feita de forma automática pela SkyHub. Caso queira alterá-la, entre em contato com o [suporte da SkyHub](https://ajuda.skyhub.com.br/hc/pt-br/categories/115001212186).

### Status de produtos

Existem dois status possíveis para um produto na B2W:

- **Ativo:** aparece no marketplace e está disponível para venda.
- **Inativo:** não aparece no marketplace e está indisponível para venda.

> ℹ️ Não existem campos obrigatórios para que um produto seja integrado. No entanto, se um produto não possui preço cadastrado ou estoque positivo, ele se torna inativo.

### Exibição de produtos

Na página de detalhes de um produto na [Americanas Marketplace](https://www.americanas.com.br/?spa=true), as variações do produto (SKUs) são agrupadas em uma única interface. No exemplo ilustrado a seguir, o consumidor pode escolher entre as variações de tamanho Gg, P, M e G de uma camiseta.

![print_camiseta_americanas_b2w](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integra%C3%A7%C3%B5es/configura%C3%A7%C3%B5es-de-integra%C3%A7%C3%B5es/como-funciona-a-integracao-da-skyhub_1.png)

### Atualização de produto

Uma vez realizada a integração com a SkyHub, qualquer alteração nos [campos enviados](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#campos-enviados) de produtos e SKUs vai automaticamente se refletir na B2W. Por exemplo, se a descrição de um produto for alterada, a nova descrição vai aparecer na B2W sem necessidade de uma atualização manual.

## Estoque

Depois que os produtos recebem a primeira carga de estoque, a atualização será feita SKU por SKU sempre que ocorrer alguma alteração na VTEX. Essa atualização demora apenas alguns segundos para se refletir na B2W, mas o registro desses eventos no Admin VTEX pode levar alguns minutos. Você pode acompanhá-los em **MARKETPLACE > Integrações > Estoque**.

## Preços

A integração envia o [preço de lista](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) e o preço final para cada SKU. O preço final é enviado de acordo com o retorno da [simulação de fulfillment](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation). Em um cenário padrão, o preço enviado será sempre o determinado pela política comercial usada na integração.

> ℹ️ Qualquer alteração no [preço base](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) ou no [preço fixo](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) de um produto vai se refletir automaticamente na B2W. Vale ressaltar que o preço fixo se sobrepõe a todas as configurações de preços existentes em uma [tabela de preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8).

Não é possível enviar preços diferenciados em função da forma de pagamento, pois a escolha da forma de pagamento é determinada no ambiente da B2W.

## Promoções

As únicas promoções aceitas na B2W são as que podem ser calculadas na [simulação de fulfillment](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation). No caso, as seguintes condições podem ser aplicadas:

| **Tipo de desconto** |
| ---------- |
| Percentual |
| Nominal |
| Frete Nominal |
| Frete Percentual |
| Frete Máximo |
| Frete Grátis |

| **Itens** |
| ---------- |
| Categorias |
| Marcas |
| Coleções |
| Produtos |

| **Condições** |
| ---------- |
| Valor mín/máximo do pedido |
| Valor mín/máximo do item |
| Preço de/por |
| CEP |
| Tipo de Frete |

## Pedidos

No momento do pedido, a SkyHub não consulta o preço do produto e não verifica a quantidade em estoque. Ela considera apenas os últimos dados de preço e estoque enviados na carga inicial ou na última atualização feita.

Nesta seção, serão abordados os seguintes tópicos:

- [Integrar pedido](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#integrar-pedido)
- [Interagir com pedido](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#interagir-com-pedido)
- [Faturar pedido](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#faturar-pedido)
- [Enviar pedido](/pt/tutorial/como-funciona-a-integracao-da-skyhub--UJfYlTdmw0so2OKSie2M8#enviar-pedido)

### Integrar pedido

Os pedidos na SkyHub possuem status próprios, conforme a tabela a seguir. Para saber mais sobre os status de pedidos na VTEX, veja [Fluxo de pedido em Gerenciamento de pedidos](/pt/tutorial/fluxo-de-pedido).

| **Status na VTEX** | **Status na SkyHub** | **Descrição do status na SkyHub** |
| ---------- | ---------- | ---------- |
| Aguardando autorização para despachar| _New_ | Novo pedido com pagamento ainda não aprovado|
| Carência para cancelamento / Pronto para manuseio / Preparando entrega | _Approved_ | Pedido aprovado |
| Faturado | _Shipped_ | Pedido despachado |
| Faturado | _Delivered_ | Pedido entregue |
| Cancelado | _Canceled_ | Pedido cancelado |
| - | _Overdue_ | Pedido atrasado |
| _Confirm Stock_ | _Confirm Stock_ | Reserva de estoque | 

A VTEX recebe um _feed_ de pedidos da SkyHub e integra apenas aqueles que estão no status `New` ou `Approved`. Nenhum outro status além desses dois será aceito para integrar um pedido. Os pedidos são integrados na VTEX com os mesmos IDs usados pela SkyHub.

Caso um pedido não integre na primeira tentativa, existe uma retentativa automática programada para erros não mapeados pela integração. Em casos de erros conhecidos, é necessário resolvê-los com ações manuais. Para mais informações, veja [Erros de integração de pedidos da B2W](/pt/tutorial/erros-de-integracao-de-pedidos-da-b2w--2iQqCJIfySN0JsCJkOG2h8).

### Interagir com pedido

Qualquer interação com pedidos da B2W na plataforma VTEX será refletida na SkyHub e vice-versa. Por exemplo, o cancelamento de um pedido pode ser feito tanto no ambiente da VTEX como no da SkyHub, pois um reflete o outro.

### Faturar pedido

Ao faturar o pedido na VTEX, a integração atualiza o status na SkyHub para `Shipped` e, depois, para `Delivered`. No entanto, para que isso aconteça, é necessário que alguns campos estejam preenchidos de acordo com cada status.

- Para faturar o pedido na SkyHub, será necessário preencher o campo `invoiceKey`.
- Para alterar o status para `Shipped`, será necessário preencher o campo `trackingNumber`.
- Para alterar o status para `Delivered`, será necessário preencher o campo `CourierStatus`. 

O campo `CourierStatus` pode ser populado automaticamente por [atualizações de rastreio das próprias transportadoras](/pt/tutorial/quais-transportadoras-disponibilizam-o-rastreio-de-frete) ou manualmente, pela API _[Update Order Tracking Status](https://developers.vtex.com/vtex-developer-docs/reference/updatetrackingstatus)_ ou pelo Admin VTEX, em **PEDIDOS > Gerenciamento de pedidos**. Quando o campo retornar `finished=true`, então o status do pedido é declarado como `Delivered` e a integração envia essa informação ao marketplace. Caso o campo retorne `finished=false`, o status do pedido não é alterado para `Delivered`, permanecendo no status anterior.

> ℹ️ Se você utiliza o serviço [B2W Entregas ou B2W Entregas Direct](/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/5hHCiAMHih2lc5xb3A5Ohp#b2w-entregas-e-b2w-entregas-direct), o preço do frete não entrará no valor do pedido integrado na VTEX e na nota fiscal constará apenas o custo dos produtos. A nota fiscal do frete deverá ser emitida pela própria B2W, que é quem está fornecendo esse serviço.

### Enviar pedido

Para cada novo pedido, a SkyHub consulta a tabela de frete cadastrada na VTEX e retorna apenas uma opção de frete. Para consultar a tabela de frete, é necessário [Cadastrar a API de Frete](/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/3W7OqhHUl2CQKIsAc0SS4g#api-de-frete). A opção de frete que retorna é eleita conforme os critérios a seguir, em ordem de hierarquia:

1. Entrega mais barata.
2. Entrega mais rápida.

Apesar de a SkyHub consultar o frete na VTEX, a integração permite usar uma solução de terceiros para fazer o cálculo. Nesse caso, no momento do pedido, a SkyHub consulta a solução utilizada que, por sua vez, retorna o cálculo do frete.

É possível também cadastrar na [SkyHub](https://skyhub.com.br/) uma tabela de contingência. Dessa forma, se por algum motivo a integração não conseguir consultar o frete na VTEX, a SkyHub usa as informações dessa tabela.

No caso de uma solução de terceiros fazer o cálculo de frete ou no caso de utilizar uma tabela de contingência, a integração faz um _match_ do frete calculado com a transportadora que mais se adequa na VTEX. O parâmetro utilizado é o nome da transportadora escolhida. Caso a integração não consiga encontrar uma transportadora idêntica, a VTEX integra o pedido com a transportadora mais barata disponível.

> ℹ️ Para o seller que utiliza o serviço [B2W Entregas ou B2W Entregas Direct](/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/5hHCiAMHih2lc5xb3A5Ohp#b2w-entregas-e-b2w-entregas-direct), a SkyHub não consulta a VTEX sobre frete, pois o envio é responsabilidade do marketplace. É possível também [Configurar integração de lojas físicas com a B2W](/pt/tutorial/configurar-integracao-de-lojas-fisicas-com-a-b2w--1yv2BSquNmdp8M6vJvaLwm) e oferecer ao consumidor a opção de pontos de retirada do pedido.

<br></br>
### Saiba mais

- [Integração com SkyHub/B2W](/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk)
- [Configurar integração de lojas físicas com a B2W](/pt/tutorial/configurar-integracao-de-lojas-fisicas-com-a-b2w--1yv2BSquNmdp8M6vJvaLwm)
- [Erros de integração de pedidos da B2W](/pt/tutorial/erros-de-integracao-de-pedidos-da-b2w--2iQqCJIfySN0JsCJkOG2h8)
