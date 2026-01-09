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
legacySlug: configurar-pagamento-com-a-dock
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Dock. Por meio deste provedor, sua loja pode realizar vendas por meio do cartão de crédito, débito e private labels.

Para configurar Dock, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **DOCK** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Dock.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Dock na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

7. Clique em `Salvar`.

## Configurar condição de pagamento

Para configurar o pagamento por cartões de crédito ou débito, acesse [Condições de Pagamento](/pt/tutorial/condicoes-de-pagamento). 

Para configurar o pagamento por cartões private labels, acesse [Configurar pagamentos com Cartões de Loja](/pt/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4#).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete).

Depois de seguir os passos indicados, o conector Dock pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
