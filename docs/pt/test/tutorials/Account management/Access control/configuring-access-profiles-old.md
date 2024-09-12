---
title: 'Configurar perfis de acesso'
id: tutorials_526
status: ARCHIVED
createdAt: 2017-04-27T22:02:22.057Z
updatedAt: 2021-03-23T22:52:05.757Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:28.800Z
contentType: tutorial
productTeam: Post-purchase
author: authors_4
slug: como-criar-perfil-de-acesso-old
locale: pt
legacySlug: guia-para-criar-perfis-de-usuario
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

Para organizar as permissões dos usuários que têm acesso ao ambiente administrativo da loja VTEX, o License Manager trabalha com perfis de acesso.

Os perfis de acesso definem quais funcionalidades o usuário poderá visualizar e/ou alterar dentro de cada módulo da plataforma.

## Perfis predefinidos

A VTEX já traz vários perfis criados, que costumam atender a maioria das necessidades, mas sempre é possível ter um novo e totalmente personalizado.

Veja alguns perfis úteis:

- __Admin Super:__ concede acesso a toda a loja.
- __Admin Portal:__ concede acesso aos ambientes que permitem edição do front-end (layout, HTML, CSS, JS e afins).
- __Admin - Página Inicial:__ acesso básico, para ver a página inicial do admin. É um perfil básico para todo usuário. Caso um usuário não tenha este acesso, terá uma mensagem de acesso negado ao acessar o admin sem ser diretamente pelo link do módulo que possui acesso.
- __2- Televendas:__ permite apenas que o usuário acesse a loja e feche compras como um cliente final. Não consegue acessar nenhum módulo do admin.
- __Admin Televendas:__ permite que o usuário faça pedidos como televendas e acesse o OMS.
- __Admin Televendas - Sem totalizadores:__ o mesmo que o anterior, mas não permite que o usuário veja os totalizadores de pedidos no OMS.
- __Financeiro:__ concede acesso ao submódulo Financeiro, dentro do License Manager, permitindo ver boletos e NFs relativos ao pagamento do serviço VTEX.
- __Webservice:__ permite que o usuário acesse os métodos do webservice, necessário para determinadas integrações (em geral, com o catálogo).

>⚠️ **Atenção**: os perfis de televendas bloqueiam o acesso ao módulo Catalog. Ou seja, não conseguem acessar o cadastro de produtos, por exemplo. Se for necessário acessar este módulo, o usuário deverá trabalhar com dois logins diferentes.

## Criando novos perfis

Se nenhum dos perfis existentes lhe atender, é possível criar novos perfis.

1. No menu lateral do novo admin, clique em __Gerenciamento da conta__ e, depois, em __Perfis de acesso__.
2. Clique no botão __Novo Perfil__.
3. Preencha o __Nome do perfil__.
4. No campo __Escolha um produto__, adicione as aplicações pertinentes.
5. Selecione, dentro das aplicações adicionadas, as funcionalidades que este perfil terá.
6. Você também já pode adicionar os e-mails dos usuários que estarão vinculados a esse perfil de acesso.
7. Clique no botão __Salvar__.

Feito isso, basta [associar o perfil aos usuários](/pt/tutorial/gerenciando-usuarios/).
