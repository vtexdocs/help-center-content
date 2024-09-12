---
title: 'O Search Resolver aplica traduções de mensagens sobre conteúdo já traduzido'
id: 7OIKmmhO3Pa2z0pIU33kY
status: PUBLISHED
createdAt: 2023-07-20T15:28:57.078Z
updatedAt: 2024-06-13T20:51:17.597Z
publishedAt: 2024-06-13T20:51:17.597Z
firstPublishedAt: 2023-07-20T15:28:57.934Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: o-search-resolver-aplica-traducoes-de-mensagens-sobre-conteudo-ja-traduzido
locale: pt
kiStatus: Backlog
internalReference: 865918
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O Search Resolver (camada GraphQL para Pesquisa Inteligente) solicita traduções do serviço de Mensagens, mesmo para lojas de um único idioma ou conteúdo já traduzido em uma loja de vários idiomas.

Na prática, essas traduções são feitas sobre os mesmos idiomas "de" e "para", mas se a loja tiver o recurso de tradução automática ativado, a string poderá mudar para algo inesperado.

Isso afeta especialmente as cadeias de caracteres com várias palavras que podem ser consideradas de idiomas diferentes, como palavras em inglês no nome de um produto que é majoritariamente em francês e, potencialmente, datas (entre as notações "dd/mm/aaaa" e "mm/dd/aaaa").

## Simulação



- Traduza qualquer conteúdo do catálogo da loja para um idioma diferente do padrão;
- Verifique se ainda há pelo menos uma palavra em um idioma diferente do traduzido;
- Verifique a vitrine da loja; ela não corresponderá à tradução

## Workaround



- Desative a tradução automática;
- Crie traduções para esses conteúdos usando o mesmo idioma de "from" e "to", por exemplo, traduzindo-o de "fr-FR" para "fr-FR".



