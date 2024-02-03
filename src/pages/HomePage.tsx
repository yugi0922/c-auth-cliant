import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userManager } from '../UserManager';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [tokenValue, setTokenValue] = useState('');
    const [publicResource, setPublicResource] = useState('');

    const handleTokenButtonClick = async () => {
        try {
            const user = await userManager.getUser();
            console.log("User object:", user); // ユーザーオブジェクトのログ
            console.log("Access token exists:", user && user.access_token); // トークン存在確認ログ

            if (user && user.access_token) {
                console.log("Sending request with header: Authorization: Bearer " + user.access_token); // リクエストヘッダーログ
                const response = await axios.get('http://localhost:8000/private/resource', {
                    headers: { Authorization: `Bearer ${user.access_token}` }
                });
                setTokenValue(response.data);
                navigate('/display', { state: { tokenValue: response.data } });
            }
        } catch (error) {
            console.error('Error fetching private resource:', error);
        
            // AxiosError型であることをチェック
            if (axios.isAxiosError(error)) {
                // エラーレスポンスの詳細ログ（AxiosErrorの場合）
                console.error("Error response data:", error.response?.data);
                console.error("Error response status:", error.response?.status);
                console.error("Error response headers:", error.response?.headers);
            } else {
                // エラーがAxiosError型でない場合の処理
                console.error("An unexpected error occurred:", error);
            }
        }
        
    };
    // パブリックボタンのハンドラー
    const handlePublicButtonClick = async () => {
        try {
            const response = await axios.get('http://localhost:8000/public/resource');
            setPublicResource(response.data);
        } catch (error) {
            console.error('Error fetching public resource:', error);
            // エラーハンドリング（省略）
        }
    };
    return (
        <div>
            <h1>ホームページ</h1>
            <p>ようこそ、React OAuth 2.0 クライアントアプリケーションのホームページへ！</p>
            <button onClick={handleTokenButtonClick}>トークンボタン</button>
            <button onClick={handlePublicButtonClick}>パブリックボタン</button>
            {publicResource && <p>{publicResource}</p>}
        </div>
    );
};

export default HomePage;
