---
title: 'Mapear categorias e atributos dos produtos para o Mercado Livre'
id: 5XNeiye4rS4oao2MueSUeA
status: PUBLISHED
createdAt: 2018-08-13T12:58:18.100Z
updatedAt: 2024-07-23T21:39:55.195Z
publishedAt: 2024-07-23T21:39:55.195Z
firstPublishedAt: 2018-08-13T14:27:50.859Z
contentType: trackArticle
productTeam: Channels
slugEN: mapping-product-categories-and-attributes-to-mercado-libre
locale: pt
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugPT: configurar-integracao-do-mercado-livre
---

Feita a integração entre a sua loja e o Mercado Livre, é possível enviar os produtos para o catálogo do marketplace. Para agilizar o processo de catalogação dos seus produtos e permitir que eles fiquem disponíveis para venda em menos tempo, você precisará realizar o mapeamento entre as características dos produtos na sua loja VTEX e as características dos mesmos produtos na sua loja no marketplace.

Para enviar os seus produtos para o Mercado Livre, você deverá: 

1. [Mapear as categorias dos produtos](#mapear-categorias)
2. [Mapear os atributos dos produtos](#mapear-atributos)

>ℹ️ Seus produtos precisam ter o [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e [Preço](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) configurados antes de enviá-los ao Mercado Livre.

## Mapear categorias

Para acessar a página de mapeamento, você deverá acessar no Admin **Marketplace > Marketplaces e Integrações**, na integração com o Mercado Livre selecione a opção `Realizar mapeamento`.

Você será direcionado à página de mapeamento do Mercado Livre e a página apresentará uma lista com as categorias da sua loja VTEX. O mapeamento das categorias permite que exista uma correspondência entre as categorias da sua loja e as categorias do Mercado Livre. Dessa forma, os produtos enviados serão exibidos na categoria equivalente no Mercado Livre.

Na página de mapeamento, existe uma barra de busca que permite buscar a categoria por nome. Além disso, a seção **Categorias da loja** exibe lista das categorias da sua loja VTEX. 

A lista de categorias da sua loja VTEX inclui o status de seu  mapeamento  por meio dos ícones:

| Ícone | Status | Descrição |
| ---------- | ---------- | ---------- | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/6Ry65cPvgGmChmE3RipFio/deec73c3e429f63dfa8971ae8c848221/mapeado_mapper.JPG" /> | **Mapeado**| Indica que o mapeamento da categoria foi concluído. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/6v4eFsWHVy8F5VIqTVLQD9/e63d945d60a958a37246f57d919eede8/mapeamentoincompleto_mapper.JPG" /> | **Mapeamento incompleto** | A categoria está parcialmente mapeada, necessitando preencher seus atributos obrigatórios, indicados por meio de um asterisco, para mapeá-la. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/lsN6TxCm1e6frHvIQ8xjt/491ad1e6d99ab858e2a76d0ea31e1a39/erromapeamento_mapper.JPG" /> | **Erro no mapeamento** | O erro no mapeamento ocorre quando o marketplace exclui ou muda a categoria do produto.  Para solucionar esse problema basta refazer o mapeamento da categoria. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/3nVJUJHetaqPHThGGpoG8T/d7f667b269105a5c65aa7b16b1aace21/incompleto_mapper.JPG" /> | **Não mapeado** | Indica que a categoria não foi mapeada. |

Ainda na página de mapeamento, existem as seções **Categoria do marketplace** e **Mapeamento de Atributos**, ambos com uma opção de menu de seleção, onde ao clicar sobre a seta, aparecem novos campos e informações.

Para realizar o mapeamento de categorias:

1. Acesse o Admin VTEX vá em **Marketplace > Marketplaces e Integrações.**  
2. Selecione a integração com o Mercado Livre.  
3. Clique na integração do Mercado Livre.
4. Clique em `Realizar mapeamento`. Uma nova janela será aberta com a página de mapeamento.
5. Na seção **Categorias da loja**, escolha a categoria que deseja mapear.
6. Selecione na seção **Categoria do marketplace** a categoria correspondente no marketplace do produto que você deseja enviar.

Para finalizar o mapeamento da categoria, você deve seguir o passo a passo abaixo a partir do passo 6 para finalizar.

## Mapear atributos

![Início (13)](https://images.ctfassets.net/alneenqid6w5/owf1A0SnYfOkoNCGDlTFj/ca731b95328853d12ee9872ef14b8aaf/In__cio__13_.gif)

O mapeamento dos atributos permite que exista uma correspondência entre o padrão da sua loja VTEX e o padrão utilizado pelo Mercado Livre. Cada categoria possui seus atributos obrigatórios pelo Mercado Livre e é necessário preenchê-los para que o mapeamento seja concluído. Os campos não mapeados não impedem que o mapeamento ocorra, porém quanto mais atributos enviados para o Mercado Livre seu produto tiver, melhor rankeado ele será no marketplace.

Para mapear os atributos, siga os passos abaixo:

1. Acesse o Admin VTEX vá em **Marketplace > Marketplaces e Integrações.**  
2. Selecione a integração com o Mercado Livre.  
3. Clique na integração do Mercado Livre.
4. Clique em `Realizar mapeamento`. Uma nova janela será aberta com a página de mapeamento.
5. Na seção **Mapeamento de Atributos**, preencha os campos com os atributos que deseja mapear (o asterisco indica preenchimento obrigatório).
6. Caso tenha preenchido os atributos *Cor* ou *Tamanho*, na coluna **Valores de Atributo** clique na `Cor equivalente` ou `Tamanho equivalente` e selecione a opção de valor correspondente.
7. Se desejar personalizar um atributo, clique no botão `Adicionar valor personalizado` e crie um nome para o valor do atributo personalizado.
8. Clique em `Salvar Alterações`.

Ao finalizar o mapeamento de categorias e atributos corretamente, o status da categoria mudará para **Mapeado** <img class="shadow-4" src="https://images.contentful.com/alneenqid6w5/6Zu9VaGjbucOthXQsFwTD1/8681ab7d7e4fd12b41daae3c69afd552/mapper_correto.JPG" /> e seus produtos serão anunciados no site do Mercado Livre.

Após realizar o mapeamento de produtos de moda como, roupas e calçados, é necessário enviar a tabela de medidas dos produtos ao Mercado Livre. Para saber como preencher e enviar a tabela de medidas, siga o tutorial [Tabela de medidas do Mercado Livre](https://help.vtex.com/pt/tutorial/tabela-de-medidas-do-mercado-livre--5dCc9IJ83SjllG75BVCWnr)
