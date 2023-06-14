---
title: 'Como inserir um proxy reverso em frente aos serviços da VTEX'
id: 4PFWsfRAKviNVPf1bYdiir
status: PUBLISHED
createdAt: 2019-09-20T14:11:30.301Z
updatedAt: 2020-08-20T21:15:13.613Z
publishedAt: 2020-08-20T21:15:13.613Z
firstPublishedAt: 2019-09-23T12:22:50.056Z
contentType: tutorial
productTeam: Reliability
author: authors_24
slug: por-que-nao-recomendamos-inserir-um-proxy-reverso-em-frente-aos-servicos-da
legacySlug: por-que-nao-recomendamos-inserir-um-proxy-reverso-em-frente-aos-servicos-da
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

<div class="alert alert-danger">
<strong>Atenção:</strong> as explicações deste artigo visam a atender a casos de extrema exceção. Não recomendamos que nenhuma loja utilize proxy reverso. Ao utilizar um proxy reverso, todo serviço de borda (CDN) gerenciado e otimizado pela VTEX será deixado de lado, de modo que o serviço da loja é quem ficará responsável pelo fornecimento efetivo do site, sendo este o responsável por fazer suas configurações, acompanhamento e gerenciamento de particularidades como repasse de cabeçalhos, cookies e gestão de cache. Não disponibilizamos documentação dessas especificidades.<br>
A VTEX não se responsabiliza por problemas nesse sistema, seja um CDN próprio, serviço de WAF ou outro recurso que fique à frente de nossos servidores. Não teremos visão de quaisquer falhas, e, portanto, a solução <strong>não</strong> se enquadrará em nossos acordos de SLA.
</div>

Se mesmo após ler o alerta acima você deseja apontar sua própria CDN para a CDN da VTEX, será necessário inserir um proxy reverso em frente aos serviços da VTEX. Para isso, crie as entradas TXT indicadas abaixo. Elas vão servir como entrada de verificação para nos informar que o host de fato aponta para a VTEX. Sem isso, a VTEX não consegue prover navegação.

1. Na zona de DNS do seu domínio, crie uma entrada do tipo TXT em `_{hostname}` com o mesmo valor que seria usado no CNAME.
2. Direcione o tráfego da CDN/WAF para nossos servidores com o valor correspondente ao CNAME do domínio.

Portanto, a configuração deve ficar assim:

- `_{hostname} TXT {hostname}.cdn.vtex.com`
- Direcionar tráfego para `{hostname}.cdn.vtex.com`

Além disso, também será necessário que todo o tráfego de `/.well-known/acme-challenge/*` chegue até a VTEX. Alguns proxys reversos capturam essa rota, e, com isso, não conseguimos emitir ou renovar o certificado SSL.

<div class="alert alert-warning">
A VTEX somente provê navegação se:<br>
- Conseguirmos enxergar que o host aponta para a VTEX (conforme nosso CNAME).<br>
- Conseguirmos emitir/renovar certificados SSL para o host.<br>
Se ambas as condições não forem atendidas, a VTEX deixa de entregar o site, pois fica caracterizado que ele está fora do ar.
</div>
