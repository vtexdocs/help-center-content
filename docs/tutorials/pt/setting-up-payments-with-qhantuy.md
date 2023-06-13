---
title: Configurar pagamento com Qhantuy
id: 4KO2beK0scqVy4lrrs3Myq
status: PUBLISHED
createdAt: 2023-04-20T13:44:39.377Z
updatedAt: 2023-04-20T17:36:03.040Z
publishedAt: 2023-04-20T17:36:03.040Z
firstPublishedAt: 2023-04-20T14:12:44.589Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-qhantuy
legacySlug: configurar-pagamento-com-qhantuy
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Qhantuy. Com este conector, sua loja pode realizar vendas por meio de cartões de crédito e Qhantuy.

Para configurar a afiliação Qhantuy, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão `+`.
3. Clique no conector __Qhantuy__.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Qhantuy.
5. Em __Captura Automática de Pagamento__, selecione uma das opções disponíveis:

    - __Use O Comportamento Recomendado Pelo Processador de Pagamentos__: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
    - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
    - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento – *Imediatamente: Captura Automática Ao Autorizar O Pagamento*.
    - __Agendada: defina quando a captura automática será realizada__: ao selecionar esta opção, o campo __Prazo agendado em horas para a captura automática__ estará disponível, e deve ser preenchido com o período no qual a captura automática acontecerá. Este período deve estar em acordo com os limites permitidos pelo provedor de pagamento.
    - __Desativado: Não Capturado Automaticamente__: a captura não é autorizada automaticamente. É importante atentar-se ao escolher esse comportamento, pois a demora no faturamento pode extrapolar o tempo de captura acordado com o provedor e levar à perda do pagamento.

<ui>  6. Em <b>Ativar divisão e enviar recebedores?</b>, selecione se o split de pagamentos estará disponível para o marketplace e os sellers.</ui>

<ui>  7. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão <b>Instalar app</b> e siga as instruções de instalação.</ui>

<ui>  8. Clique em <b>Salvar.</b></ui>

Para configurar os métodos de pagamento a serem processados pela Qhantuy, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector Qhantuy pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

