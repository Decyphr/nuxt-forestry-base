import seoData from '../content/data/site-settings.json';

export const state = () => ({
  identity: {
    siteName: seoData.title,
    phone: seoData.phone,
    address: seoData.address,
    city: seoData.city,
    state: seoData.state,
    zipCode: seoData.zipCode
  }
});
