---
title: 'O formulário de upload do produto/SKU permite upload/download do formato UTF-16'
id: 3NSxmGXvgFKHd2C4v2EwWV
status: PUBLISHED
createdAt: 2022-06-08T20:04:18.508Z
updatedAt: 2024-02-16T20:26:55.864Z
publishedAt: 2024-02-16T20:26:55.864Z
firstPublishedAt: 2022-06-08T20:04:19.062Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: productsku-upload-form-allows-utf16-format-uploaddownload
locale: pt
kiStatus: No Fix
internalReference: 493402
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, se um usuário tentar carregar uma lista SKU para o formulário de promoção regular utilizando um arquivo .txt, se o arquivo carregado estiver no formato de codificação UTF-16, então será o arquivo carregado posteriormente.






## Simulação


1) Criar uma promoção regular e na seção #2 "A quais **ites** esta promoção se aplicará?", carregar uma lista UTF-16 formatada, válida da SKU para os arquivos da SKU ou do Produto

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

2) Salvar a promoção

3) Abra-o novamente e tente fazer o download do arquivo dado, seu formato de codificação ainda será UTF-16, o que muitas vezes pode causar confusão entre outros operadores de loja.






## Workaround


Insira manualmente as SKUs e/ou certifique-se de que o arquivo carregado é UTF-8

