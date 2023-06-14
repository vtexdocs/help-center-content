---
title: O File Manager upload com mais dois arquivos existentes não atualiza todos os arquivos, apenas o primeiro
id: 2LHdzsFFe83E1Tf0Z4j66y
status: PUBLISHED
createdAt: 2022-03-17T00:20:51.454Z
updatedAt: 2022-11-25T22:10:54.509Z
publishedAt: 2022-11-25T22:10:54.509Z
firstPublishedAt: 2022-03-17T00:20:52.317Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: o-file-manager-upload-com-mais-dois-arquivos-existentes-nao-atualiza-todos-os-arquivos-apenas-o-primeiro
kiStatus: Backlog
internalReference: 418253
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O File Manager upload com mais dois arquivos existentes não atualiza todos os arquivos, apenas o primeiro



## Simulação


- Ir para /admin/a, gerenciador de arquivos, e adicionar 2 ou mais arquivos para carregar;
- Agora faça o upload de outros dois arquivos com o mesmo nome:
- Receberemos um aviso informando que o arquivo existe, perguntando-nos se queremos substituí-lo.

Este aviso nos fala apenas de um arquivo, o segundo não está sendo validado.

- Ambos os arquivos são carregados, mas apenas um irá substituir o mais antigo.



## Workaround


Atualizar um arquivo por vez.

