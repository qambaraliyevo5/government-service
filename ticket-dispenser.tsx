"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { id: "A", name: "Umumiy xizmatlar" },
  { id: "B", name: "Kredit bo'limi" },
  { id: "C", name: "Valyuta ayirboshlash" },
]

export default function TicketDispenser() {
  const [lastTicket, setLastTicket] = useState<string | null>(null)

  const getTicket = (serviceId: string) => {
    const ticketNumber = Math.floor(Math.random() * 100) + 1
    const newTicket = `${serviceId}${ticketNumber.toString().padStart(3, "0")}`
    setLastTicket(newTicket)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Navbat uchun chek olish</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {services.map((service) => (
          <Button key={service.id} onClick={() => getTicket(service.id)} className="w-full">
            {service.name}
          </Button>
        ))}
        {lastTicket && (
          <div className="mt-4 p-4 bg-primary text-primary-foreground rounded-md text-center">
            <p className="font-bold">Sizning chek raqamingiz:</p>
            <p className="text-2xl">{lastTicket}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

