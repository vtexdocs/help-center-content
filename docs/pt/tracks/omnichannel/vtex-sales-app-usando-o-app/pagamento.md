---
title: 'Pagamento'
id: 2xxwfe7UQhd33nPTIRF9Yw
status: PUBLISHED
createdAt: 2021-08-05T14:37:01.824Z
updatedAt: 2025-11-12T14:45:11.158Z
publishedAt: 2023-05-31T14:45:11.158Z
firstPublishedAt: 2021-08-05T14:46:59.026Z
contentType: trackArticle
productTeam: Shopping
slugEN: payment
locale: pt
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugEN: vtex-sales-app-using-the-app
order: 15
---

Na etapa de pagamento do VTEX Sales App, aparecerão as [opções de pagamento que foram configuradas](/pt/tracks/instore-payments--43B4Nr7uZva5UdwWEt3PEy) na sua loja.

![instore-payment-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/pagamento_1.jpg)

A barra superior da tela de pagamento exibe as opções a seguir:

- __Compartilhar:__ compartilhar um link de pagamento com o cliente.
- __Cupom:__ adicionar um cupom de desconto.
- __Vale Presente:__ adicionar um vale-presente ao pedido.
- __CPF:__ alterar o número do CPF que constará na Nota Fiscal do pedido.

O VTEX Sales App permite selecionar múltiplos pagamentos. Por exemplo: escolhendo __Dinheiro__ e depois clicando em `Adicionar outro pagamento`, o vendedor pode realizar parte da cobrança em dinheiro e outra parte em cartão de crédito ou débito.

Para prosseguir, é necessário selecionar um ou mais meios de pagamento desejados e clicar em `Finalizar venda`.

## Métodos de pagamento disponíveis

Durante a configuração do VTEX Sales App, é possível adicionar os seguintes métodos de pagamento:

* [Dinheiro](#dinheiro)
* [Pix](#pix)
* [Boleto bancário](#boleto-bancario)
* [Cartão de crédito](#cartao-de-credito)
* [Cartão de débito](#cartao-de-debito)

Para configurar um método de pagamento, siga as instruções da track [VTEX Sales App - Pagamentos](/pt/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy).

### Dinheiro

O cliente deve selecionar a opção **Dinheiro** e clicar em `Finalizar venda`. 

![instore-dinheiro-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/pagamento_2.jpg)

Após isso, o cliente deve realizar a transação com o vendedor. A aprovação da venda pode ser [manual ou automática](/pt/docs/tracks/faturar-um-pedido), dependendo da configuração da loja.

### Pix

O cliente deve selecionar a opção **Pix** e clicar em `Finalizar venda`. 

![instore-pix-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/pagamento_3.png)

Após finalizar a venda, será exibido o QR Code na tela do VTEX Sales App. O cliente deve escanear esse QR Code com o celular para realizar o pagamento. 

![instore-pix2-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/pagamento_4.png)

Depois que o cliente realizar o pagamento, a venda será processada e, por fim, confirmada na página do pedido, conforme a imagem abaixo.

![instore-pix3-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/pagamento_5.png)

### Boleto bancário

O cliente deve selecionar a opção **Boleto Bancário** e clicar em `Finalizar venda`. 

![instore-boleto-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/pagamento_6.jpg)

O boleto será enviado para o email do cliente. Uma vez que o pagamento do boleto for confirmado, a venda será confirmada. 

### Cartão de crédito

O cliente deve selecionar a opção **Cartão de crédito**, selecionar a quantidade de parcelas da compra e clicar em `Finalizar venda`. 

![instore-credito-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/pagamento_7.jpg)

O VTEX Sales App exibirá uma tela de espera enquanto o pagamento é realizado na máquina de cartão da loja. Uma vez que o pagamento é reconhecido pelo sistema, a venda será confirmada.

### Cartão de débito

O cliente deve selecionar a opção **Cartão de débito** e clicar em `Finalizar venda`. 

![instore-debito-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/pagamento_8.jpg)

O VTEX Sales App exibirá uma tela de espera enquanto o pagamento é realizado na máquina de cartão da loja. Uma vez que o pagamento é reconhecido pelo sistema, a venda será confirmada.

