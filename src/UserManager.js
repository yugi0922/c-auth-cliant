import { UserManager, WebStorageStateStore } from 'oidc-client';

export const userManager = new UserManager({
    authority: 'http://localhost:8000/',
    client_id: 'public-client',
    redirect_uri: 'http://localhost:3000/callback',
    response_type: 'code',
    scope: 'openid',
    userStore: new WebStorageStateStore({ store: window.localStorage })
});
