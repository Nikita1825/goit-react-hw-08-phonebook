import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectaUthentificated } from 'redux/auth/authReduser';

const PrivateRote = ({ children, redirecTo = '/' }) => {
    const authentificated = useSelector(selectaUthentificated)

  return authentificated ? children: <Navigate to={redirecTo}/>
}
export default PrivateRote;