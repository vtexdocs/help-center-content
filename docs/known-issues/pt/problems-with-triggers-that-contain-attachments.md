---
title: 'Problemas com triggers contendo anexos'
id: 2ESGyVDhYIwIG8cEsGUMOy
status: PUBLISHED
createdAt: 2018-12-05T13:57:01.530Z
updatedAt: 2022-12-23T17:55:19.274Z
publishedAt: 2022-12-23T17:55:19.274Z
firstPublishedAt: 2018-12-05T16:08:44.694Z
contentType: knownIssue
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
tag: Master Data
slug: problemas-com-triggers-contendo-anexos
kiStatus: Backlog
internalReference: 
---

## Sumário

Atualmente triggers de email configurados para conter anexos resultam em emails contendo apenas o texto, sem o anexo.  Exemplos comuns sao formulários de Trabalhe Conosco ou de Orçamento.


## Simulação

1. Acesse o Dyna Storage da sua account( https://{{account}}.ds.vtexcrm.com.br/)
2. Clique na aba Triggers e configure a ação desejada
3. Clique em Anexo e selecione "Arquivo" do dropdown
4. O trigger vai enviar o email mas sem o anexo.

## Workaround

Mesmo não havendo um workaround no momento que permita que o arquivo seja armazenado  e usado na trigger, a funcionalidade pode ser replicada de outra forma:
O usuario pode configurar o form para receber uma string e orientar o end user a armazenar o anexo em outro servico (GoogleDrive, Dropbox, S3) e inserir a link em um campo "anexo" do tipo varchar750

