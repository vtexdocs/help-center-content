---
title: 'Configurações'
id: 7wFsbWgN4rnZsbjhv8IItX
status: PUBLISHED
createdAt: 2022-12-09T19:31:06.005Z
updatedAt: 2025-03-20T21:48:37.094Z
publishedAt: 2025-03-20T21:48:37.094Z
firstPublishedAt: 2022-12-09T22:07:58.382Z
contentType: trackArticle
productTeam: Reliability
slugEN: settings
locale: pt
trackId: 4Ns5FxIiksmjsdX2yOTduM
trackSlugPT: go-live
---

Neste estágio, você deve ajustar configurações que não dependem da data prevista para o go-live. Portanto é indicado que as realize antes de seguir para os estágios seguintes.

## Conferir domínio nos CDNs

A VTEX usa o provedor de CDN **Cloudfront** nas lojas. É importante que o domínio da sua loja não esteja cadastrado neste serviço no momento do apontamento. Do contrário, haverá falha no provisionamento de CDN para sua loja e, consequentemente, no go-live.

Portanto, se você tem o domínio da loja registrado na plataforma da **Cloudfront**, remova este registro antes de realizar o apontamento de DNS para a VTEX.

<div class="alert alert-warning">
Se não for possível remover o registro do domínio da sua loja na plataforma <strong>Cloudfront</strong>, entre em contato com o <a href="https://help.vtex.com/pt/support">suporte VTEX</a> explicando a situação. Dessa forma, o time da VTEX irá te auxiliar para garantir o bom funcionamento da loja no go-live.
</div>

## Configurar registro CAA

<div class="alert alert-warning">
A configuração de registros de CAA como descrita nesta seção só é necessária caso haja registro de CAA no seu servidor de DNS. Caso contrário, siga para o próximo tópico deste guia.
</div>

Registros CAA indicam quais autoridades certificadoras (CAs) estão autorizadas a gerar e renovar certificados que atestam a identidade do seu domínio. A configuração adequada desses registros é necessária para que seja possível gerar os [certificados SSL](/pt/tutorial/certificado-de-seguranca-ssl-a-que-se-refere-e-como-contratar--tutorials_1308) e usar a CDN da VTEX.

Você deve garantir que os registros CAA contém a seguinte entrada:

```
domain.com. CAA 0 issue letsencrypt.org
```

Isso significa que a autoridade certificadora **Let’s Encrypt** pode emitir certificados para o domínio `domain.com`. Não há conflito caso seja necessário autorizar alguma outra autoridade certificadora. O importante é que esta esteja autorizada.

Outra alternativa, embora não recomendada, seria não incluir registros CAA no seu servidor DNS - isso sinalizaria que todas autoridades certificadoras estariam autorizadas a emitir e renovar certificados para o seu domínio.

<div class="alert alert-info">
Esses tipos de entrada podem não estar disponíveis na interface do seu gerenciador de DNS, mas muitas vezes é possível gerenciá-los através de chamados no suporte da ferramenta específica.
</div>

Para facilitar o trabalho de criar/verificar seus registros CAA, você pode usar o [CAA Record Helper by SSLMate](https://sslmate.com/caa/). O programa [DiG](https://www.hostinger.com/tutorials/how-to-use-the-dig-command-in-linux/) também pode ajudar na verificação dos registros, através do comando `dig domain.com CAA` - um status `SERVFAIL` pode indicar não-conformidade do seu servidor DNS.

<div class = "alert alert-info">
Saiba mais:
<p>
<ul>
<li><a href="https://sslmate.com/caa/">CAA Record Helper by SSLMate</a></li>
<li><a href="https://letsencrypt.org/docs/caa/">Let's Encrypt: Certificate Authority Authorization (CAA)</a></li>
<li><a href="https://sslmate.com/caa/about">SSL Mate: About CAA</a></li>
</ul>
</p>
</div>

## Colocar conta em produção

Para colocar sua loja em produção, é necessário primeiro que sua conta esteja em produção. Para colocar a conta em produção, siga os passos abaixo:

1. Acesse o Admin VTEX.
2. Clique no **avatar do seu perfil.**
3. Clique em **Configurações da conta** > **Conta.**
4. Clique em **Ativar em produção** na caixa de aviso.
5. Na caixa de texto que será exibida, assinale a opção **Eu entendo o impacto desta ação.**
6. Clique no botão `Confirmar`.
