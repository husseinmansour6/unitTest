import React from "react"
import Header from "./components/header"
import Headline from "./components/headline"
import "./app.scss"

const tempArr = {
  fname: "foo",
  lname: "bar",
  email: "foo@bar.com",
  age: "24",
  onlineStatus: true
}
function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Post" desc="check the video" tempArr={tempArr} />
      </section>
    </div>
  )
}

export default App
