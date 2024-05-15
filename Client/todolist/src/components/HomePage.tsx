import { useNavigate } from 'react-router-dom';
import Button from './Button';
export default function HomePage() {
    const history = useNavigate();


    function handleSubmit(){
        history("/");
        return console.log("Button Clicked");
        

        
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
            <h1 className="text-4xl font-bold text-indigo-100 text-center mb-2">
                Welcome to the Home Page : it is under construction
            </h1>
            <Button text="back to ligin" type='submit' onClick={handleSubmit}/>
        </div>
    );
}