---
title: 'VTEX DO'
id: 7KMbRL4OslN8DTX9oiuCiu
status: PUBLISHED
createdAt: 2022-04-04T21:12:30.592Z
updatedAt: 2023-11-06T14:21:27.706Z
publishedAt: 2023-11-06T14:21:27.706Z
firstPublishedAt: 2022-04-04T21:58:08.236Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: vtex-do-interface
locale: pt
legacySlug: vtex-do-beta
subcategory: 3VNOhxDrvYxJThhuJClrYZ
---

O VTEX DO é um gerenciador de tarefas criadas automaticamente pelo Admin VTEX, para que a equipe de ecommerce da sua loja as realize manualmente. Para acessá-lo, em seu Admin VTEX, vá em **Pedidos > [Todos os pedidos](https://help.vtex.com/pt/tutorial/lista-de-pedidos--2QTduKHAJMFIZ3BAsi6Pi)** e clique no ícone de caixa de entrada, localizado no canto inferior direito da página. Ao clicar no ícone, um modal se abrirá com a lista de tarefas relacionadas aos pedidos da loja. 

![VTEX Do overview PT](//images.ctfassets.net/alneenqid6w5/4FzyUh5uqhzXKfbw9MJXsQ/76b1688496144fe90a8fc65f94a62bef/VTEX_Do_overview_PT.gif)

<div class = "alert alert-info">
Somente usuários com o perfil de acesso <a href = "https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access">OMS - Full Access</a> podem realizar tarefas pelo VTEX DO. 
</div>

As tarefas estão listadas em duas abas:

* **Todas:** todas as tarefas vinculadas a pedidos da conta da loja.
* **Minhas:** tarefas atribuídas ao usuário logado na conta. 

O número que aparece ao lado do título das abas corresponde às tarefas incluídas em cada categoria (Todas e Minhas), incluindo tarefas abertas e fechadas. Ao rolar a barra em cada aba, são carregadas novas tarefas na lista.

Para sair do VTEX DO, basta clicar no ícone de X, ou clicar em qualquer lugar da página Todos os pedidos, fora do modal.

## Buscar e filtrar tarefas

Existe uma barra de busca para localizar uma tarefa, e você pode buscar por nome da tarefa, nome do usuário atribuído a ela ou por comentário inserido. 

O seletor de filtros permite marcar uma única opção ou combinar filtros. Para aplicar filtros, clique em `Filtro`, selecione a opção desejada e clique fora da caixa de filtros, mas ainda dentro do modal. É possível filtrar as tarefas por:

* Apenas as abertas  
* Apenas as não atribuídas  
* Catálogo  
* Comercial  
* Infraestrutura  
* Backoffice & ERP  
* Front-end  
* Marketplace  

## Tarefas

As tarefas listadas possuem informações que a caracterizam, incluindo: 

* Mensagem (descritas em mais detalhes na tabela a seguir).  
* ID do pedido.   
* ID do pagamento.  
* Usuário ao qual a tarefa está atribuída.   
* “Tags” usadas para filtrar a lista.  

Para gerenciar o VTEX Do de forma organizada, sugerimos [marcar uma tarefa como Finalizada](#fechar-tarefas) somente após a sua realização, para evitar retrabalho ou perda de tempo ao visualizar a lista de tarefas no futuro. 

Uma exceção a essa recomendação é quando o lojista decide finalizar uma tarefa mesmo sem acatá-la, quando, por exemplo, uma solicitação de cancelamento de pedido é revertida durante o atendimento ao cliente. 

As tarefas gerenciadas por meio do VTEX DO podem incluir mensagens de todos os sistemas da VTEX. Alguns exemplos de mensagens são:

<table>
  <tr>
   <td>Mensagem
   </td>
   <td>Descrição
   </td>
   <td>Ação
   </td>
  </tr>
  <tr>
   <td>Estornar pagamento
   </td>
   <td>Foi criada uma solicitação de estorno do pagamento.
   </td>
   <td>Acesse os <strong>Detalhes da tarefa</strong> >  clique em <strong>Ver detalhes</strong> > autorize ou cancele o estorno do pagamento na página de <strong>Detalhes da transação</strong>.
   </td>
  </tr>
  <tr>
   <td>Autorizar pedido com alçada
   </td>
   <td>Pedido foi gerado com valor fora da <a href="https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW">Regra de divergência de valores</a> configurada.
   </td>
   <td>Acesse os <strong>Detalhes da tarefa</strong> >  clique em <strong>Ver detalhes</strong> > autorize ou cancele o pedido na página de <strong>Detalhes do pedido</strong>.
   </td>
  </tr>
  <tr>
   <td>Cancelamento requisitado
   </td>
   <td>O comprador solicitou o cancelamento do seu pedido. Sugerimos que a Central de Atendimento ao Consumidor da sua loja entre em contato com a pessoa para oferecer suporte, antes de cancelar o pedido.
   </td>
   <td>Acesse os <strong>Detalhes da tarefa</strong> >  clique em <strong>Ver detalhes</strong> > autorize ou cancele o pedido na página de <strong>Detalhes do pedido</strong>.
   </td>
  </tr>
  <tr>
   <td>Ocorreu um erro na geração do pedido recorrente
   </td>
   <td>Pedidos de <a href="https://help.vtex.com/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj">Assinatura</a> costumam não serem autorizados por problemas no cartão de crédito do comprador. Sugerimos que a Central de Atendimento ao Consumidor da sua loja entre em contato com a pessoa para oferecer suporte.
   </td>
   <td>Acesse os <strong>Detalhes da tarefa</strong> >  clique em <strong>Ver detalhes</strong> > autorize ou cancele o pedido na página de <strong>Detalhes do pedido</strong>.
   </td>
  </tr>
  <tr>
   <td>Preço menor que markup mínimo
   </td>
   <td>O valor da compra é menor do que o markup, ou a margem de lucro mínima do <a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29">preço base de um SKU</a>.
   </td>
   <td>Acesse os <strong>Detalhes da tarefa</strong> >  clique em <strong>Ver detalhes</strong> > autorize ou cancele o pedido na página de <strong>Detalhes do pedido</strong>.
   </td>
  </tr>
</table>

## Detalhes da tarefa

![VTEX Do details PT](//images.ctfassets.net/alneenqid6w5/mPby3BuhZYAwGyFuII8mr/08c283d0b9bcebf7da71bd78c0d7eeec/VTEX_Do_details_PT.jpg)

Ao clicar no nome de uma tarefa da lista, você é redirecionado para o modal de detalhes da tarefa, que apresenta mais informações sobre a tarefa e ações para resolvê-la. São apresentados os seguintes campos:

* **Atribuído para:** se a tarefa não tiver nenhum responsável atribuído, clique em `Atribuir` e busque por um usuário, ou clique em `Atribuir a mim` ou em `Reatribuir`.  
* **Tags:** marcadores associados à tarefa de forma automática, usados para filtrar a lista e dar mais detalhes sobre o contexto, status e origem da tarefa. Não é possível configurar tags próprias, elas são criadas pelo sistema do Admin VTEX.    
* **Descrição:** texto incluindo mais informações sobre a tarefa.     
* **Payment ID/Order ID:** se a tarefa for relacionada a um pedido, o campo mostrará o ID do pedido. Caso seja relacionada a um pagamento, o campo mostrará o ID do pagamento.    
* **Criado Em:** data e hora de criação da tarefa.  

Botões no modal de detalhes da tarefa incluem:

* **Ver detalhes:** ao clicar nesse botão, você será redirecionado para a página do Admin VTEX relacionada à origem da tarefa. Por exemplo, para tarefas que requerem correções no pagamento, você será redirecionado para a página de detalhes daquela transação, por exemplo. É na página que se abriu que você irá executar a tarefa, conforme a descrição.  
* **Fechar tarefa/Reabrir Tarefa:** ao clicar no botão `Fechar tarefa`, a tarefa será marcada como fechada, portanto recomendamos clicá-lo somente quando a ação necessária para resolver a tarefa for concluída. É possível cancelar essa ação clicando em `Reabrir Tarefa`. Tarefas fechadas continuam aparecendo na lista do VTEX DO.    
* **Deixe um comentário:** permite adicionar comentários internos com observações sobre a tarefa. Para isso, você pode digitar na caixa de texto e clicar em `Enviar`.  

## Ações no VTEX DO

O VTEX DO permite que o usuário realize ações como: 

* Atribuir tarefas a alguém (até para si próprio).  
* Marcar tarefas como resolvidas.  

Confira a seguir mais detalhes sobre as principais ações. 

### Atribuir uma tarefa

Para que as tarefas sejam resolvidas com agilidade, é importante atribuir um responsável para cada uma. É possível atribuir uma tarefa para qualquer usuário com acesso ao OMS da loja, ou a você mesmo. Ao atribuir uma tarefa a si mesmo, ela se tornará sua responsabilidade, aparecendo na aba **Minhas**. Se o ícone user seguido de um email ou o ícone estrela estiver presente na tarefa, significa que a tarefa está atribuída a alguém, caso contrário, não está.

Para atribuir uma tarefa, realize os seguintes passos:

1. No Admin VTEX, acesse **Pedidos > Todos os Pedidos**, ou digite **Todos os Pedidos** na barra de busca no topo da página.  
2. Acesse o VTEX DO clicando no **ícone de caixa de entrada** no canto inferior direito da página.   
3. Selecione a tarefa desejada.   
4. Clique em `Atribuir`.  
5. Escolha o usuário a quem vai atribuir a tarefa:  
    * Para atribuir a outra pessoa, pesquise por um usuário ou email e clique na opção desejada.
    * Para atribuir a você mesmo, clique em **Atribuir a mim**.  

Para trocar o usuário atribuído:

1. No Admin VTEX, acesse **Pedidos > Todos os Pedidos**, ou digite **Todos os Pedidos** na barra de busca no topo da página.  
2. Acesse o VTEX DO clicando no **ícone de caixa de entrada** no canto inferior direito da página.   
3. Selecione a tarefa desejada.    
4. Clique em **Reatribuir**.  
5. Pesquise o usuário desejado na barra de busca por nome ou email.  
6. No resultado da busca, clique no usuário desejado.  

Para deixar a tarefa sem um responsável, no passo 5 clique em **Remover**. 

### Fechar tarefas

Para fechar uma tarefa:

1. No Admin VTEX, acesse **Pedidos > Todos os Pedidos**, ou digite **Todos os Pedidos** na barra de busca no topo da página.
2. Acesse o VTEX DO clicando no **ícone de caixa de entrada** no canto inferior direito da página.   
3. Clique no nome da tarefa desejada.   
4. Clique em **Ver detalhes**, para ser redirecionado à página relacionada à origem da tarefa.  
5. Execute a tarefa, conforme a sua descrição.  
6. Retorne ao VTEX DO, na página de **Detalhes da tarefa**.  
7. Clique em `Fechar Tarefa`.  

Caso necessite reabrir uma tarefa que foi indevidamente fechada, é possível reabri-la a qualquer momento. Para fazer isso, acesse a página **detalhes da tarefa** e clique em `Reabrir Tarefa`.   
