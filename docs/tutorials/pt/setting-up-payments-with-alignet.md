---
title: 'Configurar pagamentos com Alignet'
id: 4qfl6jgDyMGA0IuM0siEii
status: DRAFT
createdAt: 2018-03-28T20:48:01.728Z
updatedAt: 2024-03-18T17:48:35.669Z
publishedAt: 
firstPublishedAt: 2018-03-28T23:00:56.209Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagamentos-com-alignet
locale: pt
legacySlug: configurar-pagamentos-com-alignet
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Na plataforma VTEX, é possível configurar o [subadquirente](/pt/tutorial/o-que-e-um-subadquirente) Alignet para receber pagamentos na sua loja. Nessa modalidade, o cliente escolhe o __meio de pagamento__ Alignet e é redirecionado para autenticação no ambiente do subadquirente.

Para configurar Alignet, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Alignet__ na barra de busca e clique sobre o nome do provedor.
4. No campo __Acquirer__, escolha o adquirente que será usado na integração.
5. Preencha os campos de cadastro com os dados fornecidos pela Alignet (campos _Código Adquirente_, _CodigoComercio_, _CodigoMall_, _CodigoTerminal_ _ChavePrivadaAssinatura_, _ChavePrivadaCriptografia_, _ChavePublicaAssinaturaAlignet_ e _ChavePublicaCriptografiaAlignet_).
6. No campo __CodigoMoeda__, preencha com o código [ISO 4217](https://pt.wikipedia.org/wiki/ISO_4217) da moeda que será usada nos pagamentos.
7. Em __Linguagem__, escolha entre espanhol e inglês.
8.  No campo __Vector__, preencha a sequência de até 16 caracteres (somente letras e números) gerada pela sua loja.
9.  Clique em `Salvar`.

## Configurar condição de pagamento Alignet

1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Clique no meio de pagamento __Alignet__.
4. Clique no botão __Status__, para ativar esta condição de pagamento.
5. Caso sua loja tenha um antifraude configurado, você pode ativá-lo marcando a caixa __Usar Antifraude__.
6. Se quiser, você também pode adicionar uma [condição especial de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, a Alignet vai aparecer no checkout da sua loja como uma opção de pagamento. Depois de clicar em __Finalizar Compra__, seu cliente será redirecionado para autenticação no ambiente da Alignet.

Você também pode ativar esta condição de pagamento usando o [PayMee](https://help.vtex.com/pt/tutorial/configurar-o-gateway-paymee--3fsilRdrBS6GOAy622soWy).
