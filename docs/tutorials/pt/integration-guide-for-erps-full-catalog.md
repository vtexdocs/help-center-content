---
title: Guia de integração de ERPs - Catálogo Completo
id: 52MjNKpqAouKC8u4Ca0YWS
status: DRAFT
createdAt: 2017-09-11T22:53:06.410Z
updatedAt: 2020-06-04T01:08:26.580Z
publishedAt: 
firstPublishedAt: 2017-09-11T22:54:17.078Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: guia-de-integracao-de-erps-catalogo-completo
legacySlug: guia-de-integracao-de-erps-catalogo-completo
subcategory: 5fKgQZhrCw88ACy6Su6GUc
---

<div class="alert alert-warning">Este artigo é parte do <a href="https://help.vtex.com/tutorial/guia-de-integracao-de-erps--3VuOwNLmb624ImooEIIkmO">Guia de integração de ERPs</a>.</div>

Este documento tem por objetivo auxiliar na integração de catálogo (departamento, categoria, marca, imagens, campos, valores de campos, ativação de SKUs) do ERP para a uma loja hospedada na VTEX. Nesse tipo de integração a maioria da administração da loja está ERP.

![](https://images.contentful.com/alneenqid6w5/fEe1mx0WnmMkMSMoUYwsq/817979633616370581b3421f2e0e8187/erp-catalogo-completo.png)

Nesse cenário de fluxo completo, a maioria dos dados de produtos e SKUs são manipulados pelo ERP. A manipulação de campos de especificação nesse modelo é possível ser feita por API REST, mas a melhor prática seria pelo admin da VTEX.

Antes de prosseguir, [conheça a arquitetura do catálogo](http://help.vtex.com/pt/tutorial/guia-de-integracao-de-erps-arquitetura-do-catalogo).

## Departamento

Abaixo exemplos de chamada e resposta de inserção de Departamentos e as Categorias através do método "CategoryInsertUpdate":

_request:_

````xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:CategoryInsertUpdate>
			<tem:category>
				<!--descrição do departamento-->
				<vtex:Description>Departamento de Artesanato</vtex:Description>
				<!--departamento está ativo?-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--palavras chaves do departamento-->
				<vtex:Keywords>Departamento Keywords</vtex:Keywords>
				<!--nome do departamento-->
				<vtex:Name>Departamento Artesanato</vtex:Name>
				<!--titulo do departamento-->
				<vtex:Title>Departamento Artesanato</vtex:Title>
			</tem:category>
		</tem:CategoryInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
````

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
	<s:Body>
		<CategoryInsertUpdateResponse xmlns="http://tempuri.org/">
			<CategoryInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
				<a:AdWordsRemarketingCode i:nil="true"/>
				<a:Description>Departamento de Artesanato</a:Description>
				<a:FatherCategoryId i:nil="true"/>
				<!--identificador do departamento inserido-->
				<a:Id>1000018</a:Id>
				<a:IsActive>true</a:IsActive>
				<a:Keywords>Departamento Keywords</a:Keywords>
				<a:LomadeeCampaignCode i:nil="true"/>
				<a:Name>Departamento Artesanato</a:Name>
				<a:Title>Departamento Artesanato</a:Title>
			</CategoryInsertUpdateResult>
		</CategoryInsertUpdateResponse>
	</s:Body>
</s:Envelope>
```

## Categoria

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:CategoryInsertUpdate>
			<tem:category>
				<!--descrição da categoria-->
				<vtex:Description>Artesanato de Barro</vtex:Description>
				<!--identificador do departamento pai, inserido acima-->
				<vtex:FatherCategoryId>1000018</vtex:FatherCategoryId>
				<!--a categoria está ativa?-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--palavras chave da categoria-->
				<vtex:Keywords>Barro</vtex:Keywords>
				<!--nome da categoria-->
				<vtex:Name>Artesanato de Barro</vtex:Name>
				<!--título da categoria-->
				<vtex:Title>Artesanato de Barro</vtex:Title>
			</tem:category>
		</tem:CategoryInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
```

_response_:

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
	<s:Body>
		<CategoryInsertUpdateResponse xmlns="http://tempuri.org/">
			<CategoryInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
				<a:AdWordsRemarketingCode i:nil="true"/>
				<a:Description>Artesanato de Barro</a:Description>
				<a:FatherCategoryId>1000018</a:FatherCategoryId>
				<!--identificador da categoria inserida-->
				<a:Id>1000019</a:Id>
				<a:IsActive>true</a:IsActive>
				<a:Keywords>Barro</a:Keywords>
				<a:LomadeeCampaignCode i:nil="true"/>
				<a:Name>Artesanato de Barro</a:Name>
				<a:Title>Artesanato de Barro</a:Title>
			</CategoryInsertUpdateResult>
		</CategoryInsertUpdateResponse>
	</s:Body>
</s:Envelope>
```

## Sub Categoria

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:CategoryInsertUpdate>
			<tem:category>
				<!--descrição da sub categoria-->
				<vtex:Description>Barro Vermelho</vtex:Description>
				<!--identificador da categoria inserida acima-->
				<vtex:FatherCategoryId>1000019</vtex:FatherCategoryId>
				<!--a sub categoria está ativa?-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--palavras chave da sub categoria-->
				<vtex:Keywords>Barro Vermelho</vtex:Keywords>
				<!--nome da sub categoria-->
				<vtex:Name>Artesanato de Barro Vermelho</vtex:Name>
				<!--titulo da sub categoria-->
				<vtex:Title>Artesanato de Barro Vermelho</vtex:Title>
			</tem:category>
		</tem:CategoryInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
```

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
	<s:Body>
		<CategoryInsertUpdateResponse xmlns="http://tempuri.org/">
			<CategoryInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
				<a:AdWordsRemarketingCode i:nil="true"/>
				<a:Description>Barro Vermelho</a:Description>
				<a:FatherCategoryId>1000019</a:FatherCategoryId>
				<!--identificador da sub categoria inserida-->
				<a:Id>1000020</a:Id>
				<a:IsActive>true</a:IsActive>
				<a:Keywords>Barro Vermelho</a:Keywords>
				<a:LomadeeCampaignCode i:nil="true"/>
				<a:Name>Artesanato de Barro Vermelho</a:Name>
				<a:Title>Artesanato de Barro Vermelho</a:Title>
			</CategoryInsertUpdateResult>
		</CategoryInsertUpdateResponse>
	</s:Body>
</s:Envelope>
```

## Marca

Abaixo exemplo de chamada e resposta de inseção de Marca através do metodo "BrandInsertUpdate":

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:BrandInsertUpdate>
			<tem:brand>
				<!--descrição da marca-->
				<vtex:Description>Marca DuBom</vtex:Description>
				<!--a marca está ativa?-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--palavras chave da marca-->
				<vtex:Keywords>DuBom Keywords</vtex:Keywords>
				<!--nome da marca-->
				<vtex:Name>DuBom</vtex:Name>
				<!--titulo da marca-->
				<vtex:Title>DuBom</vtex:Title>
			</tem:brand>
		</tem:BrandInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
```

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <BrandInsertUpdateResponse xmlns="http://tempuri.org/">
         <BrandInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
			<a:AdWordsRemarketingCode i:nil="true"/>
			<a:Description>Marca DuBom</a:Description>
			<!--identificador da marca inserida-->
			<a:Id>2000011</a:Id>
			<a:IsActive>true</a:IsActive>
			<a:Keywords>DuBom Keywords</a:Keywords>
			<a:LomadeeCampaignCode i:nil="true"/>
			<a:Name>DuBom</a:Name>
			<a:Title>DuBom</a:Title>
         </BrandInsertUpdateResult>
      </BrandInsertUpdateResponse>
   </s:Body>
</s:Envelope
```


## Produtos e SKUs

Veja em nossa [guia de integração expressa para o catálogo](http://help.vtex.com/pt/tutorial/guia-de-integracao-de-erps-catalogo-expresso#integracao-de-produtos-e-skus).

## Campos de Especificação de Produto ou SKU

Os campos de especificação genéricos dos produtos devem ser adicionados a categoria direta do produto e indicados com `IsStockKeepingUnit = false`, e os campos de especificação específicos de SKUs devem ser inseridos na categoria direta da SKU e indicados com `IsStockKeepingUnit = true`.

Não temos métodos no webservice para criar campos, devendo ser criados pelo admin.

Ex. Produto camisa tem especificação obrigatória **cor** e **tamanho**, então insere o campo na categoria de camisas dizendo que todo produto que estiver em baixo dessa categoria, tem por obrigatoriedade preencher os valores de **cor** e **tamanho**


### Valores dos Campos

Adicionado os campos de produto ou SKU, é necessário preenchê-los com valores. Abaixo exemplo de chamada e resposta de inserção de valores de campo através do método "ProductEspecificationInsert":

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:arr="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:ProductEspecificationInsert>
         <!--number, identificador do produto que esta rebendo o valor de campo-->
         <tem:idProduct>31018369</tem:idProduct>
         <!--string, identificador do campo, o nome do campo-->
         <tem:fieldName>Material</tem:fieldName>
         <!--array, lista de valores do campo-->
         <tem:fieldValues>
            <!--string, valor do campo-->
            <arr:string>ceramica</arr:string>
         </tem:fieldValues>
      </tem:ProductEspecificationInsert>
   </soapenv:Body>
</soapenv:Envelope>
```

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <ProductEspecificationInsertResponse xmlns="http://tempuri.org/"/>
   </s:Body>
</s:Envelope>
```

Caso queira inserir um valor de campo que foi definido como campo de SKU somente, usar o método "StockKeepingUnitEspecificationInsert":

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:arr="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:StockKeepingUnitEspecificationInsert>
         <!--number, identificador do SKU dono do campo-->
         <tem:idSku></tem:idSku>
         <!--string, identificador do campo, nome do campo-->
         <tem:fieldName></tem:fieldName>
         <!--array, lista de valores dos campos-->
         <tem:fieldValues>
            <!--string, valor de campo-->
            <arr:string></arr:string>
         </tem:fieldValues>
      </tem:StockKeepingUnitEspecificationInsert>
   </soapenv:Body>
</soapenv:Envelope>
```

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <StockKeepingUnitEspecificationInsertResponse xmlns="http://tempuri.org/"/>
   </s:Body>
</s:Envelope>
```

## Imagens dos SKUs

Exemplo de request para inserir Imagens para uma SKU no webservice.

_request:_
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
<soapenv:Header/>
	<soapenv:Body>
		<tem:ImageServiceInsertUpdate>
			<!--url da imagem-->
			<tem:urlImage>https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6Lu0obmddsQX3JELe04hUs_hSelsmU8_W1yn5ztgdAk5SJC7D</tem:urlImage>
			<!--nome da imagem-->
			<tem:imageName>Barro Vermelho Escuro</tem:imageName>
			<!--identificador do SKu que irá receber a imagem-->
			<tem:stockKeepingUnitId>31018371</tem:stockKeepingUnitId>
		</tem:ImageServiceInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
```

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
	<s:Body>
	  <ImageServiceInsertUpdateResponse xmlns="http://tempuri.org/"/>
	</s:Body>
</s:Envelope>
```

_request 2:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
<soapenv:Header/>
	<soapenv:Body>
		<tem:ImageServiceInsertUpdate>
			<tem:urlImage>http://1.bp.blogspot.com/_ZANjG3oA2BI/TCJfvX-7daI/AAAAAAAADZ0/yO5MwjMtjdI/s400/vaso_5cm.jpg</tem:urlImage>
			<tem:imageName>Barro Vermelho Claro</tem:imageName>
			<tem:stockKeepingUnitId>31018372</tem:stockKeepingUnitId>
			<tem:fileId>31018372</tem:fileId>
		</tem:ImageServiceInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
```

_response 2:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <ImageServiceInsertUpdateResponse xmlns="http://tempuri.org/"/>
   </s:Body>
</s:Envelope>
```

## Ativa SKUs

Após as SKUs estarem inseridas debaixo de seus produtos agrupadores ou não, e com todos os pre requisitos de ativação preenchidos (imagem, estoque, preço, especificações, se tiver) basta ativá-las. Exemplos de chamadas de ativação de SKU:

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
<soapenv:Header/>
	<soapenv:Body>
		<tem:StockKeepingUnitActive>
			<!--identificador da SKU que deseja tentar ativar-->
			<tem:idStockKeepingUnit>31018371</tem:idStockKeepingUnit>
		</tem:StockKeepingUnitActive>
	</soapenv:Body>
</soapenv:Envelope>
```

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <StockKeepingUnitActiveResponse xmlns="http://tempuri.org/"/>
   </s:Body>
</s:Envelope>
```

_request 2:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
<soapenv:Header/>
	<soapenv:Body>
		<tem:StockKeepingUnitActive>
			<tem:idStockKeepingUnit>31018372</tem:idStockKeepingUnit>
		</tem:StockKeepingUnitActive>
	</soapenv:Body>
</soapenv:Envelope>
```

_response 2:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <StockKeepingUnitActiveResponse xmlns="http://tempuri.org/"/>
   </s:Body>
</s:Envelope>
```

### Alteração de SKUs

Após uma SKU ser inserida com sucesso, caso haja alguma necessidade de alguma alteração, deve se invocar o mesmo método de inserçao passando o id de SKU que se deseja alterar. Alterações de preço **NÃO** devem ser feitas pelo metodo de insert/update de SKU.

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:StockKeepingUnitInsertUpdate>
			<tem:stockKeepingUnitVO>
				<!--number, cubagem = peso cubico -->
				<vtex:CubicWeight>100</vtex:CubicWeight>
				<!--number, altura com embalagem e metros-->
				<vtex:Height>1.800</vtex:Height>
				<!--bool, se não atender requisitos de ativação(imagem, preço, estoque, espec., outros reqs obrig.), não será ativado-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--bool, disponibilidade -->
				<vtex:IsAvaiable>true</vtex:IsAvaiable>
				<!--bool, é um KIT? -->
				<vtex:IsKit>false</vtex:IsKit>
				<!--number, comprimento com embalagem em metros -->
				<vtex:Length>1.52</vtex:Length>
				<!--decimal, ** ler obs -->
				<vtex:ListPrice>150.0</vtex:ListPrice>
				<!--prefixo do estoque (id estoque = 1_1, mandar 1) -->
				<vtex:ModalId>1</vtex:ModalId>
				<!--string, opicional, tipo de carga, necessita configuração de transportadora especial quando preenchido -->
				<vtex:ModalType>Vidro</vtex:ModalType>
				<!--string, nome da SKU -->
				<vtex:Name>Vaso Artesanal de Barro Laranja Escuro </vtex:Name>
				<!--decimal,  preço, "POR", opcional **ler obs-->
				<vtex:Price>110.0</vtex:Price>
				<!--number, identificador do produto pai da SKU -->
				<vtex:ProductId>31018369</vtex:ProductId>
				<!--number, peso real em kilos -->
				<vtex:RealHeight>1.740</vtex:RealHeight>
				<!--number, altural real em metros -->
				<vtex:RealLength>1.60</vtex:RealLength>
				<!--number, peso real em kilos -->
				<vtex:RealWeightKg>2.750</vtex:RealWeightKg>
				<!--number, comprimento real em metros -->
				<vtex:RealWidth>1.7</vtex:RealWidth>
				<!--number, identificador da SKU no ERP -->
				<vtex:RefId>00123456</vtex:RefId>
				<!--number, opcional, numero de pontos dessa SKU -->
				<vtex:RewardValue>0</vtex:RewardValue>
				<!--lista de string, EANs do produto -->
				<vtex:StockKeepingUnitEans>
				<vtex:StockKeepingUnitEanDTO>
				<vtex:Ean>0123456789123</vtex:Ean>
				</vtex:StockKeepingUnitEanDTO>
				</vtex:StockKeepingUnitEans>
				<!--number, unidade de multipliçao para venda -->
				<vtex:UnitMultiplier>1</vtex:UnitMultiplier>
				<!--number, peso em kilos-->
				<vtex:WeightKg>1.5</vtex:WeightKg>
				<!--number, largura com embalagem em metros -->
				<vtex:Width>2.780</vtex:Width>
			</tem:stockKeepingUnitVO>
		</tem:StockKeepingUnitInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
```

*Os campos Id ou RefId definem se será um insert ou um update, caso o id de SKU enviado ou o RefId enviado já existirem, será um update.

**Caso enviado um preço nulo no update, o preço não será afetado.

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
	<s:Body>
	<StockKeepingUnitInsertUpdateResponse xmlns="http://tempuri.org/">
		<StockKeepingUnitInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
		<a:CommercialConditionId i:nil="true"/>
		<a:CostPrice>1</a:CostPrice>
		<a:CubicWeight>100</a:CubicWeight>
		<a:DateUpdated>2014-10-29T19:03:17.718427</a:DateUpdated>
		<a:EstimatedDateArrival i:nil="true"/>
		<a:Height>1.800</a:Height>
		<a:Id>31018371</a:Id>
		<a:InternalNote i:nil="true"/>
		<a:IsActive>false</a:IsActive>
		<a:IsAvaiable>false</a:IsAvaiable>
		<a:IsKit>false</a:IsKit>
		<a:Length>1.52</a:Length>
		<a:ListPrice>150.0</a:ListPrice>
		<a:ManufacturerCode i:nil="true"/>
		<a:MeasurementUnit>un</a:MeasurementUnit>
		<a:ModalId>1</a:ModalId>
		<a:ModalType>Vidro</a:ModalType>
		<a:Name>Vaso Artesanal de Barro Laranja Escuro</a:Name>
		<a:Price>110.0</a:Price>
		<a:ProductId>31018369</a:ProductId>
		<a:ProductName>Vaso Artesanal de Barro Vermelho</a:ProductName>
		<a:RealHeight>1.740</a:RealHeight>
		<a:RealLength>1.60</a:RealLength>
		<a:RealWeightKg>2.750</a:RealWeightKg>
		<a:RealWidth>17</a:RealWidth>
		<a:RefId>00123456</a:RefId>
		<a:RewardValue>0</a:RewardValue>
		<a:StockKeepingUnitEans>
		<a:StockKeepingUnitEanDTO>
		<a:Ean>0123456789123</a:Ean>
		</a:StockKeepingUnitEanDTO>
		</a:StockKeepingUnitEans>
		<a:UnitMultiplier>1</a:UnitMultiplier>
		<a:WeightKg>2.780</a:WeightKg>
		<a:Width>1.550</a:Width>
		</StockKeepingUnitInsertUpdateResult>
	</StockKeepingUnitInsertUpdateResponse>
	</s:Body>
</s:Envelope>
```

## Serviço

Existem serviços (embalagem para presente, garantia extendida, etc.) que podem ser relacionados as SKUs. Para isso, primeiramente, o serviço tem que ser criado. Após ser criado, deve-se inserir um preço neste serviço e então relacionar o serviço com as SKUs. Por exemplo:

## Criando o serviço

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:ServiceInsertUpdate>
         <tem:service>
		    <!--number, id do serviço -->
            <vtex:Id>134</vtex:Id>
		    <!--bool, está ativo ? -->
            <vtex:IsActive>true</vtex:IsActive>
		    <!--bool, é um arquivo ? -->
            <vtex:IsFile>false</vtex:IsFile>
		    <!--bool, é GiftCard ? -->
            <vtex:IsGiftCard>false</vtex:IsGiftCard>
		    <!--bool, é obrigatório ? -->
            <vtex:IsRequired>false</vtex:IsRequired>
		    <!--bool, está visível no carrinho ? -->
            <vtex:IsVisibleOnCart>true</vtex:IsVisibleOnCart>
		    <!--bool, exibe no Produto ? -->
            <vtex:IsVisibleOnProduct>true</vtex:IsVisibleOnProduct>
		    <!--bool, exibe no Serviço ? -->
            <vtex:IsVisibleOnService>true</vtex:IsVisibleOnService>
		    <!--bool, nome do serviço -->
            <vtex:Name>Embalagem para presente</vtex:Name>
         </tem:service>
      </tem:ServiceInsertUpdate>
   </soapenv:Body>
</soapenv:Envelope>
```
*É altamente recomendado que o integrador informe um id para o serviço. Caso seja passado nulo, iremos fazer o auto-incremento automaticamente.

**Este método também pode ser usado para alterar informações do serviço.

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <ServiceInsertUpdateResponse xmlns="http://tempuri.org/">
         <ServiceInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Id>134</a:Id>
            <a:IsActive>true</a:IsActive>
            <a:IsFile>false</a:IsFile>
            <a:IsGiftCard>false</a:IsGiftCard>
            <a:IsRequired>false</a:IsRequired>
            <a:IsVisibleOnCart>true</a:IsVisibleOnCart>
            <a:IsVisibleOnProduct>true</a:IsVisibleOnProduct>
            <a:IsVisibleOnService>true</a:IsVisibleOnService>
            <a:Name>Embalagem para presente</a:Name>
         </ServiceInsertUpdateResult>
         <serviceId>134</serviceId>
      </ServiceInsertUpdateResponse>
   </s:Body>
</s:Envelope>
```

### Inserindo preço no serviço

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:ServicePriceInsertUpdate>
         <tem:servicePrice>
			<!-- number, id de preço do serviço -->
            <vtex:Id>1</vtex:Id>
			<!-- decimal, preço "POR" do serviço  -->
            <vtex:ListPrice>5.0</vtex:ListPrice>
			<!-- string, nome do serviço -->
            <vtex:Name>Embalagem para presente</vtex:Name>
			<!-- decimal, preço "DE" do serviço -->
            <vtex:Price>10.0</vtex:Price>
			<!-- number, id do serviço -->
            <vtex:ServiceId>134</vtex:ServiceId>
         </tem:servicePrice>
      </tem:ServicePriceInsertUpdate>
   </soapenv:Body>
</soapenv:Envelope>
```
*Este método também pode ser usado para alterar as informações de preço do serviço.

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <ServicePriceInsertUpdateResponse xmlns="http://tempuri.org/">
         <ServicePriceInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Id>1</a:Id>
            <a:ListPrice>5.0</a:ListPrice>
            <a:Name>Embalagem para presente</a:Name>
            <a:Price>10.0</a:Price>
            <a:Service>
               <a:Id>134</a:Id>
               <a:IsActive>true</a:IsActive>
               <a:IsFile>false</a:IsFile>
               <a:IsGiftCard>false</a:IsGiftCard>
               <a:IsRequired>false</a:IsRequired>
               <a:IsVisibleOnCart>true</a:IsVisibleOnCart>
               <a:IsVisibleOnProduct>true</a:IsVisibleOnProduct>
               <a:IsVisibleOnService>true</a:IsVisibleOnService>
               <a:Name>Embalagem para presente</a:Name>
            </a:Service>
            <a:ServiceId>134</a:ServiceId>
         </ServicePriceInsertUpdateResult>
         <servicePriceId>1</servicePriceId>
      </ServicePriceInsertUpdateResponse>
   </s:Body>
</s:Envelope>
```

### Relacionando o serviço com uma SKU

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:StockKeepingUnitServiceInsertUpdate>
         <tem:stockKeepingUnitService>
			<!-- string, descrição do serviço -->
            <vtex:Description>Embalagem para presente</vtex:Description>
			<!-- number, id da inserção de serviço no SKU -->
            <vtex:Id>123</vtex:Id>
			<!-- bool, está ativo ? -->
            <vtex:IsActive>true</vtex:IsActive>
			<!-- string, nome do serviço -->
            <vtex:Name>Embalagem para presente</vtex:Name>
			<!-- number, id do serviço -->
            <vtex:ServiceId>134</vtex:ServiceId>
			<!-- number, id do preço do serviço -->
            <vtex:ServicePriceId>1</vtex:ServicePriceId>
			<!-- number, id do SKU -->
            <vtex:StockKeepingUnitId>31018371</vtex:StockKeepingUnitId>
         </tem:stockKeepingUnitService>
      </tem:StockKeepingUnitServiceInsertUpdate>
   </soapenv:Body>
</soapenv:Envelope>
```

*Este método também pode ser usado para alterar informações de inserção do serviço.

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <StockKeepingUnitServiceInsertUpdateResponse xmlns="http://tempuri.org/">
         <StockKeepingUnitServiceInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Description>Embalagem para presente</a:Description>
            <a:Id>123</a:Id>
            <a:IsActive>true</a:IsActive>
            <a:Name>Embalagem para presente</a:Name>
            <a:ServiceId>134</a:ServiceId>
            <a:ServicePrice>
               <a:Id>1</a:Id>
               <a:ListPrice>5.0000</a:ListPrice>
               <a:Name>Embalagem para presente</a:Name>
               <a:Price>10.0000</a:Price>
               <a:Service>
                  <a:Id>134</a:Id>
                  <a:IsActive>true</a:IsActive>
                  <a:IsFile>false</a:IsFile>
                  <a:IsGiftCard>false</a:IsGiftCard>
                  <a:IsRequired>false</a:IsRequired>
                  <a:IsVisibleOnCart>true</a:IsVisibleOnCart>
                  <a:IsVisibleOnProduct>true</a:IsVisibleOnProduct>
                  <a:IsVisibleOnService>true</a:IsVisibleOnService>
                  <a:Name>Embalagem para presente</a:Name>
               </a:Service>
               <a:ServiceId>134</a:ServiceId>
            </a:ServicePrice>
            <a:ServicePriceId>1</a:ServicePriceId>
            <a:StockKeepingUnitId>31018371</a:StockKeepingUnitId>
         </StockKeepingUnitServiceInsertUpdateResult>
         <stockKeepingUnitServiceId>123</stockKeepingUnitServiceId>
      </StockKeepingUnitServiceInsertUpdateResponse>
   </s:Body>
</s:Envelope>
```
