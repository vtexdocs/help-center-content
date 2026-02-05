---
title: 'Seller Portal: Primeiros Passos do seller'
id: 6w1vBdRH2uuBGmUqgNQjwK
status: PUBLISHED
createdAt: 2021-01-26T15:08:22.524Z
updatedAt: 2024-05-30T22:41:41.434Z
publishedAt: 2024-05-30T22:41:41.434Z
firstPublishedAt: 2021-09-15T20:50:27.452Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-set-up-your-store-on-seller-portal
legacySlug: seller-portal-primeiros-passos
locale: pt
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

Um dos principais desafios de varejistas, distribuidores e indústrias que estão migrando para um modelo de marketplace e dropshipping é fazer o onboarding de novos sellers parceiros e oferecer as ferramentas corretas para o sucesso dessa parceria. Da integração à sincronização de catálogos e o envio e recebimento de pedidos — o processo pode ser lento, complexo e custoso. 

É para trazer mais velocidade e simplicidade para essa jornada, ajudando a destravar novas fontes de receita para nossos clientes, que desenvolvemos o Seller Portal.

Seller Portal é uma edição da plataforma VTEX voltada para sellers VTEX ou externos conectem-se e vendam seus produtos em marketplaces. Com o portal, sellers possuem todas as  funcionalidades essenciais para a operação de ecommerce em grandes vitrines, trazendo visibilidade e conversão de venda.

Agora, marketplaces já hospedados na VTEX podem convidar e conectar-se a sellers de forma mais rápida e sem atritos, expandindo o sortimento de produtos disponíveis e base de clientes.

Por meio do Seller Portal, sellers conseguem:  

- Ambiente conectado ao marketplace automaticamente.  
- Ativar seu catálogo no marketplace para vender imediatamente.  
- Gerenciar produtos compartilhados, através do catálogo compartilhado com o marketplace.  
- Atualizar estoque e preço de produtos.  
- Gerenciar e faturar todos os seus pedidos no marketplace, podendo processar pagamentos.  
- Construir e gerir a estratégia de logística da sua operação.  
- Diminuir o “time to revenue” das suas vendas.  

## O que esperar do Seller Portal?

Saiba alguns detalhes sobre o Seller Portal:   

- A arquitetura do catálogo pode ser compartilhada entre marketplace e seller através do compartilhamento de produtos. O seller, no entanto, pode criar seus próprios produtos, definindo categorias, marcas e especificações.
- Quando o seller escolhe compartilhar o catálogo com o marketplace, os produtos compartilhados têm as mesmas categorias, marcas e especificações definidos pelo marketplace. No entanto, somente as categorias são importadas para o ambiente do seller de forma completa. As marcas são importadas somente quando um produto é importado e as especificações não são importadas.
- Se o marketplace processar pagamentos, o comissionamento e repasse do faturamento do seller deverá ser feito por fora da VTEX.  
- O suporte à experiência do seller será fornecido pelo próprio marketplace.  

## Configurar sua loja

> ⚠️ O limite para cada conta do Seller Portal é de 100 mil produtos. Para mais informações, entre em contato com nosso [Suporte](https://support.vtex.com/hc/pt-br/requests).

Para começar a vender seus produtos no marketplace, é preciso configurar a sua loja no Seller Portal. Este artigo explica o fluxo completo dessa configuração inicial e indica outras documentações para que você acesse cada passo em mais detalhes. A configuração básica do Seller Portal inclui os passos listados abaixo.

### 1. Catálogo

O Catálogo do Seller Portal é o módulo onde você configura o sortimento de produtos da sua loja. Para que o cliente veja os seus produtos no marketplace, você precisa cadastrá-los e configurá-los por meio do Catálogo, pelo Seller Portal ou por API REST.

Para acessar o Catálogo no Seller Portal, navegue na barra lateral clicando em **Produtos > Produtos Compartilhados / Produtos**.

Para gerenciar o Catálogo do Seller Portal por API REST, confira a documentação da [Catalog API - Seller Portal](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal).

Para saber mais, confira os seguintes artigos:

- [Seller Portal: Como Funciona o Catálogo](/pt/docs/tutorials/seller-portal-como-funciona-o-catalogo)  
- [Lista de Produtos](/pt/docs/tutorials/lista-de-produtos)  
- [Como Criar um Produto](/pt/docs/tutorials/como-criar-um-produto)    
- [Categorias](/pt/docs/tutorials/seller-portal-categorias)  
- [Marcas](/pt/docs/tutorials/seller-portal-marcas)
- [Seller Portal: Produtos Compartilhados](/pt/docs/tutorials/seller-portal-produtos-compartilhados)  
- [Seller Portal: Detalhes do produto](/pt/docs/tutorials/seller-portal-detalhes-do-produto)    

### 2. Preços

Para que um produto seja vendido, seu cliente precisa saber quanto custa cada item exibido no marketplace. O módulo de Preços é o sistema responsável pela criação, edição e armazenamento dos dados de preços dos seus produtos e suas variações.

Para acessar o módulo de Preços, navegue na barra lateral clicando em Produtos > Lista de Preços / Regras de Preço.

Para saber mais, confira os seguintes artigos:

- [Preços - Visão geral](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP)
- [Cadastro de preços](/pt/docs/tracks/cadastrar-preco-base)

### 3. Envio

As configurações de logística do seu Seller Portal permitem que você monte uma estratégia de estoque e entrega da maneira mais adequada ao seu negócio. Essas configurações são utilizadas na hora do checkout de um pedido por exemplo, para que o sistema calcule o frete. Elas também são necessárias depois que um pedido é registrado e tem seu pagamento autorizado, quando começa de fato o trajeto até o cliente final. 

A rota logística que compõe uma entrega começa no estoque, passa pelas docas e, depois, as transportadoras finalizam o processo, entregando os produtos nos endereços 

O Seller Portal já traz algumas funcionalidades pré-configuradas para facilitar a sua interação com a plataforma. Para acessar os módulos de logística, navegue na barra lateral clicando em Envio > Tarifas de Envio / Simulador de Envio / Pontos de Retirada / Estratégia de Envio. Sua conta já possui um estoque e uma doca padrão cadastrados, e não é preciso alterar essa configuração para que sua loja venda no marketplace. Porém, é necessário finalizar a configuração logística cadastrando as seguintes funcionalidades:

- [Transportadora](/pt/docs/tutorials/politica-de-envio)  
- [Tarifas de Envio](/pt/docs/tutorials/gerenciar-tarifas-de-envio)  
- [Geolocalização](/pt/docs/tutorials/gerenciar-geolocalizacao)  
- [Planilha de frete](/pt/docs/tutorials/planilha-de-frete)  

### 4. Inventário

Para que seus produtos sejam vendidos no marketplace, é preciso atualizar a quantidade de itens disponíveis em seu estoque. O Seller Portal conta com a ferramenta Gerenciar Itens em Estoque. Com ela, você pode atualizar a quantidade de itens disponíveis em um determinado estoque, sempre que for necessário. 

Para acessar o Inventário, navegue na barra lateral clicando em Produtos > Gerenciamento de Estoque.

Para saber mais, confira os seguintes artigos:  

- [Gerenciar inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque)

### 5. Pagamento

O módulo de Pagamentos é o sistema responsável na VTEX por gerenciar todas as ações referentes ao fluxo financeiro da sua loja. É importante lembrar que cada loja possui particularidades e funcionamento próprios, o que influencia a forma de construir o módulo de Pagamentos do seu negócio. Para configurar seu fluxo financeiro é fundamental, portanto, ter em mente as reais necessidades e propósitos da loja, e o que foi acordado com o marketplace.

Tanto o seller quanto o marketplace podem ser responsáveis por processar o pagamento de uma conta. Isso deve ser acordado entre ambos antes de iniciar as configurações de pagamento no Seller Portal. 

**Marketplace processando pagamento:** todo o fluxo de pagamentos é portanto  responsabilidade do marketplace, não é preciso configurar nenhuma função do lado do seller. É importante notar que o comissionamento e repasse de faturamento do seller é feito por fora da VTEX.  

**Seller processando pagamento:** caso o seller seja alocado como o processador do pagamento, siga os passos nos artigos abaixo para configurar o módulo de Pagamentos em sua loja.

Para saber mais, confira os seguintes artigos:  

- [Como funciona o módulo de Pagamentos](/pt/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG)  
- [Como funciona split de pagamento entre seller e marketplace](/pt/tracks/split-de-pagamentos--1ouDg8q56Kuz1AgtJUY9nv/ctgx6ulwy40P0BV07LW9y)  
- [Cadastrar afiliado](/pt/docs/tutorials/como-configurar-afiliado)  
- [Configurar um conector de pagamentos](/pt/docs/tracks/configurar-um-conector-de-pagamentos)   
- [Configurar uma condição de pagamento](/pt/docs/tracks/configurar-uma-condicao-de-pagamento)  
- [Como configurar o antifraude](/pt/docs/tutorials/como-configurar-antifraude)   

### 6. Vender produtos

Sempre que um produto ou uma variação são criados no Seller Portal, eles são enviados automaticamente para o marketplace. Porém, isso não significa que este produto está pronto para ser exposto na vitrine do marketplace e, em seguida, vendido. É preciso configurar condições de preço e de estoque para que ele se torne disponível para venda. 

Anúncio é o nome que damos para um produto ou variação de um seller enviado para o marketplace e que recebeu configurações de preço e estoque. Quando você configura condições de preço e estoque, você está preparando seu produto ou variação para que vire um anúncio. Uma vez configuradas as condições de preço e estoque, o produto da sua loja se torna de fato um anúncio na vitrine do marketplace. Para saber mais, confira o artigo abaixo:  

- [Seller Portal: Anúncios e o Envio de Produtos para o Marketplace](/pt/docs/tutorials/seller-portal-anuncios-e-o-envio-de-produtos-para-o-marketplace)  

### 7. Pedidos

No momento em que o cliente final da loja aperta o botão de Finalizar Compra, é gerado um pedido na VTEX. Isso significa que a partir desse momento será possível rastrear o fluxo do pedido no módulo de Gerenciamento de Pedidos, dentro do painel administrativo da sua loja. Ou seja, será possível saber os detalhes de cada etapa do andamento do pedido.  

Para acessar o módulo de Pedidos, navegue na barra lateral clicando em Pedidos > Todos os Pedidos / Transações.

Para saber mais, confira os artigos abaixo:

- [Como funcionam Pedidos na VTEX](/pt/tracks/orders--2xkTisx4SXOWXQel8Jg8sa)

### 8. Criar e gerenciar promoções

A página **Promoções** no Seller Portal permite que sellers e marketplaaces, criem promoções e gerenciem a lista completa de promoções cadastradas, simplificando a gestão de promoções.

Para saber mais, confira os seguintes artigos:

 - [Seller Portal: Promoções](/pt/docs/tutorials/seller-portal-promocoes)  
  - [Seller Portal: Criar uma promoção](/pt/docs/tutorials/seller-portal-criar-uma-promocao)  

### 9. Acompanhar Gestão de anúncios

O módulo _Gestão de anúncios_ permite que sellers supervisionem o envio e a sincronização de anúncios em todos os canais integrados à loja. A página retrata, em tempo real, o status dos anúncios e suas atualizações a partir dos dados vindos do marketplace e de outros módulos VTEX. É onde sellers podem acompanhar todas as interações do tipo Catálogo, Preço ou Estoque, ocorridas com seus anúncios, para identificar erros durante seu envio e sincronização. 

Para saber mais, confira os seguintes artigos:

- [Módulo Gestão de anúncios](/pt/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE)  
- [Gestão de anúncios: detalhes do anúncio](/pt/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P)  
- [Gestão de anúncios: detalhes da interação](/pt/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf)

### 10. Dashboard Performance de Vendas

O menu _Dashboards_ é o painel de controle dos dados do seu comércio unificado. As análises trazidas aqui informam decisões e ajudam a priorizar tarefas de diferentes profissionais, desde a operação, até o comercial e marketing. Os dashboards incluem dados atualizados de todos os canais de venda em que sua loja opera com a VTEX, incluindo as principais métricas que impactam a receita da sua loja.

## Configurações Opcionais
Existem funcionalidades adicionais que podem ser realizadas na sua loja. Não é obrigatório implementá-las, sua loja estará operando e vendendo produtos no marketplace mesmo sem os passos listados abaixo. 

### 1. Configurações da Loja, Conta e Usuário
Agrupamos todas as configurações da sua loja dentro de Configurações da Loja, no menu de navegação lateral. Configurações que se aplicam à conta da sua loja, ou perfil de usuário são acessadas separadamente.

**Configurações da Loja** 
Estas configurações são aquelas aplicadas à sua loja, storefront e como os usuários interagem com sua loja. Incluem Configurações de Pedidos, Templates de e-mail, Configurações de Envio e Configurações de Preços. Para acessar essa funcionalidade, clique no ícone de *Configurações da loja* no menu de navegação lateral. 

O módulo Central de Mensagens só deverá ser utilizado, se for acordado entre seller e marketplace que o seller é o responsável pela comunicação com o cliente final durante o fluxo de um pedido. Sugerimos que o seller entre em contato com o marketplace para saber mais.

**Configurações da Conta**
Estas configurações são aquelas aplicadas à conta da sua loja na VTEX. Incluem Funções do usuário, Usuários e Conta. Para acessar essa funcionalidade, clique no avatar do seu perfil no canto superior direito > Configurações da conta.

Se mais pessoas da sua operação precisarem acessar o Seller Portal, é possível cadastrar novos usuários. Os Owners da conta podem adicionar novos usuários, permitindo o acesso de mais pessoas ao Seller Portal. Para saber mais, confira os seguintes artigos:  

- [Gerenciamento da conta](/pt/tutorial/visao-geral-do-modulo-license-manager/)    
- [Gerenciar usuários](/pt/docs/tutorials/gerenciar-usuarios-administrativos)    
- [Perfis de acesso](/pt/docs/tutorials/perfis-de-acesso)

**Configurações do Usuário**
Estas configurações se aplicam ao seu perfil de usuário individual. Inclui dados pessoais e autenticação. Para acessar essa funcionalidade, clique no avatar do seu perfil no canto superior direito > Configurações de Usuário.

### 2. Integrar seu ERP

Se seu negócio já tiver um sistema ERP em funcionamento, é possível integrá-lo à VTEX. A integração permite importar, de forma massiva e automática, algumas informações relevantes para sua operação, ao Seller Portal. 

A integração com o Catálogo pode ser feita manualmente por meio da interface do Seller Portal ou de forma massiva por API REST, utilizando a [Catalog API - Seller Portal](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal). Não é possível integrar o catálogo via planilha ou via API SOAP (Webservice).

As funcionalidades configuradas a partir da integração também podem ser feitas manualmente, através do Seller Portal, seguindo a configuração básica citada no início deste artigo. 

A integração permitirá configurar as seguintes funcionalidades via API REST:

- Criar e editar produtos, marcas e categorias
- Importar preços  
- Importar inventário  
- Configurar integração de pedidos  
- Configurar processamento de pedidos  

Optando pela integração, não haverá necessidade de configuração manual por meio do Seller Portal, para esses módulos. Recomendamos que você somente revise os dados de preço e inventário que foram inseridos pela integração. 

Para realizar esta ação, siga as instruções em nosso [guia de integração com ERP](https://developers.vtex.com/docs/guides/erp-integration-guide).

> ℹ️ Para gerar as chaves de acesso necessárias para integrar com seu ERP, clique no **avatar do seu perfil**, marcado pela inicial do seu email e acesse **Configurações da conta > Chaves de aplicação**.
