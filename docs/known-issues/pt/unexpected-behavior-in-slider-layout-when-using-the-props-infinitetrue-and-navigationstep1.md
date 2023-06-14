---
title: Comportamento inesperado no layout deslizante ao usar os prumos infinite=true e navigationStep=1
id: 2uSG9sqj32yL3wHt0SUnOO
status: PUBLISHED
createdAt: 2022-02-01T19:49:07.658Z
updatedAt: 2022-11-25T22:13:51.355Z
publishedAt: 2022-11-25T22:13:51.355Z
firstPublishedAt: 2022-02-01T21:08:05.816Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: comportamento-inesperado-no-layout-deslizante-ao-usar-os-prumos-infinitetrue-e-navigationstep1
kiStatus: Backlog
internalReference: 462895
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Um comportamento inesperado ocorre quando se utiliza o vtex.slider-layout, se estes dois prumos forem colocados juntos:


- infinito: verdadeiro
- navegaçãoStep: 1

Neste caso, quando o deslizador é rolado usando a seta para a direita, ele mostra a próxima carta, uma de cada vez, como esperado, devido ao parâmetro navigationStep=1. Mas depois de chegar à última carta, ela então mostra a primeira, e depois disso a segunda se torna a primeira da lista, e vai e vem ao clicar na seta para a direita.

O comportamento esperado seria rolar o controle deslizante até a primeira carta quando ela chegar à última, e iniciar o passo um a um novamente.



## Simulação


Crie um slider-layout usando os dois valores de escora mencionados acima e verifique o seu comportamento no site.



## Workaround


Evite usar as duas propriedades com esses valores específicos em conjunto.

Se o comportamento esperado for necessário para a página, é possível criar um componente personalizado para alcançar este resultado.

