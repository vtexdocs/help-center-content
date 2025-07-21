---
title: 'O status "ativo" do componente do pacote pode estar desatualizado na nova interface do usuário do catálogo'
id: cqjuO2Qjz20VHFjof3gOk
status: PUBLISHED
createdAt: 2025-03-11T15:13:09.422Z
updatedAt: 2025-03-12T16:42:43.207Z
publishedAt: 2025-03-12T16:42:43.207Z
firstPublishedAt: 2025-03-11T15:13:10.170Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: o-status-ativo-do-componente-do-pacote-pode-estar-desatualizado-na-nova-interface-do-usuario-do-catalogo
locale: pt
kiStatus: Backlog
internalReference: 1191983
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, na nova versão da interface do usuário do catálogo, quando uma SKU é criada como um pacote e tem componentes, há uma listagem de status de cada componente para mostrar se ele está ativo ou não

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/o-status-ativo-do-componente-do-pacote-pode-estar-desatualizado-na-nova-interface-do-usuario-do-catalogo_1.png)

No entanto, se após a criação do kit o referido item for inativado, a interface do usuário não o atualizará adequadamente.

## Simulação


1 - criar um novo item de pacote na loja
2 - associe-o a mais de 2 componentes, nos quais mais de 2 deles estão ativos.
3 - Inativar um dos componentes
4 - verifique, na interface do usuário do pacote, se os componentes que foram inativados ainda estão listados como ativos



## Workaround


Use a IU do pacote legado https://myaccountname.vtexcommercestable.com.br/admin/Site/SkuKit.aspx?IdProduto=&IdSku=





