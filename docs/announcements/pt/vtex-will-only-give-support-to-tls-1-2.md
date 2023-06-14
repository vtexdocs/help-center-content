---
title: 'VTEX só vai dar suporte ao TLS 1.2'
id: 63OshDDS6cmcKKmau6aQUA
status: PUBLISHED
createdAt: 2018-06-22T16:25:55.532Z
updatedAt: 2019-12-31T15:12:50.508Z
publishedAt: 2019-12-31T15:12:50.508Z
contentType: updates
productTeam: Reliability
author: authors_24
slug: vtex-so-vai-dar-suporte-ao-tls-1-2
legacySlug: vtex-so-vai-dar-suporte-ao-tls-1-2
announcementImageID: ''
announcementSynopsisPT: 'A partir de 30 de junho, versões anteriores do TLS e todas as versões do SSL vão ser descontinuadas.'
---

Como parte do nosso processo de melhoria contínua, vamos passar a dar suporte apenas para integrações que usam __TLS 1.2__. A partir de __30 de junho__, versões anteriores do TLS e todas as versões do SSL vão ser descontinuadas. 

Essa mudança está em conformidade com os requisitos PCI DDS e é fundamental para manter a segurança da plataforma. 


## O que você precisa fazer
__Se você é uma agência ou um provedor de pagamentos__ e usa a API do Pagamentos, revise suas integrações e atualize para o __TLS 1.2__ o quanto antes.

A partir do servidor que se comunica com nossos endpoints, teste sua conexão com um GET na URL `https://securetlspci.vtexpayments.com.br/`. Se ele retornar 200 OK, significa que você já está em conformidade com o __TLS 1.2__ e não vai precisar tomar nenhuma ação. Veja o exemplo abaixo:

    curl -X GET \
    https://securetlspci.vtexpayments.com.br/ \
    -H 'accept: text/html'
    

## Se você for um lojista
Lojistas não precisam se preocupar nem tomar nenhum tipo de ação. Mas se quiser, você pode entrar em contato com os responsáveis pelas integrações de pagamento da sua loja para perguntar se eles já estão em conformidade com o __TLS 1.2__.
