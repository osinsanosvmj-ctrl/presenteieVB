const presentes = [
  {
    nome: "Kit Teclado + Mouse RGB",
    descricao: "Kit de teclado e mouse retroiluminados :)",
    preco: 110.00,
    prioridade: "Média",
    imagem: "img/kitMeTE.jpg",
    link: "https://www.mercadolivre.com.br/kit-gamer-rgb-teclado-e-mouse-com-led-para-pc-e-notebook/up/MLBU5733778644?pdp_filters=item_id%3AMLB5478731021&applied_product_filters=MLBU5684485673&from=gshop&picker=true&matt_tool=56885173&matt_word=&matt_source=google&matt_campaign_id=22090354256&matt_ad_group_id=192555051294&matt_match_type=&matt_network=g&matt_device=c&matt_creative=799032781570&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=471610821&matt_product_id=MLBU5684485673&matt_product_partition_id=2497488129739&matt_target_id=aud-2487237563667%3Apla-2497488129739&cq_src=google_ads&cq_cmp=22090354256&cq_net=g&cq_plt=gp&cq_med=pla&quantity=1"
  },
  {
    nome: "Perfume Asad Lattafa",
    descricao: "Perfume árabe pra andar cheiroso :)",
    preco: 170.00,
    prioridade: "Alta",
    imagem: "img/perfume_.jpg",
    link: "https://www.mercadolivre.com.br/lattafa-asad-lattafa-arabe-masculino-eau-de-parfum/p/MLB75214936?pdp_filters=item_id%3AMLB8033507040&from=gshop&matt_tool=71447492&matt_word=&matt_source=google&matt_campaign_id=22090193645&matt_ad_group_id=194474607794&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792355614924&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB75214936-product&matt_product_partition_id=2495501625319&matt_target_id=aud-2487237563667:pla-2495501625319&cq_src=google_ads&cq_cmp=22090193645&cq_net=g&cq_plt=gp&cq_med=pla"
  },
  {
    nome: "Puma Flyer Runner",
    descricao: "Tênis da puma, número 39 :)",
    preco: 200.00,
    prioridade: "Baixa",
    imagem: "img/puma.jpg",
    link: "https://produto.mercadolivre.com.br/MLB-3806655487-tnis-flyer-runner-mesh-bdp-puma-_JM?attributes=COLOR_SECONDARY_COLOR%3AUHJldG8%3D%2CSIZE%3AMzkgQlI%3D&quantity=1&picker=true&matt_tool=89357791&matt_word=&matt_source=google&matt_campaign_id=23351282099&matt_ad_group_id=193694045007&matt_match_type=&matt_network=g&matt_device=c&matt_creative=787871588576&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5326378336&matt_product_id=MLB3806655487-186372321845&matt_product_partition_id=2494012075826&matt_target_id=aud-2487237563667%3Apla-2494012075826&cq_src=google_ads&cq_cmp=23351282099&cq_net=g&cq_plt=gp&cq_med=pla",
  },
  {
    nome: "Capacete Pro Tork Evolution 788",
    descricao: "Pro Tork Evolution 788 G8 EVO VERMELHO, número 56/58 :) ",
    preco: 250.00,
    prioridade: "Baixa",
    imagem: "img/capa.jpg",
    link: "https://www.mercadolivre.com.br/capacete-fechado-pro-tork-evolution-788-g8-evo/up/MLBU5182872297?pdp_filters=item_id%3AMLB7650919570&from=gshop&matt_tool=54176226&matt_word=&matt_source=google&matt_campaign_id=22120855572&matt_ad_group_id=179138691251&matt_match_type=&matt_network=g&matt_device=c&matt_creative=729092955496&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5800859555&matt_product_id=MLBU5182872297&matt_product_partition_id=2498138781744&matt_target_id=aud-2487237563667:pla-2498138781744&cq_src=google_ads&cq_cmp=22120855572&cq_net=g&cq_plt=gp&cq_med=pla",
  },
  {
    nome: "Rider Soft Slide",
    descricao: "Sandália Rider Soft Plus Bege, número 39 ;)",
    preco: 130.00,
    prioridade: "Alta",
    imagem: "img/chinelo.jpg",
    link: "https://produto.mercadolivre.com.br/MLB-3356076413-chinelo-slide-rider-infinity-fuse-sola-massageadora-11563-_JM?searchVariation=191850454137",
  },
  {
    nome: "Relógio de Couro Technos",
    descricao: "Relógio Technos Couro Steel Dourado",
    preco: 270.00,
    prioridade: "Baixa",
    imagem: "img/relogio.jpg",
    link: "https://www.mercadolivre.com.br/relogio-technos-masculino-couro-steel-dourado-2115tvs0a/p/MLB27806988?matt_tool=38524122&pdp_filters=item_id%3AMLB5378346190&ua=BKGAoob7M1RDX5hCqXtX9OjdD_EW-uHQYq0FpecJFsYBNsE"
  }
];

function formatarPreco(valor){
  return new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(valor);
}

function criarCartao(presente){
  const card = document.createElement("article");
  card.classList.add("card-presente");
  card.innerHTML=`
  <img
  src="${escaparHTML(presente.imagem)}"
  alt="${escaparHTML(presente.nome)}"
  >
  <div class="informacoes-presente">
  <span class="prioridade">
  Prioridade: ${escaparHTML(presente.prioridade)}
</span>
<h3>
${escaparHTML(presente.nome)}
</h3>
<p>
${escaparHTML(presente.descricao)}
</p>
<div class="preco">
${formatarPreco(presente.preco)}
</div>
</div>
  `;

  let linkValido = false;
  try{
    const endereco = new URL(presente.link);
    linkValido = endereco.protocol==="https:";
  } catch (erro){
    linkValido = false;
  }

  const informacoes = card.querySelector(
    ".informacoes-presente"
  );
  if (linkValido){
    const botao = document.createElement("a");
    botao.href=presente.link;
    botao.target="_blank";
    botao.rel="noopener noreferrer";
    botao.classList.add("botao-compra");
    botao.textContent="COMPRAR PRESENTE ↗";
    informacoes.appendChild(botao);
  } else {
    const aviso = document.createElement("p");
    aviso.textContent="Link do produto será adicionado";
    informacoes.appendChild(aviso);
  }
  return card;
}
function escaparHTML(valor){
  return String(valor).replace(/[&<>"']/g, caractere =>({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[caractere]);
}
function exibirPresentes(){
  const lista = document.getElementById("lista-presente");
  lista.innerHTML="";
  presentes.forEach(presente => {
    const cartao = criarCartao(presente);
    lista.appendChild(cartao);
  });
}

exibirPresentes();

