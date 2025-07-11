// 'use client'

// import { useState } from 'react'

// const messages = ['SEA 	&rarr; NYC &rarr; CDMX', 'Proudly from Seattle', 'etc']
// const getRandomMsg = () => messages[Math.floor(Math.random() * messages.length)]

// export default function Badge(): JSX.Element {
//   const [message, setMessage] = useState(getRandomMsg)
//   return (
//     <button
//       type="button"
//       onClick={() => setMessage(getRandomMsg)}
//       className="mb-6 max-w-max rounded-full border border-[#3E9B91]/30 bg-[#3E9B91]/10 text-[#3E9B91] dark:border-[#3E9B91] dark:bg-[#3E9B91]/30 px-2.5 py-1 text-xs  dark:text-white font-medium"
//     >
//       {message}
//     </button>
//   )
// }

'use client'

import { useState, useEffect } from 'react'

const facts = [
  'Proudly from Seattle',
  'Loves Brooklyn Heights',
  'Once a barista, always a barista',
]

export default function FactBadge() {
  const [fact, setFact] = useState(facts[0])
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)]
    setFact(randomFact)
  }, [])

  function changeFact() {
    setVisible(false)
    setTimeout(() => {
      let next = facts[Math.floor(Math.random() * facts.length)]
      while (next === fact && facts.length > 1) {
        next = facts[Math.floor(Math.random() * facts.length)]
      }
      setFact(next)
      setVisible(true)
    }, 200)
  }

  return (
    <button
      onClick={changeFact}
      className="mb-6 max-w-max rounded-full border border-[#3E9B91]/30 bg-[#3E9B91]/10 text-[#3E9B91] dark:border-[#3E9B91] dark:bg-[#3E9B91]/30 px-2.5 py-1 text-xs dark:text-white font-medium cursor-pointer select-none transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.8)',
      }}
    >
      {fact}
    </button>
  )
}
