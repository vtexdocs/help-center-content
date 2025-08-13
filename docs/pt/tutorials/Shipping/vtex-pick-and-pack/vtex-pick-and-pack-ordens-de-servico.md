---
title: 'VTEX Pick and Pack: Ordens de serviço'
id: 7bUwvmTY6eOqxzhyMIIzvz
status: PUBLISHED
createdAt: 2024-01-03T18:38:05.781Z
updatedAt: 2024-01-03T20:13:50.986Z
publishedAt: 2024-01-03T20:13:50.986Z
firstPublishedAt: 2024-01-03T19:55:03.094Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-worksheets
legacySlug: vtex-pick-and-pack-ordens-de-servico
locale: pt
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

> ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, preencha nosso [formulário](https://vtex.com/br-pt/contato/) apontando no campo `Comentários` o nome do produto desejado.

**Ordens de serviço** é uma página do Admin VTEX que gerencia, em tempo real, as ordens de serviço utilizadas pelos separadores para agrupar e separar os itens de cada pedido. O separador pode agrupar quantos pedidos desejar em cada ordem de serviço. 

Esta página permite que você realize as seguintes ações: 

* [Criar ordem de serviço](#criar-ordem-de-servico)
* [Buscar ordem de serviço](#buscar-ordem-de-servico)
* [Filtrar ordens de serviço](#filtrar-ordem-de-servico)

![pick-pack-ordem-servico-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_1.png)

As ordens de pedido são apresentadas em cartões contendo as seguintes informações: 

![pick-pack-ordem-servico-2-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_2.png)

* ID da ordem de serviço.
* Quantidade de pedidos contidos na ordem de serviço.
* Quantidade de itens contidos na ordem de serviço.
* Nome do separador responsável pela ordem de serviço.
* Nome da instalação.
* Status da ordem de serviço.

## Criar ordem de serviço

Você pode criar uma nova ordem de serviço seguindo os passos descritos abaixo:

1. No menu **Pedidos não alocados**, selecione os pedidos desejados para incluir na ordem de serviço. Não há limite para a quantidade de pedidos por ordem de serviço.
2. Clique em `Alocar para`.
3. Clique na aba **Manual** para criar manualmente a ordem de serviço.
4. Clique em `+` para criar uma ordem de serviço. Você pode criar mais de uma ordem de serviço.
5. Arraste os pedidos que deseja para a ordem de serviço.
  ![pick-pack-ordem-servico-3-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_3.png)
6. Clique em `Criar` para finalizar.

## Consultar ordem de serviço

Você pode otimizar a consulta por ordens de serviço a partir das seguintes abas:

* **Todos:** todas as ordens de serviço organizadas.
* **Separando:** ordens de serviço que estão em andamento, com a separação de itens dos pedidos.
* **Empacotando:** ordens de serviço que estão aguardando o envio.
* **Concluído:** ordens de serviço de pedidos que foram concluídos.
* **Cancelado:** ordens de serviço de pedidos cancelados.

Você também pode acessar mais informações de cada ordem de serviço clicando no botão <i class="fas fa-chevron-down"></i> no bloco.

![pick-pack-ordem-servico-4-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_4.png)

## Buscar ordem de serviço

Você pode buscar uma ordem de serviço utilizando a barra de busca. Você pode digitar o ID da ordem de serviço ou o ID do pedido que deseja encontrar.

## Filtrar ordem de serviço

Você pode refinar a busca e a visualização dos pedidos, selecionando a opção **Filtrar**. Filtreas ordens de serviço pelas opções: 

* **Categorias:** categorias que contém os itens dos pedidos.
* **Separadores disponíveis:** pelos separadores disponíveis.
* **Instalações:** pelas instalações cadastradas, podendo ser todas ou específicas.
