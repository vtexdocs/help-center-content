---
title: 'Adicionar usuários à organização compradora'
createdAt: '2026-03-05T10:00:00.000Z'
updatedAt: '2026-04-13T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-users-to-buyer-organizations
locale: pt
---

Este artigo explica como um **Organization Admin** pode criar um usuário membro de uma organização compradora com permissões específicas para realizar ações em nome da organização.

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), atualmente disponível para contas selecionadas.

## Perfis de acesso do storefront

Os perfis de acesso definem o que cada usuário pode fazer na loja, incluindo a gestão da Conta da Organização. Cada perfil de acesso possui um conjunto de permissões. Quando você atribui um ou mais perfis de acesso a um usuário, ele passa a ter as capacidades combinadas desses perfis. As permissões são aplicadas na loja para que os usuários vejam e usem apenas os recursos permitidos.

A tabela abaixo resume os principais perfis de acesso e suas funções:

| Perfil de acesso | Finalidade |
| --- | --- |
| **Organizational Unit Admin** | Controle total sobre a unidade organizacional: configurações de organização e contrato, usuários, políticas de compra, orçamentos, campos contábeis e cartões de crédito. |
| **Super Buyer Admin** | Pode gerenciar todas as unidades organizacionais no nível raiz da organização, ultrapassando os limites das unidades. |
| **Buyer** | Pode realizar pedidos na loja. |
| **Order Approver** | Pode aprovar ou rejeitar pedidos de acordo com os fluxos de aprovação configurados. |
| **Order Modifier** | Pode usar a funcionalidade de alteração de pedido nos pedidos aos quais tem acesso. |
| **Address Manager** | Pode adicionar e gerenciar endereços durante o checkout e visualizar endereços salvos. |
| **Buyer Organization Manager** | Pode visualizar todos os pedidos da sua unidade organizacional. |
| **Contract Manager** | Pode visualizar pedidos realizados sob o contrato atribuído a ele. |
| **User Manager** | Pode gerenciar usuários e visualizar detalhes de usuários dentro da organização. |
| **Buying Policy Manager** | Pode criar, editar e excluir políticas de compra e fluxos de aprovação, e visualizar políticas de compra. |
| **Budget Manager** | Pode criar, editar, alocar e excluir orçamentos, e visualizar detalhes de orçamento, alocações, limites e histórico de gastos. |
| **Accounting Field Manager** | Pode criar, editar e excluir campos contábeis, e visualizar configurações de campos contábeis. |
| **Credit Card Manager** | Pode gerenciar e visualizar cartões de crédito salvos. |
| **Personal Cards User** | Pode usar um novo cartão de crédito no checkout que não é salvo no contrato por padrão. |

> ℹ️ Saiba mais sobre perfis de acesso do storefront e recursos no guia do desenvolvedor [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-roles).

## Antes de começar

Para adicionar um usuário, é necessário estar cadastrado na loja como membro da organização compradora com o perfil **Organization Admin**.

## Passo a passo

Siga as instruções a seguir para adicionar um usuário:

1. Acesse a loja pelo navegador e faça login com seu usuário.  

2. No menu superior, clique em **Company**. O painel da organização será exibido.  

   ![adicionar-usuarios-a-organizacao-compradora_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/adicionar-usuarios-a-organizacao-compradora_1.png)

3. Clique em **Manage.**  
4. Siga **a** ou **b** para acessar o painel de criação de usuário:  

   a. Clique no botão **+** e depois em **Add user**,  
      ou  
   b. Clique em **Users** e depois no botão **+**.

   ![adicionar-usuarios-a-organizacao-compradora_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/adicionar-usuarios-a-organizacao-compradora_2.png)

5. Preencha as informações do novo usuário:

   * **Nome completo (opcional)**: nome e sobrenome do usuário, conforme deve aparecer na organização.  
   * **Email (opcional)**: endereço de email que poderá ser utilizado para login e comunicações relacionadas ao processo de compra.  
   * **Número de telefone (opcional)**: telefone para contato do usuário. Pode ser utilizado para login e comunicações relativas às compras feitas.  
   * **Nome de usuário**: identificador único do usuário dentro da organização. Utilizado para login na loja. Caracteres especiais não são permitidos.  
   * **Perfis de acesso**: define o papel do usuário no storefront, como Buyer, Approver ou Organization Admin. Para mais informações sobre perfis disponíveis, consulte a seção [Perfis de acesso do storefront](#perfis-de-acesso-do-storefront).  

     > ⚠️ Cadastrar usuários compradores, ou seja, com perfis de acesso que permitem realizar compras, exige um passo adicional. Saiba mais em [Habilitar usuários compradores](#habilitar-usuarios-compradores).

6. Clique em **Add** para concluir.  

   Após a criação, uma mensagem de confirmação será exibida. Você pode clicar em **View** nessa mensagem para visualizar o usuário recém-criado.  

   O usuário também ficará disponível para edição em **Organization > Users**.  

> ⚠️ O novo usuário precisa definir a sua senha no primeiro acesso à loja. Para isso, ele deve utilizar um código de acesso enviado para o email cadastrado no passo 5, se houver. Se não tiver email cadastrado, o código de acesso precisa ser gerado pelo administrador da organização, como descrito na seção [Gerar código de acesso para usuários sem email](#gerar-codigo-de-acesso-para-usuarios-sem-email).

Ele passará a operar dentro da unidade organizacional à qual foi vinculado e poderá executar ações a depender do perfil de acesso no storefront e das permissões atribuídas.

## Gerar código de acesso para usuários sem email

Ao adicionar um usuário sem email cadastrado, o administrador da organização precisa gerar um código de acesso e repassar para o usuário realizar o primeiro acesso, seguindo as instruções abaixo.

1. Na [tela inicial da Conta da Organização](https://help.vtex.com/pt/docs/tutorials/conta-da-organizacao#acessando-a-conta-da-organizacao), acesse **Organization > Users**.  
2. Clique no menu ⋮ e depois em **Reset password**.  
3. Clique em **Reset** para confirmar.  
4. Copie o código gerado e envie para o usuário.

O código terá duração de 12 horas. Apenas com esse código de acesso o usuário conseguirá fazer login pela primeira vez e definir a sua senha de acesso.

## Habilitar usuários compradores

**Compradores** são usuários que podem realizar pedidos e estão associados à organização compradora. Os dados do comprador são as informações que identificam e descrevem esses usuários no contexto da loja e dos fluxos de pedidos, por exemplo, para checkout e histórico de pedidos. Os dados do comprador são usados pela loja para identificar quem está realizando o pedido e aplicar as permissões, contratos e políticas corretos.

Diferente de outros tipos de usuários, para cadastrar um usuário com permissão para realizar compras na loja, não basta criar o user e atribuir perfis de acesso. É necessário também cadastrar o usuário como comprador via API. Para habilitar um usuário a fazer compras na loja, siga os passos abaixo:

1. Adicione o usuário à organização compradora como descrito no [Passo a passo](#passo-a-passo).
2. Atribua um perfil de acesso que permita realizar compras, como **Buyer**. Consulte os perfis disponíveis na seção [Perfis de acesso do storefront](#perfis-de-acesso-do-storefront).
3. Cadastre o usuário como comprador. Para saber como adicionar e gerenciar dados de compradores, consulte a [API de dados do comprador B2B](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
