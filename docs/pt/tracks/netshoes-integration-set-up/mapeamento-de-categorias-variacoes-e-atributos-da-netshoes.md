---
title: 'Mapeamento de categorias, variações e atributos da Netshoes'
id: 1UpQGBTJQw4wimCeYSe8yc
status: PUBLISHED
createdAt: 2018-09-24T20:43:34.825Z
updatedAt: 2024-09-05T16:52:52.730Z
publishedAt: 2024-09-05T16:52:52.730Z
firstPublishedAt: 2018-09-27T15:03:03.255Z
contentType: trackArticle
productTeam: Channels
slugEN: mapping-categories-variations-and-attributes-in-netshoes
locale: pt
trackId: 5Ua87lhFg4m0kEcuyqmcCm
trackSlugPT: configurar-integracao-da-netshoes
---

Feitas as configurações iniciais para a integração com a Netshoes, agora vamos enviar os dados dos __atributos__ dos produtos para o marketplace. O envio dessas informações será feito por __upload da planilha de mapeamento__. 

Com essa feature, é possível categorizar corretamente seus produtos na Netshoes e também criar variações e atributos para eles.

O mapeamento deve ser feito sempre que um produto for enviado pela primeira vez à Netshoes. Isso significa que, já tendo feito o mapeamento uma vez, os produtos que já foram integrados não precisam passar por esse processo novamente. Da mesma forma, produtos novos devem sempre passar pelo mapeamento.

1. [Baixe aqui](https://assets.ctfassets.net/alneenqid6w5/72M0l4r65x5OjeQ2JxSjgu/49a93cfb64d87b70d1b9cc854d2ba3ac/Mapeamento.xlsx) a __Planilha de Mapeamento da Netshoes__ no formato `.xlsx`.
2. [Baixe aqui](https://assets.ctfassets.net/alneenqid6w5/6Nt1tM241rgrBeqwR6gVil/dc253c1da0076703150ceb8011c8c9c9/Atributos.xlsx) a __Planilha de Consulta da Netshoes__ para verificar os valores aceitos de acordo com cada coluna da Planilha de Mapeamento do passo anterior. Essa planilha é __exclusivamente para consulta__.

### Preenchendo a Planilha de Mapeamento

Os campos da **Planilha de Mapeamento** estão detalhados abaixo. Preencha-os de forma a realizar a correspondência _de/para_ entre os valores cadastrados na VTEX e os valores especificados na **Planilha de Consulta** da Netshoes.
<div class="alert alert-danger">
<strong>O uso de valores que não aparecem na Planilha de Consulta vai ocasionar um erro na integração.</strong> O preenchimento da Planilha de Mapeamento deve respeitar letras maiúsculas e minúsculas conforme elas aparecem na Planilha de Consulta.
</div>

*   **ID do SKU:** número de identificação do SKU. Se necessário, consulte [Descobrir o ID de um SKU](/pt/tutorial/descobrir-o-id-de-um-sku--4VQZsYeb3igGK2YowuEYWW).

*   **Departamento:** valor do Departamento ao qual seu produto corresponde na Planilha de Consulta da Netshoes.
<br/>Exemplo: se um produto está cadastrado na VTEX no Departamento _Moto_, na Planilha de Consulta o valor correspondente na coluna Departamento é _Motociclismo._

*   **Tipo de Produto:** identificação de qual o tipo do seu produto. Verifique na Planilha de Consulta os Tipos de Produto possíveis para um Departamento.
<br/>Exemplo: você está mapeando um tênis casual, portanto, de acordo com a Planilha de Consulta, no Departamento _Casual_ o Tipo de Produto correspondente é _Tênis._

*   **Marca:** nome da empresa associada comercialmente ao produto.
<br/>Exemplo: você está mapeando uma camisa da Nike. De acordo com a Planilha de Consulta, a coluna Marca deve ser preenchida com o valor _Nike_.
<div class="alert alert-danger">
Se a marca do seu produto não aparece na Planilha de Consulta, <strong>entre em contato com a Netshoes solicitando a inclusão da marca no sistema.</strong> Somente quando a Netshoes confirmar esse cadastro é que você poderá mapear a marca do produto. Caso contrário, haverá um erro na integração.
</div>

*   **Cor**: valor da coloração do seu produto.
<br/>Exemplo: você está mapeando um short azul e branco. De acordo com a Planilha de Consulta, a coluna Cor deve ser preenchida com o valor _Azul+Branco._

*   **Sabor**: descrição do gosto de um produto comestível.
<br/>Exemplo: você está mapeando um suplemento vitamínico sabor abacaxi e manga. De acordo com a Planilha de Consulta, a coluna Sabor deve ser preenchida com o valor _Abacaxi+Manga._

*   **Tamanho**: identificação da numeração do seu produto.
<br/>Exemplo: você está mapeando uma bermuda pequena. De acordo com a Planilha de Consulta, a coluna Tamanho deve ser preenchida com o valor P.

*   **Gênero**: descrição do público ao qual se destina seu produto, se ao público feminino, masculino ou ambos.
<br/>Exemplo: você está mapeando um sapato feminino. De acordo com a Planilha de Consulta, a coluna Gênero deve ser preenchida com o valor _Mulher._

*   **Departamento BS**: valor solicitado pela Netshoes para catalogar seus produtos mais rapidamente, utilizando o processo que eles chamam de Fast Lane. Os valores para preenchimento deste campo estão na coluna Atributos da Planilha de Consulta.
<br/>Exemplo: você está mapeando bijuterias. De acordo com a Planilha de Consulta, a coluna Departamento BS deve ser preenchida com o valor _Acessórios._
<div class="alert alert-info">
Em geral, o valor Departamento BS se encontra ao final dos Atributos de um Departamento.
</div>

### Outras Especificações

Existem alguns __outros__ atributos de produtos listados na aba "Atributos" da Planilha de Consulta que são __obrigatórios__, mas que __não__ são enviados através da Planilha de Mapeamento explicada no passo anterior.

Para enviar esses atributos, é necessário ter cadastrado na VTEX as [especificações do produto](/pt/tutorial/criando-um-campo-de-produto) indicadas como obrigatórias na Planilha de Consulta.

_`Ex:` um produto do Departamento __Basquete__, do Tipo de Produto __Tênis__, deve ter o Atributo `Altura do Cano` cadastrado como especificação de produto na VTEX. Nesse exemplo, os valores permitidos para o atributo são `Cano Alto`, `Cano Médio` e `Cano Baixo`. Se a especificação na VTEX não tiver os valores esperados pela Netshoes, o produto será rejeitado na integração._

### Fazendo o upload

Depois de preencher a planilha, acesse __Integrações__ no menu do Admin:

1. Clique em __Configurações__.
2. Busque pelo card da Netshoes e clique no __ícone de engrenagem__.
3. Em seguida, clique em __Upload de Mapeamento__.
4. Escolha a planilha com os dados e clique em __Enviar Arquivo__.

<div class="alert alert-warning">
<strong>OBS:</strong> caso a planilha tenha mais de 10 MB, será necessário separar o conteúdo da planilha em planihas menores de modo a reduzir o tamanho do arquivo.
</div>

Com o upload concluído, a integração envia automaticamente todos os produtos da planilha para a Netshoes.

__Pronto!__ Depois de cumprir mais essa etapa, sua loja já está completamente integrada com a Netshoes.
