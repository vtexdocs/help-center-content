---
title: 'Configuração do conector'
id: 5OP69kHWKca01wLH0w10jX
status: PUBLISHED
createdAt: 2021-02-08T19:26:40.865Z
updatedAt: 2022-01-27T18:14:48.306Z
publishedAt: 2022-01-27T18:14:48.306Z
firstPublishedAt: 2021-02-08T20:10:36.973Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-connector-facebook
locale: pt
trackId: 7h8KvIC4DbRRc8VlyJ8PFc
trackSlugEN: integracao-com-o-facebook
order: 4
---

O conector nativo usado para integrar com o Facebook é configurado no Admin. Para realizar a configuração, siga as instruções abaixo:

1. Acesse o Admin.
2. No módulo _MARKETPLACE_, clique em `Integrações`.
3. Clique em `Configurações`.
4. No card do Facebook, clique em `Integrar`.
5. Preencha os campos da tela descritos logo abaixo e, em seguida, clique no botão `Salvar configuração` (campos marcados com o símbolo * são obrigatórios).

- **Integração (se optar por desativar a integração, toda a configuração, incluindo afiliado, serão excluídos)*:** marque _Ativada_ para que a integração comece a operar.
- **ID do afiliado*:** código identificador para criação de um [afiliado](/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: FCB. A configuração do conector cria automaticamente o afiliado.
- **Email do afiliado*:** preencha com um email para o afiliado que está sendo criado. Notificações sobre a integração serão enviadas para este endereço eletrônico.
- **Política comercial*:** ID da política comercial que será utilizado na integração. Todos os produtos vinculados a esta política comercial serão enviados para o Facebook.
- **Nome de exibição do produto*:** determina qual será a regra para nomeação dos SKUs no Facebook. Você pode selecionar uma de duas opções.
   * **Nome do Produto - Nome do SKU:** os nomes serão formados a partir dos campos _Nome do Produto_ mais o _Nome do SKU_.
   * **Nome do Produto:** os nomes serão formados somente a partir do campo _Nome do produto_.

- **ID do Business Manager*:** código atribuído ao seu perfil no Gerenciador de Negócios do Facebook. Trata-se de uma sequência numérica, e pode ser encontrada nas configurações da conta.
- **URL do site da loja*:** endereço eletrônico da sua loja. Este campo é usado para formar a URL completa do produto que será enviado para o Facebook.
<br></br>
Exemplo: `https://www.sualoja.com.br`

- **Utilizar categoria*:** todos os produtos enviados para o Facebook devem pertencer a uma categoria. Você pode identificar a categoria do seu produto de duas formas:
   * **Menos específica:** nome correspondente à categoria principal da sua árvore de categorias.
   * **Mais específica:** nome correspondente à subcategoria mais profunda da sua árvore de categorias.
<br></br>
Exemplo: seu produto é uma camiseta. Digamos que ela esteja cadastrada na categoria _Vestuário_, e dentro da subcategoria _Blusas_. Ao selecionar a opção _Menos específica_, seu produto no Facebook apareceria como pertencendo à categoria _Vestuário_. No entanto, se você optar por utilizar a categoria _Mais específica_, a categoria seria definida como _Blusas_.
