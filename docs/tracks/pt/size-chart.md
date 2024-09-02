---
title: 'Guia de tamanhos'
id: 4z0rWTM8tdYV5QeyP6JIxx
status: DRAFT
createdAt: 2020-10-13T17:43:29.309Z
updatedAt: 2021-08-30T13:11:11.443Z
publishedAt: 
firstPublishedAt: 2020-10-14T14:47:28.848Z
contentType: trackArticle
productTeam: Channels
slug: guia-de-tamanhos
locale: pt
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugPT: configurar-integracao-do-mercado-livre
---

Ao comprar roupas ou calçados on-line, muitos usuários costumam ter dúvidas sobre as medidas do produto. O guia de tamanhos é a melhor alternativa para reduzir incertezas e oferecer informações precisas aos seus compradores sobre o item que desejam adquirir.

O guia de tamanhos do Mercado Livre é uma tabela de medidas ou equivalências que permite aos usuários visualizar as medidas exatas para que possam escolher o produto que melhor se adaptem. 

![MLB tamanos1](https://images.ctfassets.net/alneenqid6w5/3kHkmPhrh50s9QhJQurtcD/f4ca7decdd70609953dbd842b55c24f7/MLB_tamanos1.gif)

## Entendendo o guia de tamanhos

Para criar um guia de tamanhos e associá-lo aos anúncios publicados é necessário utilizar a [Planilha de Mapeamento](https://drive.google.com/uc?export=download&id=10RCqLbKs0YXTJR-M5Iv3lFulZ5_zCAlz) como base. A planilha possui 2 abas, a primeira chamada Mapeamento, e a  segunda chamada *Guia de tamanhos*. 

A primeira aba já foi enviada para o Mercado Livre na etapa de [Mapeamento de categorias, variações e atributos](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA). Para enviar o guia de tamanhos, basta reenviar a planilha de mapeamento com a segunda aba preenchida.

A aba Guia de tamanhos contém as seguintes colunas:

| Nome da coluna | Descrição |
| ---------- | ---------- |
| CategoryID | ID da Categoria na VTEX |
| TableName | Nome do guia de tamanhos no Mercado Livre | 
| SizeName | Tamanho que será preenchido no guia | 
| Column | Coluna que será preenchida no guia |
| Value | Valor que será preenchido no guia |

## Categorias 

A primeira etapa do preenchimento é fazer a escolha das categorias da sua loja que serão vinculadas aos guias de tamanhos. Escolha categorias de Moda e Vestuário, como *Camisetas, Calçados e Vestidos*.

Feita a escolha das categorias, preencha a coluna `CategoryID` com o ID da Categoria na VTEX. Você consegue encontrá-lo ao lado do Nome da Categoria, ao navegar pela árvore de categorias disponível em *Produtos > Catálogo > Categorias*.

## Tabelas

Na segunda etapa do preenchimento escolha os nomes que deseja dar para as suas tabelas. Você deve definir um nome para cada tabela que será criada. É possível vincular a mesma tabela a várias categorias. A imagem abaixo ilustra como este nome aparece na criação manual no Mercado Livre - neste caso, a tabela seria Camisetas esportivas.

![Screen Shot 2020-10-06 at 12.07.57](https://images.ctfassets.net/alneenqid6w5/1gGCEZMpgye7A26vQF2faX/61530c84cd32534c8ec26f92a19bde52/Screen_Shot_2020-10-06_at_12.07.57.png)

Feita a escolha das tabelas, preencha a coluna `TableName` com o nome do guia de tamanhos que será usado para cada categoria.

## Tamanhos

Na terceira etapa do preenchimento escolha o nome que desejar dar para os tamanhos da sua tabela. A imagem abaixo ilustra como estes tamanhos aparecem na criação manual no Mercado Livre - neste caso, os tamanhos seriam P e M.

![Screen Shot 2020-10-06 at 12.08.39](https://images.ctfassets.net/alneenqid6w5/6KvJFDknNoKqgL32Rs9R58/9f29afbc7690b6e67bde3201e88112b0/Screen_Shot_2020-10-06_at_12.08.39.png)

Feita a escolha das tabelas, preencha a coluna `SizeName` com o nome dos tamanhos que serão usados para cada guia de tamanhos. 

## Colunas

Na quarta etapa do preenchimento é definir as colunas que gostaria de incluir no guia de tamanhos.  A imagem abaixo ilustra como estes tamanhos aparecem na criação manual no Mercado Livre - note que é possível vincular até 5 colunas por tabela.

![Screen Shot 2020-10-06 at 12.07.49](https://images.ctfassets.net/alneenqid6w5/190jdCD4Tgmp6xGfLm0nlT/c387fda654105b81532fcc79e64087da/Screen_Shot_2020-10-06_at_12.07.49.png)

Na planilha de mapeamento, é necessário utilizar códigos específicos para indicar as colunas que devem ser incluídas no Guia de Tamanhos:

| Tipo | Coluna | Código |
| ---------- | ---------- | ---------- |
| Medidas do corpo | Altura (cm) | CHILD_HEIGHT |
| Medidas do corpo | Comprimento da perna (cm) | INSEAM_LENGTH |
| Medidas do corpo | Comprimento do pé (cm) | FOOT_LENGTH |
| Medidas do corpo | Cintura (cm) | WAIST_CIRCUMFERENCE |
| Medidas do corpo | Peito (cm) | CHEST_CIRCUMFERENCE |
| Medidas do corpo | Pescoço (cm) | NECK_CIRCUMFERENCE |
| Medidas do corpo | Quadril (cm) | HIP_CIRCUMFERENCE |
| Medidas do corpo | Largura do pé (cm) | FOOT_WIDTH |
| Medidas do corpo | Peso (kg) | WEIGHT | 
| Medidas da peça | Manga (cm) | SLEEVE_LENGTH |
| Medidas da peça | Comprimento (cm) | TOTAL_LENGTH |
| Correspondências de tamanho | BR | BR_EQUIVALENCE |
| Correspondências de tamanho | EUA | US_EQUIVALENCE |
| Correspondências de tamanho | EUR | EUR_EQUIVALENCE |
| Correspondências de tamanho | UK | UK_EQUIVALENCE |

Feita a escolha das colunas, preencha a coluna Column com o nome dos tamanhos que serão usados para cada guia de tamanhos. 

## Valores 

Na quinta etapa do preenchimento insira os valores para cada um dos atributos definidos na etapa anterior na coluna Value. Cada tamanho deve ter todas as colunas preenchidas. Confira as unidades que se aplicam a cada coluna preenchida.

## Exemplo

Neste exemplo, faremos o preenchimento da aba Guia de tamanhos para dois tipos de produtos: Camisetas e Tênis.

### Etapa 1: Categorias

Nesta etapa, identificamos as categorias que terão guias de tamanho. Suponha que sua árvore de categorias na VTEX esteja organizada desta forma:

- Roupas (22) > Camisetas (23)
- Calçados (24) > Tênis (25)

Como pretendemos criar guias de tamanhos para Camisetas e Tênis, precisamos encontrar o ID dessas categorias. Considerando que os números entre parênteses representam o ID da Categoria, os números 23 e 25 devem ser inseridos na planilha de mapeamento.  

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | | | | | 
| 25 | | | | | 

### Etapa 2: Tabelas

Nesta etapa, escolhemos o nome dos guias de tamanhos para Camisetas e Tênis.

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | Tamanhos de camiseta | | | | 
| 25 | Tamanhos de tênis | | | | 

### Etapa 3: Tamanhos

Nesta etapa, incluímos dois tamanhos de camiseta e dois tamanhos de tênis (padrão EUA). É preciso criar uma nova linha para cada tamanho, reaproveitando os valores das colunas já preenchidas.

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | Tamanhos de camiseta | M | | | 
| 23 | Tamanhos de camiseta | G | | | 
| 25 | Tamanhos de tênis | 9.5 | | | 
| 25 | Tamanhos de tênis | 11 | | | 

### Etapa 4: Colunas

Nesta etapa, escolhemos duas colunas para cada tabela. É preciso criar uma nova linha para cada coluna, reaproveitando os valores das colunas já preenchidas.

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | Tamanhos de camiseta | M | CHEST_CIRCUMFERENCE | | 
| 23 | Tamanhos de camiseta | M | TOTAL_LENGTH | |
| 23 | Tamanhos de camiseta | G | CHEST_CIRCUMFERENCE | | 
| 23 | Tamanhos de camiseta | G | TOTAL_LENGTH | |
| 25 | Tamanhos de tênis | 9.5 | BR_EQUIVALENCE | | 
| 25 | Tamanhos de tênis | 9.5 | FOOT_LENGTH | | 
| 25 | Tamanhos de tênis | 11 | BR_EQUIVALENCE | | 
| 25 | Tamanhos de tênis | 11 | FOOT_LENGTH | | 

### Etapa 5: Valores

Nesta etapa, preenchemos cada linha com os valores correspondentes.

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | Tamanhos de camiseta | M | CHEST_CIRCUMFERENCE | 25 | 
| 23 | Tamanhos de camiseta | M | TOTAL_LENGTH | 35 |
| 23 | Tamanhos de camiseta | G | CHEST_CIRCUMFERENCE | 25 | 
| 23 | Tamanhos de camiseta | G | TOTAL_LENGTH | 55 |
| 25 | Tamanhos de tênis | 9.5 | BR_EQUIVALENCE | 41 | 
| 25 | Tamanhos de tênis | 9.5 | FOOT_LENGTH | 27,5 | 
| 25 | Tamanhos de tênis | 11 | BR_EQUIVALENCE | 43 | 
| 25 | Tamanhos de tênis | 11 | FOOT_LENGTH | 29 | 

## Fazendo upload

Após o preenchimento da segunda aba, é necessário reenviar a planilha de mapeamento. Siga os passos a seguir: 

Ao concluir as etapas de preenchimento da planilha de mapeamento, você deve seguir os passos abaixo para fazer o upload da planilha:

1. Acesse o Admin.
2. No módulo Marketplace, clique em Integrações.
3. Selecione a opção Configurações.
4. Na integração Mercado Livre, clique na engrenagem<img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
5. Escolha a opção **Upload do mapeamento**.
6. Selecione a opção **Escolher um arquivo**.
7. Agora, selecione a planilha de mapeamento de categorias, atributos e variações do Mercado Livre.
8. Clique em **Enviar arquivo**.

## Ativando o guia de tamanhos

Agora, é necessário acessar sua conta do Mercado Livre para ativar o guia de tamanhos. Você deverá seguir os passos abaixo: 

1. Acessar sua conta no Mercado Livre.
2. Clique na opção **Vendas**.
3. No menu no canto esquerdo, selecione a opção **Anúncios**.
4. Clique nos 3 pontos <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/5h4riyTF3EAYAM2e04up4O/73040d1e9e6892c6feea96a9bcc6560e/3_pontos.JPG" />
5. Selecione a opção **Alterar**.
6. Na opção Guia de Tamanhos, selecione a tabela que você criou.
7. Clique em **Confirmar**.

![Início (2)](https://images.ctfassets.net/alneenqid6w5/4hTDDEGYuZscACtdLiYNhW/d8781adfeab2a6c7326fba9aed7aa52b/Mercado_Livre_Brasil.gif)
