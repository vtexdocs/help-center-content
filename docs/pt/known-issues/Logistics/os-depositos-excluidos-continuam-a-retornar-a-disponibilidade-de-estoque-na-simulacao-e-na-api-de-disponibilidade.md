---
title: "Os depósitos excluídos continuam a retornar a disponibilidade de estoque na simulação e na API de disponibilidade"
id: 71udTOdbpYYvVqhDIJcgHx
status: PUBLISHED
createdAt: 2025-06-18T20:20:49.195Z
updatedAt: 2025-06-18T20:20:49.794Z
publishedAt: 2025-06-18T20:20:49.794Z
firstPublishedAt: 2025-06-18T20:20:49.794Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: os-depositos-excluidos-continuam-a-retornar-a-disponibilidade-de-estoque-na-simulacao-e-na-api-de-disponibilidade
locale: pt
kiStatus: Backlog
internalReference: 1246900
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Quando um depósito é excluído no módulo Logística, ele pode permanecer registrado na base de estoque de disponibilidade. Isso faz com que a disponibilidade de estoque dos SKUs ainda considere quantidades desses depósitos que não existem mais, fazendo com que os SKUs fiquem indisponíveis ou exibam quantidades irreais.
A situação ocorre principalmente quando o processo de exclusão do depósito envolve um grande volume de SKUs vinculados a ele, o que pode gerar um timeout e deixar resíduos na base de disponibilidade mesmo após a remoção na Logística. O impacto é sentido nas APIs de simulação e na seleção de vendedores, gerando inconsistências para o comerciante e para o comprador, impactando a experiência de compra na loja.

## Simulação




- Crie um depósito na conta e associe SKUs a esse depósito, atribuindo quantidades positivas ao estoque.
- Exclua o depósito por meio do módulo Logística.
- Execute uma chamada para a API de simulação.
- Observe que, na resposta, o SKU retorna a disponibilidade do depósito excluído ou que a soma dos estoques inclui valores que não estão de acordo com o que existe nos depósitos válidos. Usando a rota para listar os depósitos ativos na conta, observe que o depósito em questão não está mais listado, mas ainda aparece no retorno de disponibilidade/simulação.
- A SKU pode ficar indisponível para compra devido a esse estoque residual ou mostrar uma quantidade irreal nos pontos finais de estoque

## Workaround



Não há nenhuma solução alternativa pública disponível ou ação preventiva por parte do comerciante. O tratamento é exclusivamente de back-end e depende da equipe de engenharia para realizar a limpeza com base na disponibilidade.






