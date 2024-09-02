---
title: "Status 'ERRO DE PROCESSAMENTO' Política de embarque"
id: 4g3SWNwDVJG5OeJVP05TOd
status: PUBLISHED
createdAt: 2022-05-18T15:12:15.503Z
updatedAt: 2022-11-25T21:59:53.193Z
publishedAt: 2022-11-25T21:59:53.193Z
firstPublishedAt: 2022-05-18T15:12:15.910Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: status-erro-de-processamento-politica-de-embarque
locale: pt
kiStatus: Backlog
internalReference: 445793
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Há um cenário relativo ao status da Política de Embarque após a criação/atualização dos valores de frete API. O status ainda pendente como "Erro no processamento" em caso de criação sem planilha de cálculo.



## Simulação


Passo 1 - Criar política de remessa sem planilha de cálculo. O status será "Erro no processamento", mas isto é normal considerando que nenhum arquivo foi processado.

Passo 2 - Executar a API - POST criando uma série de códigos postais para essa política de remessa. (/valores/atualização)

Passo 3 - Neste momento é possível verificar se o Código Postal corresponde às Taxas de Embarque, verificar o Código Postal carregado usando API e ainda mais um download da planilha da referida Política de Embarque. (Porque a etapa 2 cria uma planilha de cálculo).

Passo 4 - O Simulador de Embarque funciona bem.

Até mesmo tudo está funcionando bem, o STATUS of Shipping Policy ainda está em "Erro no processamento".

PS: Às vezes o Simulador de Embarque não pode funcionar porque após a atualização dos valores de frete há uma linha para atualizar todo o sistema (como dínamo e procura elástica).



## Workaround


A solução é apenas processar a planilha de cálculo. Você pode executar um download e upload sem nenhuma alteração e o status mudará para ativo.

