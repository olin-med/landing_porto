import PageContainer from "./components/PageContainer"
import FormField from "./components/FormField"
import NavBar from "./components/NavBar"
import Button from "./components/LinkButton"
import CategoryCard from "./components/CategoryCard"
import VerticalCard from "./components/VeritcalCard"
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
];

function App() {

  return(
    <div className="flex flex-col h-screen">
      <NavBar />
      <PageContainer
        id="home"
        className="bg-[#009fe5] py-16 px-4 flex justify-center items-center gap-x-20"
      >
        {/* LEFT: Main heading + subtext */}
        <div className="text-white text-4xl md:text-6xl font-bold text-right leading-tight">
          Porto Seguro<br />
          Sempre ao seu lado

          {/* Subtext */}
          <p className="mt-4 text-lg md:text-2xl font-normal opacity-80 text-right">
            Seu caminho para proteção completa
          </p>
        </div>

        {/* RIGHT: form (kept at 1/4 width here) */}
        <FormField
          id="name"
          className="w-1/4"
          name="name"
          value=""
        />
      </PageContainer>


      <PageContainer id="benefits" className="bg-[#CFF2FB] font-bold justify-center gap-40 items-center py-16  px-4 sm:px-6 lg:px-8 ">
        Quer Marcar Consultas ou dúvidas sobre seu plano atual ?
        Já é Cliente?
        <Button
          id="submit"
          type="submit"
          className="cursor-pointer"
          link="https://www.portoseguro.com.br/porto-seguro-saude"
        >
          Visite a Central de Clientes 
        </Button>
      </PageContainer>
      <PageContainer id="advertising" className="bg-[#404084] flex font-bold justify-center gap-40 items-center">
        <img src="/health.png" alt="consulta" className="h-80"/>
        <div className="flex flex-col h-full w-2/3 py-16 text-white gap-y-8">
          <span>Não é Cliente?</span>
          <span>Quer saber mais sobre nossos planos?</span>
        </div>
      </PageContainer>
      <PageContainer id="categories" className="grid grid-cols-4 gap-8 auto-rows-fr py-16 bg-[#CFF2FB] px-4 sm:px-6 lg:px-8 ">
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
      <PageContainer
        id="products"
        className="flex font-bold justify-center gap-40 bg-[#404084] items-center"
      >
        {/* LEFT: Accordion cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6 ms-28 py-12">
          {PRODUCT_CARDS.map(({ title, content }) => (
            <VerticalCard key={title} title={title}>
              {content}
            </VerticalCard>
          ))}
        </div>

        {/* RIGHT: Image */}
        <div className="w-full lg:w-1/2 flex justify-center h-full"> {/* wrapper fills height */}
          <img
            src="/running.png"
            alt="Detalhes dos produtos"
            className="object-cover shadow-lg h-100"
          />
        </div>
      </PageContainer>


      <Footer />
    </div>
  
  )
}

export default App