---
title: 'Retirada na loja'
id: 43NDZ5mCzCSagk880MeYIC
status: DRAFT
createdAt: 2018-06-22T14:41:52.415Z
updatedAt: 2020-08-03T19:56:41.373Z
publishedAt: 
firstPublishedAt: 2018-06-22T17:08:22.081Z
contentType: trackArticle
productTeam: Shopping
slug: retirada-na-loja
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

<div class="alert alert-info">
Aviso: Esta documentação está em processo de atualização para refletir a mudança do conceito de Painéis para 
<a href="https://help.vtex.com/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl">estratégia de envio</a>.
</div> 



Para configurar o inStore com o modo de __Retirada na loja__, ou seja, para considerar o estoque de sua loja física você depende de dois fatores: 

- Configurar logística para o inStore
- Configurar checkin no inStore

## Configurar logística para o inStore

Para que o inStore funcione corretamente, é necessário cadastrar uma logística específica para ele. O inStore deve ser configurado com um __Ponto de retirada__. O cadastro da logística segue duas etapas:

- Cadastro do Ponto de retirada
- Cadastro do Estoque

Para configurar a logística do inStore, siga os passos abaixo.

### Cadastro do Ponto de retirada

- Acesse o módulo __Estoque & entrega__.
- Clique na aba __Pontos de retirada__.
- Clique no botão __Adicionar Pontos de retirada__.
- Preencha os campos de cadastro.
- Clique em __Salvar__.

### Cadastro do Estoque

- Acesse o módulo __Estoque & entrega__.
- Clique na aba __Painéis__.
- Clique no botão __Novo Estoque__.
- Preencha os campos de cadastro detalhados abaixo.
- Clique em __Salvar__.

#### Campos de cadastro

__Id (Opcional)__: Campo identificador do estoque. Se não for preenchido, será criado automaticamente.

__Nome__: Nome do estoque.

__Configurações do VTEX inStore__: Selecione em __Pontos de retirada__ o Ponto previamente cadastrado para o inStore e clique no botão Incluir.

## Configurar CheckIn no inStore

Se você configurou sua loja seguindo o fluxo do Easy Setup, seu inStore já está com as lojas cadastradas e habilitadas para funcionarem como pontos físicos de venda e retirada de produtos - também conhecidos como Pickup Points.

Agora, é preciso configurar o CheckIn. Essa etapa da instalação consiste em associar as vendas de uma loja a um determinado Pickup Point.

Uma vez que você conclua essa etapa, o sistema apresentará a opção “Itens para levar agora” no inStore, permitindo que o consumidor retire o produto da loja assim que efetuar o pagamento.

<div class=“alert alert-info”>
<strong>Atenção</strong>: caso o Pickup Point da sua escolha esteja cadastrado em uma conta franquia, é necessário cadastrar também o ID do seller nas configurações do admin da loja.
</div>

Para realizar essa integração, confira o passo a passo:

* Acesse __https://accountname.myvtex.com/admin/vtable__;
* Selecione a opção __Admin das lojas__;
* Ao lado do número da linha, clique no ícone azul "__Lápis__";
* Insira o Id do __Pickup Point__ escolhido, conforme configurado no sistema de Logística;
* Se necessário, preencha o campo __Conta franquia__ com o Id do seller, de acordo com o que foi explicado no último parágrafo;
* Clique no ícone cinza "__X__" para sair do campo de edição;
* Clique no botão azul __Salvar__.

Desse modo, caso a Logística esteja configurada corretamente, o inStore funcionará no modo __Retirada na loja__.

## Pickup Points

Essa é mais uma das novas funcionalidades que o __Checkout V6__ proporciona. Com ela habilitada no inStore, um cliente consegue comprar produtos em uma loja física porém retirá-los em outra loja.

Para ativar essa funcionalidade, entre em contato com a equipe da VTEX.
