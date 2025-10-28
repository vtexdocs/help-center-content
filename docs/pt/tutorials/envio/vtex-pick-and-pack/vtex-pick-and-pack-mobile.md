---
title: 'VTEX Pick and Pack Mobile'
id: 3i1K01CQlDBFYYp42WFOet
status: PUBLISHED
createdAt: 2024-04-04T20:42:46.548Z
updatedAt: 2025-10-01T19:33:57.065Z
publishedAt: 2025-10-01T19:33:57.065Z
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

![pickpack-mobile-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_1.png)

O manuseio do pedido é dividido em três etapas, seguindo o caminho normal de pedidos na loja:

1. [Criar ordem de serviço](#criar-ordem-de-servico)
2. [Separação dos produtos](#separar-itens)
3. [Empacotamento do pedido](#empacotamento)

## Menu

O menu do aplicativo **VTEX Pick and Pack** reúne as principais funcionalidades que auxiliam na navegação e na execução das tarefas. Por meio dele, é possível acessar diferentes áreas do aplicativo de maneira mais eficiente.

Para acessar o menu, clique no ícone <i class="fas fa-grip-lines"></i> no topo direito. Nele, você encontrará os seguintes campos:

![pickpack-menu-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_2.png)

- <i class="fas fa-house"></i> **Resumo**: botão que direciona para a tela de início do aplicativo.
- <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_12.png" alt="pickpack-logout" width="30" height="30">: botão para realizar o logout do aplicativo.
- <i class="fas fa-history"></i> **Histórico**: botão que direciona para o histórico de [ordens de serviço](#ordens-de-servico) concluídas.
- <i class="fas fa-globe"></i> **Idioma**: botão para mudar o idioma do aplicativo.
- __Alterar para__ <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_13.png" alt="pickpack-logout" width="35" height="30">: botão para mudar a instalação que será realizada a separação dos pedidos.
- **Pendentes**: botão que direciona para a tela de [ordens de serviço pendentes](#ordens-de-servico-pendentes).
- **Para empacotar**: botão que direciona para a tela de ordens de serviço que aguardam o [empacotamento](#empacotamento).
- <i class="fas fa-bell"></i>: área de notificação das últimas alterações nas [ordens de serviço](#ordens-de-servico).
- `Solicitar próxima tarefa` <i class="fas fa-arrow-right"></i>: botão que direciona para a tela de [criação de ordem de serviço](#criar-ordem-de-servico).

Para recuar o menu, clique em `Fechar menu` <i class="fas fa-chevron-right"></i>.

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

A imagem da aba abaixo lista os pedidos que devem ser selecionados para [ordens de serviço](#ordens-de-servico).

![pickpack-ordemservico-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_3.png)

A lista de pedidos tem as informações organizadas da seguinte forma:

| Pedido     | Entrega até     |
| ---------- | ---------- |
| Número do pedido com a quantidade de unidades e de total de itens que estão contidos no pedido.       | Data de entrega limite do pedido.       |

Para criar uma ordem de serviço, siga os passos abaixo:

1. Clique no `menu` <i class="fas fa-grip-lines"></i>.
2. Clique no botão `Solicitar próxima tarefa` <i class="fas fa-arrow-right"></i>.
3. Selecione as caixas de seleção dos pedidos que deseja incluir na ordem de serviço. Para criar uma ordem de serviço com todos os pedidos, clique em  `Selecionar tudo`.
4. Clique em `Iniciar separação`.

Para pesquisar por um pedido, digite o ID do pedido na barra de busca. Para filtrar a lista de pedidos, clique em <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_14.png" alt="pickpack-filter" width="30" height="30"> e selecione uma ou mais das seguintes opções:

* Data de entrega
* [Categorias de produto](/pt/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg)
* [Meios de pagamento](/pt/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q)
* [Estratégia de envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
* Tipo de envio (retirada ou entrega)

## Separar itens

A etapa de separação consiste em selecionar fisicamente os itens correspondentes a uma [ordem de serviço](#ordens-de-servico) e direcioná-los até a área adequada para empacotamento na sua instalação.

### Ordens de serviço pendentes

A aba **Ordens de serviço pendentes** exibe a lista de ordens de serviço que ainda não tiveram sua separação finalizada, conforme a imagem a seguir:

![pickpack-pendente-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_4.png)

Nesta aba, é possível selecionar pelo ID de uma ordem de serviço, caso queira visualizar apenas os itens separados daquele pedido.

Caso haja ordens de serviço atribuídas ao separador, é possível acessá-las na tela de separação seguindo estes passos:

1. Clique no menu <i class="fas fa-grip-lines"></i>.
2. Clique em __Pendentes__. Será exibida uma lista com as [ordens de serviço](#ordens-de-servico) designadas ao separador que estão na etapa de separação.
3. Clique no botão <i class="fas fa-arrow-right"></i> na ordem de serviço do pedido que deseja separar.

Ao clicar em uma ordem de serviço, as seguintes informações são exibidas:

- __Itens:__ produtos que devem ser separados na ordem de serviço.
- __Atividade__: exibe detalhes de alterações realizadas na ordem de serviço, como produtos adicionados, quantidades atualizadas e substituições.
- __Informações:__ informações gerais da ordem de serviço e do pedido.
- __Resumo:__ produtos que já foram separados pelo separador.

![pickpack-em-separacao-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_5.png)

Ao clicar no menu <i class="fas fa-ellipsis-v"></i>, serão exibidas as seguintes ações:

- __Adicionar observação__: [adiciona uma observação](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#alteracoes-no-pedido) livre à ordem de serviço.
- __Adicionar itens ao pedido__: inicia o fluxo de [adicionar novos itens ao pedido](#adicionar-novos-produtos-a-um-pedido).
- __Marcar como pronto para empacotar__: utilizada para separar pedidos em massa ou recusar pedidos em massa.
- __Pausar separação__: pausa a contagem de tempo referente à separação da ordem de serviço.
- __Abrir leitor de código de barras__: utiliza a câmera do dispositivo para ler código de barras dos produtos.
- __Imprimir lista de separação__: disponibiliza um documento com a lista de itens da ordem de serviço para impressão.
- __Fechar menu__: fecha o menu e volta para a tela de separação.

Para separar um produto, siga estes passos:

1. Na tela de __Separação__, acesse a aba __Itens__.
2. Clique no produto que deseja separar ou deslize o produto para a direita.
   ![pickpack-item-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_6.png)
3. Confira a quantidade de itens.
4. Clique em `Confirmar separação` ou `Confirmar e separar todas as unidades`, quando há várias unidades do mesmo item.

Para itens que contém peso ou volume é preciso confirmar a medida e depois confirmar a seleção, como apresentado no exemplo abaixo:

![pickpack-item-peso-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_7.png)

1. Na tela de __Separação__, acesse a aba __Itens__.
2. Clique no item que deseja separar ou deslize o produto para a direita.
3. Ative a opção <i class="fas fa-toggle-on"></i> Sincronizar peso e preço para realizar o cálculo e preenchimento automático do valor total do preço do item por seu peso. Desligue a opção <i class="fas fa-toggle-off"></i> caso deseje adicionar manualmente o preço e o peso do item.
4. Clique em `Confirmar separação`.

Para separar todos os produtos da ordem de serviço de uma única vez, siga estes passos:

1. Clique no menu <i class="fas fa-ellipsis-v"></i>.
2. Clique na opção **Marcar como pronto para empacotar.** 
3. Clique em **Separar todos os itens disponíveis.**

Uma vez separados, os produtos são listados na aba __Resumo__.

## Alterar a quantidade de um produto

Durante o processo de separação, é possível atualizar manualmente a quantidade de um produto. Os separadores podem fazer isso após uma solicitação do cliente, por videochamada ou mensagem de texto, ou quando o estoque disponível na loja for diferente do que foi cadastrado inicialmente, por exemplo. 

A quantidade pode ser alterada de duas formas:

### Seleção do produto

1. Na tela de **Separação de pedidos**, clique e segure o item cuja quantidade deseja alterar.
2. Clique na opção **Adicionar mais unidades**.
3. Selecione a quantidade correta. A quantidade de itens que podem ser alterados pelo separador é definida na página de [Configurações](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao) no Admin VTEX.
4. Clique em **Confirmar alterações**.

### Seleção da ordem de serviço

1. Na tela de **Separação de pedidos**, clique na aba **Info**.
2. Clique no menu <i class="fas fa-ellipsis-v"></i> do pedido desejado.
3. Clique na opção **Adicionar mais unidades**.
4. Selecione a quantidade correta. A quantidade de itens que podem ser alterados pelo separador é definida na página de [Configurações](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao) no Admin VTEX.
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

Para recusar um produto da ordem de serviço, siga os passos abaixo:

1. Acesse a aba __Itens__.
2. Clique e deslize para a esquerda o produto que deseja recusar.
3. Descreva na caixa de texto a razão da recusa do item.
  ![pickpack-item-recusa-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_8.png)
4. Selecione a quantidade de itens que deseja recusar. A quantidade de itens que podem ser recusados pelo separador é definida na página de [Configurações](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao) no Admin VTEX.
5. Clique em `Descartar unidades` para a quantidade selecionada ou clique em `Confirmar e descartar todas as unidades` para recusar toda a quantidade de itens.

Para recusar todos os produtos da ordem de serviço de uma única vez, siga estes passos:

1. Clique no menu <i class="fas fa-ellipsis-v"></i>.
2. Clique na opção **Marcar como pronto para empacotar.** 
3. Clique em **Recusar todos os itens disponíveis** para finalizar a separação.

> ❗ Se todos os itens de um pedido forem recusados, o pedido será concluído automaticamente.

## Substituir itens

Os separadores também podem substituir um item por outro, dependendo das [configurações da loja](/pt/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#picking) e da disponibilidade do item. Esta funcionalidade ajuda a garantir que os clientes recebam os seus pedidos a tempo, mesmo que determinados itens não estejam disponíveis. 

> ⚠️ A opção de substituir itens pode não estar disponível. Em caso de dúvida, consulte a administração da loja.

Para substituir itens da ordem de serviço, siga os passos abaixo:

1. Na tela **Separação**, clique e mantenha pressionado o item cuja quantidade você deseja alterar.
2. Clique na opção **Substituir item**.
3. Escaneie o código de barras do produto ou procure-o manualmente usando a barra de busca.
4. Selecione a quantidade desejada em unidades ou informe o peso.
5. Clique em `Continuar`.
6. Selecione o motivo da substituição do item. Os motivos listados podem ser configurados na página [Configurações](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9).
7. Clique em `Confirmar e separar substituto`.

## Concluir separação

Uma vez que todos os itens da ordem de serviço foram separados, recusados ou substituídos, clique no botão Iniciar empacotamento na aba __Resumo__ para que a ordem de serviço passe para a etapa de [empacotamento](#empacotamento).

## Empacotamento

Na etapa de empacotamento, o separador seleciona os itens de cada pedido nos respectivos pacotes de envio. O aplicativo móvel do Pick and Pack permite organizar rapidamente todos os pacotes necessários para diversos pedidos.

![pickpack-empacotamento-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_9.png)

É possível acessar a página de Empacotamento ao [concluir a separação](#concluir-separacao) de uma ordem de serviço ou seguindo estes passos:

1. Clique no menu <i class="fas fa-grip-lines"></i> .
2. Clique em Para empacotar. Será exibida uma lista com as [ordens de serviço](#ordens-de-servico) designadas ao separador que estão na etapa de empacotamento.
3. Clique na ordem de serviço cujos produtos deseja separar. 

![pickpack-item-pendente-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_10.png)

Siga os passos abaixo para empacotar itens:

1. Em Empacotamento, clique no pedido que deseja empacotar. 
2. Clique no botão <i class="fas fa-plus"></i> para confirmar a quantidade do produto que deseja adicionar no pacote.
3. Clique em `Empacotar produtos`.
4. Selecione um pacote já registrado
5. Clique em `Empacotar produtos`.
6. Digite o peso total do pacote em quilos (kg).
7. Clique `Salvar`.

## Pacote personalizado

1. Em __Empacotamento__, clique no pedido que deseja empacotar.
2. Clique no botão `+` para confirmar a quantidade do produto que deseja adicionar no pacote.
3. Clique em `Empacotar produtos`.
4. Adicione um novo pacote clicando em __Pacote personalizado__.
5. Clique em `Empacotar produtos`.
6. Preencha os seguintes campos:
   - Comprimento em centímetros (cm).
   - Largura em centímetros (cm).
   - Altura em centímetros (cm).
   - Peso total do pacote em quilos (kg).
7. Clique em `Confirmar`.

## Embalagem própria do produto

1. Em __Empacotamento__, clique no pedido que deseja empacotar.
2. Clique no botão `+` para confirmar a quantidade do produto que deseja adicionar ao pacote.
3. Clique em `Empacotar produtos`.
4. Adicione um novo pacote clicando em __Sem necessidade de embalagem__.
5. Clique em `Empacotar produtos`.
6. Clique em `Confirmar`.

É necessário repetir este procedimento quantas vezes for necessário para empacotar todos os itens referente a uma ordem de serviço.
Os itens que já foram empacotados estarão disponíveis na aba Itens empacotados. 

Os itens que já foram empacotados estão disponíveis na aba **Itens empacotados**.

![pickpack-itemsempacotados-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-mobile_11.png)

É possível realizar as seguintes ações relacionadas a cada item empacotado, clicando no botão <i class="fas fa-ellipsis-v"></i>:

- __Ver detalhes__: exibe uma janela com os detalhes do pacote.
- __Imprimir etiquetas__: gera uma etiqueta que será anexada ao pacote.
- __Definir localização__: registra a localização do pacote em uma instalação por meio do código BIN, que identifica um local específico de armazenamento em um estoque.
- __Remover pacote__: remove o pacote da lista de __Itens empacotados__ e o item precisará ser empacotado novamente.

Para excluir um item do pacote, clique no botão `X` correspondente.

Para finalizar o empacotamento, clique em `Confirmar empacotamento`.

#### Saiba mais

* [VTEX Pick and Pack](/pt/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU)
* [VTEX Pick and Pack: FAQ](/pt/tutorial/vtex-pick-and-pack-faq--2Rvf9vTS35vmOhkE2i0xcs)
* [VTEX Pick and Pack: Configurações](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9)

