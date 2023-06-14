---
title: 'Configurar gateway Pay-me'
id: 34IXQJGJdea666aiOA8y8S
status: DRAFT
createdAt: 2018-03-28T19:01:07.670Z
updatedAt: 2022-12-23T20:40:43.255Z
publishedAt: 
firstPublishedAt: 2018-03-28T22:58:57.093Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-pay-me
legacySlug: configurar-gateway-pay-me
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Desenvolvida pela Alignet, a Pay-me é uma solução de pagamentos que possui diversas funcionalidades. Na plataforma VTEX, ela atua exclusivamente como [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) para processar a __condição de pagamento__ Alignet (que também possui um conector de mesmo nome para realizar essa função). 

Para habilitar pagamentos com Alignet, usando o gateway Pay-me, siga os passos abaixo:

## Configurar afiliação de gateway Pay-me
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __Payme__.
5. Preencha os campos de cadastro com os dados fornecidos pela Alignet (campos _Código de adquirente_, _Código de Comercio_, _Password_, _PrivateKey Comercio_ e _PublicKey Alignet_).
6. No campo __Moeda__, selecione uma das moedas que podem ser processadas pelo gateway.
7. Em __Idioma__, escolha entre espanhol e inglês.
8. Clique em __Salvar__.

## Configurar condição de pagamento Alignet
1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Clique no meio de pagamento __Alignet__.
4. Clique no botão __Status__, para ativar esta condição de pagamento.
5. Caso sua loja tenha um antifraude configurado, você pode ativá-lo marcando a caixa __Usar Antifraude__.
6. Se quiser, você também pode adicionar uma [condição especial de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, a Alignet vai aparecer no checkout da sua loja como uma opção de pagamento. Depois de clicar em __Finalizar Compra__, seu cliente será redirecionado para autenticação no ambiente da Alignet. Outra opção para você habilitar essa condição de pagamento é usar o conector [Alignet](/pt/tutorial/configurar-pagamentos-com-alignet).
