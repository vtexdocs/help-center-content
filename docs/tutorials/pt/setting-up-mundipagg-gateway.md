---
title: 'Configurar gateway Mundipagg'
id: 6C9412jePCUMGguq0YWU8M
status: PUBLISHED
createdAt: 2018-04-18T18:01:44.533Z
updatedAt: 2023-03-29T00:36:17.690Z
publishedAt: 2023-03-29T00:36:17.690Z
firstPublishedAt: 2018-04-18T20:58:03.675Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-mundipagg
locale: pt
legacySlug: configurar-gateway-mundipagg
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A Mundipagg é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) que processa pagamentos feitos com boletos, transferências bancárias e as principais bandeiras de cartão de crédito.

Para configurar a Mundipagg, siga os passos abaixo:

## Configurar afiliação de gateway Mundipagg
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __Mundipagg__.
4. Preencha o campo __Merchant Key__ ("Chave da Loja") com a chave cadastrada na Mundipagg. Ela é formada por 36 caracteres, entre letras, números e hífens.
5. Em __País__, escolha o país da sua loja.
6. O campo __Cadastro Url Post Notification em Mundipagg__ traz um endereço para que você configure o recebimento de notificações sobre status de pagamento. No link `https://{sellerhost}.vtexpayments.com.br/mundipagg/payment/statusnotification`, substitua `{sellerhost}` pelo nome da conta da sua loja. Então, envie a URL final para a Mundipagg completar o cadastro.
7. Em __Instruções no boleto ao Caixa (Max 350 caracteres)__, escreva as instruções que serão impressas no boleto. O texto deve ter, no máximo, 350 caracteres.
8. No campo __Banco do boleto__, indique o banco que vai gerar o boleto e, então, valide a conciliação com a Mundipagg.
9. Em __Tipo de Estorno__, escolha entre o processo automático ou a solicitação manual (neste caso, a Mundipagg vai enviar um e-mail avisando do estorno pendente).
10. No campo __Dias de expiração do Boleto__, selecione o número de dias para pagamento até que o boleto deixe de valer.
11. Em __Boleto Registrado__, informe se o boleto tem ou não registro.
12. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
13. Clique em __Salvar__.

<div class="alert alert-info">
Os passos indicados nos itens <strong>8</strong>, <strong>9</strong>, <strong>11</strong> e <strong>12</strong> devem ser preenchidos se você quiser oferecer boletos bancários como condição de pagamento na sua loja. 
</div>

## Configurar condição de pagamento
Depois de seguir os passos indicados, a Mundipagg vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Mundipagg). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
