---
title: 'Como é apurado o SLA de operação da plataforma?'
id: frequentlyAskedQuestions_662
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.436Z
updatedAt: 2024-03-11T22:38:31.694Z
publishedAt: 2024-03-11T22:38:31.694Z
firstPublishedAt: 2019-01-24T22:11:03.028Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-e-apurado-o-sla-de-operacao-da-plataforma
locale: pt
legacySlug: como-e-apurado-o-sla-de-operacao-da-plataforma
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

Qualquer minuto de interrupção pode custar muito, tanto para as lojas quanto para a VTEX. Assim, procuramos ser o mais transparente possível em relação à saúde da nossa plataforma. Disponibilizamos a página [Status VTEX](https://status.vtex.com), onde registramos todos os incidentes que impactaram nosso SLA.

Para apurar violações do SLA, ou seja, contabilizar tempo de indisponibilidade da plataforma, consideramos os eventos a seguir:

- Interrupções na loja virtual que estejam impactando significativamente o número de pedidos realizados, por exemplo: loja fora do ar, lentidão no acesso, erro no checkout.
- Interrupções com duração de no mínimo 10 minutos.

>⚠️ Não contabilizamos manutenções agendadas como tempo de indisponibilidade.

## Verificar o status da VTEX

Para facilitar a identificação de cenários de instabilidade, recomendamos verificar a página [Status VTEX](https://status.vtex.com) em caso de suspeita de indisponibilidade da ferramenta. O status é atualizado quando o incidente passa do prazo mínimo de 10 minutos, com as informações a seguir:

- __Investigando/Identificado__: o time está investigando o incidente e realizando as ações necessárias para restabelecer o serviço.
- __Monitorando__: o incidente foi resolvido e o serviço estabilizado. O ambiente está sob monitoramento.
- __Resolvido__: caso encerrado, com tempo total de interrupção do SLA registrado. Na maioria dos casos, o tempo total de interrupção é o somatório do tempo de indisponibilidade do incidente.

## Saiba mais

- [Página de status da VTEX](https://help.vtex.com/pt/tutorial/pagina-de-status-da-vtex--gPhqDn9IQ3c67wbJEX3JJ)
