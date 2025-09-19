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

Uma loja virtual deve ter um único endereço principal, que irá [apontar para os servidores da VTEX](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ) antes do lançamento oficial da loja. Veja [Configurar o domínio da loja](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450) para saber as regras que o endereço precisa cumprir e como cadastrá-lo.

Para permitir o acesso à loja por outros endereços e versões sem subdomínio, é necessário configurar o redirecionamento desses endereços para o endereço principal da loja, cadastrado em **Configurações da conta > Conta > Lojas** no Admin VTEX. Veja exemplos abaixo:

| Endereço | Tipo |
|---|---|
| `www.minhaloja.com.br` | Domínio principal |
| `www.enderecoantigo.com.br` | Redirecionamento |
| `minhaloja.com.br` | Redirecionamento |

## Configurar redirecionamentos

Existem diversas maneiras de configurar redirecionamentos, sendo o uso do `[htaccess](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess)` no servidor uma das mais conhecidas. Além disso, é possível usar um redirecionamento de DNS, disponibilizado por diversos serviços, incluindo provedores de domínio, como o [registro.br](https://registro.br/).

A seguir, apresentaremos instruções para configurar redirecionamentos para o endereço principal da sua loja utilizando a ferramenta [Direcionar](http://direcionar.com.br/), por sua simplicidade de uso.

> ⚠️ O [Direcionar](http://direcionar.com.br/) não é um serviço da VTEX e não funciona com HTTPS. Existem outros serviços similares, e a VTEX não recomenda nenhum específico. A VTEX não se responsabiliza por problemas causados por serviços externos de redirecionamento.

### Redirecionamento de endereço sem subdomínio (como www)

Para acessar a loja por meio de um endereço sem subdomínios, como `www`, é preciso criar um redirecionamento para o endereço principal da sua loja. Por exemplo, para ser possível acessar `http://www.meusite.com` a partir do endereço sem subdomínio `http://meusite.com`, é necessário criar um redirecionamento no seu provedor de DNS conforme as instruções abaixo:

1. Crie um registro do tipo A para a raiz do domínio, geralmente representada por `.`, `@` ou apenas `meusite.com`, apontando para `52.8.174.221` (IP da [Direcionar](http://direcionar.com.br/)).

   |   |   |   |
   |---|---|---|
   | Host Record: <deixe-vazio\> | Type: A | To: 52.8.174.221 |

2. Crie um registro do tipo CNAME de `redirect` (ou `redirect.meusite.com`), apontando para `www.meusite.com.direcionar.com.br`.

  |   |   |   |
  |---|---|---|
  | Host Record: redirect | Type: CNAME | To: www.meusite.com.direcionar.com.br |

Saiba mais sobre situações como essa em [Melhores práticas para acessar a loja sem www](/pt/tutorial/melhores-praticas-para-acessar-a-loja-sem-www--tutorials_4278).

A propagação do redirecionamento pode levar alguns minutos para ser concluída, a depender do provedor de DNS.

### Redirecionamento de um endereço para outro

Para realizar o redirecionamento de um endereço para outro que não compartilha a mesma raiz do domínio, crie uma entrada CNAME no endereço antigo (origem do acesso), seguindo o padrão `{endereçoNovo}.opts-uri.direcionar.com.br`.

Por exemplo, para redirecionar de `www.dominioantigo.com` para `www.novodominio.com.br`:

* Crie uma entrada `www` no domínio `dominioantigo.com` com o CNAME `www.novodominio.com.opts-uri.direcionar.com.br`.

Para redirecionar de `loja.algumendereco.com.br` para `www.site.com`:

* Crie uma entrada `loja` no domínio `algumendereco.com.br` com o CNAME `www.site.com.opts-uri.direcionar.com.br`.

### Redirecionamento de acessos com HTTPS

A VTEX direciona automaticamente endereços `http://` para `https://` . Ainda assim, pode ser necessário redirecionar um endereço `https://` (como uma versão do endereço sem subdomínio ou com outro domínio) para um endereço com `https://`.

Ao acessar uma página com HTTPS, é necessário que o servidor que responde pelo endereço tenha um certificado SSL instalado. A ausência desse certificado faz com que o navegador interprete a conexão como não segura, resultando no bloqueio da requisição. Isso impede o acesso à página desejada e, consequentemente, inviabiliza o redirecionamento para outro endereço.

No [Direcionar](http://direcionar.com.br/), não é possível instalar um certificado SSL para cada domínio a ele apontado. Sendo assim, ele não redireciona acessos originados em HTTPS.

Para lidar com essa limitação, considere os seguintes pontos:

1. Se o domínio de origem não possui subdomínio, como `site.com`, aponte-o para um servidor de gestão da própria loja, ou seja, um servidor físico ou virtual que é administrado pelo próprio usuário ou empresa. Este servidor deve possuir um **certificado SSL instalado para o domínio de origem**, viabilizando o acesso seguro via HTTPS. Acesse [Certificado de segurança (SSL)](/pt/tutorial/certificado-de-seguranca-ssl--tutorials_1308) para mais informações.
2. Defina uma **regra de redirecionamento**. Para usar um servidor de gestão própria para redirecionar acessos com HTTPS, você precisará definir uma regra de redirecionamento no servidor. Ela pode variar conforme o tipo de servidor utilizado (Apache, ASP, nginx). Portanto, para configurar essa regra, você deve saber qual tipo de servidor está sendo usado e aplicar as configurações correspondentes.
