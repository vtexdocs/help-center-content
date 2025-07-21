---
title: 'Adicionar ou editar SKU'
id: 4ryZ6J45kwn3jDiQBxGiiN
status: PUBLISHED
createdAt: 2024-08-29T19:24:29.305Z
updatedAt: 2025-04-15T15:17:18.932Z
publishedAt: 2025-04-15T15:17:18.932Z
firstPublishedAt: 2024-08-29T19:28:11.129Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: adding-or-editing-skus
locale: pt
legacySlug: cadastro-de-skus-beta
subcategoryId: pwxWmUu7T222QyuGogs68
---

A página [Produtos e SKUs](/pt/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By) permite ao lojista gerenciar produtos e variações existentes ou cadastrar novos. Este artigo orienta sobre como adicionar ou editar SKUs. Caso deseje informações relacionadas a produtos, confira o artigo [Adicionar ou editar produto](/pt/tutorial/adicionar-ou-editar-produto--29IkdEu6GofCFlltsZh2H8).

Todo novo SKU criado precisa estar vinculado a um produto. Assim, uma vez que você tenha o produto criado, para cadastrar um novo SKU, basta seguir os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite **Produtos e SKUs** na barra de busca no topo da página.
2. Clique na linha referente ao produto desejado.
3. Clique na aba **SKUs**.
4. Clique no ícone adicionar + para **Abrir as opções de adicionar SKUs**.
5. Clique em `Adicionar novo SKU`.

  <div class = "alert alert-info">
É possível criar um novo SKU a partir de um SKU já cadastrado no produto. Para isso, na aba SKUs, clique no <b>ícone menu do SKU > Duplicar > Salvar</b>.
</div>

6. Preencha os campos do formulário de cadastro do SKU, conforme descrito nas seções:

    * [Nome e status](#nome-e-status)
    * [Especificações](#especificacoes)
    * [Mídias](#midias)
    * [Identificadores](#identificadores)
    * [Logística](#logistica)
    * [Estratégia Comercial](#estrategia-comercial)
    * [Customizações](#customizacoes)
    * [Vitrine](#vitrine)

    > Os campos de preenchimento obrigatório estão marcados com um asterisco (*).

7. Clique em `Salvar`.

<div class="alert alert-danger">
Uma vez criado, o SKU pode ser inativado, mas a ação de excluir um único SKU não é possível. A plataforma só permite excluir SKUs e produtos em massa por meio da <a href="https://help.vtex.com/pt/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802">Manutenção de Base (Full Cleanup)</a>.
</div>

Após a criação do SKU, é possível acompanhar sua disponibilidade para venda por meio do ícone colorido. Ao passar o mouse sobre o ícone, aparece um texto com o significado da cor, como na imagem abaixo. Saiba mais em [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#acompanhar-disponibilidade-de-produtos).

![adding_or_editting_sku_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products%20and%20SKUs/adicionar-ou-editar-sku_1.png)

Além disso, uma vez que o SKU seja cadastrado, é possível torná-lo parte de um [kit](/pt/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28). Para isso, na linha do SKU desejado, clique no ícone menu e selecione a opção `Formar kit`. Vale reforçar que a ação de transformar o SKU em kit é definitiva e não pode ser desfeita.

Veja nas seções a seguir os campos do formulário e as orientações sobre como preenchê-los.

<div class="alert alert-warning">
  <p>Existe um limite de 50 SKUs por produto. Para solicitar que o limite seja ampliado, entre em contato com <a href= "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

## Nome e status

A parte inicial do formulário é sobre a nomeação e ativação do SKU:

- <b>Nome*:</b> insira o nome do SKU, ou seja, a identificação da variação do produto. O nome é limitado a 200 caracteres. Exemplo: para o produto “Geladeira”, o nome do SKU pode ser “110 volts”.
- **Ativo:** para ativar o SKU sendo criado, habilite o <i class="fas fa-toggle-on" aria-hidden="true"></i>. Para mantê-lo inativo, deixe o toggle desabilitado <i class="fas fa-toggle-off" aria-hidden="true"></i>. Se após ativar o SKU ele estiver indisponível para venda, consulte o artigo [Por que o produto não aparece no site?](/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

## Especificações

Especificações são propriedades configuradas no SKU e que podem ser selecionadas pelo cliente para serem adicionadas ao carrinho. Por exemplo, a voltagem de um eletrodoméstico é uma especificação, e o cliente pode escolher entre 110 ou 220 volts.

Dependendo do produto ao qual o SKU está associado, a seção **Especificações** pode apresentar diferentes campos a serem preenchidos.

<div class="alert alert-warning">
Quando existe uma especificação de SKU, o seu preenchimento é obrigatório. Para mais informações, veja o artigo <a href="https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119">Cadastrar especificações ou campos de SKU.</a>
</div>

<div class="alert alert-danger">
Não é possível criar um SKU com a mesma combinação de valores já existente em outro SKU. Por exemplo, se a combinação do SKU A for cor preta e tamanho P, não seria possível criar o SKU B com cor preta e tamanho P, pois isso geraria um conflito. No entanto, se a cor do SKU A fosse preta e o do SKU B fosse azul, mesmo mantendo o tamanho P para ambos, não haveria um conflito, pois as combinações seriam diferentes. Caso deseje, você pode inativar um SKU, mas a plataforma não permite excluir um único SKU.
</div>

## Mídias

Nesta seção, é possível adicionar imagens ou vídeos ao SKU.

### Imagens

No campo **Imagens**, ao clicar em `Adicionar`, aparecem duas formas de realizar o upload de fotos e imagens:

* `Selecionar arquivos`: adiciona imagens armazenadas localmente no computador ou outro dispositivo.
* `Adicionar links`: adiciona imagens por URL.

A tabela abaixo apresenta os limites e formatos aceitos para cada imagem:

| **Tema** | **Informações** |
| :--- | :--- |
| Tamanho máximo em pixels | 5.000 x 5.000 pixels |
| Tamanho máximo em MB | 4 MB |
| Extensões de arquivo permitidas | <p><ul><li>JPG</li><li>PNG</li><li>GIF</li><li>ICO</li><li>SVG</li><li>WEBP</li></ul></p> |

Após realizar o upload de uma imagem, é possível editar os metadados, seguindo os passos abaixo: 

1. Passe o mouse sobre a imagem, de forma a visualizar os ícones existentes.
2. Clique no ícone menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Clique em `Editar metadados`.
4. No modal, preencha as informações de metadados.
5. Clique em `Aplicar`.

Além de adicionar novas imagens a um SKU, é possível replicar as imagens de um SKU para outros SKUs relacionados ao mesmo produto. Para isso, siga os passos abaixo:

1. No canto superior direito da seção **Imagens**, clique no ícone <i class="far fa-clone" aria-hidden="true"></i>.
2. No modal **Escolha os SKUs em que deseja replicar as mídias**, clique nos SKUs para os quais deseja copiar as imagens.
3. Clique em `Aplicar`.

<div class="alert alert-warning">
Para ativar um SKU, um dos requisitos é ele ter pelo menos uma imagem. Para saber mais sobre as condições para apresentar um item no storefront, consulte o artigo <a href="https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382">Por que o produto não aparece no site?</a>.
</div>

### Vídeos

No campo **Vídeos**, ao clicar em `+ Adicionar` é aberta a janela **Adicione links das mídias dos SKUs**. Para adicionar um vídeo, digite sua URL e, em seguida, clique em `Aplicar`.

O SKU pode ter até 6 vídeos e a **única forma de adicioná-los é por meio de links das plataformas Vimeo ou Youtube**. Os formatos aceitos são:

**Vimeo**

- `https://vimeo.com/{VIDEO_ID}`

**Youtube**

- `https://youtu.be/{VIDEO_ID}`
- `https://www.youtube.com/watch?v={VIDEO_ID}`
- `https://www.youtube.com/embed/{VIDEO_ID}`
- `https://www.youtube.com/v/{VIDEO_ID}`

<div class="alert alert-warning">Substitua <code>{VIDEO_ID}</code> de acordo com seu cenário.</div>

## Identificadores

Os campos desta seção são referentes aos códigos que identificam o SKU:

* **Código de referência:** código de referência único, usado para auxiliar o lojista na gestão do catálogo.
* **EAN/UPC:** o EAN (European Article Number) e o UPC (Universal Product Code) são códigos de identificação internacionais e correspondem ao código de barra de um item. Cada SKU só pode ser associado a um deles e é possível diferenciá-los pelo número de caracteres alfanuméricos, que são 13 para o EAN e 12 para o UPC.
* **Código do fabricante:** código fornecido pelo fabricante para identificar o SKU. Caso algum SKU tenha um código específico, esse campo deve ser preenchido.

## Logística

Os campos do SKU sobre [logística](/pt/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) são os seguintes:

### Modal (opcional)

[Modal](/pt/tutorial/como-funciona-o-modal--tutorials_125) é uma configuração da transportadora que realiza entregas especializadas. Isso porque alguns produtos exigem condições especiais para serem transportados, como refrigeração ou capacidade de portar carga química. 

Quando foram criadas anteriormente, as opções de modais para o SKU são apresentadas como uma lista, na qual é possível escolher uma única opção. Para saber mais, veja o artigo [Configurar modal para transportadoras](/pt/tutorial/configurar-modal-para-transportadoras--3jhLqxuPhuiq24UoykCcqy).

### Peso e dimensões para frete

Os campos a seguir são utilizados para [calcular o fator cúbico de peso](/pt/tutorial/como-o-peso-cubado-e-calculado--tutorials_128) do SKU e são referentes ao pacote que será utilizado no transporte do SKU:

* **Peso do pacote:** valor absoluto de peso.
* **Largura do pacote: **valor absoluto de largura.
* **Altura do pacote:** valor absoluto de altura.
* **Comprimento do pacote:** valor absoluto de comprimento.

<div class = "alert alert-info">
Os campos devem ser preenchidos somente com números, sem unidades de medida, pois consideram automaticamente as unidades cadastradas no catálogo da loja.
</div>

### Peso e dimensões reais

Os campos abaixo correspondem às dimensões reais do produto, as mesmas que são exibidas na página de detalhes do produto (PDP), e devem ser preenchidos somente com números:

* **Peso real:** valor absoluto do peso do produto, desconsiderando embalagens.
* **Largura real:** valor absoluto da largura do produto, desconsiderando embalagens.
* **Altura real:** valor absoluto da altura do produto, desconsiderando embalagens.
* **Comprimento real:** valor absoluto do comprimento do produto, desconsiderando embalagens.

### Medidas de estoque

Os campos a seguir definem como o SKU será organizado e contado no [estoque](/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb):

* **Unidade de medida:** identificação da unidade de medida considerada para a contagem de itens em estoque.
* **Multiplicador de unidade:** valor numérico pelo qual o SKU será multiplicado para definir a quantidade no carrinho. Por exemplo, o multiplicador 5 significa que cada SKU representa 5 volumes no carrinho, permitindo somente compras de múltiplos de 5, como 10 ou 15 volumes. Valores fracionados podem ser separados tanto por ponto quanto por vírgula. Por exemplo, metade de um quilograma pode ser 0.5 ou 0,5.

## Estratégia Comercial

Esta seção inclui os campos relacionados às estratégias de venda da loja:

* **Condição comercial:** define quais promoções ou [condições de pagamento](/pt/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) devem ser válidas para o SKU. Caso não queira optar por uma condição comercial, selecione a opção `Padrão`. Saiba mais no artigo [Cadastrar condição comercial](/pt/tutorial/como-cadastrar-condicao-comercial--tutorials_445).
* **Data de pré-venda:** atribui ao SKU uma data de pré-venda, ou seja, uma data prevista para a chegada do item nas lojas e sua disponibilização para venda. Para realizar essa configuração, é preciso considerar tanto a data de lançamento do item quanto o [cálculo do envio](/pt/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) do item para os clientes.
* **Gerar crédito em vale-presente:** quando ativado, define que a venda do SKU para o cliente deve resultar em um crédito do tipo [vale-presente](/pt/tutorial/gift-card--tutorials_995).
* **Valor fidelidade**: crédito que o cliente recebe ao concluir uma compra de 1 unidade de determinado SKU. Por exemplo, preenchendo este campo com o valor R$1,00, o cliente que adquirir este SKU vai obter um crédito de R$1,00 na loja para compras futuras.

## Customizações

Os SKUs podem ser configurados para oferecer opções customizadas aos clientes. Por exemplo, o cliente pode escolher adicionar um nome em uma camiseta. Estas customizações podem ser de dois tipos: [anexos](/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) e [serviços](/pt/tutorial/o-que-e-um-servico).

Para vincular uma customização ao SKU, clique no ícone adicionar +, selecione a opção desejada e realize os respectivos passos:

* `Anexos`: ao clicar nesta opção, é aberto o modal **Escolha os anexos que deseja vincular**. Selecione os anexos desejados e, em seguida, clique em `Aplicar`.
* `Serviços`: ao clicar nesta opção, é aberto o modal **Novo serviço**. Preencha os campos apresentados e habilite o <i class="fas fa-toggle-on" aria-hidden="true"></i> **Ativo**. Para salvar as informações, clique em `Aplicar`.

<div class="alert alert-warning">
As opções de anexos e serviços disponíveis para o SKU precisam ter sido previamente configuradas. Para mais informações, veja os artigos <a href="https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU">Cadastrar um anexo</a> e <a href="https://help.vtex.com/pt/tutorial/criar-servico-para-um-sku--tutorials_252">Criar serviço para um SKU</a>.
</div>

## Vitrine

Esta seção permite à loja configurar para o novo SKU opções de [cross selling](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280#o-que-e-cross-selling) e/ou [up selling](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280#o-que-e-up-selling), que serão refletidas na vitrine da loja e na experiência de navegação dos clientes.

Veja a seguir quais tipos de relação outros itens podem ter com o SKU sendo cadastrado:

* **Acessórios:** itens sugeridos como opções complementares para a venda.
* **Sugestões:** itens apresentados como sugestões de compra.
* **Produtos similares:** itens ofertados como uma alternativa de compra ou simplesmente algo similar.
* **Mostrar junto:** itens sugeridos para serem adquiridos conjuntamente.

Para configurar alguma das opções acima, siga os passos abaixo:

1. Na seção **Vitrine**, clique no ícone adicionar +.
2. Clique em uma das opções apresentadas:

    * Acessórios
    * Sugestões
    * Produtos similares
    * Mostrar junto

3. No campo de texto do modal aberto, digite ID do SKU do item desejado.
4. Clique em `Aplicar`.

<div class = "alert alert-info">
Para mais informações, veja o artigo <a href="https://help.vtex.com/pt/tutorial/configurar-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280"> Configurar produto similar, sugestões, acessórios e genéricos</a>.
</div>

## Saiba mais

* [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By)
* [Adicionar ou editar produto](/pt/tutorial/adicionar-ou-editar-produto--29IkdEu6GofCFlltsZh2H8)
* [Catálogo: Visão Geral](/pt/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe)
* [Catálogo](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) (trilha)
