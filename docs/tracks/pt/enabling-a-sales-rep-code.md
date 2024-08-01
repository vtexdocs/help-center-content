---
title: 'Habilitar código do vendedor'
id: 5kNtS80hbBGg58jMeF8CRv
status: DRAFT
createdAt: 2021-02-04T11:42:33.284Z
updatedAt: 2021-11-25T13:59:49.170Z
publishedAt: 
firstPublishedAt: 2021-02-26T12:14:28.917Z
contentType: trackArticle
productTeam: Shopping
slug: habilitar-codigo-do-vendedor
locale: pt
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: instore-customizacoes
---

Associar uma venda a um determinado vendedor é uma ação recorrente em vários cenários da rotina de uma loja física.

Uma das possibilidades de customização do inStore é alterar o campo de [Observação](https://help.vtex.com/pt/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2/8Aj21R8bll0tdrxHWjVOs) – explicado no passo anterior da trilha –, para que este componente torne-se um campo específico para código do vendedor. 

Uma vez habilitada, essa customização exibe o campo `Vendor` no topo da página e adiciona uma etapa ao fluxo de compra. Agora, antes do Shipping, o vendedor precisa obrigatoriamente identificar a venda com o seu código.

<div class="alert alert-danger">
<strong>Atenção</strong>: neste caso, não é possível finalizar uma venda sem preencher o campo <code>Vendor</code> com código do vendedor.
</div>

## Editando o arquivo Javascript

Para habilitar o código do vendedor, é preciso fazer uma alteração no código JavaScript `checkout-instore-custom.js` salvo no painel administrativo da VTEX.

<div class="alert alert-warning">
É <strong>expressamente recomendável</strong> que o responsável pela modificação no código seja uma pessoa com <strong>experiência em programação</strong>. 
</div>  

<div class="alert alert-info">
O código do vendedor é habilitado <strong>apenas</strong> por JavaScript.
</div>

Primeiro, faça as configurações descritas no artigo [Habilitar campo de observação na tela do pedido](https://help.vtex.com/pt/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2/8Aj21R8bll0tdrxHWjVOs).

Depois de seguir essas recomendações, acesse o módulo __Configurações da loja__. Em seguida, prossiga por <strong>Checkout > Botão azul com o ícone <i class="fas fa-cog"></i> > Código</strong>.

Do lado direito da tela, você verá o arquivo `checkout-instore-custom.js`. 

![vendorcode](//images.ctfassets.net/alneenqid6w5/ZvQVCvlacD2AYf9eHKcxl/53885297fc0e0882178a6230815b2b6e/vendorcode.PNG)

Acesse-o e adicione o seguinte trecho ao objeto `window.INSTORE_CONFIG`:

```json
window.INSTORE_CONFIG = {
  noteAsVendorCode: {
    type: 'input',
    skipValidation: true,
    mask: '^(HE|TU)[A-Za-z0-9]{5,8}$', // Example
  },
}
```

<div class="alert alert-danger">
Não remova nenhuma das outras propriedades do objeto <code>window.INSTORE_CONFIG</code>. Caso contrário, outras funcionalidades da sua loja podem ser quebradas. Além disso, lembre-se que o código acima é apenas uma possibilidade de configuração. 
</div>

Cada responsável deve preencher as propriedades do objeto `window.INSTORE_CONFIG_` de acordo com o funcionamento esperado da customização para a sua loja. 

Por fim, finalize clicando no botão azul __Salvar__ localizado no topo da página.

![vendorcode2](//images.ctfassets.net/alneenqid6w5/59lZVji41rXxNjVXhwC6Ae/76513fc455650813e5740e68882421dd/vendorcode2.PNG) 

## Entendendo as propriedades

Como mencionamos anteriormente, o objeto `window.INSTORE_CONFIG` é escrito em JavaScript e deve ser editado, preferencialmente, por alguém que tenha conhecimento nessa linguagem de programação.

Dito isto, é importante ressaltarmos que o objeto é composto por três propriedades diferentes:

- `type`: propriedade responsável por definir o formato do campo `Vendors`. Os valores possíveis são `text`, `textarea`, destinados a grandes blocos de texto, e `input`, campo de texto que comporta chaves simples.

- `skipValidation`: propriedade booleana que ativa, ou não, a validação realizada pelo Master Data. Aceita os valores `true` e `false`.

- `mask`: expressão regular variável que aplica uma lógica de validação ao valor da propriedade `type`. Ou seja, cada responsável pela edição do objeto `window.INSTORE_CONFIG` pode criar a expressão variável que achar mais conveniente para o funcionamento do código do vendedor.

As combinações feitas a partir dessas três propriedades permitem várias possibilidades de configuração para o código do vendedor.   

