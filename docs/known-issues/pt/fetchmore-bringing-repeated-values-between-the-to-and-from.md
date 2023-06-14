---
title: 'FetchMore traz valores repetidos entre o to e o from'
id: 1Vx0YekKCDaf8t6hocU1iv
status: PUBLISHED
createdAt: 2023-05-31T16:39:58.224Z
updatedAt: 2023-05-31T16:39:58.728Z
publishedAt: 2023-05-31T16:39:58.728Z
firstPublishedAt: 2023-05-31T16:39:58.728Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: fetchmore-traz-valores-repetidos-entre-o-to-e-o-from
kiStatus: Scheduled
internalReference: 835396
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A função fetchMore está trazendo entre a primeira e a segunda página alguns valores duplicados e isso faz com que a página exiba repetidamente alguns dos produtos.

## Simulação



Em algumas contas o Botão que Busca mais produtos está trazendo valores repetidos, isso acontece porque o componente passa 12 itens (0 a 11) e a consulta feita no GraphQL considera 18 produtos, portanto 6 produtos podem ser mostrados repetidamente.

O show more está usando informações diferentes para trazer o número de produtos para a tela.



## Workaround


Há alguma solução alternativa para esse bug? Se sim, descreva-a aqui. Caso contrário, escreva "N/A" ou "Não há nenhuma solução alternativa disponível". Não remova esta seção se não houver solução alternativa, por favor.





