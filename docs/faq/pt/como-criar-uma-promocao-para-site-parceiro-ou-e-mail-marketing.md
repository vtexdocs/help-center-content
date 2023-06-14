---
title: 'Como criar uma promoção para site parceiro ou e-mail marketing'
id: 20BIhDMHKgy6YuGQKQ882s
status: DRAFT
createdAt: 2017-07-07T01:16:15.634Z
updatedAt: 2020-03-06T13:53:59.489Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Others
author: 523NSmHfn2IKEoiy2Q44YS
slug: como-criar-uma-promocao-para-site-parceiro-ou-e-mail-marketing
locale: pt
legacySlug: como-criar-uma-promocao-para-site-parceiro-ou-e-mail-marketing
---

Para ativar uma promoção para visitas geradas por sites de parceiros ou e-mail marketing, será neceário parâmetros de monitoramento como o utm's ou utmi's.
Se já estiver utilizando parametros de monitoramento no link indico utilizar as UTMIs VTEX, caso contrário, não houver nenhum parametro na URL, indico que utilize UTMs na URL do link os paramentros utm_source e utm_campaign.
 
Com as UTMs poderá além de ativar a promoção, identificar e monitorar corretamente através do Google Analytics o tráfego gerado por esse link e pelo OMS os pedidos gerados.
 
Um exemplo de estrutura para o seu link é:
Mantendo a origem de tráfego como "referral":
http://www.sualoja.com.br/?utm_campaign=NOMECAMPANHA
 
Ou sobrescrevendo a origem de tráfego "referral":
http://www.sualoja.com.br/?utm_source=NOMEPARCEIRO&utm_campaign=NOMECAMPANHA
 
Assim todo o tráfego gerado por essa URL será identificado através de um cookie.
Agora é necesário criar uma promoção no "Pricing" VTEX para ativar o desconto desejado para os usuários que acessaram a loja por essa URL e possuem o cookie da utm.

Para isso apenas será necessário configurar uma promoção regular com o tipo de desconto percentual de 10%, com a condição "utm_campaign" selecionada e com valor "NOMECAMPANHA" cadastrado.

Detalho o paso a paso de criação:
1. Acesse o módulo "Pricing" em seu ambiente: https://sualoja.vtexcommercestable.com.br/admin/pricing/#/benefits/
2. Selecione a opção "Nova Promoção" e em seguida "Promoção Regular"
3. No formulário de "Promoção Regular" defina o "Nome", "Data Inicio" e "Data Fim" da promoção
4. Na opção "Qual o tipo e valor do desconto?" selecione a opção "Percentual"
5. Preencha o valor do percentual de desconto que deseja na caixa de texto com o simbolo de "%"
6. No bloco "Quais as condições para a promoção ser válida?" selecione o checkbox da opção "utm_campaign"
7. Preencha o valor "NOMECAMPANHA" na caixa de texto da opção "utm_campaign"
8. Salve a promoção e pronto! :)

Com a promoção corretamente, você já poderá compartilhar a URL, assim todo o tráfego que vier com o parâmetro "?utm_campaign=NOMECAMPANHA" ativará o valor de desconto configurado na promoção.
 
