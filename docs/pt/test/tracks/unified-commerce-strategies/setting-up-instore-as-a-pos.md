---
title: 'inStore como PDV'
id: 5XWo7q35jkDDq3PxUs1EVi
status: ARCHIVED
createdAt: 2020-07-01T12:46:45.819Z
updatedAt: 2022-02-21T16:56:37.470Z
publishedAt: 
firstPublishedAt: 2020-07-01T13:10:52.289Z
contentType: trackArticle
productTeam: Shopping
slug: configurar-o-instore-como-pdv
locale: pt
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugPT: estrategias-de-comercio-unificado
---

O objetivo deste guia é ensinar os passos necessários para usar o aplicativo inStore como um ponto de venda (PDV) em suas lojas físicas. Ou seja, a partir destas orientações, seus vendedores de loja física devem ser capazes de fechar compras por meio do inStore - o que significa que ele deve estar integrado a uma máquina de cartão e deve ser capaz de emitir Notas Fiscais.

## Pré-requisitos

Antes de mais nada, verifique os pré-requisitos que sua loja precisa garantir. Para isso, confira o artigo [Pré-requisitos para usar o inStore](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u "Pré-requisitos para usar o inStore").

## Implementar o inStore como PDV

>ℹ️ Embora seja possível implementar o inStore como PDV de outras maneiras, neste artigo vamos explicar como fazê-lo usando as features de Contra-franquia e Seller White Label. Isto porque essa é a arquitetura mais recomendada pela VTEX para esse tipo de solução.

Estes são os passos para implementar o inStore como PDV:

1. Criar contas-franquias Sellers White Label.
2. Criar pontos de retirada para suas lojas físicas.
3. Conectar os pontos de retirada aos estoques locais das lojas físicas.
4. Construir integração com faturador fiscal para emissão de Notas Fiscais.

### Criar contas franquia

Recomendamos usar a funcionalidade de [contas franquia](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label) para implementar o inStore como PDV. Com elas, cada uma das suas lojas físicas terá um ambiente separado, com sua logística própria, mas todas herdarão o catálogo do ambiente principal.

Para solicitar a criação de contas franquia, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

Suas contas franquia funcionarão como Sellers White Label. Isto significa que - quando um pedido por realizado em qualquer canal, seja uma loja física ou online - o sistema buscará a entre todas elas aquela que consegue fazer a entrega com melhor SLA.

A logística e o estoque de cada uma das contas franquia podem ser gerenciados em um ambiente VTEX separado. Para acessar esse ambiente, entre na URL `{{AccountName}}.myvtex.com/admin`, onde `{{AccountName}}` deve ser substituído pelo nome da conta-franquia.

### Criar pontos de retirada

Para que seu cliente possa comprar (seja na própria loja ou por outro canal) e retirar os produtos na própria loja, você deve configurar as lojas físicas como pontos de retirada. Para isso, siga os passos abaixo.

1. Entre no Admin da conta-franquia desejada e, no menu lateral, clique em __Estoque & Entrega__.
2. Clique em __Pontos de retirada__.
3. Clique no botão __Adicionar__.
4. Prencha as informações sobre a loja (nome, endereço e horário de funcionamento).

### Conectar os pontos de retirada aos estoques

Agora, você precisa conectar o ponto de retirada ao estoque local da loja física. Ou seja, precisa informar ao sistema que os produtos que serão retirados nesse ponto de retirada (a própria loja) sairão do estoque local (ou seja, também o estoque da própria loja). Para fazer isso, siga os passos abaixo.

1. No menu lateral do Admin, clique em __Estoque & Entrega__, se já não estiver lá.
2. Clique na aba __Estoques__.
3. Selecione o estoque local da loja física (ou crie um, se ainda não tiver feito isso).
4. Na seção Estoque inStore, selecione no menu dropdown o __ponto de retirada__ que você acabou de criar.

Com isso, seu estoque está conectado ao ponto de retirada, e os clientes já podem retirar produtos nessa loja física.

### Construir integração com faturador fiscal para emissão de Notas Fiscais

Para usar o inStore como ponto de venda, além [do adquirente e da máquina de cartão](https://help.vtex.com/pt/tracks/instore-payments--43B4Nr7uZva5UdwWEt3PEy) conectados ao sistema, é necessário integrar-se a um sistema de emissão de Notas Fiscais. 
