import React from "react"
import Header from "./components/header"
import Headline from "./components/headline"
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header={1} desc="check the video" />
      </section>
    </div>
  )
}

export default App
