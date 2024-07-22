
function CompanyLogos() {
    
    const company = [
         {_id:1,src : "/companyImgs.png"},
         {_id:2,src : "/companyImgs.png"},
         {_id:3,src : "/companyImgs.png"},
         {_id:4,src : "/companyImgs.png"},
         {_id:5,src : "/companyImgs.png"},
         {_id:6,src : "/companyImgs.png"},
   ]
    
return (
    <div id='company' className='h-[30vh] border-t bg-[#D8D8D8] border-b w-[100%]  mt-[40px] mb-6 flex items-center justify-center p-8'>
           {company.map((c,i)=>{
             return <ul key={c._id}>
                  <li><img src={c.src} alt="Company images"/></li>
             </ul>
           })}  
    </div>
  )
}

export default CompanyLogos