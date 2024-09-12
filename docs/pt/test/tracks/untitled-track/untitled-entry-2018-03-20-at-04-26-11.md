---
title: '[SkyHub] Fluxo de pedidos'
id: 4JieCzbzxKAmyWCIs8cAsq
status: ARCHIVED
createdAt: 2018-03-20T16:26:11.867Z
updatedAt: 2020-01-09T15:47:48.103Z
publishedAt: 
firstPublishedAt: 
contentType: trackArticle
productTeam: Channels
slug: skyhub-fluxo-de-pedidos
locale: pt
trackId: 
trackSlugPT: untitled-track
---

# 5. Pedido

## 1º - Fazendo o pedido

Quando um pedido é feito no marketplace existem alguns pontos que influenciam em seus detalhes, como entrega, preço e disponibilidade.
	
### Entrega:

Nesta integração existem dois pontos que influenciarão na entrega: __Cálculo do Frete__ e o __Tempo de Preparo de Envio__. O somatório dos dois será o __Tempo de Entrega Total__.
>Ex:
>Frete Normal = 3 dias
>Tempo de Custo = 2 dias
>Tempo Total de Entrega = 5 dias

</br>

- __Frete__

No momento do pedido, por padrão, a SkyHub consulta a tabela de frete cadastrada na VTEX e nós retornamos apenas uma opção de frete para eles, sempre ordenando pela opção mais barata e depois pelo prazo de entrega.

Apesar da SkyHub consultar o frete na VTEX, a integração dá a opção de usar um terceiro para fazer o cálculo. Neste caso, o fluxo é diferente. No momento do pedido, a SkyHub consulta o terceiro que, por sua vez, retorna o cálculo do frete.

O lojista tem também a possibilidade de cadastrar na SkyHub uma tabela de contingência. Dessa forma, se por algum acaso a integração não conseguir consultar o frete na VTEX, a SkyHub usa as informações desta tabela.

Nos dois últimos casos (terceiros e tabela de contingência), a SkyHub nos passa o pedido e a integração tenta fazer um _match_ do frete calculado com a transportadora que mais se adequa dentro da VTEX (usamos o nome da transportadora escolhida como parâmetro). Caso a integração não consiga encontrar uma transportadora igual, nós integramos o pedido usando a transportadora mais barata disponível.

A SkyHub também dá a opção de fazer a entrega dos produtos através de seu próprio serviço (tipo de frete FOB), a B2W Entrega. Neste caso, o SLA de entrega fica restrito à eles e nós apenas integramos a informação.

- __Tempo de preparo__

O tempo de preparo de envio é baseado no somatório do  campo `Tempo de custo` no Estoque com o `Tempo de Custo` na Doca. E nós enviamos o mesmo tempo de preparo massivamente para todos os produtos.

>Ex:
>>- Estoque A
>>  - Doca 1: Tempo de Custo = 3 dias
</br>
>>- Estoque B
>>  - Doca 1: Tempo de Custo = 5 dias

></br>
>>- Doca 1:
>>  - Tempo de Custo = 2 dias

></br>
>Um pedido com Tempo de Frete = 3 dias, ficará com um Tempo Total de Entrega diferente dependendo de onde o produto sairá.
>>Saindo do estoque A:
- Tempo de preparo = 3 + 2 (doca 1) = 5 dias
- Tempo de frete = 3 dias
- Tempo total de entrega = 8 dias

></br>
>>Saindo do estoque B:
- Tempo de preparo = 5 + 2 (doca 1) = 7 dias
- Tempo de frete = 3 dias
- Tempo total de entrega = 10 dias

</br>

<div class="alert alert-warning">
OBS: no caso de usar B2W Entrega ou terceiros para fazer o cálculo do frete, a SkyHub não consulta a VTEX. Desta forma, o único fator que será levado em consideração para o `Tempo Total de Entrega`, será o `Frete` fornecido por eles, ignorando o `Tempo de Preparo`. Deve-se tomar cuidado com isto, pois pode gerar divergências no `Tempo Total de Entrega`.
<div>

### Preço/Disponibilidade:

No momento do pedido, a SkyHub não consulta o preço do produto e nem se ele possui estoque. É considerado apenas o último preço/estoque enviado.

## 2º - Integrando o pedido

Os pedidos na SkyHub dispõem dos próprios status. Segue uma explicação deles comparando com o status dentro da VTEX.
</br>

| Status VTEX     | Status SkyHub     | Descrição |
| ---------- | ---------- | ---------- |
| Aguardando autorização para despachar| New| Pedido novo onde o pagamento não foi aprovado ainda|
| Carência para cancelamento / Pronto para manuseio /Preparando entrega       | Approved       | Pedido despachado   |
| Faturado       | Shipped       | Pedido despachado       |
| Faturado       | Delivered       | Pedido entregue       |
| Cancelado       | Canceled       | Pedido cancelado       |
| ?       | Overdue       | Pedido atrasado       |

</br>
A VTEX lê um feed de pedidos na SkyHub e integra apenas aqueles que estão nos status New e Approved. Qualquer pedido que já tenha passado deste status não será integrado e nem aparecerá nos logs do Bridge.

Os pedidos são integrados com o mesmo ID usado na SkyHub.

Caso um pedido não integre na primeira tentativa, existe um retry automático para erros não conhecidos pela integração. Se for um erro mapeado, como divergência no valor do pedido, erros de SLA, etc, a integração não faz retry. Para que pedidos com estes erros sejam integrados, será necessário fazer alguma ação (veja mais sobre erros conhecidos da SkyHub aqui).

## 3º - Interações no pedido

Uma vez que o pedido está integrado, qualquer interação, no painel da VTEX ou na própria SkyHub, será aplicada dos dois lados.
>Ex: se um pedido for cancelado na SkyHub, a integração cancela ele na VTEX. Da mesma forma que, se o pedido for cancelado na VTEX, a integração cancela-o na SkyHub.

## 4º - Faturando o pedido

Ao faturar o pedido na VTEX, a integração atualiza o status na SkyHub para `shipped` e posteriormente para `delivered`. No entanto, para que isto aconteça, é necessário que alguns campos específicos estejam preenchidos.

- __`invoiceKey`__ - campo obrigatório para que a integração fature o pedido na SkyHub. Se ele não estiver preenchido corretamente, o rastreio não será enviado.
- __`trackingNumber`__ - campo obrigatório para que o status do pedido possa ser alterado para `shipped`. Do contrário, o status continuará em `approved` até que esse campo seja populado.
- __`courierStatus`__ - campo obrigatório para que o status do pedido seja alterado para `delivered`. Este é um campo que pode ser populado automaticamente (via atualizações de rastreio das próprias transportadoras) ou manualmente (via API ou interface do OMS).

Caso use a B2W Entrega, o valor do frete não entrará no valor do pedido que integra na VTEX. A nota fiscal contará apenas com o valor dos produtos vendidos. E a nota fiscal do frete deverá ser emitida pela própria B2W, que é quem está fornecendo este serviço.


