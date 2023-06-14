---
title: 'A classificação manual das coleções não funciona como esperado'
id: aGTNVDT6LKKoWuSceQWs0
status: PUBLISHED
createdAt: 2017-10-03T19:13:58.344Z
updatedAt: 2023-03-13T13:55:39.030Z
publishedAt: 2023-03-13T13:55:39.030Z
firstPublishedAt: 2017-10-03T19:58:57.335Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: a-classificacao-manual-das-colecoes-nao-funciona-como-esperado
locale: pt
kiStatus: Backlog
internalReference: 295245
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A triagem manual das coleções não funciona como esperado. Há duas maneiras de ordenar as SKUs usando uma coleção:

1. Usando a coleção do tipo de controle ContentPlaceHolder;
2. Usando um contexto de busca ou de busca de uma página de desembarque com o controle SearchResult (neste caso, deve ser usado o querystring _O=productClusterOrder_{ProductClusterId}%20asc_).

Em ambos os casos, o sistema suporta a classificação de até **30** SKUs da coleção. Quando a coleta tiver mais de 30 SKUs, todas as SKUs sobressalentes serão listadas ANTES daquelas posicionadas entre 1 e 30.

<div class="alert-info">
  <p>Este comportamento é observado em todas as lojas VTEX, incluindo aquelas desenvolvidas usando VTEX IO. Além disso, a ordem de classificação fornecida pelas coleções não é utilizada pela VTEX Intelligent Search.</p></div>


## Simulação

1. Criar uma coleção;
2. Inserir manualmente mais de 30 SKUs;
3. Salvar a coleção;
4. Criar um modelo com ContentPlaceHolder ou SearchResult;
5. 5. Criar a associação do ContentPlaceHolder com a coleção ou definir a pesquisa no contexto da pesquisa de pastas;
6. Esperar alguns minutos para que o cache expire;
7. Acessar a página e observar que os primeiros itens encomendados serão itens colocados após 30.

## Workaround

Como alternativa, temos as seguintes opções:

- Utilizar coleções com apenas 30 itens, se for essencial aplicar a triagem manual;
- Use o campo Data de Lançamento, registre as datas na seqüência desejada e use o campo para ordenar a coleção.

