import { useRef } from 'react'
import Hero from '../components/home/Hero'
import CategorySection from '../components/home/CategorySection'
import SpecialOffers from '../components/home/SpecialOffers'
import { 
  bedroomProducts, 
  livingRoomProducts, 
  diningRoomProducts, 
  homeOfficeProducts, 
  outdoorProducts 
} from '../data/mockData'
import styled from 'styled-components'

const AboutSection = styled.section`
  padding: var(--space-xxl) 0;
  background-color: var(--primary-light);
  color: var(--text-dark);
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--primary-dark);
    color: var(--text-light);
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: flex;
  gap: var(--space-xxl);
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const AboutContent = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h2`
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-md);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

const AboutText = styled.p`
  margin-bottom: var(--space-md);
  line-height: 1.8;
`;

const AboutImage = styled.img`
  flex: 1;
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 1024px) {
    margin-top: var(--space-lg);
  }
`;

const HomePage = () => {
  const bedroomRef = useRef(null)
  const livingRoomRef = useRef(null)
  const diningRoomRef = useRef(null)
  const homeOfficeRef = useRef(null)
  const outdoorRef = useRef(null)
  
  return (
    <div>
      <Hero />
      
      <div id="about-section">
        <AboutSection>
          <AboutContainer>
            <AboutContent>
              <AboutTitle>About Hudson Furnishings</AboutTitle>
              <AboutText>
                Hudson Furnishings is a premium furniture shop that specializes in all home furniture needs. 
                Founded with a passion for quality craftsmanship and innovative design, we have established ourselves 
                as a leader in the furniture industry.
              </AboutText>
              <AboutText>
                We are the only Palliser custom order studio, offering more than 300 different fabrics or leathers 
                to meet all your furniture needs. Our goal is to take off some of the stress that comes with the 
                overwhelming amount of furniture in the market and provide you with a pleasant shopping experience.
              </AboutText>
              <AboutText>
                In our store, we make it easy for you to shop for your personal style by providing you an easy way to 
                navigate our showrooms where you will find everything you need to decorate & organize your home. 
                Inside our space, you'll find designer furniture that's made with heartfelt passion, as well as 
                immaculate attention to detail.
              </AboutText>
            </AboutContent>
            <AboutImage 
              src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg" 
              alt="Hudson Furnishings Showroom" 
            />
          </AboutContainer>
        </AboutSection>
      </div>
      
      <div id="featured-products" ref={bedroomRef}>
        <CategorySection 
          id="bedroom"
          title="Bedroom Furniture" 
          description="Transform your bedroom into a sanctuary of relaxation with our collection of stylish and comfortable bedroom furniture."
          products={bedroomProducts}
        />
      </div>
      
      <div ref={livingRoomRef}>
        <CategorySection 
          id="living-room"
          title="Living Room Furniture" 
          description="Create an inviting living space with our curated selection of living room furniture, from stylish sofas to elegant coffee tables."
          products={livingRoomProducts}
        />
      </div>
      
      <SpecialOffers />
      
      <div ref={diningRoomRef}>
        <CategorySection 
          id="dining-room"
          title="Dining Room Furniture" 
          description="Gather with family and friends around beautiful dining room furniture designed for both everyday meals and special occasions."
          products={diningRoomProducts}
        />
      </div>
      
      <div ref={homeOfficeRef}>
        <CategorySection 
          id="home-office"
          title="Home Office Furniture" 
          description="Create a productive workspace with our comfortable and functional home office furniture collection."
          products={homeOfficeProducts}
        />
      </div>
      
      <div ref={outdoorRef}>
        <CategorySection 
          id="outdoor"
          title="Outdoor Furniture" 
          description="Extend your living space to the outdoors with our durable and stylish outdoor furniture designed for comfort and longevity."
          products={outdoorProducts}
        />
      </div>
    </div>
  )
}

export default HomePage