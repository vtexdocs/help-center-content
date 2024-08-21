---
title: 'Redirecionamento de outros endereços'
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2022-11-14T19:37:01.861Z
publishedAt: 2022-11-14T19:37:01.861Z
firstPublishedAt: 2022-09-19T21:40:22.913Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: redirecionamento-de-outros-enderecos
locale: pt
legacySlug: 
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

Sua loja virtual deve ter um único endereço principal, que irá [apontar para os servidores da VTEX](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280). Caso deseje usar outros domínios, devem apontar para este único endereço principal.

Veja o exemplo abaixo:

- `www.minhaloja.com.br` - Domínio principal.
- `www.algumenderecoantigo.com.br` - Redirecionamento.

Esse redirecionamento pode ser feito de inúmeras formas, sendo o uso do `htaccess` no servidor uma das mais conhecidas. Mas por ser uma solução bastante técnica e que depende de outros fatores, sugerimos o uso do serviço [Direcionar.com.br](http://direcionar.com.br).

>⚠️ ** Vale ressaltar que o Direcionar não é um serviço da VTEX e não funciona com HTTPS**. Existem outros serviços similares, e você é livre para escolher a opção que mais lhe convenha.

Este guia contém as instruções para que você faça redirecionamentos para o endereço principal da sua loja. Confira este outro artigo para saber como [configurar acesso sem www](https://help.vtex.com/pt/tutorial/configurando-acesso-sem-www--tutorials_4278).

## Redirecionar de um endereço para outro qualquer

Nos casos em que desejar redirecionar de um endereço para outro, desde que não seja a raiz do domínio, bastará uma entrada CNAME no endereço antigo (origem do acesso) com o padrão `{endereço-novo}.opts-uri.direcionar.com.br`.

Por exemplo, de "www.dominioantigo.com" para "www.novodominio.com.br":
- criar entrada `www` no domínio `dominioantigo.com` com o CNAME `www.novodominio.com.opts-uri.direcionar.com.br`.

De "loja.algumendereco.com.br" para "www.site.com":
- criar entrada `loja` no domínio `algumendereco.com.br` com o CNAME `www.site.com.opts-uri.direcionar.com.br`.

## Redirecionamento de acessos com HTTPS

Ao acessar qualquer página com HTTPS, é necessário que o servidor que responde pelo endereço tenha um certificado SSL instalado. Caso contrário, a requisição será barrada pelo navegador e não haverá redirecionamento.

No Direcionar.com.br, apresentado acima, não é possível instalar um certificado SSL para cada domínio a ele apontado. Sendo assim, __ele não redireciona acessos originados em HTTPS__.

E então, qual é a solução?

Para atender a este cenário é necessário recorrer a um método clássico: 

1. Se o domínio de origem é algo como "site.com", sem `www`, ou ainda outro subdomínio, você precisa apontá-lo para um __servidor de gestão da própria loja__;
2. Este servidor, por sua vez, deve ter um __certificado SSL instalado para o domínio de origem__, assim permitindo HTTPS;
3. Por fim, é preciso haver uma __regra de redirecionamento__, que varia conforme cada tipo de servidor utilizado (Apache, ASP, nginx). Para configurar essa regra, você deve saber qual tipo de servidor está sendo usado e aplicar as configurações correspondentes.
