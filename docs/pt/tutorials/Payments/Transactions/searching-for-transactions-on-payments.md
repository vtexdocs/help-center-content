---
title: 'Buscar transações no Pagamentos'
id: tutorials_459
status: PUBLISHED
createdAt: 2017-04-27T22:03:50.721Z
updatedAt: 2023-03-30T15:27:27.126Z
publishedAt: 2023-03-30T15:27:27.126Z
firstPublishedAt: 2017-04-27T23:03:27.019Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: transacoes-como-buscar
locale: pt
legacySlug: transacoes-como-buscar
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

As buscas em Transações podem ser feitas de diversas formas e com diversos tipos de dados. As opções de busca são:

- __E-mail do Cliente__
- __Nome do Cliente__
- __CPF do Cliente__
- __Código da Transação:__ código que identifica a transação no gateway da plataforma VTEX.
- __TID do Pagamento:__ número utilizado para identificação da transação com o conector.
- __ID do Pagamento:__ número utilizado para identificação do pagamento com o conector.

Para buscar uma transação no módulo de Transações da VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos** > **Transações**, ou digite **Transações** na barra de busca no topo da página.
2. Na barra de busca insira uma das informações listadas acima.

Para voltar à listagem original das transações, basta apagar o valor anteriormente inserido no campo de busca.

## Link da transação no Gerenciamento de Pedidos

Ao clicar em um pedido no Gerenciamento de Pedidos, você vai para a página que traz um resumo sobre ele. As principais informações estão lá, mas você pode ver ainda mais detalhes se clicar no link _Detalhes da transação_:

![Link transação OMS (PT)](https://images.ctfassets.net/alneenqid6w5/4HbLRjdyNyusgoSYAUmIee/c26af370c7be5288ab100d87a30d34ee/Link_transa____o_OMS__PT_.png)

## TID do Pagamento e ID do Pagamento

A busca utilizando esses códigos necessariamente precisa conter todos os dígitos, ou sua busca retornará vazia. Veja abaixo como encontrá-lo:

![Códigos PT](https://images.ctfassets.net/alneenqid6w5/6cKptwp1XqOYs6umGEeW4m/44436d8afbf8055d10aeddd53f83f3ca/C__digos_PT.png)

Estes valores, dentro do detalhe da transação representarão a comunicação junto ao respectivo conector. Nos [eventos da transação](/pt/tutorial/como-visualizar-detalhes-do-pedido) será possível validar cada contato feito.

## Nome do cliente

O nome que deverá ser buscado é o dado pessoal que foi cadastrado na compra e não a razão social ou nome fantasia em caso de pessoa jurídica. Pode-se buscar pelo nome, sobrenome ou ambos, tudo em maiúsculo ou minúsculo, em qualquer uma das letras do nome.

## CPF

Deve-se preencher o número completo do documento sem as pontuações.

## Diretamente pela URL

Uma outra forma de fazer a busca é inserindo o parâmetro diretamente na URL da página. Normalmente a estrutura de URL do Pagamentos é:

`https://nomedaloja.vtexcommercestable.com.br/admin/pci-gateway#/transactions?_sort=startDate`

Caso queira fazer a busca diretamente na URL, utilize o parâmetro **&amp;q=** e digite o dado que deseja buscar. 

__Exemplo:__ se fosse buscar o pedido 500408, na URL bastaria fazer o seguinte:

`https://nomedaloja.vtexcommercestable.com.br/admin/pci-gateway#/transactions?_sort=startDate&amp;q=500408`
