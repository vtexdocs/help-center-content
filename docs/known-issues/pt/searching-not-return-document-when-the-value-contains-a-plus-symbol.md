---
title: 'A pesquisa não retorna o documento quando o valor contém um símbolo + (mais).'
id: 7oWiN8Esh9iKy8144Tpglx
status: PUBLISHED
createdAt: 2024-07-08T18:52:21.794Z
updatedAt: 2024-07-08T21:46:18.259Z
publishedAt: 2024-07-08T21:46:18.259Z
firstPublishedAt: 2024-07-08T18:52:22.908Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: a-pesquisa-nao-retorna-o-documento-quando-o-valor-contem-um-simbolo-mais
locale: pt
kiStatus: No Fix
internalReference: 828170
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao pesquisar um documento usando um valor de campo que inclui o símbolo "+", a pesquisa não retorna o documento. Isso acontece porque o símbolo "+" é interpretado incorretamente, o que faz com que o valor da pesquisa não corresponda ao valor existente.
Esse problema ocorre tanto na API quanto no CRM_

## Simulação



1. Use a API de pesquisa para consultar um campo que inclua um símbolo "+".
2. A pesquisa retornará uma matriz vazia. Exemplo:

    https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=+5512345678901&_fields=id,userId,email,homePhone,firstName


Na interface do usuário do CRM:
Se você pesquisar um e-mail que contenha o símbolo "+", será retornado um erro.

    Ocorreu um erro inesperado. Tente novamente. Se o problema persistir, entre em contato com o suporte.




## Workaround


Há duas maneiras de lidar com esse problema:
Codificar o símbolo "+" para "%2B", de modo que a consulta de pesquisa se torne:

    https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=%2B5512345678901&_fields=id,userId,email,homePhone,firstName


Use o símbolo "*" como um curinga, o que permitirá que a pesquisa corresponda a qualquer caractere antes do valor especificado:

    https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=*12345678901&_fields=id,userId,email,homePhone,firstName

Esse problema surge ao pesquisar documentos usando valores de campo que incluem o símbolo "+". A API de pesquisa não interpreta corretamente o símbolo "+", fazendo com que a pesquisa falhe por não corresponder aos valores existentes. Esse problema não se limita ao campo "homePhone", mas pode ocorrer com outros campos, como e-mail, que podem incluir caracteres especiais.
Para contornar esse problema, você pode codificar o símbolo "+" como "%2B" na consulta de pesquisa ou usar o símbolo "*" como curinga para garantir que a pesquisa recupere os documentos corretos.


