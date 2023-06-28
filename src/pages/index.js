import * as React from "react"
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { useEffect } from "react";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontWeight: "bold"
}

const IndexPage = () => {

  const { width } = useWindowDimensions();

  const [nameStyles, setNameStyles] = React.useState({fontSize: 100}) 

  useEffect(() => {
    setNameStyles({fontSize : Math.floor(width / 8)})
  }, [width])

  return (
    <main style={pageStyles}>
      <div style={{padding: "50px 40px"}}>
      <span style={nameStyles}>Suman<br />Thapa Magar</span>
      </div>
      <a href="mailto:hello@sumanthapamagar.com">hello@sumanthapamagar.com</a>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
