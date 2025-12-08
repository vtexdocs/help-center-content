---
title: 'Configurar pagamento com CieloEcommerce'
id: 6zuELBqEo0QzApbU4l7L4
status: PUBLISHED
createdAt: 2023-09-18T14:07:22.540Z
updatedAt: 2025-04-09T19:25:40.961Z
publishedAt: 2025-04-09T19:25:40.961Z
firstPublishedAt: 2023-09-18T15:29:57.321Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cieloecommerce
legacySlug: configurar-pagamento-com-cieloecommerce
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o CieloEcommerce. Por meio desta integração, sua loja pode realizar vendas com cartões de crédito, débito, private labels, cobranded, boletos bancário, PIX, entre outros.

Para configurar a CieloEcommerce, siga os passos abaixo:
1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão **Novo provedor**.
3. Digite o nome **CieloEcommerce** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com o **MerchantID** e **MerchantKey** fornecidos pela CieloEcommerce.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor CieloEcommerce na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Caso deseje utilizar o [Split de pagamento](/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) em sua loja, selecione a opção **Ativar split de recebíveis e enviar recebedores de pagamento** e indique o **Responsável pelas tarifas de processamento de pagamentos** e **Responsável pelos estornos** (marketplace, sellers ou marketplaces e sellers).
8. Em **Integration**, selecione se o conector será utilizado como **Adquirencia** ou **Gateway**.
9. Em **Provider**, selecione o adquirente a ser utilizado com o provedor CieloEcommerce.
10. Em **DaysToInvoiceCancel**, selecione a quantidade de dias desejada para cancelar a fatura.
11. Em **IsSplit**, escolha se a opção de split estará disponível.
12. Em **useCieloMDR**, selecione a opção configurada no provedor CieloEcommerce.
13. Em **UseMpi**, escolha se as transações serão autenticadas (3DS 2.0). Este campo é obrigatório para o tipo de pagamento débito. Caso selecione "True", siga para o Passo 14. Caso selecione "False", siga para o Passo 15.
14. Preencha os campos **MpiClientId**, **MpiClientSecret**, **MpiMerchantName**, **MpiMCC** e **MpiEstablishmentCode** com os seus dados de acesso Mpi.
15. Em **DataOnly**, selecione a opção configurada no provedor CieloEcommerce.
16. Em **SoftDescriptor**, indique a informação a ser exibida para identificar a transação realizada na sua loja.
17. Em **UseAntifraudSolution**, selecione a opção desejada.
18. Em **AntifraudProvider**, selecione o provedor de antifraude que deseja utilizar com o CieloEcommerce.

> ⚠️ Verifique com a Cielo se as opções de antifraude no CieloEcommerce já estão disponíveis para uso. Caso ainda estejam em desenvolvimento, ambos os campos descritos no passo 15 deverão ser deixados em branco. Para mais informações sobre como utilizar opções de antifraude em sua loja, acesse [Configurar o antifraude](/pt/tutorial/como-configurar-antifraude).

19. Em **Antifraud** e **AntifraudSequenceCriteria**, selecione as opções conforme informações do antifraude CieloEcommerce.
20. Em **CaptureOnLowRisk** e **VoidOnHighRisk**, selecione as opções configuradas no provedor CieloEcommerce.
21. Em **CustomMdds**, selecione as opções conforme informações do antifraude CieloEcommerce.
22. Em **Captura**, selecione o período em que a captura do pagamento deve ser solicitada. O tempo padrão será realizado quatro dias após a autorização.
23. Selecione os campos **UseVerifyCard**, **AcceptInternationalCard**, **AcceptPrePaidCard** e **CancelRefundType** de acordo com as suas configurações no CieloEcommerce.
24. Em **CieloLIOClientId**, preencha conforme informações do provedor CieloEcommerce.
25. Clique em **Salvar**.

Para configurar os métodos de pagamento a serem processados pela CieloEcommerce, acesse [Condições de Pagamento](/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector CieloEcommerce pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
