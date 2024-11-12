---
title: 'Performance de Vendas'
id: 3DMube0sEsK9vPcRYGas72
status: PUBLISHED
createdAt: 2021-10-19T12:49:42.165Z
updatedAt: 2023-11-09T19:56:56.074Z
publishedAt: 2023-11-09T19:56:56.074Z
firstPublishedAt: 2021-10-19T12:55:27.227Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: sales-performance
locale: pt
legacySlug: performance-de-vendas
subcategoryId: 1TIJqw8kV2Yok4iQe4SAkq
---

A página Performance de Vendas é um painel de controle para comércio unificado, ajudando lojas a ampliarem seu negócio e tomarem decisões com mais precisão. O painel permite que usuários analisem dados dos pedidos da sua loja e de seus sellers, no caso de [lojas que atuam como marketplaces](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#atuar-como-marketplace). Com a página, usuários podem:

- Monitorar a saúde do seu negócio
- Avaliar o impacto nas vendas dos eventos de alta demanda (Black Friday, Cyber Monday)
- Entender motivos de variações no volume de vendas ou na taxa de conversão
- Encontrar oportunidades de melhoria nos resultados da sua loja 

Para acessar a página, em seu Admin VTEX vá para __Dashboards > Performance de Vendas__.  

É possível customizar a visualização dos dados do gráfico e da lista filtrando por período, dimensões e métricas.

![Sales Perf Dash PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.gif)

## Dados 
Os dados da página são provenientes do [sistema de Gerenciamento de Pedidos](https://help.vtex.com/pt/tracks/orders--2xkTisx4SXOWXQel8Jg8sa) da VTEX. A Performance de Vendas é uma solução analítica, que usa heurísticas e fórmulas criadas a partir de nossa experiência levando nossos clientes de ecommerce para o próximo nível para calcular suas métricas. A página não deve ser utilizada como substituto para os dados do OMS, mas como ferramenta de análise e insights de negócio.

Para garantir que você tenha acesso tanto aos últimos dados atualizados e também a todo seu histórico para análise sem perdas de performance, internamente o painel de Performance de Vendas divide esses dados em grupos separados. 

Esses grupos também são processados por sistemas diferentes, o que pode causar uma diferença entre dados do OMS e do Performance de Vendas, apesar de buscarmos apresentar no máximo 5% de divergência. 

>⚠️ É provável que existam diferenças entre as métricas de receita e ticket médio registradas no OMS e no Performance de Vendas, por exemplo. Isso ocorre porque o Performance de Vendas considera o valor dos itens, enquanto o OMS também considera os descontos, frete, taxas e promoções sobre o pedido - o que pode aumentar ou diminuir seu valor final.

## Período

O seletor de período permite definir o intervalo de tempo que deve ser considerado para análise da Performance de Vendas. Assim, é possível entender como as métricas e dimensões se desenvolveram quando comparados com o período anterior. Os dados da página são atualizados a cada hora, portanto usuários podem esperar um delay de 10 a 80 minutos, dependo do horário em que acessaram a página. É possível filtrar o período para no máximo 90 dias.

Para alterar o período:

1. No topo da página _Performance de Vendas_, clique no botão <i class="fas fa-angle-down"></i> ao lado de **Período**. 
2. Em **Período principal**, selecione as datas de início e fim desejadas pelo calendário.
    > Também é possível clicar no ícone <i class="fas fa-angle-down"></i> para fazer uma seleção rápida entre as opções descritas na tabela abaixo.
3. Em **Comparar com**, selecione as datas de início e fim desejadas pelo calendário.
    > Também é possível clicar no ícone <i class='fas fa-angle-down'></i> para alternar entre as opções descritas na tabela abaixo ou _Período anterior._
4. Clique em `Aplicar`.

Os dados da página serão filtrados de acordo com o período selecionado. 

Confira abaixo as opções de período disponíveis:

| Período         | Início                                             | Fim                                            |
|-----------------|----------------------------------------------------|------------------------------------------------|
| Hoje            | 00:00h do dia atual.                                | Momento atual, com delay de 10 a 80 minutos.   |
| Ontem           | 00:00h do dia anterior ao atual.                    | 23:59 do dia anterior ao atual.                 |
| Últimos 7 dias  | 00:00h do oitavo dia anterior ao dia atual.         | 23:59 do dia anterior ao atual.                 |
| Semana passada  | 00:00h de segunda-feira da semana anterior à atual. | 23:59 de domingo da semana anterior à atual.    |
| Últimos 28 dias | 00:00h do 29° dia anterior ao dia atual.            | 23:59 do dia anterior ao atual.                 |
| Mês passado     | 00:00h do primeiro dia do mês anterior ao atual.    | 23:59h do último dia do mês  anterior ao atual. |
| Personalizado    | Marque no calendário a _Data de início_ desejada. | Marque no calendário a _Data de fim_ desejada, ocorrida nos próximos 90 dias após a data de início. A duração entre Início e Fim não pode ultrapassar 90 dias. |

O gráfico sempre indica os dados do período anterior ao selecionado, por meio da linha pontilhada, para embasar sua comparação. Dessa forma, se você selecionar o período *Últimos 7 dias*, a linha pontilhada do gráfico indica os dados dos últimos 7 e 14 dias atrás, por exemplo. 

## Dimensões de filtro e agrupamento de dados

Dimensões são as opções disponíveis para filtrar, agrupar e comparar dados no dashboard de Performance de Vendas. Saiba mais sobre cada dimensão:

| Dimensão | Descrição |
|---|---|
| Categoria | Categorias cadastradas na arquitetura de seu Catálogo. |
| Marca | Marcas cadastradas na arquitetura de seu Catálogo. |
| Nome do Marketplace Out | Nome do marketplace em que sua loja vende produtos. |
| Canal de entrega | Define se o pedido foi enviado ao cliente ou entregue no Ponto de retirada. |
| Método de Envio | Nome do tipo de entrega, cadastrado na Política de envio, que será exibido no checkout para o cliente (Ex. expressa, normal). |
| Cidade de Destino | Cidades para onde seus pedidos foram enviados. |
| Estado de Destino | Estados para onde seus pedidos foram enviados. |
| Nome do Seller | Nome dos sellers que vendem produtos em seu marketplace. É possível conferir seus nomes na página Gerenciamento de Sellers. |
| Meio de pagamento | Formas que o cliente final da sua loja pode efetuar pagamentos, determinadas ao configurar as Condições de pagamento. |
| Nome do Produto/SKU | Nome dos Produtos ou SKUs que deseja aplicar na visualização de dados. |
| 1P / 3P | 1P, ou first-party, determina as métricas da própria loja. 3P, ou third-party, determina as métricas de terceiros. Por exemplo, ao selecionar a métrica Pedidos e filtrar por 3P, você verá os pedidos de terceiros, seus sellers, na lista e no gráfico. |
| Campanha | Nome das campanhas criadas no Admin VTEX. |
| Cupom | Nome dos cupons criados no Admin VTEX. |
| Política comercial | Nome das [políticas comerciais](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) cadastradas na sua loja para filtrar pelas suas diferentes estratégias e canais de vendas. |
| Promoções | Nome das [promoções](https://help.vtex.com/pt/tutorial/exemplos-de-promocao--5A8UTc7knvAscxo7e7rMFD) criadas no Admin VTEX. |
| UTM Campaign | Nome das [UTM](https://help.vtex.com/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii) Campaigns cadastradas para suas campanhas. |
| UTM Source | Nome das [UTM](https://help.vtex.com/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii) Sources cadastradas para identificar a origem do tráfego em seu ecommerce. |

## Métricas
Tanto o gráfico quanto a lista apresentam as métricas da sua loja, a partir dos dados do módulo de Gerenciamento de Pedidos (OMS). As métricas são divididas em:

### Receita
- __Receita captada:__ soma dos valores finais dos pedidos captados, indicando o valor que a loja recebeu de receita.   
- __Receita aprovada:__ soma dos valores finais dos pedidos que tiveram pagamentos aprovados no período selecionado.   
- __Receita faturada:__ soma dos valores finais dos pedidos que foram faturados no período selecionado.   
- __Receita cancelada:__ soma dos valores finais dos pedidos que foram cancelados no período selecionado.   

### Pedidos
- __Pedidos Captados:__ número de pedidos recebidos pela sua loja no período selecionado.     
- __Pedidos Aprovados:__ número total de pedidos com pagamentos aprovados no período selecionado.    
- __Pedidos Faturados:__ número total de pedidos faturados no período selecionado.    
- __Pedidos Cancelados:__ número total de pedidos cancelados no período selecionado.  
- __Pedidos aprovados (%):__ porcentagem de pedidos aprovados, calculado a partir do total de pedidos com o pagamento aprovado, dividido pelo total de pedidos captados no período selecionado.  
- __Quebra de pedidos aprovados (%):__ porcentagem de pedidos faturados, entre aqueles que já haviam sido aprovados. Calculado a partir do total de pedidos faturados, dividido pelo total de pedidos com pagamento aprovado no período selecionado.    
- __Pedidos faturados (%):__  porcentagem de pedidos faturados no período selecionado. Calculado a partir do total de pedidos que já foram faturados, dividido pelo total de pedidos captados no período selecionado.  
- __Pacotes por pedido:__ média da quantidade de pacotes por pedido. Esse valor pode ser abaixo de zero caso alguns pedidos não tenham pacotes registrados.  

### Itens
- __Itens Captados:__ soma dos itens pertencentes aos pedidos captados no período selecionado.  
- __Itens Aprovados:__ soma dos itens pertencentes aos pedidos aprovados no período selecionado.  
- __Itens Faturados:__ soma dos itens pertencentes aos pedidos faturados no período selecionado.  
- __Itens Cancelados:__ soma dos itens pertencentes aos pedidos cancelados no período selecionado.  

### Outros
- __Preço médio por item:__ média do preço pago por item pelo cliente final da loja.    
- __Preço médio do frete:__ média do preço de frete pago pelo cliente final da loja.    
- __Ticket Médio (Captado):__ média do valor pago por pedidos captados no período selecionado.    
- __Ticket Médio (Aprovado):__ média do valor pago por pedidos com pagamentos aprovados no período selecionado.    
- __Ticket Médio (Faturado):__ média do valor pago por pedidos faturados no período selecionado.    
- __Ticket Médio (Cancelado):__ média do valor que seria pago por pedidos cancelados no período selecionado.    

## Filtros

Os filtros utilizam as [dimensões](#dimensoes-de-filtro-e-agrupamento-de-dados) para selecionar os dados que aparecem na [lista](#lista) e no [gráfico](#grafico).

O seletor de filtros permite adicionar mais de um, sem um limite para a sobreposição de filtros. O que pode acontecer ao acumular filtros é que você chegue num conjunto de dados sem informação, quando, por exemplo, não houver vendas do seller ABC, dentro da categoria Moda, na região Sul, com o meio de pagamento Y.

Para aplicar filtros na visualização dos dados de vendas da sua loja:

1. Em *Dashboards*, acesse **Performance de Vendas**.  
2. No canto superior direito da página, clique em `Filtros`.  
3. Clique em `+ Adicionar filtro`.  
4. No primeiro menu seletor, selecione a dimensão de dados desejada.  
5. Na lista suspensa, selecione o(s) **valor(es)** desejado para a dimensão escolhida.   
6. Clique no botão `Aplicar`.  
> As opções *Nome do seller* e *Nome do produto/SKU* requerem que você digite o valor desejado.  
7. Se desejar, adicione mais filtros clicando no botão `+` e repita os passos de 4 a 6.  

### Outras ações para filtros
Além de aplicar filtros, também é possível realizar as ações abaixo:  

- Para apagar todos os filtros, clique no botão `Limpar filtros`.   
- Ao clicar no botão `:`, é possível:   
  - **Duplicar:** para aproveitar a base de um filtro para a criação de outros, sem apagar ou sobrescrever um filtro  já criado.  
  - **Copiar link:** para compartilhar a visualização com outra pessoa com acesso à conta da sua loja na VTEX.   
  - **Fixar:** para fixar a visualização de filtros na página.  
- Ao clicar em uma dimensão da lista, você cria uma visualização de filtro para aquela dimensão automaticamente. Saiba mais em [Casos de uso](#casos-de-uso).   

## Menu Exibições

![Sales perf update PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.gif)

A Performance de Vendas permite customizar o dashboard aplicando diferentes filtros e selecionando as métricas que aparecerão no gráfico e na lista. Para facilitar sua exploração de dados no dia a dia, criamos as Exibições, que gravam os filtros e métricas aplicados na página para sua visualização direta. É possível salvar, editar e compartilhar visualizações distintas do dashboard. A página já vem com as seguintes Exibições configuradas por default:

- Gestão de Venda
- Gestão de Fulfillment
- Gestão de Categoria
- Gestão de Seller 3p

Para criar uma nova Exibição:

1. Em *Dashboards*, acesse **Performance de Vendas**.  
2. No canto superior esquerdo da página, clique no ícone <i class="fas fa-thumbtack"></i>.   
3. Em *Exibições*, clique no botão `+`.   
4. Insira um nome para a Exibições.   
5. Clique em **Criar**.  

Para editar uma Exibição:

1. Em *Dashboards*, acesse **Performance de Vendas**.  
2. No canto superior esquerdo da página, clique no ícone <i class="fas fa-thumbtack"></i>.   
3. Em *Exibições*, selecione a Exibição desejada.  
4. Faça as edições desejadas nos filtros e métricas da página.  
5. Utilize os atalhos do seu teclado para salvar:  
- Usuários MacOS: `command + S`.  
- Usuários Windoes: `ctrl + S`.   

### Outras ações para Exibições

As Exibições criadas estarão disponíveis em **Exibições > Suas exibições**.   
Uma vez criadas, é possível realizar as ações abaixo:  

- Buscá-las por nome ou navegar nas opções listadas.    
- Clicando no botão `:` ao lado do nome da visualização, é possível:  
  - **Fixar**: para selecionar a exibição que sempre estará aberta ao acessar a Performance de Vendas.   
  - **Duplicar**: para aproveitar a base de uma exibição para a criação de outras, sem apagar ou sobrescrever uma visualização já criada.  
  - **Copiar link**: para compartilhar a exibição com outra pessoa com acesso à conta da sua loja na VTEX.   
  - **Renomear:** para alterar o nome dado a exibição selecionada.  

## Gráfico

O gráfico da página utiliza dados do OMS da VTEX para gerar sua visualização e ilustra as métricas selecionadas para aquele período.  O eixo X representa o tempo, e o eixo Y a métrica selecionada. A linha pontilhada se refere ao período anterior, e a linha contínua se refere ao período selecionado. 

Sempre que você aplicar um filtro, mudar o período ou alterar uma métrica, o gráfico será atualizado de acordo. Passando o seu cursor no gráfico, é possível obter mais detalhes sobre aquela métrica no período selecionado, incluindo sua porcentagem de aumento ou diminuição e a comparação com o período anterior. 

A página inclui cinco abas para gráficos das métricas selecionadas, para que você possa comparar dados diferentes, navegando entre as abas. Clicando em uma aba você vê o gráfico daquela métrica somente, os gráficos não cruzam dados de métricas diferentes. É possível selecionar qual métrica você quer visualizar clicando no botão `Mudar Métrica`. 

## Lista

A lista representa as métricas e filtros aplicados no gráfico em formato de tabela. As colunas representam as métricas selecionadas em cada aba do gráfico, e as linhas representam a dimensão usada para agrupar os dados. 

- __Alterar métricas e dimensões:__ para alterar a dimensão usada nas linhas, clique no botão seletor ao lado de `Agrupar por:`  no topo da página. Para alterar as métricas das colunas, clique em `Mudar métrica` na aba correspondente do gráfico.  
- **Ordenar dados:** clicando nas setas ao lado da métrica em cada coluna, é possível ordenar os dados da tabela na ordem crescente (↑) ou decrescente (↓). Ao clicar na dimensão em uma linha, você cria uma visualização de filtro automaticamente para aquela dimensão. O filtro aplicado anteriormente continua, mesmo mudando o agrupamento. Para retirar os filtros aplicados dessa forma, clique no __seletor de filtros__ no topo do gráfico > __Limpar filtros__ > __Aplicar__.      
- __Alterar visualização de dados__: altere a visualização dos dados escolhendo entre as opções: 
  - __Percentual:__ visualize a porcentagem de aumento ou diminuição em cada métrica da lista, entre um período e outro.
  - __Absoluto:__ visualize em números absolutos o aumento ou diminuição das métricas da lista, entre um período e outro. 
  - __Representativo:__ visualize o percentual de representatividade de um item dentro de uma métrica.

>ℹ️ Note que as métricas *Ticket médio* e *Itens por pedido* não terão visualização Percentual ou Representativa disponíveis, já que são métricas calculadas dividindo outras, e a soma de todas as partes de cada uma não é igual ao Total.

### Exportar dados

É possível exportar um arquivo com os dados que aparecem na lista, seguindo as dimensões e filtros aplicados, mas incluindo todas as métricas, e não só as representadas nas colunas da lista. 

Ao clicar em `Exportar` você receberá o arquivo por email em até dez minutos. O arquivo exportado vem em formato `.rar` e para acessá-lo como planilha, é necessário modificar o tipo do arquivo colocando .csv como sua extensão. Para isso, abra o arquivo em seu computador, e renomeie-o adicionando `.csv` ao final do seu nome. 

É possível abrir o arquivo CSV por meio de vários leitores de tabelas, como [Planilhas Google](https://support.google.com/docs/answer/40608?hl=pt-BR&co=GENIE.Platform%3DDesktop), [Excel](https://support.microsoft.com/en-us/office/import-data-from-a-csv-html-or-text-file-b62efe49-4d5b-4429-b788-e1211b5e90f6) e [Numbers](https://support.apple.com/pt-br/guide/numbers/tan9f3c54bdc/mac) por exemplo. Caso o arquivo seja aberto com formatação desconfigurada no Excel, é possível usar o [Assistente de importação de texto](https://support.microsoft.com/pt-br/office/assistente-de-importa%C3%A7%C3%A3o-de-texto-c5b02af6-fda1-4440-899f-f78bafe41857) da Microsoft para definir colunas com mais precisão.

## Casos de uso

Existem várias formas de utilizar a página Performance de Vendas para extrair inteligência de negócio a partir dos dados. Abaixo demonstramos formas de explorar dados livremente, investigar um dado específico e também abordamos um exemplo de análise de dados de sellers, por meio do painel de Performance de Vendas.  

### Explorar dados
A página pode ser utilizada de forma exploratória, alternando entre a visualização do gráfico e da lista para identificar pontos fora do comum, ou um crescimento inesperado em alguma métrica, por exemplo. Para isso, sugerimos que você:

1. Visualize o *gráfico*, alternando entre as diferentes [métricas](#metricas).  
2. Visualize a *lista*, alternando entre diferentes agrupamentos de [dimensões](#dimensoes-de-filtro-e-agrupamento-de-dados).  
3. Quando observar um resultado que deseja explorar mais a fundo, aplique um [filtro](#filtros).    
4. Salve a exibição para repetir essa análise ao longo do tempo.  

### Investigar dado específico
Vamos supor que você precise de um dado das suas vendas para completar um relatório, ou montar uma apresentação. A página também pode ser utilizada para alcançar um dado específico que você já tenha em mente. Para isso, sugerimos:

1. Determine o __período__ desejado.  
2. Aplique um ou mais __filtros__ com as dimensões desejadas clicando no botão seletor, ou clicando diretamente na linha da lista.  
3. Exporte a __planilha__ com os dados agrupados para continuar a investigação.  

### Exemplo de análise de sellers
Vamos supor, por exemplo, que você lançou uma promoção para a categoria Livros no seu marketplace, e deseja investigar a performance de seus sellers nesse cenário. 

1. Para isso, comece selecionando o __período__ desejado, correspondente à duração da promoção.   
2. Em seguida, selecione a *dimensão 3P* no seletor de filtros e adicione outro filtro com a *categoria Livros*.    
3. Veja na lista o seller que mais vendeu, a partir da métrica __Pedidos (Faturados)__ ou __Receita (Faturada)__.   
4. Exporte a __planilha__ com essa visualização de dados, para analisar todas as métricas de vendas para a categoria Livros dos seus sellers.  

