---
title: 'Campos não sinalizados como obrigatórios no Master Data levam a erro no Checkout'
id: 1iB9Zy7FPH2ge6L7AVyHxN
status: PUBLISHED
createdAt: 2019-09-17T21:45:28.631Z
updatedAt: 2022-12-22T20:45:54.022Z
publishedAt: 2022-12-22T20:45:54.022Z
firstPublishedAt: 2019-09-24T14:41:50.884Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: campos-nao-sinalizados-como-obrigatorios-no-master-data-levam-a-erro-no-checkout
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao obter os endereços que um cliente pode ter, o checkout não está validando os registros que não possuem os campos obrigatórios, principalmente o campo "País". Isto significa que, ao exibir as opções para selecionar o endereço, é gerado um erro no momento em que o cliente escolhe um endereço sem os dados, por exemplo, de "País". O que torna confuso para o cliente que é diretamente prejudicado por esse comportamento.

Mensagem: Não são permitidos múltiplos países nos endereços
Vale lembrar que, na entidade de dados "endereços" (AD), dentro do Master Data, esses campos são abertos, ou seja, podem ser colocados como não obrigatórios, e podem estar vazios. Então, nos momentos em que esta informação é alimentada por meio de integrações (usando nossas APIs), a porta se abre para ter registros que não possuem, por exemplo, os dados de "País", terminando no erro mencionado acima.
![image1](//images.ctfassets.net/alneenqid6w5/3eMExnt2FHAFOsBEt4nldh/80f92f5e5f02611d394cf3e1037a6865/image1.png)

__Comportamento esperado__

Impedir que esse erro ocorra, garantindo em algum momento a natureza obrigatória desse tipo de campo, por exemplo, do campo "País", seja no momento da alimentação dos registros do cadastro no Master Data ou quando o checkout obtiver as informações do endereço, ou ignorar endereços inconsistentes.

__Comportamento atual__

O checkout recebe as informações dos endereços que estão associados ao dito cliente/perfil, de forma a mostrá-los na etapa da informação de envio (../checkout/#/shipping/).

As opções são mostradas e, apesar de não ter os dados do país dentro do JSON (country) do OrderForm (selectedAddresses.[0].country), na interface do usuário, os endereços mostram o país. Isto significa que o cliente ou o gerente da loja não pode perceber facilmente que algumas informações críticas são necessárias para continuar a compra.

__JSON__
![image2](//images.ctfassets.net/alneenqid6w5/4uAXxjyD8rI8hdA0fq5T5B/d45c179e4038ca6be57883d307228cf6/image2.png)

__Checkout UI__
![image3](//images.ctfassets.net/alneenqid6w5/5Q1zZJRzUxPIziPp0Giqy3/79d822c3e9d6042e7399c6fa53958d47/image3.png)

## Simulação

Ex.:
1. Identifique um usuário que tenha mais de um endereço associado no Master Data e que não tenha informações do país no registro.
2. Adicione qualquer produto ao carrinho e identifique-se com o email desse cliente.
3. Tente modificar os dados de envio, ou seja, brincar com a seleção de endereços (levando em conta que o usuário terá mais de um).
4. Quando o endereço que não possui o campo do pais está selecionado, o erro aparecerá.

## Workaround

Garantir que os endereços no Master Data tenham o campo do país com as informações correspondentes, ou seja, não devem estar vazios ou sem informações válidas.

Notar que o país deve ser expresso no padrão ISO-Code de 3 dígitos.



