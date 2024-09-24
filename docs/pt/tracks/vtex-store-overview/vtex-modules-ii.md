---
title: 'Módulos da VTEX II'
id: 3MYcZaojb5HSUg6ufm6GxQ
status: CHANGED
createdAt: 2024-02-07T13:20:33.477Z
updatedAt: 2024-02-22T17:08:09.649Z
publishedAt: 2024-02-22T14:07:12.569Z
firstPublishedAt: 2024-02-22T14:07:12.569Z
contentType: trackArticle
productTeam: Others
slug: modulos-da-vtex-ii
locale: pt
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugPT: trilha-da-loja-vtex
---

Além dos módulos abordados no artigo anterior, como [Catálogo](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo), [Preços](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#precos), [Promoções](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#promocoes) e [Logística](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica), a plataforma VTEX possui outros módulos necessários à operação da loja. Este artigo apresenta uma visão geral e as principais configurações dos seguintes módulos:

- [Pagamentos](#pagamentos)
- [Pedidos](#pedidos)
- [Checkout](#checkout)

## Pagamentos

O módulo de [Pagamentos](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB) na VTEX é responsável por coordenar todas as operações financeiras realizadas em uma loja. Por meio dele, é possível determinar quais provedores, meios e condições de pagamento serão oferecidos aos clientes no checkout, bem como verificar informações a respeito das transações de pagamento efetuadas em cada pedido.

### Antes de começar em Pagamentos

Para processar e receber os pagamentos das compras realizadas em uma loja VTEX, é preciso contratar os serviços de um ou mais provedores de pagamento. Este contrato é realizado diretamente entre o lojista e o respectivo provedor, não havendo mediação ou participação da VTEX. Para verificar quais provedores estão disponíveis na VTEX em cada país, basta acessar a [Lista de provedores de pagamento](https://help.vtex.com/pt/tutorial/lista-de-provedores-de-pagamento-por-pais--2im3BEGXxSAcRuxEaIHPvp).

>⚠️ É recomendável utilizar mais de um provedor de pagamento na loja para prover uma boa experiência ao cliente por meio diversos tipos de meios e condições de pagamento, e ao mesmo tempo, operar com diferentes taxas e custos, melhorando o desempenho do negócio.

As configurações de pagamento descritas nesta trilha podem ser realizadas a qualquer momento durante o processo de onboarding. Entretanto, para que a loja possa realizar qualquer tipo de transação de pagamento, é necessário que os módulos de [Catálogo](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo), [Preços](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#precos) e [Logística](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica) tenham sido previamente configurados.

### Como funciona o módulo Pagamentos

A tabela a seguir apresenta os principais agentes e termos utilizados no contexto de Pagamentos:

| **Termo** | **Descrição** |
| --- | --- |
| **Gateway** | Sistema responsável por processar informações de pagamento de uma compra no checkout. |
| **Adquirente** | Empresa que realiza o processamento de pagamentos realizados por cartões de crédito e débito. |
| **Subadquirente** | Empresa intermediadora de pagamentos entre os adquirentes, provedores de antifraude e lojistas. |
| **Bandeira de cartão** | Empresa responsável por definir regras de negócios aplicadas a cartão de crédito e débito. |
| **Banco emissor** | Instituição financeira responsável por realizar a autorização de um meio de pagamento, como boleto bancário, cartão de crédito ou débito. |
| **Provedor de pagamento** | Empresa que oferece suporte para transações eletrônicas em diversos meios de pagamento. |
| **Provedor de antifraude** | Empresa responsável por realizar análises de risco em transações de cartão de crédito e débito. |
| **Payment Provider Protocol** | Protocolo de comunicação de um provedor de pagamento utilizado para transmissão de dados de pagamento. Saiba mais sobre como provedores de pagamento são integrados na VTEX em [Payment Provider Protocol](https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). |
| **Anti-fraud Provider Protocol** | Protocolo de comunicação de um provedor de antifraude utilizado para transmissão de dados de análises de pagamento. Saiba mais sobre como provedores de antifraude são integrados na VTEX em [Anti-fraud Provider Protocol](https://developers.vtex.com/docs/guides/how-the-integration-protocol-between-vtex-and-antifraud-companies-works). |
| **Meio de pagamento** | Métodos disponibilizados pelo cliente para realizar o pagamento de uma compra, tais como, cartões de crédito, débito, carteiras digitais. |
| **Condição de pagamento** | Regras estabelecidas para um determinado meio de pagamento, por exemplo, número máximo de parcelas permitidas e juros aplicados. |

### Fluxos de pagamento e transação

Quando uma compra é finalizada na VTEX, uma nova transação é criada e o fluxo de pagamento é iniciado. No exemplo abaixo, é possível verificar um fluxo de pagamento para uma compra realizada por cartão de crédito:

![payments-pt](//images.ctfassets.net/alneenqid6w5/5QPFkvZhpZzRWuq15zlMoz/c40d02d7dd6be8f01dc8b9ed03c4741e/payments_image1_PT.jpg)

Conforme as informações vão sendo transmitidas entre os agentes responsáveis pelo processamento dos dados, o status da transação de pagamento é atualizado para indicar em qual momento do fluxo os recursos se encontram. Para o fluxo de pagamento por cartão de crédito, temos o seguinte exemplo de status da transação:

![payments-flow-pt](//images.ctfassets.net/alneenqid6w5/6fsbJZ07a18ea8I1pk7UFo/9419c03573e34455c5a97f08982be8fd/payments_image2_ALL.JPG)

Mais informações sobre cada etapa podem ser encontradas no artigo [Fluxo da transação no Pagamentos](https://help.vtex.com/pt/tutorial/transaction-flow-in-payments--Er2oWmqPIWWyeIy4IoEoQ). Para saber como acessar mais informações sobre as transações no Admin VTEX, bas conferir o artigo [Ver detalhes da transação](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy).

### Configurando pagamentos na loja

Após estabelecer contrato com um provedor de pagamento, é necessário configurá-lo e definir quais meios e condições de pagamento serão disponibilizados no checkout da loja.

#### Habilitando o conector de pagamento

Os provedores de pagamento precisam ser habilitados em uma loja de modo que transmitam e recebam as informações necessárias para a conclusão de uma transação de pagamento. Os passos abaixo devem ser seguidos para cada provedores a ser habilitado:

1. Acessar a [Lista de provedores de pagamento](https://help.vtex.com/pt/tutorial/lista-de-provedores-de-pagamento-por-pais--2im3BEGXxSAcRuxEaIHPvp).
2. Selecionar o provedor desejado, clicando no respectivo link da tabela.
3. Acessar o Admin VTEX para configurar o provedor conforme as instruções descritas no respectivo artigo de configuração.

>ℹ️ Os artigos de configuração de provedores também podem ser acessados ao digitar o nome do provedor desejado na barra de busca do [Help Center](https://help.vtex.com/pt/).

#### Definindo meios e condições de pagamento

Para configurar os meios e condições de pagamento, os passos abaixo devem ser seguidos:

1. No Admin VTEX, acessar **Configurações da loja > Pagamentos > Configurações**, ou digitar **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de pagamento**, clicar no botão **+**.
3. Clicar no nome do meio de pagamento desejado.
4. Se desejar, o nome do meio de pagamento pode ser modificado na coluna **Nome da condição**.
5. Ativar a opção **Status**.
6. Em **Processar com a afiliação:** o nome do provedor de pagamento deve ser selecionado.
7. Se desejar utilizar um sistema antifraude, a opção **Usar solução antifraude** deve ser selecionada. Saiba mais em [Configurando provedor de antifraude (opcional)](#configurando-provedor-de-antifraude).
8. Caso o meio de pagamento escolhido permita a configuração de pagamentos parcelados, selecionar a opção **Parcelado** em **A vista ou parcelado?** e inserir as informações desejadas. Saiba mais em [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455).
9. Se desejar, também é possível configurar condições especiais de pagamento. Saiba mais em [Adicionando condições especiais de pagamento](#adicionando-condicoes-especiais-de-pagamento).
10. Clicar em `Salvar`.

### Configurações opcionais em Pagamentos

De acordo com o perfil de operação da loja, também é possível realizar as seguintes configurações opcionais de pagamentos:

- [Adicionar condições especiais de pagamento](#adicionando-condicoes-especiais-de-pagamento)
- [Configurar meios de pagamento customizados](#configurando-meios-de-pagamento-customizados)
- [Configurar provedor de antifraude](#configurando-provedor-de-antifraude)
- [Criar vales-presente](#criando-vales-presente)       
- [Habilitar carteiras digitais](#habilitando-carteiras-digitais)
- [Customer Credit](#costumer-credit)

#### Adicionando condições especiais de pagamento

Condições especiais de pagamento permitem que sejam definidas regras específicas para um determinado meio de pagamento, tais como data de vencimento, banco emissor, política comercial, condição comercial e nome da conta. 

Para conhecer mais detalhes sobre cada tipo de condição especial de pagamento, basta consultar o artigo [Configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456).

#### Configurando meios de pagamento customizados

Na VTEX, é possível configurar os seguintes de meios de pagamento customizados:

- **Promissórias**: compromisso de pagamento entre o lojista e o cliente referente ao valor de uma compra. É necessária a aprovação manual do lojista para aprovar a transação de compra. Mais informações em [Configurar pagamentos com Promissória](https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ).

- **Cartões de loja (bandeira própria)**: cartão de crédito ou débito, emitido em parceria entre uma empresa e uma bandeira de cartões (Visa, Mastercard, entre outros). Pode ser utilizado somente para compras em estabelecimentos que operem com a marca da bandeira emissora do cartão. Mais informações em [Configurar pagamentos com Cartões de Loja (bandeira própria)](https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4).

- **Cartões de loja (co-branded)**: cartão de crédito ou débito de marca própria, emitido para uso exclusivo em compras realizadas na empresa emissora do cartão. Mais informações em [Configurar pagamentos com Cartões de Loja (co-branded)](https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-cartoes-de-loja-cobranded--jrkLK41IjuquUmyKUi86Q).

#### Configurando provedor de antifraude

Provedores de antifraude também podem ser configurados na loja para realizar análises de pagamentos de cartão de crédito e débito, desde que haja um contrato entre o lojista e o provedor. A sua utilização é recomendada, porém, opcional.

Para verificar os provedores de antifraude atualmente integrados na VTEX, é necessário digitar na barra de busca do [Help Center](https://help.vtex.com/pt/) o nome do provedor desejado ou acessar o Admin VTEX, conforme o artigo [Configurar o antifraude](https://help.vtex.com/pt/tutorial/como-configurar-antifraude--tutorials_446).

#### Criando vales-presente

Os vales-presente, também conhecidos como, gift cards ou vouchers, podem ser utilizados em lojas VTEX como meio de pagamento ou programa de fidelidade.

A VTEX possui o seu próprio provedor de vales-presente, permitindo que vales sejam criados e gerenciados por meio do Admin VTEX ou da API do Gift Card. Saiba mais sobre as características de criação pelos dois métodos em [GiftCard API](https://developers.vtex.com/docs/api-reference/giftcard-api).

Além disso, também é possível oferecer gift cards de provedores externos por meio da [GiftCard Hub API](https://developers.vtex.com/docs/api-reference/giftcard-hub-api). Para utilizar um provedor externo de gift card, é necessário possuir um contrato com o provedor e verificar se já está integrado na VTEX. Mais informações nos artigos [Configurar Vale-presente](https://help.vtex.com/pt/tutorial/gift-card--tutorials_995) e [Gift Card system architecture](https://developers.vtex.com/docs/guides/gift-card-integration-guide-system-architecture).

#### Habilitando carteiras digitais

Carteiras digitais são ambientes seguros onde dados bancários e de cartão de crédito podem ser armazenados de forma criptografada e que podem ser acessadas pelo cliente no momento de realizar uma compra. A segurança deste meio de pagamento consiste em não ser necessário preencher todos os dados no checkout a cada compra, sendo somente solicitado ao realizar a autenticação dentro do próprio ambiente de carteira digital.

Na VTEX, é possível oferecer carteiras digitais nativas, como o [Google Pay](https://help.vtex.com/pt/tracks/carteira-digital-e-wallet--6X8YyZBoVJpz5R8oXciTyu/61JMBvM5Vanqj6RaJsP8CT), ou carteiras digitais integradas, tais como [Apple Pay](https://help.vtex.com/en/tracks/digital-wallet-e-wallet--6X8YyZBoVJpz5R8oXciTyu/STKWiXJSR9ImPt5EEC2aL), [Samsung Pay](https://help.vtex.com/pt/tutorial/configurar-samsung-pay-como-meio-de-pagamento--5Yj9rgzOCVYuGmAumQlfpP) e [PayPal](https://help.vtex.com/pt/tutorial/configurar-paypal--4p3sD9u1moq2Aya2oc684w). Mais informações em [Carteira digital (ewallet)](https://help.vtex.com/pt/tracks/digital-wallet-e-wallet--6X8YyZBoVJpz5R8oXciTyu/7jLbdfch9Oe2yYbQa9zwE1).

#### Customer Credit

Customer credit é a solução da VTEX para permitir que crédito seja oferecido a clientes específicos, possibilitando um prazo maior para o pagamento de suas compras. Por meio deste app, é possível ter acesso a gerenciamento de clientes, configuração de prazos e parcelamentos, definição de crédito e acompanhamento de status de títulos de cobrança emitidos, entre outras funcionalidades.

Para mais informações, acesse [Customer Credit - Visão Geral](https://help.vtex.com/pt/tutorial/customer-credit-visao-geral--1uIqTjWxIIIEW0COMg4uE0) e [Customer Credit - Como Começar](https://help.vtex.com/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs).

## Pedidos

A partir do momento em que o cliente conclui a compra, é gerado um [pedido](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa) na VTEX. O gerenciamento de pedidos pode ser feito pelo Admin VTEX, em **Pedidos > [Todos os pedidos](https://help.vtex.com/pt/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi)**, acessando-se uma [página de detalhes](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl) da compra, ou via API. Uma visão geral de conteúdo para desenvolvedor sobre a [Orders API](https://developers.vtex.com/docs/api-reference/orders-api#overview) pode ser encontrada no guia [Orders](https://developers.vtex.com/docs/guides/orders-overview).

### Antes de começar em Pedidos

Para a loja ser capaz de gerenciar seus pedidos, a plataforma VTEX não exige configurações obrigatórias, e oferece diversas [configurações opcionais](#configuracoes-opcionais-em-pedidos) que podem ser estratégicas para diferentes modelos de negócio.

No entanto, para o cliente ser capaz de realizar a compra e gerar um pedido, a loja precisa ter produtos cadastrados e precificados, oferecer [meios de pagamento](https://help.vtex.com/pt/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) e garantir o envio do pedido. Para isso, é necessário realizar as configurações obrigatórias dos seguintes módulos:

- [Catálogo](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo)
- [Preços](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#precos)
- [Logística](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica)
- [Pagamentos](#pagamentos)

### Integração de pedidos

Com grande frequência, as lojas desejam [integrar seus pedidos](https://developers.vtex.com/docs/guides/erp-integration-guide) a sistemas como ERP (_Enterprise Resource Planning_) e WMS (_Warehouse Management System_). A [implementação de backend](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) permite à loja automatizar algumas ações no processamento do pedido, tais como:

- Receber notificações do andamento de pedidos e do seu status no [fluxo do pedido](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196).
- Obter informações de pedidos que precisam ser separados e embalados.
- Enviar a [fatura](https://help.vtex.com/pt/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v) para a plataforma VTEX, que vai encaminhá-la ao cliente.
- Realizar a [alteração de itens](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190) do pedido.

Existem duas maneiras diferentes de acompanhar a mudança de status de pedido, o [Feed](https://developers.vtex.com/docs/guides/orders-feed) ou [Hook](https://developers.vtex.com/docs/guides/orders-feed#hook). Mais informações sobre integração de pedidos podem ser encontradas no artigo [Integrações de backend](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu).

### Gerenciar pedidos

No Admin VTEX, em **Pedidos > [Todos os pedidos](https://help.vtex.com/pt/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi)**, é possível realizar as seguintes ações:

- Visualizar uma listagem com todos os pedidos da loja.
- Acessar informações da compra na [página de  detalhes](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), clicando sobre o pedido.

Na página de detalhes do pedido, também é possível acompanhar a evolução do [fluxo do pedido](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196). A imagem a seguir é um exemplo de fluxo quando a loja atua simultaneamente como marketplace e seller:

![order-flow-pt](//images.ctfassets.net/alneenqid6w5/5ObTRbhlsYxoaW0Lzw7RmS/65a4533c0b089dd2792a21383f913393/pedido_fluxo_completo_pt.png)

Para localizar o registro de uma compra no Admin VTEX, além de poder [filtrar pedidos](https://help.vtex.com/pt/tutorial/filtrar-todos-pedidos--tutorials_192) na página **Todos os pedidos**, existe a opção de pesquisar pela barra de busca global, que aparece em todas as páginas do Admin VTEX. Para realizar a pesquisa, basta selecionar a opção `Pedidos`, no canto direito da barra de busca, e utilizar algum dos seguintes valores:

- ID do pedido
- Nome do cliente
- Email do cliente
- Documento do cliente 

>⚠️ Só é possível acessar informações de pedidos criados nos últimos dois anos, sendo o mesmo período válido para os clientes acessarem seus pedidos pelo [Minha Conta]().

#### Emails transacionais

A VTEX oferece de forma nativa o envio de [emails transacionais](https://help.vtex.com/pt/tutorial/understanding-the-message-center--tutorials_84), para a loja ser capaz de disparar emails automáticos para o cliente informando sobre as atualizações do pedido. Ou seja, conforme o pedido avança no fluxo de processamento, o cliente pode receber um email de notificação para acompanhar, por exemplo, a aprovação do pagamento da compra e o envio do pedido.

A plataforma oferece uma série de [templates de emails transacionais](https://help.vtex.com/pt/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my), mas também é possível personalizar a comunicação. A lista abaixo apresenta as principais informações sobre essas configurações opcionais, que são independentes entre si:

- **Alias:** email alternativo gerado automaticamente pela plataforma VTEX para [mascarar](https://help.vtex.com/pt/tutorial/configuracoes-gerais--tutorials_194#tipo-de-mascara-de-conversa) o email do cliente nos emails transacionais da loja. Esse [tipo de máscara de conversa](https://help.vtex.com/pt/tutorial/configuracoes-gerais--tutorials_194#tipo-de-mascara-de-conversa) representa mais proteção para os dados dos clientes, pois o email alternativo é criado de forma não legível para sistemas externos.
- **Availability Notify ou Avise-me**: configuração do botão [Avise-me](https://help.vtex.com/pt/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e) na página do produto que o cliente visualizou no site da loja. O botão se torna visível quando aquele produto está indisponível e o cliente pode escolher inserir o seu email no campo informado para ser notificado quando o produto estiver novamente disponível para compra.

#### Funcionalidade Minha conta

[Minha Conta](https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh) é a solução que garante aos clientes da loja terem autonomia no acompanhamento dos seus pedidos e na atualização de seus dados pessoais. Trata-se de ambiente único para cada cliente, que o acessa com senha e usuário.

Uma das vantagens da **Minha Conta** é que a funcionalidade torna mais direta a comunicação entre o cliente e a loja, além de permitir ao cliente ações como pedir novamente ou cancelar o pedido. A comunicação mais eficiente tende a diminuir a necessidade de serviços de atendimento ao cliente o que, por sua vez, representa uma redução de custos para a loja.

### Configurações opcionais em Pedidos

A tabela a seguir apresenta algumas configurações opcionais do módulo Pedidos:

| **Funcionalidade** | **Descrição** |
| :---: | :--- |
| Assinaturas | [Assinaturas](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) é um agendador automático de pedidos para facilitar aos clientes da loja fazerem compras recorrentes. O cliente indica quais itens deseja comprar e a frequência com que os pedidos automáticos devem ser feitos.<br><br>[Configurar Assinaturas](https://help.vtex.com/pt/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj) é especialmente interessante para modelos de negócio como supermercados e vendas para pets, nos quais os clientes consomem os mesmo produtos com certa periodicidade. |
| Televendas | A solução [televendas](https://help.vtex.com/pt/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS) permite mais autonomia para a equipe de serviço de atendimento da loja no apoio aos clientes. Ao [configurar as funcionalidades de televendas](https://help.vtex.com/pt/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R), os operadores da loja se tornam habilitados a realizar tarefas como:<br><br>- Comprar em nome de um cliente.<br>- Ajustar manualmente o preço de itens de um carrinho de compras.<br>- Alterar pedidos existentes.<br>- Gerenciar informações de perfil de um cliente no [Minha Conta](#funcionalidade-minha-conta). |
| Divergência de valores | Nas [estratégias de marketplace](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) da loja no ecossistema VTEX, pode acontecer do preço definido pelo seller ser diferente do preço oferecido pelo marketplace. Cenários com promoções no marketplace, por exemplo, podem interferir no preço que o seller definiu para a venda do seu produto.<br><br>Para evitar erros de processamento de pedidos, o seller VTEX pode [configurar regras de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) e estabelecer parâmetros para autorização automática de pedidos com essa diferença de preço entre seller e marketplace. Ao criar regras automáticas para aprovar ou recusar pedidos com diferença de preço, a loja evita ter que fazer o processamento manual de cada item e a operação ganha em eficiência. |

Mais informações em [Configurações Gerais dos pedidos](https://help.vtex.com/pt/tutorial/configuracoes-gerais--tutorials_194).

## Checkout

O checkout é a etapa final no processo de compras online e contribui de maneira expressiva para uma boa taxa de conversão de vendas. No contexto da plataforma VTEX, o módulo [Checkout](https://help.vtex.com/pt/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) desempenha algumas funções essenciais:

- Fornecimento de informações sobre o preço e a disponibilidade dos produtos na vitrine da loja.
- Adiciona itens e processa o carrinho de compras.
- Realiza o processo de conclusão da compra. 

### Antes de começar no Checkout

Para assegurar o correto funcionamento do checkout, é necessário que os seguintes módulos estejam devidamente configurados pela loja: [Catálogo](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR), [Logística](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx), [Preços](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP#), [Promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N#), [Pagamentos](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#) e [Pedidos](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE).

![checkout-pt](//images.ctfassets.net/alneenqid6w5/57AJQIGKk5fuwN8SRMenM0/df639ea0697ca3e01b99963acd509b4f/checkout_image_PT.jpg)

Este compartilhamento de informações permite que sejam processadas informações de disponibilidade, preços, promoções aplicáveis, métodos de envio e de pagamento.

### Customizando o Checkout da loja

As customizações descritas abaixo são opcionais e tem o objetivo de produzir melhorias na performance da Checkout. Antes de configurá-las, é recomendável realizar uma análise para identificar quais são aplicáveis ao perfil operacional da loja.

- [Otimização das opções de entregas do checkout](#otimizacao-das-opcoes-de-entregas-no-checkout)
- [Carrinho abandonado](#carrinho-abandonado)
- [Modificar o preço de um item no carrinho de compras](#modificar-o-preco-de-um-item-no-carrinho-de-compras)
- [Valor mínimo de pedido e quantidade máxima de itens por SKU](#valor-minimo-de-pedido-e-quantidade-maxima-de-itens-por-sku)
- [Geolocalização no Checkout](#geolocalizacao-no-checkout)
- [Checkout UI Custom app](#checkout-ui-custom-app)

### Otimização das opções de entregas no Checkout

Solução que permite acionar uma combinação de informações cadastradas para exibir ao cliente qual é a opção mais rápida e a mais barata para realizar a entrega dos produtos selecionados no carrinho. As outras opções (de maior custo ou maior prazo), não são exibidas no Checkout, melhorando a experiência do cliente.

Mais informações em [Otimização das opções de entrega no Checkout](https://help.vtex.com/pt/tutorial/otimizacao-das-opcoes-de-entrega-no-checkout--6DeGO9eBSFWe4XkoS0SxAB).

### Carrinho abandonado 

Funcionalidade que permite envio de e-mails aos clientes para recordá-los sobre a conclusão da compra de um carrinho que tenha sido criado anteriormente, mas não finalizado.

>ℹ️ Configurar o carrinho abandonado durante o Onboarding, permitirá que todos os carrinhos que ainda serão criados, possam ser encaminhados para avaliação do cliente ou finalizados.

Mais informações em [Configurar carrinho abandonado](https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740).

### Modificar o preço de um item no carrinho de compras

Na plataforma VTEX, as lojas têm a possibilidade de ajustar manualmente o preço de um item (SKU) presente no carrinho do Checkout. Esta funcionalidade pode ser usada para aplicar descontos especiais, corrigir erros de preço, criar ofertas personalizadas, resolver reclamações relacionadas a preços ou ajustar custos de envio.

>⚠️ Apenas usuários com [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) e permissões devidamente registrados no Admin VTEX podem realizar esta modificação.

Mais informações em [Modificar o preço de um item no carrinho de compras](https://help.vtex.com/pt/tutorial/modificar-o-preco-de-um-item-no-carrinho-de-compras--7Cd37aCAmtL1qmoZJJvjNf).

### Valor mínimo de pedido e quantidade máxima de itens por SKU

Nas operações de ecommerce, o custo logístico associado à entrega dos produtos desempenha um papel importante na manutenção da competitividade. Esse custo é impactado pelo valor total do carrinho de compras e quantidade de unidades do mesmo SKU contidas no carrinho.

A implementação de um valor mínimo de pedido pode melhorar a eficiência para sellers que realizam entregas em lotes, evitando pedidos com valor baixo ou poucos itens, que podem ser economicamente inviáveis.

Mais informações em [Como configurar valor mínimo de pedido e quantidade máxima de itens por SKU](https://help.vtex.com/pt/tutorial/como-configurar-valor-minimo-de-pedido-e-quantidade-maxima-de-itens-por-sku--7JqipPUBxtKz0m4OlAyKs9).

### Geolocalização no Checkout 

A solução de geolocalização possibilita ao cliente utilizar o Google Maps na tela do checkout da loja para definir um local de entrega, ao invés de utilizar o CEP do endereço. Após indicar o ponto de entrega, o valor do frete do pedido será exibido de acordo com o valor cadastrado pelo lojista entregas na região selecionada do mapa (polígonos de coordenadas).

Além de calcular automaticamente o custo do frete, se a loja oferece a opção de retirada na loja física, a geolocalização pode ajudar os clientes a encontrar a loja mais próxima com base em sua localização atual.

Mais informações em [Configurar geolocalização no checkout](https://help.vtex.com/pt/tutorial/geolocalizacao-no-checkout--tutorials_4345).

### Checkout UI Custom app

Este aplicativo permite que diferentes customizações visuais possam ser aplicadas na tela do Checkout da loja. 

Mais informações em [Checkout UI Custom](https://developers.vtex.com/docs/apps/vtex.checkout-ui-custom).
