import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayouts } from "@/layouts/public-layouts";
import { HomePage } from "@/routes/home";
import { SignUpPage } from "./routes/sign-up";
import { SignInPage } from "./routes/sign-in";
import AuthenticationLayout from "./layouts/auth-layout";
import { ProtectedRoutes } from "./layouts/protected-routes";
import { MainLayouts } from "./layouts/main-layout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayouts />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayouts />
            </ProtectedRoutes>
          }
        >
          {/* add all the protect routes */}

          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;