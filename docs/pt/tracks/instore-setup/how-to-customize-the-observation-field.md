---
title: 'Como customizar o campo de observação'
id: 3os5JpgOpiU500Yz2zOl19
status: ARCHIVED
createdAt: 2019-05-22T19:00:51.038Z
updatedAt: 2020-08-03T20:02:10.252Z
publishedAt: 
firstPublishedAt: 2019-05-22T21:10:23.345Z
contentType: trackArticle
productTeam: Shopping
slug: como-customizar-o-campo-de-observacao
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

O inStore possui um campo "Observação" onde é possível guardar informações adicionais no pedido. Os dados são enviados para o OMS através do campo `openTextField`, podendo ser recuperados posteriormente no Admin ou através da API.

Caso deseje customizar esse campo para receber algum dado em específico, por exemplo, o CPF do vendedor, é possível fazê-lo através de uma configuração no inStore.

Para renomear o texto exibido por padrão, basta editar o arquivo `checkout-instore-custom.js` presente no admin do Portal. Lá você precisa encontrar o objeto `window.INSTORE_CONFIG` e adicionar o trecho de código disponível abaixo:

```
window.LOCALE_MESSAGES = {
  locale: "pt",
  messages: {
    pt: {
      cartObservation: "CPF Vendedor", // título que aparece no carrinho
      cartObservationTitle: "CPF Vendedor", // título que aparece no modal de observação
      observationNote: "Digite o CPF do vendedor" // descrição do modal de observação
    }
  }
};
```
>❗ Não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.

Se for necessário aplicar alguma lógica de validação ou máscara para os dados inseridos nesse campo, é possível incluir no arquivo `checkout-instore-custom.js` uma função que escute o evento `note.visible` que é disparado quando o modal é aberto, e então desenvolver sua lógica.

```
document.addEventListener(
  "note.visible",
  function() {
    // adicionar a lógica de máscara, validação,  etc
    // exemplo: para pegar o elemento textarea de observação é possível fazer
    // var note = document.getElementById('note')
  },
  false
);
```

Se você precisa de algo mais avançado, como realizar uma requisição específica baseada nos dados inseridos, é possível escutar o evento `note.change` que é emitido toda vez que o botão para salvar os dados é pressionado.

```
document.addEventListener(
  "note.change",
  function(inputData) {
    // adicionar lógica que utiliza os dados
    // sendo "inputData" o conteúdo do campo
  },
  false
);
```
