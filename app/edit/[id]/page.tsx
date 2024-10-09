import React from 'react'

const editPage = () => {
  return (
    <div>
    <div className='font-bold m-4 flex justify-center text-xl/10' >
       Edit Interpretation
    </div>
    <div>
        <form className="flex gap-3 flex-col">
        <input type='text' placeholder='Term' className='py-1 px-4 border rounded-md'/>
        
        <textarea name='interpretation' placeholder='Enter text' className='py-3 px-5 border rounded-md resize-none'/>
        <button className="bg-black text-white font-bold py-2  ">Update Description</button>
        </form>
    </div>
</div>
  )
}

export default editPage