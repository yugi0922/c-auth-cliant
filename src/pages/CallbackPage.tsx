import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userManager } from '../UserManager';

const CallbackPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        userManager.signinRedirectCallback().then(() => {
            navigate('/home'); // ホームページにリダイレクト
        }).catch((e) => {
            console.error(e);
        });
    }, [navigate]);

    return <div>Loading...</div>;
};

export default CallbackPage;
