---
title: 'XML ainda renderiza em HTTP mesmo com a loja configurada para HTTPS'
id: 1l04ARE9dyWWOukyeaEsom
status: ARCHIVED
createdAt: 2017-06-08T17:51:05.915Z
updatedAt: 2019-12-31T15:17:52.530Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_41
tag: Catalog,Portal (CMS)
slugEN: untitled
locale: pt
kiStatus: Open
internalReference: 
---

## Sumário

Todas as lojas  que estão configuradas em HTTPS hoje ainda estão com os XMLs em HTTP.


## Simulação

No admin acesse Configurações (dentro de Ecommerce), em seguida XML, nesse momento serão expostos todos os XMLs configurados na loja, ao clicar ou fazer download de um dos XMLs é possível validar que as URLs de produto ainda estão em HTTP.



## Workaround

Alguns clientes desenvolveram em PHP um programa que lê o XML e gera outro em HTTPS.

