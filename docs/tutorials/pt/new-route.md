---
title: 'Nova Rota'
id: 58zHktlupty2jfvSYsQE5h
status: PUBLISHED
createdAt: 2021-03-31T17:07:01.944Z
updatedAt: 2021-04-15T17:38:19.122Z
publishedAt: 2021-04-15T17:38:19.122Z
firstPublishedAt: 2021-03-31T18:36:35.809Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slug: nova-rota
locale: pt
legacySlug: nova-rota
subcategory: 6a36lWUX5znjBVYTrfc29x
---

A tela de criação da nova rota é acessada a partir do botão __Criar Nova Rota__ da tela de Rotas dentro de Cadastro no menu à esquerda. Ao clicar no botão, a tela Nova Rota abre com duas seções distintas:

[Lista de entregas](#lista-de-entregas): lista com todas as entregas ativas no sistema que estão aguardando para serem colocadas em rota.
[Rota a ser criada](#rota-a-ser-criada): resumo da rota que está sendo criada no momento. 

## Lista de entregas
A lista de entregas apresenta as seguintes colunas ordenáveis:

- Cliente: nome do cliente da entrega.
- Parceiro: nome do parceiro da entrega, caso exista.
- Nota Fiscal: número da nota fiscal com todos os volumes.
- Núm. Pedido: número do pedido.
- Endereço: endereço da entrega.
- CEP:Código de Endereçamento Postal.
- Prazo: prazo para de finalização do serviço contado a partir da data do cadastro.
- Data Cadastro: data do cadastro da entrega.
- Peso: peso total dos pacotes. 

Você deve selecionar as entregas que deseja colocar na [Rota a ser criada](#rota_a_ser_criada). A seleção é feita clicando na caixa de seleção, à esquerda da de cada entrega na lista. 

<div class="alert alert-info"> 
Caso você queira colocar na rota uma entrega específica, utilize a pesquisa selecionando o filtro desejado, preenchendo o campo de texto e clicando no botão de lupa.
</div>

Ao selecionar a entrega desejada para compor a rota, a entrega selecionada aparecerá automaticamente na lista da Rota a ser criada, que é atualizada automaticamente à medida que as entregas são selecionadas.

## Rota a ser criada

A seção rota a ser criada apresenta uma lista com entregas que foram adicionadas para compor a nova rota. Essa lista é criada automaticamente à medida que você adiciona  as entregas da [Lista de entregas](#lista-de-entregas).

Em ROTA A SER CRIADA é possível retirar entregas que foram adicionadas à rota, consultar o [endereço de partida da rota](#endereco-de-partida) e ordenar os serviços da rota.

### Endereço de Partida

O endereço de partida é o endereço da empresa, ou filial ou transportadora da qual as entregas irão sair. Ele já estará disponível toda vez que você criar uma nova rota. É possível editar o endereço de partida clicando em __Editar endereço de partida.__

### Ordernar Serviços
Quando todas as entregas estiverem na lista, antes de finalizar a criação da nova rota é possível ordenar as entregas da rota de duas formas:
- Manualmente clicando e arrastando as entregas 
- Clicando no botão __Ordenar Serviços__ para que o sistema calcule o melhor trajeto levando em consideração o menor tempo a partir do endereço de partida.

Vale ressaltar que a posição das entregas na lista é a ordem de entrega da rota. 

<div class="alert alert-warning">  
  O recurso de <b>Ordenar Serviços</b> se limita a 21 entregas.
</div>

### Selecionar Portador

Ao criar uma rota é preciso escolher quem será o portador responsável.
Para selecionar o portador:

1. Clique na caixa de busca.
2. Escreva as três primeiras letras do nome do portador.
3. Selecione o Portador desejado.
4. Confira o Tipo de Veículo e/ou a Placa do Veículo.
5. Escolha a data que a rota será realizada. A data de Início de Rota será a data que a rota ficará disponível para o portador.
6. Clique em __Criar Rota.___

## Editar uma Rota
Se você já tem a rota cadastrada mas precisa editá-la, vá novamente ao menu à esquerda em __Cadastro__:

1. Clique em __Rotas__. 
2. Filtre as rotas por __Portador__ (nome do portador que foi destinado à rota) e __Início__ e __Fim__ (intervalo das datas do cadastro da rota).
3. Escolha a rota que deseja editar.
4.  À direita da rota, clique nos três traços.
5.  Clique em __Editar Rota.__

O sistema mostrará todas as entregas da rota. Ao final da página é possível visualizar a  ROTA A SER EDITADA. Nesta seção, é possível:
Remover entregas clicando  no __X__ à direta da entrega.

- Adicionar novas entregas selecionando uma entrega da lista de entregas disponíveis.
- Ordenar Serviço clicando em __Ordenar Serviço__ para o sistema calcular o melhor trajeto para realização das entregas.
- Alterar manualmente a ordem de entregas segurando e arrastando para a posição que deseja.
- Trocar a data de entrega.

<div class="alert alert-danger">
Só é possível editar uma rota se ela ainda estiver no status Ativo. Não é indicado alterar uma rota se ela já foi iniciada - isso pode causar inconsistências na plataforma do VTEX Tracking e no aplicativo do portador.
</div>

![Cadastro de nova rota](//images.ctfassets.net/alneenqid6w5/3m2JhopNd3vcscWEOYSnvn/f739888039df88f13fc7bcab16325253/Nova_Rota.gif)

