import React from "react";
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/git.png";
import jose from "../../assets/jose.png";

function Home() {
    return (
        <section id="home" className="h-screen flex items-center justify-center bg-[#13131F] text-white gap-40">

            {/* infos da esquerda */}
            <div className="m-4 flex flex-col relative ">
                <div>
                    <p className="text-2xl font-light">Olá, meu nome é</p>
                </div>
                <div>
                    <h1 className="text-8xl font-bold">José Antonio</h1>
                </div>
                <div className="border m-5 rounded-md p-3 ml-0">
                    <div>
                        <span>Desenvolvedor Full Stack</span>
                    </div>
                    <div>
                        <span>Atualmente estudante de Ciência da Computação</span>
                    </div>
                </div>
                <div className="flex m-5 text-white ml-0">
                    <button class="bg-transparent hover:bg-blue-500 font-bold py-2 px-4 rounded inline-flex items-center border border-blue-500">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download CV</span>
                    </button>
                    <div className="flex items-center gap-5 ml-5">
                        <a className="rounded-lg border-white border-1 inline-flex" href="https://www.linkedin.com/in/joseantonio1712/" target="_blank">
                            <img src={linkedin} alt="Linkedin" className="w-12 h-auto" />
                        </a>
                        <a className="rounded-lg border-white border-1 inline-flex" href="https://github.com/joseajr17" target="_blank">
                            <img src={git} alt="Linkedin" className="w-12 h-auto " />
                        </a>
                    </div>
                </div>
            </div>
            {/* infos da direita */}
            <a href="https://github.com/joseajr17" className="flex items-center justify-center rounded-full border-white border-2 border-r-2 h-max transform transition-transform duration-300 hover:scale-110" target="_blank">
                <img src={jose} alt="Foto de José" className="w-90 h-auto" />
            </a>
        </section>
    );
}

export default Home;