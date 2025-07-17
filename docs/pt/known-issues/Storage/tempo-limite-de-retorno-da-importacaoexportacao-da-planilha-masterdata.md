---
title: "Tempo limite de retorno da importação/exportação da planilha MasterData"
id: 64De4JpmsgnQ2xckuOgYip
status: PUBLISHED
createdAt: 2024-12-13T17:12:25.937Z
updatedAt: 2024-12-13T17:12:26.798Z
publishedAt: 2024-12-13T17:12:26.798Z
firstPublishedAt: 2024-12-13T17:12:26.798Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: tempo-limite-de-retorno-da-importacaoexportacao-da-planilha-masterdata
locale: pt
kiStatus: Backlog
internalReference: 400265
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao exportar e/ou importar uma entidade, pode ocorrer um tempo limite nos seguintes cenários:

- Entidade com muitos campos;
- Um determinado campo com muitas informações;
- Muitos documentos na entidade.
Esses cenários podem levar a um tamanho de arquivo muito grande, sobrecarregando o funcionário que exporta/importa os documentos para o arquivo/base de dados, resultando em uma resposta de timeout com uma resposta de solicitação abortada.

## Simulação


Para o caso de **exportação**:

- Acesse o CRM de dados mestre (por exemplo, https://my-account-here.vtexcrm.com.br);
- Acesse um aplicativo de formulário com campos que contenham uma quantidade muito grande de dados por campo (ex.: imagens, vídeos...);
- Clique no botão "**Export XLS**":
 ![](https://vtexhelp.zendesk.com/attachments/token/p7ycuur8ck3Qtw2zmSUBNDmxE/?name=image.png)

- Na janela pop-up "**Data Export**", clique em "**Select all fields**" (Selecionar todos os campos) para marcá-la:
 ![](https://vtexhelp.zendesk.com/attachments/token/IIc8z6df21Cl6djTt5Toz4udk/?name=image.png)

- Volte para a página Applications (Aplicativos);
- Clique no botão "**Exports**" (Exportações):
 ![](https://vtexhelp.zendesk.com/attachments/token/NsI7JG4oWcuHAhDewa7PoEx1M/?name=image.png)

- Você pode acompanhar a solicitação em "**Export Status**" (por exemplo: https://my-account-here.vtexcrm.com.br/ExportStatus/Index);
- O e-mail não será enviado ao usuário.

Para o caso de **importação**:

- Acesse o Master Data CRM (por exemplo, https://my-account-here.vtexcrm.com.br);
- Clique no botão "**Import**":
 ![](https://vtexhelp.zendesk.com/attachments/token/3HUzAWSplEKGFAap3yU0jjmdf/?name=image.png)

- Escolha a entidade de dados e o arquivo .xls:
 ![](https://vtexhelp.zendesk.com/attachments/token/KFolvCXhUiqAhZV23iKDhTws0/?name=image.png)

- Clique no botão "**Import**";
- A importação será iniciada, estará sendo processada e, em seguida, você será redirecionado para `Import/ExecuteImport` (por exemplo, https://my-account-here.vtexcrm.com.br/Import/ExecuteImport), e o seguinte erro será exibido:

    Esta página não está funcionandomy-account-here.vtexcrm.com.br levou muito tempo para responder.HTTP ERROR 504

 ![](https://vtexhelp.zendesk.com/attachments/token/3brNPf70M3FBLGPiVwWsSHx94/?name=image.png

## Workaround


Há três maneiras fáceis de usar soluções alternativas nesse caso.

Filtre somente os documentos de que você precisa, se não precisar de toda a entidade, e exporte-os:
 ![](https://vtexhelp.zendesk.com/attachments/token/CojS7MzbOiDkaQ9HgdbrxlzHD/?name=image.png)

Selecione somente os campos de que você realmente precisa, se não precisar de toda a entidade, e exporte-os:
 ![](https://vtexhelp.zendesk.com/attachments/token/pTOU7TEWidoOrtstbDALphW6k/?name=image.png)

Separe a planilha a ser importada. Por exemplo, uma planilha com 60.000 documentos, divida-a em 6 planilhas de 10.000 documentos e tente importá-la novamente.
Lembre-se de que não temos um número exato. Dividir o arquivo em até 10.000 documentos foi um exemplo sugerido. Isso dependerá do número de campos/colunas, do tamanho de cada informação no campo/coluna, do tamanho do arquivo, do trabalhador etc. Há alguns fatores que podem afetar a importação esperada.






