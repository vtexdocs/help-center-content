---
title: 'Criar promoção para pagamentos com o PSE'
id: 6YIp1fJ76gq667PQWjuj5T
status: PUBLISHED
createdAt: 2024-09-30T13:01:24.631Z
updatedAt: 2024-09-30T15:14:12.455Z
publishedAt: 2024-09-30T15:14:12.455Z
firstPublishedAt: 2024-09-30T14:20:52.605Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: creating-promotions-for-pse-payments
legacySlug: criar-promocao-para-pagamentos-com-o-pse
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O [PSE (Pagos Seguros en Línea)](/pt/tutorial/configurar-pagamento-com-pse--7dRChubn7TqdEyWrHQEQp6) é um meio de pagamento disponível nas lojas VTEX para transações na Colômbia. Caso você já utilize o PSE em sua loja e deseja oferecer uma condição especial de pagamento ao cliente de acordo com o tipo de banco selecionado, é possível criar uma promoção regular para o PSE.

Para configurar promoções por banco no PSE, é necessário:

- [Identificar o código do banco](#identificando-o-codigo-do-banco)
- [Criar uma nova promoção](#criando-uma-promocao-pse)

## Identificando o código do banco

Cada banco que realiza transações de pagamento associadas ao PSE possui um código específico de identificação. Para localizar o código do banco para o qual deseja criar uma nova promoção regular, siga os passos abaixo:

1. Acesse o checkout da sua loja.
2. Na seção de pagamentos, clique sobre a opção __PSE__.
3. Abra a página __Web Developer Tools__ do seu navegador. Caso tenha alguma dúvida, veja abaixo como realizar este procedimento de acordo com o tipo de navegador:<br>
<ul>
  <li>[Google Chrome](https://developer.chrome.com/docs/devtools/open#inspect)</li>
  <li>[Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)</li>
  <li>[Safari](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)</li>
</ul>
4. Clique sobre a aba __Rede__. 
5. Atualize a página pressionando a tecla __F5__ ou o botão de atualizar do seu navegador.
6. Na barra de busca, digite __operationName=Banks__.
7. Clique sobre o resultado exibido na coluna __Nome__.
8. Clique na aba __Visualização__.
9. No componente __data__, selecione o componente __banks__.
10. Clique sobre o nome do banco para o qual deseja criar a promoção e anote o número com 4 dígitos descrito no campo __code__.

![PSE Dev Tool pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/criar-promocao-para-pagamentos-com-o-pse_1.png)

## Criando uma promoção PSE

Após obter o código do banco, crie a promoção regular conforme os passos abaixo:

<blockquote><ui>1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.</ui>

<blockquote><ui>2. Clique no botão **Criar promoção**.</ui>

<blockquote><ui>3. Selecione a opção **Regular**.</ui>

<blockquote><ui>4. No campo **Nome**, preencha como você deseja identificar a promoção.</ui>

<blockquote><ui>5. Em **Data de expiração**, configure o período no qual o desconto será aplicado para os clientes que utilizarem o PSE com o banco configurado.</ui>

<blockquote><ui>6. Em **Tipo e valor de desconto?**, defina o tipo de desconto da promoção e preencha o valor.</ui> 

<blockquote><ui>> ℹ️ A promoção do tipo "Porcentagem" é a mais comum para promoções realizadas com bancos.</blockquote>
<br>
<blockquote><ui>7. Na seção **A quais itens esta promoção será aplicada?**, selecione se o desconto para pagamento com banco desejado via PSE deve ser aplicado a todos os produtos da loja ou somente para alguns tipos de produtos. Caso deseje restringir a promoção, configure os demais campos desta seção.</ui>

<blockquote><ui>8. Na seção **Quais as condições para a promoção ser válida?**, selecione a opção Tags de marketing e escreva **pse-discount-for-bank-code-XXXX**, substituindo o **XXXX** pelo código do banco desejado.</ui>

<blockquote><ui>9. Selecione a opção **Meio de pagamento** e escolha **PSE**.</ui>

<blockquote><ui>10. Na seção **Restrições e limitações de uso**, se você deseja que a promoção seja aplicada de forma acumulada com outras promoções da loja, selecione a opção **Permitir acumular promoções**.</ui>

<blockquote><ui>> ⚠️ A promoção PSE sempre será adicionada ao carrinho quando a opção **Permitir acumular promoções** estiver selecionada e houver outras promoções aplicadas nos produtos. Caso a opção **Permitir acumular promoções** não esteja marcada, o checkout irá utilizar apenas a promoção que permite o maior desconto nos produtos.</blockquote>
<br>
<blockquote><ui>11. Clique em **Salvar**.</ui>

