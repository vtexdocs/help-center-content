---
title: 'Como alterar pedidos'
id: 7btlG91rb6sHpW1dkd2kBw
status: PUBLISHED
createdAt: 2023-11-27T22:40:33.769Z
updatedAt: 2025-01-29T19:54:00.875Z
publishedAt: 2025-01-29T19:54:00.875Z
firstPublishedAt: 2023-11-28T15:16:50.272Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: how-to-modify-orders
legacySlug: como-alterar-pedidos-beta
locale: pt
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

A funcionalidade [Alterar pedido](/pt/docs/tutorials/como-funciona-a-alterar-pedido) permite que você edite um pedido de diversas formas, seja a mudança motivada pela vontade do cliente, indisponibilidade de produtos ou outros motivos. 

Este artigo apresenta de quais maneiras o pedido pode ser alterado e como realizar essas ações. As seções apresentadas neste artigo são as seguintes:

- [Requisitos](#requisitos)
- [Tipos de alteração de pedidos](#tipos-de-alteracao-de-pedidos)
- [Aspectos comuns](#aspectos-comuns)
- [Erros de processamento](#erros-de-processamento)

> ⚠️ Para saber sobre as [características gerais](/pt/docs/tutorials/como-funciona-a-alterar-pedido#caracteristicas-gerais) em cenários de alteração de pedidos, incluindo reserva, atualização de inventário e contas franquia, ou para entender questões de [preço, pagamento e fatura](/pt/docs/tutorials/como-funciona-a-alterar-pedido#mudancas-de-preco), veja o artigo [Como funciona a Alterar pedido](/pt/docs/tutorials/como-funciona-a-alterar-pedido).

## Requisitos

Existem algumas condições para a alteração de pedidos relacionadas ao status do pedido. Veja os detalhes a seguir.

### Status do pedido a ser alterado

Durante o [fluxo do pedido](/pt/docs/tutorials/fluxo-e-status-de-pedidos), o único status no qual a **Alterar pedido** é válida pelo Admin VTEX é em `preparando entrega`. Para informações sobre alterações por API, veja o artigo [Como funciona a Alterar pedido](/pt/docs/tutorials/como-funciona-a-alterar-pedido).

### Permissão no License Manager

Para um usuário ser capaz de alterar pedidos, o seu [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) precisa estar associado a pelo menos um dos seguintes [recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager):

* `Orders Full Access`
* `Change order`

## Tipos de alteração de pedidos

As principais alterações de pedidos que podem ser realizados pelo Admin VTEX são: 

* **Adicionar:** uma quantidade de itens ou novos produtos.
* **Remover:** uma quantidade parcial ou total de itens.
* **Alterar peso:** os itens podem passar a ter um peso maior ou menor.
* **Substituir itens:** trocar itens por outros, incluindo itens precificados por peso.
* **Alterar preço:** [mudar valor total do pedido](/pt/docs/tutorials/alterar-valor-total-do-pedido).

Todas estas ações são realizadas pela [página de detalhes](/pt/docs/tutorials/pagina-de-detalhes-do-pedido) do pedido, que você acessar de duas formas, descritas a seguir.

### Acessar pedido pela página Todos os pedidos

No Admin VTEX, acesse **Pedidos >** [Todos os pedidos](/pt/docs/tutorials/todos-os-pedidos) e clique no pedido desejado, ou digite **Todos os pedidos** na barra de busca no topo da página. Em seguida, clique no pedido desejado. Se necessário, você pode utilizar [filtros](/pt/docs/tutorials/filtrar-todos-pedidos) para refinar sua busca.

### Acessar pedido usando a barra de busca global

A partir de qualquer página do Admin VTEX, pesquise o pedido pela barra de busca no topo da página. Basta selecionar a opção `Pedidos`, no canto direito da barra, e utilizar algum dos seguintes critérios:

* ID do pedido
* Nome do cliente
* Email do cliente
* Documento do cliente 

Uma vez na página de detalhes do pedido, você pode realizar as seguintes alterações:

* [Adicionar itens](#adicionar-itens)
* [Adicionar novo produto](#adicionar-novo-produto)
* [Remover itens](#remover-itens)
* [Excluir produto](#excluir-produto)
* [Substituir itens](#substituir-itens)
* [Alterar peso](#alterar-peso)

> ℹ️ É possível realizar uma única alteração no pedido ou combinar várias de uma só vez. Não existe um limite para quantas vezes um pedido pode ser alterado. Para mais informações, veja o artigo [Como funciona a Alterar pedido](/pt/docs/tutorials/como-funciona-a-alterar-pedido).

### Adicionar itens

Para adicionar um ou mais itens ao pedido, realize os seguintes passos:

1. No Admin VTEX, acesse a página de detalhes do pedido em **Pedidos >** [Todos os pedidos](#acessar-pedido-pela-pagina-todos-os-pedidos) ou pela [barra de busca global](#acessar-pedido-usando-a-barra-de-busca-global).
2. Na seção **A faturar**, clique em `Alterar itens`.
3. Na página **Gerenciar itens do pedido**, clique na seta para cima <i class="fas fa-angle-up"></i> até o número da quantidade desejada, ou digite o número no campo. Feito isso, a página vai apresentar o preço e o número da quantidade anteriores tachados e vai aparecer a seguinte mensagem: _“Item editado”_.

    ![change_order_adding_items_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/como-alterar-pedidos_1.png)

4. Revise os [detalhes do valor da alteração](#consultar-detalhes-dos-valores-da-alteracao). É possível [reverter uma alteração](#reverter-acoes).
5. Clique em `Revisar e aplicar`.
6. No campo **Motivo das alterações**, escreva de forma breve o motivo pelo qual o pedido está sendo alterado. Se desejar, revise novamente as alterações a serem feitas.
7. Clique em `Aplicar`. A seguinte mensagem de confirmação vai aparecer: _“Solicitação de alteração concluída”._

Feito isso, você retorna à página de detalhes do pedido e, na seção **A faturar**, consegue ver a nova quantidade de itens.

### Adicionar novo produto

Para adicionar um ou mais produtos a um pedido, realize os seguintes passos:

1. No Admin VTEX, acesse a página de detalhes do pedido em **Pedidos >** [Todos os pedidos](#acessar-pedido-pela-pagina-todos-os-pedidos) ou pela [barra de busca global](#acessar-pedido-usando-a-barra-de-busca-global).
2. Na seção **A faturar**, clique em `Alterar itens`.
3. Na página **Gerenciar itens do pedido**, clique em <i class="fas fa-plus"></i> `Adicionar item`.
4. Na página **Adicionar itens**, na <i class="fas fa-search"></i> barra de busca, digite o nome do produto desejado.
5. Clique em <i class="fas fa-plus"></i> `Selecionar`. Você pode adicionar quantos produtos quiser, basta repetir o procedimento. A cada nova adição, a seguinte mensagem aparece: _“Item selecionado”_.
  > Se você clicar sobre o nome do produto, você será redirecionado para a página do produto no site da loja.
6. A seguir, clique em `Adicionar itens selecionados`. A seguinte mensagem vai aparecer: _“Itens adicionados”_.

    ![change_order_adding_product_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/como-alterar-pedidos_2.png)

7. Revise os [detalhes do valor da alteração](#consultar-detalhes-dos-valores-da-alteracao). É possível [reverter uma alteração](#reverter-acoes).
8. Clique em `Revisar e aplicar`.
9. No campo **Motivo das alterações**, escreva de forma breve o motivo pelo qual o pedido está sendo alterado. Se desejar, revise novamente as alterações a serem feitas.
10. Clique em `Aplicar`. A seguinte mensagem de confirmação vai aparecer: _“Solicitação de alteração concluída”._

Feito isso, você retorna à página de detalhes do pedido e, na seção **A faturar,** consegue ver cada novo produto adicionado.

### Remover itens

Para remover um ou mais itens de um pedido, realize os seguintes passos:

1. No Admin VTEX, acesse a página de detalhes do pedido em **Pedidos >** [Todos os pedidos](#acessar-pedido-pela-pagina-todos-os-pedidos) ou pela [barra de busca global](#acessar-pedido-usando-a-barra-de-busca-global).
2. Na seção **A faturar**, clique em `Alterar itens`.
3. Na página **Gerenciar itens do pedido**, clique na seta para baixo <i class="fas fa-angle-down"></i> até o número da quantidade desejada, ou digite o número no campo. Feito isso, a página apresenta o preço e o número da quantidade anteriores tachados e aparece a mensagem _“Item editado”_.

    ![change_order_removing_items_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/como-alterar-pedidos_3.png)

4. Revise os [detalhes do valor da alteração](#consultar-detalhes-dos-valores-da-alteracao). É possível [reverter uma alteração](#reverter-acoes).
5. A seguir, clique em `Revisar e aplicar`.
6. No campo **Motivo das alterações**, escreva de forma breve o motivo pelo qual o pedido está sendo alterado. Se desejar, revise novamente as alterações a serem feitas.
7. Clique em `Aplicar`. A seguinte mensagem de confirmação vai aparecer: _“Solicitação de alteração concluída”._

Feito isso, você retorna à página de detalhes do pedido e, na seção **A faturar,** consegue ver a nova quantidade de itens após a remoção.

### Excluir produto

Para excluir um produto de um pedido, realize os seguintes passos:

1. No Admin VTEX, acesse a página de detalhes do pedido em **Pedidos >** [Todos os pedidos](#acessar-pedido-pela-pagina-todos-os-pedidos) ou pela [barra de busca global](#acessar-pedido-usando-a-barra-de-busca-global).
2. Na seção **A faturar**, clique em `Alterar itens`.
3. Na página **Gerenciar itens do pedido**, clique no ícone lixeira <i class="far fa-trash-alt"></i> `Remover item`. A seguinte mensagem de confirmação vai aparecer: _“Item removido”._

    ![change_order_removing_product_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/como-alterar-pedidos_4.png)

4. Revise os [detalhes do valor da alteração](#consultar-detalhes-dos-valores-da-alteracao). É possível [everter uma alteração](#reverter-acoes).
5. A seguir, clique em `Revisar e aplicar`.
6. No campo **Motivo das alterações**, escreva de forma breve o motivo pelo qual o pedido está sendo alterado. Se desejar, revise novamente as alterações a serem feitas.
7. Clique em `Aplicar`. A seguinte mensagem de confirmação vai aparecer: _“Solicitação de alteração concluída”._

Feito isso, você retorna à página de detalhes do pedido e, na seção **A faturar,** consegue ver o pedido sem o produto que foi excluído.

### Substituir itens

Para substituir itens do pedido, realize os seguintes passos:

1. No Admin VTEX, acesse a página de detalhes do pedido em **Pedidos >** [Todos os pedidos](#acessar-pedido-pela-pagina-todos-os-pedidos) ou pela [barra de busca global](#acessar-pedido-usando-a-barra-de-busca-global).
2. Na seção **A faturar**, clique em `Alterar itens`.
3. Na página **Gerenciar itens do pedido**, na linha do produto que deseja substituir, clique no menu <i class="fas fa-ellipsis-v"></i> e selecione <i class="fas fa-pencil-alt"></i> `Substituir item`.
4. Na página **Substituição de produtos**, na <i class="fas fa-search"></i> barra de busca, digite o nome do produto que vai substituir o anterior.
5. Clique em <i class="fas fa-plus"></i> `Selecionar`. A seguinte mensagem vai aparecer: _“Item selecionado”_. Se você clicar sobre o nome do produto, você será redirecionado para a página do produto no site da loja.
6. A seguir, clique em `Aplicar`. A seguinte mensagem vai aparecer: _“Alterações aplicadas”_.
7. Revise os [detalhes do valor da alteração](#consultar-detalhes-dos-valores-da-alteracao). É possível [reverter uma alteração](#reverter-acoes).
8. Clique em `Revisar e aplicar`.
9. No campo **Motivo das alterações**, escreva de forma breve o motivo pelo qual o pedido está sendo alterado. Se desejar, revise novamente as alterações a serem feitas.
10. Clique em `Aplicar`. A seguinte mensagem de confirmação vai aparecer: _“Solicitação de alteração concluída”_.

Feito isso, você retorna à página de detalhes do pedido e, na seção **A faturar**, consegue ver o item que substituiu o anterior.

### Alterar peso

Para alterar o peso de um item, realize os seguintes passos:

1. No Admin VTEX, acesse a página de detalhes do pedido em **Pedidos >** [Todos os pedidos](#acessar-pedido-pela-pagina-todos-os-pedidos) ou pela [barra de busca global](#acessar-pedido-usando-a-barra-de-busca-global).
2. Na seção **A faturar**, clique em `Alterar itens`.
3. Na página **Gerenciar itens do pedido**, na linha do produto desejado, digite o novo número do peso no campo. A unidade de medida vai estar especificada de acordo com as configurações no Catálogo. 
4. Feito isso, a página apresenta o preço e o peso anteriores tachados e a mensagem _“Item editado”_.

    ![change_order_changing_weight_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/como-alterar-pedidos_5.png)

5. Revise os [detalhes do valor da alteração](#consultar-detalhes-dos-valores-da-alteracao). É possível [reverter uma alteração](#reverter-acoes).
6. Clique em `Revisar e aplicar`.
7. No campo **Motivo das alterações**, escreva de forma breve o motivo pelo qual o pedido está sendo alterado. Se desejar, revise novamente as alterações a serem feitas.
8. Clique em `Aplicar`. A seguinte mensagem de confirmação vai aparecer: _“Solicitação de alteração concluída”_.

Feito isso, você retorna à página de detalhes do pedido e, na seção **A faturar**, consegue ver o peso do item atualizado.

## Aspectos comuns

Quando você está realizando algum [tipo de alteração](#tipos-de-alteracao-de-pedidos) do pedido, existem ações comuns e elas foram reunidas nesta seção.

### Consultar detalhes dos valores da alteração

Na página **Gerenciar itens do pedido**, enquanto você altera o pedido, o valor total vai sendo automaticamente atualizado em **Valor total**, no canto inferior da página. Além disso, é possível ver a variação de preço resultante de cada operação sendo realizada. Para ver detalhes dos valores, clique na seta <i class="fas fa-angle-up"></i> ao lado do preço total.

### Reverter ações

Na página **Gerenciar itens do pedido**, se você se arrepender de alguma alteração realizada, é possível desfazê-la. Para isso, clique no ícone seta curva `Desfazer ação`. Feito isso, uma mensagem de confirmação vai aparecer: _“Alteração desfeita”_, e a ação terá sido revertida.

![change_order_undoing_actions_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/como-alterar-pedidos_6.png)

## Erros de processamento

Em qualquer tipo de [alteração de pedido](#tipos-de-alteracao-de-pedidos), na página **Gerenciar itens do pedido**, ao clicar em `Revisar e aplicar`, pode ser que a alteração não seja aprovada, o que te faz ser redirecionado de volta para a página de detalhes do pedido. Alguns dos motivos para alterações serem negadas são:

* **Item indisponível:** o SKU pode [não aparecer no site da loja](/pt/faq/por-que-o-produto-nao-aparece-no-site) ou estar indisponível devido a erro ou falta de configurações de catálogo, preço ou logística. 
* **Inventário insuficiente:** a quantidade de itens adicionados ou substituídos na alteração pode ser maior do que a quantidade de itens disponíveis para venda no seu [inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque).

Se as configurações de **Catálogo** e inventário estiverem corretas e ainda assim as tentativas de alteração de pedidos resultarem em erro, pode ser um problema de processamento da plataforma. Neste caso, recomendamos entrar em contato com [nosso suporte](https://support.vtex.com/hc/pt-br/requests).

