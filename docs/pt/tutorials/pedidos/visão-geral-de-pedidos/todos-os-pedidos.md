---
title: 'Todos os pedidos'
id: 2QTduKHAJMFIZ3BAsi6Pi
status: PUBLISHED
createdAt: 2022-04-04T21:50:53.330Z
updatedAt: 2023-12-21T14:05:13.862Z
publishedAt: 2023-12-21T14:05:13.862Z
firstPublishedAt: 2022-04-04T22:39:11.450Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: all-orders
legacySlug: lista-de-pedidos-beta
locale: pt
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

> ℹ️ É possível acessar informações somente de pedidos criados nos últimos dois anos, sendo o mesmo período válido para clientes acessarem pedidos pelo [Minha Conta](/pt/docs/tutorials/como-funciona-a-minha-conta).

A página **Todos os Pedidos** permite que lojistas acompanhem os pedidos da sua loja e extraiam informação para uma gestão inteligente do seu negócio. Para acessar a página, no menu do seu Admin VTEX, clique em **Pedidos > Todos os Pedidos**. Nesta página, você pode:

- Conferir métricas de pedidos e vendas.
- Exportar um relatório de pedidos.
- Buscar e filtrar pedidos.
- Conferir uma lista com todos os pedidos da loja no período selecionado.

A seguir exploraremos os componentes e ações incluídos na página.

![Order Listing EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/visão-geral-de-pedidos/todos-os-pedidos_1.gif)

Além de pesquisar pedidos em **Pedidos > Todos os pedidos**, você pode buscar pedidos a partir de qualquer página no Admin VTEX usando a barra de busca global no topo da página. Por padrão, a busca está configurada para `Páginas`. Para buscar um pedido, clique sobre a barra, selecione a opção `Pedidos` e utilize algum dos seguintes critérios:

- ID do pedido
- Nome do cliente
- Email do cliente
- Documento do cliente 

## Barra superior

A barra superior da página contém métricas de Total de pedidos e Vendas, entre números absolutos e porcentagens do [Total de pedidos](#total-de-pedidos) e [Vendas](#vendas-em-brl). Aprofundaremos o que cada métrica significa na seção seguinte deste artigo. 

Para os dados de variações de pedidos, as cores indicam: 
- Verde: resultado positivo
- Azul: resultado neutro
- Vermelho: resultado negativo.

### Exportar relatório

No canto superior direito da página existe o botão `Exportar`, utilizado para enviar um relatório de pedidos por email. Para exportar relatório, na página **Todos os pedidos**, clique no botão `Exportar`. Você receberá por email um arquivo no formato `.csv` para download. 

Os dados no arquivo serão o conteúdo da página no momento da exportação, incluindo os filtros aplicados. Saiba mais sobre cada campo do relatório em [Relatório de pedidos](/pt/docs/tutorials/planilha-de-pedidos).

### Total de pedidos

Ao lado de cada métrica, há um número absoluto de pedidos feitos no período indicado e a porcentagem de variação em relação aos pedidos feitos no dia de hoje. Note que, se a comparação de pedidos é feita com base em zero pedidos no passado, a variação é de 0%. As métricas são apresentadas ao lado de cada data:

- **Hoje**: número de pedidos realizados até o horário do dia atual. 
- **Ontem**: 
  - Número de pedidos realizados no dia anterior, até o mesmo horário do dia atual.
  - Porcentagem de diminuição ou crescimento do número de pedidos em relação ao dia anterior. 
- **Semana passada:** 
  - Número de pedidos feitos no mesmo dia da semana passada, até o horário do dia atual.
  - Porcentagem de diminuição ou crescimento do número de pedidos em relação à semana anterior. 

- **Ano passado:**
  -  Número de pedidos feitos no mesmo dia do ano passado, até o mesmo horário do dia atual.
  - Porcentagem de diminuição ou crescimento do número de pedidos em relação ao ano anterior. 

O cálculo de pedidos feitos no ano passado é feito subtraindo 52 semanas do dia atual. Dessa forma, mantém-se o dia da semana. Por exemplo: o dia 24/novembro/2017 será comparado com o dia 25/novembro/2016, onde ambas as datas caem numa sexta-feira.
- **Ranking:** o ranking, localizado no canto direito da barra, mostra a posição da loja entre todas as lojas VTEX. A barra não mostra a posição exata das lojas que estão nas cinco primeiras posições: para estas, o número mostrado será “Top 5”.

### Vendas em “BRL”

Na barra de vendas, a moeda das métricas é a mesma em que os pedidos foram realizados. Quando uma loja permite vendas em mais de uma moeda, são exibidas várias linhas, cada uma com os dados de vendas das respectivas moedas.

Os valores apresentados na barra são atualizados de acordo com os [filtros](#filtros) selecionados. Por exemplo, se um filtro de pedidos com o status “Cancelado” estiver ativo, as métricas mostram os valores que viriam desses pedidos, mas que não foram captados de fato na  receita da loja. 

As métricas de vendas incluem:

- **Vendas:** número de pedidos com pagamento aprovado para o período selecionado.  
- **Ticket médio:** média do valor captado pelos pedidos para o período selecionado.   
- **Receita:** soma dos valores finais dos pedidos para o período selecionado.

## Filtros 

Os filtros alteram os pedidos que aparecem na lista e as métricas da barra superior. Existem quatro tipos de filtros, cada um com suas opções específicas: 

* Períodos  
* Canais  
* Status e Situação  
* Outros  

Para saber mais sobre todas opções de filtros, confira o artigo [Filtrar pedidos em Todos os pedidos](/pt/docs/tutorials/filtrar-todos-pedidos).

O seletor de filtros permite adicionar mais de um, sem um limite para a sobreposição de filtros. O que pode acontecer ao acumular filtros é que você chegue num conjunto de dados sem informação, quando, por exemplo, não houver pedidos incompletos, com data de entrega nos próximos sete dias. 

Também é possível localizar pedidos específicos por meio da barra de busca. Ela permite buscar pedidos por Número do Pedido, CPF, ou nome do cliente.  

### Aplicar filtros 

Para aplicar filtros:

1. No Admin VTEX, acesse **Pedidos > Todos os Pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.  
2. Clique em `Filtros`.    
3. Navegue entre as abas **Períodos**, **Canais**, **Status e Situação** e **Outros** para encontrar o filtro desejado.    
4. Clique na categoria desejada, ou na seta <i class="fas fa-chevron-right"></i>, para expandir as opções de filtros.    
5. Marque a caixa de seleção de um ou mais filtros.  
6. Marque a flag `Usar meu fuso horário` para que o período selecionado seja contado a partir do seu fuso horário.  
7. Clique em `Aplicar`.   

Também é possível aplicar filtros rápidos, clicando em `Status` e `Criado: Hoje`, ao lado do botão **Filtros**.   

Para desativar os filtros aplicados, siga os passos 1 e 2 descritos acima e em seguida clique em **Limpar Filtros > Aplicar**.   

### Compartilhar e importar filtros 

É possível compartilhar e importar filtros aplicados em uma página, para abrir a mesma visualização de filtros que outros usuários da loja. O compartilhamento de filtros facilita a análise do seu time de pedidos dentro de um mesmo contexto, e permite que atendentes de suporte revisem o mesmo conjunto de pedidos, por exemplo.

Representamos os filtros aplicados na lista de pedidos por meio de um código em JSON, que pode ser compartilhado entre usuários pela página **Todos os Pedidos**. 

Para compartilhar um conjunto de filtros com outro usuário:

1. No Admin VTEX, acesse **Pedidos > Todos os Pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique em `Filtros`.  
3. Clique em `Compartilhar`.  
4. Clique em `Copiar filtros`.   
  > O código em JSON que gera o conjunto de filtros será copiado para a área de transferência do seu dispositivo.  
5. Envie o código copiado para outro usuário.  

Para aplicar os filtros que foram compartilhados com você:

1. No Admin VTEX, acesse **Pedidos > Todos os Pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique em `Filtros`.  
3. Clique em `Importar`.  
4. Na caixa de texto, cole o código que foi compartilhado com você.  
5. Clique em `Importar`.  
6. Clique em `Aplicar`.   

A lista de pedidos será filtrada de acordo com o mesmo conjunto de filtros utilizado pelo usuário que compartilhou seus filtros com você.

## Lista de pedidos

É através da lista de pedidos que o lojista pode acompanhar as vendas da sua conta. Na visualização padrão, todos os pedidos da loja são listados a partir do pedido mais recente. É possível customizar a visualização das colunas:  

* Para alterar a ordenação de todos os dados da lista, clique no nome da coluna desejada.   
* Para mudar a ordenação de dados entre crescente e decrescente, clique duas vezes na coluna desejada.    

Ao selecionar um pedido da lista, você será redirecionado para a página [Detalhes do pedido](/pt/docs/tutorials/pagina-de-detalhes-do-pedido).

Confira a seguir mais detalhes sobre cada coluna:

* **Status:** identifica em que fase do fluxo o pedido se encontra. Saiba mais em [Fluxo e status de pedidos](/pt/docs/tutorials/fluxo-e-status-de-pedidos).  
* **Número do Pedido:** número identificador que o cliente recebe na tela de confirmação de compra e nos emails transacionais. É este código que deve ser usado nas comunicações entre loja e comprador.  
* **Data:** data e hora em que o pedido foi realizado pelo cliente.  
* **Cliente:** nome e o sobrenome da pessoa física ou jurídica que efetuou a compra.  
* **Qtd.:** quantidade de produtos diferentes dentro do pedido, sem considerar a quantidade de cada item. Ao passar o mouse sobre o número, é possível ver quais foram os produtos comprados.    
* **Valor:** valor total do pedido, já considerando descontos, impostos e frete.
* **Origem:** indica de onde veio o pedido, entre as opções:  
    * **Marketplace:** a compra foi realizada no site da sua loja, onde o cliente visualizou e comprou o produto de fato.  
    * **Fulfillment:** a compra foi realizada no site de outra loja, que anunciou e vendeu seus produtos.  
* **Pagamento:** forma de pagamento que foi utilizada na compra.  

## VTEX DO

![VTEX Do overview PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/visão-geral-de-pedidos/todos-os-pedidos_2.gif)

O [VTEX DO](/pt/docs/tutorials/vtex-do-interface) é um gerenciador de tarefas criadas automaticamente pelo Admin VTEX, que requerem uma ação manual da equipe de ecommerce. 

Para acessá-lo, clique no ícone de caixa de entrada, localizado no canto inferior direito da página. Ao clicar no ícone, um modal se abrirá com a lista de tarefas relacionadas aos pedidos da loja. As tarefas gerenciadas por meio do VTEX DO podem incluir ações de todos os sistemas da VTEX, como revisar pagamento, autorizar pedido ou alterar endereço da doca.
