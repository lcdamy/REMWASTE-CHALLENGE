import Header from "./components/Header";
import Skip from "./components/Skip";
import Stepper from "./components/Stepper";
import NextPage from "./components/NextPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div className="mx-8 md:mx-32">
        <Header />
        <div className="flex flex-col md:flex-row mt-[48px] mb-4 md:gap-24 gap-2">
          <div className="lg:w-1/5 w-full lg:h-full">
            <Stepper />
          </div>
          <div className="lg:w-2/3 w-full flex-1 ">
            <Routes>
              <Route path="/" element={<Skip />} />
              <Route path="next-step" element={<NextPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
