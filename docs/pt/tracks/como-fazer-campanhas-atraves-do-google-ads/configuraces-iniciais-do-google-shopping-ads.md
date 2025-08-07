---
title: 'Configurações iniciais do Google Shopping Ads'
id: 4H0V9Z4NkQUiS4y2K0I8IU
status: CHANGED
createdAt: 2018-10-30T22:36:53.918Z
updatedAt: 2020-11-27T19:40:21.348Z
publishedAt: 2020-02-13T15:34:48.598Z
firstPublishedAt: 2018-10-30T22:53:54.339Z
contentType: trackArticle
productTeam: Channels
slugEN: google-shopping-ads-set-up
locale: pt
trackId: 47kz5PRQPK0IEaqGqiIuA
trackSlugEN: como-fazer-campanhas-atraves-do-google-ads
---

Após instalar o app, vamos realizar as configurações iniciais. Siga o passo-a-passo abaixo:

1. Abra o app na barra lateral do Admin, na seção __"Apps Instaladas"__;
2. Já na interface do app, clique em __"Começar"__.


## Definindo a loja que vai usar o app

Nesta etapa, deve-se configurar qual loja vai usar o app e para qual URL os anúncios do Google devem redirecionar. É importante ter bastante atenção nesta etapa, pois qualquer configuração incorreta fará com que seus anúncios direcionem para a URL errada ou então integre produtos da conta errada.

1. Na opção `Loja` selecione o sub-account que deverá ser utilizado para o app
2. Na opção `URL` selecione a URL correspondente ao site da conta que você escolheu no passo anterior.

<div class="alert alert-warning">
<strong>OBS:</strong> certifique-se de que a URL escolhida é a correta, pois as opções mostrarão qualquer URL que esteja cadastrada em <a href="http://help.vtex.com/pt/tutorial/configurando-dominios-no-license-manager/">seus domínios</a>. <strong>Geralmente a URL usada é que a possui WWW</strong>.
</div>


## Definindo conta no Google Merchant Center

O Google Merchant Center (GMC) é a plataforma do Google onde seus produtos estarão disponíveis para fazer campanhas. É necessário sincronizar os produtos que estão no seu catálogo da VTEX com o GMC. As campanhas de shopping só serão feitas para os produtos que estiverem ativos e com estoque (disponibilidade) no GMC.

O app dá duas opções quanto à conta no GMC. Escolha a opção que se adequa ao seu caso e realize o login.

- __Criar nova:__ o app criará uma nova conta no GMC para você. No momento do login, use um e-mail que será permissionado para ter acesso ao GMC criado. 

Ao selecionar __"Criar nova"__, logo em seguida é muito importante [acessar o GMC](https://www.google.com/retail/solutions/merchant-center/) e configurar a logomarca e os dados da sua empresa. Você deve realizar o login com o mesmo e-mail que definiu para esta conta. Esses dados serão usados para os anúncios de remarketing em display.

- __Associar existente:__ o app usará a conta que você já possui no GMC. No momento do login, você precisa usar exatamente o e-mail que você usa no GMC que você deseja associar.

<div class="alert alert-warning">
<strong>OBS:</strong> a URL configurada no GMC deve ser <strong>exatamente a mesma</strong> que foi escolhida anteriormente. Inclusive, levando em conta o protocolo (http ou https).
</div>

Ao selecionar __"Associar a um GMC existente"__, logo em seguida será necessário definir se a integração de produtos com o Google será feita através da VTEX ou através de alguma sincronização externa que você já faça.

- __Sincronizar com VTEX:__ o app criará uma integração de produtos via API que enviará seu catálogo para o GMC. Atualizaremos preços e estoques instantaneamente conforme eles sofrerem modificações na VTEX.

- __Sincronização externa:__ a responsabilidade quanto ao envio e atualização do feed de produtos ao GMC não será do app e dependerá exclusivamente do processo que você usa (seja ele XML ou API).

Recomendamos usar a sincronização da VTEX para garantir um controle melhor sobre a integração de dentro da plataforma.

## Definindo política comercial

É necessário definir qual política comercial será usada para os seus anúncios no Google. Esta definição implicará em quatro principais aspectos: sortimento de produtos, estoque, preço, site. Ou seja, a disponibilidade e os preços dos seus produtos em determinado canal de vendas estarão completamente baseados na política comercial que você escolher.

Quanto à questão do site, a política escolhida deve ser a mesma que é usada no site/loja que você determinou nos passos anteriores. Isto porque os anúncios do Google redirecionam os usuários para o seu site, onde eles finalizarão a compra. Desta forma, se você usar uma política comercial no app diferente da que você usa no seu site, está arriscado a sofrer cenários com divergências de preço ou estoque, por exemplo.

Após selecionar a política comercial, clique em __"Continuar"__. Você será direcionado para os Termos de Serviço do app.

Após concordar com os termos o app entrará numa página de *loading* que pode demorar um pouco, pois neste momento ele está realizando todas as configurações escolhidas por você e montando no GMC. É necessário aguardar um pouco e não sair desta tela.

## Definindo conta Google Ads

O próximo passo é definir uma conta no Google Ads - plataforma do Google responsável por gerir as campanhas de anúncios. No momento da integração, o VTEX Shopping Ads apresenta duas opções quanto a conta do Google Ads.

São elas:

### Associar existente

Nesse caso, a VTEX Shopping Ads utiliza a conta que o usuário já tem no Google Ads. Por conta disso, tanto as configurações das campanhas como a forma de pagamento são mantidas. 

Agora, ao selecionar essa opção, o lojista precisa fazer o login com um e-mail que tenha acesso administrativo a conta do Google Ads. Em seguida, é preciso selecionar o Id da conta que o usuário deseja associar ao VTEX Shopping Ads. Por fim, clique em __“Continuar”__. 

### Criar nova

Aqui o VTEX Shopping Ads cria uma nova conta no Google Ads. Ao selecionar essa opção, o usuário receberá um crédito para a criação de suas campanhas.	 No final do mês, o valor desse crédito que foi investido em anúncios será incluído na mensalidade da VTEX. 

Em ambos os casos, depois que o usuário selecionar uma opção se adequar melhor a realidade do seu negócio, o VTEX Shopping Ads irá direcioná-lo para uma página de *loading* para concluir o processo de configuração. 

<div class=”alert alert-danger”>
O usuário não pode sair da página de <em>loading</em> até todas as configurações serem concluídas. Caso contrário, a integração não será realizada.  
</div>

*__Pronto!__ Depois que o VTEX Shopping Ads finalizar este loading, você poderá começar a usá-lo e criar uma campanha. Veja no próximo passo!*
