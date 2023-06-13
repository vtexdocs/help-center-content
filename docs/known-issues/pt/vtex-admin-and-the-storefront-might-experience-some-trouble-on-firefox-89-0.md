---
title: Alguns módulos do Admin VTEX e storefront da loja podem sofrer problemas no Firefox 89.0
id: 10BUSPqviNy4VQzuIbllKL
status: PUBLISHED
createdAt: 2021-06-08T17:54:36.813Z
updatedAt: 2022-12-22T15:07:43.284Z
publishedAt: 2022-12-22T15:07:43.284Z
firstPublishedAt: 2021-06-08T19:41:46.005Z
contentType: knownIssue
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
tag: Checkout,Payments,Store Framework
slug: alguns-modulos-do-admin-vtex-e-storefront-da-loja-podem-sofrer-problemas-no
kiStatus: Backlog
internalReference: 
---

## Sumário

O Admin da VTEX não carrega alguns módulos no Firefox 89.0 por causa da nova opção Proteção aprimorada contra rastreamento do browser, que é ligada por default.

Este problema também pode afetar o front da sua loja e as páginas de checkout, quando clientes finais tentam acessar a loja por meio do Firefox 89.0.


## Simulação

Se você, ou os clientes da sua loja atualizaram o browser Firefox para a versão 89.0, é provável que seu storefront e alguns módulos do Admin VTEX não carreguem. 

## Workaround

Para consertar esse problema, você deve desligar a opção de rastreamento:

1. Acesse seu __Admin VTEX, ou loja,__ por meio do Firefox 89.0.      
2. Clique no ícone de __escudo__, próximo à URL.       
3. __Desligue__ a opção `A proteção aprimorada contra rastreamento está ATIVADA nesse site`.       

Não se preocupe: desligar essa opção não significa que sua loja estará desprotegida.    

<div class= "alert alert-info">
Se após estes passos o seu Admin ou loja ainda não carregarem, sugerimos que tente acessá-lo com outro navegador. 
</div>  

![Firefox bug PT](//images.ctfassets.net/alneenqid6w5/4EZo0FaHBx1DfbSrGVpbku/4ec41440848f1adad3924c07d5154369/Firefox_bug_PT.jpg)

