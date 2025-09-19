---
title: 'Configurar pagamento com Cielo no VTEX Sales App'
id: 2p8rALKTNojgEl8zKn5BtG
status: PUBLISHED
createdAt: 2024-08-16T15:15:25.799Z
updatedAt: 2025-07-17T20:58:47.728Z
publishedAt: 2025-07-17T20:58:47.728Z
firstPublishedAt: 2024-08-16T18:22:08.305Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-cielo-in-vtex-sales-app
legacySlug: configurar-pagamento-com-cielo-no-vtex-sales-app
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Cielo. Por meio deste conector, sua loja pode oferecer transações de pagamento em lojas físicas (VTEX Sales App), utilizando pontos de vendas (POS). Para mais informações, acesse [O que é o VTEX Sales App?](/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

> ℹ️ Para utilizar o provedor Cielo em sua loja por outros canais de venda online (exceto VTEX Sales App), acesse [Configurar pagamento com CieloEcommerce](/pt/tutorial/configurar-pagamento-com-cieloecommerce--6zuELBqEo0QzApbU4l7L4).

Para utilizar o provedor Cielo no VTEX Sales App, é necessário:

- [Configurar chaves no ambiente Cielo](#configurar-chaves-no-ambiente-cielo)
- [Configurar conector Cielo (VTEX Sales App) na VTEX](#configurar-conector-cielo-vtex-sales-app-na-vtex)
- [Configurar condição de pagamento](#configurar-condicao-de-pagamento)

> ⚠️ As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Cielo para informações atualizadas.

## Configurar chaves no ambiente Cielo

Os passos a seguir descrevem as configurações mínimas a serem realizadas para que o conector da Cielo seja devidamente configurado. Demais configurações personalizadas aplicadas à clientes, habilitação de métodos de pagamento específicos ou funcionalidades particulares da plataforma, devem ser realizadas conforme documentação da Cielo.

<blockquote><ui>1. Acesse o [portal do desenvolvedor Cielo](https://desenvolvedores.cielo.com.br/api-portal/pt-br) para criar uma nova conta.</ui>

<blockquote><ui>> ⚠️ O portal do desenvolvedor Cielo permite que o usuário obtenha informações de todas as chaves necessárias pra configurar a conexão entre a VTEX e a Cielo Lio. Recomendamos que o procedimento abaixo seja realizado por um usuário que já possua acesso às demais chaves de sua conta na Cielo.</blockquote>

<blockquote><ui>2. Após realizar o login, solicite a criação das chaves do SalesApp por meio do link [https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108](https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108) ou acessando **Suporte > Cielo Lio > Envie sua pergunta > Token de integração remota** dentro do portal. Informe os seguintes dados: *Assunto: Solicitação de chaves de produção* e *Nome do PDV: SalesApp*.</ui> 

<blockquote><ui>> ℹ️ As chaves estarão disponíveis no portal do desenvolvedor da Cielo em até 2 dias úteis.</blockquote>

## Configurar conector Cielo (VTEX Sales App) na VTEX

<blockquote><ui>1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.</ui>

<blockquote><ui>2. Na tela de provedores, clique no botão **Novo provedor**.</ui>

<blockquote><ui>3. Digite o nome **CieloEcommerce** na barra de busca e clique sobre o nome do provedor.</ui>

<blockquote><ui>4. Em **Chave de aplicação**, insira o nome da sua **MerchantID** fornecido pela Cielo.</ui>

<blockquote><ui>5. Em **Token de aplicação**, insira a chave **Client token** gerada no portal do desenvolvedor da Cielo.</ui>  

<blockquote><ui>6. Caso deseje modificar o nome de identificação a ser exibido para o provedor Cielo na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.</ui>

<blockquote><ui>7. Em **Controle de pagamento**, desative o ambiente de teste ao desmarcar a opção **Ativar modo de teste**.</ui>

<blockquote><ui>8. Mantenha desmarcada a opção **Ativar split de recebíveis e enviar recebedores de pagamento**.</ui>   

<blockquote><ui>9. Em **Integration**, selecione a opção **Adquirencia** (clientes Cielo 3.0) ou **Gateway** (clientes Braspag).</ui>

<blockquote><ui>10. Em **Provider**, selecione a opção **Cielo** (clientes Cielo 3.0) ou **Cielo30** (clientes Braspag).</ui>

<blockquote><ui>11. Em **IsSplit**, selecione a opção **False**.</ui>

<blockquote><ui>12. Em **useCieloMDR**, selecione a opção **Not Defined**.</ui> 

<blockquote><ui>13. Em **UseMpi**, selecione a opção **False**.</ui> 

<blockquote><ui>14. Mantenha em branco os seguintes campos: **MpiClientId**, **MpiClientSecret**, **MpiMerchantName**, **MpiMCC**, **MpiEstablishmentCode** e **SoftDescriptor**.</ui>

<blockquote><ui>15. Em **AntifraudProvider**, selecione a opção **Not Defined**.</ui>  

<blockquote><ui>16. Em **Antifraud**, selecione a opção **Not Defined**.</ui>   

<blockquote><ui>17. Em **AntifraudSequenceCriteria**, selecione a opção **Not Defined**.</ui> 

<blockquote><ui>18. Em **Captura**, selecione a opção **Imediatamente**.</ui>   

<blockquote><ui>19. Em **UseVerifyCard**, selecione a opção **False**.</ui>

<blockquote><ui>20. Em **AcceptInternationalCard**, selecione a opção **True**.</ui>

<blockquote><ui>21. Em **AcceptPrePaidCard**, selecione a opção **True**.</ui>

<blockquote><ui>22. Em **SaveCard**, selecione a opção **False**.</ui>  

<blockquote><ui>23. Em **CancelRefundType**, selecione a opção **Automático Sempre que possível**.</ui> 

<blockquote><ui>24. Em **CieloLIOClientId**, preencha a chave da Lio fornecida pela Cielo.</ui>   

<blockquote><ui>25. Clique em **Salvar**.</ui>

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **Venda Direta Debito** ou **Venda Direta Credito**.
4. Em **Processar com o provedor**, selecione o conector configurado anteriormente.
5. Ative a condição no campo **Status**.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
7. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Cielo pode demorar até 10 minutos para aparecer como opção de pagamento no VTEX Sales App de sua loja.
