---
title: 'Preço do produto não considerando o vendedor padrão no PDP'
id: 4VOIW6kCTfFZ3S9u3xtdDF
status: PUBLISHED
createdAt: 2022-02-23T21:52:42.520Z
updatedAt: 2024-02-16T20:27:12.071Z
publishedAt: 2024-02-16T20:27:12.071Z
firstPublishedAt: 2022-03-07T22:34:44.879Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: preco-do-produto-nao-considerando-o-vendedor-padrao-no-pdp
locale: pt
kiStatus: No Fix
internalReference: 429888
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao mostrar o preço no PDP, o componente ignora o Vendedor por Padrão, considerando o primeiro vendedor que foi registrado.


## Simulação


Component ProductPrice em GitHub está considerando sempre o primeiro vendedor a entrar na matriz, em vez de usar esta lógica.

        const commertialOffer = caminho(
          ['vendedores', 0, 'commertialOffer'],
          selectedItem
        )


## Workaround


N/A.

