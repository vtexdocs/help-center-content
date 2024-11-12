---
title: 'Planilha de imagem não importada. Mensagem de erro: Falha no registro de processamento.'
id: 4HKn7B4b4Au5NFfg87Zu6T
status: PUBLISHED
createdAt: 2022-11-04T12:17:16.480Z
updatedAt: 2022-11-25T21:41:55.540Z
publishedAt: 2022-11-25T21:41:55.540Z
firstPublishedAt: 2022-11-04T12:17:17.206Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: image-spreadsheet-not-importing-error-message-fail-to-process-record
locale: pt
kiStatus: Backlog
internalReference: 691803
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Às vezes, ao tentar importar uma planilha de imagem com URLs do vteximg.com.br ou vtexassets.com que são definidos como "https://" em vez de "http://", a importação falha. A mensagem de erro é:

"Falha no processamento de registros. Certifique-se de que os dados de sua folha de trabalho estejam consistentes e tente novamente. Detalhes do erro: Ocorreu um erro ao enviar o pedido".
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)



## Simulação



1. Tente importar uma planilha usando URLs do vteximg.com.br ou vtexassets.com que contenham https://...
2. Verifique se a importação falha
3. Tente importar a mesma planilha usando agora http://
4. Verifique se a importação funciona.

PS: Se na etapa 4 a importação ainda falhar, verifique se a imagem está definida como .jpg e tente novamente.



## Workaround


Use URLs com http:// quando as imagens forem de vteximg.com.br ou vtexassets.com

