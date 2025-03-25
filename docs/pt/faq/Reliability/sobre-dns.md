---
title: 'Sobre DNS'
id: 2Bf9pLHnz6EEO4mcaO60My
status: ARCHIVED
createdAt: 2018-05-09T14:17:32.523Z
updatedAt: 2020-05-25T18:57:13.740Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Reliability
author: authors_4
slugEN: untitled-entry-2018-05-09-at-02-17-32
locale: pt
legacySlug: sobre-dns
---

Por vezes chamado "zona de DNS", é o local aonde você gerencia o domínio da sua loja.

## Registrador de domínio

O domínio é um endereço virtual que pode ser comprado em registradores de domínio (_registrar_) - exemplos nacionais são Registro.BR, Locaweb, Hostgator, GoDaddy etc.

Estes registradores de domínio **podem ou não** possuir gerenciadores de DNS (zona de DNS).

A partir do registrador, o domínio aponta para uma __entrada NS__. Ela diz o servidor que será o gerenciador de DNS. Nos casos em que o registrador é a própria zona de DNS, a entrada NS será algo do próprio registrador.

## Gerenciador de DNS

No gerenciador de DNS é aonde você direciona efetivamente o seu domínio e seus subdomínios para servidores específicos, que irão prover conteúdos (como páginas web) ou serviços (como e-mails).

Nele você tem entradas do tipo A (que são IPs), tipo CNAME (endereços de serviço), tipo MX (exclusivamente para serviços de e-mails), tipo TXT (podem ser informações diversas, como verificações de propriedade ou configurações de segurança) entre outras. Mas estas costumam ser as mais comuns.

---

A seguir, um exemplo de zona de DNS para o domínio `minhaempresa.com`.

```
minhaempresa.com        A       52.54.55.56
www.minhaempresa.com    CNAME   www.minhaempresa.com.cdn.vtex.com
blog.minhaempresa.com   CNAME   blog-service.example.com
minhaempresa.com        MX      mail-service.example.com
```

Cada uma dessas entradas aponta para um servidor específico:

- A raiz do domínio (que não é uma entrada específica, mas somente "minhaempresa.com" - as vezes representada somente com `@` ou `.`), obrigatoriamente aponta para um IP. Normalmente é um servidor ou serviço exclusivo para redirecionar o endereço para outra entrada. Por exemplo, ao acessar "minhaempresa.com" o usuário é redirecionado para "www.minhaempresa.com". Um exemplo desse tipo de serviço é o do [Direcionar.com.br](http://direcionar.com.br).

- A entrada "www" aponta para os [servidores da VTEX](). Idealmente, para uma única loja há uma única entrada de DNS apontando para os nossos serviços. Qualquer outra entrada deve trabalhar redirecionando para essa únnica.

- A entrada "blog" aponta para um servidor que hospeda exclusivamente um blog.

- A entrada tipo MX, associada à raiz do domínio, aponta para um servidor que responde com o serviço de e-mails.

Isso não é um padrão, mas somente um caso de uso. O serviço da VTEX se restringe à entrada que aponta para nossos servidores - no caso acima, seria "www.minhaempresa.com".

Naturalmente, ela pode ser qualquer outra, como por exemplo "loja.minhaempresa.com", "www.loja.minhaempresa.com", "b2b.minhaempresa.com" etc.

---





Eu altero meu DNS dentro da VTEX?

Só preciso mudar a entrada CNAME?

Preciso ativar a nova CDN nos meus dois endereços www.minhaloja.com.br e minhaloja.com.br?

Eu já tenho SSL no meu endereço www.loja.com.br, eu preciso de um outro SSL pra minhaloja.com.br?

www.loja.com.br e loja.com.br não são a mesma coisa?

Depois que eu mudar o apontamento e enviar o formulário quanto tempo leva pra minha loja entrar na nova CDN?

Como eu faço para ver se minha loja já está na nova CDN?

Verifiquei meu apontamento e meu endereço está apontado para A e um número de IP (ex:  A  52.90.128.87) 
O que isso quer dizer e o que tenho que fazer?

O que acontece se eu não migrar para a nova CDN?
