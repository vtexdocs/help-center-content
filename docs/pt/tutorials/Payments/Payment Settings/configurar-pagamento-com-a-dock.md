---
title: 'Configurar pagamento com a Dock'
id: 3Y0tLnXjBcG9qxHwAHGbHn
status: PUBLISHED
createdAt: 2022-07-19T19:58:56.608Z
updatedAt: 2024-01-23T18:08:45.414Z
publishedAt: 2024-01-23T18:08:45.414Z
firstPublishedAt: 2022-07-19T20:12:07.212Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-dock
locale: pt
legacySlug: configurar-pagamento-com-a-dock
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Dock. Por meio deste provedor, sua loja pode realizar vendas por meio do cartão de crédito, débito e private labels.

Para configurar Dock, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __DOCK__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Dock.
5. Em __Captura Automática de Pagamento__, selecione uma das opções disponíveis:

    - __Use O Comportamento Recomendado Do Processador de Pagamentos__: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
    - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
    - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento – *Imediatamente: Captura Automática Ao Autorizar O Pagamento*.
    - __Desativado: Não Capturado Automaticamente__: a captura não é autorizada automaticamente. É importante atentar-se ao escolher esse comportamento, pois a demora no faturamento pode extrapolar o tempo de captura acordado com o provedor e levar à perda do pagamento.

<ui>
  6. Clique em <b>Salvar.</b>
  </ui>

## Configurar condição de pagamento

Para configurar o pagamento por cartões de crédito ou débito, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para configurar o pagamento por cartões private labels, acesse [Configurar pagamentos com Cartões de Loja](https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4#).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete).

Depois de seguir os passos indicados, o conector Dock pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
