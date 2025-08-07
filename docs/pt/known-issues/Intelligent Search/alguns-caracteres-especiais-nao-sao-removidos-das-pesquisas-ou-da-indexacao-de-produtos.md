---
title: "Alguns caracteres especiais não são removidos das pesquisas ou da indexação de produtos"
id: 2yarH7RCUQWKZ0I435hGcD
status: PUBLISHED
createdAt: 2023-11-29T20:26:50.510Z
updatedAt: 2024-07-01T18:49:20.705Z
publishedAt: 2024-07-01T18:49:20.705Z
firstPublishedAt: 2023-11-29T20:26:51.145Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: alguns-caracteres-especiais-nao-sao-removidos-das-pesquisas-ou-da-indexacao-de-produtos
locale: pt
kiStatus: No Fix
internalReference: 944659
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns caracteres especiais não são completamente removidos das palavras-chave pesquisadas ou da indexação de produtos, o que pode afetar as pesquisas em alguns cenários específicos.

Os caracteres conhecidos que levam a esse cenário são vírgulas (`,`), pontos (`.`) e dois-pontos (`:`). Outros são normalmente ignorados e não geram problemas.

Durante o registro de um produto, as vírgulas e os pontos no final das palavras são removidos durante a indexação do produto, mas se estiverem no meio de uma palavra, são mantidos. As palavras-chave são divididas por espaços.

Durante a pesquisa, os dois pontos são um valor reservado e invalidam toda a consulta de texto.

## Simulação


Para vírgulas e pontos, um campo de produto que tenha um valor como palavras-chave separadas por vírgulas, como `"car,specialbrand,blue"`, será lido como uma única palavra. A pesquisa por `specialbrand` não encontrará esse produto.

No caso de dois-pontos, um produto com o nome `"vinho tinto: versão especial"` pode ser encontrado por meio da pesquisa por `vinho`, mas a pesquisa por `vinho: versão especial` não funcionará. A pesquisa inteira será inválida e nenhum filtro de texto será aplicado

## Workaround


Para vírgulas e pontos, é necessário um espaço após o caractere para dividir as palavras-chave.

Para uma pesquisa com dois pontos, não há solução alternativa.




