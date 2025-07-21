---
title: "Os filtros ocultos na loja também são ocultos nas páginas de administração do Intelligent Search"
id: 3TvpIUFzdXWesADHDhjyLQ
status: PUBLISHED
createdAt: 2022-02-23T21:59:22.607Z
updatedAt: 2025-05-27T17:12:18.881Z
publishedAt: 2025-05-27T17:12:18.881Z
firstPublishedAt: 2022-02-23T21:59:22.977Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: os-filtros-ocultos-na-loja-tambem-sao-ocultos-nas-paginas-de-administracao-do-intelligent-search
locale: pt
kiStatus: Backlog
internalReference: 416638
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Algumas facetas têm uso interno ou cenários que precisam ser ocultados, mas a loja precisa dessa faceta para fins de pesquisa, como usá-la para Regras de comercialização.

## Simulação


Em algumas contas, a especificação de SKU "cor" não aparece como uma opção em "Usar especificações de SKU para exibir produtos individuais nos resultados de pesquisa". Vemos que a "cor" é uma das especificações em "Hide facets" (Ocultar facetas)

## Workaround


Em **Admin > Search Settings**, remova a faceta (ou filtro) da configuração "Hide facets" (Ocultar facetas), crie a regra de merchandising ou faça a configuração esperada e oculte a faceta (ou filtro) novamente.

