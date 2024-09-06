---
title: 'Analytics'
id: 6qRMAHDL9hvv3oE0bh8mA1
status: PUBLISHED
createdAt: 2024-06-27T16:53:32.304Z
updatedAt: 2024-06-27T16:54:23.587Z
publishedAt: 2024-06-27T16:54:23.587Z
firstPublishedAt: 2024-06-27T16:54:23.587Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: analytics
locale: pt
legacySlug: analytics
subcategoryId: l3DubpOCHBfKyF2ueg2Vs
---

**Analytics** é uma página do VTEX Intelligent Search que organiza os dados relacionados às pesquisas realizadas na loja e possibilita exportar esses dados em um arquivo CSV.

A partir dessas informações, você tem visibilidade sobre o desempenho dos resultados de busca e dos termos de pesquisa do [Autocomplete](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4gXFsEWjF7QF7UtI2GAvhL?&utm_source=autocomplete) e poderá realizar ações para melhorar o desempenho, como criar um redirecionamento ou cadastrar um novo sinônimo.

Siga os passos abaixo para acessar a página:

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca no topo da página.
2. Em __Intelligent Search__, clique em __Analytics__. 

>ℹ️ A página de **Analytics** é nativa no VTEX Intelligent Search. Não é possível desabilitá-la no Admin.

## Dados

Os dados que compõem o relatório são atualizados a cada quatro horas e contêm as seguintes informações:

* **Termos**: conteúdo das buscas realizadas.
* **Buscas**: número de buscas realizadas para um termo específico. Quando o cliente pesquisa um termo na loja e clica em outra página ou atualiza a página, também é contabilizada uma busca.
* **Cliques**: quantidade total de cliques em resultados de busca por um termo.
* **Cliques únicos**: quantidade de cliques em resultados de busca por um termo, excluindo cliques repetidos de um único usuário. Indica a quantidade de pessoas que clicaram em determinado resultado a partir da busca.
* **CTR**: significa Click-Through Rate, ou seja, a taxa de cliques em razão do total de buscas. O cálculo dessa taxa é feito da seguinte forma: `(Cliques/Buscas) * 100`
* **Conversão**: taxa de conversão dos termos pesquisados. O cálculo da conversão segue a fórmula: `(Pedidos/Cliques únicos) * 100`. É possível que a taxa de conversão seja acima de 100%, pois é levada em consideração a quantidade de pedidos efetuados entre cliques, por exemplo, é possível que o usuário faça mais de um pedido utilizando o termo camiseta, dessa forma, a conversão seria maior do que 100%.
* **Pedidos**: quantidades de pedidos realizados a partir da busca. Para calcular essa métrica, consideramos que a busca gera um pedido sempre que, após buscar por um termo, o cliente clica em algum produto que aparece nos resultados e depois compra um produto qualquer (não necessariamente o que ele clicou).
* **Vendas**: valor total de receitas geradas por pedidos realizados a partir da busca. O cálculo segue a mesma lógica da métrica de **Pedidos**, a diferença é que o resultado reflete as receitas em vez da quantidade de pedidos.

>ℹ️ Os dados exibidos no relatório são limitados aos 10 mil termos mais pesquisados. Caso deseje os dados completos da busca da sua loja, é necessário [exportar o relatório](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3JcuptYAkwr1GLZEM3IQ2m#exportacao).

Quando você optar por [exportar um relatório](#exportacao), existe também a possibilidade de gerá-lo **Com métricas de funil**. Caso essa opção seja selecionada, quatro novas colunas serão adicionadas ao arquivo:

*   **ProductClicks**: dado um termo pesquisado, essa coluna mostra as IDs dos produtos clicados e o número de cliques que ocorreram, respectivamente. Por exemplo:`3378|1`; `3659|2`; `4038|3` significa que o produto cuja ID é 3378 foi clicado 1 vez, o produto com ID 3659 foi clicado 2 vezes e o produto com ID 4038 foi clicado 3 vezes.
*   **PositionClickAverage**: dado um termo pesquisado, essa coluna apresenta as IDs dos produtos que foram clicados e sua posição média na lista de resultados, respectivamente. Por exemplo: `4321|1` significa que o produto cuja ID é 4321 tem o primeiro lugar como posição média na lista de resultados de busca.
*   **ProductsAddToCart**: dado um termo pesquisado, essa coluna apresenta as IDs dos produtos que foram adicionados ao carrinho e a quantidade adicionada, respectivamente. Por exemplo: `3380|1`; `3910|2` significa que 1 unidade do produto cuja ID é 3380 foi adicionada ao carrinho e que 2 unidades do produto com ID 3910 foram adicionadas ao carrinho.
*   **ProductsSold**: dado um termo pesquisado, essa coluna apresenta as IDs dos produtos que foram vendidos e a quantidade vendida, respectivamente. Por exemplo: `3500|1` significa que 1 unidade do produto cuja ID é 3500 foi vendida.

## Filtros

Como opção para restringir os dados, a tela **Analytics** permite uma combinação de critérios. Veja abaixo quais são as opções de filtros disponíveis:

* **Busca** ou **Autocomplete**
* **Com resultados** ou **Sem resultados**: optar entre buscas que obtiveram resultados ou não.
* **Todos**, **Celular** ou **Computador**: limitar os dispositivos em que as buscas foram realizadas.
* **Hoje**, **Ontem**, **Últimos 7 dias**, **Últimos 30 dias** e **Personalizar**: selecionar o período para análise. A opção **Personalizar** permite inserir datas de início e fim a serem consideradas.

A página **Analytics** exibe apenas informações de um intervalo de um mês. Caso deseje acessar dados de um período de até 6 meses, é preciso [exportá-los em um arquivo no formato CSV](#exportacao).

## Exportação

Para exportar um relatório no formato CSV, você deve seguir os passos abaixo.

1. Na página **Storefront** > **Intelligent Search** > **Analytics**, clique no botão `Exportar`.
2. Configure os filtros do relatório a ser gerado.
3. Escolha se deseja marcar a opção **Com métricas de funil** ou não. Caso selecionada, essa opção acrescenta as [colunas **ProductsClick**, **PositionClickAverage**, **ProductsAddToCart** e **ProductsSold**](#dados) ao arquivo, correlacionando informações sobre quantidades de cliques e vendas às IDs dos produtos buscados.
4. Em seguida, clique em `Exportar`.
5. Espere o arquivo estar disponível para download. Sair desta página não interrompe o processo.
6. Clique em `Baixar`.

>ℹ️ O arquivo permanece disponível para download por 48 horas.

O relatório CSV baixado apresenta duas tabelas. A primeira tabela, ilustrada abaixo, contém informações sobre termos pesquisados e as métricas de funil (da coluna **ProductsClick** até a coluna **ProductsSold**), caso essa opção tenha sido selecionada.

![search-report-term](https://images.ctfassets.net/alneenqid6w5/5b8DWfBkXE9hZzugQ2LoaP/8288fcbbc3e063a58a5118e0e582d5b8/search-report-term.png)

A segunda tabela, ilustrada abaixo, mostra dados referentes ao período selecionado, exibindo a coluna Date, que informa a data da busca.

![search-report-date](https://images.ctfassets.net/alneenqid6w5/1B1hwv5X36tvAv4Nt2Nxz1/005823242a5a2a258b9e3513a34bd5eb/search-report-date.png)
