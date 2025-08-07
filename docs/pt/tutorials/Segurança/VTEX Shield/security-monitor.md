---
title: 'Security Monitor'
id: 5LOVNLrrtmgSj99pM1NS4x
status: PUBLISHED
createdAt: 2024-04-25T00:42:30.944Z
updatedAt: 2025-05-19T20:49:33.423Z
publishedAt: 2025-05-19T20:49:33.423Z
firstPublishedAt: 2024-04-25T02:41:44.798Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: security-monitor
legacySlug: security-monitor
locale: pt
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

<div class="alert alert-info">
  <p>Esta funcionalidade faz parte do produto <a href="https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh">VTEX Shield</a>. Se já é cliente da VTEX e deseja adotar o VTEX Shield no seu negócio, entre em contato com o <a href="https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Suporte Comercial</a>. É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o <a href="https://vtex.com/br-pt/contato/">formulário de contato</a>.</p>
</div>

O Security Monitor é um dashboard que auxilia lojistas a identificarem e gerenciarem riscos potenciais em sua conta em tempo real. A ferramenta identifica e notifica lojistas por email sobre riscos relacionados a configurações e comportamento de usuários administrativos, possibilitando ações preventivas contra vulnerabilidades de segurança.

Para acessar o dashboard, siga os passos abaixo:

1. No Admin VTEX, acesse **Dashboards**, ou digite **Dashboards** na barra de busca.
2. Em **Security Monitor**, clique em **Security Monitor Dashboard**.

![1-security-monitor-pt](//images.ctfassets.net/alneenqid6w5/k2BpYU2kF3p3grDdfy4aB/f0d7f601da33a725db1208854fbdddac/security-monitor-pt.png)

O Security Monitor apresenta as descobertas em três abas, divididas por status:

* [Abertas](#abertas)
* [Silenciadas](#silenciadas)
* [Fechadas](#fechadas)

Em todas as abas, é possível realizar as seguintes ações:

* [Buscar descobertas](#buscar-descobertas)
* [Filtrar descobertas por tipo](#filtrar-descobertas-por-tipo)
* [Exportar descobertas](#exportar-descobertas)
* [Editar configurações de notificações](#editar-configuracoes-de-notificacoes)

A seguir, confira informações específicas sobre as informações disponíveis em cada aba e as ações relacionadas.

## Abertas

A aba **Abertas** apresenta as ameaças identificadas pelo Security Monitor que ainda não foram gerenciadas ou silenciadas.

A barra superior indica o total de descobertas e a quantidade de ameaças por nível de severidade (alta, média ou baixa).

![2-findings-pt](//images.ctfassets.net/alneenqid6w5/4wpzGuNHIyqAaRGuv5Dt8E/19ff4f43195fc91701df9df615e851dd/findings-pt.png)

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

![3-snooze-finding-pt](//images.ctfassets.net/alneenqid6w5/1neaA5XmCxK4EB3HAVxcud/3861076116e39d3d9a29387d17ad25be/snooze-pt.png)

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

![4-filter-findings-pt](//images.ctfassets.net/alneenqid6w5/1qJnJBy5YHJzQKynw783W7/b042d3c11411a62e26018dd19274f182/filter-security-monitor-pt.png)

## Exportar descobertas

Para exportar as descobertas para um arquivo no formato CSV, siga os passos abaixo:

1. Clique no botão `Exportar` no canto superior direito da tela.
2. Selecione quais descobertas incluir no arquivo exportado:
   * Todas as descobertas  
   * Abertas  
   * Silenciadas  
   * Fechadas  
3. Clique em `Exportar`. O arquivo gerado será enviado por email assim que estiver pronto.  
4. Abra o email recebido e clique em `Download` para baixar o arquivo.

### Informações presentes no arquivo exportado

O arquivo CSV exportado contém as informações a seguir sobre cada descoberta:

| Coluna | Descrição |
| :---- | :---- |
| *Id* | ID da descoberta. |
| *Type* | Tipo de descoberta detectada. |
| *Finding* | Email de usuário ou chave de aplicação relacionada à descoberta. |
| *Sensor* | Sensor que detectou a ameaça (VTEX Identity). |
| *Account* | Conta em que a ameaça foi detectada. |
| *Severity* | Nível de severidade da ameaça, determinado pelo impacto ou potencial risco: <ul><li>High (alta)</li><li> Medium (média)</li><li> Low (baixa)</li></ul> |
| *Detected* | Data e horário da descoberta, no formato DD/MM/AAAA hh:mm:ss. |
| *Description* | Ação recomendada diante da descoberta. |
| *Status* | Status da ameaça, que pode ser: <ul><li>Open (aberta)</li><li>Closed (fechada) </li><li> AutoClosed (fechada automaticamente)</li></ul> |
| *Snoozed Until* | Data até quando a descoberta está silenciada, no formato DD/MM/AAAA hh:mm:ss. Este campo só é preenchido se a descoberta estiver silenciada. |
| *Closed* | Data e horário em que a descoberta foi fechada, no formato DD/MM/AAAA hh:mm:ss. |
| *Closed By* | Responsável por fechar a descoberta. |

## Editar configurações de notificações

Para editar os usuários administrativos que vão receber notificações em caso de descobertas, siga os passos abaixo:

1. Clique no botão de engrenagem no canto superior direito da tela. 
2. Digite o email do usuário a ser notificado e tecle `Enter`. Repita este passo para quantos usuários forem necessários.

   Para remover um usuário, clique no `X` ao lado do email relacionado.

3. Clique em `Salvar`.

![5-edit-notifications-pt](//images.ctfassets.net/alneenqid6w5/1CmMhWokQgzxRAqk1Jvqn4/6bd1074e6ba9f36e9a22d1941da1dfd0/notifications-security-monitor-pt.png)

## Saiba mais

* [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
* [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc)
* [Usuários](https://help.vtex.com/pt/tutorial/gerenciando-usuarios--tutorials_512)
* [Chaves de aplicação](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet)
