---
title: 'Cadastrar kit'
id: tutorials_215
status: PUBLISHED
createdAt: 2017-04-27T22:13:50.843Z
updatedAt: 2024-05-06T14:40:12.311Z
publishedAt: 2024-05-06T14:40:12.311Z
firstPublishedAt: 2017-04-27T23:02:48.663Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: kit-registration
locale: pt
legacySlug: cadastrando-kit
subcategoryId: pwxWmUu7T222QyuGogs68
---

Um kit é um conjunto de produtos que são vendidos juntos, ou seja, é um produto composto de outros produtos.

Um kit pode permitir ou não que seus componentes sejam vendidos separadamente, entenda as diferenças:

- **Kit**: Em um kit, na página do produto, os componentes só podem ser vendidos no kit, ou seja, não podem ser vendidos separadamente. Se os componentes estiverem configurados para exibir no site, eles serão apresentados normalmente nas páginas de categoria, marca e nos resultados de busca, bem como em qualquer prateleira.
- **Kit Look**: Em um kit look, todos os produtos componentes podem ser encontrados no site e vendidos fora do kit, ou seja, até mesmo na página de produto do kit look é possível comprar os itens separadamente, ou todos juntos. Leia [Montar um Kit Look](https://help.vtex.com/pt/tutorial/como-montar-um-kit-look--tutorials_266) para mais informações sobre esse tipo de kit.

## Criar produtos

Para a configuração do kit é necessário que os produtos que irão fazer parte dele &#8211; seus componentes &#8211; já estejam criados. Confira o exemplo abaixo:

![Componentes](//images.ctfassets.net/alneenqid6w5/6k1lQeZ7AQ4qSQ80sWy0wg/24b2af0e0aa753077e69a3a0a8de7359/Screenshot_2018-10-24_11.05.54.png)

Após a criação dos produtos componentes, podemos seguir para a configuração do kit.

1. Crie o produto que será o kit. Leia [Cadastrar Produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1ROhz3Y7mfSMmCO1I1GxEL) para saber mais sobre esse processo.
2. Abra as configurações do SKU que será o kit. Leia [Cadastrar SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ) para saber mais sobre esse processo.
3. Clique na aba __Configurações Avançadas__.
4. Clique na opção `Ativar Kit`.
5. Caso queira um kit look, clique na opção __Kit com itens vendidos separadamente__.
6. Clique em `Salvar`.

![kit](//images.ctfassets.net/alneenqid6w5/2ELMh0gTCcSiag28qAsAmg/68fb75589fef19ed4001aec9b3cedfa1/02-kit_PT.png)

## Associar componentes

Depois de criar o produto que será o kit, você precisa associar os componentes, seguindo os passos abaixo:

1. Após a criação do SKU, você será redirecionado para a tela de visualização do SKU. Caso tenha saído da tela, acesse a página de produto &gt; SKU.
2. Clique na seta e em `Editar`.
3. Clique na opção __Kit__.
4. Clique no botão `Novo Componente`.
5. Preencha com o ID do SKU que deseja associar como componente do KIT.
6. Preencha a quantidade daquele SKU por KIT, ou seja, qual a quantidade o SKU terá em cada um dos KITs.
7. Preencha o preço unitário do SKU dentro do KIT.
6. Clique em `Salvar`.

![Adicionar componente ao kit](//images.ctfassets.net/alneenqid6w5/3Cza8qJSEoIK6I00wa2aAU/07caa35d542518e389b66eca48bdffbb/03-add_component_to_kit_PT.gif)

![Kit no carrinho](//images.ctfassets.net/alneenqid6w5/239UK8f3gEQi4IKc6YeyEI/0878bffc1325d9c3f79365f7aa479ef8/04-kit_in_cart_ALL.png)

## Peso do kit

O peso do kit será formado pelo somatório do peso de seus componentes. Editar o peso diretamente no novo produto Kit não irá surtir efeitos na plataforma. O simulação de frete segue a mesma regra.

## Inventário

O [inventário](https://help.vtex.com/pt/tutorial/inventory-management--tutorials_139) do kit sempre será o inventário de seus componentes. Ou seja, não é possível inserir inventário apenas no kit, é preciso inserir inventário em cada um de seus componentes independentes, a fim de atualizar o inventário do kit. Essa informação pode ser visualizada no Admin VTEX em **Catálogo > Inventário > Gerenciamento de inventário**.

Como todos os SKUs componentes do kit só podem ser vendidos juntos, o inventário do kit será igual ao SKU com menos itens em inventário. Quando um dos componentes não possui mais inventário, o kit não pode ser comprado.

Exemplo: um kit possui dois componentes. Considere que o componente 1 possui 30 unidades em inventário e o componente 2 possui 3 unidades no inventário. Logo, apenas 3 unidades do kit poderão ser vendidas.

Os componentes do kit podem estar em estoques diferentes, contanto que eles sejam enviados a partir da mesma doca. Se não saírem pela mesma doca, o kit inteiro se torna indisponível. 

>ℹ️ Este cenário não acontece com um kit look, pois o kit look pode ser vendido com os componentes que restaram no inventário, sem a necessidade de se ter todos os componentes do kit no inventário.

## Preço

O preço do kit é atualizado automaticamente após alterar o valor unitário de algum dos componentes, na página de cadastro do SKUs componentes do Kit, no __Catálogo__. O preço final será a soma do valor dos componentes.

Você também pode alterar somente o preço final do kit direto pelo sistema de preços sem atualizar os componentes. Dessa forma, o valor do componente será usado apenas para ratear o valor de venda entre os componentes, determinando o preço de cada componente naquele pedido específico.

Mas note que alterar qualquer componente irá gerar um novo preço final, atualizando o que foi anteriormente cadastrado.

Alterar somente o preço final não atualiza o preço dos componentes.

![Lista de preços](//images.ctfassets.net/alneenqid6w5/6eI3atVTvq0SgOw6c2uAqa/27af79495fd4de8860c36d214196246e/06-price_list_PT.png)

### Saiba mais

- [Ordenar os produtos do Kit Look](https://help.vtex.com/pt/tutorial/como-ordenar-os-produtos-do-kitlook--frequentlyAskedQuestions_621)
