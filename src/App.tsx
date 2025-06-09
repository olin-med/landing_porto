// src/App.tsx
import PageContainer from "./components/PageContainer"
import FormField from "./components/FormField"
import NavBar from "./components/NavBar"
import Button from "./components/LinkButton"
import FormButton from "./components/FormButton"
import CategoryCard from "./components/CategoryCard"
import VerticalCard from "./components/VerticalCard"
import MobileWhatsAppFloating from "./components/MobileWhatsAppFloating"
import Footer from "./components/Footer"

import pro from "/pro.avif"
import plus from "/plus.avif"
import health from "/health2.avif"

const PRODUCT_CARDS = [
  {
    title: "Linha Pro",
    content: (
      <p className="text-gray-700">
        A Linha Pro oferece cobertura básica, ideal para quem quer segurança
        a um preço acessível. Rede credenciada em todo o país com serviços
        essenciais de ambulatório e internação.
      </p>
    ),
  },
  {
    title: "Linha Porto Saúde",
    content: (
      <p className="text-gray-700">
        Com a Linha Porto Saúde você tem um plus em atendimento — coberturas
        ampliadas, exames especiais e reembolso parcial. Rede com hospitais
        e clínicas premium.
      </p>
    ),
  },
  {
    title: "Linha Tradicional",
    content: (
      <p className="text-gray-700">
        A Linha Tradicional abrange planos com atendimento altamente qualificado,
        reembolso no Brasil e exterior, e escolhas ilimitadas de prestadores.
      </p>
    ),
  },
  {
    title: "Linha Porto Bairros",
    content: (
      <p className="text-gray-700">
        A Linha Porto Bairros traz planos com abrangência municipal, preço que
        cabe no bolso e hospital/laboratório perto de você.
      </p>
    ),
  },
]

// ... imports mantidos

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* ─── MOBILE: header over background, form below ─── */}
      <section className="block lg:hidden bg-[#009fe5]"
      style={{
              backgroundImage: `url(${health})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
        <div className="w-full py-16 px-4 flex items-center min-h-[450px] relative justify-center">
          <div className="text-[#009fe5] text-3xl md:text-4xl font-bold text-center leading-tight">
            Porto Seguro
            <br />
            <p className="text-black">Sempre ao seu lado</p>
            <p className="mt-4 text-white text-base md:text-lg font-normal opacity-80">
              Seu caminho para proteção completa
            </p>
          </div>
        </div>
      </section>

      {/* ─── DESKTOP: hero with side-by-side layout ─── */}
      <PageContainer
        id="home"
        className="hidden lg:flex bg-[#009fe5] py-16 px-4 flex-row justify-center items-center gap-x-20"
        style={{
            backgroundImage: `url(${health})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
      >
        <div className="text-[#009fe5] text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-right leading-tight">
          Porto Seguro
          <br />
          <p className="text-black">Sempre ao seu lado</p>
          <p className="mt-4 text-black text-base md:text-lg lg:text-2xl font-normal opacity-80 text-center lg:text-right">
            Seu caminho para proteção completa
          </p>
        </div>

        <FormField
          id="name"
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4"
          name="name"
          value=""
        />
      </PageContainer>

      

      {/* BENEFITS */}
      <PageContainer
        id="benefits"
        className="bg-[#CFF2FB] py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-y-4 lg:gap-x-40"
      >
        <div className="ext-base md:text-lg lg:text-xl lg:text-right">
          Quer Marcar Consultas ou dúvidas sobre seu plano atual? <br className="hidden lg:block" />
          Já é Cliente?
        </div>
        <Button
          id="submit"
          type="submit"
          className="mt-4 lg:mt-0 cursor-pointer"
          link="https://www.portoseguro.com.br/porto-seguro-saude"
        >
          Visite a Central de Clientes
        </Button>
      </PageContainer>

      {/* ADVERTISING */}
      <PageContainer
        id="advertising"
        className="bg-[#404084] py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-y-8 lg:gap-x-40"
      >
        <img
          src="/health.avif"
          alt="consulta"
          className="h-56 sm:h-64 lg:h-80 mx-auto lg:mx-0 rounded"
        />
        <div className="text-white space-y-2 ext-base md:text-lg lg:text-xl">
          <div>Não é Cliente?</div>
          <div>Quer saber mais sobre nossos planos?</div>
          <FormButton
            mobileScrollTargetId="home2"
            desktopScrollTargetId="home"
            className="mt-4 lg:mt-0 text-black cursor-pointer bg-[#CFF2FB]"
          >
            Solicite uma Cotção
          </FormButton>
        </div>
      </PageContainer>

      {/* CATEGORIES */}
      <PageContainer
        id="categories"
        className="bg-[#CFF2FB] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Nossas Categorias de Planos
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <CategoryCard id="category1" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="Linha Pro" imageUrl="/familia1.avif">
            <p>- Empresas de 3 a 499 vidas;</p>
            <p>- Abrangência regional;</p>
            <p>- Custo-benefício.</p>
          </CategoryCard>
          <CategoryCard id="category2" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="Linha Porto Saúde" imageUrl="/corporate.avif">
            <p>- Pequenas, médias e grandes empresas;</p>
            <p>- Abrangência nacional;</p>
            <p>- Rede otimizada;</p>
            <p>- Reembolso.</p>
          </CategoryCard>
          <CategoryCard id="category3" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="Linha Tradicional" imageUrl="/health1.avif">
            <p>- Para pequenas e médias empresas;</p>
            <p>- Abrangência nacional;</p>
            <p>- Ampla rede referenciada;</p>
            <p>- Reembolso.</p>
          </CategoryCard>
          <CategoryCard id="category4" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="Linha Porto Bairros" imageUrl="/health2.avif">
            <p>- Empresas de 3 a 99 vidas;</p>
            <p>- Abrangência municipal;</p>
            <p>- Hospital e laboratório no seu bairro;</p>
            <p>- Preço que cabe no bolso.</p>
          </CategoryCard>
        </div>
      </PageContainer>

      {/* PRODUCTS */}
      <PageContainer
        id="products"
        className="bg-[#404084] py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-y-8">
          <h2 className="text-center lg:text-left text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            Conheça os Nossos Produtos
          </h2>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-y-8 lg:gap-x-40">
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
              {PRODUCT_CARDS.map(({ title, content }) => (
                <VerticalCard key={title} title={title}>
                  {content}
                </VerticalCard>
              ))}
            </div>

            <div className="w-full lg:w-1/2 h-[350px] flex justify-center">
              <img
                src="/running.avif"
                alt="Detalhes dos produtos"
                className="h-full w-auto object-cover shadow-lg rounded"
              />
            </div>
          </div>
        </div>
      </PageContainer>
      {/* ─── MOBILE FORM BELOW HERO ─── */}
      <PageContainer id="home2" className="block lg:hidden bg-gray-200">
        <div className="px-4 pb-16">
          <FormField
            id="name"
            name="name"
            value=""
            className="w-full sm:w-3/4 md:w-1/2 mx-auto"
          />
        </div>
      </PageContainer>

      <div className="flex flex-col">
        <MobileWhatsAppFloating />
      </div>

      <Footer />
    </div>
  );
}

export default App;
