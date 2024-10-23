---
title: 'Configurar integração de lojas físicas com a B2W'
id: 1yv2BSquNmdp8M6vJvaLwm
status: PUBLISHED
createdAt: 2021-03-09T18:14:58.278Z
updatedAt: 2023-03-29T16:19:36.710Z
publishedAt: 2023-03-29T16:19:36.710Z
firstPublishedAt: 2021-03-09T18:52:50.895Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: configuring-physical-stores-integration-with-b2w
locale: pt
legacySlug: configurar-integracao-de-lojas-fisicas-com-a-b2w-skyhub
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Disponibilizar aos consumidores pontos de retirada fazem parte do escopo de [estratégias de comércio unificado](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) de uma loja e se apresenta como uma importante evolução na logística de entregas e gestão de estoque. 

Neste artigo explicamos como criar [pontos de retirada](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E) na [B2W](https://help.vtex.com/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk) a partir dos que já estão cadastrados nas [contas-franquias](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa#o-que-e-uma-conta-franquia).

Existem duas modalidades de retirada em loja: **Pickup** e **Ship Store**. Nessa documentação, vamos focar somente na modalidade Pickup, conhecida na B2W como [Pegue na loja](https://blog.b2wmarketplace.com.br/2019/07/18/pegue-na-loja/). Nessa modalidade o cliente retira o pedido da loja no ponto de retirada pessoalmente ou com um representante devidamente identificado.

Os pedidos realizados e que utilizam a opção de retirada em loja, quando chegam à VTEX, são atribuídos à conta franquia que possui o ponto de retirada escolhido pelo cliente e o ponto de retirada terá seu estoque modificado.

![fluxocriacaopup](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integration Settings/configurar-integracao-de-lojas-fisicas-com-a-b2w_1.JPG)

Para criar os pontos de retirada, você vai precisar:

- [Cadastrar ponto de retirada](#cadastro-do-ponto-de-retirada)  
- [Configurar ponto de retirada](#configuracao-do-ponto-de-retirada)
- [Ativar ponto de retirada](#ativacao-dos-pontos-de-retirada-das-contas-franquias) 
- [Confirmar o envio do ponto de retirada](#confirmacao-do-envio-do-ponto-de-retirada) 
- [Confirmar a associação do ponto de retirada com o anúncio na B2W](#confirmacao-da-associacao-do-ponto-de-retirada-x-anuncio) 

## Cadastro do ponto de retirada 

Primeiramente, [cadastre](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/6Mk0PK5AwSVzEufC3FmtAO#admin) um ponto de retirada, durante o cadastro você deve obrigatoriamente cadastrar um telefone para contato no campo **Instruções de retirada**. O formato do cadastro do telefone deve ser *(XX) XXXX-XXXX*.

No cadastro do endereço, você deve inserir o CEP corretamente para que o cliente possa selecionar o ponto de retirada de acordo com o CEP de sua preferência.

## Configuração do ponto de retirada

Com o ponto de retirada castrado, é preciso configurá-lo. Leia o artigo “[Configurar pontos de retirada](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points)” para mais informações. O ponto de retirada deve estar associado a uma [política de envio](https://help.vtex.com/pt/tutorial/o-que-e-uma-transportadora--7u9duMD5UQa2QQwukAWMcE?&utm_source=autocomplete), que esteja vinculada à [doca](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj) que faça parte da [política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) utilizada na integração da B2W. 

Quando as configurações forem ativadas, os pontos de retirada cadastrados e que pertencem à política comercial configurada serão automaticamente enviados para B2W.

## Ativação dos pontos de retirada das contas franquias 

Para ativar os pontos de retirada nas contas franquias:

1. Acesse o Admin.
2. No módulo Marketplace, selecione **Integrações**.
3. Em seguida, clique em **Configurações**.
4. Na integração B2W, clique na engrenagem <i class="fas fa-cog"></i>
5. Escolha a opção **Editar Configurações**.
6. No campo **Ativar pontos de retirada das contas franquias**, clique na opção **Sim**.
7. Clique em **Salvar Configurações**.

## Confirmação do envio do ponto de retirada 

Para verificar se o ponto de retirada foi enviado a B2W:

1. Acesse o Admin.
2. No módulo Marketplace, selecione **Integrações**.
3. Em seguida, clique em **Pontos de retirada**.

Na listagem dos pontos de retirada enviados, você conseguirá visualizar quais foram enviados com sucesso e quais possuem erro de configuração.

![Início (4)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integration Settings/configurar-integracao-de-lojas-fisicas-com-a-b2w_2.gif)

## Confirmação da associação do ponto de retirada x anúncio 

É possível confirmar se o ponto de retirada foi corretamente associado ao anúncio da B2W. O que define essa associação é a quantidade de estoque do produto, enviada para o ponto de retirada.

![fluxoestoquepup](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integration Settings/configurar-integracao-de-lojas-fisicas-com-a-b2w_3.JPG)

Para confirmar a associação, você deve verificar quais pontos de retirada estão sincronizados com o SKU e seus respectivos estoques. Siga os passos abaixo:

1. Acesse o Admin.
2. No módulo Marketplace, selecione **Estoque**.
4. Filtre a listagem com a opção SkyHub/B2W.
5. Localize o SKU desejado na caixa de pesquisa.

![Início (5)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integration Settings/configurar-integracao-de-lojas-fisicas-com-a-b2w_4.gif)

Os pontos de retirada estão sincronizados com o SKU e seus respectivos estoques serão apresentados na lista.
