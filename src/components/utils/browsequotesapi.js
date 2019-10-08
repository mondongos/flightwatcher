export async function fetchSkyScanner(destination, origin, start, end) {

  try {
    const DATA = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/" + origin + "/" + destination + "/" + start + "?inboundpartialdate=" + end, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "23fa0048b7mshc82fdcf2cdd5ddap1899e2jsn43d812501195"
      }
    });

    const response = await DATA.json();
    return response
  } catch(err) { 
      return err 
    }
}
