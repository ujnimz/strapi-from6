module.exports = {
  upload: {
    config: {
      provider: "strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: process.env.GCS_BUCKETNAME,
        publicFiles: true,
        uniform: false,
        serviceAccount: {
          type: "service_account",
          project_id: process.env.GCS_PROJECT_ID,
          private_key_id: process.env.GCS_PRIVATE_KEY_ID,
          private_key: process.env.GCS_PRIVATE_KEY.replace(/\\n/g, "\n"), // KEY
          client_email: process.env.GCS_CLIENT_EMAIL,
          client_id: process.env.GCS_CLIENT_ID,
          auth_uri: process.env.GCS_AUTH_URI,
          token_uri: process.env.GCS_TOKEN_URI,
          auth_provider_x509_cert_url:
            process.env.GCS_AUTH_PROVIDER_X509_CERT_URL,
          client_x509_cert_url: process.env.GCS_CLIENT_X509_CERT_URL,
        }, // Add your service Account data
        baseUrl: process.env.GCS_BASEURL,
        basePath: "uploads",
      },
    },
  },
};
