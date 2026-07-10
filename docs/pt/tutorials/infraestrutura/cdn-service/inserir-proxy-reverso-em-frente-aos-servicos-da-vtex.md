---
title: 'Inserir um proxy reverso em frente aos serviços da VTEX'
id: 4PFWsfRAKviNVPf1bYdiir
status: PUBLISHED
createdAt: 2019-09-20T14:11:30.301Z
updatedAt: 2025-05-30T13:53:21.221Z
publishedAt: 2025-05-30T13:53:21.221Z
firstPublishedAt: 2019-09-23T12:22:50.056Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: insert-reverse-proxy-in-front-of-vtex-services
legacySlug: por-que-nao-recomendamos-inserir-um-proxy-reverso-em-frente-aos-servicos-da
locale: pt
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

> ❗  Este guia aborda uma prática **não recomendada** para a maioria das lojas e é aplicável somente a casos de extrema exceção.   Implementar um proxy reverso significa substituir todos os serviços de borda (CDN) gerenciados e otimizados pela VTEX. Isso implica que a loja será responsável pelo fornecimento efetivo do site, incluindo configurações, monitoramento e gerenciamento de aspectos como repasse de cabeçalhos, cookies e cache. A VTEX não oferece suporte ou documentação para essas configurações específicas e não se responsabiliza por problemas que possam surgir.   A VTEX não se responsabiliza por problemas nesse sistema, seja um CDN próprio, serviço de WAF ou outro recurso que fique à frente dos nossos servidores. Não teremos visibilidade da operação, e, portanto, a solução **não** se enquadra em nossos acordos de SLA. 

> ❗ Esta configuração **não é compatível com o Amazon CloudFront**. A partir de janeiro de 2025, lojas que utilizam o CloudFront como CDN não conseguem usar proxy reverso à frente dos serviços da VTEX. Tentar essa configuração com o CloudFront pode causar falhas de navegação e indisponibilidade do site.

Para apontar sua própria CDN para a CDN da VTEX, é necessário inserir um proxy reverso em frente aos serviços da VTEX. Neste cenário, o fluxo de tráfego passa a seguir este caminho: 

1. Loja: O ponto de origem do tráfego.  
2. Proxy reverso: O intermediário que você configura.  
3. CDN utilizada pela VTEX: A CDN padrão da VTEX.  
4. VTEX: Os servidores finais da VTEX.

Siga as orientações abaixo para implementar o proxy reverso:

* [Registro TXT](#registro-txt)  
* [Encaminhamento de tráfego](#encaminhamento-de-trafego)  
* [Responsabilidades sobre certificados SSL](#responsabilidades-sobre-certificados-ssl)

## Registro TXT

Para garantir que seu domínio esteja corretamente direcionado para a CDN VTEX, crie um registro TXT no formato `_{hostname}` com o valor `{hostname}.cdn.vtex.com` na zona de DNS do seu domínio.

Substitua `{hostname}` pela combinação de [subdomínio, domínio e domínio de nível superior](/pt/docs/tutorials/configurar-o-dominio-da-loja) da sua loja, por exemplo: `www.minhaloja.com`. Certifique-se de incluir o `_` antes do host.

Formato:

```
Nome: _{hostname}
Tipo: TXT
Valor: {hostname}.cdn.vtex.com
```

Exemplo:

```
Nome: _www.minhaloja.com
Tipo: TXT
Valor: www.minhaloja.com.cdn.vtex.com
```

## Encaminhamento de tráfego

No arquivo de configuração do proxy reverso, configure o encaminhamento de tráfego para a VTEX, garantindo que o cabeçalho `Host` contenha o domínio original. Siga o formato abaixo para as solicitações HTTP do proxy reverso para a VTEX:

```curl
curl http://{hostname}.cdn.vtex.com/ -H 'Host: {hostname}'
```

Exemplo:

```curl
curl http://www.minhaloja.com.cdn.vtex.com/ -H 'Host: www.minhaloja.com'
```

A forma de configurar o encaminhamento de tráfego e escrever a requisição HTTP pode variar dependendo da solução de software de proxy reverso utilizada.

## Responsabilidades sobre certificados SSL

As responsabilidades sobre certificados SSL se organizam da seguinte forma em casos de proxy reverso:

* A CDN externa (proxy reverso) gerencia o certificado SSL na comunicação entre o cliente e o proxy reverso.  
* A VTEX gerencia o certificado SSL na comunicação entre o proxy reverso (CDN externa) e os servidores VTEX.

Para usar o certificado SSL automático da VTEX (Let's Encrypt), você deve garantir que o proxy não bloqueie a validação ACME e que o DNS esteja configurado corretamente. Certifique-se de que todo o tráfego HTTP para `/.well-known/acme-challenge/*` chegue à VTEX sem alterações, ou seja, sem redirecionamentos internos (HTTP → HTTPS), bloqueios de tráfego ou modificações.

Alguns proxies reversos podem interceptar essa rota, impedindo que a VTEX emita ou renove o certificado SSL.

### Requisitos para validação de certificado

* Encaminhe a rota `/.well-known/acme-challenge/*` diretamente para a origem VTEX (`{hostname}.cdn.vtex.com`), por exemplo, `www.minhaloja.com.cdn.vtex.com`, preservando o cabeçalho `Host` original (por exemplo, `Host: www.minhaloja.com`).  
* Não aplique barreiras (CAPTCHA, redirecionamentos de login, páginas de erro ou HTML personalizado) a essa rota.  
* Não armazene em cache essa rota.

### Opções de certificado

Caso você prefira não depender da validação automática do Let's Encrypt, existem duas opções:

#### Continuar com o certificado automático da VTEX (Let's Encrypt)

* Requer configuração estável do proxy conforme descrito acima.  
* Vantagem: a emissão e renovação são 100% automáticas, desde que o DNS e as rotas ACME estejam corretas.

#### Migrar para um certificado personalizado (VTEX Shield)

* O lojista emite o certificado com sua CA preferida (por exemplo, DigiCert, GlobalSign) e o carrega utilizando a funcionalidade de [Certificados SSL customizados](https://help.vtex.com/pt/docs/tutorials/certificados-ssl-customizados) disponível no [VTEX Shield](https://help.vtex.com/pt/docs/tutorials/vtex-shield).  
* Neste modelo, não há fluxo ACME/Let's Encrypt dentro da VTEX, portanto o proxy não interfere na geração do certificado. É necessário apenas garantir a renovação oportuna e o novo upload.

> ⚠️ A VTEX somente provê navegação se:  <ul> <li>Houver um registro TXT configurado corretamente.</li> <li>For possível emitir e renovar certificados SSL para o host.</li> </ul>  Se ambas as condições não forem atendidas, a navegação não funcionará, e o site ficará fora do ar. 
