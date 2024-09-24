---
title: 'Atualizar quantidade de SKUs em estoque'
id: IKMWjOjMcMqKusSGko8c0
status: ARCHIVED
createdAt: 2018-10-02T19:10:45.879Z
updatedAt: 2022-01-11T19:32:49.878Z
publishedAt: 
firstPublishedAt: 2018-10-03T18:56:12.298Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: atualizar-quantidade-de-skus-em-estoque
locale: pt
legacySlug: atualizar-quantidade-de-skus-em-estoque
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

Dependendo da loja, é possível que as mudanças nas quantidades em estoque sejam feitas por um __ERP__, utilizando as [APIs da VTEX](https://developers.vtex.com/reference/logistics-api-overview). O objetivo deste artigo é orientar sobre como atualizar a informação de estoque de um SKU utilizando o admin da VTEX.

No módulo Estoque & Entrega, a ferramenta Gerenciar itens em estoque permite o controle e a edição de estoque dos itens da sua loja. Você pode filtrar conforme a quantidade disponível, bem como visualizar o histórico de movimentação de um SKU por todos os estoques utilizados pela loja, ou mesmo listar os pedidos que têm uma reserva do SKU. Há três maneiras de **atualizar a quantidade de SKUs em estoque** utilizando o admin da VTEX:

- Individualmente, atualizando um SKU específico.  
- Filtrando por quantidade, atualizando SKUs que possuem estoque abaixo de uma certa quantidade.  
- Massivamente, atualizando diversos SKUs via planilha.  

## Como atualizar SKUs individualmente

 1. Acesse o módulo **Estoque & Entrega**.  
 2. Clique na aba **Inventário**.  
 3. Busque por um **Produto**.  
*Caso o Id seja um número entre 1 e 9, insira o número 0 antes do Id para realizar a busca. Exemplo: 07.**  
 4. Na tela de *Atualizar Estoque*, preencha no campo **Atualizar contagem** a quantidade real de SKUs em estoque.  
*Este valor sempre deve ser preenchido com o valor de itens disponíveis em seu estoque. Ou seja, aqueles itens que você tem certeza que existem fisicamente para a entrega.*   
 5. Clique em **Salvar**.   

## Como atualizar SKUs filtrando por quantidade

 1. Acesse o módulo Estoque & Entrega.
 2. Clique na aba Inventário.
 3. Busque por **Itens em estoque abaixo de**.
 4. Selecione os SKUs desejados e clique em **Editar Selecionados**.   
*Caso a busca traga apenas um SKU com estoque abaixo do informado, você será redirecionado diretamente para a tela de Atualizar Estoque.*
 5. Na tela de *Atualizar Estoque*, preencha no campo **Atualizar contagem** a quantidade real de SKUs em estoque
*Este valor sempre deve ser preenchido com o valor de itens disponíveis em seu estoque. Ou seja, aqueles itens que você tem certeza que existem fisicamente para a entrega.*
 6. Clique em **Salvar**.  


### Campos da tabela Atualizar Estoque


- **Última contagem**: se refere ao último número que foi inserido no campo Atualizar Contagem.  
- **Itens reservados**: se refere ao número de SKUs que estão reservados para um pedido.  
Lembrando que um pedido pode ter reserva ativa do produto. Caso o produto não tenha sido despachado, será considerado apenas como item reservado. Entenda mais sobre pedidos faturados e reservas. Os pedidos com itens reservados, continuarão listados como reservados e impossibilitados de serem vendidos.
- **Itens em manuseio** se refere aos itens que estão em status de manuseio, com reserva reconhecida.  
- **Quantidade à venda** é o resultado do número de SKUs na *Última contagem* menos o número de *Itens reservados* e de *Itens em manuseio*.  

Os pedidos com itens reservados, continuarão listados como reservados e impossibilitados de serem vendidos. No exemplo abaixo temos o caso em que 10 unidades de Gatorade estão reservadas e os pedidos ainda não faturados. A medida que atualizamos a contagem em estoque, o sistema já simula qual será o resultado. No exemplo, até 10 itens temos estoque negativo, pois os pedidos com reserva ativa continuam listados. [Entenda melhor como funcionam as reservas.](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona/)

![Atualizar Estoque GIF](//images.contentful.com/alneenqid6w5/1lorbuip9ewo8gY8qg8wU0/07e97e612b4711f0f21c205b50e74867/InventoryUpdate.gif)



## Atualização massiva de SKUs por planilha
Para fazer uma edição massiva e atualizar o estoque de diversos SKUs, siga os passos do nosso artigo [importar e exportar planilha de estoque](https://help.vtex.com/pt/tutorial/importando-e-exportando-planilha-de-estoque--tutorials_2034).


## Por que meu estoque está negativo?

O cálculo da quantidade disponível de um item é realizado da seguinte forma:

`em estoque - reserva = disponível`

Quando a quantidade disponível está negativa, isso significa que existem mais itens reservados do que a quantidade total inserida em estoque. Dessa forma, vemos que o estoque foi atualizado para zero ou para uma quantidade menor que zero após reservas terem sido feitas. O estoque negativo ocorre ao tentarmos dar baixa no item de um pedido quando este item ainda está como reservado pelo sistema. O fluxo correto prevê que a baixa no estoque só ocorra após o status *Preparando Entrega*. Após este status, a reserva já está reconhecida. Antes disso, o sistema entenderá que o item que está sendo diminuído não é o item em reserva, atualizando o estoque incorretamente.



