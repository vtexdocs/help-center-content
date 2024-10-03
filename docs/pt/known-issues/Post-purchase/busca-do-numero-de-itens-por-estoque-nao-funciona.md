---
title: 'Busca do Número de Itens por Estoque Não Funciona'
id: 30XzfoV5qg8Aigo2ioqIyU
status: PUBLISHED
createdAt: 2017-08-29T17:10:42.318Z
updatedAt: 2022-12-22T20:45:59.697Z
publishedAt: 2022-12-22T20:45:59.697Z
firstPublishedAt: 2017-08-29T17:24:55.251Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: search-for-number-of-items-per-inventory-does-not-work
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

No módulo __Estoque & Entrega__, na aba Inventario -> *Gerenciar Itens em Estoque*, há a opção de buscar pelo estoque dos produtos filtrando pelo próprio número de itens. Porém, ao tentar fazer a busca, aparece uma mensagem dizendo que não encontrou nenhum resultado (mesmo existindo estoque).


## Simulação

- No módulo __Estoque & Entrega__, na aba Inventario -> *Gerenciar Itens em Estoque*
- Digite um número que você sabe que possui no seu estoque
- A busca carrega, mas retorna a mensagem “Não foram encontrados resultados para a sua busca”

## Workaround

O workaround deste caso é fazer o controle do seu estoque através de planilha:
- No módulo __Estoque & Entrega__, acesse a aba *Dashboard*
- Baixe a planilha do estoque, como explica o artigo [Importando e Exportando Planilha de Estoque](https://help.vtex.com/pt/tutorial/importando-e-exportando-planilha-de-estoque)
- Filtre no próprio Excel o número de itens que você quer checar

