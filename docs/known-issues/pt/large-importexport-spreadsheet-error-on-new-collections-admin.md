---
title: 'Grande Erro de Planilha de Importação/Exportação em Nova Administração de Cobranças'
id: 6xbBVR2Z7CCpIC0iCAKHgN
status: PUBLISHED
createdAt: 2023-02-16T19:04:08.298Z
updatedAt: 2023-02-16T19:04:08.784Z
publishedAt: 2023-02-16T19:04:08.784Z
firstPublishedAt: 2023-02-16T19:04:08.784Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: grande-erro-de-planilha-de-importacaoexportacao-em-nova-administracao-de-cobrancas
kiStatus: Backlog
internalReference: 362017
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o administrador da nova coleção, no recurso de importação para uma inclusão de SKU, usando a linha SKU, freqüentemente retorna uma resposta de erro não específica ao tentar importar um arquivo com muitos registros.

"O seu arquivo não foi importado". Por favor, tente importar este arquivo novamente.`"


##

## Simulação


1) Em uma loja em que o catálogo é muito grande, os produtos 50K+ acessam as novas coleções admin /admin/collections

2) Em uma coleção, tente importar novos registros com mais de 100 SKUs em uma única importação.


##

## Workaround


1) Utilizar as coleções legadas para a importação maciça de SKUs.

2) Dividir as importações em folhas menores e fazer o processo gradualmente.

3) Utilizar as ações maciças da IU para atingir o efeito desejado.





