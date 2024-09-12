---
title: 'Como desabilitar o proxy no Cloudflare'
id: 75QqsXAqR7NdkRc1GZPiXb
status: PUBLISHED
createdAt: 2021-11-19T18:31:43.174Z
updatedAt: 2022-01-11T16:58:58.183Z
publishedAt: 2022-01-11T16:58:58.183Z
firstPublishedAt: 2021-11-22T15:19:34.246Z
contentType: tutorial
productTeam: Reliability
author: 4SqDPmUJIIz2KMMKgiyqKl
slug: desabilitar-proxy-cloudflare
locale: pt
legacySlug: desabilitar-proxy-cloudflare
subcategoryId: unknown-subcategory
---

Quando o serviço da Cloudfare é utilizado, seu proxy vem habilitado por padrão. Esse proxy pode interferir com o nosso serviço de borda (CDN), que já é responsável pelo fornecimento do site da sua loja de uma forma otimizada. A interferência ocorre porque o proxy da Cloudflare faz com que o domínio seja apontado para a Cloudflare em vez da VTEX. Isso impossibilita a renovação dos certificados, pois esse processo requer que o domínio esteja necessariamente apontado para a VTEX. 

Como consequência, o site pode ficar fora do ar: caso o domínio esteja expirado por mais de 10 dias, ele é automaticamente removido da VTEX porque se considera que a loja não está mais na VTEX.

Para desligar o proxy do CloudFlare (e consequentemente, desativar os serviços de CDN e WAF da CloudFlare), acesse a sua conta na Cloudflare e clique no botão __DNS__. No painel __*DNS management*__, clique no ícone da nuvem laranja sob __*Proxy status*__ para cada entrada de DNS que deve apontar para a VTEX. 

Observe que, se o proxy estiver ligado, o ícone estará em laranja com o texto __*Proxied*__. Caso contrário, o ícone estará em cinza com o texto __*DNS Only*__.

![Configuração do proxy da Cloudflare](https://images.contentful.com/alneenqid6w5/1pEYEd1KWlH0P97Pgwyb7n/e644144d4c98accd1c24649ac765a7be/DNS_Management.png)

É importante notar que o resultado da desabilitação do proxy da CloudFlare pode demorar um pouco para ser observado, pois é necessário que o cache seja renovado.

>ℹ️ Caso queira usar o CDN e o WAF da Cloudflare, pode-se inserir um proxy reverso em frente aos serviços da VTEX. Note que essa configuração não é recomendada, visto que a VTEX já oferece serviços de CDN e WAF no seu próprio serviço de borda. Falhas de CDNs externas não implicam em falhas nos sistemas da VTEX. Não temos responsabilidade por CDNs de terceiros.
