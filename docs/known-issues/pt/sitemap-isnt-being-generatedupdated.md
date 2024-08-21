---
title: 'O Sitemap não está sendo gerado/atualizado'
id: 1tJ4XHtbnFsfS30JWXwxb0
status: PUBLISHED
createdAt: 2023-05-17T13:58:46.443Z
updatedAt: 2024-02-16T18:17:17.707Z
publishedAt: 2024-02-16T18:17:17.707Z
firstPublishedAt: 2023-05-17T13:58:47.102Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-sitemap-nao-esta-sendo-geradoatualizado
locale: pt
kiStatus: Backlog
internalReference: 827104
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Há três cenários em que o mapa do site não está sendo gerado/atualizado:



1. Quando temos um produto não encontrado ou com algum tipo de problema no catálogo, o mapa do site não é gerado. Você pode pesquisar os registros no OpenSearch, nesse caso, para verificar qual produto tem um problema;



2. Quando a conta tem o aplicativo `search.resolver@1.x`, o mapa do site pode apresentar erros quando:



- Uma categoria tem seu primeiro produto proveniente de uma categoria semelhante (as regras de comercialização podem ter um impacto nesse caso, dependendo do produto que você está promovendo);

- A página de pesquisa/marca/categoria não tem produtos; nesse caso, a página não é indexada no mapa do site e sua geração falha


3. Os produtos que não têm a política comercial definida no catálogo não serão recebidos pelo mapa do site


## Simulação



Tente gerar o mapa do site para uma conta que tenha um dos cenários descritos acima e ele falhará



## Workaround




- Crie um novo espaço de trabalho
- Instale o search-resolver@0.x `(vtex install vtex.search-resolver@0.x)`
- Gerar o novo mapa do site
- Agora você pode reverter o search-resolver para a versão 1.x (`vtex install vtex.search-resolver@1.x`)
- Promover o espaço de trabalho criado para mestre

Obs: Essa solução alternativa pode não funcionar em todos os momentos. Às vezes, a loja pode ter tantos produtos inválidos que nem mesmo o `search-resolver@0.x` atualizará o mapa do site.

Mas, eventualmente, você precisará corrigir o cenário que impede a geração do mapa do site

Lembre-se de que atualizar a loja para resolver@0.x e gerar o mapa do site em um espaço de trabalho é a solução alternativa, pois alguns casos inválidos não ocorrem em nossa pesquisa herdada.






