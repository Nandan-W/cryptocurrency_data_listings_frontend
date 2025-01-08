export interface CryptoData {
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  volume_24h: number;
  price_change_24h: number;
}

export interface CryptoAnalysis {
  top_5_by_market_cap: CryptoData[];
  average_price_top_50: number;
  highest_24h_change: { name: string; change: number };
  lowest_24h_change: { name: string; change: number };
}