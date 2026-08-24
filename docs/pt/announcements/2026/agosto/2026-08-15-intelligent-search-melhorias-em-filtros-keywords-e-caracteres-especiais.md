---
title: 'Intelligent Search: melhorias em filtros, keywords e caracteres especiais'
createdAt: 2026-08-15T00:00:00.000Z
updatedAt: 2026-08-15T00:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: 2026-08-15-intelligent-search-filters-keywords-and-special-characters-improvements
locale: pt
announcementSynopsisPT: 'O Intelligent Search recebeu melhorias na visibilidade de filtros, na geração de keywords e no tratamento de caracteres especiais, além da correção de um bug no analisador de idioma inglês.'
tags:
  - Melhoria
  - Intelligent Search
---

O [Intelligent Search](/pt/docs/tracks/visao-geral-intelligent-search) recebeu um conjunto de melhorias que aumentam a relevância e a precisão dos resultados de busca, além da correção de um bug no analisador de idioma inglês. Essas melhorias não são aplicadas automaticamente. Para habilitar qualquer uma delas na sua conta, entre em contato com o [Suporte VTEX](https://supporticket.vtex.com/support).

## O que mudou?

### Cobertura mínima de resultados para filtros

Agora é possível ocultar filtros que afetam apenas uma pequena parte dos resultados de busca. Catálogos grandes frequentemente contêm filtros criados a partir de especificações compartilhadas por poucos produtos, o que polui o painel de filtros com opções de baixa cobertura.

Com a cobertura mínima ativada, filtros em que nenhuma opção atinge o percentual mínimo definido sobre o total de resultados da busca são ocultados automaticamente. É possível excluir filtros específicos dessa regra para que sejam sempre exibidos, independentemente da configuração.

Considere uma busca por "camisa" que retorna 1.000 produtos, com cobertura mínima definida em 5%:

* O filtro **Cor** cobre 1.000 produtos (100%) e é exibido.
* O filtro **Tamanho** cobre 600 produtos (60%) e é exibido.
* O filtro **Tecido** cobre apenas 30 produtos (3%) e é ocultado automaticamente, pois nenhuma de suas opções atinge o percentual mínimo.

Saiba mais em [Configuração da busca](https://help.vtex.com/pt/docs/tutorials/configuracao-da-busca).

### Geração de keyword a partir de qualquer especificação de produto

Além do nome do produto e da marca, agora é possível configurar especificações de produto para também gerar keyword (palavra-chave). Quando uma especificação é definida para esse fim, os valores preenchidos nela passam a contar como keyword do produto, com o mesmo peso do keyword extraído do nome ou da marca.

Essa melhoria é especialmente útil em catálogos nos quais informações relevantes para a busca estão registradas em especificações, e não no nome do produto, por exemplo, quando o nome não descreve o tipo, a função ou outro atributo central do item.

Considere uma busca por "frost free":

* **Refrigerador Duplex 400L** (especificação "Tecnologia de degelo": Frost Free, configurada para gerar keyword) tem alta relevância, pois o valor da especificação corresponde à busca e gera o mesmo bônus de um match de keyword, mesmo o termo não aparecendo no nome do produto.
* **Geladeira 400L** (especificação "Tecnologia de degelo": Cíclico) tem baixa relevância, pois nem o nome nem o valor da especificação correspondem a "frost free".

Saiba mais em [Como funciona a relevância dos resultados de busca](https://help.vtex.com/pt/docs/tutorials/intelligent-search-como-funciona-a-relevancia-dos-resultados-de-busca#keyword-a-partir-de-especificações).

### Tratamento de caracteres especiais

O processamento de símbolos como `®`, `@` e `&` na busca foi aprimorado. Ao habilitar esse recurso, esses caracteres passam a ser neutralizados na indexação, permitindo que produtos com símbolos no nome sejam encontrados mesmo quando o cliente os omite na busca.

Por exemplo, o produto `Brand® Papel Sulfite Multifuncional & Copiadora` passa a ser encontrado pela busca `brand papel sulfite`.

Saiba mais em [Comportamento da busca](https://help.vtex.com/pt/docs/tutorials/comportamento-da-busca).

### Correção de bug: stemming do analisador de idioma inglês

O Intelligent Search usa um analisador de idioma para normalizar os termos pesquisados, unificando variações de singular e plural de uma mesma palavra na mesma raiz. Por exemplo, em lojas em inglês, uma busca por `sneaker` também retorna produtos que contêm `sneakers`.

Corrigimos inconsistências de stemming (raiz das palavras) no analisador de idioma inglês para termos como `sticks`, `sharpies`, `its`, `bags`, `boards`, `books`, `bowls`, `cards`, `crackers`, `dividers`, `games`, `glue-sticks`, `k-cups`, `knives`, `nuts`, `rolls`, `shelves` e `supplies`, cujas formas no plural não eram mapeadas corretamente para a raiz no singular. Essa correção está disponível apenas para contas que operam em inglês.

Saiba mais em [Comportamento da busca](https://help.vtex.com/pt/docs/tutorials/comportamento-da-busca#stemming-raiz-das-palavras) e em [Como funciona a relevância dos resultados de busca](https://help.vtex.com/pt/docs/tutorials/intelligent-search-como-funciona-a-relevancia-dos-resultados-de-busca).

## O que precisa ser feito?

Nenhuma das melhorias listadas é aplicada automaticamente. Para habilitar qualquer uma delas na sua conta, entre em contato com o [Suporte VTEX](https://supporticket.vtex.com/support) informando qual melhoria deseja ativar. A correção de stemming está disponível apenas para contas que operam em inglês.
