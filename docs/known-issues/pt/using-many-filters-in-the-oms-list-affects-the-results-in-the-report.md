---
title: O uso de muitos filtros na lista OMS afeta os resultados do relatório
id: WO9AvZxmUkmil35OZb8Lr
status: PUBLISHED
createdAt: 2023-02-17T17:45:57.039Z
updatedAt: 2023-02-17T17:52:41.370Z
publishedAt: 2023-02-17T17:52:41.370Z
firstPublishedAt: 2023-02-17T17:50:29.929Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: o-uso-de-muitos-filtros-na-lista-oms-afeta-os-resultados-do-relatorio
kiStatus: Backlog
internalReference: 756198
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

O uso de filtros na Lista de Gerenciamento de Pedidos gera um parâmetro na URL que ajuda a definir o que é mostrado quando a página é carregada e a gerar o relatório de pedidos exportados. Nesse sentido, como usamos cada vez mais filtros, os parâmetros incluídos na URL aumentam proporcionalmente, e a cadeia de consulta aumenta, atingindo pontos (tamanho) que podem gerar vários tipos de comportamentos indesejados.

Neste caso, o problema causado pelo uso de muitos filtros ao mesmo tempo (tamanho do **Query String** na URL) afeta os resultados do relatório exportado, mostrando menos pedidos do que o esperado.

É importante notar que aqui estamos falando do tamanho ** da query String gerada na URL**, isto significa que não é o número de filtros usados diretamente, mas o tamanho de cada parâmetro. Nomes de filtros muito grandes podem limitar o número de filtros que você é capaz de usar para gerar um relatório consistente.

## Simulação

Este cenário pode ser simulado usando múltiplos filtros "longos" na lista OMS e exportando os pedidos. Você pode ver que a exportação mostra menos pedidos do que a lista OMS.


## Workaround

É possível pensar em formas alternativas para evitar este tipo de problema no relatório. Aqui estão alguns pontos que podem ser úteis:

- Otimizar o nome dos parâmetros pode ser uma boa prática.
- Exportar o relatório com poucos filtros e depois, no documento exportado, realizar os filtros adicionais ou necessários para obter as informações desejadas.
- Pense em quebrar o relatório em mais de um, ou seja, use alguns filtros para gerar uma parte da informação e depois outro com o resto e unificar após ser descarregado.

Estas são apenas ideias para evitar a acumulação de filtros e gerar esta inconsistência nas informações exportadas. Outras soluções podem ser usadas.

