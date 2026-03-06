---
title: 'Adicionar usuários à organização compradora'
createdAt: '2026-03-06T10:00:00.000Z'
updatedAt: '2026-03-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-users-to-buyer-organization
locale: pt
---

Este artigo explica como um **Organization Admin** pode criar um usuário membro de uma organização compradora com permissões específicas para realizar ações em nome da organização.

O usuário adicionado a uma organização compradora será vinculado a uma Organization Unit e terá um perfil de acesso no storefront que o permitirá executar ações na loja.

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam B2B Buyer Portal, atualmente disponível para contas selecionadas.

## Antes de começar

Para adicionar um usuário, é necessário estar cadastrado na loja como membro da organização compradora com o perfil **Organization Admin**.

## Passo a passo

Siga as instruções a seguir para adicionar um usuário:

1. Acesse a loja pelo navegador e faça login com seu usuário.  

2. No menu superior, clique em **Company**. O painel da organização será exibido.  

   ![adicionar-usuarios-a-organizacao-compradora_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/adicionar-usuarios-a-organizacao-compradora_1.png)

3. Clique em **Manage.**  
4. Siga **a** ou **b** para acessar o painel de criação de usuário:  

   1. Clique no botão **\+** e depois em **Add user**,  
      ou  
   2. Clique em **Users** e depois no botão **\+**.

   ![adicionar-usuarios-a-organizacao-compradora_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/adicionar-usuarios-a-organizacao-compradora_2.png)

5. Preencha as informações do novo usuário:

   * **Nome completo (opcional)**: nome e sobrenome do usuário, conforme deve aparecer na organização.  
   * **Email (opcional)**: endereço de email que poderá ser utilizado para login e comunicações relacionadas ao processo de compra.  
   * **Número de telefone (opcional)**: telefone para contato do usuário. Pode ser utilizado para login e comunicações relativas às compras feitas.  
   * **Nome de usuário**: identificador único do usuário dentro da organização. Utilizado para login na loja. Caracteres especiais não são permitidos.  
   * **Perfis de acesso**: define o papel do usuário no storefront, como Buyer, Approver ou Organization Admin. Para mais informações sobre perfis e permissões, consulte a documentação de [Membros da organização compradora](https://help.vtex.com/pt/docs/tutorials/membros-da-organizacao-compradora).  

     > ⚠️ Cadastrar usuários compradores, ou seja, com perfis de acesso que permitem realizar compras, exige um passo adicional. Saiba mais em [Habilitar usuários compradores](#habilitar-usuarios-compradores).

6. Clique em **Add** para concluir.  

   Após a criação, uma mensagem de confirmação será exibida. Você pode clicar em **View** nessa mensagem para visualizar o usuário recém-criado.  

   O usuário também ficará disponível para edição em **Organization > Users**.  

> ⚠️ O novo usuário precisa definir a sua senha no primeiro acesso à loja. Para isso, ele deve utilizar um código de acesso enviado para o email cadastrado no passo 5, se houver. Se não tiver email cadastrado, o código de acesso precisa ser gerado pelo administrador da organização, como descrito na seção [Gerar código de acesso para usuários sem email](#gerar-codigo-de-acesso-para-usuarios-sem-email).

Ele passará a operar dentro da Organization Unit à qual foi vinculado e poderá executar ações a depender do perfil de acesso no storefront e das permissões atribuídas.

## Gerar código de acesso para usuários sem email

Ao adicionar um usuário sem email cadastrado, o administrador da organização precisa gerar um código de acesso e repassar para o usuário realizar o primeiro acesso, seguindo as instruções abaixo.

1. Acesse **Organization > Users**.  
2. Clique no menu ⋮ e depois em **Reset password**.  
3. Clique em **Reset** para confirmar.  
4. Copie o código gerado e envie para o usuário.

O código terá duração de 12 horas. Apenas com esse código de acesso o usuário conseguirá fazer login pela primeira vez e definir a sua senha de acesso.

## Habilitar usuários compradores

Diferente de outros tipos de usuários, para cadastrar um usuário com permissão para realizar compras na loja, não basta criar o user e atribuir perfis de acesso. É necessário também cadastrar o usuário como comprador via API. Para habilitar um usuário a fazer compras na loja, siga os passos abaixo:

1. Adicione o usuário à organização compradora como descrito no [passo a passo](#passo-a-passo).  
2. Atribua um perfil de acesso que permita realizar compras. Consulte perfis e permissões no artigo [Membros da organização compradora](https://help.vtex.com/pt/docs/tutorials/membros-da-organizacao-compradora).  
3. Cadastre o usuário como comprador. Para saber como adicionar e gerenciar dados de compradores, consulte a [API de dados do comprador B2B](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
