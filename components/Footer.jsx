"use client"; // Certifique-se de que o componente seja tratado no lado do cliente

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-center py-4 mt-8">
            <p className="text-white">
                Desenvolvido por{" "}
                <a 
                    href="https://www.linkedin.com/in/franklin-oliveira12/" 
                    className="font-bold text-accent hover:text-white transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                     Franklin Sales de Oliveira
                </a>
            </p>
        </footer>
    );
};

export default Footer;
