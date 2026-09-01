---
title: 'Adicionar ou editar campos contábeis'
createdAt: '2025-02-09T10:00:00.000Z'
updatedAt: '2026-08-28T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-accounting-fields
locale: pt
---

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), atualmente disponível para contas selecionadas.

A funcionalidade Campos contábeis permite que você padronize a coleta de informações durante o processo de compra ao adicionar campos com base nas regras do seu negócio.

Essa funcionalidade garante que os compradores insiram corretamente informações como o número do pedido de compra (PO), o centro de custo e outros dados internos no checkout, melhorando o controle operacional e a conformidade com os processos da empresa.

Este artigo aborda os seguintes tópicos:

- [Adicionar campo contábil](#adicionar-campo-contabil)
- [Editar campo contábil](#editar-campo-contabil)
- [Adicionar valor a um campo contábil](#adicionar-valor-a-um-campo-contabil)
- [Editar valor em um campo contábil](#editar-valor-em-um-campo-contabil)
- [Excluir campo contábil](#excluir-campo-contabil)

## Adicionar campo contábil

Para adicionar um campo contábil, siga os passos abaixo:

1. Acesse a [tela inicial da Conta da Organização](https://help.vtex.com/pt/docs/tutorials/conta-da-organizacao#acessando-a-conta-da-organizacao).
2. Clique no ícone `+` ao lado de **Campos contábeis**.
3. No painel exibido, preencha as seguintes informações:
    - **Rótulo do campo:** Insira o nome que identifica o campo contábil.
    - **Nível de entrada:** Selecione **Nível do pedido** para aplicar o campo ao pedido inteiro ou **Nível do item** para aplicá-lo a cada item no carrinho.
    - **Requisito de preenchimento:** Selecione se o preenchimento do campo é **Obrigatório** ou **Opcional**.
    - **Habilitar campo de texto livre para que os compradores possam inserir um valor manualmente no checkout:** Marque essa caixa de seleção para permitir que os compradores digitem um valor próprio no checkout.
4. Clique em `Criar`.

Feito isso, você verá uma mensagem confirmando a criação do campo contábil. As alterações podem levar até 10 minutos para serem aplicadas.

Os campos contábeis criados na interface funcionam como listas de valores: você adiciona e gerencia os valores disponíveis para os compradores, conforme descrito em [Adicionar valor a um campo contábil](#adicionar-valor-a-um-campo-contabil).

> ℹ️ Você também pode criar campos contábeis de forma programática usando a [Custom Fields API](https://developers.vtex.com/docs/api-reference/custom-fields-api). Para mais informações, consulte o [Guia de integração de campos personalizados](https://developers.vtex.com/docs/guides/custom-fields-integration).

## Editar campo contábil

Para editar as configurações de um campo contábil, siga os passos abaixo:

1. Acesse a [tela inicial da Conta da Organização](https://help.vtex.com/pt/docs/tutorials/conta-da-organizacao#acessando-a-conta-da-organizacao).
2. Clique no nome do campo contábil que deseja editar.
3. Na tela do campo contábil, clique no ícone de configurações <i class="fas fa-cog" aria-hidden="true"></i> no topo da página.
4. Em **Tipo de lista**, selecione **Lista personalizada** para gerenciar uma lista de valores exclusiva da unidade organizacional ou **Lista compartilhada** para usar a lista de valores definida pelo [contrato](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt), que é atualizada automaticamente.
5. Em **Rótulo do campo**, edite o nome que identifica o campo contábil, se necessário.
6. Em **Nível de entrada**, selecione se o campo contábil se aplica no nível do pedido ou do item.
7. Em **Requisito de preenchimento**, selecione se o preenchimento do campo é obrigatório ou opcional.
8. Marque a caixa de seleção **Habilitar campo de texto livre para que os compradores possam inserir um valor manualmente no checkout** para permitir que os compradores digitem um valor próprio no checkout, ou desmarque a caixa para permitir apenas valores da lista.
9. Clique em `Salvar`.

## Adicionar valor a um campo contábil

Para adicionar um valor a um campo contábil, siga os passos abaixo:

1. Acesse a [tela inicial da Conta da Organização](https://help.vtex.com/pt/docs/tutorials/conta-da-organizacao#acessando-a-conta-da-organizacao).
2. Clique no nome do campo contábil ao qual deseja adicionar um valor.
3. Na tela do campo contábil, clique no ícone `+` no topo da página.
4. No painel exibido, preencha o campo **Nome** com o valor que deseja atribuir ao campo contábil, como um número de pedido de compra ou um centro de custo. Se quiser, preencha também o campo **Descrição (opcional)**.
5. Clique em `Adicionar`.

Feito isso, você verá uma mensagem confirmando a criação do valor no campo contábil.

## Editar valor em um campo contábil

Para editar um valor em um campo contábil, siga os passos abaixo:

1. Acesse a [tela inicial da Conta da Organização](https://help.vtex.com/pt/docs/tutorials/conta-da-organizacao#acessando-a-conta-da-organizacao).
2. Clique no nome do campo contábil que deseja editar.
3. Na tela do campo contábil, clique no ícone de opções <i class="fas fa-ellipsis-v" aria-hidden="true"></i> ao lado do valor que deseja editar.
4. Selecione uma das seguintes opções, de acordo com a ação desejada:
    - **Rename:** Altera o nome do valor do campo.
    - **Set as default:** Define o valor como padrão, que a plataforma preenche automaticamente em todos os pedidos em que o campo se aplica.
    - **Remove from unit:** Remove o valor da unidade organizacional à qual está atribuído. Essa ação não exclui o valor do sistema.
    - **Delete:** Exclui permanentemente o valor do sistema.

> ❗ Use a opção **Delete** com cuidado. Excluir um valor remove permanentemente o valor e todos os dados associados a ele em múltiplas unidades organizacionais, o que pode comprometer o acesso a informações históricas e de auditoria. Após a confirmação, você não pode desfazer essa ação.

## Excluir campo contábil

Ao excluir um campo contábil, você remove o campo de todas as unidades organizacionais e exclui permanentemente todos os seus valores e dados relacionados. A plataforma mantém apenas o histórico de uso do campo, para fins de auditoria.

> ❗ Você não pode desfazer a exclusão de um campo contábil. Para excluir apenas um valor específico de um campo, use a opção **Delete**, descrita em [Editar valor em um campo contábil](#editar-valor-em-um-campo-contabil).

Para excluir um campo contábil, siga os passos abaixo:

1. Acesse a [tela inicial da Conta da Organização](https://help.vtex.com/pt/docs/tutorials/conta-da-organizacao#acessando-a-conta-da-organizacao).
2. Clique no nome do campo contábil que deseja excluir.
3. Na tela do campo contábil, clique no ícone de exclusão <i class="fas fa-trash-alt" aria-hidden="true"></i> no topo da página.
4. No painel **Excluir campo contábil**, digite o rótulo do campo para confirmar a exclusão.
5. Clique em `Excluir`.
