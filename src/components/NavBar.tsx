import WhatsAppButton from "./WhatsappButton";
import PhoneButton from "./PhoneButton";
import ClientButton from "./ClientButton";

function Navbar() {
    return (
        <nav className="bg-gray-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <img src="/logo_porto.png" alt="Logo" className="w-30" />
            <div className="flex flex-row justify-center items-center gap-x-6">
                <ClientButton
                    link="https://www.portoseguro.com.br/porto-seguro-saude"
                />
                <PhoneButton />
                <WhatsAppButton
                    message = 'Olá, gostaria de saber mais sobre os planos de saúde da Porto Seguro.'
                />
            </div>
            
        </div>
        </nav>
    );
}

export default Navbar;