---
title: Página de status da plataforma
id: gPhqDn9IQ3c67wbJEX3JJ
status: PUBLISHED
createdAt: 2019-01-14T19:58:58.431Z
updatedAt: 2023-05-24T19:06:04.933Z
publishedAt: 2023-05-24T19:06:04.933Z
firstPublishedAt: 2019-01-14T20:01:43.663Z
contentType: tutorial
productTeam: Reliability
author: 0QBQws7rk0t5Mnu8fgfUv
slug: pagina-de-status-da-plataforma
legacySlug: status-vtex-entenda-como-funciona-o-status-da-plataforma
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

No [Status VTEX](https://status.vtex.com/ "Status VTEX") , você pode acompanhar a estabilidade da plataforma em tempo real, assim como acessar todo o histórico de incidentes. 

Os eventos são reportados pela nossa equipe sempre que nosso sistema automático de monitoramento identifica uma instabilidade nos módulos da plataforma. As manutenções programadas também são comunicadas em detalhes.

Abaixo, você encontra detalhes sobre os elementos da página de status da plataforma VTEX.

<div class = "alert alert-info">
A página de status é feita com <a href="https://www.atlassian.com/software/statuspage">Atlassian Statuspage</a>.
</div>

## Notificações

A página de status disponibiliza o botão `SUBSCRIBE TO UPDATES`. Ao clicar, você tem a opção de se inscrever para receber atualizações via email, slack, webhook ou feed RSS.

A opção webhook permite realizar integrações baseadas nas notificações automáticas de status da plataforma. Caso deseje utilizar, entre em contato com seu time de desenvolvimento e confira a documentação do [webhook da Atlassian Statuspage](https://support.atlassian.com/statuspage/docs/enable-webhook-notifications/).

## Status atual

Nesta seção, é possível verificar, em tempo real, o status geral da plataforma, assim como alguns aspectos específicos:

![Página de status](//images.ctfassets.net/alneenqid6w5/7Acmvo2WI9cSZZHCNGdeiM/22b528ee016432f7eb2de39eed08b11d/1.png)

- **Checkout:** funcionalidades ligadas ao fluxo de criação de pedidos, ou seja, checkout e suas dependências.
- **WebStore:** navegação na frente de loja.
- **Administrative Environment:** navegação no Admin VTEX e seus módulos, como gerenciamento de pedidos, configurações de preços e logística, por exemplo.
- **Internal Modules:** outros módulos não inclusos nos grupos acima, como por exemplo, VTEX IO.

Os estados possíveis para cada aspecto acima são:

Os estados possíveis do status dos módulos são:
- **Operational:** funcionamento estável.
- **Degraded Performance:** funcionamento com performance abaixo do esperado.
- **Partial Outage:** funcionamento parcial das funcionalidades.
- **Major Outage:** funcionamento totalmente impactado.
- **Under Maintenance:** sistema em manutenção.

## Histórico de incidentes

A seção do histórico de incidentes exibe, em ordem cronológica inversa, o registro de incidentes e manutenções programadas ocorridos nos últimos 15 dias da plataforma.

Também é possível visualizar todo o histórico de incidentes organizados por mês. Para isso, clique em **Incident History** na parte inferior da página.

### Registro de incidentes

Cada registro de incidentes é composto por data da ocorrência, título e evolução do status.

![status moduleBox](//images.ctfassets.net/alneenqid6w5/2BkFdVXFXayUCvClXLPSNL/6fd919b0ef2121b6e6005b6466811164/status_moduleBox.PNG)

- **Título do registro:** título que descreve o tipo de classificação do incidente. Clicando nele, você é redirecionado para a página de detalhe do incidente.
- **Status de incidentes:** cada incidente possui um ciclo definido, em que nossa equipe trabalha para identificar e solucionar os problemas. Conheça um pouco mais sobre cada etapa desse ciclo:
    - **Investigating:** o primeiro estado do incidente é dedicado à análise dos impactos, serviços relacionados e identificação da causa raiz.
    - **Identified:** com a origem do erro devidamente identificada, a equipe de desenvolvimento começa a executar ações para a solução do comportamento.  
    - **Monitoring:** depois de concluir as ações de estabilização do sistema, já com os indicadores da operação normalizados, seguimos em estado alerta com um monitoramento mais próximo da performance no serviço ou módulo impactado.
    - **Resolved:** com a performance da plataforma estabilizada, voltamos ao nosso monitoramento normal e consideramos que a plataforma está funcionando como esperado.
- **Update:** caso algum estado não avance por um período considerável, registramos esse subestado para compartilhar uma atualização no progresso dos trabalhos.

### Registro de manutenção agendada

As atualizações na plataforma são feitas continuamente e, no geral, não impactam a operação dos nossos clientes. Mas, às vezes, algumas delas precisam que o serviço fique temporariamente indisponível.

![status maintenanceBox](//images.ctfassets.net/alneenqid6w5/quaItZNYtCgkpADVjT9aq/8cb4cf7d673e5fa5b710dc1d0ecb89ac/status_maintenanceBox.PNG)

Para casos assim, que afetam a estabilidade da plataforma, usamos o Status para comunicar todos os detalhes: quando será executada a manutenção, o período de duração e o impacto.

Além da data e do título (que segue o mesmo comportamento dos registros de incidentes), o registro de manutenção agendada também detalha a evolução do estado do evento:

- **Scheduled:** evento de manutenção já definido e programado.
- **In progress:** evento de manutenção em progresso.
- **Completed:** evento de manutenção finalizado.

