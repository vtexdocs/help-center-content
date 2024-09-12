---
title: 'Configurar pagamentos com WebPay'
id: 4NdDfy57gc68cewEwwKGAS
status: ARCHIVED
createdAt: 2018-03-28T12:40:53.139Z
updatedAt: 2022-12-23T20:47:49.808Z
publishedAt: 
firstPublishedAt: 2018-04-02T19:28:30.940Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagamento-com-webpay
locale: pt
legacySlug: configurar-pagamento-com-webpay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Você pode configurar o [subadquirente](/pt/tutorial/o-que-e-um-subadquirente) WebPay para receber pagamentos na sua loja. Nesta modalidade, seu cliente escolhe o __meio de pagamento__ WebPay e realiza a autenticação no ambiente externo da solução de pagamentos.

Para habilitar pagamentos com WebPay, siga os passos abaixo:

## Configurar afiliação de gateway WebPay
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __WebPay__.
5. No campo __Código Comercio T. Crédito__, informe o número "5970" e o código da sua loja para uso de cartões de crédito.
6. Já o __Periodo de Gracia__ é um campo que se aplica apenas para pagamentos à vista.
7. Em __Tipo de Integracion__, escolha a opção que representa o tipo de acordo comercial que sua loja tem com a WebPay.
8. No campo __Dias para captura de seguridad__, informe em quanto tempo você deseja que a captura de segurança seja realizada.
9. Em __Tiempo de espera de procesamiento__, defina (em dias ou horas) o tempo que deseja esperar pela autorização do pagamento antes de o pedido ser cancelado.
10. No campo __Senha do certificado privado__, preencha a senha do certificado da sua loja.
11. Em __Seleccione el certificado privado (.p12)__, faça o upload de um certificado privado válido (gerado por você, usando uma certificadora ou um software especializado), com extensão .p12 e chave.
12. Já em __Seleccione el certificado público de respuesta (.crt)__, faça o upload de um certificado público válido com extensão .crt (enviado pela WebPay).
13. No campo __Tipo de Comercio__, escolha entre _NORMAL_ e _MALL_.
14. Clique em __Salvar__.

## Configurar condição de pagamento WebPay
1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Selecione o meio de pagamento __WebPay__.
4. Clique no botão __Status__ para ativar essa condição de pagamento.
5. Em __Processar com a afiliação__, escolha a opção _WebPay_.
6. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
7. Você pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, a WebPay vai aparecer no checkout da sua loja como uma opção de pagamento para seus clientes utilizarem.
