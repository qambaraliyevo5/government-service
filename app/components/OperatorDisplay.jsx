"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const OperatorDisplay = ({ queues, onCallNext, onFinishCustomer }) => {
  const [currentTickets, setCurrentTickets] = useState({
    A: null,
    P: null,
    X: null,
  })

  const callNextCustomer = (queueType) => {
    if (queues[queueType].length > 0) {
      const nextTicket = queues[queueType][0]
      setCurrentTickets((prev) => ({ ...prev, [queueType]: nextTicket }))
      onCallNext(queueType, nextTicket)
    }
  }

  const finishWithCustomer = (queueType) => {
    setCurrentTickets((prev) => ({ ...prev, [queueType]: null }))
    onFinishCustomer(queueType)
  }

  const renderOperatorSection = (queueType, title) => (
    <Card className="w-full mb-4">
      <CardHeader>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <p className="text-lg font-semibold">Joriy mijoz:</p>
          <p className="text-3xl font-bold text-green-600">{currentTickets[queueType] || "---"}</p>
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => callNextCustomer(queueType)}
            disabled={queues[queueType].length === 0 || currentTickets[queueType] !== null}
            className="w-1/2 mr-2"
          >
            Keyingi mijoz
          </Button>
          <Button
            onClick={() => finishWithCustomer(queueType)}
            disabled={currentTickets[queueType] === null}
            className="w-1/2 ml-2 bg-red-500 hover:bg-red-600"
          >
            Tugatish
          </Button>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Navbatdagilar:</p>
          <ul className="list-disc list-inside">
            {queues[queueType].map((ticket, index) => (
              <li key={index}>{ticket}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {renderOperatorSection("A", "Operator bilan suhbat")}
      {renderOperatorSection("P", "To'lov xizmati")}
      {renderOperatorSection("X", "Boshqa xizmatlar")}
    </div>
  )
}

export default OperatorDisplay

