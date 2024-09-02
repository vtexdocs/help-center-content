---
title: 'Configurar integração de pontos de retirada '
id: 52C1lm8gMovN8v68s6v89d
status: DRAFT
createdAt: 2021-08-12T18:12:20.076Z
updatedAt: 2024-03-11T22:19:05.610Z
publishedAt: 
firstPublishedAt: 2021-08-19T15:16:01.224Z
contentType: trackArticle
productTeam: Channels
slug: configurar-integracao-de-pontos-de-retirada
locale: pt
trackId: 
trackSlugPT: configurar-integracao-do-mercado-livre
---

Disponibilizar aos consumidores [pontos de retirada](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E) faz parte do escopo de [estratégias de comércio unificado](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) de uma loja e se apresenta como uma importante evolução na logística de entregas e gestão de estoque.

Neste artigo, explicaremos como criar pontos de retirada no Mercado Livre, a partir dos que já estão cadastrados nas [contas franquias](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa) na VTEX.

Quando os pedidos que utilizam a opção de retirada em loja chegam à VTEX, são atribuídos à conta franquia que possui o ponto de retirada escolhido pelo cliente e o ponto de retirada terá seu estoque modificado.

![configurar pontosderetirada01 PT](//images.contentful.com/alneenqid6w5/6V2QIEoUaOUIqNLf5Nfrg6/4a10e2e330c1fa333bbd62f34cf6bcc5/configurar_pontosderetirada01_PT.JPG)

<div class="alert alert-info">
Antes de criar os pontos de retirada, você deve solicitar ao Mercado Livre a ativação da modalidade de Retirada em Loja. Para isso, entre em contato com o seu assessor comercial do Mercado Livre ou abra um chamado com o time de <a href="https://developers.mercadolivre.com.br/devcenter/support">Suporte.</a>
</div>

Para criar os pontos de retirada, você vai precisar:

- [Cadastrar o ponto de retirada](#cadastrar-o-ponto-de-retirada) 
- [Configurar o ponto de retirada](#configurar-o-ponto-de-retirada)
- [Ativar o ponto de retirada das contas franquias](#ativar-os-pontos-de-retirada-das-contas-franquias)
- [Confirmar o envio do ponto de retirada](#confirmar-o-envio-do-ponto-de-retirada)
- [Confirmar a associação do ponto de retirada com o anúncio](#confirmar-a-associacao-do-ponto-de-retirada-e-anuncio)

## Cadastrar o ponto de retirada 

Primeiramente, [cadastre](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/6Mk0PK5AwSVzEufC3FmtAO) um ponto de retirada. Durante o cadastro, ao preencher os campos siga o formato abaixo:

- **Instruções de retirada:** cadastre um telefone para contato seguindo o formato `(XX) XXXX-XXXX`.
- **Endereço:** cadastre o CEP corretamente para que o cliente possa selecionar o ponto de retirada de acordo com o CEP da sua preferência.

## Configurar o ponto de retirada

Com o ponto de retirada castrado, é preciso configurá-lo. Leia o artigo [Configurar pontos de retirada](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points) para mais informações.

O ponto de retirada deve estar associado a uma [política de envio](https://help.vtex.com/pt/tutorial/gerenciar-transportadora--tutorials_140), que é  a configuração de uma transportadora.

A sua política de envio deve estar vinculada à [doca](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj) que está associada à [política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) utilizada na integração do Mercado Livre.

Os pontos de retirada que pertencem à política comercial configurada serão automaticamente enviados para o Mercado Livre quando as configurações forem ativadas.

## Ativar os pontos de retirada das contas franquias 

Para ativar os pontos de retirada nas contas franquias:

1. Acesse o Admin. 
2. No módulo MARKETPLACE, selecione a opção **Integrações** e clique em `Configurações`.
3. Na integração Mercado Livre, clique na engrenagem <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
4. Escolha a opção `Editar Configurações`.
5. No campo **Ativar integração de pontos de retirada para contas franquias**, clique na opção `Sim`.
6. Clique em `Salvar Configurações`.

![Início (12)](//images.contentful.com/alneenqid6w5/73IhuYUuFMCX3k4tGB0K07/b88a06aa30a5643af251043da2aea2d8/In__cio__12_.gif)

## Confirmar o envio do ponto de retirada 

Para verificar se o ponto de retirada foi enviado ao Mercado Livre:

1. Acesse o Admin. 
2. No módulo MARKETPLACE, selecione a opção **Integrações** e clique em `Pontos de retirada`.

Na listagem dos pontos de retirada enviados, você conseguirá visualizar quais foram enviados com sucesso e quais possuem erro de configuração.

![Início (11)](//images.contentful.com/alneenqid6w5/1kHVZxPH1CEtw9v57A56MT/7e60a01cca9d76ba79ffec547b430038/In__cio__11_.gif)

No Mercado Livre não existe uma tela para visualizar se determinado ponto de retirada foi vinculado. Recomendamos escolher um anúncio no Mercado Livre que esteja associado ao ponto de retirada e efetuar uma compra teste, escolhendo a opção Ponto de retirada durante o checkout. Em seguida, confira na lista oferecida pelo Mercado Livre no checkout se o ponto de retirada realmente está disponível.

## Confirmar a associação do ponto de retirada e anúncio 

![configurar pontosderetirada02 PT](//images.contentful.com/alneenqid6w5/5yvk1AFDsNY62wKdbHzO8N/8e0122b02481b3825f9de7016410835a/configurar_pontosderetirada02_PT.JPG)

Para confirmar se o ponto de retirada foi corretamente associado ao anúncio do Mercado Livre, você deve verificar quais pontos de retirada estão sincronizados com cada SKU e seus respectivos estoques. Siga os passos abaixo:

1. Acesse o Admin. 
2. No módulo MARKETPLACE, selecione a opção **Integrações** e clique em `Estoque`.
3. Filtre a lista por meio da opção `Mercado Livre`.
4. Localize o SKU desejado, digitando seu nome na caixa de busca.

Não tendo ocorrido nenhum erro com o SKU localizado, os pontos de retirada estarão sincronizados com ele, e seus respectivos estoques serão apresentados na lista.

![Início (10)](//images.contentful.com/alneenqid6w5/2w5jyORw3v1VIg5Cd0rJX7/45eb1cacfa766718460386f73355ae96/In__cio__10_.gif)
