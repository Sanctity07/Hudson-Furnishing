import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa'
import { allProducts } from '../data/mockData'

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

const FilterContainer = styled.div`
  margin-bottom: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const SearchBar = styled.div`
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.div`
  flex: 1;
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--space-md) var(--space-md) var(--space-md) calc(var(--space-md) * 2.5);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  font-family: inherit;
  font-size: var(--font-size-md);
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  width: 150px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
`;

const CategoryTag = styled.button`
  background-color: ${props => props.$active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.$active ? 'var(--text-light)' : 'var(--text-dark)'};
  border: 1px solid ${props => props.$active ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: var(--border-radius-md);
  padding: var(--space-sm) var(--space-md);
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--primary-dark)' : 'var(--primary-light)'};
    color: var(--text-light);
    border-color: ${props => props.$active ? 'var(--primary-dark)' : 'var(--primary-light)'};
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${props => props.$active ? 'var(--text-light)' : 'var(--text-light)'};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-md);
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  cursor: pointer;
  height: ${props => props.$tall ? '600px' : '300px'};
  grid-column: ${props => props.$wide ? 'span 2' : 'span 1'};
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  @media (max-width: 768px) {
    height: 250px;
    grid-column: span 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
  
  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: var(--space-md);
  color: var(--text-light);
  opacity: 0;
  transition: opacity var(--transition-normal);
  
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const ImageTitle = styled.h3`
  font-size: var(--font-size-md);
  margin-bottom: var(--space-xs);
`;

const ImageCategory = styled.span`
  font-size: var(--font-size-sm);
  opacity: 0.8;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);
`;

const ModalContent = styled.div`
  background-color: var(--background-light);
  max-width: 1000px;
  width: 100%;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--background-dark);
  }
`;

const ModalImageContainer = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ModalDetails = styled.div`
  padding: var(--space-lg);
`;

const ModalTitle = styled.h2`
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-sm);
  color: var(--primary-dark);
`;

const ModalDescription = styled.p`
  color: var(--text-muted);
  margin-bottom: var(--space-md);
  line-height: 1.6;
`;

const ModalMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaLabel = styled.span`
  font-size: var(--font-size-sm);
  color: var(--text-muted);
`;

const MetaValue = styled.span`
  font-weight: 600;
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color var(--transition-normal);
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: var(--space-xxl);
  color: var(--text-muted);
`;

const GalleryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  
  // Get all unique categories
  const categories = ['all', ...new Set(allProducts.map(product => product.type))]
  
  // Process products for gallery
  const galleryItems = allProducts.map((product, index) => {
    // Create some visual variety by making some items larger
    const isTall = index % 5 === 0
    const isWide = index % 7 === 0
    
    return {
      ...product,
      isTall,
      isWide,
      displayImage: product.images ? product.images[0] : product.image
    }
  })
  
  // Filter gallery items
  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = activeCategory === 'all' || item.type === activeCategory
    
    return matchesSearch && matchesCategory
  })
  
  // Handle modal open
  const openModal = (item) => {
    setSelectedItem(item)
    document.body.style.overflow = 'hidden'
  }
  
  // Handle modal close
  const closeModal = () => {
    setSelectedItem(null)
    document.body.style.overflow = 'auto'
  }
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <PageContainer>
      <PageHeader>
        <Title>Furniture Gallery</Title>
        <Subtitle>
          Browse our collection of beautifully crafted furniture pieces to inspire your next home design project.
        </Subtitle>
      </PageHeader>
      
      <FilterContainer>
        <SearchBar>
          <SearchInput>
            <SearchIcon><FaSearch /></SearchIcon>
            <Input 
              type="text" 
              placeholder="Search gallery..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchInput>
          <FilterButton onClick={() => setShowFilters(!showFilters)}>
            <FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
          </FilterButton>
        </SearchBar>
        
        {showFilters && (
          <CategoriesContainer>
            {categories.map(category => (
              <CategoryTag 
                key={category} 
                $active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'All Categories' : category}
              </CategoryTag>
            ))}
          </CategoriesContainer>
        )}
      </FilterContainer>
      
      {filteredItems.length > 0 ? (
        <GalleryGrid>
          {filteredItems.map(item => (
            <GalleryItem 
              key={item.id} 
              $tall={item.isTall} 
              $wide={item.isWide}
              onClick={() => openModal(item)}
            >
              <GalleryImage src={item.displayImage} alt={item.name} />
              <ImageOverlay>
                <ImageTitle>{item.name}</ImageTitle>
                <ImageCategory>{item.type} - {item.brand}</ImageCategory>
              </ImageOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      ) : (
        <NoResults>
          <h2>No items found</h2>
          <p>Try adjusting your search criteria or browse all categories.</p>
        </NoResults>
      )}
      
      {selectedItem && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
            <ModalImageContainer>
              <ModalImage src={selectedItem.displayImage} alt={selectedItem.name} />
            </ModalImageContainer>
            <ModalDetails>
              <ModalTitle>{selectedItem.name}</ModalTitle>
              <ModalMeta>
                <MetaItem>
                  <MetaLabel>Category</MetaLabel>
                  <MetaValue>{selectedItem.type}</MetaValue>
                </MetaItem>
                <MetaItem>
                  <MetaLabel>Brand</MetaLabel>
                  <MetaValue>{selectedItem.brand}</MetaValue>
                </MetaItem>
                <MetaItem>
                  <MetaLabel>Material</MetaLabel>
                  <MetaValue>{selectedItem.material}</MetaValue>
                </MetaItem>
                <MetaItem>
                  <MetaLabel>Price</MetaLabel>
                  <MetaValue>${selectedItem.price.toFixed(2)}</MetaValue>
                </MetaItem>
              </ModalMeta>
              <ModalDescription>{selectedItem.description}</ModalDescription>
              
              <h3>Product Features</h3>
              <ul>
                {selectedItem.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </ModalDetails>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  )
}

export default GalleryPage