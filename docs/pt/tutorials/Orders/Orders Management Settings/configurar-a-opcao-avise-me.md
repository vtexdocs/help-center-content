---
title: 'Configurar a opção Avise-me'
id: 2VqVifQuf6Co2KG048Yu6e
status: PUBLISHED
createdAt: 2017-10-17T20:54:15.822Z
updatedAt: 2023-03-29T20:36:18.980Z
publishedAt: 2023-03-29T20:36:18.980Z
firstPublishedAt: 2017-10-17T20:57:40.778Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: setting-up-the-notify-me-option
locale: pt
legacySlug: configurar-o-avise-me
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

<div class="alert alert-warning">
  <p> Este artigo explica como configurar o <strong>Avise-me</strong> em lojas que utilizam o <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj">CMS Portal Legado</a>. Em lojas que utilizam <a href="https://developers.vtex.com/vtex-developer-docs/docs/what-is-vtex-io">VTEX IO</a>, a configuração precisa ser feita seguindo os passos do guia <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-availability-notify">Availability Notify</a>.</p>
</div>

Quando um produto está fora de [estoque](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139), o lojista pode optar por disponibilizar para o cliente o **Avise-me**. Essa funcionalidade permite que os clientes interessados sejam notificados por email quando o item voltar a ficar disponível.

Veja abaixo um exemplo de como a opção **Avise-me** é exibida em uma loja. Para receber uma notificação quando o item estiver disponível para venda, o cliente deve digitar o nome e o email nos campos destacados e, em seguida, clicar no botão `Enviar`.

![aviseme-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/Orders%20Management%20Settings/configurar-a-opcao-avise-me_1.png)

Assim que o item é reposto no estoque da loja, o sistema envia um email para o cliente automaticamente, informando que o produto já está disponível para compra. 

Neste artigo, vamos detalhar as configurações necessárias para habilitar o **Avise-me**:

* [Exibir a opção Avise-me](#exibir-a-opcao-avise-me)
* [Configurar o template da página de produto](#configurar-o-template-da-pagina-de-produto)
* [Configurar template de email de notificação](#configurar-template-de-email-de-notificacao)

## Exibir a opção Avise-me

Para habilitar a exibição da opção **Avise-me**, siga o passo a passo abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Configurações**, ou digite *Configurações* na barra de busca no topo da página e selecione *Configurações da loja / Storefront*.
2. Clique na aba **Gerais**.
3. Marque a opção <a class="far fa-check-square"></a> `Exibe Avise-me quando produto esgotar`.
4. Clique em `Salvar`.

### Configurar o template da página de produto

Em seguida, é necessário configurar o template da página de produto para exibir a opção **Avise-me**. Siga as instruções abaixo:

1. No Admin VTEX, acesse **Storefront > Layout**, ou digite **Layout** na barra de busca no topo da página.
2. Clique na pasta **CMS**.
3. Clique na pasta **HTML Templates**.
4. Clique no template **Product**.
5. Use o controle `vtex.cmc:BuyButton` no template da página **Product**, conforme descrito abaixo:

```html
<div class="buy-button-box hidden-xs">
	<vtex.cmc:BuyButton />
</div><!-- .buy-button-box -->
```

## Configurar template de email de notificação

Para configurar o template de emails de **Avise-me** a serem enviados para o cliente, siga as instruções abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Templates de email > Templates**, ou digite **Templates** na barra de busca no topo da página.
2. Digite na busca o termo “Let me know”.
3. Selecione o template **Let me know**.
4. Acesse a caixa de texto **HTML** e edite o código conforme desejar.
5. Clique em `Salvar`.

## Saiba mais

* [Exportar os clientes cadastrados na notificação de disponibilidade (Avise-me)](/pt/tutorial/como-exportar-os-clientes-cadastrados-no-avise-me--3Yr19DMQukGeIImUeCwIao)
* [Inserir imagens no email de "Avise-me"](/pt/tutorial/inserir-imagens-no-email-de-avise-me--3soCXGcE3XBPsnPhxJh2DY)
* [O que fazer quando o "Avise-me" não está sendo exibido](/pt/faq/o-que-fazer-quando-o-avise-me-nao-esta-sendo-exibido--oNb6JK1LPMOQwYsecKKCs)
