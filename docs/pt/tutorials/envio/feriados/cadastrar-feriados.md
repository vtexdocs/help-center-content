---
title: 'Cadastrar Feriados'
id: 2ItOthSEAoyAmcwsuiO6Yk
status: PUBLISHED
createdAt: 2018-02-07T13:04:56.796Z
updatedAt: 2023-03-29T20:13:47.518Z
publishedAt: 2023-03-29T20:13:47.518Z
firstPublishedAt: 2018-02-07T16:34:46.797Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slugEN: registering-holidays
legacySlug: cadastrar-feriados
locale: pt
subcategoryId: 6F0Qup9onmEM2wsEsEsUQa
---

A funcionalidade **Feriados** permite que você configure dias que não são válidos para o envio. Desta forma, o cálculo de prazo considera os feriados e acrescenta tempo na estimativa de envio do pedido.

## Configurar Feriados

Para configurar dias que devem ser considerados feriados, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Envio > Feriados**, ou digite *Feriados* na barra de busca no topo da página e selecione *Configurações da loja / Feriados*.    
2. Em `Nome do Feriado`, escreva o nome do feriado que deseja cadastrar.
3. Em `Data inicial`, preencha com a data do começo do feriado.
4. Em `Data Final`, preencha com a data de término do feriado.
5. Clique em `Salvar`.

A funcionalidade **Feriados** será considerada para transportadoras com a configuração que permita isso. Para tornar a transportadora elegível à configuração de feriados, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.  
2. Na aba `Políticas de envio`, selecione a [política de envio](/pt/tutorial/politica-de-envio--tutorials_140) associada à transportadora desejada.
3. Na seção **Finais de semana e feriados**, certifique-se que a opção `Entrega em feriados` está com o switch desativado <i class="fas fa-toggle-off"></i>. 
4. Clique em `Salvar`.

> ℹ️ Você pode definir feriados para os anos seguintes.

## Como é feito o cálculo do envio com feriados

O cálculo do tempo de envio de um pedido é feito a partir da soma de duas etapas:

- **Tempo de despacho:** tempo que o operador da loja leva para disponibilizar para a [transportadora](/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) os itens do pedido.
- **Tempo de entrega:** tempo que a transportadora leva para entregar o pedido para o cliente final.

`Tempo de despacho + Tempo de entrega = Tempo de envio do pedido`

Essa diferenciação é importante porque os feriados podem ter um impacto diferente em cada uma, como será visto adiante.

Do ponto de vista técnico, os feriados são considerados na variável `shippingEstimateDate` do pedido ([orderForm](https://developers.vtex.com/vtex-rest-api/reference/orderform-fields)) e esta variável é calculada somente depois da confirmação de pagamento. Ou seja, é após a confirmação do pagamento que o cliente é informado sobre a data de envio estimada, que, por padrão, desconsidera feriados como dia útil.

### Exemplo 1

1. Um pedido é realizado e tem seu pagamento confirmado na segunda-feira (05/02), com tempo de envio de 2 dias úteis.
2. Existe um feriado cadastrado na terça-feira (06/02).
3. A data estimada para o cliente receber o pedido será quinta-feira (08/02), pois o feriado de terça-feira não é considerado dia útil.

> ⚠️ Existe uma exceção na qual o feriado cadastrado conta como dia útil: quando o cliente realiza um pedido em um feriado e a transportadora tem horário de despacho configurado ([Período de Envio](/pt/tutorial/carrier-working-hours--2oGpbInIgdxSWUi3TZjdCS)) para esse mesmo dia.

### Exemplo 2

1. Um pedido é realizado e tem seu pagamento confirmado na quarta-feira (02/11), com tempo de envio de 1 dia útil.
2. Existe um feriado cadastrado na quarta-feira (02/11).
3. A transportadora tem configurado horário de despacho para essa quarta-feira (02/11), portanto, a data estimada para o cliente receber o pedido será quinta-feira (03/11). O feriado de quarta-feira será considerado dia útil porque o despacho está previsto para o mesmo dia que o cliente fez o pedido.

