---
title: 'Estrutura do Gerenciamento de pedidos'
id: 2dDZmUUFXWeyQ4s2gqiY0A
status: ARCHIVED
createdAt: 2018-02-08T14:42:03.764Z
updatedAt: 2023-03-23T19:57:15.384Z
publishedAt: 
firstPublishedAt: 2018-02-08T19:04:22.889Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: estrutura-da-pagina-do-oms
locale: pt
legacySlug: estrutura-da-pagina-do-oms
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

>ℹ️ Para conferir a documentação sobre a nova interface do Order Management System (OMS), veja [Lista de Pedidos (Beta)](https://help.vtex.com/pt/tutorial/order-list-beta--2QTduKHAJMFIZ3BAsi6Pi).

Para entender melhor a seção de __Gerenciamento de pedidos__, veja o descritivo de cada área do módulo responsável pela exibição e gestão dos pedidos da sua loja.

## Todos os pedidos

### Barra de status

Apresenta de forma resumida o total de pedidos da loja no dia atual. Também faz um comparativo de pedidos entre a data em questão e o dia, semana e ano anteriores. Ao lado de cada um desses valores, é possível visualizar uma percentagem que representa a variação relativa aos pedidos de hoje.

O __ranking__ localizado no canto direito da barra com esses dados mostra a posição da loja entre todas as lojas VTEX, com a métrica ao lado indicando a evolução entre ontem e hoje.

A barra não mostra a posição exata das lojas que estão nas 5 primeiras posições: para estas, o número mostrado será sempre __“Top 5”__.

Para todos os dados de variações de pedidos, e também para os números de evolução no ranking, a cor verde indica um resultado positivo; azul, neutro; e vermelho, negativo.

>⚠️ Importante: se a comparação de pedidos é feita com base em 0 pedidos no passado, a variação é de 0%.

![barra-de-status-oms pt](https://images.ctfassets.net/alneenqid6w5/4LWth3g02ACyIe4kAAgaW4/375d254b73d0fe7a0b2ae42da0a35b12/barra_de_status_pt.png)

### Filtros

Permitem aplicar diversos filtros para ver somente a listagem de pedidos desejados. O filtro pode ser por períodos, canais, status e situações, campo buscado, status, meios de pagamento e promoções.

- [Como filtrar pedidos](/pt/tutorial/como-filtrar-pedidos/)

![botao-filtro-oms pt ](https://images.ctfassets.net/alneenqid6w5/5BeUtetKIoIOqqCeQqkwOe/7fcc082340475f487e58de9c5d162c27/filtro_pt.png)

### Barra de busca

Utilizada para fazer buscas sobres os termos encontrados no pedido, como número do pedido, CPF, nome do cliente, e-mail entre outros.

- [Como buscar pedidos](/pt/tutorial/como-buscar-o-pedido/)

![barra-de-busca-oms pt](https://images.ctfassets.net/alneenqid6w5/5n7vRoP7ws8ScEuukOG86G/0860905754f93c79af9d01ff1d8af114/barra_de_busca_pt.png)

### Barra de informações

Traz o total de pedidos listados, o ticket médio (receita dividida pelo número de pedidos) e a receita total (soma do valor total dos pedidos), sempre considerando a busca e os filtros aplicados.

Traz também o ranking de vendas da loja em relação a todas as outras lojas da VTEX. O número informado é baseado no total de pedidos concluídos naquele dia atual.

- [Interpretando os dados da barra de pedidos na tela de Todos os Pedidos.](http://help.vtex.com/pt/tutorial/interpretando-os-dados-da-barra-de-pedidos-do-oms) 

![barra-de-info-oms pt](https://images.ctfassets.net/alneenqid6w5/5yArBUQd9emIc0iA8e8Meq/74cc0ed8d9b7d6ab7b4dc48c44a79e96/barra_de_info_pt.png)

### Botão de exportação

Utilizado para exportar os pedidos retornados na busca, sempre considerando os filtros usados. O arquivo será enviado por e-mail para o usuário logado.

- [Exportar pedidos em Gerenciamento de pedidos](http://help.vtex.com/pt/tutorial/exportando-pedidos-no-oms-2) 

![botao-exportação-oms pt ](https://images.ctfassets.net/alneenqid6w5/2GJezm4WzmIOig8mkmekAy/525184bd7f438e74e609feea092ec98e/botao_exporta____o_pt.png)

### Lista de pedidos

Principal área de Gerenciamento de pedidos. Traz os últimos pedidos realizados na loja ou os resultados para a busca ou filtro realizados, respeitando também a ordenação desejada. A listagem de pedidos é atualizada automaticamente quando novos pedidos acontecem.

- [Lista de pedidos](/pt/tutorial/lista-de-pedidos/)

![todos-pedidos-oms pt](https://images.ctfassets.net/alneenqid6w5/VIquxEKz8kK4uEqOkWIUK/7fa197e58df4996da0f9e9b957bf0dcd/todos_os_pedidos_pt.png)

### VTEX DO

Reúne tarefas pendentes pela loja e são geradas pelos diferentes módulos da VTEX ou enviadas pela API, através de serviços externos. Funciona como um gerenciador de tarefas.

- [Como funciona a lista de tarefas do VTEX DO](http://help.vtex.com/pt/tutorial/vtex-do)

![vtex-do-oms pt](https://images.ctfassets.net/alneenqid6w5/JkifTR1dyCUC8SIASwmws/35a6dcac6626553ea08a4492c526f965/vtex_do_pt.png)

## Assinaturas

Motra uma listagem dos clientes que usam assinaturas na sua loja, preparando o PCI Gateway para que novas transações da mesma fonte sejam feitas automaticamente.

- [Como configurar Assinaturas na sua loja](https://help.vtex.com/pt/tutorial/como-configurar-assinaturas)

## Configurações

A primeira aba disponibilizada será a de Configurações Gerais dos pedidos, responsável por mostrar configurações relativas ao comportamento do carrinho dos clientes (afeta o momento da compra) e pedidos após concluídos.

- [Configurações Gerais dos pedidos](http://help.vtex.com/pt/tutorial/configuracoes-gerais) 

A segunda aba, **Afiliados**, é destinada para configurações de afiliados em sua loja. 

- [Configurar Afiliado](http://help.vtex.com/pt/tutorial/como-configurar-afiliado/)

![oms-configurações-gerais pt](https://images.ctfassets.net/alneenqid6w5/T2R9jSftMAa66ukO864Wy/235af9b18deb16fc1e187b1da5752318/oms_configura____es_pt.png)

