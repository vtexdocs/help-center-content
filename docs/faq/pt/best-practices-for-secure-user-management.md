---
title: 'Melhores práticas de segurança para gestão de usuários'
id: 15YDwC9jGgqWi3rvcDaiGM
status: PUBLISHED
createdAt: 2019-09-13T18:00:13.670Z
updatedAt: 2021-12-10T02:40:08.930Z
publishedAt: 2021-12-10T02:40:08.930Z
firstPublishedAt: 2019-09-14T02:54:29.210Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: 1E4UkWguFZAXjkguvNHPIv
slug: melhores-praticas-de-seguranca-para-gestao-de-usuarios
locale: pt
legacySlug: metodos-de-seguranca-para-criacao-de-perfis-de-usuarios-em-uma-loja
---

Permitir o acesso de diversos usuários à loja pode trazer mais praticidade. Porém, é de extrema importância ter cautela no gerenciamento das permissões desses usuários. A má gestão das permissões de acesso à loja pode trazer graves consequências para a sua operação. 

Usuários sem o devido treinamento ou mal-intencionados com permissão de acesso a serviços críticos podem causar perda irreparável de dados, desajustes nas regras de negócio, interrupção de integrações, quebra de templates e demais efeitos nocivos que, em última análise, impactarão suas vendas.

Para evitar isso, separamos algumas orientações e boas práticas de gestão de usuários que lhe ajudarão a proteger sua loja. Seguindo estas dicas você mantém sua loja ainda mais segura.

## Revise com frequência todas permissões de usuário  

Recomenda-se uma revisão periódica dos [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) à plataforma. Práticas de mercado sugerem __no mínimo uma revisão anual__. Entretanto, uma frequência maior pode também ser adotada. Algumas empresas, por exemplo, fazem uma revisão dos usuários internos semestralmente.

## Utilize login corporativo para facilitar a gestão de usuários

A utilização de [login corporativo (SSO)](https://developers.vtex.com/docs/login-integration-guide) para autenticação tende a facilitar o comissionamento e o descomissionamento de usuários em processos ligados à admissão e dispensa de funcionários.   

## Restrinja o uso do perfil de acesso Super Admin

Não conceda o [perfil de acesso Super Admin](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso) a um número grande de usuários. Esse perfil de acesso tem poder para fazer alterações críticas na loja. É importante restringir o número de usuários que podem conceder ou retirar autorizações. 

Para cada um dos usuários, adote o princípio de “menor permissão necessária”, evitando um número elevado de usuários com acesso privilegiado demais.

## Utilize e-mails corporativos sempre que possível

Não cadastre e-mails pessoais de domínios genéricos na loja (@gmail ou @hotmail, por exemplo). Prefira e-mails corporativos. Há mais controle em relação a estes domínios, e eles estão sujeitos às políticas de autentificação da empresa, por isso são mais seguros.

## Mantenha o usuário titular da conta com o responsável pela segurança

Atribua o [usuário titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy) somente a alguém com papel real de verificar constantemente a criação e alteração de usuários. E garanta que essa verificação de fato aconteça.

## Ative 2FA quando utilizar login pelo Google

Oferecer login pelo Google será muito mais seguro se a autenticação por dois fatores for obrigatória. Evite permitir esse tipo de acesso sem 2FA. Veja a documentação para mais instruções sobre como [habilitar verificação em duas etapas (2FA)](https://help.vtex.com/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/1ccQYubR9DvRJ08RgO8JW8).
