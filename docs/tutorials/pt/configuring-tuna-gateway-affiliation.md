---
title: 'Configurar a afiliação de gateway Tuna'
id: 5Db0j4pE76ma9pUvYuAhfF
status: PUBLISHED
createdAt: 2021-07-07T14:47:34.162Z
updatedAt: 2024-01-23T21:47:01.684Z
publishedAt: 2024-01-23T21:47:01.684Z
firstPublishedAt: 2021-07-07T14:57:45.358Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configurar-a-afiliacao-de-gateway-tuna
locale: pt
legacySlug: configurar-a-afiliacao-de-gateway-tuna
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, você pode configurar a sua loja com o gateway Tuna para receber pagamentos por meio de: boleto, cartões de débito, crédito, PIX e Bitcoin.

>⚠️ A integração da sua loja com a Tuna é feita por meio de uma **Application Key** e **Application Token.** Os dados de acesso para obter essas informações e permitir as configurações na VTEX serão enviados após a criação da sua conta. Para isso, preencha [este formulário](https://docs.google.com/forms/d/e/1FAIpQLScWk5fsmkIfGaW2Z6qhdGH-JJ5iU6Fv5TGghUR1Pod5dY5Z2Q/viewform) e aguarde o retorno da Tuna com mais detalhes.

Após ter criado sua conta e obtido as __Application Key__ e __Token__, siga as etapas abaixo para configurar a Tuna na sua loja:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Tuna__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Tuna.
5. Em __Captura Automática de Pagamento__, selecione uma das opções disponíveis:

    - __Use O Comportamento Recomendado Do Processador de Pagamentos__: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
    - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
    - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento – *Imediatamente: Captura Automática Ao Autorizar O Pagamento*.
    - __Desativado: Não Capturado Automaticamente__: a captura não é autorizada automaticamente. É importante atentar-se ao escolher esse comportamento, pois a demora no faturamento pode extrapolar o tempo de captura acordado com o provedor e levar à perda do pagamento.

<ui>
  6. Clique em <b>Salvar.</b>
  </ui>

Após finalizar as configurações na VTEX, é preciso acessar o [Console](https://dev.tuna.uy/console?utm_medium=docs&utm_source=vtex&utm_content=console&utm_campaign=docs) da Tuna com os seus dados e criar ao menos um fluxo de pagamento. Somente dessa forma será possível processar pagamentos por meio da solução.

Para mais detalhes sobre esta configuração, acesse a [documentação](https://dev.tuna.uy/docs/console/) da Tuna.

## Configurar condição de pagamento

Ao concluir as etapas indicadas, a Tuna estará configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Tuna). 

Para saber como definir condições de pagamento, acesse o artigo [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).
