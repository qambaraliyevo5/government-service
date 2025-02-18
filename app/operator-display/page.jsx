"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Komponentlarni dynamic import qilish (server-side renderingni oldini olish)
const OperatorDisplay = dynamic(() => import("../components/OperatorDisplay"), { ssr: false })
const CustomerDisplay = dynamic(() => import("../components/CustomerDisplay"), { ssr: false })

export default function OperatorDisplayPage() {
  const [currentTickets, setCurrentTickets] = useState(() => ({
    A: "",
    P: "",
    X: "",
  }))
  const [recentlyCalled, setRecentlyCalled] = useState([])

  useEffect(() => {
    setCurrentTickets({ A: "", P: "", X: "" })
  }, [])

  const handleCallNext = (queueType, ticket) => {
    setCurrentTickets((prev) => ({ ...prev, [queueType]: ticket || "" }))
    setRecentlyCalled((prev) => [ticket, ...prev.slice(0, 4)])
  }

  const handleFinishCustomer = (queueType) => {
    setCurrentTickets((prev) => ({ ...prev, [queueType]: "" }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h2 className="text-2xl font-bold mb-4">Operator paneli</h2>
        <OperatorDisplay onCallNext={handleCallNext} onFinishCustomer={handleFinishCustomer} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Mijozlar ekrani</h2>
        <CustomerDisplay currentTickets={currentTickets} recentlyCalled={recentlyCalled} />
      </div>
    </div>
  )
}

// Default props berish
CustomerDisplay.defaultProps = {
  currentTickets: { A: "", P: "", X: "" },
  recentlyCalled: [],
}
