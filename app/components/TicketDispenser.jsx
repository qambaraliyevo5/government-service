"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TicketDispenser = ({ serviceId, serviceName, ticketPrefix }) => {
  const [ticket, setTicket] = useState(null)
  const [ticketCounter, setTicketCounter] = useState(1)
  const [isPrinted, setIsPrinted] = useState(false)

  useEffect(() => {
    const savedCounter = localStorage.getItem(`${ticketPrefix}_counter`)
    if (savedCounter) {
      setTicketCounter(Number.parseInt(savedCounter, 10))
    }
  }, [ticketPrefix])

  const getTicket = () => {
    const newTicket = `${serviceId}${ticketCounter.toString().padStart(3, "0")}`
    setTicket(newTicket)
    setTicketCounter((prevCounter) => {
      const newCounter = prevCounter + 1
      localStorage.setItem(`${ticketPrefix}_counter`, newCounter.toString())
      return newCounter
    })
    setIsPrinted(false)

    // Add ticket to queue
    const queue = JSON.parse(localStorage.getItem(`queue_${serviceId}`) || "[]")
    queue.push(newTicket)
    localStorage.setItem(`queue_${serviceId}`, JSON.stringify(queue))
  }

  const printTicket = () => {
    console.log(`Chek chiqarilmoqda: ${ticket}`)
    setIsPrinted(true)

    setTimeout(() => {
      setTicket(null)
      setIsPrinted(false)
    }, 5000)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">{serviceName}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {!ticket && (
          <Button onClick={getTicket} className="w-full h-16 text-xl">
            Navbat olish
          </Button>
        )}
        {ticket && !isPrinted && (
          <div className="mt-4 p-6 bg-green-100 border-2 border-green-500 rounded-md text-center">
            <p className="font-bold text-xl mb-2">Sizning navbat raqamingiz:</p>
            <p className="text-4xl font-bold text-green-700">{ticket}</p>
            <p className="mt-4 text-lg">Iltimos, chekni chiqarib oling.</p>
            <Button onClick={printTicket} className="mt-4 w-full h-16 text-xl bg-blue-500 hover:bg-blue-600">
              Chekni chiqarish
            </Button>
          </div>
        )}
        {ticket && isPrinted && (
          <div className="mt-4 p-6 bg-blue-100 border-2 border-blue-500 rounded-md text-center">
            <p className="font-bold text-xl mb-2">Chek chiqarildi!</p>
            <p className="text-2xl">
              Navbat raqamingiz: <span className="font-bold text-blue-700">{ticket}</span>
            </p>
            <p className="mt-4 text-lg">Iltimos, o'z navbatingizni kutib turing.</p>
            <p className="mt-2 text-sm text-gray-600">5 soniyadan so'ng yangi chek olishingiz mumkin.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default TicketDispenser

