---
title: Fluxo de um pagamento por cartão de crédito
id: TEYVv2fcVkH7et9n3OnBS
status: CHANGED
createdAt: 2019-11-12T15:51:05.024Z
updatedAt: 2020-11-27T19:39:59.301Z
publishedAt: 2020-02-13T15:38:53.526Z
firstPublishedAt: 2019-11-22T19:30:16.374Z
contentType: trackArticle
productTeam: Financial
slug: fluxo-de-um-pagamento-por-cartao-de-credito
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugPT: pagamentos
---

O Fluxo básico de um pagamento por cartão de crédito é realizado pelos seguintes players:   

- **Gateway de Pagamentos**: O [gateway de pagamentos](https://help.vtex.com/pt/tutorial/o-que-e-um-gateway-de-pagamentos?locale=pt "Gateway de pagamentos") é um sistema que efetua a transmissão dos dados das compras realizadas na sua loja. O gateway envia dados e recebe respostas para que você saiba se uma determinada compra deve ou não ser confirmada. 
- **Adquirente**: O [adquirente](https://help.vtex.com/pt/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil?locale=pt#adquirente "Adquirente"), também chamado de credenciador, é uma empresa especializada em processar pagamentos, isso é, fazer a liquidação financeira das transações de uma loja por meio de cartões de crédito e débito.
- **Bandeira**: As [bandeiras](https://help.vtex.com/pt/tutorial/o-que-e-uma-bandeira-de-cartao-de-credito--4bNba5QYuIwKEmac88KwyI "Bandeira") são empresas responsáveis por definir as regras de negócio para compras realizadas com cartão de crédito. São elas que definem os padrões pelos quais os adquirentes devem processar as transações realizadas por esse meio de pagamento (cada bandeira tem suas próprias regras).
- **Banco Emissor**: O [banco emissor](https://help.vtex.com/pt/tutorial/o-que-e-banco-emissor?locale=pt "Banco Emissor") é a instituição financeira responsável pelos meios de pagamento, sejam eles boletos bancários, cartões de débito ou de crédito. É ele que, ao receber os dados de uma compra feita na sua loja, vai autorizar ou não a venda (dependendo do limite de crédito ou do dinheiro disponível na conta do usuário). 
<br/>
Para saber mais sobre os agentes financeiros envolvidos no fluxo de pagamento de um pedido no Brasil, confira [nosso artigo](https://help.vtex.com/pt/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil?locale=pt#adquirente "Agentes financeiros"). <br/>
<br/>

## Fluxo de Pagamento

O fluxo completo para pagamento por cartão de crédito na VTEX pode ser descrito pela imagem abaixo. 

![Cartão de crédito - Fluxo básico de um pagamento](https://images.ctfassets.net/alneenqid6w5/64zjpwrBkpqbOhR7vtZhKs/424c414ed06f81c4edcc676773fd00d9/Fluxo_Cart__o_de_Cr__dito.jpg)

1. Na tela de Checkout da sua loja, o cliente escolhe o  **Meio de Pagamento**  _cartão de crédito_ para realizar o pagamento de sua compra.  

2. As informações deste pagamento são passadas para o  **Gateway de Pagamentos**, que é o player responsável por garantir que este pagamento seja realizado com sucesso.  

3. Com as informações em mãos, o _gateway de pagamentos_ repassa as informações necessárias para o  **Adquirente**, que é responsável pelas liquidações das transações financeiras com os varejistas.  

4. Em posse das informações, o adquirente envia os dados do pagamento para a  **Bandeira**. A bandeira, que conecta o sistema de adquirentes com os bancos emissores. 
   
5. Por fim, a bandeira envia as informações do pagamento para o **Banco Emissor**. O banco emissor faz a análise de crédito, verifica o limite disponível e então autoriza ou nega o pagamento.

Com a resposta do banco emissor, é realizado o fluxo inverso e o  **Gateway de Pagamentos**  recebe a informação se o pagamento foi aprovado ou negado.

<div class="alert alert-info">
É possível incluir o Antifraude neste fluxo. Neste caso, o antifraude recebe as informações do gateway de que o pagamento foi pré-autorizado pelo banco emissor. Com a informação recebida do gateway, o antifraude envia uma resposta de aprovação ou negação do pagamento. Caso o antifraude negue, o pagamento é cancelado. Caso o pagamento seja aprovado, o pedido pode prosseguir seu fluxo normal.
</div>
