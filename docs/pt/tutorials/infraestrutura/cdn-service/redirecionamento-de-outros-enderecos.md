---
title: 'Redirecionamento de outros endereços'
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2026-06-13T00:00:00.000Z
publishedAt: 2026-06-13T00:00:00.000Z
firstPublishedAt: 2022-09-19T21:40:22.913Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: redirect-from-other-addresses
legacySlug: 
locale: pt
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

Uma loja virtual deve ter um único endereço principal, que irá [apontar para os servidores da VTEX](/pt/docs/tracks/pre-go-live) antes do lançamento oficial da loja. Veja [Configurar o domínio da loja](/pt/docs/tutorials/configurar-o-dominio-da-loja) para saber as regras que o endereço precisa cumprir e como cadastrá-lo.

Para permitir o acesso à loja por outros endereços e versões sem subdomínio, é necessário configurar o redirecionamento desses endereços para o endereço principal da loja, cadastrado em **Configurações da conta > Conta > Lojas** no Admin VTEX. Veja exemplos abaixo:

| Endereço | Tipo |
|---|---|
| `www.minhaloja.com.br` | Domínio principal |
| `www.enderecoantigo.com.br` | Redirecionamento |
| `minhaloja.com.br` | Redirecionamento |

## Configurar redirecionamentos

Existem diversas maneiras de configurar redirecionamentos, sendo o uso do `[htaccess](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess)` no servidor uma das mais conhecidas. Além disso, é possível usar um redirecionamento de DNS, disponibilizado por diversos serviços, incluindo provedores de domínio, como o [registro.br](https://registro.br/).

A seguir, apresentaremos instruções para configurar redirecionamentos para o endereço principal da sua loja utilizando a ferramenta [Redirect-301](https://www.redirect-301.com/), por sua simplicidade de uso.

> ⚠️ O [Redirect-301](https://www.redirect-301.com/) não é um serviço da VTEX e opera sob modelo de assinatura. Existem outras soluções similares no mercado, e a VTEX não recomenda nenhuma ferramenta específica. A VTEX não se responsabiliza por eventuais problemas decorrentes do uso de serviços externos de redirecionamento.

### Redirecionamento de endereço sem subdomínio (como www)

Para acessar a loja por meio de um endereço sem subdomínios, como `www`, é preciso criar um redirecionamento para o endereço principal da sua loja. Por exemplo, para ser possível acessar `https://www.meusite.com` a partir do endereço sem subdomínio `https://meusite.com`, siga os passos abaixo:

1. Acesse o site da [Redirect-301](https://www.redirect-301.com/) e contrate uma assinatura. Após a confirmação da assinatura, você receberá um email com um link para acessar o painel administrativo em [redirect-301.com/admin](https://www.redirect-301.com/admin).
2. Faça login no [painel administrativo](https://www.redirect-301.com/admin) e clique em **Adicionar redirecionamento**. Informe o domínio de origem (por exemplo, `meusite.com`) e a URL de destino (por exemplo, `https://www.meusite.com/`).
3. No seu provedor de DNS, crie um registro do tipo A para a raiz do domínio, geralmente representada por `.`, `@` ou apenas `meusite.com`, apontando para `18.215.89.131` (IP da Redirect-301).

   |   |   |   |
   |---|---|---|
   | Host Record: <deixe-vazio\> | Type: A | To: 18.215.89.131 |

Após a propagação do DNS, a Redirect-301 provisiona automaticamente um certificado SSL para o seu domínio e o redirecionamento é ativado.

Saiba mais sobre situações como essa em [Melhores práticas para acessar a loja sem www](/pt/docs/tutorials/melhores-praticas-para-acessar-a-loja-sem-www).

A propagação do redirecionamento pode levar alguns minutos para ser concluída, a depender do provedor de DNS.

### Redirecionamento de um endereço para outro

Por exemplo, para redirecionar de `www.dominioantigo.com` para `www.novodominio.com.br`:

1. Faça login no [painel administrativo da Redirect-301](https://www.redirect-301.com/admin) e clique em **Adicionar redirecionamento**. Informe `www.dominioantigo.com` como domínio de origem e `https://www.novodominio.com.br/` como URL de destino.
2. No seu provedor de DNS, crie uma entrada `www` no domínio `dominioantigo.com` do tipo A apontando para `18.215.89.131` (IP da Redirect-301).

Para redirecionar de `loja.algumendereco.com.br` para `www.site.com`:

1. No [painel administrativo da Redirect-301](https://www.redirect-301.com/admin), adicione `loja.algumendereco.com.br` como domínio de origem com `https://www.site.com/` como URL de destino.
2. No seu provedor de DNS, crie uma entrada `loja` no domínio `algumendereco.com.br` do tipo A apontando para `18.215.89.131` (IP da Redirect-301).

### Redirecionamento de acessos com HTTPS

A VTEX direciona automaticamente endereços `http://` para `https://`. Ainda assim, pode ser necessário redirecionar um endereço `https://` (como uma versão do endereço sem subdomínio ou com outro domínio) para um endereço com `https://`.

Ao acessar uma página com HTTPS, é necessário que o servidor que responde pelo endereço tenha um certificado SSL instalado. A ausência desse certificado faz com que o navegador interprete a conexão como não segura, resultando no bloqueio da requisição. Isso impede o acesso à página desejada e, consequentemente, inviabiliza o redirecionamento para outro endereço.

No [Redirect-301](https://www.redirect-301.com/), um certificado SSL é provisionado automaticamente para cada domínio assim que o DNS aponta para o serviço. Dessa forma, ele redireciona normalmente acessos originados em HTTP e HTTPS, garantindo conexões seguras quando aplicável.
