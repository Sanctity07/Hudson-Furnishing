import { useState } from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-xxl);
`;

const Title = styled.h1`
  font-size: var(--font-size-xxl);
  color: var(--primary-dark);
  margin-bottom: var(--space-md);
`;

const Subtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xxl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled.div``;

const InfoCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
  padding: var(--space-xl);
  margin-bottom: var(--space-xl);
  box-shadow: var(--shadow-md);
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--secondary-dark);
  }
`;

const InfoTitle = styled.h2`
  font-size: var(--font-size-lg);
  color: var(--primary-dark);
  margin-bottom: var(--space-md);
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--space-md);
`;

const InfoIcon = styled.div`
  color: var(--primary-color);
  font-size: 1.25rem;
  margin-right: var(--space-md);
  margin-top: 4px;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.h3`
  font-size: var(--font-size-md);
  margin-bottom: var(--space-xs);
`;

const InfoText = styled.p`
  color: var(--text-muted);
  line-height: 1.6;
`;

const Map = styled.div`
  height: 300px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  margin-bottom: var(--space-xl);
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const FormTitle = styled.h2`
  font-size: var(--font-size-lg);
  color: var(--primary-dark);
  margin-bottom: var(--space-lg);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: var(--space-xs);
`;

const Input = styled.input`
  padding: var(--space-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  font-family: inherit;
  font-size: var(--font-size-md);
`;

const TextArea = styled.textarea`
  padding: var(--space-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  font-family: inherit;
  font-size: var(--font-size-md);
  min-height: 150px;
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  background-color: var(--primary-color);
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

const ThankYouMessage = styled.div`
  background-color: var(--success-color);
  color: white;
  padding: var(--space-md);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--space-lg);
`;

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setSubmitted(true)
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }
  
  return (
    <PageContainer>
      <PageHeader>
        <Title>Contact Us</Title>
        <Subtitle>
          We're here to help you with any questions about our products, services, or your recent purchase.
        </Subtitle>
      </PageHeader>
      
      <ContactGrid>
        <ContactInfo>
          <InfoCard>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoList>
              <InfoItem>
                <InfoIcon><FaEnvelope /></InfoIcon>
                <InfoContent>
                  <InfoLabel>Email</InfoLabel>
                  <InfoText>info@hudsonfurnishings.com</InfoText>
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoIcon><FaPhone /></InfoIcon>
                <InfoContent>
                  <InfoLabel>Phone</InfoLabel>
                  <InfoText>+234 9130492375</InfoText>
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoIcon><FaMapMarkerAlt /></InfoIcon>
                <InfoContent>
                  <InfoLabel>Address</InfoLabel>
                  <InfoText>
                    123 Furniture Lane<br />
                    Design District<br />
                    New York, NY 10001
                  </InfoText>
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoIcon><FaClock /></InfoIcon>
                <InfoContent>
                  <InfoLabel>Hours</InfoLabel>
                  <InfoText>
                    Monday - Friday: 10am - 8pm<br />
                    Saturday: 10am - 6pm<br />
                    Sunday: 12pm - 5pm
                  </InfoText>
                </InfoContent>
              </InfoItem>
            </InfoList>
          </InfoCard>
          
          <Map>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0059413!3d40.741940799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzMxLjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1601902834093!5m2!1sen!2sus" 
              title="Hudson Furnishings Location"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Map>
        </ContactInfo>
        
        <ContactForm>
          <FormTitle>Send Us a Message</FormTitle>
          {submitted && (
            <ThankYouMessage>
              Thank you for your message! We'll get back to you as soon as possible.
            </ThankYouMessage>
          )}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formState.phone}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formState.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Your Message</Label>
              <TextArea 
                id="message" 
                name="message" 
                value={formState.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </ContactForm>
      </ContactGrid>
    </PageContainer>
  )
}

export default ContactPage