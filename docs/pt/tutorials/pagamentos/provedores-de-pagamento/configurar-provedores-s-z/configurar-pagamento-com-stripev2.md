---
title: 'Configurar pagamento com StripeV2'
id: 3XG7Vrb0GGhdN40ICNKQoN
status: PUBLISHED
createdAt: 2025-03-07T15:20:58.287Z
updatedAt: 2025-09-19T19:45:07.908Z
publishedAt: 2025-09-19T19:45:07.908Z
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

- **VTEX Native Checkout Experience**: pode ser utilizado para cartões de crédito, débito e meios de pagamento desenvolvidos com o [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework). Essa opção é recomendado se você deseja configurar outros gateways de pagamento para diferentes bandeiras de cartão ou realizar transações utilizando o checkout nativo da VTEX.

- **VTEX with Stripe Payment Element Experience**: aplicativo de pagamento baseado no [Stripe’s Optimized Checkout Suite (OCS)](https://support.stripe.com/questions/what-is-stripe-s-optimized-checkout-suite-%28ocs%29?locale=pt-BR). Essa opção é recomendada caso você pretenda usar exclusivamente o Stripe para processar todas as bandeiras de cartões ou se deseje ter acesso ao [Stripe Link](https://stripe.com/payments/link), uma solução que oferece acesso rápido a diversos meios de pagamento com apenas um clique.

> ℹ️ O **VTEX with Stripe Payment Element Experience** utiliza o [Stripe Payment Elements Checkout](https://docs.stripe.com/payments/elements), proporcionando acesso aos meios de pagamento atuais e futuros suportados pela Stripe. Nessa opção, a configuração dos meios de pagamento deve ser realizada diretamente no [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).

> ℹ️ Para informações sobre a lista completa de meios de pagamento operados por cada um dos modos de operação da StripeV2, entre em contato com os times de suporte da [Vinneren](mailto:stripe-support@vinneren.com.mx) ou [Stripe](https://support.stripe.com/contact/login).

Após determinar com qual dos modos deseja operar em sua loja, siga as instruções de um dos procedimentos abaixo:

- [Configurando o VTEX Native Checkout Experience](#configurar-o-vtex-native-checkout-experience)
- [Configurando o VTEX with Stripe Payment Element Experience](#configurar-o-vtex-with-stripe-payment-element-experience)

> ⚠️ As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Stripe para informações atualizadas.

## Configurar o VTEX Native Checkout Experience

> ⚠️ A equipe da Stripe precisa habilitar pagamentos RawPan em sua conta. Entre em contato com seu [Stripe advisor](https://support.stripe.com/?contact=true). Se esta opção não estiver habilitada em sua conta, você não poderá fazer transações com sucesso.

Pré-requisitos:

- Usuário VTEX com permissões de administrador
- Conta Stripe ativa

Para utilizar o **VTEX Native Checkout Experience** em sua loja, é necessário:

- [Instalar os aplicativos da Stripe](#instalar-apps-da-stripe)
- [Configurar StripeV2 na VTEX](#configurar-stripev2-na-vtex)
- [Configurar condições de pagamento](#configurar-condicao-de-pagamento)

### Instalar apps da Stripe

Para instalar os apps da Stripe em sua loja, siga os passos abaixo:

1. Instale o [VTEX Native Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-native-checkout). Durante a configuração, certifique-se de inserir o nome da sua conta VTEX usando apenas letras minúsculas. Por exemplo, se o nome da sua conta for "MyStore", insira-o como "mystore".
2. Acesse o [Stripe Dashboard](https://dashboard.stripe.com/login?redirect=%2Fapikeys), copie e salve as chaves públicas e secretas. É importante que você copie e salve as chaves do modo (test or live) em que você instalou o VTEX Native Checkout App na Stripe.

    > ⚠️ Antes de iniciar a instalação do app Payment Provider Framework, verifique com a equipe de suporte da [Vinneren](mailto:stripe-support@vinneren.com.mx) ou [Stripe](https://support.stripe.com/contact/login) os números das versões mais atuais do aplicativo.

3. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute os comandos abaixo para instalar os apps da Stripe:

- **Payment Provider Framework**: `vtex install stripe.stripe-payments-provider`.
- **Payment App**: `vtex install stripe.stripe-payment-app`.

### Configurar StripeV2 na VTEX

Para configurar a integração da StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **StripeV2** na barra de busca e clique sobre o nome do provedor.
4. Em **Chave de aplicação**, insira a chave publicável que você obteve nos passos anteriores.
5. Em **Token de aplicação**, insira a chave secreta que você obteve nos passos anteriores.
6. Em **Informações básicas**, na opção **Nome**, insira **StripeV2NativeCheckout** para identificar o tipo da integração.
7. Em **Campos do provedor**, na opção **Mode**, selecione **Float**.
8. Em **Test Mode**, selecione **False** se o modo for **Live** ou **True** se o modo for **Test**.
9. Clique em `Salvar`.

### Configurar script de antifraude

Para configurar o script de antifraude para a StripeV2 na VTEX, siga os passos abaixo:

1. Copie o script disponível na seção "[Integrate script into your VTEX store](https://sites.google.com/vinneren.com.mx/documentacion-publica/native-checkout_1/english)".
2. No Admin VTEX, acesse **Configurações da loja > Storefront > Checkout > Código**.
3. Clique no botão **Novo** e insira um nome descritivo.
4. Cole o conteúdo do script que você copiou anteriormente.
5. Substitua as informações "pk_test" pela sua chave pública Stripe copiada nas etapas anteriores.
6. Clique em `Salvar`.

### Configurar condição de pagamento

Para configurar uma condição de pagamento para o StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão +.
3. Clique sobre o novo do meio de pagamento que deseje utilizar.
4. Na tela de configuração, ative a condição clicando em **Status**.
5. Em **Processar com o provedor**, selecione a opção **StripeV2NativeCheckout**.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
7. Caso necessário, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
8. Clique em `Salvar`.

Caso deseje mais informações sobre os procedimentos de instalação do **VTEX Native Checkout Experience**, acesse a [documentação pública da Stripe na Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

## Configurar o VTEX with Stripe Payment Element Experience

Pré-requisitos:

- Usuário VTEX com permissões de administrador
- Conta Stripe ativa

Para utilizar o **VTEX with Stripe Payment Element Experience** em sua loja, é necessário:

- [Instalar os aplicativos da Stripe](#instalar-apps-da-stripe-element-experience)
- [Configurar StripeV2 na VTEX](#configurar-stripev2-na-vtex-element-experience)
- [Configurar condições de pagamento](#configurar-condicao-de-pagamento-element-experience)
- [Configurar webhook na conta Stripe](#configurar-webhook-na-conta-stripe-element-experience)

### Instalar apps da Stripe (Element Experience)

Para instalar os apps da Stripe em sua loja, siga os passos abaixo:

1. Instale o [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) para obter as chaves Stripe necessárias.
2. Assim que a instalação for concluída, as chaves pública (pk) e restrita (rk) serão exibidas. Copie e salve-os, pois serão usados posteriormente.

    > ⚠️ Antes de iniciar a instalação do app Payment Provider Framework, verifique com a equipe de suporte da [Vinneren](mailto:stripe-support@vinneren.com.mx) ou [Stripe](https://support.stripe.com/contact/login) os números das versões mais atuais do aplicativo.

3. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute os comandos abaixo para instalar os apps da Stripe:

- **Payment Provider Framework**: `vtex install stripe.stripe-payments-provider`.
- **Payment App**: `vtex install stripe.stripe-payment-app`.

### Configurar StripeV2 na VTEX (Element Experience)

Para configurar a integração da StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **StripeV2** na barra de busca e clique sobre o nome do provedor.
4. Em **Chave de aplicação**, insira a chave publicável que você obteve no **VTEX Elements Checkout (Stripe App)**.
5. Em **Token de aplicação**, insira a chave RAK que você obteve no **VTEX Elements Checkout (Stripe App)** (restricted API key).
6. Em **Informações básicas**, na opção **Nome**, insira **StripeV2Elements** para identificar rapidamente a integração.
7. Em **Campos do provedor**, na opção **Mode**, selecione **Embedded**.
8. Em **Test Mode**, selecione **False** se o modo for **Live** ou **True** se o modo for **Test**.
9. Clique em `Salvar`.
10. Adicione chaves Stripe nas configurações do aplicativo do provedor, como segue:
a. Acesse **Store Settings > Payment > Providers**.
b. Clique em **Settings**.
c. Em **Publishable Key**, insira sua chave começando com **pk_**.
d. Em **Secret Key**, insira sua chave começando com **rk_**.
e. Clique em **Save**.

### Configurar condição de pagamento (Element Experience)

Para configurar uma condição de pagamento para o StripeV2 na VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique sobre o novo do meio de pagamento que deseje utilizar.
4. Na tela de configuração, ative a condição clicando em **Status**.
5. Em **Processar com o provedor**, selecione a opção **StripeV2Elements**.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
7. Caso necessário, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
8. Clique em `Salvar`.

Caso deseje mais informações sobre os procedimentos de instalação do **VTEX with Stripe Payment Element Experience**, acesse a [documentação pública da Stripe na Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

### Configurar webhook na conta Stripe (Element Experience)

Para realizar a configuração do webhook na sua conta Stripe, siga os passos abaixo:

1. Acesse o [dashboard de sua conta na Stripe](https://dashboard.stripe.com/).
2. Clique no botão **Developers**.
3. Clique na aba **Webhooks**.
4. Clique no botão **Add a connection point**.
5. No campo **Connection point URL**, insira o URL do endpoint da sua loja VTEX no seguinte formato: `https://{{account}}.myvtex.com/_v/stripe.payment-provider-connector/v0/webhook`. Substitua o {{account}} pelo nome da sua conta VTEX.
6. Clique em **+ Select events**.
7. Clique nas categorias e selecione os seguintes eventos:

    - **payment_intent.payment_failed**
    - **payment_method.canceled**
    - **payment_intent.succeeded**
    - **payment_method.attached**

8. Clique em **Add events**.
9. Clique em **Add Connection Point**.

## Configurar pagamento com Google Pay na StriveV2 (opcional)

Com o provedor StripeV2 você pode processar pagamentos com a Google Pay em sua loja. Para configurar o Google Pay, siga os passos abaixo:

1. Caso já tenha concluido os passos de instalação do [VTEX Elements](#configurar-o-vtex-with-stripe-payment-element-experience), prossiga para o Passo 13.
2. Instale o [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) para obter as chaves Stripe necessárias.
3. Assim que a instalação for concluída, as chaves pública (pk) e restrita (rk) serão exibidas. Copie e salve-os, pois serão usados posteriormente.
4. No Admin VTEX, acesse **Configurações da Loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de pesquisa no topo da página.
5. Na página do provedor, clique no botão `Novo Provedor`.
6. Digite **StripeV2** na barra de pesquisa e clique no nome do provedor.
7. Em **App key**, insira a chave publicável que você obteve no **VTEX Elements Checkout (Stripe App)**.
8. Em **App token**, insira a chave RAK obtida no **VTEX Elements Checkout (Stripe App)**(chave API restrita).
9. Em **Informações básicas**, na opção **Nome**, insira **StripeV2Elements** para identificar rapidamente a integração.
10. Em **Campos do provedor**, na opção **Mode**, selecione **Embedded**.
11. Em **Test Mode**, selecione **False** se o modo for **Live** ou **True** se o modo for **Test**.
12. Clique em `Salvar`.
13. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
14. Na aba **Condições de Pagamentos**, clique no botão `+`.
15. Clique sobre a opção **Google Pay**.
16. Na tela de configuração, ative a condição clicando em **Status**.
17. Em Processar com o provedor, selecione a opção **StripeV2**.
18. Clique em `Salvar`.

Depois de concluir essas etapas, o Google Pay aparecerá na finalização da compra da loja como um dos métodos de pagamento disponíveis.

## Configurar pagamento com Apple Pay na StriveV2 (opcional)

Com o provedor StripeV2 você pode processar pagamentos com a Apple Pay em sua loja. Para configurar o Apple Pay, siga os passos abaixo:

1. Caso já tenha concluido os passos de instalação do [VTEX Elements](#configurar-o-vtex-with-stripe-payment-element-experience), prossiga para o Passo 13.
2. Instale o [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) para obter as chaves Stripe necessárias.
3. Assim que a instalação for concluída, as chaves pública (pk) e restrita (rk) serão exibidas. Copie e salve-os, pois serão usados posteriormente.
4. No Admin VTEX, acesse **Configurações da Loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de pesquisa no topo da página.
5. Na página do provedor, clique no botão `Novo Provedor`.
6. Digite **StripeV2** na barra de pesquisa e clique no nome do provedor.
7. Em **App key**, insira a chave publicável que você obteve no **VTEX Elements Checkout (Stripe App)**.
8. Em **App token**, insira a chave RAK obtida no **VTEX Elements Checkout (Stripe App)**(chave API restrita).
9. Em **Informações básicas**, na opção **Nome**, insira **StripeV2Elements** para identificar rapidamente a integração.
10. Em **Campos do provedor**, na opção **Mode**, selecione **Embedded**.
11. Em **Test Mode**, selecione **False** se o modo for **Live** ou **True** se o modo for **Test**.
12. Clique em `Salvar`.
13. Acesse o [dashboard de sua conta na Stripe](https://dashboard.stripe.com/) na seção de configurações de pagamento.
14. Em **Settings**, clique em **Payment Methods**.
15. Clique em **Apple Pay > Set Up**.
16. Clique em **Add to New Domain**.
17. Insira o domínio público do site de sua loja.
18. Clique em **Add**.
19. Execute as ações descritas na [documentação da Stripe](https://docs.stripe.com/payments/payment-methods/pmd-registration?dashboard-or-api=dashboard#verify-domain-with-apple) e depois clique em **Download the domain association file**.
20. Após obter o arquivo, salve a informação e acesse a seguinte URL `https://{{account}}.myvtex.com/_v/stripe.paid-provider/v0/registerApplePay`. Substitua o {{account}} pelo nome da sua conta VTEX.
21. Insira no campo **Enter your Apple App Key** a informação salva anteriormente.
22. Clique em `Salvar`.
23. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
24. Na aba **Condições de Pagamentos**, clique no botão `+`.
25. Clique em **Apple Pay**.
26. Na tela de configuração, ative a condição clicando em **Status**.
27. Em **Processar com o provedor**, selecione a opção **StripeV2**.
28. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
29. Indique se deseja processar pagamentos com ou sem parcelamentos.
30. Caso necessário, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
31. Clique em `Salvar`.

Depois de concluir essas etapas, o Apple Pay aparecerá na finalização da compra da loja como um dos métodos de pagamento disponíveis.

## Configurar condição de parcelamento sem juros (MSI) (opcional)

> ⚠️ A condição de pagamento parcelada sem juros (**MSI - Meses Sin Intereses**) é disponível na Stripe somente para contas baseadas no México.

O **MSI** pode ser configurado tanto o modo de operação **VTEX Native Checkout experience** quanto para o **VTEX with Stripe Payment Element Experience**. Veja abaixo os passos necessários para configurá-lo de acordo com o tipo de modo de operação adotado em sua loja:

### Configurar MSI no modo VTEX Native Checkout experience

1. Crie uma conta [Stripe](https://stripe.com/) no México configurada com a moeda MXN.
2. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
3. Clique em um dos meios de pagamento disponíveis que processam pagamentos com **MSI** (cartões VISA, AMEX e Mastercard).
4. [Configure as condições MSI](/pt/docs/tutorials/condicoes-de-pagamento#parcelado-sem-juros) da forma desejada na tela do meio de pagamento.
5. [Configure as condições MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) no seu dashboard da Stripe com as mesmas informações utilizadas na configuração da VTEX (Passo 4.).

> ⚠️ Caso as informações cadastradas nos Passos 4 e 5 sejam diferentes, a condição de MSI pode não funcionar corretamente.

### Configurar MSI no modo VTEX with Stripe Payment Element Experience

1. Crie uma conta [Stripe](https://stripe.com/) no México configurada com a moeda MXN.
2. [Configure as condições de MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) no seu dashboard da Stripe.
3. Entre em contato com o seu Stripe executive ou time de [Stripe support](https://stripe.com/mx/contact) para solicitar que esta condição de pagamento seja acionada em sua loja.
