---
title: "O controle deslizante de faixa de preço tem como padrão o valor mínimo após a seleção de um filtro"
id: 15ABXMTT9cqieizxYWqC2V
status: PUBLISHED
createdAt: 2023-11-08T13:34:50.960Z
updatedAt: 2023-11-08T13:34:51.373Z
publishedAt: 2023-11-08T13:34:51.373Z
firstPublishedAt: 2023-11-08T13:34:51.373Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-controle-deslizante-de-faixa-de-preco-tem-como-padrao-o-valor-minimo-apos-a-selecao-de-um-filtro
locale: pt
kiStatus: Backlog
internalReference: 843442
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Esta é uma faixa de preço, é um controle deslizante e tem dois seletores (marcadores), um para o mínimo e outro para o máximo, para que ele saiba onde se posicionar no controle deslizante.
Ao aplicar um filtro de marca a ele, o seletor não moverá seu valor mínimo para os valores mínimos da marca, ele manterá o valor mínimo padrão e o marcador aparecerá fora do intervalo.

## Simulação


1 - Acesse uma página de categoria e observe o filtro de faixa de preço e seus valores mínimo e máximo.
2- Selecione um filtro marcando-o à esquerda (category2/3/4)
3- Com o filtro aplicado, observe que o controle deslizante de faixa de preço manterá o valor mínimo como antes e estará fora da faixa do controle deslizante.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Store%20Framework/o-controle-deslizante-de-faixa-de-preco-tem-como-padrao-o-valor-minimo-apos-a-selecao-de-um-filtro_1.png)

Filtrar com o comportamento descrito para o valor mínimo.



## Workaround


Não há nenhuma solução alternativa disponível.





