---
title: "A Pesquisa Explicativa não apresenta resultados quando o idioma corresponde à localidade do administrador também configurada na Pesquisa Inteligente"
id: 1NHYVn0K3mlOTrtnoRevCw
status: PUBLISHED
createdAt: 2023-05-23T15:35:17.779Z
updatedAt: 2023-05-23T15:35:18.448Z
publishedAt: 2023-05-23T15:35:18.448Z
firstPublishedAt: 2023-05-23T15:35:18.448Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: a-pesquisa-explicativa-nao-apresenta-resultados-quando-o-idioma-corresponde-a-localidade-do-administrador-tambem-configurada-na-pesquisa-inteligente
locale: pt
kiStatus: Backlog
internalReference: 830490
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando mais de um idioma estiver configurado na Intelligent Search, a Explain Search não retornará nenhum resultado se houver correspondência com uma localidade de administrador que também esteja na Intelligent Search, mas que não seja a correspondência exata. Por exemplo:


- Idiomas na Intelligent Search: es-AR e en-US
- Ao selecionar es-AR na Explained Search e a localidade do administrador for en-US, nenhum resultado será mostrado.

## Simulação



- Acesse a Explain Search e selecione um idioma;
- Selecione um idioma no administrador que também esteja no Intelligent Seach

## Workaround


Selecione o idioma exato no administrador ou qualquer outro que não esteja configurado no Intelligent Search.




