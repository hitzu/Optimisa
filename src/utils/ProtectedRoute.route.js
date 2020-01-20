import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import SecureLS from "secure-ls";

const ProtectedRoute = ( {component : Component, ...rest} ) => {
	return (
		<Route {...rest} render = {
			(props) => {
				var ls = new SecureLS({encodingType: 'rabbit', isCompression: true, encryptionSecret: 'OpTimiSSa'});
				let data  = ls.get("metadata")				
				if (data) {
						return <Component {...props} />
				} else {
					return ( 
						<Redirect to = {
							{
								pathname : "/login",
								state : {
									from : props.location
								}
							}
						} />
					)
				}
			}
		}/>
	)
}

export default ProtectedRoute