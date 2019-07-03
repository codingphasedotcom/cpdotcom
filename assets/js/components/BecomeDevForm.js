import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Layout extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			emailAddress: '',
			couponActive: false,
			popupOpen: false
		};
	}
	componentDidMount = () => {};
	submitForm = event => {
		event.preventDefault();
		axios
			.post('https://app.convertkit.com/forms/884668/subscriptions', {
				first_name: this.state.firstName,
				email_address: this.state.emailAddress
			})
			.then(function(response) {
				window.location.href = '/leads/thank-you-can-you-become-a-dev/';
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	handleInputChange = event => {
		const name = event.target.name;
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState({ [name]: value });
	};
	render() {
		return (
			<div id="lead-free-download">
				<div className="jumbo">
					<div className="container">
						<div className="grid">
							<div className="image">
								<h3>Why Work At A Bullsh*t Job When There's Jobs Like This?</h3>
								<img src="/img/leads/openjobs.webp" />
								{/* <h3>Some of the companies that hired my students</h3>
                <div className="logos">
                  <div className="logo">
                    <img src={movableinkIMG} alt="" />
                  </div>
                  <div className="logo">
                    <img src={paypalIMG} alt="" />
                  </div>
                  <div className="logo">
                    <img src={universalIMG} alt="" />
                  </div>
                  <div className="logo">
                    <img src={timewarnerIMG} alt="" />
                  </div>
                  <div className="logo">
                    <img src={sonyIMG} alt="" />
                  </div>
                </div> */}
							</div>
							<div className="info">
								<h2>
									Do You Have What It Takes To Become A Developer? Let Me Prove
									It To You!
								</h2>
								<h3>
									The average web developer makes $84,000 in the United States
								</h3>
								<p>
									I'm going to give you a short course just to show you how easy
									it is to build your first website. This course you can also
									take it as a personal test to see if you are really interested
									in becoming a developer. I say this because I know people get
									excited when they see the high paying jobs 80k+ with no
									experience or degreee but can you really become a developer?
									Are you even interested in this type of work? Well this course
									will help you answer that.
								</p>
								<p>
									YOU MUST ENTER YOUR NAME AND A VALID EMAIL BECAUSE THAT'S
									WHERE I WILL SEND YOU THE LINK TO THE COURSE
								</p>
								<form
									action="https://app.convertkit.com/forms/884668/subscriptions"
									method="POST"
									onSubmit={this.submitForm}
								>
									<div className="form-group">
										<label htmlFor="firstName">Name</label>
										<input
											type="text"
											name="firstName"
											id="firstName"
											value={this.state.firstName}
											onChange={this.handleInputChange}
										/>
										<label htmlFor="email_address">Email</label>
										<input
											type="text"
											name="emailAddress"
											id="email_address"
											value={this.state.emailAddress}
											onChange={this.handleInputChange}
										/>
									</div>
									<button type="submit" className="button">
										send me free course
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="form-popup">
					<div className="popup-container">
						<form
							action="https://app.convertkit.com/forms/884668/subscriptions"
							className="seva-form formkit-form"
							method="post"
							data-sv-form="884668"
							data-uid="438d9d97c2"
							data-format="inline"
							data-version="5"
							min-width=""
						>
							<p>
								Enter a valid email because I will send you the course to your
								email
							</p>
							<input
								type="text"
								className="formkit-input"
								aria-label="First Name"
								name="fields[first_name]"
								placeholder="First Name"
							/>
							<input
								type="text"
								className="formkit-input"
								name="email_address"
								placeholder="Your email address"
								required=""
							/>
							<button type="submit">submit</button>
							<div className="policy">
								Privacy Policy: We hate SPAM and promise to keep your email
								address safe
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const app = document.getElementById('BecomeDevForm');

ReactDOM.render(<Layout />, app);
