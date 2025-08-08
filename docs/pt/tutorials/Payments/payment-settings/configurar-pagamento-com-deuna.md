---
title: 'Configurar pagamento com Deuna'
id: 5Y4BfCdbQWraZAyoSm0Zzr
status: PUBLISHED
createdAt: 2023-04-06T18:37:58.919Z
updatedAt: 2024-01-23T18:11:08.945Z
publishedAt: 2024-01-23T18:11:08.945Z
firstPublishedAt: 2023-04-06T18:42:52.173Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-deuna
legacySlug: configurar-pagamento-com-deuna
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Deuna. Por meio deste provedor, sua loja pode realizar vendas por meio do Deuna.

Para configurar Deuna, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __DEUNA__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Deuna.
5. Em __Captura Automática de Pagamento__, selecione uma das opções disponíveis:

    - __Use O Comportamento Recomendado Pelo Processador de Pagamentos__: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
    - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
    - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento – *Imediatamente: Captura Automática Ao Autorizar O Pagamento*.
    - __Agendada: Defina Quando A Captura Automática Será Realizada__: ao selecionar esta opção, o campo __Prazo agendado em horas para a captura automática__ estará disponível, e deve ser preenchido com o período no qual a captura automática acontecerá. Este período deve estar em acordo com os limites permitidos pelo provedor de pagamento.
    - __Desativado: Não Capturado Automaticamente__: a captura não é autorizada automaticamente. É importante atentar-se ao escolher esse comportamento, pois a demora no faturamento pode extrapolar o tempo de captura acordado com o provedor e levar à perda do pagamento.

<ui>  6. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão <b>Instalar app</b> e siga as instruções de instalação.</ui>

<ui>  7. Clique em <b>Salvar.</b></ui>

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique no método de pagamento __DEUNA__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector Deuna pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

