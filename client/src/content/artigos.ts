// Todos os artigos do blog, do mais novo para o mais antigo (o 1º vira destaque na listagem e na home).
// Para publicar: ver CLAUDE.md > "Novo artigo do blog". O build (scripts/prerender.mjs) valida cada entrada.
// `html` usa as classes do site (article-prose, article-toc, article-table, article-faq...).
// `jsonLd` traz Article, FAQPage e BreadcrumbList. `related` alimenta o "Leia também".
export type Artigo = { slug: string; category: string; title: string; excerpt: string; image: string; date: string; html: string; jsonLd: Record<string, unknown>[]; related: { title: string; href: string }[] };

export const artigos: Artigo[] = [
  {
    "slug": "novos-limites-minha-casa-minha-vida",
    "category": "FINANCIAMENTO",
    "title": "Novos limites do Minha Casa, Minha Vida: o que muda para quem quer comprar um apartamento pronto",
    "excerpt": "Renda de até R$ 13 mil, imóveis de até R$ 600 mil e prazo de 35 anos: entenda os novos limites do Minha Casa, Minha Vida e a Faixa 4 para financiar em Marau.",
    "image": "/assets/blog-mcmv-faixa-4.webp",
    "date": "27 set 2026",
    "html": "\n<p class=\"lead\">Você paga aluguel todos os meses e ouviu dizer que o Minha Casa, Minha Vida agora alcança a classe média. É verdade, e a mudança é recente.</p>\n\n<nav class=\"article-toc\" aria-label=\"Sumário\">\n  <p class=\"article-toc-title\">Neste artigo</p>\n  <ol>\n    <li><a href=\"#o-que-mudou\">O que mudou no programa em 2026</a></li>\n    <li><a href=\"#faixa-4\">Faixa 4: as condições de quem financia mais</a></li>\n    <li><a href=\"#alta-vista\">Onde o Alta Vista se encaixa</a></li>\n    <li><a href=\"#simulacao\">Quanto a taxa pesa na parcela</a></li>\n    <li><a href=\"#como-saber\">Como saber se você se enquadra</a></li>\n    <li><a href=\"#perguntas-frequentes\">Perguntas frequentes</a></li>\n  </ol>\n</nav>\n\n<h2 id=\"o-que-mudou\">O que mudou no programa em 2026</h2>\n<p>Em abril, a Caixa passou a operar os novos limites aprovados pelo Conselho Curador do FGTS. Subiram os tetos de renda de todas as faixas e os valores máximos dos imóveis das faixas 3 e 4.</p>\n\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n  <thead><tr><th>Faixa</th><th>Renda bruta familiar mensal</th><th>Valor máximo do imóvel</th></tr></thead>\n  <tbody>\n    <tr><td>1</td><td>até R$ 3.200</td><td>R$ 210 mil a R$ 275 mil, conforme o porte da cidade</td></tr>\n    <tr><td>2</td><td>até R$ 5.000</td><td>R$ 210 mil a R$ 275 mil, conforme o porte da cidade</td></tr>\n    <tr><td>3</td><td>até R$ 9.600</td><td>R$ 400 mil</td></tr>\n    <tr><td>4</td><td>até R$ 13.000</td><td>R$ 600 mil</td></tr>\n  </tbody>\n</table>\n</div>\n\n<p>Antes da mudança, a Faixa 3 ia até R$ 8.600 de renda e R$ 350 mil de imóvel. A Faixa 4 parava em R$ 12 mil e R$ 500 mil. Mais famílias entram, e mais imóveis cabem no programa.</p>\n\n<h2 id=\"faixa-4\">Faixa 4: as condições de quem financia mais</h2>\n<p>A Faixa 4 atende famílias com renda bruta mensal entre R$ 9.600,01 e R$ 13.000. Não há subsídio, mas as condições costumam ser melhores do que as do financiamento convencional:</p>\n<ul>\n  <li>imóvel de até R$ 600 mil;</li>\n  <li>prazo de até 420 meses, ou 35 anos;</li>\n  <li>taxa de juros em torno de 10% ao ano, definida na simulação da Caixa;</li>\n  <li>financiamento de até 80% do valor de um imóvel novo;</li>\n  <li>possibilidade de usar o FGTS, conforme as regras do fundo.</li>\n</ul>\n<p>A renda considerada é a soma dos ganhos brutos da família. Um casal pode compor renda para chegar ao valor necessário.</p>\n\n<h2 id=\"alta-vista\">Onde o Alta Vista se encaixa</h2>\n<p>Os apartamentos do Residencial Alta Vista custam R$ 410 mil e R$ 425 mil, conforme a unidade. Ficam abaixo do teto de R$ 600 mil da Faixa 4. Como passam do teto de R$ 400 mil da Faixa 3, o enquadramento no programa é pela Faixa 4.</p>\n<p>A conta da entrada é simples. O Alta Vista é vendido à vista ou com 20% de entrada mais financiamento bancário. Isso equivale a R$ 82 mil ou R$ 85 mil de entrada, e o restante financiado, exatamente o limite de 80% da Faixa 4.</p>\n<p>O edifício está pronto, com documentação regular e moradores. Você visita o apartamento real antes de decidir e conhece a planta de 76,90 m² privativos, com suíte, sacada com churrasqueira e duas vagas.</p>\n\n<h2 id=\"simulacao\">Quanto a taxa pesa na parcela</h2>\n<blockquote>Saber a parcela antes de decidir tira o medo da conta.</blockquote>\n<p>Uma diferença pequena na taxa vira muito dinheiro em 35 anos. Veja um exemplo ilustrativo com um imóvel de R$ 410 mil e entrada de 20%.</p>\n\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n  <thead><tr><th>Taxa nominal</th><th>1ª parcela (SAC)</th><th>Juros no prazo total</th></tr></thead>\n  <tbody>\n    <tr><td>10% ao ano</td><td>R$ 3.514</td><td>R$ 575 mil</td></tr>\n    <tr><td>11% ao ano</td><td>R$ 3.788</td><td>R$ 633 mil</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"article-note\">Simulação ilustrativa: valor financiado de R$ 328 mil, prazo de 420 meses, sistema SAC. Não inclui TR, seguros e tarifas. As taxas são referências de exemplo, não uma oferta. Cada ponto percentual a menos reduz a primeira parcela em cerca de R$ 273 e os juros totais em cerca de R$ 57 mil.</p>\n<p>Em regra, a parcela inicial pode comprometer até 30% da renda bruta familiar. Quanto maior a entrada, menor a parcela e menor a renda exigida.</p>\n\n<h2 id=\"como-saber\">Como saber se você se enquadra</h2>\n<ol>\n  <li><strong>Some a renda bruta da família.</strong> Ela define a faixa e o valor máximo do imóvel.</li>\n  <li><strong>Defina a entrada.</strong> Poupança, FGTS ou a venda de outro imóvel reduzem o valor financiado.</li>\n  <li><strong>Peça a simulação.</strong> É gratuita e mostra taxa, prazo e parcela reais para o seu caso.</li>\n</ol>\n<p>As regras do programa podem mudar, por isso vale confirmar as condições vigentes na Caixa. Para conhecer o apartamento e receber a lista de documentos da simulação, fale com a construtora.</p>\n\n<div class=\"article-cta\">\n  <a class=\"button button-dark\" href=\"https://wa.me/5548991223600?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20unidades%20do%20Residencial%20Alta%20Vista.\" target=\"_blank\" rel=\"noreferrer\">Agende sua visita pelo WhatsApp</a>\n</div>\n\n<section class=\"article-faq\" aria-labelledby=\"perguntas-frequentes\">\n  <h2 id=\"perguntas-frequentes\">Perguntas frequentes</h2>\n  <div class=\"faq-item\"><h3>O Alta Vista se enquadra no Minha Casa, Minha Vida?</h3><p>Os valores de R$ 410 mil e R$ 425 mil ficam abaixo do teto de R$ 600 mil da Faixa 4, destinada a famílias com renda bruta mensal entre R$ 9.600,01 e R$ 13.000. A análise da renda, do crédito e da documentação é feita pela Caixa, que também define a taxa na simulação.</p></div>\n  <div class=\"faq-item\"><h3>Preciso dar 20% de entrada?</h3><p>Sim. No Alta Vista, a compra é feita à vista ou com 20% de entrada mais financiamento bancário. A entrada pode vir de poupança, da venda de outro imóvel ou do FGTS, conforme as regras do fundo.</p></div>\n  <div class=\"faq-item\"><h3>Minha renda é de R$ 8 mil. Posso financiar?</h3><p>Nessa faixa de renda, o teto do imóvel no programa é de R$ 400 mil, abaixo dos valores do Alta Vista. O caminho é o financiamento bancário convencional, cujas condições aparecem na simulação. Somar a renda do cônjuge também pode mudar o enquadramento.</p></div>\n  <div class=\"faq-item\"><h3>A aprovação do financiamento é garantida?</h3><p>Não. Quem aprova é o banco, após analisar renda, histórico de crédito e documentação. A construtora orienta a lista de documentos para que a simulação seja feita sem custo e sem compromisso.</p></div>\n</section>\n\n<section class=\"article-sources\">\n  <p class=\"article-sources-title\">Fontes consultadas</p>\n  <ul>\n    <li><a href=\"https://www.gov.br/cidades/pt-br/assuntos/noticias-1/noticia-mcid-n-2111\" target=\"_blank\" rel=\"noreferrer\">Ministério das Cidades — Novas condições do Minha Casa, Minha Vida (22/04/2026)</a></li>\n    <li><a href=\"https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2026/04/nova-portaria-atualiza-limites-de-renda-bruta-familiar-admitidos-para-familias-atendidas-pelo-minha-casa-minha-vida\" target=\"_blank\" rel=\"noreferrer\">Secom — Portaria MCID nº 333 atualiza limites de renda (01/04/2026)</a></li>\n    <li><a href=\"https://borainvestir.b3.com.br/noticias/novas-regras-do-minha-casa-minha-vida-passam-a-valer-veja-limites-e-taxas-de-juros/\" target=\"_blank\" rel=\"noreferrer\">B3 Bora Investir — Novas regras do Minha Casa, Minha Vida (22/04/2026)</a></li>\n    <li><a href=\"https://www.serasa.com.br/blog/faixas-do-minha-casa-minha-vida-em-qual-voce-se-encaixa/\" target=\"_blank\" rel=\"noreferrer\">Serasa — Faixas do Minha Casa, Minha Vida</a></li>\n  </ul>\n</section>\n",
    "jsonLd": [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Novos limites do Minha Casa, Minha Vida: o que muda para quem quer comprar um apartamento pronto",
        "description": "Renda de até R$ 13 mil, imóveis de até R$ 600 mil e prazo de 35 anos: entenda os novos limites do Minha Casa, Minha Vida e a Faixa 4 para financiar em Marau.",
        "image": "https://www.altavistamarau.com.br/assets/blog-mcmv-faixa-4.webp",
        "mainEntityOfPage": "https://www.altavistamarau.com.br/blog/novos-limites-minha-casa-minha-vida",
        "datePublished": "2026-09-27",
        "dateModified": "2026-09-27",
        "author": {
          "@type": "Organization",
          "name": "Construtora Fioravanso e Zanchet Ltda."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Residencial Alta Vista",
          "url": "https://www.altavistamarau.com.br"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O Alta Vista se enquadra no Minha Casa, Minha Vida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Os valores de R$ 410 mil e R$ 425 mil ficam abaixo do teto de R$ 600 mil da Faixa 4, destinada a famílias com renda bruta mensal entre R$ 9.600,01 e R$ 13.000. A análise da renda, do crédito e da documentação é feita pela Caixa, que também define a taxa na simulação."
            }
          },
          {
            "@type": "Question",
            "name": "Preciso dar 20% de entrada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. No Alta Vista, a compra é feita à vista ou com 20% de entrada mais financiamento bancário. A entrada pode vir de poupança, da venda de outro imóvel ou do FGTS, conforme as regras do fundo."
            }
          },
          {
            "@type": "Question",
            "name": "Minha renda é de R$ 8 mil. Posso financiar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nessa faixa de renda, o teto do imóvel no programa é de R$ 400 mil, abaixo dos valores do Alta Vista. O caminho é o financiamento bancário convencional, cujas condições aparecem na simulação. Somar a renda do cônjuge também pode mudar o enquadramento."
            }
          },
          {
            "@type": "Question",
            "name": "A aprovação do financiamento é garantida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não. Quem aprova é o banco, após analisar renda, histórico de crédito e documentação. A construtora orienta a lista de documentos para que a simulação seja feita sem custo e sem compromisso."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.altavistamarau.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.altavistamarau.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Novos limites do Minha Casa, Minha Vida: o que muda para quem quer comprar um apartamento pronto",
            "item": "https://www.altavistamarau.com.br/blog/novos-limites-minha-casa-minha-vida"
          }
        ]
      }
    ],
    "related": [
      {
        "title": "Comprar financiado para alugar: o que a inflação muda na conta do investidor",
        "href": "/blog/inflacao-aluguel-financiamento-imobiliario"
      },
      {
        "title": "Poder de compra em queda: o papel do imóvel na preservação do patrimônio",
        "href": "/blog/imovel-protege-patrimonio-poder-de-compra"
      },
      {
        "title": "Apartamento pronto em Marau: quais são as vantagens?",
        "href": "/blog/apartamento-pronto-em-marau"
      }
    ]
  },
  {
    "slug": "inflacao-aluguel-financiamento-imobiliario",
    "category": "INVESTIMENTO",
    "title": "Comprar financiado para alugar: o que a inflação muda na conta do investidor",
    "excerpt": "O aluguel acompanha os preços; a dívida tem taxa fixa e TR. Veja como a inflação afeta a conta de quem financia um imóvel para alugar, com riscos e limites.",
    "image": "/assets/blog-inflacao-aluguel.webp",
    "date": "27 set 2026",
    "html": "<p class=\"lead\">Quem compra um imóvel financiado para alugar lida com dois números: a parcela e o aluguel. A inflação mexe nos dois, mas não do mesmo jeito.</p>\n\n<nav class=\"article-toc\" aria-label=\"Sumário\">\n  <p class=\"article-toc-title\">Neste artigo</p>\n  <ol>\n    <li><a href=\"#indexadores\">Dois números, dois caminhos</a></li>\n    <li><a href=\"#ponto-de-partida\">Onde a conta começa</a></li>\n    <li><a href=\"#conta\">A conta ao longo do tempo</a></li>\n    <li><a href=\"#custos\">O que entra na conta além da parcela</a></li>\n    <li><a href=\"#avaliar\">Como avaliar antes de comprar</a></li>\n    <li><a href=\"#perguntas-frequentes\">Perguntas frequentes</a></li>\n  </ol>\n</nav>\n\n<h2 id=\"indexadores\">Dois números, dois caminhos</h2>\n<p>O aluguel é reajustado por índice. Nos contratos de locação, o mais comum é o IGP-M ou o IPCA. Em setembro de 2026, o IGP-M acumulado em 12 meses é de 2,16%.</p>\n<p>Os preços dos novos contratos sobem mais. O Índice FipeZap de Locação Residencial acumulou 9,16% em 12 meses até agosto, contra 4,22% do IPCA. Nos apartamentos de dois dormitórios, a alta foi de 10,25%. O índice cobre 36 cidades, entre elas 22 capitais, e mede preços anunciados. Serve como tendência, não como valor de Marau.</p>\n<p>No financiamento convencional, a taxa de juros é fixada no contrato. O saldo devedor é corrigido pela Taxa Referencial (TR), que acumulou cerca de 2% em 12 meses, menos da metade da inflação.</p>\n<blockquote>O aluguel acompanha os preços. A dívida acompanha a TR.</blockquote>\n\n<h2 id=\"ponto-de-partida\">Onde a conta começa</h2>\n<p>Vale começar pela parte menos confortável. O rendimento médio do aluguel residencial no país foi de 6,14% ao ano em agosto de 2026, segundo o FipeZap. O financiamento convencional da Caixa parte de cerca de 11% ao ano mais TR.</p>\n<p>No início, o aluguel tende a cobrir só parte da parcela, e a diferença sai do bolso do investidor. A tese de quem financia para alugar é de prazo: com o tempo, o aluguel é reajustado e a parcela sofre uma correção menor.</p>\n\n<h2 id=\"conta\">A conta ao longo do tempo</h2>\n<p>Considere um imóvel de R$ 410 mil com 20% de entrada. Ficam R$ 328 mil financiados em 35 anos, no sistema SAC, a 11% ao ano mais TR de 2% ao ano. O aluguel inicial parte do rendimento médio nacional de 6,14% ao ano, ou R$ 2.098 por mês, e é reajustado em 4,5% ao ano.</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n  <thead><tr><th>Ano</th><th>Aluguel</th><th>Parcela</th><th>Aluguel cobre</th></tr></thead>\n  <tbody>\n    <tr><td>0</td><td>R$ 2.098</td><td>R$ 3.788</td><td>55%</td></tr>\n    <tr><td>5</td><td>R$ 2.614</td><td>R$ 3.708</td><td>71%</td></tr>\n    <tr><td>10</td><td>R$ 3.258</td><td>R$ 3.570</td><td>91%</td></tr>\n    <tr><td>15</td><td>R$ 4.060</td><td>R$ 3.363</td><td>121%</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"article-note\">Simulação ilustrativa, com valores hipotéticos. Não inclui vacância, IPTU, condomínio, manutenção, imposto de renda, seguros e taxa de administração. O aluguel real em Marau depende do mercado local.</p>\n<p>Em cada parcela paga, parte reduz o saldo devedor. É o patrimônio que se forma enquanto o aluguel ajuda a pagar a conta.</p>\n\n<h2 id=\"custos\">O que entra na conta além da parcela</h2>\n<ul>\n  <li><strong>Vacância.</strong> Nos meses sem inquilino, a parcela segue por sua conta.</li>\n  <li><strong>Custos do imóvel.</strong> IPTU e condomínio nos períodos vagos, manutenção e eventual taxa de administração.</li>\n  <li><strong>Imposto de renda</strong> sobre o aluguel, conforme a legislação.</li>\n  <li><strong>Tipo de contrato.</strong> Em contratos atrelados ao IPCA ou ao CDI, a parcela sobe com o índice.</li>\n  <li><strong>Crédito.</strong> Em regra, a parcela inicial pode comprometer até 30% da renda bruta familiar.</li>\n  <li><strong>Minha Casa, Minha Vida.</strong> O programa é voltado à moradia da família. Para investimento, o mais comum é o financiamento convencional, com taxa maior.</li>\n</ul>\n\n<h2 id=\"avaliar\">Como avaliar antes de comprar</h2>\n<ol>\n  <li><strong>Descubra o aluguel praticado.</strong> Um corretor local informa valores e o tempo médio de locação na região.</li>\n  <li><strong>Simule o financiamento.</strong> A simulação mostra taxa, prazo e parcela reais.</li>\n  <li><strong>Monte um cenário conservador.</strong> Inclua vacância e custos e defina quanto de diferença mensal você suporta.</li>\n</ol>\n<p>O Alta Vista é vendido à vista ou com 20% de entrada mais financiamento bancário. O apartamento está pronto, com 76,90 m² privativos, suíte e duas vagas, e pode ser colocado para locação sem esperar obra. Visite e converse com a construtora sobre as condições.</p>\n\n<div class=\"article-cta\">\n  <a class=\"button button-dark\" href=\"https://wa.me/5548991223600?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20unidades%20do%20Residencial%20Alta%20Vista.\" target=\"_blank\" rel=\"noreferrer\">Agende sua visita pelo WhatsApp</a>\n</div>\n\n<section class=\"article-faq\" aria-labelledby=\"perguntas-frequentes\">\n  <h2 id=\"perguntas-frequentes\">Perguntas frequentes</h2>\n  <div class=\"faq-item\"><h3>O aluguel paga a parcela do financiamento?</h3><p>No início, tende a cobrir só parte. O rendimento médio do aluguel no país foi de 6,14% ao ano em agosto de 2026, e o financiamento convencional parte de cerca de 11% ao ano mais TR. Com o reajuste do aluguel e a parcela corrigida apenas pela TR, a cobertura tende a crescer, mas o resultado depende do aluguel praticado, da vacância e dos custos.</p></div>\n  <div class=\"faq-item\"><h3>Posso financiar pelo Minha Casa, Minha Vida para alugar o imóvel?</h3><p>O programa é voltado à moradia da família. Para imóvel de investimento, o mais comum é o financiamento convencional, com taxa maior. Confirme as regras e as condições diretamente com o banco.</p></div>\n  <div class=\"faq-item\"><h3>E se o imóvel ficar vago?</h3><p>Nos meses sem inquilino, a parcela e os custos do imóvel continuam por conta do proprietário. Por isso vale simular um cenário com vacância e definir quanto de diferença mensal cabe no seu orçamento.</p></div>\n  <div class=\"faq-item\"><h3>A inflação sempre favorece quem financia para alugar?</h3><p>Não. Em contratos com taxa fixa mais TR, o efeito tende a ser favorável. Em contratos atrelados ao IPCA ou ao CDI, a parcela sobe com o índice. Além disso, o aluguel depende do mercado local, que pode não acompanhar a inflação. Não há garantia de resultado.</p></div>\n</section>\n\n<section class=\"article-sources\">\n  <p class=\"article-sources-title\">Fontes consultadas</p>\n  <ul>\n    <li><a href=\"https://exame.com/mercado-imobiliario/aluguel-sobe-mais-de-9-em-12-meses-o-dobro-da-inflacao/\" target=\"_blank\" rel=\"noreferrer\">Exame — Aluguel sobe mais de 9% em 12 meses, com dados do FipeZap e rendimento médio (ago/2026)</a></li>\n    <li><a href=\"https://www.quintoandar.com.br/guias/dados-indices/igp-m-reajuste-de-aluguel-2026/\" target=\"_blank\" rel=\"noreferrer\">QuintoAndar — IGP-M acumulado e reajuste de aluguel (ago/2026)</a></li>\n    <li><a href=\"https://www.quintoandar.com.br/guias/dados-indices/ipca-acumulado-reajuste-de-aluguel-2026/\" target=\"_blank\" rel=\"noreferrer\">QuintoAndar — IPCA acumulado, com dados do IBGE (ago/2026)</a></li>\n    <li><a href=\"https://www.debit.com.br/tabelas/tr-bacen\" target=\"_blank\" rel=\"noreferrer\">Debit — Taxa Referencial (TR), com dados do Banco Central (set/2026)</a></li>\n    <li><a href=\"https://larya.com.br/blog/taxa-financiamento-imobiliario-2026/\" target=\"_blank\" rel=\"noreferrer\">Larya — Taxas de financiamento imobiliário em 2026 (ago/2026)</a></li>\n  </ul>\n</section>",
    "jsonLd": [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Comprar financiado para alugar: o que a inflação muda na conta do investidor",
        "description": "O aluguel acompanha os preços; a dívida tem taxa fixa e TR. Veja como a inflação afeta a conta de quem financia um imóvel para alugar, com riscos e limites.",
        "image": "https://www.altavistamarau.com.br/assets/blog-inflacao-aluguel.webp",
        "mainEntityOfPage": "https://www.altavistamarau.com.br/blog/inflacao-aluguel-financiamento-imobiliario",
        "datePublished": "2026-09-27",
        "dateModified": "2026-09-27",
        "author": {
          "@type": "Organization",
          "name": "Construtora Fioravanso e Zanchet Ltda."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Residencial Alta Vista",
          "url": "https://www.altavistamarau.com.br"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O aluguel paga a parcela do financiamento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No início, tende a cobrir só parte. O rendimento médio do aluguel no país foi de 6,14% ao ano em agosto de 2026, e o financiamento convencional parte de cerca de 11% ao ano mais TR. Com o reajuste do aluguel e a parcela corrigida apenas pela TR, a cobertura tende a crescer, mas o resultado depende do aluguel praticado, da vacância e dos custos."
            }
          },
          {
            "@type": "Question",
            "name": "Posso financiar pelo Minha Casa, Minha Vida para alugar o imóvel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O programa é voltado à moradia da família. Para imóvel de investimento, o mais comum é o financiamento convencional, com taxa maior. Confirme as regras e as condições diretamente com o banco."
            }
          },
          {
            "@type": "Question",
            "name": "E se o imóvel ficar vago?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nos meses sem inquilino, a parcela e os custos do imóvel continuam por conta do proprietário. Por isso vale simular um cenário com vacância e definir quanto de diferença mensal cabe no seu orçamento."
            }
          },
          {
            "@type": "Question",
            "name": "A inflação sempre favorece quem financia para alugar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não. Em contratos com taxa fixa mais TR, o efeito tende a ser favorável. Em contratos atrelados ao IPCA ou ao CDI, a parcela sobe com o índice. Além disso, o aluguel depende do mercado local, que pode não acompanhar a inflação. Não há garantia de resultado."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.altavistamarau.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.altavistamarau.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Comprar financiado para alugar: o que a inflação muda na conta do investidor",
            "item": "https://www.altavistamarau.com.br/blog/inflacao-aluguel-financiamento-imobiliario"
          }
        ]
      }
    ],
    "related": [
      {
        "title": "Poder de compra em queda: o papel do imóvel na preservação do patrimônio",
        "href": "/blog/imovel-protege-patrimonio-poder-de-compra"
      },
      {
        "title": "Novos limites do Minha Casa, Minha Vida: o que muda para quem quer comprar um apartamento pronto",
        "href": "/blog/novos-limites-minha-casa-minha-vida"
      },
      {
        "title": "Apartamento pronto em Marau: quais são as vantagens?",
        "href": "/blog/apartamento-pronto-em-marau"
      }
    ]
  },
  {
    "slug": "imovel-protege-patrimonio-poder-de-compra",
    "category": "PATRIMÔNIO",
    "title": "Poder de compra em queda: o papel do imóvel na preservação do patrimônio",
    "excerpt": "Desde 1994, o real perdeu cerca de 87% do poder de compra. Veja o que os dados mostram sobre imóveis e patrimônio, com os limites dessa comparação.",
    "image": "/assets/blog-patrimonio-poder-de-compra.webp",
    "date": "27 set 2026",
    "html": "<p class=\"lead\">Para comprar hoje o que R$ 100 compravam em julho de 1994, você precisa de cerca de R$ 787. Quem guarda dinheiro pensando no longo prazo convive com essa conta.</p>\n\n<nav class=\"article-toc\" aria-label=\"Sumário\">\n  <p class=\"article-toc-title\">Neste artigo</p>\n  <ol>\n    <li><a href=\"#poder-de-compra\">Três décadas de perda de poder de compra</a></li>\n    <li><a href=\"#por-que-imovel\">Por que o imóvel entra na conversa</a></li>\n    <li><a href=\"#historico\">O que a história mostra, e o que não mostra</a></li>\n    <li><a href=\"#diversificar\">Preservar não é multiplicar</a></li>\n    <li><a href=\"#o-que-observar\">O que observar num imóvel de longo prazo</a></li>\n    <li><a href=\"#perguntas-frequentes\">Perguntas frequentes</a></li>\n  </ol>\n</nav>\n\n<h2 id=\"poder-de-compra\">Três décadas de perda de poder de compra</h2>\n<p>Desde o Plano Real, em julho de 1994, o IPCA acumulou mais de 700%. Em 32 anos, isso equivale a uma inflação média de cerca de 6,7% ao ano. O real perdeu cerca de 87% do poder de compra: uma nota de R$ 100 vale hoje o que R$ 12,71 valiam em 1994.</p>\n<p>A inflação atual é menor, de 4,22% em 12 meses até agosto de 2026. Mas o efeito é cumulativo. Dinheiro parado que não rende ao menos a inflação perde valor ano após ano.</p>\n\n<h2 id=\"por-que-imovel\">Por que o imóvel entra na conversa</h2>\n<p>O imóvel é um bem físico, com uso próprio. Você mora nele ou o mantém como reserva. Seu valor não depende apenas da moeda.</p>\n<p>Há também o custo de reposição. O INCC-M, que mede o custo da construção, acumulou 6,56% em 12 meses até agosto de 2026, acima dos 4,22% do IPCA. Construir fica mais caro, e isso costuma dar suporte ao valor de imóveis já construídos.</p>\n<p>E há a cidade. Marau tem 45.124 habitantes no Censo 2022 do IBGE e cresceu 24% desde 2010. Mais moradores tendem a ampliar a demanda por moradia.</p>\n\n<h2 id=\"historico\">O que a história mostra, e o que não mostra</h2>\n<p>Os dados nacionais indicam que o imóvel nem sempre acompanhou a inflação. Entre 2014 e 2024, o IPCA acumulou 85,8%, e o Índice FipeZap de venda residencial subiu 41,6%. Em 2015, a inflação foi de 10,67%, e os preços de venda subiram 1,32%.</p>\n<p>Nos últimos anos, o quadro foi diferente:</p>\n<div class=\"article-table-wrap\">\n<table class=\"article-table\">\n  <thead><tr><th>Período</th><th>Preço de venda (FipeZap)</th><th>Inflação</th></tr></thead>\n  <tbody>\n    <tr><td>2014 a 2024</td><td>+41,6%</td><td>+85,8%</td></tr>\n    <tr><td>2024</td><td>+7,73%</td><td>+4,64%</td></tr>\n    <tr><td>12 meses até ago/2026</td><td>+5,49%</td><td>+4,14%</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"article-note\">O FipeZap mede preços anunciados de apartamentos prontos em cidades monitoradas, entre elas as capitais. Não representa preços negociados nem o mercado de Marau. Última linha: inflação de referência usada pelo próprio índice.</p>\n<blockquote>Imóvel é decisão de longo prazo, não de um ano.</blockquote>\n<p>A leitura honesta é que houve mais de uma década de valorização abaixo da inflação, seguida de recuperação. O resultado depende do período, da cidade e do imóvel.</p>\n\n<h2 id=\"diversificar\">Preservar não é multiplicar</h2>\n<p>O imóvel tem pontos fortes e limites.</p>\n<ul>\n  <li><strong>A favor:</strong> uso próprio, bem tangível e custo de reposição crescente.</li>\n  <li><strong>Limites:</strong> liquidez menor que a de aplicações financeiras, custos de compra e manutenção, e concentração quando é o único bem.</li>\n</ul>\n<p>Por isso o imóvel costuma entrar como parte de uma estratégia de diversificação do patrimônio, com perspectiva de longo prazo. Um planejador financeiro ajuda a definir a proporção certa para o seu perfil.</p>\n\n<h2 id=\"o-que-observar\">O que observar num imóvel de longo prazo</h2>\n<ul>\n  <li><strong>Localização.</strong> Acesso a serviços, comércio, escolas e saúde.</li>\n  <li><strong>Estado e documentação.</strong> Imóvel pronto e regular permite conhecer o que você está comprando.</li>\n  <li><strong>Planta e acabamento.</strong> Ambientes funcionais, suíte e vagas de garagem reduzem adaptações futuras.</li>\n</ul>\n<p>O Residencial Alta Vista reúne esses pontos: apartamento pronto em um edifício de 20 unidades com documentação regular, 76,90 m² privativos, suíte, sacada com churrasqueira e duas vagas, no Jardim América, a minutos do centro de Marau.</p>\n<p>Quanto um imóvel pode render em aluguel varia. Um corretor local informa os valores praticados na região. O primeiro passo é visitar o apartamento e conversar sobre as condições.</p>\n\n<div class=\"article-cta\">\n  <a class=\"button button-dark\" href=\"https://wa.me/5548991223600?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20unidades%20do%20Residencial%20Alta%20Vista.\" target=\"_blank\" rel=\"noreferrer\">Agende sua visita pelo WhatsApp</a>\n</div>\n\n<section class=\"article-faq\" aria-labelledby=\"perguntas-frequentes\">\n  <h2 id=\"perguntas-frequentes\">Perguntas frequentes</h2>\n  <div class=\"faq-item\"><h3>O imóvel protege da inflação?</h3><p>Depende do período. Entre 2014 e 2024, os preços de venda subiram menos do que a inflação. Nos últimos dois anos, subiram mais. Não há garantia de que o padrão recente se mantenha.</p></div>\n  <div class=\"faq-item\"><h3>O imóvel sempre valoriza?</h3><p>Não. Os preços podem subir, ficar parados ou cair, conforme a cidade, o imóvel e o momento do mercado. A construtora não promete valorização nem rentabilidade.</p></div>\n  <div class=\"faq-item\"><h3>Imóvel é melhor do que uma aplicação financeira?</h3><p>São instrumentos diferentes, com liquidez, custos e riscos próprios. Muitas pessoas combinam os dois. Um planejador financeiro pode orientar a proporção adequada ao seu perfil.</p></div>\n  <div class=\"faq-item\"><h3>Vale escolher um imóvel pronto para guardar patrimônio?</h3><p>Um imóvel pronto permite visitar o apartamento real, conferir acabamentos e documentação e planejar a ocupação imediata, sem risco de obra. No Alta Vista, a compra é à vista ou com 20% de entrada mais financiamento bancário.</p></div>\n</section>\n\n<section class=\"article-sources\">\n  <p class=\"article-sources-title\">Fontes consultadas</p>\n  <ul>\n    <li><a href=\"https://www.penoticia.com.br/2026/07/real-perde-poder-de-compra-apos-32-anos.html\" target=\"_blank\" rel=\"noreferrer\">Penotícia — Real perde poder de compra após 32 anos de Plano Real (jul/2026, cálculo pelo IPCA)</a></li>\n    <li><a href=\"https://www.nsctotal.com.br/economia/a-mudanca-no-poder-de-compra-30-anos-apos-a-implantacao-do-plano-real\" target=\"_blank\" rel=\"noreferrer\">NSC Total — Poder de compra 30 anos após o Plano Real (calculadora IPCA do IBGE)</a></li>\n    <li><a href=\"https://istoedinheiro.com.br/em-10-anos-inflacao-foi-o-dobro-da-alta-do-preco-de-imoveis-investimento-vale-a-pena\" target=\"_blank\" rel=\"noreferrer\">ISTOÉ Dinheiro — Em 10 anos, inflação foi o dobro da alta do preço de imóveis (jan/2025)</a></li>\n    <li><a href=\"https://bpmoney.com.br/economia/precos-de-imoveis-sobem-acima-da-inflacao-mesmo-com-credito-caro-mostra-fipezap/\" target=\"_blank\" rel=\"noreferrer\">BPMoney — Preços de imóveis sobem acima da inflação, com dados do FipeZap (ago/2026)</a></li>\n    <li><a href=\"https://portalibre.fgv.br/press-releases/incc-m-de-agosto-de-2026\" target=\"_blank\" rel=\"noreferrer\">FGV IBRE — INCC-M de agosto de 2026</a></li>\n    <li><a href=\"https://www.quintoandar.com.br/guias/dados-indices/ipca-acumulado-reajuste-de-aluguel-2026/\" target=\"_blank\" rel=\"noreferrer\">QuintoAndar — IPCA acumulado, com dados do IBGE (ago/2026)</a></li>\n  </ul>\n</section>",
    "jsonLd": [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Poder de compra em queda: o papel do imóvel na preservação do patrimônio",
        "description": "Desde 1994, o real perdeu cerca de 87% do poder de compra. Veja o que os dados mostram sobre imóveis e patrimônio, com os limites dessa comparação.",
        "image": "https://www.altavistamarau.com.br/assets/blog-patrimonio-poder-de-compra.webp",
        "mainEntityOfPage": "https://www.altavistamarau.com.br/blog/imovel-protege-patrimonio-poder-de-compra",
        "datePublished": "2026-09-27",
        "dateModified": "2026-09-27",
        "author": {
          "@type": "Organization",
          "name": "Construtora Fioravanso e Zanchet Ltda."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Residencial Alta Vista",
          "url": "https://www.altavistamarau.com.br"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O imóvel protege da inflação?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende do período. Entre 2014 e 2024, os preços de venda subiram menos do que a inflação. Nos últimos dois anos, subiram mais. Não há garantia de que o padrão recente se mantenha."
            }
          },
          {
            "@type": "Question",
            "name": "O imóvel sempre valoriza?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não. Os preços podem subir, ficar parados ou cair, conforme a cidade, o imóvel e o momento do mercado. A construtora não promete valorização nem rentabilidade."
            }
          },
          {
            "@type": "Question",
            "name": "Imóvel é melhor do que uma aplicação financeira?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "São instrumentos diferentes, com liquidez, custos e riscos próprios. Muitas pessoas combinam os dois. Um planejador financeiro pode orientar a proporção adequada ao seu perfil."
            }
          },
          {
            "@type": "Question",
            "name": "Vale escolher um imóvel pronto para guardar patrimônio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Um imóvel pronto permite visitar o apartamento real, conferir acabamentos e documentação e planejar a ocupação imediata, sem risco de obra. No Alta Vista, a compra é à vista ou com 20% de entrada mais financiamento bancário."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.altavistamarau.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.altavistamarau.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Poder de compra em queda: o papel do imóvel na preservação do patrimônio",
            "item": "https://www.altavistamarau.com.br/blog/imovel-protege-patrimonio-poder-de-compra"
          }
        ]
      }
    ],
    "related": [
      {
        "title": "Comprar financiado para alugar: o que a inflação muda na conta do investidor",
        "href": "/blog/inflacao-aluguel-financiamento-imobiliario"
      },
      {
        "title": "Novos limites do Minha Casa, Minha Vida: o que muda para quem quer comprar um apartamento pronto",
        "href": "/blog/novos-limites-minha-casa-minha-vida"
      },
      {
        "title": "O que observar em um apartamento de dois dormitórios com suíte?",
        "href": "/blog/dois-dormitorios-com-suite"
      }
    ]
  },
  {
    "slug": "apartamento-pronto-em-marau",
    "category": "MORADIA",
    "title": "Apartamento pronto em Marau: quais são as vantagens?",
    "excerpt": "Comprar um imóvel finalizado muda a relação entre expectativa, decisão e o momento de começar uma nova rotina.",
    "image": "/assets/alta-vista-interior.webp",
    "date": "08 set 2026",
    "html": "\n<p class=\"lead\">Comprar um imóvel finalizado muda a relação entre expectativa, decisão e o momento de começar uma nova rotina.</p>\n\n<nav class=\"article-toc\" aria-label=\"Sumário\">\n  <p class=\"article-toc-title\">Neste artigo</p>\n  <ol>\n    <li><a href=\"#por-que-considerar-um-imovel-pronto\">Por que considerar um imóvel pronto</a></li>\n    <li><a href=\"#o-que-voce-ve-e-o-que-voce-leva\">O que você vê é o que você leva</a></li>\n    <li><a href=\"#as-dores-de-quem-compra-na-planta\">As dores de quem compra na planta</a></li>\n    <li><a href=\"#o-que-muda-quando-o-apartamento-ja-esta-pronto\">O que muda quando o apartamento já está pronto</a></li>\n    <li><a href=\"#condicoes-para-decidir-com-clareza\">Condições para decidir com clareza</a></li>\n    <li><a href=\"#perguntas-frequentes\">Perguntas frequentes</a></li>\n  </ol>\n</nav>\n\n<h2 id=\"por-que-considerar-um-imovel-pronto\">Por que considerar um imóvel pronto</h2>\n<p>Um apartamento pronto muda o tipo de decisão que você toma. Em vez de avaliar uma planta ou uma promessa de entrega, você caminha pelos ambientes, sente a luz de cada cômodo e confere o acabamento com as próprias mãos. No Alta Vista, o edifício já está entregue, com documentação regular e moradores nas unidades vizinhas.</p>\n<p>Essa diferença importa principalmente para quem tem um prazo real para se mudar — trocar de cidade, sair do aluguel ou reorganizar a rotina da família sem depender do cronograma de uma obra.</p>\n<h2 id=\"o-que-voce-ve-e-o-que-voce-leva\">O que você vê é o que você leva</h2>\n<p>Os apartamentos do Alta Vista somam 76,90 m² privativos, com porcelanato, forro de gesso, esquadrias de alumínio anodizado e persianas de enrolar nos dormitórios. A preparação para ar-condicionado split e a tubulação para água quente já vêm prontas, sem obra extra depois da mudança.</p>\n<blockquote>Conhecer o espaço antes de decidir é o que torna a escolha mais tranquila.</blockquote>\n<h2 id=\"as-dores-de-quem-compra-na-planta\">As dores de quem compra na planta</h2>\n<p>Quem já comprou um imóvel na planta conhece a lista de imprevistos que acompanha a espera. O atraso na entrega é o mais comum: mudanças no cronograma da obra empurram a data das chaves para meses — às vezes anos — depois do combinado, e isso significa adiar a mudança, o fim do aluguel ou a reorganização da família.</p>\n<p>Há também o custo que cresce sem aviso. Enquanto a obra não termina, o saldo devedor costuma ser corrigido mês a mês pelo INCC, o que eleva o valor final do imóvel em relação ao que foi negociado no lançamento. Soma-se a isso a diferença entre a maquete apresentada na venda e o que é efetivamente entregue — metragens, acabamentos e prazos que só se confirmam no fim.</p>\n<p>E existe o risco, ainda que menor hoje do que no passado, de a obra atrasar tanto que a construtora enfrente dificuldades financeiras. A Lei dos Distratos (Lei nº 13.786/2018) trouxe proteções importantes para esses casos — como um prazo de tolerância e a possibilidade de indenização pelo atraso — mas nenhuma lei devolve o tempo perdido de planejamento.</p>\n<h2 id=\"o-que-muda-quando-o-apartamento-ja-esta-pronto\">O que muda quando o apartamento já está pronto</h2>\n<p>Um imóvel pronto elimina essas variáveis de uma vez. O preço negociado é o preço final, sem correção monetária pendente até a entrega. A metragem, o acabamento e a distribuição dos ambientes são exatamente o que você vê na visita — não uma promessa em maquete ou um render.</p>\n<p>No Alta Vista, o edifício já está entregue, com documentação regular e moradores nas unidades vizinhas. O financiamento pode ser avaliado antes da assinatura, com as condições já conhecidas, e a mudança para o novo endereço pode acontecer assim que a negociação for concluída — sem depender do cronograma de uma obra.</p>\n<h2 id=\"condicoes-para-decidir-com-clareza\">Condições para decidir com clareza</h2>\n<p>A compra pode ser feita à vista ou com 20% de entrada mais financiamento bancário. Os medidores são individuais, o que simplifica o controle das contas de água e energia desde o primeiro mês.</p>\n<p>Para quem já decidiu, resta uma etapa: visitar o edifício, comparar as unidades disponíveis e conversar sobre a condição comercial de cada uma delas com a construtora.</p>\n\n<div class=\"article-cta\">\n  <a class=\"button button-dark\" href=\"https://wa.me/5548991223600?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20unidades%20do%20Residencial%20Alta%20Vista.\" target=\"_blank\" rel=\"noreferrer\">Agende sua visita pelo WhatsApp</a>\n</div>\n\n<section class=\"article-faq\" aria-labelledby=\"perguntas-frequentes\">\n  <h2 id=\"perguntas-frequentes\">Perguntas frequentes</h2>\n  <div class=\"faq-item\"><h3>O apartamento do Alta Vista já está pronto para morar?</h3><p>Sim. O edifício está pronto, com documentação regular, e já possui moradores nas unidades entregues.</p></div>\n  <div class=\"faq-item\"><h3>Quais são as condições de pagamento disponíveis?</h3><p>As unidades podem ser adquiridas à vista ou com 20% de entrada mais financiamento bancário.</p></div>\n  <div class=\"faq-item\"><h3>Qual é a área privativa dos apartamentos?</h3><p>76,90 m² privativos, totalizando 137,87 m² com garagem e área comum.</p></div>\n  <div class=\"faq-item\"><h3>As unidades anunciadas têm a mesma planta?</h3><p>Sim. As unidades anunciadas possuem a mesma configuração de apartamento.</p></div>\n  <div class=\"faq-item\"><h3>O que a Lei dos Distratos garante em caso de atraso na entrega de um imóvel na planta?</h3><p>A Lei nº 13.786/2018 prevê, em geral, um prazo de tolerância de até 180 dias para a entrega e a possibilidade de indenização pelo atraso além desse período, conforme o contrato e a jurisprudência aplicável.</p></div>\n</section>\n\n<section class=\"article-sources\">\n  <p class=\"article-sources-title\">Fontes consultadas</p>\n  <ul>\n    <li><a href=\"https://www.anoreg.org.br/site/veja-os-6-principais-perigos-de-comprar-imoveis-na-planta/\" target=\"_blank\" rel=\"noreferrer\">ANOREG/BR — Os 6 principais perigos de comprar imóveis na planta</a></li>\n    <li><a href=\"https://exame.com/mercado-imobiliario/comprei-um-imovel-na-planta-e-a-construtora-atrasou-a-entrega-quais-meus-direitos/\" target=\"_blank\" rel=\"noreferrer\">Exame — Direitos do comprador em caso de atraso na entrega do imóvel na planta</a></li>\n  </ul>\n</section>\n",
    "jsonLd": [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Apartamento pronto em Marau: quais são as vantagens?",
        "description": "Comprar um imóvel finalizado muda a relação entre expectativa, decisão e o momento de começar uma nova rotina.",
        "image": "https://www.altavistamarau.com.br/assets/alta-vista-interior.webp",
        "mainEntityOfPage": "https://www.altavistamarau.com.br/blog/apartamento-pronto-em-marau",
        "datePublished": "2026-09-08",
        "dateModified": "2026-09-08",
        "author": {
          "@type": "Organization",
          "name": "Construtora Fioravanso e Zanchet Ltda."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Residencial Alta Vista",
          "url": "https://www.altavistamarau.com.br"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O apartamento do Alta Vista já está pronto para morar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. O edifício está pronto, com documentação regular, e já possui moradores nas unidades entregues."
            }
          },
          {
            "@type": "Question",
            "name": "Quais são as condições de pagamento disponíveis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As unidades podem ser adquiridas à vista ou com 20% de entrada mais financiamento bancário."
            }
          },
          {
            "@type": "Question",
            "name": "Qual é a área privativa dos apartamentos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "76,90 m² privativos, totalizando 137,87 m² com garagem e área comum."
            }
          },
          {
            "@type": "Question",
            "name": "As unidades anunciadas têm a mesma planta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. As unidades anunciadas possuem a mesma configuração de apartamento."
            }
          },
          {
            "@type": "Question",
            "name": "O que a Lei dos Distratos garante em caso de atraso na entrega de um imóvel na planta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Lei nº 13.786/2018 prevê, em geral, um prazo de tolerância de até 180 dias para a entrega e a possibilidade de indenização pelo atraso além desse período, conforme o contrato e a jurisprudência aplicável."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.altavistamarau.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.altavistamarau.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Apartamento pronto em Marau: quais são as vantagens?",
            "item": "https://www.altavistamarau.com.br/blog/apartamento-pronto-em-marau"
          }
        ]
      }
    ],
    "related": [
      {
        "title": "O que observar em um apartamento de dois dormitórios com suíte?",
        "href": "/blog/dois-dormitorios-com-suite"
      },
      {
        "title": "Morar ou investir em Marau: como avaliar um imóvel pronto?",
        "href": "/blog/morar-ou-investir-em-marau"
      },
      {
        "title": "Novos limites do Minha Casa, Minha Vida: o que muda para quem quer comprar um apartamento pronto",
        "href": "/blog/novos-limites-minha-casa-minha-vida"
      }
    ]
  },
  {
    "slug": "dois-dormitorios-com-suite",
    "category": "GUIA DE COMPRA",
    "title": "O que observar em um apartamento de dois dormitórios com suíte?",
    "excerpt": "Uma leitura prática sobre planta, integração, iluminação, conforto e os detalhes que fazem diferença todos os dias.",
    "image": "/assets/alta-vista-vista.webp",
    "date": "05 set 2026",
    "html": "\n<p class=\"lead\">Uma leitura prática sobre planta, integração, iluminação, conforto e os detalhes que fazem diferença todos os dias.</p>\n\n<nav class=\"article-toc\" aria-label=\"Sumário\">\n  <p class=\"article-toc-title\">Neste artigo</p>\n  <ol>\n    <li><a href=\"#a-logica-de-uma-boa-planta\">A lógica de uma boa planta</a></li>\n    <li><a href=\"#integracao-sem-perder-privacidade\">Integração sem perder privacidade</a></li>\n    <li><a href=\"#detalhes-que-fazem-diferenca-no-dia-a-dia\">Detalhes que fazem diferença no dia a dia</a></li>\n    <li><a href=\"#vagas-de-garagem-e-area-total\">Vagas de garagem e área total</a></li>\n    <li><a href=\"#luz-natural-e-ventilacao-cruzada\">Luz natural e ventilação cruzada</a></li>\n    <li><a href=\"#como-organizar-os-ambientes-no-dia-a-dia\">Como organizar os ambientes no dia a dia</a></li>\n    <li><a href=\"#convivencia-e-rotina-no-predio\">Convivência e rotina no prédio</a></li>\n    <li><a href=\"#dois-dormitorios-como-decisao-de-longo-prazo\">Dois dormitórios como decisão de longo prazo</a></li>\n    <li><a href=\"#perguntas-frequentes\">Perguntas frequentes</a></li>\n  </ol>\n</nav>\n\n<h2 id=\"a-logica-de-uma-boa-planta\">A lógica de uma boa planta</h2>\n<p>Um apartamento de dois dormitórios com suíte funciona bem quando a planta separa claramente a área social da área íntima. No Alta Vista, a suíte fica isolada dos ambientes de convivência, o que preserva o descanso mesmo com visitas na sala.</p>\n<p>O segundo dormitório mantém flexibilidade: pode virar quarto de criança, escritório ou espaço de hóspedes, sem comprometer a suíte principal.</p>\n<h2 id=\"integracao-sem-perder-privacidade\">Integração sem perder privacidade</h2>\n<p>A sala de estar e jantar se integram à cozinha americana, o que amplia visualmente o ambiente social. A sacada com churrasqueira funciona como uma extensão desse espaço, ideal para reunir a família nos fins de semana.</p>\n<blockquote>Espaços que conversam entre si tornam o dia a dia mais simples.</blockquote>\n<h2 id=\"detalhes-que-fazem-diferenca-no-dia-a-dia\">Detalhes que fazem diferença no dia a dia</h2>\n<p>Dois banheiros evitam filas de manhã. Persianas de enrolar nos dormitórios, preparação para split e tubulação para água quente reduzem obras futuras. Os medidores individuais de água e energia deixam o controle do consumo mais simples.</p>\n<h2 id=\"vagas-de-garagem-e-area-total\">Vagas de garagem e área total</h2>\n<p>Cada apartamento conta com duas vagas de garagem, com cerca de 15 m² cada — juntas, aproximadamente 30 m². Somadas à área comum, a metragem total chega a 137,87 m², espaço suficiente para acomodar rotina, visitas e um segundo veículo sem aperto.</p>\n<p>Vale conferir a planta completa antes de decidir, para confirmar que a distribuição dos ambientes combina com a forma como a sua família usa a casa no dia a dia.</p>\n<h2 id=\"luz-natural-e-ventilacao-cruzada\">Luz natural e ventilação cruzada</h2>\n<p>A orientação solar e a ventilação cruzada fazem diferença direta no conforto térmico e na conta de energia. No Alta Vista, os dormitórios recebem persianas de enrolar que ajudam a controlar a entrada de luz sem abrir mão da ventilação, e as janelas amplas mantêm os ambientes sociais iluminados ao longo do dia.</p>\n<p>Vale observar, na planta, para qual lado cada ambiente está voltado. Um dormitório que recebe sol da manhã tende a ser mais agradável para acordar; uma sala voltada para a tarde aproveita melhor a luz nos horários em que a família costuma se reunir.</p>\n<h2 id=\"como-organizar-os-ambientes-no-dia-a-dia\">Como organizar os ambientes no dia a dia</h2>\n<p>Um apartamento de 76,90 m² privativos pede planejamento na escolha dos móveis. Na sala integrada à cozinha americana, peças com pés altos e paletas claras ajudam a manter a sensação de amplitude. Já no segundo dormitório, um bom aproveitamento vertical — estantes e armários até o teto — evita que o cômodo pareça apertado quando muda de função ao longo dos anos.</p>\n<p>A sacada com churrasqueira pede pouco: uma mesa compacta e alguns vasos já bastam para transformar o espaço em uma extensão da sala nos fins de semana, sem depender de reforma.</p>\n<h2 id=\"convivencia-e-rotina-no-predio\">Convivência e rotina no prédio</h2>\n<p>Morar em um edifício pronto significa também conhecer, antes de decidir, como funciona a rotina do prédio — o comportamento dos vizinhos, a limpeza das áreas comuns e a administração do condomínio. No Alta Vista, essa realidade já está estabelecida, o que reduz surpresas depois da mudança.</p>\n<p>Os medidores individuais de água e energia, somados a vagas de garagem próprias, simplificam a divisão de custos entre os moradores e evitam disputas comuns em prédios com infraestrutura compartilhada.</p>\n<h2 id=\"dois-dormitorios-como-decisao-de-longo-prazo\">Dois dormitórios como decisão de longo prazo</h2>\n<p>A configuração de dois dormitórios com suíte tende a acompanhar diferentes fases da vida: começa como espaço de casal com quarto de hóspedes, pode virar home office e, mais adiante, quarto de criança — sem exigir a troca de imóvel a cada mudança de rotina.</p>\n<p>Essa flexibilidade também conversa com quem pensa em revenda ou locação no futuro: apartamentos de dois dormitórios com suíte, bem localizados e prontos, costumam atrair tanto famílias quanto casais, ampliando o público interessado no imóvel.</p>\n\n<div class=\"article-cta\">\n  <a class=\"button button-dark\" href=\"https://wa.me/5548991223600?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20unidades%20do%20Residencial%20Alta%20Vista.\" target=\"_blank\" rel=\"noreferrer\">Agende sua visita pelo WhatsApp</a>\n</div>\n\n<section class=\"article-faq\" aria-labelledby=\"perguntas-frequentes\">\n  <h2 id=\"perguntas-frequentes\">Perguntas frequentes</h2>\n  <div class=\"faq-item\"><h3>Como estão distribuídos os dois dormitórios do apartamento?</h3><p>São dois dormitórios, sendo um deles suíte, com a área íntima separada da área social.</p></div>\n  <div class=\"faq-item\"><h3>Qual a área privativa e a área total do apartamento?</h3><p>76,90 m² privativos e 137,87 m² de área total, somando garagem e área comum.</p></div>\n  <div class=\"faq-item\"><h3>Quantas vagas de garagem estão incluídas?</h3><p>Duas vagas de garagem, com cerca de 15 m² cada (aproximadamente 30 m² no total).</p></div>\n  <div class=\"faq-item\"><h3>O apartamento já vem com sacada e churrasqueira?</h3><p>Sim. A sacada com churrasqueira integra o ambiente social do apartamento.</p></div>\n  <div class=\"faq-item\"><h3>O apartamento recebe boa luz natural?</h3><p>Sim. As janelas amplas e a orientação dos ambientes favorecem a entrada de luz natural ao longo do dia, com persianas de enrolar nos dormitórios para controle.</p></div>\n  <div class=\"faq-item\"><h3>Dá para usar o segundo dormitório como escritório?</h3><p>Sim. A flexibilidade do segundo dormitório permite adaptá-lo como escritório, quarto de hóspedes ou, mais adiante, quarto de criança.</p></div>\n</section>\n",
    "jsonLd": [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "O que observar em um apartamento de dois dormitórios com suíte?",
        "description": "Uma leitura prática sobre planta, integração, iluminação, conforto e os detalhes que fazem diferença todos os dias.",
        "image": "https://www.altavistamarau.com.br/assets/alta-vista-vista.webp",
        "mainEntityOfPage": "https://www.altavistamarau.com.br/blog/dois-dormitorios-com-suite",
        "datePublished": "2026-09-05",
        "dateModified": "2026-09-05",
        "author": {
          "@type": "Organization",
          "name": "Construtora Fioravanso e Zanchet Ltda."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Residencial Alta Vista",
          "url": "https://www.altavistamarau.com.br"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como estão distribuídos os dois dormitórios do apartamento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "São dois dormitórios, sendo um deles suíte, com a área íntima separada da área social."
            }
          },
          {
            "@type": "Question",
            "name": "Qual a área privativa e a área total do apartamento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "76,90 m² privativos e 137,87 m² de área total, somando garagem e área comum."
            }
          },
          {
            "@type": "Question",
            "name": "Quantas vagas de garagem estão incluídas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Duas vagas de garagem, com cerca de 15 m² cada (aproximadamente 30 m² no total)."
            }
          },
          {
            "@type": "Question",
            "name": "O apartamento já vem com sacada e churrasqueira?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. A sacada com churrasqueira integra o ambiente social do apartamento."
            }
          },
          {
            "@type": "Question",
            "name": "O apartamento recebe boa luz natural?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. As janelas amplas e a orientação dos ambientes favorecem a entrada de luz natural ao longo do dia, com persianas de enrolar nos dormitórios para controle."
            }
          },
          {
            "@type": "Question",
            "name": "Dá para usar o segundo dormitório como escritório?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. A flexibilidade do segundo dormitório permite adaptá-lo como escritório, quarto de hóspedes ou, mais adiante, quarto de criança."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.altavistamarau.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.altavistamarau.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "O que observar em um apartamento de dois dormitórios com suíte?",
            "item": "https://www.altavistamarau.com.br/blog/dois-dormitorios-com-suite"
          }
        ]
      }
    ],
    "related": [
      {
        "title": "Apartamento pronto em Marau: quais são as vantagens?",
        "href": "/blog/apartamento-pronto-em-marau"
      },
      {
        "title": "Morar ou investir em Marau: como avaliar um imóvel pronto?",
        "href": "/blog/morar-ou-investir-em-marau"
      },
      {
        "title": "Novos limites do Minha Casa, Minha Vida: o que muda para quem quer comprar um apartamento pronto",
        "href": "/blog/novos-limites-minha-casa-minha-vida"
      }
    ]
  },
  {
    "slug": "morar-ou-investir-em-marau",
    "category": "MARAU",
    "title": "Morar ou investir em Marau: como avaliar um imóvel pronto?",
    "excerpt": "Os critérios que ajudam a olhar para localização, estado do imóvel, custos e objetivo de compra com mais clareza.",
    "image": "/assets/alta-vista-hero.webp",
    "date": "02 set 2026",
    "html": "\n<p class=\"lead\">Os critérios que ajudam a olhar para localização, estado do imóvel, custos e objetivo de compra com mais clareza.</p>\n\n<nav class=\"article-toc\" aria-label=\"Sumário\">\n  <p class=\"article-toc-title\">Neste artigo</p>\n  <ol>\n    <li><a href=\"#defina-o-objetivo-morar-ou-investir\">Defina o objetivo: morar ou investir</a></li>\n    <li><a href=\"#localizacao-o-fator-que-nao-muda-depois\">Localização: o fator que não muda depois</a></li>\n    <li><a href=\"#pronto-ou-na-planta-na-hora-de-decidir\">Pronto ou na planta na hora de decidir</a></li>\n    <li><a href=\"#os-custos-que-entram-na-conta\">Os custos que entram na conta</a></li>\n    <li><a href=\"#criterios-para-uma-decisao-mais-clara\">Critérios para uma decisão mais clara</a></li>\n    <li><a href=\"#perguntas-frequentes\">Perguntas frequentes</a></li>\n  </ol>\n</nav>\n\n<h2 id=\"defina-o-objetivo-morar-ou-investir\">Defina o objetivo: morar ou investir</h2>\n<p>Antes de visitar qualquer unidade, vale responder a uma pergunta simples: o imóvel é para morar ou para investir? A resposta muda os critérios de decisão. Quem vai morar prioriza layout, luz, vizinhança e rotina. Quem pensa em investimento olha primeiro para localização, liquidez e potencial de valorização ou aluguel.</p>\n<p>Em muitos casos, as duas respostas convivem: comprar um imóvel pronto para morar hoje e, mais adiante, transformá-lo em fonte de renda — ou o contrário, comprar pensando em revenda e usar o imóvel enquanto isso. Ter clareza sobre a prioridade ajuda a comparar unidades sem se perder em detalhes que não fazem diferença para o seu objetivo.</p>\n<h2 id=\"localizacao-o-fator-que-nao-muda-depois\">Localização: o fator que não muda depois</h2>\n<p>Acabamento, mobília e decoração podem ser ajustados depois da mudança. A localização, não. Um endereço bem posicionado em Marau — perto de escolas, saúde, comércio e áreas de lazer — tende a manter sua relevância mesmo com o crescimento e a reorganização da cidade ao redor dele.</p>\n<p>Vale observar não só a distância até os pontos de interesse, mas também o tipo de vizinhança, o fluxo da rua e a facilidade de acesso a partir de diferentes regiões da cidade — fatores que pesam tanto para quem vai morar quanto para quem pretende alugar o imóvel no futuro.</p>\n<h2 id=\"pronto-ou-na-planta-na-hora-de-decidir\">Pronto ou na planta na hora de decidir</h2>\n<p>Um imóvel pronto muda a forma como essa avaliação é feita. Em vez de projetar como ficará o empreendimento, é possível visitar o edifício, conferir o acabamento e conversar com moradores das unidades já entregues. Isso reduz a margem de incerteza tanto para quem vai morar quanto para quem está avaliando o investimento.</p>\n<p>Para o investidor, o imóvel pronto tem uma vantagem adicional: pode ser ocupado ou colocado para alugar imediatamente após a compra, sem o intervalo de espera de uma obra em andamento — o que antecipa o retorno sobre o capital investido.</p>\n<blockquote>Decidir com o imóvel diante dos olhos é diferente de decidir com uma promessa no papel.</blockquote>\n<h2 id=\"os-custos-que-entram-na-conta\">Os custos que entram na conta</h2>\n<p>Além do valor de compra, vale simular os custos recorrentes: condomínio, IPTU e, quando houver financiamento, o valor da parcela mensal. Medidores individuais de água e energia, como no Alta Vista, ajudam a manter esse cálculo mais previsível, já que cada unidade responde pelo próprio consumo.</p>\n<p>Para quem pensa em alugar o imóvel futuramente, comparar esses custos fixos com o valor de aluguel praticado na região ajuda a estimar o retorno real do investimento, descontadas taxas e eventuais períodos de vacância.</p>\n<h2 id=\"criterios-para-uma-decisao-mais-clara\">Critérios para uma decisão mais clara</h2>\n<p>Reunir os critérios — objetivo, localização, condição do imóvel e custos — em uma mesma análise evita decisões baseadas apenas na primeira impressão da visita. Vale colocar no papel o que é indispensável e o que é apenas desejável, tanto para quem vai morar quanto para quem está avaliando o retorno financeiro.</p>\n<p>No fim, morar e investir compartilham o mesmo ponto de partida: um imóvel pronto, bem localizado e com documentação regular reduz riscos nos dois cenários — e é isso que permite decidir com mais segurança, seja qual for o objetivo.</p>\n\n<div class=\"article-cta\">\n  <a class=\"button button-dark\" href=\"https://wa.me/5548991223600?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20unidades%20do%20Residencial%20Alta%20Vista.\" target=\"_blank\" rel=\"noreferrer\">Agende sua visita pelo WhatsApp</a>\n</div>\n\n<section class=\"article-faq\" aria-labelledby=\"perguntas-frequentes\">\n  <h2 id=\"perguntas-frequentes\">Perguntas frequentes</h2>\n  <div class=\"faq-item\"><h3>Um imóvel pronto é uma boa opção tanto para morar quanto para investir?</h3><p>Sim. Por eliminar a espera da obra e permitir ocupação ou locação imediata, um imóvel pronto atende bem aos dois objetivos, desde que a localização e as condições comerciais façam sentido para o comprador.</p></div>\n  <div class=\"faq-item\"><h3>O que pesa mais na hora de avaliar um imóvel para investimento?</h3><p>Localização, condição do imóvel, custos recorrentes (condomínio e IPTU) e o potencial de valorização ou de renda com aluguel na região.</p></div>\n  <div class=\"faq-item\"><h3>É possível alugar um apartamento do Alta Vista logo após a compra?</h3><p>Sim. Como o edifício já está pronto e documentado, a unidade pode ser ocupada ou disponibilizada para locação imediatamente após a conclusão da compra.</p></div>\n  <div class=\"faq-item\"><h3>Vale a pena comparar imóvel pronto e imóvel na planta antes de decidir?</h3><p>Vale. Um imóvel pronto permite conferir acabamento, metragem e vizinhança na prática, reduzindo incertezas que só se resolvem no fim de uma obra.</p></div>\n</section>\n",
    "jsonLd": [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Morar ou investir em Marau: como avaliar um imóvel pronto?",
        "description": "Os critérios que ajudam a olhar para localização, estado do imóvel, custos e objetivo de compra com mais clareza.",
        "image": "https://www.altavistamarau.com.br/assets/alta-vista-hero.webp",
        "mainEntityOfPage": "https://www.altavistamarau.com.br/blog/morar-ou-investir-em-marau",
        "datePublished": "2026-09-02",
        "dateModified": "2026-09-02",
        "author": {
          "@type": "Organization",
          "name": "Construtora Fioravanso e Zanchet Ltda."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Residencial Alta Vista",
          "url": "https://www.altavistamarau.com.br"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Um imóvel pronto é uma boa opção tanto para morar quanto para investir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Por eliminar a espera da obra e permitir ocupação ou locação imediata, um imóvel pronto atende bem aos dois objetivos, desde que a localização e as condições comerciais façam sentido para o comprador."
            }
          },
          {
            "@type": "Question",
            "name": "O que pesa mais na hora de avaliar um imóvel para investimento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Localização, condição do imóvel, custos recorrentes (condomínio e IPTU) e o potencial de valorização ou de renda com aluguel na região."
            }
          },
          {
            "@type": "Question",
            "name": "É possível alugar um apartamento do Alta Vista logo após a compra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Como o edifício já está pronto e documentado, a unidade pode ser ocupada ou disponibilizada para locação imediatamente após a conclusão da compra."
            }
          },
          {
            "@type": "Question",
            "name": "Vale a pena comparar imóvel pronto e imóvel na planta antes de decidir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vale. Um imóvel pronto permite conferir acabamento, metragem e vizinhança na prática, reduzindo incertezas que só se resolvem no fim de uma obra."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.altavistamarau.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.altavistamarau.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Morar ou investir em Marau: como avaliar um imóvel pronto?",
            "item": "https://www.altavistamarau.com.br/blog/morar-ou-investir-em-marau"
          }
        ]
      }
    ],
    "related": [
      {
        "title": "Apartamento pronto em Marau: quais são as vantagens?",
        "href": "/blog/apartamento-pronto-em-marau"
      },
      {
        "title": "O que observar em um apartamento de dois dormitórios com suíte?",
        "href": "/blog/dois-dormitorios-com-suite"
      },
      {
        "title": "Novos limites do Minha Casa, Minha Vida: o que muda para quem quer comprar um apartamento pronto",
        "href": "/blog/novos-limites-minha-casa-minha-vida"
      }
    ]
  }
];
