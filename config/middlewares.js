module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
  // {
  //   name: "strapi::security",
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         "connect-src": ["'self'", "https:"],
  //         "img-src": ["'self'", "data:", "blob:", "fromsix.imgix.net"],
  //         "media-src": ["'self'", "data:", "blob:", "fromsix.imgix.net"],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
];

// ***** Uncomment above code to use Google Cloud Storage ******
