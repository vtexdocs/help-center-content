---
title: 'Adicionais de frete'
id: 2vqGwMn0LabkOHY6zSHYNV
status: PUBLISHED
createdAt: 2021-08-18T19:48:01.276Z
updatedAt: 2023-03-29T18:32:47.454Z
publishedAt: 2023-03-29T18:32:47.454Z
firstPublishedAt: 2021-08-18T19:54:49.257Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: additional-shipping-costs
locale: pt
legacySlug: adicionais-de-frete, como-funciona-o-adicional-de-frete
subcategoryId: 7uJcyu0VawEm8ggqKu404u
---


Os adicionais de frete são valores extras adicionados ao custo de envio pelas [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140). Então, ao configurar um valor de custo para a entrega dos itens da sua loja, é possível configurar uma tarifa fixa e incluir valores adicionais. O custo fixo de entrega somado aos adicionais compõem os custos da [tarifa de envio](https://help.vtex.com/pt/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM).

![Tarifa envio PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.svg)

Os valores adicionais podem ser configurados conforme:

* O peso do produto: [adicional por peso](https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV#adicional-por-peso).
* O valor do produto: [adicional por preço](https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV#adicional-por-preco).
* O seguro do produto: [adicional de seguro](https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV#adicional-de-seguro).
* O valor do frete:  [adicional de frete](ahttps://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV#adicional-de-frete).

![adicionais frete PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.svg)

>❗ É importante ressaltar que é possível ter todos os adicionais configurados simultaneamente para uma única tarifa de envio. O cálculo final da [tarifa de envio](https://help.vtex.com/pt/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM) é a soma de todos os adicionais cadastrados mais a tarifa fixa do frete. 
> A tarifa de envio não é o custo final de envio.

## Adicional por peso

É o custo extra baseado no peso do produto. Ao cadastrar essa tarifa o valor configurado é acrescentado em cada unidade de peso que está acima do limite inicial. Então, para uma política de envio que possui o adicional de peso configurado, os pacotes que ela entrega terão uma cobrança extra sobre o peso que ultrapassa o limite inferior da faixa configurada. 

Para um dado pacote, o adicional resultante a ser pago é obtido pela multiplicação do adicional por peso configurado, pela diferença entre o peso do produto e limite inferior da faixa de peso:

_adicional por peso resultante = (peso do produto - limite inferior da faixa) x (adicional por peso)_

### Exemplo

Por exemplo, para uma determinada tarifa de envio a faixa de peso aceita pela política de envio é de 300g a 500g (conforme o exemplo da tabela abaixo), o **adicional de peso** cadastrado é $0,10. Isso significa que para cada g que o pacote ultrapassa o limite inferior de 300g, o valor será acrescido em $0,10.   

Considerando um pacote de 350g com as seguintes características:

Tarifa fixa: $10,00  
Adicional de seguro: $0,00  
Adicional por preço: $2,00  
**Adicional por peso:** $5,00  
    _O cálculo do valor monetário do adicional por peso para uma entrega de um pacote de 350g será (350-300)0,1= $5,00._
Adicional de frete configurado: 10%  

Resultado:  
Adicional de frete: ($10+$0+$2+$5)x10%=$1,70  
Adicionais de frete: ($2+$5+$1,7)=$8,70  
Tarifa de envio: ($10+$8,70)=$18,70  

### Configuração 

Há duas formas de configurar o adicional por peso, para saber mais acesse aos tutoriais:

* Pela [Planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127): usando o campo da coluna _PriceByExtraWeight_.
* Pela página [Tarifa de Envio](https://help.vtex.com/pt/tutorial/gerenciar-valores-de-frete--tutorials_141): no campo chamado _valor adicional por peso._

## Adicional por preço

É o custo extra baseado no preço do carrinho. Ao cadastrar essa tarifa, um custo extra proporcional ao preço do carrinho será adicionado à tarifa de envio. 

### Exemplo

Por exemplo, uma política de envio tem configurado o **adicional por preço** de 5% para suas entregas. Para um carrinho que tem o preço de $180,00 valor do adicional será $9,00. Então, será somado à tarifa de envio o adicional por preço de $9,00.  

Assim o cálculo ficará com:  

Tarifa fixa: $10,00  
Adicional de seguro: $0,00  
**Adicional por preço:** $9,00  
Adicional por peso: $5,00  
Adicional de frete configurado: 10%  

Resultado:  
Adicional de frete: ($10+$0+$9+$5)x10%=$2,4  
Adicionais de frete: ($9+$5+$2,4)=$16,4  
Tarifa de envio: ($10+$16,4)=$26,4  

>❗ É importante lembrar que o cálculo do adicional por preço não considera possíveis descontos e promoções, e sim o valor cheio do carrinho. Se o adicional por preço for menor que o adicional de seguro, o adicional por preço é desconsiderado no cálculo final da tarifa de envio.

![faixa-peso PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

### Configuração 

Há duas formas de configurar o adicional por preço, para saber mais acesse aos tutoriais:

* Pela [Planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127): usando o campo da coluna _PricePercent_.
* Pela página [Tarifa de Envio](https://help.vtex.com/pt/tutorial/gerenciar-valores-de-frete--tutorials_141): no campo chamado _valor adicional._

## Adicional de seguro

É o custo extra para o seguro da entrega. Ao cadastrar essa tarifa, um valor absoluto será adicionado na tarifa de envio.

### Exemplo

Durante o cadastro dos custos da [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) pela [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127), para os códigos postais ou polígonos selecionados, se há um **adicional de seguro** configurado para $3,00, será somado um valor de $3,00 para todas as entregas daquela localização:

Considerando um pacote com as seguintes características:  

Tarifa fixa: $15,00  
**Adicional de seguro:** $3,00  
Adicional por preço: $0,00  
Adicional por peso: $5,00  
Adicional de frete configurado: 10%  

Resultado:
Adicional de frete: ($15+$3+$0+$5)x10%=$2,3
Adicionais de frete: ($3+$5+$2,3)=$10,3
Tarifa de envio: ($15+10,3)=$25,3

### Configuração 

O adicional de seguro é configurado apenas pela [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127) pelo campo _MinimumValueInsurance._

>❗ Se o adicional por preço for menor que o adicional de seguro, o adicional por preço é desconsiderado no cálculo final da tarifa de envio.

## Adicional de frete

É o custo extra sobre o valor da tarifa de envio. Então, depois de considerar todos os outros adicionais e a tarifa fixa, calcula-se o **adicional de frete**. Ele é um percentual da tarifa de envio e não considera o valor do produto.

Esse adicional é o último a ser calculado, e é feito pela fórmula:

_valor do adicional de frete = (tarifa fixa + todos adicionais) x (adicional de frete)_

### Exemplo

Considerando um pacote com as seguintes características:  

Tarifa fixa: $15,00  
Total de adicionais (de peso, de preço e seguro): $6,00  
**Adicional de frete** configurado: 10%  

Resultado:  
Adicional de frete resultante: $2,10  
Tarifa de envio: ($15,00+$6,00)+($2,10) = $23,10  

### Configuração 

Para configurar o adicional de frete, acesse o menu esquerdo do Admin VTEX:

1. No Admin VTEX, acesse **Configurações da loja > Envio > Configurações**, ou digite *Envio* na barra de busca no topo da página e selecione *Configurações da loja / Envio*.   
2. Na página de configurações na janela de **Adicional nos Fretes,** preencha o valor.
    Se quer incluir uma taxa de 10% preencha o campo com 10. Para números decimais utilize pontos ao invés de vírgula (como em 1.67).
3. Clique em `Salvar`.

![adicional configuracoes PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)
