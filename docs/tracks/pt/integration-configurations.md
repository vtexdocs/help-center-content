---
title: 'Configurações da integração'
id: 6EYEy1jRiAj465WOnhiczD
status: CHANGED
createdAt: 2019-11-18T13:39:42.709Z
updatedAt: 2022-04-08T20:49:56.270Z
publishedAt: 2020-02-13T15:01:19.456Z
firstPublishedAt: 2019-11-19T17:28:38.037Z
contentType: trackArticle
productTeam: Channels
slug: configuracoes-da-integracao
locale: pt
trackId: 50hbG4bzhSIhjz1lzqI1g4
trackSlugPT: integracao-com-a-wish
---

Os passos a seguir deverão ser feitos dentro do app.

## Definindo política comercial

1. No seletor, escolha a política comercial que será usada na Wish ([pré definida no passo 2](https://help.vtex.com/pt/tracks/configurar-integracao-da-wish--50hbG4bzhSIhjz1lzqI1g43OHGQIQmt1dKw9RwKruE7H#definindo-politica-comercial))
2. Após selecionar a política comercial, clique em "Continuar".

![PT - Configurar Wish](//images.ctfassets.net/alneenqid6w5/3EGGUHCj7UViCY8Jjct3UY/1172fa1d438d6d0ecaf35a01b57959f1/PT_-_Configurar_Wish.png)

## Configurações de envio

O envio dos itens na Wish pode ser feito da maneira mais ampla para a mais específica. É possível definir um valor de envio geral para qualquer lugar do mundo, assim como para uma sub-região específica de um país.

É importante destacar que a prioridade sobre o preço será sempre sobre o envio **mais específico**. Vamos ver o exemplo abaixo para esclarecer:

| Envio      | Especificação | Preço   |
| ---------- | ---------- | ---------- |
| Padrão     |            | R$ 30,00   |
| Por país   | Argentina  | R$ 25,00   |
| Por país   | Brasil     | R$ 20,00   |
| Por sub-regiões | Rio de Janeiro (região metropolitana)  | R$ 10,00 |
| Por sub-regiões | Rio de Janeiro (interior)              | R$ 15,00 |
| Por sub-regiões | São Paulo (região metropolitana) | R$ 10,00 |

- Se estamos enviando para Teresina, por exemplo, o preço será R$ 20,00 pois se encaixa no Preço para o Brasil, que é mais específico que o Envio padrão.
- Se estamos enviando para Alemanha, no entanto, o preço será R$ 30,00 pois entra em Envio padrão. 
- Mas se estamos enviando para o Rio de Janeiro (interior), então o preço será _R$ 15,00_.

Vamos entender como configurar cada uma delas abaixo:

### Envio padrão

É o preço de envio mais macro e pode ser usado tanto para entregas mundiais quanto para entregas locais.

_Ex: se você  definir que o  preço de envio padrão é de R$ 30,00 e não tiver mais nenhum preço de envio específico, então esse será o preço praticado para envios a qualquer lugar no mundo. Ou seja, fazer uma entrega para o México seria o mesmo preço de fazer uma entrega para Portugal, para Teresina ou para qualquer outro lugar._

### Envio por país

É o preço geral para as entregas feitas em um país específico. Dessa maneira, é possível diferenciar o preço de entrega entre um país e outro. [Veja aqui como fazer as configurações de envio por país na Wish](https://merchantfaq.wish.com/hc/pt/articles/205212607-Como-configuro-as-minhas-configura%C3%A7%C3%B5es-de-frete-).

_Ex: o preço de envio para todo o Brasil é R$ 20,00 enquanto que para a Argentina é R$ 25,00._

### Envio por sub-regiões

É o preço específico para cada uma das sub-regiões de um país. Dessa maneira, é possível diferenciar o preço de entrega entre uma sub-região e outra dentro de um mesmo país.

_Ex: o preço de envio para Rio de Janeiro (região metropolitana) é de R$ 10,00, enquanto que para o Rio de Janeiro (interior) é de R$ 15,00._

<div class = "alert alert-info">
  OBS: o envio por região está disponível apenas para sellers que usam <strong>Wish Express</strong> <a href="https://merchantfaq.wish.com/hc/pt/articles/360018939394-Como-enviar-usando-o-Wish-Express-Brasil-">(saiba mais aqui).</a>
 Para configurar a Wish Express, basta seguir <a href="https://merchantfaq.wish.com/hc/pt/articles/232047747-Wish-Express-Fluxo-de-Inscri%C3%A7%C3%A3o">estes passos.</a>
  </div>
  
Indique no setup se você usará Wish Express. Caso não use, pode pular para o passo seguinte.

Vale destacar que o preço do envio será definido automaticamente com base nas [tabelas de frete do módulo de logística](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/2Pj1gKR80QIuUhc0orMraD). Ou seja, ele será dinâmico e poderá variar em função de alguma mudança na tabela da transportadora ou, até mesmo, de acordo com a disponibilidade de um item.

_Ex: a transportadora X possui em sua tabela de frete o preço de R$ 7,00 para São Paulo (região metropolitana). Mas a tabela é atualizada para R$ 9,55. Numa próxima atualização de estoque, o valor de frete para esta região será atualizada em seus produtos na Wish._

## Definindo as transportadoras disponíveis

Para indicar qual transportadora da sua loja corresponde às [transportadoras aceitas pela Wish](https://merchant.wish.com/documentation/shippingproviders), será necessário realizar um de/para na configuração.

  1. Indique no primeiro seletor (_dropdown_) qual a transportadora na Wish;
  2. Indique no segundo dropdown qual o [tipo de transportadora](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega) na VTEX corresponderá à transportadora selecionada no passo anterior;

  _Ex: Imagine que você usa o Correios (PAC) como transportadora e seu Tipo de Transportadora no painel logístico da VTEX se chama "Convencional". Então, você deve escrever no campo o nome "Convencional". Lembre-se que a palavra deve ser exatamente igual à cadastrada na logística._

  3. Clique no botão “Salvar” para concluir.

<div class = "alert alert-info">
  OBS: caso seja mapeada alguma transportadora não-certificada pela Wish, os pedidos não poderão ser rastreados e, consequentemente, <strong>não haverá</strong> repasse da comissão. Então é necessário ser bem cauteloso nesta etapa.</div>

## Taxa de divergência de preço
 
Qualquer pedido que possua uma diferença entre o preço de venda do _marketplace_ e o preço determinado pelo _seller_, por padrão não é integrado na VTEX. Por isso, temos um mecanismo para aceitar a divergência automaticamente, que é definindo uma taxa aceitável para a divergência de preço.

Neste campo deve ser colocado o valor (em percentual) de até quanto o valor do pedido pode ser divergente do valor original.

_Ex: a taxa definida é de 10%. O valor original do pedido deveria ser de R$ 100,00, mas ele veio da Wish como R$ 109,00, então, considerando a taxa definida, o pedido será integrado. Porém, se o pedido tivesse vindo com R$ 150,00, então ele teria sido barrado e exibido na [aba de pedidos (dentro da seção de integrações no Admin)](https://help.vtex.com/pt/tutorial/verificando-integracao-no-bridge)._

## Conversão de moeda

**A Wish exige que os preços (de frete e do produto) sejam enviados em dólar (USD).** Tanto as tabelas de frete quanto o módulo de preços na VTEX inferem a moeda a partir da política comercial usada. 

Como indicado no [passo 2.1](https://help.vtex.com/pt/tracks/integracao-com-a-wish--50hbG4bzhSIhjz1lzqI1g4/3OHGQIQmt1dKw9RwKruE7H#definindo-politica-comercial), estamos usando política comercial em reais (R$) e, por isso, deve-se seguir estes passos para realizar a conversão.

No campo `"Cotação dólar (USD)"`, preencha o câmbio de reais (R$) para dólar (US$).

_Ex: se US$ 1,00 = R$ 4,00 , então preencha com 4,00._
