import seoData from '../content/data/site-settings.json';

export const state = () => ({
  siteName: seoData.title,
  identity: {
    address: seoData.identity.address,
    city: seoData.identity.city,
    state: seoData.identity.state,
    zipCode: seoData.identity.zipCode,
  },
});
