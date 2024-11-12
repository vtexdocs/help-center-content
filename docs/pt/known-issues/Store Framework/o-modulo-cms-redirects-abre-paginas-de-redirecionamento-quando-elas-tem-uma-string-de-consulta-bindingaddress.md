---
title: 'O módulo CMS Redirects abre páginas de redirecionamento quando elas têm uma string de consulta bindingAddress'
id: 2qYP0Jfxx6TxmR75YjALtk
status: PUBLISHED
createdAt: 2024-10-10T19:11:34.872Z
updatedAt: 2024-10-11T13:32:27.904Z
publishedAt: 2024-10-11T13:32:27.904Z
firstPublishedAt: 2024-10-10T19:11:36.240Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: cms-redirects-module-does-open-redirects-pages-when-they-have-a-bindingaddress-query-string
locale: pt
kiStatus: Backlog
internalReference: 1115321
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando você está navegando em uma loja com uma string de consulta de endereço vinculada (principalmente lojas internacionais) e tenta abrir um redirecionamento específico por meio do módulo CMS Redirects, a página não abre. Isso acontece porque a consulta feita ao rewriter conta a string de consulta como parte da variável a ser pesquisada:
 ![](https://vtexhelp.zendesk.com/attachments/token/jls5hNgRD8iSjCKauOrfX6oxS/?name=image.png)

Essa pesquisa incorreta leva ao KI: 729503, que afeta os redirecionamentos criados com strings de consulta.

## Simulação


Tente abrir um redirecionamento em uma loja transfronteiriça ou em qualquer loja com uma string de consulta bindingAddress

## Workaround


Gerencie seus redirecionamentos por meio de CLI ou planilha





