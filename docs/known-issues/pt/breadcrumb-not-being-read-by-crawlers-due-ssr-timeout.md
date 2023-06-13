---
title: O pão rastejado não é lido pelos rastejadores devido ao tempo limite da SSR
id: 3Xyp2JVHVvlouNrRkDEL1O
status: PUBLISHED
createdAt: 2023-01-31T15:52:59.855Z
updatedAt: 2023-01-31T15:54:26.534Z
publishedAt: 2023-01-31T15:54:26.534Z
firstPublishedAt: 2023-01-31T15:53:00.864Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-pao-rastejado-nao-e-lido-pelos-rastejadores-devido-ao-tempo-limite-da-ssr
kiStatus: Backlog
internalReference: 460999
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao carregar pela primeira vez o pão ralado, os dados da lista de categorias estão ficando mais rápidos do que os da árvore de categorias enviada pela consulta de facetas, isto está causando um comportamento inesperado no tempo de carga do pão ralado, porque a lista de categorias traz também categorias similares de produtos similares e não tem todas as informações necessárias para a json+ld.


##

## Simulação



Abrir uma página de produto

Desabilite o javascript para a página (isso garantirá que você trabalhará na SSR)

Atualize a página

Você verá que o pão ralado carregará inicialmente toda a árvore de categorias duo o tempo necessário para buscar, e então, trará os resultados esperados (da árvore de categorias), se não houver categorias similares para as categorias, você não verá nenhum efeito visual

Outra maneira de reproduzir é indo para https://validator.schema.org/
e tente validar a página do produto, se a migalha de pão estiver lá, não há problema com seu produto, se não estiver lá, este é o KI


##

## Workaround


Não

