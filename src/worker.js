export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Force HTTPS redirect
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    
    // Serve static assets
    return env.ASSETS.fetch(request);
  }
};
