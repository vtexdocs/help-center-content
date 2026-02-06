---
title: 'Adicionar ou editar Buying Policies'
createdAt: '2026-02-06T10:00:00.000Z'
updatedAt: '2026-02-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-buying-policies
locale: pt
---

> ⚠️ A funcionalidade Buying Policies está disponível apenas para o B2B Buyer Portal.

No Buyer Portal, existe a funcionalidade [Buying Policies](https://help.vtex.com/pt/docs/tutorials/buying-policies), que permite aos usuários realizarem configurações dinâmicas para a autorização e aprovação de pedidos. Os mecanismos e regras que podem ser configurados contribuem para uma maior governança da organização e promovem a conformidade com as políticas de venda vigentes.

Este artigo orienta os usuários no gerenciamento das políticas da organização para a autorização e aprovação de pedidos, e inclui as seguintes seções:

* Adicionar buying policy
* Ver página de detalhes
* Editar buying policy
* Remover buying policy

> ⚠️ Para configurar buying policies, o perfil de acesso de [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions) do usuário deve ter o recurso `ManageBuyingPolicies`. Para autorizar pedidos, é necessário o `ApproveOrders`.

## Adicionar buying policy

1. Na Organization Unit, na seção **Finance and Compliance**, clique em `Buying Policies` para acessar a tela **Buying Policies**.
2. Clique no ícone `+` no topo da tela para adicionar uma nova buying policy.
3. No modal **Add new buying policy**, preencha os campos, que são todos obrigatórios:
    * Em **Basic information**, defina o nome e a descrição da buying policy que vai aparecer no checkout para os compradores:
        * **Name:** nome da buying policy.
        * **Description:** explicação breve do funcionamento da buying policy, limitado a X carecteres. Ao criar uma boa descrição, os usuários que interagirem com essa política de compra tem amiores chances de entender o motivos pelo qual um pedido foi negado ou precisou de aprovação manual.
    * Em **Criteria**, defina os critérios que resultam na aplicação da buying policy. Para isso, preencha o campo com uma expressão no formato [JSONata](https://jsonata.org/), tal como `score ≥ 10`. É possível selecionar pela interface o critério desejado e apenas editar para os valores desejados (destacados em roxo):
        * **Set spending limit criteria (definir critério com base no preço):** opções de aprovação ou negação de pedidos com base no preço do pedido. Por exemplo, se o pedido é maior, menor ou igual a determinado valor.
        * **Set order field criteria (definir critério a partir de aspectos do pedido):** opções de aprovação ou negação de pedidos a partir de condições e características do pedido. Por exemplo, se ele tem itens restritos, ou se possue um centro de custo (cost center) específico.

    > ℹ️ Os valores usados nos critérios de autorização de pedidos são centesimais e a moeda é a mesma configurada para a organização.

    * Em **Action**, selecione qual ação será aplicada em pedidos que atenderam aos critérios:
        * **Deny order:** o pedido será negado.
        * **Bypass all buying policies:** o pedido será automaticamente aprovado, independentemente dos critérios definidos.
        * **Sequential workflow:** o pedido será aprovado ou negado manualmente por um usuário autorizado. Para esta opção, é necessário informar o nome de uma unit organization para que usuário dessa unidade revise o pedido.

        > ⚠️ É possível definir uma hieraquia de até cinco organizações, sendo o maior nível é o último a revisar o pedido. Qualquer nível pode negar o pedido, mas a autorização dele depende da aprovação de todos.

4. Para salvar as configurações, clique em **Add** (adicionar).

Feito isso, você verá a mensagem de confirmação _“Buying policy created successfully” (Buying policy criada com sucesso)_.

## Ver página de detalhes

Para visualizar os detalhes de uma política, na tela de **Buying Policies**, clique no nome da buying policy, ou então, na linha correspondente à opção desejada, clique no ícone menu > `Open` (abrir). Você verá uma imagem como a seguinte:

![buying_policies_image_1](link)

## Editar buying policy

1. Na Organization Unit, na seção **Finance and Compliance**, clique em `Buying Policies` para acessar a tela **Buying Policies**.
2. Na linha correspondente a buying policy desejada, clique no ícone menu > `Edit` (editar). Ou então, na [página de detalhes](#ver-pagina-de-detalhes), clique no botão `Edit` (editar).
3. Faça as alterações desejadas.
4. Para salvar as alterações, clique em `Save` (salvar).

## Remover buying policy

> ❗ A remoção de uma buying policy é permanente e não pode ser desfeita. As configurações são excluídas, mas seu histórico de aplicação é armazenado.

1. Na Organization Unit, na seção **Finance and Compliance**, clique em `Buying Policies` para acessar a tela **Buying Policies**.
2. Na linha correspondente a buying policy desejada, clique no ícone menu > `Delete` (deletar). Ou então, na [página de detalhes](#ver-pagina-de-detalhes), clique no ícone menu > `Delete`.
3. No modal aberto, preencha o nome da buying policy a ser removida.
4. Para confirmar a exclusão, clique em `Delete`.

Feito isso, você verá a mensagem de confirmação _“Buying policy removed successfully”_ e, ao retornar à tela principal, a opção haverá sumido.

> ℹ️ Caso queira gerenciar regras de autorização de pedidos via API, acesse [Buying Policies API](https://developers.vtex.com/docs/api-reference/buying-policies-api). Saiba mais no guia para desenvolvedores [Buying Policies](https://developers.vtex.com/docs/guides/buying-policies).
