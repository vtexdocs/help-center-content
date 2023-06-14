---
title: 'Configurações do público-alvo'
id: 4pSWJqg6EoI8mRjPhFNqLX
status: DRAFT
createdAt: 2020-06-29T21:25:09.623Z
updatedAt: 2022-07-21T22:00:34.537Z
publishedAt: 
firstPublishedAt: 2020-07-27T17:00:52.914Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: configuracoes-do-publico-alvo
locale: pt
legacySlug: configuracoes-do-publico-alvo
subcategory: 2cI57eZ3ZiWSeaQs26Gwys
---

Depois de realizar as [configurações da audiência de campanha](https://help.vtex.com/pt/tutorial/como-criar-campanhas), é possível criar um público-alvo para ela.

O público-alvo segmenta os usuários e condições elegíveis da audiência de campanha. Caso a audiência de campanha esteja ativa e vigente, ao atender todos os critérios definidos no público-alvo, as promoções associadas à audiência de campanha serão ativadas.

Quando todas as restrições da campanha forem atingidas e ela está ativada e elegível ao contexto de compra, não significa necessariamente que as promoções de audiências de campanhas associadas a ela sejam aplicadas. Para isso as restrições definidas na [promoção de audiência de campanha](https://help.vtex.com/pt/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume) também devem ser atendidas.

## Defina seu público-alvo

- Nome: nome do público-alvo.

## Itens a serem usados neste público-alvo

__Categorias, Marcas, Coleções e SKUs__: deve atender a todas condições cadastradas. Selecione as Categorias, Marcas, Coleções e SKUs que você quer estejam ou não incluídas na audiência de campanha.

Exemplo: se forem cadastradas uma categoria e uma marca, a audiência de campanha somente será ativada caso o produto atenda a essas duas condições.

__Pelo menos 'X' produtos se enquadram nos critérios acima__: só é possível configurá-la se todos os conectores estiverem configurados com o valor "Iguais a".

## Condições para seu público-alvo ser aplicado

- __Valor mínimo e máximo do pedido__: a audiência de campanha será ativada caso o total do carrinho esteja dentro do intervalo dos valores preenchidos. Este total considerará a soma dos produtos no carrinho que estejam contemplados na audiência de campanha.
- __Usar histórico em promoção__: caso selecionado, escolha o período de tempo em que o histórico deve ser considerado. Você pode adicionar datas específicas ou contar dias a partir da data de hoje.
- __Valor do item entre__: a audiência de campanha será ativada caso o valor do item estiver atendendo ao intervalo de valores preenchidos.
- __Restrição de Campanha por BIN__: a audiência de campanha será ativada caso o BIN do cartão esteja entre os preenchidos.
- __Marketing Tags__: campo utilizado para restringir a ativação da audiência de campanha caso a compra seja realizada pelo [sistema de recorrência da VTEX](https://help.vtex.com/pt/tutorial/setting-up-subscription-v2--1FA9dfE7vJqxBna9Nft5Sj). Para configurá-lo basta habilitar e inserir o valor `vtex-recurrence`.
- __Cluster de clientes__: a audiência de campanha será ativada caso o cliente esteja cadastrado no cluster selecionado.
- __Número máximo de parcelas__: a audiência de campanha será ativada se o número de parcelas selecionadas pelo cliente for menor ou igual ao número máximo cadastrado.
- __Apenas na primeira compra__: a audiência de campanha só será ativada caso seja a primeira compra do cliente.
- __Preço "de" e "por" são iguais__ ou __Preço "de" e "por" são diferentes__: somente uma opção pode ser selecionada. Se refere aos valores do cadastro do produto.
- __O CEP de entrega deve__: a audiência de campanha será ativada caso o CEP esteja atendendo à regra configurada.
- __Afiliados__: a audiência de campanha será ativada se a compra for realizada em um dos afiliados configurados. __Atenção__: caso o afiliado não seja outra loja VTEX está opção não se aplica.
- __utm_source__: selecione a utm_source desejada ou crie uma nova para vincular com a audiência de campanha.
- __utm_campaign__: selecione a utm_campaign desejada ou crie uma nova para vincular com a audiência de campanha.
- __Tipo de frete__: a audiência de campanha será ativada caso o tipo de frete for o mesmo que o cadastrado.
- __Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente__: a audiência de campanha será ativada somente após o cliente efetivamente selecionar a forma de entrega em questão. Enquanto não for selecionada, a audiência de campanha não será ativada.
- __Meio de pagamento__: a audiência de campanha será ativada caso a forma de pagamento selecionada pelo cliente for a mesma cadastrada. Essa audiência de campanha somente será ativa na finalização da compra, quando o cliente selecionar a mesma forma de pagamento cadastrada aqui. __Atenção__: audiências de campanhas por forma de pagamento ou número de parcelas não atendem a pedidos pagos com dois cartões ou vale-compras.
