import styled from 'styled-components'

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

const ContentSection = styled.section`
  margin-bottom: var(--space-xxl);
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-xl);
  color: var(--primary-dark);
  margin-bottom: var(--space-lg);
`;

const TwoColumnLayout = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    order: ${props => props.$reverse ? 2 : 1};
  }
`;

const ContentColumn = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    order: ${props => props.$reverse ? 1 : 2};
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
`;

const Text = styled.p`
  margin-bottom: var(--space-md);
  line-height: 1.8;
`;

const ValuesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: var(--space-lg) 0;
`;

const ValueItem = styled.li`
  display: flex;
  margin-bottom: var(--space-md);
`;

const ValueIcon = styled.div`
  background-color: var(--primary-light);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--space-md);
  flex-shrink: 0;
`;

const ValueContent = styled.div``;

const ValueTitle = styled.h3`
  font-size: var(--font-size-md);
  margin-bottom: var(--space-xs);
`;

const ValueDescription = styled.p`
  color: var(--text-muted);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-xl);
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: var(--space-md);
  border: 3px solid var(--primary-light);
`;

const MemberName = styled.h3`
  font-size: var(--font-size-md);
  margin-bottom: var(--space-xs);
`;

const MemberTitle = styled.p`
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: var(--space-sm);
`;

const MemberBio = styled.p`
  color: var(--text-muted);
  font-size: var(--font-size-sm);
`;

const AboutPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>About Hudson Furnishings</Title>
        <Subtitle>
          For over two decades, we've been helping customers transform their houses into beautiful homes with our carefully curated furniture collections.
        </Subtitle>
      </PageHeader>
      
      <ContentSection>
        <TwoColumnLayout>
          <ImageColumn>
            <AboutImage 
              src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg" 
              alt="Hudson Furnishings Showroom" 
            />
          </ImageColumn>
          <ContentColumn>
            <SectionTitle>Our Story</SectionTitle>
            <Text>
              Hudson Furnishings was founded in 2001 by interior designer Emma Hudson with a vision to create a furniture store that combines quality craftsmanship, beautiful design, and exceptional customer service.
            </Text>
            <Text>
              What began as a small boutique specializing in custom upholstery has grown into a comprehensive home furnishings destination. Today, we are proud to be the exclusive Palliser custom order studio in the region, offering an unmatched selection of fabrics and leathers to personalize your furniture.
            </Text>
            <Text>
              Our showroom features thoughtfully designed room settings that inspire and help you envision how our furniture can transform your own space. Our team of design consultants is dedicated to helping you create a home that reflects your personal style and meets your functional needs.
            </Text>
          </ContentColumn>
        </TwoColumnLayout>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>Our Values</SectionTitle>
        <ValuesList>
          <ValueItem>
            <ValueIcon>Q</ValueIcon>
            <ValueContent>
              <ValueTitle>Quality Craftsmanship</ValueTitle>
              <ValueDescription>
                We partner with skilled artisans and reputable manufacturers who share our commitment to quality, ensuring that every piece of furniture we sell is built to last.
              </ValueDescription>
            </ValueContent>
          </ValueItem>
          <ValueItem>
            <ValueIcon>C</ValueIcon>
            <ValueContent>
              <ValueTitle>Customer Satisfaction</ValueTitle>
              <ValueDescription>
                Your satisfaction is our priority. From your first visit to final delivery, we strive to exceed your expectations with attentive service and support.
              </ValueDescription>
            </ValueContent>
          </ValueItem>
          <ValueItem>
            <ValueIcon>S</ValueIcon>
            <ValueContent>
              <ValueTitle>Sustainable Practices</ValueTitle>
              <ValueDescription>
                We are committed to sustainable practices, working with manufacturers who use responsibly sourced materials and environmentally friendly processes.
              </ValueDescription>
            </ValueContent>
          </ValueItem>
          <ValueItem>
            <ValueIcon>D</ValueIcon>
            <ValueContent>
              <ValueTitle>Design Excellence</ValueTitle>
              <ValueDescription>
                We believe in the power of good design to enhance daily living. Our collections blend aesthetic appeal with practical functionality.
              </ValueDescription>
            </ValueContent>
          </ValueItem>
        </ValuesList>
      </ContentSection>
      
      <ContentSection>
        <TwoColumnLayout>
          <ContentColumn $reverse={true}>
            <SectionTitle>Our Approach</SectionTitle>
            <Text>
              At Hudson Furnishings, we understand that furniture is more than just functional objects—it's about creating spaces where memories are made, where you relax, entertain, and live your life.
            </Text>
            <Text>
              Our approach is centered around understanding your needs and preferences. We take the time to listen, offer expert advice when needed, and help you find or create pieces that will enhance your home for years to come.
            </Text>
            <Text>
              We believe in offering a diverse selection to suit different styles and budgets, from contemporary to traditional, without compromising on quality. Whether you're furnishing a single room or an entire home, we're here to make the process enjoyable and stress-free.
            </Text>
          </ContentColumn>
          <ImageColumn $reverse={true}>
            <AboutImage 
              src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg" 
              alt="Hudson Furnishings Design Consultation" 
            />
          </ImageColumn>
        </TwoColumnLayout>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>Meet Our Team</SectionTitle>
        <Text>
          Our dedicated team of design consultants, customer service specialists, and delivery professionals work together to ensure your Hudson Furnishings experience is exceptional from start to finish.
        </Text>
        
        <TeamGrid>
          <TeamMember>
            <MemberImage 
              src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg" 
              alt="Emma Hudson" 
            />
            <MemberName>Emma Hudson</MemberName>
            <MemberTitle>Founder & Creative Director</MemberTitle>
            <MemberBio>
              With over 25 years of interior design experience, Emma leads our creative vision and product curation.
            </MemberBio>
          </TeamMember>
          
          <TeamMember>
            <MemberImage 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
              alt="Michael Chen" 
            />
            <MemberName>Michael Chen</MemberName>
            <MemberTitle>Head of Design Consulting</MemberTitle>
            <MemberBio>
              Michael brings 15 years of expertise in space planning and furniture design to help clients create their ideal spaces.
            </MemberBio>
          </TeamMember>
          
          <TeamMember>
            <MemberImage 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
              alt="Sophia Rodriguez" 
            />
            <MemberName>Sophia Rodriguez</MemberName>
            <MemberTitle>Customer Experience Manager</MemberTitle>
            <MemberBio>
              Sophia ensures every customer interaction exceeds expectations, from showroom visits to post-purchase support.
            </MemberBio>
          </TeamMember>
          
          <TeamMember>
            <MemberImage 
              src="https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg" 
              alt="James Wilson" 
            />
            <MemberName>James Wilson</MemberName>
            <MemberTitle>Logistics & Delivery Specialist</MemberTitle>
            <MemberBio>
              James oversees our white-glove delivery service, ensuring your furniture arrives safely and is expertly installed.
            </MemberBio>
          </TeamMember>
        </TeamGrid>
      </ContentSection>
    </PageContainer>
  )
}

export default AboutPage