---
title: 'Estratégias de marketplace na VTEX'
id: tutorials_402
status: PUBLISHED
createdAt: 2017-04-27T22:06:47.209Z
updatedAt: 2023-04-20T20:53:42.948Z
publishedAt: 2023-04-20T20:53:42.948Z
firstPublishedAt: 2017-04-27T23:03:23.819Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: estrategias-de-marketplace-na-vtex
locale: pt
legacySlug: integrando-com-marketplace
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Um marketplace é uma plataforma virtual por meio da qual diferentes vendedores anunciam seus produtos. Esses vendedores são chamados de sellers, que além de serem os donos dos produtos, são também os responsáveis pela entrega do produto ao comprador.

<img src="https://drive.google.com/uc?export=download&id=1qT3lLaKflfnWyHknf7IgjNbRNCki9FuQ"/>

[A VTEX promove a colaboração digital](https://vtex.com/br-pt/marketplace/) em diferentes cenários. Você pode não apenas vender seus produtos em outros marketplaces, mas também vender produtos de outros sellers no seu ambiente, tornando-se um marketplace.

Além disso, com a VTEX você pode gerenciar tudo no mesmo lugar, no conceito que chamamos de *one-single-panel*. Com essa gestão unificada, você pode controlar catálogo, preço, estoque do seu B2C e de diversos canais que a VTEX disponibiliza integração.

Algumas das principais operações envolvidas ao vender produtos em marketplaces são:

- Controle de estoque nos diversos canais.
- Sincronização de promoções.
- Processamento de pedidos. 
- Gerenciamento dos canais.

Na VTEX, não há uma taxa extra para integrar com marketplaces. Também não existe cobrança adicional para uma loja VTEX anunciar em seu ambiente produtos de sellers, ou vender produtos em outra loja VTEX.

<div class="alert alert-info">
Pedidos aprovados em marketplaces estão sujeitos às mesmas <a href="https://help.vtex.com/pt/tutorial/o-que-a-vtex-considera-como-receita-para-apuracao--58j4cfoXfisWyemASACwSq?locale=pt">regras contratuais</a> de pedidos efetuados por outros canais.
</div>

O sortimento de produtos enviados para um marketplace é definido na escolha da sua [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV). Para [contratar políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta solicitar via ticket em nosso [Suporte](https://help.vtex.com/pt/support), selecionando a opção **Comercial** e o tipo de solicitação `Criação de Política Comercial`.

A [contratação de política comercial adicional](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X) para integrar com conector certificado, ou outras lojas VTEX é isenta de taxas.  

Os próximos cenários abordados neste artigo são:

- [Vender em marketplace](#vender-em-marketplace)
- [Atuar como marketplace](#atuar-como-marketplace)

## Vender em marketplace

Os marketplaces são espaços de venda nos quais os sellers anunciam seus produtos. Existem várias razões pelas quais pode ser estrategicamente vantajoso vender em um marketplace, algumas das principais são:

- **Visibilidade para sua loja:** a centralização de diferentes sellers e grande variedade de produtos em um marketplace atrai o tráfego de usuários, e ao anunciar em vários canais, você faz com que sua marca ganhe visibilidade e seja apresentada a novos públicos.
- **Baixo custo:** cada marketplace tem suas próprias contrapartidas financeiras, sendo que a mais praticada é a cobrança de uma comissão sobre vendas. Ou seja, se você não vender, não há taxas a serem pagas.
- **Aumento das vendas:** a estratégia de atuar em vários canais diversifica sua fonte de faturamento e aumenta as chances de conversão.
- **Diversificação de nicho:** você pode definir um sortimento de produtos específico para cada marketplace, e a partir disso montar estratégias de validação de mercado ou realizar vendas sazonais.
- **Valor agregado ao produto:** especialmente se o público não estiver familiarizado com sua marca, é vantajoso se beneficiar da relação de confiança que um marketplace construiu com o cliente. Isso agrega valor ao seu produto e aumenta suas chances de conversão.

Na VTEX, você pode vender em outros canais nas seguintes situações:

- [Sendo seller VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#sendo-seller-vtex)
- [Integrado a marketplaces certificados](#integrado-a-marketplaces-certificados)
- [Integrado a marketplaces parceiros](#integrado-a-marketplaces-parceiros)
- [Integrado a marketplaces externos](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplace-externo)

<div class="alert alert-info">
Uma loja VTEX pode atuar simultaneamente como <a href="https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#sendo-seller-vtex">seller VTEX</a> e <a href="https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex">marketplace VTEX</a>.
</div>

<div class = "alert alert-info">
A plataforma VTEX possui diferentes funcionalidades para fulfillment, que podem ser combinadas para cenários como <i>dropshipping</i>, quando o seller recebe e repassa o pedido do cliente a um terceiro, que será encarregado do fulfillment. A solução <a href="https://help.vtex.com/pt/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP">logística</a> mais adequada para o seller vai depender da arquitetura e do seu modelo de negócio, e pode ser feita por <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide">integração de Back office (ERP/PIM/WMS)</a>.
</div>

### Sendo seller VTEX

A arquitetura da VTEX permite que uma loja hospedada em seu ambiente tenha seus produtos anunciados em outras lojas VTEX. Quando uma loja VTEX vende seus produtos em outra loja VTEX, ela é chamada de seller VTEX. Adiante veremos mais informações sobre quando a loja é o ambiente que anuncia os produtos dos sellers VTEX, ou seja, um [marketplace VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex).

A configuração da [integração entre lojas VTEX](https://help.vtex.com/pt/tutorial/configurar-seller-para-vender-em-marketplace-vtex--6g045OkRSjNpqhkExbQRlP) é simples e dispensa alguns dos passos exigidos em outras integrações. Além disso, você pode fazer uso do Marketplaces e integrações, que reúne uma espécie de catálogo de interessados em parcerias, o que facilita o contato entre sellers VTEX, marketplaces VTEX e conectores certificados.

O [Seller Portal](https://help.vtex.com/pt/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK) é uma edição da plataforma VTEX voltada para sellers se conectarem e venderem seus produtos em marketplaces hospedados na VTEX. Com o portal, sellers acessam todas as funcionalidades essenciais para a operação de ecommerce em grandes vitrines, trazendo visibilidade e conversão de vendas.

<div class = "alert alert-info">
Na VTEX, é possível atuar como <a href="https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa">seller white label</a>, um seller não identificado pelo consumidor na experiência de compra. Este tipo de seller é o padrão para <a href="https://help.vtex.com/pt/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl">contas franquia</a>, por exemplo, e pode ser estratégico para determinados modelos de negócio. Para saber mais, veja o artigo <a href="https://help.vtex.com/pt/tutorial/escolher-entre-conta-padrao-conta-franquia-ou-seller-portal--4S90HzzhMyZESsHqrnUs78">Escolher entre conta padrão, conta franquia ou Seller Portal</a>.
</div>

### Integrado a Marketplaces Certificados

Existem marketplaces de atuação nacional e internacional que são excelentes espaços para você promover seus produtos e alavancar suas vendas.

Atualmente, na plataforma VTEX existem os seguintes conectores certificados:

- [Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP)
- [Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq)
- [Magazine Luiza](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y)
- [Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2)
- [Centauro](https://help.vtex.com/pt/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj)
- [Facebook](https://help.vtex.com/pt/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc)
- [Google Shopping](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw)
- [Google Shopping Ads](https://help.vtex.com/pt/tracks/como-fazer-campanhas-atraves-do-google-ads--47kz5PRQPK0IEaqGqiIuA)
- [Dafiti](https://help.vtex.com/pt/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i)
- [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm)
- [Tik Tok](https://help.vtex.com/pt/tracks/integracao-com-o-tiktok--1r0yJSO11nrer1YVu3WTFd)
- [Zoom](https://help.vtex.com/pt/tutorial/integrando-com-zoom--2OoQjigCVOIEWWkgOqwCK6?&utm_source=autocomplete)
- [CSU (Opte+)](https://help.vtex.com/pt/tutorial/integrando-com-csu-opte-2--tutorials_4258)
- [Kabum](https://help.vtex.com/pt/tutorial/integracao-com-o-kabum--DM0uQeFIXOk7CY9oAPrf0)
- GPA
- [MadeiraMadeira](https://help.vtex.com/pt/tutorial/integracao-com-madeiramadeira--J4QCENKiz4urYNfaMuE0i)
- [Riachuelo](https://help.vtex.com/pt/tutorial/integracao-com-riachuelo--kpfxAgwEcANihHLT4iW81)
- [Camicado](https://help.vtex.com/pt/tutorial/integracao-com-renner-e-camicado--5qf2wloosKlmIB8o2AitnT)
- [Renner](https://help.vtex.com/pt/tutorial/integracao-com-renner-e-camicado--5qf2wloosKlmIB8o2AitnT)
- [Loopi](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP)
- GrupoLTM
- TudoAzul
- Webcontinental
- Farfetch

<div class="alert alert-info">
Embora Facebook, Google Shopping, Google Shopping Ads e Tik Tok não sejam marketplaces, incluímos seus conectores nessa lista por oferecerem uma experiência similar de envio de produtos a partir de lojas VTEX.
</div>

Para realizar a integração com conector você encontra ajuda nos conteúdos que guiam o processo de configuração e, enquanto cliente VTEX, você conta com nosso suporte para eventuais dificuldades.

### Integrado a Marketplaces parceiros

Existem integrações externas, que foram desenvolvidas em conjunto com hubs parceiros.

- Americanas
- Via Varejo
- [Shopee](https://help.vtex.com/pt/tutorial/integracao-com-a-shopee-beta--5OV9idUY6fHu3P8grnCnqj)
- [Wish](https://help.vtex.com/pt/tracks/integracao-com-a-wish--50hbG4bzhSIhjz1lzqI1g4)
- Olist
- [Conecta Lá](https://help.vtex.com/pt/tutorial/integracao-com-conecta-la--403fvPYdv2f6VeP0na3awP)  
- Anymarket
- TudoAzul
- Easy Live
- Mimo
- Wap Store
- Plugg.to
- Fast Shop
- Hubplus

### Integrado a marketplace externo

Pode ser que sua loja queira vender em um marketplace que não possua conexão com a VTEX. Neste caso, você pode desenvolver um conector customizado para essa integração. A VTEX disponibiliza um conjunto de APIs e instruções para facilitar o processo. Saiba mais no [guia de integração com marketplace externo](https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide).

## Atuar como marketplace

Além dos benefícios apresentados no contexto de se vender em um marketplace, existe a possibilidade da sua loja ser o próprio ambiente onde os sellers anunciam seus produtos. Algumas das principais vantagens de atuar como um marketplace são:

- **Aumento da receita:** existem diferentes formas de monetizar em um marketplace, sendo a mais comum receber uma comissão sobre as vendas realizadas no seu ambiente. 
- **Maior diversidade de produtos:** há um aumento na variedade de produtos ofertados na sua loja.
- **Alcance de novos clientes:** sellers atraem novos clientes para o marketplace e, desta forma, promovem tanto um maior alcance de mercado, quanto mais visibilidade para sua marca.
- **Melhora da experiência de compra:** ao diversificar e ampliar a variedade de produtos, você promove uma experiência completa para o cliente. Ele pode adquirir em um único local tudo o que precisa (_one-stop-shop_).
- **Baixo custo:** esse processo de colaboração não representa um aumento nos seus custos. Ele é um modelo escalonável que dispensa a necessidade de investimentos em áreas como estoque, estrutura ou equipe, pois a entrega dos produtos é responsabilidade dos sellers.
- **Valorização da reputação da sua marca:** se a sua loja é reconhecida no mercado, isso significa que os produtos ofertados no seu ambiente contam com a confiança do cliente. Você pode aumentar seus lucros ao oferecer aos vendedores valor agregado aos produtos deles.

Uma loja VTEX pode vender produtos de outros sellers nos seguintes casos:

- [Sendo um marketplace VTEX](#ser-um-marketplace-vtex)
- [Integrado a seller externo](#integrado-a-seller-externo)

### Ser um marketplace VTEX

A arquitetura da VTEX permite que as lojas hospedadas em sua plataforma possam anunciar produtos de outras lojas, sejam elas VTEX, ou não. Quando uma loja VTEX passa a vender produtos de sellers, ela se torna um marketplace VTEX.

A configuração da para [se tornar um marketplace VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb) dispensa alguns dos passos exigidos em outras integrações. Uma vez configurado o seu marketplace, confira [Ações para a operação de marketplaces VTEX](https://help.vtex.com/pt/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev).

Veja abaixo os principais marketplaces VTEX:

![mkt br](https://images.ctfassets.net/alneenqid6w5/6DB08TtDzQ0tuesrK1I1XU/d42c1c45fff7301eea1e2fe7160274b5/mkt_br.png)

Além disso, a página __Marketplaces e integrações__ promove e facilita o contato entre marketplaces VTEX, sellers VTEX e conectores certificados interessados em colaborações.

### Integrado a seller externo

É possível que um seller não integrado à VTEX queira vender produtos em um marketplace VTEX. Neste caso, juntos eles poderiam desenvolver um conector customizado para essa integração. A VTEX disponibiliza um conjunto de APIs e instruções para facilitar o processo. Veja mais informações no [guia de integração com seller externo](https://developers.vtex.com/vtex-developer-docs/docs/external-seller-integration-guide).
