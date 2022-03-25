const withTM = require('next-transpile-modules')(['@splinetool/react-spline'])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
})
