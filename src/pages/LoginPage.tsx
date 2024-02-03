// LoginPage.js
import React, { useEffect } from 'react';
import { userManager } from '../UserManager';

const LoginPage: React.FC = () => {
    useEffect(() => {
        userManager.signinRedirect();
    }, []);

    return <div>Redirecting...</div>;
};

export default LoginPage;
