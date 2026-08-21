---
title: 'VTEX Pick and Pack: Ordens de serviço'
createdAt: 2024-01-03T18:38:05.781Z
updatedAt: 2026-08-21T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-worksheets
locale: pt
hidden: false
---
**Ordens de serviço** é a página do Admin VTEX que permite acompanhar em tempo real as ordens de serviço usadas pelos separadores para agrupar e separar os itens dos pedidos. Uma ordem de serviço pode reunir um único pedido ou vários pedidos, que são processados pelo fluxo do Pick and Pack simultaneamente. Para abrir a página, no Admin VTEX, acesse **Envio > Pick and Pack > Ordens de serviço**.

![Página Ordens de serviço](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_1.png)

Este artigo está dividido nas seguintes seções:

* [Acompanhar ordens de serviço](#acompanhar-ordens-de-servico)
* [Selecionar instalações](#selecionar-instalacoes)
* [Buscar ordem de serviço](#buscar-ordem-de-servico)
* [Filtrar ordem de serviço](#filtrar-ordem-de-servico)
* [Criar ordem de serviço](#criar-ordem-de-servico)
* [Consultar detalhes da ordem de serviço](#consultar-detalhes-da-ordem-de-servico)
* [Gerenciar ordem de serviço](#gerenciar-ordem-de-servico)
* [Acessar ferramentas de acompanhamento](#acessar-ferramentas-de-acompanhamento)

## Acompanhar ordens de serviço

As ordens de serviço são organizadas em colunas conforme a etapa em que se encontram. O cabeçalho de cada coluna indica o número de ordens na etapa correspondente:

* **Fixado:** ordens de serviço fixadas na página para acompanhamento prioritário.
* **Pendentes:** ordens de serviço que aguardam ou estão em andamento na separação dos itens.
* **Para empacotar:** ordens de serviço com a separação concluída, que aguardam o empacotamento.
* **Concluído:** ordens de serviço com o manuseio finalizado.
* **Cancelado:** ordens de serviço que foram canceladas antes de serem concluídas.

Cada ordem de serviço é apresentada em um cartão com as seguintes informações:

| Informação                               | Descrição                                                                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| **ID da ordem de serviço**          | Identificador da ordem de serviço na plataforma.                                                                           |
| **Status**                           | Etapa atual da ordem de serviço, como**Pendente**, **Pronto para empacotamento**, ou **Empacotados**.    |
| **Pedidos**                          | IDs dos pedidos agrupados na ordem de serviço.                                                                             |
| **Data de início**                  | Data e hora em que a separação dos itens começou.                                                                        |
| **Prazo**                            | Data e hora limite para concluir o manuseio da ordem de serviço.                                                           |
| **Separador**                        | Separador responsável pela ordem de serviço.                                                                              |
| **Instalação**                     | [Instalação](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137) em que a ordem de serviço é processada. |
| **Separado** ou **Empacotado** | Progresso da etapa atual, em unidades processadas do total previsto.                                                        |

![Card da ordem de serviço](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_2.png)

Para consultar os dados completos de uma ordem de serviço, clique no cartão correspondente. Para mais informações, consulte [Consultar detalhes da ordem de serviço](#consultar-detalhes-da-ordem-de-servico).

## Selecionar instalações

Por padrão, a página exibe as ordens de serviço de todas as instalações da sua operação. Para restringir a visualização, siga os passos abaixo:

1. Clique em `Alterar instalações selecionadas`.
2. Selecione as instalações desejadas. Você pode usar o campo **Buscar** para encontrar uma instalação pelo nome.

## Buscar ordem de serviço

Para localizar uma ordem de serviço específica, digite o ID da ordem de serviço ou o ID de um dos pedidos que a compõem no campo **Buscar**.

## Filtrar ordem de serviço

Você pode exibir apenas as ordens de serviço que contêm itens de determinadas categorias do catálogo. Para filtrar essa visualização, siga os passos abaixo:

1. Clique em `Categorias`.
2. Selecione as categorias desejadas. Você pode usar o campo **Buscar** para encontrar uma categoria pelo nome.
3. Clique em `Aplicar`.

Para remover o filtro e voltar a exibir todas as ordens de serviço, clique em `Limpar`.

## Criar ordem de serviço

Ao criar uma ordem de serviço, você define quais pedidos serão separados em conjunto e quem fará a separação. Não há limite de pedidos por ordem de serviço. Para criar uma ordem de serviço, siga os passos abaixo:

1. Na barra lateral, clique em **Pedidos**.
2. Na aba **Pedidos**, selecione os pedidos que deseja agrupar. Cada pedido apresenta a sequência, o prazo, o tipo de entrega, a instalação e a quantidade de itens e unidades.
3. Em **Atribuir pedidos à ordem de serviço**, confira o resumo dos pedidos selecionados, com a quantidade de itens, a quantidade de unidades e o tempo estimado de manuseio.

> ℹ️ Os passos 4 e 5 são opcionais.

4. Para definir o responsável pela separação, clique no ícone de edição <i class="fas fa-pen" aria-hidden="true"></i> do campo **Separador** e selecione o separador desejado. Por padrão, a atribuição é **Automático**.
5. Ative a opção **Fixar novas ordens de serviço** para exibir a ordem de serviço criada na coluna **Fixado**.
6. Clique em `Criar`.

![Ação de criar a ordem de serviço](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_3.png)

> ℹ️ A quantidade de pedidos por ordem de serviço depende das opções **Pedido único** e **Pedido múltiplo**, definidas na página [Configurações](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes).

## Consultar detalhes da ordem de serviço

Para abrir o painel de detalhes, clique na ordem de serviço desejada na página. O cabeçalho do painel exibe o ID e o status da ordem de serviço, e o corpo apresenta as seguintes informações:

| Informação                  | Descrição                                                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Instalação**        | [Instalação](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137) em que a ordem de serviço é processada. |
| **Data de criação**   | Data e hora em que a ordem de serviço foi criada.                                                                          |
| **Data de início**     | Data e hora em que a separação dos itens começou.                                                                        |
| **Pedidos**             | Quantidade de pedidos agrupados na ordem de serviço.                                                                       |
| **Itens**               | Quantidade de itens e de unidades a manusear.                                                                               |
| **Separador**           | Separador responsável pela ordem de serviço.                                                                              |
| **Prazo**               | Data e hora limite para concluir o manuseio da ordem de serviço.                                                           |
| **Empacotado/Separado** | Progresso da empacotamento ou separação, em unidades do total previsto.                                                   |

![Detalhes da ordem de serviço](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_4.png)

### Adicionar tags

As tags identificam ordens de serviço com características em comum, como o tipo de operação a que se referem. Para adicionar uma tag, clique em `+` no painel de detalhes e selecione a tag desejada. Você pode usar o campo **Buscar tags** para encontrar uma tag pelo nome.

> ℹ️ As tags disponíveis são cadastradas no campo **Tags de ordem de serviço**, na página [Configurações](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes).

### Pedidos

A aba **Pedidos** lista os pedidos que compõem a ordem de serviço. Para localizar um pedido, digite o ID no campo **Buscar**. Os itens de cada pedido apresentam as seguintes informações:

* **EAN:** código de barras do item.
* **ID de ref.:** código de referência do item no catálogo.
* **SKU:** identificador do item na plataforma.
* **Categorias:** categorias do catálogo às quais o item está associado.

![Aba no modal de detalhes da mordem de serviço](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_5.png)

### Aprovações

A aba **Aprovações** apresenta as solicitações dos separadores que dependem da autorização de um administrador para que a separação dos itens continue.

> ℹ️ A aba **Aprovações** só é exibida quando a opção **Ativar fluxo de aprovações** está habilitada na página [Configurações](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#separacao).

## Gerenciar ordem de serviço

No painel de detalhes, clique no ícone de menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> para acessar as seguintes ações:

* `Imprimir`: gera a lista de separação da ordem de serviço.
* `Observações`: registra e consulta notas sobre a ordem de serviço.
* `Pausar separação`: interrompe a separação dos itens.
* `Selecione um separador`: define o separador responsável pela ordem de serviço.

![Menu de ações do painel de detalhes](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_6.png)

> ℹ️ O conteúdo da lista de separação é definido na página [Configurações](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes), na opção **Habilitar lista de separação**.

### Adicionar observação

As observações registram informações sobre o manuseio da ordem de serviço, como uma orientação para o separador. Para adicionar uma observação, siga estes passos:

1. Clique em `Observações`.
2. Digite a observação no campo de texto.
3. Clique em `Adicionar observação`.

### Pausar separação

Ao pausar a separação, você impede que o separador continue separando os itens da ordem de serviço. Para pausar a separação, siga estes passos:

1. Clique em `Pausar separação`.
2. No campo **Motivo**, selecione o motivo da pausa.
3. No campo **Motivo da pausa**, descreva o motivo com mais detalhes.
4. Clique em `Confirmar`.

### Selecionar separador

Você pode atribuir a ordem de serviço a um separador ou alterar o separador responsável. Para selecionar um separador, siga estes passos:

1. Clique em `Selecione um separador`.
2. Localize o separador desejado. A lista apresenta o nome, o nome de usuário, o último acesso e a quantidade de tarefas atribuídas a cada separador. Você pode usar o campo **Buscar** para encontrar um separador pelo nome.
3. Clique no separador desejado.

## Acessar ferramentas de acompanhamento

A barra lateral da página reúne ferramentas para acompanhar a operação de fulfillment:

* **Separadores:** lista dos separadores da operação, com o último acesso e a quantidade de tarefas atribuídas a cada um.
* **Pedidos:** pedidos disponíveis para atribuição a novas ordens de serviço e pedidos devolvidos.
* **Inbox:** conversas entre o lojista e os separadores sobre cada ordem de serviço.
* **Alertas de tempo:** ordens de serviço que ultrapassaram o tempo previsto para a etapa em que se encontram.
* **Auditoria de itens:** histórico das alterações feitas nos itens durante o manuseio dos pedidos.
* **Transferências:** transferências de itens entre instalações.

### Inbox

O **Inbox** organiza as conversas com os separadores por ordem de serviço. A etiqueta **Needs Support** identifica as ordens de serviço em que o separador solicitou ajuda.

Para responder a um separador, clique na conversa desejada e escreva a mensagem. Você também pode enviar arquivos, localizações e mensagens de áudio.

![Menu de ações do painel de detalhes](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_7.png)

> ℹ️ O **Inbox** depende da opção **Permitir chat de suporte**, habilitada na página [Configurações](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes).
