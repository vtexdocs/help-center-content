---
title: 'O formulário de upload do produto/SKU permite upload/download do formato UTF-16'
id: 3NSxmGXvgFKHd2C4v2EwWV
status: PUBLISHED
createdAt: 2022-06-08T20:04:18.508Z
updatedAt: 2022-11-25T22:12:28.497Z
publishedAt: 2022-11-25T22:12:28.497Z
firstPublishedAt: 2022-06-08T20:04:19.062Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: o-formulario-de-upload-do-produtosku-permite-uploaddownload-do-formato-utf16
locale: pt
kiStatus: Backlog
internalReference: 493402
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, se um usuário tentar carregar uma lista SKU para o formulário de promoção regular utilizando um arquivo .txt, se o arquivo carregado estiver no formato de codificação UTF-16, então será o arquivo carregado posteriormente.






## Simulação


1) Criar uma promoção regular e na seção #2 "A quais **ites** esta promoção se aplicará?", carregar uma lista UTF-16 formatada, válida da SKU para os arquivos da SKU ou do Produto

 ![](https://vtexhelp.zendesk.com/attachments/token/v2q7rCm249CNqnRQjXxKRdjnx/?name=inline-242501829.png)

2) Salvar a promoção

3) Abra-o novamente e tente fazer o download do arquivo dado, seu formato de codificação ainda será UTF-16, o que muitas vezes pode causar confusão entre outros operadores de loja.






## Workaround


Insira manualmente as SKUs e/ou certifique-se de que o arquivo carregado é UTF-8

