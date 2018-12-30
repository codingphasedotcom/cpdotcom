import React, { Component } from 'react'

class Adsense extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
<ins class="adsbygoogle"
 style="display:block"
 data-ad-client="ca-pub-1876888588409540"
 data-ad-slot="6100356041"
 data-ad-format="auto"
 data-full-width-responsive="true"></ins>
`,
        }}
      />
    )
  }
}

export default Adsense
