---
title: Mapear categorias e atributos dos produtos para o Mercado Livre
id: 5XNeiye4rS4oao2MueSUeA
status: PUBLISHED
createdAt: 2018-08-13T12:58:18.100Z
updatedAt: 2022-09-05T19:01:28.441Z
publishedAt: 2022-09-05T19:01:28.441Z
firstPublishedAt: 2018-08-13T14:27:50.859Z
contentType: trackArticle
productTeam: Channels
slug: mapear-categorias-e-atributos-dos-produtos-para-o-mercado-livre-mapper
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugPT: configurar-integracao-do-mercado-livre
---

Feita a integração entre a sua loja e o Mercado Livre, é possível enviar os produtos para o catálogo do marketplace. Para agilizar o processo de catalogação dos seus produtos e permitir que eles fiquem disponíveis para venda em menos tempo, você precisará realizar o mapeamento entre as características dos produtos na sua loja VTEX e as características dos mesmos produtos na sua loja no marketplace.

Para enviar os seus produtos para o Mercado Livre, você deverá: 

1. [Mapear as categorias dos produtos](#mapear-categorias)
2. [Mapear os atributos dos produtos](#mapear-atributos)

<div class = "alert alert-info">
Seus produtos precisam ter o <a href="https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">Estoque</a> e <a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP">Preço</a> configurados antes de enviá-los ao Mercado Livre.
</div>

## Mapear categorias

Para acessar a página de mapeamento, você deverá acessar no Admin *MARKETPLACE > Integrações > Configurações*, dentro do card da integração com o Mercado Livre selecionar o ícone de engrenagem <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" /> e clicar na opção `Realizar mapeamento`.

Você será direcionado à página de mapeamento do Mercado Livre e a página apresentará uma lista com as categorias da sua loja VTEX. O mapeamento das categorias permite que exista uma correspondência entre as categorias da sua loja e as categorias do Mercado Livre. Dessa forma, os produtos enviados serão exibidos na categoria equivalente no Mercado Livre.

Na página de mapeamento, existe uma barra de busca que permite buscar a categoria por nome. Além disso, a seção **Categorias da loja** exibe lista das categorias da sua loja VTEX. 

A lista de categorias da sua loja VTEX inclui o status de seu  mapeamento  por meio dos ícones:

| Ícone | Status | Descrição |
| ---------- | ---------- | ---------- | 
| <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/6Ry65cPvgGmChmE3RipFio/deec73c3e429f63dfa8971ae8c848221/mapeado_mapper.JPG" /> | **Mapeado**| Indica que o mapeamento da categoria foi concluído. | 
| <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/6v4eFsWHVy8F5VIqTVLQD9/e63d945d60a958a37246f57d919eede8/mapeamentoincompleto_mapper.JPG" /> | **Mapeamento incompleto** | A categoria está parcialmente mapeada, necessitando preencher seus atributos obrigatórios, indicados por meio de um asterisco, para mapeá-la. | 
| <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/lsN6TxCm1e6frHvIQ8xjt/491ad1e6d99ab858e2a76d0ea31e1a39/erromapeamento_mapper.JPG" /> | **Erro no mapeamento** | O erro no mapeamento ocorre quando o marketplace exclui ou muda a categoria do produto.  Para solucionar esse problema basta refazer o mapeamento da categoria. | 
| <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/3nVJUJHetaqPHThGGpoG8T/d7f667b269105a5c65aa7b16b1aace21/incompleto_mapper.JPG" /> | **Não mapeado** | Indica que a categoria não foi mapeada. |

Ainda na página de mapeamento, existem as seções **Categoria do marketplace** e **Mapeamento de Atributos**, ambos com uma opção de menu de seleção, onde ao clicar sobre a seta, aparecem novos campos e informações.

Para realizar o mapeamento de categorias:

1. Acesse o Admin.
2. No módulo MARKETPLACE, selecione **Integrações** e clique em `Configurações`.
3. No cartão do Mercado Livre, clique na engrenagem <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
4. Clique em `Realizar mapeamento`. Uma nova janela será aberta com a página de mapeamento.
5. Na seção **Categorias da loja**, escolha a categoria que deseja mapear.
6. Selecione na seção **Categoria do marketplace** a categoria correspondente no marketplace do produto que você deseja enviar.

Para finalizar o mapeamento da categoria, você deve seguir o passo a passo abaixo a partir do passo 6 para finalizar.

## Mapear atributos

![Início (13)](https://images.ctfassets.net/alneenqid6w5/owf1A0SnYfOkoNCGDlTFj/ca731b95328853d12ee9872ef14b8aaf/In__cio__13_.gif)

O mapeamento dos atributos permite que exista uma correspondência entre o padrão da sua loja VTEX e o padrão utilizado pelo Mercado Livre. Cada categoria possui seus atributos obrigatórios pelo Mercado Livre e é necessário preenchê-los para que o mapeamento seja concluído. Os campos não mapeados não impedem que o mapeamento ocorra, porém quanto mais atributos enviados para o Mercado Livre seu produto tiver, melhor rankeado ele será no marketplace.

Para mapear os atributos, siga os passos abaixo:

1. Acesse o Admin.
2. No módulo MARKETPLACE, selecione **Integrações** e clique em `Configurações`.
3. No cartão do Mercado Livre, clique na engrenagem <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
4. Clique em `Realizar mapeamento`. Uma nova janela será aberta com a página de mapeamento.
5. Na seção **Mapeamento de Atributos**, preencha os campos com os atributos que deseja mapear (o asterisco indica preenchimento obrigatório).
6. Caso tenha preenchido os atributos *Cor* ou *Tamanho*, na coluna **Valores de Atributo** clique na `Cor equivalente` ou `Tamanho equivalente` e selecione a opção de valor correspondente.
7. Se desejar personalizar um atributo, clique no botão `Adicionar valor personalizado` e crie um nome para o valor do atributo personalizado.
8. Clique em `Salvar Alterações`.

Ao finalizar o mapeamento de categorias e atributos corretamente, o status da categoria mudará para **Mapeado** <img class="shadow-4" src="https://images.contentful.com/alneenqid6w5/6Zu9VaGjbucOthXQsFwTD1/8681ab7d7e4fd12b41daae3c69afd552/mapper_correto.JPG" /> e seus produtos serão anunciados no site do Mercado Livre.

### Tabela de medidas 

A Tabela de medidas permite que os clientes saibam o tamanho aproximado do seu produto, proporcionando uma melhor experiência no momento de selecionar o tamanho de um produto. Ao informar detalhadamente as medidas do seu produto, você evita devoluções e reclamações por tamanho errado.

Ao receber menos devoluções de seus produtos, sua reputação no Mercado Livre melhora e exposição dos seus produtos. A tabela de medidas está disponível para produtos da categoria `Calçados` e as medidas são feitas em centímetros (cm).

A tabela de medidas é personalizável, ou seja, é possível selecionar opções de tabelas de acordo com a sua necessidade, com as medidas aproximadas de cada tamanho do produto disponível. 

#### Adicionar tabela personalizada

Para adicionar a tabela de medidas personalizada, você deve seguir os passos abaixo:

1. Acesse o Admin VTEX.
2. Em *MARKETPLACE*, selecione a opção **Integrações** e clique em `Configurações`.
3. No cartão do Mercado Livre, clique na engrenagem <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
4. Selecione a opção `Realizar mapeamento`. Uma nova janela será aberta com a interface de mapeamento.
5. Na seção Tabela de medida, clique no ícone `+`.
6. Selecione a opção *Tabela personalizada*.
7. Preencha um nome válido para sua tabela no campo **Nome da tabela**.
8. No campo **Domínio** selecione a opção para sua tabela personalizada.
9. No campo **Gênero**, selecione a opção correspondente ao gênero do produto.Existem cinco tipos de gêneros diferentes:
   * **Mulheres**
   * **Homens**
   * **Meninas**
   * **Meninos**
   * **Sem gênero**
10. No campo **Tamanho principal**, escolha uma opção de modelo de tabela. Existem cinco modelos diferentes:
    * **BR:** utiliza os tamanhos padrões de tamanho no Brasil.
    * **Tamanho da marca:** utiliza os tamanhos padrões da marca do produto selecionado.
    * **US:** utiliza as medidas padrões de tamanho nos Estados Unidos. As medidas podem variar de acordo com o gênero.
    * **EU:** utiliza as medidas padrões de tamanho na União Europeia.
    * **UK:** utiliza as medidas padrões de tamanho no Reino Unido.
11. No campo **Template**, clique em `CSV`. Você realizará o download de um template de tabela que precisa ser preenchido conforme as instruções da seção Preencher o template da Tabela de Medidas.

#### Preencher o template da Tabela de Medidas

Durante o preenchimento, todas as colunas devem ser preenchidas. Caso você opte por não informar ou utilizar algumas das medidas padrões, preencha com um `-`.

Nesse template, você deverá configurar as colunas e preencher com os valores dos tamanhos e medidas em centímetros dos respectivos tamanhos.

Para configurar automaticamente a planilha acesse *Dados > Texto* para colunas, selecione a opção **Delimitado**, clique em Avançar. No campo **Delimitadores**, selecione a opção *Vírgula*, clique em `Avançar`, e finalize clicando em `Concluir`.

O template da tabela de medidas possui as seguintes colunas:

| **Colunas** | **Descrição** | **Preenchimento** |
| ---------- | ---------- | ---------- |
| **Foot Length** | Medida em centímetros do tamanho | Preencha cada linha com a medida em centímetros dos tamanhos que serão preenchidos nas próximas colunas |
| **Manufacturer Size** | Número da medida padrão de tamanho da marca do produto selecionado | Preencha cada linha com a medida padrão da marca do produto |
| **Foot Length to** | Medida em centímetros do tamanho máximo que o pé deve ter para se acomodar no respectivo tamanho | Preencha cada linha com a medida em centímetros dos tamanhos máximos que serão preenchidos nas próximas colunas |
| **BR Size** | Número da medida padrão de tamanho no Brasil | Preencha cada linha com o tamanho correspondente seguido de BR. Por exemplo, 38 BR |
| **X-US Size** | Número da medida padrão de tamanho nos Estados Unidos. As medidas podem variar de acordo com o gênero | Preencha cada linha com o tamanho correspondente seguido de US. Por exemplo, 24 US |
| **EU Size** | Número da medida padrão de tamanho na União Europeia | Preencha cada linha com o tamanho correspondente seguido de EU. Por exemplo, 38 EU |
| **UK Size** | Número da medida padrão de tamanho no Reino Unido | Preencha cada linha com o tamanho correspondente seguido de UK. Por exemplo, 12 UK |

<div class = "alert alert-info">
Importante reforçar a necessidade de utilizar “espaço” entre o número e a medida (cm), separar os números utilizando pontos (.), preencher todas as colunas e conferir se os campos <b>Gênero</b> e <b>Tamanho</b> foram selecionados corretamente.
</div>

#### Fazer upload da tabela de medidas

Depois de preencher a planilha de mapeamento, faça o seu upload:

1. Acesse o Admin VTEX.
2. Em *MARKETPLACE*, selecione a opção **Integrações** e clique em `Configurações`.
3. No cartão do Mercado Livre, clique na engrenagem <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
4. Selecione a opção `Realizar mapeamento`. Uma nova janela será aberta com a interface de mapeamento.
5. Na seção Tabela de medida, clique no ícone `+`.
6. Selecione a opção *Tabela personalizada*.
7. Clique em `Escolha um arquivo`.
8. Selecione o arquivo do template da planilha.
9. Clique em `Adicionar`.

Ao finalizar, sua tabela de medida personalizada terá sido criada com sucesso.

<div class = "alert alert-info"> Caso ocorra algum erro, o problema será indicado para que seja resolvido e o upload deverá ser realizado novamente.</div>
