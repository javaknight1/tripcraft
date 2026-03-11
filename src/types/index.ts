// === Enums & Literal Types ===

export type BudgetLevel = "backpacker" | "mid-range" | "comfortable" | "splurge";
export type TravelPace = "relaxed" | "balanced" | "packed";
export type GroupSize = "solo" | "couple" | "small-group" | "large-group";

// === Activity Cards (16 categories for onboarding + intake) ===

export type ActivityKey =
  | "museums"
  | "hiking"
  | "nightlife"
  | "beaches"
  | "food-tours"
  | "shopping"
  | "architecture"
  | "street-art"
  | "temples"
  | "markets"
  | "water-sports"
  | "wellness"
  | "photography"
  | "live-music"
  | "wildlife"
  | "adventure";

export interface ActivityCard {
  key: ActivityKey;
  label: string;
  emoji: string;
}

export const ACTIVITY_CARDS: ActivityCard[] = [
  { key: "museums", label: "Museums & Galleries", emoji: "🏛️" },
  { key: "hiking", label: "Hiking & Nature", emoji: "🥾" },
  { key: "nightlife", label: "Nightlife & Bars", emoji: "🍸" },
  { key: "beaches", label: "Beaches & Coast", emoji: "🏖️" },
  { key: "food-tours", label: "Food Tours", emoji: "🍜" },
  { key: "shopping", label: "Shopping", emoji: "🛍️" },
  { key: "architecture", label: "Architecture", emoji: "🏗️" },
  { key: "street-art", label: "Street Art", emoji: "🎨" },
  { key: "temples", label: "Temples & Shrines", emoji: "⛩️" },
  { key: "markets", label: "Markets & Bazaars", emoji: "🧺" },
  { key: "water-sports", label: "Water Sports", emoji: "🏄" },
  { key: "wellness", label: "Wellness & Spas", emoji: "💆" },
  { key: "photography", label: "Photography Spots", emoji: "📸" },
  { key: "live-music", label: "Live Music", emoji: "🎵" },
  { key: "wildlife", label: "Wildlife & Zoos", emoji: "🦁" },
  { key: "adventure", label: "Adventure Sports", emoji: "🪂" },
];

// === User Profile (maps to Supabase `profiles` table) ===

export interface UserProfile {
  id: string;
  activity_interests: ActivityKey[];
  budget_level: BudgetLevel | null;
  travel_pace: TravelPace | null;
  dietary_restrictions: string[];
  dietary_notes: string | null;
  onboarding_complete: boolean;
  tier: "free" | "pro" | "one-time";
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  subscription_status: "active" | "canceled" | "past_due" | null;
  generation_count: number;
  one_time_credits: number;
  created_at: string;
  updated_at: string;
}

// === Intake Form Types ===

export interface FlightInfo {
  flight_number: string | null;
  departure_time: string | null;
  arrival_time: string | null;
  airline: string | null;
}

export interface AccommodationInput {
  has_booked: boolean;
  name: string | null;
  address: string | null;
  budget_preference: BudgetLevel | null;
  style:
    | "hostel"
    | "budget-hotel"
    | "mid-range"
    | "boutique"
    | "luxury"
    | null;
}

export interface DestinationInput {
  city: string;
  country: string | null;
  arrival_date: string | null;
  departure_date: string | null;
  num_days: number | null;
  has_flights: "yes" | "no" | "deciding";
  outbound_flight: FlightInfo | null;
  return_flight: FlightInfo | null;
  accommodation: AccommodationInput;
}

export interface FixedEvent {
  name: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string | null;
  notes: string | null;
}

export interface TripPreferences {
  activity_interests: ActivityKey[];
  budget_level: BudgetLevel | null;
  travel_pace: TravelPace | null;
  dietary_restrictions: string[];
  dietary_notes: string | null;
  things_to_avoid: string | null;
  must_include: string | null;
  energy_notes: string | null;
  group_size: GroupSize | null;
}

export interface IntakeFormState {
  destinations: DestinationInput[];
  fixed_events: FixedEvent[];
  preferences: TripPreferences;
}

// === Calendar Block Types ===

export type BlockCategory =
  | "transport-walk"
  | "transport-transit"
  | "transport-taxi"
  | "transport-drive"
  | "transport-ferry"
  | "flight"
  | "restaurant"
  | "activity"
  | "accommodation"
  | "fixed-event"
  | "free-time"
  | "dead-time";

export interface TripBlock {
  id: string;
  trip_id: string;
  destination_id: string | null;
  day: number;
  start_time: string;
  end_time: string;
  category: BlockCategory;
  title: string;
  description: string | null;
  cost_local: number | null;
  currency: string | null;
  is_anchor: boolean;
  is_locked: boolean;
  affiliate_url: string | null;
  emoji: string | null;
  tip: string | null;
  rating: number | null;
  thumbs: "up" | "down" | null;
}

export interface BlockSuggestion {
  title: string;
  category: BlockCategory;
  description: string | null;
  cost_local: number | null;
  currency: string | null;
  duration_minutes: number;
  emoji: string | null;
}

export interface TripDay {
  day_number: number;
  date: string;
  label: string;
  blocks: TripBlock[];
  free_time_suggestions: BlockSuggestion[];
}

// === AI Generated Output (7 sections) ===

export interface WalkthroughDay {
  day_number: number;
  date: string;
  headline: string;
  narrative: string;
  anchor_callouts: AnchorCallout[];
}

export interface AnchorCallout {
  title: string;
  emoji: string;
  time_range: string;
  cost_estimate: string;
  tip: string;
}

export interface GeneratedSection02 {
  days: WalkthroughDay[];
}

export interface FoodItem {
  name: string;
  description: string;
  where_to_find: string;
  price_range: string;
}

export interface GeneratedSection03 {
  dishes: FoodItem[];
}

export interface DailyBudget {
  category: string;
  backpacker: string;
  mid_range: string;
  comfortable: string;
  splurge: string;
}

export interface GeneratedSection04 {
  cash_recommendation: string;
  atm_advice: string;
  card_acceptance: string;
  daily_budget_table: DailyBudget[];
  scam_warnings: string[];
}

export interface Phrase {
  phrase: string;
  phonetic: string;
  meaning: string;
}

export interface GeneratedSection05 {
  language: string;
  english_prevalence: string;
  script_overview: string | null;
  phrases: Phrase[];
  common_signage: string[];
}

export interface GeneratedSection06 {
  tipping_expected: string;
  tipping_offensive: string | null;
  dining_rules: string[];
  dress_codes: string[];
  photography_rules: string[];
  bargaining_norms: string | null;
  taboos: string[];
}

export interface GeneratedSection07 {
  sim_card: string;
  transport_card: string | null;
  power_adapter: string;
  visa_requirements: string;
  safety_tips: string[];
  emergency_numbers: EmergencyNumber[];
}

export interface EmergencyNumber {
  service: string;
  number: string;
}

export interface GeneratedTrip {
  section_01_grid: TripDay[];
  section_02_walkthrough: GeneratedSection02;
  section_03_food: GeneratedSection03;
  section_04_money: GeneratedSection04;
  section_05_language: GeneratedSection05;
  section_06_culture: GeneratedSection06;
  section_07_logistics: GeneratedSection07;
}

// === Supabase Row Types ===

export interface Trip {
  id: string;
  user_id: string;
  destinations: DestinationInput[];
  input_snapshot: IntakeFormState;
  output: GeneratedTrip;
  status: "draft" | "generating" | "complete";
  created_at: string;
  updated_at: string;
}

// === Block Color Map ===

export const BLOCK_COLOR: Record<BlockCategory, string> = {
  "transport-walk": "bg-block-yellow-walk",
  "transport-transit": "bg-block-yellow-transit",
  "transport-taxi": "bg-block-yellow-ride",
  "transport-drive": "bg-block-yellow-drive",
  "transport-ferry": "bg-block-yellow-ferry",
  flight: "bg-block-amber",
  restaurant: "bg-block-orange",
  activity: "bg-block-green",
  accommodation: "bg-block-teal",
  "fixed-event": "bg-block-blue",
  "free-time": "bg-block-purple",
  "dead-time": "bg-block-grey",
};
