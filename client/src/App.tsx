/**
 * Direção visual: Horizonte Champanhe — editorialismo arquitetônico contemporâneo,
 * grafite profundo, marfim, champanhe Alta Vista, composição assimétrica e leitura guiada.
 */
import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import {
  ArrowUpRight, BedDouble, Building2, Check, ChevronDown, ChevronRight,
  Download, ExternalLink, FileText, Instagram, Landmark, MapPin, Menu,
  MessageCircle, MoveRight, Play, Ruler, ShieldCheck, Sparkles, X
} from "lucide-react";

const hero = "/assets/alta-vista-hero.webp";
const interior = "/assets/alta-vista-interior.webp";
const vista = "/assets/alta-vista-vista.webp";
const cityAerial = "/assets/alta-vista-city-aerial.webp";
const symbol = "/assets/alta-vista-symbol.png";
const mapUrl = "https://maps.app.goo.gl/Qcok5Cx8K5L3pjT76";
const whatsapp = "https://wa.me/5548991223600?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20unidades%20do%20Residencial%20Alta%20Vista.";
const tableFile = "/assets/Res Alta Vista - Tabela de Preco.pdf";
const plantaFile = "/assets/planta.webp";
const guiaFile = "/assets/guia_da_mudanca_tranquila.pdf";
const droneFile = "/assets/drone.mp4";
const galleryPhotos = {
  fachada2: "/assets/gallery-fachada2.webp",
  sala: "/assets/gallery-sala.webp",
  churrasqueira: "/assets/gallery-churrasqueira.webp",
  banheiro: "/assets/gallery-banheiro.webp",
  garagem: "/assets/gallery-garagem.webp",
};
const decorPhotos = [
  { src: "/assets/decor-quarto.webp", label: "Dormitório" },
  { src: "/assets/decor-sala.webp", label: "Sala de estar" },
  { src: "/assets/decor-sacada.webp", label: "Sacada e cozinha" },
  { src: "/assets/decor-banheiro.webp", label: "Banheiro" },
  { src: "/assets/decor-closet.webp", label: "Closet / suíte" },
];
const decorCredit = { name: "Anaíse Breda Arquitetura", url: "https://www.instagram.com/anaisebredaarquitetura/" };
const siteUrl = "https://www.altavistamarau.com.br";

function useDocumentMeta(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${siteUrl}${path}`);
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", `${siteUrl}${path}`);
  }, [title, description, path]);
}
const pointsOfInterest = [
  { label: "Hospital Cristo Redentor", query: "Hospital Cristo Redentor, Marau, RS" },
  { label: "Escola Estadual de Ensino Médio Anchieta", query: "Escola Estadual de Ensino Médio Anchieta, Marau, RS" },
  { label: "Praça Central", query: "Praça Central, Marau, RS" },
  { label: "Parque Lauro Ricieri Bortolon", query: "Parque Lauro Ricieri Bortolon, Marau, RS" },
  { label: "AABB Marau", query: "AABB Marau, RS" },
];
const mapsSearch = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const units = [
  { id: "501", floor: "5º andar", position: "Apartamento pronto", listPrice: "R$ 538.649,45", price: "R$ 390.000" },
  { id: "502", floor: "5º andar", position: "Apartamento pronto", listPrice: "R$ 538.649,45", price: "R$ 390.000" },
  { id: "504", floor: "5º andar", position: "Apartamento pronto", listPrice: "R$ 538.649,45", price: "R$ 390.000" },
  { id: "601", floor: "6º andar", position: "Apartamento pronto", listPrice: "R$ 545.206,30", price: "R$ 415.000" },
  { id: "604", floor: "6º andar", position: "Apartamento pronto", listPrice: "R$ 545.206,30", price: "R$ 415.000" },
];

type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "quote"; text: string };
type ArticleFaqItem = { question: string; answer: string };
type ArticleSource = { label: string; url: string };
type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  isoDate: string;
  body?: ArticleBlock[];
  faq?: ArticleFaqItem[];
  sources?: ArticleSource[];
};

const articles: Article[] = [
  {
    slug: "apartamento-pronto-em-marau", category: "MORADIA", title: "Apartamento pronto em Marau: quais são as vantagens?", excerpt: "Comprar um imóvel finalizado muda a relação entre expectativa, decisão e o momento de começar uma nova rotina.", image: interior, date: "08 set 2026", isoDate: "2026-09-08",
    body: [
      { type: "h2", id: "por-que-considerar-um-imovel-pronto", text: "Por que considerar um imóvel pronto" },
      { type: "p", text: "Um apartamento pronto muda o tipo de decisão que você toma. Em vez de avaliar uma planta ou uma promessa de entrega, você caminha pelos ambientes, sente a luz de cada cômodo e confere o acabamento com as próprias mãos. No Alta Vista, o edifício já está entregue, com documentação regular e moradores nas unidades vizinhas." },
      { type: "p", text: "Essa diferença importa principalmente para quem tem um prazo real para se mudar — trocar de cidade, sair do aluguel ou reorganizar a rotina da família sem depender do cronograma de uma obra." },
      { type: "h2", id: "o-que-voce-ve-e-o-que-voce-leva", text: "O que você vê é o que você leva" },
      { type: "p", text: "Os apartamentos do Alta Vista somam 76,90 m² privativos, com porcelanato, forro de gesso, esquadrias de alumínio anodizado e persianas de enrolar nos dormitórios. A preparação para ar-condicionado split e a tubulação para água quente já vêm prontas, sem obra extra depois da mudança." },
      { type: "quote", text: "Conhecer o espaço antes de decidir é o que torna a escolha mais tranquila." },
      { type: "h2", id: "as-dores-de-quem-compra-na-planta", text: "As dores de quem compra na planta" },
      { type: "p", text: "Quem já comprou um imóvel na planta conhece a lista de imprevistos que acompanha a espera. O atraso na entrega é o mais comum: mudanças no cronograma da obra empurram a data das chaves para meses — às vezes anos — depois do combinado, e isso significa adiar a mudança, o fim do aluguel ou a reorganização da família." },
      { type: "p", text: "Há também o custo que cresce sem aviso. Enquanto a obra não termina, o saldo devedor costuma ser corrigido mês a mês pelo INCC, o que eleva o valor final do imóvel em relação ao que foi negociado no lançamento. Soma-se a isso a diferença entre a maquete apresentada na venda e o que é efetivamente entregue — metragens, acabamentos e prazos que só se confirmam no fim." },
      { type: "p", text: "E existe o risco, ainda que menor hoje do que no passado, de a obra atrasar tanto que a construtora enfrente dificuldades financeiras. A Lei dos Distratos (Lei nº 13.786/2018) trouxe proteções importantes para esses casos — como um prazo de tolerância e a possibilidade de indenização pelo atraso — mas nenhuma lei devolve o tempo perdido de planejamento." },
      { type: "h2", id: "o-que-muda-quando-o-apartamento-ja-esta-pronto", text: "O que muda quando o apartamento já está pronto" },
      { type: "p", text: "Um imóvel pronto elimina essas variáveis de uma vez. O preço negociado é o preço final, sem correção monetária pendente até a entrega. A metragem, o acabamento e a distribuição dos ambientes são exatamente o que você vê na visita — não uma promessa em maquete ou um render." },
      { type: "p", text: "No Alta Vista, o edifício já está entregue, com documentação regular e moradores nas unidades vizinhas. O financiamento pode ser avaliado antes da assinatura, com as condições já conhecidas, e a mudança para o novo endereço pode acontecer assim que a negociação for concluída — sem depender do cronograma de uma obra." },
      { type: "h2", id: "condicoes-para-decidir-com-clareza", text: "Condições para decidir com clareza" },
      { type: "p", text: "A compra pode ser feita à vista ou com 20% de entrada mais financiamento bancário. Os medidores são individuais, o que simplifica o controle das contas de água e energia desde o primeiro mês." },
      { type: "p", text: "Para quem já decidiu, resta uma etapa: visitar o edifício, comparar as unidades disponíveis e conversar sobre a condição comercial de cada uma delas com a construtora." },
    ],
    faq: [
      { question: "O apartamento do Alta Vista já está pronto para morar?", answer: "Sim. O edifício está pronto, com documentação regular, e já possui moradores nas unidades entregues." },
      { question: "Quais são as condições de pagamento disponíveis?", answer: "As unidades podem ser adquiridas à vista ou com 20% de entrada mais financiamento bancário." },
      { question: "Qual é a área privativa dos apartamentos?", answer: "76,90 m² privativos, totalizando 137,87 m² com garagem e área comum." },
      { question: "As unidades anunciadas têm a mesma planta?", answer: "Sim. As cinco unidades anunciadas possuem a mesma configuração de apartamento." },
      { question: "O que a Lei dos Distratos garante em caso de atraso na entrega de um imóvel na planta?", answer: "A Lei nº 13.786/2018 prevê, em geral, um prazo de tolerância de até 180 dias para a entrega e a possibilidade de indenização pelo atraso além desse período, conforme o contrato e a jurisprudência aplicável." },
    ],
    sources: [
      { label: "ANOREG/BR — Os 6 principais perigos de comprar imóveis na planta", url: "https://www.anoreg.org.br/site/veja-os-6-principais-perigos-de-comprar-imoveis-na-planta/" },
      { label: "Exame — Direitos do comprador em caso de atraso na entrega do imóvel na planta", url: "https://exame.com/mercado-imobiliario/comprei-um-imovel-na-planta-e-a-construtora-atrasou-a-entrega-quais-meus-direitos/" },
    ],
  },
  {
    slug: "dois-dormitorios-com-suite", category: "GUIA DE COMPRA", title: "O que observar em um apartamento de dois dormitórios com suíte?", excerpt: "Uma leitura prática sobre planta, integração, iluminação, conforto e os detalhes que fazem diferença todos os dias.", image: vista, date: "05 set 2026", isoDate: "2026-09-05",
    body: [
      { type: "h2", id: "a-logica-de-uma-boa-planta", text: "A lógica de uma boa planta" },
      { type: "p", text: "Um apartamento de dois dormitórios com suíte funciona bem quando a planta separa claramente a área social da área íntima. No Alta Vista, a suíte fica isolada dos ambientes de convivência, o que preserva o descanso mesmo com visitas na sala." },
      { type: "p", text: "O segundo dormitório mantém flexibilidade: pode virar quarto de criança, escritório ou espaço de hóspedes, sem comprometer a suíte principal." },
      { type: "h2", id: "integracao-sem-perder-privacidade", text: "Integração sem perder privacidade" },
      { type: "p", text: "A sala de estar e jantar se integram à cozinha americana, o que amplia visualmente o ambiente social. A sacada com churrasqueira funciona como uma extensão desse espaço, ideal para reunir a família nos fins de semana." },
      { type: "quote", text: "Espaços que conversam entre si tornam o dia a dia mais simples." },
      { type: "h2", id: "detalhes-que-fazem-diferenca-no-dia-a-dia", text: "Detalhes que fazem diferença no dia a dia" },
      { type: "p", text: "Dois banheiros evitam filas de manhã. Persianas de enrolar nos dormitórios, preparação para split e tubulação para água quente reduzem obras futuras. Os medidores individuais de água e energia deixam o controle do consumo mais simples." },
      { type: "h2", id: "vagas-de-garagem-e-area-total", text: "Vagas de garagem e área total" },
      { type: "p", text: "Cada apartamento conta com duas vagas de garagem, com cerca de 15 m² cada — juntas, aproximadamente 30 m². Somadas à área comum, a metragem total chega a 137,87 m², espaço suficiente para acomodar rotina, visitas e um segundo veículo sem aperto." },
      { type: "p", text: "Vale conferir a planta completa antes de decidir, para confirmar que a distribuição dos ambientes combina com a forma como a sua família usa a casa no dia a dia." },
      { type: "h2", id: "luz-natural-e-ventilacao-cruzada", text: "Luz natural e ventilação cruzada" },
      { type: "p", text: "A orientação solar e a ventilação cruzada fazem diferença direta no conforto térmico e na conta de energia. No Alta Vista, os dormitórios recebem persianas de enrolar que ajudam a controlar a entrada de luz sem abrir mão da ventilação, e as janelas amplas mantêm os ambientes sociais iluminados ao longo do dia." },
      { type: "p", text: "Vale observar, na planta, para qual lado cada ambiente está voltado. Um dormitório que recebe sol da manhã tende a ser mais agradável para acordar; uma sala voltada para a tarde aproveita melhor a luz nos horários em que a família costuma se reunir." },
      { type: "h2", id: "como-organizar-os-ambientes-no-dia-a-dia", text: "Como organizar os ambientes no dia a dia" },
      { type: "p", text: "Um apartamento de 76,90 m² privativos pede planejamento na escolha dos móveis. Na sala integrada à cozinha americana, peças com pés altos e paletas claras ajudam a manter a sensação de amplitude. Já no segundo dormitório, um bom aproveitamento vertical — estantes e armários até o teto — evita que o cômodo pareça apertado quando muda de função ao longo dos anos." },
      { type: "p", text: "A sacada com churrasqueira pede pouco: uma mesa compacta e alguns vasos já bastam para transformar o espaço em uma extensão da sala nos fins de semana, sem depender de reforma." },
      { type: "h2", id: "convivencia-e-rotina-no-predio", text: "Convivência e rotina no prédio" },
      { type: "p", text: "Morar em um edifício pronto significa também conhecer, antes de decidir, como funciona a rotina do prédio — o comportamento dos vizinhos, a limpeza das áreas comuns e a administração do condomínio. No Alta Vista, essa realidade já está estabelecida, o que reduz surpresas depois da mudança." },
      { type: "p", text: "Os medidores individuais de água e energia, somados a vagas de garagem próprias, simplificam a divisão de custos entre os moradores e evitam disputas comuns em prédios com infraestrutura compartilhada." },
      { type: "h2", id: "dois-dormitorios-como-decisao-de-longo-prazo", text: "Dois dormitórios como decisão de longo prazo" },
      { type: "p", text: "A configuração de dois dormitórios com suíte tende a acompanhar diferentes fases da vida: começa como espaço de casal com quarto de hóspedes, pode virar home office e, mais adiante, quarto de criança — sem exigir a troca de imóvel a cada mudança de rotina." },
      { type: "p", text: "Essa flexibilidade também conversa com quem pensa em revenda ou locação no futuro: apartamentos de dois dormitórios com suíte, bem localizados e prontos, costumam atrair tanto famílias quanto casais, ampliando o público interessado no imóvel." },
    ],
    faq: [
      { question: "Como estão distribuídos os dois dormitórios do apartamento?", answer: "São dois dormitórios, sendo um deles suíte, com a área íntima separada da área social." },
      { question: "Qual a área privativa e a área total do apartamento?", answer: "76,90 m² privativos e 137,87 m² de área total, somando garagem e área comum." },
      { question: "Quantas vagas de garagem estão incluídas?", answer: "Duas vagas de garagem, com cerca de 15 m² cada (aproximadamente 30 m² no total)." },
      { question: "O apartamento já vem com sacada e churrasqueira?", answer: "Sim. A sacada com churrasqueira integra o ambiente social do apartamento." },
      { question: "O apartamento recebe boa luz natural?", answer: "Sim. As janelas amplas e a orientação dos ambientes favorecem a entrada de luz natural ao longo do dia, com persianas de enrolar nos dormitórios para controle." },
      { question: "Dá para usar o segundo dormitório como escritório?", answer: "Sim. A flexibilidade do segundo dormitório permite adaptá-lo como escritório, quarto de hóspedes ou, mais adiante, quarto de criança." },
    ],
  },
  {
    slug: "morar-ou-investir-em-marau", category: "MARAU", title: "Morar ou investir em Marau: como avaliar um imóvel pronto?", excerpt: "Os critérios que ajudam a olhar para localização, estado do imóvel, custos e objetivo de compra com mais clareza.", image: hero, date: "02 set 2026", isoDate: "2026-09-02",
    body: [
      { type: "h2", id: "defina-o-objetivo-morar-ou-investir", text: "Defina o objetivo: morar ou investir" },
      { type: "p", text: "Antes de visitar qualquer unidade, vale responder a uma pergunta simples: o imóvel é para morar ou para investir? A resposta muda os critérios de decisão. Quem vai morar prioriza layout, luz, vizinhança e rotina. Quem pensa em investimento olha primeiro para localização, liquidez e potencial de valorização ou aluguel." },
      { type: "p", text: "Em muitos casos, as duas respostas convivem: comprar um imóvel pronto para morar hoje e, mais adiante, transformá-lo em fonte de renda — ou o contrário, comprar pensando em revenda e usar o imóvel enquanto isso. Ter clareza sobre a prioridade ajuda a comparar unidades sem se perder em detalhes que não fazem diferença para o seu objetivo." },
      { type: "h2", id: "localizacao-o-fator-que-nao-muda-depois", text: "Localização: o fator que não muda depois" },
      { type: "p", text: "Acabamento, mobília e decoração podem ser ajustados depois da mudança. A localização, não. Um endereço bem posicionado em Marau — perto de escolas, saúde, comércio e áreas de lazer — tende a manter sua relevância mesmo com o crescimento e a reorganização da cidade ao redor dele." },
      { type: "p", text: "Vale observar não só a distância até os pontos de interesse, mas também o tipo de vizinhança, o fluxo da rua e a facilidade de acesso a partir de diferentes regiões da cidade — fatores que pesam tanto para quem vai morar quanto para quem pretende alugar o imóvel no futuro." },
      { type: "h2", id: "pronto-ou-na-planta-na-hora-de-decidir", text: "Pronto ou na planta na hora de decidir" },
      { type: "p", text: "Um imóvel pronto muda a forma como essa avaliação é feita. Em vez de projetar como ficará o empreendimento, é possível visitar o edifício, conferir o acabamento e conversar com moradores das unidades já entregues. Isso reduz a margem de incerteza tanto para quem vai morar quanto para quem está avaliando o investimento." },
      { type: "p", text: "Para o investidor, o imóvel pronto tem uma vantagem adicional: pode ser ocupado ou colocado para alugar imediatamente após a compra, sem o intervalo de espera de uma obra em andamento — o que antecipa o retorno sobre o capital investido." },
      { type: "quote", text: "Decidir com o imóvel diante dos olhos é diferente de decidir com uma promessa no papel." },
      { type: "h2", id: "os-custos-que-entram-na-conta", text: "Os custos que entram na conta" },
      { type: "p", text: "Além do valor de compra, vale simular os custos recorrentes: condomínio, IPTU e, quando houver financiamento, o valor da parcela mensal. Medidores individuais de água e energia, como no Alta Vista, ajudam a manter esse cálculo mais previsível, já que cada unidade responde pelo próprio consumo." },
      { type: "p", text: "Para quem pensa em alugar o imóvel futuramente, comparar esses custos fixos com o valor de aluguel praticado na região ajuda a estimar o retorno real do investimento, descontadas taxas e eventuais períodos de vacância." },
      { type: "h2", id: "criterios-para-uma-decisao-mais-clara", text: "Critérios para uma decisão mais clara" },
      { type: "p", text: "Reunir os critérios — objetivo, localização, condição do imóvel e custos — em uma mesma análise evita decisões baseadas apenas na primeira impressão da visita. Vale colocar no papel o que é indispensável e o que é apenas desejável, tanto para quem vai morar quanto para quem está avaliando o retorno financeiro." },
      { type: "p", text: "No fim, morar e investir compartilham o mesmo ponto de partida: um imóvel pronto, bem localizado e com documentação regular reduz riscos nos dois cenários — e é isso que permite decidir com mais segurança, seja qual for o objetivo." },
    ],
    faq: [
      { question: "Um imóvel pronto é uma boa opção tanto para morar quanto para investir?", answer: "Sim. Por eliminar a espera da obra e permitir ocupação ou locação imediata, um imóvel pronto atende bem aos dois objetivos, desde que a localização e as condições comerciais façam sentido para o comprador." },
      { question: "O que pesa mais na hora de avaliar um imóvel para investimento?", answer: "Localização, condição do imóvel, custos recorrentes (condomínio e IPTU) e o potencial de valorização ou de renda com aluguel na região." },
      { question: "É possível alugar um apartamento do Alta Vista logo após a compra?", answer: "Sim. Como o edifício já está pronto e documentado, a unidade pode ser ocupada ou disponibilizada para locação imediatamente após a conclusão da compra." },
      { question: "Vale a pena comparar imóvel pronto e imóvel na planta antes de decidir?", answer: "Vale. Um imóvel pronto permite conferir acabamento, metragem e vizinhança na prática, reduzindo incertezas que só se resolvem no fim de uma obra." },
    ],
  },
];

const defaultArticleBody: ArticleBlock[] = [
  { type: "h2", id: "uma-decisao-que-comeca-antes-da-mudanca", text: "Uma decisão que começa antes da mudança" },
  { type: "p", text: "Escolher um apartamento é olhar para o espaço, mas também para o tempo que ele devolve. Quando o imóvel está pronto, é possível conhecer a realidade do projeto, visualizar os ambientes e planejar a próxima etapa com mais segurança." },
  { type: "p", text: "Em Marau, um endereço bem conectado pode simplificar a rotina sem abrir mão de tranquilidade. Serviços, saúde, educação e lazer próximos ajudam a transformar a localização em qualidade de vida — todos os dias, não apenas na visita." },
  { type: "h2", id: "o-que-observar-no-alta-vista", text: "O que observar no Alta Vista" },
  { type: "p", text: "Os apartamentos combinam 76,90 m² privativos (137,87 m² com garagem e área comum), dois dormitórios com uma suíte, dois banheiros, ambientes integrados e sacada com churrasqueira. O edifício pronto soma elevador, duas vagas e uma série de preparações que evitam adaptações futuras." },
  { type: "quote", text: "“Cada detalhe pensado para você” ganha significado quando conforto, funcionalidade e clareza comercial aparecem juntos." },
  { type: "h2", id: "conheca-de-perto", text: "Conheça de perto" },
  { type: "p", text: "As cinco unidades anunciadas possuem a mesma configuração e estão disponíveis em dois patamares de preço. Para consultar a tabela oficial, visualizar a planta ou agendar uma conversa, fale diretamente com a construtora." },
];

function useArticleStructuredData(article: Article) {
  useEffect(() => {
    const created: HTMLScriptElement[] = [];

    const posting = document.createElement("script");
    posting.type = "application/ld+json";
    posting.id = `ld-json-article-${article.slug}`;
    posting.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      image: `${siteUrl}${article.image}`,
      datePublished: article.isoDate,
      author: { "@type": "Organization", name: "Construtora Fioravanso e Zanchet Ltda." },
      publisher: { "@type": "Organization", name: "Residencial Alta Vista", logo: { "@type": "ImageObject", url: `${siteUrl}${symbol}` } },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${article.slug}` },
    });
    document.head.appendChild(posting);
    created.push(posting);

    const breadcrumb = document.createElement("script");
    breadcrumb.type = "application/ld+json";
    breadcrumb.id = `ld-json-breadcrumb-${article.slug}`;
    breadcrumb.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: `${siteUrl}/blog/${article.slug}` },
      ],
    });
    document.head.appendChild(breadcrumb);
    created.push(breadcrumb);

    if (article.faq && article.faq.length > 0) {
      const faq = document.createElement("script");
      faq.type = "application/ld+json";
      faq.id = `ld-json-faq-${article.slug}`;
      faq.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map(item => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      });
      document.head.appendChild(faq);
      created.push(faq);
    }

    return () => { created.forEach(script => script.remove()); };
  }, [article]);
}

function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Residencial Alta Vista — início">
    <img src={symbol} alt="" className="brand-symbol" />
    <span><small>RESIDENCIAL</small><strong>Alta Vista</strong></span>
  </Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const links = [["O Residencial", "/residencial"], ["Apartamentos", "/apartamentos"], ["Localização", "/localizacao"], ["Blog", "/blog"]];
  return <header className="site-header">
    <div className="header-inner">
      <Brand />
      <nav className={`nav ${open ? "nav-open" : ""}`}>
        {links.map(([label, href]) => <Link key={href} href={href} className={location === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/materiais" className="nav-materials" onClick={() => setOpen(false)}>Materiais <Download size={14} /></Link>
      </nav>
      <div className="header-actions"><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Falar com a construtora <ArrowUpRight size={16} /></a><button className="menu-button" aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    </div>
  </header>;
}

function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Brand light /><p className="footer-copy">Um jeito mais alto de viver Marau.<br />Apartamentos prontos para morar ou investir.</p></div>
      <div><p className="footer-label">NAVEGAÇÃO</p><div className="footer-links"><Link href="/residencial">O Residencial</Link><Link href="/apartamentos">Apartamentos</Link><Link href="/localizacao">Localização</Link><Link href="/blog">Blog</Link></div></div>
      <div><p className="footer-label">MATERIAIS</p><div className="footer-links"><Link href="/materiais">Baixar materiais</Link><a href={tableFile} download>Tabela comercial PDF</a><a href={plantaFile} download>Planta do apartamento</a></div></div>
      <div><p className="footer-label">ATENDIMENTO</p><div className="footer-contact"><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:fzmarau@gmail.com">fzmarau@gmail.com</a><a href="https://www.instagram.com/altavista_fz/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a></div></div>
    </div>
    <div className="container footer-bottom"><span className="footer-builder"><img src="/assets/fz-construtora-logo.png" alt="Fioravanso e Zanchet Construtora" className="footer-builder-logo" width="86" height="90" /> Uma construção Fioravanso e Zanchet</span><span>© 2026 Residencial Alta Vista</span><span>CNPJ 32.149.779/0001-79</span><Link href="/privacidade">Política de privacidade</Link></div>
  </footer>;
}

function Layout({ children }: { children: React.ReactNode }) { return <><Header /><a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a construtora pelo WhatsApp"><MessageCircle size={20} /><span>WhatsApp</span></a>{children}<Footer /></>; }
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
function SectionTitle({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "right" }) { return <div className={`section-title align-${align}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }
function WhatsAppButton({ children = "Falar com a construtora", className = "button button-dark" }: { children?: React.ReactNode; className?: string }) { return <a className={className} href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} />{children}</a>; }

function Home() {
  useDocumentMeta("Residencial Alta Vista · Apartamentos prontos em Marau/RS", "Apartamentos de 76,90 m² privativos, suíte, sacada com churrasqueira e 2 vagas, prontos para morar em Marau/RS. Condição especial disponível.", "/");
  useEffect(() => {
    const id = "ld-json-realestate";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Construtora Fioravanso e Zanchet Ltda.",
      url: siteUrl,
      telephone: "+55 48 99122-3600",
      email: "fzmarau@gmail.com",
      areaServed: "Marau, RS",
      address: { "@type": "PostalAddress", streetAddress: "Rua A, nº 46", addressLocality: "Marau", addressRegion: "RS", addressCountry: "BR" },
      sameAs: ["https://www.instagram.com/altavista_fz/", "https://www.facebook.com/altavista.marau.rs"],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Apartment",
          name: "Residencial Alta Vista",
          numberOfRooms: 2,
          floorSize: { "@type": "QuantitativeValue", value: 76.9, unitCode: "MTK" },
          address: { "@type": "PostalAddress", streetAddress: "Rua A, nº 46", addressLocality: "Marau", addressRegion: "RS", addressCountry: "BR" },
        },
        priceCurrency: "BRL",
        price: "390000",
        availability: "https://schema.org/InStock",
      },
    });
    document.head.appendChild(script);
  }, []);
  return <Layout><main>
    <section className="hero">
      <img className="hero-image" src={hero} alt="Fachada do Residencial Alta Vista" fetchPriority="high" decoding="async" />
      <div className="hero-overlay" />
      <div className="container hero-content"><div className="hero-copy"><Eyebrow>RESIDENCIAL ALTA VISTA · MARAU / RS</Eyebrow><h1>O espaço certo para viver Marau de um jeito mais alto.</h1><p> apartamentos prontos, com conforto, acabamento e uma localização que acompanha a sua rotina.</p><div className="hero-buttons"><Link href="/apartamentos" className="button button-champagne">Conheça os apartamentos <MoveRight size={17} /></Link><a href={mapUrl} target="_blank" rel="noreferrer" className="button button-ghost">Ver localização <MapPin size={16} /></a></div></div><div className="hero-note"><span className="note-line" /><span>Imóvel pronto<br />Documentação regular</span></div></div>
      <div className="hero-bottom"><span>SCROLL PARA EXPLORAR</span><span className="hero-line" /><span>01 / 05</span></div>
    </section>
    <section className="intro section-pad"><div className="container intro-grid"><div className="intro-stamp"><span>AV</span><small>UM NOVO<br />HORIZONTE</small></div><SectionTitle eyebrow="UM LAR BEM RESOLVIDO" title="Conforto para hoje. Um patrimônio para amanhã." copy="O Alta Vista combina uma planta inteligente, acabamentos qualificados e a praticidade de um imóvel novo, pronto para receber a sua história." /><div className="intro-aside"><p>Em Marau, onde a vida urbana encontra a tranquilidade de uma cidade em movimento.</p><Link href="/residencial" className="arrow-link">Descubra o residencial <ArrowUpRight size={17} /></Link></div></div></section>
    <section className="numbers"><div className="container number-grid"><div><strong>76,90</strong><span>m² privativos</span></div><div><strong>137,87</strong><span>m² área total</span></div><div><strong>02</strong><span>dormitórios · 1 suíte</span></div><div><strong>02</strong><span>vagas por apartamento</span></div></div></section>
    <section className="feature section-pad"><div className="container feature-grid"><div className="feature-image image-frame"><img src={interior} alt="Sala integrada à cozinha americana" /><span className="image-tag">DETALHE · INTERIORES</span></div><div className="feature-copy"><Eyebrow>FEITO PARA A ROTINA</Eyebrow><h2>Planta inteligente, espaços que conversam.</h2><p>Sala de estar e jantar integradas à cozinha americana, sacada com churrasqueira e uma suíte que preserva a intimidade. Cada ambiente foi pensado para funcionar bem — nos dias comuns e nos momentos especiais.</p><div className="feature-list"><div><Check size={16} /> Dois banheiros</div><div><Check size={16} /> Sacada com churrasqueira</div><div><Check size={16} /> Cozinha americana</div><div><Check size={16} /> Área de serviço compacta</div></div><Link href="/apartamentos" className="arrow-link">Ver a planta e os acabamentos <ArrowUpRight size={17} /></Link></div></div></section>
    <section className="vista-band"><div className="vista-copy"><Eyebrow>VISTA PARA A CIDADE</Eyebrow><h2>Uma pausa entre o movimento e o horizonte.</h2><p>Nos apartamentos voltados para os fundos, a sacada abre uma perspectiva especial para a cidade — um cenário para começar e terminar o dia.</p><Link href="/localizacao" className="button button-light">Conheça a localização <ArrowUpRight size={16} /></Link></div><div className="vista-image" style={{ backgroundImage: `url(${vista})` }} /></section>
    <section className="availability section-pad"><div className="container"><div className="availability-head"><SectionTitle eyebrow="DISPONIBILIDADE" title="Cinco oportunidades para escolher com calma." copy="Todas as unidades anunciadas estão prontas. Consulte a tabela comercial completa e fale diretamente com a construtora." /><Link href="/disponibilidade" className="arrow-link">Ver todas as unidades <ArrowUpRight size={17} /></Link></div><div className="unit-strip">{units.map(unit => <Link href={`/disponibilidade#${unit.id}`} className="unit-card" key={unit.id}><span className="unit-id">{unit.id}</span><span className="unit-floor">{unit.floor}</span><span className="unit-old-price">De {unit.listPrice}</span><strong>{unit.price}</strong><span className="unit-arrow"><ArrowUpRight size={16} /></span></Link>)}</div></div></section>
    <section className="blog-preview section-pad"><div className="container"><div className="blog-head"><SectionTitle eyebrow="DO BLOG" title="Escolher um imóvel também é escolher uma forma de viver." /><Link href="/blog" className="arrow-link">Ver todos os artigos <ArrowUpRight size={17} /></Link></div><div className="article-grid">{articles.map((article, i) => <ArticleCard article={article} featured={i === 0} key={article.slug} />)}</div></div></section>
    <section className="contact-band"><div className="container contact-grid"><div><Eyebrow>VISITE O ALTA VISTA</Eyebrow><h2>Seu próximo endereço pode começar com uma conversa.</h2></div><div><p>Leonardo S. Fioravanso está pronto para apresentar as unidades, a planta e as condições comerciais.</p><WhatsAppButton className="button button-champagne">Chamar no WhatsApp <ArrowUpRight size={17} /></WhatsAppButton></div></div></section>
  </main></Layout>;
}

function ArticleCard({ article, featured = false }: { article: typeof articles[number]; featured?: boolean }) { return <Link href={`/blog/${article.slug}`} className={`article-card ${featured ? "featured" : ""}`}><div className="article-image"><img src={article.image} alt="" /><span>{article.category}</span></div><div className="article-meta">{article.date}<ArrowUpRight size={15} /></div><h3>{article.title}</h3><p>{article.excerpt}</p></Link>; }

function InteriorPage() { useDocumentMeta("O Residencial | Apartamentos prontos em Marau — Alta Vista", "Conheça o conceito do Residencial Alta Vista: 20 unidades exclusivas, acabamento qualificado e infraestrutura completa em Marau/RS.", "/residencial"); return <Layout><PageHero kind="residencial" eyebrow="O RESIDENCIAL" title="Um projeto contemporâneo, pensado para a vida real." copy="O Alta Vista reúne o essencial de um bom endereço: arquitetura, conforto e uma rotina mais simples." image={interior} /><section className="section-pad"><div className="container editorial-grid"><div><SectionTitle eyebrow="A PROPOSTA" title="Mais do que um apartamento novo: uma base para a próxima fase." copy="O Residencial Alta Vista foi criado para quem valoriza espaços bem resolvidos, escolhas duráveis e a tranquilidade de morar em um edifício pronto e documentado." /></div><div className="prose"><p>São 20 unidades exclusivas em um edifício de padrão superior, com detalhes que fazem diferença no uso cotidiano. O projeto equilibra presença arquitetônica e praticidade, sem excesso: cada elemento tem uma razão para estar ali.</p><p>Porcelanato, forro de gesso, esquadrias de alumínio anodizado, persianas de enrolar e guarda-corpos de vidro formam uma base elegante. A preparação para ar-condicionado split, a tubulação para água quente e os medidores individuais completam a experiência.</p></div></div></section><section className="dark-feature"><div className="container split-feature"><div><Eyebrow>INFRAESTRUTURA</Eyebrow><h2>Detalhes que tornam a rotina mais leve.</h2></div><div className="dark-list"><div><Building2 /><span>Elevador no edifício</span></div><div><ShieldCheck /><span>Edifício pronto e documentado</span></div><div><Sparkles /><span>Acabamentos qualificados</span></div><div><Ruler /><span>Planta otimizada</span></div></div></div></section></Layout>; }

function ApartmentsPage() { useDocumentMeta("Apartamentos de 76,90 m² com suíte | Residencial Alta Vista", "Dois dormitórios, uma suíte, sacada com churrasqueira e 2 vagas de garagem. Veja a planta, os acabamentos e fotos reais do Alta Vista em Marau/RS.", "/apartamentos"); return <Layout><PageHero kind="apartamentos" eyebrow="APARTAMENTOS" title="76,90 m² privativos para viver com espaço e intenção." copy="Dois dormitórios, uma suíte, ambientes integrados e uma sacada que amplia a casa." image={interior} /><section className="section-pad apartment-detail"><div className="container apartment-grid"><div className="plan-card"><div className="plan-top"><Eyebrow>PLANTA DO APARTAMENTO</Eyebrow><a href={plantaFile} download className="download-link"><Download size={16} /> Baixar planta</a></div><img src={plantaFile} alt="Planta baixa do apartamento do Residencial Alta Vista" className="plan-image" /></div><div><SectionTitle eyebrow="A CONFIGURAÇÃO" title="Tudo no lugar certo." copy="A planta organiza a área social em torno da convivência e preserva a privacidade da área íntima." /><div className="spec-grid"><Spec icon={<BedDouble />} label="Dormitórios" value="2, sendo 1 suíte" /><Spec icon={<Ruler />} label="Área privativa" value="76,90 m² (137,87 m² total)" /><Spec icon={<Building2 />} label="Garagem" value="2 vagas · aprox. 30 m²" /><Spec icon={<Sparkles />} label="Sacada" value="Com churrasqueira" /></div></div></div></section><section className="section-pad feature-photos"><div className="container"><SectionTitle eyebrow="POR DENTRO" title="Ambientes reais, prontos para visitar." copy="Fotos do edifício e das unidades já entregues." /><div className="photo-grid"><img src={galleryPhotos.fachada2} alt="Fachada do Residencial Alta Vista" /><img src={galleryPhotos.sala} alt="Sala integrada com vista para a cidade" /><img src={galleryPhotos.churrasqueira} alt="Sacada com churrasqueira em granito" /><img src={galleryPhotos.banheiro} alt="Banheiro do apartamento" /><img src={galleryPhotos.garagem} alt="Garagem do edifício" /></div></div></section><section className="section-pad materials-feature"><div className="container"><div className="decor-head"><div><Eyebrow>SUGESTÃO DE DECORAÇÃO</Eyebrow><h2>Um jeito de imaginar o seu.</h2><p>Simulações de decoração para inspirar o projeto de interiores do seu apartamento.</p></div><a href={decorCredit.url} target="_blank" rel="noreferrer" className="decor-credit">Projeto e imagens: {decorCredit.name} <ExternalLink size={14} /></a></div><div className="decor-grid">{decorPhotos.map(photo => <figure key={photo.src}><img src={photo.src} alt={`Sugestão de decoração — ${photo.label}`} /><figcaption>{photo.label}</figcaption></figure>)}</div></div></section><section className="materials-feature section-pad"><div className="container material-grid"><div><Eyebrow>ACABAMENTOS E INSTALAÇÕES</Eyebrow><h2>Conforto que se percebe nos detalhes.</h2></div><div className="check-grid"><span><Check /> Piso porcelanato</span><span><Check /> Forro de gesso</span><span><Check /> Preparação para split</span><span><Check /> Água quente</span><span><Check /> Persianas nos dormitórios</span><span><Check /> Medidores individuais</span><span><Check /> Ventilação natural</span><span><Check /> Esquadrias de alumínio</span></div></div></section><section className="section-pad"><div className="container"><SectionTitle eyebrow="DÚVIDAS FREQUENTES" title="O que você precisa saber antes de visitar." /><FAQ items={apartmentsFaqItems} /></div></section></Layout>; }
function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="spec"><span>{icon}</span><small>{label}</small><strong>{value}</strong></div>; }
function FAQ({ items }: { items: ArticleFaqItem[] }) { const [open, setOpen] = useState(0); return <div className="faq">{items.map((item, i) => <div className={`faq-row ${open === i ? "open" : ""}`} key={item.question}><button onClick={() => setOpen(open === i ? -1 : i)}><span>{item.question}</span><ChevronDown size={19} /></button>{open === i && <p>{item.answer}</p>}</div>)}</div>; }
const apartmentsFaqItems: ArticleFaqItem[] = [
  { question: "O edifício está pronto?", answer: "Sim. O edifício está pronto, com documentação regular e já possui moradores." },
  { question: "Quais são as condições de compra?", answer: "As unidades podem ser adquiridas à vista ou com 20% de entrada mais financiamento bancário." },
  { question: "Os apartamentos são iguais?", answer: "Sim. As cinco unidades anunciadas possuem a mesma configuração de apartamento." },
  { question: "Como agendar uma visita?", answer: "Fale diretamente com Leonardo S. Fioravanso pelo WhatsApp para combinar o melhor horário." },
];

function AvailabilityPage() { useDocumentMeta("Unidades disponíveis e preços | Residencial Alta Vista", "Confira as 5 unidades prontas do Residencial Alta Vista em Marau/RS, com condição especial de pagamento e tabela oficial para download.", "/disponibilidade"); return <Layout><PageHero kind="disponibilidade" eyebrow="UNIDADES DISPONÍVEIS" title="Escolha o andar. O próximo passo é seu." copy="Cinco apartamentos prontos, com a mesma planta e condições claras para uma decisão segura." image={hero} /><section className="section-pad availability-page"><div className="container"><div className="notice"><ShieldCheck size={20} /><p><strong>Imóvel pronto e documentado.</strong> Consulte a disponibilidade atual diretamente com a construtora.</p></div><div className="unit-table">{units.map(unit => <div className="unit-row" id={unit.id} key={unit.id}><div><span className="unit-id">{unit.id}</span><div><small>{unit.floor}</small><strong>{unit.position}</strong></div></div><div className="unit-price-block"><span className="unit-price-tag">Condição especial</span><span className="unit-old-price">De {unit.listPrice}</span><strong className="unit-price">{unit.price}</strong></div><WhatsAppButton className="button button-outline">Tenho interesse <ArrowUpRight size={15} /></WhatsAppButton></div>)}</div><div className="payment-grid"><div><Eyebrow>CONDIÇÕES DE PAGAMENTO</Eyebrow><h3>Direto ao ponto.</h3><p>Pagamento à vista ou 20% de entrada mais financiamento bancário. Para detalhes e simulação, fale com a construtora.</p></div><div className="pdf-callout"><FileText size={25} /><div><strong>Consulte a tabela completa</strong><span>PDF oficial de preços e condições</span></div><a href={tableFile} download aria-label="Baixar tabela comercial"><Download size={19} /></a></div></div></div></section></Layout>; }

function LocationPage() { useDocumentMeta("Localização em Marau/RS | Residencial Alta Vista", "Rua A, nº 46, Marau/RS. Perto de escolas, hospital, praças e comércio. Veja o mapa e os pontos de interesse do entorno do Alta Vista.", "/localizacao"); return <Layout><PageHero kind="localizacao" eyebrow="MARAU / RS" title="Um endereço conectado ao que importa." copy="Rua A, nº 46. Próximo da vida urbana, dos serviços e dos espaços que fazem Marau acontecer." image={cityAerial} /><section className="section-pad"><div className="container location-grid"><div><SectionTitle eyebrow="NO ENTORNO" title="A cidade por perto. O horizonte também." copy="O Alta Vista está em uma região que aproxima educação, saúde, lazer, gastronomia e áreas verdes da sua rotina." /><div className="places"><a href={mapsSearch(pointsOfInterest[1].query)} target="_blank" rel="noreferrer"><Landmark /> Escola Estadual de Ensino Médio Anchieta <ExternalLink size={14} /></a><a href={mapsSearch(pointsOfInterest[0].query)} target="_blank" rel="noreferrer"><ShieldCheck /> Hospital Cristo Redentor <ExternalLink size={14} /></a><a href={mapsSearch(pointsOfInterest[2].query)} target="_blank" rel="noreferrer"><MapPin /> Praça Central <ExternalLink size={14} /></a><a href={mapsSearch(pointsOfInterest[3].query)} target="_blank" rel="noreferrer"><MapPin /> Parque Lauro Ricieri Bortolon <ExternalLink size={14} /></a><a href={mapsSearch(pointsOfInterest[4].query)} target="_blank" rel="noreferrer"><Sparkles /> AABB Marau <ExternalLink size={14} /></a></div></div><div className="map-card"><iframe className="site-map" title="Mapa do Residencial Alta Vista em Marau" src="https://www.google.com/maps?q=-28.4343386,-52.2095211&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-caption"><MapPin size={15} /> Residencial Alta Vista · Rua A, nº 46</div><a href={mapUrl} target="_blank" rel="noreferrer" className="button button-dark">Abrir no Google Maps <ExternalLink size={16} /></a></div></div></section><section className="section-pad signage-section"><div className="container signage-grid"><img src="/assets/logo-altavista.webp" alt="Placa de identificação do Residencial Alta Vista, nº 46" className="signage-image" /><div><Eyebrow>ENDEREÇO CONFIRMADO</Eyebrow><h3>Fácil de achar, fácil de reconhecer.</h3><p>A entrada do edifício já está identificada — Residencial Alta Vista, número 46, Rua A.</p></div></div></section></Layout>; }

function MaterialsPage() { useDocumentMeta("Materiais para download | Residencial Alta Vista", "Baixe a tabela comercial, a planta do apartamento, o guia da mudança e assista ao vídeo de drone do Residencial Alta Vista.", "/materiais"); return <Layout><PageHero kind="materiais" eyebrow="MATERIAIS" title="Tudo o que você precisa para decidir com clareza." copy="Materiais oficiais do Residencial Alta Vista para compradores, parceiros e corretores." image={interior} /><section className="section-pad"><div className="container materials-list"><Material icon={<FileText />} title="Tabela comercial" description="Preços e condições oficiais das cinco unidades anunciadas." href={tableFile} label="Baixar PDF" /><Material icon={<Ruler />} title="Planta do apartamento" description="Visualize a distribuição dos ambientes e a configuração do imóvel." href={plantaFile} label="Baixar planta" /><Material icon={<Sparkles />} title="Guia da mudança tranquila" description="Um material da construtora para preparar a chegada ao novo endereço." href={guiaFile} label="Baixar guia" /><Material icon={<Play />} title="Vídeo de drone" description="Conheça o edifício e o entorno em uma perspectiva aérea." href={droneFile} label="Abrir vídeo" /></div></section></Layout>; }
function Material({ icon, title, description, href, label }: { icon: React.ReactNode; title: string; description: string; href: string; label: string }) { return <a className="material-row" href={href} download={label !== "Abrir vídeo"}><span className="material-icon">{icon}</span><span className="material-copy"><strong>{title}</strong><p>{description}</p></span><span className="material-action">{label} <ArrowUpRight size={16} /></span></a>; }

function BlogPage() { useDocumentMeta("Blog | Residencial Alta Vista", "Conteúdos sobre morar em Marau/RS, comprar um apartamento pronto e o que observar antes de decidir. Blog do Residencial Alta Vista.", "/blog"); return <Layout><PageHero kind="blog" eyebrow="BLOG ALTA VISTA" title="Ideias para escolher melhor onde viver." copy="Conteúdo para entender o imóvel, a cidade e as decisões que acompanham um novo endereço." image={hero} /><section className="section-pad"><div className="container blog-list"><div className="blog-feature"><ArticleCard article={articles[0]} featured /></div><div className="blog-side">{articles.slice(1).map(a => <ArticleCard article={a} key={a.slug} />)}</div></div></section></Layout>; }
function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find(a => a.slug === slug) || articles[0];
  useDocumentMeta(`${article.title} | Blog Alta Vista`, article.excerpt, `/blog/${article.slug}`);
  useArticleStructuredData(article);
  const body = article.body ?? defaultArticleBody;
  const tocItems = body.filter((block): block is Extract<ArticleBlock, { type: "h2" }> => block.type === "h2");
  return <Layout><article className="article-page">
    <div className="article-cover" style={{ backgroundImage: `url(${article.image})` }}><div className="article-cover-overlay" /><div className="container article-cover-content"><Eyebrow>{article.category}</Eyebrow><h1>{article.title}</h1><span>{article.date} · Residencial Alta Vista</span></div></div>
    <div className="container article-body">
      <div className="article-prose">
        <p className="lead">{article.excerpt}</p>
        {tocItems.length > 0 && <nav className="article-toc" aria-label="Sumário do artigo"><span className="article-toc-label">Neste artigo</span><ol>{tocItems.map(item => <li key={item.id}><a href={`#${item.id}`}>{item.text}</a></li>)}</ol></nav>}
        {body.map((block, i) => {
          if (block.type === "h2") return <h2 id={block.id} key={block.id}>{block.text}</h2>;
          if (block.type === "quote") return <blockquote key={`quote-${i}`}>{block.text}</blockquote>;
          return <p key={`p-${i}`}>{block.text}</p>;
        })}
        {article.sources && article.sources.length > 0 && <div className="article-sources"><Eyebrow>FONTES</Eyebrow><ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} <ExternalLink size={13} /></a></li>)}</ul></div>}
        {article.faq && article.faq.length > 0 && <div className="article-faq"><h2>Perguntas frequentes</h2><FAQ items={article.faq} /></div>}
        <WhatsAppButton className="button button-dark">Falar sobre as unidades <ArrowUpRight size={16} /></WhatsAppButton>
      </div>
      <aside className="article-aside"><Eyebrow>LEIA TAMBÉM</Eyebrow>{articles.filter(a => a.slug !== article.slug).map(a => <Link href={`/blog/${a.slug}`} key={a.slug}>{a.title}<ArrowUpRight size={15} /></Link>)}</aside>
    </div>
  </article></Layout>;
}

function ContactPage() { useDocumentMeta("Contato | Residencial Alta Vista", "Fale com a Construtora Fioravanso e Zanchet pelo WhatsApp, telefone ou e-mail e agende uma visita ao Residencial Alta Vista em Marau/RS.", "/contato"); return <Layout><PageHero kind="contato" eyebrow="CONTATO" title="Vamos conversar sobre o seu próximo endereço." copy="Leonardo S. Fioravanso atende pelo WhatsApp, e-mail e redes sociais da construtora." image={interior} /><section className="section-pad contact-page"><div className="container contact-detail"><div><Eyebrow>ATENDIMENTO COMERCIAL</Eyebrow><h2>Uma conversa objetiva para encontrar a unidade certa.</h2><p>Agende uma visita, tire dúvidas sobre a planta ou consulte as condições de pagamento diretamente com a construtora.</p><WhatsAppButton className="button button-dark">Chamar no WhatsApp <MessageCircle size={17} /></WhatsAppButton></div><div className="contact-card"><span className="contact-avatar">LF</span><strong>Leonardo S. Fioravanso</strong><small>Gerente comercial</small><a href="tel:+5548991223600">+55 (48) 99122-3600</a><a href="mailto:fzmarau@gmail.com">fzmarau@gmail.com</a><a href="https://www.instagram.com/altavista_fz/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15} /></a><a href="https://www.facebook.com/altavista.marau.rs" target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={15} /></a></div></div></section></Layout>; }
function PrivacyPage() { useDocumentMeta("Política de Privacidade | Residencial Alta Vista", "Como a Construtora Fioravanso e Zanchet trata os dados de contato dos visitantes do site do Residencial Alta Vista.", "/privacidade"); return <Layout><section className="simple-page section-pad"><div className="container narrow"><Eyebrow>TRANSPARÊNCIA</Eyebrow><h1>Política de privacidade</h1><p>Este site utiliza links de contato para facilitar o atendimento da Construtora Fioravanso e Zanchet Ltda. Ao iniciar uma conversa por WhatsApp, e-mail ou rede social, os dados passam a ser tratados pela respectiva plataforma e pela construtora para fins de atendimento comercial.</p><p>O site não possui formulário próprio nem área autenticada. Para dúvidas sobre o uso de dados, entre em contato pelo e-mail fzmarau@gmail.com.</p></div></section></Layout>; }
function PageHero({ kind = "default", eyebrow, title, copy, image }: { kind?: string; eyebrow: string; title: string; copy: string; image: string }) { return <section className={`page-hero page-hero-${kind}`}><img className="page-hero-image" src={image} alt="" fetchPriority="high" decoding="async" /><div className="page-hero-overlay" /><div className="page-hero-rule" /><div className="container page-hero-content"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{copy}</p></div></section>; }
function NotFound() { return <Layout><section className="simple-page section-pad"><div className="container narrow"><Eyebrow>404</Eyebrow><h1>Essa página saiu da planta.</h1><p>O endereço que você tentou acessar não está disponível.</p><Link href="/" className="button button-dark">Voltar ao início <ArrowUpRight size={16} /></Link></div></section></Layout>; }

export default function App() { return <Switch><Route path="/" component={Home} /><Route path="/residencial" component={InteriorPage} /><Route path="/apartamentos" component={ApartmentsPage} /><Route path="/disponibilidade" component={AvailabilityPage} /><Route path="/localizacao" component={LocationPage} /><Route path="/materiais" component={MaterialsPage} /><Route path="/blog" component={BlogPage} /><Route path="/blog/:slug">{params => <ArticlePage slug={params.slug} />}</Route><Route path="/contato" component={ContactPage} /><Route path="/privacidade" component={PrivacyPage} /><Route component={NotFound} /></Switch>; }
