---
title: 'Sinônimos'
id: um0MRK7KMbE4RZEEbblFJ
status: PUBLISHED
createdAt: 2024-08-14T18:10:16.284Z
updatedAt: 2024-10-29T19:41:49.081Z
publishedAt: 2024-10-29T19:41:49.081Z
firstPublishedAt: 2024-08-14T18:12:53.564Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: synonyms
legacySlug: sinonimos
locale: pt
subcategoryId: BBzMtJan1UTxC9QZODnlN
---

A funcionalidade de sinônimos do Intelligent Search permite cadastrar palavras com significados semelhantes a um termo de busca específico, aumentando as chances de sucesso na pesquisa. Essa ferramenta possibilita criar regras de relacionamento entre as palavras pesquisadas e as palavras contidas no cadastro de produtos.

Por exemplo: em uma loja, os produtos são cadastrados com o nome `televisão`, mas é comum os clientes pesquisarem por `tv`. Você pode configurar um sinônimo para determinar que, quando o termo `tv` for pesquisado, os resultados para `televisão` também sejam exibidos.

## Funcionamento

Durante a busca, o Intelligent Search recebe o termo pesquisado pelo cliente e verifica as regras de sinônimos cadastradas. Se um sinônimo correspondente ao termo for encontrado, o Intelligent Search inclui itens correspondentes ao sinônimo nos resultados da busca.

Assim, mesmo que o cliente não busque pela palavra cadastrada no produto, ainda pode obter resultados relevantes. Isso aumenta as chances de sucesso na busca e reduz a possibilidade de obter resultados vazios.

O uso de sinônimos também complementa os [relatórios](/pt/docs/tutorials/analytics) de buscas sem resultados. A partir dessa análise, o lojista pode identificar buscas sem sucesso e tomar ações sobre quais termos precisam de sinônimos cadastrados.

## Tipos de sinônimos

É possível criar dois tipos de sinônimos: unidirecional e bidirecional. Veja a seguir como funciona cada um deles:

| Tipo | Descrição | Exemplos |
|---|---|---|
| Unidirecional | Duas ou mais palavras possuem sentidos semelhantes, mas não são consideradas equivalentes em todos os contextos.<br>Essa configuração permite que, por decisão estratégica, a correspondência funcione apenas em uma direção. | `smartphone → iphone`<br>Ao realizar uma busca com o termo "smartphone", os resultados incluirão produtos rotulados como "iphone". No entanto, a busca por "iphone" não exibirá resultados para "smartphone". |
| Bidirecional | Duas ou mais palavras possuem sentidos e significados equivalentes, permitindo que a correspondência funcione em ambas as direções. <br><br>Essa configuração facilita a busca por produtos que podem ter nomes diferentes em cada região de um país. | `diet ⇄ zero ⇄ sem açúcar`<br>Uma busca por produtos "diet" incluirá produtos definidos como "zero" e "sem açúcar". Da mesma forma, ao pesquisar por "zero", os resultados incluirão produtos "diet" e "sem açúcar". Os resultados para "sem açúcar" também incluirão produtos “zero” e “diet”.<br><br>`tangerina ⇄ mexerica ⇄ bergamota`<br>No Brasil, os termos "mexerica", "bergamota" e "tangerina" significam a mesma fruta. Com sinônimos bidirecionais para cada termo, não será necessário replicar cada palavra na descrição do produto, pois todos os resultados serão exibidos. |

Saiba mais sobre o cadastro de sinônimos em [Criar sinônimos](/pt/docs/tutorials/criar-sinonimos).

> ⚠️ Após o cadastro ou alteração, um sinônimo pode levar até duas horas para refletir na loja.

## Boas práticas

> ❗ Não utilize as [Palavras Substitutas](/pt/docs/tutorials/otimizar-as-buscas-com-palavras-substitutas) do cadastro de produtos e SKUs no Catálogo com o Intelligent Search. Utilize apenas a funcionalidade de sinônimos, pois ela possibilita uma gestão mais escalável de termos por produto.

### Ordenação dos resultados

Ao criar um sinônimo bidirecional, não existe uma diferenciação entre os dois termos na ordenação dos resultados de busca. Por exemplo, se houver um sinônimo bidirecional `tylenol ⇄ paracetamol`, em uma busca por `tylenol`, os resultados para `tylenol `não necessariamente aparecem antes de resultados para `paracetamol`. Para determinar a ordenação, é necessário utilizar uma [Regra de merchandising](/pt/docs/tutorials/regras-de-merchandising).

### Palavras adicionadas individualmente

Ao criar um sinônimo com mais de uma palavra, as duas palavras são adicionadas individualmente ao produto. Por exemplo, se houver um sinônimo `tênis de corrida ⇄ calçado de corrida`, se alguém buscar pelo termo `corrida`, resultados para `tênis de corrida` e para `calçado de corrida` serão incluídos nos resultados de busca.

### Recursividade

Sinônimos são recursivos, ou seja, os resultados são cumulativos. Por exemplo, ao criar um sinônimo `tylenol ⇄ paracetamol` e outro sinônimo `paracetamol ⇄ dor de cabeça`, em uma busca por `tylenol`, considere que os resultados para `dor de cabeça` também serão exibidos.

### Autocorreção do Intelligent Search

Sinônimos não devem ser utilizados para resolver erros de grafia, variações de singular e plural, pronomes, artigos ou preposições nos termos de busca. Nesses casos, o Intelligent Search é capaz de interpretar, aprender e corrigir automaticamente através da [Autocorreção](/pt/tutorial/comportamento-da-busca--B9o3JbV6utAinBJ1ETujs#autocorrecao).

Veja a seguir alguns exemplos de configurações de sinônimos:

| Sinônimos | Tipo | Comentário |
|---|---|---|
| `creme ⇄ hidratante` | Bidirecional | ✔️ Configuração adequada. Quando alguém busca por `creme`, os resultados para `hidratante` são adicionados e vice-versa. |
| `calça → jeans` | Unidirecional | ✔️ Configuração adequada. Quando alguém busca por `calça`, os resultados para `jeans` são adicionados. |
| `calca → calça`  | Unidirecional | ❌ Configuração redundante. O Intelligent Search corrige automaticamente casos como esse. |
| `calça ⇄ calças` | Bidirecional | ❌ Configuração redundante. O Intelligent Search corrige automaticamente casos como esse. |
| `calça de jeans ⇄ calça jeans` | Bidirecional | ❌ Configuração redundante. O Intelligent Search corrige automaticamente casos como esse. |

> ℹ️ A funcionalidade de [Sinônimos Inteligentes](/pt/docs/tutorials/sinonimos-inteligentes) gera recomendações de termos para cadastro de sinônimos, além da configuração manual. Caso tenha interesse em implementá-la, entre em contato com nosso [Suporte](https://support.vtex.com/hc/pt-br/requests). É possível que taxas extras se apliquem futuramente.

## Saiba mais

* [Criar sinônimos](/pt/docs/tutorials/criar-sinonimos)
* [Lista de sinônimos](/pt/docs/tutorials/lista-de-sinonimos)
