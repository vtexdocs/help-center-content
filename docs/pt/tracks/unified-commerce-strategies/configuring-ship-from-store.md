---
title: 'Ship From Store'
id: 50GAmxxFsJoLWqcnMysWdl
status: PUBLISHED
createdAt: 2020-06-30T21:36:43.926Z
updatedAt: 2023-07-26T18:44:48.356Z
publishedAt: 2023-07-26T18:44:48.356Z
firstPublishedAt: 2020-06-30T21:45:36.187Z
contentType: trackArticle
productTeam: Shopping
slug: configurar-ship-from-store
locale: pt
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugPT: estrategias-de-comercio-unificado
---

A estratégia de **Ship From Store** se dá quando o cliente deseja receber os produtos em casa e esses produtos partem do estoque de uma loja física. Ou seja, neste cenário, a loja funciona como um mini centro de distribuição.

![35. Setting up Shipping From Store - 1](//images.ctfassets.net/alneenqid6w5/7uHIuX10TvTGJS1kkwPmBb/6847796e390c9d18123eea24f87469c4/35._Setting_up_Shipping_From_Store_-_1.png)

Esse tipo de logística ajuda sua operação a reduzir custos e tempo de envio. Isto porque, em vez de contar apenas com os estoques principais - geralmente afastados da zonas centrais das cidades - você passa a ter uma rede mais capilarizada de entrega. 

Considere este exemplo: um cliente faz um pedido no e-commerce e deseja receber os produtos em casa. Digamos que você tenha uma loja física no bairro do cliente, a 500 metros da casa dele. Se no estoque dessa loja constam os produtos que ele pediu, a estratégia de Shipping From Store permite que esses produtos sejam enviados para ele a partir dessa loja - por um custo menor para você e com um tempo de entrega mais vantajoso para o cliente.

## Pré-requisitos

Antes de mais nada, verifique os pré-requisitos que sua loja precisa garantir para iniciar a implementação de uma estratégia de Ship From Store. Para isso, confira o artigo [Pré-requisitos para usar o VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u "Pré-requisitos para usar o VTEX Sales App").

## Implementar Ship From Store

>ℹ️ Embora seja possível implementar Ship From Store de outras maneiras, neste artigo vamos explicar como fazê-lo usando as features de Contra-franquia e Seller White Label. Isto porque essa é a arquitetura mais recomendada pela VTEX para esse tipo de projeto.

Estes são os passos para implementar o __Ship From Store__:

1. [Criar contas franquias](#criar-contas-franquias).
2. [Configurar a logística](#configurar-a-logistica).

### Criar contas franquias

Recomendamos usar [contas franquias](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/eujH0id9Y4WJjjmdazUKd) para implementar Shipping From Store. Com elas, cada uma das suas lojas físicas terá um ambiente separado, com sua logística própria, mas todas herdarão o catálogo do ambiente principal.

### Configurar a logística

Com o __Ship From Store__, suas lojas físicas conseguirão fazer entregas a partir de seus estoques locais. Para permitir isso, você precisa habilitar essas lojas a fazerem entregas. Veja como nas etapas abaixo.

#### Adicionar transportadoras às contas franquias

Vamos configurar uma transportadora para fazer entregas a partir do estoque local de uma das suas lojas físicas.

1. No Admin VTEX da conta franquia, acesse **Envio** > **Estratégia de envio**, ou digite **Estratégia de envio** na barra de busca no topo da página.
2. Clique no botão `Criar política de envio`.
3. Preencha os dados da transportadora, conforme descrito no artigo [Cadastrar transportadora](https://help.vtex.com/pt/tutorial/cadastrar-transportadora--tutorials_140).

#### Conectar transportadoras ao estoque das lojas físicas

Agora você precisa informar ao sistema da VTEX qual é o estoque do qual os produtos sairão para serem entregues pela transportadora cadastrada no passo anterior.

1. Crie uma doca, conforme descrito [neste artigo](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW?locale=pt). No campo __Políticas de envio associadas__, adicione a transportadora que você criou na seção anterior deste guia.
2. Crie um estoque, seguindo os passos do artigo [Cadastrar estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137). No campo __Origem__, adicione a doca criada no passo anterior.
