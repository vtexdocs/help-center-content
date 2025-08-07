---
title: 'Configurações iniciais'
id: 4EPwTXx5oFdSG1dA3zIchz
status: PUBLISHED
createdAt: 2024-01-18T17:08:33.703Z
updatedAt: 2024-02-22T20:29:57.019Z
publishedAt: 2024-02-22T20:29:57.019Z
firstPublishedAt: 2024-02-22T14:06:26.997Z
contentType: trackArticle
productTeam: Others
slugEN: initial-setup
locale: pt
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: trilha-da-loja-vtex
---

Este artigo apresenta como obter acesso ao ambiente VTEX e inclui informações desde a assinatura do contrato com a VTEX até as configurações iniciais da loja. 

Antes de começar, é importante conhecer os principais termos utilizados no artigo, conforme apresentado na tabela abaixo:

| **Termo** | **Definição** |
| :---: | :--- |
| Admin VTEX / Ambiente VTEX | Plataforma de gerenciamento da experiência do comércio digital. |
| Master Service Agreement | São as políticas que regem o uso dos serviços da plataforma de comércio eletrônico VTEX, conforme os termos do contrato firmado entre a contratante e a contratada. |
| Anexo 1 - Order form | Documento complementar ao **Master Service Agreement** que é encaminhado à contratante para assinatura digital, contendo as informações do acordo comercial e informações jurídicas da contratante e da VTEX. |
| Autenticação | É a ação de verificar quem é o usuário que está realizando o login. |
| Autorização | Determina o que um usuário pode fazer após ser autenticado. |
| Canal de venda | São lojas onde sellers podem oferecer os produtos disponíveis em seu catálogo para venda. |
| Perfil de acesso | É um conjunto de recursos criado para atender a um tipo comum de usuário. |
| Recursos do License Manager | Recurso é uma entidade associada a uma ação ou informação na infraestrutura da VTEX. |
| Sponsor account | A [Sponsor Account](https://developers.vtex.com/docs/guides/vtex-io-documentation-sponsor-account) é a conta responsável pelo desenvolvimento, manutenção e distribuição de [Edition Apps](#edition-apps). Seu objetivo principal é agilizar a instalação de vários aplicativos e configurações em um grupo definido de contas. |

## Assinar o contrato

O processo de contratação da VTEX ocorre entre representante de vendas VTEX, contratante e representante legal de ambas as partes. Finalizada a negociação, a contratante recebe uma solicitação de assinatura digital do Anexo 1 Order Form, que contém as seguintes informações:

* Condições jurídicas estabelecidas na negociação. 
* Dados dos representantes legais da VTEX e da contratante. 
* Dados das testemunhas da VTEX e da contratante.
* Link para o [MSA (Master Services Agreement)](https://vtex.com/br-pt/privacy-and-agreements/agreements/). 

Após a assinatura do contrato, todos os envolvidos recebem uma cópia do MSA + Anexo 1 Order Form via email. Novos clientes devem visualizar o MSA (_Master Services Agreement_) e considerar a região na qual está situada a empresa. 

Para os que já têm parceria firmada com a VTEX, o MSA pode ser encontrado no topo do Anexo 1 Order Form, ou na [página de Contratos Anteriores](https://vtex.com/br-pt/privacy-and-agreements/agreements-archive/), a depender da região e da data em que o Anexo 1 foi assinado.

## Receber acesso ao Admin VTEX

Após a assinatura do acordo comercial, em até 10 dias úteis o [usuário titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy) recebe por email o acesso ao Admin VTEX.  O usuário titular é o principal responsável pela loja e o único a quem é dado acesso total a todas as seções do Admin VTEX, incluindo ações importantes de manutenção e autorização.

Inicialmente, as principais ações que somente o usuário titular pode realizar são:

* Solicitar um ambiente de teste para o gerente da conta.
* Incluir novos usuários no ambiente VTEX. Para isso, é necessário entender os [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) existentes.
* [Habilitar login por autenticação de dois fatores](https://help.vtex.com/pt/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ) para operadores.
* Definir [formas de login](https://help.vtex.com/pt/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs#formas-de-login) para os clientes da loja.

Outras ações podem ser necessárias por este usuário e estão listadas no artigo [Usuário titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy#acoes-restritas-ao-usuario-titular).

<div class="alert alert-warning">
<b>Usuário titular</b> não é o mesmo que <b>Owner (Admin Super)</b>. O <b>Owner (Admin Super)</b> é um <a href="https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy">perfil de acesso</a> do <a href="https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3">License Manager</a> que define permissões concedidas a um usuário e pode ser atribuído a múltiplos usuários. No entanto, existe apenas um <b>Usuário titular</b> por <a href="https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC">conta</a>.
</div>

## Usuários e permissões

Todos os usuários administrativos cadastrados em uma conta VTEX podem executar ações a depender do [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) cadastrado e de suas respectivas permissões para acessar [recursos da plataforma](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3). Por exemplo, para realizar a ação de recuperar uma transação, o usuário precisa ter um perfil de acesso com permissão para utilizar o recurso `View Payment Data`.

### Adicionar usuários administrativos

Novos usuários devem ser cadastrados no Admin VTEX pela página **Gerenciamento da conta**, seguindo os passos do artigo [Gerenciar usuários](https://help.vtex.com/pt/tutorial/gerenciando-usuarios--tutorials_512). Nesta página, também é possível editar, excluir ou exportar usuários.

### Definir perfis de acesso e permissões para usuários

Para definir as ações que um usuário pode realizar no Admin VTEX, basta seguir as instruções no artigo [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc). É possível associar usuários a [perfis de acesso predefinidos](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) ou, caso exista a necessidade de perfis que agrupem permissões diferentes das predefinidas, criar [perfis de acesso customizados](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso).

## Autenticação para plataforma e frente de loja

É necessário configurar qual método de [autenticação](https://help.vtex.com/pt/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs) será ofertado aos clientes para login na loja e aos usuários administrativos para login no Admin VTEX. A autenticação no ambiente VTEX pode ser realizada através de algumas opções: código de acesso e senha, que estão sempre disponíveis, e Google como opcional. 

Para realizar o login na loja, a VTEX disponibiliza autenticação por código de acesso, senha, [Facebook](https://help.vtex.com/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook) e [Google](https://help.vtex.com/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google), sendo possível habilitar um ou mais métodos de autenticação. O passo a passo para habilitar as soluções pode ser encontrado no artigo [Autenticação](https://help.vtex.com/pt/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs).

## Autenticação para integrações e desenvolvimento de apps

A [autenticação](https://developers.vtex.com/docs/guides/authentication) é essencial em integrações via API para conectar sua conta VTEX com sistemas externos e no desenvolvimento de [aplicativos para a plataforma VTEX](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu#extensoes-e-apps). É a autenticação que garante o acesso autorizado do usuário a recursos da plataforma, por meio de credenciais como chaves de aplicação ou tokens. 

A tabela abaixo apresenta quais são os três tipos de autenticação disponíveis:

| **Tipo de autenticação** | **Descrição** |
| :---: | :--- |
| Autenticação de requisições a APIs usando <a href="https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet">chaves de aplicação</a> (appKeys) | <p>As chaves de aplicação (appKeys) são utilizadas para autenticar requisições a APIs da VTEX. Os administradores da loja podem criar essas chaves para diferentes integrações.</p><p>Mais informações em <a href="https://developers.vtex.com/docs/guides/api-authentication-using-application-keys">API authentication using application keys</a>.</p> |
| Autenticação de requisições a APIs usando tokens de usuário | <p>Os tokens de usuário são usados para autenticar requisições a APIs, especialmente para aplicativos <a href="https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ  ">frontend</a> desenvolvidos com VTEX IO.</p><p>Mais informações em <a href="https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens">API authentication using user tokens</a>.</p> |
| Autenticação de apps usando tokens de autenticação | <p>O uso de tokens de autenticação (auth tokens) é necessário para autenticação no desenvolvimento de apps com VTEX IO.</p><p>Mais informações em <a href="https://developers.vtex.com/docs/guides/app-authentication-using-auth-tokens">App authentication using auth tokens</a>.</p> |

## Política comercial

Um conceito importante na VTEX é [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV), que significa um conjunto de configurações, incluindo:

* [Catálogo](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#catalogo)
* [Preços](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#precos)
* [Promoções](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#promocoes)
* [Estratégias de envio](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#estrategia-de-envio)
* [Pagamentos](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#pagamentos)

Em toda integração com um canal de venda, é necessário atrelar uma política comercial e, quando uma das configurações citadas anteriormente diferir para um novo canal, é necessário criar uma nova política comercial.

A depender de sua arquitetura na VTEX, a loja pode se beneficiar com mais de uma política comercial, ou associar estratégias de várias políticas comerciais a [multilojas](http://link-warm-up-heading-multiloja) e [ambientes adicionais](http://link-warm-up-heading-ambiente-adicional). O artigo [Contas e arquitetura](http://link-warm-up) apresenta em detalhes a relação entre estes conceitos.

<div class="alert alert-info">
Para <a href="https://help.vtex.com/pt/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE">criar uma política comercial</a> e para <a href="https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X">contratar políticas comerciais adicionais</a>, é necessário entrar em contato com o <a href="https://help.vtex.com/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8">Suporte VTEX</a>.
</div>

## Edition Apps

[Edition Apps](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app) são pacotes que reúnem configurações e aplicativos em um único conjunto. Eles são criados por [Sponsor Accounts](https://developers.vtex.com/docs/guides/vtex-io-documentation-sponsor-account) para facilitar a configuração de [contas franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl). Alguns exemplos são **Edition Store** e **Edition Business**, oferecidos nativamente. Qualquer Edition App depende de `vtex.edition-business` ou `vtex.edition-store`. 

Para alterar um Edition App, é necessário entrar em contato com o nosso [suporte](https://help.vtex.com/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8), e somente o _Sponsor Account_ pode fazer modificações. Para criar um Edition App, é preciso atender aos requisitos presentes em [Developing an Edition App](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app#developing-an-edition-app).

## VTEX IO CLI

O [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) (_Command-line Interface_) é uma ferramenta de linha de comando desenvolvida pela VTEX e uma parte importante da plataforma VTEX IO, que permite que equipes de desenvolvimento criem e personalizem lojas e aplicativos na plataforma VTEX.

Através do VTEX IO CLI, os desenvolvedores podem realizar uma variedade de tarefas relacionadas ao desenvolvimento, como:

* **Inicialização de projetos:** a CLI permite criar e iniciar projetos na plataforma VTEX IO, definindo a estrutura inicial e as configurações básicas.
* **Desenvolvimento local:** é possível desenvolver, customizar e testar aplicativos localmente antes de implementar na plataforma VTEX.
* **Implementação:** a CLI facilita a implementação dos aplicativos na plataforma VTEX IO, permitindo atualizações e gerenciamento dos aplicativos de maneira eficiente.
* **Integração com o ecossistema VTEX:** o VTEX IO CLI se integra com outros serviços e ferramentas da plataforma VTEX, facilitando a interação com APIs, bancos de dados e outros recursos.

A instalação do VTEX IO CLI depende do sistema operacional utilizado. Para instalar a ferramenta conforme o sistema operacional disponível, consultar as instruções no artigo [Installing VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install).

Para conhecer os comandos e funcionalidades do CLI e começar a utilizá-lo, basta acessar os artigos [Using VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-usage) e [Managing plugins](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-plugins).

