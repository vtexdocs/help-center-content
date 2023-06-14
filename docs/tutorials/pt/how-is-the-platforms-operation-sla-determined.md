---
title: 'Como é apurado o SLA de operação da plataforma?'
id: frequentlyAskedQuestions_662
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.436Z
updatedAt: 2019-12-31T17:00:45.718Z
publishedAt: 2019-12-31T17:00:45.718Z
firstPublishedAt: 2019-01-24T22:11:03.028Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-e-apurado-o-sla-de-operacao-da-plataforma
legacySlug: como-e-apurado-o-sla-de-operacao-da-plataforma
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

Além dos prazos, é preciso identificar o que assumimos como violação do SLA. Ou seja, o que realmente contará como tempo de indisponibilidade.

Como nosso modelo comercial é baseado no rendimento da loja, fica muito claro para todo o time VTEX que qualquer minuto de interrupção custa muito, tanto para as lojas quando para a própria VTEX. Desta forma, procuramos ser o mais transparente possível em relação a saúde da nossa plataforma. Disponibilizamos a [página de status](http://status.vtex.com "página de status") onde registramos todos incidentes que impactaram nosso SLA. Esses eventos são contabilizados conforme abaixo.

### São contabilizados

- Qualquer interrupção na loja virtual que esteja impactando significativamente o número de pedidos realizados. Ex: loja fora do ar, lentidão no acesso, erro no checkout.
- Contabilizamos interrupções com duração de no mínimo 10 minutos.

### Não são contabilizados

- Manutenções agendadas.
- Interrupção de algum serviço no módulo administrativo.

### Verificando no status

Para facilitar a identificação desses cenários, sempre recomendamos que o status seja verificado a cada suspeita de indisponibilidade da ferramenta. O status é atualizado quando o incidente passa do prazo mínimo de 10 minutos, com as seguintes informações:

- __Investigando/Identificado__: Incidente sendo investigado pelo time. Time está tomando ação necessário para restabelecimento do serviço.
- __Monitorando__: Incidente resolvido, serviço estabilizado. Ambiente sob monitoramento.
- __Resolvido__: Caso encerrado. Registrado tempo total de interrupção. Na maioria dos casos, o SLA é o somatório do tempo de indisponibilidade de cada incidente.

![](//images.contentful.com/alneenqid6w5/2Le8koNu7YUoICaquSSuuY/134a3f2ca7cee4614a09c96397573dd9/Screen_Shot_2016-04-22_at_16.28.39.png)
