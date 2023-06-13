---
title: Como funciona o módulo de Pagamentos
id: kdPbEIWf8Xq8tESQvViMB
status: PUBLISHED
createdAt: 2019-11-13T18:30:00.279Z
updatedAt: 2021-09-21T14:41:47.003Z
publishedAt: 2021-09-21T14:41:47.003Z
firstPublishedAt: 2019-11-21T22:49:51.417Z
contentType: trackArticle
productTeam: Financial
slug: como-funciona-o-modulo-de-pagamentos
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugPT: pagamentos
---

O módulo de **Pagamentos** é o sistema responsável na VTEX por gerenciar todas as ações referentes ao fluxo financeiro da sua loja. 

Antes de explorarmos as funcionalidades dentro de *Pagamentos* no Admin da VTEX, vamos esclarecer alguns conceitos importantes que estão envolvidos no fluxo de pagamento de um pedido. Esse processo é realizado por alguns atores dentro do sistema financeiro brasileiro, que compõem a arquitetura do módulo de Pagamentos.

<div class="alert alert-info">
É importante lembrar que cada loja possui particularidades, e funcionamento próprio, o que influencia a forma de construir o módulo de Pagamentos do seu negócio. Para configurar seu fluxo financeiro, é fundamental, portanto, ter em mente as reais necessidades e propósitos do lojista e do projeto desejado.
</div>

## Gateway 
Um gateway (também chamado de gateway de pagamento) é um _sistema que efetua a transmissão dos dados das compras realizadas na sua loja no momento do checkout_.

Como primeiro player do fluxo, ele é responsável por enviar as informações do pagamento, recebidas no checkout, aos atores financeiros que integram a sequência do fluxo de pagamento (como adquirentes, bandeiras e bancos emissores). 

Em seguida, obtém um retorno sobre a aprovação do pagamento e continuação do fluxo de compra, ou seu cancelamento. 

Como agentes intermediários entre um e-commerce e seus meios de pagamento, os **gateways** _atuam como um terminal_, integrando em um só lugar todas as movimentações realizadas entre os players do fluxo de pagamento.  

> Exemplos de gateway: Braspag e Mundipagg.

## Adquirente 
Um adquirente (também chamado de credenciador) é uma _empresa especializada em processar pagamentos_, isto é, fazer a liquidação financeira das transações de uma loja por meio de cartões de crédito e débito. 

Por meio de sua rede de parceiros credenciados (ou rede de adquirência), ele possibilita que uma loja ofereça diversas condições de pagamento aos seus clientes. Na prática, o **adquirente** recebe as informações do pagamento, as processa e repassa para a bandeira e o banco emissor. 

Quando tudo está em ordem e uma compra é autorizada pelos outros players do fluxo de compra, o adquirente fica responsável por repassar os valores (cobrados do cliente pelo banco emissor) para a conta da sua loja.

> Exemplos de aquirente: Rede, Cielo, GetNet e Stone.

## Subadquirente  
Um subdadquirente é uma _empresa que processa pagamentos e transmite suas informações para os outros players envolvidos no fluxo de pagamento_. 

Como facilitador, o seu papel é semelhante ao de um adquirente, mas não o substitui por completo pela sua falta de autonomia para desempenhar todas as funcionalidades de um adquirente.

Portanto, o **subadquirente** pode ser entendido como uma espécie de intermediador entre adquirente e loja.

> Exemplos de subadquirente: Paypal e PagSeguro.
Para saber mais sobre as [vantagens e desvantagens de se incluir um subadquirente no seu fluxo](https://help.vtex.com/pt/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil?locale=pt "Atores financeiros"), confira nosso artigo.   

## Bandeira de Cartão
Bandeiras são _empresas responsáveis por definir as regras de negócio para compras realizadas com cartão de crédito_, como a quantidade de parcelas em que você pode dividir o pagamento e o número de estabelecimentos em que ele é aceito, nacional e internacionalmente.

São elas que definem os padrões pelos quais os adquirentes devem processar as transações realizadas por esse meio de pagamento.

No fluxo de pagamento por cartão de crédito, a **bandeira** recebe do adquirente as informações da compra realizada na sua loja, valida as condições, e envia os dados para o banco emissor, que verifica se o comprador possui limite disponível.

Dessa forma, a bandeira serve tanto para regular o uso do cartão quanto como ponte entre a adquirente e o banco.

> Exemplos de bandeiras de cartão: Mastercard, American Express e Visa.   

## Banco Emissor
Banco Emissor é a _instituição financeira responsável pelos meios de pagamento, sejam eles boletos bancários, cartões de débito ou de crédito_.

É ele que, ao receber os dados de uma compra feita na sua loja, vai autorizar ou não a venda (dependendo do limite de crédito ou do dinheiro disponível na conta do usuário). 

Na VTEX, é possível configurar as condições especiais para pagamentos realizados através de **bancos** específicos, funcionalidade que exploraremos mais adiante. 

> Exemplos de bancos emissores:  Itaú, Santander, Bradesco e Citibank.  

## Antifraude  
O antifraude é um _sistema especializado em analisar as compras realizadas nos sites, com o intuito de identificar operações fraudulentas_. 

Ele coleta dados sobre o comportamento dos usuários e os comparam com padrões suspeitos para, então, aprovar ou não o pedido. Assim, o **antifraude** adiciona uma camada a mais de segurança para sua loja.

> Exemplos de antifraudes:  ClearSale e a Konduto.  

## Certificação PCI SSC
O PCI Security Standards Council é um _fórum global aberto para o contínuo desenvolvimento, aprimoramento, armazenamento, disseminação e implementação de padrões de segurança para a proteção de dados_. 

[A plataforma VTEX possui um gateway próprio com **certificação PCI**](https://help.vtex.com/pt/tutorial/o-que-e-o-pci-ssc--4jo3Vkox3amSO2w4qIWa0E "PCI SSC"), o que significa que os dados de todos os pagamentos realizados na sua loja estão protegidos de acordo com os mais altos padrões de segurança. 

> __Se quiser aprofundar os conceitos de gateway, adquirente, subadquirente, bandeira, banco emissor e antifraude, confira nosso [artigo sobre agentes financeiros no Brasil](https://help.vtex.com/pt/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil?locale=pt "Agentes financeiros ").
