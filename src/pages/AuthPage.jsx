import React from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

function AuthPage(props) {
  return (
    <>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </>
  )
}

export default AuthPage