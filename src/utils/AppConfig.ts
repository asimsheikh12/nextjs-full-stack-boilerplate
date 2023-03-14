export const AppConfig = {
  site_name: 'NextJS',
  locale: 'en',
  title: 'title',
  description: `description`,
  tokenKey: 'token',
  paths: {
    BASE: process.env.NEXT_PUBLIC_BASE_PATH!,
    WEBSITE_URL: process.env.NEXT_PUBLIC_BASE_PATH!,
  },
};
