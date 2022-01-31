module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: env.GCS_BUCKETNAME,
        publicFiles: true,
        uniform: false,
        serviceAccount: {
          type: "service_account",
          project_id: env.GCS_PROJECT_ID,
          private_key_id: env.GCS_PRIVATE_KEY_ID,
          private_key: env.GCS_PRIVATE_KEY.replace(/\\n/g, "\n"), // KEY
          client_email: env.GCS_CLIENT_EMAIL,
          client_id: env.GCS_CLIENT_ID,
          auth_uri: env.GCS_AUTH_URI,
          token_uri: env.GCS_TOKEN_URI,
          auth_provider_x509_cert_url: env.GCS_AUTH_PROVIDER_X509_CERT_URL,
          client_x509_cert_url: env.GCS_CLIENT_X509_CERT_URL,
        }, // Add your service Account data
        baseUrl: env.GCS_BASEURL,
        basePath: "uploads",
      },
    },
  },
  // ***** Uncomment above code to use Google Cloud Storage ******
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
});
