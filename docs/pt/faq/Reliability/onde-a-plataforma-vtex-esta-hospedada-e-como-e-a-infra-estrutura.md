---
title: 'Onde a plataforma VTEX está hospedada e como é a infra-estrutura ?'
id: 1P4jYoZMMsAqGq2Ec0UOGu
status: ARCHIVED
createdAt: 2017-10-22T00:01:45.036Z
updatedAt: 2020-03-06T13:55:14.485Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Reliability
author: 2LFh4Ox3XiWIqUMWw4MOGw
slugEN: onde-a-plataforma-vtex-esta-hospedada-e-como-e-a-infra-estrutura
locale: pt
legacySlug: onde-a-plataforma-vtex-esta-hospedada-e-como-e-a-infra-estrutura
---

### Micro serviços: Arquitetura SOA multi-tenant
A arquitetura da plataforma VTEX foi desenvolvida com objetivo de gerar alta escalabilidade e segurança a partir de um código único e uniforme, capaz de se adaptar às regras de cada cliente.

Hospedada na Amazon utilizando os serviços AWS (Amazon Web Services), abaixo uma representação da nossa arquitetura e infra-estrutura.

![arquitetura vtex](https://images.contentful.com/alneenqid6w5/3QJpGctI7YGEkuoy2cwwoW/a25ee9e8c71cc0d66b198e4da2869510/arquitetura_VTEX.JPG)

## Serviços AWS:
Amazon EC2 (servidor de aplicativo)
Elastic Beanstalk(executa aplicações)
Amazon S3 (armazenar dados criticos)
CloudFront (CDN - cache Front)
Amazon SQS (Filas de mensagens) 
Amazon SES (Serviço de e-mail) 
Enterprise Support/Trusted Advisor.
Infra totalmente Escalável e inteligente.

## Case Study AWS:
https://aws.amazon.com/pt/solutions/case-studies/vtex/



