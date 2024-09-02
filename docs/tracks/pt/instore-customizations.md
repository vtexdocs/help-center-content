---
title: 'Como customizar o inStore'
id: 4mwdBrFsmE2EPE0FzgX28b
status: DRAFT
createdAt: 2020-06-28T16:45:29.940Z
updatedAt: 2021-11-25T13:59:37.209Z
publishedAt: 
firstPublishedAt: 2020-06-28T17:11:13.723Z
contentType: trackArticle
productTeam: Shopping
slug: instore-customizacoes
locale: pt
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: instore-customizacoes
---

<div class="alert alert-danger">
A maior parte das customizações do inStore envolvem e alteração do arquivo JavaScript <code>checkout-instore-custom.js</code>. Essa operação deve ser realizada somente por pessoas com experiência em programação. Alterações incorretas nesse arquivo podem causar erros críticos.
</div> 

## Acessando o arquivo de customização do inStore

Você pode acessar o arquivo de customização diretamente pela URL da página ou via navegação no painel administrativo da VTEX.

### Acessando diretamente

Atualmente, a maior parte das customizações do inStore é feita alterando-se o arquivo checkout-instore-custom.js, que fica localizado nas configurações do Checkout, dentro do painel administrativo da sua loja VTEX.

Para acessar esse arquivo diretamente, você pode digitar a seguinte URL no navegador: `https://{{AccountName}}.myvtex.com/admin/portal#/sites/default/code/files/checkout-instore-custom.js`

Neste caso, `{{AccountName}}` deve ser substituído pelo account name da sua loja VTEX.

### Acessando pelo menu do Admin

Alternativamente, você pode navegar até o arquivo de configuração a partir da homepage do Admin da VTEX, via `https://{{AccountName}}.myvtex.com/admin`.

No menu principal, clique em __Checkout__ e, em seguida, clique no símbolo de engrenagem da loja, como indica a imagem abaixo.

![20. inStore Customizations (intro) - 1](//images.ctfassets.net/alneenqid6w5/4LKGRGjbprogSqW8fZfFDS/2a0919796851d030aa6dd86d93942620/20._inStore_Customizations__intro__-_1.png)

Clique, então, na aba __Código__ e depois no arquivo checkout-instore-custom.js, que se encontra na lista de arquivos à direita.

![20. inStore Customizations (intro) - 2](//images.ctfassets.net/alneenqid6w5/6YhI3qfwXzJEn4jnkWHPKC/e64eb7aa7ae72a71deb0308bffa65592/20._inStore_Customizations__intro__-_2.png)

## Alterando o arquivo de customização do inStore

O `checkout-instore-custom.js` é um arquivo JavaScript que aceita uma série de funções, variáveis e objetos responsáveis por alterar comportamentos padrão do aplicativo inStore.

Para fazer qualquer alteração, basta incluir ou modificar as linhas de código diretamente na caixa de edição do arquivo, no Admin da VTEX, e finalmente clicar no botão de __Salvar__, como indica a imagem abaixo.

![20. inStore Customizations (intro) - 3](//images.ctfassets.net/alneenqid6w5/4MRxgu5pLvZYTa8hGObbH1/96489ddb7665b702da05e72fd6d7e1bf/20._inStore_Customizations__intro__-_3.png)

<div class="alert alert-warning">
Siga sempre as instruções de customização desta documentação e faça apenas as alterações conforme indicadas aqui.
</div>

## Customizações do inStore

Estas são algumas das principais customizações que podem ser feitas no inStore atualmente. A maior parte delas exige alterações no arquivo `checkout-instore-custom.js`:

- Configurar identificação de cliente
- Mudar o idioma do aplicativo
- Habilitar campo de observação na tela do pedido
- Habilitar transferência de carrinho entre dispositivos
- Habilitar recomendação de produtos
- Habilitar filtro de pedidos por vendedor
- Forçar disponibilidade de estoque
- Adicionar texto extra na impressão do pedido
