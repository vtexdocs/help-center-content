---
title: 'VTEX Shield: novas camadas de proteção com Certificados SSL customizados e mTLS'
id: Xy5vaUOgmjsYKzI7h1tPd
status: PUBLISHED
createdAt: 2025-07-22T14:31:35.784Z
updatedAt: 2025-07-28T12:59:52.171Z
publishedAt: 2025-07-28T12:59:52.171Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-shield-new-protection-layers-with-custom-ssl-certificates-and-mtls
locale: pt
legacySlug: vtex-shield-novas-camadas-de-protecao-com-certificados-ssl-customizados-e
announcementImageID: ''
announcementSynopsisPT: 'VTEX Shield agora oferece Certificados SSL customizados e mTLS, ampliando o conjunto de recursos avançados de segurança.'
---

O [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) é um produto adicional que oferece camadas personalizáveis de segurança para a sua loja, além dos padrões de segurança garantidos pelas [certificações e práticas de segurança](https://vtex.com/br-pt/security/security-practices/) existentes na VTEX.

Ampliamos os recursos avançados de segurança oferecidos pelo VTEX Shield. Agora oferecemos a possibilidade de contratar duas novas funcionalidades:

* **Certificados SSL customizados**: possibilita que lojas utilizem certificados próprios no lugar do padrão Let's Encrypt.

* **Mutual Transport Layer Security (mTLS)**: exige autenticação mútua entre VTEX e sistemas externos, adicionando uma camada extra de proteção nas integrações via API.

Essas novidades aumentam o controle sobre a comunicação entre sistemas, atendendo exigências de segurança e compliance de projetos mais complexos.

## O que mudou?

O VTEX Shield já oferecia a possibilidade de contratar o [Web Application Firewall (WAF)](https://help.vtex.com/pt/tutorial/web-application-firewall-waf--6BZYLlU03ws72iqIFF6jdn), o [Security Monitor](https://help.vtex.com/pt/tutorial/security-monitor--5LOVNLrrtmgSj99pM1NS4x) e o [Data Protection Plus](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh#data-protection-plus) como camadas adicionais de segurança. Agora, é possível selecionar também Certificados SSL customizados e Mutual Transport Layer Security (mTLS), descritos a seguir.

### Certificados SSL customizados

Por padrão, a VTEX utiliza [certificados SSL](https://help.vtex.com/pt/tutorial/certificado-de-seguranca-ssl--tutorials_1308) da autoridade [Let's Encrypt](https://letsencrypt.org/). Porém, algumas lojas precisam manter um controle direto sobre certificados digitais para atender requisitos específicos de compliance ou segurança.

Com os certificados SSL customizados, lojas com requisitos específicos de segurança ou compliance podem instalar e gerenciar seus próprios certificados personalizados diretamente pelo Admin VTEX.

Saiba mais em [Certificados SSL customizados](https://help.vtex.com/pt/tutorial/certificados-ssl-customizados--1hoaDEbU50PDZSe6AYep9q).

### Mutual Transport Layer Security (mTLS)

O mTLS oferece proteção reforçada nas integrações entre a VTEX e sistemas externos como ERPs, WMS ou lojas headless.

Diferente do protocolo TLS tradicional, em que apenas o servidor comprova sua identidade, o mTLS garante autenticação bilateral, pois exige que [tanto o cliente quanto o servidor apresentem certificados válidos](https://help.vtex.com/pt/tutorial/mutual-transport-layer-security-mtls--6YR3SoynJMfeEKGlY1Cqlo#arquitetura-cliente-servidor) antes da troca de dados. Essa prática reduz o risco de conexões maliciosas ou não autorizadas.

Saiba mais em [Mutual Transport Layer Security (mTLS)](https://help.vtex.com/pt/tutorial/mutual-transport-layer-security-mtls--6YR3SoynJMfeEKGlY1Cqlo).

## Por que fizemos essa mudança?

À medida que as integrações com sistemas externos se tornam mais complexas, aumentam as necessidades de garantir autenticidade e controle rigoroso nas comunicações. Algumas lojas apresentam necessidades específicas de compliance, auditoria e segurança, que vão além do uso de certificados padrão e autenticação unilateral.

Com as novidades, o VTEX Shield oferece uma camada extra de segurança que permite:

* Gerenciar certificados SSL próprios para atender políticas internas e auditorias.  
* Exigir autenticação mútua entre sistemas para evitar acessos não autorizados.  
* Reduzir riscos em integrações críticas, fortalecendo a confiança entre as partes.

Essas funcionalidades alinham o VTEX Shield às práticas mais avançadas do mercado e às demandas crescentes por segurança nas operações digitais.

## O que precisa ser feito?

Se você já é cliente da VTEX e deseja ativar Certificados SSL customizados, mTLS ou outras funcionalidades do VTEX Shield na sua loja, entre em contato com o [Suporte Comercial](https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) para solicitar a habilitação e realizar as configurações adequadas. É possível que taxas adicionais se apliquem.

Se ainda não é cliente, mas tem interesse nessas funcionalidades, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).
