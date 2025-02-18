"use client"

import { useState } from "react"
import OperatorDisplay from "../components/OperatorDisplay"
import CustomerDisplay from "../components/CustomerDisplay"

export default function OperatorDisplayPage() {
  const [currentTickets, setCurrentTickets] = useState({
    A: null,
    P: null,
    X: null,
  })
  const [recentlyCalled, setRecentlyCalled] = useState([])

  const handleCallNext = (queueType, ticket) => {
    setCurrentTickets((prev) => ({ ...prev, [queueType]: ticket }))
    setRecentlyCalled((prev) => [ticket, ...prev.slice(0, 4)])
  }

  const handleFinishCustomer = (queueType) => {
    setCurrentTickets((prev) => ({ ...prev, [queueType]: null }))
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

