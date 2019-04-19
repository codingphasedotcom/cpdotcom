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
            content="A6Y9tslLnrPsRV6IzWvvIKO9VWQ9JaZX-ETCoGoDE30"
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
<script>
function initiateCheckout(){
  fbq('track', 'InitiateCheckout', {
    value: 20,
    currency: 'USD',
  });
}

</script>
`,
            }}
          />

          <div
            className="sumo"
            dangerouslySetInnerHTML={{
              __html: `
              <script async data-uid="2f89e66125" src="https://f.convertkit.com/2f89e66125/84682d673d.js"></script>
`,
            }}
          />
          <div
            className="googletagmanager"
            dangerouslySetInnerHTML={{
              __html: `<!-- Global site tag (gtag.js) - Google Ads: 992381307 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-992381307"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-992381307');
</script>
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
