import '../styles/globals.css'
import {ColorSchemeProvider, MantineProvider} from "@mantine/core"
import { MediaContextProvider } from "../Media.js"
import { useEffect, useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState('light');
  const [showChild, setShowChild] = useState(false);
  process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
  
  
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  
  const toggleColorScheme = (value) => setColorScheme( colorScheme === 'dark' ? 'light' : 'dark');
  if (typeof window === 'undefined') {
    return <></>;
  } else{
  return (
    <MediaContextProvider>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{colorScheme}}
  >
  <Component {...pageProps} />
  </MantineProvider>
  </ColorSchemeProvider>
  </MediaContextProvider>
  )
}
}

export default MyApp
