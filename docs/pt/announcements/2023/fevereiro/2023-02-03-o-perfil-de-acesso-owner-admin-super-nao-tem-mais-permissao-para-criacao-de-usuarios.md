---
title: 'O perfil de acesso Owner (Admin Super) não tem mais permissão para criação de usuários'
id: 5OpVXwzX5NWqTkVZ7QLMBd
status: PUBLISHED
createdAt: 2023-02-03T14:49:10.763Z
updatedAt: 2023-02-06T14:08:09.172Z
publishedAt: 2023-02-06T14:08:09.172Z
contentType: updates
productTeam: Identity
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-02-03-the-owner-admin-super-user-role-no-longer-has-permission-to-create-users
locale: pt
legacySlug: undefined
announcementImageID: 'undefined'
announcementSynopsisPT: 'O perfil de acesso Owner (Admin Super) não inclui mais o recurso Save user, ligado a ações de gerenciamento de usuários.'
---

**Owner (Admin Super)** é um [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) que abarca praticamente todos os [recursos](/pt/docs/tutorials/recursos-do-license-manager) necessários para acessar informações e realizar tarefas no dia a dia da sua loja VTEX.

Buscando melhorar as práticas de segurança do nosso ecossistema, redefinimos as permissões padrão de usuários e chaves na plataforma. Chaves são equivalentes a senhas e devem ser protegidas na mesma proporção.

Estas medidas visam facilitar aos lojistas restringir o número de usuários que dispõem do recurso **Save user**, proporcionando maior controle sobre ações sensíveis e, consequentemente, mais segurança para a sua loja VTEX.

## O que mudou?

A partir de hoje, o [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) **Owner (Super Admin)** não inclui mais o [recurso](/pt/docs/tutorials/recursos-do-license-manager) **Save user**. Isso significa que usuários que tenham apenas este perfil perderão a capacidade de:
- [Criar usuários](/pt/docs/tutorials/gerenciar-usuarios-administrativos).
- Atribuir [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) a usuários.
- Remover [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) de usuários.
- [Editar dados de usuários](/pt/docs/tutorials/gerenciar-usuarios-administrativos#editando-usuarios).
- Criar [chaves de aplicação](/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet).
- Alterar [chaves de aplicação](/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet).

Além disso, a VTEX disponibiliza a partir de hoje o perfil de acesso **User Administrator - RESTRICTED**, que inclui apenas o recurso **Save user**, descrito acima.

## Por que fizemos essa mudança?

Isso se faz necessário para reduzir as chances de pessoas mal intencionadas realizarem quaisquer tipos de alterações na plataforma que possam gerar prejuízos para sua loja, como alterações no checkout e gestão de usuários administrativos.

A partir de agora, os perfis das chaves de aplicação e dos usuários administrativos passam a ter por padrão permissões ainda mais limitadas, ficando algumas ações como criação de usuários administrativos e chaves de aplicação restritas a um perfil específico. Tornando mais fácil para nossos clientes monitorar e controlar quem pode realizar alterações na plataforma VTEX.

Sabemos que estas mudanças impactam as operações de nossos clientes, porém a adoção de melhores práticas de segurança é sempre necessária e um benefício para todo o ecossistema.

## O que precisa ser feito?

Esta mudança impacta de forma diferente a gestão de permissões de [usuários](#usuarios) e de [chaves de aplicação](#chaves-de-aplicacao).

### Usuários

O perfil **User Administrator - RESTRICTED** será automaticamente atribuído a todos os usuários que já têm o perfil **Owner (Admin Super)**. Portanto, não haverá perda de permissões para usuários existentes, que terão ambos os perfis.

Entretanto, recomendamos que revise os usuários da sua loja e remova o perfil **User Administrator - RESTRICTED** de cada usuário que não precisa realizar as ações associadas ao recurso **Save user** descritas acima.

Usuários que, a partir de agora, venham a receber o perfil de acesso **Owner (Admin Super)** não terão o recurso **Save user** e não poderão realizar as suas ações associadas, como criação e alteração de usuários e chaves de aplicação.

Caso deseje que algum usuário da sua loja possa realizar as ações associadas ao recurso **Save user** citadas acima, você deverá garantir que este usuário tenha o perfil de acesso **User Administrator - RESTRICTED** ou criar um [perfil de acesso customizado](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#tipos-de-perfis) que inclua o recurso **Save user**.

### Chaves de aplicação

Chaves de aplicação com o perfil de acesso **Owner (Admin Super)** não receberão o perfil **User Administrator - RESTRICTED** automaticamente. Portanto, caso deseje que alguma chave de aplicação possa realizar as ações associadas ao recurso **Save user** citadas acima, você deverá garantir que esta chave tenha o perfil de acesso **User Administrator - RESTRICTED** ou criar um [perfil de acesso customizado](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#tipos-de-perfis) que inclua o recurso **Save user**.

> ⚠️ Note que, com as mudanças descritas acima, chaves de aplicação não têm mais o recurso **Save user**, então um usuário com este recurso deverá concedê-lo, caso seja necessário.

## Como proteger as chaves da sua loja?

Siga as [boas práticas na utilização de chaves de aplicação](/pt/docs/tutorials/boas-praticas-chaves-de-api).

Incidentes ocorrem quando as chaves de aplicação de nossos clientes ficam expostas na internet ou são capturadas através de phishing. O vazamento dessas chaves pode ter diversas causas, como, por exemplo:

- Chaves incluídas em código-fonte e disponibilizadas em repositórios públicos.
- Compartilhamento da chave via meios não seguros, como e-mail para grupos de pessoas, canais de Slack ou outros meios de comunicação corporativa em massa.
- Compartilhamento de chaves de acesso com terceiros.
- Possível mau uso de credenciais por parte de funcionários ou subcontratados.
- Ausência de processo periódico de rotação de chaves.
- Ausência de revisão periódica de usuários e perfis.

Reforçamos a todos a importância de alterar periodicamente todas as senhas de usuários e chaves de aplicação, bem como revisar constantemente os usuários que possuem acesso à plataforma e suas permissões.

## Saiba mais

Confira as seguintes documentações para saber mais sobre a gestão de usuários e permissões na sua loja:
- [Perfis de acesso](/pt/docs/tutorials/perfis-de-acesso)
- [Recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager)
- [Gerenciar usuários](/pt/docs/tutorials/gerenciar-usuarios-administrativos)
- [Chaves de aplicação](/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet)
- [Boas práticas na utilização de chaves de aplicação](/pt/docs/tutorials/boas-praticas-chaves-de-api)

