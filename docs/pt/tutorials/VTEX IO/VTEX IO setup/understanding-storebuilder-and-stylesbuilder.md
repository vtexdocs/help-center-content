---
title: 'Conhecendo o StoreBuilder e o StylesBuilder'
id: 16r1nkCNqZI29V00JgmAlE
status: ARCHIVED
createdAt: 2019-03-07T21:45:31.460Z
updatedAt: 2020-03-13T21:25:01.256Z
publishedAt: 
firstPublishedAt: 2019-03-07T21:47:46.632Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slug: conhecendo-o-storebuilder-e-o-stylesbuilder
locale: pt
legacySlug: conhecendo-o-storebuilder-e-o-stylesbuilder
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

![UI Blocks Voando.mp4](//images.ctfassets.net/alneenqid6w5/4VRam6UukpPhsCBMtrhBbv/60bb012cd676ebcc8b8805de021529db/UI_Blocks_Voando.mp4.gif) 

Esta documentação foi estruturada para explicar os conceitos por tras do StoreBuilder e StyleBuilder da Store 2.xx. Durante toda a documentação, usaremos a DreamStore (um loja template que utiliza a `Store 2.xx`) para entender os principais conceitos que lhe permitirão estruturar e estilizar sua loja.

## Principais conceitos

- __Store__: um sistema que permite que lojas inteiras ("theme apps") sejam construídas usando `builders`. Apesar de você não usá-lo diretamente no desenvolvimento, será útil para fazer um [download](https://github.com/vtex-apps/store/tree/2.x) e entender como funciona.

- __Builder__: um arquivo `.json` que é processado e interpretado por IO. É um API que processa e interpreta um diretorio. 

- __StoreBuilder__: um builder responsável por definir a estrutura de blocos, rotas e conteúdo.

- __Bloco__: Uma estrutura de espeficificação através de componentes.  

- __Interfaces__: coleções de blocos com restrições que explicam para os builders como organizar os blocos.

- __DreamStore: app template que pode ser baixado de [nosso repositório de código aberto](https://github.com/vtex-apps/dreamstore/tree/2.x). __DreamStore é um aplicativo de tema de modelo (uma loja) que usa StoreBuilder e StyleBuilder da Store 2.xx para organizar rotas, estrutura, conteúdo e estilo.__ A Store 2 faz grandes mudanças de paradigma na Store 1, introduzindo o conceito de __blocos, interfaces e builders__.

Vamos olhar dentro do `/manifest.json` da DreamStore para ver o que nosso aplicativo precisa para funcionar corretamente:

![Screen Shot 2019-01-25 at 16.40.06](//images.ctfassets.net/alneenqid6w5/xQg8Ok5B1SbpKnACXsT7E/0d796fc2af346e1e9caf71eca3f6ec43/Screen_Shot_2019-01-25_at_16.40.06.png)

Observe como temos dois builders especificados:

(Por exemplo
"builders": {
"styles": "0.x",
"store": "0.x"
}

Se scrollarmos para baixo, podemos ver que estamos importando várias `dependências`, __o mais importante é o `vtex.store`__. Blocos adicionais podem ser adicionados a nossa de 'dependencies' conforme necessário.

Como toda theme app (uma loja) faz uso do aplicativo `Store` (através da dependência `vtex.store`) é importante separar alguns minutos para [fazer o download](https://github.com/vtex-apps/store/tree/2.x) e entendê-lo bem.


## Visualizando DreamStore

Execute "vtex link" e envie o app DreamStore para um workspace para que possamos estudá-lo

![Screen Shot 2019-01-27 at 22.24.47](//images.ctfassets.net/alneenqid6w5/6yCpuWYPBSqCIBkuv9oW14/47963f20fa8e85d76e57713a241eb583/Screen_Shot_2019-01-27_at_22.24.47.png)

Se você é familiarizado com  React ou outros frameworks modernos de Javascript , você estará familiarizado com o conceito de componentes em uma página da Web. Como podemos observar, nossa página da Web tem um "cabeçalho", "carrossel" e uma "prateleira". Como esses componentes foram inseridos?


## Olhando dentro do aplicativo DreamStore
Navegue de volta para o aplicativo DreamStore e abra-o com seu editor de código favorito.

Nosso aplicativo DreamStore contém três arquivos que lidam com 100% de toda a estrutura, funcionalidade e estilo da sua loja.

#### Abra `/store/blocks.json`

//blocks.json
```
{
  "store.home": {
    "blocks": [
      "carousel#home",
      "shelf#home"
    ]
  },
```

O objeto JSON acima define um objeto chamado store.home. Ele herda todos os blocos da `store` e adiciona o carrossel e a prateleira. Lembre-se antes de como `manifest.json` tinha `"vtex.store": "2.0.0-beta.11", ...` dentro de suas dependências?

`shelf # home` significa que uma versão específica de um carrossel com o id `home` foi criada apenas para `store.home`. Isso é particularmente útil quando formos reutilizar `shelf` em diferentes contextos em lugares diferentes da loja.

Como você deve ter notado, o `store.home` não parece conter uma searchbar ou um header. De onde surgiu?

Para entender melhor isso, devemos observar como funciona o aplicativo `Store 2.xx`.


## O aplicativo `Store 2.xx`

_Por favor, tenha em mente que você não estará desenvolvendo no aplicativo Store 2, mas estará desenvolvendo uma loja (aplicativo de tema) que herdará muitos atributos da `store`._

Vamos olhar dentro do arquivo `/manifest.json` do Store2.xx para ver o que o aplicativo importa.

![Screen Shot 2019-01-25 at 17.18.56](//images.ctfassets.net/alneenqid6w5/1E61SoeL536WyC8OIIi5YR/31e433f5cd9ed495e4cde33aa09d5faa/Screen_Shot_2019-01-25_at_17.18.56.png)

Podemos ver que é uma estrutura semelhante à do `manifest.json` da `Dreamstore`.

Como podemos ver a "vtex.store" importou o aplicativo Store, que por sua vez importou builders e dependências críticas que nos permitem criar um loja totalmente funcional. 

Todos os componentes de uma loja de ecommerce foram convertidas para blocos e todos estão prontos para ser utilizados por você através dos builders.

Agora que entendemos como o Store2.xx permite que você utilize tantos componentes, é hora de entender como eles estão organizados e comunicam entre si.

## Rotas
Abra `/store/routes.json`.

Aqui podemos encontrar o conhecido `store.home`

```{
  "store.home": {
    "path": "/"
  },
  ```

O bloco de código acima mostra que `store.home` é nossa página inicial, já que sua rota está definida como `/`

Indo mais abaixo, podemos ver que o próximo bloco tem uma propriedade adicional:

```
  "store.account": {
    "auth": true,
    "path": "/account"
  },
```

Observe como simplesmente adicionando `auth` e definindo-o como 'true', implementamos um sistema completo de login e conta em nossa loja.

> Observação importantíssima: o bloco `store.home` foi transformado em  página simplesmente adicionando uma rota dentro de `routes.json`.

Vamos agora explorar como os blocos dentro de uma página se organizam.


## Interfaces e Blocos
__Como cada página é definida por blocos e organizada por interfaces__, é hora de nos aprofundarmos mais e desenvolvermos nossa compreensão.

Abra a pasta `store` e abra o arquivo `interfaces.json`.

### Interfaces
![Screen Shot 2019-01-25 at 17.35.10](//images.ctfassets.net/alneenqid6w5/7oDltXNQMdYZ2uPTsk5b4G/97ff30d86ab194a331d9f2c2ef8d5c95/Screen_Shot_2019-01-25_at_17.35.10.png)

Uma interface é um conjunto de `blocks` e existe exclusivamente dentro do `Store2.xx`. Ele serve como um contrato entre os blocos e determina como vão trabalhar juntos.

Esses blocos são definidos dentro de uma array e são classificados em 5 tipos diferentes:

- __Around:__ geralmente não é um componente visível. Um exemplo seria um pixel de rastreamento do Google Analytics ou um wrapper.
- __Before:__ diz ao StoreBuilder que o bloco mencionado tem precedência e será visualmente ordenado de cima para baixo. Um exemplo seria um cabeçalho ou uma barra de navegação.
- __After:__ diz ao StoreBuilder que o bloco está localizado depois. Um exemplo comum são os rodapés.
- __Allowed:__ define quais blocos são permitidos pela loja.
- __Required:__ lista blocos que são absolutamente obrigatórios. O não cumprimento deste contrato irá travar o aplicativo no build.

Vamos continuar analisando o `store.home`. Eu estarei comentando inline.

```
{ 
/
  "store": {
//Aqui, declaramos um componente invisível que servirá como um appshell, preenchendo com conteúdo dinamicamente
    "around": [
      "storeWrapper"
    ],
    //O código abaixo força um header dentro de todo block `store`. Isto explica como nossa homepage tinha um header mesmo quando não estava explicito na DreamStore.
    "before": [
      "header"
    ],
    "after": [
      "footer"
    ],
    "allowed": [
      "carousel",
      "shelf",
      "rebuy",
      "address-manager"
    ],
    //Preview é o tipo de animação de loading enquanto o conteudo é carregado.
    "preview": {
      "type": "block"
    }
  },
//`store.home` é criado, herdando todos os blocos do bloco `store` 
  "store.home": {
  // um homeWrapper foi adicionado em conjunto ao  `storeWrapper`
    "around": [
      "homeWrapper"
    ],
    //Vamos usar uma versão especifica do header do `store` chamado `header.full`
    "before": [
      "header.full"
    ],
    "allowed": [
      "search-result"
    ]
  },
```

Se descermos podemos ver os mesmos objetos JSON definindo e configurando a organização da pagina. Outro exemplo é a página de resultados da pesquisa:
![Screen Shot 2019-01-25 at 18.22.12](//images.ctfassets.net/alneenqid6w5/1xXBCG7xjBUz1CEmHVoOhc/cf0bf48f2653f8688c97fd20f0d16287/Screen_Shot_2019-01-25_at_18.22.12.png)

A informação descreve as seguintes informações de interface
  
 
- Permite que um bloco searchWrapper esteja presente em torno de todo conteúdo
- Insere no topo que uma versão `completa` do bloco `header` e garante que estará presente no topo. É interessante saber que os blocos podem ser específicos para contextos específicos. Ex: tenha um cabeçalho mais fino e menos chamativo na página de checkout.
- Define que um bloco `search-result` é obrigatório e deve estar presente no bloco `search`.
- `Context` é usado para chamar `SearchContext`, uma função React responsável por manipular consultas de pesquisa.



## Configurando nossa DreamStore
Até agora, entendemos que:
- Tudo é configurado como bloco, incluindo páginas da Web que são  blocos com rotas definidas.
- DreamStore (nosso aplicativo template) herda blocos do aplicativo Store
- Store app tem um arquivo chamado `interface.json`, que serve como um contrato entre os blocos.

É hora de visitar o arquivo blocks.json da Dreamstore e entender como todo o site pode ser reordenado e configurado através de um único arquivo .json.

### Estruturando e configurando nossa loja com o `StoreBuilder`

![Codigo voando blocks.mp4](//images.ctfassets.net/alneenqid6w5/7FiPuNIljcVgvS8zIwKD5f/7f5b67d4f7314afc404680a96e5f3680/Codigo_voando_blocks.mp4.gif)

Abra `/ blocks.json` e encontre o nosso conhecido `store.home`. Vamos começar analisando o primeiro bloco dentro de `store.home : carrossel#home`.

Role para baixo até encontrarmos `carrossel#home`. Através de `props` podemos configurar nosso `carrossel#home` e ter suas propriedades ajustadas.

É fácil ver o quão poderoso o construtor de lojas pode ser quando adicionamos `ids` aos nossos blocos através de `#` e ajustamos eles com props

```
"carrossel # home": {
    "inheritComponent": true
    "adereços": {
      "autoplay": true
      "autoplaySpeed": 4,
      "banners": [],
      "altura": 440,
      "showArrows": true
      "showDots": true
    }
  }, 
  ```
  
  
### Estilizando nossa loja com o `StylesBuilder`
![StyleBuilder.mp4](//images.ctfassets.net/alneenqid6w5/5a9gZSPvWcVRIzdEbVo3k2/7ae4968655fa1a1919da1612fc490761/StyleBuilder.mp4.gif)


O StylesBuilder é simples de entender pois pega seu arquivo styles.json durente o build e usa o gerador de [Tachyons](https://tachyons.io/) para produzir o CSS da sua loja.

Nós projetamos o StylesBuilder para ser extremamente intuitivo e autoexplicativo. É tão simples quanto ajustar os códigos hexadecimais adequadamente e ver os resultados permearem por toda a loja.

![Screen Shot 2019-01-28 at 00.40.17](//images.ctfassets.net/alneenqid6w5/3JswKIv8jfYAyZCgmhfZhB/8208650f2907bb300e1ae83199490892/Screen_Shot_2019-01-28_at_00.40.17.png)

