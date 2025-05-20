import { useNavigate } from "react-router-dom"

import PageContainer from "./components/PageContainer"
import FormField from "./components/FormField"
import NavBar from "./components/NavBar"
import Button from "./components/LinkButton"
import CategoryCard from "./components/CategoryCard"

function App() {

  return(
    <div className="h-screen">
      <NavBar />
      <PageContainer id="home" className="bg-[#009fe5] py-16  px-4 sm:px-6 lg:px-8 ">
        <FormField
          id="name"
          className="mb-4"
          name="name"
          placeholder="Name"
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
    </div>
  
  )
}

export default App