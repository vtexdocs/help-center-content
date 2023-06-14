---
title: O PDP não carrega quando caracteres especiais são passados no link
id: 442RD31ld9TYWHAECLjTmu
status: PUBLISHED
createdAt: 2023-03-14T17:13:19.750Z
updatedAt: 2023-03-14T17:13:20.317Z
publishedAt: 2023-03-14T17:13:20.317Z
firstPublishedAt: 2023-03-14T17:13:20.317Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-pdp-nao-carrega-quando-caracteres-especiais-sao-passados-no-link
kiStatus: Backlog
internalReference: 770893
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Há alguns casos especiais em que a loja tem um link para uma página na qual é passado um caracter especial como '#' para passar uma propriedade, por exemplo, a cor do item, o que faz com que o PDP não carregue na primeira vez, ao invés disso ele continua tentando carregar, mas quando a página é atualizada ela carrega corretamente.

Este comportamento não deve bloquear a página para carregar devido a algumas configurações que a loja pode fazer, como, por exemplo, exibir as cores de um produto em páginas de busca.


##

## Simulação


Verifique se há uma loja que tenha uma configuração como a cor definida nas configurações de busca a ser dividida e eles vão para a página de busca de algum produto e chegam ao PDP a partir dele, se a propriedade for passada na URL ela irá travar devido ao link criado.


##

## Workaround


Atualmente a loja pode remover a fenda no lado da busca.





