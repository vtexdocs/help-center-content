---
title: 'Por que a data prometida diverge com a data de entrega?'
id: 2ykKClT2FWgEKQ6Y0s4iMS
status: PUBLISHED
createdAt: 2018-03-05T15:42:17.800Z
updatedAt: 2023-03-22T20:52:10.588Z
publishedAt: 2023-03-22T20:52:10.588Z
firstPublishedAt: 2018-03-05T16:16:16.312Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: por-que-a-data-prometida-diverge-com-a-data-de-entrega
locale: pt
legacySlug: por-que-a-data-prometida-diverge-com-a-data-de-entrega
---

Quando existe um erro associado à quantidade de dias de um [feriado](https://help.vtex.com/pt/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk), por questões de segurança, o sistema automaticamente define um período, o pode afetar a data de entrega do pedido.

Ao cadastrar um feriado, se você preenche o campo __Data inicial__ de forma correta, mas erra no campo __Data final__, e o feriado acaba ficando com 1 ano, 6 meses ou qualquer período indevido, o sistema entende que houve um erro de cadastro e configura automaticamente um período menor para liberar a entrega do pedido.

Nesse caso, é possível que o pedido esteja com a data estimada de entrega para o primeiro dia útil disponível configurado pelo sistema.

Portanto, se você estiver com problemas relacionados a prazos incoerentes ou divergência entre data prometida e data de entrega, verifique os __Feriados__, conforme as orientações abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Envio > Feriados__, ou digite __Feriados__ na barra de busca no topo da página.
2. Verifique o preenchimento dos campos `Data inicial` e `Data Final`.
3. Faça ajustes, se necessário.
4. Clique em `Salvar`.

Para mais informações, veja o artigo [Cadastrar feriado](https://help.vtex.com/pt/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk).
