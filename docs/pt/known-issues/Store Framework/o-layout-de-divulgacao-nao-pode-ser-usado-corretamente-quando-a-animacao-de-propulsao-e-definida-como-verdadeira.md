---
title: 'O layout de divulgação não pode ser usado corretamente quando a animação de propulsão é definida como verdadeira.'
id: 14QweVpzLO8TsyI68H79ZG
status: PUBLISHED
createdAt: 2022-04-19T19:53:22.409Z
updatedAt: 2024-07-01T18:48:05.329Z
publishedAt: 2024-07-01T18:48:05.329Z
firstPublishedAt: 2022-04-19T19:53:23.090Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: disclosure-layout-cant-be-used-properly-when-prop-animated-is-set-as-true
locale: pt
kiStatus: No Fix
internalReference: 417947
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Há um problema no layout de divulgação que só está desencadeando o bloco a ser mostrado, mas não está fechando. Isto é causado pelo propulsor animado, que não está funcionando corretamente quando definido no layout de divulgação e não permite esconder o elemento após a abertura.



## Simulação


Vá a qualquer loja usando o layout de divulgação com o propulsor animado como verdadeiro.
Tente mostrar e esconder o elemento.

O conteúdo não pode ser escondido.




## Workaround


Acrescente a seguinte manivela nos estilos, isto deve evitar o problema na animação, pois a classe está sendo mudada:

    .vtex-disclosure-layout-1-x-content-busca-descrição-contenção-ocultado {display: nenhum;}

