import TicketDispenser from "./components/TicketDispenser"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Navbat boshqarish tizimi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TicketDispenser serviceId="A" serviceName="Operator bilan suhbat" ticketPrefix="operator" />
        <TicketDispenser serviceId="P" serviceName="To'lov xizmati" ticketPrefix="payment" />
        <TicketDispenser serviceId="X" serviceName="Boshqa xizmatlar" ticketPrefix="other" />
      </div>
    </div>
  )
}

