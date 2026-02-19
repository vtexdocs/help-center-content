---
title: 'Qual é o papel dos agentes financeiros no fluxo de pagamento de um pedido no Brasil?'
id: 1dyPJ3gQCCO4ea2o6OMgCi
status: PUBLISHED
createdAt: 2017-10-11T19:08:49.654Z
updatedAt: 2024-03-18T18:55:40.724Z
publishedAt: 2024-03-18T18:55:40.724Z
firstPublishedAt: 2017-10-11T19:34:43.203Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-the-difference-between-acquirer-brand-gateway-and-sub-acquirer-in-brazil
legacySlug: diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

É comum os clientes terem dúvidas quanto aos meios e métodos de pagamento usados no fluxo de pagamento de um pedido. 

Neste artigo, esclareceremos os conceitos de adquirente, subadquirente, gateway, bandeira, banco emissor e antifraude, assim como o papel de cada um no fluxo do pedido.

## Gateway 

Um gateway (também chamado de gateway de pagamento) é um __sistema que efetua a transmissão dos dados das compras realizadas na sua loja no momento do checkout__.

Como primeiro player do fluxo, ele é responsável por enviar as informações do pagamento recebidas no checkout para adquirentes, bandeiras e [bancos emissores](/pt/docs/tutorials/o-que-e-banco-emissor) para, então, obter um retorno sobre a continuação do fluxo de compra ou do seu cancelamento. Em outras palavras, o gateway envia os dados de pagamento da compra e recebe respostas para que você saiba se uma determinada compra deve ou não ser confirmada, ou seja, se o pagamento foi ou não aprovado.

Como agentes intermediários entre um e-commerce e seus meios de pagamento, os gateways atuam como um terminal, integrando em um só lugar todas as movimentações realizadas entre os players do fluxo de pagamento.

Ativando os [conectores](/pt/docs/tutorials/o-que-e-conector) e cadastrando [provedores de pagamento e antifraude](https://help.vtex.com/pt/docs/tutorials/afiliacoes-de-gateway), os dados das compras dos seus clientes poderão ser enviados a adquirentes ou outros gateways e, assim, seguir o fluxo de aprovação nas instituições financeiras.

A plataforma VTEX possui um gateway próprio com certificação [PCI](/pt/docs/tutorials/o-que-e-o-pci-ssc), o que significa que os dados de todos os pagamentos realizados na sua loja estão protegidos de acordo com os mais altos padrões de segurança.

## Adquirente

Um adquirente (também chamado de credenciador) é uma __empresa especializada em processar pagamentos__, isso é, fazer a liquidação financeira das transações de uma loja por meio de cartões de crédito e débito. Por meio de sua rede de parceiros credenciados (ou rede de adquirência), ele possibilita que uma loja ofereça diversas condições de pagamento aos seus clientes.

Na prática, o adquirente recebe as informações do pagamento, as processa e repassa para a [bandeira](/pt/docs/tutorials/o-que-e-uma-bandeira-de-cartao-de-credito) e o [banco emissor](/pt/docs/tutorials/o-que-e-banco-emissor). São exemplos de adquirentes empresas como Rede, Cielo, GetNet e Stone. 

Para que sua loja VTEX possa receber pagamentos, por exemplo, você precisa habilitar a comunicação dela com um adquirente. Essa comunicação é feita por meio de um [gateway](/pt/docs/tutorials/o-que-e-um-gateway-de-pagamentos), que deve ser configurado para processar as [condições de pagamento](/pt/docs/tutorials/condicoes-de-pagamento) desejadas. Assim, as compras podem seguir o fluxo de aprovação normalmente.

Quando tudo está em ordem e uma compra é autorizada pelos outros players do fluxo de compra, o adquirente fica responsável por repassar os valores (cobrados do cliente pelo banco emissor) para a conta da sua loja.

## Subadquirente

Um subdadquirente é uma empresa que processa pagamentos e transmite suas informações para os outros players envolvidos no [fluxo de pagamento](/pt/docs/tutorials/cartao-de-credito-fluxo-basico-de-um-pagamento). Como facilitador, o seu papel é semelhante ao de um adquirente, mas não o substitui por completo pela sua falta de autonomia para desempenhar todas as funcionalidades de um adquirente. 

Portanto, __o subadquirente pode ser entendido como uma espécie de intermediador entre adquirente e loja__. São exemplos de subadquirentes empresas como PagSeguro e Paypal.

As principais vantagens de ter um subdadquirente no fluxo de pagamento são seu baixo custo de implementação, sistema de anti-fraude próprio e a facilidade de integração com as lojas, o que torna essa uma solução completa e simples, bastante atraente para o pequeno lojista. Por outro lado, a escolha pelo uso do subadquirente pode prejudicar os lucros do lojista por conta da  alta taxa cobrada por cada transação realizada (maior que as dos adquirentes). 

Um outro fator negativo para os lojistas é que alguns subadquirentes redirecionam o cliente para a sua página própria durante os últimos passos do checkout, o que pode aumentar as taxas de desistência de compra. 

## Bandeira de cartão

Bandeiras são empresas responsáveis por definir as regras de negócio para compras realizadas com cartão de crédito, como a quantidade de parcelas em que você pode dividir o pagamento e o número de estabelecimentos em que ele é aceito, nacional e internacionalmente. São elas que definem os padrões pelos quais os [adquirentes](/pt/docs/tutorials/o-que-e-um-adquirente) devem processar as transações realizadas por esse meio de pagamento (cada bandeira tem suas próprias regras). São exemplos de bandeiras empresas como Mastercard, American Express e Visa. 

As bandeiras mantêm uma relação próxima com os adquirentes para garantir a aceitação dos seus cartões de crédito nos estabelecimentos. Assim, elas promovem seu uso e ampliam a base de usuários.

No [fluxo de pagamento por cartão de crédito](/pt/docs/tutorials/cartao-de-credito-fluxo-basico-de-um-pagamento), a bandeira recebe do adquirente as informações da compra realizada na sua loja. Então, ela valida as condições (como o número de parcelas) e envia os dados para o banco emissor, que verifica se o comprador possui limite disponível. Dessa forma, a bandeira serve tanto para regular o uso do cartão quanto como ponte entre a adquirente e o banco do consumidor.

## Banco Emissor

Banco Emissor é a instituição financeira responsável pelos meios de pagamento, sejam eles boletos bancários, cartões de débito ou de crédito. É ele que, ao receber os dados de uma compra feita na sua loja, vai autorizar ou não a venda (dependendo do limite de crédito ou do dinheiro disponível na conta do usuário). Com tudo certo, o banco efetiva a cobrança do valor.

Esse conceito é importante porque permite que você configure [condições especiais](/pt/docs/tutorials/condicoes-especiais) para pagamentos realizados através de bancos específicos. Além disso, no caso dos boletos registrados, cada banco possui sua própria forma de emissão.

## Antifraude

O antifraude é um sistema especializado em analisar as compras realizadas nos sites, com o intuito de identificar operações fraudulentas.

Ele coleta dados sobre o comportamento dos usuários e os comparam com padrões suspeitos para, então, aprovar ou não o pedido. Assim, o antifraude adiciona uma camada a mais de segurança para sua loja.

Na VTEX, primeiro a operadora do pagamento aprova a compra e, em seguida, o antifraude avalia o pedido. Com tudo em ordem, ele segue seu fluxo normal. São exemplos de antifraude a ClearSale e a Konduto. 

> ℹ️ É importante ressaltar que cada negócio depende de fatores específicos que influenciam na decisão sobre qual modalidade usar. São diversas as variáveis que podem determinar a escolha do meio de pagamento e qual será o seu fluxo financeiro. É fundamental, portanto, ter em mente as reais necessidades e propósitos do lojista e do projeto desejado.

