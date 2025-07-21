---
title: 'Preencher campos da planilha de importação de produtos e SKUs'
id: 4nYhx63Q5yokQWaMguaIgI
status: PUBLISHED
createdAt: 2018-02-06T20:09:19.608Z
updatedAt: 2025-05-26T21:57:47.284Z
publishedAt: 2025-05-26T21:57:47.284Z
firstPublishedAt: 2018-02-06T20:23:29.492Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: filling-in-fields-in-the-import-spreadsheet
locale: pt
legacySlug: preencher-campos-da-planilha-de-importacao
subcategoryId: 2u48reCb68K48EAcm86ccM
---

Na VTEX, é possível [importar produtos e SKUs em massa por meio de uma planilha](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#planilha), seguindo os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Importação e exportação**, ou digite **Importação e exportação** na barra de busca no topo da página.
2. Clique em `Exportação/Importação`.
3. Clique na aba `Importar`. Você pode fazer o download da planilha para conferir ou alterar seus produtos.
4. Preencha os campos referentes à planilha.
5. Retorne ao Admin VTEX e faça o upload do arquivo no formato `.xls`.
6. Clique em `Importar`.

Dependendo da quantidade de produtos, seu processamento pode demorar algumas horas. Após finalizado, você receberá no email cadastrado a confirmação da importação.

Para entender o significado de cada campo da planilha, veja abaixo a descrição completa dos campos de Produto e SKU relacionados no Excel.

<div class="alert alert-danger">
  <p>Ao preencher <b>TextoLink</b>, <b>NomeDepartamento</b>, <b>NomeCategoria</b> e <b>Marca</b>, evite utilizar as seguintes palavras reservadas, pois isso pode prejudicar o desempenho da sua loja e interferir no funcionamento de páginas definidas no Admin VTEX. Veja a lista de palavras reservadas abaixo.
  <ul>
<li><code>a</code></li>
<li><code>meta</code></li>
<li><code>api</code></li>
<li><code>admin</code></li>
</ul></p>
</div>

**SkuId:** número único identificador do SKU. Caso esse campo já esteja preenchido, não é possível alterá-lo. Para adicionar um novo SKU, deixe a coluna vazia.

**NomeSku:** nome do SKU, ou seja, da variação do produto. Campo obrigatório.

**AtivarSkuSePossível:** campo que ativa o SKU, caso ele atenda aos requisitos de ter uma imagem associada e, caso seja um SKU kit, ter pelo menos um componente associado ativo. Coloque _SIM_ para a ativação automática após a checagem dos requisitos. Campo obrigatório.

**SkuAtivo:** este campo não permite nenhuma alteração, sendo apenas utilizado para consulta.

**SkuEan:** código de identificação único do SKU (código de barras), aceita até 13 caracteres numéricos. Caso o campo _CodigoReferenciaSKU_ tenha sido preenchido, o campo deixa de ser obrigatório.

**Altura:** altura do SKU calculada para frete. Campo obrigatório.

**AlturaReal:** altura real do SKU.

**Largura:** largura do SKU calculado para frete. Campo obrigatório.

**LarguraReal:** largura real do SKU.

**Comprimento:** comprimento do SKU calculado para frete. Campo obrigatório.

**ComprimentoReal:** comprimento real do SKU.

**Peso:** peso do SKU calculado para frete. Campo obrigatório.

**PesoReal:** peso real do SKU.

**UnidadeMedida:** campo utilizado apenas em casos em que é necessário converter a unidade de medida para a venda. Nos demais casos, utilizar _un_. Campo obrigatório.

**MultiplicadorUnidade:** unidade numérica que multiplica a quantidade selecionada do produto ao ser inserido no carrinho. Caso o Multiplicador seja 5, o produto será adicionado em quantidades múltiplas de 5, ou seja, 5, 10, 15, 20, em diante. Campo obrigatório.

**CodigoReferenciaSKU:** código único de referência do SKU criado para ajudar na organização. Após criá-lo, não é possível editá-lo pela planilha. Este campo deixa de ser obrigatório caso o campo _SKUEan_ tenha sido preenchido.

**ValorFidelidade:** valor do crédito que o cliente recebe ao concluir a compra de uma unidade de um determinado SKU. Esse campo deve ser preenchido com valores decimais da moeda padrão da loja. 

**DataPrevisaoChegada:** em caso de pré-venda, insira a data prevista de chegada do produto, no formato _dd/mm/aaaa_.

**CodigoFabricante:** código fornecido pelo fabricante para identificar o produto.

**IdProduto:** número único identificador do produto. Caso esse campo já esteja preenchido, não é possível alterá-lo. Para adicionar um novo produto, deixe a coluna vazia.

**NomeProduto:** nome do produto. Use palavras simples e evite outros idiomas ou escrita complexa. Esse campo é importante para SEO e deve respeitar o limite de 150 caracteres. Campo obrigatório.

**NomeComplemento:** descrição curta do produto. Essa informação é renderizada pelo controle `$product.DescriptionShort` e pode ser exibida tanto na página do produto quanto na prateleira.

**ProdutoAtivo:** determina se o produto fica ativado ou desativado na sua loja. Campo não editável pela planilha, deve-se ser deixado vazio.

**CodigoReferenciaProduto:** código único de referência do produto criado para ajudar na organização. Cada produto deve conter um código de referência diferente.

**ExibeNoSite:** esta função ativa ou desativa a visibilidade de um produto na sua loja. Coloque _SIM_ para o produto ser exibido ou _NÃO_ para ocultá-lo. Campo obrigatório.

**TextoLink:** campo utilizado para criar a URL do produto. É recomendável a utilização da estrutura sem acento e com palavras separadas por hífen. Cada produto deve conter um _TextoLink_ diferente. Campo obrigatório.

**DescricaoProduto:** descrição das principais informações relacionadas ao produto. Um resumo simples e de fácil entendimento para o cliente.

**DataLancamentoProduto:** campo utilizado para agendar a data de ativação de um produto, no formato _dd/mm/aaaa_.

**PalavrasChave:** sinônimos de termos relacionados ao nome dado a seu produto. Esse campo é importante para tornar suas buscas mais abrangentes. Separe cada termo por vírgula. Além disso, caracteres especiais são aceitos no campo.

**TituloSite:** texto da aba do navegador que corresponde ao título da página do produto. Esse campo é importante para motores de busca e SEO. Caso você não preencha este campo, o sistema vai replicar o _NomeProduto_ para completar o cadastro.

**MetaTagDescription:** breve descrição do produto. É recomendável não ultrapassar 150 caracteres para que os mecanismos de busca possam mostrar o texto completo nas páginas de resultado. Caso você não preencha este campo, o sistema vai replicar o _NomeProduto_ para completar o cadastro.

**IdFornecedor:** campo deprecado. Este campo não é utilizado pelo sistema e recomendamos mantê-lo vazio.

**ExibeSemEstoque:** campo responsável por exibir um produto na loja mesmo quando esgotado, com a seção _Avise-me_, onde o cliente pode informar seu email para ser avisado quando o produto estiver disponível. Ao marcar _SIM_, o produto esgotado vai aparecer no site com _Avise-me_. Marcando _NÃO_, ele não será exibido no site. Campo obrigatório.

**Kit:** campo que define se o SKU faz parte de um [kit](/pt/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28). Campo não editável pela planilha. Em caso de um novo SKU, deixe o campo vazio.

**IdDepartamento:** número único identificador da categoria de maior nível hierárquico do produto. Campo não editável pela planilha. Em caso de um novo produto, deixe o campo vazio.

**NomeDepartamento:** nome relacionado à categoria de maior nível hierárquico do produto.

**IdCategoria:** número único identificador da categoria de menor nível hierárquico do produto. Essa informação é encontrada no módulo _Categorias_ no Admin ou pelo endpoint [Get Category Tree](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-category#catalog-api-get-category-tree). Campo obrigatório.

**NomeCategoria:** nome relacionado à categoria de menor nível hierárquico do produto. Campo não editável uma vez preenchido.

**IdMarca:** número único identificador da marca do produto. Essa informação é encontrada na seção _Id_ do módulo _Marcas_ no Admin ou pelo endpoint [Get Brand List](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-brand#catalog-api-get-brand-list). Campo obrigatório.

**Marca:** nome dado à marca do produto. Campo não editável uma vez preenchido.

**PesoCubico:** campo deprecado. Este campo não é utilizado pelo sistema e recomendamos mantê-lo vazio. 

**CondicaoComercial:** número único identificador da [condição comercial](/pt/tutorial/como-cadastrar-condicao-comercial--tutorials_445). Ele define promoções e regras de parcelamento específicas para SKUs. 

**CodigosLojas:** número único identificador da [política comercial](/pt/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE). Essa informação é encontada na seção _Id_ do módulo _Políticas comerciais_ no Admin.

**Acessorios:** campo que exibe os produtos que devem ser vendidos como complementos de um outro produto. Para adicionar um SKU [acessório](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280), inclua o ID do SKU.

**Similares:** campo que exibe os SKUs [similares](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280) a um outro SKU, que serão apresentados ao cliente na hora da compra. Para adicionar um SKU similar, inclua o ID do SKU.

**Sugestao:** campo que exibe os SKUs que devem ser mostrados como [sugestão](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280) ao SKU em questão. Para adicionar um SKU sugestão, inclua o ID do SKU.

**MostrarJunto:** campo que exibe os SKUs dos SKUs sugeridos para compra em conjunto. Para adicionar um SKU [mostrar junto](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280), inclua o ID do SKU.

**Anexos:** campo que mostra um [anexo](/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm#) ao comprador de um [serviço](/pt/tutorial/o-que-e-um-servico--46Ha8CEEQoC6Y40i6akG0y#) ou do próprio item comprado.

