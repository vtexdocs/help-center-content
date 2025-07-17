---
title: 'Configurar loja B2B self-service'
id: 4576nMaRKk4madDZ7liiXS
status: PUBLISHED
createdAt: 2021-03-30T13:11:03.141Z
updatedAt: 2022-10-25T13:15:21.263Z
publishedAt: 2022-10-25T13:15:21.263Z
firstPublishedAt: 2021-03-30T19:15:32.844Z
contentType: tutorial
productTeam: B2B
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: configuring-b2b-self-service-stores
locale: pt
legacySlug: configurar-loja-b2b-self-service
subcategoryId: 2LrbEY7MFeKqmdfYLBCnfi
---

O cenário self-service é o mais flexível das possibilidades de B2B. Nele, o cliente pode realizar o fluxo de compra sem a necessidade de interação com vendedores, o que diminui a fricção no fluxo de compra. Por isso, o  self-service é um processo semelhante à compra em B2C. 

Esse cenário apresenta vantagens para o usuário, já que ele pode explorar o catálogo, o inventário e os preços com liberdade, conforme seu perfil de acesso. Além disso, ele pode ver informações e fazer pedidos a qualquer momento, sem depender de nenhum intermediador.

<div class="alert alert-info" role="info">Caso você já seja um cliente B2C e queira configurar um cenário B2B, entre em contato com <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</div>

Uma das primeiras decisões que devem ser tomadas ao estruturar uma loja B2B é decidir se ela será aberta ou fechada ao público.

Optar por uma __loja aberta ao público__ significa que qualquer usuário pode visualizar todos os produtos. Essa opção é muito útil para quem deseja construir uma referência para seu próprio site e atender todas as regras de SEO voltadas para ecommerce. 

Geralmente, as empresas que escolhem esse cenário são as próprias fabricantes de um determinado produto, uma vez que as próprias indústrias já têm as referências e os conteúdos (como imagens e descrições) de cada um dos produtos que produzem.

Já uma __loja fechada ao público__ é aquela na qual os usuários não conseguem visualizar nenhum dos produtos. A escolha desta modalidade é feita por empresas que não querem expor os itens que comercializam. Um dos principais motivos desta escolha é o fato de algumas empresas decidirem criar lojas destinadas para um fim específico, tais como vendas exclusivas para funcionários.  

Por padrão, as __lojas VTEX são abertas ao público__. Esse comportamento também aplica-se ao cenário B2B.  

Entretanto, este comportamento pode ser alterado e você pode configurar sua loja para estar:

- [Fechada a usuários anônimos](#fechada-a-usuarios-anonimos)
- [Pública com restrições](#publica-com-restricoes)

## Fechada a usuários anônimos
Usuários anônimos são aqueles não autenticados, que não têm nenhum tipo de acesso a uma determinada loja, seja por login ou token. 

Pelo fato de a visualização dos produtos depender de um tipo de autenticação, os usuários anônimos também são conhecidos internamente como usuários “não autenticados”.

Para restringir a visualização de produtos apenas a usuários autenticados, você precisará [configurar a permissão de acesso à loja](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-configuring-a-b2b-environment "configurar a permissão de acesso à loja").

## Pública com restrições

Lojas públicas com restrições limitam o acesso da loja aos usuários que são autenticados e cumprem determinados requisitos preestabelecidos. Caso o usuário não cumpra ambas as condições, não será possível visualizar nenhum produto.

A definição dos critérios de acesso inclui os seguintes passos:

1. [Cadastro de usuários](#cadastro-de-usuarios)
2. [Aprovação de usuários](#aprovacao-de-usuarios)
3. [Configuração do catálogo de produtos](#configuracao-do-catalogo-de-produtos)
4. [Configuração da estratégia de logística](#configuracao-da-estrategia-de-logistica)
5. [Configuração de preços](#configuracao-de-precos)
6. [Configuração de meios de pagamento](#configuracao-de-meios-de-pagamento)

### Cadastro de usuários

O cadastro de usuários é feito através de um formulário.

Esse documento é criado de acordo com suas necessidades, cujas informações básicas e obrigatórias a respeito do usuário são suficientes para que os responsáveis da empresa consigam definir se determinado cliente pode, ou não, navegar na loja considerando alguns fatores como os detalhados abaixo.

| Contexto               | Funcionamento da loja                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Canal de vendas        | A decisão geralmente é tomada para fortalecer um determinado canal de vendas. Por exemplo, uma indústria pode focar em criar uma plataforma de ecommerce B2B para atender seus distribuidores, grandes revendedores e algumas grandes empresas.                                                                                |
| Questões legais        | Algumas empresas só vendem seus produtos para clientes que atuam como revendedores. Isso acontece, principalmente, nos casos em que os produtos têm muitas especificidades técnicas, por exemplo. Neste caso, o revendedor precisa ter grande familiaridade com as características dos produtos, podendo inclusive atuar como um consultor no momento da venda, além de prestar auxílio na instalação do produto.                                                                                                                                                          |
| Localização geográfica | Inicialmente, uma operação pode atender apenas determinadas regiões para facilitar seu controle operacional e logístico. |

No cenário B2B, é comum o uso de informações básicas como nome, e-mail e telefone, rua, bairro e cidade. Você pode usar um formulário para captar essas informações. 

<div class="alert alert-danger" role="alert">O campo utilizado como regra condicional na política comercial <strong>nunca poderá fazer parte desse formulário</strong>, uma vez que o próprio usuário não pode realizar sua própria aprovação, cabendo à loja essa responsabilidade.

</div>

Na VTEX, formulários são criados através do [Master Data](/pt/tutorial/o-que-e-o-master-data--4otjBnR27u4WUIciQsmkAw "Master Data"), o banco de dados da loja, que guarda as informações da base de clientes da loja e organiza os dados recebidos através de formulários.

Para criar um formulário:

1. Crie uma entidade de dados com todas as informações que você deseja que constem no formulário. Em caso de dúvidas, confira o artigo sobre [como criar uma entidade de dados no Master Data](/pt/tutorial/criando-entidade-de-dados--tutorials_1265?&utm_source=autocomplete "como criar uma entidade de dados no Master Data").

2. Crie o formulário utilizando o tutorial para [criar formulários no Master Data](/pt/tutorial/criando-formulario-no-master-data/ "criar formulários no Master Data").

Assim, quando um cliente preencher o formulário, seus dados serão incluídos na tabela de clientes do Master Data.

<div class="alert alert-info" role="info">Você pode optar por criar um formulário com mais recursos, tais como o preenchimento automático do CEP, múltiplas abas ou validação do CNAE (Classificação Nacional de Atividades Econômicas). Caso opte por esse tipo de formulário, confira a documentação técnica do <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-new-custom-page">VTEX IO</a>.</div>

### Aprovação de usuários
A aprovação dos usuários, assim como o cadastro, é feita no [Master Data](/pt/tutorial/o-que-e-o-master-data--4otjBnR27u4WUIciQsmkAw "Master Data"). Cabe aos responsáveis pela gestão do ecommerce aprovar o acesso dos clientes ao conteúdo da loja. 

Para aprovar o acesso dos clientes à loja, é necessário aprovar cada um dos clientes que se cadastraram ao preencher o formulário. A aprovação pode ser realizada via Admin ou via API.

### Configuração do catálogo de produtos

A exibição dos produtos da loja para determinados grupos de usuários precisa ser definida por meio da configuração das políticas comerciais da sua loja — você pode [criar uma nova política comercial](/pt/faq/como-contratar-nova-politica-comercial--frequentlyAskedQuestions_700 "criar uma nova política comercial") especificamente para este fim ou configurar uma política já existente—, já que a política comercial tem catálogo próprio e especificações próprias de preços e logística.

Nesta configuração, você precisa selecionar os produtos que vão estar associados à política comercial destinada ao contexto B2B. Na VTEX, você pode associar SKUs individualmente através do Admin ou em massa através da [API do Catálogo](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-overview "API do Catálogo").

<div class="alert alert-info" role="info">Configurar SKUs através da <a href="https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-overview">API do Catálogo</a> — associação ou criação em massa ou individualmente — é recomendável para empresas que já têm uma operação de ecommerce madura e contam com uma área de ecommerce própria que gerencia e mantém o catálogo de produtos existente. Essa infraestrutura permite a importação de todo o catálogo com todas as configurações atuais via <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide">integração com o ERP</a>.</div>

### Configuração da estratégia de logística

Da mesma forma que o catálogo, a configuração da logística deve ser feita por meio da política comercial. 

É preciso associar a política comercial configurada para o cenário B2B às estratégias de envio relacionadas à logística de ecommerce, incluindo estratégias de envio/transportadoras, docas e estoques.

Você pode configurar estratégias de envio, docas e estoques através da [API de Logística](https://developers.vtex.com/vtex-developer-docs/reference/logistics-api-overview "API de Logísitica") ou do [Admin](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx "Admin").

Na configuração através do Admin, é preciso:

1. __Associar a política comercial de B2B a uma doca__: a associação é feita com o preenchimento do campo Políticas de envio e canais de venda presente na tela de cadastro/edição da doca — caso não existam docas cadastradas na sua loja, você deverá [cadastrar doca](/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW?&utm_source=autocomplete "cadastrar doca"). Neste campo, você deve inserir a política comercial configurada para o cenário B2B.

2. __Associar uma transportadora à doca escolhida__: essa associação é feita por meio do preenchimento do campo Políticas de envio associadas presente na tela de cadastro/edição da doca, no qual você deve selecionar a política comercial configurada para o cenário B2B — caso não existam transportadoras cadastradas na sua loja, você deverá [cadastrar uma transportadora](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/55MezrFTw2limlgT7KUg6l "cadastrar uma transportadora").

3. __Definir um estoque e associá-lo à doca__: essa associação é feita a partir da seleção da doca desejada na tela de cadastro/edição de estoques — caso não existam estoques cadastrados na sua loja, você precisará [cadastrar um estoque](/pt/tutorial/gerenciar-estoque "cadastrar estoque"). 

Na configuração por meio da [API de Logística](https://developers.vtex.com/vtex-developer-docs/reference/logistics-api-overview "API de Logísitica"), os mesmos passos devem ser seguidos. Porém, você pode utilizar o endpoint <code>[POST Create/Update Dock](https://developers.vtex.com/vtex-developer-docs/reference/docks#createupdatedock "POST Create/Update Dock")</code> para associar a política comercial à doca e para associar  a transportadora à doca preenchendo os parâmetros `salesChannels` e `freightTableIds`, respectivamente.  

Já a associação do estoque à doca é feita por meio do parâmetro `warehouseDock` do endpoint <code>[POST Create/Update Warehouse](https://developers.vtex.com/vtex-developer-docs/reference/warehouses#createupdatewarehouse "POST Create/Update Warehouse")</code>.

### Configuração de preços

A configuração de preços é feita por meio de [tabelas de preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8 "tabelas de preços"), um conjunto de preços aplicados a determinados SKUs em um determinado contexto. Para configurar, você deverá:

1. [Criar uma nova tabela de preços](/pt/tutorial/creating-price-tables--58YmY2Iwggyw4WeSCGg24S "Criar uma nova tabela de preços").
2. Editar as configurações da planilha de preços.
3. Importar a planilha de preços configurada.

Você pode também criar e editar tabelas de preços por meio do endpoint <code>[POST Create/Edit Fixed Prices on a price table (or trade policy)](https://developers.vtex.com/vtex-developer-docs/reference/prices-and-fixed-prices#createeditfixedpricesonapricetableortradepolicy "POST Create/Edit Fixed Prices on a price table (or trade policy)")</code>.

### Configuração de meios de pagamento

No modelo de negócios B2B, uma prática comum é a concessão de crédito a alguns dos seus clientes de confiança, geralmente revendedores, para que eles usem esse crédito para comprar itens do próprio lojista.

A gestão de crédito é um recurso versátil e, por conta disso, é utilizada em diferentes cenários de negócio no modelo B2B. Explicamos algumas das situações em que lojas com diferentes contextos de negócio podem empregar essa estratégia no artigo [Gestão de Crédito por meio do Customer Credit](/pt/tutorial/gestao-de-credito-por-meio-do-customer-credit--5lihi3WBsV5mSIDqNvnoK0 "Gestão de Crédito por meio do Customer Credit").

Na VTEX, os lojistas podem utilizar o [Customer Credit](/pt/tutorial/customer-credit-visao-geral--1uIqTjWxIIIEW0COMg4uE0 "Customer Credit"), aplicativo no qual o usuário pode oferecer e administrar os créditos cedidos aos seus clientes. Para instalar o aplicativo, confira o passo a passo completo no artigo [Instalar Customer Credit](/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs "Instalar Customer Credit").

<div class="alert alert-info" role="info">Meios de pagamento convencionais, como cartão de crédito, cartão de débito e boleto bancário, também podem ser configurados para o contexto B2B. A gestão de crédito é apenas o método utilizado com mais frequência pelos clientes.</div>

Depois de instalar o aplicativo na sua loja, é preciso configurar o Customer Credit como um meio de pagamento disponível na sua loja. Assim, os clientes podem finalizar compras utilizando o crédito concedido. Para configurar, leia o tutorial de [como configurar o Customer Credit como condição de pagamento](/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/21ok0GBwmcIeaY2IukYMOg#condicoes-de-pagamento "como configurar o Customer Credit como condição de pagamento"). 

## Bônus: diferenças de tributação

No Brasil, uma das particularidades de negócios B2B é a forma como diferentes impostos são somados ao valor total de cada item de uma loja. 

Leia o artigo [Taxas](/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/3DcO1XrLqlbZsq80zxSgZS "Taxas") para obter mais informações.

### Sistema de tributação simples 

Para lojas que trabalham com um sistema de tributação simples, no qual o preço do SKU é somado a apenas a um tipo de imposto, há dois métodos recomendáveis para configurar o modelo de precificação da sua loja:

- Configuração de [tabelas de preço](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8 "tabelas de preço"). No caso de tributação, você deve criar apenas tabelas que usam preços convencionais, uma vez que tabelas de preços promocionais não são aplicáveis neste contexto.

- Aplicação de [taxas](/pt/tutorial/como-criar-taxaimposto/ "taxas") aos preços dos SKU para que os impostos não sejam exibidos na vitrine da loja.

### Sistema de tributação complexo

Para lojas que trabalham com sistemas de tributação complexos, nos quais há muitas variáveis para o cálculo de impostos dos produtos de um catálogo muito extenso, a forma mais indicada de realizar o cálculo de tributação é por integração a um sistema externo.

A VTEX conta com um [protocolo de integração para serviços de tributação externos](https://developers.vtex.com/vtex-rest-api/docs/tax-service-integration-guide "protocolo de integração para serviços de tributação externos") que se conecta ao sistema e envia as informações do carrinho — como o estado de origem dos produtos e a origem do comprador — para que seja feito o cálculo da tributação de cada um dos SKUs.  

Para saber mais detalhes sobre o protocolo, confira as documentações abaixo:

- [Visão geral do sistema](https://developers.vtex.com/vtex-rest-api/docs/tax-services-overview "Visão geral do sistema") 
- [Funcionamento do protocolo](https://developers.vtex.com/vtex-rest-api/docs/tax-services-specification "Funcionamento do protocolo") 
- [Como implementar o Tax Service](https://developers.vtex.com/vtex-rest-api/docs/tax-services-recipe "Como implementar o Tax Service") 
- [Exemplo de implementação](https://github.com/vtex-apps/tax-protocol-example "Exemplo de implementação")

## Bônus: VTEX Intelligent Search

O [VTEX Intelligent Search](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb "VTEX Intelligent Search") é um aplicativo de busca que auxilia os clientes na jornada de compra ao sugerir produtos que estejam relacionados com o seu perfil. 

No contexto B2B, o VTEX Intelligent Search é um recurso essencial que pode ser aproveitado na busca de itens por meio do part number, o código referente ao modelo do produto. 

Além disso, o recurso agrega outros benefícios para este contexto, como cadastro de sinônimos e mudança de relevância das palavras-chave.

Este aplicativo pode ser incorporado ao seu ecommerce via configurações no VTEX IO e você pode conferir o passo a passo no [guia de como configurar o VTEX Intelligence Search](https://vtex.io/docs/app/vtex.search@2.4.0/ "guia de como configurar o VTEX Intelligence Search").
