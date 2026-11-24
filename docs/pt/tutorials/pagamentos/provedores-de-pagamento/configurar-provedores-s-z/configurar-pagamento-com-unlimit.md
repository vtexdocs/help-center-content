---
title: 'Configurar pagamento com Unlimit'
id: 5emdjkgQOEQruDinUrfXY8
status: PUBLISHED
createdAt: 2024-06-05T15:41:23.584Z
updatedAt: 2024-07-29T15:08:14.122Z
publishedAt: 2024-07-29T15:08:14.122Z
firstPublishedAt: 2024-06-06T15:38:46.103Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-unlimit
legacySlug: configurar-pagamento-com-unlimit
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Unlimit. Por meio deste provedor, sua loja pode realizar vendas utilizando diversos meios de pagamento, como: cartões de crédito, débito, private label, co-branded, boleto bancário e PIX. 

Para configurar o Unlimit, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Unlimit__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Unlimit.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Unlimit na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Unlimit, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Unlimit pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
