---
title: Split de Pagamento
id: 6k5JidhYRUxileNolY2VLx
status: PUBLISHED
createdAt: 2021-04-06T20:03:53.443Z
updatedAt: 2023-04-24T19:09:31.016Z
publishedAt: 2023-04-24T19:09:31.016Z
firstPublishedAt: 2021-04-07T18:57:19.713Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: split-de-pagamento
legacySlug: split-de-pagamento
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-warning">
Esta é uma solução para pagamentos em contextos de marketplace.
</div>

Para garantir que nossos clientes de marketplace dividam o pagamento entre todos os sellers automaticamente, estabeleçam uma comissão baseada em um percentual fixo e permaneçam em conformidade com as regulamentações em vigor, a VTEX oferece a solução __Split de pagamentos__.

Quando um consumidor adiciona produtos de sellers diferentes ao mesmo carrinho e paga por eles em uma experiência de checkout unificada, a VTEX divide automaticamente esse pagamento para que cada beneficiário obtenha sua parte diretamente na sua conta bancária.

Esse valor nem sempre será dividido igualmente entre os beneficiários. A distribuição é feita de acordo com as condições predefinidas do seller e as comissões cobradas pelo marketplace. Quando configurado, o Split de pagamentos permite que o valor pago por um pedido seja automaticamente dividido entre [sellers](https://help.vtex.com/pt/tutorial/what-is-a-seller) e [marketplaces](https://help.vtex.com/pt/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8). 

Você pode configurar o Split de pagamentos de duas maneiras: Por [Split de recebíveis](https://help.vtex.com/pt/tutorial/split-payment#split-de-recebiveis) ou [Split de transação](https://help.vtex.com/pt/tutorial/split-payment#split-de-transacao). Há diferenças entre os tipos de Split de pagamentos que você deve levar em consideração antes de escolher um deles.

| Características    | Split de recebíveis     | Split de transação     |
| ---------- | ---------- | ---------- |
| __Provedor de pagamento__       | Provedor de pagamento do marketplace.       | Provedor de pagamento do seller.       |
| __Número de transações__       | Apenas uma transação.       | Uma transação para cada seller.       |
| __Número de compras na fatura do cartão de crédito do cliente__       | Apenas uma compra.       | Uma compra para cada seller. <li>*Essa opção pode gerar mal-entendidos e aumentar o número de disputas e estornos*.</li>       |
| __Negociação de tarifas__  | O marketplace será responsável por negociar todas as tarifas. <li>Em escala, isso pode ser positivo para aumentar o poder de negociação.</li>       | Cada beneficiário escolhe seu provedor de pagamento e negocia suas tarifas.       |
| __Avaliação antifraude__      | Como apenas uma transação é gerada, o pedido inteiro passa por uma única análise antifraude.       | Como várias transações são geradas, cada uma delas passa por uma análise antifraude diferente. Se uma transação for negada, todas as outras também serão negadas automaticamente.       |
| __Provedores de pagamento integrados__       | Informação disponível na [Lista de Provedores de Pagamento por País](https://help.vtex.com/pt/tutorial/lista-de-provedores-de-pagamento-por-pais--2im3BEGXxSAcRuxEaIHPvp) | Todos os provedores de pagamento integrados à VTEX.       |
| __Custo__       |Custos de acordo com a tarifa negociada. <ul><li>Geralmente é mais caro do que transações sem split.</li><li>Carrinhos com produtos apenas do marketplace serão processados levando em consideração a tarifa negociada, o que pode aumentar o custo.</li></ul>       | Sem custos adicionais. Os clientes VTEX serão responsáveis apenas pelas tarifas usuais acordadas com os provedores de pagamento.       |
| __Experiência de checkout__       | Sem limitações em relação aos meios e condições de pagamento, que serão definidos pelo marketplace. <ul><li>O provedor de pagamento também deve oferecer split em meios de pagamento específicos (Pix, por exemplo). Hoje em dia, nossos parceiros oferecem split com um ou dois cartões de crédito, cartões de débito e boleto.</li></ul>      | Exibe apenas os métodos de pagamento aceitos por todos os vendedores que realizam o pedido. Ou seja, pagamentos com cartão de crédito, dinheiro ou card promissory (promissória que aceita parcelamento), só estarão disponíveis se todos os vendedores envolvidos no pedido aceitarem. Incompatível com:<ul><li>Boleto.</li><li>Pix.</li></ul><ul><li>Cartões com 3DS2 ou qualquer autenticação.</li></ul> |
| __Ideal para__       | <ul><li>Marketplaces que desejam cobrar comissões automáticas, evitando o risco de inadimplência.</li><li>Marketplaces cujos sellers não têm um provedor de pagamento.</li></ul><ul><li>Marketplaces que desejam ter mais controle sobre o fluxo de pagamento dos sellers.</li><li>  Marketplaces que desejam processar transações com Pix, boleto e cartões de crédito com 3DS2 ou outra autenticação.</li></ul>       | <ul><li> Marketplaces que não querem ser comerciantes registrados (comum para empresas B2B da Europa e dos Estados Unidos).</li><li> Casos em que o seller tem mais poder de decisão do que o marketplace e só aceita que o pagamento seja processado pelo seu próprio provedor de pagamento.</li></ul><ul><li> Marketplaces que têm urgência para implementar o split de pagamentos e não têm parceiros que oferecem esse recurso em seus países.</li><li>Marketplaces que não querem arcar com todos os riscos de estorno.</li></ul>       |
| __Benefícios__ | <ul><li>Os marketplaces definem as comissões automaticamente.</li><li>Experiência otimizada: apenas uma compra na fatura do cartão de crédito.</li></ul><ul><li>O marketplace ganha mais controle sobre o fluxo de pagamento.</li><li>Compatível com Pix, boleto e cartões com 3DS2 ou qualquer autenticação.</li></ul><ul><li>O marketplace pode definir os meios de pagamento aplicáveis a qualquer pedido, independentemente dos sellers envolvidos.</li></ul>       | <ul><li>Mais flexibilidade para cada seller escolher seu provedor antifraude.</li></ul><ul><li>A liquidação do pagamento pode ocorrer em momentos diferentes para cada parte.</li><li>O marketplace não se responsabiliza por estornos.</li></ul>|

## Split de recebíveis

Esse modelo de split de pagamentos permite que o marketplace tenha mais controle e visibilidade sobre pagamentos e comissões. Além disso, dá mais controle sobre o fluxo de pagamento, pois a VTEX retém o pagamento do seller até que o pedido seja faturado.

Os marketplaces podem indicar como o valor da compra deve ser dividido e qual será a porcentagem reservada para o próprio marketplace, definindo comissões automáticas por custo total de produtos, frete ou categoria de SKU para cada seller.

Neste caso, a transação será processada apenas pelo provedor de pagamento do marketplace, que será responsável por pagar cada seller.

Por exemplo, um cliente adiciona dois produtos ao mesmo carrinho de compras. Um deles será entregue pelo próprio marketplace e o outro por um seller chamado Seller A. No entanto, apenas uma transação é gerada, o que significa que o consumidor final verá apenas uma cobrança no extrato do cartão de crédito.

O pagamento é distribuído da seguinte forma:

![Split de recebíveis](https://images.ctfassets.net/alneenqid6w5/4XGw7jeLfayteKzZ9eMaUU/60f806b9ee7dc128b7b6b55e8cc114c7/Split_de_receb__veis.png)

Nosso gateway calcula e distribui os pagamentos para cada beneficiário quando o pedido é faturado e envia essas informações ao provedor de pagamento. A distribuição é feita considerando o valor destinado a cada parte envolvida no pedido e as comissões cobradas pelo marketplace.

![Relatório de comissão](https://images.ctfassets.net/alneenqid6w5/2C8DFezzCKaSzgq2f77pxB/ca3cbcf0fa22a2bca6ab0d219b45e684/Split_de_receb__veis_2.png)

Com esse modelo, os marketplaces também têm acesso a um relatório de comissionamento, no qual podem consultar a relação de pedidos faturados por cada um dos seus sellers e as respectivas comissões que foram retidas.

O relatório de comissionamento traz transparência em relação aos valores devidos a cada seller e às comissões que os pedidos geraram para o marketplace.

<div class="alert alert-warning">
Atualmente, nosso relatório de comissionamento está disponível apenas para os clientes que participam do teste beta.
</div>

É importante considerar que a nossa solução de split de recebíveis tem algumas limitações:

- __Meios de pagamento combinados:__ não está disponível quando um dos meios escolhidos não é compatível com split. Exemplo: vale-compra + cartão de crédito (vale-compra não é compatível com split).  Devido a uma limitação do checkout, atualmente só é possível dividir o pagamento quando os meios combinados são dois cartões de crédito.
- __Alteração do pedido:__ não funciona com alterações de valores ou itens após o pedido ter sido realizado. Dessa forma, também não é possível cancelar parcialmente um pedido com split.
- __Assinaturas VTEX:__ não é compatível com pedidos de marketplace.
- __ID do seller:__ o CNPJ é a chave primária para fazer o split, portanto os beneficiários (marketplaces ou sellers) precisam ser pessoas jurídicas.
- __Mesmo CNPJ:__ como o CNPJ é a chave primária para fazer o split, não é possível que dois ou mais beneficiários/participantes da venda com o mesmo CNPJ sejam considerados "entidades" distintas.
- __Partes envolvidas:__ não é possível dividir o pagamento com beneficiários que não estejam vendendo produtos no carrinho. Por exemplo: pagar o frete diretamente para a transportadora.
- __Tarifas nominais:__ não permite tarifas nominais. Atualmente, só é possível aplicar comissões percentuais sobre produtos e/ou fretes.
- __Atribuição de transações ao provedor:__ atualmente só é possível atribuir uma afiliação preferencial no gateway para processar o split usando condições comerciais para os SKUs que são vendidos pelo seller. No entanto, há limitações:
        - Se o seller e o marketplace tiverem o mesmo SKU, o carrinho sempre escolherá o meio de pagamento com split.
        - A lista de SKUs precisa ser constantemente atualizada.

## Split de transação

No __split de transação__, o marketplace não é um "centralizador" dos pagamentos. Quando o cliente conclui a compra, nosso sistema de checkout cria uma ou mais transações (uma por seller).

O pagamento nem sempre é processado pelo provedor de pagamento do marketplace. Ele também pode ser processado pelo provedor de pagamento de cada comerciante, sendo cada um responsável por processar sua parte da transação. 

Isso significa que o marketplace tem menos controle sobre o fluxo de pagamento. Diferentemente do que acontece com o outro modelo, a VTEX não retém o pagamento até que o pedido seja faturado. Cada valor será enviado automaticamente para o respectivo participante da venda logo após o checkout. 

Por exemplo, um cliente adiciona dois produtos ao mesmo carrinho de compras. Um deles será entregue pelo próprio marketplace e o outro por um seller chamado Seller A.

![Split de transação](https://images.ctfassets.net/alneenqid6w5/3ZOMQYkxlRzMgUMck9o7o8/d36e97acd5addabaee0d1ef6c21fd712/Split_de_transa____o.png)

No split de transação, o marketplace não precisa fazer nenhuma configuração. O seller é quem precisa configurar seu próprio meio de pagamento na afiliação com o marketplace em questão. Para mais detalhes, confira nossa documentação [Envie os meios de pagamento do seller white label ao marketplace.](https://help.vtex.com/pt/tutorial/enviar-os-meios-de-pagamento-do-seller-white-label-para-o-marketplace--bfvtPzZyikacSqgkgeGW)

![Afiliação](https://images.ctfassets.net/alneenqid6w5/yX3yPgPbkjlDDoYYdsnYD/9b03a7e73c7747db5b6cf22518730c50/Afiliados.png)

O split de transação tem algumas limitações que devem ser levadas em consideração.

- __Definição de comissões:__ neste modelo, o marketplace não recebe a comissão automaticamente, visto que a transação não é processada por seu provedor de pagamento. Os marketplaces terão que cobrar manualmente sua comissão dos sellers, o que pode aumentar o risco de inadimplência.
- __Meios de pagamento:__ incompatível com boleto, Pix, Payment Apps e cartões de crédito com 3DS2 ou outro meio de pagamento que requer autenticação.
- __Filtrar os meios de pagamento:__ Filtra os meios de pagamento, ou seja, só permite pagamentos com cartão de crédito, à vista e nota promissória se todos os comerciantes envolvidos os aceitarem.
- __Mitigação de fraude:__ cada comerciante terá que analisar o risco de fraude por conta própria. Se o sistema antifraude do comerciante recusar uma transação, todas as outras transações também serão recusadas.
- __Para sellers que não são VTEX:__ se o seller não for da VTEX, é necessário que utilize uma conta de gateway — um tipo de conta que permite ao seller configurar meios de pagamento.
- __Assinaturas VTEX:__ não é compatível com pedidos de marketplace.
- __Partes envolvidas:__ não é possível dividir o pagamento com beneficiários que não estejam vendendo produtos no carrinho. Por exemplo: pagar o frete diretamente para a transportadora.
- __Combinando modelos de divisão:__ quando combinado com o outro modelo de split (split de recebíveis), o split de transação prevalecerá. Ou seja, para os sellers que optam por utilizar seu próprio meio de pagamento, sua parte da transação será processada em seu próprio gateway, e os valores dos outros participantes da venda serão processados pelo marketplace.

## Combinação de modelos de split

Quando o split de transação e o split de recebíveis são combinados, o split de transação prevalecerá. Ou seja, para os sellers que optam por utilizar seu próprio meio de pagamento, sua parte da transação será processada em seu próprio gateway, e os valores dos outros participantes da venda serão processados pelo marketplace.

### Saiba mais

- [Configurar gateway PagarMeV2](https://help.vtex.com/pt/tutorial/setting-up-pagarmev2-gateway--5TugxXNMOs0Ocyg4uqussM?&utm_source=autocomplete)
- [Configurar o VTEX Payment](https://help.vtex.com/pt/tracks/vtex-payment--7iCCIoIZFmd9OabU6QlmXu/1lZWKCGdy7xpYjukTLfFJL)
- [Enviar os meios de pagamento do Seller White Label para o Marketplace](https://help.vtex.com/pt/tutorial/enviar-os-meios-de-pagamento-do-seller-white-label-para-o-marketplace--bfvtPzZyikacSqgkgeGW) (para obter mais informações sobre como configurar o split de transação).
