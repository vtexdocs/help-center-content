---
title: 'Como funciona o adicional no frete'
id: tutorials_121
status: DRAFT
createdAt: 2017-04-27T22:18:41.679Z
updatedAt: 2021-08-25T13:18:16.442Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:43.430Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-funciona-o-adicional-de-frete
legacySlug: como-funciona-o-adicional-de-frete
subcategory: 1UL6Q7nUN6SkA2g2SUsECi
---

Existem três formas de se adicionar um valor extra sobre o frete: adicional por valor, adicional por peso e adicional percentual. Cada uma é calculada e configurada de maneiras diferentes em seu Admin VTEX. Este artigo inclui:

- O que é adicional por valor
- Como cadastrar adicional por valor
- O que é adicional por peso
- Como cadastrar adicional por peso
- O que é adicional percentual no frete
- Como cadastrar adicional percentual no frete


## Adicional por valor

O adicional por valor é calculado a partir do preço do produto. É definida uma porcentagem que se aplicará ao preço do produto, e esse valor resultante é adicionado ao valor inicialmente calculado pelo frete. 

![adicionalfrete1 PT](//images.ctfassets.net/alneenqid6w5/JRCo7yI9iwkS0uYW822eY/32044c9a1d1636d10d9eec1202625fc6/adicionalfrete1_PT.png)

No caso acima, o valor dos produtos totaliza R$ 80,00 e o valor cadastrado como __Valor adicional__ é 10%. Com isso, o valor calculado para ser adicionado ao valor do frete é de R$ 8,00. A soma do valor final de frete e o valor adicional, é de R$18,00.


### Como cadastrar adicional por valor

O adicional por valor é configurado através da planilha de frete, ao se cadastrar uma política de envio.  O campo na planilha é o **PricePercent**.
Confira nossa documentação sobre [como preencher campos da planilha de frete](https://help.vtex.com/pt/tutorial/como-montar-a-planilha-de-frete--tutorials_127?locale=pt) para saber mais.


## Adicional por peso

O adicional por peso é calculado com base no peso do produto. O cálculo desse campo se dá a partir da diferença entre o peso do produto, e o limite inferior da faixa de peso, cadastrada na planilha de frete.

A conta é a seguinte:

![adicionalfrete2 PT](//images.ctfassets.net/alneenqid6w5/19t4etUFuYCK0sM2SCK4g2/99a0bc4b935a1db688f94795ea3614b3/adicionalfrete2_PT.png)

Ou seja, no exemplo, o limite mínimo da faixa de peso que o produto se encontra é de 100 gramas. O valor cadastrado no campo __Valor adicional por peso__ é de 0,1. Logo, o valor a ser adicionado ao cálculo de 14,00, o valor final ficou em R$ 24,00.

### Como cadastrar adicional por peso

O adicional por peso é configurado através da planilha de frete, ao se cadastrar uma política de envio.  O campo na planilha é o **PriceByExtraWeight**.
Confira nossa documentação sobre [como preencher campos da planilha de frete](https://help.vtex.com/pt/tutorial/como-montar-a-planilha-de-frete--tutorials_127?locale=pt) para saber mais.


## Adicional percentual no frete

O adicional no frete é calculado sobre o valor final do frete, e não sobre o valor do produto. Esse percentual é o último item do frete a ser calculado. O cálculo de frete é feito com base na seguinte conta:

O valor cadastrado na tabela de frete + o adicional por peso + o adicional por valor * o valor cadastrado no campo adicional no frete.

![adicionalfrete3 PT](//images.ctfassets.net/alneenqid6w5/Q9pu2UYMAEM0gs200yAmw/0442d1b40cba53fb7237b27df323fe08/adicionalfrete3_PT.png)

Nesse caso, o valor inserido no campo __Valor adicional__, será o valor percentual a ser somado ao valor final calculado do frete. Por exemplo: se o frete, com todos seus adicionais já calculados, der R$20,00 e o valor cadastrado no campo Adicional nos Fretes for 10, significa que será acrescentando R$2,00 aos R$20,00 do frete, totalizando R$ 22,00 a ser cobrado ao cliente pelo frete. Essa é uma maneira simples de conseguir uma margem sobre os fretes das compras.


### Como cadastrar adicional percentual no frete

 1. Acesse a seção **Estoque & entrega**.  
 2. Acesse a aba **Configurações**.  
 3. Em **Adicional nos Fretes**, preencha o campo **Incluir valor adicional de ___ % em todos os fretes**.  
 > Para porcentagens quebradas, separe os dígitos utilizando ponto. O sistema não lê vírgulas nesse campo. Exemplo: 1.67%     
 4. Clique no botão **Salvar**.  


