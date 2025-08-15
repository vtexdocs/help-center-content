---
title: 'Configurar pagamento com Cybersource LAC'
id: Hp80vaO9BWAu6hBs4kqfg
status: PUBLISHED
createdAt: 2025-04-10T13:59:59.763Z
updatedAt: 2025-05-27T18:54:09.965Z
publishedAt: 2025-05-27T18:54:09.965Z
firstPublishedAt: 2025-04-10T14:17:24.584Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cybersource-lac
legacySlug: configurar-pagamento-com-cybersource-lac
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Cybersource LAC. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como cartões de crédito, débito, Pix, boleto e Visa Click To Pay.

Para configurar Cybersource LAC, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Cybersource LAC__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Cybersource LAC.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Cybersource LAC na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Campos do provedor__, selecione ou preencha os campos __Merchant ID__, __Secret Key__, __Shared Secret Key__, __SOAP Key__, __Domain (URL)__, __Merchant Category Code (MCC)__, __Company Name__, __Company Tax Id__, __Capture Setting__, __Acquiring Banks (Mexico)__, __Plan Type__, __Payer Authentication__, __Service Authentication__, __Auth Card Brands__, __Bank Slip Expiration Days (BR)__, __Has Network Token?__ e __Sandbox Mode__ conforme as instruções do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Cybersource LAC, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Cybersource LAC pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
