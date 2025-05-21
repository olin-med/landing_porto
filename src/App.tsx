// src/App.tsx
import PageContainer from "./components/PageContainer"
import FormField from "./components/FormField"
import NavBar from "./components/NavBar"
import Button from "./components/LinkButton"
import CategoryCard from "./components/CategoryCard"
import VerticalCard from "./components/VerticalCard"
import Footer from "./components/Footer"

const PRODUCT_CARDS = [
  {
    title: "Linha Pro",
    content: (
      <p className="text-gray-700">
        A Linha Smart oferece cobertura básica, ideal para quem quer segurança
        a um preço acessível. Rede credenciada em todo o país com serviços
        essenciais de ambulatório e internação.
      </p>
    ),
  },
  {
    title: "Linha Porto Saúde",
    content: (
      <p className="text-gray-700">
        Com a Linha Advance você tem um plus em atendimento — coberturas
        ampliadas, exames especiais e reembolso parcial. Rede com hospitais
        e clínicas premium.
      </p>
    ),
  },
  {
    title: "Linha Tradicional",
    content: (
      <p className="text-gray-700">
        A Linha Premium abrange planos com atendimento altamente qualificado,
        reembolso no Brasil e exterior, e escolhas ilimitadas de prestadores.
      </p>
    ),
  },
  {
    title: "Linha Porto Bairros",
    content: (
      <p className="text-gray-700">
        A Linha Premium abrange planos com atendimento altamente qualificado,
        reembolso no Brasil e exterior, e escolhas ilimitadas de prestadores.
      </p>
    ),
  },
]

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* HOME */}
      <PageContainer
        id="home"
        className="
          bg-[#009fe5]
          py-16 px-4
          flex flex-col lg:flex-row            /* stack on mobile, row on lg+ */
          justify-center items-center
          gap-y-8 lg:gap-x-20                  /* vertical gaps on mobile */
        "
      >
        {/* LEFT: Main heading + subtext */}
        <div
          className="
            text-white
            text-3xl md:text-4xl lg:text-6xl    /* scale up across breakpoints */
            font-bold
            text-center lg:text-right          /* center on mobile, right on lg+ */
            leading-tight
          "
        >
          Porto Seguro
          <br />
          Sempre ao seu lado

          <p
            className="
              mt-4
              text-base md:text-lg lg:text-2xl   /* smaller on mobile */
              font-normal
              opacity-80
              text-center lg:text-right
            "
          >
            Seu caminho para proteção completa
          </p>
        </div>

        {/* RIGHT: form */}
        <FormField
          id="name"
          className="
            w-full       /* full width on mobile */
            sm:w-3/4     /* 75% on sm */
            md:w-1/2     /* 50% on md */
            lg:w-1/4     /* 25% on lg+ */
          "
          name="name"
          value=""
        />
      </PageContainer>


      {/* BENEFITS */}
      <PageContainer
        id="benefits"
        className="
          bg-[#CFF2FB]
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-center justify-center
          text-center lg:text-left
          gap-y-4 lg:gap-x-40
        "
      >
        <div>Quer Marcar Consultas ou dúvidas sobre seu plano atual ? Já é Cliente?</div>
        <Button
          id="submit"
          type="submit"
          className="mt-4 lg:mt-0"
          link="https://www.portoseguro.com.br/porto-seguro-saude"
        >
          Visite a Central de Clientes 
        </Button>
      </PageContainer>


      {/* ADVERTISING */}
      <PageContainer
        id="advertising"
        className="
          bg-[#404084]
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-center justify-center
          text-center lg:text-left
          gap-y-8 lg:gap-x-40
        "
      >
        <img
          src="/health.png"
          alt="consulta"
          className="h-56 sm:h-64 lg:h-80 mx-auto lg:mx-0 rounded"
        />
        <div className="text-white space-y-2">
          <div>Não é Cliente?</div>
          <div>Quer saber mais sobre nossos planos?</div>
        </div>
      </PageContainer>


      {/* CATEGORIES */}
      <PageContainer
        id="categories"
        className="
          bg-[#CFF2FB] py-16 px-4 sm:px-6 lg:px-8
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6 lg:gap-8
        "
      >
        <CategoryCard id="category1" title="Linha Pro" imageUrl="/familia1.png">
          <p>- Empresas de 3 a 499 vidas;</p>
          <p>- Abrangência regional;</p>
          <p>- Custo-benefício.</p>

        </CategoryCard>
        <CategoryCard id="category1" title="Linha Porto Saúde" imageUrl="/corporate.png">
          <p>- Pequenas, médias e grandes empresas;</p>
          <p>- Abrangência nacional;</p>
          <p>- Rede otimizada;</p>
          <p>- Reembolso.</p>

        </CategoryCard>
        <CategoryCard id="category1" title="Linha Tradicional" imageUrl="/health1.png">
          <p>- Para pequenas e médias empresas;</p>
          <p>- Abrangência nacional;</p>
          <p>- Ampla rede referenciada;</p>
          <p>- Reembolso.</p>

        </CategoryCard>
        <CategoryCard id="category1" title="Linha Porto Bairros *Portomed" imageUrl="/health2.png">
          <p>- Empresas de 3 a 99 vidas;</p>
          <p>- Abrangência Municipal;</p>
          <p>- Hospital e Laboratório no seu bairro;</p>
          <p>- Preço que cabe no bolso.</p>

        </CategoryCard>
      </PageContainer>


      {/* PRODUCTS ACCORDION + IMAGE */}
      <PageContainer
        id="products"
        className="
          bg-[#404084]
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-stretch justify-center
          gap-y-8 lg:gap-x-40
        "
      >
        {/* Accordion cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
          {PRODUCT_CARDS.map(({ title, content }) => (
            <VerticalCard key={title} title={title}>
              {content}
            </VerticalCard>
          ))}
        </div>

        {/* Full‑height image */}
        <div className="w-full lg:w-1/2 h-auto lg:h-full flex justify-center">
          <img
            src="/running.png"
            alt="Detalhes dos produtos"
            className="h-full w-auto object-cover shadow-lg rounded"
          />
        </div>
      </PageContainer>

      <Footer />
    </div>
  )
}

export default App
