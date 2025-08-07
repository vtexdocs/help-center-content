---
title: 'Tabela de medidas do Mercado Livre'
id: 5dCc9IJ83SjllG75BVCWnr
status: PUBLISHED
createdAt: 2024-07-23T20:28:35.058Z
updatedAt: 2024-10-28T16:30:52.006Z
publishedAt: 2024-10-28T16:30:52.006Z
firstPublishedAt: 2024-07-23T21:11:23.954Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: mercado-libre-size-chart
legacySlug: tabela-de-medidas-do-mercado-livre
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A Tabela de medidas permite que os clientes saibam o tamanho aproximado do seu produto, proporcionando uma melhor experiência no momento de selecionar o tamanho de um produto. Ao informar detalhadamente as medidas do seu produto, você evita devoluções e reclamações por tamanho errado.  

Ao receber menos devoluções de seus produtos, sua reputação no Mercado Livre melhora e exposição dos seus produtos. A tabela de medidas está disponível para produtos das categorias de __calçados, top clothes e bottom clothes.__ As medidas são feitas em centímetros (cm).  

A tabela de medidas é personalizável, ou seja, é possível selecionar opções de tabelas conforme a sua necessidade, com as medidas aproximadas de cada tamanho do produto disponível.   

## Adicionar tabela personalizada

Para adicionar a tabela de medidas personalizada, você deve seguir os passos abaixo:  

1. Acesse o Admin VTEX vá em  __Marketplace > Marketplaces e Integrações.__  
2. Selecione a integração com o Mercado Livre.  
3. Selecione a opção `Realizar mapeamento`. Uma nova janela será aberta com a interface de mapeamento.  
4. Selecione a categoria que deseja enviar uma Tabela de medida.  
5. Na seção __Tabela de medida,__ clique no ícone +.   
6. Selecione a opção __Tabela personalizada.__  
7. Preencha um nome válido para sua tabela no campo __Nome da tabela.__  
8. No campo __Domínio,__ selecione a opção para sua tabela personalizada.  
9. No campo __Gênero,__ selecione a opção correspondente ao gênero do produto.  
  Existem cinco tipos de gêneros diferentes:
    - __Feminino__  
    - __Masculino__  
    - __Meninas__  
    - __Meninos__  
    - __Bebês__ 
    - __Sem gênero__  
    - __Sem gênero infantil__  

10. No campo **Tipo de medidas,** escolha uma opção do tipo de medida disponibilizada na planilha. Existem três tipos:
    - **Medidas corporais**  
    - **Medidas da peça**  
    - **Ambas as medidas**  
12. No campo __Tamanho principal,__ escolha uma opção de modelo de tabela. Existem cinco modelos diferentes:  
    - __BR:__ utiliza os tamanhos padrões de tamanho no Brasil.  
    - __Tamanho da marca:__ utiliza os tamanhos padrões da marca do produto selecionado.  
    - __US:__ utiliza as medidas padrões de tamanho nos Estados Unidos. As medidas podem variar de acordo com o gênero.  
    - __EU:__ utiliza as medidas padrões de tamanho na União Europeia.  
    - __UK:__ utiliza as medidas padrões de tamanho no Reino Unido.  
13. No campo __Template,__ clique em CSV. Você realizará o download de um template de tabela que precisa ser preenchido conforme as instruções da seção [Preencher o template da Tabela de Medidas](#preencher-o-template-da-tabela-de-medidas).  

## Preencher o template da Tabela de medidas

Para cada categoria mapeada, é necessário enviar uma __Tabela de medidas__ e todas as colunas da tabela devem ser preenchidas. Caso você opte por não informar ou utilizar algumas das medidas padrões, preencha com um `-`.  

Nesse template, você deverá configurar as colunas e preencher com os valores dos tamanhos e medidas em centímetros dos respectivos tamanhos.  

Para configurar automaticamente a planilha acesse __Dados > Texto para colunas,__ selecione a opção __Delimitado,__ clique em Avançar. No campo __Delimitadores,__ selecione a opção __Vírgula,__ clique em __Avançar,__ e finalize clicando em __Concluir.__

### Tabela de calçados

O template da tabela de medidas para calçados possui as seguintes colunas:  

| **Coluna** | **Descrição** | **Preenchimento** |
|:---:|:---:|:---:|
| **Foot Length** | Medida em centímetros do tamanho do pé | Preencha cada linha com a medida em centímetros dos tamanhos que serão preenchidos nas próximas colunas. Por exemplo, 45 cm |
| **Foot Length to** | Medida em centímetros do tamanho máximo que o pé deve ter para se acomodar no respectivo tamanho | Preencha cada linha com a medida em centímetros dos tamanhos máximos que serão preenchidos nas próximas colunas. Por exemplo, 50 cm.  |
| **Manufacturer Size** | Número da medida padrão de tamanho da marca do produto selecionado | Preencha cada linha com a medida padrão da marca do produto |
| **BR Size** | Número da medida padrão de tamanho no Brasil | Preencha cada linha com o tamanho correspondente seguido de BR. Por exemplo, 38 BR |
| **US Size** | Número da medida padrão de tamanho nos Estados Unidos. As medidas podem variar de acordo com o gênero | Preencha cada linha com o tamanho correspondente seguido de US. Por exemplo, 24 US  |
| **EU Size** | Número da medida padrão de tamanho na União Europeia | Preencha cada linha com o tamanho correspondente seguido de EU. Por exemplo, 40 EU |
| **UK Size** | Número da medida padrão de tamanho no Reino Unido. | Preencha cada linha com o tamanho correspondente seguido de UK. Por exemplo, 12 UK |

### Tabela top clothes

O template da tabela de medidas para roupas da parte superior possui as seguintes colunas:  

| **Coluna** | **Descrição** | **Preenchimento** |
|:---:|:---:|:---:|
| **Size** | Tamanho da roupa. | Preencha cada linha com os tamanhos da roupa. Por exemplo, GG. |
| **Filtrable_size** | Tamanho filtrável disponível para a categoria. | Preencha cada linha com o tamanho disponível para filtro. Por exemplo, XG. |
| **Chest_circumference_from** | Circunferência do peito (tórax) - início do intervalo de medidas. | Preencha cada linha com a medida mínima em centímetros do tamanho do tórax. Por exemplo, 80 cm. |
| **Chest_circumference_to** | Circunferência do peito (tórax) - final do intervalo de medidas. | Preencha cada linha com a medida máxima em centímetros do tamanho do tórax. Por exemplo, 88 cm. |
| **Waist_circumference_from** | Circunferência da cintura - início do intervalo de medidas. | Preencha cada linha com a medida mínima da largura da cintura em centímetros. Por exemplo, 70 cm. |
| **Waist_circumference_to** | Circunferência da cintura - fim do intervalo de medidas. | Preencha cada linha com a medida máxima da largura da cintura em centímetros. Por exemplo, 77 cm. |
| **Person_height_from** | Altura da pessoa - início do intervalo de medidas. | Preencha cada linha com a medida mínima da altura de uma pessoa em centímetros. Por exemplo, 168 cm. |
| **Person_height_to** | Altura da pessoa - fim do intervalo de medidas. | Preencha cada linha com a medida mínima da altura de uma pessoa em centímetros. Por exemplo, 178 cm. |
| **Hip_circumference_from** | Circunferência do quadril - início do intervalo de medidas. | Preencha cada linha com a medida mínima da largura do quadril em centímetros. Por exemplo, 109 cm. |
| **Hip_circumference_to** | Circunferência do quadril - fim do intervalo de medidas. | Preencha cada linha com a medida máxima da largura do quadril em centímetros. Por exemplo, 119 cm. |
| **Neck_circumference_from** | Circunferência do pescoço - início do intervalo de medidas. | Preencha cada linha com a medida mínima da largura do pescoço em centímetros. Por exemplo, 35 cm. |
| **Neck_circumference_to** | Circunferência do pescoço - fim do intervalo de medidas. | Preencha cada linha com a medida mínima da largura do pescoço em centímetros. Por exemplo, 38 cm. |

### Tabela bottom clothes

O template da tabela de medidas para roupas da parte inferior possui as seguintes colunas:

| **Coluna** | **Descrição** | **Preenchimento** |
|:---:|:---:|:---:|
| **Size** | Tamanho da roupa. | Preencha cada linha com os tamanhos da roupa. Por exemplo, GG. |
| **Filtrable_size** | Tamanho filtrável disponível para a categoria. | Preencha cada linha com o tamanho disponível para filtro. Por exemplo, 44. |
| **Waist_circumference_from** | Circunferência da cintura - início do intervalo de medida. | Preencha cada linha com a medida mínima da largura da cintura em centímetros. Por exemplo, 70 cm. |
| **Waist_circumference_to** | Circunferência da cintura - fim do intervalo de medida. | Preencha cada linha com a medida máxima da largura da cintura em centímetros. Por exemplo, 77 cm. |
| **Hip_circumference_from** | Circunferência do quadril - início do intervalo de medida. | Preencha cada linha com a medida mínima do tamanho do quadril em centímetros. Por exemplo, 109 cm. |
| **Hip_circumference_to** | Circunferência do quadril - fim do intervalo de medida. | Preencha cada linha com a medida máxima do tamanho do quadril em centímetros. Por exemplo, 115 cm. |
| **Length_from_inseam_to_ankle_from** | Comprimento da perna, medido a partir da virilha até o tornozelo - início do intervalo de medida. | Preencha cada linha com a medida mínima do tamanho da perna em centímetros. Por exemplo, 75 cm. |
| **Length_from_inseam_to_ankle_to** | Comprimento da perna, medido a partir da virilha até o tornozelo - fim do intervalo de medida. | Preencha cada linha com a medida máxima do tamanho da perna em centímetros. Por exemplo, 85 cm. |
| **Length_from_waist_to_ankle_from** | Comprimento da perna, medido a partir da cintura até o tornozelo - início do intervalo de medida. | Preencha cada linha com a medida mínima do tamanho da perna em centímetros. Por exemplo, 80 cm. |
| **Length_from_waist_to_ankle_to** | Comprimento da perna, medido a partir da cintura até o tornozelo - fim do intervalo de medida. | Preencha cada linha com a medida máxima do tamanho da perna em centímetros. Por exemplo, 88 cm. |
| **Thigh_circumference_from** | Circunferência da coxa - início do intervalo de medida. | Preencha cada linha da coluna com a medida mínima do tamanho da coxa em centímetros. Por exemplo, 50 cm. |
| **Thigh_circumference_to** | Circunferência da coxa - fim do intervalo de medida. | Preencha cada linha da coluna com a medida máxima do tamanho da coxa em centímetros. Por exemplo, 58 cm. |
| **Person_height_from** | Altura da pessoa - início do intervalo de medidas. | Preencha cada linha com a medida mínima da altura de uma pessoa em centímetros. Por exemplo, 188 cm. |
| **Person_height_to** | Altura da pessoa - fim do intervalo de medidas. | Preencha cada linha com a medida mínima da altura de uma pessoa em centímetros. Por exemplo, 193 cm. |

<div class="alert alert-info">
  É necessário utilizar espaço entre o número e a medida (cm), separar os números utilizando pontos (.), preencher todas as colunas com o tamanho do corpo, e conferir se os campos <b>Gênero</b> e <b>Tamanho</b> foram selecionados corretamente.
  </div>

## Fazer upload da Tabela de medidas

Após preencher a planilha de mapeamento, faça o seu upload:  

1. Acesse o Admin VTEX > __Marketplace > Marketplaces e Integrações.__  
2. Selecione a integração com o Mercado Livre.  
3. Selecione a opção `Realizar mapeamento`. Uma nova janela será aberta com a interface de mapeamento.  
4. Na seção __Tabela de medida,__ clique no ícone +.   
5. Selecione a opção Tabela personalizada.  
6. Clique em `Escolha um arquivo`.  
7. Selecione o arquivo da planilha que você preencheu.  
8. Clique em `Adicionar`.   

Ao finalizar, sua tabela de medida personalizada terá sido criada com sucesso.  

<div class="alert alert-info">
  Caso ocorra algum erro, o problema será indicado na tela de upload. O erro deve ser resolvido e o upload deverá ser realizado novamente.
  </div>
