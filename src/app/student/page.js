import React from 'react'

async function getStudentData(){
   const res = await fetch('https://gorest.co.in/public/v2/users') 
   
   return res.json()
}

export default async function Page() {
    const data = await getStudentData();
    console.log(data);
    return (
    <section class="col-6">
        <ul>
            {            
                data.map((cv,idx,arr) => {                    
                    return <li key={idx}>{cv.name}</li>
                })
            }   
        </ul>
    </section>
  )
}
