---
title: 'Adicionar ou editar campos contábeis'
createdAt: '2025-03-27T10:00:00.000Z'
updatedAt: '2025-03-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-accounting-fields
locale: pt
---

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam B2B Buyer Portal, atualmente disponível para contas selecionadas.

A funcionalidade Campos contábeis permite padronizar a coleta de informações durante o processo de compra, por meio da adição de campos contábeis de acordo com as regras do seu negócio.

Esse recurso possibilita garantir que dados como número do pedido (PO number), centro de custo ou outras informações internas sejam preenchidos corretamente no checkout, assegurando maior controle operacional e conformidade com os processos da empresa.

Este artigo aborda:

- [Editar campo contábil](#editar-campo-contabil)
- [Adicionar valor a um campo contábil](#adicionar-valor-a-um-campo-contabil)
- [Editar valor em um campo contábil](#editar-valor-em-um-campo-contabil)

> ℹ️ Atualmente, a criação de campos contábeis pode ser realizada via [API de campos customizáveis](https://developers.vtex.com/docs/api-reference/custom-fields-api). Para saber mais, consulte o [Guia de integração de campos customizáveis](https://developers.vtex.com/docs/guides/custom-fields-integration).

## Editar campo contábil

![Buyer Portal B2B organization unit information page](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buyer-portal-b2b-organization-unit-information-page.png)

1. Acesse a [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account).
2. Clique sobre o nome do campo contábil desejado.
3. Na tela do campo contábil, clique no ícone <i class="fas fa-cog"></i> no topo da tela para editar informações do campo contábil.
4. Em **List type**, selecione se os valores do campo contábil devem ser utilizados unicamente na organization unit (`Custom List`) ou se devem ser compartilhados por outras organization units do contrato (`Synchronized List`).
5. Em **Input level**, selecione se o campo contábil deve ser aplicado a nível de pedido ou de item.
6. Em **Input requirement**, selecione se o campo deve ser opcional ou obrigatório.
7. Em **Default {nome do campo}**, caso necessário, insira o valor padrão default a ser pré-preenchido em todos os pedidos em que o campo for aplicável.
8. Clique em `Save`.


## Adicionar valor a um campo contábil

1. Acesse a [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account).
2. Clique sobre o nome do campo contábil desejado.
3. Na tela do campo contábil, clique no ícone `+` no topo da tela.
4. No modal exibido, informe o valor a ser atribuído no campo contábil, como número de pedido ou do centro de custo.
5. Clique em `Add`.

Feito isso, você verá a mensagem de confirmação que o valor foi criado com sucesso no campo contábil.

## Editar valor em um campo contábil

1. Acesse a [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account).
2. Clique sobre o nome do campo contábil desejado.
3. Na tela do campo contábil, clique no ícone <i class="fas fa-ellipsis-v"></i> ao lado do valor que deseja editar.
4. Selecione uma das opções abaixo, de acordo com a ação desejada:
- **Rename:** altera o nome do valor do campo.
- **Set as default:** define o valor como padrão, para ser pré-preenchido em todos os pedidos em que o campo for aplicável.
- **Remove from unit:** remove o valor da organization unit à qual está atribuído. Esta ação não exclui o valor do sistema.
- **Delete:** exclui permanentemente o valor do sistema.

> ⚠️ Use a opção **Delete** com cuidado. Ao excluir um valor, você remove definitivamente o valor e todos os dados associados a ele em múltiplas unidades organizacionais, o que pode comprometer o acesso a informações históricas e de auditoria. Após a confirmação, esta ação não pode ser desfeita.
