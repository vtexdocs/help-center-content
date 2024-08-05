---
title: "O modelo 'relatorio-de-importacao-de-estoque' não suporta multi-linguagem"
id: 5R8b0jnibOQdXupo0hIyts
status: PUBLISHED
createdAt: 2022-05-25T18:25:43.394Z
updatedAt: 2024-02-16T20:24:28.851Z
publishedAt: 2024-02-16T20:24:28.851Z
firstPublishedAt: 2022-05-25T18:25:43.976Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: o-modelo-relatoriodeimportacaodeestoque-nao-suporta-multilinguagem
locale: pt
kiStatus: No Fix
internalReference: 585906
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a mensagem de retorno do relatório de importação do inventário está em _pt-BR_. Assim, quando a importação é concluída, o e-mail acionado através do modelo "relatorio-de-importacao-de-estoque" tem as informações em _pt-BR_, não considerando o local da loja.



## Simulação



1. Acessar o inventário de importação (Pedidos > Inventário e Expedição > Estratégia de Expedição > Armazéns > Itens de importação);
2. Anexe o arquivo a ser importado;
3. Ao final do processo de importação, o e-mail será enviado com o resultado da importação. Podemos ver que a mensagem não está respeitando o idioma da conta:

![](https://vtexhelp.zendesk.com/attachments/token/ir6cFOIA64r7ZAC7GEdbw6pww/?name=image.png)

"Importação concluída! Total de itens importados: 6. Total de itens não importados: 0,`"




## Workaround


Não há solução.

