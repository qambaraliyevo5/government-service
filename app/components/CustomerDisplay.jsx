import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CustomerDisplay = ({ currentTickets, recentlyCalled }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Joriy chaqirilgan mijozlar</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4">
          {Object.entries(currentTickets).map(([service, ticket]) => (
            <div key={service} className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                {service === "A" ? "Operator" : service === "P" ? "To'lov" : "Boshqa"}
              </h3>
              <p className="text-4xl font-bold text-green-600">{ticket || "---"}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-center text-2xl">So'nggi chaqirilganlar</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {recentlyCalled.map((ticket, index) => (
              <li key={index} className="text-xl">
                {ticket}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default CustomerDisplay

