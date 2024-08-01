---
title: 'A tabela de tamanhos MELI não está funcionando para tamanhos com letras'
id: 7vAViV3MmC7zOSTF0cFTYy
status: PUBLISHED
createdAt: 2023-07-24T12:04:19.589Z
updatedAt: 2023-09-12T15:04:46.716Z
publishedAt: 2023-09-12T15:04:46.716Z
firstPublishedAt: 2023-07-24T12:04:20.171Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: a-tabela-de-tamanhos-meli-nao-esta-funcionando-para-tamanhos-com-letras
locale: pt
kiStatus: Fixed
internalReference: 867262
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente, nosso recurso MELI Size Chart não está funcionando para tamanhos com letras, por exemplo:

Tamanho = "P", "M", "G".

## Simulação



Dentro da tela do mapeador, podemos ver o recurso de tabela de tamanhos disponível para a integração do MELI. Portanto, se os vendedores mapearem um tamanho com seus valores como letras, ele não funcionará e uma mensagem de erro será exibida no produto da ponte, como abaixo:

"O valor do atributo SIZE é inválido: P. Este valor deve ser igual ao da tabela de medidas.

## Workaround



Os tamanhos estão funcionando atualmente com números, portanto, os vendedores podem usar os números em vez de letras.





