import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const SitemapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-xxl);
`;

const SitemapSection = styled.div``;

const SectionTitle = styled.h2`
  font-size: var(--font-size-lg);
  color: var(--primary-dark);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 2px solid var(--primary-light);
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: var(--space-sm);
`;

const StyledLink = styled(Link)`
  color: var(--text-dark);
  text-decoration: none;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--primary-color);
  }
  
  @media (prefers-color-scheme: dark) {
    color: var(--text-light);
    
    &:hover {
      color: var(--primary-light);
    }
  }
`;

const SitemapPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Site Map</Title>
      </PageHeader>
      
      <SitemapGrid>
        <SitemapSection>
          <SectionTitle>Main Pages</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/">Home</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/about">About Us</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/gallery">Gallery</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/contact">Contact Us</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/faq">FAQs</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/sitemap">Site Map</StyledLink>
            </LinkItem>
          </LinkList>
        </SitemapSection>
        
        <SitemapSection>
          <SectionTitle>Furniture Categories</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/#bedroom">Bedroom</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#living-room">Living Room</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#dining-room">Dining Room</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#home-office">Home Office</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#outdoor">Outdoor</StyledLink>
            </LinkItem>
          </LinkList>
        </SitemapSection>
        
        <SitemapSection>
          <SectionTitle>Bedroom Furniture</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/#bedroom">Beds</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#bedroom">Mattresses</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#bedroom">Nightstands</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#bedroom">Dressers</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#bedroom">Bedroom Chairs</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#bedroom">Wardrobes</StyledLink>
            </LinkItem>
          </LinkList>
        </SitemapSection>
        
        <SitemapSection>
          <SectionTitle>Living Room Furniture</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/#living-room">Sofas</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#living-room">Coffee Tables</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#living-room">Accent Chairs</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#living-room">Entertainment Centers</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#living-room">Lighting</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#living-room">Area Rugs</StyledLink>
            </LinkItem>
          </LinkList>
        </SitemapSection>
        
        <SitemapSection>
          <SectionTitle>Dining Room Furniture</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/#dining-room">Dining Tables</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#dining-room">Dining Chairs</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#dining-room">Buffets & Cabinets</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#dining-room">Lighting</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#dining-room">Bar Carts</StyledLink>
            </LinkItem>
          </LinkList>
        </SitemapSection>
        
        <SitemapSection>
          <SectionTitle>Home Office Furniture</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/#home-office">Desks</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#home-office">Office Chairs</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#home-office">Bookshelves</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#home-office">Desk Lamps</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#home-office">Filing Cabinets</StyledLink>
            </LinkItem>
          </LinkList>
        </SitemapSection>
        
        <SitemapSection>
          <SectionTitle>Outdoor Furniture</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/#outdoor">Patio Sets</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#outdoor">Sectional Sofas</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#outdoor">Fire Pit Tables</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#outdoor">Outdoor Rugs</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#outdoor">Patio Umbrellas</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#outdoor">Planters</StyledLink>
            </LinkItem>
          </LinkList>
        </SitemapSection>
        
        <SitemapSection>
          <SectionTitle>Customer Service</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/faq">FAQs</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/contact">Contact Us</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/faq">Delivery Information</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/faq">Returns & Warranty</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/faq">Care & Maintenance</StyledLink>
            </LinkItem>
          </LinkList>
        </SitemapSection>
        
        <SitemapSection>
          <SectionTitle>Special Offers</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/#special-offers">Current Promotions</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#special-offers">Clearance Items</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#special-offers">New Customer Specials</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/#special-offers">Seasonal Sales</StyledLink>
            </LinkItem>
          </LinkList>
        </SitemapSection>
      </SitemapGrid>
    </PageContainer>
  )
}

export default SitemapPage