import React from 'react'
import Header from './components/Header'
import Center from './components/Center'
//import useDarkMode from './hooks/useDarkTheme'

const App = () => {
 // const [theme,setTheme] = useDarkMode()
  return (
  <div>
{/* header section */}
  <Header />
  {/* center section */}
  <Center />
  </div>
  )
}

export default App