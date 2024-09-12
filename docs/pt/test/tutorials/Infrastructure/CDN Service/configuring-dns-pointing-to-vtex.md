---
title: 'Configurando o apontamento de DNS para a VTEX'
id: tutorials_4280
status: ARCHIVED
createdAt: 2017-04-27T21:51:26.318Z
updatedAt: 2022-12-12T12:21:42.161Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:15.230Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: configurando-o-apontamento-de-dns-para-a-vtex
locale: pt
legacySlug: processo-de-ssl-e-golive
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

As informações a seguir são importantes ao se apontar um domínio à VTEX. Este procedimento é realizado ao se colocar uma loja no ar, alterar o endereço da loja ou simplesmente acrescentar mais um endereço.

Também é nesta etapa que o certificado SSL de sua loja é gerado, o que é essencial para fornecer as páginas em HTTPS.

Veja as etapas:

1. [Antes de começar](#antes-de-começar).
2. [Configurar registros CAA](#configurar-registros-caa).
4. [Apontar o DNS](#apontamento-de-dns).
4. [Gerar certificado SSL](#gerar-certificado-ssl).

## Antes de começar

Antes de apontar um domínio à VTEX, é necessário garantir o cumprimento dos requisitos citados abaixo.

>⚠️ Se você estiver migrando a sua loja da **Loja Integrada** para a VTEX, contate o nosso suporte antes de apontar o DNS. É necessário liberar o domínio da Loja Integrada para que ele seja usado na loja VTEX.

### Cadastro de domínio na VTEX

Você deve [cadastrar o domínio no Gerenciamento da conta](https://help.vtex.com/pt/tutorial/configurando-dominios-no-license-manager). É isso que conecta o endereço à loja.

### Loja em produção

Garanta que a sua loja [está em produção](http://help.vtex.com/tutorial/passando-a-loja-para-producao/). Caso contrário, a plataforma não fornecerá as páginas do site.

### Evite duplicidade de domínios com os provedores de CDN

A VTEX usa dois provedores de CDN nas lojas: **Cloudfront** e **Azion**. É importante que o domínio da sua loja não esteja cadastrado nestes serviços no momento do apontamento. Do contrário, haverá falha no provisionamento de CDN para sua loja e, consequentemente, no Go live.

Portanto, se você tem o domínio da loja registrado na plataforma da **Cloudfront** ou **Azion**, remova este registro antes de realizar o apontamento de DNS para a VTEX.

>⚠️ Se não for possível remover o registro do domínio da sua loja nas plataformas **Cloudfront** ou **Azion** entre em contato com o [suporte VTEX](https://help.vtex.com/pt/support) explicando a situação. Dessa forma, o time da VTEX irá te auxiliar para garantir o bom funcionamento da loja no Go live.

## Configurar registros CAA

>⚠️ A configuração de registros de CAA como descrita nesta seção só é necessária caso haja registro de CAA no seu servidor de DNS. Caso contrário, siga para o próximo tópico deste guia.

Registros CAA indicam quais autoridades certificadoras (CAs) estão autorizadas a gerar e renovar certificados que atestam a identidade do seu domínio. A configuração adequada desses registros é necessária para que seja possível gerar os [certificados SSL](https://help.vtex.com/pt/tutorial/certificado-de-seguranca-ssl-a-que-se-refere-e-como-contratar--tutorials_1308) e usar a CDN da VTEX.

Você deve garantir que os registros CAA contém a seguinte entrada:

```
domain.com. CAA 0 issue letsencrypt.org
```

Isso significa que a autoridade certificadora **Let’s Encrypt** pode emitir certificados para o domínio `domain.com`. Não há conflito caso seja necessário autorizar alguma outra autoridade certificadora. O importante é que esta esteja autorizada.

Outra alternativa, embora não recomendada, seria não incluir registros CAA no seu servidor DNS - isso sinalizaria que todas autoridades certificadoras estariam autorizadas a emitir e renovar certificados para o seu domínio.

>ℹ️ Esses tipos de entrada podem não estar disponíveis na interface do seu gerenciador de DNS, mas muitas vezes é possível gerenciá-los através de chamados no suporte da ferramenta específica.

Para facilitar o trabalho de criar/verificar seus registros CAA, você pode usar o [CAA Record Helper by SSLMate](https://sslmate.com/caa/). O programa [DiG](https://www.hostinger.com/tutorials/how-to-use-the-dig-command-in-linux/) também pode ajudar na verificação dos registros, através do comando `dig domain.com CAA` - um status `SERVFAIL` pode indicar não-conformidade do seu servidor DNS.

>ℹ️ Saiba mais:
>
> *[CAA Record Helper by SSLMate](https://sslmate.com/caa/)
>
> *[Let's Encrypt: Certificate Authority Authorization (CAA)](https://letsencrypt.org/docs/caa/)
>
> *[SSL Mate: About CAA](https://sslmate.com/caa/about)
> 

## Apontamento de DNS

As etapas necessárias para completar o apontamento de DNS da sua loja dependem do CMS utilizado para a construção da frente de loja.

Caso tenha utilizado o [CMS Legado Portal](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), realize somente a etapa de [apontamento comum de DNS](#apontamento-comum-de-dns).

Mas se sua frente de loja foi feita com [CMS IO](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), você precisa solicitar o [apontamento interno para CMS IO](#apontamento-interno-para-cms-io) e depois realizar o [apontamento comum de DNS](#apontamento-comum-de-dns).

### Apontamento interno para CMS IO

Se sua frente de loja é feita com [CMS IO](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), solicite o apontamento interno de DNS para CMS IO por meio de um ticket no [suporte VTEX](https://help.vtex.com/pt/support). Este processo pode levar até três dias úteis.

Após receber a confirmação do apontamento interno, você deverá realizar o [apontamento comum de DNS](#apontamento-comum-de-dns) em até cinco dias. Do contrário o apontamento interno será excluído e você precisará refazer esta solicitação.

>ℹ️ Saiba mais sobre [Go live com Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-go-live) ou [Migração do CMS legado para Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-migrating-storefront-from-legacy-to-io).

### Apontamento comum de DNS

Na zona de DNS do seu domínio, você deve criar uma entrada do tipo CNAME no subdomínio desejado para o seguinte destino:
```
{domínio}.cdn.vtex.com
```

Note que o `{domínio}` indicado acima deve ser o mesmo que você [cadastrou na VTEX](#cadastro-de-dominio-na-vtex).

>⚠️ Caso você utilize a Cloudflare como zona de DNS, pode ser necessário desabilitar o proxy de DNS e, consequentemente, desativar os serviços de CDN e WAF da Cloudflare. Mais informações podem ser encontradas no artigo [Como desabilitar o proxy no Cloudflare](https://help.vtex.com/pt/tutorial/disable-cloudflare-proxy--75QqsXAqR7NdkRc1GZPiXb).

Alguns exemplos:

```
Endereço da loja: www.site.com
  - Entrada (subdomínio): www
  - Tipo: CNAME
  - Destino: www.site.com.cdn.vtex.com
```
```
Endereço da loja: www.site.com.br
  - Entrada (subdomínio): www
  - Tipo: CNAME
  - Destino: www.site.com.br.cdn.vtex.com
```
```
Endereço da loja: loja.minhaempresa.com
  - Entrada (subdomínio): loja
  - Tipo: CNAME
  - Destino: loja.minhaempresa.com.cdn.vtex.com
```
```
Endereço da loja: www.loja.minhaempresa.com.br
  - Entrada (subdomínio): www.loja
  - Tipo: CNAME
  - Destino: www.loja.minhaempresa.com.br.cdn.vtex.com
```

Atente-se que o início do domínio ("loja", "www", "www.loja" ou qualquer outro) e a terminação (".com", ".com.br", ".com.ar" ou qualquer outro) fazem parte do `{hostname}`, e devem estar no CNAME de destino.

>❗ Não pode haver nenhum apontamento tipo A coexistindo com o CNAME descrito acima. A coexistência destes dois apontamentos pode causar problemas no Go Live da sua loja. Mantenha apenas o apontamento CNAME descrito acima.

## Gerar certificado SSL

É necessário notificar o sistema que um novo domínio foi apontado à VTEX. Enquanto isso não for feito, não será possível navegar no site.

Assim que for feita a notificação, a loja já estará disponível, mas ainda aguardando a emissão do certificado SSL, o que deve acontecer em até dez minutos.

Caso ocorra alguma falha ao gerar o certificado, seja por atraso na propagação do domíno ou algum tipo de erro, ao acessar o site você verá uma mensagem de que o certificado SSL está sendo gerado.

Essa notificação é realizada acessando o __Gerenciamento da conta__, na aba __Contas__, entrando na sua conta específica e clicando em __Salvar__ (mesmo sem alterar nada), no fim da página.

O certificado é gerado por meio da [Let's Encrypt](https://letsencrypt.org/) e tem validade de 90 dias. Porém, sua renovação é feita automaticamente em até cinco dias antes do vencimento, bastando que o domínio esteja apontado corretamente para a VTEX.

---

>ℹ️ A propagação do apontamento de DNS demora de 24 a 48 horas para ocorrer completamente, o que significa que o endereço configurado pode não estar acessível a todas as pessoas logo após a configuração.

As instruções acima tratam apenas do apontamento de um domínio principal à sua loja na VTEX. É importante que, caso sua loja tenha outros domínios, eles sejam redirecionados a um único domínio principal. 

Nisso, consideramos também o seu domínio sem www (ou subdomínio correspondente, como os casos de quem usa “loja.dominio.com”). Saiba mais no artigo [Configurar acesso sem www](/pt/tutorial/configurando-acesso-sem-www).
