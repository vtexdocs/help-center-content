---
title: 'Habilitar campo de observação na tela do pedido'
id: 8Aj21R8bll0tdrxHWjVOs
status: DRAFT
createdAt: 2020-06-28T18:36:12.121Z
updatedAt: 2021-11-25T13:59:45.186Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:40:29.042Z
contentType: trackArticle
productTeam: Shopping
slug: habilitar-campo-de-observacao-na-tela-do-pedido
locale: pt
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: habilitar-campo-de-observacao-na-tela-do-pedido
---

>❗ A customização explicada neste artigo envolve e alteração do arquivo JavaScript `checkout-instore-custom.js`. Essa operação deve ser realizada somente por pessoas com experiência em programação. Alterações incorretas nesse arquivo podem causar erros críticos.

O aplicativo do inStore permite o uso de um campo de "Observação", onde é possível guardar informações adicionais a respeito de cada pedido.

Os dados inseridos nesse campo são enviados via API para o OMS, nosso sistema de gerenciamento de pedidos. Eles populam o campo `openTextField`, podendo ser recuperados posteriormente tanto no Admin como por meio de uma chamada para a API.

Um exemplo comum de uso do campo de observação é o caso em que a loja deseja receber um número de identificação do vendedor que realizou a venda. Basta o vendedor inserir esse número no campo de observação sempre que fechar um pedido.

O campo de observação é habilitado por meio de uma alteração no arquivo `checkout-instore-custom.js`, dentro do objeto `window.INSTORE_CONFIG`. Ao habilitar o campo, você deve definir:

- O título do campo que aparece no carrinho.
- O título que aparece no modal de observação.
- A descrição do modal de observação.

Essas informações devem ser inseridas no código conforme o exemplo abaixo.

```json
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
                             
Se for necessário aplicar alguma lógica de validação ou máscara para os dados inseridos nesse campo, é possível incluir no arquivo `checkout-instore-custom.js` uma função que escute o evento `note.visible`, que é disparado quando o modal é aberto, e então desenvolver sua lógica.

```json
document.addEventListener(
  "note.visible",
  function() {
    // adicionar a lógica de máscara, validação etc.
    // exemplo: para capturar o elemento “textarea” do campo de observação, você pode usar o seguinte código:
    // var note = document.getElementById('note')
  },
  false
);
```

Se você precisa de algo mais avançado, como realizar uma requisição específica baseada nos dados inseridos, é possível escutar o evento `note.change`, que é emitido sempre que o botão para salvar os dados é pressionado.

```json
document.addEventListener(
  "note.change",
  function(inputData) {
    // adicionar a lógica que usa os dados.
    // o conteúdo do campo é o valor de "inputData"
  },
  false
);
```
