import React, { Component } from 'react';
// import $ from 'jquery'
import Typed from 'typed.js'
// import Tone from 'tone'


export default class LandingMessage extends Component {

  typedSentenceAnimation = () => {
     var typed = new Typed('.typed-text', {
       strings: ["sharing experiences", "lifting each other", "increasing love in the world"],
       stringsElement: null,
     		// typing speed
     		typeSpeed: 60,
     		// time before typing starts
     		startDelay: 1600,
     		// backspacing speed
     		backSpeed: 20,
     		// time before backspacing
     		backDelay: 900,
     		// loop
     		loop: false,
     		// false = infinite
     		loopCount: 5,
     		// show cursor
     		showCursor: false,
     		// character for cursor
     		cursorChar: "|",
     		// attribute to type (null == text)
     		attr: null,
     		// either html or text
     		contentType: 'html',
     		// call when done callback function
     		callback: function() {},
     		// starting callback function before each string
     		preStringTyped: function() {},
     		//callback for every typed string
     		onStringTyped: function() {},
     		// callback for reset
     		resetCallback: function() {}
     });
     return typed
  }


  // componentDidMount(){
  //   {this.typedSentenceAnimation()}
  // }


  render() {
    return (
      <div className="LandingMessage">
        <div className="landing-message">This website is under construction, but please do join us on slack.</div>
        <div className="typed-text"></div>
        <div className="slack-link"><a href="https://join.slack.com/t/waking-upworkspace/shared_invite/zt-izfp06jo-j0jDznPIrbUseT_RCyXn~Q">Join Our Slack Community</a></div>
      </div>
    )
  }

}
