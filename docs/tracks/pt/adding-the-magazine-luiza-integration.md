---
title: 'Cadastro da integração da Magazine Luiza'
id: 4QWLcDhsh2GSSamouyu6M0
status: PUBLISHED
createdAt: 2018-10-17T12:39:05.174Z
updatedAt: 2021-03-18T19:30:46.167Z
publishedAt: 2021-03-18T19:30:46.167Z
firstPublishedAt: 2018-11-06T02:08:03.031Z
contentType: trackArticle
productTeam: Channels
slug: cadastro-da-integracao-da-magazine-luiza
locale: pt
trackId: 5Yx5IrNa7Y48c6aSC8wu2Y
trackSlugPT: configurar-integracao-com-o-magazine-luiza
---

A integração com a Magazine Luiza acontece através da IntegraCommerce, uma integradora que intermedia as informações enviadas pela VTEX e repassa à Magazine Luiza. Dessa maneira, a VTEX se integra com IntegraCommerce, mas no final seus produtos são endereçados à Magazine Luiza.

1. No menu lateral do Admin, clique em __Integrações__.
2. Acesse o item __Configurações__.
3. Busque pela caixa da __Magazine Luiza__ e clique em __Integrar__.
4. Preencha os __campos__ exibidos na tela. Abaixo, vamos detalhar como preencher cada um deles.
5. Com tudo preenchido corretamente, clique no botão __Salvar Configuração__.

## Detalhamento dos campos

&bull; __Integração*:__ marque `Ativada` para que a integração comece a operar. Se você marcar `Desativada`, toda a configuração da integração será apagada, incluindo o afiliado.

&bull; __Id do afiliado*:__ esse campo deve ser preenchido com um ID de [afiliado](/pt/faq/o-que-e-afiliado) que ainda não exista no cadastro de afiliados. O ID aceita apenas três dígitos (todos devem ser consoantes). Sugestão: `MGZ`.

Caso você tenha configurações de [integração para multidomínios](/pt/tutorial/como-criar-multiloja-multidominio), dê uma atenção especial ao ID do afiliado, porque esse campo deve ter um valor diferente para cada domínio.

Caso você esteja migrando uma conta, nós aproveitaremos o afiliado já usado para a integração antiga e passaremos a usá-lo nessa integração.

&bull; __Política comercial*:__ ID da política comercial que será utilizada para a integração com a Magazine Luiza. São os produtos dessa política comercial que serão enviados para o marketplace.

&bull; __Percentual de tolerância na divergência do valor do pedido*:__ é a taxa de aceitação da diferença de valor de um pedido. Qualquer pedido que possua uma diferença entre o preço de venda do marketplace e o preço determinado pelo seller [será comparado com esse valor](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado). Se a divergência, em percentual, for menor que o valor definido nesse campo, o pedido será integrado normalmente. Caso contrário, o pedido não será integrado e você poderá visualizá-lo na [aba de pedidos (dentro da seção de integrações no Admin)](/pt/tutorial/verificando-integracao-no-bridge).

&bull; __Mapeamento de SLA Customizável*:__ nesses campos deverá ser feito um de/para entre os [tipos de transportadora](/pt/tutorial/como-funciona-o-tipo-de-entrega) cadastradas na IntegraCommerce e os cadastrados na logística da VTEX.  Os valores aceitos são **Normal**, **Expressa** e **Convencional.** Ao fazer o mapeamento, clique no botão `+` para salvá-lo.

_`Ex:` imagine que você usa os Correios (PAC) como transportadora, seu Tipo de Transportadora na IntegraCommerce seja "Normal" e no painel logístico da VTEX se chama "Comum". Então, você deve preencher o primeiro campo com "Normal" e o segundo com "Comum". Lembre-se que as palavras devem ser exatamente iguais às cadastradas na logística._

>⚠️ **OBS:** cada campo de mapeamento de SLA possui uma limitação de **50** caracteres.

&bull; __Estoque mínimo*:__ você deve preencher esse campo com um valor mínimo de estoque de segurança. Por mais que a comunicação entre os sistemas da VTEX e da Magazine Luiza seja rápida, o estoque exibido no marketplace pode ficar defasado em relação ao estoque real do produto na sua loja (mesmo que por alguns minutos). Assim, quando o estoque na VTEX chegar a esse valor, a integração vai zerar o estoque para que a venda de um produto sem estoque não aconteça.

_Legenda:_<br />
`*` Campos obrigatórios.<br />

Uma vez que os campos estiverem preenchidos, clique no botão __"Salvar configuração"__.

*__Pronto.__ Depois de cumprir essa etapa, sua loja já está completamente integrada com a Magazine Luiza.*
