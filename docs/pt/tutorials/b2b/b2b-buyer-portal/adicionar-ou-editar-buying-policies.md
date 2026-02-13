---
title: 'Adicionar ou editar Buying Policies'
createdAt: '2026-02-06T10:00:00.000Z'
updatedAt: '2026-02-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-buying-policies
locale: pt
---

> ⚠️ A funcionalidade **Buying Policies** está disponível apenas para o **B2B Buyer Portal**.

[Buying Policies](https://help.vtex.com/pt/docs/tutorials/buying-policies) é a funcionalidade que permite aos usuários da organização compradora configurar regras para autorizar ou negar pedidos automaticamente. Os mecanismos dinâmicos desta solução contribuem para uma maior governança da organização e promovem a conformidade com as políticas de compra vigentes.

Este artigo orienta os usuários no gerenciamento de buying policies e está dividido nas seguintes seções:

* Adicionar buying policy
* Ver página de detalhes
* Editar buying policy
* Remover buying policy

> ⚠️ Para configurar buying policies, o perfil de [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions) do usuário deve ter o recurso `ManageBuyingPolicies`. Para autorizar pedidos, é necessário o recurso `ApproveOrders`.

## Adicionar buying policy

1. Na página da Organizational Unit, na seção **Finance and Compliance**, clique em `Buying Policies`.
2. Na tela **Buying Policies**, clique no ícone `+` no topo da tela para adicionar uma nova política de compra.
3. No modal **Add new buying policy**, preencha os campos, que são todos obrigatórios:
    * Em **Basic information**, defina o nome e a descrição da buying policy que aparecerá no checkout para os compradores:
        * **Name:** nome da buying policy.
        * **Description:** explicação breve do funcionamento da buying policy. Ao criar uma boa descrição, os usuários que interagirem com essa política de compra têm maiores chances de entender os motivos pelos quais um pedido foi negado ou precisou de aprovação manual.
    * Em **Criteria**, defina os critérios que resultam na aplicação da buying policy. Para isso, preencha o campo com uma expressão no formato [JSONata](https://jsonata.org/), tal como `score ≥ 10`. É possível selecionar o critério desejado e apenas editar os valores desejados (destacados em roxo):
        * **Set spending limit criteria (definir critério de preço):** opções de aprovação ou negação de pedidos com base no preço do pedido. Por exemplo, se o pedido é maior, menor ou igual a determinado valor.
        * **Set order field criteria (definir critério de aspectos do pedido):** opções de aprovação ou negação de pedidos a partir de condições e características do pedido. Por exemplo, se ele tem itens restritos, ou se possui um centro de custo (cost center) específico.

    > ℹ️ Os valores usados nos critérios de autorização de pedidos são centesimais e a moeda corresponde a mesma usada no carrinho de compras do pedido.

    * Em **Action**, selecione qual ação será aplicada a pedidos que atenderam aos critérios:
        * **Deny order:** o pedido será negado.
        * **Bypass all buying policies:** o pedido será automaticamente aprovado, independentemente dos critérios definidos.
        * **Sequential workflow:** o pedido será aprovado ou negado manualmente por um usuário autorizado. Para esta opção, é necessário informar o nome de uma Organizational Unit para que o usuário dessa unidade revise o pedido.

        > ⚠️ É possível definir uma hierarquia de até cinco unidades organizacionais, sendo o quinto nível o último a revisar o pedido. Qualquer nível pode negar o pedido, mas a aprovação final depende da autorização de todos os níveis.

4. Para salvar as configurações, clique em `Add` (adicionar).

Feito isso, você verá a mensagem de confirmação _"Buying policy created successfully" (Buying policy criada com sucesso)_.

## Ver página de detalhes

Para visualizar os detalhes de uma política, na tela **Buying Policies**, clique no nome da buying policy ou, na linha correspondente à opção desejada, clique no ícone de menu > `Open` (abrir). Você verá uma imagem como a seguinte:

![buying_policies_image_1](link)

## Editar buying policy

1. Na página da Organizational Unit, na seção **Finance and Compliance**, clique em `Buying Policies`.
2. Na tela **Buying Policies**, na linha correspondente à opção desejada, clique no ícone menu > `Edit` (editar). Ou então, na [página de detalhes](#ver-pagina-de-detalhes) da buying policy, clique em `Edit` (editar).
3. Faça as modificações desejadas.
4. Para salvar as alterações, clique em `Save` (salvar).

## Remover buying policy

> ❗ A remoção de uma buying policy é permanente e não pode ser desfeita. As configurações são excluídas, mas o histórico da buying policy fica armazenado para consultas futuras.

1. Na página da Organizational Unit, na seção **Finance and Compliance**, clique em `Buying Policies`.
2. Na página **Buying Policies**, na linha correspondente à opção desejada, clique no ícone menu > `Delete` (deletar). Ou então, na [página de detalhes](#ver-pagina-de-detalhes) da buying policy, clique em menu > `Delete`.
3. No modal aberto, preencha o nome da buying policy a ser removida.
4. Para confirmar a exclusão, clique em `Delete`.

Feito isso, você verá a mensagem de confirmação _"Buying policy removed successfully" (Buying policy removida com sucesso)_ e, ao retornar à tela principal, a política não estará mais listada.

> ℹ️ Para gerenciar regras de autorização de pedidos via API, acesse a [Buying Policies API](https://developers.vtex.com/docs/api-reference/buying-policies-api) e confira o guia para desenvolvedores [Buying Policies](https://developers.vtex.com/docs/guides/buying-policies).
