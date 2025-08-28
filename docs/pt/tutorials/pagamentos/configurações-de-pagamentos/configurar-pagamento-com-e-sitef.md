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

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __ESITEF__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta e-Sitef.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor e-Sitef na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Liquidação automática__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li>**Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li>**Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li>**Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>      
   		<li>**Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>
8. No campo __Captura antecipada (em horas)__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação). Você também pode desativar a função.
9. Em __Alterar tempo máximo para captura automática (em dias)__, preencha com o período máximo de dias no qual deve ocorrer a captura automática.
10. Em __Soft Descriptor__, você pode inserir uma string personalizada (caracteres) que serão impressos na fatura do cliente.
11. Em __Habilitar Pré-autorização__, selecione se você deseja que as compras feitas com cartão de crédito tenham o valor reservado (pré-autorizada a captura após a aprovação da transação).
12. No campo __Captura antecipada após anti-fraude (em horas)__, escolha em quanto tempo você deseja que a captura seja realizada (depois da análise do antifraude). Você também pode desativar a função.
13. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela e-Sitef, acesse [Configurar condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, e-Sitef pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
