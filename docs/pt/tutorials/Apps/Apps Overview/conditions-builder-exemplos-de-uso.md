---
title: 'Conditions Builder - Exemplos de uso'
id: 3xrod1IDw4ucywYOg4cm6E
status: ARCHIVED
createdAt: 2018-06-25T15:13:10.190Z
updatedAt: 2020-03-13T21:24:58.470Z
publishedAt: 
firstPublishedAt: 2018-06-25T18:37:29.930Z
contentType: tutorial
productTeam: VTEX IO
author: 7kumplNTMIsWYGeeegCqO8
slugEN: conditions-builder-usage-examples
locale: pt
legacySlug: conditions-builder-exemplos-de-uso
subcategoryId: 3e2VLdLao8GGk4sAmMmwmi
---

O objetivo desse artigo é mostrar alguns exemplos de condições que podem ser criadas usando o *Conditions Builder* app.  
Para entender __como__ usar o app com mais detalhes, veja o artigo [Como usar o Conditions Builder](http://help.vtex.com/pt/tutorial/como-usar-o-conditions-builder-app).  
Para entender __para que__ criar condições, veja o artigo [Criar Preços Condicionais](http://help.vtex.com/pt/tutorial/como-criar-precos-condicionais).  

## Condições por UTM

UTM (Marketing tag) é uma informação que diz respeito a origem do tráfego do cliente. Então, no app existe um bloco que verifica esse tipo de informação.    

![utm_source_port](//images.ctfassets.net/alneenqid6w5/1X8rOnz0wwOgMWKE2IccGe/97a3907728c129ec075f425c9e221230/utm_source_port.png)  

>⚠️ **Nota: **
> É possível que sua loja utilize customização e por isso as informações de UTM contidas na URL não estão sendo passadas para o nosso sistema. Caso use customização de Javascript, leia o artigo [Por que as utms não estão sendo aplicadas ao carrinho](https://help.vtex.com/pt/faq/por-que-as-utms-nao-estao-sendo-aplicadas-ao-carrinho)

### utm_source

__utm_source__ informa a __origem__ do seu cliente até sua loja. No caso da imagem, o bloco verifica se essa origem foi o *site Facebook*

### utm_campaign

__utm_campaign__ informa em __qual campanha__ especificamente o seu cliente clicou. No caso da imagem, o bloco verifica se essa campanha foi a de *dia dos namorados*.

### utm_medium

__utm_medium__ informa qual __canal de propaganda__ atingiu seu cliente que pode ser, por exemplo, Email ou Banner em um site. No caso da imagem, o bloco verifica se o canal foi o *email*.  
  
  
![utmport](//images.ctfassets.net/alneenqid6w5/6dRgQcTn68eU8gOIIeu42o/4563858ba898bde92103408d12a9403d/utmport.png)  
  
Para cada um desses blocos, você têm a opção de verificar se:  

1. o valor __é exatamente__ o que você quer -> utm_source é (facebook)
2. o valor __não é exatamente__ o que você quer -> utm_source não é (facebook)
3. o valor __contém__ uma palavra que você quer -> utm_source contém (face)
4. o valor __não contém__ uma palavra que você quer -> utm_source não contém (face)  


### Exemplo

Vamos supor que você queira que, para um certo produto, o preço seja especial caso o seu cliente clicou no *banner* do dia das mães que recebeu por email.  
Logo você tem que criar uma condição que verifica se o __utm_medium__ é `email` e se o __utm_campaign__ é `dia_das_maes`. Então vai parecer algo como isso :  

![exemplo](//images.ctfassets.net/alneenqid6w5/4MTxq9CBK0EooyyGo4uKck/b5de55ca5990655b855760ea9138d91a/exemplo.png)  

## Condições pelo carrinho de compra

Há 3 blocos que dizem respeito aos itens contidos carrinho de compra do usuário:

### Quantidade Total
Esse bloco analisa a quantidade de itens no carrinho como um todo.

![qtdItens](//images.ctfassets.net/alneenqid6w5/5CG8dotStaeC628gCWCUGO/4fbc8f8b107c2725d671c63a999ad189/qntdItens.png)  

- __pelo menos__ -> verifica se no carrinho de compra do usuário existe __3 ou mais itens__.
- __no máximo__ -> verifica se no carrinho de compra do usuário existe __3 ou menos itens__.

### Quantidade de um SKU específico
Esse bloco analisa a quantidade do item específico ao qual ele será atrelado no [*Conditional Price*](http://help.vtex.com/pt/tutorial/como-criar-precos-condicionais)

![itemEspecifico](//images.ctfassets.net/alneenqid6w5/7Hi9CZ1as8Oi8YkawgIKcs/5a8f7e4f5b7b9a9af64a70735c14f7df/itemEspecifico.png)  

- __pelo menos__ -> verifica se no carrinho de compra do usuário existe __3 ou mais daquele item__.
- __no máximo__ -> verifica se no carrinho de compra do usuário existe __3 ou menos daquele item__.
- __exatamente__ -> verifica se no carrinho de compra do usuário existe __exatamente 3__ quantidades daquele __item específico__.


### Valor total
Esse bloco analisa o valor total que existe no carrinho.

![valorTotal](//images.ctfassets.net/alneenqid6w5/1fWh5tYsxSC60Ii8EgUWwe/830305c6df9657768663588e5b660f5d/valorTotal.png)  

- __pelo menos__ -> verifica se a __soma dos valores__ dos itens no carrinho vale __100 reais ou mais__.
- __no máximo__ -> verifica se a __soma dos valores__ dos itens existrrinho vale __100 reais ou menos__.

### Exemplo

Vamos supor que você queira dar um preço mais barato a um shampoo caso o cliente esteja levando __exatamente 3 unidades__, mas além disso precisa estar levando __no mínimo 150 reais__ em compras.
A condição a ser criada será : 

![Exemplo2](//images.ctfassets.net/alneenqid6w5/11Z9LujUl66G80yGQyKI6S/fa33819d9e0ef37113466e3612d370d5/exemplo2.png)  



