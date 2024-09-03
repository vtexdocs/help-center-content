---
title: 'O que é conta franquia?'
id: kWQC6RkFSCUFGgY5gSjdl
status: PUBLISHED
createdAt: 2021-10-13T20:38:07.014Z
updatedAt: 2024-05-24T16:38:26.710Z
publishedAt: 2024-05-24T16:38:26.710Z
firstPublishedAt: 2021-10-13T20:57:01.457Z
contentType: tutorial
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slug: o-que-e-conta-franquia
locale: pt
legacySlug: o-que-e-conta-franquia
subcategoryId: 3vhg10rO4MSmy06KeIYMIa
---

Na plataforma VTEX, você tem a opção de cadastrar lojas físicas, franqueados e representantes da sua rede como contas franquia. Essa é uma forma de expandir sua estratégia de [Comércio Unificado](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) ou Omnichannel.

A conta franquia é associada a uma conta principal. No caso de uma marca que possui múltiplas lojas físicas, franqueados ou representantes, cada um deles pode ter uma conta franquia vinculada à conta principal da marca. Isso permite que eles entreguem produtos vendidos pelo ecommerce da marca.

![diagrama contas v2](https://images.contentful.com/alneenqid6w5/6KC4yvWh08WZ3DMcGRJS4I/6a4d22cb3f55e2e97a1766bad65a7101/diagrama_contas_v2.png)

Neste artigo, você verá:

- [Características da conta franquia](#caracteristicas-da-conta-franquia)
- [Relação entre conta franquia e Seller White Label](#relacao-entre-conta-franquia-e-seller-white-label)
- [Configurações da conta franquia](#configuracoes-da-conta-franquia)
    -  [Preços](#precos)    
    -  [Pagamentos](#pagamentos)
- [Solicitar criação de conta franquia](#solicitar-criacao-de-conta-franquia)

## Características da conta franquia

A conta franquia herda o **Catálogo** da conta principal, mas possui **Logística** própria e realiza um **Gerenciamento de pedidos** próprio, para que a loja física possa gerir pedidos e realizar a entrega de produtos.

Além disso, utilizando a conta franquia, você pode gerenciar preços, meios de pagamento ou pode optar por herdá-los da conta principal. Confira a seção [Configurações da conta franquia](#configuracoes-da-conta-franquia) para entender as possibilidades de uso.

Uma conta franquia não possui um site próprio: os consumidores navegam diretamente no site da conta principal, que atua como marketplace nessa situação. Os dados dos clientes são armazenados no Master Data da conta principal.

![diagrama admin contas](https://images.contentful.com/alneenqid6w5/226ePm8TzkWPFnTvJj2Sej/87f8422ad8559f0681a5ab9eec71be51/diagrama_admin_contas.png)

## Relação entre conta franquia e Seller White Label

Toda conta franquia atua automaticamente como um Seller White Label da conta principal. Isso significa que, quando o consumidor adiciona produtos no carrinho e simula o frete na loja da conta principal, o sistema seleciona automaticamente o Seller White Label que possui aquele produto em estoque e apresenta as formas de entrega dos sellers que oferecem as melhores condições. Para saber mais sobre o algoritmo de seleção de Sellers White Label, leia o nosso [artigo](https://help.vtex.com/pt/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) sobre esse assunto.

Os clientes finais não escolhem e não têm visibilidade da existência dos Sellers White Label em nenhum momento do processo. Nessa lógica, a relação dos consumidores é com a marca (conta principal) e não com cada loja física (conta franquia).

>ℹ️ Apesar de toda conta franquia atuar como Seller White Label da conta principal, esses conceitos não significam a mesma coisa. A conta franquia é um tipo de conta, enquanto ser White Label é uma propriedade de um seller.
>
> ***Conta**: pode ser do tipo franquia ou pode ser uma conta normal.
>
> ***Seller**: pode ser do tipo White Label ou pode ser do tipo não White Label.
>
> Como esses conceitos são independentes, **eventualmente** é possível que uma conta franquia atue como seller não White Label de um outro marketplace, diferente da conta principal.

## Configurações da conta franquia

Você pode acessar e realizar configurações nos módulos de **[Logística](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/7k4SWtm3EIvLQ3aGXWC07#)**, **[Gerenciamento de pedidos](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa#)**, **[Preços](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP#)**, **[Pagamentos ](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG#)** e **[Promoções & Taxas](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR#)** diretamente no Admin de cada uma das contas franquias ou utilizando as [APIs da VTEX](https://developers.vtex.com/vtex-rest-api/reference/get-to-know-vtex-apis).

Para acessar o Admin de cada conta franquia, entre na URL `{{nomedacontafranquia}}.myvtex.com/admin`, substituindo `{{nomedacontafranquia}}` pelo nome da conta franquia que você deseja gerenciar.

Existem diversos tipos de configuração possíveis para preços e meios de pagamento relacionados a contas franquia na VTEX, descritos abaixo. Você pode optar pela forma de uso que fizer mais sentido para o seu negócio.

### Preços

#### Utilizar os preços da conta principal

Para que a conta franquia utilize os preços configurados na conta principal, é necessário selecionar a opção **Herdar preços da conta-pai** nas Configurações do módulo de **Preços** da conta franquia, conforme descrito [neste artigo](https://help.vtex.com/pt/tutorial/price-configuration--3hbBtCzNUBrj8GaWgCtSWN#configuracoes-gerais-de-precos).

#### Configurar preços próprios da conta franquia

Para configurar preços próprios da conta franquia, você precisa desmarcar a opção **Herdar preços da conta-pai** nas Configurações do módulo de **Preços** da conta franquia, conforme detalhado [neste artigo](https://help.vtex.com/pt/tutorial/price-configuration--3hbBtCzNUBrj8GaWgCtSWN#configuracoes-gerais-de-precos). Além disso, é necessário configurar os preços desejados no [módulo de **Preços**](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) ou pela [API de Pricing](https://developers.vtex.com/vtex-rest-api/reference/pricing-api-overview).

Para garantir uma experiência de compra consistente, é importante [configurar a regionalização](https://help.vtex.com/pt/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw?&utm_source=autocomplete) quando existirem preços diferentes para cada conta franquia.
Ao adotar a regionalização, é possível solicitar o CEP do cliente antes de iniciar a navegação, permitindo assim exibir os produtos e  preços correspondentes à conta franquia antes de prosseguir para o Checkout.
Caso a regionalização não esteja em vigor, é possível que o consumidor visualize um determinado valor de produto ao navegar pela loja, mas ao chegar ao Checkout e inserir o CEP, pode-se constatar que a conta franquia responsável pelo atendimento do pedido é outra, resultando em um preço diferente.
Essa situação ocorre porque, durante a navegação  na loja, o catálogo de menor preço é priorizado. No entanto, ao chegar ao Checkout, caso a conta franquia com o menor preço não tenha estoque disponível, será selecionado o catálogo de outro vendedor que possua o produto em estoque, resultando em uma atualização do preço para o valor praticado por esse vendedor.

### Pagamentos

#### Utilizar meios de pagamento da conta principal

O comportamento padrão da plataforma é que a conta franquia utilize os meios de pagamento configurados na conta principal.

Uma vez que você tenha [alterado essa configuração](#configurar-meios-de-pagamento-proprios-da-conta-franquia), se desejar retornar ao comportamento padrão, é necessário seguir os passos abaixo.

1. Acesse as **Configurações **do módulo de **Gerenciamento de pedidos**.
2. Acesse a aba **Afiliados**.
3. Clique no afiliado que representa a conta principal, se houver.
4. Desmarque a opção **Usar meu meio de pagamento**.
5. Clique em `Salvar`.

#### Configurar meios de pagamentos próprios da conta franquia

A VTEX oferece soluções de split de pagamentos que podem tornar automática a distribuição de recebíveis para sellers. Recomendamos a leitura do artigo [Split de pagamento](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) para mais informações.

>⚠️ Caso você deseje implementar o VTEX Sales App,é necessario que as lojas físicas utilizem os meios de pagamento da conta principal.

## Solicitar criação de conta franquia

Para abrir uma conta franquia entre em contato com o nosso time de Growth Operations pelo *[Suporte](https://help.vtex.com/pt/support)* selecionando a opção **Comercial** e o tipo de solicitação `Criação de Ambiente White Label`.

A criação de uma conta franquia terá um custo previsto no seu contrato de OMS. Caso não esteja previsto em seu contrato, adicione essa observação a sua solicitação para que seja realizado um aditivo contratual correspondente. 

Os campos deverão ser preenchidos com as seguintes informações:

- Email do Usuário Master
- Nome dos Sellers: composto por (Main Vtex Account) + sufixo

Caso a quantidade de contas seja superior a dez contas, favor incluí-las em formato de tabela em anexo.

## Saiba mais

* [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4)
* [Escolher entre conta padrão, conta franquia ou Seller Portal](https://help.vtex.com/pt/tutorial/escolher-entre-conta-padrao-conta-franquia-ou-seller-portal--4S90HzzhMyZESsHqrnUs78)
