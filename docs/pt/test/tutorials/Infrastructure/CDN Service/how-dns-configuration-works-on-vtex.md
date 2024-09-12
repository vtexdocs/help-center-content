---
title: 'Como funciona a configuração de DNS na VTEX'
id: 2P5k3oMYOj7TgSK4Mrxmgy
status: PUBLISHED
createdAt: 2024-01-23T16:53:52.076Z
updatedAt: 2024-01-23T17:00:29.714Z
publishedAt: 2024-01-23T17:00:29.714Z
firstPublishedAt: 2024-01-23T16:58:57.454Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slug: como-funciona-a-configuracao-de-dns-na-vtex
locale: pt
legacySlug: como-funciona-a-configuracao-de-dns-na-vtex
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

A configuração do DNS é um passo essencial para realizar o go-live da sua loja. Na VTEX, é necessária uma configuração específica do sistema de DNS (_Domain Name System_) para que a loja funcione corretamente. O DNS é o sistema que traduz nomes de domínio (como `minhaloja.com`) em endereços IP de servidores que armazenam os arquivos necessários para exibir uma página da web.

Para configurar o DNS, é preciso criar um [CNAME](https://www.cloudflare.com/pt-br/learning/dns/dns-records/dns-cname-record/) para o domínio principal da loja, direcionando-o para `{dominioPrincipal}.cdn.vtex.com`. Por exemplo, uma loja `www.minhaloja.com`  deve criar um CNAME que aponte para `www.minhaloja.com.cdn.vtex.com`.

O funcionamento dos redirecionamentos ocorre em etapas:

1. O CNAME criado pela sua equipe encaminha o tráfego da loja para um local específico na infraestrutura da VTEX.

    `www.minhaloja.com` 🠖 `CNAME `🠖 `www.minhaloja.com.cdn.vtex.com`
2. Internamente, a VTEX configura um segundo CNAME que direciona para o serviço da Azion ou CloudFront.

    `www.minhaloja.com.cdn.vtex.com` 🠖 `CNAME` 🠖 `uug412qft7.map.azionedge.net`
3. Finalmente, um redirecionamento do tipo A conduz a rota do serviço Azion/CloudFront para um endereço IP específico.

    `uug412qft7.map.azionedge.net` 🠖 `A` (tipo de registro que contém um endereço IP) 🠖 `185.76.11.52`

Essas configurações garantem que o endereço IP resolvido seja dinâmico, podendo mudar a qualquer momento. Isto acontece porque este endereço IP se adapta para corresponder ao servidor de CDN (_Content Delivery Network_) mais próximo da localização do visitante. Esta adaptação melhora o desempenho do site, já que os arquivos são entregues a partir de servidores mais próximos geograficamente do visitante.

Para mais informações sobre configuração de DNS na VTEX, veja [Go-live](https://help.vtex.com/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj).

