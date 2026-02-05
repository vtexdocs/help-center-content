---
title: 'Boas práticas de gestão de acessos para lojas'
id: MKR5OuTTAn90UTMcrHHsr
status: PUBLISHED
createdAt: 2025-03-19T16:20:54.370Z
updatedAt: 2025-03-19T16:22:33.155Z
publishedAt: 2025-03-19T16:22:33.155Z
firstPublishedAt: 2025-03-19T16:22:33.155Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: best-practices-for-store-access-management
legacySlug: boas-praticas-de-gestao-de-acessos-para-lojas
locale: pt
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

Gerenciar corretamente os acessos à sua loja é essencial para garantir segurança e continuidade operacional. É necessário ter cautela no gerenciamento das permissões dos usuários para evitar riscos e garantir que cada usuário tenha apenas os acessos necessários para desempenhar suas funções.

Permitir que diversos usuários acessem a loja pode ser prático, mas uma gestão inadequada das permissões pode trazer graves consequências para a sua operação, como perdas de dados, falhas nos processos, interrupção de integrações e impacto nas vendas.

Para evitar esses riscos, siga estas boas práticas para gerenciamento de acessos e mantenha sua loja protegida.

## Restrinja o uso do perfil de acesso Super Admin

O [perfil de acesso Super Admin](/pt/docs/tutorials/perfis-de-acesso) permite alterações críticas na loja. Por isso, limite o uso desse perfil ao menor número possível de usuários. É importante restringir o número de usuários que podem conceder ou retirar autorizações.

## Revise com frequência as permissões de usuários e chaves de API

Revise pelo menos uma vez ao ano os [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) de usuários administrativos da sua loja e chaves de API. Esse procedimento garante que apenas os usuários e chaves necessárias mantenham permissões de acesso.

Adote o **princípio do menor privilégio**, que consiste em conceder a cada um apenas as permissões estritamente necessárias para executar suas funções. Isso reduz o risco de acessos indevidos e minimiza os impactos de erros operacionais ou ações mal-intencionadas. 

A segregação de funções contribui para um ambiente mais seguro, permitindo que cada usuário ou chave tenha permissões compatíveis com seu papel na organização.

Para isso, crie diferentes perfis, com acessos compatíveis com as permissões necessárias para cada função. Saiba como criar perfis de acesso customizados em [Criar perfil de acesso](/pt/tutorial/criar-perfil-de-acesso--qGtNQpKSSAduX94l2WZBW#criar-perfil-de-acesso-personalizado).

## Utilize login corporativo (SSO)

A utilização de [login corporativo (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) para autenticação facilita a gestão de acessos, permitindo a automação na concessão e revogação de acessos conforme a movimentação de funcionários na empresa.

## Utilize emails corporativos sempre que possível

Não cadastre emails pessoais de domínios genéricos no Admin (`@gmail` ou `@hotmail`, por exemplo). Prefira emails corporativos. Utilize emails corporativos, que oferecem maior controle e segurança, por estarem sujeitos às políticas de autenticação da empresa.

## Não compartilhe contas de emails genéricos

Evite o uso de contas compartilhadas, como um email genérico cujas credenciais são compartilhadas entre vários usuários. Por exemplo, não utilize `admin@empresa.com`, prefira `joana@empresa.com`, um email cujo acesso é exclusivo para cada funcionário. Cada usuário deve ter uma conta no Admin, com permissões configuradas conforme seu nível de acesso.

Contas compartilhadas dificultam a utilização de autenticação multifator (MFA), uma camada extra de segurança altamente recomendada. O MFA exige uma confirmação por parte do usuário, pois a conta fica associada a uma pessoa ou dispositivo. Utilizando contas e perfis de acesso segregadas, o MFA pode ser ativado para cada usuário e o acesso não fica impedido. Saiba mais sobre como ativar MFA em [Habilitando autenticação em dois fatores (2FA)](/pt/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores).

## Defina um usuário titular responsável pela segurança da conta

Atribua o [usuário titular](/pt/docs/tutorials/o-que-e-o-usuario-titular) somente a alguém com responsabilidade real pela gestão de acessos, ou seja, verificar constantemente a criação e alteração de usuários. Ele(a) deve revisar regularmente as permissões e garantir que apenas usuários autorizados mantenham acessos.

## Exija autenticação de dois fatores (2FA) para login pelo Google

Se a loja permitir login via Google, exija a autenticação de dois fatores (2FA). Essa camada extra de segurança reduz significativamente os riscos de acessos não autorizados. Consulte [Habilitando autenticação de dois fatores (2FA)](/pt/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores) para saber como ativar esse recurso.

## Saiba mais

* [Controle de acesso](/pt/subcategory/controle-de-acesso--1HSqkejwuYcQSMC400uY84)  
* [Perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso)  
* [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide)   
* [Habilitar login por autenticação de dois fatores](/pt/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores)
