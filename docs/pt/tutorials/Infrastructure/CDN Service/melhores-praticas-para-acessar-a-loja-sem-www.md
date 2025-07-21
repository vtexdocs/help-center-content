---
title: 'Melhores práticas para acessar a loja sem www'
id: tutorials_4278
status: PUBLISHED
createdAt: 2017-04-27T21:51:11.002Z
updatedAt: 2024-01-23T17:50:54.783Z
publishedAt: 2024-01-23T17:50:54.783Z
firstPublishedAt: 2017-04-27T23:11:15.960Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: best-practices-for-accessing-the-store-without-www
locale: pt
legacySlug: configurando-acesso-sem-www
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

O [domínio principal](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450) de uma loja precisa ter um subdomínio, como `www` ou outro. Para acessar a loja utilizando um domínio puro – como `minhaloja.com`, que não tem um subdomínio – é preciso fazer um [redirecionamento](/pt/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ). Neste guia, explicamos os motivos para essa necessidade e como realizar o redirecionamento. Confira as seções a seguir:

* [Antes de começar](#antes-de-comecar)
* [Desafios de domínios sem subdomínio](#desafios-de-dominios-sem-subdominio)
* [Solução recomendada: Redirecionamento](#solucao-recomendada-redirecionamento)
* [Solução alternativa: CNAME Flattening](#solucao-alternativa-cname-flattening)

## Antes de começar

Recomendamos a leitura dos seguintes guias para entender como funcionam domínios e a configuração de DNS na VTEX:

* [Configurar o domínio da loja](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450)
* [Como funciona a configuração de DNS na VTEX](/pt/tutorial/como-funciona-a-configuracao-de-dns-na-vtex--2P5k3oMYOj7TgSK4Mrxmgy)

## Limitações na configuração de DNS para domínios puros

Nesta seção, exploramos a complexidade e os desafios relacionados à configuração do sistema de DNS para domínios puros. A gestão de domínios sem subdomínios demanda atenção especial, sobretudo para preservar a funcionalidade e a integridade do site, sem comprometer aspectos cruciais, como e-mails, segurança e certificados.

### Redirecionamentos tipo A para domínios puros 

A [configuração de DNS na VTEX](/pt/tutorial/como-funciona-a-configuracao-de-dns-na-vtex--2P5k3oMYOj7TgSK4Mrxmgy) deve ser feita para o [domínio principal](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450) da loja, não sendo recomendado o uso de domínios puros. Um domínio puro, sem subdomínio, também conhecido como _naked domain_ (por exemplo, `minhaloja.com`, sem o `www`), implica na criação de uma configuração de tipo A (Address Record) no DNS. O registro A é usado para apontar diretamente o domínio para um endereço IP específico.

No entanto, esse tipo de configuração não é recomendado. Não é possível usar configurações A que apontam diretamente para um endereço IP, pelos motivos a seguir:

* **Risco de site inacessível:** Se um domínio puro estiver configurado com um registro A apontando para um endereço IP específico e esse endereço IP mudar, o site pode ficar inacessível até que o novo IP seja atualizado no registro A.
* **Desempenho prejudicado:** Se o domínio puro apontar diretamente para um único endereço IP, os visitantes de todo o mundo seriam forçados a se conectar a esse único servidor, independentemente de sua localização. Isso pode levar a uma degradação do desempenho, pois os visitantes distantes teriam uma experiência mais lenta.

### Redirecionamentos tipo CNAME para domínios puros

O redirecionamento do tipo CNAME para domínios puros deve ser evitado. Um CNAME tem um comportamento parecido com um redirecionamento no contexto do DNS: quando alguém acessa `www.minhaloja.com`, o DNS encaminha automaticamente para `www.minhaloja.com.cdn.vtex.com`. Porém, de acordo com as regras do protocolo DNS, um CNAME não pode coexistir com outras configurações de DNS no mesmo domínio. Isso significa que, se usarmos um CNAME para redirecionar um site, todas as configurações desse site precisam seguir esse redirecionamento. Não é possível redirecionar apenas parte das configurações. 

Esse comportamento cria um conflito direto com domínios puros, pois lojistas geralmente desejam configurar outras funcionalidades, como registros MX para e-mails, registros TXT para segurança, registros CAA para certificados e registros NS e SOA para provar que eles controlam o domínio puro.

## Lidando com domínios puros

Em vista das [limitações na configuração de DNS para domínios puros](/pt/tutorial/como-funciona-a-configuracao-de-dns-na-vtex--2P5k3oMYOj7TgSK4Mrxmgy), essa seção apresenta as práticas recomendadas para garantir que a loja seja acessível sem a necessidade do prefixo `www`.

### Solução recomendada: Redirecionamentos

A VTEX recomenda sempre usar o `www` ou outro subdomínio ao [configurar o domínio principal](/pt/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450) da loja, visando conciliar a necessidade de utilizar CNAMEs e outras configurações. Neste cenário, recomenda-se usar redirecionamentos para acessar o endereço sem `www` ou outros subdomínios. Para saber como configurar redirecionamentos, leia [Redirecionamento de outros endereços](/pt/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ).

Alguns provedores de DNS suportam CNAMEs no domínio puro ([CNAME Flattening](#solucao-alternativa-cname-flattening)). No entanto, essa opção pode não ser oferecida por todos os provedores. Portanto, recomendamos o uso obrigatório do  subdomínio para garantir que todas as funcionalidades necessárias possam coexistir.

### Solução alternativa: CNAME Flattening

A VTEX recomenda, por padrão, usar um subdomínio `www` para evitar problemas relacionados à dinamicidade dos IPs no CDN. Porém, algumas empresas de hospedagem e serviços de DNS oferecem uma solução alternativa para contornar esse problema, chamada [CNAME Flattening](https://developers.cloudflare.com/dns/cname-flattening/).

O CNAME Flattening é uma técnica que permite associar um domínio puro diretamente a um CNAME, em vez de um registro A. Com isso, você pode configurar um domínio puro (sem subdomínio) para funcionar em conjunto com um CDN, mesmo quando os IPs sofrem alterações. No entanto, essa funcionalidade não é suportada por todos os provedores de DNS.

Alguns provedores de DNS, como o [Cloudflare](https://www.cloudflare.com/pt-br/), oferecem suporte para o CNAME Flattening. Nesse caso, é possível configurar o domínio puro com um CNAME que aponte para o serviço de CDN da VTEX. Isso permite que o domínio puro funcione de maneira semelhante ao subdomínio `www` e ainda se alavanque dos benefícios do CDN.

Portanto, se você deseja usar um domínio puro com um CDN em uma configuração específica, a primeira etapa é verificar se o seu provedor de DNS suporta o CNAME Flattening. Se sim, você poderá configurar o domínio puro dessa forma.

<div class="alert alert-warning">
  <p>Quando utilizada, a solução de DNS Flattening implica o mesmo comportamento de um <a href="https://help.vtex.com/pt/tutorial/por-que-nao-recomendamos-inserir-um-proxy-reverso-em-frente-aos-servicos-da--4PFWsfRAKviNVPf1bYdiir">proxy-reverso</a>. Nesse caso, é necessário configurar uma entrada TXT de verificação.</p>
</div>
