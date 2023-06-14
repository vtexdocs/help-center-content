---
title: 'Configurar acesso sem www'
id: tutorials_4278
status: PUBLISHED
createdAt: 2017-04-27T21:51:11.002Z
updatedAt: 2022-11-14T19:34:05.685Z
publishedAt: 2022-11-14T19:34:05.685Z
firstPublishedAt: 2017-04-27T23:11:15.960Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: configurando-acesso-sem-www
legacySlug: configurando-acesso-sem-www
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

Sua loja virtual deve ter um único endereço principal, que irá [apontar para os servidores da VTEX](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280). Qualquer endereço adicional, seja a sua versão sem `www` (raiz do domínio) ou outros domínios, devem apontar para este único endereço principal.

Veja o exemplo abaixo:

- `www.minhaloja.com.br` - Domínio principal.
- `minhaloja.com.br` - Redirecionamento.
- `www.algumenderecoantigo.com.br` - Redirecionamento.
- `algumenderecoantigo.com.br` - Redirecionamento.
- `loja.algumenderecoantigo.com.br` - Redirecionamento.

O domínio principal da sua loja precisa conter subdomínio, que pode ou não ser `www`. Confira exemplos abaixo:

- `minhaloja.com` - Não pode ser o domínio principal pois não contém subdomínio, mas poderá ser redirecionado.
- `www.minhaloja.com` - Domínio principal válido.
- `loja.minhamarca.com` - Domínio principal válido.

<div class = "alert alert-info">
  Saiba mais sobre como <a href="https://help.vtex.com/pt/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450">configurar o domínio principal da sua loja</a>.
</div>

Este redirecionamento pode ser feito de inúmeras formas, sendo o uso do `htaccess` no servidor uma das mais conhecidas, mas bastante técnica e que depende de outros fatores.

Também existe a possibilidade de usar redirecionamento de DNS, como disponibilizado por diversos serviços, inclusive provedores de domínio, como o [registro.br](https://registro.br/).

Afim de realizar um redirecionamento de DNS de forma simples, você encontra abaixo as instruções para realizar o redirecionamento com o serviço [Direcionar.com.br](http://direcionar.com.br).

<div class="alert alert-warning">
Vale ressaltar que o Direcionar não é um serviço da VTEX e não funciona com HTTPS. Existem outros serviços similares, e a VTEX não recomenda nenhum específico. A VTEX não se responsabiliza por problemas causados por serviços externos de redirecionamento.
</div>

Confira este outro artigo para saber como [configurar redirecionamentos de outros endereços](https://help.vtex.com/pt/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ).

## Criando redirecionamento de domínio sem www

Exemplo: de `meusite.com` para `www.meusite.com`.

- Crie um registro do tipo A para a raiz do domínio (pode ser representada por `.`, `@` ou apenas `meusite.com`) apontando para `52.8.174.221` (IP da [__Direcionar__](http://direcionar.com.br/));
- Crie um registro do tipo CNAME de `redirect` (ou “redirect.meusite.com”) apontando para `www.meusite.com.direcionar.com.br`.
