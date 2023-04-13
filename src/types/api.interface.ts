export interface CatImage {
  id: string;
  width: number;
  height: number;
  url: string;
}

export interface CatWeight {
  imperial: string;
  metric: string;
}

export interface ICat {
  id: string;
  name: string;
  origin?: string;
  description?: string;
  temperament: string;
  image?: CatImage;
  life_span?: string;
  weight?: CatWeight;
  wikipedia_url?: string;
  adaptability?: number;
  affection_level?: number;
  alt_names?: string;
  cfa_url?: string;
  child_friendly?: number;
  country_code?: string;
  country_codes?: string;
  dog_friendly?: number;
  energy_level?: number;
  experimental?: number;
  grooming?: number;
  hairless?: number;
  health_issues?: number;
  hypoallergenic?: number;
  indoor?: number;
  intelligence?: number;
  lap?: number;
  natural?: number;
  rare?: number;
  reference_image_id: string;
  rex?: number;
  shedding_level?: number;
  short_legs?: number;
  social_needs?: number;
  stranger_friendly?: number;
  suppressed_tail?: number;
}

export interface CatBreed {
  weight: CatWeight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  cat_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  bidability: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}
