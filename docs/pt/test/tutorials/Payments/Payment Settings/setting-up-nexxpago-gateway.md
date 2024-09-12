---
title: 'Configurar gateway Nexxpago'
id: 28Fgmof1WYEeAcM8MkOcWm
status: ARCHIVED
createdAt: 2018-04-18T15:46:11.611Z
updatedAt: 2024-03-18T18:58:03.614Z
publishedAt: 
firstPublishedAt: 2018-04-18T16:05:40.588Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-nexxpago
locale: pt
legacySlug: configurar-gateway-nexxpago
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

A Nexxpago é uma empresa com certificação [PCI](/pt/faq/o-que-e-o-pci-ssc) que oferece diversas soluções de pagamento. A principal delas é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) que permite o processamento de pagamentos por meio de boletos bancários e cartões de crédito.

Para configurar a Nexxpago, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Nexxpago__ na barra de busca e clique sobre o nome do provedor.
4. No campo __External Service Url__("URL externa do serviço), você deve configurar a url externa que vai estar associada a `/pvt/payments?an={AccountName}`.
5. Preencha os campos de cadastro com os dados fornecidos pela Nexxpago (campos _appKey_ e _appToken_).
6. Em __Implements Installments Service__ ("Implementação do serviço de parcelamentos"), você deve escolher se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a URL configurada no campo __Installments Service Url__ ("URL serviço de parcelamentos").
7. Em __External Cancellation Service__("Serviço de cancelamento externo"), você precisa definir o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__ ("URL externa do serviço").
8. Já no campo __Installments Service Url__ ("URL serviço de parcelamentos"), você deve configurar a url externa que vai estar associada a `/options`.
9. Em __SoftDescriptor__ ("Descrição da Transação"), indique o que vai aparecer para identificar a transação realizada na sua loja.
10. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
11. Em __Usa Antifraude__, informe se deseja usar um antifraude.
12. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Nexxpago, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Nexxpago pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
