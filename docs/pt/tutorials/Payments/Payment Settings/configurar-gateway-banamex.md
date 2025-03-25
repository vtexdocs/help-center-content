---
title: 'Configurar gateway Banamex'
id: 8TnJhdKnPGYsoUyAGGQgI
status: ARCHIVED
createdAt: 2018-05-11T21:13:33.957Z
updatedAt: 2022-12-23T20:12:15.664Z
publishedAt: 
firstPublishedAt: 2018-05-23T21:47:31.912Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-banamex-gateway
locale: pt
legacySlug: configurar-gateway-banamex
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O banco mexicano Citibanamex possui um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) integrado à VTEX. Com o Banamex, sua loja pode receber pagamentos com Ficha Depósito, desde que atue no México e tenha conta no Citibanamex.

Para configurar o Banamex (o gateway do Citibanamex), siga os passos abaixo:

## Configurar afiliação de gateway Banamex
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __Banamex__.
5. No campo __Cuenta Habiente__, informe o nome do titular da conta.
7. Em __Cuenta de Depósito__, preencha o número da conta da sua loja no Citibanamex para depósito dos pagamentos.
8. No campo __Sucursal__, indique a agência bancária em que sua loja possui conta.
9. Em __Lugar del Pago__, informe os locais autorizados para receber os pagamentos.
10. No campo __Días hasta el vencimiento__, diga quantos dias seu cliente terá para efetuar o pagamento. O padrão é 3 dias de validade.
11. Em __Nombre del campo en Masterdata__, indique o nome que será dado ao campo no Master Data.
12. Deixe o campo __Efectivo__ em branco.
13. Preencha os campos __Texto 1__ e __Texto 2__ com as instruções que deseja dar na Ficha Depósito.
14. Clique em __Salvar__.

## Configurar condição de pagamento Ficha Depósito
1. Já dentro das __Configurações__ do módulo _Pagamentos_, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Selecione o meio de pagamento __FichaDeposito__.
4. Clique no botão __Status__ para ativar essa condição de pagamento.
5. Em __Processar com a afiliação__, a opção _Banamex_ já vai estar selecionada.
6. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
7. Você pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, o checkout da sua loja vai passar a contar com ficha depósito como condição de pagamento. Seus clientes precisam apenas selecionar a condição de pagamento, imprimir a ficha e fazer o pagamento em uma agência do Citibanamex.
