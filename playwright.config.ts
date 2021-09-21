import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    use: {
        baseURL: 'http://uitestingplayground.com',
        headless: true,
        viewport: { width: 1920, height: 1080 },
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
};
export default config;
