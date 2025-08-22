---
title: 'Criar perfil de acesso'
id: qGtNQpKSSAduX94l2WZBW
status: PUBLISHED
createdAt: 2023-11-30T16:42:01.373Z
updatedAt: 2024-11-22T14:17:26.392Z
publishedAt: 2024-11-22T14:17:26.392Z
firstPublishedAt: 2023-11-30T17:12:45.125Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-roles
legacySlug: criar-perfil-de-acesso
locale: pt
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

Os perfis de acesso determinam o conjunto de recursos que um grupo de usuários pode acessar na VTEX. Você pode gerenciá-los por meio do Admin VTEX, onde é possível definir os [recursos](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) e usuários associados a cada perfil.

Ao criar um perfil de acesso, você pode optar por utilizar um perfil de acesso [predefinido](https://help.vtex.com/pt/tutorial/controle-de-acesso--4rM3gyiWqtkim4Q8hOvLTC#predefinido), criado pela equipe da VTEX para atender a cenários comuns nas operações, ou por cadastrar um perfil de acesso [personalizado](https://help.vtex.com/pt/tutorial/controle-de-acesso--4rM3gyiWqtkim4Q8hOvLTC#personalizado), selecionando recursos específicos a que usuários com o perfil precisam ter acesso.

Confira a seguir o passo a passo para cada uma dessas opções:

* [Utilizar perfil de acesso predefinido](#utilizar-perfil-de-acesso-predefinido)
* [Criar perfil de acesso personalizado](#criar-perfil-de-acesso-personalizado)

Recomendamos a criação de perfis que sejam análogos às estruturas hierárquicas da loja. Desta forma, todos os colaboradores são responsáveis pelas informações a que podem ter acesso. Boas práticas de gerenciamento dos perfis de acesso aumentam a segurança de uma operação, além de se reforçar a atenção de todos os envolvidos com dados sensíveis de uma loja e de seus clientes. 

> ⚠️ O uso irrestrito de perfis de acesso muito permissivos aumenta o risco de ataques nas lojas caso ocorra o vazamento de credenciais de login.

## Utilizar perfil de acesso predefinido

Para começar a utilizar um perfil de acesso predefinido, siga as instruções abaixo:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Perfis de acesso**.

    Você verá uma lista com todos os perfis de acesso cadastrados para a conta. Para mais informações sobre essa página, acesse o artigo [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).

2. Clique em `+ Criar perfil de acesso`.
3. Clique em `Escolher perfil de acesso` e clique em um dos perfis predefinidos exibidos no menu dropdown. Não escolha a opção **Custom**, pois ela é dedicada a perfis personalizados.

    Você verá quais são os recursos incluídos nesse perfil, separados por produto.

    Por exemplo, o perfil **Call center operator** contém um recurso do produto _Catálogo_ que permite executar operações numa loja em nome de um cliente e um recurso do _OMS_ que permite checar o status de um pedido:

    ![Novo perfil de acesso](//images.ctfassets.net/alneenqid6w5/5biL3DriciSnHKbgHvV2PE/1fe552a5c15c7c3dee8d54c88a60fafc/image_3.png)

    Saiba mais sobre os perfis predefinidos disponíveis e os recursos associados em [Perfis de acesso predefinidos](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy).

4. Adicione usuários administrativos ao perfil de acesso, preenchendo o email do usuário a ser inserido em **Adicionar usuários para este perfil de acesso** e clicando em `Adicionar`.

    ![Usuários do perfil](//images.ctfassets.net/alneenqid6w5/1lSnygEawddufMz9IZ45Mj/39ac0e7bfbf0abb88113494883108a83/usuarios-perfil-pt.png)

    Se o usuário não existir, será criado um novo usuário usando o email como nome, ou seja, nome e email serão iguais.

5. Clique em `Salvar`.

## Criar perfil de acesso personalizado

Para criar  um perfil de acesso personalizado para atender as necessidades de acesso de um grupo de usuários, siga as instruções abaixo:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Perfis de acesso**.

    Você verá uma lista com todos os perfis de acesso cadastrados para a conta. Para mais informações sobre essa página, acesse o artigo [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).

2. Clique em `+ Criar perfil de acesso`.
3.  Para criar um perfil personalizado, clique em `Escolher perfil de acesso` e clique na opção **Custom** no menu dropdown.
4. Clique no menu dropdown em **Escolha um produto** e, em seguida, clique em um produto exibido na lista.

    Você verá a lista de todos os recursos disponíveis para o produto:

    ![Configurando produto](//images.ctfassets.net/alneenqid6w5/1VE4awGJHyrsR2OkYwAzRQ/39bc16eca81b8a13946f081c5a1454d3/image_4.png)

5. Marque os recursos aos quais o perfil deve conceder acesso. Confira a lista completa de [Recursos do License Manager](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) para mais informações sobre cada um.
6. Caso deseje adicionar recursos de outro produto, clique no botão **Configurar outro produto**, ao final da lista de produtos e recursos e repita os passos 4 e 5.

    É possível adicionar recursos de quantos produtos forem necessários ao perfil.

7. Escreva um nome para o perfil personalizado no campo **Nome do perfil**.

  > ⚠️ É importante escolher nomes descritivos para os perfis de acesso, deixando claro que tipo de usuário deve ter aquele acesso. Recomendamos indicar o cargo na empresa ou atividade a ser desempenhada na plataforma.

8. Adicione usuários administrativos ao perfil de acesso, preenchendo o email do usuário a ser inserido em **Adicionar usuários para este perfil de acesso** e clicando em `Adicionar`.

    ![Usuários do perfil](//images.ctfassets.net/alneenqid6w5/1lSnygEawddufMz9IZ45Mj/39ac0e7bfbf0abb88113494883108a83/usuarios-perfil-pt.png)

    Se o usuário não existir, será criado um novo usuário usando o email como nome, ou seja, nome e email serão iguais.

9. Clique em `Salvar`.

    Após criado, o novo perfil será listado na página [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).

## Saiba mais

* [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc)
* [Recursos do License Manager](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3)
