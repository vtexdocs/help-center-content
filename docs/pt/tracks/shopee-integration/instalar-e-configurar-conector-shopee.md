---
title: 'Instalar e Configurar conector Shopee'
id: 2kss3HDVbJwgOOKFgOVhcf
status: PUBLISHED
createdAt: 2025-03-17T15:10:36.951Z
updatedAt: 2025-07-18T00:14:06.512Z
publishedAt: 2025-07-18T00:14:06.512Z
firstPublishedAt: 2025-03-17T15:36:28.899Z
contentType: trackArticle
productTeam: Channels
slugEN: install-and-configure-shopee-connector
locale: pt
trackId: 4CaZCzU9ZO1CByH0haZ9hA
trackSlugPT: integracao-shopee
---

Para instalar o conector da Shopee, siga os passos abaixo:

Acesse a [VTEX App Store](https://apps.vtex.com/).
Procure pelo app Shopee.
Clique no botão `Obter App`.
Clique no botão `Confirmar`.
Faça login na VTEX App Store com o seu [account name](/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) na VTEX.
Clique no botão `Fechar pedido`.
Feito o download do app da Shopee, é necessário fazer a instalação do app na sua loja VTEX, clique no botão `Vá para a página de Instalação`.
Clique no botão `Instalar`.

Configurar o conector

Após instalar o conector, é necessário configurá-lo, para isso, siga os passos abaixo: 

No Admin VTEX vá em  **Aplicativos > Shopee > Configurações,** ou digite **Shopee**  na barra de busca.
Clique no botão `Conectar Shopee`.
 Para confirmar o status da integração, observe qual a cor do círculo que aparece no topo da página ao lado do título **Conexão VTEX e Shopee.** A conexão apresenta três status diferentes:

Verde: Quando a autenticação com a Shopee está concluída.
Amarelo: Quando há problemas com autenticação com a Shopee. Para solucionar, faça a autenticação novamente.
Vermelho: Quando a autenticação não foi realizada ou autorizada na Shopee.

Preencha os campos que aparecerão na tela. Veja na tabela a seguir quais são os campos e como preenchê-los.

<table class="tg"><thead>
  <tr>
    <th class="tg-it04"><span style="font-weight:bold">Cam</span>p<span style="font-weight:bold">o</span></th>
    <th class="tg-it04"><span style="font-weight:bold">Descrição</span></th>
  </tr></thead>
<tbody>
  <tr>
    <td class="tg-n6bu">Integração Logística do Vendedor do Shopee<br></td>
    <td class="tg-2fdn">Caso você queira utilizar o sistema de logística próprio, é necessário <a href="https://help.vtex.com/tracks/--4CaZCzU9ZO1CByH0haZ9hA/70xqC5uNOggv51Lb3su45w?__bindingAddress=vtexhelp.myvtex.com/#cadastrando-logistica-do-vendedor-na-shopee">autenticar essa integração</a> com a Shopee por meio de login.</td>
  </tr>
  <tr>
    <td class="tg-n6bu">ID de afiliado</td>
    <td class="tg-2fdn">Código identificador para criação de um afiliado que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: SHP.</td>
  </tr>
  <tr>
    <td class="tg-n6bu">Canla de vendas a ser sincronizado</td>
    <td class="tg-2fdn">ID da política comercial que definirá o sortimento de catálogo e os valores dos itens que serão enviados para a Shopee.</td>
  </tr>
  <tr>
    <td class="tg-n6bu">Email de notificação</td>
    <td class="tg-2fdn">Preencha com um email do responsável pela integração. Este é o contato que receberá notificações sobre a integração da sua loja VTEX com a Shopee. O e-mail precisa ser o mesmo cadastrado na sua conta Shopee.</td>
  </tr>
  <tr>
    <td class="tg-n6bu">Estoque mínimo</td>
    <td class="tg-2fdn">Determina o valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização da Amazon pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.</td>
  </tr>
  <tr>
    <td class="tg-n6bu">Unidade de peso usada no catálogo</td>
    <td class="tg-2fdn">Selecione a unidade de peso que seus produtos estão cadastrados no catálogo VTEX.</td>
  </tr>
  <tr>
    <td class="tg-n6bu">Idioma do mapeador de categorias</td>
    <td class="tg-2fdn">Escolha qual o idioma será utilizado no mapeamento de categorias.</td>
  </tr>
  <tr>
    <td class="tg-n6bu">Tipo da etiqueta de envio</td>
    <td class="tg-2fdn">Selecione qual o tipo de arquivo da etiqueta de envio você quer receber.</td>
  </tr>
</tbody></table>

