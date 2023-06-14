---
title: 'Go-live'
id: 12bQlMbJ68Ot0LIaO6Btkj
status: PUBLISHED
createdAt: 2022-12-09T21:36:11.449Z
updatedAt: 2023-04-18T16:00:31.228Z
publishedAt: 2023-04-18T16:00:31.228Z
firstPublishedAt: 2022-12-09T22:07:42.750Z
contentType: trackArticle
productTeam: Reliability
slug: go-live
trackId: 4Ns5FxIiksmjsdX2yOTduM
trackSlugPT: go-live
---

Após a conclusão dos passos descritos anteriormente, é neste estágio que sua loja entrará em produção de fato. Para isso acontecer, [realize o apontamento de DNS](#realizar-apontamento-de-dns) e depois [notifique o apontamento](#notificar-apontamento) à plataforma.

## Realizar apontamento de DNS

Na zona de DNS do seu domínio, você deve criar uma entrada do tipo CNAME no subdomínio desejado para o seguinte destino:
```
{domínio}.cdn.vtex.com
```

Note que o `{domínio}` indicado acima deve ser o mesmo que você [cadastrou na VTEX](https://help.vtex.com/pt/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#cadastrar-dominio-na-vtex).

<div class="alert alert-warning">
Caso você utilize a Cloudflare como zona de DNS, pode ser necessário desabilitar o proxy de DNS e, consequentemente, desativar os serviços de CDN e WAF da Cloudflare. Mais informações podem ser encontradas no artigo <a href="https://help.vtex.com/pt/tutorial/disable-cloudflare-proxy--75QqsXAqR7NdkRc1GZPiXb">Como desabilitar o proxy no Cloudflare</a>.
</div>

Alguns exemplos:

```
Endereço da loja: www.site.com
  - Entrada (subdomínio): www
  - Tipo: CNAME
  - Destino: www.site.com.cdn.vtex.com
```
```
Endereço da loja: www.site.com.br
  - Entrada (subdomínio): www
  - Tipo: CNAME
  - Destino: www.site.com.br.cdn.vtex.com
```
```
Endereço da loja: loja.minhaempresa.com
  - Entrada (subdomínio): loja
  - Tipo: CNAME
  - Destino: loja.minhaempresa.com.cdn.vtex.com
```
```
Endereço da loja: www.loja.minhaempresa.com.br
  - Entrada (subdomínio): www.loja
  - Tipo: CNAME
  - Destino: www.loja.minhaempresa.com.br.cdn.vtex.com
```

Atente-se que o início do domínio ("loja", "www", "www.loja" ou qualquer outro) e a terminação (".com", ".com.br", ".com.ar" ou qualquer outro) fazem parte do `{hostname}`, e devem estar no CNAME de destino.

<div class="alert alert-danger">
Não pode haver nenhum apontamento tipo A coexistindo com o CNAME descrito acima. A coexistência destes dois apontamentos pode causar problemas no Go Live da sua loja. Mantenha apenas o apontamento CNAME descrito acima.
</div>

A propagação do apontamento de DNS demora de 24 a 48 horas para ocorrer completamente, o que significa que o endereço configurado pode não estar acessível a todas as pessoas logo após a configuração. Além disso é necessário [notificar o apontamento](#notificar-apontamento) para que a loja fique disponível.

## Notificar apontamento

Uma vez que você realizou o apontamento de DNS, notifique à plataforma VTEX seguindo os passos abaixo:

1. Acesse o Admin VTEX.
2. Na seção **CONFIGURAÇÕES DA CONTA**, clique em **Gerenciamento da conta**.
3. Clique em **Conta**.
4. Clique no botão `Salvar` mesmo que não tenha feito alterações.

Assim que for feita a notificação, a loja já estará disponível, mas ainda aguardando a emissão do certificado SSL, o que deve acontecer em até dez minutos.

Caso ocorra alguma falha ao gerar o certificado, seja por atraso na propagação do domíno ou algum tipo de erro, ao acessar o site você verá uma mensagem de que o certificado SSL está sendo gerado. Se isto permanecer por mais de trinta minutos após a notificação de apontamento, abra um ticket com o [suporte VTEX](https://help.vtex.com/pt/support) com prioridade urgente.

O certificado é gerado por meio da [Let's Encrypt](https://letsencrypt.org/) e tem validade de 90 dias. Sua renovação é feita automaticamente até cinco dias antes do vencimento, bastando que o domínio esteja apontado corretamente para a VTEX.

