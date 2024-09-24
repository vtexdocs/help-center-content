---
title: 'Integrar com Dafiti'
id: 5jgzjzBPeMcci6YYqcAsUe
status: ARCHIVED
createdAt: 2017-05-17T22:06:43.485Z
updatedAt: 2020-03-06T13:58:25.304Z
publishedAt: 
firstPublishedAt: 2017-05-18T18:01:22.411Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: how-to-integrate-with-dafiti
locale: pt
legacySlug: integrando-com-dafiti
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Este tutorial vai ensinar, passo a passo, como configurar a integração da sua loja com a Dafiti.

## Cadastro da integração da Dafiti

1.	No menu do Admin, clique em __Integrações__.
2.	Acesse o item __Configurações__.
3.	Busque pela caixa da __Dafiti__ e clique em __Integrar__.
4.	Preencha os __campos__ exibidos na tela. Abaixo, vamos detalhar como preencher cada um deles.
5.	Com tudo preenchido corretamente, clique no botão __Salvar Configuração__.


### Detalhamento dos campos

&bull; __Afiliado*:__ esse campo deve ser preenchido com um ID de [afiliado](/pt/faq/o-que-e-afiliado) que ainda não exista no cadastro de afiliados do Gerenciamento de Pedidos. O ID aceita apenas três dígitos (todos devem ser consoantes). Sugestão: `DFT`. Caso você tenha configurações de [integração para multidomínios](/pt/tutorial/como-criar-multiloja-multidominio), dê uma atenção especial ao ID do afiliado, porque esse campo deve ter um valor diferente para cada domínio. 

&bull; __Política comercial*:__ ID da política comercial que será utilizada para a integração com a Dafiti. São os produtos dessa política comercial que serão enviados para o marketplace.

&bull; __Chave de acesso*:__ esse campo deve ser preenchido com o __token__ de identificação da sua loja no marketplace. Essa informação é gerada diretamente no portal da Dafiti.

&bull; __Usuário*:__ preencha esse campo com o usuário gerado no portal da Dafiti.

&bull; __E-mail do afiliado*__: preencha com um e-mail.

&bull; __Permitir HTML na descrição do produto*:__ determina se a descrição dos produtos será enviada com tags em HTML para a Dafiti. Marcando `Sim`, será enviada a descrição exatamente do jeito que está cadastrada no catálogo da VTEX. Marcando `Não`, a integração vai remover todas as tags HTML que você possui na descrição dos seus produtos.

&bull; __Taxa da Divergência de Preço* :__ é a taxa de aceitação da diferença de valor de um pedido. Qualquer pedido que possua uma diferença entre o preço de venda do marketplace e o preço determinado pelo seller [será comparado com esse valor](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado). Se a divergência, em percentual, for menor que o valor definido nesse campo, o pedido será integrado normalmente. Caso contrário, o pedido não será integrado e você poderá visualizá-lo na [aba de pedidos (dentro da seção de integrações no Admin)](/pt/tutorial/verificando-integracao-no-bridge).

_Legenda:_<br />
`*` Campos obrigatórios.<br />


Feitas as configurações iniciais para a integração com a Dafiti, agora vamos enviar os dados dos produtos para o marketplace. O envio de algumas dessas informações será feito pelo upload da planilha de mapeamento, enquanto o restante será enviado através dos dados já cadastrados no próprio catálogo da VTEX.


## Preenchendo a Planilha de Mapeamento

Com essa feature, é possível categorizar corretamente e também criar variações para seus produtos na Dafiti.

O mapeamento deve ser feito sempre que um produto for enviado pela primeira vez à Dafiti. Isso significa que, já tendo feito o mapeamento uma vez, os produtos que já foram integrados não precisam passar por esse processo novamente. Da mesma forma, produtos novos devem sempre passar pelo mapeamento.

1. De acordo com o __seu país__, faça o download da __Planilha de Mapeamento da Dafiti__ no formato `.xlsx`.
<br/>&bull; [Brasil](//assets.ctfassets.net/alneenqid6w5/2Vbi7VaYIowaaOYCCucsQq/fa94cd636b38e9810dd6a708c95e26ac/Planilha_de_Mapeamento_da_Dafiti.xlsx)
<br/>&bull; [Colômbia](//assets.ctfassets.net/alneenqid6w5/4d5y0N09IsKmy4MuAGygqs/0e43349d309fb556179dfac5f2f6c885/Planilha_de_Mapeamento_da_Dafiti_COL.xlsx)

2. De acordo com o __seu país__, faça o download da __Planilha de Consulta da Dafiti__ para verificar os valores aceitos de acordo com cada coluna da Planilha de Mapeamento do passo anterior. Essa planilha é __exclusivamente para consulta__.
<br/>&bull; [Brasil](//assets.ctfassets.net/alneenqid6w5/1gGYn5lo3qSe0iOaoKs0oa/fc1aa02e2761474f0235fcb489f930ff/Planilha_de_Consulta_Dafiti.xlsx)
<br/>&bull; [Colômbia](https://s3.amazonaws.com/Marketplace-Integration/SellerCenterIntegration/Colombia.zip)

Siga o passo a passo abaixo, fazendo o de/para na __Planilha de Mapeamento__ entre o que está cadastrado no seu produto na VTEX e os valores especificados na __Planilha de Consulta__ da Dafiti.

>⚠️ **OBS:** qualquer valor usado que não esteja na Planilha de Consulta vai ocasionar em um erro de integração.

1. __SKU:__ é o ID do SKU na VTEX. Esse é o ID do SKU que você deseja enviar para a Dafiti.

2. __Categoria:__ preencha com o valor da categoria à qual seu SKU pertence na Dafiti.
<br/>_`Ex:` você está mapeando um short de corrida. De acordo com a Planilha de Consulta o valor correspondente na coluna __Categoria__ deve ser `3328`._

3. __Cor__: preencha com o valor da Cor do SKU.
<br/>_`Ex:` você está mapeando uma meia vermelha. De acordo com a Planilha de Consulta, a coluna __Cor__ deve ser preenchida com o valor `Vermelho`._

4. __Tamanho__: preencha com o valor do Tamanho do SKU.
<br/>_`Ex:` você está mapeando uma bermuda tamanho 38. De acordo com a Planilha de Consulta, a coluna __Tamanho__ deve ser preenchida com o valor `38`._

5. __Gênero__: preencha com o valor do Gênero do SKU.
<br/>_`Ex:` você está mapeando um sapato feminino. De acordo com a Planilha de Consulta, a coluna __Gênero__ deve ser preenchida com o valor `feminino`._

6. __Tipo de Produto:__ preencha com o valor do Tipo de Produto do seu SKU. Esse campo é livre para ser preenchido da maneira que você achar mais adequada.
<br/>_`Ex:` você está mapeando um tênis. Normalmente, a coluna __Tipo do Produto__ é preenchida com o valor `Tênis`._

7. __Modelo:__ preencha com o valor do modelo do seu SKU. Esse campo é livre para ser preenchido da maneira que você achar mais adequada.
<br/>_`Ex:` você está mapeando uma calça de moletom. Normalmente, a coluna __Modelo__ é preenchida com o valor `Moletom`._

>⚠️ **OBS:** na integração brasileira, a Dafiti exige que o nome dos produtos cadastrados sigam o seguinte padrão: **Tipo de Produto + Marca + Modelo + Cor.**
>
>
> 
> Sendo assim, sempre que encontrarmos valores para esses quatro campos na VTEX, criaremos o novo nome de produto automaticamente. Se algum dos campos não estiver presente, enviaremos o nome original do produto.


## Envio de imagens

A Dafiti tem uma regra de negócio que exige imagens com fundo branco de todos os produtos enviados. 

A integração usa exatamente as mesmas imagens de produto que você já tem cadastradas no catálogo da VTEX. No entanto, caso você não possua imagens de fundo branco e não queira substitui-las no seu próprio catálogo, a integração dá a opção de enviar imagens alternativas através da Planilha de Mapeamento (usada no passo anterior). Fazendo isso, as imagens da planilha é que serão enviadas e não as que estão cadastradas na sua loja.

Para fazer o envio pela Planilha de Mapeamento, siga este passo a passo:

1. Ao lado da coluna Modelo, adicione uma coluna com o nome __Image_1__.
2. Nas respectivas linhas correspondentes aos SKUs, preencha com a URL de suas imagens.

Você pode enviar até __oito imagens__. Para isso, você vai precisar adicionar novas colunas, seguindo o padrão indicado: `Image_2`, `Image_3`,..., `Image_8`.

>⚠️ **OBS:** lembre-se de sempre usar `http` ou `https` no início das URLs. Se você não fizer isso, haverá erro ao tentar realizar o upload da planilha na VTEX.


## Envio da Marca do Produto

A integração vai enviar a marca que está cadastrada no seu produto no catálogo da VTEX.
<br/>_`Ex:` se você estiver enviando uma camisa da Adidas, a integração vai enviar `Adidas` como marca._

>⚠️ **OBS:** semelhante ao que acontece com categoria e especificações, a Dafiti possui marcas mapeadas em sua plataforma. Nesse caso, se algum de seus produtos tem uma marca que não esteja cadastrada na Dafiti, ele vai sofrer um erro de integração. Se isso acontecer, entre em contato com a Dafiti para solicitar o cadastro da marca em questão no sistema deles.


## Fazendo o upload

Depois de preencher a planilha, acesse __Integrações__ no menu do Admin:

1. Clique em __Configurações__.
2. Busque pela caixa da Dafiti e clique no __ícone de engrenagem__.
3. Em seguida, clique em __Upload de Mapeamento__.
4. Escolha a planilha com os dados e clique em __Enviar Arquivo__.

Com o upload concluído, a integração envia automaticamente todos os produtos da planilha para a Dafiti.

Depois de cumprir mais essa etapa, sua loja já está completamente integrada com a Dafiti.
