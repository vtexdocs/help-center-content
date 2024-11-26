---
title: 'Amazon Offer Matching'
id: 7fRfoP69kYgg8znImMhyQ0
status: PUBLISHED
createdAt: 2023-05-29T15:07:38.220Z
updatedAt: 2023-07-27T21:32:07.360Z
publishedAt: 2023-07-27T21:32:07.360Z
firstPublishedAt: 2023-05-29T16:38:11.840Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: amazon-offer-matching
locale: en
legacySlug: amazon-offer-matching
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Every time a [SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) with an [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube) from VTEX is sent to Amazon, the marketplace performs a process called matching, which consists of grouping offers for the same product based on their EAN.  

On VTEX, the EAN is used to map the products with the corresponding [ASINs](https://associados.amazon.com.br/resource-center/asin-amazon?ac-ms-src=rc-home-card) (*Amazon Standard Identification Number*) on Amazon. To map the equivalence between the EAN and the ASIN, manual matching is required. EAN and ASIN matches need to be exact for the offers to be linked correctly.  

![Offer match overview](https://images.ctfassets.net/alneenqid6w5/3SrhTyS3Cpy2xxWvEA3M88/263c3f6248e2b8d2cc07807c4800fd97/Match-an__ncios-Amazon.gif)

## Opportunity tab  

On the __Opportunity tab__, sellers can match products sent to Amazon individually or in bulk, search by product name, and by clicking the <i class="fas fa-ellipsis-v"></i> icon,  choose to either view the details of the products or the corresponding offer on Amazon.  

See the tab structure below.  

- __Search bar:__ Located at the top of the tab, sellers can use it to search for sent products and SKUs by their full or partial names.  
- __Checkbox:__ Located on the left side of the photo of each offer. It should be selected to match that offer.  
- __Counter:__ Displays next to the tab name, showing the number of listed products available for matching.  
- __Your Offer:__ All sent offers are displayed in this column, each with the following structure:  
  - Product image  
  - Product name  
  - Brand  
- __Amazon Suggestion:__ Offers with matching ASINs, presented in the following structure:  
  - Product image  
  - Product name  
  - Brand  

## Offers tab  

On the __Offers tab__,  sellers can view all approved offers, search by product name, and by clicking the <i class="fas fa-ellipsis-v"></i> icon,  choose to either view the details of the products or the corresponding offer on Amazon.  

See the tab structure below.  

- __Search bar:__ Located at the top of the tab, sellers can use it to search for approved products and SKUs by their full or partial names.  
- __Counter:__ Displays next to the tab name, showing the number of approved offers.  
- __Your Offer:__ All sent and approved offers are displayed in this column, each with the following structure:  
  - Product image  
  - Product name  
  - Brand  

- __Linked offers:__ Offers linked on Amazon with their matching ASINs, presented in the following structure:  
  - Product image  
  - Product name  
  - Brand  

## Matching products manually  

Once you have [sent](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) the products, they will be available on the __Amazon Offer Matching page__. To view the unapproved offers, go to the VTEX Admin and click *Marketplace >* __Amazon Offer Matching__ or use the search bar at the top of the page.  

### Single Offer Match  

In the `Opportunities` tab, each listed product has the icon <i class="fas fa-ellipsis-v"></i>. Clicking on it will display two buttons: `View Details` and `View Suggested Offer`, which will redirect users to new pages. The first shows the single product match, while the second displays the suggested offer published on Amazon.
See the buttons available on each page and their actions.
- **`Reject` button:** It deletes the suggested match, and the seller will have to submit the product again, following the [product submission guide](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD).
- **`Reject and request review` button:** If the seller disagrees with the matching suggestion and wants to request a review from Amazon, they should choose this option. Clicking this button will take the seller to the Amazon ticket page and remove the matching suggestion from the **opportunities** list.
This review can be tracked via the Amazon ticket dashboard.
- **`Publish` button:** If the seller agrees with the Amazon suggestion, they should click `Publish`.

To approve the match, the seller must follow the steps below.

1. 	In the `Opportunities` tab, click the icon <i class="fas fa-ellipsis-v"></i>.
2. 	Click `View Details`.
3. 	Check out the information displayed on the page.
![Single Offer Match](//images.ctfassets.net/alneenqid6w5/11Kd50vfsJccpDoHH8pSQ9/11d1054047295a3b8b03a687bb1201be/Match_individual_AMZ.png)  

4. 	Then, click one of the available buttons: `Publish`, `Reject and request review`, or `Reject`.  

### Bulk matching of offers  

On the `Opportunity` tab, all listed products matching Your Offer and Amazon Suggestion need to be approved manually. To approve SKU and ASIN matches, follow the steps below.  

1. On the `Opportunity` tab, select the checkbox next to the offer title that has a matching SKU <> ASIN.
As you select the products, the following pop-up will appear on the screen showing the number of selected products.  

![popupEN](//images.ctfassets.net/alneenqid6w5/3MTOQgMftiT5rsbJgKVpAD/41058f81c65b88b1b8d48c9018e6e1ee/MATCH_AMZ_EN.png)

2. When you have finished selecting the products, click `Publish Selected Offers`.  

3. In the match confirmation pop-up, check the selected offers and click `Confirm Publish`.  

![Matching confirmation](//images.ctfassets.net/alneenqid6w5/7IWcW7ozGbMmZAH4Prec3M/4ebd22582c42cb2f5cd1a53f2311c2d4/MATCH_CONFIRMATION.png)

Once confirmed, your offers will be sent and queued for processing. After approval, they will appear in the __Offers tab__, where you can __"View details of your offer"__, __"View offer suggested by Amazon"__, and __search for__ offers using the search bar.  

Offers that have no matches must be sent again. To resend an offer, follow the steps in the [Sending products to Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) tutorial.
Before resending an offer, make sure that the `Global category` and `EAN` fields are configured by following the steps in [Pre-configuring the catalog](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#3-pre-configuracoes-no-catalogo) and that all products meet the [required attributes on Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon).

