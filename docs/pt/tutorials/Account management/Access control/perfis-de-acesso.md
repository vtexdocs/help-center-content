---
title: 'Perfis de acesso'
id: 7HKK5Uau2H6wxE1rH5oRbc
status: PUBLISHED
createdAt: 2020-04-08T15:21:05.110Z
updatedAt: 2024-11-22T14:18:05.867Z
publishedAt: 2024-11-22T14:18:05.867Z
firstPublishedAt: 2020-04-08T20:52:12.334Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: roles
locale: pt
legacySlug: como-criar-perfil-de-acesso
subcategoryId: 1HSqkejwuYcQSMC400uY84
---


Toda ação na VTEX, como acessar uma página no Admin ou fazer uma chamada de API, envolve uma requisição à nossa infraestrutura. Para garantir a segurança dessas operações, existe o **License Manager**, um sistema responsável por verificar se um usuário possui as permissões adequadas para realizar uma ação na plataforma.

Para facilitar o gerenciamento dessas permissões, o License Manager é baseado em [recursos](#recursos) e [perfis de acesso](#perfis-de-acesso). Confira a seguir mais detalhes sobre esses conceitos.

## Recursos

Um **recurso** é uma entidade associada a uma ação ou informação dentro de nossa infraestrutura. Por exemplo, o recurso _Product management_ permite que um usuário acesse e edite o formulário de cadastro de produtos no Catálogo. Para detalhes sobre cada recurso disponível, veja [Recursos do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).

Cada requisição passa por uma análise de segurança para verificar se o usuário possui os recursos necessários, ou seja, a permissão necessária para realizar aquela ação. Sem os recursos necessários, uma requisição não será bem-sucedida.

## Perfis de acesso

Um **perfil de acesso** determina o conjunto de recursos que um grupo de usuários pode acessar na VTEX. Cada usuário administrativo pode ser associado a um ou mais perfis de acesso.

Como diversos colaboradores costumam acessar o Admin, é importante limitar o acesso a ações críticas dentro de uma conta para minimizar disrupções na operação da loja e garantir que cada usuário tenha acesso apenas às ações necessárias para o seu papel.

Por exemplo, uma equipe de operadores de televendas precisa de acesso apenas a informações de pedidos, então não deve ter acesso a outras configurações da plataforma. Nesse caso, o perfil de acesso pode conter somente recursos relacionados à leitura de informações de pedidos.

Para gerenciar os perfis de acesso cadastrados na sua loja e os usuários associados a eles, acesse a [lista de perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).

Confira a seguir os diferentes tipos de perfis de acesso que você pode cadastrar na loja.

### Tipos de perfis de acesso

Ao [criar um novo perfil de acesso](/pt/tutorial/criar-perfil-de-acesso--qGtNQpKSSAduX94l2WZBW), você tem a opção de utilizar um dos perfis predefinidos disponibilizados pela VTEX ou de criar um perfil customizado, selecionando cada recurso necessário.

O administrador precisa ter um perfil de acesso com o [recurso](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) _Save access profile_ para criar perfis de acesso no License Manager.

#### Predefinidos

Perfis de acesso predefinidos são conjuntos de recursos pré-determinados pela VTEX que cobrem os casos de uso mais comuns. Confira a lista completa de [perfis predefinidos](/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) e as respectivas permissões associadas.

#### Personalizados

Além de utilizar perfis de acesso predefinidos, você pode [criar perfis de acesso personalizados](/pt/tutorial/criar-perfil-de-acesso--qGtNQpKSSAduX94l2WZBW#criar-perfil-de-acesso-personalizado), reunindo os recursos necessários para um grupo de usuários administrativos da sua loja.

Por exemplo, uma equipe responsável por manter o Catálogo da loja atualizado costuma realizar um conjunto bem definido de tarefas, como cadastrar e editar produtos, categorias e marcas. Nesse caso, um administrador da conta pode criar um perfil de acesso personalizado com todos os recursos necessários para esses colaboradores.

Confira a lista completa de [recursos do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) que podem ser utilizados.

## Gerenciar perfis de acesso

Os perfis de acesso podem ser gerenciados por meio do Admin VTEX. Para acessar a listagem de perfis de acesso, na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Perfis de acesso**.

![Lista perfis de acesso](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Account%20management/Access%20control/perfis-de-acesso_1.png)

Esta tela apresenta uma lista com todos os perfis de acesso cadastrados para a conta, que você pode editar ou excluir a partir da coluna **Ações**.

Em uma conta recém-criada, apenas o perfil *Owner (Admin Super)* estará listado. Este perfil concede ao usuário acesso irrestrito a todos os recursos nativos da plataforma.

<div class="alert alert-warning">
 <p>A quantidade de usuários com o perfil <em>Owner (Admin Super)</em> deve ser a menor possível. Além disso, é preciso se certificar que haja visibilidade e controle de quem recebe esse acesso.</p>
 <p>O uso irrestrito de perfis de acesso muito permissivos aumenta o risco de ataques nas lojas por vazamento de credenciais de login.</p>
</div>

## Criar perfis de acesso

Para os usuários que não devem ter acesso irrestrito à plataforma, é importante criar perfis de acesso que limitem os recursos disponíveis a apenas os estritamente necessários para aquele tipo de usuário. Para isso, confira o guia [Criar perfil de acesso](/pt/tutorial/criar-perfil-de-acesso--qGtNQpKSSAduX94l2WZBW).

Você pode criar um novo perfil com base nos [perfis predefinidos](/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) ou de forma customizada, selecionando os [recursos do License Manager](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) necessários.

## Saiba mais

* [Perfis de acesso predefinidos](/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy)
* [Criar perfil de acesso](/pt/tutorial/criar-perfil-de-acesso--qGtNQpKSSAduX94l2WZBW)
* [Recursos do License Manager](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3)

