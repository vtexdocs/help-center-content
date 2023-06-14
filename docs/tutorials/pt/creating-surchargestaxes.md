---
title: 'Criar taxa/imposto'
id: tutorials_321
status: PUBLISHED
createdAt: 2017-04-27T22:08:49.745Z
updatedAt: 2023-03-31T16:53:05.461Z
publishedAt: 2023-03-31T16:53:05.461Z
firstPublishedAt: 2017-04-27T23:03:14.603Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-criar-taxaimposto
locale: pt
legacySlug: como-criar-taxaimposto
subcategory: 18Gsips3u48UYCu0Ku2sWm
---

Taxa é o contrário de promoção, ou seja, é um adicional percentual inserido no preço do produto, visando aumentar o valor. A taxa pode ser configurada considerando diversos tipos de condições, como faixa de CEP, departamento e marca dos produtos, cluster de cliente etc. A taxa é inserida somente no carrinho, na área denominada **Imposto**.

A taxa é aplicada conforme o cadastro que é feito no seller. Então se no carrinho da sua loja tem um produto de outro seller, a taxa a ser aplicada nesse produto, será aquela que estiver cadastrada no admin do seller que é o dono do produto. Não será considerada a taxa cadastrada no módulo de Pricing do marketplace, ainda que essa taxa esteja associada a esse produto.

## Como criar

1. No Admin VTEX, acesse *Promoções > Taxas*, ou digite *Taxas* na barra de busca no topo da página.
2. Clique no botão **Nova Taxa**.
3. Preencha os campos conforme cada tipo descrito abaixo.
4. Clique em **Salvar**.

## Campos

### Quais os dados gerais desta taxa?

- **Nome**: Nome da taxa.
- **Status**: Ativa ou Inativa a taxa.
- **Descrição**: Descrição interna da taxa. O objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a taxa é devido à alguma regra especial, por exemplo.
- **Validade**: Data e hora de início e de fim da taxa. Pode ser usada uma data e/ou horário futuros, para que a taxa comece a ser aplicada no site. Caso seja configurada dessa forma, a taxa terá o status de agendada até que a data e horário sejam atingidos. Enquanto a taxa estiver válida, esta terá o status de ativa e ao término da data e hora definidos, o status será alterado para inativo automaticamente.
- **Qual o tipo e valor da Taxa?**:
  - **Taxa Percentual**: Percentual sobre o valor do produto que será adicionado ao valor.
  - **Taxa com base em fórmula**: Taxa seguirá o cálculo inserido no campo.
  - **Taxa percentual sobre frete**: Acréscimo percentual em cima do valor do frete.
- **Política Comercial**: Selecione as políticas comerciais onde a taxa será aplicada.

### Em quais itens esta taxa será aplicada?

- **Categorias, Marcas, Coleções e Produtos**: Deve atender a todas as condições cadastradas. Ex.: se for cadastrada uma categoria e uma marca, o produto deve atender a essas duas condições.

### Quais as condições para a taxa ser válida?

- **Valor acumulado em compras**: A taxa será aplicada caso o total de todas as compras já realizadas pelo cliente esteja atendendo ao valor preenchido.
- **Marketing Tags**: Campo utilizado para restringir a ativação da campanha caso a compra seja realizada pelo Sistema de Recorrência da VTEX. 
- **Afiliados**: Identificador de pedidos do marketplace
- **Cluster de clientes**: A taxa será aplicada caso o cliente esteja cadastrado no cluster selecionado.
- **O CEP de entrega deve**: A taxa será aplicada caso o CEP esteja atendendo à regra configurada.
- **Tipo de frete**: A taxa será aplicada caso o tipo de frete for o mesmo que o cadastrado.

## Agendamento

O agendamento de uma taxa ocorre quando é criada ou alterada com data e hora de validade com início posterior ao atual. Visualmente é possível identificar essas taxas na página principal do módulo de Taxas & Promoções, através de uma tarja laranja no canto superior direito do cartão da taxa, com a palavra agendada. Veja abaixo um exemplo de como fica o cartão de uma taxa quando agendada.

![agendamento.pt](https://images.ctfassets.net/alneenqid6w5/79wklIdW9FLzJZb8e4rxc0/6214e94e10b4df0cc4b07b7cc81e52f9/agendamento.pt.png)
