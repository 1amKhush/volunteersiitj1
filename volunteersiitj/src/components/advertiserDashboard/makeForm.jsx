import React from 'react'
import { CategoryOneTemplate,CategoryTwoTemplate,CategoryThreeTemplate, CategoryFourTemplate} from './makeFormComponents';

const Button = ({text,bgColor,onClick}) => {
    return(
      <button onClick={onClick} className={`w-full bg-${bgColor}-500 hover:bg-${bgColor}-600 disabled:bg-${bgColor}-900 active:scale-95 py-2 px-4 rounded-md shadow-md text-white`}>
        {text}
      </button>
    );
}

const MakeForm = () => {
  return (
    <div className="mt-10 p-6 bg-gray-100 min-h-[600px] flex flex-col gap-6 dark:bg-gray-900">
      <h1 className="text-3xl font-bold dark:text-white transition-all duration-300 ease-in-out">Step 2 - Create Form</h1>
      <div className="flex flex-col md:flex-row gap-6 h-full">
        <div className="w-full min-h-[500px] overflow-y-visible bg-white shadow-lg rounded-md p-6 flex flex-col gap-4 transition-all duration-300 ease-in-out">
          <div className='flex gap-x-2 border-b-2 border-black text-gray-400'>
            <span>Name, Roll number and Email are provided by default.</span>
            <span>If you want anything else add below.</span>
          </div>
          <div className='w-full flex flex-col gap-y-2'>
            <CategoryOneTemplate type="text"/>
            <CategoryOneTemplate type="number"/>
            <CategoryOneTemplate type="email"/>

            <CategoryTwoTemplate type='dropdown'/>
            <CategoryTwoTemplate type='radio' isNumberOfChoicesNeeded={true}/>

            <CategoryThreeTemplate type='image'/>
            <CategoryThreeTemplate type='file'/>

            <CategoryFourTemplate type='datetime'/>
          </div>
        </div>
        <div className='w-full md:w-1/3 flex flex-col gap-y-4'>
          <Button text='Text Input' bgColor='blue' onClick={()=>console.log("Clicked")}/>
          <Button text='Drop down' bgColor='blue' onClick={()=>console.log("Clicked")}/>
          <Button text='Radio Input' bgColor='blue' onClick={()=>console.log("Clicked")}/>
          <Button text='Number Input' bgColor='blue' onClick={()=>console.log("Clicked")}/>
          <Button text='Email Input' bgColor='blue' onClick={()=>console.log("Clicked")}/>
          <Button text='File Input' bgColor='green' onClick={()=>console.log("Clicked")}/>
          <Button text='Image Input' bgColor='green' onClick={()=>console.log("Clicked")}/>
          <Button text='DateTime Input' bgColor='yellow' onClick={()=>console.log("Clicked")}/>
          <Button text='Save' bgColor='red' onClick={()=>console.log("Clicked")}/>
        </div>
      </div>
    </div>
  )
}

export default MakeForm