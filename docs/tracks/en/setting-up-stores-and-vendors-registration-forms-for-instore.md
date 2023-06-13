---
title: Setting up stores and vendors registration forms for inStore
id: 58Ztk6XfxY0y0Qqo8WesKm
status: DRAFT
createdAt: 2018-03-15T21:32:07.649Z
updatedAt: 2020-02-13T20:05:22.747Z
publishedAt: 
firstPublishedAt: 2018-03-15T21:32:23.313Z
contentType: trackArticle
productTeam: Shopping
slug: setting-up-stores-and-vendors-registration-forms-for-instore
trackId: 
trackSlugEN: 
---

In __Master Data__ you may set up the __application__, the __store__ and the __vendors__.

inStore introduced the concept of __physical store__ and __vendor__ for VTEX platform. To manage these entries, you need to configure these entities in __Master Data (CRM)__.

The `Stores` entity is created by *default* in your store. To set up the `Vendors` entity, follow the steps below:

## Accessing the data structure in Master Data

1. Access the __Master Data__ module.
2. On the __Aplicações__ tab, click the gear button of the __Profile System__ application.
3. In the __Configurações__ box ("Settings"), click __Estrutura de Dados__ ("Data Structure").
4. Click on the __Entidade de Dados__ tab ("Data Entity").

## Creating the Vendors entity (VN)

In the __Data entity__ tab, follow the steps below:

1. In the upper-left corner of the screen, click __Novo__ ("New").
2. In __Sigla__ ("Initials"), fill in with `VN`.
3. In __Nome__, you should write `Vendors`.
4. In the __Tipo de chave primária__ field ("Primary Key Type"), select the option __Gerar um GUID único__ ("Gerate a single GUID").
5. Leave the option __Permitir consultar todos os registros sem filtro__ unchecked.
6. In __Tempo de cache para consultas paginadas__ ("Cache time for paged queries"), select __Sem Cache__ ("No cache").

In the __Campo__ tab ("Field"), you must set up the fields that should be part of this data entity. Follow the steps below to create each field:

### *Name* field

1. In __Nome__, fill in with `name`.
2. In __Nome de exibição__ ("Display name"), fill in with `Name`.
3. In __Tipo__ ("Type"), choose `Varchar 750`.
4. Click on the __gear button__ located on the right side.
5. In the __Configurações gerais__ box ("General Settings"), check only __Público Para Leitura__ ("Public to Read") and __Público Para Filtrar__ ("Public to Filter").
6. In the __Configurações de busca e filtro__ box ("Search and filter settings"), check __É buscável__ ("is searchable") and __É filtro__ ("is filter").
7. In the __Configurações específicas deste tipo de campo__ box ("Configurations specific to this field type"), check only __Não usar normalização__ ("Don't use normalization").
8. Click again on the __gear button__ located on the right side.

### *Store* field

1. Click __Novo campo__ ("New field").
2. In __Nome__ ("Name"), fill in with `store`.
3. In __Nome de exibição__ ("Display name"), fill in with `Store`.
4. In __Tipo__ ("Type"), choose `Relationship`.
5. Click the __gear button__ located on the right side.
6. In the __Configurações gerais__ box ("General Settings"), check only __Público Para Leitura__ ("Public to Read") and __Público Para Filtrar__ ("Public to Filter").
7. In the __Configurações específicas deste tipo de campo__ box ("Configurations specific to this field type"), in __Entidade de Dados para relacionar__ ("Data entity to relate"), select __Stores__.
8. Still in the __Configurações específicas deste tipo de campo__ box, in __Campo relacionado para visualização__ ("Related field for visualization"), select `name`.
9. Click again on the __gear button__ located on the right side.

### *User* field

1. Click __Novo campo__ ("New field").
2. In __Nome__ ("Name"), fill in with `user`.
3. In __Nome de exibição__ ("Display name"), fill in with `User`.
4. In __Tipo__ ("Type"), choose `Varchar 100`.
5. Click the __gear button__ located on the right side.
6. In the __Configurações gerais__ box ("General Settings"), check only __Público Para Leitura__ ("Public to Read") and __Público Para Filtrar__ ("Public to Filter").
7. In the __Configurações de busca e filtro__ box ("Search and filter settings"), check __É buscável__ ("is searchable") and __É filtro__ ("is filter").
8. In the __Configurações específicas deste tipo de campo__ box ("Configurations specific to this field type"), check only __Não usar normalização__ ("Don't use normalization").
9. Click again on the __gear button__ located on the right side.
10. At the end of this registration, click the __Save__ button to save the settings you have made.

## Publishing entities

After saving the fields settings, you must publish the __Vendors__ entity. The __Stores__ entity is already published by *default*. To publish the entity, follow the steps below:

In the __Entidade de dados__ tab, search for the __Vendors__ entity.
On the left side of the line, click the button with a __blue diskette__.
You will see a confirmation message. Click __OK__ to publish the entity.
You will receive a message from Master Data stating that the publication was successful. Click __OK__ to proceed.

## Vendors entity indexing

After performing the steps described above, you need to index the `Vendors` entity so that they become available. Follow the steps below:

1. Click the __Novo__ ("New") button.
2. In the __Nome__ field ("Name"), fill in `VendorsIndex`.
3. Check the __Valores únicos__ option ("").
4. In __DataEntity__, select `Vendors`.
5. Under __ Field Composition__, type `user`.
6. Click __Save__.
7. On the __Indices__ tab screen, click on the __disquete azul__ on the left side of the `VendorsIndex` index row.
8. You will receive a Master Data message confirming that the index has been successfully configured. Click __Ok__.

## Forms creation on Master Data

After you create the entities and their data structures, you can create the required forms in Master Data. To do this, follow the steps below:

### Vendors Form

1. Enter the __Master Data__ module.
2. Click the __Criar aplicação__ button ("Create application").
3. In the __Configurações__ box ("Settings"), click __Formulários__ ("Forms").
4. Click the __Novo__ button ("New") in the upper-left corner of the screen.
5. In the __Nome__ field ("Name"), fill in with `Vendors`.
6. Under __Entidade de dados__ ("Data entity"), select `Vendor`.
7. The __Campo da Listagem__ tab ("List Field") will open. Select the fields __Id do Registro__ ("Id of the Registry"), __Loja__ ("Store") and __Usuário__ ("User").
8. In the __Schema de Layout__ tab ("Layout Scheme"), click __Incluir nova seção__ ("Include new section") on the right side of the screen.
9. In the __Nome__ field ("Name") of Section 1, type `Vendor`.
10. In the __Campos disponíveis__ box ("Available fields"), click and drag the following fields: __Nome__ ("Name"), __Usuário__ ("User") and __Loja__ ("Store") to the fields in column 1.
11. Click __Save__.

### Stores Form

1. Enter the __Master Data__ module.
2. Click the __Criar aplicação__ button ("Create application").
3. In the __Configurações__ box ("Settings"), click __Formulários__ ("Forms").
4. Click the __Novo__ button ("New") in the upper-left corner of the screen.
5. In the __Nome__ field ("Name"), fill in with `Stores`.
6. Under __Entidade de dados__ ("Data entity"), select `Stores`.
7. The __Campo da Listagem__ tab ("List Field") will open. Select the fields __Id do Registro__, __Name__, __Address__, __Number__, __Neighborhood__, __City__, __State__, __Longitude__, __Latitude__, __Trade Policy__, __ID da Loja__, __ID do Documento__, __Postal Code__, __Country__, __ecommerce Seller ID__, __Store Seller ID__.
8. In the __Schema de Layout__ tab ("Layout Scheme"), click __Incluir nova seção__ ("Include new section") on the right side of the screen.
9. In the __Nome__ field ("Name") of Section 1, type `Store`.
10. In the Available Fields box, click and drag the fields __Name__, __StoreName__, __Postal Code__, __Address__, __Number__, __Complement__, __Neighborhood__, __City__, __State__, and __Country__ to the __Columns of column 1__.
11. In the __Campos disponíveis__ box ("Available fields"), click and drag the following fields: __Trade Policy__, __Store Seller ID__ and __ecommerce Seller ID__ to the fields in column 2.
12. Click __Save__.

<hr>

These forms take a few minutes to appear after they're created. Click the __Aplicações__ tab ("Applications") to check if the forms are already appearing on the screen. If they have not already appeared, you can click __Recarregar Aplicações__ ("Reload Applications") or __Atualizar a página__ ("Update the page") and check if the forms are already available. As soon as they appear, you will be able to register the physical stores and the vendors.
