# FlightWatcher
Type in a list of destinations you'd like to go to, the dates you'd like to go there and the maximum you'd like to pay. API will refresh twice a day and text you when there is an flight that meets your criteria. 

## Technology Used
- JavaScript
- React 
- Skyscanner Flight Search API
- Twilio SMS API

## How to use
1. Clone repository
2. Type `npm install` into console
3. Type `npm start` into console 

## User Stories
``` 
As a traveller on a budget, 
So I can set alerts, 
I'd like to chose my destinations, dates, the max price and my phone number.
```
- Setup a wizard with 6 steps
    - name
    - email
    - phone number
    - destinations
    - dates
    - max price 
- Create UI 
- Store information in an array of objects