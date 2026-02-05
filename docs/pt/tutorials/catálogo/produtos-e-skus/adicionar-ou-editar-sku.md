---
title: 'Adicionar ou editar SKU'
id: 4ryZ6J45kwn3jDiQBxGiiN
status: PUBLISHED
createdAt: 2024-08-29T19:24:29.305Z
updatedAt: 2026-01-30T22:21:13.931Z
publishedAt: 2025-07-28T22:21:13.931Z
firstPublishedAt: 2024-08-29T19:28:11.129Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: adding-or-editing-skus
legacySlug: cadastro-de-skus-beta
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

A página [Produtos e SKUs](/pt/docs/tutorials/produtos-e-skus) permite ao lojista gerenciar produtos e variações existentes ou cadastrar novos. Este artigo orienta sobre como adicionar ou editar SKUs. Caso deseje informações relacionadas a produtos, confira o artigo [Adicionar ou editar produto](/pt/docs/tutorials/adicionar-ou-editar-produto).

Todo novo SKU criado precisa estar vinculado a um produto. Assim, uma vez que você tenha o produto criado, para cadastrar um novo SKU, basta seguir os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite **Produtos e SKUs** na barra de busca no topo da página.
2. Clique na linha referente ao produto desejado.
3. Clique na aba **SKUs**.
4. Clique no ícone adicionar + para **Abrir as opções de adicionar SKUs**.
5. Clique em `Adicionar novo SKU`.

  > ℹ️ É possível criar um novo SKU a partir de um SKU já cadastrado no produto. Para isso, na aba SKUs, clique no **ícone menu do SKU > Duplicar > Salvar**.

6. Preencha os campos do formulário de cadastro do SKU, conforme descrito nas seções:

    * [Nome e status](#nome-e-status)
    * [Especificações](#especificacoes)
    * [Mídias](#midias)
    * [Identificadores](#identificadores)
    * [Logística](#logistica)
    * [Estratégia Comercial](#estrategia-comercial)
    * [Customizações](#customizacoes)
    * [Recomendações de cross-sell e up-sell](#recomendacoes-de-cross-sell-e-up-sell)
    * [Atributos](#atributos)

    > Os campos de preenchimento obrigatório estão marcados com um asterisco (*).

7. Clique em `Salvar`.

> ❗ Uma vez criado, o SKU pode ser inativado, mas a ação de excluir um único SKU não é possível. A plataforma só permite excluir SKUs e produtos em massa por meio da [Manutenção de Base (Full Cleanup)](/pt/docs/tutorials/manutencao-de-base-full-cleanup).

Após a criação do SKU, é possível acompanhar sua disponibilidade para venda por meio do ícone colorido. Ao passar o mouse sobre o ícone, aparece um texto com o significado da cor, como na imagem abaixo. Saiba mais em [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#acompanhar-disponibilidade-de-produtos).

![adding_or_editting_sku_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/adicionar-ou-editar-sku_1.png)

Além disso, uma vez que o SKU seja cadastrado, é possível torná-lo parte de um [kit](/pt/docs/tutorials/o-que-e-um-kit). Para isso, na linha do SKU desejado, clique no ícone menu e selecione a opção `Formar kit`. Vale reforçar que a ação de transformar o SKU em kit é definitiva e não pode ser desfeita.

Veja nas seções a seguir os campos do formulário e as orientações sobre como preenchê-los.

> ⚠️ Existe um limite de 50 SKUs por produto. Para solicitar que o limite seja ampliado, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

## Nome e status

A parte inicial do formulário é sobre a nomeação e ativação do SKU:

* **Nome*:** insira o nome do SKU, ou seja, a identificação da variação do produto. O nome é limitado a 200 caracteres. Exemplo: para o produto "Geladeira", o nome do SKU pode ser "110 volts".
* **Ativo:** para ativar o SKU sendo criado, habilite o <i class="fas fa-toggle-on" aria-hidden="true"></i>. Para mantê-lo inativo, deixe o toggle desabilitado <i class="fas fa-toggle-off" aria-hidden="true"></i>. Se após ativar o SKU ele estiver indisponível para venda, consulte o artigo [Por que o produto não aparece no site?](/pt/faq/por-que-o-produto-nao-aparece-no-site).

## Especificações

Especificações são propriedades configuradas no SKU e que podem ser selecionadas pelo cliente para serem adicionadas ao carrinho. Por exemplo, a voltagem de um eletrodoméstico é uma especificação, e o cliente pode escolher entre 110 ou 220 volts.

Dependendo do produto ao qual o SKU está associado, a seção **Especificações** pode apresentar diferentes campos a serem preenchidos.

> ⚠️ Quando existe uma especificação de SKU, o seu preenchimento é obrigatório. Para mais informações, veja o artigo [Cadastrar especificações ou campos de SKU.](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-sku)

> ❗ Não é possível criar um SKU com a mesma combinação de valores já existente em outro SKU. Por exemplo, se a combinação do SKU A for cor preta e tamanho P, não seria possível criar o SKU B com cor preta e tamanho P, pois isso geraria um conflito. No entanto, se a cor do SKU A fosse preta e o do SKU B fosse azul, mesmo mantendo o tamanho P para ambos, não haveria um conflito, pois as combinações seriam diferentes. Caso deseje, você pode inativar um SKU, mas a plataforma não permite excluir um único SKU.

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
| Tamanho mínimo em pixels | 600 x 600 pixels |
| Tamanho máximo em MB | 4 MB |
| Tamanho mínimo em KB | 300 KB |
| Extensões de arquivo permitidas | <ul><li>JPG</li><li>PNG</li><li>GIF</li><li>ICO</li><li>SVG</li><li>WEBP</li></ul> |

> ℹ️ Para conhecer outras recomendações, confira o artigo [Boas práticas para o uso de imagens no Catálogo](/pt/docs/tutorials/boas-praticas-para-o-uso-de-imagens-no-catalogo).

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

> ⚠️ Para ativar um SKU, um dos requisitos é ele ter pelo menos uma imagem. Para saber mais sobre as condições para apresentar um item no storefront, consulte o artigo [Por que o produto não aparece no site?](/pt/faq/por-que-o-produto-nao-aparece-no-site).

### Vídeos

No campo **Vídeos**, ao clicar em `+ Adicionar` é aberta a janela **Adicione links das mídias dos SKUs**. Para adicionar um vídeo, digite sua URL e, em seguida, clique em `Aplicar`.

O SKU pode ter até 6 vídeos e a **única forma de adicioná-los é por meio de links das plataformas Vimeo ou Youtube**. Os formatos aceitos são:

**Vimeo**

* `https://vimeo.com/{VIDEO_ID}`

**Youtube**

* `https://youtu.be/{VIDEO_ID}`
* `https://www.youtube.com/watch?v={VIDEO_ID}`
* `https://www.youtube.com/embed/{VIDEO_ID}`
* `https://www.youtube.com/v/{VIDEO_ID}`

> ⚠️ Substitua `{VIDEO_ID}` de acordo com seu cenário.

## Identificadores

Os campos desta seção são referentes aos códigos que identificam o SKU:

* **Código de referência:** código de referência único, usado para auxiliar o lojista na gestão do catálogo.
* **EAN/UPC:** o EAN (European Article Number) e o UPC (Universal Product Code) são códigos de identificação internacionais e correspondem ao código de barra de um item. Cada SKU só pode ser associado a um deles e é possível diferenciá-los pelo número de caracteres alfanuméricos, que são 13 para o EAN e 12 para o UPC.
* **Código do fabricante:** código fornecido pelo fabricante para identificar o SKU. Caso algum SKU tenha um código específico, esse campo deve ser preenchido.

## Logística

Os campos do SKU sobre [logística](/pt/docs/tutorials/fulfillment-logistica-vtex) são os seguintes:

### Modal (opcional)

[Modal](/pt/docs/tutorials/como-funciona-o-modal) é uma configuração da transportadora que realiza entregas especializadas. Isso porque alguns produtos exigem condições especiais para serem transportados, como refrigeração ou capacidade de portar carga química.

Quando foram criadas anteriormente, as opções de modais para o SKU são apresentadas como uma lista, na qual é possível escolher uma única opção. Para saber mais, veja o artigo [Configurar modal para transportadoras](/pt/docs/tutorials/configurar-modal-para-transportadoras).

### Peso e dimensões para frete

Os campos a seguir são utilizados para [calcular o fator cúbico de peso](/pt/docs/tutorials/como-o-peso-cubado-e-calculado) do SKU e são referentes ao pacote que será utilizado no transporte do SKU:

* **Peso do pacote:** valor absoluto de peso.
* **Largura do pacote:** valor absoluto de largura.
* **Altura do pacote:** valor absoluto de altura.
* **Comprimento do pacote:** valor absoluto de comprimento.

> ℹ️ Os campos devem ser preenchidos somente com números, sem unidades de medida, pois consideram automaticamente as unidades cadastradas no catálogo da loja.

### Peso e dimensões reais

Os campos abaixo correspondem às dimensões reais do produto, as mesmas que são exibidas na página de detalhes do produto (PDP), e devem ser preenchidos somente com números:

* **Peso real:** valor absoluto do peso do produto, desconsiderando embalagens.
* **Largura real:** valor absoluto da largura do produto, desconsiderando embalagens.
* **Altura real:** valor absoluto da altura do produto, desconsiderando embalagens.
* **Comprimento real:** valor absoluto do comprimento do produto, desconsiderando embalagens.

### Medidas de estoque

Defina aspectos de estoque no contexto de Catálogo:

> ❗ Os campos **Unidade de medida** e **Multiplicador de unidade** são utilizados para questões de catálogo e não geram nenhum impacto no inventário, estoque e demais configurações de envio.

* **Unidade de medida:** identificação da unidade de medida considerada para a contagem de itens em estoque.
* **Multiplicador de unidade:** valor numérico pelo qual o SKU será multiplicado para definir a quantidade no carrinho. Por exemplo, o multiplicador 5 significa que cada SKU representa 5 volumes no carrinho, permitindo somente compras de múltiplos de 5, como 10 ou 15 volumes. Valores fracionados podem ser separados tanto por ponto quanto por vírgula. Por exemplo, metade de um quilograma pode ser 0.5 ou 0,5.

## Estratégia Comercial

Esta seção inclui os campos relacionados às estratégias de venda da loja:

* **Condição comercial:** define quais promoções ou [condições de pagamento](/pt/docs/tutorials/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento) devem ser válidas para o SKU. Caso não queira optar por uma condição comercial, selecione a opção `Padrão`. Saiba mais no artigo [Cadastrar condição comercial](/pt/docs/tutorials/como-cadastrar-condicao-comercial).
* **Data de pré-venda:** atribui ao SKU uma data de pré-venda, ou seja, uma data prevista para a chegada do item nas lojas e sua disponibilização para venda. Para realizar essa configuração, é preciso considerar tanto a data de lançamento do item quanto o [cálculo do envio](/pt/docs/tutorials/como-funciona-o-calculo-de-envio) do item para os clientes.
* **Gerar crédito em vale-presente:** quando ativado, define que a venda do SKU para o cliente deve resultar em um crédito do tipo [vale-presente](/pt/docs/tutorials/gift-card).
* **Valor fidelidade**: crédito que o cliente recebe ao concluir uma compra de 1 unidade de determinado SKU. Por exemplo, preenchendo este campo com o valor R$1,00, o cliente que adquirir este SKU vai obter um crédito de R$1,00 na loja para compras futuras.

## Customizações

Os SKUs podem ser configurados para oferecer opções customizadas aos clientes. Por exemplo, o cliente pode escolher adicionar um nome em uma camiseta. Estas customizações podem ser de dois tipos: [anexos](/pt/docs/tutorials/o-que-e-um-anexo) e [serviços](/pt/docs/tutorials/o-que-e-um-servico).

Para vincular uma customização ao SKU, clique no ícone adicionar +, selecione a opção desejada e realize os respectivos passos:

* `Anexos`: ao clicar nesta opção, é aberto o modal **Escolha os anexos que deseja vincular**. Selecione os anexos desejados e, em seguida, clique em `Aplicar`.
* `Serviços`: ao clicar nesta opção, é aberto o modal **Novo serviço**. Preencha os campos apresentados e habilite o <i class="fas fa-toggle-on" aria-hidden="true"></i> **Ativo**. Para salvar as informações, clique em `Aplicar`.

> ⚠️ As opções de anexos e serviços disponíveis para o SKU precisam ter sido previamente configuradas. Para mais informações, veja os artigos [Cadastrar um anexo](/pt/docs/tutorials/cadastrar-um-anexo) e [Criar serviço para um SKU](/pt/docs/tutorials/criando-servico-para-um-sku).

## Recomendações de cross-sell e up-sell

Esta seção permite à loja configurar para o novo SKU opções de [cross selling](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280#o-que-e-cross-selling) e/ou [up selling](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280#o-que-e-up-selling), que serão refletidas na vitrine da loja e na experiência de navegação dos clientes.

Para configurar um opção de cross-sell ou up-sell, siga os passos abaixo:

1. Na seção **Recomendações de cross-sell e up-sell**, clique no ícone adicionar `+`.
2. Selecione uma das seguintes opções:

    * **Acessórios:** itens sugeridos como opções complementares para a venda.
    * **Sugestões:** itens apresentados como sugestões de compra.
    * **Produtos similares:** itens ofertados como uma alternativa de compra ou simplesmente algo similar.
    * **Mostrar junto:** itens sugeridos para serem adquiridos conjuntamente.

3. Clique `Adicionar SKUs`
4. Selecione os SKUs desejados. Você pode usar a barra de busca se desejar.
5. Clique em `Aplicar`.

> ℹ️ Para mais informações, veja o artigo [Configurar produto similar, sugestões, acessórios e genéricos](/pt/docs/tutorials/configurando-produto-similar-sugestoes-acessorios-e-genericos).

## Atributos

Esta seção permite configurar campos customizáveis com valores específicos para cada SKU. Por exemplo, em um batom (produto), cada uma das cores (SKUs) pode ter o campo ingredientes (atributo de SKU) com valores diferentes.

Para configurar um atributo para o SKU, siga os passos abaixo:

1. Na seção **Atributos**, clique no ícone adicionar `+`
2. Preencha o campo **Nome** com a identificação do atributo.
3. (Opcional) Se quiser replicar o atributo para os outros SKUs, marque a caixa de seleção **Aplicar a todos os SKUs**.
4. Clique em `Criar`.

> ℹ️ Os atributos do SKU não possuem vínculo com a árvore de categorias.

## Saiba mais

* [Produtos e SKUs](/pt/docs/tutorials/produtos-e-skus)
* [Adicionar ou editar produto](/pt/docs/tutorials/adicionar-ou-editar-produto)
* [Catálogo - Visão geral](/pt/docs/tutorials/catalogo-visao-geral)
* [Catálogo](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) (trilha)
