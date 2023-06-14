---
title: Guía de integración de ERPs - Catálogo Expreso
id: 5AKpnx79Bumc6IYgMKYssk
status: DRAFT
createdAt: 2017-09-11T22:16:10.606Z
updatedAt: 2020-06-04T01:07:55.630Z
publishedAt: 
firstPublishedAt: 2017-09-11T22:21:45.592Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: guia-de-integracion-de-erps-catalogo-expreso
legacySlug: guia-de-integracion-de-erps-catalogo-expreso
subcategory: 5fKgQZhrCw88ACy6Su6GUc
---

<div class="alert alert-warning">Este artículo es parte de la <a href="https://help.vtex.com/tutorial/guia-de-integracion-de-erps--3VuOwNLmb624ImooEIIkmO">Guía de integración de ERPs</a>.</div>

Este documento tiene como objetivo auxiliar en la integración de catálogo del ERP para una tienda hospedada en VTEX, de una manera rápida.

En este tipo de integración la administración de la tienda está en el admin de VTEX, siendo el ERP sólo una fuente de donde nacen los productos y SKUs.

En este escenario de flujo básico, sólo los datos básicos de productos y SKU son manipulados por el ERP, y todo el enriquecimiento (marca, proveedor, imágenes, categoría, activación, etc.) será hecho por el administrador de la tienda en la plataforma VTEX.

Antes de trabajar con esta guía, [conozca la arquitectura del catálogo](http://help.vtex.com/es/tutorial/guia-de-integracion-de-erps-arquitectura-del-catalogo).

## Integración de Productos y SKUs

Después de definir las variaciones y la estructura de mercado de la tienda, el siguiente paso es enviar los productos y los SKU del ERP a la tienda VTEX.

_Flujo:_

![](https://images.contentful.com/alneenqid6w5/40MeR2z0hq2CY2KyUOeAAO/f524ae4caaf01fb40d50e0e0ca954df6/ERP-catalogo-expresso.png)

### Producto

Abajo un ejemplo de llamada y respuesta de una inserción de producto mediante el método "ProductInsertUpdate":

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:arr="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
<soapenv:Header/>
	<soapenv:Body>
		<tem:ProductInsertUpdate>
			<tem:productVO>
			<!--int, identificdor da marca-->
			<vtex:BrandId>2000011</vtex:BrandId>
			<!--int, identificdor da categoria-->
			<vtex:CategoryId>1000020</vtex:CategoryId>
			<!--int, identificdor do departamento-->
			<vtex:DepartmentId>1000018</vtex:DepartmentId>
			<!--string, descrição completa do produto-->
			<vtex:Description>Vaso de barro vermelho, feito a mão com barro do mar vermelho</vtex:Description>
			<!--string, descrição curta do produto-->
			<vtex:DescriptionShort>Vaso de barro vermelho artesanal</vtex:DescriptionShort>
			<!--int, opcional, identificador no ERP caso int-->
            <vtex:Id>1234567</vtex:Id>
			<!--bool, se não atender requisitos de ativação(ter SKUs ativas), não será ativado-->
			<vtex:IsActive>true</vtex:IsActive>
			<!--bool, vai ser visível no site-->
			<vtex:IsVisible>true</vtex:IsVisible>
			<!--string, palavras chaves relevantes para a busca-->
			<vtex:KeyWords> Barro, vaso, vermelho</vtex:KeyWords>
			<!--lista de inteiros, pra qual canal de vendas = loja principal = 1-->
			<vtex:ListStoreId>
			   	<arr:int>1</arr:int>
				<arr:int>2</arr:int>
			</vtex:ListStoreId>
			<!--meta tag de description (SEO)-->
			<vtex:MetaTagDescription>feito a mão com barro do mar vermelho</vtex:MetaTagDescription>
			<!--string, nome do produto-->
			<vtex:Name>Vaso Artesanal de Barro Vermelho</vtex:Name>
			<!--string, identificador do produto no ERP-->
			<vtex:RefId>1234567890</vtex:RefId>
			<!--string, titulo do produto-->
			<vtex:Title>Vaso Artesanal de Barro Vermelho</vtex:Title>
			</tem:productVO>
		</tem:ProductInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
```

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <ProductInsertUpdateResponse xmlns="http://tempuri.org/">
         <ProductInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:AdWordsRemarketingCode i:nil="true"/>
            <a:BrandId>2000011</a:BrandId>
            <a:CategoryId>1000020</a:CategoryId>
            <a:DepartmentId>1000018</a:DepartmentId>
            <a:Description>Vaso de barro vermelho, feito a mão com barro do mar vermelho</a:Description>
            <a:DescriptionShort>Vaso de barro vermelho artesanal</a:DescriptionShort>
			<!--identificador do produto inserido-->
            <a:Id>31018369</a:Id>
            <a:IsActive>false</a:IsActive>
            <a:IsVisible>true</a:IsVisible>
            <a:KeyWords>Barro, vaso, vermelho</a:KeyWords>
            <a:ListStoreId xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
               <b:int>1</b:int>
               <b:int>2</b:int>
            </a:ListStoreId>
            <a:LomadeeCampaignCode i:nil="true"/>
            <a:MetaTagDescription>feito a mão com barro do mar vermelho</a:MetaTagDescription>
            <a:Name>Vaso Artesanal de Barro Vermelho</a:Name>
            <a:RefId>1234567890</a:RefId>
            <a:ReleaseDate i:nil="true"/>
            <a:ShowWithoutStock>true</a:ShowWithoutStock>
            <a:SupplierId i:nil="true"/>
            <a:TaxCode i:nil="true"/>
            <a:Title>Vaso Artesanal de Barro Vermelho</a:Title>
         </ProductInsertUpdateResult>
      </ProductInsertUpdateResponse>
   </s:Body>
</s:Envelope>
```

### SKU

Una vez insertados todos los productos, que teóricamente son los padres de los SKU, ha llegado el momento de enviar las SKUs hijos de los productos.
Abajo un ejemplo de llamada y respuesta de una inserción de SKU utilizando el método "StockKeepingUnitInsertUpdate":

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:StockKeepingUnitInsertUpdate>
			<tem:stockKeepingUnitVO>
			<!--int, CommercialConditionId = Condição Comercial de SKU -->
			<vtex:CommercialConditionId>1</vtex:CommercialConditionId>
			<!--decimal, cubagem = peso cubico -->
			<vtex:CubicWeight>100</vtex:CubicWeight>
			<!--decimal, altura com embalagem e metros-->
			<vtex:Height>1.800</vtex:Height>
			<!--int, opcional, identificador da sku no ERP caso int-->
            <vtex:Id>00123456</vtex:Id>
			<!--bool, se não atender requisitos de ativação(imagem, preço, estoque, espec., outros reqs obrig.), não será ativado-->
			<vtex:IsActive>true</vtex:IsActive>
			<!--bool, disponibilidade -->
			<vtex:IsAvaiable>true</vtex:IsAvaiable>
			<!--bool, é um KIT? -->
			<vtex:IsKit>false</vtex:IsKit>
			<!--decimal, comprimento com embalagem em metros -->
			<vtex:Length>1.52</vtex:Length>
			<!--decimal, ** ler obs -->
			<vtex:ListPrice>150.0</vtex:ListPrice>
			<!--number, prefixo do estoque (id estoque = 1_1, mandar 1) -->
			<vtex:ModalId>1</vtex:ModalId>
			<!--string, opicional, tipo de carga, necessita configuração de transportadora especial quando preenchido -->
			<vtex:ModalType>Vidro</vtex:ModalType>
			<!--string, nome da SKU -->
			<vtex:Name>Vaso Artesanal de Barro Vermelho Escuro </vtex:Name>
			<!--decimal,  preço, "POR", opcional **ler obs-->
			<vtex:Price>110.0</vtex:Price>
			<!--int, identificador do produto pai da SKU -->
			<vtex:ProductId>31018369</vtex:ProductId>
			<!--decimal, peso real em kilos -->
			<vtex:RealHeight>1.740</vtex:RealHeight>
			<!--decimal, altural real em metros -->
			<vtex:RealLength>1.60</vtex:RealLength>
			<!--decimal, peso real em kilos -->
			<vtex:RealWeightKg>2.750</vtex:RealWeightKg>
			<!--decimal, comprimento real em metros -->
			<vtex:RealWidth>1.7</vtex:RealWidth>
			<!--string, identificador da SKU no ERP -->
			<vtex:RefId>00123456</vtex:RefId>
			<!--number, opcional, numero de pontos dessa SKU -->
			<vtex:RewardValue>0</vtex:RewardValue>
			<!--lista de string, EANs do produto -->
			<vtex:StockKeepingUnitEans>
			   <vtex:StockKeepingUnitEanDTO>
			   		<vtex:Ean>0123456789123</vtex:Ean>
			   </vtex:StockKeepingUnitEanDTO>
			</vtex:StockKeepingUnitEans>
			<!--int, unidade de multipliçao para venda -->
			<vtex:UnitMultiplier>1</vtex:UnitMultiplier>
			<!--decimal, peso em kilos-->
			<vtex:WeightKg>1.5</vtex:WeightKg>
			<!--decimal, largura com embalagem em metros -->
			<vtex:Width>2.780</vtex:Width>
			</tem:stockKeepingUnitVO>
		</tem:StockKeepingUnitInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
```

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
			<!--identificador do sku inserido-->
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
            <a:Name>Vaso Artesanal de Barro Vermelho Escuro</a:Name>
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

__Atención:__ el ERP no debe inferir un ID en el registro de un nuevo SKU, dejando el campo vacío (* null *), haciendo que VTEX gestione la creación de IDs. El ID que se genera puede ser recuperado por la respuesta del request y debe almacenarse en el sistema para futuras actualizaciones de este producto / SKU.
