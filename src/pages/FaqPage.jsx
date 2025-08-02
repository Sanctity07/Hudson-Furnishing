import { useState } from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus, FaSearch } from 'react-icons/fa'

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

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto var(--space-xxl);
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--space-md) var(--space-xl);
  padding-left: calc(var(--space-xl) + 20px);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-md);
  box-shadow: var(--shadow-sm);
`;

const SearchIcon = styled.div`
  position: absolute;
  left: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
`;

const CategoryNav = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  background-color: ${props => props.$active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.$active ? 'var(--text-light)' : 'var(--text-dark)'};
  border: 1px solid ${props => props.$active ? 'var(--primary-color)' : 'var(--border-color)'};
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--primary-dark)' : 'var(--primary-light)'};
    color: var(--text-light);
    border-color: ${props => props.$active ? 'var(--primary-dark)' : 'var(--primary-light)'};
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${props => props.$active ? 'var(--text-light)' : 'var(--text-light)'};
  }
`;

const FaqSection = styled.div`
  margin-bottom: var(--space-xxl);
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-xl);
  color: var(--primary-dark);
  margin-bottom: var(--space-lg);
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const FaqItem = styled.div`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`;

const FaqQuestion = styled.div`
  padding: var(--space-md);
  background-color: var(--background-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--secondary-dark);
  }
`;

const Question = styled.h3`
  font-size: var(--font-size-md);
  font-weight: 600;
  flex: 1;
`;

const ToggleIcon = styled.div`
  color: var(--primary-color);
  font-size: 1rem;
`;

const FaqAnswer = styled.div`
  padding: ${props => props.$isOpen ? 'var(--space-md)' : '0 var(--space-md)'};
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height var(--transition-normal), padding var(--transition-normal);
`;

const Answer = styled.p`
  line-height: 1.6;
  color: var(--text-muted);
`;

const NotFound = styled.div`
  text-align: center;
  padding: var(--space-xxl) 0;
`;

const NotFoundTitle = styled.h2`
  font-size: var(--font-size-lg);
  color: var(--text-muted);
  margin-bottom: var(--space-md);
`;

const NotFoundText = styled.p`
  color: var(--text-muted);
  margin-bottom: var(--space-lg);
`;

const ContactLink = styled.a`
  color: var(--primary-color);
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [openItems, setOpenItems] = useState({})
  
  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
  
  const categories = [
    { id: 'all', name: 'All FAQs' },
    { id: 'orders', name: 'Orders & Delivery' },
    { id: 'products', name: 'Products' },
    { id: 'returns', name: 'Returns & Warranty' },
    { id: 'customization', name: 'Customization' },
    { id: 'care', name: 'Care & Maintenance' }
  ]
  
  const faqs = [
    {
      id: 'faq1',
      category: 'orders',
      question: 'How long will it take to receive my furniture?',
      answer: 'Delivery times vary based on product availability and your location. In-stock items typically deliver within 7-14 business days. Custom orders may take 6-10 weeks. Once your order is confirmed, you\'ll receive an estimated delivery timeframe, and we\'ll contact you to schedule a specific delivery date and time window.'
    },
    {
      id: 'faq2',
      category: 'orders',
      question: 'Do you offer assembly services?',
      answer: 'Yes, we offer white-glove delivery service which includes professional assembly and installation of your furniture. This service also includes removal of all packaging materials. There is an additional fee for this service, which varies based on the items purchased and your location.'
    },
    {
      id: 'faq3',
      category: 'products',
      question: 'Can I request fabric or leather samples before making a purchase?',
      answer: 'Absolutely! We encourage you to request fabric and leather samples to ensure you\'re completely satisfied with your selection. You can request up to 5 samples free of charge either in-store, by phone, or through our website. Samples are typically shipped within 2-3 business days.'
    },
    {
      id: 'faq4',
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of delivery for most in-stock items in original condition. Custom orders, clearance items, and mattresses have special return policies. A 15% restocking fee may apply. Return shipping is the responsibility of the customer unless the item arrived damaged or defective.'
    },
    {
      id: 'faq5',
      category: 'returns',
      question: 'How do I make a warranty claim?',
      answer: 'Our products carry manufacturer warranties ranging from 1-10 years, depending on the item. To make a warranty claim, please contact our customer service team with your order number, photos of the issue, and a description of the problem. We\'ll guide you through the warranty process and help resolve the issue promptly.'
    },
    {
      id: 'faq6',
      category: 'customization',
      question: 'Can I customize the dimensions of furniture pieces?',
      answer: 'Some of our furniture lines offer customization options for dimensions. This is particularly true for our upholstered items and some case goods. Custom dimensions may affect pricing and production time. Please speak with one of our design consultants for specific information about the pieces you\'re interested in.'
    },
    {
      id: 'faq7',
      category: 'customization',
      question: 'What customization options are available for upholstered furniture?',
      answer: 'As a Palliser custom order studio, we offer over 300 fabric and leather options for upholstered pieces. Beyond coverings, you can often customize seat depth, cushion firmness, leg style, and wood finish. Some collections also offer sectional configurations that can be arranged to fit your space perfectly.'
    },
    {
      id: 'faq8',
      category: 'care',
      question: 'How should I clean and maintain leather furniture?',
      answer: 'Leather furniture should be dusted weekly with a clean, dry cloth. For deeper cleaning, use a leather cleaner specifically designed for your type of leather (aniline, semi-aniline, or protected). Apply a leather conditioner 2-4 times per year to maintain suppleness. Keep leather furniture away from direct sunlight and heat sources to prevent drying and fading.'
    },
    {
      id: 'faq9',
      category: 'care',
      question: 'What\'s the best way to care for wood furniture?',
      answer: 'Dust wood furniture regularly with a soft, slightly damp cloth, wiping in the direction of the grain. Use coasters, placemats, and pads to protect surfaces from heat, moisture, and scratches. Clean spills immediately. Apply a quality wood polish every 3-6 months. Keep wood furniture away from direct sunlight and maintain consistent humidity levels to prevent warping.'
    },
    {
      id: 'faq10',
      category: 'orders',
      question: 'Do you ship internationally?',
      answer: 'Currently, we only ship within the continental United States. We do not offer international shipping or shipping to Alaska, Hawaii, or U.S. territories at this time. If you\'re an international customer interested in our products, please contact our customer service team to discuss potential third-party shipping options.'
    },
    {
      id: 'faq11',
      category: 'products',
      question: 'Are your furniture products eco-friendly?',
      answer: 'We\'re committed to offering environmentally responsible products. Many of our manufacturers use sustainable materials, water-based finishes, and responsibly sourced wood certified by the Forest Stewardship Council (FSC). We also offer several lines made from reclaimed or recycled materials. Look for our "Eco-Friendly" tag on product pages or ask our staff for more information about specific pieces.'
    },
    {
      id: 'faq12',
      category: 'products',
      question: 'Do you offer pet-friendly fabric options?',
      answer: 'Yes! We offer several performance fabrics that are ideal for homes with pets. These fabrics are designed to resist stains, repel pet hair, and withstand scratching. Options include Crypton, Revolution, Sunbrella, and our house performance fabrics. These materials maintain their appearance while being easy to clean. Our design consultants can help you select the best pet-friendly option for your lifestyle.'
    }
  ]
  
  // Filter FAQs based on category and search term
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = !searchTerm || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesSearch
  })
  
  // Group FAQs by category for display
  const faqsByCategory = {}
  
  if (activeCategory === 'all') {
    // Group by category if showing all
    filteredFaqs.forEach(faq => {
      if (!faqsByCategory[faq.category]) {
        faqsByCategory[faq.category] = []
      }
      faqsByCategory[faq.category].push(faq)
    })
  } else {
    // Just put them all under the active category
    faqsByCategory[activeCategory] = filteredFaqs
  }
  
  // Get category name by ID
  const getCategoryName = (id) => {
    const category = categories.find(cat => cat.id === id)
    return category ? category.name : id
  }
  
  return (
    <PageContainer>
      <PageHeader>
        <Title>Frequently Asked Questions</Title>
        <Subtitle>
          Find answers to common questions about our products, services, and policies.
        </Subtitle>
      </PageHeader>
      
      <SearchContainer>
        <SearchIcon><FaSearch /></SearchIcon>
        <SearchInput 
          type="text" 
          placeholder="Search for a question..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      
      <CategoryNav>
        {categories.map((category) => (
          <CategoryButton 
            key={category.id}
            $active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryNav>
      
      {Object.keys(faqsByCategory).length > 0 ? (
        Object.keys(faqsByCategory).map((category) => (
          <FaqSection key={category}>
            {activeCategory === 'all' && (
              <SectionTitle>{getCategoryName(category)}</SectionTitle>
            )}
            
            <FaqList>
              {faqsByCategory[category].map((faq) => (
                <FaqItem key={faq.id}>
                  <FaqQuestion onClick={() => toggleItem(faq.id)}>
                    <Question>{faq.question}</Question>
                    <ToggleIcon>
                      {openItems[faq.id] ? <FaMinus /> : <FaPlus />}
                    </ToggleIcon>
                  </FaqQuestion>
                  <FaqAnswer $isOpen={openItems[faq.id]}>
                    <Answer>{faq.answer}</Answer>
                  </FaqAnswer>
                </FaqItem>
              ))}
            </FaqList>
          </FaqSection>
        ))
      ) : (
        <NotFound>
          <NotFoundTitle>No results found</NotFoundTitle>
          <NotFoundText>
            We couldn't find any FAQs matching your search criteria. Please try another search term or category.
          </NotFoundText>
          <NotFoundText>
            If you can't find the answer you need, please <ContactLink href="/contact">contact us</ContactLink> and we'll be happy to help.
          </NotFoundText>
        </NotFound>
      )}
    </PageContainer>
  )
}

export default FaqPage