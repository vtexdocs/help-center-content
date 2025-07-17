---
title: "Cliques no NumericStepper não funcionam"
id: 7xGnJNyjWERcJ48ollIqh1
status: PUBLISHED
createdAt: 2022-07-04T16:45:10.692Z
updatedAt: 2022-11-25T22:13:19.050Z
publishedAt: 2022-11-25T22:13:19.050Z
firstPublishedAt: 2022-07-04T16:45:11.166Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: cliques-no-numericstepper-nao-funcionam
locale: pt
kiStatus: Backlog
internalReference: 537245
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os cliques do Stepper Numérico não estão funcionando como esperado - você ainda pode editar a caixa de texto mas os botões não aumentam ou diminuem o número da caixa de texto. As chamadas de rede parecem ser enviadas da mesma forma. O cliente relatou este problema ao usar o Windows 11 com o Chrome. Algumas considerações:


- Em um laptop que é touchscreen, ao utilizar o recurso de toque, ele funciona
- Não fomos capazes de reproduzi-lo ao usar o Mac OS
- Fizemos diferentes testes de compatibilidade entre Navegador/CA e não pudemos replicar o problema também, mesmo usando o navegador/CA que o cliente mencionou



## Simulação


Escolha qualquer PDP de uma loja e verifique se o degrau numérico está respondendo aos seus cliques.



## Workaround


Use a opção de caixa de texto para definir o número correto de itens que você deseja comprar.

