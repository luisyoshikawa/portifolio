import {
  HiCommandLine,
  HiComputerDesktop,
  HiAcademicCap,
} from "react-icons/hi2"

export const Services = () => {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com Asp.net, React.js, Typescript, HTML5 e CSS3",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "API",
      description:
        "Proficiente em consumo e criação de APIs: alavancando a conexão de Dados para impulsionar Resultados",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
    {
      title: "Aprendizado",
      description:
        "Disposição para aprender o que for necessário para empresa crescer",
      icon: <HiAcademicCap className="h-12 w-12" />,
    },
  ]
  return (
    <section className='container mx-auto my-12 max-w-4xl p-4'>
      <div className='p-4 text center'>
        <p className='text-sm font-semibold uppercase text-blue-600'>O que eu faço de Melhor</p>

        <h2 className='mb-2 font-bold text-blue-900'>
          <span className='mr-2 font-headline text-3xl'>Meus</span>
          <span className='font-handwriting text-4xl'>Serviços</span>
        </h2>

        <p className='text-sm text-gray-600'>
          Posso atender uma gama de serviços.
        </p>

      </div>

      <div className='mt-6 flex flex-col gap-2 md:flex-row'>
        {
          services.map((service, index) => (
            <div className='basis-1/3 rounded-lg bg-blue-700 p-4 text-white' key={`service-${index}`}>
              <div className='mb-2'>{service.icon}</div>
              <h3 className='text-xl font-bold'>{service.title}</h3>
              <p className='text-sm'>{service.description}</p>
            </div>
          ))
        }

      </div>

    </section>
  )
}
