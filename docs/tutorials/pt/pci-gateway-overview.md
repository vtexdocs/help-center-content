---
title: Pagamentos - Visão Geral
id: tutorials_458
status: DRAFT
createdAt: 2017-04-27T22:03:42.658Z
updatedAt: 2023-03-30T15:13:19.482Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:26.882Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: pci-gateway-visao-geral
legacySlug: pci-gateway-visao-geral
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

**Pagamentos** é o módulo responsável por intermediar e gerenciar todas as transações e pagamentos entre a sua loja VTEX, operadoras financeiras e os seus clientes. Nele, você faz consultas como status das transações, estornos, cancelamentos, liquidações e também configurações como condições para as formas de pagamento.

# Começando a usar

![new-admin-pagamentos ](//images.ctfassets.net/alneenqid6w5/1QtaQtxOB2gYys8yqiaEkE/a10f07d80939b53ae95255b41e5ee6f7/NEW_ADMIN_PAGAMENTOS_PT.png)

Criado para oferecer a flexibilidade máxima em relação às configurações de pagamento, o módulo de **Pagamentos** processa as transações com base em alguns conceitos de negócio. Entenda cada um deles:

## Transações
Todos os pedidos em que o pagamento é transacionado pela VTEX, mesmo aqueles que não são autorizados, são registrados em Pagamentos. Na sua interface principal temos as transações listadas em ordem da mais recente para a mais antiga.

- http://help.vtex.com/pt/tutorial/transacoes-pci-gateway/

## Conciliações bancárias

É o local pelo qual o lojista aprova em lote os pagamentos dos pedidos fechados com boleto. Isso é possível através do upload de um arquivo tipo ._RET_ nos formatos CNAB 240 e CNAB 400, que é fornecido diariamente pelo banco, contendo as informações referentes à identificação do boleto, nosso número (que é o código do pedido), data e valor do pagamento.

- http://help.vtex.com/pt/tutorial/conciliacoes-bancarias/

## Vale-compra

O vale cadastrado em **Vale-compra** é como uma opção extra de pagamento da loja; configurado com um valor pré determinado em dinheiro e utilizado para desconto no valor do pedido na loja, o vale pode ou não ser reutilizável, recarregável e restrito a um cliente da loja em específico.  

- http://help.vtex.com/pt/tutorial/gift-card

## Configurações

### [Condições de pagamentos](/pt/tutorial/condicoes-de-pagamento)

É onde são definidas quais serão as formas de pagamento que serão oferecidas ao cliente e as configurações de comportamento de cada uma delas como, por exemplo, qual cartão de crédito que oferecerá determinado número de parcelas com ou sem juros, por um período estabelecido, para ser aplicado de acordo com uma política comercial e/ou condição comercial específicas.

Não necessariamente todas as formas de pagamentos estarão configuradas levando em consideração cada uma dessas condições, pois é customizável de acordo com a necessidade de cada loja.

### [Pagamentos customizados](/pt/tutorial/como-configurar-pagamento-customizado/)

Os meios de pagamento customizados permitem que você crie até 15 novas formas de pagamento para configurar uma condição de pagamento. Ou seja, imagine que sua loja quer oferecer a opção de pagamento com dinheiro como forma de pagamento. Para usá-la é preciso configurar um dos pagamentos customizados disponíveis. Esses meios de pagamento são separados em 3 categorias. Cada categoria permite 5 configurações.

### [Afiliações de Gateway](/pt/tutorial/afiliacoes-de-gateway/)

Uma afiliação de gateway é um conjunto de configurações que representa seu contrato com um gateway de pagamento de sua escolha. Com isso é possível, com muita flexibilidade, decidir por qual gateway de pagamento serão processados os diferentes tipos de transações da sua loja VTEX.

### [Contas alternativas](http://help.vtex.com/pt/tutorial/configurando-contas-alternativas)

As contas alternativas são uma funcionalidade desenvolvida para permitir que o pagamento dos produtos entregues por uma doca específica seja enviado para subcontas diferentes.

*O recurso de Contas Alternativas não será mais mantido e será descontinuado em breve*.

### [Notificações](/pt/tutorial/como-configurar-notificacoes/)

A área de notificações no módulo de Pagamentos é responsável pelo cadastro do e-mail que receberá todas as notificações de pagamento, como um estorno que precisa ser feito manualmente, por exemplo.
