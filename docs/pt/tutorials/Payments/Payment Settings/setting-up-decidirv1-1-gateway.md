---
title: 'Configurar gateway DecidirV1.1'
id: 4faOPP5b28Im2QOqiIma84
status: ARCHIVED
createdAt: 2018-06-27T14:11:28.047Z
updatedAt: 2022-12-23T20:17:30.385Z
publishedAt: 
firstPublishedAt: 2018-06-27T17:18:18.115Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-decidirv1-1
locale: pt
legacySlug: configurar-gateway-decidirv1-1
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O conector __DecidirV1.1__ é a nova versão da integração do [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) argentino Decidir com a plataforma VTEX.

Para configurar o conector __DecidirV1.1__, siga os passos abaixo:

## Configurar afiliação de gateway DecidirV1.1
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __DecidirV1.1__.
5. No campo __Id da Loja__, informe o código que identifica sua loja.
6. Em __Chave secreta__, preencha a senha cadastrada no sistema da Decidir.
7. No campo __Moeda__, escolha a moeda que será usada nas transações da sua loja. Atualmente, somente está disponível a opção _Pesos_.
8. Em __País__, defina o país de atuação da sua loja. Atualmente, a Decidir está disponível apenas na Argentina.
9. No campo __Captura de segurança__, escolha em quanto tempo você deseja que a captura seja realizada. 
10. Em __Antifraude__, informe se sua loja tem ou não um antifraude configurado.
11. No campo __Ahora 12__, selecione se sua loja utiliza o programa de fomento ao consumo Ahora 12. 
12. Em __Plano Governo__, a opção _Sim_ deverá ser seleciona caso sua loja utilize o Ahora 12.
13. No campo __Mudança margem__, defina a margem percentual em que será permitida a alteração do valor do pagamento.
14. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o conector DecidirV1.1 vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o DecidirV1.1). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
