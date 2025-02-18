"use client"

import { useState } from "react"
import OperatorPanel from "../components/OperatorPanel"

export default function OperatorPage() {
  const [activePanel, setActivePanel] = useState("A")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Operator paneli</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${activePanel === "A" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActivePanel("A")}
        >
          Operator
        </button>
        <button
          className={`px-4 py-2 rounded ${activePanel === "P" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActivePanel("P")}
        >
          To'lov
        </button>
        <button
          className={`px-4 py-2 rounded ${activePanel === "X" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActivePanel("X")}
        >
          Boshqa
        </button>
      </div>
      <OperatorPanel serviceId={activePanel} />
    </div>
  )
}

