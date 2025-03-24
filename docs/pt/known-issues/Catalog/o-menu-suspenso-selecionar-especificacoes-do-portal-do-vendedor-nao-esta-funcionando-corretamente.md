---
title: 'O menu suspenso Selecionar especificações do Portal do Vendedor não está funcionando corretamente'
id: 7DeU9mKh7gseN7svVPtDzb
status: PUBLISHED
createdAt: 2022-12-06T14:27:57.920Z
updatedAt: 2024-02-16T20:24:15.024Z
publishedAt: 2024-02-16T20:24:15.024Z
firstPublishedAt: 2022-12-06T14:27:58.644Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-portal-select-specifications-dropdown-malfunctioning
locale: pt
kiStatus: No Fix
internalReference: 711303
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a caixa de seleção de especificação de produto da página accountname.myvtex.com/admin/products/new/ tem um comportamento defeituoso quando se tenta selecionar um valor para uma especificação de produto.

Quando o usuário tenta escolher um valor, às vezes, a entrada abaixo é selecionada.

Por exemplo, você tem duas opções, cor e tamanho. Ao clicar na cor, às vezes, o tamanho é selecionado em seu lugar:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/o-menu-suspenso-selecionar-especificacoes-do-portal-do-vendedor-nao-esta-funcionando-corretamente_1.png)

## Simulação


Esse é um caso intermitente, portanto, é bastante difícil de replicar de forma consistente.

De qualquer forma, para fazer isso, você deve ir à página mencionada acima e escolher a função (+) adicionar variações.

Ao fazer isso, aparecerá uma janela pop-up com o menu suspenso fornecido que tem o comportamento defeituoso. A tentativa de selecionar um valor pode retornar os dados abaixo em seu lugar

## Workaround


O uso das APIs ou até mesmo a simples alteração do idioma do administrador produzirá resultados positivos.





