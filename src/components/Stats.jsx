const Stats = () => {

  const statList = [
    {
      id: 1,
      count: 7620,
      desc: 'beneficiaries of potable water'
    },
    {
      id: 2,
      count: 18350,
      desc: 'reference and text books provided for 9 schools'
    },
    {
      id: 3,
      count: 153,
      desc: 'Beneficiary orphans'
    }
  ]

  return (
    <div className='w-full bg-sky-950 py-16'>

    <section id="stats" className="container mx-auto px-4  z-10 h-full flex flex-col gap-8">
        <div className='grid grid-cols-3 gap-4'>
          {statList.map((stat, i) => <div className='flex flex-col-reverse items-center gap-4 p-8 text-white uppercase' key={i}>
            <h3 className='text-base text-center'>{stat.desc}</h3>
            <p className='text-center text-5xl'>{stat.count}+</p>
          </div>)}
        </div>
    </section>
    </div>

  )
}

export default Stats