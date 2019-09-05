import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angularx-social-login';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('791183774980-3sibll59d3a8c276nphi6lmc9nar178j.apps.googleusercontent.com')
    }
  ]);

  return config;
}
