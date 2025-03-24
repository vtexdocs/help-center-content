---
title: 'Integration guide for ERPs -  Full Catalog'
id: 52MjNKpqAouKC8u4Ca0YWS
status: ARCHIVED
createdAt: 2017-09-11T22:53:06.410Z
updatedAt: 2020-06-04T01:08:26.580Z
publishedAt: 
firstPublishedAt: 2017-09-11T22:54:17.078Z
contentType: tutorial
productTeam: Others
author: authors_84
slugEN: integration-guide-for-erps-full-catalog
locale: en
legacySlug: integration-guide-for-erps-full-catalog
subcategoryId: 5fKgQZhrCw88ACy6Su6GUc
---

>⚠️ This article is part of the [ERP Integration Guide](https://help.vtex.com/tutorial/integration-guide-for-erps--3VuOwNLmb624ImooEIIkmO).

This document is intended to assist on the catalog integration (department, category, brand, images, fields, field values, SKUs activation) of the ERP for a store hosted in VTEX. In this type of integration most of the store's management is ERP.

![ERParchitecture](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Other/ERP%20integration/integration-guide-for-erps-full-catalog_1.png)

In this scenario of complete flow, most of product data and SKUs are handled through the ERP (brand, images, category, activation, etc). The handling of specification fields in this model can be done through REST API, but the best practice would be for the VTEX admin.

Before proceeding, [know the catalog architecture](http://help.vtex.com/en/tutorial/integration-guide-for-erps-catalog-architecture).

## Department

Following below, examples of calls and answers of Department and Categories through the method “CategoryInsertUpdate”:

_request:_

````xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:CategoryInsertUpdate>
			<tem:category>
				<!--department description-->
				<vtex:Description>Art Supplies Department</vtex:Description>
				<!--is the department active?-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--department keywords-->
				<vtex:Keywords>Department Keywords</vtex:Keywords>
				<!--department name-->
				<vtex:Name>Art Supplies Department</vtex:Name>
				<!--department title-->
				<vtex:Title>Art Supplies Department</vtex:Title>
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
				<a:Description>Art Supplies Department</a:Description>
				<a:FatherCategoryId i:nil="true"/>
				<!--inserted department identifier-->
				<a:Id>1000018</a:Id>
				<a:IsActive>true</a:IsActive>
				<a:Keywords>Department Keywords</a:Keywords>
				<a:LomadeeCampaignCode i:nil="true"/>
				<a:Name>Art Supplies Department</a:Name>
				<a:Title>Art Supplies Department</a:Title>
			</CategoryInsertUpdateResult>
		</CategoryInsertUpdateResponse>
	</s:Body>
</s:Envelope>
```

## Category

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:CategoryInsertUpdate>
			<tem:category>
				<!--category description-->
				<vtex:Description>Pottery Supplies</vtex:Description>
				<!--parent department identifier, inserted above-->
				<vtex:ParentCategoryId>1000018</vtex:ParentCategoryId>
				<!--is the category active?-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--category keywords-->
				<vtex:Keywords>Pottery</vtex:Keywords>
				<!--category name-->
				<vtex:Name>Pottery Supplies</vtex:Name>
				<!--category title-->
				<vtex:Title>Pottery Supplies</vtex:Title>
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
				<a:Description>Pottery Supplies</a:Description>
				<a:ParentCategoryId>1000018</a:ParentCategoryId>
				<!--inserted category identifier-->
				<a:Id>1000019</a:Id>
				<a:IsActive>true</a:IsActive>
				<a:Keywords>Pottery</a:Keywords>
				<a:LomadeeCampaignCode i:nil="true"/>
				<a:Name>Pottery Supplies</a:Name>
				<a:Title>Pottery Supplies</a:Title>
			</CategoryInsertUpdateResult>
		</CategoryInsertUpdateResponse>
	</s:Body>
</s:Envelope>
```

## SubCategory

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:CategoryInsertUpdate>
			<tem:category>
				<!--subcategory description-->
				<vtex:Description>Red Clay</vtex:Description>
				<!--identifier of the category inserted above-->
				<vtex:FatherCategoryId>1000019</vtex:FatherCategoryId>
				<!--is the subcategory active?-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--subcategory keywords-->
				<vtex:Keywords>Red Clay</vtex:Keywords>
				<!--subcategory name-->
				<vtex:Name>Red Clay Supplies</vtex:Name>
				<!--subcategory title-->
				<vtex:Title>Red Clay Supplies</vtex:Title>
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
				<a:Description>Red Clay</a:Description>
				<a:ParentCategoryId>1000019</a:ParentCategoryId>
				<!--inserted subcategory's identifier-->
				<a:Id>1000020</a:Id>
				<a:IsActive>true</a:IsActive>
				<a:Keywords>Red Clay</a:Keywords>
				<a:LomadeeCampaignCode i:nil="true"/>
				<a:Name>Red Clay Supplies</a:Name>
				<a:Title>Red Clay Supplies</a:Title>
			</CategoryInsertUpdateResult>
		</CategoryInsertUpdateResponse>
	</s:Body>
</s:Envelope>
```

## Brand

Example of Brand insertion through "BrandInsertUpdate" method:

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:BrandInsertUpdate>
			<tem:brand>
				<!--brand description-->
				<vtex:Description>Brand XYZ</vtex:Description>
				<!--is the brand active?-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--brand keywords-->
				<vtex:Keywords>XYZ Keywords</vtex:Keywords>
				<!--brand name-->
				<vtex:Name>XYZ</vtex:Name>
				<!--brand title-->
				<vtex:Title>XYZ</vtex:Title>
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
			<a:Description>XYZ</a:Description>
			<!--inserted brand's identifier-->
			<a:Id>2000011</a:Id>
			<a:IsActive>true</a:IsActive>
			<a:Keywords>XYZ Keywords</a:Keywords>
			<a:LomadeeCampaignCode i:nil="true"/>
			<a:Name>XYZ</a:Name>
			<a:Title>XYZ</a:Title>
         </BrandInsertUpdateResult>
      </BrandInsertUpdateResponse>
   </s:Body>
</s:Envelope
```


## Products and SKUs

See in our [catalog express guide](http://help.vtex.com/en/tutorial/integration-guide-for-erps-express-catalog#integration-of-products-and-skus).

## Products and SKUs Specification Fields

The products specification fields must be added to the direct category of them and they must be used with `IsStockKeepingUnit = false`. The SKUs specification fields must be added to the direct cateogry of them it must be used with `IsStockKeepingUnit = true`.

There aren't webservice methods to create fields, and the admin must be used for this.

Ex: The product "T-Shirt" has required specifications **color** and **size**, hece, you need to add the field on the t-shirt category informing that every product in this category (and below it) is required to have these fields, **color** and **size**, filled. 


### Field Values

After creating product fields, it is necessary to create their inne values. Find an example below of a field value creation using "ProductEspecificationInsert" method:

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:arr="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:ProductEspecificationInsert>
         <!--number, identifier of the product that is receiving the field value-->
         <tem:idProduct>31018369</tem:idProduct>
         <!--string, field identifier, field name-->
         <tem:fieldName>Materials</tem:fieldName>
         <!--array, list of field values-->
         <tem:fieldValues>
            <!--string, field value-->
            <arr:string>ceramic</arr:string>
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

If you want to insert a field value defined as just an SKU field, use the following method "StockKeepingUnitEspecificationInsert":

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:arr="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:StockKeepingUnitEspecificationInsert>
         <!--number, SKU identifier-->
         <tem:idSku></tem:idSku>
         <!--string, field identifier, field name-->
         <tem:fieldName></tem:fieldName>
         <!--array, list of field values-->
         <tem:fieldValues>
            <!--string, field value-->
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

## SKUs Images

Request examples of SKU image insert. There aren't any methods available to delete images. 

_request:_
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
<soapenv:Header/>
	<soapenv:Body>
		<tem:ImageServiceInsertUpdate>
			<!--image url-->
			<tem:urlImage>https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6Lu0obmddsQX3JELe04hUs_hSelsmU8_W1yn5ztgdAk5SJC7D</tem:urlImage>
			<!--image name-->
			<tem:imageName>Dark Red Clay</tem:imageName>
			<!--identifier of the SKU that will receive the image-->
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
			<tem:imageName>Light Red Clay</tem:imageName>
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


## Activate SKUs

After creating all the SKUs and filling in the required information (image, inventory, price, specifications) it's time to activate them. Activating SKU Request:

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
<soapenv:Header/>
	<soapenv:Body>
		<tem:StockKeepingUnitActive>
			<!--identifier of the SKU you wish to activate-->
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

### SKUs Update

After creating a SKU, if an update is necessary, you must use the same method inserting the SKU ID in the body. Price update must **NOT** be done using the insert/update SKU method.

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
<soapenv:Header/>
	<soapenv:Body>
		<tem:StockKeepingUnitInsertUpdate>
			<tem:stockKeepingUnitVO>
				<!--number, cubing = cubic weight -->
				<vtex:CubicWeight>100</vtex:CubicWeight>
				<!--number, height incl. packaging, in meters-->
				<vtex:Height>1.800</vtex:Height>
				<!--bool, if activation requisites are not met(image, price, inventory, specs., or other mandatory requisites.), it will be activated-->
				<vtex:IsActive>true</vtex:IsActive>
				<!--bool, availability -->
				<vtex:IsAvaiable>true</vtex:IsAvaiable>
				<!--bool, is it a bundle? -->
				<vtex:IsKit>false</vtex:IsKit>
				<!--number, length including packaging, in meters -->
				<vtex:Length>1.52</vtex:Length>
				<!--decimal, ** see obs. -->
				<vtex:ListPrice>150.0</vtex:ListPrice>
				<!--inventory prefix (inventory ID = 1_1, send 1) -->
				<vtex:ModalId>1</vtex:ModalId>
				<!--string, optional, load type, requires special carrier configuration when filled in -->
				<vtex:ModalType>Glass</vtex:ModalType>
				<!--string, SKU name -->
				<vtex:Name>Handcrafted Dark Orange Clay Vase</vtex:Name>
				<!--decimal,  price, "IS NOW", optional **See obs. -->
				<vtex:Price>110.0</vtex:Price>
				<!--number, SKU's parent product identifier -->
				<vtex:ProductId>31018369</vtex:ProductId>
				<!--number, real height in meters -->
				<vtex:RealHeight>1.740</vtex:RealHeight>
				<!--number, real length in meters -->
				<vtex:RealLength>1.60</vtex:RealLength>
				<!--number, real weight in kg -->
				<vtex:RealWeightKg>2.750</vtex:RealWeightKg>
				<!--number, real width in meters -->
				<vtex:RealWidth>1.7</vtex:RealWidth>
				<!--number, SKU ERP identifier -->
				<vtex:RefId>00123456</vtex:RefId>
				<!--number, optional, this SKU's number of points -->
				<vtex:RewardValue>0</vtex:RewardValue>
				<!--string list, product EANs -->
				<vtex:StockKeepingUnitEans>
				<vtex:StockKeepingUnitEanDTO>
				<vtex:Ean>0123456789123</vtex:Ean>
				</vtex:StockKeepingUnitEanDTO>
				</vtex:StockKeepingUnitEans>
				<!--number, sale multiplication unit -->
				<vtex:UnitMultiplier>1</vtex:UnitMultiplier>
				<!--number, weight in kg -->
				<vtex:WeightKg>1.5</vtex:WeightKg>
				<!--number, width including packaging, in meters -->
				<vtex:Width>2.780</vtex:Width>
			</tem:stockKeepingUnitVO>
		</tem:StockKeepingUnitInsertUpdate>
	</soapenv:Body>
</soapenv:Envelope>
```

*Id and RefId fields define if it is an insertion or an update, in case of existing id or RefId, it is an update.

**In case of null price being updated, the price information will not be sent.

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
		<a:ModalType>Glass</a:ModalType>
		<a:Name>Handcrafted Dark Orange Clay Vase</a:Name>
		<a:Price>110.0</a:Price>
		<a:ProductId>31018369</a:ProductId>
		<a:ProductName>Handcrafted red clay vase</a:ProductName>
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

## Service

There are services (gift packs, warranty, etc.) that may be related to SKUs. To be used  in this matter, firstly, a service must be created. After creating it, you must insert a price to this service and then relate it to a SKU, for example:

### Creating the service

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:ServiceInsertUpdate>
         <tem:service>
		    <!--number, service ID -->
            <vtex:Id>134</vtex:Id>
		    <!--bool, is it active ? -->
            <vtex:IsActive>true</vtex:IsActive>
		    <!--bool, is it a file ? -->
            <vtex:IsFile>false</vtex:IsFile>
		    <!--bool, is it a Gift Card ? -->
            <vtex:IsGiftCard>false</vtex:IsGiftCard>
		    <!--bool, is it mandatory ? -->
            <vtex:IsRequired>false</vtex:IsRequired>
		    <!--bool, is it visible in the cart ? -->
            <vtex:IsVisibleOnCart>true</vtex:IsVisibleOnCart>
		    <!--bool, is it visible on Product ? -->
            <vtex:IsVisibleOnProduct>true</vtex:IsVisibleOnProduct>
		    <!--bool, is it visible on Service ? -->
            <vtex:IsVisibleOnService>true</vtex:IsVisibleOnService>
		    <!--bool, service name -->
            <vtex:Name>Gift packaging</vtex:Name>
         </tem:service>
      </tem:ServiceInsertUpdate>
   </soapenv:Body>
</soapenv:Envelope>
```

*It is strongly recommended that the integrator enters an ID for the service. If it is null, we will auto-increment automatically.*

**This method can also be used to change service information.**

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
            <a:Name>Gift packaging</a:Name>
         </ServiceInsertUpdateResult>
         <serviceId>134</serviceId>
      </ServiceInsertUpdateResponse>
   </s:Body>
</s:Envelope>
```

### Inserting price on the service

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:ServicePriceInsertUpdate>
         <tem:servicePrice>
			<!-- number, service price ID -->
            <vtex:Id>1</vtex:Id>
			<!-- decimal, "IS NOW" service price  -->
            <vtex:ListPrice>5.0</vtex:ListPrice>
			<!-- string, service name -->
            <vtex:Name>Gift packaging</vtex:Name>
			<!-- decimal, "WAS" service price  -->
            <vtex:Price>10.0</vtex:Price>
			<!-- number, service ID -->
            <vtex:ServiceId>134</vtex:ServiceId>
         </tem:servicePrice>
      </tem:ServicePriceInsertUpdate>
   </soapenv:Body>
</soapenv:Envelope>
```
*This method may also be used to update the service price.

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <ServicePriceInsertUpdateResponse xmlns="http://tempuri.org/">
         <ServicePriceInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Id>1</a:Id>
            <a:ListPrice>5.0</a:ListPrice>
            <a:Name>Gift packaging</a:Name>
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
               <a:Name>Gift packaging</a:Name>
            </a:Service>
            <a:ServiceId>134</a:ServiceId>
         </ServicePriceInsertUpdateResult>
         <servicePriceId>1</servicePriceId>
      </ServicePriceInsertUpdateResponse>
   </s:Body>
</s:Envelope>
```

### Linking a service to a SKU

_request:_

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:vtex="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:StockKeepingUnitServiceInsertUpdate>
         <tem:stockKeepingUnitService>
			<!-- string, service description -->
            <vtex:Description>Gift packaging</vtex:Description>
			<!-- number, SKU service insertion ID -->
            <vtex:Id>123</vtex:Id>
			<!-- bool, is it active ? -->
            <vtex:IsActive>true</vtex:IsActive>
			<!-- string, service name -->
            <vtex:Name>Gift packaging</vtex:Name>
			<!-- number, service ID -->
            <vtex:ServiceId>134</vtex:ServiceId>
			<!-- number, service price ID -->
            <vtex:ServicePriceId>1</vtex:ServicePriceId>
			<!-- number, SKU ID -->
            <vtex:StockKeepingUnitId>31018371</vtex:StockKeepingUnitId>
         </tem:stockKeepingUnitService>
      </tem:StockKeepingUnitServiceInsertUpdate>
   </soapenv:Body>
</soapenv:Envelope>
```

*This method may also be used to update service information.

_response:_

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body>
      <StockKeepingUnitServiceInsertUpdateResponse xmlns="http://tempuri.org/">
         <StockKeepingUnitServiceInsertUpdateResult xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <a:Description>Gift packaging</a:Description>
            <a:Id>123</a:Id>
            <a:IsActive>true</a:IsActive>
            <a:Name>Gift packaging</a:Name>
            <a:ServiceId>134</a:ServiceId>
            <a:ServicePrice>
               <a:Id>1</a:Id>
               <a:ListPrice>5.0000</a:ListPrice>
               <a:Name>Gift packaging</a:Name>
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
                  <a:Name>Gift packaging</a:Name>
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
