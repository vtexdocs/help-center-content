---
title: 'Lojas físicas como pontos de retirada'
id: 4hXfgqXxS1lwAfnxgja3xW
status: PUBLISHED
createdAt: 2021-08-23T17:04:37.282Z
updatedAt: 2024-11-13T18:16:43.930Z
publishedAt: 2024-11-13T18:16:43.930Z
firstPublishedAt: 2021-08-23T17:12:50.884Z
contentType: trackArticle
productTeam: Shopping
slugEN: configuring-physical-stores-as-pickup-points
locale: pt
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugEN: estrategias-de-comercio-unificado
order: 5
---

Um ponto de retirada ou pickup point é um local físico onde o cliente tem a opção de retirar por conta própria o seu pedido. É, portanto, uma etapa opcional e que encerra a rota logística.

Você pode utilizar as lojas físicas da sua marca como pontos de retirada, para que o seu cliente tenha a opção de ir até uma loja buscar o pedido. Assim, no momento em que o cliente final preencher as informações de endereço durante a compra, as possibilidades de entrega para aquele endereço serão exibidas, inclusive os pontos de retirada disponíveis.

Fica a critério do cliente decidir se deseja que o pedido seja entregue em casa ou se prefere buscá-lo em um ponto de retirada, e qual dos pontos de retirada disponíveis é a melhor opção.

## Pré-requisitos - VTEX Sales App

Verifique os requisitos que sua loja precisa garantir para iniciar a implementação de lojas físicas como pontos de retirada para pedidos realizados no [VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf). Para isso, confira o artigo [Pré-requisitos para usar o VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u "Pré-requisitos para usar o VTEX Sales App").

## Configurar lojas físicas como pontos de retirada

Na plataforma VTEX, as lojas físicas são configuradas como contas franquia, que, por sua vez, funcionam como Sellers White Label da conta principal da marca. Leia o artigo [O que é conta franquia?](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) para mais informações sobre esse tipo de conta.

Portanto, em cada conta franquia que servirá como ponto de retirada, é necessário configurar um ponto de retirada e relacioná-lo às demais configurações de logística da conta. Veja o passo a passo completo a seguir.

### Criar contas franquia

Para mais informações sobre criação de contas franquia, leia nosso artigo [Criar contas franquias](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/eujH0id9Y4WJjjmdazUKd).

### Criar pontos de retirada

Para que seu cliente possa comprar (seja na própria loja ou por outro canal) e retirar os produtos na própria loja, você deve configurar as lojas físicas como pontos de retirada. Para isso, siga os passos abaixo.

1. No Admin VTEX da conta franquia, acesse **Envio** > __Pontos de retirada__, ou digite __Pontos de retirada__ na barra de busca no topo da página.
2. Clique no botão `Adicionar`.
3. Prencha as informações solicitadas. Para saber mais sobre cada campo, consulte o artigo [Configurar Pontos de Retirada (Pickup Points)](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E).
4. Clique em `Salvar`.

### Associar pontos de retirada a uma política de envio

Em seguida, você precisa associar os novos pontos de retirada a uma política de envio para que eles funcionem corretamente. Consulte a seção [Associar Ponto de Retirada a uma Política de envio](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E#2-associar-ponto-de-retirada-a-uma-politica-de-envio) do artigo [Configurar Pontos de Retirada (Pickup Points)](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E) para mais informações sobre esse processo.

### Associar os pontos de retirada aos estoques das lojas físicas

Agora, você precisa conectar o ponto de retirada ao estoque local da loja física. Ou seja, precisa informar ao sistema que os produtos que serão retirados nesse ponto de retirada (a loja física) sairão do estoque local, ou seja, o estoque da loja. Para fazer isso, siga os passos abaixo.

1. No Admin VTEX da conta franquia, acesse **Envio** > **Estratégia de envio** > __Estoques__, ou digite **Estratégia de envio** na barra de busca no topo da página. No menu lateral do Admin, clique em __Estoque & Entrega__, se já não estiver lá. 
2. Selecione o estoque local da loja física ou crie um, se ainda não tiver feito isso. Consulte o artigo [Gerenciar Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#cadastrar-estoque) para saber como cadastrar um novo estoque, se necessário.
3. Ative a opção __Estoque inStore__ a partir do botão <i class="fas fa-toggle-on"></i>.
4. Selecione no menu os pontos de retirada que forem utilizar o estoque da loja física.

Com isso, seu estoque está conectado ao ponto de retirada, e os clientes já podem retirar produtos nessa loja física. Ao ativar essa opção, a __Logística__ não observa a política comercial da doca vinculada ao estoque em questão. 

> ℹ️ Ao associar o ponto de retirada ao estoque da loja física, essa configuração se aplica ao estoque de todas as políticas comerciais ativas.

## Saiba mais

- [Configurar Seller White Label como Ponto de Retirada (Pickup Point)](https://help.vtex.com/pt/tutorial/configurar-seller-white-label-ponto-de-retirada-pickup-point--6fSUE2O0taaoKieAaiuc4e).

