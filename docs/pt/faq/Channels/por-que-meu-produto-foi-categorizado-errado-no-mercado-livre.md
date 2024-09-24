---
title: 'Por que meu produto foi categorizado errado no Mercado Livre?'
id: frequentlyAskedQuestions_4462
status: PUBLISHED
createdAt: 2017-04-27T22:24:19.119Z
updatedAt: 2019-12-31T14:23:48.805Z
publishedAt: 2019-12-31T14:23:48.805Z
firstPublishedAt: 2017-04-27T23:02:43.888Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: why-has-my-product-been-wrongly-categorized-on-mercado-livre
locale: pt
legacySlug: por-que-meu-produto-foi-categorizado-errado-no-mercado-livre
---

Se você não quiser categorizar seus anúncios no Mercado Livre usando a planilha de mapeamento, a integração dá a opção de automatizar o processo através de uma ferramenta do próprio marketplace. [Saiba mais aqui sobre o processo de categorização na integração do Mercado Livre.](/pt/tracks/configurar-integracao-do-mercado-livre?step=5)

Essa definição da categoria de destino é feita com base no __nome__ e no __preço__ do produto.

No entanto, há casos em que essa definição automática não associa o produto à categoria correta. Para corrigir esse cenário, é preciso fazer a alteração diretamente no painel do Mercado Livre ou seguir o caminho detalhado abaixo:

1. [Baixe esta planilha](//assets.ctfassets.net/alneenqid6w5/oGLLZ7lKFMuKUcmKmIuQk/1bac4c828d4c3a361f70dd8016952796/Recategorizac__a__o_Mercado_Livre.xlsx) e preencha suas respectivas colunas.
2. __Item ID:__ deve ser preenchido com o ID do seu anúncio no Mercado Livre, tirando o hífen que separa o prefixo do número. <br />
_`Ex:` o ID pode ser encontrado na URL do anúncio. No link abaixo, por exemplo, o ID seria "MLB875426061"._
`https://produto.mercadolivre.com.br/MLB-875426061-liquidificador-oster-maximum-dial-vermelho-127v-_JM` 

3. __Descrição do Item:__ preencha com a descrição do produto em questão. O conteúdo dessa coluna é exatamente o que vai ser exibido na "Descrição" no anúncio do Mercado Livre.
4. __ID da Categoria Atual:__ preencha com o ID da categoria em que seu anúncio está categorizado incorretamente no momento. Você pode encontrar essa informação de acordo com o ID do seu anúncio, usando esta API do Mercado Livre: ```https://api.mercadolibre.com/items/{ID_anuncio}```<br />
_`Ex:` se você quiser buscar pela categoria do anúncio MLB875426061, deve usar a API desta maneira:_<br /> https://api.mercadolibre.com/items/__MLB875426061__<br />
_Assim, você vai encontrar no campo `"category_id"` o __ID MLB185478__._

5. __ID da Categoria Destino:__ esse é o ID da categoria para a qual você deseja mover seu anúncio. Acesse esta [API do Mercado Livre](https://api.mercadolibre.com/sites/MLB/categories) para consultar os IDs das categorias deles.

Ao finalizar a planilha, você deve enviá-la ao assessor da sua conta __no Mercado Livre__, para que ele siga com o processo internamente.

Caso você __não__ possua um assessor de conta no Mercado Livre, só vai ser possível alterar as categorias dos anúncios através do MyML (front do MELI) e somente em casos de produtos que __não__ tenham nenhuma venda.

>⚠️ **OBS:** vale ressaltar que esse processo não tem nenhuma relação com a VTEX e deve ser intermediado diretamente com o Mercado Livre.

