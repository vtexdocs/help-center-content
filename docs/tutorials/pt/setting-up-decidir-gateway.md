---
title: 'Configurar gateway Decidir'
id: 4QvUUoYubmQu2e8AQqu2es
status: DRAFT
createdAt: 2018-04-27T14:40:20.485Z
updatedAt: 2022-12-23T20:17:03.808Z
publishedAt: 
firstPublishedAt: 2018-04-27T20:27:49.319Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-decidir
locale: pt
legacySlug: configurar-gateway-decidir
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A Decidir é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) da Argentina que permite que sua loja aceite dezenas de condições de pagamento.

Para configurar a Decidir, siga os passos abaixo:

## Configurar afiliação de gateway Decidir
1. Acesse o módulo de __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __Decidir__.
5. No campo __Id da Loja__, informe o código que identifica sua loja.
6. Em __Chave secreta__, preencha a senha cadastrada no sistema da Decidir.
7. No campo __Moeda__, escolha a moeda que será usada nas transações da sua loja. Atualmente, somente está disponível a opção _Pesos_.
8. Em __País__, defina o país de atuação da sua loja. Atualmente, a Decidir está disponível apenas na Argentina.
9. No campo __Captura de segurança__, escolha em quanto tempo você deseja que a captura seja realizada. 
10. Em __Antifraude__, informe se sua loja tem ou não um antifraude configurado.
11. No campo __Ahora 12__, selecione se sua loja utiliza o programa de fomento ao consumo Ahora 12. 
12. Em __Plano Governo__, a opção _Sim_ deverá ser seleciona caso sua loja utilize o Ahora 12.
13. No campo __Mudanca de Margem__, defina a margem percentual em que será permitida a alteração do valor do pagamento.
14. Clique em __Salvar__.

>⚠️ Atenção: em casos de contratação do antifraude **CyberSource**, recomendamos que a loja entre em contato com o time da própria CyberSource para saber os detalhes da configuração do Checkout.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a Decidir vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com Decidir). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
