---
title: 'Ponto de retirada desconsiderado por questão de prioridade'
id: 3bbsm8TELPBa0DpFtnlAGz
status: PUBLISHED
createdAt: 2021-09-29T14:38:08.930Z
updatedAt: 2024-06-14T16:56:59.120Z
publishedAt: 2024-06-14T16:56:59.120Z
firstPublishedAt: 2021-09-29T14:49:34.443Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: pickup-point-disregarded-based-on-priority
locale: pt
kiStatus: Backlog
internalReference: 380545
---

## Sumário


Quando o cliente está finalizando uma compra, o módulo de logística calcula as opções de entrega disponíveis para a localização escolhida e as apresenta no checkout. Por exemplo, suponha que para uma localização há dois pontos de retirada nomeados com o mesmo [método de envio](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126), mas associados a diferentes [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140). Neste cenário, ao calcular quais pontos de retirada devem ser disponibilizados ao cliente, a plataforma exibe apenas um deles. 

Nesse caso, o módulo de logística desconsiderou os pontos de retirada pelo seu algoritmo de priorização. Durante esse processo, apenas um dos métodos de envio de mesmo nome é apresentado ao comprador. Saiba mais nesse artigo sobre [divergência entre políticas de envio](https://help.vtex.com/pt/faq/por-que-minha-transportadora-nao-aparece-no-checkout--frequentlyAskedQuestions_165#concorrencia-entre-transportadoras-do-mesmo-tipo). 

Ao [simular uma entrega](https://help.vtex.com/pt/tutorial/simulador-de-envio--tutorials_144) em que há métodos de envio com o mesmo nome para pontos de retirada em políticas de envio diferentes, apenas um ficará disponível. Os demais pontos serão descartados e não serão exibidos pela interface ou serão exibidos com a mensagem:

“Motivo: Desconsiderado por questão de prioridade".


## Simulação


Para que a simulação apresente o cenário descrito, é preciso que estejam cadastradas pelo menos duas políticas de envio que atendam uma  mesma região de entrega. Essas  políticas de envio precisam ter métodos de envio com o mesmo nome e pelo menos um ponto de retirada associado a cada uma.

1. Abra o[ simulador de envio](https://help.vtex.com/pt/tutorial/simulador-de-envio--tutorials_144);
2. Selecione um SKU disponível em pontos de retirada compatíveis com o cenário descrito acima;
3. Faça a simulação;
4. Veja qual ponto de retirada foi selecionado;
5. Confira quais pontos de retirada foram descartados e observe a mensagem apresentada.

![KIpontoderetirada PT](//images.contentful.com/alneenqid6w5/6TLSPTSA7E5EG2sevnDYXf/cb91079a96bb328efd04b1e81960343c/KIpontoderetirada_PT.png)

O ponto de retirada foi desconsiderado porque havia outro método de envio já nomeado como **SCS Mall**.


## Workaround


Há dois possíveis workarounds:

* Evitar utilizar o mesmo nome para dois métodos de envio de pontos de retirada que atuem na mesma região. Por exemplo, no caso da simulação descrita, a solução seria  renomear um dos métodos de envio**.**
* Cadastrar uma única política de envio para os dois pontos de retirada. Então, haveria dois pontos de retirada cujo método de envio tem o mesmo nome. Não cairemos no cenário descrito anteriormente, pois ambos estariam associados  à mesma política de envio.

