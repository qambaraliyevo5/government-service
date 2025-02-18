"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const OperatorPanel = ({ serviceId }) => {
  const [queue, setQueue] = useState([])
  const [currentTicket, setCurrentTicket] = useState(null)

  useEffect(() => {
    const savedQueue = JSON.parse(localStorage.getItem(`queue_${serviceId}`) || "[]")
    setQueue(savedQueue)
    const savedCurrentTicket = localStorage.getItem(`currentTicket_${serviceId}`)
    setCurrentTicket(savedCurrentTicket)
  }, [serviceId])

  const callNextCustomer = () => {
    if (queue.length > 0) {
      const nextTicket = queue[0]
      setCurrentTicket(nextTicket)
      setQueue((prevQueue) => prevQueue.slice(1))
      localStorage.setItem(`currentTicket_${serviceId}`, nextTicket)
      localStorage.setItem(`queue_${serviceId}`, JSON.stringify(queue.slice(1)))
    }
  }

  const finishWithCustomer = () => {
    setCurrentTicket(null)
    localStorage.removeItem(`currentTicket_${serviceId}`)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          {serviceId === "A" ? "Operator xizmati" : serviceId === "P" ? "To'lov xizmati" : "Boshqa xizmatlar"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <p className="text-lg font-semibold">Joriy mijoz:</p>
          <p className="text-3xl font-bold text-green-600">{currentTicket || "---"}</p>
        </div>
        <div className="flex justify-between mb-4">
          <Button
            onClick={callNextCustomer}
            disabled={queue.length === 0 || currentTicket !== null}
            className="w-1/2 mr-2"
          >
            Keyingi mijoz
          </Button>
          <Button
            onClick={finishWithCustomer}
            disabled={currentTicket === null}
            className="w-1/2 ml-2 bg-red-500 hover:bg-red-600"
          >
            Tugatish
          </Button>
        </div>
        <div>
          <p className="font-semibold mb-2">Navbatdagilar:</p>
          <ul className="list-disc list-inside">
            {queue.map((ticket, index) => (
              <li key={index} className="text-lg">
                {ticket}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default OperatorPanel

