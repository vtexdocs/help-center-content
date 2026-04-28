---
title: 'Configurar pagamento com MercadoPagoV2'
id: 1y6k8lCSzJYfPs2yObNFo4
status: PUBLISHED
createdAt: 2021-11-30T18:49:42.837Z
updatedAt: 2024-08-26T15:35:49.762Z
publishedAt: 2024-08-26T15:35:49.762Z
firstPublishedAt: 2021-11-30T19:32:27.420Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-mercadopagov2-sub-acquirer
legacySlug: configurar-o-subadquirente-mercadopagov2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento MercadoPagoV2. Por meio dele, sua loja pode receber os pagamentos pelos métodos tradicionais, tais como: boleto, PIX, cartões de débito e crédito, bem como por métodos exclusivos do Mercado Pago, como: MercadoPagoOff, MercadoPagoPro e MercadoPagoWallet.

Para configurar o MercadoPagoV2, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __MercadoPagoV2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos de cadastro __Chave de aplicação__ e __Token de aplicação__ com os dados fornecidos pelo Mercado Pago.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor MercadoPagoV2 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Prazo de vencimento do boleto__, escolha a quantidade de dias (contados a partir da geração do boleto) que seu cliente terá para fazer o pagamento.
8. Em __Nome da loja__, insira o nome da sua empresa. Esta informação será descrita no campo Beneficiário do boleto ou na fatura do cartão do cliente.
9. Em __Parcelamento máximo__, escolha a quantidade máxima de parcelas enviadas ao Mercado Pago.
10. Em __Suporte 3DS 2.0__, selecione "Sim" caso deseje ativar a validação de segurança do 3DS. Para o correto funcionamento deste protocolo, certifique-se de que o __Mercado Pago Payment app__ já esteja instalado em sua loja e que o campo __Modo binário__ (step 14), seja selecionado como __Não__.
11. Em __Categoria principal da loja__, escolha a categoria do ramo de atuação de sua loja.
12. Em __Compartilhamento de categoria (loja ou produto) por transação__, selecione se deseja compartilhar com o Mercado Pago em cada transação, os dados da categoria da loja ou do produto.
13. Na opção __Reembolso automático / manual__, escolha se o cliente será reembolsado de forma automática ou manualmente em caso de cancelamento da ordem.
14. Em __Modo binário__, indique se a loja deve aceitar pagamentos pendentes. Selecionar "Sim", indica que o processo de aprovação do pagamento ocorre de forma instantânea, podendo ser aprovado ou recusado. Selecionar "Não", define que o pagamento pode permanecer no status "pendente" (caso exija qualquer ação do comprador) ou "em processo" (se for necessária uma revisão manual).
15. Em __Métodos de pagamento excluídos__, descreva os métodos de pagamentos que não deseja utilizar por meio do MercadoPagoV2 (opcional). Caso opte por deixar em branco este campo, todos os métodos de pagamento disponíveis do MercadoPagoV2 estarão disponíveis em sua loja.
16. Em __Tipos de pagamento excluídos__,  descreva as bandeiras específicas de crédito e débito (Visa, Mastercard, entre outros) que não deseja utilizar por meio do MercadoPagoV2 (opcional). Caso opte por deixar em branco este campo, todos os tipos de pagamento disponíveis do MercadoPagoV2 estarão disponíveis em sua loja.
17. Em __Modo de processamento__, escolha como você deseja utilizar MercadoPagoV2: subadquirente (agreggator) ou gateway. Para maiores informações, acesse [O que é um subadquirente?](/pt/tutorial/o-que-e-um-subadquirente--64aX6PeRQQ66O8uCqo0W4q#) e [O que é um gateway de pagamentos?](/pt/tutorial/o-que-e-um-gateway-de-pagamentos--2KH9Wdi7F6swOU4amECSOk#). 
18. Em __Integrator ID__, indique o código identificador do programador ou agência que realiza a configuração do Mercado Pago.
19. Em __Moeda__, escolha se a moeda utilizada no pagamento será "Local" (cada país) ou "Dólar Americano" (USD)
20. O campo __Merchant Account ID__ identifica a conta do merchant. Não é necessário preeenchê-lo.
21. Em __Prazo de captura de pagamento aprovado__, selecione o prazo desejado para captura do pagamento.
22. Em __Tempo para cancelar compras de um carrinho abandonado__, insira o intervalo de tempo que deve ser aguardado até que os meios de pagamento habilitados não estejam disponíveis para efetuar a compra. 
23. Clique em __Salvar__.

## Configurar condições de pagamento

Para configurar os métodos de pagamento padrões a serem processados pelo MercadoPagoV2, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

## Configurar métodos exclusivos de pagamento

Para configurar métodos exclusivos de pagamento do Mercado Pago, acesse [configurar Mercado Pago Offline e Wallet como métodos de pagamento](/pt/docs/tutorials/configurar-mercado-pago-offline-e-wallet-como-metodos-de-pagamentos).

Para maiores informações sobre a integração com o Mercado Pago, acesse o [DevSite Mercado Pago](https://www.mercadopago.com.br/developers/pt/docs/vtex/introduction).
