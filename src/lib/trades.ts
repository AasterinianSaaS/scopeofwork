import { TradeData } from '@/types'

export const trades: TradeData[] = [
  {
    name: 'Electrician',
    keywords: ['electrical', 'electric', 'wire', 'wiring', 'outlet', 'circuit', 'panel', 'breaker', 'lighting', 'light'],
    commonTasks: [
      'Remove existing electrical fixtures and components',
      'Install new electrical fixtures per manufacturer specifications',
      'Connect to existing electrical panel and circuits',
      'Test all circuits for proper operation and safety',
      'Install new wiring as required',
      'Coordinate inspections with local authority',
      'Label all new circuits at panel',
      'Install proper grounding as per code',
    ],
    commonExclusions: [
      'Panel upgrades or replacements',
      'Main service line work',
      'Trenching or underground conduit',
      'Low voltage systems (data, security, audio)',
      'Generator installation or hookup',
    ],
  },
  {
    name: 'Plumber',
    keywords: ['plumbing', 'pipe', 'pipes', 'drain', 'faucet', 'toilet', 'water', 'sewer', 'fixture', 'sink', 'shower', 'tub', 'water heater'],
    commonTasks: [
      'Remove and dispose of existing plumbing fixtures',
      'Install new fixtures per manufacturer specifications',
      'Connect to existing supply and waste lines',
      'Test for leaks and proper operation',
      'Verify proper drainage and venting',
      'Coordinate inspections as required',
      'Install shut-off valves where required',
      'Apply sealants and caulking as needed',
    ],
    commonExclusions: [
      'Main sewer line work',
      'Water heater replacement',
      'Well pump systems',
      'Septic system work',
      'Relocation of main supply or waste lines',
    ],
  },
  {
    name: 'HVAC Technician',
    keywords: ['hvac', 'heating', 'cooling', 'air conditioning', 'ac', 'furnace', 'heat pump', 'duct', 'ductwork', 'thermostat', 'ventilation'],
    commonTasks: [
      'Remove existing HVAC equipment',
      'Install new equipment per manufacturer specifications',
      'Connect to existing ductwork and electrical',
      'Charge refrigerant system as required',
      'Test system for proper operation',
      'Program thermostat and controls',
      'Verify airflow and temperature differential',
      'Coordinate inspections with local authority',
    ],
    commonExclusions: [
      'New ductwork installation or modification',
      'Electrical panel upgrades',
      'Gas line installation',
      'Attic or crawlspace structural work',
      'Roof penetrations and flashing',
    ],
  },
  {
    name: 'Handyman',
    keywords: ['handyman', 'general', 'repair', 'maintenance', 'fix', 'install', 'multi', 'odd job'],
    commonTasks: [
      'Complete specified repairs and installations',
      'Remove and dispose of old materials',
      'Install new materials as specified',
      'Test all work for proper function',
      'Clean work area upon completion',
      'Touch-up and finish as needed',
    ],
    commonExclusions: [
      'Licensed trade work (electrical, plumbing, HVAC)',
      'Structural modifications',
      'Roofing work',
      'Work requiring permits',
      'Appliance repair',
    ],
  },
  {
    name: 'Carpenter',
    keywords: ['carpenter', 'carpentry', 'wood', 'woodwork', 'framing', 'trim', 'cabinet', 'door', 'window', 'deck'],
    commonTasks: [
      'Remove existing materials and fixtures',
      'Install new materials per specifications',
      'Level and plumb all installations',
      'Secure with appropriate fasteners',
      'Fill holes and gaps as needed',
      'Sand and prep surfaces for finish',
      'Apply finish materials as specified',
      'Clean work area upon completion',
    ],
    commonExclusions: [
      'Electrical or plumbing modifications',
      'Structural engineering',
      'Foundation work',
      'Painting (unless specified)',
      'Flooring installation',
    ],
  },
  {
    name: 'Roofer',
    keywords: ['roofer', 'roofing', 'roof', 'shingle', 'shingles', 'gutter', 'flashing', 'leak'],
    commonTasks: [
      'Remove existing roofing materials',
      'Inspect decking and replace damaged areas',
      'Install underlayment and ice/water shield',
      'Install new roofing materials per manufacturer specs',
      'Install flashing at penetrations and transitions',
      'Install ridge vents and ventilation as needed',
      'Clean gutters and work area upon completion',
      'Haul away all debris',
    ],
    commonExclusions: [
      'Structural repairs to rafters or trusses',
      'Chimney rebuilding or tuckpointing',
      'Skylight replacement',
      'Gutter installation or replacement',
      'Attic insulation',
    ],
  },
  {
    name: 'Landscaper',
    keywords: ['landscaper', 'landscaping', 'lawn', 'garden', 'tree', 'shrub', 'irrigation', 'sprinkler', 'hardscape', 'patio'],
    commonTasks: [
      'Clear and prepare work area',
      'Remove existing vegetation as needed',
      'Grade and level surfaces',
      'Install new plantings per plan',
      'Install mulch and ground cover',
      'Set up irrigation as specified',
      'Clean up all debris',
      'Provide care instructions',
    ],
    commonExclusions: [
      'Tree removal over 6" diameter',
      'Retaining walls over 4 feet',
      'Electrical work for lighting',
      'Permit-required structures',
      'Underground utility location',
    ],
  },
  {
    name: 'Painter',
    keywords: ['painter', 'painting', 'paint', 'stain', 'finish', 'coat', 'interior', 'exterior', 'wall', 'ceiling'],
    commonTasks: [
      'Protect floors and furniture with drop cloths',
      'Prep surfaces: fill holes, sand, caulk',
      'Apply primer coat as needed',
      'Apply finish coats as specified',
      'Cut in edges and trim',
      'Remove all protection and debris',
      'Touch up as needed',
      'Clean all tools and equipment',
    ],
    commonExclusions: [
      'Drywall repair beyond small patches',
      'Lead paint abatement',
      'Exterior power washing',
      'Wallpaper removal',
      'Cabinet refinishing',
    ],
  },
  {
    name: 'General Contractor',
    keywords: ['general contractor', 'gc', 'contractor', 'remodel', 'renovation', 'construction', 'build'],
    commonTasks: [
      'Coordinate all trades and scheduling',
      'Obtain required permits',
      'Manage material procurement',
      'Supervise daily work activities',
      'Ensure code compliance',
      'Coordinate inspections',
      'Manage change orders',
      'Final walkthrough and punch list',
    ],
    commonExclusions: [
      'Design and engineering fees',
      'Permit fees (passed through)',
      'Unforeseen conditions',
      'Owner-furnished materials',
      'Work outside defined scope',
    ],
  },
  {
    name: 'Flooring Installer',
    keywords: ['flooring', 'floor', 'tile', 'hardwood', 'laminate', 'vinyl', 'carpet', 'lvp', 'lvt'],
    commonTasks: [
      'Remove existing flooring material',
      'Prep subfloor: level, clean, repair',
      'Install underlayment as required',
      'Install new flooring per manufacturer specs',
      'Install transitions and trim',
      'Seal and grout as required',
      'Clean installed surfaces',
      'Remove all debris and packaging',
    ],
    commonExclusions: [
      'Subfloor replacement',
      'Asbestos or hazmat removal',
      'Furniture moving',
      'Appliance disconnection',
      'Baseboard or trim painting',
    ],
  },
]

export function findTradeByInput(input: string): TradeData | undefined {
  const normalizedInput = input.toLowerCase()
  
  return trades.find(trade => 
    trade.name.toLowerCase() === normalizedInput ||
    trade.keywords.some(keyword => normalizedInput.includes(keyword))
  )
}

