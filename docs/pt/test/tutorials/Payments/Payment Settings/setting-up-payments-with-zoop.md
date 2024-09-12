---
title: 'Configurar pagamento com Zoop'
id: 5bRYiUjX1sewZuON8HA6Ld
status: PUBLISHED
createdAt: 2023-02-13T18:17:14.240Z
updatedAt: 2024-01-23T21:58:29.652Z
publishedAt: 2024-01-23T21:58:29.652Z
firstPublishedAt: 2023-02-13T18:50:09.746Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-zoop
locale: pt
legacySlug: configurar-pagamento-com-zoop
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Zoop. Por meio deste provedor, sua loja pode realizar vendas por meio de cartões de crédito e boletos.

Para configurar Zoop, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Zoop__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Zoop.
5. Em __Captura Automática de Pagamento__, selecione uma das opções disponíveis:

    - __Use O Comportamento Recomendado Pelo Processador de Pagamentos__: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
    - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
    - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento – *Imediatamente: Captura Automática Ao Autorizar O Pagamento*.
    - __Desativado: Não Capturado Automaticamente__: a captura não é autorizada automaticamente. É importante atentar-se ao escolher esse comportamento, pois a demora no faturamento pode extrapolar o tempo de captura acordado com o provedor e levar à perda do pagamento.

<ui>  6. Em <b>Ativar divisão e enviar recebedores?</b>, selecione se o split de pagamentos estará disponível para o marketplace e os sellers.</ui>

<ui>  7. Clique em <b>Salvar.</b></ui>

Para configurar as condições de pagamento, acesse [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento#).

Depois de seguir os passos indicados, o conector Zoop pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
