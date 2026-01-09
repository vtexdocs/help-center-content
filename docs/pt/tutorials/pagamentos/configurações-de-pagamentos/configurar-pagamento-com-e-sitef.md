---
title: 'Configurar pagamento com e-SiTef'
id: 6UEi0QAlU6BXz5RgWj34Ac
status: PUBLISHED
createdAt: 2021-12-06T14:51:20.250Z
updatedAt: 2024-03-14T16:59:21.753Z
publishedAt: 2024-03-14T16:59:21.753Z
firstPublishedAt: 2021-12-06T17:37:55.667Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-e-sitef
legacySlug: configurar-pagamento-com-e-sitef
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento e-Sitef. Por meio deste provedor, sua loja pode realizar vendas por cartões de crédito, débito, private labels, cobranded e PIX.

Para configurar o e-Sitef, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **ESITEF** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta e-Sitef.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor e-Sitef na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. No campo **Captura antecipada (em horas)**, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação). Você também pode desativar a função.
9. Em **Alterar tempo máximo para captura automática (em dias)**, preencha com o período máximo de dias no qual deve ocorrer a captura automática.
10. Em **Soft Descripto**, você pode inserir uma string personalizada (caracteres) que serão impressos na fatura do cliente.
11. Em **Habilitar Pré-autorização**, selecione se você deseja que as compras feitas com cartão de crédito tenham o valor reservado (pré-autorizada a captura após a aprovação da transação).
12. No campo **Captura antecipada após anti-fraude (em horas)**, escolha em quanto tempo você deseja que a captura seja realizada (depois da análise do antifraude). Você também pode desativar a função.
13. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela e-Sitef, acesse [Configurar condições de Pagamento](/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, e-Sitef pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
