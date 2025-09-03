---
title: 'Formatos de dados'
id: ui0009-pt
status: PUBLISHED
createdAt: 2025-08-28T19:24:22.388Z
updatedAt: 2025-08-28T19:24:22.388Z
publishedAt: 2025-08-28T19:24:22.388Z
firstPublishedAt: 2025-08-28T19:24:22.388Z
contentType: trackArticle
productTeam: Localization
slugPT: formatos-de-dados
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugPT: formatos-de-dados
---

Formatar os dados de maneira consistente proporciona ao cliente uma experiência clara, organizada e acessível.

### Números

Use ponto como separador de milhar e vírgula como separador decimal.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>1.230</li><li>9,5</li><li>37.809.009</li><li>R$ 0,006653</li></ul> | <ul><li>1,230</li><li>9.5</li><li>37,809,009</li><li>R$0.006653</li></ul> |

Use no máximo duas casas decimais. Para números inteiros, use somente o número, sem casas decimais.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>9</li><li>1,53</li></ul> | <ul><li>9,0</li><li>1,533</li></ul> |

Indique valores como nulo, 0 ou vazio com um hífen ou com “Nenhum” em texto corrido.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>Nenhum produto para exibir</li><li>Total gasto do orçamento</li><li>-</li><li>-</li></ul> | <ul><li>0 produtos para exibir</li><li>Total gasto do orçamento</li><li>Nenhum</li><li>0%</li></ul> |

Use o formato “[número de vezes]x de R$ [valor monetário]” para indicar parcelamento, com o “x” (letra x minúscula, sem espaço antes, com espaço depois) representando o número de vezes.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| 3x de R$ 100 | <ul><li>3x</li><li>3 parcelas</li></ul> |

Abrevie números grandes quando o espaço for limitado, seguindo o padrão internacional de abreviações numéricas.

| Exemplos |
| :--- |
| <ul><li>60 mil = 60K</li><li>60 milhões = 60M</li><li>60 bilhões = 60B</li><li>60 trilhões = 60T</li></ul> |

Para números de telefone, use o formato (xx) xxxxx-xxxx para contextos locais e +55 (xx) xxxxx-xxxx para contextos internacionais.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>(11) 4118-3302</li><li>+55 (11) 4118-3302</li></ul> | <ul><li>011. 4118.3302</li><li>55-11-4118-3302</li></ul> |

Para porcentagens, escreva o número e o símbolo juntos. Prefira números inteiros e, se for necessário, limite a duas casas decimais.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>85%</li><li>85,31%</li></ul> | <ul><li>85 %</li><li>85,315 %</li></ul> |

### Moeda

Use o código do país quando quiser priorizar clareza e em contextos mais internacionais, e o símbolo da moeda em contextos que exigem mais usabilidade, como em uma vitrine.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>32.540,63 USD</li><li>R$ 61,45</li></ul> | <ul><li>$ 32.540,63</li><li>R$ 61,45666</li></ul> |

### Data e hora

São aceitas as formas extensa e numérica, desde que respeitem a ordem **dia, mês e ano**. Ao mencionar dias da semana, eles devem ser precedidos por vírgula e aparecer antes da data.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>26 de setembro de 2027</li><li>Segunda, 21 de junho de 2027</li><li>Segunda, 21/06/2027</li><li>30/04/2028</li></ul> | <ul><li>26 de setembro, 2027</li><li>Segunda 21 de junho</li><li>Segunda, 06/21/2027</li><li>04/30/2028</li></ul> |

Se precisar abreviar o nome do mês, use as três primeiras letras em minúsculas, seguidas de ponto. A única exceção é o mês de maio, que não tem forma abreviada.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>22 de out. de 2021</li><li>maio/2016</li></ul> | <ul><li>22/outubro</li><li>22 de out</li><li>Mai/2016</li></ul> |

Ao abreviar os dias da semana, use as três primeiras letras, seguidas de ponto. Em contextos com restrição de espaço, é aceitável usar apenas a letra inicial, desde que o significado seja claro (como em calendários).

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>seg.</li><li>ter.</li><li>Q</li><li>S</li></ul> | <ul><li>seg</li><li>ter</li><li>Q.</li><li>S.</li></ul> |

Em formulários e seletores de data, use o formato DD/MM/AAAA ou DD/MM/AA. Não use o formato norte-americano para datas.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| 30/05/25 | 05/30/25 |

Use preferencialmente o formato de 24 horas. Use a unidade horária (h) entre a hora e os minutos, sem espaços. Os minutos zerados não são necessários.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>14h30</li><li>16h</li></ul> | <ul><li>14:30</li><li>16H</li></ul> |

Para o formato de 12 horas, use a abreviação em letras minúsculas com pontos. Adicione um espaço entre a hora e a abreviação. Os minutos zerados não são necessários.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>A promoção começará às 9:00 a.m.</li><li>A promoção começará às 9 a.m.</li></ul> | A promoção começará às 9:00 AM |

Para indicar o tempo restante ou percorrido, use o formato 00d 00h 00m 00s, incluindo apenas as unidades de tempo necessárias.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>2d 5h 30m</li><li>45m 10s</li><li>10s</li></ul> | <ul><li>2:5:30</li><li>45' 10"</li><li>00:00:10</li></ul> |

Para indicar tempo decorrido, como data de criação ou última modificação, use a estrutura “x [unidade de tempo] atrás”.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>3 dias atrás</li><li>2 horas atrás</li><li>15 minutos atrás</li></ul> | <ul><li>Há 3 dias</li><li>Há 2 horas</li><li>Faz 15 minutos</li></ul> |

### Unidades de medida

Use espaço entre o número e a unidade de medida.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>10 kg</li><li>50 cm</li><li>3 m²</li><li>100 km/h</li></ul> | <ul><li>10kg</li><li>50cm</li><li>3m²</li><li>100km/h</li></ul> |

No checkout, coloque o sinal de mais (+) ou menos (–) antes do símbolo da moeda (R$) sem espaço entre eles.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>+R$ 45,00</li><li>−R$ 6,99</li></ul> | <ul><li>+ 45,00</li><li>− R$6,99</li></ul> |

Nunca use plural nas abreviações de unidades de medida; elas permanecem no singular mesmo quando o valor for maior que um.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>7 kg</li><li>60 m</li><li>1 cm</li></ul> | <ul><li>7 kgs</li><li>60 mts</li><li>7 cms</li></ul> |

Para preços por medida, não use espaço antes ou depois da barra (/).

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>R$ 2,99/m</li><li>R$ 5,50/kg</li><li>R$ 3,00/un</li></ul> | <ul><li>R$ 2,99 / m</li><li>R$ 5,50/ kg</li><li>R$ 3,00 /un</li></ul> |

Sempre use números e unidades ao indicar quantidades.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>5 m</li><li>50 cm</li></ul> | <ul><li>cinco metros</li><li>cinquenta centímetros</li></ul> |

Sempre use quilômetros como unidade de medida para distância.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>10 km</li><li>0,5 km</li></ul> | <ul><li>6,21 mi</li><li>0,3 mi</li></ul> |

### Intervalos

Sempre use o meia-risca (en dash –) com espaço antes e depois para indicar intervalos.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>1 – 30 resultados da busca</li><li>1kg – 4kg</li><li>4 de abril – 6 de junho de 2026</li><li>71601 – 72999</li></ul> | <ul><li>1 - 30 resultados da busca</li><li>1kg - 4kg</li><li>4 de abril - 6 de junho de 2026</li><li>71601-72999</li></ul> |

> Nota: o meia-risca é um travessão curto (–) e difere do hífen (-) e do travessão regular (—).

### Endereços

O formato padrão de endereço no Brasil inclui o nome do destinatário, seguido do logradouro com tipo (rua, avenida, etc.), nome, número e complemento, quando houver. Em seguida, deve vir o bairro (opcional, mas recomendado em cidades maiores) e, por fim, a cidade, a sigla do estado em maiúsculas e o CEP com oito dígitos, separado por hífen (xxxxx-xxx).

Exemplo:

```
Maria Silva
Rua das Flores, 123, apto 45
Jardim Primavera
São Paulo, SP
01234-567
```

Use vírgula entre a cidade e o estado. Se o endereço for escrito em uma única linha, coloque vírgula após o nome da rua e após a cidade.

| Exemplo |
| :--- |
| Rua das Flores, 123, São Paulo, SP |

Para casos especiais, siga as orientações dos [Correios do Brasil](https://www.correios.com.br/para-voce/enderecamento/manual-de-enderecamento-postal). Para endereços de outros países, siga as diretrizes do serviço postal oficial de cada país.

Correto ✅
```
Av. Paulista, 931 – Bela Vista
São Paulo, SP 01311-000
```

Incorreto ❌
```
Av. Paulista, 931- São Paulo,
01311000
```

Ao indicar uma localização aproximada, pode-se usar o CEP no formato de oito dígitos, a cidade ou ambos. Se utilizar cidade e CEP juntos, separe-os por vírgula.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>01311-000</li><li>São Paulo, 01311-000</li></ul> | <ul><li>01311000</li><li>São Paulo - 01311-000</li></ul> |

### Nome de países

Para nomes de países, siga as normas oficiais do IBGE ou padrões internacionais da ISO 3166-1 adaptados para o português.

| Exemplos |
| :--- |
| <ul><li>Estados Unidos</li><li>Reino Unido</li><li>US</li><li>GB</li></ul> |

### Locales

Para identificar localidades (idioma + país), use uma subtag de idioma com duas letras em minúsculas, seguida de uma subtag de país com duas letras em maiúsculas, separadas por hífen. Essa prática segue o padrão [IETF BCP 47](https://www.rfc-editor.org/rfc/rfc5646#ref-ISO639-3), que combina normas ISO.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>en-US</li><li>en-GB</li></ul> | <ul><li>En-US</li><li>EN</li></ul> |

### Documentação

Escreva por extenso os números menores que 10 (um, dois, três etc.). Use algarismos a partir de 10, exceto quando o número não indicar um valor específico. Exceção: em tabelas, pois usar algarismos melhora a legibilidade.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| Este filtro excede o intervalo máximo de seis meses. | Este filtro excede o intervalo máximo de 6 meses. |

Quando um evento ou ação ocorrer em um horário local específico, inclua a cidade e o fuso horário UTC correspondente. Caso não seja um evento físico e não tenha um local específico, mencione apenas o UTC correspondente.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>O evento será realizado em São Paulo às 10h30 (UTC−3)</li><li>Última atualização: 6h42 (UTC-3)</li></ul> | <ul><li>O evento será realizado às 15h (GMT−3).</li><li>Última atualização: 6h42 (UTC-3)</li></ul> |

#### Moedas

Use o símbolo da moeda, seguido de espaço. Para números inteiros, preferencialmente, use somente o número, sem casas decimais.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| Vamos utilizar como exemplo um preço no valor de R$ 100. | Vamos utilizar como exemplo um preço no valor de R$ 100,00. |

### Interfaces de usuário

#### Moedas

No checkout, use o símbolo da moeda, sempre com um espaço entre o símbolo e o valor e duas casas decimais, mesmo sendo número inteiro.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>R$ 55,90</li><li>R$ 100,00</li></ul> | <ul><li>R$ 55,9</li><li>R$ 100</li></ul> |

No storefront, use o símbolo da moeda, seguido de espaço. Para números inteiros, use somente o número, sem casas decimais.

| Correto ✅ | Incorreto ❌ |
| :--- | :--- |
| <ul><li>R$ 55,90</li><li>R$ 80</li></ul> | <ul><li>R$ 55,9</li><li>R$ 80,00</li></ul> |
