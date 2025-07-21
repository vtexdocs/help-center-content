---
title: "vtex.events.addData adicionando páginaUrl Parâmetro usando http, não https"
id: GKPhSAhbbODMlXwmcm0qX
status: PUBLISHED
createdAt: 2022-12-13T15:32:13.749Z
updatedAt: 2022-12-13T15:32:14.821Z
publishedAt: 2022-12-13T15:32:14.821Z
firstPublishedAt: 2022-12-13T15:32:14.821Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: vtexeventsadddata-adicionando-paginaurl-parametro-usando-http-nao-https
locale: pt
kiStatus: Backlog
internalReference: 348128
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


`vtex.events.addData` adicionando pageUrl Parameter utilizando http, não https


##

## Simulação


- Verificação do código fonte de uma conta VTEX do Portal
- A pageUrl estará usando HTTP:

    <escrito>
      vtex.events.addData({"pageCategory": "Home", "pageDepartment":null, "pageUrl": "**http**://account.myvtex.com/", ...})
    </script>

##

## Workaround


Não há solução

