---
title: 'Cadastrar Feriados'
id: 3XQS5nrVrT1obZ0K6pqnOt
status: DRAFT
createdAt: 2019-10-23T15:06:13.415Z
updatedAt: 2022-03-08T18:47:55.510Z
publishedAt: 
firstPublishedAt: 2019-10-23T15:21:27.021Z
contentType: trackArticle
productTeam: Post-purchase
slug: cadastrar-feriados
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

A feature de Feriados permite que você informe ao módulo de Estoque & Entrega os dias que não devem ser considerados para calcular um prazo de entrega.

Digamos, por exemplo, que o prazo normal para a entrega de um pedido feito na segunda-feira seja de 3 dias. Se você cadastrou a terça-feira seguinte como Feriado, ela não entrará no cálculo. Portanto, em vez de o seu cliente ver a quinta-feira como prazo de entrega (3 dias depois), ele verá a sexta-feira (4 dias depois).

##  Configurar a feature de Feriados

Para configurar os Feriados, siga os passos abaixo:

1. Na seção __Pedidos__ do menu lateral do Admin, clique em __Estoque & entrega__.
2. Nas opções que se abrem, clique em __Feriados__.
3. Na caixa __Nome do Feriado__, escreva o nome do feriado que deseja cadastrar.
4. Em __Data__, preencha com a data de início do feriado. Em __Data Final__, preencha com a data final do feriado.
5. Clique em __Salvar__.

>⚠️ Os feriados serão considerados apenas para as transportadoras que estiverem configuradas como "Transportadora	**não entrega** aos finais de semana".

Para tornar a transportadora elegível à feature de feriados, siga os passos abaixo:

1. Na seção __Pedidos__ do menu lateral do Admin, clique em __Estoque & entrega__.
2. Nas opções que se abrem, clique em __Estratégia de Envio__.
3. Clique na __Transportadora__ desejada.
4. Na tela de edição, busque pelo título __Finais de Semana e feriados__ (na seção _Opções de envio_).
5. Selecione a opção __Transportadora não entrega	aos finais de semana__.
6. Clique em __Salvar__.

>ℹ️ Você pode definir feriados para os próximos anos com antecedência. Por exemplo, pode criar Natal 2019, Natal 2020 etc.

## Como é feito o cálculo

Os feriados serão considerados na variável `shippingEstimateDate` do pedido. Esta variável é calculada __somente depois que o pagamento do pedido tiver sido confirmado__. Após a confirmação, a data de entrega estimada considerando o feriado poderá será informada ao seu cliente.
