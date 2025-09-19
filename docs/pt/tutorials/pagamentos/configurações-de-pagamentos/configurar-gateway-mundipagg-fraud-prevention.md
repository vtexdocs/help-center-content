---
title: 'Configurar gateway Mundipagg Fraud Prevention'
id: yFbysX42GW2wawu82q6QA
status: CHANGED
createdAt: 2018-04-18T21:01:40.512Z
updatedAt: 2024-03-18T18:40:56.708Z
publishedAt: 2024-02-16T12:17:04.418Z
firstPublishedAt: 2018-04-18T21:23:11.844Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-mundipagg-fraud-prevention-gateway
legacySlug: configurar-gateway-mundipagg-fraud-prevention
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

> ❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

A Mundipagg oferece uma versão do seu [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) com a funcionalidade de antifraude. O Mundipagg Fraud Prevention traz ainda mais segurança para o processamento de compras feitas com boletos, transferências bancárias e as principais bandeiras de cartão de crédito.

Para configurar o Mundipagg Fraud Prevention, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Mundipagg Fraud Prevention__ na barra de busca e clique sobre o nome do provedor.
4. Preencha o campo __Merchant Key__ ("Chave da Loja") com a chave cadastrada na Mundipagg. Ela é formada por 36 caracteres, entre letras, números e hífens.
5. Em __País__, escolha o país da sua loja.
6. O campo __Cadastro Url Post Notification em Mundipagg__ traz um endereço para que você configure o recebimento de notificações sobre status de pagamento. No link `https://{sellerhost}.vtexpayments.com.br/mundipagg/payment/statusnotification`, substitua `{sellerhost}` pelo account name da sua loja. Então, envie a URL final para a Mundipagg completar o cadastro.
7. Em __Instruções no boleto ao Caixa (Max 350 caracteres)__, escreva as instruções que serão impressas no boleto. O texto deve ter, no máximo, 350 caracteres.
8. No campo __Banco do boleto__, indique o banco que vai gerar o boleto e, então, valide a conciliação com a Mundipagg.
9. Em __Tipo de Estorno__, escolha entre o processo automático ou a solicitação manual (neste caso, a Mundipagg vai enviar um e-mail avisando do estorno pendente).
10. No campo __Dias de expiração do Boleto__, selecione o número de dias para pagamento até que o boleto deixe de valer.
11. Em __Boleto Registrado__, informe se o boleto tem ou não registro.
12. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
13. Em __Usa Antifraude__, informe se você tem a funcionalidade antifraude contratada com a Mundipagg.
14. Clique em __Salvar__.

> ℹ️ Os passos indicados nos itens **8**, **9**, **11** e **12** devem ser preenchidos se você quiser oferecer boletos bancários como condição de pagamento na sua loja.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o Mundipagg Fraud Prevention vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o Mundipagg Fraud Prevention). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
