---
title: 'Como alterar pedidos (Beta)'
id: 7btlG91rb6sHpW1dkd2kBw
status: PUBLISHED
createdAt: 2023-11-27T22:40:33.769Z
updatedAt: 2024-04-09T18:03:22.045Z
publishedAt: 2024-04-09T18:03:22.045Z
firstPublishedAt: 2023-11-28T15:16:50.272Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: how-to-change-orders-beta
locale: pt
legacySlug: como-alterar-pedidos-beta
subcategoryId: 3LQ1Tl0u4frEOd45BkjFAm
---

>ℹ️ Essa funcionalidade está em fase beta, o que significa que estamos trabalhando para aprimorá-la. Se você deseja utilizar a **Alterar pedido (Beta)**, entre em contato com [nosso Suporte](https://help.vtex.com/pt/support) e informe o(s) [account name(s)](https://help.vtex.com/pt/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC) nos quais deseja ativá-la.

A funcionalidade [Alterar pedido (beta)](https://help.vtex.com/pt/tutorial/como-funciona-a-alterar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ) permite que você edite um pedido de diversas formas, seja a mudança motivada pela vontade do cliente, indisponibilidade de produtos ou outros motivos. 

Este artigo apresenta de quais maneiras o pedido pode ser alterado e como realizar essas ações. As seções apresentadas neste artigo são as seguintes:

- [Requisitos](#requisitos)
- [Tipos de alteração de pedidos](#tipos-de-alteracao-de-pedidos)
- [Aspectos comuns](#aspectos-comuns)
- [Erros de processamento](#erros-de-processamento)

>⚠️ Para saber sobre as [características gerais](https://help.vtex.com/pt/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ#caracteristicas-gerais) em cenários de alteração de pedidos, incluindo reserva, atualização de inventário e contas franquia, ou para entender questões de [preço, pagamento e fatura](https://help.vtex.com/pt/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ#mudancas-de-preco), veja o artigo [Como funciona a Alterar pedido (Beta)](https://help.vtex.com/pt/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ).

## Requisitos

Existem algumas condições para a alteração de pedidos relacionadas ao status do pedido. Veja os detalhes a seguir.

### Status do pedido a ser alterado

Durante o [fluxo do pedido](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196), o único status no qual a **Alterar pedido (beta)** é válida pelo Admin VTEX é em `preparando entrega`. Para informações sobre alterações por API, veja o artigo [Como funciona a Alterar pedido (Beta)](https://help.vtex.com/pt/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ).

### Permissão no Licence Manager

Para um usuário ser capaz de alterar pedidos, o seu [perfil de acesso](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) precisa estar associado a pelo menos um dos seguintes [recursos do Licence Manager](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3):

* `Orders Full Access`
* `Change order`

## Tipos de alteração de pedidos

As principais alterações de pedidos que podem ser realizados pelo Admin VTEX são: 

* **Adicionar:** uma quantidade de itens ou novos produtos.
* **Remover:** uma quantidade parcial ou total de itens.
* **Alterar peso:** os itens podem passar a ter um peso maior ou menor.
* **Substituir itens:** trocar itens por outros, incluindo itens precificados por peso.
* **Alterar preço:** [mudar valor total do pedido](https://help.vtex.com/pt/tutorial/alterar-valor-total-do-pedido--2asq4BmxvSD8Tw9xpfZuMo).

Todas estas ações são realizadas pela [página de detalhes](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl) do pedido, que você acessar de duas formas, descritas a seguir.

### Acessar pedido pela página Todos os pedidos

No Admin VTEX, acesse **Pedidos >** [Todos os pedidos](https://help.vtex.com/pt/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi) e clique no pedido desejado, ou digite **Todos os pedidos** na barra de busca no topo da página. Em seguida, clique no pedido desejado. Se necessário, você pode utilizar [filtros](https://help.vtex.com/pt/tutorial/filtrar-todos-pedidos--tutorials_192) para refinar sua busca.

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

>ℹ️ É possível realizar uma única alteração no pedido ou combinar várias de uma só vez. Não existe um limite para quantas vezes um pedido pode ser alterado. Para mais informações, veja o artigo [Como funciona a Alterar pedido (Beta)](https://help.vtex.com/pt/tutorial/como-funciona-a-alterar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ).

### Adicionar itens

Para adicionar um ou mais itens ao pedido, realize os seguintes passos:

1. No Admin VTEX, acesse a página de detalhes do pedido em **Pedidos >** [Todos os pedidos](#acessar-pedido-pela-pagina-todos-os-pedidos) ou pela [barra de busca global](#acessar-pedido-usando-a-barra-de-busca-global).
2. Na seção **A faturar**, clique em `Alterar itens`.
3. Na página **Gerenciar itens do pedido**, clique na seta para cima <i class="fas fa-angle-up"></i> até o número da quantidade desejada, ou digite o número no campo. Feito isso, a página vai apresentar o preço e o número da quantidade anteriores tachados e vai aparecer a seguinte mensagem: _“Item editado”_.

    ![change_order_adding_items_PT](https://images.ctfassets.net/alneenqid6w5/5dqVuyGULGm5TJH2tliSoO/ac1af94d506fdcd6be258f23cb51bd75/change_order_adding_items_PT.png)

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

    ![change_order_adding_product_PT](//images.ctfassets.net/alneenqid6w5/6a1gqq7WZiTO1lXZL26tU0/1107b86fb89f9e1a76268693807bf4db/change_order_adding_product_PT.png)

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

    ![change_order_removing_items_PT](//images.ctfassets.net/alneenqid6w5/1fyXdA3TCu89tVktrQTFOr/1ce6cbceb54dc71fe5da0bd37b2cd848/change_order_removing_items_PT.png)

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

    ![change_order_removing_product_PT](//images.ctfassets.net/alneenqid6w5/6aN2IcHBxHHhFYIsy8ihRN/9130a233b2492ba003f4a93415bf16e1/change_order_removing_product_PT.png)

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

    ![change_order_changing_weight_PT](//images.ctfassets.net/alneenqid6w5/354LTV0LRZmcCXsB1oJkTw/a34686dc7fa270893387038e3472595e/change_order_changing_weight_PT.png)

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

![change_order_undoing_actions_PT](//images.ctfassets.net/alneenqid6w5/GcSxHKn9jphCgi8eNQarG/049029b660f8db15b1846d3098a34ea6/change_order_undoing_actions_PT.png)

## Erros de processamento

Em qualquer tipo de [alteração de pedido](#tipos-de-alteracao-de-pedidos), na página **Gerenciar itens do pedido**, ao clicar em `Revisar e aplicar`, pode ser que a alteração não seja aprovada, o que te faz ser redirecionado de volta para a página de detalhes do pedido. Alguns dos motivos para alterações serem negadas são:

* **Item indisponível:** o SKU pode [não aparecer no site da loja](https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382) ou estar indisponível devido a erro ou falta de configurações de catálogo, preço ou logística. 
* **Inventário insuficiente:** a quantidade de itens adicionados ou substituídos na alteração pode ser maior do que a quantidade de itens disponíveis para venda no seu [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139).

Se as configurações de **Catálogo** e inventário estiverem corretas e ainda assim as tentativas de alteração de pedidos resultarem em erro, pode ser um problema de processamento da plataforma. Neste caso, recomendamos entrar em contato com [nosso suporte](https://support.vtex.com/hc/pt-br/requests).

