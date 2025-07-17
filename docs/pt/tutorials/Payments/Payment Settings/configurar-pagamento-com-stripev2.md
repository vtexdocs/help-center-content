---
title: 'Configurar pagamento com StripeV2'
id: 3XG7Vrb0GGhdN40ICNKQoN
status: PUBLISHED
createdAt: 2025-03-07T15:20:58.287Z
updatedAt: 2025-05-30T14:58:59.497Z
publishedAt: 2025-05-30T14:58:59.497Z
firstPublishedAt: 2025-03-07T15:34:55.639Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-stripev2
locale: pt
legacySlug: configurar-pagamento-com-stripev2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento StripeV2. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Visa, American Express, Diners, Elo, Hipercard, Mastercard, BankInvoice, Stripe, Google Pay, ApplePay, OXXO, Discover, Affirm, Klarna, ZIP, Blik, Ideal, SPEI, MultiBanco, Afterpay, Bancontact, EPS, FPX, giropay e P24.

## Modos de operação

O provedor StripeV2 pode processar transações de pagamentos em lojas VTEX de duas maneiras diferentes:

- __VTEX Checkout Experience__: pode ser utilizado para cartões de crédito, débito e meios de pagamento desenvolvidos com o [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework). Essa opção é recomendado se você deseja configurar outros gateways de pagamento para diferentes bandeiras de cartão ou realizar transações utilizando o checkout nativo da VTEX.

- __VTEX with Stripe Payment Element Experience__: aplicativo de pagamento baseado no [Stripe’s Optimized Checkout Suite (OCS)](https://support.stripe.com/questions/what-is-stripe-s-optimized-checkout-suite-(ocs)?locale=en-US). Essa opção é recomendada caso você pretenda usar exclusivamente o Stripe para processar todas as bandeiras de cartões ou se deseje ter acesso ao [Stripe Link](https://stripe.com/payments/link), uma solução que oferece acesso rápido a diversos meios de pagamento com apenas um clique.

<div class="alert alert-info">
  O <b>VTEX with Stripe Payment Element Experience</b> utiliza o <a href="https://docs.stripe.com/payments/elements">Stripe Payment Elements</a> Checkout, proporcionando acesso aos meios de pagamento atuais e futuros suportados pela Stripe. Nessa opção, a configuração dos meios de pagamento deve ser realizada diretamente no <a href="https://dashboard.stripe.com/settings/payment_methods">Stripe Dashboard</a>.
</div>

<div class="alert alert-info">
Para informações sobre a lista completa de meios de pagamento operados por cada um dos modos de operação da StripeV2, entre em contato com os times de suporte da <a href="stripe-support@vinneren.com.mx">Vinneren</a> ou <a href="https://support.stripe.com/contact/login">Stripe</a>.
</div>

Após determinar com qual dos modos deseja operar em sua loja, siga as instruções de um dos procedimentos abaixo:

- [Configurando o VTEX Checkout Experience](#configurar-o-vtex-checkout-experience)
- [Configurando o VTEX with Stripe Payment Element Experience](#configurar-o-vtex-with-stripe-payment-element-experience) 

<div class="alert alert-warning">
As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Stripe para informações atualizadas.
</div>

## Configurar o VTEX Checkout Experience

Para utilizar o __VTEX Checkout Experience__ em sua loja, é necessário:

- [Instalar os aplicativos da Stripe](#instalar-apps-da-stripe)
- [Configurar StripeV2 na VTEX](#configurar-stripev2-na-vtex)
- [Configurar condições de pagamento](#configurar-condicao-de-pagamento)

### Instalar apps da Stripe

Para instalar os apps da Stripe em sua loja, siga os passos abaixo:

<blockquote><ui>1. Acesse o <a href="https://dashboard.stripe.com/login">dashboard de sua conta na Stripe</a> e instale o app <a href="https://marketplace.stripe.com/apps/VTEX-payments-plugin-v2">VTEX Payments Plugin V2</a> para obter uma OAuth 2.0 type key.</ui>

<blockquote><ui>2. Desinstale versões anteriores de plugins da Stripe em sua loja.</ui>

<blockquote><div class="alert alert-warning">
Antes de iniciar a instalação do app Payment Provider Framework, verifique com a equipe de suporte da <a href="stripe-support@vinneren.com.mx">Vinneren</a> ou <a href="https://support.stripe.com/contact/login">Stripe</a> os números das versões mais atuais do aplicativo.
</div></blockquote>

<blockquote><ui>3. No <a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install">VTEX IO CLI</a>, execute os comandos abaixo para instalar os apps da Stripe:</ui>

  <blockquote><ui>- <b>Payment Provider Framework</b>: <code>vtex install stripe.stripe-payments-provide@{{current-app-version}}</code>. A informação {{current-app-version}} deve ser substituída pela a versão atual do aplicativo, por exemplo: <code>vtex install stripe.stripe-payments-provide@0.0.49</code>.</ui></blockquote>
  <blockquote><ui>- <b>Payment App</b>: <code>vtex install stripe.stripe-payment-app</code>.</ui></blockquote>

### Configurar StripeV2 na VTEX

Para configurar a integração da StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __StripeV2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Campos do provedor__, na opção __Mode__, selecione __Float__.
5. Em __Test Mode__, selecione a opção __True__ ou __False__.  
6. Clique em `Salvar`.

### Configurar condição de pagamento

Para configurar uma condição de pagamento para o StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão +.
3. Clique sobre o novo do meio de pagamento que deseje utilizar.
4. Na tela de configuração, ative a condição clicando em __Status__.
5. Em __Processar com o provedor__, selecione a opção __StripeV2__.
6. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
7. Caso necessário, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456).
8. Clique em `Salvar`.

Caso deseje mais informações sobre os procedimentos de instalação do __VTEX Checkout Experience__, acesse a [documentação pública da Stripe na Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

## Configurar o VTEX with Stripe Payment Element Experience

Para utilizar o VTEX with __Stripe Payment Element Experience__ em sua loja, é necessário:

- [Instalar os aplicativos da Stripe](#instalar-apps-da-stripe)
- [Configurar StripeV2 na VTEX](#configurar-stripev2-na-vtex)
- [Configurar condições de pagamento](#configurar-condicao-de-pagamento)
- [Configurar webhook na conta Stripe](#configurar-webhook-na-conta-stripe)

### Instalar apps da Stripe

Para instalar os apps da Stripe em sua loja, siga os passos abaixo:

<blockquote><ui>1. Acesse o <a href="https://dashboard.stripe.com/login">dashboard de sua conta na Stripe</a> e instale o app <a href="https://marketplace.stripe.com/apps/vtex-elements-checkout">VTEX with Stripe Payment Element Experience</a> para obter uma RAK key (Restricted API Key).</ui>

<blockquote><ui>2. Desinstale versões anteriores de plugins da Stripe em sua loja.</ui>

<blockquote><div class="alert alert-warning">
Antes de iniciar a instalação do app Payment Provider Framework, verifique com a equipe de suporte da <a href="stripe-support@vinneren.com.mx">Vinneren</a> ou <a href="https://support.stripe.com/contact/login">Stripe</a> os números das versões mais atuais do aplicativo.
</div></blockquote>

<blockquote><ui>3. No <a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install">VTEX IO CLI</a>, execute os comandos abaixo para instalar os apps da Stripe:</ui>

  <blockquote><ui>- <b>Payment Provider Framework</b>: <code>vtex install stripe.stripe-payments-provide@{{current-app-version}}</code>. A informação {{current-app-version}} deve ser substituída pela a versão atual do aplicativo, por exemplo: <code>vtex install stripe.stripe-payments-provide@0.0.49</code>.</ui></blockquote>
  <blockquote><ui>- <b>Payment App</b>: <code>vtex install stripe.stripe-payment-app</code>.</ui></blockquote>  

### Configurar StripeV2 na VTEX

Para configurar a integração da StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __StripeV2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Chave de aplicação__, insira a chave publicável que você obteve no aplicativo RAK (Chave Publicável).
5. Em __Token de aplicação__, insira a chave secreta que você obteve no aplicativo RAK (chave de API restrita).  
6. Em __Campos do provedor__, na opção __Mode__, selecione __Embedded__.
7. Em __Test Mode__, selecione a opção __True__ ou __False__.  
8. Clique em `Salvar`.

### Configurar condição de pagamento

Para configurar uma condição de pagamento para o StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre o novo do meio de pagamento que deseje utilizar.
4. Na tela de configuração, ative a condição clicando em __Status__.
5. Em __Processar com o provedor__, selecione a opção __StripeV2__.
6. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
7. Caso necessário, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
8. Clique em `Salvar`.

Caso deseje mais informações sobre os procedimentos de instalação do __VTEX with Stripe Payment Element Experience__, acesse a [documentação pública da Stripe na Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

### Configurar webhook na conta Stripe

Para realizar a configuração do webhook na sua conta Stripe, siga os passos abaixo:

1. Acesse o [dashboard de sua conta na Stripe](https://dashboard.stripe.com/).
2. Clique no botão __Developers__.
3. Clique na aba __Webhooks__.
4. Clique no botão __Add a connection point__.
5. No campo __Connection point URL__, insira o URL do endpoint da sua loja VTEX no seguinte formato: `https://{{account}}.myvtex.com/_v/stripe.payment-provider-connector/v0/webhook`. Substitua o {{account}} pelo nome da sua conta VTEX.
6. Clique em __+ Select events__.
7. Clique nas categorias e selecione os seguintes eventos:
<blockquote> - <b>payment_intent.succeeded</b></blockquote>
<blockquote> - <b>payment_method.attached</b></blockquote>

8. Clique em __Add events__.
9. Clique em __Add Connection Point__.  

## Configurar pagamento com Google Pay na StriveV2 (opcional)  

Com o provedor StripeV2 você pode processar pagamentos com a Google Pay em sua loja. Para configurar o Google Pay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre a opção __Google Pay__.
4. Na tela de configuração, ative a condição clicando em __Status__.
5. Em Processar com o provedor, selecione a opção __StripeV2__.
6. Clique em `Salvar`.

Depois de concluir essas etapas, o Google Pay aparecerá na finalização da compra da loja como um dos métodos de pagamento disponíveis.

## Configurar pagamento com Apple Pay na StriveV2 (opcional)

Com o provedor StripeV2 você pode processar pagamentos com a Apple Pay em sua loja. Para configurar o Apple Pay, siga os passos abaixo:

1. Acesse o [dashboard de sua conta na Stripe](https://dashboard.stripe.com/) na seção de configurações de pagamento.
2. Em __Settings__, clique em __Payment Methods__.
3. Clique em __Apple Pay > Set Up__.
4. Clique em __Add to New Domain__.
5. Insira o domínio público do site de sua loja.
6. Clique em __Add__.
7. Execute as ações descritas na [documentação da Stripe](https://docs.stripe.com/payments/payment-methods/pmd-registration?dashboard-or-api=dashboard#verify-domain-with-apple) e depois clique em __Download the domain association file__.
8. Após obter o arquivo, salve a informação e acesse a seguinte URL `https://{{account}}.myvtex.com/_v/stripe.paid-provider/v0/registerApplePay`. Substitua o {{account}} pelo nome da sua conta VTEX.
9. Insira no campo __Enter your Apple App Key__ a informação salva anteriormente.
10. Clique em `Salvar`.
11. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
12. Na aba __Condições de Pagamentos__, clique no botão `+`.
13. Clique em __Apple Pay__.
14. Na tela de configuração, ative a condição clicando em __Status__.
15. Em __Processar com o provedor__, selecione a opção __StripeV2__.
16. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
17. Indique se deseja processar pagamentos com ou sem parcelamentos.
18. Caso necessário, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
19. Clique em `Salvar`.

Depois de concluir essas etapas, o Apple Pay aparecerá na finalização da compra da loja como um dos métodos de pagamento disponíveis.

## Configurar condição de parcelamento sem juros (MSI) (opcional)

<div class="alert alert-warning">
  A condição de pagamento parcelada sem juros (<b>MSI - Meses Sin Intereses</b>) é disponível na Stripe somente para contas baseadas no México.
</div>  

O __MSI__ pode ser configurado tanto o modo de operação __VTEX Checkout experience__ quanto para o __VTEX with Stripe Payment Element Experience__. Veja abaixo os passos necessários para configurá-lo de acordo com o tipo de modo de operação adotado em sua loja:

### Configurar MSI no modo VTEX Checkout experience

1. Crie uma conta [Stripe](https://stripe.com/) no México configurada com a moeda MXN.
2. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
3. Clique em um dos meios de pagamento disponíveis que processam pagamentos com __MSI__ (cartões VISA, AMEX e Mastercard).
4. [Configure as condições MSI](/pt/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros) da forma desejada na tela do meio de pagamento.
5. [Configure as condições MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) no seu dashboard da Stripe com as mesmas informações utilizadas na configuração da VTEX (Passo 4.).

<div class="alert alert-warning">
  Caso as informações cadastradas nos Passos 4 e 5 sejam diferentes, a condição de MSI pode não funcionar corretamente.
</div>  

### Configurar MSI no modo VTEX with Stripe Payment Element Experience

1. Crie uma conta [Stripe](https://stripe.com/) no México configurada com a moeda MXN.
2. [Configure as condições de MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) no seu dashboard da Stripe.
3. Entre em contato com o seu Stripe executive ou time de [Stripe support](https://stripe.com/mx/contact) para solicitar que esta condição de pagamento seja acionada em sua loja. 

