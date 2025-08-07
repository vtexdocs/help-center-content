---
title: "Programação de Data de Fim para Coleções não Funcionando"
id: mhO5z0twpTunMeEsPKl0q
status: PUBLISHED
createdAt: 2022-03-17T21:32:13.982Z
updatedAt: 2022-11-25T21:43:27.334Z
publishedAt: 2022-11-25T21:43:27.334Z
firstPublishedAt: 2022-03-17T21:32:14.700Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: programacao-de-data-de-fim-para-colecoes-nao-funcionando
locale: pt
kiStatus: Fixed
internalReference: 497880
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, quando a data final de uma coleção programada é atingida, o processo de reindexação dos produtos contidos nela não é acionado, fazendo com que a programação da data final não funcione como um todo.



## Simulação





1) Criar uma nova coleção através do novo módulo de administração de coleções ou das coleções CMS herdadas.

2) Estabelecer uma data final para que esta coleção específica expire alguns minutos antes da data atual:

3) Insira 1+ produtos nesta coleção e salve-a.

4) O produto inserido deve agora ser reindexado

5) Aguarde a data final programada

6) O produto não será reindexado e conseqüentemente não será removido da determinada coleção.



## Workaround


Reindexar manualmente os produtos

