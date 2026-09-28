---
title: "Relevância"
createdAt: 2026-07-07T00:00:00.000Z
updatedAt: 2026-08-26T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: intelligent-search-how-search-result-relevance-works
locale: pt
categoryCover: true
---

A relevância é o mecanismo central do [Intelligent Search](https://help.vtex.com/pt/docs/tutorials/intelligent-search-visao-geral) responsável por definir quais produtos aparecem nos resultados de uma busca e em qual ordem. O objetivo é garantir que os produtos mais pertinentes para cada consulta sejam exibidos primeiro, considerando uma série de fatores automáticos e configuráveis.

O processo acontece em duas etapas principais:

1. Encontrar os produtos que correspondem à busca.
2. Ordenar os produtos por relevância.

## Etapa 1: como o Intelligent Search encontra os resultados

O Intelligent Search tenta localizar produtos que correspondam à busca em grupos sequenciais. Assim que um grupo retorna resultados, os grupos seguintes não são avaliados.

| Grupo | Lógica                               | Descrição                                                                                                                               | Prioridade       |
| ---- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| 1     | [AND sem fuzzy](#operadores-e-fuzzy) | Busca produtos que contenham todas as palavras pesquisadas exatamente como digitadas, sem tolerância a variações ou erros de digitação. | Maior prioridade |
| 2     | [AND com fuzzy](#operadores-e-fuzzy) | Busca produtos com todas as palavras, mas aceita pequenas variações (ex: erros de digitação, diferença de acentuação).                  |                  |
| 3     | [OR sem fuzzy](#operadores-e-fuzzy)  | Aceita produtos que contenham qualquer uma das palavras pesquisadas, mas exige correspondência exata.                                   |                  |
| 4     | [OR com fuzzy](#operadores-e-fuzzy)  | Último recurso: aceita produtos com qualquer uma das palavras, com tolerância a variações.                                              | Menor prioridade |

> ℹ️ Para resultados de fallback de OR (Grupos 3 e 4), a relevância pondera a frequência com que cada palavra encontrada aparece no produto e o quão rara essa palavra é no catálogo, em vez de apenas contar quantas palavras corresponderam individualmente. Palavras mais raras e distintas (como o nome de um produto) pesam mais do que palavras comuns (como uma unidade de medida), fazendo com que os produtos mais relevantes apareçam primeiro. Por exemplo, uma busca por "analgésico dipirona 50 comprimidos" que cai para OR prioriza produtos com "dipirona" em vez de produtos sem relação com a busca que também contenham "50" e "comprimidos", como "porta 50 comprimidos".

### Operadores e fuzzy

- **Operadores AND / OR:** o operador define se o produto precisa conter todas as palavras da busca ou apenas uma delas. Com AND, uma busca por "tênis nike" só retorna produtos que tenham os dois termos. Com OR, retorna qualquer produto que contenha "tênis" ou "nike", o que pode ampliar significativamente os resultados.

- **Fuzzy:** define a tolerância a erros de digitação. O Intelligent Search tenta corrigir o que o usuário digitou de acordo com os itens registrados no catálogo. Por padrão, termos de três a cinco caracteres aceitam um erro e termos de seis ou mais aceitam dois erros.

  Os erros considerados com fuzzy = 1 são: inserir um caractere a mais, remover um caractere, trocar um caractere ou trocar dois caracteres lado a lado. Espaços em branco não são considerados no fuzzy. Para esses casos, recomenda-se o uso de [sinônimos](https://help.vtex.com/pt/docs/tutorials/sinonimos).

> ℹ️ O Intelligent Search escolhe o operador e o nível de fuzzy automaticamente. O lojista não controla esse comportamento. O sistema começa pelo grupo mais restrito (AND sem fuzzy) e avança para grupos mais permissivos apenas se o anterior não retornar resultados. Para mais detalhes, consulte [Comportamento da busca](https://help.vtex.com/pt/docs/tutorials/comportamento-da-busca#autocorrecao).

### Stemming (raiz das palavras)

O Intelligent Search também normaliza variações de singular e plural de uma mesma palavra, unificando-as na mesma raiz antes da correspondência. Por exemplo, em lojas em inglês, uma busca por `sneaker` também encontra produtos com `sneakers`.

> ℹ️ A VTEX corrigiu inconsistências de stemming no analisador de idioma inglês para termos como `sticks`, `sharpies`, `its`, `bags`, `boards`, `books`, `bowls`, `cards`, `crackers`, `dividers`, `games`, `glue-sticks`, `k-cups`, `knives`, `nuts`, `rolls`, `shelves` e `supplies`, cujas formas no plural não eram mapeadas corretamente para a raiz no singular. Essa correção não é aplicada automaticamente a todas as contas: para solicitá-la em uma loja em inglês, entre em contato com o [Suporte VTEX](https://supporticket.vtex.com/support). Saiba mais em [Comportamento da busca](https://help.vtex.com/pt/docs/tutorials/comportamento-da-busca#stemming-raiz-das-palavras).

### Fluxo de decisão

- Se o Grupo 1 retorna resultados → exibe e para.
- Se o Grupo 1 não retorna → tenta o Grupo 2.
- Se o Grupo 2 não retorna → tenta o Grupo 3.
- Se o Grupo 3 não retorna → tenta o Grupo 4.
- Se nenhum grupo retorna resultados → busca sem resultado.

**Exemplo prático:** Uma busca por "dipirona 1g" primeiro tenta encontrar produtos com exatamente essas palavras (Grupo 1). Não encontrando nada, tenta com fuzzy (Grupo 2) e pode retornar "dipirona 1g sódica" ou variações com grafia próxima. Se ainda não houver resultado, passa para OR e pode retornar produtos com apenas "dipirona" ou apenas "1g".

## Etapa 2: como o Intelligent Search ordena os resultados

Após identificar os produtos correspondentes, o Intelligent Search aplica um algoritmo de pontuação para definir a ordem de exibição. A tabela abaixo lista os fatores em ordem decrescente de prioridade:

| #   | Fator                                           | Descrição                                                                                                         | Exemplo                                                                                                                        |
| -- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 1   | Produto promovido por regra de merchandising    | Produto explicitamente priorizado pelo lojista via regra de merchandising.                                        | Regra promovendo "Sempre Free noturno" → aparece no topo mesmo que outro absorvente corresponda melhor à busca.                |
| 2   | Produto adicionado por regra de merchandising   | Produto forçado a aparecer nos resultados mesmo sem correspondência direta com o termo buscado.                   | Busca por "vitamina C" → "kit imunidade com vitamina C e zinco" aparece por regra, ainda que não bata diretamente com a query. |
| 3   | Correspondência de ID completo                  | O consumidor pesquisou exatamente o ID do produto.                                                                | Busca por "123456" → produto com esse ID é exibido com alta prioridade.                                                        |
| 4   | Correspondência de ID parcial                   | O consumidor digitou parte do ID do produto.                                                                      | Busca por "123" → produtos como "123456" ou "123789" aparecem.                                                                 |
| 5   | Todas as palavras + keyword (palavra-chave)     | Produto contém todas as palavras pesquisadas e há correspondência com a keyword do produto.                       | Busca por "protetor solar facial FPS 50" → produto com keyword "protetor" corresponde totalmente.                              |
| 6   | Todas as palavras (sem keyword)                 | Produto contém todas as palavras, mas sem correspondência com a keyword.                                          | Busca por "solar protetor FPS 50" → "protetor solar corporal FPS 50" corresponde às palavras, mas sem match de keyword.        |
| 7   | Produto despromovido por regra de merchandising | Produto com visibilidade reduzida pelo lojista via regra de merchandising. Ainda aparece, mas com menos destaque. | Regra despromovendo produtos de gripe fora da temporada → aparecem abaixo dos demais nas buscas por "antigripal".              |
| 8   | Produto indisponível (fora de estoque)          | Produto sem estoque, configurado para aparecer mesmo assim. Exibido ao final dos resultados.                      | Busca por "dipirona 1g" → modelo fora de estoque aparece por último, com aviso de indisponibilidade.                           |

> ℹ️ As pontuações exatas atribuídas a cada fator não são divulgadas publicamente, pois fazem parte da propriedade intelectual do algoritmo de relevância do Intelligent Search.

## Conceitos importantes

### Palavra-chave (keyword)

A keyword é a palavra principal que define o produto. O Intelligent Search a identifica automaticamente com base no idioma da loja:

- **Português e espanhol:** primeira palavra do nome do produto.
- **Inglês:** última palavra do nome do produto.
- A marca é sempre tratada como keyword, independentemente da sua posição no nome e do idioma.

**Exemplos:**

| Idioma    | Nome do produto                          | Keyword   | Regra          |
| -------- | --------------------------------------- | -------- | ------------- |
| Português | Protetor solar facial FPS 50             | protetor  | 1ª palavra     |
| Espanhol  | Protector solar facial FPS 50            | protector | 1ª palavra     |
| Inglês    | Facial SPF 50 sunscreen                  | sunscreen | última palavra |
|           |                                          |           |                |
| Português | Shampoo anticaspa Head and Shoulders     | shampoo   | 1ª palavra     |
| Espanhol  | Champú anticaspa Head and Shoulders      | champú    | 1ª palavra     |
| Inglês    | Head and Shoulders anti-dandruff shampoo | shampoo   | última palavra |
|           |                                          |           |                |
| Português | Dipirona sódica 1g genérica              | dipirona  | 1ª palavra     |
| Espanhol  | Dipirona sódica 1g genérica              | dipirona  | 1ª palavra     |
| Inglês    | Generic 1g sodium dipyrone               | dipyrone  | última palavra |
|           |                                          |           |                |
| Português | Vitamina C 1000mg efervescente           | vitamina  | 1ª palavra     |
| Espanhol  | Vitamina C 1000mg efervescente           | vitamina  | 1ª palavra     |
| Inglês    | Effervescent 1000mg vitamin C            | vitamin C | última palavra |

O match de keyword do nome do produto e o match de marca são cumulativos: um produto que bate com os dois ao mesmo tempo recebe a maior pontuação possível. Ter apenas um dos dois já garante vantagem sobre produtos sem nenhum match de keyword.

#### Keyword a partir de especificações

Além do nome do produto e da marca, é possível configurar especificações de produto para também gerar keyword. Quando uma especificação é definida para gerar keyword, os valores preenchidos nela passam a contar como keyword do produto, com o mesmo peso do keyword extraído do nome ou da marca.

Essa configuração é especialmente útil em catálogos nos quais informações relevantes para a busca estão registradas em especificações, e não no nome do produto. Por exemplo, isso ocorre quando o nome não descreve o tipo, a função ou outro atributo central do item.

> ℹ️ Este recurso está disponível sob demanda. Para habilitá-lo, entre em contato com o [Suporte VTEX](https://supporticket.vtex.com/support).

### Regras de merchandising

As [regras de merchandising](https://help.vtex.com/pt/docs/tutorials/regras-de-merchandising) são configurações manuais feitas pelo lojista para ajustar os resultados de busca. Elas têm a maior prioridade no algoritmo e permitem três ações:

- **Promover:** empurrar um produto para o topo dos resultados.
- **Adicionar:** incluir um produto nos resultados mesmo que ele não corresponda à busca.
- **Despromover:** reduzir a visibilidade de um produto, mantendo-o no final da listagem.

### Sinônimos

O Intelligent Search permite configurar [sinônimos](https://help.vtex.com/pt/docs/tutorials/sinonimos) para expandir o alcance da busca. Por exemplo, mapear "rimmel" para "máscara de cílios".

#### Sinônimos de baixa relevância

> ⚠️ Esta funcionalidade está disponível apenas para um número restrito de contas. Entre em contato com o [Suporte VTEX](https://supporticket.vtex.com/support) para verificar a disponibilidade para sua loja.

A funcionalidade de sinônimos de baixa relevância penaliza produtos que chegaram aos resultados via sinônimo em relação a produtos com correspondência direta ao termo buscado.

A penalização não é absoluta. Com a funcionalidade ativada, o peso da keyword é maior do que o peso do sinônimo, o que define a seguinte hierarquia de relevância:

1. Match natural + keyword: maior pontuação.
2. Match via sinônimo + keyword: supera match natural sem keyword.
3. Match natural sem keyword.
4. Match via sinônimo sem keyword: menor pontuação.

Um produto que veio de sinônimo mas tem match de keyword será mais relevante do que um produto com match natural que não tem keyword.

## Critérios de desempate

Quando dois ou mais produtos têm pontuação de relevância similar, o Intelligent Search utiliza os critérios das [regras de relevância](https://help.vtex.com/pt/docs/tutorials/regras-de-relevancia) configurados pelo lojista para desempatar. Os critérios disponíveis são:

| Critério                       | Descrição                                                    |
| ----------------------------- | ----------------------------------------------------------- |
| Desconto                       | Produtos com maior percentual de desconto ganham prioridade. |
| Data de lançamento             | Produtos mais recentes são priorizados.                      |
| Mais vendidos                  | Ordenação por volume de pedidos.                             |
| Mais vendidos por receita      | Ordenação pelo valor total gerado em vendas.                 |
| Popularidade                   | Baseado em interações e visualizações dos produtos.          |
| Promoção                       | Produtos com promoção ativa recebem maior pontuação.         |
| Pontuação do catálogo          | Score definido diretamente no catálogo da loja.              |
| Variedade de matriz disponível | Produtos com mais variações em estoque são priorizados.      |

O impacto de cada critério é determinado pelo peso configurado pelo lojista. Se um critério prioritário estiver definido (ex: "Mais vendidos"), ele domina o desempate. Caso contrário, o sistema usa a soma ponderada normalizada de todos os critérios ativos.

## Exemplos práticos

### Busca: "dorflex"

| Produto (marca)                             | Relevância | Justificativa                                                                                                     |
| ------------------------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------- |
| Dorflex 10 comprimidos (Dorflex)            | Alta       | Keyword do nome "Dorflex" + marca "Dorflex": duplo match cumulativo, maior pontuação.                             |
| Analgésico Dorflex 36 comprimidos (Dorflex) | Empate\*   | Só match de marca "Dorflex": um match de keyword.                                                                 |
| Dorflex 36 comprimidos (Sanofi)             | Empate\*   | Só match de keyword do nome "Dorflex": um match de keyword. Desempate pelos critérios de relevância configurados. |

\* Empate na pontuação de relevância. Ambos têm exatamente um match de keyword. A ordem final entre eles é determinada pelos critérios de relevância configurados (ex: mais vendidos, desconto, data de lançamento).

### Busca: "minoxidil"

| Produto (marca)                                          | Relevância | Justificativa                                                                                                       |
| ------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| Minoxidil Turbinado 120ml (Minoxidil)                    | Alta       | Keyword do nome "Minoxidil" + marca "Minoxidil": duplo match cumulativo.                                            |
| Pant Minoxidil 50mg/ml 50ml 3 Frascos (Minoxidil)        | Empate\*   | Só match de marca "Minoxidil": um match de keyword.                                                                 |
| Minoxidil 50mg/ml Biosintética 50ml Spray (Biosintética) | Empate\*   | Só match de keyword do nome "Minoxidil": um match de keyword. Desempate pelos critérios de relevância configurados. |
| Pant Minoxidil 50mg/ml 50ml 3 Frascos (Ache)             | Baixa      | Keyword do nome é "Pant" e a marca é "Ache": nenhum match de keyword ou marca.                                      |

\* Empate na pontuação de relevância. Ambos têm exatamente um match de keyword. A ordem final entre eles é determinada pelos critérios de relevância configurados (ex: mais vendidos, desconto, data de lançamento).

### Busca: "frost free"

| Produto (nome) | Relevância | Justificativa |
| :---- | :---- | :---- |
| Refrigerador Duplex 400L (especificação "Tecnologia de degelo": Frost Free) | Alta | A especificação "Tecnologia de degelo" está configurada para gerar keyword. O valor "Frost Free" corresponde à busca e gera o mesmo bônus de um match de keyword, mesmo o termo não aparecendo no nome do produto. |
| Geladeira 400L (especificação "Tecnologia de degelo": Cíclico) | Baixa | O nome contém "Geladeira", mas nem o nome nem o valor da especificação correspondem a "frost free": não há match de keyword. |

Nesse exemplo, o termo "frost free" não aparece no nome do primeiro produto, mas está preenchido em uma especificação configurada para gerar keyword. Isso garante alta relevância mesmo quando a informação mais relevante para a busca está na especificação, e não no nome. Esse comportamento é especialmente útil para catálogos em que o nome do produto não descreve todos os seus atributos relevantes.
