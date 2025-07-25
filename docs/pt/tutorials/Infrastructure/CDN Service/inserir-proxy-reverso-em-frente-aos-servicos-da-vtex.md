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
locale: pt
legacySlug: por-que-nao-recomendamos-inserir-um-proxy-reverso-em-frente-aos-servicos-da
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

<div class="alert alert-danger">
<p>
Este guia aborda uma prática <strong>não recomendada</strong> para a maioria das lojas e é aplicável somente a casos de extrema exceção.
</p>
<p>
Implementar um proxy reverso significa substituir todos os serviços de borda (CDN) gerenciados e otimizados pela VTEX. Isso implica que a loja será responsável pelo fornecimento efetivo do site, incluindo configurações, monitoramento e gerenciamento de aspectos como repasse de cabeçalhos, cookies e cache. A VTEX não oferece suporte ou documentação para essas configurações específicas e não se responsabiliza por problemas que possam surgir.
</p>
<p>
A VTEX não se responsabiliza por problemas nesse sistema, seja um CDN próprio, serviço de WAF ou outro recurso que fique à frente dos nossos servidores. Não teremos visibilidade da operação, e, portanto, a solução <strong>não</strong> se enquadra em nossos acordos de SLA.
</p>
</div>

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

Substitua `{hostname}` pela combinação de [subdomínio, domínio e domínio de nível superior](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450) da sua loja, por exemplo: `www.minhaloja.com`. Certifique-se de incluir o `_` antes do host.

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

* A CDN externa (proxy reverso) gerencia o certificado SSL na comunicação entre o cliente e ela própria.  
* A VTEX gerencia o certificado SSL na comunicação entre o proxy reverso (CDN externa) e os servidores VTEX.

Para permitir a geração de certificados SSL, certifique-se de que todo o tráfego HTTP para `/.well-known/acme-challenge/*` chegue à VTEX sem alterações como redirecionamentos internos de HTTP para HTTPS ou bloqueios de tráfego.

Alguns proxies reversos capturam essa rota, e, com isso, a VTEX não consegue emitir ou renovar o certificado SSL.

<div class="alert alert-warning">
<p>
A VTEX somente provê navegação se:
</p>
<ul>
  <li>Houver um registro TXT configurado corretamente.</li>
  <li>For possível emitir e renovar certificados SSL para o host.</li>
</ul>
<p>
Se ambas as condições não forem atendidas, a navegação não funcionará, e o site ficará fora do ar.
</p>
</div>
