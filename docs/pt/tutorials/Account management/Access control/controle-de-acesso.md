---
title: 'Controle de acesso'
id: 4rM3gyiWqtkim4Q8hOvLTC
status: DRAFT
createdAt: 2023-11-30T16:29:30.077Z
updatedAt: 2023-11-30T21:42:00.250Z
publishedAt: 
firstPublishedAt: 2023-11-30T21:40:59.550Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: access-control
locale: pt
legacySlug: controle-de-acesso
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

Toda ação na VTEX, como acessar uma página no Admin ou fazer uma chamada de API, envolve uma requisição à nossa infraestrutura. Para garantir a segurança dessas operações, existe o **License Manager**, um sistema responsável por verificar se um usuário possui as permissões adequadas para realizar uma ação na plataforma.

Para facilitar o gerenciamento dessas permissões, o License Manager é baseado em [recursos](#recursos) e [perfis de acesso](#perfis-de-acesso). Confira a seguir mais detalhes sobre esses conceitos.

## Recursos

Um **recurso** é uma entidade associada a uma ação ou informação dentro de nossa infraestrutura. Por exemplo, o recurso _Product management_ permite que um usuário acesse e edite o formulário de cadastro de produtos no Catálogo. Para detalhes sobre cada recurso disponível, veja [Recursos do License Manager](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).

Cada requisição passa por uma análise de segurança para verificar se o usuário possui os recursos necessários, ou seja, a permissão necessária para realizar aquela ação. Sem os recursos necessários, uma requisição não será bem-sucedida.

## Perfis de acesso

Um **perfil de acesso** determina o conjunto de recursos que um grupo de usuários pode acessar na VTEX. Cada usuário administrativo pode ser associado a um ou mais perfis de acesso.

Como diversos colaboradores costumam acessar o Admin, é importante limitar o acesso a ações críticas dentro de uma conta para minimizar disrupções na operação da loja e garantir que cada usuário tenha acesso apenas às ações necessárias para o seu papel.

Por exemplo, uma equipe de operadores de televendas precisa de acesso apenas a informações de pedidos, então não deve ter acesso a outras configurações da plataforma. Nesse caso, o perfil de acesso pode conter somente recursos relacionados à leitura de informações de pedidos.

Para gerenciar os perfis de acesso cadastrados na sua loja e os usuários associados a eles, acesse a [lista de perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).

Confira a seguir os diferentes tipos de perfis de acesso que você pode cadastrar na loja.

### Tipos de perfis de acesso

Ao [criar um novo perfil de acesso](https://help.vtex.com/pt/tutorial/criar-perfil-de-acesso--qGtNQpKSSAduX94l2WZBW), você tem a opção de utilizar um dos perfis predefinidos disponibilizados pela VTEX ou de criar um perfil customizado, selecionando cada recurso necessário.

O administrador precisa ter um perfil de acesso com o [recurso](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) _Save access profile_ para criar perfis de acesso no License Manager.

#### Predefinidos

Perfis de acesso predefinidos são conjuntos de recursos pré-determinados pela VTEX que cobrem os casos de uso mais comuns. Confira a lista completa de [perfis predefinidos](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) e as respectivas permissões associadas.

#### Personalizados

Além de utilizar perfis de acesso predefinidos, você pode [criar perfis de acesso personalizados](https://help.vtex.com/pt/tutorial/criar-perfil-de-acesso--qGtNQpKSSAduX94l2WZBW#criar-perfil-de-acesso-personalizado), reunindo os recursos necessários para um grupo de usuários administrativos da sua loja.

Por exemplo, uma equipe responsável por manter o Catálogo da loja atualizado costuma realizar um conjunto bem definido de tarefas, como cadastrar e editar produtos, categorias e marcas. Nesse caso, um administrador da conta pode criar um perfil de acesso personalizado com todos os recursos necessários para esses colaboradores.

Confira a lista completa de [recursos do License Manager](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) que podem ser utilizados.

## Saiba mais

* [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc)
* [Criar perfil de acesso](https://help.vtex.com/pt/tutorial/criar-perfil-de-acesso--qGtNQpKSSAduX94l2WZBW)

