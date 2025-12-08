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
legacySlug: configurar-pagamento-com-credimarcas
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Credimarcas. Com este conector, sua loja pode realizar vendas por meio de promissórias e cartões private labels.

Para configurar o provedor Credimarcas, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **credimarcas** na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Credimarcas.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Credimarcas na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. Em **Type Payment**, selecione se o pagamento será realizado via "Payment App" ou "Redirect".
9. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão **Instalar app** e siga as instruções de instalação.
10. Clique em `Salvar`.

## Configurar Promissória

> ⚠️ Caso ainda não tenha configurado a promissória como método de pagamento em outros conectores de sua loja, acesse [Configurar pagamentos com Promissória](/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ).

Para utilizar a Credimarcas com promissórias, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Em **Pagamentos Customizados**, clique no botão correspondente ao nome utilizado para o método de pagamento por promissória (configurado anteriormente).
4. Ative a condição no campo **Status**.
5. Em **Processar com o provedor**, selecione **confepartnerco-credimarcas-v0**.
6. Se desejar, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

## Configurar Private label

Para utilizar a Credimarcas com private labels, acesse [Configurar pagamentos com Cartões de Loja](/pt/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4#).

Depois de seguir os passos indicados, o conector Credimarcas pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

