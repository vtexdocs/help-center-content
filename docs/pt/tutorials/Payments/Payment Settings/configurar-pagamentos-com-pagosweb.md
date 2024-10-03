---
title: 'Configurar pagamentos com PagosWEB'
id: 2qKIeEPUBKqEGo2OyikyQw
status: ARCHIVED
createdAt: 2018-04-05T15:48:50.151Z
updatedAt: 2024-03-18T19:12:24.950Z
publishedAt: 
firstPublishedAt: 2018-04-05T22:01:49.141Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-pagosweb
locale: pt
legacySlug: configurar-pagamentos-com-pagosweb
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Você pode configurar o PagosWEB para receber pagamentos na sua loja. Nesta modalidade, seu cliente escolhe o __meio de pagamento__ PagosWEB para efetuar a compra.

Para habilitar pagamentos com PagosWEB, siga os passos abaixo:

## Configurar afiliação de gateway PagosWEB
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __PagosWeb__.
4. Preencha os campos de cadastro com os dados fornecidos pelo PagosWEB (campos _Id Cliente_, _Numero Factura_, _Llave 3_, _Palabra Clave_ e _Nombre del Usuario_).
5. No campo __Moneda__, escolha a moeda que será usada nas transações da sua loja.
6. Em __Tipo de Compra OCA__, defina se as compras realizadas com cartões da bandeira OCA serão feitas por crédito ou usando pontos (chamados de Metros).
7. No campo __Días a esperar el pago__, preencha com o mesmo número de dias definidos no cadastro do PagosWEB.
8. Após preencher todos os campos informados, você deverá configurar 3 URLs na sua conta do PagosWEB. São elas: __Aprobada__ `https://{{AccountName}}.vtexpayments.com.br/pagosWeb/aprobada`, __Rechazada__ `https://{{AccountName}}.vtexpayments.com.br/pagosWeb/rechazada` e __Cancelada__ `https://{{AccountName}}.vtexpayments.com.br/pagosWeb/cancelada`.
9. Clique em __Salvar__.

## Configurar condição de pagamento PagosWEB
1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Selecione o meio de pagamento __PagosWeb__.
4. Clique no botão __Status__ para ativar essa condição de pagamento.
5. O campo __Processar com a afiliação__ já vai estar preenchido pela opção _PagosWeb_.
6. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
7. Escolha se deseja que os pagamentos sejam feitos à vista ou parcelados.
8. Se quiser, você também pode optar por uma [condição especial de pagamento](/pt/tutorial/condicoes-especiais).
9. Clique em __Salvar__.

Depois de seguir os passos indicados, o PagosWEB vai aparecer no checkout da sua loja como uma opção de pagamento para seus clientes utilizarem.
