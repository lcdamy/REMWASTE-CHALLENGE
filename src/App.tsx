import Header from "./components/Header";
import Skip from "./components/Skip";
import Stepper from "./components/Stepper";


function App() {

  return (

    <div className="mx-8 md:mx-32">
      <Header />
      <div className="flex flex-col md:flex-row mt-[48px] mb-16 md:gap-24 gap-2">
        <div className="lg:w-1/5 w-full lg:h-full">
          <Stepper />
        </div>
        <div className="lg:w-2/3 w-full flex-1 ">
          <Skip />
        </div>
      </div>
    </div>
  )
}

export default App
