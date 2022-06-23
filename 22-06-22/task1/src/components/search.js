import { useState } from 'react';
import Data from '../MOCK_DATA.json'
 

function Search (){

    // const Data=['khozama','luijan','ayman','nada','mohammad'];
    const {searchTerm , setSearchTerm}= useState("");
    
    return (


        <div className='App container'>
            <input type="text" placeholder="Search" onChange={(event)=>{setSearchTerm(event.target.value);}}/>

            {
                Data.filter((val) => {
                    if (searchTerm =="")
                    {
                        return val
                    }
                    else if (val.first_name.includes(searchTerm))
                    {
                        return val
                    }}).map((val,key)=>{
                    return (

                        <div className='App' key={key} > 
                        <p>
                            {
                                val.first_name
                            }
                        </p>
                        </div>

                    );
                })

            }




        </div>
    
);}
export default Search;


