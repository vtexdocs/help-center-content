---
title: 'Cuidados ao definir a numeração de pedido'
id: VAKKptfcaOxFxM8gfPobu
status: PUBLISHED
createdAt: 2019-10-23T16:53:33.949Z
updatedAt: 2023-03-30T15:56:41.331Z
publishedAt: 2023-03-30T15:56:41.331Z
firstPublishedAt: 2019-10-29T17:23:28.798Z
contentType: tutorial
productTeam: Post-purchase
author: 1E4UkWguFZAXjkguvNHPIv
slug: cuidados-ao-definir-a-numeracao-de-pedido
legacySlug: cuidados-ao-definir-a-numeracao-de-pedido
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

Ao definir o formato de numeração dos pedidos de uma loja, é necessário tomar determinados cuidados. Abaixo listamos alguns deles:

- A estrutura de pedidos como prefixo, sufixo e numeração do sequence, uma vez escolhida,  é **inalterável**. Esta opção é feita ao subir a loja, portanto é importante ter cautela ao escolher entre os dois formatos: **A** ou **B**. Por padrão, sua loja segue a opção de 12 dígitos numéricos **A**, mas você pode selecionar o formato alfanumérico no cadastro. Porém, depois de escolhida, não poderá ser alterada.

- A numeração do padrão **B** **não segue necessariamente** uma sequência ou opção alfanumérica. Eles podem ser distintos, sem necessariamente uma lógica na ordem. Todo pedido tem `orderId` e `sequence`. O `orderId` vem com os 12 dígitos, e o `sequence` sempre vem com 6 dígitos, começando por `500001`.

- Independente do formato, os números seguem um padrão crescente, mas a diferença entre um número e outro (incremento) é aleatória. Isso garante que ninguém fora da loja consiga estimar quantos pedidos foram concretizados em determinado período.

- O `orderId` pode ser prefixado com `XYZ-`, para distinguir pedidos de afiliado. Essas letras são o ID de afiliado que a loja cadastra e informa ao marketplace externo. Nesses casos, ele tem um ID de pedido que vai fugir da numeração dos pedidos fechados pela loja. Isso significa que os padrões alfanuméricos ou numéricos de que falamos acima são para pedidos fechados pelo marketplace. Os pedidos externos, que são integrados diretamente para o fulfillment da loja, vão ter o padrão `{afiliado}-{externalId}`. O `externalId` não tem formato definido, visto que segue o padrão do marketplace.

