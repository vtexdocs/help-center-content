---
title: Como o VTEX Intelligent Search funciona?
id: 23mytRDsEduqLO0Lo7yufy
status: PUBLISHED
createdAt: 2020-03-05T14:57:22.014Z
updatedAt: 2023-04-13T23:00:35.423Z
publishedAt: 2023-04-13T23:00:35.423Z
firstPublishedAt: 2020-03-05T19:54:00.932Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: como-o-vtex-intelligent-search-funciona
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

O Motor de Busca é o centro da inteligência do VTEX Intelligent Search. Ele interpreta o termo buscado e apresenta a listagem filtrada e ordenada de produtos. Essa ferramenta possibilita uma pesquisa mais objetiva, por meio de indexação e tratamento dos dados do catálogo.

Essa funcionalidade é padrão do VTEX Intelligent Search e atende a maioria dos cenários. Contudo, o Motor de Busca também apresenta alguns ajustes para que o resultado da busca seja aperfeiçoado.

Assim, há um conjunto de configurações que alteram a listagem e a ordenação de produtos exibidos no resultado de busca. São elas:

- __Definição de campos de busca__: define determinadas informações de produto como pesquisáveis. A partir da configuração, toda pesquisa realizada verifica o conteúdo desse campo para assimilar a produtos. Os campos __Nome do produto__, __marca__, __ProductID__, __ProductRefID__, __SKUID__, __SKURefID__ e __EAN__ são definidos por padrão e não podem ser alterados. 

É possível buscar por caracteres especiais (`-` e `/`) para encontrar um produto.

_Exemplo_: foi configurado que o campo "cor" é configurável e o produto está cadastrado com o nome  "Tênis Nike Total 90" e com a cor "preta". Se um cliente pesquisar por "Tenis Preto", a ferramenta retornará produtos que possuem o termo "tenis" e cor "preta" no topo do resultado de busca. 

- __Definição e ordenação de campos de filtro__: em todos os resultados de busca são apresentados filtros que podem ser selecionados pelo usuário. Por padrão, alguns filtros já são pré-definidos, mas é possível criar de acordo com a necessidade da loja. Outro ponto customizável é a ordem de visualização.

 _Exemplos_: Preço, Categorias e Marca.

- __Configuração da autocorreção__: o usuário pode cometer erros ortográficos ao realizar uma busca. É função da ferramenta interpretar esses erros e apresentar como resultados produtos que se aproximem da pesquisa realizada.

 Para isso, o Motor de Busca tenta corrigir o que o usuário digitou de acordo com os itens registrados no catálogo. Para cada termo pesquisado, uma quantidade específica de caracteres errados é permitida. Essa quantidade de erros aceitos é chamada de fuzzy.

 O fuzzy varia de acordo com o tamanho do termo pesquisado. Por padrão, caso o termo tenha de 3 a 5 caracteres, o fuzzy aplicado será 1, ou seja, é permitido errar 1 caractere. Para termos de 6 caracteres ou mais, o fuzzy aplicado será 2.

 Os erros previstos considerando ```fuzzy = 1``` são:
   - Inserir 1 caractere a mais.
   - Remover 1 caractere.
   - Trocar 1 caractere.
   - Trocar 2 caracteres que estiverem lado a lado.

 _Exemplo_:
 Suponha que um cliente queira pesquisar pelo termo “bola”. Seguindo a configuração padrão (```fuzzy = 1``` para termos de 3 a 5 caracteres), o Motor de Busca vai apresentar o resultado “bola” para qualquer busca que contenha os erros aceitos, como:
   - bolha (inserir 1 caractere a mais)
   - boa (remover 1 caractere)
   - bora (trocar 1 caractere)
   - obla (trocar 2 caracteres que ficam um do lado do outro entre eles)

<div class="alert alert-info" role="alert">
<p> Espaços em branco não são considerados no fuzzy, então “base ball” não será corrigido para “baseball”. Recomendamos o uso de sinônimos para esses casos.</p>
</div>

- __Configuração de relevância__: funcionalidade que define a ordem dos produtos no resultado de busca. Essa configuração permite atribuir pesos e priorizar determinados critérios utilizados pelo Motor de Busca, como popularidade, data de lançamento do produto e participação em promoções, por exemplo. A relevância de um produto é composta pela combinação dos pesos e prioridades definidos por cada lojista.

 _Exemplo_: um lojista configurou que o critério Promoção possui uma relevância maior que outros critérios. Dessa forma, quando o cliente pesquisa pelo termo “camiseta” na busca interna da loja, as camisetas incluídas em promoções tendem a aparecer primeiro nos resultados, dependendo dos pesos atribuídos aos outros critérios.

 Para mais informações sobre como personalizar a ordenação dos resultados de acordo com as necessidades da sua loja, leia o artigo [Configuração de relevância](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

- __Configuração de resultado mínimo__: permite configurar a quantidade mínima de produtos para a consulta de múltiplos termos. Caso esse número não seja atingido, a busca apresenta resultados mais abrangentes, que respeitam somente um dos termos pesquisados.

 _Exemplo_: foi configurado que o resultado mínimo para consultas com múltiplos termos é __três__. O usuário realizou a pesquisa por "tenis nike", mas o catálogo possui apenas __quatro__ produtos com esse nome. A plataforma vai apresentar primeiro produtos que possuem os termos “tenis nike”, depois produtos com o termo “tenis” e, em seguida, os que possuem o termo “nike”.

- __Limite de paginação__: limita o resultado de busca a 50 páginas. Esse limite incentiva o uso de filtros, permitindo uma navegação mais relevante e focada para o usuário.

<div class="alert alert-warning">
  <p>O VTEX Intelligent Search não oferece a funcionalidade de palavras substitutas nativamente. Para ativar o uso de palavras substitutas pelo VTEX Intelligent Search, entre em contato com o <a href="https://support.vtex.com/hc/pt-br/requests">nosso suporte</a>.</p>
</div>

## Formas alternativas de busca

É possível buscar IDs na URL da loja ou na própria barra de busca. Nesta busca, você pode procurar por apenas um item ou por uma lista de itens. 

Para buscar na URL da sua loja, siga o formato a seguir:

- Exemplo para pesquisa de um item: `[endereço da conta]/[tipo do id]:[id_1]?q=[tipo do id]&map=ft`
- Exemplo para pesquisa de lista: `[endereço da conta]/[tipo do id]:[id_1];[id_2];[id_3]?q=[tipo do id]:[id_1];[id_2];[id_3]&map=ft`

Os possíveis tipos de valores para o campo tipo do ID são `product.id`, `sku.id`,`sku.ean`, `sku.reference` ou `id` (ProductID, ProductRefID, SKUID, SKURefID e EAN). Importante destacar que todos os IDs devem pertencer ao mesmo tipo. 

Você pode buscar IDs na barra de busca das seguintes formas:

1. Digitando apenas os primeiros dígitos do ID na barra de busca. É importante destacar os digítos devem que ser exatos, por exemplo caso o ID seja `0123-456-789` e for buscado por `123`, o produto não retornará. 
2. Por queries, seguindo o formato a seguir:

  - **Busca por SKU ID:** `?q=sku.id:<id>` ou `?q=sku:<id>`
  - **Busca por EAN:** `?q=sku.ean:<id> `
  - **Busca por reference ID:** `?q=sku.reference:<id>` 
  - **Busca por slug:** `?q=product.link:<link>` 
  - **Busca por product ID:** `?q=product:<id>` ou `?q=product.id:<id>`

## Indexação

A Indexação é um processo de sincronia entre os catálogos da loja e da busca. Essa funcionalidade permite uma atualização contínua do índice de produtos. Além disso, ela também executa um tratamento de dados para serem utilizados na busca.

Inicialmente, é feita uma sincronização com todos os produtos do catálogo VTEX do cliente. A partir disso, as futuras atualizações de dados – como nome e status do produto – serão recebidas em tempo real pelo indexador de busca.

Nesse processo de sincronia, o sistema forma uma fila das informações que foram atualizadas para serem indexadas no catálogo de busca. Após a indexação de todas as mudanças, elas estarão disponíveis no site. 

O processo de indexação é seguro e conta com regras de repescagem – caso um item não seja indexado na primeira tentativa, o sistema realiza outras tentativas. 

A indexação também é muito importante para analisar, tratar e organizar os dados da melhor forma para serem exibidos nos resultados.

<div class="alert alert-info" role="alert">
<p>Ao utilizar o Intelligent Search, existem duas opções que definirão a ordem de suas coleções.  Usando o comando `map=productClusterIds`, estará definindo que a ordem de suas coleções será a que foi pré definida pelo lojista, com seu próprio critério de relevância. Se você optar por usar `productClusterNames`, definirá que deseja que suas coleções sigam os padrões de relevância do próprio Intelligent Search. </p>
</div>

