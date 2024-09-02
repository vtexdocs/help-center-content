---
title: 'O espaço na identificação do armazém faz com que os pedidos logísticos internos falhem'
id: M8SsnABs2HgYsUvNnjCFx
status: PUBLISHED
createdAt: 2022-09-20T21:51:05.157Z
updatedAt: 2024-02-16T20:24:53.145Z
publishedAt: 2024-02-16T20:24:53.145Z
firstPublishedAt: 2022-09-20T21:51:05.702Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: o-espaco-na-identificacao-do-armazem-faz-com-que-os-pedidos-logisticos-internos-falhem
locale: pt
kiStatus: No Fix
internalReference: 654370
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A IU de logística permite que um usuário crie um depósito registrando uma identificação com espaço e isto afeta diretamente as solicitações feitas a este depósito e pode causar falhas na atualização do estoque.


##

## Simulação



1- Entre Inventário e Expedição - Estratégia de Expedição - Armazéns

2- Clique em criar um Armazém

3- Insira uma identificação com espaço entre os caracteres e salve.

4- Faça um get with the List all Warehouse API, veja que o ID foi salvo com espaço;



##

## Workaround


** **
Para evitar ou ajustar estes cenários, ao criar um armazém, utilize sublinhados para separar caracteres, caso seja necessário ter espaços entre caracteres ou palavras.





