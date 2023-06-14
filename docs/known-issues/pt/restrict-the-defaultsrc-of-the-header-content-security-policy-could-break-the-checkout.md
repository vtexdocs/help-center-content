---
title: 'Restringir o padrão de segurança do cabeçalho A Política de Segurança de Conteúdo pode quebrar o Checkout'
id: 5fQXzMrLchSUENa53MXgf
status: PUBLISHED
createdAt: 2023-03-02T17:29:31.623Z
updatedAt: 2023-03-02T17:29:32.102Z
publishedAt: 2023-03-02T17:29:32.102Z
firstPublishedAt: 2023-03-02T17:29:32.102Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: restringir-o-padrao-de-seguranca-do-cabecalho-a-politica-de-seguranca-de-conteudo-pode-quebrar-o-checkout
locale: pt
kiStatus: Backlog
internalReference: 763359
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A restrição do cabeçalho da Política de Segurança de Conteúdo pode fazer com que os arquivos de checkout não sejam carregados. Por exemplo, a configuração `default-src 'self'` pode fazer com que arquivos provenientes do vtex.com não sejam carregados.


##

## Simulação



1. Conjunto **default-src*** da Política de Segurança de Conteúdo
2. Tente comprar algo através de checkout
3. Veja o erro no console

    Política de Segurança de Conteúdo: as configurações da página bloquearam o carregamento de um recurso em



##

## Workaround


Remover o cabeçalho




