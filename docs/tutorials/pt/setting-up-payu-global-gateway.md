---
title: 'Configurar gateway PayU Global'
id: 2M5OMlqXdYo2CUg8WQIEam
status: DRAFT
createdAt: 2018-03-27T22:40:30.796Z
updatedAt: 2022-12-23T20:41:58.726Z
publishedAt: 
firstPublishedAt: 2018-03-27T22:49:27.104Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-payu-global
locale: pt
legacySlug: configurar-gateway-payu-global
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A PayU Global é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) que oferece uma série de soluções para facilitar (e deixar mais seguras) as transações realizadas na sua loja. Com certificação [PCI](/pt/faq/o-que-e-o-pci-ssc), essa solução é exclusiva para lojas da Romênia.

<div class="alert alert-info"> Atenção: atualmente, a VTEX só suporta as versões 1.0.0 e 1.0.1 do PaymentsOS. 
</div>

Para configurar a PayU Global, siga os passos abaixo:

## Configurar afiliação de gateway PayU Global
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __PayU Global__.
5. Preencha os campos de cadastro com os dados fornecidos pela PaymentsOS (campos _App ID_, _Public Key_ e _Private Key_).
6. No campo __Moeda da conta PayU__, selecione a moeda que será usada nas transações.
7. Em __País da conta PayU__, escolha o país da sua loja (como é uma solução exclusiva, Romênia é o país que deve estar selecionado).
8. No campo __Captura de segurança antecipada__, defina em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
9. Em __Tem um antifraude contratado com essa afiliação?  __, informe se deseja usar um antifraude.
10. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a PayU Global vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a PayU Global). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
