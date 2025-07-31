---
title: "Os produtos podem não aparecer na pesquisa ao usar sinônimos em idiomas secundários"
id: 4R7F9N3LMOwVvgpFP4W4G3
status: PUBLISHED
createdAt: 2025-07-30T16:40:34.825Z
updatedAt: 2025-07-30T16:44:50.995Z
publishedAt: 2025-07-30T16:44:50.995Z
firstPublishedAt: 2025-07-30T16:40:35.363Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: os-produtos-podem-nao-aparecer-na-pesquisa-ao-usar-sinonimos-em-idiomas-secundarios
locale: pt
kiStatus: Backlog
internalReference: 1268282
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Durante a indexação, o Intelligent Search aplica a normalização a termos sinônimos, mas não normaliza os nomes de produtos em idiomas secundários ao fazer a correspondência com esses sinônimos.

Devido a essa incompatibilidade, os sinônimos com acentos podem não corresponder aos nomes de produtos em idiomas não primários, e os produtos afetados podem não aparecer nos resultados da pesquisa.

Idiomas afetados:

- `ca-ES` - catalão

## Simulação


Siga as etapas a seguir para simular o cenário:
1 - Crie um sinônimo com acentos na localidade afetada.
2 - Depois que o produto tiver sido reindexado (**Admin** > **Histórico de indexação**), pesquise os produtos que contêm os sinônimos pesquisados.

O resultado não recupera os produtos esperados quando os termos originais do nome do produto têm acentos.



## Workaround


N/A




