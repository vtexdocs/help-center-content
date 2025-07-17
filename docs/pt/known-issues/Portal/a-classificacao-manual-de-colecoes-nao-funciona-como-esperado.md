---
title: "A classificação manual de coleções não funciona como esperado"
id: aGTNVDT6LKKoWuSceQWs0
status: PUBLISHED
createdAt: 2017-10-03T19:13:58.344Z
updatedAt: 2024-10-09T18:49:09.414Z
publishedAt: 2024-10-09T18:49:09.414Z
firstPublishedAt: 2017-10-03T19:58:57.335Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: a-classificacao-manual-de-colecoes-nao-funciona-como-esperado
locale: pt
kiStatus: Backlog
internalReference: 295245
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



A classificação manual de coleções não funciona como esperado. Há duas maneiras de classificar SKUs usando uma coleção:


1. Usando a coleção do tipo de controle ContentPlaceHolder;
2. Usando uma pesquisa ou um contexto de pesquisa de uma Landing Page com o controle SearchResult (nesse caso, a string de consulta _O=productClusterOrder_{ProductClusterId}%20asc_ deve ser usada).

Em ambos os casos, o sistema suporta a classificação de até **30** SKUs da coleção. Quando a coleção tiver mais de 30 SKUs, todas as SKUs sobressalentes serão listadas ANTES daquelas posicionadas entre 1 e 30.


> Esse comportamento é observado em todos os armazenamentos da VTEX, incluindo aqueles desenvolvidos com o VTEX IO.


## Simulação




1. Crie uma coleção;
2. Inserir manualmente mais de 30 SKUs;
3. Salve a coleção;
4. Crie um modelo com ContentPlaceHolder ou SearchResult;
5. Configure a associação do ContentPlaceHolder com a coleção ou defina a pesquisa no contexto de pesquisa da pasta;
6. Aguarde alguns minutos para que o cache expire;
7. Acesse a página e observe que os primeiros itens ordenados serão os itens colocados após 30

## Workaround



Como solução alternativa, temos as seguintes opções:


- Usar coleções com apenas 30 itens, se for essencial aplicar a classificação manual;
- Use o campo Release Date (Data de lançamento), registre as datas na sequência desejada e use o campo para classificar a coleção.


