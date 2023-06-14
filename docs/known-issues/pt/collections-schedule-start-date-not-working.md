---
title: 'Data de Início das Coleções não funciona'
id: 3G6rD1JIm5BaZhFkFrdvok
status: PUBLISHED
createdAt: 2022-10-28T18:07:53.326Z
updatedAt: 2022-11-25T21:42:47.113Z
publishedAt: 2022-11-25T21:42:47.113Z
firstPublishedAt: 2022-10-28T18:07:54.025Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: data-de-inicio-das-colecoes-nao-funciona
kiStatus: Fixed
internalReference: 667328
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, quando a data de início de uma coleta programada é atingida, o processo de reindexação dos produtos nela contidos não é acionado, ou seja, a programação da data de início não funciona como um todo. Como conseqüência, os produtos não são indexados na coleção na data configurada.



## Simulação


1) Criar uma nova coleção através do novo módulo de administração de coleções ou das coleções CMS herdadas

2) Estabelecer uma data de início para esta coleção específica para iniciar alguns minutos antes da data atual

3) Insira 1+ produtos nesta coleção e salve-a

4) O produto não será reindexado e, conseqüentemente, não será adicionado à coleção em questão.




## Workaround


Reindexar manualmente os produtos ou acessar a coleção a partir do CMS legado e salvar o grupo de inclusão e a coleção novamente.

