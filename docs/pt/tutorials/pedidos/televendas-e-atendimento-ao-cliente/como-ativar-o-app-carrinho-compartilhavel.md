---
title: 'Como ativar o app Carrinho Compartilhável (Social Selling)'
id: 1lS3fQdXpOoC0BTeVhydfg
status: PUBLISHED
createdAt: 2020-05-01T23:27:25.719Z
updatedAt: 2025-09-04T20:08:14.558Z
publishedAt: 2025-09-04T20:08:14.558Z
firstPublishedAt: 2020-05-01T23:33:47.947Z
contentType: tutorial
productTeam: Apps
author: 56yU9Wz6mLwmzo82TjgAHy
slugEN: how-to-activate-the-shareable-cart-app
legacySlug: como-ativar-o-app-carrinho-compartilhavel
locale: pt
subcategoryId: 6SEjoixhY5LlA7G15W6oZS
---

O app [Carrinho Compartilhável](https://apps.vtex.com/vtex-social-selling/p) permite que vendedores selecionem produtos para seus clientes e compartilhem o carrinho preenchido por canais como WhatsApp, Facebook Messenger e e-mail.

![Shareable Cart Demo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/televendas-e-atendimento-ao-cliente/como-ativar-o-app-carrinho-compartilhavel_1.gif)

Este artigo explica como instalar o app e configurar a funcionalidade na sua loja. Ao concluir os passos de ativação, seus vendedores poderão seguir as [instruções de uso](/pt/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN) para iniciar suas estratégias de Social Selling.

## Instalação

Para instalar o app na sua loja, siga os passos a seguir:

1. Acesse a [página do app](https://apps.vtex.com/vtex-social-selling/p) na VTEX App Store.
2. Clique no botão __Obter app__.
3. Digite o nome da sua conta no pop-up e clique em __Confirmar__.
4. Leia os termos de serviço e clique no botão __Instalar__.

Ao concluir estes passos, o app será instalado na conta informada. O próximo passo é rever as configurações do app para ajustá-lo às necessidades da sua loja.

> ⚠️ O nome da sua conta é o identificador usado para acessar seu Admin, no lugar de <code class="c-link">{accountName}</code> no endereço: `https://<span class="c-link">{accountName}</span>.myvtex.com/admin`

## Configuração

Ao finalizar a instalação do app na sua loja, você será redirecionado para sua página de configuração. Ela pode ser encontrada em *Apps > Meus Apps > Social Selling > Configurações*.

Confira os detalhes de cada configuração a seguir. Caso necessite fazer algum ajuste, não se esqueça de clicar no botão __Salvar__ para que as mudanças sejam aplicadas na sua loja.

### Ativar app

Quando ativada, esta configuração faz com que a interface de compartilhamento de carrinho apareça para usuários que acessarem sua loja pelo link:

`https://{Endereço web da sua loja}/checkout/?socialselling=on`

Quando desativada, a interface deixa de aparecer para todos usuários.

### Adicionar vendedor

Esta configuração permite ativar a identificação de vendedores através de campos específicos do pedido.

- __Ativo__: permite exibir ou ocultar o botão __Adicionar código de vendedor__ na interface de compartilhamento de carrinho.

- __Adicionar utmiCampaign__: disponibiliza `utmiCampaign` para preenchimento.

- __Adicionar marketingTag__: disponibiliza `marketingTag` para preenchimento.

A escolha do campo em que o código do vendedor será inserido depende das necessidades da loja. No formulário de pedido `utmiCampaign` recebe apenas um valor, enquanto `marketingTags` pode ser preenchido com múltiplos valores.

Se ambas opções estiverem selecionadas, o vendedor precisará indicar qual campo está preenchendo na interface de compartilhamento de carrinho.

> ℹ️ As informações registradas poderão ser encontradas no card **Promoções e Parcerias** nos [detalhes do pedido](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/204AjAQseJe8RLUi8GAhiC?locale=pt) ou dentro do objeto `marketingData` retornado ao obter as informações do pedido usando a [Orders API](https://developers.vtex.com/reference/orders#getorder).

### Canais 

Esta configuração permite ativar os canais de compartilhamento desejados na interface de compartilhamento de carrinho.

- Whatsapp
- Facebook Messenger
- SMS
- Link
- Gmail
- Email

> ⚠️ Lembre-se que o vendedor precisará fazer login nas contas de redes sociais e aplicativos utilizados para compartilhamento no dispositivo que utilizarem para montar o carrinho.

## Customização (opcional)

Caso você queira customizar as cores dos botões da interface de compartilhamento de carrinho da sua loja, isto é possível através de uma [customização do Checkout](/pt/tutorial/configurar-template-no-smartcheckout--frequentlyAskedQuestions_599). 

Na imagem a seguir, a opção A apresenta as cores originais e a opção B uma customização possível.

![shareable-cart-ui-customization](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/televendas-e-atendimento-ao-cliente/como-ativar-o-app-carrinho-compartilhavel_2.png)

O código abaixo deve ser adicionado no fim do arquivo `checkout5-custom.css` ou `checkout6-custom.css`, disponível para customização em *Configurações da Loja > Checkout > Código*. A escolha de qual deve ser editado depende da versão do Checkout utilizada pela sua loja.

> ❗ **Atenção:** Erros na customização do checkout podem quebrar o fluxo de compra dos seus cliente. Peça ajuda para seu time técnico se não souber o que está fazendo.

Em seguida, basta alterar as propriedades no código CSS conforme a necessidade. 

```
/* START Pick Color Nuevo Carrito */
.sb-b-erasecart .sb-icon,
.sb-b-erasecart .sb-label,
.sb-b-erasecart a:hover .sb-icon {
   color: #fff!important;
   background-color: #ee38ed!important
}
/* END Pick Color Nuevo Carrito */
/* START Pick Color Codigo Vendedor */
.sb-b-codigovendedor .sb-icon,
.sb-b-codigovendedor .sb-label,
.sb-b-codigovendedor a:hover .sb-icon {
   color: #fff!important;
   background-color: #a62a9a!important
}
/* END Pick Color Codigo Vendedor */
/* START Pick Color Whatsapp */
.sb-b-whatsapp .sb-icon,
.sb-b-whatsapp .sb-label,
.sb-b-whatsapp a:hover .sb-icon {
   color: #fff!important;
   background-color: #ad28ac!important
}
/* END Pick Color Whatsapp */
/* START Pick Color Facebook Messenger */
.sb-b-facebook-messenger .sb-icon,
.sb-b-facebook-messenger .sb-label,
.sb-b-facebook-messenger a:hover .sb-icon {
   color: #fff!important;
   background-color: #8e208d!important
}
/* END Pick Color Facebook Messenger */
/* START Pick Color SMS */
.sb-b-sms .sb-icon,
.sb-b-sms .sb-label,
.sb-b-sms a:hover .sb-icon {
   color: #fff!important;
   background-color: #751b74!important
}
/* END Pick Color SMS */
/* START Pick Color Link */
.sb-b-link .sb-icon,
.sb-b-link .sb-label,
.sb-b-link a:hover .sb-icon {
   color: #fff!important;
   background-color: #5a155a!important
}
/* END Pick Color Link */
/* START Pick Color GMAIL */
.sb-b-gmail .sb-icon,
.sb-b-gmail .sb-label,
.sb-b-gmail a:hover .sb-icon {
   color: #fff!important;
   background-color: #480b48!important
}
/* END Pick Color GMAIL */
/* START Pick Color Email */
.sb-b-email .sb-icon,
.sb-b-email .sb-label,
.sb-b-email a:hover .sb-icon {
   color: #fff!important;
   background-color: #330133!important
}
/* END Pick Color Email */
/* START Pick Color BUTTON OK */
.swal2-styled.swal2-confirm {
   border: 0!important;
   border-radius: .25em!important;
   background: initial!important;
   background-color: #31c431!important;
   color: #fff!important;
   font-size: 1.0625em!important;
}
/* END Pick Color BUTTON OK */
/* START Pick Color BUTTON CANCEL */
.swal2-styled.swal2-cancel {
   border: 0!important;
   border-radius: .25em!important;
   background: initial!important;
   background-color: #a0a0a0!important;
   color: #fff!important;
   font-size: 1.0625em!important;
}
/* END Pick Color BUTTON CANCEL */
```

## Perguntas frequentes (FAQ)

### Como essa funcionalidade é possível tecnicamente?

O app utiliza a funcionalidade de [carrinho compartilhado](/pt/tutorial/o-que-e-o-carrinho-compartilhado--3oKJZfoAoUm8g0ukCIGsUu?locale=pt) da VTEX, que permite que mais de um cliente adicione, retire ou atualize itens e informações de um mesmo carrinho.

### De que forma identificar vendedor e promoção?

Apresentamos algumas possibilidades na tabela abaixo. Recomendamos que o time técnico de suporte à loja avalie a forma mais simples de atender às necessidades do negócio.

<table style="border-spacing:0;border-collapse:collapse" class="w-100 center mv7 bb b--gray">
  <thead>
    <tr class="bb b--muted-3">
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Cenário</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Descrição</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Detalhes</th>
    </tr>
  </thead>
  <tbody>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width:5rem">**1**</td>
   <td class="t-body pa5">utmi_campaign + marketingTag</td>
    <td class="t-body pa5" style="min-width:25rem">
      `utmiCampaign = codigoVendedor`
      `marketingTags[1] = promo10off`
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5">**2**</td>
   <td class="t-body pa5">marketingTag</td>
   <td class="t-body pa5">
     `marketingTags[1] = codigoVendedor`
     `marketingTags[2] = promo10off`
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5">**3**</td>
   <td class="t-body pa5">utmi_campaign + cupom</td>
   <td class="t-body pa5">
     `utmiCampaign = codigoVendedor`
     `coupon = cupomDesconto`
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5">**4**</td>
   <td class="t-body pa5">cupom</td>
   <td class="t-body pa5">`coupon = cupomDescontoVendedor`</td>
  </tr>
  </tbody>
</table>

> ℹ️ No Cenário 4 é necessário [gerar cupons em massa](/pt/tutorial/consigo-gerar-um-cupom-em-massa--frequentlyAskedQuestions_348?locale=pt), para que cada vendedor tenha seu próprio cupom para identificação e ativação de desconto.

### Quem preenche os dados pessoais e o endereço: vendedor ou cliente?

O vendedor não precisa fazer login para iniciar a navegação e selecionar os produtos. O preenchimento dos dados pessoais e do endereço pelo vendedor é __opcional__.

Sendo assim, tanto o vendedor quanto o cliente podem preenchê-los, conforme a preferência do cliente. __Já os dados de pagamento devem ser sempre preenchidos pelo cliente.__

### O vendedor terá acesso a dados sensíveis, como endereço e pagamento?

Não, o vendedor não terá acesso a dados sensíveis do cliente. Mesmo que o vendedor preencha os dados pessoais e de entrega, o cliente poderá alterá-los ao receber o link.

Sendo assim, mesmo que o cliente receba um link com os dados do vendedor vinculados, ele __precisa__ confirmar em nome de quem e em qual endereço, de fato, será feita a compra.

### De que forma o vendedor pode abordar o cliente?

Para que a abordagem do vendedor seja efetiva, o ideal é que se apresentem condições promocionais diferenciadas para privilegiar as vendas assistidas em relação às compras realizadas diretamente pelo e-commerce.

__Se o vendedor já possui um histórico de contato com o cliente__, ele pode entrar em contato e assistir a venda em tempo real, criando o carrinho a medida que conversa com o cliente.

__Caso não possua este contato direto__, o vendedor pode criar opções de carrinhos de acordo com a estratégia de marketing e/ou o perfil do cliente. E então abordar o cliente de forma de ativa, apresentando os diferenciais de cada opção.

### Como o vendedor pode acompanhar os pedidos?

O cliente sempre terá acesso ao acompanhamento de seu pedido pelo e-mail cadastrado do pedido. __Por isso é essencial garantir que este seja preenchido corretamente.__

Para que o vendedor também tenha acesso pode-se:

- Utilizar o SAC da empresa para atendimento dos vendedores
- Criar uma página customizada de consulta de vendas

A página customizada de consulta de vendas seria desenvolvida usando as [APIs da VTEX](https://developers.vtex.com/docs/getting-started-list-of-rest-apis) para consultar os pedidos que utilizaram o código do vendedor, dar visibilidade do status de cada pedido e facilitar o controle da conversão, entrega e cálculo de comissão.

### Como eu altero um carrinho já compartilhado?

Basta abrir o link compartilhado para carregar o carrinho e fazer as alterações necessárias. Todos usuários com acesso ao link podem ver itens, adicionar e remover produtos, e até pagar pelo pedido. 

### Se eu alterar os itens ou dados de um carrinho, isso afeta outros carrinhos compartilhados anteriormente?

Não. Todas alterações afetam somente o carrinho que foi acessado, identificável pelo parâmetro orderFormId visto no link compartilhado.

### Por quanto tempo um carrinho compartilhado existe?

Cada carrinho compartilhado criado permanece válido até o fechamento da compra ou por um período máximo de 2 anos.

### Por que devo gerar um novo carrinho a cada nova venda?

O carrinho compartilhado funciona como um carrinho de compras normal - cada comprador deve ter o seu. O compartilhamento não cria vários carrinhos com os itens escolhidos, apenas permite que mais de um usuário modifique o seu conteúdo.

