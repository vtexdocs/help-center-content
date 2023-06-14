---
title: 'Configurar formularios de registro de tiendas y vendedores para el inStore'
id: 1KJ79RwmMcC4ymyEIYAeA4
status: DRAFT
createdAt: 2018-03-06T21:26:24.205Z
updatedAt: 2020-05-25T19:06:03.499Z
publishedAt: 
firstPublishedAt: 2018-03-06T21:44:16.041Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slug: configurar-tiendas-y-vendedores-para-el-inStore
locale: es
legacySlug: configurar-tiendas-y-vendedores-para-el-inStore
subcategory: 
---

En el módulo __Master Data__ se realiza la configuración de la __aplicación__, de la __tienda__ y de los __vendedores__.

El inStore introdujo el concepto de __tienda física__ y __vendedor__ para la plataforma VTEX. Para gestionar estos registros, es necesario configurar estas entidades en el __Master Data (CRM) __.

La entidad `Stores` viene creada por *default* en su tienda. Para configurar la entidad `Vendors`, siga los pasos abajo:

## Acceder a la estructura de datos en Master Data

1. Acceda al módulo __Master Data__.
2. En la pestaña __Aplicações__ ("Aplicaciones"), haga clic en el botón de engranaje de la aplicación __Profile System__.
3. En el cuadro __Configurações__ ("Configuración"), haga clic en __Estrutura de Dados__ ("Estructura de datos").
4. Haga clic en la pestaña __Entidade de Dados__ ("Entidad de datos").

## Crear entidad Vendors (VN)

En la pestaña __Entidade de Dados__ ("Entidad de datos"), siga estos pasos:

1. En la esquina superior izquierda de la pantalla, haga clic en __Novo__ ("Nuevo").
2. En __Sigla__ ("Acrónimo"), rellene con `VN`.
3. En __Nome__ ("Nombre"), escriba `Vendors`.
4. En el campo __Tipo de chave primária__ ("Tipo de clave principal"), seleccione la opción __Gerar um GUID único__ ("Generar GUID único").
5. Deje la opción __Permitir consultar todos os registros sem filtro__ ("Permitir consultar todos los registros sin filtro") desactivada.
6. En __Tempo de cache para consultas paginadas__ ("Tiempo de caché para consultas paginadas"), seleccione __Sem cache__ ("Sin caché").

En la pestaña __Campo__, usted debe configurar los campos que deben formar parte de esta entidad de datos. Siga los pasos a continuación para crear cada campo:

### Campo *name*

1. En __Nome__ ("Nombre"), llene con `name`.
2. En __Nome de exibição__ ("Nombre de visualización"), rellene con `Name`.
3. En __Tipo__, elija `Varchar 750`.
4. Haga clic en el __botón de engranaje__ que se encuentra en el lado derecho.
5. En la casilla __Configurações gerais__ ("Configuraciones generales"), marque sólo __Público Para Leitura__ ("Público para la Lectura") y __Público Para Filtrar__.
6. En el cuadro __Configurações de busca e filtro__ ("Configuraciones de búsqueda y filtro"), marque __É buscável__ ("Es buscable") y __É filtro__ ("Es filtro").
7. En el cuadro __Configurações específicas deste tipo de campo__ ("Configuraciones específicas de este tipo de campo"), marque sólo __Não usar normalização__ ("No utilizar normalización").
8. Haga clic de nuevo en el __botón de engranaje__ que se encuentra en el lado derecho.

### Campo *store*

1. Haga clic en __Novo campo__ ("Nuevo campo").
2. En __Nome__ ("Nombre"), rellene con `store`.
3. En __Nome de exibição__ ("Nombre de visualización"), rellene con `Store`.
4. En __Tipo__, elija `Relationship`.
5. Haga clic en el __botón de engranaje__ que se encuentra en el lado derecho.
6. En el cuadro __Configurações gerais__ ("Configuraciones generales"), marque sólo __Público Para Leitura__ ("Público para la Lectura") y __Público Para Filtrar__.
7. En el cuadro __Configurações específicas deste tipo de campo__ ("Configuraciones específicas de este tipo de campo"), en __Entidade de Dados para relacionar__ ("Entidad de datos para relacionar"), seleccione __Stores__.
8. En el cuadro __Configuraciones específicas de este tipo de campo__, en __Campo relacionado para visualização__ ("Campo relacionado para visualización"), seleccione `name`.
9. Haga clic de nuevo en el __botón de engranaje__ que se encuentra en el lado derecho.

### Campo *user*

1. Haga clic en __Novo campo__ ("Nuevo campo").
2. En __Nome__ ("Nombre"), rellene con `user`.
3. En __Nome de exibição__ ("Nombre de visualización"), rellene con `User`.
4. En __Tipo__, elija `Varchar 100`.
5. Haga clic en el __botón de engranaje__ que se encuentra en el lado derecho.
6. En el cuadro __Configurações gerais__ ("Configuraciones generales"), marque sólo __Público Para Leitura__ ("Público para la Lectura") y __Público Para Filtrar__.
7. En el cuadro __Configurações de busca e filtro__ ("Configuraciones de búsqueda y filtro"), marque __É buscável__ ("Es buscable") y __É filtro__ ("Es filtro").
8. En el cuadro __Configurações específicas deste tipo de campo__ ("Configuraciones específicas de este tipo de campo"), marque sólo __Não usar normalização__ ("No utilizar normalización").
9. Haga clic de nuevo en el __botón de engranaje__ que se encuentra en el lado derecho.
10. Al final de este registro, haga clic en el botón __Salvar__ ("Guardar") para grabar las configuraciones realizadas.

## Publicar entidades

Después de guardar la configuración de los campos, usted debe publicar la entidad __Vendors__. La entidad __Stores__ ya está publicada por *default*. Para realizar la publicación, siga los pasos abajo:

1. En la pestaña __Entidade de dados__ ("Entidad de datos"), busque la entidad __Vendors__.
2. En el lado izquierdo de la línea, haga clic en el botón con un __disquete azul__.
3. Usted verá un mensaje de confirmación. Haga clic en __OK__ para publicar la entidad.
4. Usted recibirá un mensaje del Master Data que indica que la publicación se realizó con éxito. Haga clic en __OK__ para continuar.

## Indización de la entidad Vendors

Después de realizar los pasos descritos anteriormente, es necesario indizar la entidad `Vendors` para que esté disponible. Siga estos pasos:

1. Haga clic en el botón __Novo__ ("Nuevo").
2. En el campo __Nome__ ("Nombre"), rellene con `VendorsIndex`.
3. Marque la opción __Valores únicos__.
4. En __Entidade de Dados__, seleccione `Vendors`.
5. En __Composição de campos__ ("Composición de campos"), escriba `user`.
6. Haga clic en __Salvar__ ("Guardar").
7. En la pantalla de la pestaña __Índices__, haga clic en el __disquete azul__ en el lado izquierdo de la línea del índice `VendorsIndex`.
8. Usted recibirá un mensaje del Master Data confirmando que el índice se ha configurado correctamente. Haga clic en __OK__.

## Creación de formularios en Master Data

Después de crear las entidades y sus estructuras de datos, ya se puede crear los formularios necesarios en el Master Data. Para ello, siga los pasos abajo:

### Formulario de Vendedores

1. Acceda al módulo __Master Data__.
2. Haga clic en el botón __Criar aplicação__ ("Crear aplicación").
3. En el cuadro __Configurações__ ("Configuración"), haga clic en __Formularios__.
4. Haga clic en el botón __Novo__ ("Nuevo"), en la esquina superior izquierda de la pantalla.
5. En el campo __Nome__ ("Nombre"), llene con `Vendedores`.
6. En __Entidade de Dados__, seleccione `Vendor`.
7. Se abrirá la pestaña __Campo da Listagem__ ("Campo del Listado"). Seleccione los campos __Id do Registro__ ("ID del registro"), __Loja__ ("Tienda") y __Usuario__.
8. En la pestaña __Schema de Layout__, haga clic en el botón __Incluir nova seção__ ("Incluir nueva sección"), en el lado derecho de la pantalla.
9. En el campo __Nome__ ("Nombre") de la Sección 1, escriba `Vendedor`.
10. En el cuadro __Campos disponíveis__ ("Campos disponibles"), haga clic y arrastre los campos __Nome__, __Usuário__ y __Loja__ para los __Campos de la columna 1__.
11. Haga clic en __Salvar__.

### Formulario de Tiendas

1. Acceda al módulo __Master Data__.
2. Haga clic en el botón __Criar aplicação__ ("Crear aplicación").
3. En el cuadro __Configurações__ ("Configuración__"), haga clic en __Formularios__.
4. Haga clic en el botón __Novo__ ("Nuevo"), en la esquina superior izquierda de la pantalla.
5. En el campo __Nome__ ("Nombre"), rellene con `Tiendas`.
6. En __Entidade de dados__, seleccione `Stores`.
7. Se abrirá la pestaña __Campo da Listagem__ ("Campo del Listado"). Seleccione los campos __Id do Registro__, __Name__, __Address__, __Number__, __Neighborhood__, __City__, __State__, __Longitude__, __Latitude__, __Trade Policy__, __ID da Loja__, __ID do Documento__, __Postal Code__, __Country__, __ecommerce Seller ID__, __Store Seller ID__.
8. En la pestaña __Schema de Layout__, haga clic en el botón __Incluir nova seção__ ("Incluir nueva sección"), en el lado derecho de la pantalla.
9. En el campo __Nome da Seção 1__ ("Nombre de la Sección 1"), escriba `Store`.
10. En el cuadro __Campos disponíveis__ ("Campos disponibles"), haga clic y arrastre los campos __Name__, __Nome da Loja__, __Postal Code__, __Address__, __Number__, __Complement__, __Neighborhood__, __City__, __State__ e __Country__ para los __Campos de la columna 1__.
11. En el cuadro __Campos disponíveis__, haga clic y arrastre los campos __Trade Policy__, __Store Seller ID__ y __ecommerce Seller ID__ para los __Campos de la columna 2__.
12. Haga clic en __Salvar__ ("Guardar").

<hr>

Estos formularios tardan unos minutos en aparecer después de que se crean. Haga clic en la pestaña __Aplicações__ ("Aplicaciones") para comprobar que los formularios ya están apareciendo en la pantalla. Si todavía no han aparecido, usted puede hacer clic en __Recarregar Aplicações__ ("Recargar aplicaciones") o __Atualizar a página__ ("Actualizar la página") y comprobar que los formularios ya están disponibles. Una vez que aparezcan, usted ya podrá registrar las tiendas físicas y los vendedores.
