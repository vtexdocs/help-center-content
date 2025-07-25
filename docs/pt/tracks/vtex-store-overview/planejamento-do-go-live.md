---
title: 'Planejamento do go-live'
id: 6xYnNxDHUcY6FyChgziCoH
status: PUBLISHED
createdAt: 2024-01-08T13:11:05.385Z
updatedAt: 2025-04-16T19:25:34.034Z
publishedAt: 2025-04-16T19:25:34.034Z
firstPublishedAt: 2024-02-22T14:07:27.548Z
contentType: trackArticle
productTeam: Others
slugEN: planning-the-go-live
locale: pt
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugPT: trilha-da-loja-vtex
---

Go-live é o momento a partir do qual a loja encontra-se disponível para que clientes a acessem e façam compras. Este artigo explica como planejar todas as etapas necessárias para o go-live de uma loja VTEX e está organizado nas seguintes etapas:

1. [Preparação para o go-live](#1-preparacao-para-o-go-live)
2. [Configurações da loja](#2-configuracoes-da-loja)
3. [Configurações de domínio e conta](#3-configuracoes-de-dominio-e-conta)
4. [Testes antes do go-live](#4-testes-antes-do-go-live)
5. [Cadastro de domínio e solicitação de apontamento](#5-cadastro-de-dominio-e-solicitacao-de-apontamento)
6. [Go-live](#6-go-live)
7. [Ações após o go-live](#7-acoes-apos-o-go-live)

## Antes de começar

Para preparar uma loja para o go-live, é importante já ter definido a equipe ou [agência parceira](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#parceiros-de-implementacao) responsável pela implementação, ter escolhido os [tipos de conta VTEX](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex) de acordo com o tipo de operação e ter planejado a arquitetura da loja. Mais informações sobre essas etapas podem ser encontradas no artigo [Contas e arquitetura](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl).

## 1. Preparação para o go-live

O processo para realizar o go-live de uma loja, incluindo as configurações e testes necessários, pode variar de acordo com o grau de complexidade operacional da loja. Por esse motivo, recomendamos planejar todas as etapas necessárias para o go-live com no mínimo 15 dias de antecedência.

A imagem a seguir apresenta as etapas de planejamento envolvidas no go-live de uma loja VTEX:

![go-live-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/vtex-store-overview/planejamento-do-go-live_1.png)

### Definir MVP

O primeiro passo consiste em determinar o que é fundamental para o _Minimum Viable Product_ (MVP), incluindo as funcionalidades, páginas e informações necessárias para o lançamento oficial da loja.

É importante listar tudo que será preciso implementar antes do go-live. Recursos desejáveis, mas não essenciais, devem ser listados separadamente e implementados como mudanças incrementais após o lançamento.

### Definir cronograma

Para organizar as equipes envolvidas e realizar o go-live na data desejada, é importante criar um _roadmap_, ou seja, um documento com o roteiro de ações necessárias para o go-live, indicando os responsáveis por cada etapa e os prazos acordados. A imagem a seguir mostra um exemplo de cronograma:

![golive 2 PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/vtex-store-overview/planejamento-do-go-live_2.png)

Recomendamos planejar reuniões periódicas com as [equipes de implementação](warm-up-heading-parceiros-de-implementacao) para manter um alinhamento frequente e, se necessário, criar uma _war room_ para resolver assuntos pendentes na semana que antecede o go-live.

### Planejar soft launch

Além de testes durante o desenvolvimento do projeto, recomendamos incluir um _soft launch_ no cronograma, ou seja, um lançamento restrito a um público ou mercado antes do lançamento oficial. Essa etapa pode contribuir para o refinamento e correção de detalhes não observados ao longo do projeto de implementação.

Após a data do lançamento oficial, com a loja operando plenamente, os desenvolvedores podem continuar iterando o MVP e adicionando melhorias sem interromper as vendas.

## 2. Configurações da loja

Antes de realizar o go-live, é essencial garantir todas as configurações essenciais para o bom funcionamento da loja. Para isso, recomendamos verificar a [Checklist de configuração de loja](https://assets.ctfassets.net/alneenqid6w5/3yv1ofQRJ5xeX7J5EGglGy/dbe5b9175ab01586916c6155ac5681fa/Checklist_de_configura____o_de_loja.xlsx). É preciso confirmar em cada item se as configurações foram concluídas de acordo com as características de operação da loja.

<div class="alert alert-warning">
  <p>A checklist indicada acima lista funcionalidades e configurações básicas para o funcionamento de uma loja VTEX. É de responsabilidade da <a href="https://help.vtex.com/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#parceiros-de-implementacao">equipe de implementação</a> de cada loja definir quais funcionalidades e configurações devem ser aplicadas de maneira a produzir a experiência de compra desejada para os clientes. Recomendamos verificar todos os aspectos operacionais da loja e acrescentá-los à lista, caso não estejam presentes.</p>
</div>

## 3. Configurações de domínio e conta

Assim que as configurações internas da lojas forem concluídas, será preciso fazer algumas configurações referentes ao domínio e à conta VTEX. Esses ajustes não dependem da data prevista para o go-live, mas precisam ser realizados antes da etapa de testes.

1. [Conferir domínio nos CDNs](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX#conferir-dominio-nos-cdns): garantir que o domínio não está registrado previamente na [Cloudfront](https://aws.amazon.com/pt/cloudfront/).
2. [Configurar registro CAA](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX#configurar-registro-caa): indicar que a autoridade certificadora (CA) **Let’s Encrypt** está autorizada a gerar e renovar certificados que atestam a identidade do domínio. Passo necessário apenas se há registro de CAA no servidor DNS.
3. [Colocar conta em produção](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX#colocar-conta-em-producao): ativar a conta VTEX em produção. Mesmo após essa ativação, a loja permanece indisponível para acesso de clientes externos. A visualização e compra de produtos na loja só poderão ser efetuadas após a conclusão do go-live, conforme os passos descritos nas próximas seções deste artigo.

<div class="alert alert-warning">
  <p>A partir do momento em que a conta entra em produção, todos os pedidos serão cobrados automaticamente e o <a href="https://help.vtex.com/pt/tutorial/compreenda-o-valor-da-receita-aprovada--tutorials_4322#valores-da-receita-aprovada">Take Rate</a> será aplicado de acordo com o plano contratado com a VTEX. Isso inclui pedidos realizados no domínio <code>{nomedaloja}.myvtex.com</code>, mesmo que tenham sido realizados para testes.</p>
</div>

Para obter mais informações, basta consultar o artigo [Configurações](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX), parte da trilha detalhada sobre [Go-live](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/1iP90RcJvlrfQhnlxM54wo).

## 4. Testes antes do go-live

Recomendamos realizar testes antes do go-live para observar o comportamento da loja e evitar erros ou pendências no momento do lançamento oficial. Nas seções seguintes, explicamos os dois tipos mais comuns de testes: [Quality Assurance (QA)](#quality-assurance-qa) e [User Acceptance Testing (UAT)](#user-acceptance-testing-uat).

Na VTEX, é possível criar ambientes separados para esses testes. Nesse caso, é preciso replicar as configurações do ambiente principal que serão testadas. Por exemplo, se o objetivo é testar o funcionamento de uma promoção, é preciso fazer todas as configurações necessárias para simular um cenário em que ela seria aplicada, incluindo produtos, preços, logística, checkout, meios de pagamento, entre outros.

Para planejar a fase de testes, vale entrar em contato com o [nosso suporte](/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy), que é por onde é feita a [contratação de um ambiente de teste](/pt/tutorial/contratar-ambiente-de-testes--2nmZAHlfQoGsCWmEWGIoGy).

<div class="alert alert-info">
  <p>Se a loja for <a href="https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#ambiente-de-desenvolvimento">construída com VTEX IO</a>, é possível realizar testes A/B entre workspaces, ou seja, comparar a performance de ambientes de desenvolvimento de frente de loja. Para mais detalhes, basta acessar o guia para desenvolvedores <a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-running-native-ab-testing">Running A/B tests</a>.</p>
</div>

### _Quality Assurance_ (QA)

A fase de testes de QA é a garantia de qualidade, ou seja, o processo de verificação e validação de todos os aspectos da loja e de suas funcionalidades antes de serem disponibilizadas ao público em geral. Isso envolve testar minuciosamente todos os elementos, desde a navegabilidade e desempenho do site até diversos cenários de fluxo de compra, processamento de pagamentos e integrações de sistemas.

O objetivo é identificar e corrigir quaisquer problemas, erros ou falhas para garantir que a loja esteja pronta e de acordo com o escopo previsto para o MVP no momento do lançamento. Nessa etapa, é importante documentar bugs e erros e planejar como corrigi-los antes da data do go-live.

### _User Acceptance Testing_ (UAT)

O UAT, ou Teste de Aceitação do Usuário (_User Acceptance Testing_), representa a fase final de testes em que usuários finais validam e verificam se a loja atende às expectativas e funcionalidades necessárias para o MVP. Geralmente, esse tipo de teste inclui a equipe da loja e, em alguns casos, um grupo selecionado de clientes.

Durante o UAT, os responsáveis pelos testes exploram o site, realizam pedidos-teste e avaliam a experiência geral do usuário. Essa fase oferece mais uma oportunidade de relatar, documentar e corrigir qualquer problema ou comportamento indesejado na experiência antes do lançamento oficial, aumentando assim a probabilidade de sucesso após o go-live.

## 5. Cadastro de domínio e solicitação de apontamento

Após a conclusão dos testes e ajustes necessários, é preciso preparar a loja para o go-live. Em um período entre três e sete dias antes da data prevista para o lançamento oficial, é necessário realizar as seguintes ações:

1. [Cadastrar domínio na VTEX](/pt/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450): acessar as **Configurações da conta** no Admin VTEX para conectar o endereço à loja.

   <div class="alert alert-warning">
    <p>Após realizar o cadastro, existe um prazo de sete dias para concluir o go-live. Caso a loja não conclua os procedimentos necessários para go-live neste período, será preciso acessar o cadastro realizado e salvá-lo novamente.</p>
   </div>

2. **Solicitar apontamento interno:** abrir um ticket para o [Suporte VTEX](/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy) para solicitar o apontamento interno de DNS. O tempo para a conclusão desta solicitação pode ser de até três dias úteis.

    O tipo da solicitação encaminhada deve ser de acordo com a [tecnologia escolhida](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#escolhendo-a-tecnologia) para a frente de loja:

  <table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <thead>
    <tr class="bb b--muted-3">
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Tecnologia</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Solicitação</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 10rem;">Store Framework ou FastStore (VTEX IO)</td>
      <td class="t-body pa5" style="min-width: 10rem;">Solicitar o <a href="https://help.vtex.com/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#solicitar-apontamento-io" target="_blank" rel="noopener noreferrer" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">apontamento interno de DNS para VTEX IO</a> por meio de um ticket para o <a href="https://help.vtex.com/pt/support" target="_blank" rel="noopener noreferrer" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Suporte VTEX</a>.<br>Mais informações nos artigos:<ul><li><a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-go-live" target="_blank" rel="noopener noreferrer" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Going live with a new store</a> (Store Framework)</li><li><a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-migrating-storefront-from-legacy-to-io" target="_blank" rel="noopener noreferrer" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Migrating your storefront from Legacy CMS Portal to Store Framework</a></li><li><a href="https://www.faststore.dev/docs/go-live/2-configuring-external-dns" target="_blank" rel="noopener noreferrer" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Configuring external DNS for a custom domain</a> (FastStore)</li></ul></td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 10rem;">CMS Portal Legado</td>
      <td class="t-body pa5" style="min-width: 10rem;">Se o acesso à loja é restrito por <a href="https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">política comercial</a> com regra condicional e sua frente de loja foi construída com <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">CMS Portal Legado</a>, é preciso solicitar um <a href="https://help.vtex.com/pt/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#solicitar-apontamento-especial" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">apontamento interno especial</a>. Um exemplo comum são as lojas B2B, que restringem o acesso a empresas pré-aprovadas. A solicitação de apontamento especial é feita pelo <a href="https://help.vtex.com/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ/" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Suporte VTEX</a>, indicando a política comercial e a regra condicional configurada.</td>
    </tr>
  </tbody>
  </table>

Independente do tipo de solicitação a ser encaminhada, o ticket para o Suporte VTEX deve conter as seguintes informações:

- Título informando a intenção de realizar o go-live.
- Se a [tecnologia de frente de loja](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ) foi desenvolvida em VTEX IO ou CMS Portal Legado.
- URL a ser apontada.
- Horário para o apontamento interno ocorrer, entre 9 e 17 BRT (UTC-3).
- Informar se a loja tem regras condicionais de [políticas comerciais](/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE).
- Caso já exista um site no ar que esteja sendo migrado para a VTEX, informar se utiliza a CDN da Cloudfront.

<div class="alert alert-warning">
 <p>Após receber a confirmação do apontamento interno, é necessário realizar o apontamento comum de DNS em até cinco dias. Caso contrário, o apontamento interno será excluído e uma nova solicitação será necessária.</p>
</div>

## 6. Go-live

No momento do go-live, após a confirmação do apontamento interno realizado na etapa anterior, será preciso realizar o apontamento de DNS e notificar a VTEX:

1. [Realizar apontamento de DNS](/pt/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dnshttps://help.vtex.com/pt/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dns): na zona de DNS do domínio, criar uma entrada do tipo CNAME no subdomínio desejado para o destino ``{domínio}.cdn.vtex.com``. O ``{domínio}`` deve ser o mesmo cadastrado na VTEX.

   <div class="alert alert-warning">
    <p>A propagação do apontamento de DNS pode levar entre 24 a 48 horas para ser concluída, o que significa que o endereço configurado pode não estar acessível a todas as pessoas logo após a configuração.</p>
   </div>

2. [Notificar apontamento](/pt/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#notificar-apontamento): para que a loja fique disponível ao público em geral, é preciso notificar a plataforma VTEX que o apontamento foi realizado. Para isso, é necessário salvar novamente as **Configurações da conta** no Admin VTEX.

   <div class="alert alert-info">
    <p>Se a loja tiver sido construída com <a href="link-implement-frontend-faststore">FastStore</a>, também será necessário seguir os passos descritos no artigo <a href="https://www.faststore.dev/docs/go-live/2-configuring-external-dns">Configuring external DNS for a custom domain</a>.</p>
   </div>

Uma vez que as etapas acima forem concluídas, a loja estará disponível no domínio cadastrado para que clientes a acessem e realizem compras.

## 7. Ações após o go-live

Depois do lançamento oficial da loja, existem algumas ações importantes para garantir que os clientes tenham acesso ao endereço correto e acompanhar o desempenho das vendas e da navegação no site.

### Configurar redirecionamentos

Após o go-live, é possível acessar a loja no [domínio cadastrado](/pt/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#cadastrar-dominio-na-vtex). Porém, pode ser preciso redirecionar endereços antigos ou um endereço sem o subdomínio `www` para garantir o acesso ao endereço da nova loja. Para isso, recomendamos seguir os tutoriais dos seguintes artigos:

- [Redirecionamento de outros endereços](/pt/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ)
- [Configurar acesso sem www](/pt/tutorial/configurando-acesso-sem-www--tutorials_4278)

### Monitorar performance da loja

Recomendamos acompanhar o desempenho da loja após o lançamento a partir do menu de [Dashboards](/pt/tutorial/visao-geral-dashboards--1yn2nZUoXtDO3teTEJsCNl) no Admin VTEX, que inclui as seguintes páginas:

- [Visão Geral](/pt/tutorial/store-overview--P8ahguoRs0U3PzmXg2wuQ): principais métricas que impactam a receita das lojas. Nesse painel, é possível acompanhar os principais indicadores da evolução das vendas através dos recursos de análise de tendências de pedidos, taxa de conversão e gráficos de funil de vendas.
- [Performance de Vendas](/pt/tutorial/sales-performance--3DMube0sEsK9vPcRYGas72): painel de controle para comércio unificado, que auxilia lojas a ampliarem seu negócio e tomarem decisões com mais precisão.

Além das ferramentas disponíveis no Admin VTEX, é possível acompanhar a performance da loja pelo [Google Analytics](https://analytics.google.com/analytics/web/), caso tenha sido configurado anteriormente. Para obter mais informações, basta acessar o guia [Configurar Google Analytics 4 em loja VTEX](/pt/tutorial/como-configurar-google-analytics-em-loja-vtex--G2P0rmSrEiqCcmUMyUUwG).
