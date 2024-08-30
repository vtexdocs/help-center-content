---
title: 'Configurar pagamento com Cielo no VTEX Sales App'
id: 2p8rALKTNojgEl8zKn5BtG
status: PUBLISHED
createdAt: 2024-08-16T15:15:25.799Z
updatedAt: 2024-08-26T12:47:35.631Z
publishedAt: 2024-08-26T12:47:35.631Z
firstPublishedAt: 2024-08-16T18:22:08.305Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-cielo-no-vtex-sales-app
locale: pt
legacySlug: configurar-pagamento-com-cielo-no-vtex-sales-app
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Cielo. Por meio deste conector, sua loja pode oferecer transações de pagamento em lojas físicas (VTEX Sales App), utilizando pontos de vendas (POS). Para mais informações, acesse [O que é o VTEX Sales App?](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

>ℹ️ Para utilizar o provedor Cielo em sua loja por outros canais de venda online (exceto VTEX Sales App), acesse [Configurar pagamento com CieloEcommerce](https://help.vtex.com/pt/tutorial/configurar-pagamento-com-cieloecommerce--6zuELBqEo0QzApbU4l7L4).

Para utilizar o provedor Cielo no VTEX Sales App, é necessário:

- [Configurar chaves no ambiente Cielo](#configurar-chaves-no-ambiente-cielo)
- [Configurar conector Cielo (VTEX Sales App) na VTEX](#configurar-conector-cielo-vtex-sales-app-na-vtex)
- [Configurar condição de pagamento](#configurar-condicao-de-pagamento)

>⚠️ As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Cielo para informações atualizadas.

## Configurar chaves no ambiente Cielo

Os passos a seguir descrevem as configurações mínimas a serem realizadas para que o conector da Cielo seja devidamente configurado. Demais configurações personalizadas aplicadas à clientes, habilitação de métodos de pagamento específicos ou funcionalidades particulares da plataforma, devem ser realizadas conforme documentação da Cielo.

<blockquote><ui>1. Acesse o <a href="https://desenvolvedores.cielo.com.br/api-portal/pt-br">portal do desenvolvedor Cielo</a> para criar uma nova conta.</ui>

<blockquote><ui>>⚠️ O portal do desenvolvedor Cielo permite que o usuário obtenha informações de todas as chaves necessárias pra configurar a conexão entre a VTEX e a Cielo Lio. Recomendamos que o procedimento abaixo seja realizado por um usuário que já possua acesso às demais chaves de sua conta na Cielo.</blockquote>

<blockquote><ui>2. Após realizar o login, solicite a criação das chaves do SalesApp por meio do link <a href="https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108">https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108</a> ou acessando <b>Suporte > Cielo Lio > Envie sua pergunta > Token de integração remota</b> dentro do portal. Informe os seguintes dados: <i>Assunto: Solicitação de chaves de produção</i> e <i>Nome do PDV: SalesApp</i>.</ui> 

<blockquote><ui>>ℹ️ As chaves estarão disponíveis no portal do desenvolvedor da Cielo em até 2 dias úteis.</blockquote>

## Configurar conector Cielo (VTEX Sales App) na VTEX

<blockquote><ui>1. No Admin VTEX, acesse <b>Configurações da loja > Pagamentos > Provedores</b>, ou digite <b>Provedores</b> na barra de busca no topo da página.</ui>

<blockquote><ui>2. Na tela de provedores, clique no botão <b>Novo provedor</b>.</ui>

<blockquote><ui>3. Digite o nome <b>CieloEcommerce</b> na barra de busca e clique sobre o nome do provedor.</ui>

<blockquote><ui>4. Em <b>Chave de aplicação</b>, insira o nome da sua <b>MerchantID</b> fornecido pela Cielo.</ui>

<blockquote><ui>5. Em <b>Token de aplicação</b>, insira a chave <b>Client token</b> gerada no portal do desenvolvedor da Cielo.</ui>  

<blockquote><ui>6. Caso deseje modificar o nome de identificação a ser exibido para o provedor Cielo na tela do Admin VTEX, insira a informação no campo <b>Nome</b> em <b>Informações básicas</b>.</ui>

<blockquote><ui>7. Em <b>Controle de pagamento</b>, desative o ambiente de teste ao desmarcar a opção <b>Ativar modo de teste</b>.</ui>

<blockquote><ui>8. Em <b>Liquidação automática</b>, selecione a opção <b>Usar comportamento recomendado pelo processador de pagamentos</b>.</ui>  

<blockquote><ui>9. Mantenha desmarcada a opção <b>Ativar split de recebíveis e enviar recebedores de pagamento</b>.</ui>   

<blockquote><ui>10. Em <b>Integration</b>, selecione a opção <b>Adquirencia</b> (clientes Cielo 3.0) ou <b>Gateway</b> (clientes Braspag).</ui>

<blockquote><ui>11. Em <b>Provider</b>, selecione a opção <b>Cielo</b> (clientes Cielo 3.0) ou <b>Cielo30</b> (clientes Braspag).</ui>

<blockquote><ui>12. Em <b>IsSplit</b>, selecione a opção <b>False</b>.</ui>

<blockquote><ui>13. Em <b>useCieloMDR</b>, selecione a opção <b>Not Defined</b>.</ui> 

<blockquote><ui>14. Em <b>UseMpi</b>, selecione a opção <b>False</b>.</ui> 

<blockquote><ui>15. Mantenha em branco os seguintes campos: <b>MpiClientId</b>, <b>MpiClientSecret</b>, <b>MpiMerchantName</b>, <b>MpiMCC</b>, <b>MpiEstablishmentCode</b> e <b>SoftDescriptor</b>.</ui>

<blockquote><ui>16. Em <b>AntifraudProvider</b>, selecione a opção <b>Not Defined</b>.</ui>  

<blockquote><ui>17. Em <b>Antifraud</b>, selecione a opção <b>Not Defined</b>.</ui>   

<blockquote><ui>18. Em <b>AntifraudSequenceCriteria</b>, selecione a opção <b>Not Defined</b>.</ui> 

<blockquote><ui>19. Em <b>Captura</b>, selecione a opção <b>Imediatamente</b>.</ui>   

<blockquote><ui>20. Em <b>UseVerifyCard</b>, selecione a opção <b>False</b>.</ui>

<blockquote><ui>21. Em <b>AcceptInternationalCard</b>, selecione a opção <b>True</b>.</ui>

<blockquote><ui>22. Em <b>AcceptPrePaidCard</b>, selecione a opção <b>True</b>.</ui>

<blockquote><ui>23. Em <b>SaveCard</b>, selecione a opção <b>False</b>.</ui>  

<blockquote><ui>24. Em <b>CancelRefundType</b>, selecione a opção <b>Automático Sempre que possível</b>.</ui> 

<blockquote><ui>25. Em <b>CieloLIOClientId</b>, preencha a chave da Lio fornecida pela Cielo.</ui>   

<blockquote><ui>26. Clique em <b>Salvar</b>.</ui>

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **Venda Direta Debito** ou **Venda Direta Credito**.
4. Em **Processar com o provedor**, selecione o conector configurado anteriormente.
5. Ative a condição no campo **Status**.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
7. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Cielo pode demorar até 10 minutos para aparecer como opção de pagamento no VTEX Sales App de sua loja.
