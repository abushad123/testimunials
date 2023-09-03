import Title from "./components/Title";
import Button from "./components/Button";
function App() {

  return (
    <>
    <div className="flex flex-col">
        <div className='mx-auto justify-center items-center'>
            <Title />
        </div>
        <div>
            <Button />
        </div>
    </div>
    </>
  )
}

export default App
