---
title: Configurar o gateway Braspag
id: 7tQmfLMvtYEsWoaaAaeKSC
status: PUBLISHED
createdAt: 2018-02-27T18:21:37.603Z
updatedAt: 2023-03-29T01:03:06.303Z
publishedAt: 2023-03-29T01:03:06.303Z
firstPublishedAt: 2018-02-27T18:52:38.519Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-o-gateway-braspag
legacySlug: configurar-o-gateway-braspag
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o gateway Braspag. Com este conector, sua loja pode realizar vendas com cartão de crédito e boleto bancário, por exemplo. Para saber como configurar a Braspag, siga os passos abaixo:

## Configurar afiliação de gateway Braspag

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateway__, clique no botão __+__.
3. Clique no conector __Braspag__.
4. No campo __Id do Merchant__, preencha com o dado fornecido pela Braspag.
5. Em cada campo das __Bandeiras__ *(Visa, Mastercard, Diners etc.)*, escolha o adquirente que irá processar o pagamento com os cartões destas bandeiras.
6. Em __Boleto Bancário__, escolha a adquirente que irá fazer a comunicação com o banco emissor do boleto.
7. No campo __Instruções no boleto ao Caixa__, insira as orientações necessárias ao caixa que irá receber o pagamento do boleto.
8. Em __Validade do boleto em dias__, insira a informação de vencimento do boleto.
9. Em __Usa cartão protegido__, selecione *Sim* para salvar os dados do cartão na Braspag ou *Não* para não salvar as informações do cartão. O serviço para __compra em um clique__ deve estar contratado junto à Braspag para que os dados do cartão sejam salvos.
10. Em __Boleto Registrado__, selecione *Sim* caso os boletos emitidos sejam do tipo registrado ou *Não* caso os boletos emitidos não sejam registrados.
11. No campo __País__, selecione o país onde os pagamentos estão sendo realizados.
12. Em __Moeda__, selecione a moeda a ser utilizada nas transações.
13. No campo __Captura de segurança antecipada__, selecione o tempo desejado para realizar uma captura antecipada do valor do pagamento.
14. Clique em __Salvar__.

## Configurar condição de pagamento

Na VTEX, o conector da Braspag processa principalmente __cartões de crédito__ e __boletos bancários__. 
Para configurar os meios de pagamento a serem processados pelo gateway da Braspag, [acesse nosso tutorial](/pt/tutorial/condicoes-de-pagamento).
