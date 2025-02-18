"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CustomerDisplay() {
  const [currentTickets, setCurrentTickets] = useState({
    A: null,
    P: null,
    X: null,
  })
  const [upcomingTickets, setUpcomingTickets] = useState({
    A: [],
    P: [],
    X: [],
  })

  useEffect(() => {
    const updateDisplay = () => {
      const newCurrentTickets = {
        A: localStorage.getItem("currentTicket_A") || null,
        P: localStorage.getItem("currentTicket_P") || null,
        X: localStorage.getItem("currentTicket_X") || null,
      }
      setCurrentTickets(newCurrentTickets)

      const newUpcomingTickets = {
        A: JSON.parse(localStorage.getItem("queue_A") || "[]").slice(0, 5),
        P: JSON.parse(localStorage.getItem("queue_P") || "[]").slice(0, 5),
        X: JSON.parse(localStorage.getItem("queue_X") || "[]").slice(0, 5),
      }
      setUpcomingTickets(newUpcomingTickets)
    }

    updateDisplay()
    const interval = setInterval(updateDisplay, 5000) // Har 5 sekundda yangilanadi

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Mijozlar ekrani</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["A", "P", "X"].map((serviceId) => (
          <Card key={serviceId} className="w-full">
            <CardHeader>
              <CardTitle className="text-center text-xl">
                {serviceId === "A" ? "Operator xizmati" : serviceId === "P" ? "To'lov xizmati" : "Boshqa xizmatlar"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <p className="text-lg font-semibold">Joriy mijoz:</p>
                <p className="text-3xl font-bold text-green-600">{currentTickets[serviceId] || "---"}</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Keyingi navbatlar:</p>
                <ul className="list-disc list-inside">
                  {upcomingTickets[serviceId].map((ticket, index) => (
                    <li key={index} className="text-lg">
                      {ticket}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

