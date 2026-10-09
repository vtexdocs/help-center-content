---
title: 'O que é Ficha Depósito'
createdAt: 2019-01-24T20:45:35.451Z
updatedAt: 2026-10-09T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: what-is-deposit-slip
locale: pt
hidden: false
---

Ficha Depósito é um meio de pagamento bastante popular no México. Seu funcionamento é muito parecido com o dos boletos bancários do Brasil, mas com uma diferença: o pagamento só pode ser feito em pontos autorizados.

## Como funciona
Para pagar com Ficha Depósito, o usuário escolhe esse meio de pagamento no checkout e recebe um documento com código de barras que contém as informações do pagamento. Para efetivar a compra, ele precisa ir até um dos pontos autorizados e pagar o valor do documento em dinheiro ou com cartão de crédito.

## Como aceitar Ficha Depósito na sua loja

Para oferecer Ficha Depósito no checkout, você precisa criar uma condição de pagamento para esse meio de pagamento no Admin VTEX. A diferença entre os dois conceitos é explicada em [Diferença entre meios de pagamento e condições de pagamento](/pt/docs/tutorials/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento).

Antes de criar a condição, [cadastre um provedor de pagamento](/pt/docs/tutorials/afiliacoes-de-gateway) que processe Ficha Depósito. Os provedores disponíveis no México estão na [Lista de provedores de pagamento por país](/pt/docs/tutorials/lista-de-provedores-de-pagamento-por-pais). Com o provedor cadastrado, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre __FichaDeposito__.
4. Ative a condição no campo __Status__.
5. No campo __Processar com o provedor__, selecione o provedor que vai processar os pagamentos com Ficha Depósito.
6. Clique em `Salvar`.


