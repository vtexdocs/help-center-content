---
title: 'Agentes financeiros no fluxo de pagamento'
createdAt: 2017-10-11T19:08:49.654Z
updatedAt: 2026-09-24T20:15:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: financial-agents-in-the-payment-flow
locale: pt
hidden: false
---

Neste artigo, você conhece os agentes financeiros que participam do fluxo de pagamento na VTEX: gateway, adquirente, subadquirente, bandeira, banco emissor e antifraude.

Esses conceitos valem para todo o módulo de Pagamentos, mas a sequência completa dos seis agentes descreve o fluxo de __cartão de crédito ou débito__. Os demais meios de pagamento usam apenas parte desses papéis: o gateway atua nos meios processados pela plataforma e a bandeira atua somente em transações de cartão.

## Gateway

O gateway (também chamado de gateway de pagamento) é o sistema que transmite os dados das compras feitas na sua loja no momento do checkout.

Ele é o primeiro agente do fluxo. Envia as informações do pagamento para adquirentes, bandeiras e bancos emissores e recebe a resposta que confirma ou cancela a compra.

O gateway funciona como um terminal e concentra em um só lugar as movimentações entre os agentes do fluxo, tanto em cartão quanto nos outros meios configurados na sua loja, como boleto e Pix.

Ao ativar os [conectores](/pt/docs/tutorials/o-que-e-conector) e cadastrar [provedores de pagamento e antifraude](/pt/docs/tutorials/afiliacoes-de-gateway), você habilita o envio dos dados de compra para adquirentes ou outros gateways, seguindo o fluxo de aprovação nas instituições financeiras.

A VTEX tem um gateway próprio com certificação do [PCI Security Standards Council (PCI SSC)](/pt/docs/tutorials/o-que-e-o-pci-ssc), o que protege os dados de todos os pagamentos feitos na sua loja de acordo com os mais altos padrões de segurança.

## Adquirente

O adquirente (também chamado de credenciador) é a empresa que processa pagamentos e faz a liquidação financeira das transações da sua loja com cartões de crédito e débito. Pela rede de parceiros credenciados, ou rede de adquirência, ele permite que você ofereça diferentes condições de pagamento aos seus clientes.

O adquirente recebe do gateway as informações do pagamento, processa os dados e os repassa para a bandeira e o banco emissor. Os exemplos variam por país: no Brasil, atuam empresas como Rede, Cielo, Getnet e Stone.

Para receber pagamentos, sua loja precisa se comunicar com um adquirente. Essa comunicação acontece pelo gateway, que você configura para processar as [condições de pagamento](/pt/docs/tutorials/condicoes-de-pagamento) desejadas.

Quando os demais agentes autorizam a compra, o adquirente repassa para a conta da sua loja os valores cobrados do cliente pelo banco emissor.

## Subadquirente

O subadquirente é a empresa que processa pagamentos e transmite as informações para os outros agentes do fluxo. Como facilitador, tem papel semelhante ao do adquirente, mas não o substitui por completo, porque não tem autonomia para desempenhar todas as funções de um adquirente.

Você pode entender o subadquirente como um intermediário entre o adquirente e a sua loja. Em alguns mercados, empresas como PagSeguro e PayPal atuam nesse papel.

Entre as vantagens do subadquirente estão o baixo custo de implementação, o sistema de antifraude próprio e a facilidade de integração, o que torna a solução atraente para lojas menores. Em contrapartida, a taxa cobrada por transação é maior que a dos adquirentes e pode reduzir a sua margem.

Alguns subadquirentes também redirecionam o cliente para uma página própria nas etapas finais do checkout, o que pode aumentar a desistência de compra.

## Bandeira de cartão

As bandeiras definem as regras de negócio das compras com cartão de crédito, como a quantidade de parcelas em que o cliente pode dividir o pagamento e os estabelecimentos que aceitam o cartão no país e no exterior. Elas também definem os padrões que os adquirentes seguem para processar essas transações, e cada bandeira tem as suas próprias regras. Mastercard, American Express e Visa são exemplos de bandeiras.

As bandeiras mantêm uma relação próxima com os adquirentes para garantir a aceitação dos cartões nos estabelecimentos, o que promove o uso e amplia a base de usuários.

No fluxo de pagamento por cartão de crédito, a bandeira recebe do adquirente as informações da compra, valida as condições, como o número de parcelas, e envia os dados ao banco emissor, que verifica o limite disponível. A bandeira regula o uso do cartão e funciona como ponte entre o adquirente e o banco do cliente.

## Banco emissor

O banco emissor é a instituição financeira responsável pelos meios de pagamento, como cartões de crédito e de débito. Ao receber os dados de uma compra feita na sua loja, ele autoriza ou nega a venda conforme o limite de crédito ou o saldo disponível na conta do cliente. Com a autorização, o banco efetiva a cobrança.

Esse agente também permite que você configure [condições especiais](/pt/docs/tutorials/condicoes-especiais) para pagamentos feitos por bancos específicos.

## Antifraude

O antifraude é o sistema que analisa as compras feitas no seu site para identificar operações fraudulentas.

Ele coleta dados sobre o comportamento dos clientes, compara esses dados com padrões suspeitos e aprova ou nega o pedido. É uma camada extra de segurança para a sua loja.

Na VTEX, a operadora do pagamento aprova a compra primeiro e o antifraude avalia o pedido em seguida. Se estiver tudo em ordem, o pedido segue o fluxo normal. ClearSale e Konduto são exemplos de provedores de antifraude.

Para habilitar um antifraude na sua loja, consulte [Configurar o antifraude](/pt/docs/tutorials/como-configurar-antifraude).

## Sequência do fluxo de pagamento

A sequência a seguir descreve o fluxo de cartão de crédito:

1. No checkout, o cliente escolhe o cartão de crédito como meio de pagamento.
2. O checkout envia as informações do pagamento ao gateway.
3. O gateway repassa as informações ao adquirente ou ao subadquirente.
4. O adquirente envia os dados à bandeira, que valida as regras do cartão, como a quantidade de parcelas.
5. A bandeira envia as informações ao banco emissor, que faz a análise de crédito, verifica o limite disponível e autoriza ou nega o pagamento.
6. A resposta do banco emissor percorre o caminho inverso até o gateway, que informa à sua loja se o pagamento foi aprovado ou negado.
7. Se o antifraude fizer parte do fluxo, ele recebe do gateway a informação de que o pagamento foi pré-autorizado e responde com aprovação ou negação. Se o antifraude negar, o pagamento é cancelado.
8. Com o pagamento aprovado, o adquirente faz a liquidação financeira e repassa os valores para a conta da sua loja.

### Meios de pagamento locais no Brasil

O fluxo formado por gateway, adquirente, bandeira e banco emissor não se aplica a todos os meios. No Brasil, por exemplo:

- __Boleto bancário registrado:__ o fluxo não tem adquirente nem bandeira. O gateway solicita o registro do boleto ao banco, que emite o título e devolve as informações ao gateway. Depois que o cliente paga o boleto diretamente ao banco, o banco envia ao gateway os arquivos de conciliação bancária com o status do pagamento. Consulte [Boleto Bancário Registrado - Fluxo básico de pagamento](/pt/docs/tutorials/boleto-bancario-registrado-fluxo-basico-de-um-pagamento).
- __Pix:__ o processamento depende de um parceiro de pagamentos integrado à VTEX, que pode ser um banco, um adquirente ou um gateway. Na finalização da compra, esse parceiro envia o QR Code via API e a VTEX o exibe no checkout para o cliente concluir a transação com a instituição financeira dele. Consulte [Pix: FAQ](/pt/docs/tutorials/pix-faq).

> ℹ️ A escolha dos agentes e dos meios de pagamento depende das necessidades da sua operação. Avalie as variáveis do seu negócio antes de definir o fluxo financeiro da sua loja.

## Próximos passos

- [Cadastrar provedores de pagamento e antifraude](/pt/docs/tutorials/afiliacoes-de-gateway)
- [Configurar condições de pagamento](/pt/docs/tutorials/condicoes-de-pagamento)
- [Configurar o antifraude](/pt/docs/tutorials/como-configurar-antifraude)
