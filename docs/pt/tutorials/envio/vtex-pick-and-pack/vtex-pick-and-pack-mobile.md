---
title: 'VTEX Pick and Pack Mobile'
id: 3i1K01CQlDBFYYp42WFOet
status: PUBLISHED
createdAt: 2024-04-04T20:42:46.548Z
updatedAt: 2025-09-22T18:21:38.382Z
publishedAt: 2025-07-07T18:08:42.360Z
firstPublishedAt: 2024-04-06T01:59:46.300Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-mobile
legacySlug: vtex-pick-and-pack-mobile
locale: pt
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

> ℹ️ Se já é cliente da VTEX e deseja adotar essa funcionalidade em seu negócio, entre em contato com o [Suporte Comercial](/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

O aplicativo móvel do [VTEX Pick and Pack](/pt/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA) auxilia o separador - profissional responsável por selecionar e empacotar itens na instalação - no manuseio de pedidos, abrangendo desde a separação dos itens até o envio. Assim, o fluxo de separação e entrega dos pedidos da loja torna-se mais organizado e fluido.

![pickpack-mobile-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_1.png)

O manuseio do pedido é dividido em quatro etapas, seguindo o caminho normal de pedidos na loja:

1. [Criar ordem de serviço](#criar-ordem-de-servico)
2. [Separação dos produtos](#separacao-dos-produtos)
3. [Empacotamento do pedido](#empacotamento-do-pedido)
4. [Envio dos pacotes](#envio-dos-pacotes)

## Ordens de serviço

Uma ordem de serviço consiste em um conjunto de pedidos que serão processados pelo fluxo do Pick and Pack simultaneamente. Essa abordagem permite uma gestão eficiente, agilizando o processamento simultâneo de múltiplos pedidos.

Por exemplo, considere uma ordem de serviço que inclua apenas três pedidos:

- Pedido 1: uma camiseta vermelha e uma saia rosa.
- Pedido 2: duas camisetas vermelhas e um chapéu branco.
- Pedido 3: uma saia rosa e um chapéu branco.

Ao selecionar esta ordem de serviço para manuseio, o aplicativo indicará a separação de:

- Três camisetas vermelhas.
- Duas saias rosa.
- Dois chapéus brancos.

Em seguida, o aplicativo te auxiliará no empacotamento de cada pedido com seus respectivos itens.

> ⚠️ Ordens de serviço se aplicam apenas às fases de separação e empacotamento de pedidos. Você deve fazer o envio de cada pedido separadamente.

### Criar ordem de serviço

A aba __Sem alocação__ lista os pedidos que devem ser selecionados para [ordens de serviço](#ordem-de-servico).

![pickpack-ordemservico-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_2.png)

Para criar uma ordem de serviço, siga os passos abaixo:

1. Na tela inicial, clique em Sem alocação <i class="fas fa-arrow-right"></i>.
2. Selecione os pedidos que deseja incluir na ordem de serviço. Para criar uma ordem de serviço com todos os pedidos, clique em <i class="fas fa-square"></i> `Selecionar tudo`.
3. Clique em `Iniciar separação`.

## Separar produtos

A etapa de separação consiste em selecionar fisicamente os itens correspondentes a uma [ordem de serviço](#ordens-de-servico) e direcioná-los até a área adequada para empacotamento na sua instalação.

### Ordens de serviço pendentes

A aba __Pendentes__ exibe a lista de ordens de serviço que ainda não tiveram sua separação finalizada.

![pickpack-pendente-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_3.png)

Nesta aba, é possível selecionar pelo ID de uma ordem de serviço, caso queira visualizar apenas os itens separados daquele pedido.

Caso haja ordens de serviço atribuídas ao separador, é possível acessá-las na tela de separação seguindo estes passos:

1. Na tela inicial do aplicativo, clique em **Continuar separação**. Será exibida uma lista com as [ordens de serviço](#ordens-de-servico) designadas ao separador que estão na etapa de separação.
2. Clique na ordem de serviço que deseja separar.

Ao clicar em uma ordem de serviço, as seguintes informações são exibidas:

- __Item(ns):__ produtos que devem ser separados na ordem de serviço.
- __Informações:__ informações gerais da ordem de serviço e do pedido.
- __Resumo:__ produtos que já foram separados pelo separador.

![pickpack-em-separacao-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_4.png)

Ao clicar no menu <i class="fas fa-ellipsis-v"></i>, serão exibidas as seguintes ações:

- **Adicionar observação:** adiciona uma observação livre à ordem de serviço.
- **Marcar como pronto para empacotar:** utilizada para separar pedidos em massa ou recusar pedidos em massa.
- **Pausar separação:** pausa a contagem de tempo referente à separação da ordem de serviço.
- **Abrir leitor de código de barras:** utiliza a câmera do dispositivo para ler código de barras dos produtos.
- **Imprimir lista de separação:** disponibiliza um documento com a lista de itens da ordem de serviço para impressão.
- **Fechar menu:** fecha o menu e volta para a tela de separação. 

Para separar um produto, siga estes passos:

1. Na tela de __Separação__, acesse a aba __Item(ns)__.
2. Clique no produto que deseja separar ou deslize o produto para a direita. Caso o produto tenha mais de uma unidade, é necessário clicar a quantidade de unidades do produto. Para produtos que contém peso ou volume é preciso confirmar a medida e depois confirmar a seleção, como o exemplo abaixo.

![pickpack-item-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_5.png)

Para separar todos os produtos da ordem de serviço de uma única vez, siga estes passos:

1. Clique no menu <i class="fas fa-ellipsis-v"></i>.
2. Clique na opção **Marcar como pronto para empacotar.** 
3. Clique em **Separar todos os itens disponíveis.**

Uma vez separados, os produtos são listados na aba __Resumo__.

## Alterar a quantidade de um produto

Durante o processo de separação, é possível atualizar manualmente a quantidade de um produto. Os separadores podem fazer isso após uma solicitação do cliente, por videochamada ou mensagem de texto, ou quando o estoque disponível na loja for diferente do que foi cadastrado inicialmente, por exemplo. A quantidade pode ser alterada de duas formas:

### Seleção do produto

1. Na tela de **Separação de pedidos**, clique e segure o item cuja quantidade deseja alterar.
2. Clique na opção **Adicionar mais unidades**.
3. Selecione a quantidade correta.
4. Clique em **Confirmar alterações**.

### Seleção da ordem de serviço

1. Na tela de **Separação de pedidos**, clique na aba **Info**.
2. Clique no menu <i class="fas fa-ellipsis-v"></i> do pedido desejado.
3. Clique na opção **Adicionar mais unidades**.
4. Selecione a quantidade correta.
5. Clique em **Adicionar produtos**.

## Adicionar novos produtos a um pedido

O separador pode adicionar manualmente novos produtos a um pedido após receber uma solicitação do cliente por videochamada ou mensagem de texto, por exemplo. Há duas formas de adicionar novos produtos a um pedido em andamento:

### Seleção do produto

1. Na tela de **Separação de pedidos**, clique no <i class="fas fa-ellipsis-v"></i> menu.
2. Clique na opção **Adicionar produto ao pedido.**
3. Selecione o pedido ao qual deseja adicionar o novo item.
4. Escaneie o código de barras do produto ou busque manualmente usando a barra de busca.
5. Selecione a quantidade desejada.
6. Clique em **Confirmar seleção**.

### Seleção da ordem de serviço

1. Na tela de **Separação de pedidos**, clique na aba **Info**.
2. Clique no <i class="fas fa-ellipsis-v"></i> menu do pedido desejado.
3. Clique na opção **Adicionar novo produto**.
4. Escaneie o código de barras do produto ou busque manualmente usando a barra de busca.
5. Selecione a quantidade desejada.
6. Clique em **Confirmar seleção**.

## Recusar itens

Há cenários em que pode ser necessário recusar produtos por conta das configurações da loja e disponibilidade dos itens no inventário. 

> ⚠️ A opção de recusar itens pode não estar disponível. Em caso de dúvida, consulte a administração da loja.

Para recusar um produto da ordem de serviço, siga os passos abaixo:

1. Acesse a aba __Item(ns)__.
2. Clique e deslize para a esquerda o produto que deseja recusar.
3. Selecione a razão da recusa da lista **Motivos de recusa**.
  ![pickpack-item-recusa-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_6.png)
4. Selecione a quantidade de itens que deseja recusar ou clique em `Confirmar e descartar todas as unidades`.
5. Clique em `Descartar unidades`.

Para recusar todos os produtos da ordem de serviço de uma única vez, siga estes passos:

1. Clique no menu <i class="fas fa-ellipsis-v"></i>.
2. Clique na opção **Marcar como pronto para empacotar.** 
3. Toque em **Recusar todos os itens disponíveis.**

> ❗ Se todos os itens de um pedido forem recusados, o pedido será concluído automaticamente.

## Substituir itens

Os separadores também podem substituir um item por outro, dependendo das [configurações da loja](/pt/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#picking) e da disponibilidade do item. Esta funcionalidade ajuda a garantir que os clientes recebam os seus pedidos a tempo, mesmo que determinados itens não estejam disponíveis. 

> ⚠️ A opção de substituir itens pode não estar disponível. Em caso de dúvida, consulte a administração da loja.

Para substituir itens da ordem de serviço, siga os passos abaixo:

1. Na tela **Separação**, clique e mantenha pressionado o item cuja quantidade você deseja alterar.
2. Clique na opção **Substituir item**.
3. Escaneie o código de barras do produto ou procure-o manualmente usando a barra de busca.
4. Selecione a quantidade desejada em unidades ou informe o peso.
5. Clique em **Continuar**.
6. Selecione o motivo da substituição do item. Os motivos listados podem ser configurados na página [Configurações](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9).
7. Clique em **Confirmar e separar substituto**.

## Concluir separação

Uma vez que todos os itens da ordem de serviço foram separados, recusados ou substituídos, clique no botão `Iniciar empacotamento` para que a ordem de serviço passe para a etapa de [empacotamento](#empacotamento).

## Empacotamento

Na etapa de empacotamento, o separador seleciona os itens de cada pedido nas respectivas embalagens de envio. O aplicativo móvel do Pick and Pack permite organizar todos os pacotes necessários para diversos pedidos de forma simples e fácil.

![pickpack-empacotamento-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_7.png)

É possível acessar a página de Empacotamento ao [concluir a separação](#concluir-separacao) de uma ordem de serviço ou seguindo estes passos:

1. Na tela inicial do aplicativo, clique em **Para empacotar**. Será exibida uma lista com as [ordens de serviço](#ordens-de-servico) designadas ao separador que estão na etapa de empacotamento.
2. Clique na ordem de serviço cujos produtos deseja separar. 

![pickpack-item-pendente-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_8.png)

Siga os passos abaixo para empacotar itens:

1. Em Empacotamento, clique no pedido que deseja empacotar. 
2. Clique no botão <i class="fas fa-plus"></i> do produto que deseja adicionar no pacote ou clique em <i class="fas fa-box"></i> para empacotar todos os produtos ao mesmo tempo.
> ⚠️ Caso opte por empacotar todos os itens do pedido, os produtos que ainda não foram empacotados serão registrados em um único novo pacote.
4. Selecione um pacote já registrado ou adicione um novo pacote clicando em `+ Criar pacote`. 
5. Selecione o tipo do pacote que deseja adicionar.
6. Selecione o número de unidades deste produto que deseja adicionar àquele pacote.
7. Clique no botão `Empacotar produto`.

É necessário repetir este procedimento quantas vezes for necessário para empacotar todos os itens referente a uma ordem de serviço.

Os itens que já foram empacotados estão disponíveis na aba **Itens empacotados**. É possível alternar a visualização dos itens entre uma lista de itens ou de pedidos e pacotes, clicando em <i class="fas fa-toggle-on"></i>.

__Lista de itens__
![pickpack-item-empacotado-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_9.png)

__Pedidos e pacotes__
![pickpack-item-empacotado-2-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_10.png)

### Envio

A fase de envio permite criar serviços de envio referentes a pedidos que foram separados e empacotados.

> ⚠️ O envio é uma etapa opcional do aplicativo, a depender da sua operação e configurações feitas pelo administrador de loja.

Para enviar pacotes no aplicativo Pick and Pack, siga os passos abaixo:

1. Na tela inicial, clique no menu <i class="fas fa-ellipsis-v"></i>.
2. Clique na opção **Para envio.**
3. Selecione o pacote que deseja enviar. Aqui é preciso selecionar um pedido que tenha status `Preparando envio`.
4. Preencha as informações de envio:
    - **Data prevista para coleta**
    - **Data prevista para entrega**
    ![pickpack-envio-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_11.png)
5. Selecione uma transportadora disponível.
6. Clique em `Selecionar e continuar`.
7. Confirme as informações do envio. Se nenhuma correção for necessária, clique no botão `Criar serviço`. Caso contrário, clique em `Voltar` e volte ao passo 5. 

Finalizado o cadastro, as informações do envio serão exibidas na tela seguinte no aplicativo. Os pedidos enviados estão disponíveis pelo menu <i class="fas fa-ellipsis-v"></i> __> Concluído__. 

![pickpack-finalizacao-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_12.png)
