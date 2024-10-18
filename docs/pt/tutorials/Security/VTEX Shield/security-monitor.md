---
title: 'Security Monitor'
id: 5LOVNLrrtmgSj99pM1NS4x
status: PUBLISHED
createdAt: 2024-04-25T00:42:30.944Z
updatedAt: 2024-10-10T14:12:24.884Z
publishedAt: 2024-10-10T14:12:24.884Z
firstPublishedAt: 2024-04-25T02:41:44.798Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: security-monitor
locale: pt
legacySlug: security-monitor
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

>ℹ️ Esta funcionalidade faz parte do produto [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). Se já é cliente da VTEX e deseja adotar o VTEX Shield no seu negócio, entre em contato com o [Suporte Comercial](https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

O Security Monitor é um dashboard que auxilia lojistas a identificarem e gerenciarem riscos potenciais em sua conta em tempo real. A ferramenta identifica e notifica lojistas por email sobre riscos relacionados a configurações e comportamento de usuários administrativos, possibilitando ações preventivas contra vulnerabilidades de segurança.

Para acessar o dashboard, siga os passos abaixo:

1. No Admin VTEX, acesse **Dashboards**, ou digite **Dashboards** na barra de busca.
2. Em **Security Monitor**, clique em **Security Monitor Dashboard**.

![1-security-monitor-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

O Security Monitor apresenta as descobertas em três abas, divididas por status:

* [Abertas](#abertas)
* [Silenciadas](#silenciadas)
* [Fechadas](#fechadas)

Em todas as abas, é possível realizar as seguintes ações:

* [Buscar descobertas](#buscar-descobertas)
* [Filtrar descobertas por tipo](#filtrar-descobertas-por-tipo)
* [Editar configurações de notificações](#editar-configuracoes-de-notificacoes)

A seguir, confira informações específicas sobre as informações disponíveis em cada aba e as ações relacionadas.

## Abertas

A aba **Abertas** apresenta as ameaças identificadas pelo Security Monitor que ainda não foram gerenciadas ou silenciadas.

A barra superior indica o total de descobertas e a quantidade de ameaças por nível de severidade (alta, média ou baixa).

![2-findings-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

A aba apresenta a listagem completa de descobertas abertas em uma tabela, da mais recente para a mais antiga: 

| Colunas | Descrição |
| --- | --- |
| Descoberta | Email de usuário ou chave de aplicação relacionada à descoberta. |
| Tipo | Tipo de descoberta detectada:<br/><ul><li><strong>Chaves de App antigas:</strong> <a href="https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">chaves de aplicação</a> que foram criadas há mais de 6 meses.</li><li><strong>Super Admin Excessivos:</strong> usuários ou chaves de aplicação com o <a href="https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">perfil de acesso</a> <strong>Owner (Admin Super)</strong>.</li><li><strong>Chaves de App Vazadas:</strong> <a href="https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">chaves de aplicação</a> que foram expostas na web, encontradas pelo time de Segurança da VTEX.</li><li><strong>Usuários Inativos:</strong> usuário que não acessou o Admin nos últimos 30 dias.</li><li><strong>Permissões Excessivas:</strong> usuários ou chaves de aplicação com acesso a recursos que não utilizaram nos últimos 30 dias.</li></ul> |
| Detectada | Data em que a descoberta foi detectada. |
| Sensor | Sensor que detectou a ameaça: <br/><ul><li><strong>VTEX Identity</strong></li></ul> |
| Severidade | Nível de severidade da ameaça, determinado pelo impacto ou potencial risco: <br/><ul><li><strong>Alta</strong></li> <li><strong>Média</strong></li><li><strong>Baixa</strong></li></ul> |
| Menu de ações ⋮ | Menu de ações possíveis para a descoberta: <br/><ul><li><a href="#gerenciar-descoberta" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Gerenciar</a></li><li><a href="#silenciar-descoberta" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Silenciar</a></li></ul> |

### Gerenciar descoberta

Para gerenciar uma descoberta, siga as instruções abaixo:

1. Na linha da descoberta, clique no menu ⋮ .
2. Clique em `Gerenciar`.

    Você será conduzido(a) à tela de **Usuários** no **Gerenciamento da conta** para editar os perfis de acesso associados ao usuário ou à chave de aplicação em questão.

### Silenciar descoberta

Para mover uma descoberta para a aba **Silenciadas**, ou seja, removê-la temporariamente da aba **Abertas**, siga as instruções abaixo:

1. Na linha da descoberta, clique no menu ⋮ .
2. Clique em `Silenciar`.
3. Escolha o período de tempo em dias para manter essa descoberta na aba **Silenciadas**. As opções disponíveis são: **7**, **90** ou **120** dias.
4. Clique em `Silenciar`.

![3-snooze-finding-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

## Silenciadas

A aba **Silenciadas** apresenta a listagem de descobertas que foram silenciadas em uma tabela, com as mesmas informações descritas na aba [Abertas](#abertas).

Na aba **Silenciadas**, o menu de ações na linha de cada descoberta exibe apenas a opção `Alertar`, que permite reverter a ação de silenciar e fazer com que a descoberta retorne para a aba **Abertas**.

## Fechadas

A aba **Fechadas** contém a listagem de descobertas que já foram gerenciadas, ou seja, estão encerradas. Ela apresenta as seguintes informações em uma tabela: 

| Colunas | Descrição |
| --- | --- |
| Descoberta | Email de usuário ou chave de aplicação relacionada à descoberta. |
| Tipo | Tipo de descoberta detectada:<br/><ul><li><strong>Chaves de App antigas:</strong> <a href="https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">chaves de aplicação</a> que foram criadas há mais de 6 meses.</li><li><strong>Super Admin Excessivos:</strong> usuários ou chaves de aplicação com o <a href="https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">perfil de acesso</a> <strong>Owner (Admin Super)</strong>.</li><li><strong>Chaves de App Vazadas:</strong> <a href="https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">chaves de aplicação</a> que foram expostas na web, encontradas pelo time de Segurança da VTEX.</li><li><strong>Usuários Inativos:</strong> usuário que não acessou o Admin nos últimos 30 dias.</li></ul> |
| Detectada | Data em que a descoberta foi detectada. |
| Fechada | Data em que a descoberta foi fechada. |
| Fechada por | Indica que a descoberta foi fechada automaticamente, após ser gerenciada por um usuário administrativo. |
| Severidade | Nível de severidade da ameaça, determinado pelo impacto ou potencial risco: <br/><ul><li><strong>Alta</strong></li> <li><strong>Média</strong></li><li><strong>Baixa</strong></li></ul> |

## Buscar descobertas

Na barra de busca, digite o email de usuário ou o nome da chave de aplicação para encontrar descobertas relacionadas.

## Filtrar descobertas por tipo

Ao clicar em <i class="fas fa-chevron-down"></i> `Tipo`, você pode escolher um dos tipos de descoberta para filtrar os resultados exibidos na listagem. Clique em `Aplicar` para confirmar o filtro escolhido e a listagem será atualizada.

![4-filter-findings-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

## Editar configurações de notificações

Para editar os usuários administrativos que vão receber notificações em caso de descobertas, siga os passos abaixo:

1. Clique no botão de engrenagem no canto superior direito da tela. 
2. Digite o email do usuário a ser notificado e tecle `Enter`. Repita este passo para quantos usuários forem necessários.

   Para remover um usuário, clique no `X` ao lado do email relacionado.

3. Clique em `Salvar`.

![5-edit-notifications-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

## Saiba mais

* [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
* [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc)
* [Usuários](https://help.vtex.com/pt/tutorial/gerenciando-usuarios--tutorials_512)
* [Chaves de aplicação](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet)
