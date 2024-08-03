---
title: 'Preencher campos de cadastro de SKU'
id: 21DDItuEQc6mseiW8EakcY
status: PUBLISHED
createdAt: 2017-09-22T00:20:45.920Z
updatedAt: 2023-07-14T20:59:40.541Z
publishedAt: 2023-07-14T20:59:40.541Z
firstPublishedAt: 2017-09-22T00:40:16.232Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slug: campos-de-cadastro-de-sku
locale: pt
legacySlug: campos-de-cadastro-de-sku
subcategory: pwxWmUu7T222QyuGogs68
---

<div class="alert alert-warning">
  <p>Existe um limite de 50 SKUs por produto. Para solicitar que o limite seja ampliado, entre em contato com <a href= "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

Para entender o significado de cada campo do cadastro de SKU, veja a descrição completa dos itens relacionados na página.

__Nome do produto:__ já aparece preenchido com o nome do produto ao qual o SKU irá pertencer.

__Nome:__ deve conter o nome do SKU, ou seja, a variação do produto, que já foi cadastrado anteriormente. Exemplo: Produto - Geladeira, SKU - 110 volts. O nome do SKU é limitado a 200 caracteres.

__Valor para Fidelidade:__ crédito que o cliente recebe ao concluir uma compra de 1 unidade de um determinado SKU. Ao colocar “1,00” neste campo, o cliente ganha um crédito de R$ 1,00 no site.

__EAN13:__ código de identificação único do SKU (código de barras), aceita até 13 caracteres numéricos.

__Código de Referência:__ código de referência único criado para ajudar na organização. Não é um item obrigatório.

__Peso para Frete:__ calculado para frete. Deve ser cadastrado com valor maior do que zero para o funcionamento correto do <a href="https://help.vtex.com/pt/tutorial/como-e-feito-o-rateio-de-frete--frequentlyAskedQuestions_155">rateio de frete</a>.

<div class = "alert alert-info">
<p>O módulo de <strong>Envio/Estoque e Entrega</strong> não leva em consideração unidades de medida nos campos abaixo. Basta ser consistente com o que é cadastrado nos <a href="https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke">campos de cadastro do produto</a> e do SKU.</p>
</div>

__Altura para Frete:__ calculada para frete.

__Largura para Frete:__ calculado para frete.

__Comprimento para Frete:__ calculado para frete.

__Peso Real:__ campo para ser inserido o peso real do produto.

__Altura Real:__ campo para ser inserida a altura real do produto.

__Largura Real:__ campo para ser inserida a largura real do produto. 

__Comprimento Real:__ campo para ser inserido o cálculo do frete.

__Data Prevista de Chegada (pré-venda):__ para cadastrar o produto como pré-venda, insira a data prevista de chegada do produto, no formato `dd/mm/aaaa`. É preciso levar em consideração tanto a data de lançamento quanto o cálculo do frete para o cadastro da data de chegada.

__Acessórios:__ adiciona novos SKUs ao SKU que está sendo cadastrado. Se estiver cadastrando um vestido, colocar como acessório um cinto. Tem como particularidade gerar um checkbox onde o cliente pode clicar e já realizar a compra de ambos os itens.

__Sugestão:__ sugere novos SKUs ao SKU que está sendo cadastrado. Se  estiver cadastrando um vestido, coloca como sugestão um cinto. No entanto, o cliente não consegue comprá-los junto. É necessário entrar na página de cada um dos itens que ele quiser comprar.

__Similar (Produtos Suplentes):__ Esse campo tem a função de mostrar na página do produto outras opções que sejam similares ao mesmo. Limite de 50.

__Mostrar junto:__ exibe os SKUs dos produtos sugeridos para compra em conjunto. 

__Código condição comercial:__ utilizado para definir promoções/regras de parcelamento específicas para SKUs. Caso não exista uma condição específica, usar o valor padrão. Saiba mais no artigo Condição Comercial. 

__Unidade de medida:__ utilizado apenas em casos onde é necessário converter a unidade de medida para a venda. Por exemplo, se o produto é vendido em caixas, mas os clientes querem comprar por m². Nos casos comuns, utilizar “un”.

__Multiplicador de Unidade:__ unidade numérica que multiplica a quantidade selecionada do produto ao ser inserido no carrinho. Caso o Multiplicador seja 5, o produto será adicionado em quantidades múltiplas de 5 - 5, 10, 15, 20, em diante. 

__Ativar SKU se possível:__ campo que ativa o SKU, caso ele atenda a todos os requisitos necessários para a ativação. Ative a flag para que após a conclusão de todas as etapas de cadastro de SKU, ele seja ativado automaticamente.

__SKU Ativo?:__ define se o SKU existente está ativo ou não. Automaticamente. Não permite nenhuma alteração, sendo apenas utilizado para consulta.

__Código do Fabricante:__ fornecido pelo fabricante para identificar seu produto. Caso algum produto tenha um código específico, esse campo deve se preenchido.

Após o preenchimento dos campos, clique em `Salvar`. Para dar continuidade ao cadastro, você terá as abas __Imagens__, __Especificações__ e __Configurações Avançadas__.

## Imagens

<div class="alert alert-info">
  <p>A imagem de SKU apresenta o tamanho limite de 3200 x 3200 pixels.</p>
</div>

Como cadastrar uma nova imagem:

1. Clique na aba __Imagens__.
2. Clique em __Inserir__.
3. Selecione sua imagem em __Escolher Arquivos__.
4. Preencha o campo __Texto__.
5. Preencha o campo __Label__.
6. Para finalizar, clique em `Enviar`.

Como associar uma imagem já existente a um SKU:

1. Clique na aba __Imagens__.
2. Clique em `Associar a imagens existentes`.
3. Selecione um SKU.
6. Para finalizar, clique em `Associar imagens`.

## Vídeos

Nesta seção, você pode incluir vídeos relacionados ao seu SKU. Para isso, adicione a URL do vídeo desejado na caixa de texto. Você pode adicionar até seis URLs, sendo uma URL por linha.

Não existem controles nativos para renderizar o conteúdo de vídeo. O front-end deve manipular os dados inseridos para exibir o conteúdo para o cliente.

## Especificações

Dependendo da categoria do produto criado, aparecerão ou não campos para seu preenchimento.

Esses campos são propriedades que você pode adicionar aos seus SKUs para atribuir características específicas aos produtos da sua loja.

Confira mais detalhes em [Cadastrar especificações ou campos de SKU
](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119).

## Configurações Avançadas
Entenda os campos para preenchimento das informações referentes ao SKU:

__Ativar Kit:__ define se o SKU do produto em questão é composto por um ou mais SKUs, tornando-se um Kit. Deve ser ativada se estiver sendo realizado o cadastro de um Kit. Uma vez ativada, não é possível reverter a flag. 

__Kit com item vendido separadamente:__ deve ser ativada no caso do SKU fazer parte de um Kit.

__Gera crédito em Vale?__: define que o SKU em questão, quando comprado, irá gerar crédito em um Vale. Também é utilizado na definição de listas que gerem um valor em Vale Compras para o dono.

__Modal__: relaciona um produto não usual a uma transportadora especializada na entrega desse tipo de produto. Para saber mais sobre essa funcionalidade, leia nossos artigos [Como funciona o modal](https://help.vtex.com/pt/tutorial/como-funciona-o-modal--tutorials_125) e [Configurar modal para transportadoras](https://help.vtex.com/pt/tutorial/configurar-modal-para-transportadoras--3jhLqxuPhuiq24UoykCcqy#).

__Anexos:__ mostra uma informação personalizada do comprador de um serviço ou do próprio item comprado.

Após o preenchimento dos campos necessários, basta clicar em Salvar, na aba SKU.

### Artigos relacionados
- [Preencher campos de cadastro do Produto](/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke)
- [Preencher campos da Planilha de Importação](/pt/tutorial/preencher-campos-da-planilha-de-importacao--4nYhx63Q5yokQWaMguaIgI)

<div class="alert alert-danger">
Para garantir que itens adicionados ao estoque fiquem disponíveis para venda na loja, o <a href="https://help.vtex.com/pt/tutorial/descobrir-o-id-de-um-sku--4VQZsYeb3igGK2YowuEYWW"> ID do SKU </a> não deve conter <b>o número zero à esquerda</b>. O sistema não reconhece, por exemplo, IDs no formato <code>01</code>, <code>02</code>, <code>021</code>, pois é esperado o formato  <code>1</code>, <code>2</code>, <code>21</code>.
</div>
