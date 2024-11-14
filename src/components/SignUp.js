import React, { useEffect, useState } from 'react';


const userCredentials = {
    userName: '',
    password : ''
}


export default function SignUp() {
const [userLoginCredentials, updateUserLoginCredentials] = useState({})


function handleCaptureData(eventObj){
const name  =eventObj.target.name;
const value = eventObj.target.value
    
updateUserLoginCredentials(previousStateValue=> ({

    ...previousStateValue, [name]: value
}))
}

function handleLogin(event){
    event.preventDefault();
console.log(userLoginCredentials, "userLoginCredentials")
}


function handleEditvalue(event) {
    updateUserLoginCredentials(previousStateValue=> ({

        ...previousStateValue, [name]: value
    }))
}
 
    return (
        <>
            <div class="custom-css">
                MobileNumber
                <input type="text" name='userName' onChange={handleCaptureData} />
                Password
                <input type="text" name="password" onChange={handleCaptureData} />







                <button onClick={handleLogin}  >Check here</button>


                <div>

                Hi Parveen
                {
                    userLoginCredentials.userName
                }
                </div>
            </div>
        </>
    )
}


// events


// onChange

// onClick


// 1 2 3 4 5 


// js varaibles


// able to store the data

// variables 


// const name = "steveJobs"


// Object


// const userCred = {
//     name:'steveJobs',
//     password:"universe"
// }

// const [name, updateName] = useState(userCred)


// const name = "steveJobs"

// function updateName(previousName){
// return previousName + "i have added some value"
// }







// // varibales 

// const userName = "chnadra";




// const [name, updateName] = useState(userName)






// useState()

// useEffect();

// useNavigate();


 
// // es6 feature destructinring


// const [userName, password]= ["spn","sharvani"]



// primitives  single value store cheyali 



// GET     URL   www.google.com

// POST    url   www.google.com, payload


// PUT   url   www.google.com, paloadId


// DELETE   url www.google.com, paloadId



// {
//     id:1
//     name:'shiva',
//     age:30,
//     location:hyd
// },
// {
//     id:2,
//     name:'sai',  // shankar
//     age:20,
//     location:"bagnakore"
// },
// {
//     id:3,
//     name:'dinesh',
//     age:23,
//     location:"Anywhere"
// }