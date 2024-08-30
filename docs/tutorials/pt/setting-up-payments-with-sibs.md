---
title: 'Configurar pagamento com SIBS'
id: sNLPtJlAMnDpq40CCPKNo
status: PUBLISHED
createdAt: 2023-04-06T18:57:27.591Z
updatedAt: 2024-01-25T19:05:01.739Z
publishedAt: 2024-01-25T19:05:01.739Z
firstPublishedAt: 2023-04-06T19:07:28.327Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-sibs
locale: pt
legacySlug: configurar-pagamento-com-sibs
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento SIBS. Por meio deste provedor, sua loja pode realizar vendas por meio de cartão de crédito SIBS, Promissórias, MBWay e MultiBanco.

Para configurar SIBS, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __SIBS__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta SIBS.
5. Em __Captura Automática de Pagamento__, selecione uma das opções disponíveis:

    - __Use O Comportamento Recomendado Pelo Processador de Pagamentos__: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
    - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
    - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento – *Imediatamente: Captura Automática Ao Autorizar O Pagamento*.
    - __Desativado: Não Capturado Automaticamente__: a captura não é autorizada automaticamente. É importante atentar-se ao escolher esse comportamento, pois a demora no faturamento pode extrapolar o tempo de captura acordado com o provedor e levar à perda do pagamento.

<ui>  6. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão <b>Instalar app</b> e siga as instruções de instalação.</ui>

<ui>  7. Clique em <b>Salvar.</b></ui>

Para configurar os métodos de pagamento a serem processados pela SIBS, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, SIBS pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

