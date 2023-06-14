---
title: 'Configurar pagamentos com MEO Wallet'
id: RTxEjuC7eMSeamQKAKs0W
status: DRAFT
createdAt: 2018-04-20T15:36:37.820Z
updatedAt: 2022-12-23T20:27:15.676Z
publishedAt: 
firstPublishedAt: 2018-04-20T16:19:00.365Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagamentos-com-meo-wallet
locale: pt
legacySlug: configurar-pagamentos-com-meo-wallet
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Você pode receber pagamentos na sua loja usando a MEO Wallet. Nesta modalidade, seu cliente escolhe o __meio de pagamento__ MEO Wallet para efetuar a compra.

Para fazer as configurações necessárias, siga os passos abaixo:

## Configurar afiliação de gateway MEO Wallet
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __MEO Wallet__.
5. Preencha o campo __API Key__ com os dados fornecidos pela MEO Wallet.
6. Em __Currency__, escolha a moeda que será usada nas transações da sua loja. Atualmente, só o euro está disponível.
7. No campo __Tme To Expire (in days)__, defina a quantidade de dias para o pagamento expirar.
8. Em __CallbackURL in MeoWallet__, você deverá cadastra a URL de callback `https://{{accountName}}.vtexpayments.com.br/meowallet/{{affiliationId}}/callback` no painel da MEO Wallet. Basta substituir `{{accountName}}` pelo Account Name principal da sua loja e `{{affiliationId}}` pelo ID da afiliação (gerado após a configuração).
9. Clique em __Salvar__.

## Configurar condição de pagamento MEO Wallet
1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Selecione o meio de pagamento __MeoWallet__.
4. Clique no botão __Status__ para ativar essa condição de pagamento.
5. Em __Processar com a afiliação__, a opção _MEO Wallet_ já vai estar selecionada (já que é a única disponível).
6. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
7. Você pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, a MEO Wallet vai aparecer no checkout da sua loja como uma opção de pagamento para seus clientes utilizarem.
