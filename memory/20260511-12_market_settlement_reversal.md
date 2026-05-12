# Memory: 5/11-5/12 KOSPI Extreme Settlement Reversal

## Phenomenon
KOSPI surged to **7,999.67 intraday** on 5/12 (a +6.3% gain from 5/8 close of 7,522), almost touching **8,000**, then **collapsed to close at 7,740.80** — a **-258.87 point intraday reversal** from the high.

## Timeline
- 5/8 close: 7,522.29 → 5/11 closed Monday at 7,822.24 (+3.99% from 5/8)
- 5/12 10:10 KST (2차 수집): **7,947.82** (+6.00%, RSI 84.9) — first adjusted close available
- 5/12 12:12 KST (4차 수집 definitive settlement): **7,740.80** (-1.04%, RSI 90.7)
- The 4차 수집 definitive close showed a **-207 point (-2.6%) downward revision** from the 2차 수집

## Root Cause
Known yfinance pattern: **intraday adjusted close fluctuates wildly on extreme-momentum days**. The 2차 수집 (10:10 KST) captured the settlement close at a temporarily inflated value. The actual definitive settlement (12:12 KST) reflected the full day's collapse.

## Pattern to Remember
When KOSPI has an intraday high above 8,000 followed by a closing collapse:
1. 2차 수집 adjusted close can be **misleadingly high** (catches mid-settlement price)
2. 4차 수집 (12:00-12:30 KST) is the **reliable definitive settlement**
3. The **shooting star candle** (high open → higher high → close near low) is a bearish reversal signal

## Impact on Portfolio
All held positions (삼성부광 -19.32%, 나우로보틱스 -9.82%) worsened in the afternoon selloff. Cash position (₩4,349,470) is the correct stance.

## Relations
- See: wiki/stocks/삼성부광.md (RSI 21.3 심각 과매도)
- See: wiki/stocks/에이치엘사이언스.md (RSI 29.1 과매도)
- See: wiki/stocks/나우로보틱스.md (RSI 63.1, -6.93% 급락)
