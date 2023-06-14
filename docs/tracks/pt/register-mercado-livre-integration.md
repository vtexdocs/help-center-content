---
title: 'Cadastro do conector Mercado Livre'
id: 4YvYdgICMosaEgISOYogsi
status: PUBLISHED
createdAt: 2018-08-13T12:33:55.818Z
updatedAt: 2022-02-03T23:29:27.323Z
publishedAt: 2022-02-03T23:29:27.323Z
firstPublishedAt: 2018-08-13T14:28:06.574Z
contentType: trackArticle
productTeam: Channels
slug: cadastro-da-integracao-do-mercado-livre
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugPT: configurar-integracao-do-mercado-livre
---

1.	Acesse o Admin.
2.	No módulo *MARKETPLACE*, clique em **Integrações**.
3.	Acesse a aba `Configurações`.
4.	Busque pelas caixas do __Mercado Livre Classic__ ou __Mercado Livre Premium__ e clique em `Integrar`.
5.	Preencha os campos listados abaixo (o asterisco indica preenchimento obrigatório). Em seguida clique no botão `Salvar configuração`.

<div class="alert alert-info">
Cada conta VTEX deve estar vinculada a apenas uma conta no Mercado Livre, mesmo se forem utilizados ambos conectores (Classic e Premium). Atualmente não é possível autenticar com duas contas simultaneamente.
</div>

- **Integração (se optar por desativar a integração, toda a configuração, incluindo afiliado, serão excluídos)* :** selecione *Ativada* para que a integração comece a operar.
- **ID do afiliado*:** código identificador para criação de um [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado)que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestões: `MLC` (Classic) ou `MLP` (Premium). A configuração do conector cria automaticamente o afiliado.
- **ID da política comercial*:** ID da [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que será utilizada para a integração com o Mercado Livre. São os produtos dessa política comercial que serão enviados para o marketplace.
- **Formato do título do anúncio*:** regra para formação do título do anúncio que será publicado no Mercado Livre. Esse título pode combinar diferentes atributos do Catálogo, como *Marca*, *Nome do Produto* e *Nome do SKU*. Os títulos de anúncios no Mercado Livre podem ter no máximo 60 caracteres. Para customizar o *Formato do título do anúncio* de um produto, você pode [criar um campo de produto](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106) com o nome `meli_title`, do tipo `Texto Grande` e a opção `Exibe Especificação` desativada.
- **Atualizar descrição do anúncio*:** quando ativado, atualiza automaticamente a descrição do anúncio no Mercado Livre sempre que for feita uma alteração na descrição do produto na VTEX. Caso contrário, a descrição original será mantida.
- **Ativar integração de pontos de retirada*:** quando ativada, viabiliza o recurso de retirada de produtos nos pontos de retirada cadastrados na VTEX da loja principal.
- **Ativar integração de pontos de retirada para contas franquias*:** quando ativada, viabiliza o recurso de retirada de produtos nos [pontos de retirada](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/52C1lm8gMovN8v68s6v89d) cadastrados na VTEX das contas franquias.
- **Ativar estoque para entrega e cotação de frete para contas franquias*:** quando ativada, viabiliza o recurso de utilizar o [estoque das contas franquias](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/52C1lm8gMovN8v68s6v89d).
- **Estratégia de envio de estoque (válida apenas caso a configuração de estoque e cotação para contas franquias estiver ativa):** caso tenha ativado a opção anterior, selecione as seguintes opções:
   * **Total dos estoques:** utiliza a soma dos estoques das contas franquias mais estoque da loja principal.
   * **Estoque máximo:** utiliza apenas o maior estoque disponível da conta franquia.
- **Estratégia de envio para cotação de frete (válida apenas caso a configuração de estoque e cotação para contas franquias estiver ativa):** caso você tenha uma conta franquia, selecione as seguintes opções:
   * **Mais barato:** optando por um frete mais barato, o tempo de entrega é maior.
   * **Mais rápido:** optando por um frete mais rápido, o preço é mais alto.
- **ID da Loja Oficial no Mercado Livre:**  identificador numérico de três ou quatro dígitos fornecido pelo Mercado Livre no seu contrato comercial quando um usuário atinge o status de [Loja Oficial](https://www.mercadolivre.com.br/lojas-oficiais/catalogo). Deve ser preenchido caso sua loja tenha este status, para que a integração funcione corretamente.
- **Estoque limite para pausa de anúncio*:** valor mínimo de estoque de segurança. Se a quantidade de itens em estoque de um produto estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização do Mercado Livre pela VTEX.
- **Formato do arquivo da etiqueta de remessas*:** escolha entre os formatos PDF ou JSON (que é compatível com impressoras zebra), para impressão das etiquetas dos produtos.
- **Atributos omitidos no template do produto:** preencha o campo com atributos do produto que estão cadastrados na VTEX, mas que  você não deseja incluir no Mercado Livre.
- **Armazém Mercado Full:** ID do estoque exclusivo para o tipo de envio [Mercado Envios Full](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full).
