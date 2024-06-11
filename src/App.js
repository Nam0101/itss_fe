import Router from "./routers";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import NavigationScroll from "./layouts/NavigationScroll";

function App() {
  return (
    <StyledEngineProvider injectFirst>
        <NavigationScroll>
          <CssBaseline />
          <Router />
        </NavigationScroll>
    </StyledEngineProvider>
  );
}

export default App;
