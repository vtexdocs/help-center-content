---
title: 'Gerenciamento de Sellers '
id: 6eEiOISwxuAWJ8w6MtK7iv
status: PUBLISHED
createdAt: 2022-02-01T21:36:48.023Z
updatedAt: 2023-03-13T18:58:17.497Z
publishedAt: 2023-03-13T18:58:17.497Z
firstPublishedAt: 2022-02-02T18:34:52.667Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: gerenciamento-de-sellers
locale: pt
legacySlug: gerenciamento-de-sellers-beta
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---

__Gerenciamento de Sellers__ é a página onde operadores de marketplace [adicionam sellers](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392), registram suas informações e administram seus status. A página inclui métricas de andamento da operação de marketplace. Também é possível aplicar filtros nos resultados da lista de sellers e agrupar sellers por meio da opção Grupos que permite filtrar resultados mais facilmente.  

![Seller management gif 2022 launch](//images.ctfassets.net/alneenqid6w5/6nedzBeTr3y9d47ArKh40r/d280e61590f95fcd669cf45b137790f8/Seller_Management.gif)

## Métricas
A página apresenta métricas gerais dos sellers:

- __Total de sellers:__ todos os sellers integrados ao marketplace, incluindo ativos e pausados.  
- __Sellers ativos:__ sellers que estão recebendo pedidos no ecommerce do marketplace. Ao clicar na métrica, você filtra a lista por sellers ativos. É possível ativar um seller clicando em seu Status na lista, e alterando a opção marcada para ativo.   
- __Sellers pausados:__ sellers que não recebem pedidos. Ao clicar na métrica, você filtra a lista por sellers pausados. É possível pausar um seller clicando em seu status na lista, e alterando a opção marcada para pausado.   
- __Anúncios pendentes:__ anúncios enviados por sellers externos, que ainda estão aguardando aprovação do marketplace. Essa métrica não inclui anúncios de sellers white label, nem conta franquia. Ao clicar na métrica, você será redirecionado para a página [SKUs Recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396).  

## Filtros

É possível buscar um seller pela barra de busca, digitando seu nome, ID, CNPJ,   Identificação Interna ou CSC, e filtrar por:

- **Status:** se o seller está ativo ou pausado.     
- **Integração:** o tipo de integração feita para cada seller, entre seller VTEX e integradores externos, outras plataformas ou não configurado (quando nem todos os campos foram preenchidos ao Adicionar Seller).  
- **Visibilidade:** se a loja do seller está _visível_ no storefront do seu marketplace, ou se é um _[seller white label](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa#o-que-e-um-seller-white-label)_, cuja loja não aparece na experiência de compra.    
- **Grupo:** permite agrupar sellers com características semelhantes. As opções desse filtro incluem os grupos criados ao [Adicionar um seller](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392) ou em [Gerenciar grupos](gerenciar-grupos).  

## Grupos
Grupos ajudam sua operação a gerenciar múltiplos sellers de uma forma mais eficiente e escalável. Sellers podem ser agrupados em um ou mais grupos de acordo com a sua necessidade, utilizando um nome de sua escolha. Grupos são criados manualmente ao Adicionar Seller. 

Com essa funcionalidade, lojistas otimizam cenários de acompanhamento da operação, como, por exemplo:
- Identificar modelos de negócio dos sellers como 1P, 3P, ou contas franquia.   
- Agrupar sellers que  participarão de uma promoção específica.  
- Agrupar sellers que atuam em determinada categoria de produtos.   

Grupos são criados manualmente ao Adicionar seller ou clicando em Gerenciar grupos e após criados é possível editar e excluir cada um deles.  

![Gerenciamento de sellers](//images.ctfassets.net/alneenqid6w5/1dkekloSl228CxABGgylD7/cb37f601d4b9a096b0c1e94c03b90c11/gerenciamento_de_seller.png)  

## Gerenciar grupos  

Gerenciar grupos é uma funcionalidade que te permite criar grupos e editar ou excluir um ou mais grupos existentes. No Admin VTEX, acesse __Marketplace > Gerenciamento de sellers > Gerenciar grupos.__ 

Na página Gerenciar grupos, você encontra às seguintes opções:
  - Adicionar grupo  
  - Editar grupo  
  - Pesquisar por grupo, inserindo palavras-chave do nome do grupo na barra de pesquisa.  

E cada grupo apresenta os seguintes campos

| **Campo** | **Descrição** |  
|:-:|:---:|
| Grupo | Nome do grupo, este definido no momento de criação ou após a renomeação. |  
| Sellers ativos | Quantidade de sellers setados naquele grupo, que estão ativos e divulgando seus produtos no marketplace. |  
| Sellers pausados | Quantidade de sellers setados naquele grupo, mas que não estão ativos divulgando seus produtos no marketplace. |  
| Data de criação | Data que o marketplace criou o respectivo grupo. |  
| Ações | - Renomear <br> - Excluir|  

Ao acessar um dos grupos listados, você encontrará opções de edição, como status do seller, tipo de integração, e anúncios pendentes e ações como detalhes do seller e pedidos do seller. Ainda na página do grupo, é possível pesquisar os sellers por nome ou até mesmo filtrá-los.  

### Boas práticas para o uso de grupos
Sugerimos seguir as boas práticas abaixo para a criação de grupos:

- Crie no máximo 100 grupos diferentes.  
- Atribua até 100 grupos ao mesmo seller.  
- Evite acessos simultâneos feitos por contas diferentes ao criar, editar e excluir grupos.  
- Evite acessos simultâneos feitos por contas diferentes ao atribuir grupos a sellers.  
- É possível usar caracteres especiais ao nomear grupos.  
- O Gerenciamento de sellers não é case sensitive, ou seja, não faz diferenciação entre maiúsculas e minúsculas ao nomear grupos.  
- Não armazenamos um histórico de criação ou mudanças de grupos e sellers.  

## Lista de sellers
A lista inclui colunas com o nome do seller e seu ID, além das opções de filtro por Status, Integração e Anúncios pendentes. Clicando num seller da lista, você acessa a página de Detalhes do seller, onde é possível visualizar e editar as informações básicas do seller, e o que foi acordado na parceria com o marketplace. 

Clicando no botão <i class="fas fa-ellipsis-v"></i> na linha do seller, as seguintes ações são mostradas:  
- __Detalhes do seller:__ redireciona para a página de Detalhes do Seller, para visualizar ou editar informações.  
- __Pedidos:__ redireciona para a página Todos os Pedidos, no OMS da VTEX, já filtrando pelos pedidos daquele seller.  

>ℹ️ Note que a lista está ordenada por ordem alfabética. Para visualizar os dados de todos os sellers, navegue entre as páginas de resultados, clicando nas setas  <i class="fas fa-angle-left"></i> e  <i class="fas fa-angle-right"></i> ao final da página. Utilize os filtros e a busca para refinar os resultados.

  ### Seller identificável e não identificável (white label)

O ícone de _etiqueta_  <i class="fas fa-tag"></i> ao lado do nome do seller indica a visibilidade que essa loja tem durante a experiência de compra em seu marketplace. Sellers podem ter dois tipos de visibilidade:

* **Seller identificável:** o seller é visível no storefront do seu marketplace e escolhido pelo consumidor durante a experiência de compra no buy box. O ícone de etiqueta preenchido significa que o seller é identificável.  
* **Seller não identificável (white label):** [sellers white label](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label) são contas franquia na VTEX, ocultos na experiência de compra e selecionados automaticamente pelo sistema do checkout para o fulfillment do pedido. O ícone de etiqueta transparente significa que o seller não é identificável.  

Para adicionar um seller não identificável (white label), é necessário ter esse modelo previsto no contrato com a VTEX. Uma vez ajustado o contrato com o representante comercial da VTEX responsável por seu marketplace, solicite a [adição de uma conta franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) por meio do nosso Suporte. Toda conta franquia é criada como seller white label e não é possível mudar o tipo de seller após a sua criação. 

### Ações em massa
É possível realizar ações em massa selecionando múltiplos sellers ao clicar na _caixa de seleção_ à esquerda da lista. Uma vez selecionados, uma _caixa de ações_ aparecerá na tela, permitindo **pausar** e **ativar** sellers, e **adicionar em um grupo**. 

Pausando sellers, é possível catalogar seus anúncios e fazer todos os testes necessários antes de disponibilizá-lo no seu storefront para que receba pedidos, por exemplo.

## Saiba Mais
- [Adicionar seller](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392)
- [Configurar marketplace VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)
- [Ações para a operação de marketplaces VTEX](https://help.vtex.com/pt/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev)
