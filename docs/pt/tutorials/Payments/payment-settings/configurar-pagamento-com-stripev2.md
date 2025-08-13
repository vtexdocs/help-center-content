---
title: 'Configurar pagamento com StripeV2'
id: 3XG7Vrb0GGhdN40ICNKQoN
status: CHANGED
createdAt: 2025-03-07T15:20:58.287Z
updatedAt: 2025-08-13T16:07:08.694Z
publishedAt: 2025-08-12T20:36:16.492Z
firstPublishedAt: 2025-03-07T15:34:55.639Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-stripev2
legacySlug: configurar-pagamento-com-stripev2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento StripeV2. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Visa, American Express, Diners, Elo, Hipercard, Mastercard, BankInvoice, Stripe, Google Pay, ApplePay, OXXO, Discover, Affirm, Klarna, ZIP, Blik, Ideal, SPEI, MultiBanco, Afterpay, Bancontact, EPS, FPX, giropay e P24.

Para mais informações sobre a integração da VTEX com a Stripe, você também pode acessar a [documentação da Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica/documentacion-publica).

## Modos de operação

O provedor StripeV2 pode processar transações de pagamentos em lojas VTEX de duas maneiras diferentes:

- __VTEX Native Checkout Experience__: pode ser utilizado para cartões de crédito, débito e meios de pagamento desenvolvidos com o [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework). Essa opção é recomendado se você deseja configurar outros gateways de pagamento para diferentes bandeiras de cartão ou realizar transações utilizando o checkout nativo da VTEX.

- __VTEX with Stripe Payment Element Experience__: aplicativo de pagamento baseado no [Stripe’s Optimized Checkout Suite (OCS)](https://support.stripe.com/questions/what-is-stripe-s-optimized-checkout-suite-(ocs)?locale=en-US). Essa opção é recomendada caso você pretenda usar exclusivamente o Stripe para processar todas as bandeiras de cartões ou se deseje ter acesso ao [Stripe Link](https://stripe.com/payments/link), uma solução que oferece acesso rápido a diversos meios de pagamento com apenas um clique.

> ℹ️ O **VTEX with Stripe Payment Element Experience** utiliza o [Stripe Payment Elements Checkout](https://docs.stripe.com/payments/elements), proporcionando acesso aos meios de pagamento atuais e futuros suportados pela Stripe. Nessa opção, a configuração dos meios de pagamento deve ser realizada diretamente no [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).

> ℹ️ Para informações sobre a lista completa de meios de pagamento operados por cada um dos modos de operação da StripeV2, entre em contato com os times de suporte da [Vinneren](stripe-support@vinneren.com.mx) ou [Stripe](https://support.stripe.com/contact/login).

Após determinar com qual dos modos deseja operar em sua loja, siga as instruções de um dos procedimentos abaixo:

- [Configurando o VTEX Native Checkout Experience](#configurar-o-vtex-native-checkout-experience)
- [Configurando o VTEX with Stripe Payment Element Experience](#configurar-o-vtex-with-stripe-payment-element-experience) 

> ⚠️ As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Stripe para informações atualizadas.

## Configurar o VTEX Native Checkout Experience

> ⚠️ A equipe da Stripe precisa habilitar pagamentos RawPan em sua conta. Entre em contato com seu [Stripe advisor](https://support.stripe.com/?contact=true). Se esta opção não estiver habilitada em sua conta, você não poderá fazer transações com sucesso.

Pré-requisitos:
- Usuário VTEX com permissões de administrador
- Conta Stripe ativa

Para utilizar o __VTEX Native Checkout Experience__ em sua loja, é necessário:

- [Instalar os aplicativos da Stripe](#instalar-apps-da-stripe)
- [Configurar StripeV2 na VTEX](#configurar-stripev2-na-vtex)
- [Configurar condições de pagamento](#configurar-condicao-de-pagamento)

### Instalar apps da Stripe

Para instalar os apps da Stripe em sua loja, siga os passos abaixo:

<blockquote><ui>1. Instale o [VTEX Native Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-native-checkout). Durante a configuração, certifique-se de inserir o nome da sua conta VTEX usando apenas letras minúsculas. Por exemplo, se o nome da sua conta for "MyStore", insira-o como "mystore".</ui>

<blockquote><ui>2. Acesse o [Stripe Dashboard](https://dashboard.stripe.com/login?redirect=%2Fapikeys), copie e salve as chaves públicas e secretas. É importante que você copie e salve as chaves do modo (test or live) em que você instalou o VTEX Native Checkout App na Stripe.</ui>

<blockquote>> ⚠️ Antes de iniciar a instalação do app Payment Provider Framework, verifique com a equipe de suporte da [Vinneren](stripe-support@vinneren.com.mx) ou [Stripe](https://support.stripe.com/contact/login) os números das versões mais atuais do aplicativo.</blockquote>

<blockquote><ui>3. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute os comandos abaixo para instalar os apps da Stripe:</ui>

  <blockquote><ui>- **Payment Provider Framework**: `vtex install stripe.stripe-payments-provider`.</ui></blockquote>
  <blockquote><ui>- **Payment App**: `vtex install stripe.stripe-payment-app`.</ui></blockquote> 

### Configurar StripeV2 na VTEX

Para configurar a integração da StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __StripeV2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Chave de aplicação__, insira a chave publicável que você obteve nos passos anteriores.
5. Em __Token de aplicação__, insira a chave secreta que você obteve nos passos anteriores.
6. Em __Informações básicas__, na opção __Nome__, insira __StripeV2NativeCheckout__ para identificar o tipo da integração.  
7. Em __Campos do provedor__, na opção __Mode__, selecione __Float__.
8. Em __Test Mode__, selecione __False__ se o modo for __Live__ ou __True__ se o modo for __Test__.  
9. Clique em `Salvar`.

### Configurar script de antifraude

Para configurar o script de antifraude para a StripeV2 na VTEX, siga os passos abaixo:

1. Copie o script disponível na seção "[Integrate script into your VTEX store](https://sites.google.com/vinneren.com.mx/documentacion-publica/native-checkout/english)".
2. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout > Código__.
3. Clique no botão __Novo__ e insira um nome descritivo.
4. Cole o conteúdo do script que você copiou anteriormente.
5. Substitua as informações “pk_test_” pela sua chave pública Stripe copiada nas etapas anteriores.
6. Clique em `Salvar`.    

### Configurar condição de pagamento

Para configurar uma condição de pagamento para o StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão +.
3. Clique sobre o novo do meio de pagamento que deseje utilizar.
4. Na tela de configuração, ative a condição clicando em __Status__.
5. Em __Processar com o provedor__, selecione a opção __StripeV2NativeCheckout __.   
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
8. Caso necessário, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456).
9. Clique em `Salvar`.

Caso deseje mais informações sobre os procedimentos de instalação do __VTEX Native Checkout Experience__, acesse a [documentação pública da Stripe na Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

## Configurar o VTEX with Stripe Payment Element Experience

Pré-requisitos:
- Usuário VTEX com permissões de administrador
- Conta Stripe ativa  

Para utilizar o __VTEX with Stripe Payment Element Experience__ em sua loja, é necessário:

- [Instalar os aplicativos da Stripe](#instalar-apps-da-stripe)
- [Configurar StripeV2 na VTEX](#configurar-stripev2-na-vtex)
- [Configurar condições de pagamento](#configurar-condicao-de-pagamento)
- [Configurar webhook na conta Stripe](#configurar-webhook-na-conta-stripe)

### Instalar apps da Stripe

Para instalar os apps da Stripe em sua loja, siga os passos abaixo:

<blockquote><ui>1. Instale o [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) para obter as chaves Stripe necessárias.</ui>

<blockquote><ui>2. Assim que a instalação for concluída, as chaves pública (pk_) e restrita (rk_) serão exibidas. Copie e salve-os, pois serão usados posteriormente.</ui>

<blockquote>> ⚠️ Antes de iniciar a instalação do app Payment Provider Framework, verifique com a equipe de suporte da [Vinneren](stripe-support@vinneren.com.mx) ou [Stripe](https://support.stripe.com/contact/login) os números das versões mais atuais do aplicativo.</blockquote>

<blockquote><ui>3. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute os comandos abaixo para instalar os apps da Stripe:</ui>

  <blockquote><ui>- **Payment Provider Framework**: `vtex install stripe.stripe-payments-provider`.</ui></blockquote>
  <blockquote><ui>- **Payment App**: `vtex install stripe.stripe-payment-app`.</ui></blockquote> 

### Configurar StripeV2 na VTEX

Para configurar a integração da StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __StripeV2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Chave de aplicação__, insira a chave publicável que você obteve no __VTEX Elements Checkout (Stripe App)__.
5. Em __Token de aplicação__, insira a chave RAK que você obteve no __VTEX Elements Checkout (Stripe App)__ (restricted API key).
6. Em __Informações básicas__, na opção __Nome__, insira __StripeV2Elements__ para identificar rapidamente a integração.  
7. Em __Campos do provedor__, na opção __Mode__, selecione __Embedded__.
8. Em __Test Mode__, selecione __False__ se o modo for __Live__ ou __True__ se o modo for __Test__.  
9. Clique em `Salvar`.

### Configurar condição de pagamento

Para configurar uma condição de pagamento para o StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre o novo do meio de pagamento que deseje utilizar.
4. Na tela de configuração, ative a condição clicando em __Status__.
5. Em __Processar com o provedor__, selecione a opção __StripeV2Elements__.
6. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
7. Caso necessário, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
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
<blockquote> - **payment_intent.succeeded**</blockquote>
<blockquote> - **payment_method.attached**</blockquote>

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
18. Caso necessário, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
19. Clique em `Salvar`.

Depois de concluir essas etapas, o Apple Pay aparecerá na finalização da compra da loja como um dos métodos de pagamento disponíveis.

## Configurar condição de parcelamento sem juros (MSI) (opcional)

> ⚠️ A condição de pagamento parcelada sem juros (**MSI - Meses Sin Intereses**) é disponível na Stripe somente para contas baseadas no México.  

O __MSI__ pode ser configurado tanto o modo de operação __VTEX Checkout experience__ quanto para o __VTEX with Stripe Payment Element Experience__. Veja abaixo os passos necessários para configurá-lo de acordo com o tipo de modo de operação adotado em sua loja:

### Configurar MSI no modo VTEX Checkout experience

1. Crie uma conta [Stripe](https://stripe.com/) no México configurada com a moeda MXN.
2. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
3. Clique em um dos meios de pagamento disponíveis que processam pagamentos com __MSI__ (cartões VISA, AMEX e Mastercard).
4. [Configure as condições MSI](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros) da forma desejada na tela do meio de pagamento.
5. [Configure as condições MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) no seu dashboard da Stripe com as mesmas informações utilizadas na configuração da VTEX (Passo 4.).

> ⚠️ Caso as informações cadastradas nos Passos 4 e 5 sejam diferentes, a condição de MSI pode não funcionar corretamente.  

### Configurar MSI no modo VTEX with Stripe Payment Element Experience

1. Crie uma conta [Stripe](https://stripe.com/) no México configurada com a moeda MXN.
2. [Configure as condições de MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) no seu dashboard da Stripe.
3. Entre em contato com o seu Stripe executive ou time de [Stripe support](https://stripe.com/mx/contact) para solicitar que esta condição de pagamento seja acionada em sua loja. 

