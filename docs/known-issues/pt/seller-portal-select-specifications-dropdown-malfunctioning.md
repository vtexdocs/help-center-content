---
title: O menu suspenso Selecionar especificações do Portal do Vendedor não está funcionando corretamente
id: 7DeU9mKh7gseN7svVPtDzb
createdAt: 2022-12-06T14:27:57.920Z
updatedAt: 2023-05-09T19:08:09.706Z
publishedAt: 2023-05-09T19:08:09.706Z
firstPublishedAt: 2022-12-06T14:27:58.644Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: o-menu-suspenso-selecionar-especificacoes-do-portal-do-vendedor-nao-esta-funcionando-corretamente
status: Backlog
internalReference: 711303
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a caixa de seleção de especificação de produto da página accountname.myvtex.com/admin/products/new/ tem um comportamento defeituoso quando se tenta selecionar um valor para uma especificação de produto.

Quando o usuário tenta escolher um valor, às vezes, a entrada abaixo é selecionada.

Por exemplo, você tem duas opções, cor e tamanho. Ao clicar na cor, às vezes, o tamanho é selecionado em seu lugar:

 ![](https://vtexhelp.zendesk.com/attachments/token/PpTFjmsH4i975D0uQSLD7WmkO/?name=image.png)

## Simulação


Esse é um caso intermitente, portanto, é bastante difícil de replicar de forma consistente.

De qualquer forma, para fazer isso, você deve ir à página mencionada acima e escolher a função (+) adicionar variações.

Ao fazer isso, aparecerá uma janela pop-up com o menu suspenso fornecido que tem o comportamento defeituoso. A tentativa de selecionar um valor pode retornar os dados abaixo em seu lugar

## Workaround


O uso das APIs ou até mesmo a simples alteração do idioma do administrador produzirá resultados positivos.





