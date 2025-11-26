---
title: 'Configurar pagamento com Mercado Pago no VTEX Sales App'
id: 51fgSydGGOnlBdtwTfE8BE
status: PUBLISHED
createdAt: 2024-08-26T12:36:03.781Z
updatedAt: 2024-09-24T13:53:43.655Z
publishedAt: 2024-09-24T13:53:43.655Z
firstPublishedAt: 2024-08-26T18:37:41.187Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-mercado-pago-in-vtex-sales-app
legacySlug: configurar-pagamento-com-mercado-pago-no-vtex-sales-app
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Mercado Pago. Por meio deste conector, sua loja pode oferecer transações de pagamento em lojas físicas (VTEX Sales App), utilizando pontos de vendas (POS). Para mais informações, acesse [O que é o VTEX Sales App?](https://help.vtex.com/pt/docs/tracks/vtex-sales-app-primeiros-passos-e-configuracoes).

> ℹ️ Para utilizar o provedor MercadoPagoV2 em sua loja por outros canais de venda online (exceto VTEX Sales App), acesse [Configurar pagamento com MercadoPagoV2](/pt/tutorial/configurar-o-subadquirente-mercadopagov2--1y6k8lCSzJYfPs2yObNFo4).

Para utilizar o provedor MercadoPagoV2 no VTEX Sales App, é necessário:

- [Configurar chaves no ambiente Mercado Pago](#configurar-chaves-no-ambiente-mercado-pago)
- [Configurar conector MercadoPagoV2 (VTEX Sales App) na VTEX](#configurar-conector-mercadopagov2-vtex-sales-app-na-vtex)
- [Instalar os aplicativos Mercado Pago Payment e Mercado Pago Instore na VTEX](#instalar-aplicativos-mercado-pago-payment-e-mercado-pago-instore-na-vtex)
- [Configurar condição de pagamento](#configurar-condicao-de-pagamento)

> ⚠️ As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Mercado Pago para informações atualizadas.

## Configurar chaves no ambiente Mercado Pago

Os passos a seguir descrevem as configurações mínimas a serem realizadas para que o conector MercadoPagoV2 seja devidamente configurado. Demais configurações personalizadas aplicadas à clientes, habilitação de métodos de pagamento específicos ou funcionalidades particulares da plataforma, devem ser realizadas conforme [documentação do Mercado Pago](https://www.mercadopago.com.br/developers/pt/docs/vtex/create-application).

<blockquote><ui>1. Acesse o [portal do desenvolvedor Mercado Pago](https://www.mercadopago.com.br/developers/pt) para criar uma nova conta.</ui>

<blockquote><ui>> ⚠️ O portal do desenvolvedor Mercado Pago permite que o usuário obtenha informações de todas as chaves necessárias pra configurar a conexão entre a VTEX e o Mercado Pago. Recomendamos que o procedimento abaixo seja realizado por um usuário que já possua acesso às demais chaves de sua conta no Mercado Pago.</blockquote>

<blockquote><ui>2. Após realizar o login, acesse a [documentação de credenciais](https://www.mercadopago.com.br/developers/pt/docs/vtex/additional-content/your-integrations/credentials) do Mercado Pago para verificar como obter o **Public Key** e **Access Token** que serão utilizados na configuração do MercadoPagoV2 na VTEX.</ui> 

## Configurar conector MercadoPagoV2 (VTEX Sales App) na VTEX

<blockquote><ui>1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.</ui>

<blockquote><ui>2. Na tela de provedores, clique no botão **Novo provedor**.</ui>

<blockquote><ui>3. Digite o nome **MercadoPagoV2** na barra de busca e clique sobre o nome do provedor.</ui>

<blockquote><ui>4. Em **Chave de aplicação**, insira o nome da sua **Public Key** localizada no portal de desenvolvedor do Mercado Pago.</ui>

<blockquote><ui>5. Em **Token de aplicação**, insira a chave **Access Token** localizada no portal de desenvolvedor do Mercado Pago.</ui>  

<blockquote><ui>6. Caso deseje modificar o nome de identificação a ser exibido para o provedor Mercado Pago na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.</ui>

<blockquote><ui>7. Em **Controle de pagamento**, desative o ambiente de teste ao desmarcar a opção **Ativar modo de teste**.</ui>

<blockquote><ui>8. Em **Prazo de vencimento do boleto**, defina o valor (em dias úteis) para o vencimento do pedido de compra. Caso cliente efetue o pagamento após o prazo, o valor será depositado na conta do mesmo no Mercado Pago.</ui>

<blockquote><ui>9. Em **Nome da loja**, insira o nome da sua empresa. Esta informação será descrita na fatura do cartão do cliente.</ui>

<blockquote><ui>10. Em **Parcelamento máximo**, escolha a quantidade máxima de parcelas disponíveis para efetuar o pagamento. Com o Mercado Pago, você pode oferecer parcelamento em até 12 vezes.</ui>  

<blockquote><ui>11. Em **Suporte 3DS 2.0**, selecione "Sim" caso deseje ativar a validação de segurança do 3DS. Para o correto funcionamento deste protocolo, certifique-se de que o **Mercado Pago Payment app** será instalado em sua loja e que o campo **Modo binário** (Step 15), seja selecionado como "Não".</ui>  

<blockquote><ui>12. Em **Categoria principal da loja**, escolha a categoria do ramo de atuação de sua loja.</ui>

<blockquote><ui>13. Em **Compartilhamento de categoria (loja ou produto) por transação**, selecione a opção **Categoria da Loja**.</ui> 

<blockquote><ui>14. Na opção **Reembolso automático / manual**, escolha se o cliente será reembolsado de forma automática ou se deseja reter o valor pago para que o cliente possa utilizá-lo em compras futuras na mesma loja.</ui>   

<blockquote><ui>15. Em **Modo binário**, indique se a loja deve aceitar pagamentos pendentes. Selecionar "Não", indica que a transação ficará pendente por 48 horas ou até que o pagamento seja realizado, e o estoque relacionado nessa compra será retiro pelo mesmo período de tempo. Selecionar "Sim", permite que as transações sejam rejeitadas e o estoque será liberado automaticamente. Para utilizar a funcionalidade do **Suporte 3DS 2.0** (Step 11), o **Modo binário** deve estar indicado como "Não".</ui>     

<blockquote><ui>16. Em **Métodos de pagamento excluídos**, descreva os métodos de pagamentos que não deseja oferecer por meio do Checkout Pro, saiba mais em [Excluir tipos e métodos de pagamento](https://www.mercadopago.com.br/developers/pt/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods). Caso opte por deixar em branco este campo, todos os métodos de pagamento disponíveis do MercadoPagoV2 poderão ser utilizados em sua loja.</ui>   

<blockquote><ui>17. Em **Tipos de pagamento excluídos**, descreva as bandeiras específicas de crédito, débito e boleto (Visa, Mastercard, entre outros) que não deseja oferecer por meio do Checkout Pro, saiba mais em [Excluir tipos e métodos de pagamento](https://www.mercadopago.com.br/developers/pt/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods). Caso opte por deixar em branco este campo, todos os tipos de pagamento disponíveis no MercadoPagoV2 poderão ser utilizados em sua loja.</ui>   

<blockquote><ui>18. Em **Modo de processamento**, selecione a opção **Aggregator**.</ui>

<blockquote><ui>19. Em **Integrator ID**, indique o código identificador do programador ou agência que realiza a configuração do Mercado Pago.</ui>  

<blockquote><ui>20. O campo **Moeda** identifica a moeda utilizada para pagamento na loja. Não é necessário preeenchê-lo.</ui>      

<blockquote><ui>21. O campo **Merchant Account ID** identifica a conta do merchant. Não é necessário preeenchê-lo.</ui>     

<blockquote><ui>22. Em **Prazo de captura de pagamento aprovado**, selecione o prazo desejado para captura do pagamento.</ui>     

<blockquote><ui>23. Em **Tempo para cancelar compras de um carrinho abandonado**, insira o intervalo de tempo que deve ser aguardado até que os meios de pagamento habilitados não estejam disponíveis para efetuar a compra.</ui>    

<blockquote><ui>24. Clique em **Salvar**.</ui>

## Instalar aplicativos Mercado Pago Payment e Mercado Pago Instore na VTEX

> ⚠️ Antes de instalar o app **mercadopago.mercadopago-app**, confirme com a equipe de suporte do Mercado Pago qual é a versão atual do aplicativo.

1. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute o comando `vtex login nomedaconta` para realizar o login em sua conta.
2. Instale o app **mercadopago.mercadopago-app** por meio do comando `vtex install mercadopago.mercadopago-app@{{current-app-version}}`. A informação {{current-app-version}} deve ser substituída pela a versão atual do aplicativo, por exemplo: `vtex install mercadopago.mercadopago-app@2.3.15`.
3. Instale o app **mercadopago.instore** por meio do comando `vtex install mercadopago.instore`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **Venda Direta Debito** ou **Venda Direta Credito**.
4. Em **Processar com o provedor**, selecione a opção **MercadoPagoV2**.
5. Ative a condição no campo **Status**.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
7. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor MercadoPagoV2 pode demorar até 10 minutos para aparecer como opção de pagamento no VTEX Sales App de sua loja.
