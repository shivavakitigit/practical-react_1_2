import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { useNavigate } from 'react-router-dom';



// const onFinish = (values) => {

//   const navigate = useNavigate();
//   console.log('Success:', values);


//   if (values.username === "shiva") {
//    console.log('/signUp')
//    navigate('/signUp')
//   } else {
//     alert("hey sariga details neter cheyu")
//   }
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };





// const Login = () => (
// csoneo
//   return (

//     <>

//     <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Username"
//       name="username"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your username!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName="checked"
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>

//     </>
//   )

// );
// export default Login;



function Login() {
const [mobileNumber, udpateMobileNumber] = useState('')
  const navigate = useNavigate();


  function handleChange(event){
event.target.value

console.log(event.target.value)

udpateMobileNumber(event.target.value)



  }


  function handleLogin(){
    if(mobileNumber ==="shiva"){
      navigate('./cart')
    }else{
     navigate('./wishList')
    }
  }
  return (

    <>
      hi this iss login

      MobileNumber
      <input type='text' onChange={handleChange} />

      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login


// Routing one page to another for nvaigation Routing


// React Router Dom