---
title: "O uso de muitos filtros na lista OMS afeta os resultados do relatório"
id: WO9AvZxmUkmil35OZb8Lr
status: PUBLISHED
createdAt: 2023-02-17T17:45:57.039Z
updatedAt: 2024-06-28T19:28:50.107Z
publishedAt: 2024-06-28T19:28:50.107Z
firstPublishedAt: 2023-02-17T17:50:29.929Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: o-uso-de-muitos-filtros-na-lista-oms-afeta-os-resultados-do-relatorio
locale: pt
kiStatus: Fixed
internalReference: 756198
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O uso de filtros na Lista de gerenciamento de pedidos gera um parâmetro no URL que ajuda a definir o que é mostrado quando a página é carregada e a gerar o relatório de pedidos exportados. Nesse sentido, à medida que usamos mais e mais filtros, os parâmetros incluídos no URL aumentam proporcionalmente e a string de consulta aumenta, chegando a pontos (tamanho) que podem gerar vários tipos de comportamentos indesejados.

Nesse caso, o problema causado pelo uso de muitos filtros ao mesmo tempo (tamanho da **Query String** no URL) afeta os resultados do relatório exportado, mostrando menos pedidos do que o esperado.

É importante observar que aqui estamos falando do **tamanho da Query String gerada no URL**, o que significa que não é o número de filtros usados diretamente, mas o tamanho de cada parâmetro. Nomes de filtros muito grandes podem limitar o número de filtros que você pode usar para gerar um relatório consistente.

## Simulação


Esse cenário pode ser simulado usando-se vários filtros "longos" na lista do OMS e exportando os pedidos. Você pode ver que a exportação mostra menos pedidos do que a lista OMS

## Workaround


É possível pensar em maneiras alternativas de evitar esse tipo de problema no relatório. Aqui estão alguns pontos que podem ser úteis:

- Otimizar o nome dos parâmetros pode ser uma boa prática.
- Exportar o relatório com poucos filtros e, em seguida, no documento exportado, realizar os filtros adicionais ou necessários para obter as informações desejadas.
- Pense em dividir o relatório em mais de um, ou seja, use alguns filtros para gerar uma parte das informações e, em seguida, outro com o restante e unifique após o download.

Essas são apenas ideias para evitar o acúmulo de filtros e gerar essa inconsistência nas informações exportadas. Outras soluções podem ser usadas.






