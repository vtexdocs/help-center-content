---
title: 'A API Scroll retorna erros 429 e/ou 408 ao consultar entidades com um grande número de documentos, geralmente superior a milhões'
id: 1Yx7s4kDAJOzpNCxro7TmW
status: PUBLISHED
createdAt: 2024-05-20T15:01:15.646Z
updatedAt: 2024-05-20T15:01:16.679Z
publishedAt: 2024-05-20T15:01:16.679Z
firstPublishedAt: 2024-05-20T15:01:16.679Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: a-api-scroll-retorna-erros-429-eou-408-ao-consultar-entidades-com-um-grande-numero-de-documentos-geralmente-superior-a-milhoes
locale: pt
kiStatus: Backlog
internalReference: 1035873
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A API Scroll foi projetada para lidar com grandes conjuntos de dados, permitindo a recuperação de documentos de forma rolável. No entanto, ao consultar entidades com um número significativo de documentos, normalmente na casa dos milhões, os usuários podem encontrar erros 429 (Too Many Requests) e/ou 408 (Request Timeout). Esses erros ocorrem devido ao alto volume de dados que estão sendo processados, o que pode sobrecarregar a API e resultar em limitação da taxa de solicitações ou timeouts.

## Simulação



1. Use a API Scroll para consultar uma entidade que contém um grande número de documentos (por exemplo, milhões).
2. Observe as respostas da API.
3. Observe se a API retorna erros 429 (Too Many Requests) e/ou 408 (Request Timeout) durante o processo

## Workaround


Otimize a consulta implementando filtros para reduzir a carga na API, dividindo a solicitação em pedaços ou lotes menores.
Ao escolher os filtros, é importante prestar atenção se todos os documentos serão incluídos para garantir que a rolagem percorrerá todos os documentos da entidade.




