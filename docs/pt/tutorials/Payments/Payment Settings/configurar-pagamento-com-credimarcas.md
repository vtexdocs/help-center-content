---
title: 'Configurar pagamento com Credimarcas'
id: 78855lTT6A1vX2wFURmxV
status: PUBLISHED
createdAt: 2023-12-18T13:12:50.542Z
updatedAt: 2023-12-18T14:09:15.538Z
publishedAt: 2023-12-18T14:09:15.538Z
firstPublishedAt: 2023-12-18T14:09:15.538Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-credimarcas
locale: pt
legacySlug: configurar-pagamento-com-credimarcas
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Credimarcas. Com este conector, sua loja pode realizar vendas por meio de promissórias e cartões private labels.

Para configurar o provedor Credimarcas, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão `+`.
3. Clique no conector __credimarcas__.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Credimarcas.
5. Em __Captura Automática de Pagamento__, selecione uma das opções disponíveis:

    - __Use O Comportamento Recomendado Pelo Processador de Pagamentos__: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
    - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
    - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento – *Imediatamente: Captura Automática Ao Autorizar O Pagamento*.
    - __Agendada: defina quando a captura automática será realizada__: ao selecionar esta opção, o campo __Prazo agendado em horas para a captura automática__ estará disponível, e deve ser preenchido com o período no qual a captura automática acontecerá. Este período deve estar em acordo com os limites permitidos pelo provedor de pagamento.
    - __Desativado: Não Capturado Automaticamente__: a captura não é autorizada automaticamente. É importante atentar-se ao escolher esse comportamento, pois a demora no faturamento pode extrapolar o tempo de captura acordado com o provedor e levar à perda do pagamento.

<ui>  6. Em <b>Type Payment</b>, selecione se o pagamento será realizado via "Payment App" ou "Redirect".</ui>

<ui>  7. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão <b>Instalar app</b> e siga as instruções de instalação.</ui>

<ui>  8. Clique em <b>Salvar.</b></ui>

## Configurar Promissória

<div class="alert alert-warning">
  <p>Caso ainda não tenha configurado a promissória como método de pagamento em outros conectores de sua loja, acesse <a href="https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ">Configurar pagamentos com Promissória</a>.</p>
</div>

Para utilizar a Credimarcas com promissórias, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Em __Pagamento Customizado__, clique no botão correspondente ao nome utilizado para o método de pagamento por promissória (configurado anteriormente).
4. Ative a condição no campo __Status__.
5. Em __Processar com a afiliação__, selecione __confepartnerco-credimarcas-v0__.
6. Se desejar, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

## Configurar Private label

Para utilizar a Credimarcas com private labels, acesse [Configurar pagamentos com Cartões de Loja](/pt/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4#).

Depois de seguir os passos indicados, o conector Credimarcas pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

