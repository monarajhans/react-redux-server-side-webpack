export default function Template(html, preloadedState){
  return `
  <!doctype html>
  <html>
    <head>
      <title>Redux Universal Example</title>
      <style type="text/css">"./assets/styles.scss"</style>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="./assets/client.js"></script>
    </body>
  </html>
  `}
