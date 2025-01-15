export const privacyQuestions = [
  {
    id: 'identifiable',
    text: 'Can the data directly identify an individual?',
    description: 'This includes names, social security numbers, or other unique identifiers.',
    examples: [
      'Insurance policy numbers',
      'Credit card information',
      'Financial account numbers',
      'Full name or username',
      'Social Security Number (SSN)',
      'Driver\'s license number',
      'Passport number',
      'Employee ID number',
      'Student ID number',
      'Professional license numbers'
    ]
  },
  {
    id: 'contactInfo',
    text: 'Does the data contain contact information?',
    description: 'Any information that can be used to contact an individual.',
    examples: [
      'Email address',
      'Phone number (mobile or landline)',
      'Physical address (home or work)',
      'Social media handles',
      'IP address',
      'Messaging app usernames',
      'Professional contact details'
    ]
  },
  {
    id: 'demographic',
    text: 'Does the data contain demographic information?',
    description: 'Personal characteristics or socioeconomic information.',
    examples: [
      'Age or date of birth',
      'Gender identity',
      'Income level or salary range',
      'Education level',
      'Marital status',
      'Employment status',
      'Nationality or citizenship'
    ]
  },
  {
    id: 'sensitive',
    text: 'Does the data contain sensitive personal information?',
    description: 'Information about health, biometric data, or other sensitive aspects.',
    examples: [
      'Race or ethnicity',
      'Religious beliefs or affiliations',
      'Membership of political associations',
      'Philosophical beliefs',
      'Membership of a professional or trade association',
      'Health records or medical history',
      'Biometric data (fingerprints, facial recognition)',
      'Genetic information',
      'Sexual orientation',
      'Political opinions',
      'Criminal records',
      'Mental health information'
    ]
  },
  {
    id: 'behavioral',
    text: 'Does the data contain behavioral or preference information?',
    description: 'Information about how individuals act or what they prefer.',
    examples: [
      'Browsing history',
      'Purchase history',
      'Location data or GPS tracks',
      'App usage patterns',
      'Search history',
      'Content preferences',
      'Device usage patterns',
      'Travel history',
      'Dietary preferences',
      'Entertainment choices'
    ]
  }
];