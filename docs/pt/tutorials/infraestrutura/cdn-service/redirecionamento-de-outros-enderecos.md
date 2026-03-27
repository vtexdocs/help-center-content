---
title: 'Redirecionamento de outros endereços'
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2025-03-25T12:35:48.215Z
publishedAt: 2025-03-25T12:35:48.215Z
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

A seguir, apresentaremos instruções para configurar redirecionamentos para o endereço principal da sua loja utilizando a ferramenta [Redirect-301](https://www.redirect-301.com/pt/), por sua simplicidade de uso.

> ⚠️ O [Redirect-301](https://www.redirect-301.com/pt/) não é um serviço da VTEX e opera sob modelo de assinatura. Existem outras soluções similares no mercado, e a VTEX não recomenda nenhuma ferramenta específica. A VTEX não se responsabiliza por eventuais problemas decorrentes do uso de serviços externos de redirecionamento.

### Redirecionamento de endereço sem subdomínio (como www)

Para acessar a loja por meio de um endereço sem subdomínios, como `www`, é preciso criar um redirecionamento para o endereço principal da sua loja. Por exemplo, para ser possível acessar `https://www.meusite.com` a partir do endereço sem subdomínio `https://meusite.com`, é necessário criar um redirecionamento no seu provedor de DNS conforme as instruções abaixo:

1. Acesse o site da [Redirect-301](https://www.redirect-301.com/pt/) e contrate uma assinatura. Após a confirmação da assinatura, você receberá um token no email cadastrado. Esse token será utilizado na configuração do seu domínio.
2. Crie um registro do tipo A para a raiz do domínio, geralmente representada por `.`, `@` ou apenas `meusite.com`, apontando para `18.215.89.131` (IP da [Redirect-301](https://www.redirect-301.com/pt/)).

   |   |   |   |
   |---|---|---|
   | Host Record: <deixe-vazio\> | Type: A | To: 18.215.89.131 |
3. Crie um registro do tipo TXT `redirect-301` (ou `redirect-301.meusite.com`), com o seguente valor: `token=SEU_TOKEN;to=https://www.meusite.com/`

  |   |   |   |
  |---|---|---|
  | Host Record: redirect-301 | Type: TXT | Value: token=SEU_TOKEN;to=https://www.meusite.com/ |

Saiba mais sobre situações como essa em [Melhores práticas para acessar a loja sem www](/pt/docs/tutorials/melhores-praticas-para-acessar-a-loja-sem-www).

A propagação do redirecionamento pode levar alguns minutos para ser concluída, a depender do provedor de DNS.

### Redirecionamento de um endereço para outro

Por exemplo, para redirecionar de `www.dominioantigo.com` para `www.novodominio.com.br`:

* Crie uma entrada `www` no domínio `dominioantigo.com` do tipo A apontando para  `18.215.89.131` (IP da [Redirect-301](https://www.redirect-301.com/pt/)).
* Crie um registro do tipo TXT `redirect-301.www` (ou `redirect-301.www.dominioantigo.com`), com o seguente valor: `token=SEU_TOKEN;to=https://www.novodominio.com.br/`

Para redirecionar de `loja.algumendereco.com.br` para `www.site.com`:

* Crie uma entrada `loja` no domínio `algumendereco.com.br` do tipo A apontando para  `18.215.89.131` (IP da [Redirect-301](https://www.redirect-301.com/pt/)).
* Crie um registro do tipo TXT `redirect-301.loja` (ou `redirect-301.loja.algumendereco.com.br`), com o seguente valor: `token=SEU_TOKEN;to=https://www.site.com/`

### Redirecionamento de acessos com HTTPS

A VTEX direciona automaticamente endereços `http://` para `https://` . Ainda assim, pode ser necessário redirecionar um endereço `https://` (como uma versão do endereço sem subdomínio ou com outro domínio) para um endereço com `https://`.

Ao acessar uma página com HTTPS, é necessário que o servidor que responde pelo endereço tenha um certificado SSL instalado. A ausência desse certificado faz com que o navegador interprete a conexão como não segura, resultando no bloqueio da requisição. Isso impede o acesso à página desejada e, consequentemente, inviabiliza o redirecionamento para outro endereço.

No [Redirect-301](https://www.redirect-301.com/pt/) é instalado um certificado SSL para cada domínio apontado. Dessa forma, ele redireciona normalmente acessos originados em HTTP e HTTPS, garantindo conexões seguras quando aplicável.
