import {
  ArrowDown,
  ArrowRight,
  Instagram,
  Menu,
  MessageCircle,
  Search,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { perfumes } from "@/data/perfumes";

const categories = ["Todos", "Femininos", "Masculinos", "Compartilháveis / Unissex"];

function BrandSymbol({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src="/encantos-simbolo.png"
      alt="Símbolo da Encantos Árabes da Joice"
    />
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function getWhatsAppInterestLink(productName: string) {
  const message = `Olá Joice, tenho interesse no perfume ${productName}.`;
  return `https://wa.me/5547992552335?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = perfumes.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || `${product.name} ${product.brand} ${product.note} ${product.category} ${product.description}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const navigateTo = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Encantos Árabes da Joice — início">
          <span className="wordmark-main">Encantos Árabes</span>
          <span className="wordmark-rule" aria-hidden="true" />
          <span className="wordmark-sub">da Joice</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <button onClick={() => navigateTo("catalogo")}>Catálogo</button>
          <button onClick={() => navigateTo("sobre")}>A marca</button>
          <button onClick={() => navigateTo("contato")}>Contato</button>
        </nav>

        <button
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <button className="header-cta" onClick={() => navigateTo("contato")}>
          Fale conosco <ArrowRight size={15} />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-nav" aria-label="Menu mobile">
          <button onClick={() => navigateTo("catalogo")}>Catálogo</button>
          <button onClick={() => navigateTo("sobre")}>A marca</button>
          <button onClick={() => navigateTo("contato")}>Contato</button>
        </div>
      )}

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <Sparkles className="hero-spark hero-spark-one" size={21} aria-hidden="true" />
          <Sparkles className="hero-spark hero-spark-two" size={14} aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> catálogo de perfumes árabes <span className="eyebrow-line" /></p>
            <h1>Descubra perfumes árabes<br /><em>para todos os momentos.</em></h1>
            <p className="hero-description">
              Uma seleção de fragrâncias escolhidas para transformar o cotidiano em uma memória bonita —
              com presença, delicadeza e aquele toque que só um bom perfume deixa.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => navigateTo("catalogo")}>
                Conheça o catálogo <ArrowDown size={16} />
              </button>
              <button className="text-link" onClick={() => navigateTo("sobre")}>
                Sobre a marca <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="hero-signature" aria-label="Assinatura da marca">
            <div className="signature-halo" aria-hidden="true" />
            <img src="/encantos-assinatura.png" alt="Encantos Árabes da Joice" />
            <p>descobertas que perfumam momentos</p>
          </div>

          <div className="hero-scroll" aria-hidden="true">
            <span>explore</span><span className="hero-scroll-line" />
          </div>
        </section>

        <section className="catalog-section" id="catalogo">
          <div className="section-heading catalog-heading">
            <div>
              <p className="eyebrow eyebrow-left">a nossa seleção</p>
              <h2>Encontre seu<br /><em>próximo encanto.</em></h2>
            </div>
            <p className="section-intro">
              Um catálogo feito para você escolher com calma, conhecendo o perfil olfativo
              de cada fragrância.
            </p>
          </div>

          <div className="catalog-toolbar">
            <div className="catalog-status"><span className="status-dot" /> {perfumes.length} fragrâncias pesquisadas</div>
            <label className="catalog-search">
              <Search size={17} aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar uma fragrância"
                aria-label="Buscar uma fragrância"
              />
            </label>
          </div>

          <div className="catalog-filters" role="tablist" aria-label="Filtrar produtos por categoria">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "filter-chip is-active" : "filter-chip"}
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product, index) => (
                <article className="product-card" key={product.name}>
                  <div className="product-image">
                    <img src={product.image} alt={`Imagem ilustrativa do perfume ${product.name}`} />
                    <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
                    <a className="product-inquire" href={getWhatsAppInterestLink(product.name)} target="_blank" rel="noreferrer" aria-label={`Tenho interesse no perfume ${product.name}`}>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                  <div className="product-info">
                    <p className="product-category">{product.brand} <span>·</span> {product.category}</p>
                    <h3>{product.name}</h3>
                    <p className="product-note"><span>Fragrância: </span>{product.note}</p>
                    <div className="product-meta"><span>{product.volume}</span><span>{product.concentration}</span></div>
                    <div className="product-footer"><strong>{product.price}</strong><a href={getWhatsAppInterestLink(product.name)} target="_blank" rel="noreferrer">Tenho interesse</a></div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <BrandSymbol />
              <p>Nenhum encanto encontrado com esses filtros.</p>
              <button className="text-link" onClick={() => { setSearch(""); setActiveCategory("Todos"); }}>Limpar busca <ArrowRight size={16} /></button>
            </div>
          )}

          <div className="catalog-next-step">
            <div className="catalog-next-mark"><Sparkles size={17} /></div>
            <div>
              <p className="eyebrow eyebrow-left">aceitamos pedidos de perfumes</p>
              <p>Está procurando uma fragrância específica? Envie seu pedido para a Joice e vamos verificar a disponibilidade para você.</p>
            </div>
            <button className="button button-outline" onClick={() => navigateTo("contato")}>Fazer um pedido <ArrowRight size={16} /></button>
          </div>

          <div className="catalog-note">
            <span className="note-rule" />
            <p>Nome · volume · concentração · preço</p>
            <span className="note-rule" />
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-symbol-wrap">
            <BrandSymbol className="about-symbol" />
            <span className="about-caption">o encanto<br />está nos detalhes</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow eyebrow-left">a história por trás do aroma</p>
            <h2>Uma curadoria feita<br />de <em>presença e afeto.</em></h2>
            <p>
              A Encantos Árabes da Joice nasceu para aproximar você de perfumes árabes
              que surpreendem pela presença e pela delicadeza. Cada escolha é feita
              pensando em histórias, encontros e na sensação gostosa de encontrar um
              aroma que parece ter sido feito para você.
            </p>
            <p className="about-signature">— Joice</p>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-heading">
            <p className="eyebrow">vamos conversar?</p>
            <h2>Seu próximo<br /><em>encanto espera.</em></h2>
          </div>
          <div className="contact-body">
            <p>
              Quer saber quais perfumes estão disponíveis hoje ou pedir uma indicação?
              Chame a Joice. Os links oficiais entram aqui assim que você definir o perfil
              e o número da revenda.
            </p>
            <div className="contact-actions">
              <a className="contact-card" href="https://www.instagram.com/encantos_arabes_da_joice" target="_blank" rel="noreferrer" aria-label="Instagram da Encantos Árabes da Joice">
                <Instagram size={20} />
                <span><strong>Instagram</strong><small>@encantos_arabes_da_joice</small></span>
                <ArrowRight size={16} />
              </a>
              <a className="contact-card" href="https://wa.me/5547992552335" target="_blank" rel="noreferrer" aria-label="WhatsApp da Encantos Árabes da Joice">
                <MessageCircle size={20} />
                <span><strong>WhatsApp</strong><small>fale com a Joice por mensagem</small></span>
                <ArrowRight size={16} />
              </a>
              <a className="contact-card" href="https://chat.whatsapp.com/FyY1Gtq9G518kq2I34RVo3?s=cl&p=a&iam=2" target="_blank" rel="noreferrer" aria-label="Grupo VIP da Encantos Árabes da Joice">
                <UsersRound size={20} />
                <span><strong>Grupo VIP</strong><small>entre para receber novidades primeiro</small></span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="wordmark-main">Encantos Árabes</span>
          <span className="wordmark-rule" aria-hidden="true" />
          <span className="wordmark-sub">da Joice</span>
        </div>
        <p>perfumaria árabe · descobertas com intenção</p>
        <span className="footer-year">© 2026</span>
      </footer>
    </div>
  );
}
