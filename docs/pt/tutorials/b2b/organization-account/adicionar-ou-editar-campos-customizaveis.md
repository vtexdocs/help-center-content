---
title: 'Adicionar ou editar campos customizáveis no checkout'
createdAt: '2025-03-27T10:00:00.000Z'
updatedAt: '2025-03-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: add-or-edit-custom-checkout-fields
locale: pt
---

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam B2B Buyer Portal, atualmente disponível para contas selecionadas.

A funcionalidade [Campos customizáveis do checkout](https://help.vtex.com/pt/docs/tutorials/campos-customizaveis-no-checkout) permite padronizar a coleta de informações durante o processo de compra, por meio da adição de campos personalizados de acordo com as regras do seu negócio.

Esse recurso possibilita garantir que dados como número do pedido (PO number), centro de custo ou outras informações internas sejam preenchidos corretamente no checkout, assegurando maior controle operacional e conformidade com os processos da empresa.

Este artigo aborda:

- [Editar campo customizável](#editar-campo-customizavel)
- [Adicionar valor a um campo customizável](#adicionar-valor-a-um-campo-customizavel)
- [Editar valor em um campo customizável](#editar-valor-em-um-campo-customizavel)

> ℹ️ Atualmente, a criação de campos customizáveis pode ser realizada via [API de campos customizáveis](https://developers.vtex.com/docs/api-reference/custom-fields-api). Para saber mais, consulte o [Guia de integração de campos customizáveis](https://developers.vtex.com/docs/guides/custom-fields-integration).

## Editar campo customizável

![Buyer Portal B2B organization unit information page](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/buyer-portal-b2b-organization-unit-information-page.png)

1. Na tela inicial do Organization Account, clique no ícone `Company`.
2. No modal da organization unit, clique no botão **Manage**.
3. Na tela de informações da organization unit, clique no botão **Manage contract settings**.
4. Na seção **Accounting fields**, clique sobre o nome do campo customizável desejado.
5. Na tela do campo customizável, clique no ícone <i class="fas fa-cog"></i> no topo da tela para editar informações do campo customizável.
6. Em **List type**, selecione se os valores do campo customizável deve ser utilizados unicamente na organization unit (`Custom List`) ou se deve ser compartilhado por outras organization units do contrato (`Synchronized List`).
7. Em **Input level**, selecione se o campo customizável deve ser aplicado a nível de pedido ou de item.
8. Em **Input requirement**, selecione se o campo deve ser opcional ou obrigatório.
9. Em **Default {nome do campo}**, caso necessário, insira o valor padrão default a ser pré-preenchido em todos os pedidos em que o campo for aplicável.
10. Clique em `Save` (adicionar).


## Adicionar valor a um campo customizável

1. Na tela inicial do Organization Account, clique no ícone `Company`.
2. No modal da organization unit, clique no botão **Manage**.
3. Na tela de informações da organization unit, clique no botão **Manage contract settings**.
4. Na seção **Accounting fields**, clique sobre o nome do campo customizável desejado.
5. Na tela do campo customizável, clique no ícone `+` no topo da tela.
6. No modal exibido, informe o valor a ser atribuído no campo customizável, como número de pedido ou do centro de custo.
7. Clique em `Add` (adicionar).

Feito isso, você verá a mensagem de confirmação que o valor foi criado com sucesso no campo customizável.

## Editar valor em um campo customizável

1. Na tela inicial do Organization Account, clique no ícone `Company`.
2. No modal da organization unit, clique no botão **Manage**.
3. Na tela de informações da organization unit,, clique no botão **Manage contract settings**.
4. Na seção **Accounting fields**, clique sobre o nome do campo customizável desejado..
5. Na tela do campo customizável, clique no ícone <i class="fas fa-ellipsis-v"></i> ao lado do valor que deseja editar.
6. Selecione uma das opções abaixo, de acordo com a ação desejada:
- **Rename:** altera o nome do valor do campo.
- **Set as default:** define o valor como padrão, para ser pré-preenchido em todos os pedidos em que o campo for aplicável.
- **Remove from unit:** remove o valor da organization unit à qual está atribuído. Esta ação não exclui o valor do sistema.
- **Delete:** exclui permanentemente o valor do sistema.

> ⚠️ Use a opção **Delete** com cuidado. Ao excluir um valor, você remove definitivamente o valor e todos os dados associados a ele em múltiplas unidades organizacionais, o que pode comprometer o acesso a informações históricas e de auditoria. Após a confirmação, esta ação não pode ser desfeita.