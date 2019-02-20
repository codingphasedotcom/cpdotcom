import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="google-site-verification"
            content="fqqhVhBGGOZ23ZNu_arfM2BxICTxdWEwFzzsFsnlgAY"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <div
            className="google-load"
            dangerouslySetInnerHTML={{
              __html: `<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>`,
            }}
          />

          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <div
            dangerouslySetInnerHTML={{
              __html: `
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

`,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `
      <!-- Start of Async Drift Code -->
      <script>
      "use strict";

      !function() {
      var t = window.driftt = window.drift = window.driftt || [];
      if (!t.init) {
      if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
      t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
      t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
      }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
      }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
      };
      }
      }();
      drift.SNIPPET_VERSION = '0.3.1';
      drift.load('7xrggzxt4wz5');
      </script>
      <!-- End of Async Drift Code -->
      <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
      `,
            }}
          />
          <div
            className="fbpixel"
            dangerouslySetInnerHTML={{
              __html: `<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '174747862937299');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=174747862937299&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
`,
            }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
