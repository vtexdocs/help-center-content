---
title: 'O componente seletor de quantidade não retorna ao valor limite quando o usuário clica rapidamente'
id: 4QRAzY1A0UD8hOUEkxAawz
status: PUBLISHED
createdAt: 2022-09-16T16:27:15.880Z
updatedAt: 2024-02-16T20:28:10.783Z
publishedAt: 2024-02-16T20:28:10.783Z
firstPublishedAt: 2022-09-16T16:27:16.745Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-componente-seletor-de-quantidade-nao-retorna-ao-valor-limite-quando-o-usuario-clica-rapidamente
locale: pt
kiStatus: No Fix
internalReference: 659909
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Basicamente, existe uma função que recebe o estado atualizado do valor sendo controlado na tela pelo usuário (é um estado de uso). Esta função é usada em todo o componente para lidar com atualizações de estado de quantidade. Para que este estado seja atualizado automaticamente quando o usuário excede a quantidade retornada no contexto, relacionado à disponibilidade do item, ele é passado dentro de um useEffect.

O problema é que a consulta de disponibilidade do item parece ser mais lenta do que o clique do usuário. Note que para o usuário exceder a quantidade limite (com base na disponibilidade do item) ele tem que clicar mais rápido.

É importante mencionar que é uma questão de frontend e não deixa o usuário inserir mais itens no carrinho do que o limite disponível.



## Simulação


Evidência: https://youtu.be/AJbtF4qeJ5k

Se a quantidade limite for 3 quando eu passar para 4, o status é atualizado com base na disponibilidade e a quantidade volta para 3. O usuário só pode passar para 5 se clicar no botão de incremento mais rápido do que o tempo de consulta de disponibilidade do item + o estado do componente é atualizado para 3. Como o clique é mais rápido, a variável que contém o valor permanece com o mesmo valor. Neste exemplo, 5.



## Workaround


N/A

