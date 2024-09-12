---
title: 'Configurar pagamentos com Stelo'
id: 6c16nRhAGWaA2mSUOOuC00
status: ARCHIVED
createdAt: 2018-03-02T20:20:44.376Z
updatedAt: 2024-03-18T20:21:28.181Z
publishedAt: 
firstPublishedAt: 2018-03-05T19:08:32.807Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagamentos-com-stelo
locale: pt
legacySlug: configurar-pagamentos-com-stelo
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Além de um [subadquirente](/pt/tutorial/configurar-subadquirente-stelo) para processar transações realizadas com diversas condições de pagamento, a Stelo também oferece um serviço de [carteira digital](/pt/faq/o-que-e-uma-carteira-digital-e-wallet). Seu cliente escolhe pagar com ela e é redirecionado para autenticação no ambiente da Stelo.

Para configurar pagamentos com a carteira digital Stelo na sua loja, você primeiro precisa cadastrar a afiliação de gateway __Stelo Redirect__.

## Configurar afiliação de gateway Stelo Redirect
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __Stelo Redirect__.
4. Preencha os campos de cadastro com os dados fornecidos pela Stelo (campos _Client Id_ e _Client Secret_).
5. No campo __maxInstallments__, escolha a quantidade máxima de parcelas para os pagamentos feitos com Stelo.
6. Em __Pais__, selecione onde a condição de pagamento será oferecida (atualmente, a única opção disponível é o Brasil).
7. Em __Moeda__, defina se quer cobrar em dólar ou real.
8. Clique em __Salvar__.

## Configurar condição de pagamento Stelo
1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Selecione o meio de pagamento __Stelo__.
4. Clique no botão __Status__ para ativar essa condição de pagamento.
5. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
6. Escolha se os pagamentos vão ser à vista ou parcelados.
7. Você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, a Stelo vai aparecer no checkout da sua loja como uma opção de pagamento. Depois de clicar em __Finalizar Compra__, seu cliente será direcionado para o ambiente da carteira digital, onde deverá seguir as etapas de autenticação.
