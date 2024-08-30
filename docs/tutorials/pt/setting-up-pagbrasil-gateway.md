---
title: 'Configurar gateway PagBrasil'
id: 2vzj6MkFRuKm4KQAOOmWaa
status: DRAFT
createdAt: 2018-04-10T12:40:34.957Z
updatedAt: 2024-03-18T19:02:31.069Z
publishedAt: 
firstPublishedAt: 2018-04-10T12:50:24.707Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-pagbrasil
locale: pt
legacySlug: configurar-gateway-pagbrasil
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

A PagBrasil é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) especializado em meios de pagamento brasileiros, principalmente cartões de crédito e débito, transferências online e boletos bancários.

Para configurar a PagBrasil, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PagBrasil__ na barra de busca e clique sobre o nome do provedor.
4. No campo __External Service Url__ ("URL externa do serviço), você deve configurar a URL externa que vai estar associada a `/pvt/payments?an={AccountName}`.
5. Preencha os campos de cadastro com os dados fornecidos pela PagBrasil (campos _appKey_ e _appToken_).
6. Em __Implements Installments Service__ ("Implementação do serviço de parcelamentos"), você deve escolher se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a URL configurada no campo __Installments Service Url__ ("URL serviço de parcelamentos").
7. Em __External Cancellation Service__ ("Serviço de cancelamento externo"), você precisa definir o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a URL configurada no campo __External Service Url__ ("URL externa do serviço").
8. Já no campo __Installments Service Url__ ("URL serviço de parcelamentos"), você deve configurar a URL externa que vai estar associada a `/options`.
9. Em __SoftDescriptor__ ("Descrição da Transação"), indique o que vai aparecer para identificar a transação realizada na sua loja.
10. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
11. Em __Usa Antifraude__, informe se deseja usar um antifraude.
12. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a PagBrasil vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a PagBrasil). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
