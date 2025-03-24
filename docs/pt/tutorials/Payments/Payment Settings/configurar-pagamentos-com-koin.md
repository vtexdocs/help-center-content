---
title: 'Configurar pagamentos com Koin'
id: 415vLlrVSUgeYYwycCaGiQ
status: ARCHIVED
createdAt: 2018-04-24T19:48:39.401Z
updatedAt: 2024-03-18T18:30:25.798Z
publishedAt: 
firstPublishedAt: 2018-04-24T21:17:23.835Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-koin
locale: pt
legacySlug: configurar-pagamentos-com-koin
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Você pode configurar a Koin para receber pagamentos na sua loja. Nesta modalidade, seu cliente escolhe o __meio de pagamento__ Koin Pós-pago para efetuar a compra.

Para configurar pagamentos com Koin, siga os passos abaixo:

## Configurar afiliação de gateway Koin
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __Koin__.
4. No campo __Chave de identificação__, preencha a chave fornecida pela Koin no cadastro da sua loja.
5. Em __Senha de identificação__, informe a senha registrada durante o cadastro da sua loja na Koin.
6. No campo __Moeda__, escolha a moeda que será usada nas transações. Atualmente, a única opção disponível é o Real.
7. Clique em __Salvar__.

## Configurar condição de pagamento Koin Pós-Pago
1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Selecione o meio de pagamento __Koin Pós-Pago__.
4. Clique no botão __Status__ para ativar essa condição de pagamento.
5. O campo __Processar com a afiliação__ já vai estar preenchido pela opção _Koin_.
6. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
7. Você pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, a Koin vai aparecer no checkout da sua loja como uma opção de pagamento para seus clientes utilizarem.
