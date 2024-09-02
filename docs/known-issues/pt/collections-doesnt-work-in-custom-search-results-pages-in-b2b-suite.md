---
title: 'As coleções não funcionam em páginas de resultados de pesquisa personalizados no B2B Suite'
id: 2O2UmKrMJHimDunDRbLBe
status: PUBLISHED
createdAt: 2024-06-03T22:13:10.775Z
updatedAt: 2024-06-21T14:57:27.454Z
publishedAt: 2024-06-21T14:57:27.454Z
firstPublishedAt: 2024-06-03T22:13:11.591Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: as-colecoes-nao-funcionam-em-paginas-de-resultados-de-pesquisa-personalizados-no-b2b-suite
locale: pt
kiStatus: Backlog
internalReference: 1043470
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As páginas de resultados de pesquisa personalizados configuradas com o ID da coleção não funcionam quando coleções de produtos diferentes são atribuídas a uma organização.

O comportamento esperado ao usar coleções é definir a variedade de produtos que os usuários da organização verão na vitrine, mas como as organizações B2B também usam `productClusterId` na pesquisa, ao acessar páginas de resultados de pesquisa personalizadas configuradas com um `productClusterId` diferente, os resultados da pesquisa mostram produtos de ambas as coleções.

## Simulação



- Configure um produto Collections para uma organização;
- Crie uma página de resultados de pesquisa personalizada com uma coleção diferente;
- Faça login e acesse a página de resultados de pesquisa personalizada; os produtos de ambas as coleções são exibidos

## Workaround


N/A




