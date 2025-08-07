---
title: "As regras de visual merchandising não funcionam quando são fornecidos vários termos de pesquisa"
id: 6FkfnnvFiYXYqPgMrpDgM1
status: PUBLISHED
createdAt: 2024-06-20T21:41:14.250Z
updatedAt: 2024-06-20T21:41:15.088Z
publishedAt: 2024-06-20T21:41:15.088Z
firstPublishedAt: 2024-06-20T21:41:15.088Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: as-regras-de-visual-merchandising-nao-funcionam-quando-sao-fornecidos-varios-termos-de-pesquisa
locale: pt
kiStatus: Backlog
internalReference: 1053623
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Embora seja possível fornecer vários termos de pesquisa ao criar uma regra de visual merchandising para a Pesquisa Inteligente, eles não podem ser usados. A regra será considerada inválida e não será aplicada.

Termos de pesquisa diferentes podem retornar produtos completamente diferentes em um resultado de pesquisa em uma ordem diferente, o que é incompatível com a ação de fixar (_promover_) ou ocultar (_remover_) alguns produtos que uma regra visual oferece.

Como uma ação inválida, não se espera que essa condição seja fornecida e ela será removida da interface.

## Simulação



- Criar uma regra de visual merchandising
- Aplicar vários termos de pesquisa como uma condição para a regra
- Selecione alguns produtos para fixar e/ou ocultar
- Pesquise um desses termos de pesquisa e observe que os resultados não terão a regra aplicada
- Também é possível observar o mesmo por meio da função de pesquisa explicada do administrador, que destacará que nenhuma regra foi aplicada à pesquis

## Workaround


Esse objetivo é alcançado por meio de regras manuais de merchandising. A ação de fixar e ocultar produtos é diretamente compatível com as ações de promover e remover de uma regra manual.




