---
title: 'Adicionar ou editar budgets'
createdAt: '2025-02-27T10:00:00.000Z'
updatedAt: '2025-02-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-budgets
locale: pt
---

Budgets permitem definir e acompanhar limites de gastos de forma centralizada. A funcionalidade ajuda a controlar o uso dos valores ao longo do tempo e a organizar o orçamento por diferentes contextos do negócio. 

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam B2B Buyer Portal, atualmente disponível para contas selecionadas.

Com o gerenciamento de budgets, você pode criar orçamentos, configurar notificações de consumo, definir alocações e controlar quando e como esses valores ficam disponíveis no checkout.

Nesta página, é possível realizar as seguintes ações:

* [Abrir a barra lateral da conta e da Organization Unit](#abrir-a-barra-lateral-da-conta-e-da-organization-unit)   
* [Criar um budget](#criar-um-budget)  
* [Configurar notificações de consumo](#configurar-notificações-de-consumo)  
* [Configurar alocações de budget](#configurar-alocações-de-budget)  
* [Gerenciar um budget](#gerenciar-um-budget)  
* [Remover alocações do budget](#remover-alocações-do-budget)

## Abrir a barra lateral da conta e da Organization Unit

A barra lateral centraliza informações da conta do usuário e da Organization Unit associada. Para acessá-la, siga as etapas abaixo:

1. No canto superior direito, clique em Company.  
2. A barra lateral é exibida com as informações da conta e da Organization Unit.  
3. Clique em **Budgets**.

## Criar um budget

Para criar um novo budget para a Organization Unit, você deve acessar a listagem de budgets e preencher as seguintes informações necessárias. 

1. Na página de **Budgets**, clique no botão **`+`** no canto superior direito.
2. No menu lateral Add new budget, preencha os seguintes campos:
   * **Name:** nome do budget.
   * **Amount:** valor total do budget.
   * **Start date:** data de início de vigência.
   * **End date:** data de término de vigência.
3. Para configurar a renovação automática do budget, ative o botão Renew this budget amount and period upon expiration.
4. Para configurar notificações de consumo, ative o botão de Notifications.
5. Clique em **Continue para avançar para a próxima etapa do fluxo**.
6. Na etapa **Add budget allocations**, escolha uma das opções abaixo:
   * Para adicionar alocações imediatamente, selecione um tipo de alocação e clique em Add.
   * Para pular a configuração de alocações neste momento, clique em Skip.

Após concluir o fluxo, o novo budget passa a aparecer na listagem de budgets.

> ⚠️ Se você clicar em Skip na etapa de alocações, o budget é criado, mas não fica disponível para uso até que pelo menos uma alocação seja adicionada.

## Configurar notificações de consumo

Para configurar notificações que alertam usuários quando o consumo do budget atinge limites definidos, siga as etapas abaixo:

1. No menu lateral Add new budget, ative o botão Notifications para habilitar o envio de notificações de consumo.
2. Na seção Notifications, ajuste o limite de consumo usando os botões `+` e `–`.
3. Na mesma seção, verifique os valores exibidos nas colunas Consumed e Remaining, que são atualizados automaticamente com base no limite configurado.
4. Para adicionar um novo limite de consumo, clique em Add threshold.
    * É permitido adicionar até cinco limites por budget.
5. Clique em Add users e selecione os usuários que receberão as notificações.
6. Para remover um limite de consumo ou um usuário, clique no ícone `–` correspondente.
7. Clique em Continue para Salvar.

> ⚠️ Para receber notificações de consumo, é necessário adicionar pelo menos um usuário.

## Configurar alocações de budget

As alocações definem em quais contextos o budget pode ser utilizado no checkout. Para adicionar alocações a um budget, siga as etapas abaixo:

1. Na página Add budget allocations, abra a lista suspensa de tipo de alocação.
2. Selecione o tipo de alocação que define como o budget será aplicado:
    * **Users**: aplica o budget a usuários específicos.
    * **Shipping Addresses**: aplica o budget a endereços de entrega específicos.
    * **PO Numbers**: aplica o budget a números de pedido de compra.
    * **Cost Centers**: aplica o budget a centros de custo.
    * **Releases**: aplica o budget a liberações específicas.
3. Clique em `Add` para confirmar a associação e avançar para a configuração.
4. Para concluir a criação do budget sem configurar alocações, clique em `Skip`.

## Gerenciar um budget

Após criar um budget, é possível visualizar seus detalhes e realizar ações de gerenciamento. Para acessar e gerenciar um budget, siga as etapas abaixo:

1. Na página de **budgets**, localize o budget desejado na listagem.
2. Clique no nome do budget para acessar a página com os detalhes do budget.
3. Na página de detalhes do budget, visualize as seguintes seções:
    * **Remaining balance**: exibe o saldo disponível do budget.
    * **Settings**: exibe as configurações gerais do budget.
    * **Notifications**: exibe as regras de notificação configuradas.
    * **Allocations**: exibe as alocações associadas ao budget.
4. Clique em Edit na seção **Settings** para editar as configurações gerais.
5. Clique em Edit na seção **Notifications** para ajustar notificações.
6. Clique em Add na seção Allocations para adicionar novas alocações.
7. Clique no ícone de lixeira para remover uma alocação existente.

## Remover alocações do budget

Remover alocações impede que um budget seja aplicado a determinados contextos no checkout. Para remover alocações associadas a um budget, siga as etapas abaixo:

1. Na página Budgets, localize o budget desejado na listagem.
2. Clique no Name do budget para acessar o Budget details.
3. Na seção Allocations, localize a alocação que deseja remover.
4. Clique no ícone de lixeira ao final da linha da alocação.
5. Confirme a remoção, se solicitado.

Após a remoção, a alocação deixa de estar vinculada ao budget.

> ⚠️ Se nenhuma alocação permanecer associada, o budget deixa de estar disponível no checkout até que uma nova alocação seja adicionada.
