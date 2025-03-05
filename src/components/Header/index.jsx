import React from "react";

function Header() {
    return (
        <header className="bg-slate-900 text-white p-5">
            <div className="container mx-auto flex justify-between items-end">

                <h1 className="text-2xl font-bold">José Antonio</h1>

                <nav className="md:flex space-x-1">
                    <a href="#" className="p-4 bg-slate-900 hover:bg-slate-950 hover:shadow-xl transition-all">Início</a>
                    <a href="#" className="p-4 bg-slate-900 hover:bg-slate-950 hover:shadow-xl transition-all">Projetos</a>
                    <a href="#" className="p-4 bg-slate-900 hover:bg-slate-950 hover:shadow-xl transition-all" >Contato</a>
                </nav>
            </div>


        </header>
    );
}

export default Header;