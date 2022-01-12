module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4852fbd4bd3c2d3dda1b6cceecbdf3be'),
  },
});
