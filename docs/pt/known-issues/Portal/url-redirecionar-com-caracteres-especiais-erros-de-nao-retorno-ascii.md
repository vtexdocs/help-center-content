---
title: "URL Redirecionar com caracteres especiais erros de não retorno ascii"
id: 3rqIVyN7gPKAz0WRzgV4Zc
status: PUBLISHED
createdAt: 2023-02-10T13:05:23.823Z
updatedAt: 2023-02-10T13:05:24.399Z
publishedAt: 2023-02-10T13:05:24.399Z
firstPublishedAt: 2023-02-10T13:05:24.399Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: url-redirecionar-com-caracteres-especiais-erros-de-nao-retorno-ascii
locale: pt
kiStatus: Backlog
internalReference: 457047
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se criarmos um redirecionamento com alguns caracteres especiais, por exemplo `/televisão`, ele não funcionará, receberemos o seguinte erro:

    Link: account.vtexcommercestable.com.br/televisão Error: A resposta do servidor upstream retornou caracteres de cabeçalho inválidos



##

## Simulação


- Criar um redirecionamento 301 no CMS, por exemplo, de `/` para `/televisão`.
- Verifique o corpo de resposta;


##

## Workaround


Não use caracteres especiais no redirecionamento.




