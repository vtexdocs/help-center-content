---
title: Configuração do conector Dafiti
id: 3PV2OACP2E4O4uOKKW2sMg
status: PUBLISHED
createdAt: 2018-09-27T17:57:53.647Z
updatedAt: 2022-01-25T15:51:13.004Z
publishedAt: 2022-01-25T15:51:13.004Z
firstPublishedAt: 2018-09-27T20:41:13.133Z
contentType: trackArticle
productTeam: Channels
slug: configuracao-do-conector-dafiti
trackId: 4wF4RBx9ygEkimW6SsKw8i
trackSlugPT: configurar-integracao-da-dafiti
---

A configuração do conector é feita no Admin. Para realizá-la, siga as instruções abaixo:

1. Acesse o Admin.
2. No módulo _MARKETPLACE_, clique em `Integrações`.
3. Clique em `Configurações`.
4. No _card_ da Dafiti, clique em `Integrar`.
5. Preencha os campos da tela descritos logo abaixo e em seguida, clique no botão `Salvar configuração` (campos marcados com o símbolo * são obrigatórios).

- **Integração (se optar por desativar a integração, toda a configuração, incluindo afiliado, serão excluídos)*:** marque _Ativada_ para que a integração comece a operar.

- **Ambiente*:** escolha a opção _Produção_ para utilizar o ambiente real de vendas da Dafiti. Esta é a configuração sugerida. Caso você queira realizar algum teste na integração, marque _QA_. O _token_ e o acesso ao ambiente teste são disponibilizados pela Dafiti.

- **ID do afiliado*:** código identificador para criação de um [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado) que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: DFT. A configuração do conector cria automaticamente o afiliado.

- **Política comercial*:** ID da política comercial que será utilizada para a integração com a Dafiti. Todos os produtos vinculados a esta política comercial serão enviados para o marketplace.

- **Chave de acesso*:** preencha com o _token_ de identificação da sua loja no marketplace. Essa informação é disponibilizada pela Dafiti.

- **Usuário*:** preencha com o usuário gerado após seu cadastro no portal da Dafiti.

- **Email do afiliado*:** preencha com um email para o afiliado que está sendo criado.

- **Estoque mínimo (se o saldo do SKU estiver igual ou abaixo do valor configurado, será enviado saldo 0 para o marketplace)*:** valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização da Dafiti pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.

- **Permitir HTML na descrição do produto*:** determina se a descrição dos produtos será enviada com tags em HTML para a Dafiti. Marcando _Sim_, será enviada a descrição exatamente como cadastrada na plataforma VTEX, mantendo a estilização de texto em bold ou itálico, por exemplo. Marcando _Não_, a integração vai remover as tags HTML da descrição dos seus produtos.

- **FOB*:** tipo de frete, chamado _free on board_, no qual o tipo de entrega do produto, sua cobrança e emissão da etiqueta são definidos e realizados pelo marketplace. Ao marcar _Sim_, a Dafiti se torna a responsável pelo frete. Ao escolher _Não_, o frete é definido de acordo com sua [estratégia de envio](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/55MezrFTw2limlgT7KUg6l) na VTEX. Para mais informações, veja [Como funciona o frete quando a entrega é feita pelo marketplace](https://help.vtex.com/pt/tutorial/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ).

- **Enviar KIT*:** ao escolher _Não_, SKUs [cadastrados como kit](https://help.vtex.com/pt/tutorial/cadastrando-kit--tutorials_215) não são enviados para a Dafiti. Ao habilitar _Sim_, todos os itens da sua política comercial são enviados para o marketplace, sem filtrar SKUs cadastrados como kit. Mudanças na configuração do conector podem ser feitas a qualquer momento, sendo que isso não afeta SKUs que já tenham sido enviados. Por exemplo, se você mudasse sua configuração de _Sim_ para _Não_, SKUs enviados anteriormente para a Dafiti não seriam removidos ou sofreriam qualquer alteração.

  <div class="alert alert-info">
Com a opção <i>Não</i> ativada, tentativas de envio para a Dafiti de SKUs cadastrados como kit resultarão no seguinte aviso: <i>O conector está configurado para não enviar SKUs do tipo Kit</i>. Esta mensagem pode ser visualizada no Admin, no módulo <b>MARKETPLACE > Integrações > Produtos,</b> ao se clicar sobre o SKU.
</div>

- **Nome do SKU*:** determina qual será a regra para nomeação de SKUs no portal da Dafiti. Você deve selecionar uma das combinações disponíveis dos seguintes atributos: _Marca_, _Nome do Produto_ e _Nome do SKU_.

  ![print tela nome exibição produto](https://drive.google.com/uc?export=download&id=1KqEfKd5RCUJve3IZrAd50Ke0nlL2pL4l)

> Exemplo: meu produto é um tênis preto da marca Nike. O _Nome do SKU_ que eu selecionei foi _Marca - Nome do Produto - Nome do SKU_. Assim, o nome que aparecerá no portal da Dafiti será _Nike tênis preto_.
