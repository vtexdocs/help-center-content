---
title: "A alteração manual de 'flagSKU' no URL permite que um tipo de especificação seja alterado indevidamente."
id: 1hcfTgeb1sgHV0BVm1DGoP
status: PUBLISHED
createdAt: 2024-08-19T14:52:40.859Z
updatedAt: 2024-08-19T14:52:42.128Z
publishedAt: 2024-08-19T14:52:42.128Z
firstPublishedAt: 2024-08-19T14:52:42.128Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-alteracao-manual-de-flagsku-no-url-permite-que-um-tipo-de-especificacao-seja-alterado-indevidamente
locale: pt
kiStatus: Backlog
internalReference: 1083333
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, quando uma especificação é criada, ela é definida como um tipo de SKU ou de produto e isso não deve ser alterado após sua criação.

No entanto, há uma falha no administrador do catálogo que permite que esses campos sejam alterados incorretamente de seu tipo original (de SKU para produto ou vice-versa), ao manipular o URL da página de administração.

## Simulação


1 - Acesse uma lista de especificações de produtos em sua conta https://account_name.myvtex.com/admin/site/Campo.aspx

2 - crie uma especificação e clique em salvar

3 - seu formato terá os seguintes parâmetros de consulta (exemplo) ...CampoForm.aspx?Id=20&**flagSku=0**&idCategoria=3 --> o dado "flagSKu" = 0 significa que é uma especificação de produto.

4 - altere esse sinalizador para =1 e pressione Enter.

5 - Ao recarregar a página, pressione salvar.

6 - A especificação do produto agora foi convertida em uma especificação do produto, o que não é um comportamento desejado no catálogo

## Workaround


-





