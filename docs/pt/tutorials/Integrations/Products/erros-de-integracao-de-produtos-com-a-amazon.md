---
title: 'Erros de integração de produtos com a Amazon'
id: 77ukHsrYpb8OSpkJc9poBj
status: PUBLISHED
createdAt: 2022-02-10T22:41:02.341Z
updatedAt: 2022-02-11T21:39:47.703Z
publishedAt: 2022-02-11T21:39:47.703Z
firstPublishedAt: 2022-02-11T00:54:44.665Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: products-errors-in-the-amazon-integration
locale: pt
legacySlug: erros-de-integracao-de-produtos-com-a-amazon
subcategoryId: 4HBbKdnwneGew2qGGykSM8
---

Há diversas razões pelas quais um produto entre um marketplace e sua loja VTEX pode não integrar, e para cada uma delas existe uma notificação que indica a natureza do erro. Você encontra a mensagem de erro no Admin VTEX, no módulo **MARKETPLACE > Integrações > Produtos**. Filtre pelo marketplace da Amazon e clique  no produto para visualizar a mensagem.

Após solucionar um erro, é necessário reprocessar manualmente a integração do estoque daquele SKU. Isso é feito no mesmo local onde o erro é visualizado, clicando em **Ações > Reprocessar**.

Na Amazon, há erros de integração de produtos que ocorrem com mais frequência que outros. Este artigo seleciona os erros mais comuns e indica como resolvê-los. Dividimos o artigo em diferentes categorias de erros: 

- [Erros de catálogo](#erros-de-catalogo)
- [Erros com a Marca, ASIN e EAN](#erros-com-a-marca-asin-e-ean)

## Erros de catálogo

### Mensagem de erro

`Sku is inactive`

O [SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) não está ativo na VTEX, e somente SKUs ativos são integrados. Em alguns casos, este erro é gerado por [coleções](https://help.vtex.com/pt/tutorial/como-deletar-colecao--6C620yHzwsGoS8iaCocAM2) antigas vinculadas à política comercial da Amazon que contém SKUs inativos. 

Verifique o status do SKU no seu Admin, no módulo PRODUTOS > Catálogo > Produtos e SKU e, se necessário, [ative o SKU](https://help.vtex.com/pt/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY).

### Mensagem de erro

`Requested value 'Information' was not found`

**Information** é um dos tipos de especificação que pode ser indicado na coluna Type da [planilha de mapeamento da Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD). Os tipos de especificações aceitos pela Amazon são:

- **Variation:** Preencha com especificações do SKUs. Exemplo: Cor, Tamanho.
- **Information:** Preencha com especificações do produto. Exemplo: Gênero, Departamento, Idade Mínima.

Esse erro ocorre quando a [especificação do produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-produto) informada não existe ou não foi preenchida. Para resolver esse erro, [cadastre](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) uma especificação válida e refaça o mapeamento.

### Mensagem de erro

`Category not available for integration`

O erro ocorre quando a [categoria global](https://help.vtex.com/pt/tutorial/configurando-a-categoria-global--tutorials_188) selecionada no mapeamento não existe na Amazon. Confira o [mapeamento da Categoria Global](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#categoria-global) do produto garantindo que a categoria selecionada está vinculada com a Amazon.

### Mensagem de erro

`SKU XXX, Missing Attributes color. Código SKU XXX não coincide com nenhum ASIN. A criação de um novo ASIN requer os seguintes atributos ausentes: color. Feed ID: 0. Para saber mais detalhes acesse http://sellercentral.amazon.com.br/gp/errorcode/200692370`

Esse erro ocorre quando a [especificação](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) **Cor** não foi mapeada na [planilha de mapeamento](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#4-planilha-de-mapeamento). Você deverá revisar o cadastro desta especificação no [produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) e no [SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) para solucioná-lo. Para revisar o cadastro da especificação no Produto, acesse o Admin VTEX, clique em *Produtos > Catálogo > Produtos e SKUs*, selecione o produto e clique em `Alterar`. Clique na aba `Especificações` e identifique o campo **Cor** com a informação já preenchida.

Para revisar o cadastro da especificação no SKU, acesse o Admin VTEX, clique em *Produtos > Catálogo > Produtos e SKUs*, selecione o produto, clique na seta <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/6p43gQ8LMQitieDuUlBoiC/c7d43ef209986769bdaf1e2795408a96/alterar_seta.JPG" /> e selecione a opção SKU. Na aba `Especificações`, identifique o campo que utiliza Cor como atributo. Depois, preencha a planilha de mapeamento com as especificações de cor que precisam ser mapeadas.

### Mensagens de erro

`Specification Cor mapped not found neither in product or sku specifications`

`Specification Tamanho mapped not found neither in product or sku specification`

Nos erros acima, o atributo citado não está cadastrado no produto do catálogo VTEX. Você deverá [cadastrar o atributo](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) **Cor** ou **Tamanho** e refazer o [mapeamento](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) do produto enviado, seguindo o exemplo abaixo.

Exemplo de preenchimento para o atributo **Cor**:

| VTEX Category Id | VariationTheme | Type | VTEXSpecification | AmazonSpecification | VTEXValue | AmazonValue |
| ---------- | ---------- | ---------- | ----------| ----------| ---------- | ---------- |
| 159 | Color | Variation | Cor | Color | Azul | Blue |

Exemplo de preenchimento para o atributo **Tamanho**:

| VTEX Category Id | VariationTheme | Type | VTEXSpecification | AmazonSpecification | VTEXValue | AmazonValue |
| ---------- | ---------- | ---------- | ----------| ----------| ---------- | ---------- |
| 159 | Size | Variation | Tamanho | Size | 39 | 39 |

### Mensagens de erro

`Specification Gênero mapped not found neither in product or sku specifications`

`Specification Departament mapped not found neither in product or sku specifications`

Nos erros acima, o atributo citado não está cadastrado no SKU do catálogo VTEX. Você deverá [cadastrar o atributo](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) e refazer o [mapeamento](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) do produto enviado, seguindo o exemplo abaixo.

Exemplo de preenchimento para o atributo **Gênero**:

| VTEX Category Id | VariationTheme | Type | VTEXSpecification | AmazonSpecification | VTEXValue | AmazonValue |
| ---------- | ---------- | ---------- | ----------| ----------| ---------- | ---------- |
| 3 |  | Information | Gênero | Gender | Menina | Feminino |

Exemplo de preenchimento para o atributo **Departamento**:

| VTEX Category Id | VariationTheme | Type | VTEXSpecification | AmazonSpecification | VTEXValue | AmazonValue |
| ---------- | ---------- | ---------- | ----------| ----------| ---------- | ---------- |
| 3 |  | Information | Departamento | Department | Unissex | Unissex |

### Mensagem de erro

`[Specification X] specification value not mapped in file to any amazon possible values`

O erro ocorre quando a especificação X não é aceita pela Amazon. Você deverá [cadastrar uma especificação](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) que seja aceita pela Amazon. Para visualizar os valores aceitos pela Amazon, acesse a [Planilha de atributos obrigatórios da Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) e busque pela aba `VALORES VÁLIDOS`.

### Mensagem de erro

`XML Parsing Error at Line 49, Column 72: cvc-complex-type.2.2: Element &apos;MinimumManufacturerAgeRecommended&apos; must have no element [children], and the value must be valid`

Esse erro ocorre quando a [planilha de mapeamento](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#4-planilha-de-mapeamento) dos produtos não tem a especificação da idade recomendada pelo fabricante mapeada. Você deverá revisar o cadastro desta especificação no [produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) para solucionar o erro. Para revisar o cadastro da especificação, acesse o Admin VTEX, clique em *Produtos > Catálogo > Produtos e SKUs*, selecione o produto e clique em `Alterar`. Clique na aba **Especificações** e identifique o campo `Idade` com a informação já preenchida. Depois, preencha a [planilha de mapeamento](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) com as especificações de idade que precisam ser mapeadas.

### Mensagem de erro

`XML Parsing Error at Line 79, Column 25: cvc-enumeration-valid: Value &apos;SizeName&apos; is not facet-valid with respect to enumeration &apos;[Furniture, FurnitureLeg]&apos;. It must be a value from the enumeration`

Esse erro ocorre quando o valor `SizeName` preenchido na planilha de mapeamento não foi digitado corretamente. Para solucioná-lo, certifique-se de que está enviando as informações corretamente, conforme os valores exigidos pela Amazon na [planilha de atributos obrigatórios](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon).

### Mensagem de erro

`VariationTheme selected it's invalid`

O erro ocorre quando a coluna **VariationTheme** da planilha de mapeamento da Amazon é preenchida com um valor que não é aceito pela Amazon. [Verifique os valores aceitos](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#5-preenchimento-da-planilha-de-mapeamento) e preencha um valor válido na planilha de mapeamento.

### Mensagens de erro

`Entry Department dont have a espec mapped correctly in the file`

`Entry Material dont have a espec mapped correctly in the file`

Em ambos os erros, a [Categoria Global VTEX](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) do produto selecionado pelo seller exige o cadastro obrigatório dos atributos **Department** ou **Material** no produto, e o  preenchimento da planilha de mapeamento. Cadastre o atributo no produto e preencha a planilha conforme o exemplo abaixo:

| VTEX Category Id | VariationTheme | Type | VTEXSpecification | AmazonSpecification | VTEXValue | AmazonValue |
| ---------- | ---------- | ---------- | ----------| ----------| ---------- | ---------- |
| 3 |  | Information | Gênero | Gender | Feminino | Female |

## Erros com a Marca, ASIN e EAN

### Mensagem de erro

`The field with value "239" does not respect the minimum value of 8 characters specified for a field of type #AnonType_ValueStandardProductID`

Esse erro ocorre quando o EAN do produto não é válido ou está mal preenchido. Insira o código de EAN correto ou solicite a [isenção de EAN](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#isencao-de-ean) à Amazon.

### Mensagens de erro

`Você não pode criar ASINs  para esta marca`

`You may not create new ASINs for this brand. You are free to add offers to any existing ASIN for this brand (additional listing limitations may apply). Please review our ASIN Creation Policy`

`We have temporarily removed your ability to submit listings (creating new offers or new ASINs) because an unusually high number of listings have been created from your account. Please refer to the ASIN Creation Policy page (https://sellercentral.amazon.com.br/gp/help/201844590) for more information on how to avoid receiving this error message. If you believe your listing creation privileges have been removed in error, please contact Seller Support by using the following link: https://sellercentral.amazon.com.br/cu/contact-us.</ResultDescription>`

Em ambos os erros, a Amazon envia essa mensagem para controlar internamente o catálogo de produtos. É necessário pedir a liberação para criação de um novo [ASIN](https://associados.amazon.com.br/resource-center/asin-amazon?ac-ms-src=rc-home-card) (código de identificação dos produtos criados pela Amazon).

Entre em contato com o [Suporte ao Vendedor da Amazon](https://sellercentral.amazon.com.br/hz/contact-us), mencione o erro `5461` e envie as informações solicitadas na [Política de criação de código ASIN da Amazon](https://sellercentral.amazon.com.br/gp/help/external/G201844590?language=pt_BR).

### Mensagem de erro

`Você não está autorizado a publicar os produtos sob esta marca. Para efetuar vendas desta marca tente adicionar um dos seus códigos SKUS da marca pela página “Adicionar um produto” e siga as instruções de inscrição`

A Amazon deve aprovar a sua marca antes que você possa usá-la para publicar produtos. As marcas devem ser registradas por meio do [cadastro de marcas da Amazon](https://brandservices.amazon.com.br/eligibilityhttps://brandservices.amazon.com.br/eligibility).

Se a sua marca não for aprovada, você poderá obter uma exceção entrando em contato com o Suporte ao Vendedor da Amazon e mencionando o código de [erro 5565](https://sellercentral.amazon.com/gp/help/2N3GKE5SGSHWYRZ).

### Mensagem de erro

`We have temporarily removed your ability to submit listings (creating new offers or new ASINs) because an unusually high number of listings have been created from your account. Please refer to the ASIN Creation Policy page`

A Amazon estipula um limite de envio de produtos por conta. Nesse caso, é necessário que o seller entre em contato com o [Suporte ao Vendedor da Amazon](https://sellercentral.amazon.com/cu/contact-us?_encoding=UTF8&ref_=ag_contactus_nmhb_home) ou acione o seu gerente de contas e solicite o aumento do limite de envio.

## Mensagem de erro

`SKU XXX, Missing Attributes standard_product_id. SKU XXX doesn&apos;t match any ASINs. Make sure that all standard product ids (such as UPC, ISBN, EAN, or JAN codes) are correct. To create a new ASIN, include the following attributes: standard_product_id. Feed ID: 0. For more troubleshooting help, see http://sellercentral.amazon.com.br/gp/errorcode/200692370`

Esses erros de ASIN ocorrem quando o código GTIN ou EAN não foi enviado pela plataforma VTEX. Para resolver esse problema, acesse o Admin VTEX, clique em *Produtos > Catálogo > Produtos e SKUs*, selecione o SKU com erro, clique em **Alterar** e insira um código de GTIN/EAN válido no campo `EAN`.

Caso não tenha informações do GTIN/EAN, solicite a [isenção de EAN](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#isencao-de-ean) à Amazon. Se a isenção de EAN for aprovada, você deverá solicitar ao suporte VTEX que o campo `EAN` seja desbloqueado como obrigatório.

## Mensagem de erro

`SEM GTIN is not a valid EAN`

Esse erro ocorre quando o EAN do produto não é válido ou está em branco. Insira o código de EAN ou solicite a [isenção de EAN](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#isencao-de-ean) à Amazon.

## Mensagem de erro

`Merchant is not authorized to sell products under this restricted product group`

A Amazon deve aprovar a sua marca antes que você possa usá-la para publicar produtos. As marcas devem ser registradas por meio do [Cadastro de marcas da Amazon](https://brandservices.amazon.com.br/brandregistry/eligibility), mas se a sua marca não estiver qualificada para o cadastro, você poderá obter uma exceção. Entre em contato com o [Suporte ao Vendedor da Amazon](https://sellercentral.amazon.com/cu/contact-us?_encoding=UTF8&ref_=ag_contactus_nmhb_home) e mencione o código de erro [5665](https://sellercentral.amazon.com/gp/help/2N3GKE5SGSHWYRZ).

## Mensagem de erro

`Amazon must approve your brand before you can use it to list products. Brands should be registered through Brand Registry, but if your brand is not eligible for Brand Registry, you can obtain an exception by contacting Seller Support and mentioning error code 5665. When contacting Seller Support, provide the following information: - The brand name used when creating the listing. - Images of the product and packaging, showing branding on either. The images can show the product and packaging held in hand, or placed on a table. The branding must be permanently affixed. - If using inventory file templates, please also provide the Batch ID of the inventory file process report. For more information, please review our Brand Name Policy`

Esse erro ocorre quando você está vendendo produtos de uma marca ou fabricação própria. A Amazon deve aprová-la antes que você possa usá-la para publicar produtos. Para registrar uma marca própria, siga as instruções do [Brand Services da Amazon](https://brandservices.amazon.com.br/brandregistry/eligibility).

Caso você queira vender um produto que está associado a outro proprietário (criação de um novo ASIN), atente-se ao processo de [Liberação do Produto para a Marca](https://sellercentral.amazon.com/gp/help/help.html/?itemID=G201844590&ref_=xx_G201844590_a_r0_cont_sgsearch).

Também é possível acionar o gerente de contas da Amazon, caso a sua loja já tenha um.

## Mensagem de erro

`Os dados do SKU fornecidos entram em conflito com o catálogo da Amazon. Os standard_product_id valores fornecidos correspondem ao ASINB08CVV2VDN, mas algumas informações contradizem as do catálogo da Amazon. A seguir estão os valores dos atributos que estão em conflito: color (Vendedor: “AZUL ESCURO” / Amazon: “Jeans”). Se seu produto for esse ASIN, modifique seus dados para refletir os valores do catálogo da Amazon, ou então, verifique se seus valores para standard_product_id estão corretos`

Esse erro ocorre porque o EAN que o usuário está tentando criar já existe na Amazon, ou seja, já existem características definidas para esse produto que não podem ser alteradas via API. Confira o artigo da Amazon ["Como resolver erros de integração entre VTEX e Amazon"](https://sellercentral.amazon.com/gp/help/help.html/?itemID=G200335450&ref_=xx_G200335450_a_r0_cont_sgsearch&referral=A3IFRCMCK2FDA3_A2S7INXDFNAL4B&referral=A21IPQZ0ZIHRDV_A2S7INXDFNAL4B), que explica como você pode sugerir mudanças no EAN. 

Entre em contato com o [Suporte ao Vendedor da Amazon](https://sellercentral.amazon.com/cu/contact-us?_encoding=UTF8&ref_=ag_contactus_nmhb_home) ou com o gerente da sua conta.

### Mensagem de erro

`The SKU data provided is different from what's already in the Amazon catalog. The standard_product_id data provided matches ASIN (Código do ASIN), but the following data is different from what's already in the Amazon catalog: part_number (Merchant: '255' / Amazon: ''), item_name (Merchant: 'Novo Beauty Steam HTM - Vapor de Ozônio 220v' / Amazon: 'Beauty Shape Duo aparelho de criolipólise'). If this is the right ASIN for your product, update your data to match what's in the Amazon catalog. If it's not the right ASIN, make sure that your data for standard_product_id is correct`

Esse erro ocorre quando o EAN já existe no catálogo da Amazon, porém com informações diferentes do SKU que foi enviado. Você tem duas opções para resolver esse problema: 

- Ajuste o valor do atributo na VTEX ou na Amazon para que os valores sejam correspondentes em ambas as plataformas.
- Entre em contato com o time de [Suporte ao Vendedor da Amazon](https://sellercentral.amazon.com/gp/help/help.html/?itemID=G200335450&ref_=xx_G200335450_a_r0_cont_sgsearch&referral=A3IFRCMCK2FDA3_A2S7INXDFNAL4B&referral=A21IPQZ0ZIHRDV_A2S7INXDFNAL4B) para que o ajuste seja realizado. 
