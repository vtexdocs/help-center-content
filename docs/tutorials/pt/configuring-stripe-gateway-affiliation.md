---
title: 'Configurar a afiliação de gateway Stripe'
id: fwF2wk2FQKrODrWWkvSLO
status: PUBLISHED
createdAt: 2021-10-25T16:01:40.789Z
updatedAt: 2023-03-22T19:17:05.286Z
publishedAt: 2023-03-22T19:17:05.286Z
firstPublishedAt: 2021-10-25T17:34:52.274Z
contentType: tutorial
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slug: configurar-a-afiliacao-de-gateway-stripe
locale: pt
legacySlug: configurar-a-afiliacao-de-gateway-stripe
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A [Stripe](https://stripe.com/br) é uma plataforma de pagamentos que oferece um sistema integrado com foco no recebimento de pagamentos online e qualquer tipo de transação financeira comum a ecommerces e outros sites da web.

<div class="alert alert-warning">
A integração da sua loja com a Stripe é feita por meio de uma <strong>Application Key</strong> e <strong>Application Token</strong>. Para obter esses dados, primeiramente <a href="https://dashboard.stripe.com/register" target="_blank">crie sua conta na plataforma</a> e, ao finalizar, acesse <a href="https://stripe.com/docs/keys" target="_blank"> esta documentação da Stripe</a> para ter acesso à sua <strong>Chave publicável</strong> e <strong>Chave secreta</strong>. Elas são mandatórias para as configurações no ambiente VTEX.
</div>

A Stripe suporta pagamentos em mais de 40 países. A lista de países disponíveis pode ser acessada no [site da Stripe](https://stripe.com/br/enterprise).

Para processar seus pagamentos com a Stripe, você precisa:

1. [Configurar a Stripe](#configurar-a-stripe)
2. [Configurar condições de pagamento](#configurar-condicao-de-pagamento)

## Configurar a Stripe

Siga os passos abaixo para a configuração no ambiente VTEX.

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Em **Afiliações de gateway**, clique no ícone "**+**".
3. Busque pelo conector **StripeConnector**, e clique sobre ele.
4. Na página seguinte, preencha os campos abaixo com as seguintes informações:
<ol><br/>
  <li><strong>Application Key:</strong> Chave publicável que você obteve no <a href="https://dashboard.stripe.com/">dashboard da sua conta na Stripe</a>.
  <li><strong>Application Token:</strong> Chave secreta que você obteve no <a href="https://dashboard.stripe.com/">dashboard da sua conta na Stripe</a>.
</ol>
5. Clique em **Salvar**.

Após a configuração no ambiente VTEX, você também precisa configurar o Webhook na sua conta da Stripe.

1. Acesse o [dashboard da sua conta na Stripe](https://dashboard.stripe.com/).
2. Clique no botão **Desenvolvedores**.
3. Clique na aba **Webhooks**.
4. Clique no botão **Adicione um endpoint**.
5. No campo **URL do endpoint**, adicione a URL de endpoint da sua loja VTEX no formato `https://{nome-da-conta}.myvtex.com/_v/notifications` substituindo `{nome-da-conta}` pelo nome da sua conta VTEX.
6. Clique em **+ Selecionar eventos**.
7. Adicione os eventos que devem ser escutados.
8. Clique em **Adicionar endpoint**.

## Configurar condição de pagamento

Ao concluir as etapas indicadas, a Stripe estará configurada na sua loja. Assim, ao cadastrar uma condição de pagamento, ela vai estar disponível no campo **Processar com a afiliação** (desde que o meio de pagamento seja compatível com a Stripe). 

Para definir condições de pagamento, acesse o artigo [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455).

## Configurar Google Pay

O conector Stripe permite adicionar o Google Pay como método de pagamento no checkout da sua loja.Com o conector Stripe configurado, você pode adicionar o Google Pay com os seguintes passos:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Em **Condições de pagamento**, clique no ícone “**+**”.
3. Busque pela condição **Google Pay**, e clique sobre ele.
4. Clique no botão Status para ativar essa condição de pagamento.
5. Clique em **Salvar**.

Após esse procedimento, o Google Pay aparecerá no checkout da loja como um dos métodos de pagamento disponíveis.

## Configurar Apple Pay

O conector Stripe permite adicionar o Apple Pay como método de pagamento no checkout da sua loja. 

<div class="alert alert-warning">
O Apple Pay funciona atualmente somente nos sistemas operacionais MacOs e IOS, e no navegador Safari. Para maiores informações, acesse <a href="https://support.apple.com/pt-br/HT208531">Dispositivos compatíveis com o Apple Pay</a>.
</div>

Com o conector Stripe configurado, você pode adicionar o Apple Pay com os seguintes passos:

1. Acesse o [dashboard da sua conta na Stripe](https://dashboard.stripe.com/settings/payments) na seção de configuração de pagamentos.
2. Em **Settings**, clique em **Payment Methods**.
3. Clique em **Apple Pay > Configure** e depois em **Add to new domain**.
4. Insira o domínio público do website da sua loja.
5. Clique em **Baixar arquivo de verificação** para salvá-lo em seu dispositivo.
6. Crie as credenciais [appkey e apptoken](https://help.vtex.com/pt/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet#).
7. Faça uma chamada ao endpoint para enviar o arquivo de verificação baixado anteriormente, adicionando no header as credenciais criadas e o endereço do seu domínio público (https://{{dominioPublicodoSite}}/well-known/raw/apple-developer-merchantid-domain-association).
8. Clique em **Add**.
9. Acesse o **Admin** VTEX.
10. Clique em **Pagamentos**.
11. Em seguida, clique em **Configurações**.
12. Na aba **Condições de pagamento**, clique no botão **+**.
13. Clique em **Apple Pay**.
14. Preencha o campo **Nome da regra** com um nome de sua preferência para identificação.
15. Clique no botão **Status** para ativar essa condição de pagamento.
16. No campo **Processar com a afiliação**, selecione a opção Stripe.
17. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa **Usar Antifraude**.
18. Escolha se os pagamentos serão à vista ou parcelados.
19. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais).
20. Clique em **Salvar**.

Após esse procedimento, o Apple Pay aparecerá no checkout da loja como um dos métodos de pagamento disponíveis.
