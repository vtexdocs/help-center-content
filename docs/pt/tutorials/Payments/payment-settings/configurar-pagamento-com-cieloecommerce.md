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

<blockquote><ui>1. No Admin VTEX, acesse <b>Configurações da loja > Pagamentos > Provedores</b>, ou digite <b>Provedores</b> na barra de busca no topo da página.</ui>

<blockquote><ui>2. Na tela de provedores, clique no botão <b>Novo provedor</b>.</ui>

<blockquote><ui>3. Digite o nome <b>CieloEcommerce</b> na barra de busca e clique sobre o nome do provedor.</ui>

<blockquote><ui>4. Em <b>Autorização do provedor</b>, preencha os campos <b>Chave de aplicação</b> e <b>Token de aplicação</b> com o <b>MerchantID</b> e <b>MerchantKey</b> fornecidos pela CieloEcommerce.</ui>

<blockquote><ui>5. Caso deseje modificar o nome de identificação a ser exibido para o provedor CieloEcommerce na tela do Admin VTEX, insira a informação no campo <b>Nome</b> em <b>Informações básicas</b>.</ui>

<blockquote><ui>6. Em <b>Controle de pagamento</b>, selecione se deseja ativar o provedor em ambiente de teste clicando em <b>Ativar modo de teste</b>.</ui>

<blockquote><ui>7. Caso deseje utilizar o <a href="https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx">Split de pagamento</a> em sua loja, selecione a opção <b>Ativar split de recebíveis e enviar recebedores de pagamento</b> e indique o <b>Responsável pelas tarifas de processamento de pagamentos</b> e <b>Responsável pelos estornos</b> (marketplace, sellers ou marketplaces e sellers).</ui>

<blockquote><ui>8. Em <b>Integration</b>, selecione se o conector será utilizado como <b>Adquirencia</b> ou <b>Gateway</b>.</ui>

<blockquote><ui>9. Em <b>Provider</b>, selecione o adquirente a ser utilizado com o provedor CieloEcommerce.</ui>

<blockquote><ui>10. Em <b>DaysToInvoiceCancel</b>, selecione a quantidade de dias desejada para cancelar a fatura.</ui>  

<blockquote><ui>11. Em <b>IsSplit</b>, escolha se a opção de split estará disponível.</ui>

<blockquote><ui>12. Em <b>useCieloMDR</b>, selecione a opção configurada no provedor CieloEcommerce.</ui>    

<blockquote><ui>13. Em <b>UseMpi</b>, escolha se as transações serão autenticadas (3DS 2.0). Este campo é obrigatório para o tipo de pagamento débito. Caso selecione "True", siga para o Passo 12. Caso selecione "False", siga para o Passo 13.</ui>

<blockquote><ui>14. Preencha os campos <b>MpiClientId</b>, <b>MpiClientSecret</b>, <b>MpiMerchantName</b>, <b>MpiMCC</b> e <b>MpiEstablishmentCode</b> com os seus dados de acesso Mpi.</ui>

<blockquote><ui>15. Em <b>DataOnly</b>, selecione a opção configurada no provedor CieloEcommerce.</ui>

<blockquote><ui>16. Em <b>SoftDescriptor</b>, indique a informação a ser exibida para identificar a transação realizada na sua loja.</ui>

<blockquote><ui>17. Em <b>UseAntifraudSolution</b>, selecione a opção desejada.</ui>  

<blockquote><ui>18. Em <b>AntifraudProvider</b>, selecione o provedor de antifraude que deseja utilizar com o CieloEcommerce.</ui>

<blockquote><ui><div class="alert alert-warning">
  Verifique com a Cielo se as opções de antifraude no CieloEcommerce já estão disponíveis para uso. Caso ainda estejam em desenvolvimento, ambos os campos descritos no passo 15 deverão ser deixados em branco. Para mais informações sobre como utilizar opções de antifraude em sua loja, acesse <a href="https://help.vtex.com/pt/tutorial/como-configurar-antifraude">Configurar o antifraude</a>.
  </div></blockquote>
<br>
<blockquote><ui>19. Em <b>Antifraud</b> e <b>AntifraudSequenceCriteria</b>, selecione as opções conforme informações do antifraude CieloEcommerce.</ui>

<blockquote><ui>20. Em <b>CaptureOnLowRisk</b> e <b>VoidOnHighRisk</b>, selecione as opções configuradas no provedor CieloEcommerce.</ui>   

<blockquote><ui>21. Em <b>CustomMdds</b>, selecione as opções conforme informações do antifraude CieloEcommerce.</ui> 

<blockquote><ui>22. Em <b>Captura</b>, selecione o período em que a captura do pagamento deve ser solicitada. O tempo padrão será realizado quatro dias após a autorização.</ui>

<blockquote><ui>23. Selecione os campos <b>UseVerifyCard</b>, <b>AcceptInternationalCard</b>, <b>AcceptPrePaidCard</b> e <b>CancelRefundType</b> de acordo com as suas configurações no CieloEcommerce.</ui>

<blockquote><ui>24. Em <b>CieloLIOClientId</b>, preencha conforme informações do provedor CieloEcommerce.</ui>   

<blockquote><ui>25. Clique em <b>Salvar</b>.</ui>

Para configurar os métodos de pagamento a serem processados pela CieloEcommerce, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector CieloEcommerce pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
