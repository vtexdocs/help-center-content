---
title: 'VTEX Shield'
id: 2CVk6H9eY2CBtHjtDI7BFh
status: PUBLISHED
createdAt: 2024-04-25T00:31:01.895Z
updatedAt: 2025-05-21T23:32:42.108Z
publishedAt: 2025-05-21T23:32:42.108Z
firstPublishedAt: 2024-04-25T01:19:00.025Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-shield
locale: pt
legacySlug: vtex-shield
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

<div class="alert alert-info">
  <p>Se já é cliente da VTEX e deseja adotar o VTEX Shield no seu negócio, entre em contato com o <a href="https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Suporte Comercial</a>. É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o <a href="https://vtex.com/br-pt/contato/">formulário de contato</a>.</p>
</div>

O VTEX Shield oferece camadas adicionais e personalizáveis de proteção para lojas que priorizam a resiliência da plataforma, além dos padrões de segurança garantidos pelas [certificações e práticas de segurança](https://vtex.com/br-pt/security/security-practices/) existentes na VTEX.

A solução apresenta recursos avançados de segurança que possibilitam detectar potenciais riscos e realizar ações preventivas. Assim, é possível se proteger contra interrupções imprevistas, mantendo a sua loja operacional e confiável.

Ao contratar o VTEX Shield, é possível optar pelas funcionalidades a seguir:

* [Security Monitor](#security-monitor)
* [Web Application Firewall (WAF)](#web-application-firewall-waf)
* [Data Protection Plus](#data-protection-plus)
* [Certificados SSL customizados](#certificados-ssl-customizados)
* [Mutual Transport Layer Security (mTLS)](#mutual-transport-layer-security-mtls)

## Security Monitor

O Security Monitor é um dashboard no Admin VTEX que detecta ameaças à segurança relacionadas ao comportamento de usuários administrativos e a configurações inadequadas. Os riscos potenciais incluem [chaves de aplicação](/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) antigas ou expostas na web, usuários ou credenciais com permissões excessivas e usuários inativos. A ferramenta apresenta uma visão geral das ameaças e das soluções, com a opção de notificar lojistas por email a cada descoberta.

O Security Monitor está disponível no Admin VTEX somente para lojas com VTEX Shield que optarem por esse recurso. Para mais informações, confira o guia [Security Monitor](/pt/tutorial/security-monitor--5LOVNLrrtmgSj99pM1NS4x).

## Web Application Firewall (WAF)

O Web Application Firewall (WAF) é uma ferramenta para proteger aplicações web por meio do monitoramento e da filtragem do tráfego da Internet.

Esse recurso de segurança desempenha um papel fundamental na proteção de sites, serviços on-line e aplicativos da Web contra vários ataques, como injeção de SQL, XSS (cross-site scripting) e outras vulnerabilidades comuns da web.

Somente lojas com VTEX Shield que optarem por esse recurso podem solicitar a ativação do WAF. Saiba mais sobre o funcionamento e os tipos de ameaças protegidas em [Web Application Firewall (WAF)](/pt/tutorial/web-application-firewall-waf--6BZYLlU03ws72iqIFF6jdn).

## Data Protection Plus

<div class="alert alert-info">
  <p>Esta funcionalidade está em fase beta fechada, disponível apenas para algumas regiões. Em caso de dúvidas, entre em contato com o <a href="https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Suporte Comercial</a>.</p>
</div>

O [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus) é uma arquitetura de dados que oferece uma camada adicional de proteção para dados pessoais. Nessa arquitetura, todos os dados PII (Personally Identifiable Information) são armazenados no [Profile System](https://developers.vtex.com/docs/guides/profile-system), um serviço desenvolvido especificamente para processar PII seguindo um [conjunto de regras e processos](https://developers.vtex.com/docs/guides/pii-data-architecture-specifications) apropriados para esse objetivo.

Outros módulos da plataforma, como Pedidos e Checkout, armazenam apenas dados anonimizados associados a um token do Profile System, ampliando a segurança dessas informações.

Leia o conjunto de guias da categoria [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus) no Developer Portal para mais detalhes e especificações dessa arquitetura.

## Certificados SSL customizados

A VTEX utiliza, por padrão, [certificados SSL](/pt/tutorial/certificado-de-seguranca-ssl--tutorials_1308) emitidos pelo [Let’s Encrypt](https://letsencrypt.org/) para garantir segurança e compatibilidade. No entanto, algumas lojas podem precisar de certificados customizados por requisitos de compliance ou segurança.

Para isso, a página **Certificados SSL** permite instalar e gerenciar certificados personalizados. Ela está disponível no Admin VTEX somente para lojas com VTEX Shield que optarem por esse recurso. Para mais informações, confira o guia [Certificados SSL customizados](/pt/tutorial/certificados-ssl-customizados--1hoaDEbU50PDZSe6AYep9q).

## Mutual Transport Layer Security (mTLS)

O Mutual Transport Layer Security (mTLS) é uma solução de segurança avançada oferecida pelo VTEX Shield, que reforça a proteção das integrações entre sistemas externos e a VTEX. Essa camada extra de proteção é aplicável a cenários de integração via APIs, como lojas headless ou conexões com ERPs e WMS.

Diferente do TLS tradicional, em que apenas o servidor precisa comprovar sua identidade, o mTLS exige autenticação mútua: tanto o cliente quanto o servidor apresentam certificados digitais válidos, assegurando que ambos os lados da comunicação sejam confiáveis antes da troca de dados. Saiba mais em [Mutual Transport Layer Security (mTLS)](/pt/tutorial/mutual-transport-layer-security-mtls--6YR3SoynJMfeEKGlY1Cqlo).
