import './App.css';
import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

function App() {
  const {
		register,
		handleSubmit,
		reset,
		isDirty,
		formState,
		formState: { errors, isSubmitSuccessful },
	} = useForm()

	const [showMessage, setShowMessage] = useState(false)

	const sendEmail = (data, e) => {
		console.log('hello', data)
		e.preventDefault()
		emailjs
			.sendForm(
				'service_4gzqcpr',
				'template_wqh1pfi',
				e.target,
				'user_RvBcfNskpg2k1v812rots'
			)
			.then(
				result => {
					console.log(result.text)
				},
				error => {
					console.log(error.text)
				}
			)
		e.target.reset()
	}

	useEffect(() => {
		if (formState.isDirty) {
			setShowMessage(false)
		}
		if (formState.isSubmitSuccessful) {
			setShowMessage(true)
			reset()
		}
	}, [formState, isSubmitSuccessful, isDirty, reset])
  return (
    <>
      <section className="showcase">
        <header>
          <h2 className="logo"><img src="/Cubicle-Logo.png" alt="" width='120' /></h2>
          <h2 className='intro'>A New Card Game By Underscore Games</h2>
          <h2 className="about">ABOUT</h2>
        </header>
        <video autoPlay loop muted>
          <source src='CBCL-Landing-Page.mp4' type="video/mp4" />
      </video>
        <div className="overlay"></div>
        <div className="text">
          <h2>CUBICLE </h2> 
          <h3>Coming June 2022</h3>
          <p>Join the Mailing list Today!</p>
          <Form onSubmit={handleSubmit(sendEmail)} autoComplete='off'>
					<Form.Group widths='equal' className='mt-40 mb-40'>
						<Form.Field>
							<label htmlFor='name' className='form-label'>
								Name
							</label>
							<input
								required
								type='text'
								name='name'
								className={`form-frame p-text lighter-color ${
									errors.name && 'form-frame-error'
								}`}
								{...register('name', { required: 'Name is required.' })}
							/>
							{errors.name && (
								<p className='form-error-text'>{errors.name.message}</p>
							)}
						</Form.Field>							
              <Form.Field>
							<label htmlFor='email' className='form-label'>
								E-mail
							</label>
							<input
								required
								type='email'
                  name='email'
                style={{ position: 'relative', right: '2px'}}
								className={`form-frame p-text lighter-color ${
									errors.email && 'form-frame-error'
								}`}
								{...register('email', {
									required: 'Email is required.',
									pattern: {
										value:
											/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: 'Please enter a valid email',
									},
								})}
							/>
							{errors.email && (
								<p className='form-error-text'>{errors.email.message}</p>
							)}
						</Form.Field>
            </Form.Group>
            <div>
						<Button
							type='submit'
							className='mb-40'
							style={{ width: '25%' }}>
							Submit
						</Button>
						<p className={showMessage ? 'center' : 'center hide'}>
							Thank you for signing up our Mailing list!
						</p>
            </div>
            </Form>
        </div>
        <ul className="social">
          <li><a href="/" target='_blank' rel='noreferrer'><img src="FB-Icon.png" alt="Cubicle Game" /></a></li>
          <li><a href="/" target='_blank' rel='noreferrer'><img src="IG-Logo.png" alt="Cubicle Game" /></a></li>
          <li><a href="/" target='_blank' rel='noreferrer'><img src="LinkedIn-Icon.png" alt="Cubicle Game" /></a></li>
        </ul>
      </section>
    </>
  );
}

export default App;
