import healthIcon from '../assets/icons/health.svg'
import orphanIcon from '../assets/icons/orphan.svg'
import schoolIcon from '../assets/icons/school.svg'
import waterIcon from '../assets/icons/water.svg'


const Causes = () => {

  const causeList = [
    {
      id: 1,
      icon: schoolIcon,
      title: 'Education',
      desc: 'Insuring a quality education through providing school furniture, computers, reference books and so on'
    },
    {
      id: 2,
      icon: waterIcon,
      title: 'Potable Water',
      desc: 'Providing portable water supply for rural community through construction of hand-dug water wells'
    },
    {
      id: 3,
      icon: healthIcon,
      title: 'Health',
      desc: 'Insuring accessible and quality health service to local community through construction of health institutes'
    },
    {
      id: 4,
      icon: orphanIcon,
      title: 'Orphan Support',
      desc: 'Supporting orphans through provision of school uniform, educational materials, and family based financial support'
    }
  ]

  return (
    <div className='w-full bg-sky-50'>

    <section id="causes" className="container mx-auto px-4 py-14 z-10 h-full flex flex-col gap-8">
        <h2 className="text-center text-3xl font-semibold mb-8 ">Our Causes</h2>
        <div className='grid grid-cols-4 gap-4'>
          {causeList.map((cause, i) => <div className='flex flex-col items-center gap-4 w-full max-w-xs p-8 bg-slate-50 rounded-md shadow' key={i}>
            <img src={cause.icon} className='w-16 h-16'/>
            <h3 className='text-lg font-semibold'>{cause.title}</h3>
            <p className='text-center'>{cause.desc}</p>
          </div>)}
        </div>
    </section>
    </div>

  )
}

export default Causes