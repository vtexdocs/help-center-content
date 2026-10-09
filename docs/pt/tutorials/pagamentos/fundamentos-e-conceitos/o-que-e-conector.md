---
title: 'Conector de pagamento'
createdAt: 2018-02-08T21:31:32.599Z
updatedAt: 2026-10-09T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: what-is-the-connector
locale: pt
hidden: false
---

Um conector de pagamento é a integração entre o módulo de Pagamentos da VTEX e um provedor de pagamento, como um gateway, um adquirente ou um subadquirente. O conector implementa o [Payment Provider Protocol](/pt/docs/tutorials/payment-provider-protocol), protocolo que define como a VTEX e o provedor trocam os dados de cada transação. Um mesmo provedor pode oferecer mais de um conector, como versões diferentes de uma integração ou conectores específicos por país.

Para que sua loja ofereça um meio de pagamento, você precisa configurar o provedor que vai processá-lo em __Configurações da loja > Pagamentos > Provedores__, como descrito em [Configurar um provedor de pagamentos](/pt/docs/tracks/configurar-um-conector-de-pagamentos). Um mesmo meio de pagamento pode ser processado por vários provedores, e um provedor pode processar vários meios de pagamento. Por isso, em cada [condição de pagamento](/pt/docs/tutorials/condicoes-de-pagamento), você escolhe no campo __Processar com o provedor__ qual dos provedores configurados vai processá-la.

Para saber quais conectores estão disponíveis para o seu provedor na VTEX, consulte a [Lista de provedores de pagamento por país](/pt/docs/tutorials/lista-de-provedores-de-pagamento-por-pais), que também leva ao tutorial de configuração de cada provedor. Se não houver um conector disponível, o provedor pode desenvolver um seguindo as orientações de [Desenvolvendo um conector de pagamento para a VTEX](/pt/docs/tutorials/desenvolvendo-um-conector-de-pagamento-para-a-vtex).

### Artigos relacionados
- [Como funciona o módulo de Pagamentos](/pt/docs/tracks/como-funciona-o-modulo-de-pagamentos)
- [Cadastrar provedores de pagamento e antifraude](/pt/docs/tutorials/afiliacoes-de-gateway)
