import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export const Projects = () => {
  const projects = [
    {
      title: "Projeto ABC",
      description: "Carrinho de E-commerce",
      image:
        "images/ABC.png",
      link: "https://cart-pi-one.vercel.app/",
      colSpan: "col-span-1",
    },
    {
      title: "Fintech",
      description: "Consumindo uma api, tratando ela, expondo e construindo um gráfico",
      image:
        "images/fintech.png",
      link: "https://fintech-azure.vercel.app/",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Alunos API",
      description: "Criando e Consumindo uma api (.Net & React)",
      image:
        "images/AlunosApi.png",
      link: "https://www.linkedin.com/posts/luisyoshikawa_emprego-opentowork-informaertica-activity-7137985036741496832-Jrqw?utm_source=share&utm_medium=member_desktop",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Biblioteca",
      description: "Crud básico feito em Asp.net",
      image:
        "images/Emprestimos.png",
      link: "https://www.linkedin.com/posts/luisyoshikawa_mvc-activity-7137935957579735040-zWng?utm_source=share&utm_medium=member_desktop",
      colSpan: "col-span-1",
    },
  ]
  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como Desenvolvedor.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
              >
                <img src={project.image} alt={project.title} className="h-full w-full rounded-lg "/>
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}
