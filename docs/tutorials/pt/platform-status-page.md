---
title: Página de status da plataforma
id: gPhqDn9IQ3c67wbJEX3JJ
createdAt: 2019-01-14T19:58:58.431Z
updatedAt: 2023-05-08T20:24:24.256Z
publishedAt: 2023-05-08T20:24:24.256Z
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

![status resumeBox](//images.ctfassets.net/alneenqid6w5/fCbfgeEf678XnOvWONnIf/c0ab3d6ae46a765a0c7015793a04e0e0/status_resumeBox.PNG)

Abaixo, detalhamos todos os elementos que fazem parte do Status VTEX e explicamos as informações que são apresentadas:

## Resume Box
__Resume bar:__ informa, de maneira geral, o status da plataforma em tempo real.

__View historical uptime:__ ao clicar, você vai poder visualizar o status diário da plataforma, em estrutura de calendário. Cada dia possui uma cor, que indica o status geral da plataforma naquela data.

Significado das cores:
__Verde:__ não houve registro de incidentes ou manutenção. 
__Amarelo:__ houve algum incidente ou manutenção com impacto superior a 10 minutos (e inferior a 30 min.).
__Laranja:__ houve algum incidente ou manutenção com impacto superior a 30 minutos (e inferior a 1 hora).
__Vermelho:__ houve algum incidente ou manutenção com impacto superior a 1 hora.

__Module Status:__ aqui, destacamos o estado dos módulos mais importantes no fluxo de compra e operação da loja. Quando um incidente estiver ativo e for relevante a um desses módulos, seu estado também será atualizado.

Os estados possíveis do status dos módulos são:
- **Operational:** funcionamento estável.
- **Degraded Performance:** funcionamento com performance abaixo do esperado.
- **Partial Outage:** funcionamento parcial das funcionalidades.
- **Major Outage:** funcionamento totalmente impactado.
- **Under Maintenance:** sistema em manutenção.

![status moduleBox](//images.ctfassets.net/alneenqid6w5/2BkFdVXFXayUCvClXLPSNL/6fd919b0ef2121b6e6005b6466811164/status_moduleBox.PNG)

## Lista de incidentes
A lista de incidentes exibe, de maneira cronológica, o registro de incidentes e manutenções programadas dos últimos 14 dias na plataforma. Também é possível visualizar todo o histórico de incidentes organizados por mês: basta acessar o link `Incident History` no footer da página.

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

