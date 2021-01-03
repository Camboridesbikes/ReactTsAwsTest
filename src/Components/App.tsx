import React, { ReactElement } from 'react'
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'

interface Props {
    
}

const  App = ({}: Props): ReactElement => {
    
   return (
        <div className="App">
            <p>Hello World... With Auth</p> 
            <AmplifySignOut/>
        </div>
    );
}

export default withAuthenticator(App);